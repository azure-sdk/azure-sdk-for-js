// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzureMonitorWorkspacesCreateOrUpdateOptionalParams,
  AzureMonitorWorkspacesDeleteOptionalParams,
  AzureMonitorWorkspacesGetOptionalParams,
  AzureMonitorWorkspacesListByResourceGroupOptionalParams,
  AzureMonitorWorkspacesListBySubscriptionOptionalParams,
  AzureMonitorWorkspacesUpdateOptionalParams,
  MonitorContext as Client,
} from "../index.js";
import {
  AzureMonitorWorkspace,
  azureMonitorWorkspaceSerializer,
  azureMonitorWorkspaceDeserializer,
  AzureMonitorWorkspaceUpdate,
  azureMonitorWorkspaceUpdateSerializer,
  _AzureMonitorWorkspaceListResult,
  _azureMonitorWorkspaceListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _azureMonitorWorkspacesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  options: AzureMonitorWorkspacesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
      subscriptionId,
      resourceGroupName,
      azureMonitorWorkspaceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _azureMonitorWorkspacesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AzureMonitorWorkspace> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return azureMonitorWorkspaceDeserializer(result.body);
}

/** Returns the specific Azure Monitor workspace */
export async function azureMonitorWorkspacesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  options: AzureMonitorWorkspacesGetOptionalParams = { requestOptions: {} },
): Promise<AzureMonitorWorkspace> {
  const result = await _azureMonitorWorkspacesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    azureMonitorWorkspaceName,
    options,
  );
  return _azureMonitorWorkspacesGetDeserialize(result);
}

export function _azureMonitorWorkspacesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  resource: AzureMonitorWorkspace,
  options: AzureMonitorWorkspacesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
      subscriptionId,
      resourceGroupName,
      azureMonitorWorkspaceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: azureMonitorWorkspaceSerializer(resource),
    });
}

export async function _azureMonitorWorkspacesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AzureMonitorWorkspace> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return azureMonitorWorkspaceDeserializer(result.body);
}

/** Create or update a workspace */
export function azureMonitorWorkspacesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  resource: AzureMonitorWorkspace,
  options: AzureMonitorWorkspacesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<AzureMonitorWorkspace>, AzureMonitorWorkspace> {
  return getLongRunningPoller(
    context,
    _azureMonitorWorkspacesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _azureMonitorWorkspacesCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          azureMonitorWorkspaceName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<AzureMonitorWorkspace>, AzureMonitorWorkspace>;
}

export function _azureMonitorWorkspacesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  properties: AzureMonitorWorkspaceUpdate,
  options: AzureMonitorWorkspacesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
      subscriptionId,
      resourceGroupName,
      azureMonitorWorkspaceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: azureMonitorWorkspaceUpdateSerializer(properties),
    });
}

export async function _azureMonitorWorkspacesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AzureMonitorWorkspace> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return azureMonitorWorkspaceDeserializer(result.body);
}

/** Updates part of a workspace */
export async function azureMonitorWorkspacesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  properties: AzureMonitorWorkspaceUpdate,
  options: AzureMonitorWorkspacesUpdateOptionalParams = { requestOptions: {} },
): Promise<AzureMonitorWorkspace> {
  const result = await _azureMonitorWorkspacesUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    azureMonitorWorkspaceName,
    properties,
    options,
  );
  return _azureMonitorWorkspacesUpdateDeserialize(result);
}

export function _azureMonitorWorkspacesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  options: AzureMonitorWorkspacesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
      subscriptionId,
      resourceGroupName,
      azureMonitorWorkspaceName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _azureMonitorWorkspacesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a workspace */
export function azureMonitorWorkspacesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  azureMonitorWorkspaceName: string,
  options: AzureMonitorWorkspacesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _azureMonitorWorkspacesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _azureMonitorWorkspacesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          azureMonitorWorkspaceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _azureMonitorWorkspacesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AzureMonitorWorkspacesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _azureMonitorWorkspacesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_AzureMonitorWorkspaceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _azureMonitorWorkspaceListResultDeserializer(result.body);
}

/** Lists all workspaces in the specified resource group */
export function azureMonitorWorkspacesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AzureMonitorWorkspacesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AzureMonitorWorkspace> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _azureMonitorWorkspacesListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _azureMonitorWorkspacesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _azureMonitorWorkspacesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: AzureMonitorWorkspacesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Monitor/accounts",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _azureMonitorWorkspacesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_AzureMonitorWorkspaceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _azureMonitorWorkspaceListResultDeserializer(result.body);
}

/** Lists all workspaces in the specified subscription */
export function azureMonitorWorkspacesListBySubscription(
  context: Client,
  subscriptionId: string,
  options: AzureMonitorWorkspacesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AzureMonitorWorkspace> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _azureMonitorWorkspacesListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _azureMonitorWorkspacesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
