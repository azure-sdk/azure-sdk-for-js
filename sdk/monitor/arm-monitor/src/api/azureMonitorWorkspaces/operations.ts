// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MonitorContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  AzureMonitorWorkspace,
  azureMonitorWorkspaceSerializer,
  azureMonitorWorkspaceDeserializer,
  AzureMonitorWorkspaceUpdate,
  azureMonitorWorkspaceUpdateSerializer,
  _AzureMonitorWorkspaceListResult,
  _azureMonitorWorkspaceListResultDeserializer,
} from "../../models/models.js";
import {
  AzureMonitorWorkspacesListBySubscriptionOptionalParams,
  AzureMonitorWorkspacesListByResourceGroupOptionalParams,
  AzureMonitorWorkspacesDeleteOptionalParams,
  AzureMonitorWorkspacesUpdateOptionalParams,
  AzureMonitorWorkspacesCreateOrUpdateOptionalParams,
  AzureMonitorWorkspacesGetOptionalParams,
} from "./options.js";
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

export function _listBySubscriptionSend(
  context: Client,
  options: AzureMonitorWorkspacesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Monitor/accounts{?api-version}",
    {
      subscriptionId: context.subscriptionId,
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

export async function _listBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_AzureMonitorWorkspaceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _azureMonitorWorkspaceListResultDeserializer(result.body);
}

/** Lists all workspaces in the specified subscription */
export function listBySubscription(
  context: Client,
  options: AzureMonitorWorkspacesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AzureMonitorWorkspace> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, options),
    _listBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: AzureMonitorWorkspacesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
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

export async function _listByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_AzureMonitorWorkspaceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _azureMonitorWorkspaceListResultDeserializer(result.body);
}

/** Lists all workspaces in the specified resource group */
export function listByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: AzureMonitorWorkspacesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AzureMonitorWorkspace> {
  return buildPagedAsyncIterator(
    context,
    () => _listByResourceGroupSend(context, resourceGroupName, options),
    _listByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  options: AzureMonitorWorkspacesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      azureMonitorWorkspaceName: azureMonitorWorkspaceName,
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

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a workspace */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  options: AzureMonitorWorkspacesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(context, resourceGroupName, azureMonitorWorkspaceName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  properties: AzureMonitorWorkspaceUpdate,
  options: AzureMonitorWorkspacesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      azureMonitorWorkspaceName: azureMonitorWorkspaceName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: azureMonitorWorkspaceUpdateSerializer(properties),
  });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<AzureMonitorWorkspace> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return azureMonitorWorkspaceDeserializer(result.body);
}

/** Updates part of a workspace */
export async function update(
  context: Client,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  properties: AzureMonitorWorkspaceUpdate,
  options: AzureMonitorWorkspacesUpdateOptionalParams = { requestOptions: {} },
): Promise<AzureMonitorWorkspace> {
  const result = await _updateSend(
    context,
    resourceGroupName,
    azureMonitorWorkspaceName,
    properties,
    options,
  );
  return _updateDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  resource: AzureMonitorWorkspace,
  options: AzureMonitorWorkspacesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      azureMonitorWorkspaceName: azureMonitorWorkspaceName,
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
    body: azureMonitorWorkspaceSerializer(resource),
  });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AzureMonitorWorkspace> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return azureMonitorWorkspaceDeserializer(result.body);
}

/** Create or update a workspace */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  resource: AzureMonitorWorkspace,
  options: AzureMonitorWorkspacesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<AzureMonitorWorkspace>, AzureMonitorWorkspace> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(context, resourceGroupName, azureMonitorWorkspaceName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<AzureMonitorWorkspace>, AzureMonitorWorkspace>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  options: AzureMonitorWorkspacesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      azureMonitorWorkspaceName: azureMonitorWorkspaceName,
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

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<AzureMonitorWorkspace> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return azureMonitorWorkspaceDeserializer(result.body);
}

/** Returns the specific Azure Monitor workspace */
export async function get(
  context: Client,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  options: AzureMonitorWorkspacesGetOptionalParams = { requestOptions: {} },
): Promise<AzureMonitorWorkspace> {
  const result = await _getSend(context, resourceGroupName, azureMonitorWorkspaceName, options);
  return _getDeserialize(result);
}
