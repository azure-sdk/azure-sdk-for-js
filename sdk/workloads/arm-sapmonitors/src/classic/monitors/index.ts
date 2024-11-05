// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import { Monitor, UpdateMonitorRequest } from "../../models/models.js";
import {
  monitorsGet,
  monitorsCreate,
  monitorsUpdate,
  monitorsDelete,
  monitorsListByResourceGroup,
  monitorsList,
} from "../../api/monitors/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  MonitorsGetOptionalParams,
  MonitorsCreateOptionalParams,
  MonitorsUpdateOptionalParams,
  MonitorsDeleteOptionalParams,
  MonitorsListByResourceGroupOptionalParams,
  MonitorsListOptionalParams,
} from "../../models/options.js";

/** Interface representing a Monitors operations. */
export interface MonitorsOperations {
  /** Gets properties of a SAP monitor for the specified subscription, resource group, and resource name. */
  get: (
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsGetOptionalParams,
  ) => Promise<Monitor>;
  /** Creates a SAP monitor for the specified subscription, resource group, and resource name. */
  create: (
    resourceGroupName: string,
    monitorName: string,
    resource: Monitor,
    options?: MonitorsCreateOptionalParams,
  ) => PollerLike<OperationState<Monitor>, Monitor>;
  /** Patches the Tags field of a SAP monitor for the specified subscription, resource group, and SAP monitor name. */
  update: (
    resourceGroupName: string,
    monitorName: string,
    properties: UpdateMonitorRequest,
    options?: MonitorsUpdateOptionalParams,
  ) => PollerLike<OperationState<Monitor>, Monitor>;
  /** Deletes a SAP monitor with the specified subscription, resource group, and SAP monitor name. */
  delete: (
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Gets a list of SAP monitors in the specified resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: MonitorsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Monitor>;
  /** Gets a list of SAP monitors in the specified subscription. The operations returns various properties of each SAP monitor. */
  list: (
    options?: MonitorsListOptionalParams,
  ) => PagedAsyncIterableIterator<Monitor>;
}

export function getMonitors(context: WorkloadsContext, subscriptionId: string) {
  return {
    get: (
      resourceGroupName: string,
      monitorName: string,
      options?: MonitorsGetOptionalParams,
    ) =>
      monitorsGet(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        options,
      ),
    create: (
      resourceGroupName: string,
      monitorName: string,
      resource: Monitor,
      options?: MonitorsCreateOptionalParams,
    ) =>
      monitorsCreate(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      monitorName: string,
      properties: UpdateMonitorRequest,
      options?: MonitorsUpdateOptionalParams,
    ) =>
      monitorsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      monitorName: string,
      options?: MonitorsDeleteOptionalParams,
    ) =>
      monitorsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: MonitorsListByResourceGroupOptionalParams,
    ) =>
      monitorsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    list: (options?: MonitorsListOptionalParams) =>
      monitorsList(context, subscriptionId, options),
  };
}

export function getMonitorsOperations(
  context: WorkloadsContext,
  subscriptionId: string,
): MonitorsOperations {
  return {
    ...getMonitors(context, subscriptionId),
  };
}
