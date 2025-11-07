# RoleManagementApi

All URIs are relative to *http://localhost:8081*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createRole**](RoleManagementApi.md#createrole) | **POST** /api/v1/roles | Create a role |
| [**deleteRole**](RoleManagementApi.md#deleterole) | **DELETE** /api/v1/roles/{id} | Delete a role |
| [**getRole**](RoleManagementApi.md#getrole) | **GET** /api/v1/roles/{id} | Get a role |
| [**getRoles**](RoleManagementApi.md#getroles) | **GET** /api/v1/roles | Get roles |
| [**updateRole**](RoleManagementApi.md#updaterole) | **PUT** /api/v1/roles/{id} | Update a role |



## createRole

> RoleResponseDto createRole(roleCreateDto)

Create a role

### Example

```ts
import {
  Configuration,
  RoleManagementApi,
} from '';
import type { CreateRoleRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RoleManagementApi(config);

  const body = {
    // RoleCreateDto
    roleCreateDto: ...,
  } satisfies CreateRoleRequest;

  try {
    const data = await api.createRole(body);
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
| **roleCreateDto** | [RoleCreateDto](RoleCreateDto.md) |  | |

### Return type

[**RoleResponseDto**](RoleResponseDto.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRole

> deleteRole(id)

Delete a role

### Example

```ts
import {
  Configuration,
  RoleManagementApi,
} from '';
import type { DeleteRoleRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RoleManagementApi(config);

  const body = {
    // number
    id: 789,
  } satisfies DeleteRoleRequest;

  try {
    const data = await api.deleteRole(body);
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
| **id** | `number` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRole

> RoleResponseDto getRole(id)

Get a role

### Example

```ts
import {
  Configuration,
  RoleManagementApi,
} from '';
import type { GetRoleRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RoleManagementApi(config);

  const body = {
    // number
    id: 789,
  } satisfies GetRoleRequest;

  try {
    const data = await api.getRole(body);
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
| **id** | `number` |  | [Defaults to `undefined`] |

### Return type

[**RoleResponseDto**](RoleResponseDto.md)

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


## getRoles

> PageResponseRoleResponseDto getRoles(pageable)

Get roles

### Example

```ts
import {
  Configuration,
  RoleManagementApi,
} from '';
import type { GetRolesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RoleManagementApi(config);

  const body = {
    // Pageable
    pageable: ...,
  } satisfies GetRolesRequest;

  try {
    const data = await api.getRoles(body);
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

[**PageResponseRoleResponseDto**](PageResponseRoleResponseDto.md)

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


## updateRole

> RoleResponseDto updateRole(id, roleUpdateDto)

Update a role

### Example

```ts
import {
  Configuration,
  RoleManagementApi,
} from '';
import type { UpdateRoleRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RoleManagementApi(config);

  const body = {
    // number
    id: 789,
    // RoleUpdateDto
    roleUpdateDto: ...,
  } satisfies UpdateRoleRequest;

  try {
    const data = await api.updateRole(body);
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
| **id** | `number` |  | [Defaults to `undefined`] |
| **roleUpdateDto** | [RoleUpdateDto](RoleUpdateDto.md) |  | |

### Return type

[**RoleResponseDto**](RoleResponseDto.md)

### Authorization

[oAuth2 accessCode](../README.md#oAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

