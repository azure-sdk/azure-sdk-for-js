// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsContext } from "../../api/ioTOperationsContext.js";
import {
  brokerAuthenticationGet,
  brokerAuthenticationCreateOrUpdate,
  brokerAuthenticationDelete,
  brokerAuthenticationListByResourceGroup,
} from "../../api/brokerAuthentication/index.js";
import { AuthenticationResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  BrokerAuthenticationGetOptionalParams,
  BrokerAuthenticationCreateOrUpdateOptionalParams,
  BrokerAuthenticationDeleteOptionalParams,
  BrokerAuthenticationListByResourceGroupOptionalParams,
} from "../../api/options.js";

/** Interface representing a BrokerAuthentication operations. */
export interface BrokerAuthenticationOperations {
  /** Get a AuthenticationResource */
  get: (
    resourceGroupName: string,
    instanceName: string,
    brokerName: string,
    authenticationName: string,
    options?: BrokerAuthenticationGetOptionalParams,
  ) => Promise<AuthenticationResource>;
  /** Create a AuthenticationResource */
  createOrUpdate: (
    resourceGroupName: string,
    instanceName: string,
    brokerName: string,
    authenticationName: string,
    resource: AuthenticationResource,
    options?: BrokerAuthenticationCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<AuthenticationResource>,
    AuthenticationResource
  >;
  /** Delete a AuthenticationResource */
  delete: (
    resourceGroupName: string,
    instanceName: string,
    brokerName: string,
    authenticationName: string,
    options?: BrokerAuthenticationDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List AuthenticationResource resources by BrokerResource */
  listByResourceGroup: (
    resourceGroupName: string,
    instanceName: string,
    brokerName: string,
    options?: BrokerAuthenticationListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<AuthenticationResource>;
}

export function getBrokerAuthentication(
  context: IoTOperationsContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      instanceName: string,
      brokerName: string,
      authenticationName: string,
      options?: BrokerAuthenticationGetOptionalParams,
    ) =>
      brokerAuthenticationGet(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        brokerName,
        authenticationName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      instanceName: string,
      brokerName: string,
      authenticationName: string,
      resource: AuthenticationResource,
      options?: BrokerAuthenticationCreateOrUpdateOptionalParams,
    ) =>
      brokerAuthenticationCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        brokerName,
        authenticationName,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      instanceName: string,
      brokerName: string,
      authenticationName: string,
      options?: BrokerAuthenticationDeleteOptionalParams,
    ) =>
      brokerAuthenticationDelete(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        brokerName,
        authenticationName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      instanceName: string,
      brokerName: string,
      options?: BrokerAuthenticationListByResourceGroupOptionalParams,
    ) =>
      brokerAuthenticationListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        brokerName,
        options,
      ),
  };
}

export function getBrokerAuthenticationOperations(
  context: IoTOperationsContext,
  subscriptionId: string,
): BrokerAuthenticationOperations {
  return {
    ...getBrokerAuthentication(context, subscriptionId),
  };
}
