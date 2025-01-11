// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CapabilityTypesGetOptionalParams,
  CapabilityTypesListOptionalParams,
  ChaosManagementContext as Client,
} from "../index.js";
import {
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

export function _capabilityTypesGetSend(
  context: Client,
  subscriptionId: string,
  location: string,
  targetTypeName: string,
  capabilityTypeName: string,
  options: CapabilityTypesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/targetTypes/{targetTypeName}/capabilityTypes/{capabilityTypeName}",
      subscriptionId,
      location,
      targetTypeName,
      capabilityTypeName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _capabilityTypesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<CapabilityType> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return capabilityTypeDeserializer(result.body);
}

/** Get a Capability Type resource for given Target Type and location. */
export async function capabilityTypesGet(
  context: Client,
  subscriptionId: string,
  location: string,
  targetTypeName: string,
  capabilityTypeName: string,
  options: CapabilityTypesGetOptionalParams = { requestOptions: {} },
): Promise<CapabilityType> {
  const result = await _capabilityTypesGetSend(
    context,
    subscriptionId,
    location,
    targetTypeName,
    capabilityTypeName,
    options,
  );
  return _capabilityTypesGetDeserialize(result);
}

export function _capabilityTypesListSend(
  context: Client,
  subscriptionId: string,
  location: string,
  targetTypeName: string,
  options: CapabilityTypesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/targetTypes/{targetTypeName}/capabilityTypes",
      subscriptionId,
      location,
      targetTypeName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { continuationToken: options?.continuationToken },
    });
}

export async function _capabilityTypesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_CapabilityTypeListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _capabilityTypeListResultDeserializer(result.body);
}

/** Get a list of Capability Type resources for given Target Type and location. */
export function capabilityTypesList(
  context: Client,
  subscriptionId: string,
  location: string,
  targetTypeName: string,
  options: CapabilityTypesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<CapabilityType> {
  return buildPagedAsyncIterator(
    context,
    () => _capabilityTypesListSend(context, subscriptionId, location, targetTypeName, options),
    _capabilityTypesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
