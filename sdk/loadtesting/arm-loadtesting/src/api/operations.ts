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
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _listBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: ListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.LoadTestService/loadTests",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_LoadTestResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _loadTestResourceListResultDeserializer(result.body);
}

/** List LoadTestResource resources by subscription ID */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: ListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<LoadTestResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: ListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_LoadTestResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _loadTestResourceListResultDeserializer(result.body);
}

/** List LoadTestResource resources by resource group */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: ListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<LoadTestResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _listByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getLoadtestSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  options: GetLoadtestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}",
      subscriptionId,
      resourceGroupName,
      loadTestName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getLoadtestDeserialize(
  result: PathUncheckedResponse,
): Promise<LoadTestResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return loadTestResourceDeserializer(result.body);
}

/** Get a LoadTestResource */
export async function getLoadtest(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  options: GetLoadtestOptionalParams = { requestOptions: {} },
): Promise<LoadTestResource> {
  const result = await _getLoadtestSend(
    context,
    subscriptionId,
    resourceGroupName,
    loadTestName,
    options,
  );
  return _getLoadtestDeserialize(result);
}

export function _createOrUpdateLoadtestSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  loadTestResource: LoadTestResource,
  options: CreateOrUpdateLoadtestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}",
      subscriptionId,
      resourceGroupName,
      loadTestName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: loadTestResourceSerializer(loadTestResource),
    });
}

export async function _createOrUpdateLoadtestDeserialize(
  result: PathUncheckedResponse,
): Promise<LoadTestResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return loadTestResourceDeserializer(result.body);
}

/** Create a LoadTestResource */
export function createOrUpdateLoadtest(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  loadTestResource: LoadTestResource,
  options: CreateOrUpdateLoadtestOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<LoadTestResource>, LoadTestResource> {
  return getLongRunningPoller(
    context,
    _createOrUpdateLoadtestDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _createOrUpdateLoadtestSend(
          context,
          subscriptionId,
          resourceGroupName,
          loadTestName,
          loadTestResource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<LoadTestResource>, LoadTestResource>;
}

export function _updateLoadtestSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  loadTestResourcePatchRequestBody: LoadTestResourceUpdate,
  options: UpdateLoadtestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}",
      subscriptionId,
      resourceGroupName,
      loadTestName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: loadTestResourceUpdateSerializer(loadTestResourcePatchRequestBody),
    });
}

export async function _updateLoadtestDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Update a LoadTestResource */
export function updateLoadtest(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  loadTestResourcePatchRequestBody: LoadTestResourceUpdate,
  options: UpdateLoadtestOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _updateLoadtestDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _updateLoadtestSend(
          context,
          subscriptionId,
          resourceGroupName,
          loadTestName,
          loadTestResourcePatchRequestBody,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _deleteLoadtestSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  options: DeleteLoadtestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}",
      subscriptionId,
      resourceGroupName,
      loadTestName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteLoadtestDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a LoadTestResource */
export function deleteLoadtest(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  options: DeleteLoadtestOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _deleteLoadtestDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _deleteLoadtestSend(
          context,
          subscriptionId,
          resourceGroupName,
          loadTestName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _outboundNetworkDependenciesEndpointsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  options: OutboundNetworkDependenciesEndpointsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}/outboundNetworkDependenciesEndpoints",
      subscriptionId,
      resourceGroupName,
      loadTestName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _outboundNetworkDependenciesEndpointsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedOutboundEnvironmentEndpoint> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _pagedOutboundEnvironmentEndpointDeserializer(result.body);
}

/** Lists the endpoints that agents may call as part of load testing. */
export function outboundNetworkDependenciesEndpoints(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  options: OutboundNetworkDependenciesEndpointsOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<OutboundEnvironmentEndpoint> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _outboundNetworkDependenciesEndpointsSend(
        context,
        subscriptionId,
        resourceGroupName,
        loadTestName,
        options,
      ),
    _outboundNetworkDependenciesEndpointsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getQuotaSend(
  context: Client,
  subscriptionId: string,
  location: string,
  quotaBucketName: string,
  options: GetQuotaOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.LoadTestService/locations/{location}/quotas/{quotaBucketName}",
      subscriptionId,
      location,
      quotaBucketName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getQuotaDeserialize(
  result: PathUncheckedResponse,
): Promise<QuotaResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return quotaResourceDeserializer(result.body);
}

/** Get the available quota for a quota bucket per region per subscription. */
export async function getQuota(
  context: Client,
  subscriptionId: string,
  location: string,
  quotaBucketName: string,
  options: GetQuotaOptionalParams = { requestOptions: {} },
): Promise<QuotaResource> {
  const result = await _getQuotaSend(
    context,
    subscriptionId,
    location,
    quotaBucketName,
    options,
  );
  return _getQuotaDeserialize(result);
}

export function _listQuotaSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: ListQuotaOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.LoadTestService/locations/{location}/quotas",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listQuotaDeserialize(
  result: PathUncheckedResponse,
): Promise<_QuotaResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _quotaResourceListResultDeserializer(result.body);
}

/** List quotas for a given subscription Id. */
export function listQuota(
  context: Client,
  subscriptionId: string,
  location: string,
  options: ListQuotaOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<QuotaResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listQuotaSend(context, subscriptionId, location, options),
    _listQuotaDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _checkAvailabilityQuotaSend(
  context: Client,
  subscriptionId: string,
  location: string,
  quotaBucketName: string,
  quotaBucketRequest: QuotaBucketRequest,
  options: CheckAvailabilityQuotaOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.LoadTestService/locations/{location}/quotas/{quotaBucketName}/checkAvailabilityQuota",
      subscriptionId,
      location,
      quotaBucketName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: quotaBucketRequestSerializer(quotaBucketRequest),
    });
}

export async function _checkAvailabilityQuotaDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckQuotaAvailabilityResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return checkQuotaAvailabilityResponseDeserializer(result.body);
}

/** Check Quota Availability on quota bucket per region per subscription. */
export async function checkAvailabilityQuota(
  context: Client,
  subscriptionId: string,
  location: string,
  quotaBucketName: string,
  quotaBucketRequest: QuotaBucketRequest,
  options: CheckAvailabilityQuotaOptionalParams = { requestOptions: {} },
): Promise<CheckQuotaAvailabilityResponse> {
  const result = await _checkAvailabilityQuotaSend(
    context,
    subscriptionId,
    location,
    quotaBucketName,
    quotaBucketRequest,
    options,
  );
  return _checkAvailabilityQuotaDeserialize(result);
}
