// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureSphereContext } from "../../api/azureSphereContext.js";
import {
  DeviceGroup,
  DeviceGroupUpdate,
  ClaimDevicesRequest,
  CountDevicesResponse,
} from "../../models/models.js";
import {
  deviceGroupsGet,
  deviceGroupsCreateOrUpdate,
  deviceGroupsUpdate,
  deviceGroupsDelete,
  deviceGroupsListByProduct,
  deviceGroupsClaimDevices,
  deviceGroupsCountDevices,
} from "../../api/deviceGroups/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
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

/** Interface representing a DeviceGroups operations. */
export interface DeviceGroupsOperations {
  /** Get a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
  get: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    options?: DeviceGroupsGetOptionalParams,
  ) => Promise<DeviceGroup>;
  /** Create a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
  createOrUpdate: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    resource: DeviceGroup,
    options?: DeviceGroupsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<DeviceGroup>, DeviceGroup>;
  /** Update a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
  update: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    properties: DeviceGroupUpdate,
    options?: DeviceGroupsUpdateOptionalParams,
  ) => PollerLike<OperationState<DeviceGroup>, DeviceGroup>;
  /** Delete a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
  delete: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    options?: DeviceGroupsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List DeviceGroup resources by Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
  listByProduct: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: DeviceGroupsListByProductOptionalParams,
  ) => PagedAsyncIterableIterator<DeviceGroup>;
  /** Bulk claims the devices. Use '.unassigned' or '.default' for the device group and product names when bulk claiming devices to a catalog only. */
  claimDevices: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    claimDevicesRequest: ClaimDevicesRequest,
    options?: DeviceGroupsClaimDevicesOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Counts devices in device group. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
  countDevices: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    options?: DeviceGroupsCountDevicesOptionalParams,
  ) => Promise<CountDevicesResponse>;
}

export function getDeviceGroups(
  context: AzureSphereContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      options?: DeviceGroupsGetOptionalParams,
    ) =>
      deviceGroupsGet(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      resource: DeviceGroup,
      options?: DeviceGroupsCreateOrUpdateOptionalParams,
    ) =>
      deviceGroupsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      properties: DeviceGroupUpdate,
      options?: DeviceGroupsUpdateOptionalParams,
    ) =>
      deviceGroupsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      options?: DeviceGroupsDeleteOptionalParams,
    ) =>
      deviceGroupsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        options,
      ),
    listByProduct: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      options?: DeviceGroupsListByProductOptionalParams,
    ) =>
      deviceGroupsListByProduct(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        options,
      ),
    claimDevices: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      claimDevicesRequest: ClaimDevicesRequest,
      options?: DeviceGroupsClaimDevicesOptionalParams,
    ) =>
      deviceGroupsClaimDevices(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        claimDevicesRequest,
        options,
      ),
    countDevices: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      options?: DeviceGroupsCountDevicesOptionalParams,
    ) =>
      deviceGroupsCountDevices(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        options,
      ),
  };
}

export function getDeviceGroupsOperations(
  context: AzureSphereContext,
  subscriptionId: string,
): DeviceGroupsOperations {
  return {
    ...getDeviceGroups(context, subscriptionId),
  };
}
