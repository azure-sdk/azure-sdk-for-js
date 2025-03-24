// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureSphereContext } from "../../api/azureSphereContext.js";
import {
  deviceGroupsCountDevices,
  deviceGroupsClaimDevices,
  deviceGroupsListByProduct,
  deviceGroupsDelete,
  deviceGroupsUpdate,
  deviceGroupsCreateOrUpdate,
  deviceGroupsGet,
} from "../../api/deviceGroups/index.js";
import {
  DeviceGroupsCountDevicesOptionalParams,
  DeviceGroupsClaimDevicesOptionalParams,
  DeviceGroupsListByProductOptionalParams,
  DeviceGroupsDeleteOptionalParams,
  DeviceGroupsUpdateOptionalParams,
  DeviceGroupsCreateOrUpdateOptionalParams,
  DeviceGroupsGetOptionalParams,
} from "../../api/options.js";
import {
  DeviceGroup,
  DeviceGroupUpdate,
  ClaimDevicesRequest,
  CountDevicesResponse,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a DeviceGroups operations. */
export interface DeviceGroupsOperations {
  /** Counts devices in device group. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
  countDevices: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    options?: DeviceGroupsCountDevicesOptionalParams,
  ) => Promise<CountDevicesResponse>;
  /** Bulk claims the devices. Use '.unassigned' or '.default' for the device group and product names when bulk claiming devices to a catalog only. */
  claimDevices: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    claimDevicesRequest: ClaimDevicesRequest,
    options?: DeviceGroupsClaimDevicesOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List DeviceGroup resources by Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
  listByProduct: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: DeviceGroupsListByProductOptionalParams,
  ) => PagedAsyncIterableIterator<DeviceGroup>;
  /** Delete a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
  delete: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    options?: DeviceGroupsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
  update: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    properties: DeviceGroupUpdate,
    options?: DeviceGroupsUpdateOptionalParams,
  ) => PollerLike<OperationState<DeviceGroup>, DeviceGroup>;
  /** Create a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
  createOrUpdate: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    resource: DeviceGroup,
    options?: DeviceGroupsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<DeviceGroup>, DeviceGroup>;
  /** Get a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
  get: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    options?: DeviceGroupsGetOptionalParams,
  ) => Promise<DeviceGroup>;
}

function _getDeviceGroups(context: AzureSphereContext) {
  return {
    countDevices: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      options?: DeviceGroupsCountDevicesOptionalParams,
    ) =>
      deviceGroupsCountDevices(
        context,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
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
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        claimDevicesRequest,
        options,
      ),
    listByProduct: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      options?: DeviceGroupsListByProductOptionalParams,
    ) => deviceGroupsListByProduct(context, resourceGroupName, catalogName, productName, options),
    delete: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      options?: DeviceGroupsDeleteOptionalParams,
    ) =>
      deviceGroupsDelete(
        context,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
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
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        properties,
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
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      options?: DeviceGroupsGetOptionalParams,
    ) =>
      deviceGroupsGet(
        context,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        options,
      ),
  };
}

export function _getDeviceGroupsOperations(context: AzureSphereContext): DeviceGroupsOperations {
  return {
    ..._getDeviceGroups(context),
  };
}
