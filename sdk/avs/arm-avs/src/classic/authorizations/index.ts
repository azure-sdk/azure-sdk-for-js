// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AvsContext } from "../../api/avsContext.js";
import {
  authorizationsList,
  authorizationsGet,
  authorizationsCreateOrUpdate,
  authorizationsDelete,
} from "../../api/authorizations/index.js";
import { ExpressRouteAuthorization } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AuthorizationsListOptionalParams,
  AuthorizationsGetOptionalParams,
  AuthorizationsCreateOrUpdateOptionalParams,
  AuthorizationsDeleteOptionalParams,
} from "../../api/options.js";

/** Interface representing a Authorizations operations. */
export interface AuthorizationsOperations {
  /** List ExpressRouteAuthorization resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: AuthorizationsListOptionalParams,
  ) => PagedAsyncIterableIterator<ExpressRouteAuthorization>;
  /** Get a ExpressRouteAuthorization */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    authorizationName: string,
    options?: AuthorizationsGetOptionalParams,
  ) => Promise<ExpressRouteAuthorization>;
  /** Create a ExpressRouteAuthorization */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    authorizationName: string,
    authorization: ExpressRouteAuthorization,
    options?: AuthorizationsCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<ExpressRouteAuthorization>,
    ExpressRouteAuthorization
  >;
  /** Delete a ExpressRouteAuthorization */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    authorizationName: string,
    options?: AuthorizationsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getAuthorizations(context: AvsContext, subscriptionId: string) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: AuthorizationsListOptionalParams,
    ) =>
      authorizationsList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      authorizationName: string,
      options?: AuthorizationsGetOptionalParams,
    ) =>
      authorizationsGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        authorizationName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      authorizationName: string,
      authorization: ExpressRouteAuthorization,
      options?: AuthorizationsCreateOrUpdateOptionalParams,
    ) =>
      authorizationsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        authorizationName,
        authorization,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      authorizationName: string,
      options?: AuthorizationsDeleteOptionalParams,
    ) =>
      authorizationsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        authorizationName,
        options,
      ),
  };
}

export function getAuthorizationsOperations(
  context: AvsContext,
  subscriptionId: string,
): AuthorizationsOperations {
  return {
    ...getAuthorizations(context, subscriptionId),
  };
}
