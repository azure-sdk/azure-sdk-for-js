// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AVSContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  ScriptExecution,
  ScriptOutputStreamType,
} from "../../models/models.js";
import {
  scriptExecutionsList,
  scriptExecutionsGet,
  scriptExecutionsCreateOrUpdate,
  scriptExecutionsDelete,
  scriptExecutionsGetExecutionLogs,
} from "../../api/scriptExecutions/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ScriptExecutionsListOptionalParams,
  ScriptExecutionsGetOptionalParams,
  ScriptExecutionsCreateOrUpdateOptionalParams,
  ScriptExecutionsDeleteOptionalParams,
  ScriptExecutionsGetExecutionLogsOptionalParams,
} from "../../models/options.js";

/** Interface representing a ScriptExecutions operations. */
export interface ScriptExecutionsOperations {
  /** List ScriptExecution resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: ScriptExecutionsListOptionalParams,
  ) => PagedAsyncIterableIterator<ScriptExecution>;
  /** Get a ScriptExecution */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    options?: ScriptExecutionsGetOptionalParams,
  ) => Promise<ScriptExecution>;
  /** Create a ScriptExecution */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    scriptExecution: ScriptExecution,
    options?: ScriptExecutionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ScriptExecution>, ScriptExecution>;
  /** Delete a ScriptExecution */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    options?: ScriptExecutionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Return the logs for a script execution resource */
  getExecutionLogs: (
    resourceGroupName: string,
    privateCloudName: string,
    scriptExecutionName: string,
    scriptOutputStreamType?: ScriptOutputStreamType[],
    options?: ScriptExecutionsGetExecutionLogsOptionalParams,
  ) => Promise<ScriptExecution>;
}

export function getScriptExecutions(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: ScriptExecutionsListOptionalParams,
    ) =>
      scriptExecutionsList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      scriptExecutionName: string,
      options?: ScriptExecutionsGetOptionalParams,
    ) =>
      scriptExecutionsGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        scriptExecutionName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      scriptExecutionName: string,
      scriptExecution: ScriptExecution,
      options?: ScriptExecutionsCreateOrUpdateOptionalParams,
    ) =>
      scriptExecutionsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        scriptExecutionName,
        scriptExecution,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      scriptExecutionName: string,
      options?: ScriptExecutionsDeleteOptionalParams,
    ) =>
      scriptExecutionsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        scriptExecutionName,
        options,
      ),
    getExecutionLogs: (
      resourceGroupName: string,
      privateCloudName: string,
      scriptExecutionName: string,
      scriptOutputStreamType?: ScriptOutputStreamType[],
      options?: ScriptExecutionsGetExecutionLogsOptionalParams,
    ) =>
      scriptExecutionsGetExecutionLogs(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        scriptExecutionName,
        scriptOutputStreamType,
        options,
      ),
  };
}

export function getScriptExecutionsOperations(
  context: AVSContext,
  subscriptionId: string,
): ScriptExecutionsOperations {
  return {
    ...getScriptExecutions(context, subscriptionId),
  };
}
