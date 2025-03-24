// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzureSphereContext as Client,
  DevicesCreateOrUpdateOptionalParams,
  DevicesDeleteOptionalParams,
  DevicesGenerateCapabilityImageOptionalParams,
  DevicesGetOptionalParams,
  DevicesListByDeviceGroupOptionalParams,
  DevicesUpdateOptionalParams,
} from "../index.js";
import {
  Device,
  deviceSerializer,
  deviceDeserializer,
  errorResponseDeserializer,
  DeviceUpdate,
  deviceUpdateSerializer,
  _DeviceListResult,
  _deviceListResultDeserializer,
  GenerateCapabilityImageRequest,
  generateCapabilityImageRequestSerializer,
  SignedCapabilityImageResponse,
  signedCapabilityImageResponseDeserializer,
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

export function _devicesGenerateCapabilityImageSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  generateDeviceCapabilityRequest: GenerateCapabilityImageRequest,
  options: DevicesGenerateCapabilityImageOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}/generateCapabilityImage{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      deviceGroupName: deviceGroupName,
      deviceName: deviceName,
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
    body: generateCapabilityImageRequestSerializer(generateDeviceCapabilityRequest),
  });
}

export async function _devicesGenerateCapabilityImageDeserialize(
  result: PathUncheckedResponse,
): Promise<SignedCapabilityImageResponse> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return signedCapabilityImageResponseDeserializer(result.body);
}

/** Generates the capability image for the device. Use '.unassigned' or '.default' for the device group and product names to generate the image for a device that does not belong to a specific device group and product. */
export function devicesGenerateCapabilityImage(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  generateDeviceCapabilityRequest: GenerateCapabilityImageRequest,
  options: DevicesGenerateCapabilityImageOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<SignedCapabilityImageResponse>, SignedCapabilityImageResponse> {
  return getLongRunningPoller(context, _devicesGenerateCapabilityImageDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _devicesGenerateCapabilityImageSend(
        context,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deviceName,
        generateDeviceCapabilityRequest,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<SignedCapabilityImageResponse>, SignedCapabilityImageResponse>;
}

export function _devicesListByDeviceGroupSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DevicesListByDeviceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices{?api-version}",
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

export async function _devicesListByDeviceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_DeviceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _deviceListResultDeserializer(result.body);
}

/** List Device resources by DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function devicesListByDeviceGroup(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DevicesListByDeviceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Device> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _devicesListByDeviceGroupSend(
        context,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        options,
      ),
    _devicesListByDeviceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _devicesDeleteSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  options: DevicesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      deviceGroupName: deviceGroupName,
      deviceName: deviceName,
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

export async function _devicesDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a Device */
export function devicesDelete(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  options: DevicesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _devicesDeleteDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _devicesDeleteSend(
        context,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deviceName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _devicesUpdateSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  properties: DeviceUpdate,
  options: DevicesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      deviceGroupName: deviceGroupName,
      deviceName: deviceName,
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
    body: deviceUpdateSerializer(properties),
  });
}

export async function _devicesUpdateDeserialize(result: PathUncheckedResponse): Promise<Device> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return deviceDeserializer(result.body);
}

/** Update a Device. Use '.unassigned' or '.default' for the device group and product names to move a device to the catalog level. */
export function devicesUpdate(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  properties: DeviceUpdate,
  options: DevicesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Device>, Device> {
  return getLongRunningPoller(context, _devicesUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _devicesUpdateSend(
        context,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deviceName,
        properties,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<Device>, Device>;
}

export function _devicesCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  resource: Device,
  options: DevicesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      deviceGroupName: deviceGroupName,
      deviceName: deviceName,
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
    body: deviceSerializer(resource),
  });
}

export async function _devicesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Device> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return deviceDeserializer(result.body);
}

/** Create a Device. Use '.unassigned' or '.default' for the device group and product names to claim a device to the catalog only. */
export function devicesCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  resource: Device,
  options: DevicesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Device>, Device> {
  return getLongRunningPoller(context, _devicesCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _devicesCreateOrUpdateSend(
        context,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deviceName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<Device>, Device>;
}

export function _devicesGetSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  options: DevicesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      productName: productName,
      deviceGroupName: deviceGroupName,
      deviceName: deviceName,
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

export async function _devicesGetDeserialize(result: PathUncheckedResponse): Promise<Device> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return deviceDeserializer(result.body);
}

/** Get a Device. Use '.unassigned' or '.default' for the device group and product names when a device does not belong to a device group and product. */
export async function devicesGet(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  options: DevicesGetOptionalParams = { requestOptions: {} },
): Promise<Device> {
  const result = await _devicesGetSend(
    context,
    resourceGroupName,
    catalogName,
    productName,
    deviceGroupName,
    deviceName,
    options,
  );
  return _devicesGetDeserialize(result);
}
