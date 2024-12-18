// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AvailabilitySetsCreateOrUpdateOptionalParams,
  AvailabilitySetsDeleteOptionalParams,
  AvailabilitySetsGetOptionalParams,
  AvailabilitySetsListByResourceGroupOptionalParams,
  AvailabilitySetsListBySubscriptionOptionalParams,
  AvailabilitySetsUpdateOptionalParams,
  ScVmmContext as Client,
} from "../index.js";
import {
  AvailabilitySet,
  availabilitySetSerializer,
  availabilitySetDeserializer,
  AvailabilitySetTagsUpdate,
  availabilitySetTagsUpdateSerializer,
  _AvailabilitySetListResult,
  _availabilitySetListResultDeserializer,
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

export function _availabilitySetsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  options: AvailabilitySetsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}",
      subscriptionId,
      resourceGroupName,
      availabilitySetResourceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _availabilitySetsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AvailabilitySet> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return availabilitySetDeserializer(result.body);
}

/** Implements AvailabilitySet GET method. */
export async function availabilitySetsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  options: AvailabilitySetsGetOptionalParams = { requestOptions: {} },
): Promise<AvailabilitySet> {
  const result = await _availabilitySetsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    availabilitySetResourceName,
    options,
  );
  return _availabilitySetsGetDeserialize(result);
}

export function _availabilitySetsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  resource: AvailabilitySet,
  options: AvailabilitySetsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}",
      subscriptionId,
      resourceGroupName,
      availabilitySetResourceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: availabilitySetSerializer(resource),
    });
}

export async function _availabilitySetsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AvailabilitySet> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return availabilitySetDeserializer(result.body);
}

/** Onboards the ScVmm availability set as an Azure resource. */
export function availabilitySetsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  resource: AvailabilitySet,
  options: AvailabilitySetsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<AvailabilitySet>, AvailabilitySet> {
  return getLongRunningPoller(
    context,
    _availabilitySetsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _availabilitySetsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          availabilitySetResourceName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<AvailabilitySet>, AvailabilitySet>;
}

export function _availabilitySetsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  properties: AvailabilitySetTagsUpdate,
  options: AvailabilitySetsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}",
      subscriptionId,
      resourceGroupName,
      availabilitySetResourceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: availabilitySetTagsUpdateSerializer(properties),
    });
}

export async function _availabilitySetsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AvailabilitySet> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return availabilitySetDeserializer(result.body);
}

/** Updates the AvailabilitySets resource. */
export function availabilitySetsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  properties: AvailabilitySetTagsUpdate,
  options: AvailabilitySetsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AvailabilitySet>, AvailabilitySet> {
  return getLongRunningPoller(
    context,
    _availabilitySetsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _availabilitySetsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          availabilitySetResourceName,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<AvailabilitySet>, AvailabilitySet>;
}

export function _availabilitySetsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  options: AvailabilitySetsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}",
      subscriptionId,
      resourceGroupName,
      availabilitySetResourceName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { force: options?.force },
    });
}

export async function _availabilitySetsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deregisters the ScVmm availability set from Azure. */
export function availabilitySetsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  options: AvailabilitySetsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _availabilitySetsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _availabilitySetsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          availabilitySetResourceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _availabilitySetsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AvailabilitySetsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _availabilitySetsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_AvailabilitySetListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _availabilitySetListResultDeserializer(result.body);
}

/** List of AvailabilitySets in a resource group. */
export function availabilitySetsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AvailabilitySetsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AvailabilitySet> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _availabilitySetsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _availabilitySetsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _availabilitySetsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: AvailabilitySetsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/availabilitySets",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _availabilitySetsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_AvailabilitySetListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _availabilitySetListResultDeserializer(result.body);
}

/** List of AvailabilitySets in a subscription. */
export function availabilitySetsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: AvailabilitySetsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AvailabilitySet> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _availabilitySetsListBySubscriptionSend(context, subscriptionId, options),
    _availabilitySetsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
