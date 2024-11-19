// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsContext } from "../../api/ioTOperationsContext.js";
import {
  brokerAuthorizationGet,
  brokerAuthorizationCreateOrUpdate,
  brokerAuthorizationDelete,
  brokerAuthorizationListByResourceGroup,
} from "../../api/brokerAuthorization/index.js";
import { AuthorizationResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  BrokerAuthorizationGetOptionalParams,
  BrokerAuthorizationCreateOrUpdateOptionalParams,
  BrokerAuthorizationDeleteOptionalParams,
  BrokerAuthorizationListByResourceGroupOptionalParams,
} from "../../api/options.js";

/** Interface representing a BrokerAuthorization operations. */
export interface BrokerAuthorizationOperations {
  /** Get a AuthorizationResource */
  get: (
    resourceGroupName: string,
    instanceName: string,
    brokerName: string,
    authorizationName: string,
    options?: BrokerAuthorizationGetOptionalParams,
  ) => Promise<AuthorizationResource>;
  /** Create a AuthorizationResource */
  createOrUpdate: (
    resourceGroupName: string,
    instanceName: string,
    brokerName: string,
    authorizationName: string,
    resource: AuthorizationResource,
    options?: BrokerAuthorizationCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<AuthorizationResource>, AuthorizationResource>;
  /** Delete a AuthorizationResource */
  delete: (
    resourceGroupName: string,
    instanceName: string,
    brokerName: string,
    authorizationName: string,
    options?: BrokerAuthorizationDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List AuthorizationResource resources by BrokerResource */
  listByResourceGroup: (
    resourceGroupName: string,
    instanceName: string,
    brokerName: string,
    options?: BrokerAuthorizationListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<AuthorizationResource>;
}

export function getBrokerAuthorization(
  context: IoTOperationsContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      instanceName: string,
      brokerName: string,
      authorizationName: string,
      options?: BrokerAuthorizationGetOptionalParams,
    ) =>
      brokerAuthorizationGet(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        brokerName,
        authorizationName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      instanceName: string,
      brokerName: string,
      authorizationName: string,
      resource: AuthorizationResource,
      options?: BrokerAuthorizationCreateOrUpdateOptionalParams,
    ) =>
      brokerAuthorizationCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        brokerName,
        authorizationName,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      instanceName: string,
      brokerName: string,
      authorizationName: string,
      options?: BrokerAuthorizationDeleteOptionalParams,
    ) =>
      brokerAuthorizationDelete(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        brokerName,
        authorizationName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      instanceName: string,
      brokerName: string,
      options?: BrokerAuthorizationListByResourceGroupOptionalParams,
    ) =>
      brokerAuthorizationListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        brokerName,
        options,
      ),
  };
}

export function getBrokerAuthorizationOperations(
  context: IoTOperationsContext,
  subscriptionId: string,
): BrokerAuthorizationOperations {
  return {
    ...getBrokerAuthorization(context, subscriptionId),
  };
}
