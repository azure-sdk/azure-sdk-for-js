// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  CloudExadataInfrastructure,
  CloudExadataInfrastructureUpdate,
} from "../../models/models.js";
import {
  CloudExadataInfrastructuresAddStorageCapacityOptionalParams,
  CloudExadataInfrastructuresListByResourceGroupOptionalParams,
  CloudExadataInfrastructuresCreateOrUpdateOptionalParams,
  CloudExadataInfrastructuresDeleteOptionalParams,
  CloudExadataInfrastructuresUpdateOptionalParams,
  CloudExadataInfrastructuresGetOptionalParams,
  CloudExadataInfrastructuresListBySubscriptionOptionalParams,
} from "../../api/cloudExadataInfrastructures/options.js";
import {
  addStorageCapacity,
  listByResourceGroup,
  createOrUpdate,
  $delete,
  update,
  get,
  listBySubscription,
} from "../../api/cloudExadataInfrastructures/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

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
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
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
    ) => addStorageCapacity(context, resourceGroupName, cloudexadatainfrastructurename, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: CloudExadataInfrastructuresListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    createOrUpdate: (
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      resource: CloudExadataInfrastructure,
      options?: CloudExadataInfrastructuresCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(context, resourceGroupName, cloudexadatainfrastructurename, resource, options),
    delete: (
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      options?: CloudExadataInfrastructuresDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, cloudexadatainfrastructurename, options),
    update: (
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      properties: CloudExadataInfrastructureUpdate,
      options?: CloudExadataInfrastructuresUpdateOptionalParams,
    ) => update(context, resourceGroupName, cloudexadatainfrastructurename, properties, options),
    get: (
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      options?: CloudExadataInfrastructuresGetOptionalParams,
    ) => get(context, resourceGroupName, cloudexadatainfrastructurename, options),
    listBySubscription: (options?: CloudExadataInfrastructuresListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
  };
}

export function _getCloudExadataInfrastructuresOperations(
  context: DatabaseContext,
): CloudExadataInfrastructuresOperations {
  return {
    ..._getCloudExadataInfrastructures(context),
  };
}
