// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CheckAvailabilityQuotaOptionalParams,
  LoadTestMgmtContext as Client,
  CreateOrUpdateLoadtestOptionalParams,
  DeleteLoadtestOptionalParams,
  GetLoadtestOptionalParams,
  GetQuotaOptionalParams,
  ListByResourceGroupOptionalParams,
  ListBySubscriptionOptionalParams,
  ListQuotaOptionalParams,
  OutboundNetworkDependenciesEndpointsOptionalParams,
  UpdateLoadtestOptionalParams,
} from "./index.js";
import {
  _LoadTestResourceListResult,
  _loadTestResourceListResultDeserializer,
  LoadTestResource,
  loadTestResourceSerializer,
  loadTestResourceDeserializer,
  errorResponseDeserializer,
  LoadTestResourceUpdate,
  loadTestResourceUpdateSerializer,
  _PagedOutboundEnvironmentEndpoint,
  _pagedOutboundEnvironmentEndpointDeserializer,
  OutboundEnvironmentEndpoint,
  QuotaResource,
  quotaResourceDeserializer,
  _QuotaResourceListResult,
  _quotaResourceListResultDeserializer,
  QuotaBucketRequest,
  quotaBucketRequestSerializer,
  CheckQuotaAvailabilityResponse,
  checkQuotaAvailabilityResponseDeserializer,
} from "../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _checkAvailabilityQuotaSend(
  context: Client,
  location: string,
  quotaBucketName: string,
  quotaBucketRequest: QuotaBucketRequest,
  options: CheckAvailabilityQuotaOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.LoadTestService/locations/{location}/quotas/{quotaBucketName}/checkAvailabilityQuota{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      quotaBucketName: quotaBucketName,
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
    body: quotaBucketRequestSerializer(quotaBucketRequest),
  });
}

export async function _checkAvailabilityQuotaDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckQuotaAvailabilityResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return checkQuotaAvailabilityResponseDeserializer(result.body);
}

/** Check Quota Availability on quota bucket per region per subscription. */
export async function checkAvailabilityQuota(
  context: Client,
  location: string,
  quotaBucketName: string,
  quotaBucketRequest: QuotaBucketRequest,
  options: CheckAvailabilityQuotaOptionalParams = { requestOptions: {} },
): Promise<CheckQuotaAvailabilityResponse> {
  const result = await _checkAvailabilityQuotaSend(
    context,
    location,
    quotaBucketName,
    quotaBucketRequest,
    options,
  );
  return _checkAvailabilityQuotaDeserialize(result);
}

export function _listQuotaSend(
  context: Client,
  location: string,
  options: ListQuotaOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.LoadTestService/locations/{location}/quotas{?api-version}",
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

export async function _listQuotaDeserialize(
  result: PathUncheckedResponse,
): Promise<_QuotaResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _quotaResourceListResultDeserializer(result.body);
}

