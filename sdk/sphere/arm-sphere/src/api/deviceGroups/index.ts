// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  deviceGroupPropertiesSerializer,
  deviceGroupUpdatePropertiesSerializer,
  DeviceGroup,
  DeviceGroupUpdate,
  ClaimDevicesRequest,
  CountDevicesResponse,
  _DeviceGroupListResult,
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
  DeviceGroupsGetOptionalParams,
  DeviceGroupsCreateOrUpdateOptionalParams,
  DeviceGroupsUpdateOptionalParams,
  DeviceGroupsDeleteOptionalParams,
  DeviceGroupsListByProductOptionalParams,
  DeviceGroupsClaimDevicesOptionalParams,
  DeviceGroupsCountDevicesOptionalParams,
} from "../../models/options.js";

export function _deviceGroupsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeviceGroupsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _deviceGroupsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DeviceGroup> {
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
          description: result.body.properties?.["description"],
          osFeedType: result.body.properties?.["osFeedType"],
          updatePolicy: result.body.properties?.["updatePolicy"],
          allowCrashDumpsCollection:
            result.body.properties?.["allowCrashDumpsCollection"],
          regionalDataBoundary:
            result.body.properties?.["regionalDataBoundary"],
          hasDeployment: result.body.properties?.["hasDeployment"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export async function deviceGroupsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeviceGroupsGetOptionalParams = { requestOptions: {} },
): Promise<DeviceGroup> {
  const result = await _deviceGroupsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    productName,
    deviceGroupName,
    options,
  );
  return _deviceGroupsGetDeserialize(result);
}

export function _deviceGroupsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  resource: DeviceGroup,
  options: DeviceGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : deviceGroupPropertiesSerializer(resource.properties),
      },
    });
}

export async function _deviceGroupsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DeviceGroup> {
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
          description: result.body.properties?.["description"],
          osFeedType: result.body.properties?.["osFeedType"],
          updatePolicy: result.body.properties?.["updatePolicy"],
          allowCrashDumpsCollection:
            result.body.properties?.["allowCrashDumpsCollection"],
          regionalDataBoundary:
            result.body.properties?.["regionalDataBoundary"],
          hasDeployment: result.body.properties?.["hasDeployment"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function deviceGroupsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  resource: DeviceGroup,
  options: DeviceGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DeviceGroup>, DeviceGroup> {
  return getLongRunningPoller(
    context,
    _deviceGroupsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _deviceGroupsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          productName,
          deviceGroupName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<DeviceGroup>, DeviceGroup>;
}

export function _deviceGroupsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  properties: DeviceGroupUpdate,
  options: DeviceGroupsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? properties.properties
          : deviceGroupUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _deviceGroupsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DeviceGroup> {
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
          description: result.body.properties?.["description"],
          osFeedType: result.body.properties?.["osFeedType"],
          updatePolicy: result.body.properties?.["updatePolicy"],
          allowCrashDumpsCollection:
            result.body.properties?.["allowCrashDumpsCollection"],
          regionalDataBoundary:
            result.body.properties?.["regionalDataBoundary"],
          hasDeployment: result.body.properties?.["hasDeployment"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Update a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function deviceGroupsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  properties: DeviceGroupUpdate,
  options: DeviceGroupsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DeviceGroup>, DeviceGroup> {
  return getLongRunningPoller(
    context,
    _deviceGroupsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _deviceGroupsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          productName,
          deviceGroupName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<DeviceGroup>, DeviceGroup>;
}

export function _deviceGroupsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeviceGroupsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deviceGroupsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function deviceGroupsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeviceGroupsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _deviceGroupsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _deviceGroupsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          productName,
          deviceGroupName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _deviceGroupsListByProductSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: DeviceGroupsListByProductOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        $filter: options?.filter,
        $top: options?.top,
        $skip: options?.skip,
        $maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _deviceGroupsListByProductDeserialize(
  result: PathUncheckedResponse,
): Promise<_DeviceGroupListResult> {
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
              description: p.properties?.["description"],
              osFeedType: p.properties?.["osFeedType"],
              updatePolicy: p.properties?.["updatePolicy"],
              allowCrashDumpsCollection:
                p.properties?.["allowCrashDumpsCollection"],
              regionalDataBoundary: p.properties?.["regionalDataBoundary"],
              hasDeployment: p.properties?.["hasDeployment"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List DeviceGroup resources by Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export function deviceGroupsListByProduct(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: DeviceGroupsListByProductOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DeviceGroup> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _deviceGroupsListByProductSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        options,
      ),
    _deviceGroupsListByProductDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _deviceGroupsClaimDevicesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  claimDevicesRequest: ClaimDevicesRequest,
  options: DeviceGroupsClaimDevicesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/claimDevices",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { deviceIdentifiers: claimDevicesRequest["deviceIdentifiers"] },
    });
}

export async function _deviceGroupsClaimDevicesDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Bulk claims the devices. Use '.unassigned' or '.default' for the device group and product names when bulk claiming devices to a catalog only. */
export function deviceGroupsClaimDevices(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  claimDevicesRequest: ClaimDevicesRequest,
  options: DeviceGroupsClaimDevicesOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _deviceGroupsClaimDevicesDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _deviceGroupsClaimDevicesSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          productName,
          deviceGroupName,
          claimDevicesRequest,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _deviceGroupsCountDevicesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeviceGroupsCountDevicesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/countDevices",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _deviceGroupsCountDevicesDeserialize(
  result: PathUncheckedResponse,
): Promise<CountDevicesResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"],
  };
}

/** Counts devices in device group. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export async function deviceGroupsCountDevices(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeviceGroupsCountDevicesOptionalParams = { requestOptions: {} },
): Promise<CountDevicesResponse> {
  const result = await _deviceGroupsCountDevicesSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    productName,
    deviceGroupName,
    options,
  );
  return _deviceGroupsCountDevicesDeserialize(result);
}
