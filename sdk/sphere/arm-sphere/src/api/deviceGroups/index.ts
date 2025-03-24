// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzureSphereContext as Client,
  DeviceGroupsClaimDevicesOptionalParams,
  DeviceGroupsCountDevicesOptionalParams,
  DeviceGroupsCreateOrUpdateOptionalParams,
  DeviceGroupsDeleteOptionalParams,
  DeviceGroupsGetOptionalParams,
  DeviceGroupsListByProductOptionalParams,
  DeviceGroupsUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  DeviceGroup,
  deviceGroupSerializer,
  deviceGroupDeserializer,
  DeviceGroupUpdate,
  deviceGroupUpdateSerializer,
  _DeviceGroupListResult,
  _deviceGroupListResultDeserializer,
  ClaimDevicesRequest,
  claimDevicesRequestSerializer,
  CountDevicesResponse,
  countDevicesResponseDeserializer,
} from "../../models/models.js";
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

export function _deviceGroupsCountDevicesSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeviceGroupsCountDevicesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/countDevices{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      deviceGroupName: deviceGroupName,
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

export async function _deviceGroupsCountDevicesDeserialize(
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

/** Counts devices in device group. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export async function deviceGroupsCountDevices(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeviceGroupsCountDevicesOptionalParams = { requestOptions: {} },
): Promise<CountDevicesResponse> {
  const result = await _deviceGroupsCountDevicesSend(
    context,
    resourceGroupName,
    catalogName,
    productName,
    deviceGroupName,
    options,
  );
  return _deviceGroupsCountDevicesDeserialize(result);
}

export function _deviceGroupsClaimDevicesSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  claimDevicesRequest: ClaimDevicesRequest,
  options: DeviceGroupsClaimDevicesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/claimDevices{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      deviceGroupName: deviceGroupName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: claimDevicesRequestSerializer(claimDevicesRequest),
  });
}

export async function _deviceGroupsClaimDevicesDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Bulk claims the devices. Use '.unassigned' or '.default' for the device group and product names when bulk claiming devices to a catalog only. */
export function deviceGroupsClaimDevices(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  claimDevicesRequest: ClaimDevicesRequest,
  options: DeviceGroupsClaimDevicesOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _deviceGroupsClaimDevicesDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deviceGroupsClaimDevicesSend(
        context,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        claimDevicesRequest,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _deviceGroupsListByProductSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: DeviceGroupsListByProductOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups{?api-version,$filter,$top,$skip,$maxpagesize}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      "api-version": context.apiVersion,
      $filter: options?.filter,
      $top: options?.top,
      $skip: options?.skip,
      $maxpagesize: options?.maxpagesize,
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

export async function _deviceGroupsListByProductDeserialize(
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

/** List DeviceGroup resources by Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export function deviceGroupsListByProduct(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: DeviceGroupsListByProductOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DeviceGroup> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _deviceGroupsListByProductSend(context, resourceGroupName, catalogName, productName, options),
    _deviceGroupsListByProductDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _deviceGroupsDeleteSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeviceGroupsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      deviceGroupName: deviceGroupName,
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

export async function _deviceGroupsDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function deviceGroupsDelete(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeviceGroupsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _deviceGroupsDeleteDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deviceGroupsDeleteSend(
        context,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _deviceGroupsUpdateSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  properties: DeviceGroupUpdate,
  options: DeviceGroupsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      deviceGroupName: deviceGroupName,
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
    body: deviceGroupUpdateSerializer(properties),
  });
}

export async function _deviceGroupsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DeviceGroup> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return deviceGroupDeserializer(result.body);
}

/** Update a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function deviceGroupsUpdate(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  properties: DeviceGroupUpdate,
  options: DeviceGroupsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DeviceGroup>, DeviceGroup> {
  return getLongRunningPoller(context, _deviceGroupsUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deviceGroupsUpdateSend(
        context,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        properties,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<DeviceGroup>, DeviceGroup>;
}

export function _deviceGroupsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  resource: DeviceGroup,
  options: DeviceGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      deviceGroupName: deviceGroupName,
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
    body: deviceGroupSerializer(resource),
  });
}

export async function _deviceGroupsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DeviceGroup> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return deviceGroupDeserializer(result.body);
}

/** Create a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function deviceGroupsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  resource: DeviceGroup,
  options: DeviceGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DeviceGroup>, DeviceGroup> {
  return getLongRunningPoller(context, _deviceGroupsCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deviceGroupsCreateOrUpdateSend(
        context,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<DeviceGroup>, DeviceGroup>;
}

export function _deviceGroupsGetSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeviceGroupsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      deviceGroupName: deviceGroupName,
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

export async function _deviceGroupsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DeviceGroup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return deviceGroupDeserializer(result.body);
}

/** Get a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export async function deviceGroupsGet(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeviceGroupsGetOptionalParams = { requestOptions: {} },
): Promise<DeviceGroup> {
  const result = await _deviceGroupsGetSend(
    context,
    resourceGroupName,
    catalogName,
    productName,
    deviceGroupName,
    options,
  );
  return _deviceGroupsGetDeserialize(result);
}
