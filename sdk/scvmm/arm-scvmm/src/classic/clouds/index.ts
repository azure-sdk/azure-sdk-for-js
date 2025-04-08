// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext } from "../../api/scVmmContext.js";
import { Cloud, CloudTagsUpdate } from "../../models/models.js";
import {
  CloudsListBySubscriptionOptionalParams,
  CloudsListByResourceGroupOptionalParams,
  CloudsDeleteOptionalParams,
  CloudsUpdateOptionalParams,
  CloudsCreateOrUpdateOptionalParams,
  CloudsGetOptionalParams,
} from "../../api/clouds/options.js";
import {
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/clouds/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Clouds operations. */
export interface CloudsOperations {
  /** List of Clouds in a subscription. */
  listBySubscription: (
    options?: CloudsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Cloud>;
  /** List of Clouds in a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: CloudsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Cloud>;
  /** Deregisters the ScVmm fabric cloud from Azure. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    cloudResourceName: string,
    options?: CloudsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates the Clouds resource. */
  update: (
    resourceGroupName: string,
    cloudResourceName: string,
    properties: CloudTagsUpdate,
    options?: CloudsUpdateOptionalParams,
  ) => PollerLike<OperationState<Cloud>, Cloud>;
  /** Onboards the ScVmm fabric cloud as an Azure cloud resource. */
  createOrUpdate: (
    resourceGroupName: string,
    cloudResourceName: string,
    resource: Cloud,
    options?: CloudsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Cloud>, Cloud>;
  /** Implements Cloud GET method. */
  get: (
    resourceGroupName: string,
    cloudResourceName: string,
    options?: CloudsGetOptionalParams,
  ) => Promise<Cloud>;
}

function _getClouds(context: ScVmmContext) {
  return {
    listBySubscription: (options?: CloudsListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: CloudsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      cloudResourceName: string,
      options?: CloudsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, cloudResourceName, options),
    update: (
      resourceGroupName: string,
      cloudResourceName: string,
      properties: CloudTagsUpdate,
      options?: CloudsUpdateOptionalParams,
    ) => update(context, resourceGroupName, cloudResourceName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      cloudResourceName: string,
      resource: Cloud,
      options?: CloudsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, cloudResourceName, resource, options),
    get: (
      resourceGroupName: string,
      cloudResourceName: string,
      options?: CloudsGetOptionalParams,
    ) => get(context, resourceGroupName, cloudResourceName, options),
  };
}

export function _getCloudsOperations(context: ScVmmContext): CloudsOperations {
  return {
    ..._getClouds(context),
  };
}
