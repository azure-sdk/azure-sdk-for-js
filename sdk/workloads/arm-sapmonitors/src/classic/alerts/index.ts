// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import {
  alertsGet,
  alertsCreate,
  alertsDelete,
  alertsList,
} from "../../api/alerts/index.js";
import { Alert } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AlertsGetOptionalParams,
  AlertsCreateOptionalParams,
  AlertsDeleteOptionalParams,
  AlertsListOptionalParams,
} from "../../api/options.js";

/** Interface representing a Alerts operations. */
export interface AlertsOperations {
  /** Gets properties of an alert for the specified subscription, resource group, SAP monitor name, and resource name. */
  get: (
    resourceGroupName: string,
    monitorName: string,
    alertName: string,
    options?: AlertsGetOptionalParams,
  ) => Promise<Alert>;
  /** Creates an alert for the specified subscription, resource group, SAP monitor name, and resource name. */
  create: (
    resourceGroupName: string,
    monitorName: string,
    alertName: string,
    resource: Alert,
    options?: AlertsCreateOptionalParams,
  ) => PollerLike<OperationState<Alert>, Alert>;
  /** Deletes an alert for the specified subscription, resource group, SAP monitor name, and resource name. */
  delete: (
    resourceGroupName: string,
    monitorName: string,
    alertName: string,
    options?: AlertsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Gets a list of alerts in the specified SAP monitor. The operations returns various properties of each alerts. */
  list: (
    resourceGroupName: string,
    monitorName: string,
    options?: AlertsListOptionalParams,
  ) => PagedAsyncIterableIterator<Alert>;
}

export function getAlerts(context: WorkloadsContext, subscriptionId: string) {
  return {
    get: (
      resourceGroupName: string,
      monitorName: string,
      alertName: string,
      options?: AlertsGetOptionalParams,
    ) =>
      alertsGet(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        alertName,
        options,
      ),
    create: (
      resourceGroupName: string,
      monitorName: string,
      alertName: string,
      resource: Alert,
      options?: AlertsCreateOptionalParams,
    ) =>
      alertsCreate(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        alertName,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      monitorName: string,
      alertName: string,
      options?: AlertsDeleteOptionalParams,
    ) =>
      alertsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        alertName,
        options,
      ),
    list: (
      resourceGroupName: string,
      monitorName: string,
      options?: AlertsListOptionalParams,
    ) =>
      alertsList(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        options,
      ),
  };
}

export function getAlertsOperations(
  context: WorkloadsContext,
  subscriptionId: string,
): AlertsOperations {
  return {
    ...getAlerts(context, subscriptionId),
  };
}
