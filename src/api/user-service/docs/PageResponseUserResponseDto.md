
# PageResponseUserResponseDto


## Properties

Name | Type
------------ | -------------
`content` | [Array&lt;UserResponseDto&gt;](UserResponseDto.md)
`page` | [PageMetadata](PageMetadata.md)

## Example

```typescript
import type { PageResponseUserResponseDto } from ''

// TODO: Update the object below with actual values
const example = {
  "content": null,
  "page": null,
} satisfies PageResponseUserResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PageResponseUserResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


