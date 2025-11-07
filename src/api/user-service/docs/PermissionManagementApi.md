# PermissionManagementApi

All URIs are relative to *http://localhost:8081*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAllPermissions**](PermissionManagementApi.md#getallpermissions) | **GET** /api/v1/permissions | Retrieve available permissions |



## getAllPermissions

> PageResponsePermissionResponseDto getAllPermissions(pageable)

Retrieve available permissions

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from '';
import type { GetAllPermissionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new PermissionManagementApi(config);

  const body = {
    // Pageable
    pageable: ...,
  } satisfies GetAllPermissionsRequest;

  try {
    const data = await api.getAllPermissions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pageable** | [](.md) |  | [Defaults to `undefined`] |

### Return type

[**PageResponsePermissionResponseDto**](PageResponsePermissionResponseDto.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

