// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ChaosManagementContext as Client,
  ExperimentExecutionsGetExecutionDetailsOptionalParams,
  ExperimentExecutionsGetExecutionOptionalParams,
  ExperimentExecutionsListAllExecutionsOptionalParams,
} from "../index.js";
import {
  ExperimentExecution,
  experimentExecutionDeserializer,
  _ExperimentExecutionListResult,
  _experimentExecutionListResultDeserializer,
  ExperimentExecutionDetails,
  experimentExecutionDetailsDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _experimentExecutionsGetExecutionSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  executionId: string,
  options: ExperimentExecutionsGetExecutionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}/executions/{executionId}",
      subscriptionId,
      resourceGroupName,
      experimentName,
      executionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _experimentExecutionsGetExecutionDeserialize(
  result: PathUncheckedResponse,
): Promise<ExperimentExecution> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return experimentExecutionDeserializer(result.body);
}

/** Get an execution of an Experiment resource. */
export async function experimentExecutionsGetExecution(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  executionId: string,
  options: ExperimentExecutionsGetExecutionOptionalParams = {
    requestOptions: {},
  },
): Promise<ExperimentExecution> {
  const result = await _experimentExecutionsGetExecutionSend(
    context,
    subscriptionId,
    resourceGroupName,
    experimentName,
    executionId,
    options,
  );
  return _experimentExecutionsGetExecutionDeserialize(result);
}

export function _experimentExecutionsListAllExecutionsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  options: ExperimentExecutionsListAllExecutionsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}/executions",
      subscriptionId,
      resourceGroupName,
      experimentName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _experimentExecutionsListAllExecutionsDeserialize(
  result: PathUncheckedResponse,
): Promise<_ExperimentExecutionListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _experimentExecutionListResultDeserializer(result.body);
}

/** Get a list of executions of an Experiment resource. */
export function experimentExecutionsListAllExecutions(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  options: ExperimentExecutionsListAllExecutionsOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ExperimentExecution> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _experimentExecutionsListAllExecutionsSend(
        context,
        subscriptionId,
        resourceGroupName,
        experimentName,
        options,
      ),
    _experimentExecutionsListAllExecutionsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _experimentExecutionsGetExecutionDetailsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  executionId: string,
  options: ExperimentExecutionsGetExecutionDetailsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}/executions/{executionId}/getExecutionDetails",
      subscriptionId,
      resourceGroupName,
      experimentName,
      executionId,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _experimentExecutionsGetExecutionDetailsDeserialize(
  result: PathUncheckedResponse,
): Promise<ExperimentExecutionDetails> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return experimentExecutionDetailsDeserializer(result.body);
}

/** Execution details of an experiment resource. */
export async function experimentExecutionsGetExecutionDetails(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  executionId: string,
  options: ExperimentExecutionsGetExecutionDetailsOptionalParams = {
    requestOptions: {},
  },
): Promise<ExperimentExecutionDetails> {
  const result = await _experimentExecutionsGetExecutionDetailsSend(
    context,
    subscriptionId,
    resourceGroupName,
    experimentName,
    executionId,
    options,
  );
  return _experimentExecutionsGetExecutionDetailsDeserialize(result);
}
