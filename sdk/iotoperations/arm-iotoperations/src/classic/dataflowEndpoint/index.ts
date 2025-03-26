// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsContext } from "../../api/ioTOperationsContext.js";
import { DataflowEndpointResource } from "../../models/models.js";
import {
  DataflowEndpointListByResourceGroupOptionalParams,
  DataflowEndpointDeleteOptionalParams,
  DataflowEndpointCreateOrUpdateOptionalParams,
  DataflowEndpointGetOptionalParams,
} from "../../api/dataflowEndpoint/options.js";
import {
  dataflowEndpointListByResourceGroup,
  dataflowEndpointDelete,
  dataflowEndpointCreateOrUpdate,
  dataflowEndpointGet,
} from "../../api/dataflowEndpoint/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a DataflowEndpoint operations. */
export interface DataflowEndpointOperations {
  /** List DataflowEndpointResource resources by InstanceResource */
  listByResourceGroup: (
    resourceGroupName: string,
    instanceName: string,
    options?: DataflowEndpointListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<DataflowEndpointResource>;
  /** Delete a DataflowEndpointResource */
  delete: (
    resourceGroupName: string,
    instanceName: string,
    dataflowEndpointName: string,
    options?: DataflowEndpointDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a DataflowEndpointResource */
  createOrUpdate: (
    resourceGroupName: string,
    instanceName: string,
    dataflowEndpointName: string,
    resource: DataflowEndpointResource,
    options?: DataflowEndpointCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<DataflowEndpointResource>, DataflowEndpointResource>;
  /** Get a DataflowEndpointResource */
  get: (
    resourceGroupName: string,
    instanceName: string,
    dataflowEndpointName: string,
    options?: DataflowEndpointGetOptionalParams,
  ) => Promise<DataflowEndpointResource>;
}

function _getDataflowEndpoint(context: IoTOperationsContext) {
  return {
    listByResourceGroup: (
      resourceGroupName: string,
      instanceName: string,
      options?: DataflowEndpointListByResourceGroupOptionalParams,
    ) => dataflowEndpointListByResourceGroup(context, resourceGroupName, instanceName, options),
    delete: (
      resourceGroupName: string,
      instanceName: string,
      dataflowEndpointName: string,
      options?: DataflowEndpointDeleteOptionalParams,
    ) =>
      dataflowEndpointDelete(
        context,
        resourceGroupName,
        instanceName,
        dataflowEndpointName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      instanceName: string,
      dataflowEndpointName: string,
      resource: DataflowEndpointResource,
      options?: DataflowEndpointCreateOrUpdateOptionalParams,
    ) =>
      dataflowEndpointCreateOrUpdate(
        context,
        resourceGroupName,
        instanceName,
        dataflowEndpointName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      instanceName: string,
      dataflowEndpointName: string,
      options?: DataflowEndpointGetOptionalParams,
    ) =>
      dataflowEndpointGet(context, resourceGroupName, instanceName, dataflowEndpointName, options),
  };
}

export function _getDataflowEndpointOperations(
  context: IoTOperationsContext,
): DataflowEndpointOperations {
  return {
    ..._getDataflowEndpoint(context),
  };
}
