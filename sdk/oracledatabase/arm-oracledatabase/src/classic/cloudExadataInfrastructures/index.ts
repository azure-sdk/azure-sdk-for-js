// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  cloudExadataInfrastructuresAddStorageCapacity,
  cloudExadataInfrastructuresListByResourceGroup,
  cloudExadataInfrastructuresCreateOrUpdate,
  cloudExadataInfrastructuresDelete,
  cloudExadataInfrastructuresUpdate,
  cloudExadataInfrastructuresGet,
  cloudExadataInfrastructuresListBySubscription,
} from "../../api/cloudExadataInfrastructures/index.js";
import {
  CloudExadataInfrastructure,
  CloudExadataInfrastructureUpdate,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CloudExadataInfrastructuresAddStorageCapacityOptionalParams,
  CloudExadataInfrastructuresListByResourceGroupOptionalParams,
  CloudExadataInfrastructuresCreateOrUpdateOptionalParams,
  CloudExadataInfrastructuresDeleteOptionalParams,
  CloudExadataInfrastructuresUpdateOptionalParams,
  CloudExadataInfrastructuresGetOptionalParams,
  CloudExadataInfrastructuresListBySubscriptionOptionalParams,
} from "../../api/options.js";

/** Interface representing a CloudExadataInfrastructures operations. */
export interface CloudExadataInfrastructuresOperations {
  /** Perform add storage capacity on exadata infra */
  addStorageCapacity: (
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    options?: CloudExadataInfrastructuresAddStorageCapacityOptionalParams,
  ) => PollerLike<OperationState<CloudExadataInfrastructure>, CloudExadataInfrastructure>;
  /** List CloudExadataInfrastructure resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: CloudExadataInfrastructuresListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<CloudExadataInfrastructure>;
  /** Create a CloudExadataInfrastructure */
  createOrUpdate: (
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    resource: CloudExadataInfrastructure,
    options?: CloudExadataInfrastructuresCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<CloudExadataInfrastructure>, CloudExadataInfrastructure>;
  /** Delete a CloudExadataInfrastructure */
  delete: (
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    options?: CloudExadataInfrastructuresDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a CloudExadataInfrastructure */
  update: (
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    properties: CloudExadataInfrastructureUpdate,
    options?: CloudExadataInfrastructuresUpdateOptionalParams,
  ) => PollerLike<OperationState<CloudExadataInfrastructure>, CloudExadataInfrastructure>;
  /** Get a CloudExadataInfrastructure */
  get: (
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    options?: CloudExadataInfrastructuresGetOptionalParams,
  ) => Promise<CloudExadataInfrastructure>;
  /** List CloudExadataInfrastructure resources by subscription ID */
  listBySubscription: (
    options?: CloudExadataInfrastructuresListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<CloudExadataInfrastructure>;
}

function _getCloudExadataInfrastructures(context: DatabaseContext) {
  return {
    addStorageCapacity: (
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      options?: CloudExadataInfrastructuresAddStorageCapacityOptionalParams,
    ) =>
      cloudExadataInfrastructuresAddStorageCapacity(
        context,
        resourceGroupName,
        cloudexadatainfrastructurename,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: CloudExadataInfrastructuresListByResourceGroupOptionalParams,
    ) => cloudExadataInfrastructuresListByResourceGroup(context, resourceGroupName, options),
    createOrUpdate: (
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      resource: CloudExadataInfrastructure,
      options?: CloudExadataInfrastructuresCreateOrUpdateOptionalParams,
    ) =>
      cloudExadataInfrastructuresCreateOrUpdate(
        context,
        resourceGroupName,
        cloudexadatainfrastructurename,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      options?: CloudExadataInfrastructuresDeleteOptionalParams,
    ) =>
      cloudExadataInfrastructuresDelete(
        context,
        resourceGroupName,
        cloudexadatainfrastructurename,
        options,
      ),
    update: (
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      properties: CloudExadataInfrastructureUpdate,
      options?: CloudExadataInfrastructuresUpdateOptionalParams,
    ) =>
      cloudExadataInfrastructuresUpdate(
        context,
        resourceGroupName,
        cloudexadatainfrastructurename,
        properties,
        options,
      ),
    get: (
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      options?: CloudExadataInfrastructuresGetOptionalParams,
    ) =>
      cloudExadataInfrastructuresGet(
        context,
        resourceGroupName,
        cloudexadatainfrastructurename,
        options,
      ),
    listBySubscription: (options?: CloudExadataInfrastructuresListBySubscriptionOptionalParams) =>
      cloudExadataInfrastructuresListBySubscription(context, options),
  };
}

export function _getCloudExadataInfrastructuresOperations(
  context: DatabaseContext,
): CloudExadataInfrastructuresOperations {
  return {
    ..._getCloudExadataInfrastructures(context),
  };
}
