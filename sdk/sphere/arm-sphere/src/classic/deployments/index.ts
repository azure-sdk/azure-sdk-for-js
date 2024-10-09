// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureSphereContext } from "../../api/azureSphereContext.js";
import { Deployment } from "../../models/models.js";
import {
  deploymentsGet,
  deploymentsCreateOrUpdate,
  deploymentsDelete,
  deploymentsListByDeviceGroup,
} from "../../api/deployments/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  DeploymentsGetOptionalParams,
  DeploymentsCreateOrUpdateOptionalParams,
  DeploymentsDeleteOptionalParams,
  DeploymentsListByDeviceGroupOptionalParams,
} from "../../models/options.js";

/** Interface representing a Deployments operations. */
export interface DeploymentsOperations {
  /** Get a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
  get: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    deploymentName: string,
    options?: DeploymentsGetOptionalParams,
  ) => Promise<Deployment>;
  /** Create a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
  createOrUpdate: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    deploymentName: string,
    resource: Deployment,
    options?: DeploymentsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Deployment>, Deployment>;
  /** Delete a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
  delete: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    deploymentName: string,
    options?: DeploymentsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List Deployment resources by DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
  listByDeviceGroup: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    options?: DeploymentsListByDeviceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Deployment>;
}

export function getDeployments(
  context: AzureSphereContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      deploymentName: string,
      options?: DeploymentsGetOptionalParams,
    ) =>
      deploymentsGet(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deploymentName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      deploymentName: string,
      resource: Deployment,
      options?: DeploymentsCreateOrUpdateOptionalParams,
    ) =>
      deploymentsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deploymentName,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      deploymentName: string,
      options?: DeploymentsDeleteOptionalParams,
    ) =>
      deploymentsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deploymentName,
        options,
      ),
    listByDeviceGroup: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      options?: DeploymentsListByDeviceGroupOptionalParams,
    ) =>
      deploymentsListByDeviceGroup(
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

export function getDeploymentsOperations(
  context: AzureSphereContext,
  subscriptionId: string,
): DeploymentsOperations {
  return {
    ...getDeployments(context, subscriptionId),
  };
}
