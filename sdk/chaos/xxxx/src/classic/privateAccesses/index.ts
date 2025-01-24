// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosManagementContext } from "../../api/chaosManagementContext.js";
import {
  PrivateAccessesPrivateLinkResourcesOptionalParams,
  PrivateAccessesListAllOptionalParams,
  PrivateAccessesListOptionalParams,
  PrivateAccessesDeleteOptionalParams,
  PrivateAccessesUpdateOptionalParams,
  PrivateAccessesCreateOrUpdateOptionalParams,
  PrivateAccessesGetOptionalParams,
} from "../../api/options.js";
import {
  privateAccessesPrivateLinkResources,
  privateAccessesListAll,
  privateAccessesList,
  privateAccessesDelete,
  privateAccessesUpdate,
  privateAccessesCreateOrUpdate,
  privateAccessesGet,
} from "../../api/privateAccesses/index.js";
import {
  PrivateAccess,
  PrivateAccessPatch,
  PrivateLinkResource,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a PrivateAccesses operations. */
export interface PrivateAccessesOperations {
  /** Gets the private link resources possible under private access resource */
  privateLinkResources: (
    resourceGroupName: string,
    privateAccessName: string,
    options?: PrivateAccessesPrivateLinkResourcesOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateLinkResource>;
  /** Get a list of private access resources in a subscription. */
  listAll: (
    options?: PrivateAccessesListAllOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateAccess>;
  /** Get a list of private access resources in a resource group. */
  list: (
    resourceGroupName: string,
    options?: PrivateAccessesListOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateAccess>;
  /** Delete a private access */
  delete: (
    resourceGroupName: string,
    privateAccessName: string,
    options?: PrivateAccessesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Patch a private access tags */
  update: (
    resourceGroupName: string,
    privateAccessName: string,
    properties: PrivateAccessPatch,
    options?: PrivateAccessesUpdateOptionalParams,
  ) => PollerLike<OperationState<PrivateAccess>, PrivateAccess>;
  /** Create or update a private access */
  createOrUpdate: (
    resourceGroupName: string,
    privateAccessName: string,
    resource: PrivateAccess,
    options?: PrivateAccessesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<PrivateAccess>, PrivateAccess>;
  /** Get a private access resource */
  get: (
    resourceGroupName: string,
    privateAccessName: string,
    options?: PrivateAccessesGetOptionalParams,
  ) => Promise<PrivateAccess>;
}

function _getPrivateAccesses(context: ChaosManagementContext) {
  return {
    privateLinkResources: (
      resourceGroupName: string,
      privateAccessName: string,
      options?: PrivateAccessesPrivateLinkResourcesOptionalParams,
    ) =>
      privateAccessesPrivateLinkResources(
        context,
        resourceGroupName,
        privateAccessName,
        options,
      ),
    listAll: (options?: PrivateAccessesListAllOptionalParams) =>
      privateAccessesListAll(context, options),
    list: (
      resourceGroupName: string,
      options?: PrivateAccessesListOptionalParams,
    ) => privateAccessesList(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      privateAccessName: string,
      options?: PrivateAccessesDeleteOptionalParams,
    ) =>
      privateAccessesDelete(
        context,
        resourceGroupName,
        privateAccessName,
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
        resourceGroupName,
        privateAccessName,
        properties,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateAccessName: string,
      resource: PrivateAccess,
      options?: PrivateAccessesCreateOrUpdateOptionalParams,
    ) =>
      privateAccessesCreateOrUpdate(
        context,
        resourceGroupName,
        privateAccessName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateAccessName: string,
      options?: PrivateAccessesGetOptionalParams,
    ) =>
      privateAccessesGet(
        context,
        resourceGroupName,
        privateAccessName,
        options,
      ),
  };
}

export function _getPrivateAccessesOperations(
  context: ChaosManagementContext,
): PrivateAccessesOperations {
  return {
    ..._getPrivateAccesses(context),
  };
}
