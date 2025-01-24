// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ChaosManagementContext as Client,
  TargetTypesGetOptionalParams,
  TargetTypesListOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  TargetType,
  targetTypeDeserializer,
  _TargetTypeListResult,
  _targetTypeListResultDeserializer,
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

export function _targetTypesListSend(
  context: Client,
  location: string,
  options: TargetTypesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/targetTypes",
      context.subscriptionId,
      location,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        "api-version": context.apiVersion,
        continuationToken: options?.continuationToken,
      },
    });
}

export async function _targetTypesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_TargetTypeListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _targetTypeListResultDeserializer(result.body);
}

/** Get a list of Target Type resources for given location. */
export function targetTypesList(
  context: Client,
  location: string,
  options: TargetTypesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TargetType> {
  return buildPagedAsyncIterator(
    context,
    () => _targetTypesListSend(context, location, options),
    _targetTypesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _targetTypesGetSend(
  context: Client,
  location: string,
  targetTypeName: string,
  options: TargetTypesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/targetTypes/{targetTypeName}",
      context.subscriptionId,
      location,
      targetTypeName,
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

export async function _targetTypesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<TargetType> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return targetTypeDeserializer(result.body);
}

/** Get a Target Type resources for given location. */
export async function targetTypesGet(
  context: Client,
  location: string,
  targetTypeName: string,
  options: TargetTypesGetOptionalParams = { requestOptions: {} },
): Promise<TargetType> {
  const result = await _targetTypesGetSend(
    context,
    location,
    targetTypeName,
    options,
  );
  return _targetTypesGetDeserialize(result);
}
