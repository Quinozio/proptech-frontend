
# IndividualCustomerUpdateDto


## Properties

Name | Type
------------ | -------------
`email` | string
`phoneNumber` | string
`firstName` | string
`lastName` | string
`birthDate` | Date
`birthPlace` | string
`nationality` | string
`billingAddress` | [AddressUpdateDto](AddressUpdateDto.md)

## Example

```typescript
import type { IndividualCustomerUpdateDto } from ''

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "phoneNumber": null,
  "firstName": null,
  "lastName": null,
  "birthDate": null,
  "birthPlace": null,
  "nationality": null,
  "billingAddress": null,
} satisfies IndividualCustomerUpdateDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IndividualCustomerUpdateDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


