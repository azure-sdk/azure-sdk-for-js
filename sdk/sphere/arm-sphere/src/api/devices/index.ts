// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  devicePropertiesSerializer,
  deviceUpdatePropertiesSerializer,
  Device,
  DeviceUpdate,
  GenerateCapabilityImageRequest,
  SignedCapabilityImageResponse,
  _DeviceListResult,
} from "../../models/models.js";
import { AzureSphereContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  DevicesGetOptionalParams,
  DevicesCreateOrUpdateOptionalParams,
  DevicesUpdateOptionalParams,
  DevicesDeleteOptionalParams,
  DevicesListByDeviceGroupOptionalParams,
  DevicesGenerateCapabilityImageOptionalParams,
} from "../../models/options.js";

export function _devicesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  options: DevicesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
      deviceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _devicesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Device> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          deviceId: result.body.properties?.["deviceId"],
          chipSku: result.body.properties?.["chipSku"],
          lastAvailableOsVersion:
            result.body.properties?.["lastAvailableOsVersion"],
          lastInstalledOsVersion:
            result.body.properties?.["lastInstalledOsVersion"],
          lastOsUpdateUtc:
            result.body.properties?.["lastOsUpdateUtc"] !== undefined
              ? new Date(result.body.properties?.["lastOsUpdateUtc"])
              : undefined,
          lastUpdateRequestUtc:
            result.body.properties?.["lastUpdateRequestUtc"] !== undefined
              ? new Date(result.body.properties?.["lastUpdateRequestUtc"])
              : undefined,
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a Device. Use '.unassigned' or '.default' for the device group and product names when a device does not belong to a device group and product. */
export async function devicesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  options: DevicesGetOptionalParams = { requestOptions: {} },
): Promise<Device> {
  const result = await _devicesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    productName,
    deviceGroupName,
    deviceName,
    options,
  );
  return _devicesGetDeserialize(result);
}

export function _devicesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  resource: Device,
  options: DevicesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
      deviceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : devicePropertiesSerializer(resource.properties),
      },
    });
}

export async function _devicesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Device> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          deviceId: result.body.properties?.["deviceId"],
          chipSku: result.body.properties?.["chipSku"],
          lastAvailableOsVersion:
            result.body.properties?.["lastAvailableOsVersion"],
          lastInstalledOsVersion:
            result.body.properties?.["lastInstalledOsVersion"],
          lastOsUpdateUtc:
            result.body.properties?.["lastOsUpdateUtc"] !== undefined
              ? new Date(result.body.properties?.["lastOsUpdateUtc"])
              : undefined,
          lastUpdateRequestUtc:
            result.body.properties?.["lastUpdateRequestUtc"] !== undefined
              ? new Date(result.body.properties?.["lastUpdateRequestUtc"])
              : undefined,
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a Device. Use '.unassigned' or '.default' for the device group and product names to claim a device to the catalog only. */
export function devicesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  resource: Device,
  options: DevicesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Device>, Device> {
  return getLongRunningPoller(
    context,
    _devicesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _devicesCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          productName,
          deviceGroupName,
          deviceName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<Device>, Device>;
}

export function _devicesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  properties: DeviceUpdate,
  options: DevicesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
      deviceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? properties.properties
          : deviceUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _devicesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Device> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          deviceId: result.body.properties?.["deviceId"],
          chipSku: result.body.properties?.["chipSku"],
          lastAvailableOsVersion:
            result.body.properties?.["lastAvailableOsVersion"],
          lastInstalledOsVersion:
            result.body.properties?.["lastInstalledOsVersion"],
          lastOsUpdateUtc:
            result.body.properties?.["lastOsUpdateUtc"] !== undefined
              ? new Date(result.body.properties?.["lastOsUpdateUtc"])
              : undefined,
          lastUpdateRequestUtc:
            result.body.properties?.["lastUpdateRequestUtc"] !== undefined
              ? new Date(result.body.properties?.["lastUpdateRequestUtc"])
              : undefined,
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Update a Device. Use '.unassigned' or '.default' for the device group and product names to move a device to the catalog level. */
export function devicesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  properties: DeviceUpdate,
  options: DevicesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Device>, Device> {
  return getLongRunningPoller(
    context,
    _devicesUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _devicesUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          productName,
          deviceGroupName,
          deviceName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<Device>, Device>;
}

export function _devicesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  options: DevicesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
      deviceName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _devicesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Device */
export function devicesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  options: DevicesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _devicesDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _devicesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          productName,
          deviceGroupName,
          deviceName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _devicesListByDeviceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DevicesListByDeviceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _devicesListByDeviceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_DeviceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              deviceId: p.properties?.["deviceId"],
              chipSku: p.properties?.["chipSku"],
              lastAvailableOsVersion: p.properties?.["lastAvailableOsVersion"],
              lastInstalledOsVersion: p.properties?.["lastInstalledOsVersion"],
              lastOsUpdateUtc:
                p.properties?.["lastOsUpdateUtc"] !== undefined
                  ? new Date(p.properties?.["lastOsUpdateUtc"])
                  : undefined,
              lastUpdateRequestUtc:
                p.properties?.["lastUpdateRequestUtc"] !== undefined
                  ? new Date(p.properties?.["lastUpdateRequestUtc"])
                  : undefined,
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Device resources by DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function devicesListByDeviceGroup(
  context: Client,
  subscriptionId: string,
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
        subscriptionId,
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

export function _devicesGenerateCapabilityImageSend(
  context: Client,
  subscriptionId: string,
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
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}/generateCapabilityImage",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
      deviceName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { capabilities: generateDeviceCapabilityRequest["capabilities"] },
    });
}

export async function _devicesGenerateCapabilityImageDeserialize(
  result: PathUncheckedResponse,
): Promise<SignedCapabilityImageResponse> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    image: result.body["image"],
  };
}

/** Generates the capability image for the device. Use '.unassigned' or '.default' for the device group and product names to generate the image for a device that does not belong to a specific device group and product. */
export function devicesGenerateCapabilityImage(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  generateDeviceCapabilityRequest: GenerateCapabilityImageRequest,
  options: DevicesGenerateCapabilityImageOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<SignedCapabilityImageResponse>,
  SignedCapabilityImageResponse
> {
  return getLongRunningPoller(
    context,
    _devicesGenerateCapabilityImageDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _devicesGenerateCapabilityImageSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          productName,
          deviceGroupName,
          deviceName,
          generateDeviceCapabilityRequest,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<SignedCapabilityImageResponse>,
    SignedCapabilityImageResponse
  >;
}
