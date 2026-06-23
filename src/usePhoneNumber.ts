import { useState } from 'react'
import { phoneNumberData } from './data/phone'
import {
  callingCodeForCountry,
  findPhoneCountry,
  localPhoneDigitsForCountry,
  phoneMaskForCountry,
  phoneLengthsForCountry
} from './types/helpers'
import type {
  PhoneCountry,
  PhoneInputValue,
  PhoneNumberHelpers,
  PhoneNumberOptions
} from './types/phone'

export function usePhoneNumber(options: PhoneNumberOptions = phoneNumberData): PhoneNumberHelpers {
  const countries = options.countries ?? phoneNumberData.countries ?? []
  const [selectedCountryKey, setSelectedCountryKey] = useState(options.countryCode ?? 'IN')
  const [localPhone, setLocalPhone] = useState(() =>
    localPhoneDigitsForCountry(countries, selectedCountryKey, options.phone ?? '')
  )
  const selectedPhoneLengths = phoneLengthsForCountry(countries, selectedCountryKey)
  const selectedCountry = findPhoneCountry(countries, selectedCountryKey)
  const callingCode = callingCodeForCountry(countries, selectedCountryKey)
  const mask = phoneMaskForCountry(countries, selectedCountryKey)
  const isValid = localPhone.length > 0 && selectedPhoneLengths.includes(localPhone.length)

  const updatePhone = (value: PhoneInputValue): boolean => {
    if (isPhoneCountry(value)) {
      updateCountry(value)

      return localPhone.length > 0 && selectedPhoneLengths.includes(localPhone.length)
    }

    const eventTarget = targetFromInput(value)
    const nextPhone = localPhoneDigitsForCountry(
      countries,
      selectedCountryKey,
      valueFromInput(value)
    )
    const nextIsValid = nextPhone.length > 0 && selectedPhoneLengths.includes(nextPhone.length)

    setLocalPhone(nextPhone)

    if (eventTarget) {
      eventTarget.value = nextPhone
    }

    return nextIsValid
  }

  const updateCountry = (value: PhoneInputValue): void => {
    const nextCountryKey = valueFromInput(value)

    setSelectedCountryKey(nextCountryKey)
    setLocalPhone((currentPhone) =>
      localPhoneDigitsForCountry(countries, nextCountryKey, currentPhone)
    )
  }

  return {
    countryOptions: countries,
    selectedCountry,
    mask,
    callingCode,
    localPhone,
    isValid,
    handleInput: updatePhone
  }
}

function valueFromInput(value: PhoneInputValue): string {
  if (typeof value === 'string') return value

  if (isPhoneCountry(value)) {
    return String(value.isoCode2 ?? value.iso2 ?? value.key ?? value.name)
  }

  return String(targetFromInput(value)?.value ?? '')
}

function targetFromInput(value: PhoneInputValue): HTMLInputElement | null {
  if (typeof value === 'string' || isPhoneCountry(value)) return null

  const target = value.target as HTMLInputElement | null | undefined

  return target ?? null
}

function isPhoneCountry(value: PhoneInputValue): value is PhoneCountry {
  return typeof value === 'object' && value !== null && ('key' in value || 'isoCode2' in value)
}
