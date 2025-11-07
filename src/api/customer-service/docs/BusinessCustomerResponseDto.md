
# BusinessCustomerResponseDto


## Properties

Name | Type
------------ | -------------
`id` | number
`email` | string
`phoneNumber` | string
`customerType` | string
`companyName` | string
`vatNumber` | string
`fiscalCode` | string
`legalAddress` | [AddressResponseDto](AddressResponseDto.md)
`billingAddress` | [AddressResponseDto](AddressResponseDto.md)
`operationalAddresses` | [Set&lt;AddressResponseDto&gt;](AddressResponseDto.md)
`sdiCode` | string
`pecEmail` | string
`contacts` | [Set&lt;CustomerContactResponseDto&gt;](CustomerContactResponseDto.md)

## Example

```typescript
import type { BusinessCustomerResponseDto } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "email": null,
  "phoneNumber": null,
  "customerType": null,
  "companyName": null,
  "vatNumber": null,
  "fiscalCode": null,
  "legalAddress": null,
  "billingAddress": null,
  "operationalAddresses": null,
  "sdiCode": null,
  "pecEmail": null,
  "contacts": null,
} satisfies BusinessCustomerResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BusinessCustomerResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


