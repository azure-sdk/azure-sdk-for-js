// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AlertsCreateOptionalParams,
  AlertsDeleteOptionalParams,
  AlertsGetOptionalParams,
  AlertsListOptionalParams,
  WorkloadsContext as Client,
} from "../index.js";
import {
  errorResponseDeserializer,
  Alert,
  alertSerializer,
  alertDeserializer,
  _AlertListResult,
  _alertListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _alertsListSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: AlertsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/alerts{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _alertsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_AlertListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _alertListResultDeserializer(result.body);
}

/** Gets a list of alerts in the specified SAP monitor. The operations returns various properties of each alerts. */
export function alertsList(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: AlertsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Alert> {
  return buildPagedAsyncIterator(
    context,
    () => _alertsListSend(context, resourceGroupName, monitorName, options),
    _alertsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _alertsDeleteSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  alertName: string,
  options: AlertsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/alerts/{alertName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      alertName: alertName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _alertsDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes an alert for the specified subscription, resource group, SAP monitor name, and resource name. */
export function alertsDelete(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  alertName: string,
  options: AlertsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _alertsDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _alertsDeleteSend(context, resourceGroupName, monitorName, alertName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _alertsCreateSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  alertName: string,
  resource: Alert,
  options: AlertsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/alerts/{alertName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      alertName: alertName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: alertSerializer(resource),
  });
}

export async function _alertsCreateDeserialize(result: PathUncheckedResponse): Promise<Alert> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return alertDeserializer(result.body);
}

/** Creates an alert for the specified subscription, resource group, SAP monitor name, and resource name. */
export function alertsCreate(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  alertName: string,
  resource: Alert,
  options: AlertsCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Alert>, Alert> {
  return getLongRunningPoller(context, _alertsCreateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _alertsCreateSend(context, resourceGroupName, monitorName, alertName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<Alert>, Alert>;
}

export function _alertsGetSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  alertName: string,
  options: AlertsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/alerts/{alertName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      alertName: alertName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _alertsGetDeserialize(result: PathUncheckedResponse): Promise<Alert> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return alertDeserializer(result.body);
}

/** Gets properties of an alert for the specified subscription, resource group, SAP monitor name, and resource name. */
export async function alertsGet(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  alertName: string,
  options: AlertsGetOptionalParams = { requestOptions: {} },
): Promise<Alert> {
  const result = await _alertsGetSend(context, resourceGroupName, monitorName, alertName, options);
  return _alertsGetDeserialize(result);
}
