
# PageMetadata


## Properties

Name | Type
------------ | -------------
`currentPage` | number
`size` | number
`totalElements` | number
`totalPages` | number
`first` | boolean
`last` | boolean

## Example

```typescript
import type { PageMetadata } from ''

// TODO: Update the object below with actual values
const example = {
  "currentPage": null,
  "size": null,
  "totalElements": null,
  "totalPages": null,
  "first": null,
  "last": null,
} satisfies PageMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PageMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


