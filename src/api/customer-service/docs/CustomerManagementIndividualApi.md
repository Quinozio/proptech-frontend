# CustomerManagementIndividualApi

All URIs are relative to *http://localhost:8081*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPrivateCustomer**](CustomerManagementIndividualApi.md#createprivatecustomer) | **POST** /api/v1/customers/individual | Create a new individual customer |
| [**getPrivateCustomerById**](CustomerManagementIndividualApi.md#getprivatecustomerbyid) | **GET** /api/v1/customers/individual/{id} | Get a individual customer by ID |
| [**updatePrivateCustomer**](CustomerManagementIndividualApi.md#updateprivatecustomer) | **PUT** /api/v1/customers/individual/{id} | Update a individual customer\&#39;s main details |



## createPrivateCustomer

> IndividualCustomerResponseDto createPrivateCustomer(individualCustomerCreateDto)

Create a new individual customer

### Example

```ts
import {
  Configuration,
  CustomerManagementIndividualApi,
} from '';
import type { CreatePrivateCustomerRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomerManagementIndividualApi(config);

  const body = {
    // IndividualCustomerCreateDto
    individualCustomerCreateDto: ...,
  } satisfies CreatePrivateCustomerRequest;

  try {
    const data = await api.createPrivateCustomer(body);
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
| **individualCustomerCreateDto** | [IndividualCustomerCreateDto](IndividualCustomerCreateDto.md) |  | |

### Return type

[**IndividualCustomerResponseDto**](IndividualCustomerResponseDto.md)

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


## getPrivateCustomerById

> IndividualCustomerResponseDto getPrivateCustomerById(id)

Get a individual customer by ID

### Example

```ts
import {
  Configuration,
  CustomerManagementIndividualApi,
} from '';
import type { GetPrivateCustomerByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomerManagementIndividualApi(config);

  const body = {
    // number
    id: 789,
  } satisfies GetPrivateCustomerByIdRequest;

  try {
    const data = await api.getPrivateCustomerById(body);
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

[**IndividualCustomerResponseDto**](IndividualCustomerResponseDto.md)

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


## updatePrivateCustomer

> IndividualCustomerResponseDto updatePrivateCustomer(id, individualCustomerUpdateDto)

Update a individual customer\&#39;s main details

### Example

```ts
import {
  Configuration,
  CustomerManagementIndividualApi,
} from '';
import type { UpdatePrivateCustomerRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomerManagementIndividualApi(config);

  const body = {
    // number
    id: 789,
    // IndividualCustomerUpdateDto
    individualCustomerUpdateDto: ...,
  } satisfies UpdatePrivateCustomerRequest;

  try {
    const data = await api.updatePrivateCustomer(body);
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
| **individualCustomerUpdateDto** | [IndividualCustomerUpdateDto](IndividualCustomerUpdateDto.md) |  | |

### Return type

[**IndividualCustomerResponseDto**](IndividualCustomerResponseDto.md)

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

