// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import {
  monitorsList,
  monitorsListByResourceGroup,
  monitorsDelete,
  monitorsUpdate,
  monitorsCreate,
  monitorsGet,
} from "../../api/monitors/index.js";
import { Monitor, UpdateMonitorRequest } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  MonitorsListOptionalParams,
  MonitorsListByResourceGroupOptionalParams,
  MonitorsDeleteOptionalParams,
  MonitorsUpdateOptionalParams,
  MonitorsCreateOptionalParams,
  MonitorsGetOptionalParams,
} from "../../api/options.js";

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
    list: (options?: MonitorsListOptionalParams) => monitorsList(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: MonitorsListByResourceGroupOptionalParams,
    ) => monitorsListByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      monitorName: string,
      options?: MonitorsDeleteOptionalParams,
    ) => monitorsDelete(context, resourceGroupName, monitorName, options),
    update: (
      resourceGroupName: string,
      monitorName: string,
      properties: UpdateMonitorRequest,
      options?: MonitorsUpdateOptionalParams,
    ) => monitorsUpdate(context, resourceGroupName, monitorName, properties, options),
    create: (
      resourceGroupName: string,
      monitorName: string,
      resource: Monitor,
      options?: MonitorsCreateOptionalParams,
    ) => monitorsCreate(context, resourceGroupName, monitorName, resource, options),
    get: (resourceGroupName: string, monitorName: string, options?: MonitorsGetOptionalParams) =>
      monitorsGet(context, resourceGroupName, monitorName, options),
  };
}

export function _getMonitorsOperations(context: WorkloadsContext): MonitorsOperations {
  return {
    ..._getMonitors(context),
  };
}
