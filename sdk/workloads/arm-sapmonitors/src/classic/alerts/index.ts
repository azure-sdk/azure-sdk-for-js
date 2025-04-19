// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import { Alert } from "../../models/models.js";
import {
  AlertsListOptionalParams,
  AlertsDeleteOptionalParams,
  AlertsCreateOptionalParams,
  AlertsGetOptionalParams,
} from "../../api/alerts/options.js";
import { list, $delete, create, get } from "../../api/alerts/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Alerts operations. */
export interface AlertsOperations {
  /** Gets a list of alerts in the specified SAP monitor. The operations returns various properties of each alerts. */
  list: (
    resourceGroupName: string,
    monitorName: string,
    options?: AlertsListOptionalParams,
  ) => PagedAsyncIterableIterator<Alert>;
  /** Deletes an alert for the specified subscription, resource group, SAP monitor name, and resource name. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    monitorName: string,
    alertName: string,
    options?: AlertsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Creates an alert for the specified subscription, resource group, SAP monitor name, and resource name. */
  create: (
    resourceGroupName: string,
    monitorName: string,
    alertName: string,
    resource: Alert,
    options?: AlertsCreateOptionalParams,
  ) => PollerLike<OperationState<Alert>, Alert>;
  /** Gets properties of an alert for the specified subscription, resource group, SAP monitor name, and resource name. */
  get: (
    resourceGroupName: string,
    monitorName: string,
    alertName: string,
    options?: AlertsGetOptionalParams,
  ) => Promise<Alert>;
}

function _getAlerts(context: WorkloadsContext) {
  return {
    list: (resourceGroupName: string, monitorName: string, options?: AlertsListOptionalParams) =>
      list(context, resourceGroupName, monitorName, options),
    delete: (
      resourceGroupName: string,
      monitorName: string,
      alertName: string,
      options?: AlertsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, monitorName, alertName, options),
    create: (
      resourceGroupName: string,
      monitorName: string,
      alertName: string,
      resource: Alert,
      options?: AlertsCreateOptionalParams,
    ) => create(context, resourceGroupName, monitorName, alertName, resource, options),
    get: (
      resourceGroupName: string,
      monitorName: string,
      alertName: string,
      options?: AlertsGetOptionalParams,
    ) => get(context, resourceGroupName, monitorName, alertName, options),
  };
}

export function _getAlertsOperations(context: WorkloadsContext): AlertsOperations {
  return {
    ..._getAlerts(context),
  };
}
