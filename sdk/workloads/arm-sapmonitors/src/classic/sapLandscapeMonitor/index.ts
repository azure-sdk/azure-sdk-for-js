// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import { SapLandscapeMonitorResource } from "../../models/models.js";
import {
  SapLandscapeMonitorListByMonitorOptionalParams,
  SapLandscapeMonitorDeleteOptionalParams,
  SapLandscapeMonitorUpdateOptionalParams,
  SapLandscapeMonitorCreateOptionalParams,
  SapLandscapeMonitorGetOptionalParams,
} from "../../api/sapLandscapeMonitor/options.js";
import {
  listByMonitor,
  $delete,
  update,
  create,
  get,
} from "../../api/sapLandscapeMonitor/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a SapLandscapeMonitor operations. */
export interface SapLandscapeMonitorOperations {
  /** Gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name. */
  listByMonitor: (
    resourceGroupName: string,
    monitorName: string,
    options?: SapLandscapeMonitorListByMonitorOptionalParams,
  ) => PagedAsyncIterableIterator<SapLandscapeMonitorResource>;
  /** Deletes a SAP Landscape Monitor Dashboard with the specified subscription, resource group, and SAP monitor name. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
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
    ) => listByMonitor(context, resourceGroupName, monitorName, options),
    delete: (
      resourceGroupName: string,
      monitorName: string,
      options?: SapLandscapeMonitorDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, monitorName, options),
    update: (
      resourceGroupName: string,
      monitorName: string,
      properties: SapLandscapeMonitorResource,
      options?: SapLandscapeMonitorUpdateOptionalParams,
    ) => update(context, resourceGroupName, monitorName, properties, options),
    create: (
      resourceGroupName: string,
      monitorName: string,
      resource: SapLandscapeMonitorResource,
      options?: SapLandscapeMonitorCreateOptionalParams,
    ) => create(context, resourceGroupName, monitorName, resource, options),
    get: (
      resourceGroupName: string,
      monitorName: string,
      options?: SapLandscapeMonitorGetOptionalParams,
    ) => get(context, resourceGroupName, monitorName, options),
  };
}

export function _getSapLandscapeMonitorOperations(
  context: WorkloadsContext,
): SapLandscapeMonitorOperations {
  return {
    ..._getSapLandscapeMonitor(context),
  };
}
