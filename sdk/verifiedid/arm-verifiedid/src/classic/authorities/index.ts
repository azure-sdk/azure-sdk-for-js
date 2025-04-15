// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { VerifiedIdContext } from "../../api/verifiedIdContext.js";
import { Authority, AuthorityUpdate } from "../../models/models.js";
import {
  AuthoritiesListBySubscriptionOptionalParams,
  AuthoritiesListByResourceGroupOptionalParams,
  AuthoritiesDeleteOptionalParams,
  AuthoritiesUpdateOptionalParams,
  AuthoritiesCreateOrUpdateOptionalParams,
  AuthoritiesGetOptionalParams,
} from "../../api/authorities/options.js";
import {
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/authorities/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

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
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
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
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: AuthoritiesListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      authorityName: string,
      options?: AuthoritiesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, authorityName, options),
    update: (
      resourceGroupName: string,
      authorityName: string,
      properties: AuthorityUpdate,
      options?: AuthoritiesUpdateOptionalParams,
    ) => update(context, resourceGroupName, authorityName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      authorityName: string,
      resource: Authority,
      options?: AuthoritiesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, authorityName, resource, options),
    get: (
      resourceGroupName: string,
      authorityName: string,
      options?: AuthoritiesGetOptionalParams,
    ) => get(context, resourceGroupName, authorityName, options),
  };
}

export function _getAuthoritiesOperations(context: VerifiedIdContext): AuthoritiesOperations {
  return {
    ..._getAuthorities(context),
  };
}
