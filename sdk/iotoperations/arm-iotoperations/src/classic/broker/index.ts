// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsContext } from "../../api/ioTOperationsContext.js";
import {
  brokerListByResourceGroup,
  brokerDelete,
  brokerCreateOrUpdate,
  brokerGet,
} from "../../api/broker/index.js";
import { BrokerResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  BrokerListByResourceGroupOptionalParams,
  BrokerDeleteOptionalParams,
  BrokerCreateOrUpdateOptionalParams,
  BrokerGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a Broker operations. */
export interface BrokerOperations {
  /** List BrokerResource resources by InstanceResource */
  listByResourceGroup: (
    resourceGroupName: string,
    instanceName: string,
    options?: BrokerListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<BrokerResource>;
  /** Delete a BrokerResource */
  delete: (
    resourceGroupName: string,
    instanceName: string,
    brokerName: string,
    options?: BrokerDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a BrokerResource */
  createOrUpdate: (
    resourceGroupName: string,
    instanceName: string,
    brokerName: string,
    resource: BrokerResource,
    options?: BrokerCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<BrokerResource>, BrokerResource>;
  /** Get a BrokerResource */
  get: (
    resourceGroupName: string,
    instanceName: string,
    brokerName: string,
    options?: BrokerGetOptionalParams,
  ) => Promise<BrokerResource>;
}

function _getBroker(context: IoTOperationsContext) {
  return {
    listByResourceGroup: (
      resourceGroupName: string,
      instanceName: string,
      options?: BrokerListByResourceGroupOptionalParams,
    ) => brokerListByResourceGroup(context, resourceGroupName, instanceName, options),
    delete: (
      resourceGroupName: string,
      instanceName: string,
      brokerName: string,
      options?: BrokerDeleteOptionalParams,
    ) => brokerDelete(context, resourceGroupName, instanceName, brokerName, options),
    createOrUpdate: (
      resourceGroupName: string,
      instanceName: string,
      brokerName: string,
      resource: BrokerResource,
      options?: BrokerCreateOrUpdateOptionalParams,
    ) =>
      brokerCreateOrUpdate(context, resourceGroupName, instanceName, brokerName, resource, options),
    get: (
      resourceGroupName: string,
      instanceName: string,
      brokerName: string,
      options?: BrokerGetOptionalParams,
    ) => brokerGet(context, resourceGroupName, instanceName, brokerName, options),
  };
}

export function _getBrokerOperations(context: IoTOperationsContext): BrokerOperations {
  return {
    ..._getBroker(context),
  };
}
