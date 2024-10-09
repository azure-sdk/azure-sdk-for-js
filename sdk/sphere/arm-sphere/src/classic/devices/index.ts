// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureSphereContext } from "../../api/azureSphereContext.js";
import {
  Device,
  DeviceUpdate,
  GenerateCapabilityImageRequest,
  SignedCapabilityImageResponse,
} from "../../models/models.js";
import {
  devicesGet,
  devicesCreateOrUpdate,
  devicesUpdate,
  devicesDelete,
  devicesListByDeviceGroup,
  devicesGenerateCapabilityImage,
} from "../../api/devices/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  DevicesGetOptionalParams,
  DevicesCreateOrUpdateOptionalParams,
  DevicesUpdateOptionalParams,
  DevicesDeleteOptionalParams,
  DevicesListByDeviceGroupOptionalParams,
  DevicesGenerateCapabilityImageOptionalParams,
} from "../../models/options.js";

/** Interface representing a Devices operations. */
export interface DevicesOperations {
  /** Get a Device. Use '.unassigned' or '.default' for the device group and product names when a device does not belong to a device group and product. */
  get: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    deviceName: string,
    options?: DevicesGetOptionalParams,
  ) => Promise<Device>;
  /** Create a Device. Use '.unassigned' or '.default' for the device group and product names to claim a device to the catalog only. */
  createOrUpdate: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    deviceName: string,
    resource: Device,
    options?: DevicesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Device>, Device>;
  /** Update a Device. Use '.unassigned' or '.default' for the device group and product names to move a device to the catalog level. */
  update: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    deviceName: string,
    properties: DeviceUpdate,
    options?: DevicesUpdateOptionalParams,
  ) => PollerLike<OperationState<Device>, Device>;
  /** Delete a Device */
  delete: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    deviceName: string,
    options?: DevicesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List Device resources by DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
  listByDeviceGroup: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    options?: DevicesListByDeviceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Device>;
  /** Generates the capability image for the device. Use '.unassigned' or '.default' for the device group and product names to generate the image for a device that does not belong to a specific device group and product. */
  generateCapabilityImage: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    deviceName: string,
    generateDeviceCapabilityRequest: GenerateCapabilityImageRequest,
    options?: DevicesGenerateCapabilityImageOptionalParams,
  ) => PollerLike<
    OperationState<SignedCapabilityImageResponse>,
    SignedCapabilityImageResponse
  >;
}

export function getDevices(
  context: AzureSphereContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      deviceName: string,
      options?: DevicesGetOptionalParams,
    ) =>
      devicesGet(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deviceName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      deviceName: string,
      resource: Device,
      options?: DevicesCreateOrUpdateOptionalParams,
    ) =>
      devicesCreateOrUpdate(
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
    update: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      deviceName: string,
      properties: DeviceUpdate,
      options?: DevicesUpdateOptionalParams,
    ) =>
      devicesUpdate(
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
    delete: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      deviceName: string,
      options?: DevicesDeleteOptionalParams,
    ) =>
      devicesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deviceName,
        options,
      ),
    listByDeviceGroup: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      options?: DevicesListByDeviceGroupOptionalParams,
    ) =>
      devicesListByDeviceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        options,
      ),
    generateCapabilityImage: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      deviceName: string,
      generateDeviceCapabilityRequest: GenerateCapabilityImageRequest,
      options?: DevicesGenerateCapabilityImageOptionalParams,
    ) =>
      devicesGenerateCapabilityImage(
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
  };
}

export function getDevicesOperations(
  context: AzureSphereContext,
  subscriptionId: string,
): DevicesOperations {
  return {
    ...getDevices(context, subscriptionId),
  };
}
