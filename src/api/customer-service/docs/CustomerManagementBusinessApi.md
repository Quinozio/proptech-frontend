# CustomerManagementBusinessApi

All URIs are relative to *http://localhost:8081*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBusinessCustomer**](CustomerManagementBusinessApi.md#createbusinesscustomer) | **POST** /api/v1/customers/business | Create a new business customer |
| [**createContactForBusiness**](CustomerManagementBusinessApi.md#createcontactforbusiness) | **POST** /api/v1/customers/business/{businessId}/contacts | Create a new contact for a business customer |
| [**createOperationalAddressForBusiness**](CustomerManagementBusinessApi.md#createoperationaladdressforbusiness) | **POST** /api/v1/customers/business/{businessId}/operational-addresses | Create a new operational address for a business customer |
| [**deleteContact**](CustomerManagementBusinessApi.md#deletecontact) | **DELETE** /api/v1/customers/business/{businessId}/contacts/{contactId} | Delete a contact from a business customer |
| [**deleteOperationalAddress**](CustomerManagementBusinessApi.md#deleteoperationaladdress) | **DELETE** /api/v1/customers/business/{businessId}/operational-addresses/{operationalAddressId} | Delete an operational address from a business customer |
| [**getBusinessCustomerById**](CustomerManagementBusinessApi.md#getbusinesscustomerbyid) | **GET** /api/v1/customers/business/{id} | Get a business customer by ID |
| [**updateBusinessCustomer**](CustomerManagementBusinessApi.md#updatebusinesscustomer) | **PUT** /api/v1/customers/business/{id} | Update a business customer\&#39;s main details |



## createBusinessCustomer

> BusinessCustomerResponseDto createBusinessCustomer(businessCustomerCreateDto)

Create a new business customer

### Example

```ts
import {
  Configuration,
  CustomerManagementBusinessApi,
} from '';
import type { CreateBusinessCustomerRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomerManagementBusinessApi(config);

  const body = {
    // BusinessCustomerCreateDto
    businessCustomerCreateDto: ...,
  } satisfies CreateBusinessCustomerRequest;

  try {
    const data = await api.createBusinessCustomer(body);
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
| **businessCustomerCreateDto** | [BusinessCustomerCreateDto](BusinessCustomerCreateDto.md) |  | |

### Return type

[**BusinessCustomerResponseDto**](BusinessCustomerResponseDto.md)

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


## createContactForBusiness

> CustomerContactResponseDto createContactForBusiness(businessId, customerContactCreateDto)

Create a new contact for a business customer

### Example

```ts
import {
  Configuration,
  CustomerManagementBusinessApi,
} from '';
import type { CreateContactForBusinessRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomerManagementBusinessApi(config);

  const body = {
    // number
    businessId: 789,
    // CustomerContactCreateDto
    customerContactCreateDto: ...,
  } satisfies CreateContactForBusinessRequest;

  try {
    const data = await api.createContactForBusiness(body);
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
| **businessId** | `number` |  | [Defaults to `undefined`] |
| **customerContactCreateDto** | [CustomerContactCreateDto](CustomerContactCreateDto.md) |  | |

### Return type

[**CustomerContactResponseDto**](CustomerContactResponseDto.md)

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


## createOperationalAddressForBusiness

> AddressResponseDto createOperationalAddressForBusiness(businessId, addressCreateDto)

Create a new operational address for a business customer

### Example

```ts
import {
  Configuration,
  CustomerManagementBusinessApi,
} from '';
import type { CreateOperationalAddressForBusinessRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomerManagementBusinessApi(config);

  const body = {
    // number
    businessId: 789,
    // AddressCreateDto
    addressCreateDto: ...,
  } satisfies CreateOperationalAddressForBusinessRequest;

  try {
    const data = await api.createOperationalAddressForBusiness(body);
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
| **businessId** | `number` |  | [Defaults to `undefined`] |
| **addressCreateDto** | [AddressCreateDto](AddressCreateDto.md) |  | |

### Return type

[**AddressResponseDto**](AddressResponseDto.md)

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


## deleteContact

> deleteContact(businessId, contactId)

Delete a contact from a business customer

### Example

```ts
import {
  Configuration,
  CustomerManagementBusinessApi,
} from '';
import type { DeleteContactRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomerManagementBusinessApi(config);

  const body = {
    // number
    businessId: 789,
    // number
    contactId: 789,
  } satisfies DeleteContactRequest;

  try {
    const data = await api.deleteContact(body);
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
| **businessId** | `number` |  | [Defaults to `undefined`] |
| **contactId** | `number` |  | [Defaults to `undefined`] |

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


## deleteOperationalAddress

> deleteOperationalAddress(businessId, operationalAddressId)

Delete an operational address from a business customer

### Example

```ts
import {
  Configuration,
  CustomerManagementBusinessApi,
} from '';
import type { DeleteOperationalAddressRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomerManagementBusinessApi(config);

  const body = {
    // number
    businessId: 789,
    // number
    operationalAddressId: 789,
  } satisfies DeleteOperationalAddressRequest;

  try {
    const data = await api.deleteOperationalAddress(body);
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
| **businessId** | `number` |  | [Defaults to `undefined`] |
| **operationalAddressId** | `number` |  | [Defaults to `undefined`] |

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


## getBusinessCustomerById

> BusinessCustomerResponseDto getBusinessCustomerById(id)

Get a business customer by ID

### Example

```ts
import {
  Configuration,
  CustomerManagementBusinessApi,
} from '';
import type { GetBusinessCustomerByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomerManagementBusinessApi(config);

  const body = {
    // number
    id: 789,
  } satisfies GetBusinessCustomerByIdRequest;

  try {
    const data = await api.getBusinessCustomerById(body);
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

[**BusinessCustomerResponseDto**](BusinessCustomerResponseDto.md)

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


## updateBusinessCustomer

> BusinessCustomerResponseDto updateBusinessCustomer(id, businessCustomerUpdateDto)

Update a business customer\&#39;s main details

### Example

```ts
import {
  Configuration,
  CustomerManagementBusinessApi,
} from '';
import type { UpdateBusinessCustomerRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomerManagementBusinessApi(config);

  const body = {
    // number
    id: 789,
    // BusinessCustomerUpdateDto
    businessCustomerUpdateDto: ...,
  } satisfies UpdateBusinessCustomerRequest;

  try {
    const data = await api.updateBusinessCustomer(body);
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
| **businessCustomerUpdateDto** | [BusinessCustomerUpdateDto](BusinessCustomerUpdateDto.md) |  | |

### Return type

[**BusinessCustomerResponseDto**](BusinessCustomerResponseDto.md)

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

