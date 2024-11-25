// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ChaosContext as Client,
  TargetTypesGetOptionalParams,
  TargetTypesListOptionalParams,
} from "../index.js";
import {
  ChaosTargetMetadata,
  chaosTargetMetadataDeserializer,
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

export function _targetTypesGetSend(
  context: Client,
  subscriptionId: string,
  location: string,
  targetTypeName: string,
  options: TargetTypesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/targetTypes/{targetTypeName}",
      subscriptionId,
      location,
      targetTypeName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _targetTypesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ChaosTargetMetadata> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return chaosTargetMetadataDeserializer(result.body);
}

/** Get a Target Type resources for given location. */
export async function targetTypesGet(
  context: Client,
  subscriptionId: string,
  location: string,
  targetTypeName: string,
  options: TargetTypesGetOptionalParams = { requestOptions: {} },
): Promise<ChaosTargetMetadata> {
  const result = await _targetTypesGetSend(
    context,
    subscriptionId,
    location,
    targetTypeName,
    options,
  );
  return _targetTypesGetDeserialize(result);
}

export function _targetTypesListSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: TargetTypesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/targetTypes",
      subscriptionId,
      location,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { continuationToken: options?.continuationToken },
    });
}

export async function _targetTypesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_TargetTypeListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _targetTypeListResultDeserializer(result.body);
}

/** Get a list of Target Type resources for given location. */
export function targetTypesList(
  context: Client,
  subscriptionId: string,
  location: string,
  options: TargetTypesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ChaosTargetMetadata> {
  return buildPagedAsyncIterator(
    context,
    () => _targetTypesListSend(context, subscriptionId, location, options),
    _targetTypesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
