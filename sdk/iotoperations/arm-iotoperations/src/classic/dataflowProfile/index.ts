// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsContext } from "../../api/ioTOperationsContext.js";
import { DataflowProfileResource } from "../../models/models.js";
import {
  DataflowProfileListByResourceGroupOptionalParams,
  DataflowProfileDeleteOptionalParams,
  DataflowProfileCreateOrUpdateOptionalParams,
  DataflowProfileGetOptionalParams,
} from "../../api/dataflowProfile/options.js";
import {
  dataflowProfileListByResourceGroup,
  dataflowProfileDelete,
  dataflowProfileCreateOrUpdate,
  dataflowProfileGet,
} from "../../api/dataflowProfile/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a DataflowProfile operations. */
export interface DataflowProfileOperations {
  /** List DataflowProfileResource resources by InstanceResource */
  listByResourceGroup: (
    resourceGroupName: string,
    instanceName: string,
    options?: DataflowProfileListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<DataflowProfileResource>;
  /** Delete a DataflowProfileResource */
  delete: (
    resourceGroupName: string,
    instanceName: string,
    dataflowProfileName: string,
    options?: DataflowProfileDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a DataflowProfileResource */
  createOrUpdate: (
    resourceGroupName: string,
    instanceName: string,
    dataflowProfileName: string,
    resource: DataflowProfileResource,
    options?: DataflowProfileCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<DataflowProfileResource>, DataflowProfileResource>;
  /** Get a DataflowProfileResource */
  get: (
    resourceGroupName: string,
    instanceName: string,
    dataflowProfileName: string,
    options?: DataflowProfileGetOptionalParams,
  ) => Promise<DataflowProfileResource>;
}

function _getDataflowProfile(context: IoTOperationsContext) {
  return {
    listByResourceGroup: (
      resourceGroupName: string,
      instanceName: string,
      options?: DataflowProfileListByResourceGroupOptionalParams,
    ) => dataflowProfileListByResourceGroup(context, resourceGroupName, instanceName, options),
    delete: (
      resourceGroupName: string,
      instanceName: string,
      dataflowProfileName: string,
      options?: DataflowProfileDeleteOptionalParams,
    ) =>
      dataflowProfileDelete(context, resourceGroupName, instanceName, dataflowProfileName, options),
    createOrUpdate: (
      resourceGroupName: string,
      instanceName: string,
      dataflowProfileName: string,
      resource: DataflowProfileResource,
      options?: DataflowProfileCreateOrUpdateOptionalParams,
    ) =>
      dataflowProfileCreateOrUpdate(
        context,
        resourceGroupName,
        instanceName,
        dataflowProfileName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      instanceName: string,
      dataflowProfileName: string,
      options?: DataflowProfileGetOptionalParams,
    ) => dataflowProfileGet(context, resourceGroupName, instanceName, dataflowProfileName, options),
  };
}

export function _getDataflowProfileOperations(
  context: IoTOperationsContext,
): DataflowProfileOperations {
  return {
    ..._getDataflowProfile(context),
  };
}
