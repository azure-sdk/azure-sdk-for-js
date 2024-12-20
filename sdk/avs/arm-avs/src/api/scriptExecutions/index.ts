// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AvsContext as Client,
  ScriptExecutionsCreateOrUpdateOptionalParams,
  ScriptExecutionsDeleteOptionalParams,
  ScriptExecutionsGetExecutionLogsOptionalParams,
  ScriptExecutionsGetOptionalParams,
  ScriptExecutionsListOptionalParams,
} from "../index.js";
import {
  _ScriptExecutionsList,
  _scriptExecutionsListDeserializer,
  ScriptExecution,
  scriptExecutionSerializer,
  scriptExecutionDeserializer,
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

export function _scriptExecutionsListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: ScriptExecutionsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _scriptExecutionsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ScriptExecutionsList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _scriptExecutionsListDeserializer(result.body);
}

/** List ScriptExecution resources by PrivateCloud */
export function scriptExecutionsList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: ScriptExecutionsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ScriptExecution> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _scriptExecutionsListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _scriptExecutionsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _scriptExecutionsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  options: ScriptExecutionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      scriptExecutionName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _scriptExecutionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ScriptExecution> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return scriptExecutionDeserializer(result.body);
}

/** Get a ScriptExecution */
export async function scriptExecutionsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  options: ScriptExecutionsGetOptionalParams = { requestOptions: {} },
): Promise<ScriptExecution> {
  const result = await _scriptExecutionsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    scriptExecutionName,
    options,
  );
  return _scriptExecutionsGetDeserialize(result);
}

export function _scriptExecutionsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  scriptExecution: ScriptExecution,
  options: ScriptExecutionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      scriptExecutionName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: scriptExecutionSerializer(scriptExecution),
    });
}

export async function _scriptExecutionsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ScriptExecution> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return scriptExecutionDeserializer(result.body);
}

/** Create a ScriptExecution */
export function scriptExecutionsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  scriptExecution: ScriptExecution,
  options: ScriptExecutionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<ScriptExecution>, ScriptExecution> {
  return getLongRunningPoller(
    context,
    _scriptExecutionsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _scriptExecutionsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          scriptExecutionName,
          scriptExecution,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<ScriptExecution>, ScriptExecution>;
}

export function _scriptExecutionsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  options: ScriptExecutionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      scriptExecutionName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _scriptExecutionsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a ScriptExecution */
export function scriptExecutionsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  options: ScriptExecutionsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _scriptExecutionsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _scriptExecutionsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          scriptExecutionName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _scriptExecutionsGetExecutionLogsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  options: ScriptExecutionsGetExecutionLogsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}/getExecutionLogs",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      scriptExecutionName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: !options["scriptOutputStreamType"]
        ? options["scriptOutputStreamType"]
        : !options["scriptOutputStreamType"]
          ? options["scriptOutputStreamType"]
          : options["scriptOutputStreamType"].map((p: any) => {
              return p;
            }),
    });
}

export async function _scriptExecutionsGetExecutionLogsDeserialize(
  result: PathUncheckedResponse,
): Promise<ScriptExecution> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return scriptExecutionDeserializer(result.body);
}

/** Return the logs for a script execution resource */
export async function scriptExecutionsGetExecutionLogs(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  options: ScriptExecutionsGetExecutionLogsOptionalParams = {
    requestOptions: {},
  },
): Promise<ScriptExecution> {
  const result = await _scriptExecutionsGetExecutionLogsSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    scriptExecutionName,
    options,
  );
  return _scriptExecutionsGetExecutionLogsDeserialize(result);
}
