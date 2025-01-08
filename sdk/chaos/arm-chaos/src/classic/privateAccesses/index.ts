// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosManagementContext } from "../../api/chaosManagementContext.js";
import {
  PrivateAccessesGetOptionalParams,
  PrivateAccessesCreateOrUpdateOptionalParams,
  PrivateAccessesUpdateOptionalParams,
  PrivateAccessesDeleteOptionalParams,
  PrivateAccessesListOptionalParams,
  PrivateAccessesListAllOptionalParams,
  PrivateAccessesPrivateLinkResourcesOptionalParams,
} from "../../api/options.js";
import {
  privateAccessesGet,
  privateAccessesCreateOrUpdate,
  privateAccessesUpdate,
  privateAccessesDelete,
  privateAccessesList,
  privateAccessesListAll,
  privateAccessesPrivateLinkResources,
} from "../../api/privateAccesses/index.js";
import { PrivateAccess, PrivateAccessPatch, PrivateLinkResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a PrivateAccesses operations. */
export interface PrivateAccessesOperations {
  /** Get a private access resource */
  get: (
    resourceGroupName: string,
    privateAccessName: string,
    options?: PrivateAccessesGetOptionalParams,
  ) => Promise<PrivateAccess>;
  /** Create or update a private access */
  createOrUpdate: (
    resourceGroupName: string,
    privateAccessName: string,
    resource: PrivateAccess,
    options?: PrivateAccessesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<PrivateAccess>, PrivateAccess>;
  /** Patch a private access tags */
  update: (
    resourceGroupName: string,
    privateAccessName: string,
    properties: PrivateAccessPatch,
    options?: PrivateAccessesUpdateOptionalParams,
  ) => PollerLike<OperationState<PrivateAccess>, PrivateAccess>;
  /** Delete a private access */
  delete: (
    resourceGroupName: string,
    privateAccessName: string,
    options?: PrivateAccessesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Get a list of private access resources in a resource group. */
  list: (
    resourceGroupName: string,
    options?: PrivateAccessesListOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateAccess>;
  /** Get a list of private access resources in a subscription. */
  listAll: (
    options?: PrivateAccessesListAllOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateAccess>;
  /** Gets the private link resources possible under private access resource */
  privateLinkResources: (
    resourceGroupName: string,
    privateAccessName: string,
    options?: PrivateAccessesPrivateLinkResourcesOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateLinkResource>;
}

export function getPrivateAccesses(context: ChaosManagementContext, subscriptionId: string) {
  return {
    get: (
      resourceGroupName: string,
      privateAccessName: string,
      options?: PrivateAccessesGetOptionalParams,
    ) => privateAccessesGet(context, subscriptionId, resourceGroupName, privateAccessName, options),
    createOrUpdate: (
      resourceGroupName: string,
      privateAccessName: string,
      resource: PrivateAccess,
      options?: PrivateAccessesCreateOrUpdateOptionalParams,
    ) =>
      privateAccessesCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateAccessName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      privateAccessName: string,
      properties: PrivateAccessPatch,
      options?: PrivateAccessesUpdateOptionalParams,
    ) =>
      privateAccessesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateAccessName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateAccessName: string,
      options?: PrivateAccessesDeleteOptionalParams,
    ) =>
      privateAccessesDelete(context, subscriptionId, resourceGroupName, privateAccessName, options),
    list: (resourceGroupName: string, options?: PrivateAccessesListOptionalParams) =>
      privateAccessesList(context, subscriptionId, resourceGroupName, options),
    listAll: (options?: PrivateAccessesListAllOptionalParams) =>
      privateAccessesListAll(context, subscriptionId, options),
    privateLinkResources: (
      resourceGroupName: string,
      privateAccessName: string,
      options?: PrivateAccessesPrivateLinkResourcesOptionalParams,
    ) =>
      privateAccessesPrivateLinkResources(
        context,
        subscriptionId,
        resourceGroupName,
        privateAccessName,
        options,
      ),
  };
}

export function getPrivateAccessesOperations(
  context: ChaosManagementContext,
  subscriptionId: string,
): PrivateAccessesOperations {
  return {
    ...getPrivateAccesses(context, subscriptionId),
  };
}
