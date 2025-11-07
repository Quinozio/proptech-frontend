
# IndividualCustomerResponseDto


## Properties

Name | Type
------------ | -------------
`id` | number
`email` | string
`phoneNumber` | string
`userId` | number
`customerType` | string
`firstName` | string
`lastName` | string
`fiscalCode` | string
`birthDate` | Date
`birthPlace` | string
`nationality` | string
`billingAddress` | [AddressResponseDto](AddressResponseDto.md)

## Example

```typescript
import type { IndividualCustomerResponseDto } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "email": null,
  "phoneNumber": null,
  "userId": null,
  "customerType": null,
  "firstName": null,
  "lastName": null,
  "fiscalCode": null,
  "birthDate": null,
  "birthPlace": null,
  "nationality": null,
  "billingAddress": null,
} satisfies IndividualCustomerResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IndividualCustomerResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


