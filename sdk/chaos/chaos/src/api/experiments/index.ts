// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ChaosContext as Client,
  ExperimentsCancelExperimentOptionalParams,
  ExperimentsCreateOrUpdateOptionalParams,
  ExperimentsDeleteOptionalParams,
  ExperimentsGetOptionalParams,
  ExperimentsListAllOptionalParams,
  ExperimentsListOptionalParams,
  ExperimentsStartExperimentOptionalParams,
  ExperimentsUpdateOptionalParams,
} from "../index.js";
import {
  ChaosExperiment,
  chaosExperimentSerializer,
  chaosExperimentDeserializer,
  ExperimentUpdate,
  experimentUpdateSerializer,
  _ExperimentListResult,
  _experimentListResultDeserializer,
  PostActionResult,
  postActionResultDeserializer,
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

export function _experimentsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  options: ExperimentsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}",
      subscriptionId,
      resourceGroupName,
      experimentName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _experimentsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ChaosExperiment> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return chaosExperimentDeserializer(result.body);
}

/** Get a Experiment resource. */
export async function experimentsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  options: ExperimentsGetOptionalParams = { requestOptions: {} },
): Promise<ChaosExperiment> {
  const result = await _experimentsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    experimentName,
    options,
  );
  return _experimentsGetDeserialize(result);
}

export function _experimentsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  resource: ChaosExperiment,
  options: ExperimentsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}",
      subscriptionId,
      resourceGroupName,
      experimentName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: chaosExperimentSerializer(resource),
    });
}

export async function _experimentsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ChaosExperiment> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return chaosExperimentDeserializer(result.body);
}

/** Create or update a Experiment resource. */
export function experimentsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  resource: ChaosExperiment,
  options: ExperimentsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ChaosExperiment>, ChaosExperiment> {
  return getLongRunningPoller(
    context,
    _experimentsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _experimentsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          experimentName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<ChaosExperiment>, ChaosExperiment>;
}

export function _experimentsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  properties: ExperimentUpdate,
  options: ExperimentsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}",
      subscriptionId,
      resourceGroupName,
      experimentName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: experimentUpdateSerializer(properties),
    });
}

export async function _experimentsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ChaosExperiment> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return chaosExperimentDeserializer(result.body);
}

/** The operation to update an experiment. */
export function experimentsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  properties: ExperimentUpdate,
  options: ExperimentsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ChaosExperiment>, ChaosExperiment> {
  return getLongRunningPoller(
    context,
    _experimentsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _experimentsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          experimentName,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<ChaosExperiment>, ChaosExperiment>;
}

export function _experimentsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  options: ExperimentsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}",
      subscriptionId,
      resourceGroupName,
      experimentName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _experimentsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Experiment resource. */
export function experimentsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  options: ExperimentsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _experimentsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _experimentsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          experimentName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _experimentsListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: ExperimentsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments",
      subscriptionId,
      resourceGroupName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        running: options?.running,
        continuationToken: options?.continuationToken,
      },
    });
}

export async function _experimentsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ExperimentListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _experimentListResultDeserializer(result.body);
}

/** Get a list of Experiment resources in a resource group. */
export function experimentsList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: ExperimentsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ChaosExperiment> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _experimentsListSend(context, subscriptionId, resourceGroupName, options),
    _experimentsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _experimentsListAllSend(
  context: Client,
  subscriptionId: string,
  options: ExperimentsListAllOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/experiments",
      subscriptionId,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        running: options?.running,
        continuationToken: options?.continuationToken,
      },
    });
}

export async function _experimentsListAllDeserialize(
  result: PathUncheckedResponse,
): Promise<_ExperimentListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _experimentListResultDeserializer(result.body);
}

/** Get a list of Experiment resources in a subscription. */
export function experimentsListAll(
  context: Client,
  subscriptionId: string,
  options: ExperimentsListAllOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ChaosExperiment> {
  return buildPagedAsyncIterator(
    context,
    () => _experimentsListAllSend(context, subscriptionId, options),
    _experimentsListAllDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _experimentsCancelExperimentSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  options: ExperimentsCancelExperimentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}/cancel",
      subscriptionId,
      resourceGroupName,
      experimentName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _experimentsCancelExperimentDeserialize(
  result: PathUncheckedResponse,
): Promise<PostActionResult> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return postActionResultDeserializer(result.body);
}

/** Cancel a running Experiment resource. */
export function experimentsCancelExperiment(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  options: ExperimentsCancelExperimentOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<PostActionResult>, PostActionResult> {
  return getLongRunningPoller(
    context,
    _experimentsCancelExperimentDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _experimentsCancelExperimentSend(
          context,
          subscriptionId,
          resourceGroupName,
          experimentName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<PostActionResult>, PostActionResult>;
}

export function _experimentsStartExperimentSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  options: ExperimentsStartExperimentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}/start",
      subscriptionId,
      resourceGroupName,
      experimentName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _experimentsStartExperimentDeserialize(
  result: PathUncheckedResponse,
): Promise<PostActionResult> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return postActionResultDeserializer(result.body);
}

/** Start a Experiment resource. */
export function experimentsStartExperiment(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  experimentName: string,
  options: ExperimentsStartExperimentOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<PostActionResult>, PostActionResult> {
  return getLongRunningPoller(
    context,
    _experimentsStartExperimentDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _experimentsStartExperimentSend(
          context,
          subscriptionId,
          resourceGroupName,
          experimentName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<PostActionResult>, PostActionResult>;
}
