// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  scriptExecutionPropertiesSerializer,
  ScriptExecution,
  ScriptOutputStreamType,
  _ScriptExecutionsList,
} from "../../models/models.js";
import { AVSContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ScriptExecutionsListOptionalParams,
  ScriptExecutionsGetOptionalParams,
  ScriptExecutionsCreateOrUpdateOptionalParams,
  ScriptExecutionsDeleteOptionalParams,
  ScriptExecutionsGetExecutionLogsOptionalParams,
} from "../../models/options.js";

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

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              scriptCmdletId: p.properties?.["scriptCmdletId"],
              parameters:
                p.properties?.["parameters"] === undefined
                  ? p.properties?.["parameters"]
                  : p.properties?.["parameters"],
              hiddenParameters:
                p.properties?.["hiddenParameters"] === undefined
                  ? p.properties?.["hiddenParameters"]
                  : p.properties?.["hiddenParameters"],
              failureReason: p.properties?.["failureReason"],
              timeout: p.properties?.["timeout"],
              retention: p.properties?.["retention"],
              submittedAt:
                p.properties?.["submittedAt"] !== undefined
                  ? new Date(p.properties?.["submittedAt"])
                  : undefined,
              startedAt:
                p.properties?.["startedAt"] !== undefined
                  ? new Date(p.properties?.["startedAt"])
                  : undefined,
              finishedAt:
                p.properties?.["finishedAt"] !== undefined
                  ? new Date(p.properties?.["finishedAt"])
                  : undefined,
              provisioningState: p.properties?.["provisioningState"],
              output: p.properties?.["output"],
              namedOutputs: p.properties?.["namedOutputs"],
              information: p.properties?.["information"],
              warnings: p.properties?.["warnings"],
              errors: p.properties?.["errors"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
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

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          scriptCmdletId: result.body.properties?.["scriptCmdletId"],
          parameters:
            result.body.properties?.["parameters"] === undefined
              ? result.body.properties?.["parameters"]
              : result.body.properties?.["parameters"],
          hiddenParameters:
            result.body.properties?.["hiddenParameters"] === undefined
              ? result.body.properties?.["hiddenParameters"]
              : result.body.properties?.["hiddenParameters"],
          failureReason: result.body.properties?.["failureReason"],
          timeout: result.body.properties?.["timeout"],
          retention: result.body.properties?.["retention"],
          submittedAt:
            result.body.properties?.["submittedAt"] !== undefined
              ? new Date(result.body.properties?.["submittedAt"])
              : undefined,
          startedAt:
            result.body.properties?.["startedAt"] !== undefined
              ? new Date(result.body.properties?.["startedAt"])
              : undefined,
          finishedAt:
            result.body.properties?.["finishedAt"] !== undefined
              ? new Date(result.body.properties?.["finishedAt"])
              : undefined,
          provisioningState: result.body.properties?.["provisioningState"],
          output: result.body.properties?.["output"],
          namedOutputs: result.body.properties?.["namedOutputs"],
          information: result.body.properties?.["information"],
          warnings: result.body.properties?.["warnings"],
          errors: result.body.properties?.["errors"],
        },
  };
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
      body: {
        properties: !scriptExecution.properties
          ? scriptExecution.properties
          : scriptExecutionPropertiesSerializer(scriptExecution.properties),
      },
    });
}

export async function _scriptExecutionsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ScriptExecution> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          scriptCmdletId: result.body.properties?.["scriptCmdletId"],
          parameters:
            result.body.properties?.["parameters"] === undefined
              ? result.body.properties?.["parameters"]
              : result.body.properties?.["parameters"],
          hiddenParameters:
            result.body.properties?.["hiddenParameters"] === undefined
              ? result.body.properties?.["hiddenParameters"]
              : result.body.properties?.["hiddenParameters"],
          failureReason: result.body.properties?.["failureReason"],
          timeout: result.body.properties?.["timeout"],
          retention: result.body.properties?.["retention"],
          submittedAt:
            result.body.properties?.["submittedAt"] !== undefined
              ? new Date(result.body.properties?.["submittedAt"])
              : undefined,
          startedAt:
            result.body.properties?.["startedAt"] !== undefined
              ? new Date(result.body.properties?.["startedAt"])
              : undefined,
          finishedAt:
            result.body.properties?.["finishedAt"] !== undefined
              ? new Date(result.body.properties?.["finishedAt"])
              : undefined,
          provisioningState: result.body.properties?.["provisioningState"],
          output: result.body.properties?.["output"],
          namedOutputs: result.body.properties?.["namedOutputs"],
          information: result.body.properties?.["information"],
          warnings: result.body.properties?.["warnings"],
          errors: result.body.properties?.["errors"],
        },
  };
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
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _scriptExecutionsGetExecutionLogsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  scriptOutputStreamType?: ScriptOutputStreamType[],
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
      body: scriptOutputStreamType,
    });
}

export async function _scriptExecutionsGetExecutionLogsDeserialize(
  result: PathUncheckedResponse,
): Promise<ScriptExecution> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          scriptCmdletId: result.body.properties?.["scriptCmdletId"],
          parameters:
            result.body.properties?.["parameters"] === undefined
              ? result.body.properties?.["parameters"]
              : result.body.properties?.["parameters"],
          hiddenParameters:
            result.body.properties?.["hiddenParameters"] === undefined
              ? result.body.properties?.["hiddenParameters"]
              : result.body.properties?.["hiddenParameters"],
          failureReason: result.body.properties?.["failureReason"],
          timeout: result.body.properties?.["timeout"],
          retention: result.body.properties?.["retention"],
          submittedAt:
            result.body.properties?.["submittedAt"] !== undefined
              ? new Date(result.body.properties?.["submittedAt"])
              : undefined,
          startedAt:
            result.body.properties?.["startedAt"] !== undefined
              ? new Date(result.body.properties?.["startedAt"])
              : undefined,
          finishedAt:
            result.body.properties?.["finishedAt"] !== undefined
              ? new Date(result.body.properties?.["finishedAt"])
              : undefined,
          provisioningState: result.body.properties?.["provisioningState"],
          output: result.body.properties?.["output"],
          namedOutputs: result.body.properties?.["namedOutputs"],
          information: result.body.properties?.["information"],
          warnings: result.body.properties?.["warnings"],
          errors: result.body.properties?.["errors"],
        },
  };
}

/** Return the logs for a script execution resource */
export async function scriptExecutionsGetExecutionLogs(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptExecutionName: string,
  scriptOutputStreamType?: ScriptOutputStreamType[],
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
    scriptOutputStreamType,
    options,
  );
  return _scriptExecutionsGetExecutionLogsDeserialize(result);
}