/** List quotas for a given subscription Id. */
export function listQuota(
  context: Client,
  location: string,
  options: ListQuotaOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<QuotaResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listQuotaSend(context, location, options),
    _listQuotaDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getQuotaSend(
  context: Client,
  location: string,
  quotaBucketName: string,
  options: GetQuotaOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.LoadTestService/locations/{location}/quotas/{quotaBucketName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      quotaBucketName: quotaBucketName,
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

export async function _getQuotaDeserialize(result: PathUncheckedResponse): Promise<QuotaResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return quotaResourceDeserializer(result.body);
}

/** Get the available quota for a quota bucket per region per subscription. */
export async function getQuota(
  context: Client,
  location: string,
  quotaBucketName: string,
  options: GetQuotaOptionalParams = { requestOptions: {} },
): Promise<QuotaResource> {
  const result = await _getQuotaSend(context, location, quotaBucketName, options);
  return _getQuotaDeserialize(result);
}

export function _outboundNetworkDependenciesEndpointsSend(
  context: Client,
  resourceGroupName: string,
  loadTestName: string,
  options: OutboundNetworkDependenciesEndpointsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}/outboundNetworkDependenciesEndpoints{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      loadTestName: loadTestName,
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

export async function _outboundNetworkDependenciesEndpointsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedOutboundEnvironmentEndpoint> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _pagedOutboundEnvironmentEndpointDeserializer(result.body);
}

/** Lists the endpoints that agents may call as part of load testing. */
export function outboundNetworkDependenciesEndpoints(
  context: Client,
  resourceGroupName: string,
  loadTestName: string,
  options: OutboundNetworkDependenciesEndpointsOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<OutboundEnvironmentEndpoint> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _outboundNetworkDependenciesEndpointsSend(context, resourceGroupName, loadTestName, options),
    _outboundNetworkDependenciesEndpointsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _deleteLoadtestSend(
  context: Client,
  resourceGroupName: string,
  loadTestName: string,
  options: DeleteLoadtestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      loadTestName: loadTestName,
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

export async function _deleteLoadtestDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a LoadTestResource */
export function deleteLoadtest(
  context: Client,
  resourceGroupName: string,
  loadTestName: string,
  options: DeleteLoadtestOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _deleteLoadtestDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _deleteLoadtestSend(context, resourceGroupName, loadTestName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateLoadtestSend(
  context: Client,
  resourceGroupName: string,
  loadTestName: string,
  loadTestResourcePatchRequestBody: LoadTestResourceUpdate,
  options: UpdateLoadtestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      loadTestName: loadTestName,
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
    body: loadTestResourceUpdateSerializer(loadTestResourcePatchRequestBody),
  });
}

export async function _updateLoadtestDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Update a LoadTestResource */
export function updateLoadtest(
  context: Client,
  resourceGroupName: string,
  loadTestName: string,
  loadTestResourcePatchRequestBody: LoadTestResourceUpdate,
  options: UpdateLoadtestOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _updateLoadtestDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateLoadtestSend(
        context,
        resourceGroupName,
        loadTestName,
        loadTestResourcePatchRequestBody,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _createOrUpdateLoadtestSend(
  context: Client,
  resourceGroupName: string,
  loadTestName: string,
  loadTestResource: LoadTestResource,
  options: CreateOrUpdateLoadtestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      loadTestName: loadTestName,
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
    body: loadTestResourceSerializer(loadTestResource),
  });
}

export async function _createOrUpdateLoadtestDeserialize(
  result: PathUncheckedResponse,
): Promise<LoadTestResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return loadTestResourceDeserializer(result.body);
}

/** Create a LoadTestResource */
export function createOrUpdateLoadtest(
  context: Client,
  resourceGroupName: string,
  loadTestName: string,
  loadTestResource: LoadTestResource,
  options: CreateOrUpdateLoadtestOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<LoadTestResource>, LoadTestResource> {
  return getLongRunningPoller(context, _createOrUpdateLoadtestDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateLoadtestSend(
        context,
        resourceGroupName,
        loadTestName,
        loadTestResource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<LoadTestResource>, LoadTestResource>;
}

export function _getLoadtestSend(
  context: Client,
  resourceGroupName: string,
  loadTestName: string,
  options: GetLoadtestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      loadTestName: loadTestName,
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

export async function _getLoadtestDeserialize(
  result: PathUncheckedResponse,
): Promise<LoadTestResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return loadTestResourceDeserializer(result.body);
}

/** Get a LoadTestResource */
export async function getLoadtest(
  context: Client,
  resourceGroupName: string,
  loadTestName: string,
  options: GetLoadtestOptionalParams = { requestOptions: {} },
): Promise<LoadTestResource> {
  const result = await _getLoadtestSend(context, resourceGroupName, loadTestName, options);
  return _getLoadtestDeserialize(result);
}

export function _listByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: ListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests{?api-version}",
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

export async function _listByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_LoadTestResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _loadTestResourceListResultDeserializer(result.body);
}

/** List LoadTestResource resources by resource group */
export function listByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: ListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<LoadTestResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listByResourceGroupSend(context, resourceGroupName, options),
    _listByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listBySubscriptionSend(
  context: Client,
  options: ListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.LoadTestService/loadTests{?api-version}",
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

export async function _listBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_LoadTestResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _loadTestResourceListResultDeserializer(result.body);
}

/** List LoadTestResource resources by subscription ID */
export function listBySubscription(
  context: Client,
  options: ListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<LoadTestResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, options),
    _listBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
