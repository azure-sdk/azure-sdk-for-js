// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext } from "../../api/scVmmContext.js";
import { VmmServer, VmmServerTagsUpdate } from "../../models/models.js";
import {
  vmmServersGet,
  vmmServersCreateOrUpdate,
  vmmServersUpdate,
  vmmServersDelete,
  vmmServersListByResourceGroup,
  vmmServersListBySubscription,
} from "../../api/vmmServers/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  VmmServersGetOptionalParams,
  VmmServersCreateOrUpdateOptionalParams,
  VmmServersUpdateOptionalParams,
  VmmServersDeleteOptionalParams,
  VmmServersListByResourceGroupOptionalParams,
  VmmServersListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a VmmServers operations. */
export interface VmmServersOperations {
  /** Implements VmmServer GET method. */
  get: (
    resourceGroupName: string,
    vmmServerName: string,
    options?: VmmServersGetOptionalParams,
  ) => Promise<VmmServer>;
  /** Onboards the SCVmm fabric as an Azure VmmServer resource. */
  createOrUpdate: (
    resourceGroupName: string,
    vmmServerName: string,
    resource: VmmServer,
    options?: VmmServersCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<VmmServer>, VmmServer>;
  /** Updates the VmmServers resource. */
  update: (
    resourceGroupName: string,
    vmmServerName: string,
    properties: VmmServerTagsUpdate,
    options?: VmmServersUpdateOptionalParams,
  ) => PollerLike<OperationState<VmmServer>, VmmServer>;
  /** Removes the SCVmm fabric from Azure. */
  delete: (
    resourceGroupName: string,
    vmmServerName: string,
    options?: VmmServersDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List of VmmServers in a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: VmmServersListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<VmmServer>;
  /** List of VmmServers in a subscription. */
  listBySubscription: (
    options?: VmmServersListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<VmmServer>;
}

export function getVmmServers(context: ScVmmContext, subscriptionId: string) {
  return {
    get: (
      resourceGroupName: string,
      vmmServerName: string,
      options?: VmmServersGetOptionalParams,
    ) =>
      vmmServersGet(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      vmmServerName: string,
      resource: VmmServer,
      options?: VmmServersCreateOrUpdateOptionalParams,
    ) =>
      vmmServersCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      vmmServerName: string,
      properties: VmmServerTagsUpdate,
      options?: VmmServersUpdateOptionalParams,
    ) =>
      vmmServersUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      vmmServerName: string,
      options?: VmmServersDeleteOptionalParams,
    ) =>
      vmmServersDelete(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: VmmServersListByResourceGroupOptionalParams,
    ) =>
      vmmServersListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: VmmServersListBySubscriptionOptionalParams,
    ) => vmmServersListBySubscription(context, subscriptionId, options),
  };
}

export function getVmmServersOperations(
  context: ScVmmContext,
  subscriptionId: string,
): VmmServersOperations {
  return {
    ...getVmmServers(context, subscriptionId),
  };
}
