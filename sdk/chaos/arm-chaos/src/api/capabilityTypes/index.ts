// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CapabilityTypesGetOptionalParams,
  CapabilityTypesListOptionalParams,
  ChaosManagementContext as Client,
} from "../index.js";
import {
  errorResponseDeserializer,
  CapabilityType,
  capabilityTypeDeserializer,
  _CapabilityTypeListResult,
  _capabilityTypeListResultDeserializer,
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

export function _capabilityTypesListSend(
  context: Client,
  location: string,
  targetTypeName: string,
  options: CapabilityTypesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/targetTypes/{targetTypeName}/capabilityTypes",
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
      queryParameters: {
        "api-version": context.apiVersion,
        continuationToken: options?.continuationToken,
      },
    });
}

export async function _capabilityTypesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_CapabilityTypeListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _capabilityTypeListResultDeserializer(result.body);
}

/** Get a list of Capability Type resources for given Target Type and location. */
export function capabilityTypesList(
  context: Client,
  location: string,
  targetTypeName: string,
  options: CapabilityTypesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<CapabilityType> {
  return buildPagedAsyncIterator(
    context,
    () => _capabilityTypesListSend(context, location, targetTypeName, options),
    _capabilityTypesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _capabilityTypesGetSend(
  context: Client,
  location: string,
  targetTypeName: string,
  capabilityTypeName: string,
  options: CapabilityTypesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/targetTypes/{targetTypeName}/capabilityTypes/{capabilityTypeName}",
      context.subscriptionId,
      location,
      targetTypeName,
      capabilityTypeName,
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

export async function _capabilityTypesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<CapabilityType> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return capabilityTypeDeserializer(result.body);
}

/** Get a Capability Type resource for given Target Type and location. */
export async function capabilityTypesGet(
  context: Client,
  location: string,
  targetTypeName: string,
  capabilityTypeName: string,
  options: CapabilityTypesGetOptionalParams = { requestOptions: {} },
): Promise<CapabilityType> {
  const result = await _capabilityTypesGetSend(
    context,
    location,
    targetTypeName,
    capabilityTypeName,
    options,
  );
  return _capabilityTypesGetDeserialize(result);
}
