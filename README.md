# @erag/phone-number-react

React hook for building country-aware phone number fields without writing phone parsing logic from scratch. It manages selected country state, local digit cleanup, max-length handling, calling codes, masks, and basic phone length validation for custom React forms.

## Key Features

- 🌍 Country-aware phone input state.
- 🔢 Local digit normalization and max-length truncation.
- ✅ Validation based on selected country phone lengths.
- 🎭 Mask pattern output without a masking dependency.
- 📞 Calling code output for the selected country.
- 🧩 Headless hook that works with any UI.
- 📦 Built-in country and dial-code metadata.
- 🛡️ Fully typed TypeScript support.

## Installation

```bash
npm install @erag/phone-number-react
```

## Usage

```tsx
import { usePhoneNumber } from '@erag/phone-number-react'

export function PhoneInput() {
    const phone = usePhoneNumber()

    return (
        <label>
            Phone number
            <select
                value={phone.selectedCountry?.isoCode2 ?? ''}
                onChange={(event) =>
                    phone.handleInput(
                        phone.countryOptions.find(
                            (country) => (country.isoCode2 ?? country.key) === event.target.value
                        ) ?? ''
                    )
                }
            >
                {phone.countryOptions.map((country) => (
                    <option key={country.key} value={country.isoCode2 ?? country.key}>
                        {country.isoCode2} - {country.name}
                    </option>
                ))}
            </select>
            <input
                value={phone.localPhone}
                onChange={phone.handleInput}
                placeholder="Enter phone number"
            />
            <small>{phone.callingCode}</small>
            <small>{phone.mask}</small>
            <small>{phone.isValid ? 'Valid phone number' : 'Enter a valid phone number'}</small>
        </label>
    )
}
```

Pass custom data when you want to override the bundled static data:

```tsx
import { usePhoneNumber, type PhoneNumberSharedData } from '@erag/phone-number-react'

const customData: PhoneNumberSharedData = {
    countries: [],
    dialCodes: []
}

const phone = usePhoneNumber(customData)
```

## API

`usePhoneNumber(data)` returns:

| Name              | Type                                         | Description                                                                                               |
| ----------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `selectedCountry` | `PhoneCountry \| undefined`                  | Selected country object.                                                                                  |
| `countryOptions`  | `PhoneCountry[]`                             | Country list for select components.                                                                       |
| `mask`            | `string`                                     | Mask pattern for the selected country.                                                                    |
| `handleInput`     | `(valueOrEvent: PhoneInputValue) => boolean` | Updates local digits or selected country, truncates by country length, and returns the validation result. |
| `localPhone`      | `string`                                     | Normalized local phone digits, truncated to the selected country's max length.                            |
| `callingCode`     | `string \| null`                             | Calling code for the selected country, for example `+91`.                                                 |
| `isValid`         | `boolean`                                    | Phone validation result for the selected country.                                                         |

For example, India (`IN`) allows 10 local digits. Extra digits are removed automatically while typing.

## Data Shape

```ts
type PhoneNumberSharedData = {
    countries?: PhoneCountry[]
    dialCodes?: PhoneDialCode[]
}
```

The package also exports the bundled data directly:

```ts
import { countries, dialCodes, phoneNumberData } from '@erag/phone-number-react'
```

Country records can use either snake_case or camelCase phone length fields:

```ts
{
  name: 'United States',
  key: 'us',
  isoCode2: 'US',
  countryCodes: ['1'],
  phone_lengths: [10],
}
```

## Scripts

- `npm run build`: build ESM output with Vite 8 and TypeScript declarations.
- `npm run type-check`: run TypeScript without emitting files.
- `npm run lint`: format source files with Prettier.
- `npm run lint:check`: verify source formatting.

## License

MIT
