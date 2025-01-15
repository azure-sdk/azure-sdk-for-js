// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  HybridConnectivityManagementAPIContext as Client,
  SolutionTypesGetOptionalParams,
  SolutionTypesListByResourceGroupOptionalParams,
  SolutionTypesListBySubscriptionOptionalParams,
} from "../index.js";
import {
  SolutionTypeResource,
  solutionTypeResourceDeserializer,
  _SolutionTypeResourceListResult,
  _solutionTypeResourceListResultDeserializer,
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

export function _solutionTypesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionType: string,
  options: SolutionTypesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridConnectivity/solutionTypes/{solutionType}",
      subscriptionId,
      resourceGroupName,
      solutionType,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _solutionTypesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SolutionTypeResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return solutionTypeResourceDeserializer(result.body);
}

/** Get a SolutionTypeResource */
export async function solutionTypesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionType: string,
  options: SolutionTypesGetOptionalParams = { requestOptions: {} },
): Promise<SolutionTypeResource> {
  const result = await _solutionTypesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    solutionType,
    options,
  );
  return _solutionTypesGetDeserialize(result);
}

export function _solutionTypesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SolutionTypesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridConnectivity/solutionTypes",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _solutionTypesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_SolutionTypeResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _solutionTypeResourceListResultDeserializer(result.body);
}

/** List SolutionTypeResource resources by resource group */
export function solutionTypesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SolutionTypesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SolutionTypeResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _solutionTypesListByResourceGroupSend(context, subscriptionId, resourceGroupName, options),
    _solutionTypesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _solutionTypesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: SolutionTypesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.HybridConnectivity/solutionTypes",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _solutionTypesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_SolutionTypeResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _solutionTypeResourceListResultDeserializer(result.body);
}

/** List SolutionTypeResource resources by subscription ID */
export function solutionTypesListBySubscription(
  context: Client,
  subscriptionId: string,
  options: SolutionTypesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SolutionTypeResource> {
  return buildPagedAsyncIterator(
    context,
    () => _solutionTypesListBySubscriptionSend(context, subscriptionId, options),
    _solutionTypesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
