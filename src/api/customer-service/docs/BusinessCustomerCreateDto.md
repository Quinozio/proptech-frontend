
# BusinessCustomerCreateDto


## Properties

Name | Type
------------ | -------------
`email` | string
`phoneNumber` | string
`companyName` | string
`vatNumber` | string
`fiscalCode` | string
`legalAddress` | [AddressCreateDto](AddressCreateDto.md)
`billingAddress` | [AddressCreateDto](AddressCreateDto.md)
`sdiCode` | string
`pecEmail` | string

## Example

```typescript
import type { BusinessCustomerCreateDto } from ''

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "phoneNumber": null,
  "companyName": null,
  "vatNumber": null,
  "fiscalCode": null,
  "legalAddress": null,
  "billingAddress": null,
  "sdiCode": null,
  "pecEmail": null,
} satisfies BusinessCustomerCreateDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BusinessCustomerCreateDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


