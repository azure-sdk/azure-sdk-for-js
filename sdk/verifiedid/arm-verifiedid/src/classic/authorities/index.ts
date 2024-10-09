// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { VerifiedIdContext } from "../../api/verifiedIdContext.js";
import { Authority, AuthorityUpdate } from "../../models/models.js";
import {
  authoritiesGet,
  authoritiesCreateOrUpdate,
  authoritiesUpdate,
  authoritiesDelete,
  authoritiesListByResourceGroup,
  authoritiesListBySubscription,
} from "../../api/authorities/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AuthoritiesGetOptionalParams,
  AuthoritiesCreateOrUpdateOptionalParams,
  AuthoritiesUpdateOptionalParams,
  AuthoritiesDeleteOptionalParams,
  AuthoritiesListByResourceGroupOptionalParams,
  AuthoritiesListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a Authorities operations. */
export interface AuthoritiesOperations {
  /** Get a Authority */
  get: (
    resourceGroupName: string,
    authorityName: string,
    options?: AuthoritiesGetOptionalParams,
  ) => Promise<Authority>;
  /** Create a Authority */
  createOrUpdate: (
    resourceGroupName: string,
    authorityName: string,
    resource: Authority,
    options?: AuthoritiesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Authority>, Authority>;
  /** Update a Authority */
  update: (
    resourceGroupName: string,
    authorityName: string,
    properties: AuthorityUpdate,
    options?: AuthoritiesUpdateOptionalParams,
  ) => Promise<Authority>;
  /** Delete a Authority */
  delete: (
    resourceGroupName: string,
    authorityName: string,
    options?: AuthoritiesDeleteOptionalParams,
  ) => Promise<void>;
  /** List Authority resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: AuthoritiesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Authority>;
  /** List Authority resources by subscription ID */
  listBySubscription: (
    options?: AuthoritiesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Authority>;
}

export function getAuthorities(
  context: VerifiedIdContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      authorityName: string,
      options?: AuthoritiesGetOptionalParams,
    ) =>
      authoritiesGet(
        context,
        subscriptionId,
        resourceGroupName,
        authorityName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      authorityName: string,
      resource: Authority,
      options?: AuthoritiesCreateOrUpdateOptionalParams,
    ) =>
      authoritiesCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        authorityName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      authorityName: string,
      properties: AuthorityUpdate,
      options?: AuthoritiesUpdateOptionalParams,
    ) =>
      authoritiesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        authorityName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      authorityName: string,
      options?: AuthoritiesDeleteOptionalParams,
    ) =>
      authoritiesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        authorityName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: AuthoritiesListByResourceGroupOptionalParams,
    ) =>
      authoritiesListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: AuthoritiesListBySubscriptionOptionalParams,
    ) => authoritiesListBySubscription(context, subscriptionId, options),
  };
}

export function getAuthoritiesOperations(
  context: VerifiedIdContext,
  subscriptionId: string,
): AuthoritiesOperations {
  return {
    ...getAuthorities(context, subscriptionId),
  };
}
