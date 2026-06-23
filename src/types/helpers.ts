import type { PhoneCountry, PhoneDialCode, PhoneNumberCountryKey } from './phone'
import { PHONE_METADATA } from './phoneMetadata'
import type { PhoneCountryMetadata } from './phoneMetadata'

export { PHONE_METADATA } from './phoneMetadata'

export function normalizeCountryKey(value: PhoneNumberCountryKey): string {
  return String(value ?? '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-+|-+$/g, '')
}

export function findPhoneCountry(
  countries: PhoneCountry[] = [],
  countryKey: PhoneNumberCountryKey
): PhoneCountry | undefined {
  const key = normalizeCountryKey(countryKey)

  return countries.find((country) =>
    [country.key, country.name, country.isoCode2, country.isoCode3, country.iso2, country.iso3]
      .filter(Boolean)
      .some((value) => normalizeCountryKey(value as PhoneNumberCountryKey) === key)
  )
}

export function callingCodeForCountry(
  countries: PhoneCountry[] = [],
  countryKey: PhoneNumberCountryKey
): string | null {
  const country = findPhoneCountry(countries, countryKey)
  const code = country?.countryCodes?.[0]

  return code ? `+${code}` : null
}

export function phoneLengthsForCountry(
  countries: PhoneCountry[] = [],
  countryKey: PhoneNumberCountryKey
): number[] {
  const country = findPhoneCountry(countries, countryKey)
  const configured = normalizeLengths(
    country?.phone_lengths ??
      country?.phoneLengths ??
      country?.phone_length ??
      country?.phoneLength ??
      country?.phone_max_length ??
      country?.phoneMaxLength
  )

  if (configured.length > 0) return configured

  const metadata = phoneMetadataForCountry(country)

  return metadata?.lengths ?? []
}

export function phoneMaxLengthForCountry(
  countries: PhoneCountry[] = [],
  countryKey: PhoneNumberCountryKey
): number | null {
  const lengths = phoneLengthsForCountry(countries, countryKey)
  const callingCode = callingCodeForCountry(countries, countryKey)

  if (lengths.length > 0) return Math.max(...lengths)

  if (callingCode) {
    return Math.max(1, 15 - callingCode.replace(/\D/g, '').length)
  }

  return null
}

export function localPhoneDigitsForCountry(
  countries: PhoneCountry[] = [],
  countryKey: PhoneNumberCountryKey,
  value: string
): string {
  const callingCode = callingCodeForCountry(countries, countryKey)
  const callingDigits = callingCode?.replace(/\D/g, '') ?? ''
  const digits = value.replace(/\D/g, '')
  const local =
    callingDigits && digits.startsWith(callingDigits) ? digits.slice(callingDigits.length) : digits
  const maxLength = phoneMaxLengthForCountry(countries, countryKey)

  return maxLength ? local.slice(0, maxLength) : local
}

export function findDialCode(
  dialCodes: PhoneDialCode[] = [],
  countryKey: PhoneNumberCountryKey
): PhoneDialCode | undefined {
  const key = normalizeCountryKey(countryKey)

  return dialCodes.find((dialCode) =>
    [dialCode.country, dialCode.country_code, dialCode.isoCode2, dialCode.isoCode3, dialCode.value]
      .filter(Boolean)
      .some((value) => normalizeCountryKey(value as PhoneNumberCountryKey) === key)
  )
}

export function maskPhoneForCountry(
  countries: PhoneCountry[] = [],
  countryKey: PhoneNumberCountryKey,
  value: string
): string {
  const callingCode = callingCodeForCountry(countries, countryKey)
  const country = findPhoneCountry(countries, countryKey)
  const local = localPhoneDigitsForCountry(countries, countryKey, value)

  if (!callingCode) return groupDigits(local)

  return `${callingCode} ${formatLocalPhone(country, local)}`.trim()
}

export function phoneMaskForCountry(
  countries: PhoneCountry[] = [],
  countryKey: PhoneNumberCountryKey
): string {
  const callingCode = callingCodeForCountry(countries, countryKey)
  const country = findPhoneCountry(countries, countryKey)
  const metadata = phoneMetadataForCountry(country)
  const iso2 = countryIso2(country)
  const maxLength = Math.max(...(metadata?.lengths ?? [10]))

  if (!callingCode) return '#'.repeat(maxLength)

  if ((iso2 === 'US' || iso2 === 'CA') && maxLength === 10) {
    return `${callingCode} (###) ###-####`
  }

  if (iso2 === 'IN' && maxLength === 10) {
    return `${callingCode} ##### #####`
  }

  return `${callingCode} ${maskGroups(metadata?.groups ?? [maxLength])}`
}

function groupDigits(value: string, size = 3): string {
  const pattern = new RegExp(`(\\d{${size}})(?=\\d)`, 'g')

  return value.replace(pattern, '$1 ').trim()
}

function formatLocalPhone(country: PhoneCountry | undefined, local: string): string {
  const metadata = phoneMetadataForCountry(country)
  const maxLength = Math.max(...(metadata?.lengths ?? [local.length]))

  if (maxLength === 10 && local.length === 10) {
    const iso2 = countryIso2(country)

    if (iso2 === 'US' || iso2 === 'CA') {
      return `(${local.slice(0, 3)}) ${local.slice(3, 6)}-${local.slice(6)}`
    }

    if (iso2 === 'IN') {
      return `${local.slice(0, 5)} ${local.slice(5)}`
    }
  }

  return groupByPattern(local, metadata?.groups ?? [])
}

function normalizeLengths(value: unknown): number[] {
  const values = Array.isArray(value) ? value : [value]

  return values
    .map((length) => Number(length))
    .filter((length) => Number.isInteger(length) && length > 0)
}

function phoneMetadataForCountry(country?: PhoneCountry): PhoneCountryMetadata | null {
  const iso2 = countryIso2(country)

  if (!iso2) return null

  return PHONE_METADATA[iso2] ?? null
}

function groupByPattern(value: string, groups: number[]): string {
  if (value === '') return ''

  if (groups.length === 0) return groupDigits(value)

  const parts = []
  let cursor = 0

  for (const group of groups) {
    if (cursor >= value.length) break

    parts.push(value.slice(cursor, cursor + group))
    cursor += group
  }

  if (cursor < value.length) {
    parts.push(value.slice(cursor))
  }

  return parts.filter(Boolean).join(' ')
}

function maskGroups(groups: number[]): string {
  return groups.map((group) => '#'.repeat(group)).join(' ')
}

function countryIso2(country?: PhoneCountry): string | null {
  const iso2 = String(country?.isoCode2 ?? country?.iso2 ?? '').toUpperCase()

  return /^[A-Z]{2}$/.test(iso2) ? iso2 : null
}
