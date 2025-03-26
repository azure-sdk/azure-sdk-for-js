// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FabricContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  FabricCapacity,
  fabricCapacitySerializer,
  fabricCapacityDeserializer,
  FabricCapacityUpdate,
  fabricCapacityUpdateSerializer,
  _FabricCapacityListResult,
  _fabricCapacityListResultDeserializer,
  CheckNameAvailabilityRequest,
  checkNameAvailabilityRequestSerializer,
  CheckNameAvailabilityResponse,
  checkNameAvailabilityResponseDeserializer,
  _RpSkuEnumerationForExistingResourceResult,
  _rpSkuEnumerationForExistingResourceResultDeserializer,
  RpSkuDetailsForExistingResource,
  _RpSkuEnumerationForNewResourceResult,
  _rpSkuEnumerationForNewResourceResultDeserializer,
  RpSkuDetailsForNewResource,
  _PagedQuota,
  _pagedQuotaDeserializer,
  Quota,
} from "../../models/models.js";
import {
  FabricCapacitiesListUsagesOptionalParams,
  FabricCapacitiesListSkusOptionalParams,
  FabricCapacitiesListSkusForCapacityOptionalParams,
  FabricCapacitiesCheckNameAvailabilityOptionalParams,
  FabricCapacitiesSuspendOptionalParams,
  FabricCapacitiesResumeOptionalParams,
  FabricCapacitiesListBySubscriptionOptionalParams,
  FabricCapacitiesListByResourceGroupOptionalParams,
  FabricCapacitiesDeleteOptionalParams,
  FabricCapacitiesUpdateOptionalParams,
  FabricCapacitiesCreateOrUpdateOptionalParams,
  FabricCapacitiesGetOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _fabricCapacitiesListUsagesSend(
  context: Client,
  location: string,
  options: FabricCapacitiesListUsagesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Fabric/locations/{location}/usages{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _fabricCapacitiesListUsagesDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedQuota> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _pagedQuotaDeserializer(result.body);
}

/** List the current consumption and limit in this location for the provided subscription */
export function fabricCapacitiesListUsages(
  context: Client,
  location: string,
  options: FabricCapacitiesListUsagesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Quota> {
  return buildPagedAsyncIterator(
    context,
    () => _fabricCapacitiesListUsagesSend(context, location, options),
    _fabricCapacitiesListUsagesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _fabricCapacitiesListSkusSend(
  context: Client,
  options: FabricCapacitiesListSkusOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Fabric/skus{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _fabricCapacitiesListSkusDeserialize(
  result: PathUncheckedResponse,
): Promise<_RpSkuEnumerationForNewResourceResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _rpSkuEnumerationForNewResourceResultDeserializer(result.body);
}

/** List eligible SKUs for Microsoft Fabric resource provider */
export function fabricCapacitiesListSkus(
  context: Client,
  options: FabricCapacitiesListSkusOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<RpSkuDetailsForNewResource> {
  return buildPagedAsyncIterator(
    context,
    () => _fabricCapacitiesListSkusSend(context, options),
    _fabricCapacitiesListSkusDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _fabricCapacitiesListSkusForCapacitySend(
  context: Client,
  resourceGroupName: string,
  capacityName: string,
  options: FabricCapacitiesListSkusForCapacityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric/capacities/{capacityName}/skus{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      capacityName: capacityName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _fabricCapacitiesListSkusForCapacityDeserialize(
  result: PathUncheckedResponse,
): Promise<_RpSkuEnumerationForExistingResourceResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _rpSkuEnumerationForExistingResourceResultDeserializer(result.body);
}

/** List eligible SKUs for a Microsoft Fabric resource */
export function fabricCapacitiesListSkusForCapacity(
  context: Client,
  resourceGroupName: string,
  capacityName: string,
  options: FabricCapacitiesListSkusForCapacityOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<RpSkuDetailsForExistingResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _fabricCapacitiesListSkusForCapacitySend(context, resourceGroupName, capacityName, options),
    _fabricCapacitiesListSkusForCapacityDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _fabricCapacitiesCheckNameAvailabilitySend(
  context: Client,
  location: string,
  body: CheckNameAvailabilityRequest,
  options: FabricCapacitiesCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Fabric/locations/{location}/checkNameAvailability{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: checkNameAvailabilityRequestSerializer(body),
  });
}

export async function _fabricCapacitiesCheckNameAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckNameAvailabilityResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return checkNameAvailabilityResponseDeserializer(result.body);
}

/** Implements local CheckNameAvailability operations */
export async function fabricCapacitiesCheckNameAvailability(
  context: Client,
  location: string,
  body: CheckNameAvailabilityRequest,
  options: FabricCapacitiesCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): Promise<CheckNameAvailabilityResponse> {
  const result = await _fabricCapacitiesCheckNameAvailabilitySend(context, location, body, options);
  return _fabricCapacitiesCheckNameAvailabilityDeserialize(result);
}

export function _fabricCapacitiesSuspendSend(
  context: Client,
  resourceGroupName: string,
  capacityName: string,
  options: FabricCapacitiesSuspendOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric/capacities/{capacityName}/suspend{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      capacityName: capacityName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _fabricCapacitiesSuspendDeserialize(
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

/** Suspend operation of the specified Fabric capacity instance. */
export function fabricCapacitiesSuspend(
  context: Client,
  resourceGroupName: string,
  capacityName: string,
  options: FabricCapacitiesSuspendOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _fabricCapacitiesSuspendDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fabricCapacitiesSuspendSend(context, resourceGroupName, capacityName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _fabricCapacitiesResumeSend(
  context: Client,
  resourceGroupName: string,
  capacityName: string,
  options: FabricCapacitiesResumeOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric/capacities/{capacityName}/resume{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      capacityName: capacityName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _fabricCapacitiesResumeDeserialize(
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

/** Resume operation of the specified Fabric capacity instance. */
export function fabricCapacitiesResume(
  context: Client,
  resourceGroupName: string,
  capacityName: string,
  options: FabricCapacitiesResumeOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _fabricCapacitiesResumeDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fabricCapacitiesResumeSend(context, resourceGroupName, capacityName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _fabricCapacitiesListBySubscriptionSend(
  context: Client,
  options: FabricCapacitiesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Fabric/capacities{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _fabricCapacitiesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_FabricCapacityListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _fabricCapacityListResultDeserializer(result.body);
}

/** List FabricCapacity resources by subscription ID */
export function fabricCapacitiesListBySubscription(
  context: Client,
  options: FabricCapacitiesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<FabricCapacity> {
  return buildPagedAsyncIterator(
    context,
    () => _fabricCapacitiesListBySubscriptionSend(context, options),
    _fabricCapacitiesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _fabricCapacitiesListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: FabricCapacitiesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric/capacities{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _fabricCapacitiesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_FabricCapacityListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _fabricCapacityListResultDeserializer(result.body);
}

/** List FabricCapacity resources by resource group */
export function fabricCapacitiesListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: FabricCapacitiesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<FabricCapacity> {
  return buildPagedAsyncIterator(
    context,
    () => _fabricCapacitiesListByResourceGroupSend(context, resourceGroupName, options),
    _fabricCapacitiesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _fabricCapacitiesDeleteSend(
  context: Client,
  resourceGroupName: string,
  capacityName: string,
  options: FabricCapacitiesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric/capacities/{capacityName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      capacityName: capacityName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _fabricCapacitiesDeleteDeserialize(
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

/** Delete a FabricCapacity */
export function fabricCapacitiesDelete(
  context: Client,
  resourceGroupName: string,
  capacityName: string,
  options: FabricCapacitiesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _fabricCapacitiesDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fabricCapacitiesDeleteSend(context, resourceGroupName, capacityName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _fabricCapacitiesUpdateSend(
  context: Client,
  resourceGroupName: string,
  capacityName: string,
  properties: FabricCapacityUpdate,
  options: FabricCapacitiesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric/capacities/{capacityName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      capacityName: capacityName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: fabricCapacityUpdateSerializer(properties),
  });
}

export async function _fabricCapacitiesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<FabricCapacity> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fabricCapacityDeserializer(result.body);
}

/** Update a FabricCapacity */
export function fabricCapacitiesUpdate(
  context: Client,
  resourceGroupName: string,
  capacityName: string,
  properties: FabricCapacityUpdate,
  options: FabricCapacitiesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<FabricCapacity>, FabricCapacity> {
  return getLongRunningPoller(context, _fabricCapacitiesUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fabricCapacitiesUpdateSend(context, resourceGroupName, capacityName, properties, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<FabricCapacity>, FabricCapacity>;
}

export function _fabricCapacitiesCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  capacityName: string,
  resource: FabricCapacity,
  options: FabricCapacitiesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric/capacities/{capacityName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      capacityName: capacityName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: fabricCapacitySerializer(resource),
  });
}

export async function _fabricCapacitiesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<FabricCapacity> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fabricCapacityDeserializer(result.body);
}

/** Create a FabricCapacity */
export function fabricCapacitiesCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  capacityName: string,
  resource: FabricCapacity,
  options: FabricCapacitiesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<FabricCapacity>, FabricCapacity> {
  return getLongRunningPoller(context, _fabricCapacitiesCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fabricCapacitiesCreateOrUpdateSend(
        context,
        resourceGroupName,
        capacityName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<FabricCapacity>, FabricCapacity>;
}

export function _fabricCapacitiesGetSend(
  context: Client,
  resourceGroupName: string,
  capacityName: string,
  options: FabricCapacitiesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric/capacities/{capacityName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      capacityName: capacityName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _fabricCapacitiesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<FabricCapacity> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fabricCapacityDeserializer(result.body);
}

/** Get a FabricCapacity */
export async function fabricCapacitiesGet(
  context: Client,
  resourceGroupName: string,
  capacityName: string,
  options: FabricCapacitiesGetOptionalParams = { requestOptions: {} },
): Promise<FabricCapacity> {
  const result = await _fabricCapacitiesGetSend(context, resourceGroupName, capacityName, options);
  return _fabricCapacitiesGetDeserialize(result);
}
