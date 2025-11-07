# CustomerManagementGeneralApi

All URIs are relative to *http://localhost:8081*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteCustomer**](CustomerManagementGeneralApi.md#deletecustomer) | **DELETE** /api/v1/customers/{id} | Delete any customer (private or business) |
| [**getCustomers**](CustomerManagementGeneralApi.md#getcustomers) | **GET** /api/v1/customers | Get all customers (paginated, basic info) |



## deleteCustomer

> deleteCustomer(id)

Delete any customer (private or business)

### Example

```ts
import {
  Configuration,
  CustomerManagementGeneralApi,
} from '';
import type { DeleteCustomerRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomerManagementGeneralApi(config);

  const body = {
    // number
    id: 789,
  } satisfies DeleteCustomerRequest;

  try {
    const data = await api.deleteCustomer(body);
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


## getCustomers

> PageResponseCustomerResponseDto getCustomers(pageable)

Get all customers (paginated, basic info)

### Example

```ts
import {
  Configuration,
  CustomerManagementGeneralApi,
} from '';
import type { GetCustomersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomerManagementGeneralApi(config);

  const body = {
    // Pageable
    pageable: ...,
  } satisfies GetCustomersRequest;

  try {
    const data = await api.getCustomers(body);
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

[**PageResponseCustomerResponseDto**](PageResponseCustomerResponseDto.md)

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

