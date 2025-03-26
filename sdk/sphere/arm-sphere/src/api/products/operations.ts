// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureSphereContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  DeviceGroup,
  _DeviceGroupListResult,
  _deviceGroupListResultDeserializer,
  CountDevicesResponse,
  countDevicesResponseDeserializer,
  Product,
  productSerializer,
  productDeserializer,
  ProductUpdate,
  productUpdateSerializer,
  _ProductListResult,
  _productListResultDeserializer,
} from "../../models/models.js";
import {
  ProductsGenerateDefaultDeviceGroupsOptionalParams,
  ProductsCountDevicesOptionalParams,
  ProductsListByCatalogOptionalParams,
  ProductsDeleteOptionalParams,
  ProductsUpdateOptionalParams,
  ProductsCreateOrUpdateOptionalParams,
  ProductsGetOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _productsGenerateDefaultDeviceGroupsSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsGenerateDefaultDeviceGroupsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/generateDefaultDeviceGroups{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _productsGenerateDefaultDeviceGroupsDeserialize(
  result: PathUncheckedResponse,
): Promise<_DeviceGroupListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _deviceGroupListResultDeserializer(result.body);
}

/** Generates default device groups for the product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export function productsGenerateDefaultDeviceGroups(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsGenerateDefaultDeviceGroupsOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DeviceGroup> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _productsGenerateDefaultDeviceGroupsSend(
        context,
        resourceGroupName,
        catalogName,
        productName,
        options,
      ),
    _productsGenerateDefaultDeviceGroupsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _productsCountDevicesSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsCountDevicesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/countDevices{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _productsCountDevicesDeserialize(
  result: PathUncheckedResponse,
): Promise<CountDevicesResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return countDevicesResponseDeserializer(result.body);
}

/** Counts devices in product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export async function productsCountDevices(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsCountDevicesOptionalParams = { requestOptions: {} },
): Promise<CountDevicesResponse> {
  const result = await _productsCountDevicesSend(
    context,
    resourceGroupName,
    catalogName,
    productName,
    options,
  );
  return _productsCountDevicesDeserialize(result);
}

export function _productsListByCatalogSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  options: ProductsListByCatalogOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _productsListByCatalogDeserialize(
  result: PathUncheckedResponse,
): Promise<_ProductListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _productListResultDeserializer(result.body);
}

/** List Product resources by Catalog */
export function productsListByCatalog(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  options: ProductsListByCatalogOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Product> {
  return buildPagedAsyncIterator(
    context,
    () => _productsListByCatalogSend(context, resourceGroupName, catalogName, options),
    _productsListByCatalogDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _productsDeleteSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _productsDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name' */
export function productsDelete(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _productsDeleteDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _productsDeleteSend(context, resourceGroupName, catalogName, productName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _productsUpdateSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  properties: ProductUpdate,
  options: ProductsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: productUpdateSerializer(properties),
  });
}

export async function _productsUpdateDeserialize(result: PathUncheckedResponse): Promise<Product> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return productDeserializer(result.body);
}

/** Update a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export function productsUpdate(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  properties: ProductUpdate,
  options: ProductsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Product>, Product> {
  return getLongRunningPoller(context, _productsUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _productsUpdateSend(
        context,
        resourceGroupName,
        catalogName,
        productName,
        properties,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<Product>, Product>;
}

export function _productsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  resource: Product,
  options: ProductsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: productSerializer(resource),
  });
}

export async function _productsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Product> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return productDeserializer(result.body);
}

/** Create a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export function productsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  resource: Product,
  options: ProductsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Product>, Product> {
  return getLongRunningPoller(context, _productsCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _productsCreateOrUpdateSend(
        context,
        resourceGroupName,
        catalogName,
        productName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<Product>, Product>;
}

export function _productsGetSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _productsGetDeserialize(result: PathUncheckedResponse): Promise<Product> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return productDeserializer(result.body);
}

/** Get a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export async function productsGet(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsGetOptionalParams = { requestOptions: {} },
): Promise<Product> {
  const result = await _productsGetSend(
    context,
    resourceGroupName,
    catalogName,
    productName,
    options,
  );
  return _productsGetDeserialize(result);
}
