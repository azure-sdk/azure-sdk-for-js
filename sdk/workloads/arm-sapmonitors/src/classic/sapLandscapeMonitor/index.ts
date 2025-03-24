// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import {
  sapLandscapeMonitorListByMonitor,
  sapLandscapeMonitorDelete,
  sapLandscapeMonitorUpdate,
  sapLandscapeMonitorCreate,
  sapLandscapeMonitorGet,
} from "../../api/sapLandscapeMonitor/index.js";
import { SapLandscapeMonitorResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  SapLandscapeMonitorListByMonitorOptionalParams,
  SapLandscapeMonitorDeleteOptionalParams,
  SapLandscapeMonitorUpdateOptionalParams,
  SapLandscapeMonitorCreateOptionalParams,
  SapLandscapeMonitorGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a SapLandscapeMonitor operations. */
export interface SapLandscapeMonitorOperations {
  /** Gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name. */
  listByMonitor: (
    resourceGroupName: string,
    monitorName: string,
    options?: SapLandscapeMonitorListByMonitorOptionalParams,
  ) => PagedAsyncIterableIterator<SapLandscapeMonitorResource>;
  /** Deletes a SAP Landscape Monitor Dashboard with the specified subscription, resource group, and SAP monitor name. */
  delete: (
    resourceGroupName: string,
    monitorName: string,
    options?: SapLandscapeMonitorDeleteOptionalParams,
  ) => Promise<void>;
  /** Patches the SAP Landscape Monitor Dashboard for the specified subscription, resource group, and SAP monitor name. */
  update: (
    resourceGroupName: string,
    monitorName: string,
    properties: SapLandscapeMonitorResource,
    options?: SapLandscapeMonitorUpdateOptionalParams,
  ) => Promise<SapLandscapeMonitorResource>;
  /** Creates a SAP Landscape Monitor Dashboard for the specified subscription, resource group, and resource name. */
  create: (
    resourceGroupName: string,
    monitorName: string,
    resource: SapLandscapeMonitorResource,
    options?: SapLandscapeMonitorCreateOptionalParams,
  ) => Promise<SapLandscapeMonitorResource>;
  /** Gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name. */
  get: (
    resourceGroupName: string,
    monitorName: string,
    options?: SapLandscapeMonitorGetOptionalParams,
  ) => Promise<SapLandscapeMonitorResource>;
}

function _getSapLandscapeMonitor(context: WorkloadsContext) {
  return {
    listByMonitor: (
      resourceGroupName: string,
      monitorName: string,
      options?: SapLandscapeMonitorListByMonitorOptionalParams,
    ) => sapLandscapeMonitorListByMonitor(context, resourceGroupName, monitorName, options),
    delete: (
      resourceGroupName: string,
      monitorName: string,
      options?: SapLandscapeMonitorDeleteOptionalParams,
    ) => sapLandscapeMonitorDelete(context, resourceGroupName, monitorName, options),
    update: (
      resourceGroupName: string,
      monitorName: string,
      properties: SapLandscapeMonitorResource,
      options?: SapLandscapeMonitorUpdateOptionalParams,
    ) => sapLandscapeMonitorUpdate(context, resourceGroupName, monitorName, properties, options),
    create: (
      resourceGroupName: string,
      monitorName: string,
      resource: SapLandscapeMonitorResource,
      options?: SapLandscapeMonitorCreateOptionalParams,
    ) => sapLandscapeMonitorCreate(context, resourceGroupName, monitorName, resource, options),
    get: (
      resourceGroupName: string,
      monitorName: string,
      options?: SapLandscapeMonitorGetOptionalParams,
    ) => sapLandscapeMonitorGet(context, resourceGroupName, monitorName, options),
  };
}

export function _getSapLandscapeMonitorOperations(
  context: WorkloadsContext,
): SapLandscapeMonitorOperations {
  return {
    ..._getSapLandscapeMonitor(context),
  };
}
