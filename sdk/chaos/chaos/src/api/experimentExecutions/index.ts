// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ChaosContext as Client,
  ExperimentExecutionsExecutionDetailsOptionalParams,
  ExperimentExecutionsGetOptionalParams,
  ExperimentExecutionsListOptionalParams,
} from "../index.js";
import {
  ChaosExperimentExecution,
  chaosExperimentExecutionDeserializer,
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

export function _experimentExecutionsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  executionId: string,
  options: ExperimentExecutionsGetOptionalParams = { requestOptions: {} },
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

export async function _experimentExecutionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ChaosExperimentExecution> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return chaosExperimentExecutionDeserializer(result.body);
}

/** Get an execution of an Experiment resource. */
export async function experimentExecutionsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  executionId: string,
  options: ExperimentExecutionsGetOptionalParams = { requestOptions: {} },
): Promise<ChaosExperimentExecution> {
  const result = await _experimentExecutionsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    experimentName,
    executionId,
    options,
  );
  return _experimentExecutionsGetDeserialize(result);
}

export function _experimentExecutionsListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  options: ExperimentExecutionsListOptionalParams = { requestOptions: {} },
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

export async function _experimentExecutionsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ExperimentExecutionListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _experimentExecutionListResultDeserializer(result.body);
}

/** Get a list of executions of an Experiment resource. */
export function experimentExecutionsList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  options: ExperimentExecutionsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ChaosExperimentExecution> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _experimentExecutionsListSend(
        context,
        subscriptionId,
        resourceGroupName,
        experimentName,
        options,
      ),
    _experimentExecutionsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _experimentExecutionsExecutionDetailsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  executionId: string,
  options: ExperimentExecutionsExecutionDetailsOptionalParams = {
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

export async function _experimentExecutionsExecutionDetailsDeserialize(
  result: PathUncheckedResponse,
): Promise<ExperimentExecutionDetails> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return experimentExecutionDetailsDeserializer(result.body);
}

/** Execution details of an experiment resource. */
export async function experimentExecutionsExecutionDetails(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  executionId: string,
  options: ExperimentExecutionsExecutionDetailsOptionalParams = {
    requestOptions: {},
  },
): Promise<ExperimentExecutionDetails> {
  const result = await _experimentExecutionsExecutionDetailsSend(
    context,
    subscriptionId,
    resourceGroupName,
    experimentName,
    executionId,
    options,
  );
  return _experimentExecutionsExecutionDetailsDeserialize(result);
}
