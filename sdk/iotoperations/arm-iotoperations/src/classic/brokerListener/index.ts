// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsContext } from "../../api/ioTOperationsContext.js";
import {
  brokerListenerListByResourceGroup,
  brokerListenerDelete,
  brokerListenerCreateOrUpdate,
  brokerListenerGet,
} from "../../api/brokerListener/index.js";
import { BrokerListenerResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  BrokerListenerListByResourceGroupOptionalParams,
  BrokerListenerDeleteOptionalParams,
  BrokerListenerCreateOrUpdateOptionalParams,
  BrokerListenerGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a BrokerListener operations. */
export interface BrokerListenerOperations {
  /** List BrokerListenerResource resources by BrokerResource */
  listByResourceGroup: (
    resourceGroupName: string,
    instanceName: string,
    brokerName: string,
    options?: BrokerListenerListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<BrokerListenerResource>;
  /** Delete a BrokerListenerResource */
  delete: (
    resourceGroupName: string,
    instanceName: string,
    brokerName: string,
    listenerName: string,
    options?: BrokerListenerDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a BrokerListenerResource */
  createOrUpdate: (
    resourceGroupName: string,
    instanceName: string,
    brokerName: string,
    listenerName: string,
    resource: BrokerListenerResource,
    options?: BrokerListenerCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<BrokerListenerResource>, BrokerListenerResource>;
  /** Get a BrokerListenerResource */
  get: (
    resourceGroupName: string,
    instanceName: string,
    brokerName: string,
    listenerName: string,
    options?: BrokerListenerGetOptionalParams,
  ) => Promise<BrokerListenerResource>;
}

function _getBrokerListener(context: IoTOperationsContext) {
  return {
    listByResourceGroup: (
      resourceGroupName: string,
      instanceName: string,
      brokerName: string,
      options?: BrokerListenerListByResourceGroupOptionalParams,
    ) =>
      brokerListenerListByResourceGroup(
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
      listenerName: string,
      options?: BrokerListenerDeleteOptionalParams,
    ) =>
      brokerListenerDelete(
        context,
        resourceGroupName,
        instanceName,
        brokerName,
        listenerName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      instanceName: string,
      brokerName: string,
      listenerName: string,
      resource: BrokerListenerResource,
      options?: BrokerListenerCreateOrUpdateOptionalParams,
    ) =>
      brokerListenerCreateOrUpdate(
        context,
        resourceGroupName,
        instanceName,
        brokerName,
        listenerName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      instanceName: string,
      brokerName: string,
      listenerName: string,
      options?: BrokerListenerGetOptionalParams,
    ) =>
      brokerListenerGet(
        context,
        resourceGroupName,
        instanceName,
        brokerName,
        listenerName,
        options,
      ),
  };
}

export function _getBrokerListenerOperations(
  context: IoTOperationsContext,
): BrokerListenerOperations {
  return {
    ..._getBrokerListener(context),
  };
}
