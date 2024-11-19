// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import {
  sapLandscapeMonitorGet,
  sapLandscapeMonitorCreate,
  sapLandscapeMonitorUpdate,
  sapLandscapeMonitorDelete,
  sapLandscapeMonitorListByMonitor,
} from "../../api/sapLandscapeMonitor/index.js";
import { SapLandscapeMonitorResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  SapLandscapeMonitorGetOptionalParams,
  SapLandscapeMonitorCreateOptionalParams,
  SapLandscapeMonitorUpdateOptionalParams,
  SapLandscapeMonitorDeleteOptionalParams,
  SapLandscapeMonitorListByMonitorOptionalParams,
} from "../../api/options.js";

/** Interface representing a SapLandscapeMonitor operations. */
export interface SapLandscapeMonitorOperations {
  /** Gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name. */
  get: (
    resourceGroupName: string,
    monitorName: string,
    options?: SapLandscapeMonitorGetOptionalParams,
  ) => Promise<SapLandscapeMonitorResource>;
  /** Creates a SAP Landscape Monitor Dashboard for the specified subscription, resource group, and resource name. */
  create: (
    resourceGroupName: string,
    monitorName: string,
    resource: SapLandscapeMonitorResource,
    options?: SapLandscapeMonitorCreateOptionalParams,
  ) => Promise<SapLandscapeMonitorResource>;
  /** Patches the SAP Landscape Monitor Dashboard for the specified subscription, resource group, and SAP monitor name. */
  update: (
    resourceGroupName: string,
    monitorName: string,
    properties: SapLandscapeMonitorResource,
    options?: SapLandscapeMonitorUpdateOptionalParams,
  ) => Promise<SapLandscapeMonitorResource>;
  /** Deletes a SAP Landscape Monitor Dashboard with the specified subscription, resource group, and SAP monitor name. */
  delete: (
    resourceGroupName: string,
    monitorName: string,
    options?: SapLandscapeMonitorDeleteOptionalParams,
  ) => Promise<void>;
  /** Gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name. */
  listByMonitor: (
    resourceGroupName: string,
    monitorName: string,
    options?: SapLandscapeMonitorListByMonitorOptionalParams,
  ) => PagedAsyncIterableIterator<SapLandscapeMonitorResource>;
}

export function getSapLandscapeMonitor(
  context: WorkloadsContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      monitorName: string,
      options?: SapLandscapeMonitorGetOptionalParams,
    ) =>
      sapLandscapeMonitorGet(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        options,
      ),
    create: (
      resourceGroupName: string,
      monitorName: string,
      resource: SapLandscapeMonitorResource,
      options?: SapLandscapeMonitorCreateOptionalParams,
    ) =>
      sapLandscapeMonitorCreate(
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
      properties: SapLandscapeMonitorResource,
      options?: SapLandscapeMonitorUpdateOptionalParams,
    ) =>
      sapLandscapeMonitorUpdate(
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
      options?: SapLandscapeMonitorDeleteOptionalParams,
    ) =>
      sapLandscapeMonitorDelete(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        options,
      ),
    listByMonitor: (
      resourceGroupName: string,
      monitorName: string,
      options?: SapLandscapeMonitorListByMonitorOptionalParams,
    ) =>
      sapLandscapeMonitorListByMonitor(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        options,
      ),
  };
}

export function getSapLandscapeMonitorOperations(
  context: WorkloadsContext,
  subscriptionId: string,
): SapLandscapeMonitorOperations {
  return {
    ...getSapLandscapeMonitor(context, subscriptionId),
  };
}
