// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { VerifiedIdContext } from "../../api/verifiedIdContext.js";
import {
  authoritiesListBySubscription,
  authoritiesListByResourceGroup,
  authoritiesDelete,
  authoritiesUpdate,
  authoritiesCreateOrUpdate,
  authoritiesGet,
} from "../../api/authorities/index.js";
import { Authority, AuthorityUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AuthoritiesListBySubscriptionOptionalParams,
  AuthoritiesListByResourceGroupOptionalParams,
  AuthoritiesDeleteOptionalParams,
  AuthoritiesUpdateOptionalParams,
  AuthoritiesCreateOrUpdateOptionalParams,
  AuthoritiesGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a Authorities operations. */
export interface AuthoritiesOperations {
  /** List Authority resources by subscription ID */
  listBySubscription: (
    options?: AuthoritiesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Authority>;
  /** List Authority resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: AuthoritiesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Authority>;
  /** Delete a Authority */
  delete: (
    resourceGroupName: string,
    authorityName: string,
    options?: AuthoritiesDeleteOptionalParams,
  ) => Promise<void>;
  /** Update a Authority */
  update: (
    resourceGroupName: string,
    authorityName: string,
    properties: AuthorityUpdate,
    options?: AuthoritiesUpdateOptionalParams,
  ) => Promise<Authority>;
  /** Create a Authority */
  createOrUpdate: (
    resourceGroupName: string,
    authorityName: string,
    resource: Authority,
    options?: AuthoritiesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Authority>, Authority>;
  /** Get a Authority */
  get: (
    resourceGroupName: string,
    authorityName: string,
    options?: AuthoritiesGetOptionalParams,
  ) => Promise<Authority>;
}

function _getAuthorities(context: VerifiedIdContext) {
  return {
    listBySubscription: (options?: AuthoritiesListBySubscriptionOptionalParams) =>
      authoritiesListBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: AuthoritiesListByResourceGroupOptionalParams,
    ) => authoritiesListByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      authorityName: string,
      options?: AuthoritiesDeleteOptionalParams,
    ) => authoritiesDelete(context, resourceGroupName, authorityName, options),
    update: (
      resourceGroupName: string,
      authorityName: string,
      properties: AuthorityUpdate,
      options?: AuthoritiesUpdateOptionalParams,
    ) => authoritiesUpdate(context, resourceGroupName, authorityName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      authorityName: string,
      resource: Authority,
      options?: AuthoritiesCreateOrUpdateOptionalParams,
    ) => authoritiesCreateOrUpdate(context, resourceGroupName, authorityName, resource, options),
    get: (
      resourceGroupName: string,
      authorityName: string,
      options?: AuthoritiesGetOptionalParams,
    ) => authoritiesGet(context, resourceGroupName, authorityName, options),
  };
}

export function _getAuthoritiesOperations(context: VerifiedIdContext): AuthoritiesOperations {
  return {
    ..._getAuthorities(context),
  };
}
