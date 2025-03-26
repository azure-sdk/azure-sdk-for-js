// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsContext } from "../../api/ioTOperationsContext.js";
import { BrokerAuthorizationResource } from "../../models/models.js";
import {
  BrokerAuthorizationListByResourceGroupOptionalParams,
  BrokerAuthorizationDeleteOptionalParams,
  BrokerAuthorizationCreateOrUpdateOptionalParams,
  BrokerAuthorizationGetOptionalParams,
} from "../../api/brokerAuthorization/options.js";
import {
  brokerAuthorizationListByResourceGroup,
  brokerAuthorizationDelete,
  brokerAuthorizationCreateOrUpdate,
  brokerAuthorizationGet,
} from "../../api/brokerAuthorization/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a BrokerAuthorization operations. */
export interface BrokerAuthorizationOperations {
  /** List BrokerAuthorizationResource resources by BrokerResource */
  listByResourceGroup: (
    resourceGroupName: string,
    instanceName: string,
    brokerName: string,
    options?: BrokerAuthorizationListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<BrokerAuthorizationResource>;
  /** Delete a BrokerAuthorizationResource */
  delete: (
    resourceGroupName: string,
    instanceName: string,
    brokerName: string,
    authorizationName: string,
    options?: BrokerAuthorizationDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a BrokerAuthorizationResource */
  createOrUpdate: (
    resourceGroupName: string,
    instanceName: string,
    brokerName: string,
    authorizationName: string,
    resource: BrokerAuthorizationResource,
    options?: BrokerAuthorizationCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<BrokerAuthorizationResource>, BrokerAuthorizationResource>;
  /** Get a BrokerAuthorizationResource */
  get: (
    resourceGroupName: string,
    instanceName: string,
    brokerName: string,
    authorizationName: string,
    options?: BrokerAuthorizationGetOptionalParams,
  ) => Promise<BrokerAuthorizationResource>;
}

function _getBrokerAuthorization(context: IoTOperationsContext) {
  return {
    listByResourceGroup: (
      resourceGroupName: string,
      instanceName: string,
      brokerName: string,
      options?: BrokerAuthorizationListByResourceGroupOptionalParams,
    ) =>
      brokerAuthorizationListByResourceGroup(
        context,
        resourceGroupName,
        instanceName,
        brokerName,
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
      resource: BrokerAuthorizationResource,
      options?: BrokerAuthorizationCreateOrUpdateOptionalParams,
    ) =>
      brokerAuthorizationCreateOrUpdate(
        context,
        resourceGroupName,
        instanceName,
        brokerName,
        authorizationName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      instanceName: string,
      brokerName: string,
      authorizationName: string,
      options?: BrokerAuthorizationGetOptionalParams,
    ) =>
      brokerAuthorizationGet(
        context,
        resourceGroupName,
        instanceName,
        brokerName,
        authorizationName,
        options,
      ),
  };
}

export function _getBrokerAuthorizationOperations(
  context: IoTOperationsContext,
): BrokerAuthorizationOperations {
  return {
    ..._getBrokerAuthorization(context),
  };
}
