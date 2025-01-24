// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ChaosManagementContext as Client,
  ExperimentsCancelOptionalParams,
  ExperimentsCreateOrUpdateOptionalParams,
  ExperimentsDeleteOptionalParams,
  ExperimentsGetOptionalParams,
  ExperimentsListAllOptionalParams,
  ExperimentsListOptionalParams,
  ExperimentsStartOptionalParams,
  ExperimentsUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  Experiment,
  experimentSerializer,
  experimentDeserializer,
  ExperimentUpdate,
  experimentUpdateSerializer,
  _ExperimentListResult,
  _experimentListResultDeserializer,
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

export function _experimentsStartSend(
  context: Client,
  resourceGroupName: string,
  experimentName: string,
  options: ExperimentsStartOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}/start",
      context.subscriptionId,
      resourceGroupName,
      experimentName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _experimentsStartDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Start a Experiment resource. */
export function experimentsStart(
  context: Client,
  resourceGroupName: string,
  experimentName: string,
  options: ExperimentsStartOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _experimentsStartDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _experimentsStartSend(
          context,
          resourceGroupName,
          experimentName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _experimentsCancelSend(
  context: Client,
  resourceGroupName: string,
  experimentName: string,
  options: ExperimentsCancelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}/cancel",
      context.subscriptionId,
      resourceGroupName,
      experimentName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _experimentsCancelDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Cancel a running Experiment resource. */
export function experimentsCancel(
  context: Client,
  resourceGroupName: string,
  experimentName: string,
  options: ExperimentsCancelOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _experimentsCancelDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _experimentsCancelSend(
          context,
          resourceGroupName,
          experimentName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _experimentsListAllSend(
  context: Client,
  options: ExperimentsListAllOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/experiments",
      context.subscriptionId,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        "api-version": context.apiVersion,
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
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _experimentListResultDeserializer(result.body);
}

/** Get a list of Experiment resources in a subscription. */
export function experimentsListAll(
  context: Client,
  options: ExperimentsListAllOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Experiment> {
  return buildPagedAsyncIterator(
    context,
    () => _experimentsListAllSend(context, options),
    _experimentsListAllDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _experimentsListSend(
  context: Client,
  resourceGroupName: string,
  options: ExperimentsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments",
      context.subscriptionId,
      resourceGroupName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        "api-version": context.apiVersion,
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
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _experimentListResultDeserializer(result.body);
}

/** Get a list of Experiment resources in a resource group. */
export function experimentsList(
  context: Client,
  resourceGroupName: string,
  options: ExperimentsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Experiment> {
  return buildPagedAsyncIterator(
    context,
    () => _experimentsListSend(context, resourceGroupName, options),
    _experimentsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _experimentsDeleteSend(
  context: Client,
  resourceGroupName: string,
  experimentName: string,
  options: ExperimentsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}",
      context.subscriptionId,
      resourceGroupName,
      experimentName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _experimentsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a Experiment resource. */
export function experimentsDelete(
  context: Client,
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
          resourceGroupName,
          experimentName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _experimentsUpdateSend(
  context: Client,
  resourceGroupName: string,
  experimentName: string,
  properties: ExperimentUpdate,
  options: ExperimentsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}",
      context.subscriptionId,
      resourceGroupName,
      experimentName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: experimentUpdateSerializer(properties),
    });
}

export async function _experimentsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Experiment> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return experimentDeserializer(result.body);
}

/** The operation to update an experiment. */
export function experimentsUpdate(
  context: Client,
  resourceGroupName: string,
  experimentName: string,
  properties: ExperimentUpdate,
  options: ExperimentsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Experiment>, Experiment> {
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
          resourceGroupName,
          experimentName,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<Experiment>, Experiment>;
}

export function _experimentsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  experimentName: string,
  resource: Experiment,
  options: ExperimentsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}",
      context.subscriptionId,
      resourceGroupName,
      experimentName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: experimentSerializer(resource),
    });
}

export async function _experimentsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Experiment> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return experimentDeserializer(result.body);
}

/** Create or update a Experiment resource. */
export function experimentsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  experimentName: string,
  resource: Experiment,
  options: ExperimentsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Experiment>, Experiment> {
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
          resourceGroupName,
          experimentName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<Experiment>, Experiment>;
}

export function _experimentsGetSend(
  context: Client,
  resourceGroupName: string,
  experimentName: string,
  options: ExperimentsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}",
      context.subscriptionId,
      resourceGroupName,
      experimentName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _experimentsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Experiment> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return experimentDeserializer(result.body);
}

/** Get a Experiment resource. */
export async function experimentsGet(
  context: Client,
  resourceGroupName: string,
  experimentName: string,
  options: ExperimentsGetOptionalParams = { requestOptions: {} },
): Promise<Experiment> {
  const result = await _experimentsGetSend(
    context,
    resourceGroupName,
    experimentName,
    options,
  );
  return _experimentsGetDeserialize(result);
}
