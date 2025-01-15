// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridConnectivityManagementAPIContext } from "../../api/hybridConnectivityManagementAPIContext.js";
import {
  PublicCloudConnectorsGetOptionalParams,
  PublicCloudConnectorsCreateOrUpdateOptionalParams,
  PublicCloudConnectorsUpdateOptionalParams,
  PublicCloudConnectorsDeleteOptionalParams,
  PublicCloudConnectorsListByResourceGroupOptionalParams,
  PublicCloudConnectorsListBySubscriptionOptionalParams,
  PublicCloudConnectorsTestPermissionsOptionalParams,
} from "../../api/options.js";
import {
  publicCloudConnectorsGet,
  publicCloudConnectorsCreateOrUpdate,
  publicCloudConnectorsUpdate,
  publicCloudConnectorsDelete,
  publicCloudConnectorsListByResourceGroup,
  publicCloudConnectorsListBySubscription,
  publicCloudConnectorsTestPermissions,
} from "../../api/publicCloudConnectors/index.js";
import { OperationStatusResult, PublicCloudConnector } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a PublicCloudConnectors operations. */
export interface PublicCloudConnectorsOperations {
  /** Get a PublicCloudConnector */
  get: (
    resourceGroupName: string,
    publicCloudConnector: string,
    options?: PublicCloudConnectorsGetOptionalParams,
  ) => Promise<PublicCloudConnector>;
  /** Create a PublicCloudConnector */
  createOrUpdate: (
    resourceGroupName: string,
    publicCloudConnector: string,
    resource: PublicCloudConnector,
    options?: PublicCloudConnectorsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<PublicCloudConnector>, PublicCloudConnector>;
  /** Update a PublicCloudConnector */
  update: (
    resourceGroupName: string,
    publicCloudConnector: string,
    properties: PublicCloudConnector,
    options?: PublicCloudConnectorsUpdateOptionalParams,
  ) => Promise<PublicCloudConnector>;
  /** Delete a PublicCloudConnector */
  delete: (
    resourceGroupName: string,
    publicCloudConnector: string,
    options?: PublicCloudConnectorsDeleteOptionalParams,
  ) => Promise<void>;
  /** List PublicCloudConnector resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: PublicCloudConnectorsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<PublicCloudConnector>;
  /** List PublicCloudConnector resources by subscription ID */
  listBySubscription: (
    options?: PublicCloudConnectorsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<PublicCloudConnector>;
  /** A long-running resource action. */
  testPermissions: (
    resourceGroupName: string,
    publicCloudConnector: string,
    options?: PublicCloudConnectorsTestPermissionsOptionalParams,
  ) => PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}

export function getPublicCloudConnectors(
  context: HybridConnectivityManagementAPIContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      publicCloudConnector: string,
      options?: PublicCloudConnectorsGetOptionalParams,
    ) =>
      publicCloudConnectorsGet(
        context,
        subscriptionId,
        resourceGroupName,
        publicCloudConnector,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      publicCloudConnector: string,
      resource: PublicCloudConnector,
      options?: PublicCloudConnectorsCreateOrUpdateOptionalParams,
    ) =>
      publicCloudConnectorsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        publicCloudConnector,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      publicCloudConnector: string,
      properties: PublicCloudConnector,
      options?: PublicCloudConnectorsUpdateOptionalParams,
    ) =>
      publicCloudConnectorsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        publicCloudConnector,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      publicCloudConnector: string,
      options?: PublicCloudConnectorsDeleteOptionalParams,
    ) =>
      publicCloudConnectorsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        publicCloudConnector,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: PublicCloudConnectorsListByResourceGroupOptionalParams,
    ) =>
      publicCloudConnectorsListByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (options?: PublicCloudConnectorsListBySubscriptionOptionalParams) =>
      publicCloudConnectorsListBySubscription(context, subscriptionId, options),
    testPermissions: (
      resourceGroupName: string,
      publicCloudConnector: string,
      options?: PublicCloudConnectorsTestPermissionsOptionalParams,
    ) =>
      publicCloudConnectorsTestPermissions(
        context,
        subscriptionId,
        resourceGroupName,
        publicCloudConnector,
        options,
      ),
  };
}

export function getPublicCloudConnectorsOperations(
  context: HybridConnectivityManagementAPIContext,
  subscriptionId: string,
): PublicCloudConnectorsOperations {
  return {
    ...getPublicCloudConnectors(context, subscriptionId),
  };
}
