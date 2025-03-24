// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import { alertsList, alertsDelete, alertsCreate, alertsGet } from "../../api/alerts/index.js";
import { Alert } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AlertsListOptionalParams,
  AlertsDeleteOptionalParams,
  AlertsCreateOptionalParams,
  AlertsGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a Alerts operations. */
export interface AlertsOperations {
  /** Gets a list of alerts in the specified SAP monitor. The operations returns various properties of each alerts. */
  list: (
    resourceGroupName: string,
    monitorName: string,
    options?: AlertsListOptionalParams,
  ) => PagedAsyncIterableIterator<Alert>;
  /** Deletes an alert for the specified subscription, resource group, SAP monitor name, and resource name. */
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
      alertsList(context, resourceGroupName, monitorName, options),
    delete: (
      resourceGroupName: string,
      monitorName: string,
      alertName: string,
      options?: AlertsDeleteOptionalParams,
    ) => alertsDelete(context, resourceGroupName, monitorName, alertName, options),
    create: (
      resourceGroupName: string,
      monitorName: string,
      alertName: string,
      resource: Alert,
      options?: AlertsCreateOptionalParams,
    ) => alertsCreate(context, resourceGroupName, monitorName, alertName, resource, options),
    get: (
      resourceGroupName: string,
      monitorName: string,
      alertName: string,
      options?: AlertsGetOptionalParams,
    ) => alertsGet(context, resourceGroupName, monitorName, alertName, options),
  };
}

export function _getAlertsOperations(context: WorkloadsContext): AlertsOperations {
  return {
    ..._getAlerts(context),
  };
}
