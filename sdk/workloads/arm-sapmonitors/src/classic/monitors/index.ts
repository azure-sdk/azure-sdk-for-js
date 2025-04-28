// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import { Monitor, UpdateMonitorRequest } from "../../models/models.js";
import {
  MonitorsListOptionalParams,
  MonitorsListByResourceGroupOptionalParams,
  MonitorsDeleteOptionalParams,
  MonitorsUpdateOptionalParams,
  MonitorsCreateOptionalParams,
  MonitorsGetOptionalParams,
} from "../../api/monitors/options.js";
import {
  list,
  listByResourceGroup,
  $delete,
  update,
  create,
  get,
} from "../../api/monitors/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Monitors operations. */
export interface MonitorsOperations {
  /** Gets a list of SAP monitors in the specified subscription. The operations returns various properties of each SAP monitor. */
  list: (options?: MonitorsListOptionalParams) => PagedAsyncIterableIterator<Monitor>;
  /** Gets a list of SAP monitors in the specified resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: MonitorsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Monitor>;
  /** Deletes a SAP monitor with the specified subscription, resource group, and SAP monitor name. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Patches the Tags field of a SAP monitor for the specified subscription, resource group, and SAP monitor name. */
  update: (
    resourceGroupName: string,
    monitorName: string,
    properties: UpdateMonitorRequest,
    options?: MonitorsUpdateOptionalParams,
  ) => PollerLike<OperationState<Monitor>, Monitor>;
  /** Creates a SAP monitor for the specified subscription, resource group, and resource name. */
  create: (
    resourceGroupName: string,
    monitorName: string,
    resource: Monitor,
    options?: MonitorsCreateOptionalParams,
  ) => PollerLike<OperationState<Monitor>, Monitor>;
  /** Gets properties of a SAP monitor for the specified subscription, resource group, and resource name. */
  get: (
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsGetOptionalParams,
  ) => Promise<Monitor>;
}

function _getMonitors(context: WorkloadsContext) {
  return {
    list: (options?: MonitorsListOptionalParams) => list(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: MonitorsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      monitorName: string,
      options?: MonitorsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, monitorName, options),
    update: (
      resourceGroupName: string,
      monitorName: string,
      properties: UpdateMonitorRequest,
      options?: MonitorsUpdateOptionalParams,
    ) => update(context, resourceGroupName, monitorName, properties, options),
    create: (
      resourceGroupName: string,
      monitorName: string,
      resource: Monitor,
      options?: MonitorsCreateOptionalParams,
    ) => create(context, resourceGroupName, monitorName, resource, options),
    get: (resourceGroupName: string, monitorName: string, options?: MonitorsGetOptionalParams) =>
      get(context, resourceGroupName, monitorName, options),
  };
}

export function _getMonitorsOperations(context: WorkloadsContext): MonitorsOperations {
  return {
    ..._getMonitors(context),
  };
}
