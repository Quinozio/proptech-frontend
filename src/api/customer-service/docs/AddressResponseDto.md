
# AddressResponseDto


## Properties

Name | Type
------------ | -------------
`id` | number
`street` | string
`number` | string
`postalCode` | string
`city` | string
`province` | string
`country` | string

## Example

```typescript
import type { AddressResponseDto } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "street": null,
  "number": null,
  "postalCode": null,
  "city": null,
  "province": null,
  "country": null,
} satisfies AddressResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddressResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


