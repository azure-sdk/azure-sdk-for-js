// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogContext } from "../../api/datadogContext.js";
import { MonitoredSubscriptionProperties } from "../../models/models.js";
import {
  MonitoredSubscriptionsListOptionalParams,
  MonitoredSubscriptionsDeleteOptionalParams,
  MonitoredSubscriptionsUpdateOptionalParams,
  MonitoredSubscriptionsCreateorUpdateOptionalParams,
  MonitoredSubscriptionsGetOptionalParams,
} from "../../api/monitoredSubscriptions/options.js";
import {
  list,
  $delete,
  update,
  createorUpdate,
  get,
} from "../../api/monitoredSubscriptions/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a MonitoredSubscriptions operations. */
export interface MonitoredSubscriptionsOperations {
  /** List the subscriptions currently being monitored by the Datadog monitor resource. */
  list: (
    resourceGroupName: string,
    monitorName: string,
    options?: MonitoredSubscriptionsListOptionalParams,
  ) => PagedAsyncIterableIterator<MonitoredSubscriptionProperties>;
  /** Updates the subscriptions that are being monitored by the Datadog monitor resource */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    monitorName: string,
    configurationName: string,
    options?: MonitoredSubscriptionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates the subscriptions that are being monitored by the Datadog monitor resource */
  update: (
    resourceGroupName: string,
    monitorName: string,
    configurationName: string,
    body: MonitoredSubscriptionProperties,
    options?: MonitoredSubscriptionsUpdateOptionalParams,
  ) => PollerLike<OperationState<MonitoredSubscriptionProperties>, MonitoredSubscriptionProperties>;
  /** Add the subscriptions that should be monitored by the Datadog monitor resource. */
  createorUpdate: (
    resourceGroupName: string,
    monitorName: string,
    configurationName: string,
    body: MonitoredSubscriptionProperties,
    options?: MonitoredSubscriptionsCreateorUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List the subscriptions currently being monitored by the Datadog monitor resource. */
  get: (
    resourceGroupName: string,
    monitorName: string,
    configurationName: string,
    options?: MonitoredSubscriptionsGetOptionalParams,
  ) => Promise<MonitoredSubscriptionProperties>;
}

function _getMonitoredSubscriptions(context: DatadogContext) {
  return {
    list: (
      resourceGroupName: string,
      monitorName: string,
      options?: MonitoredSubscriptionsListOptionalParams,
    ) => list(context, resourceGroupName, monitorName, options),
    delete: (
      resourceGroupName: string,
      monitorName: string,
      configurationName: string,
      options?: MonitoredSubscriptionsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, monitorName, configurationName, options),
    update: (
      resourceGroupName: string,
      monitorName: string,
      configurationName: string,
      body: MonitoredSubscriptionProperties,
      options?: MonitoredSubscriptionsUpdateOptionalParams,
    ) => update(context, resourceGroupName, monitorName, configurationName, body, options),
    createorUpdate: (
      resourceGroupName: string,
      monitorName: string,
      configurationName: string,
      body: MonitoredSubscriptionProperties,
      options?: MonitoredSubscriptionsCreateorUpdateOptionalParams,
    ) => createorUpdate(context, resourceGroupName, monitorName, configurationName, body, options),
    get: (
      resourceGroupName: string,
      monitorName: string,
      configurationName: string,
      options?: MonitoredSubscriptionsGetOptionalParams,
    ) => get(context, resourceGroupName, monitorName, configurationName, options),
  };
}

export function _getMonitoredSubscriptionsOperations(
  context: DatadogContext,
): MonitoredSubscriptionsOperations {
  return {
    ..._getMonitoredSubscriptions(context),
  };
}
