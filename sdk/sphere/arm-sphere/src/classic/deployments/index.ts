// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureSphereContext } from "../../api/azureSphereContext.js";
import {
  deploymentsListByDeviceGroup,
  deploymentsDelete,
  deploymentsCreateOrUpdate,
  deploymentsGet,
} from "../../api/deployments/index.js";
import {
  DeploymentsListByDeviceGroupOptionalParams,
  DeploymentsDeleteOptionalParams,
  DeploymentsCreateOrUpdateOptionalParams,
  DeploymentsGetOptionalParams,
} from "../../api/options.js";
import { Deployment } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Deployments operations. */
export interface DeploymentsOperations {
  /** List Deployment resources by DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
  listByDeviceGroup: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    options?: DeploymentsListByDeviceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Deployment>;
  /** Delete a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
  delete: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    deploymentName: string,
    options?: DeploymentsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
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
  /** Get a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
  get: (
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    deploymentName: string,
    options?: DeploymentsGetOptionalParams,
  ) => Promise<Deployment>;
}

function _getDeployments(context: AzureSphereContext) {
  return {
    listByDeviceGroup: (
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      options?: DeploymentsListByDeviceGroupOptionalParams,
    ) =>
      deploymentsListByDeviceGroup(
        context,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
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
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deploymentName,
        resource,
        options,
      ),
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
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deploymentName,
        options,
      ),
  };
}

export function _getDeploymentsOperations(context: AzureSphereContext): DeploymentsOperations {
  return {
    ..._getDeployments(context),
  };
}
