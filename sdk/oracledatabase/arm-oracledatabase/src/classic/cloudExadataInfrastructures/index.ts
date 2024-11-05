// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  CloudExadataInfrastructure,
  CloudExadataInfrastructureUpdate,
} from "../../models/models.js";
import {
  cloudExadataInfrastructuresListBySubscription,
  cloudExadataInfrastructuresGet,
  cloudExadataInfrastructuresUpdate,
  cloudExadataInfrastructuresDelete,
  cloudExadataInfrastructuresCreateOrUpdate,
  cloudExadataInfrastructuresListByResourceGroup,
  cloudExadataInfrastructuresAddStorageCapacity,
} from "../../api/cloudExadataInfrastructures/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CloudExadataInfrastructuresListBySubscriptionOptionalParams,
  CloudExadataInfrastructuresGetOptionalParams,
  CloudExadataInfrastructuresUpdateOptionalParams,
  CloudExadataInfrastructuresDeleteOptionalParams,
  CloudExadataInfrastructuresCreateOrUpdateOptionalParams,
  CloudExadataInfrastructuresListByResourceGroupOptionalParams,
  CloudExadataInfrastructuresAddStorageCapacityOptionalParams,
} from "../../models/options.js";

/** Interface representing a CloudExadataInfrastructures operations. */
export interface CloudExadataInfrastructuresOperations {
  /** List CloudExadataInfrastructure resources by subscription ID */
  listBySubscription: (
    options?: CloudExadataInfrastructuresListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<CloudExadataInfrastructure>;
  /** Get a CloudExadataInfrastructure */
  get: (
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    options?: CloudExadataInfrastructuresGetOptionalParams,
  ) => Promise<CloudExadataInfrastructure>;
  /** Update a CloudExadataInfrastructure */
  update: (
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    properties: CloudExadataInfrastructureUpdate,
    options?: CloudExadataInfrastructuresUpdateOptionalParams,
  ) => PollerLike<
    OperationState<CloudExadataInfrastructure>,
    CloudExadataInfrastructure
  >;
  /** Delete a CloudExadataInfrastructure */
  delete: (
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    options?: CloudExadataInfrastructuresDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a CloudExadataInfrastructure */
  createOrUpdate: (
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    resource: CloudExadataInfrastructure,
    options?: CloudExadataInfrastructuresCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<CloudExadataInfrastructure>,
    CloudExadataInfrastructure
  >;
  /** List CloudExadataInfrastructure resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: CloudExadataInfrastructuresListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<CloudExadataInfrastructure>;
  /** Perform add storage capacity on exadata infra */
  addStorageCapacity: (
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    options?: CloudExadataInfrastructuresAddStorageCapacityOptionalParams,
  ) => PollerLike<
    OperationState<CloudExadataInfrastructure>,
    CloudExadataInfrastructure
  >;
}

export function getCloudExadataInfrastructures(
  context: DatabaseContext,
  subscriptionId: string,
) {
  return {
    listBySubscription: (
      options?: CloudExadataInfrastructuresListBySubscriptionOptionalParams,
    ) =>
      cloudExadataInfrastructuresListBySubscription(
        context,
        subscriptionId,
        options,
      ),
    get: (
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      options?: CloudExadataInfrastructuresGetOptionalParams,
    ) =>
      cloudExadataInfrastructuresGet(
        context,
        subscriptionId,
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
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      options?: CloudExadataInfrastructuresDeleteOptionalParams,
    ) =>
      cloudExadataInfrastructuresDelete(
        context,
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      resource: CloudExadataInfrastructure,
      options?: CloudExadataInfrastructuresCreateOrUpdateOptionalParams,
    ) =>
      cloudExadataInfrastructuresCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        resource,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: CloudExadataInfrastructuresListByResourceGroupOptionalParams,
    ) =>
      cloudExadataInfrastructuresListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    addStorageCapacity: (
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      options?: CloudExadataInfrastructuresAddStorageCapacityOptionalParams,
    ) =>
      cloudExadataInfrastructuresAddStorageCapacity(
        context,
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        options,
      ),
  };
}

export function getCloudExadataInfrastructuresOperations(
  context: DatabaseContext,
  subscriptionId: string,
): CloudExadataInfrastructuresOperations {
  return {
    ...getCloudExadataInfrastructures(context, subscriptionId),
  };
}
