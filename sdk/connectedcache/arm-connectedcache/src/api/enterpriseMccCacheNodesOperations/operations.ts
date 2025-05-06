// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ConnectedCacheContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  ConnectedCachePatchResource,
  connectedCachePatchResourceSerializer,
  MccCacheNodeInstallDetails,
  mccCacheNodeInstallDetailsDeserializer,
  MccCacheNodeAutoUpdateHistory,
  mccCacheNodeAutoUpdateHistoryDeserializer,
  MccCacheNodeIssueHistory,
  mccCacheNodeIssueHistoryDeserializer,
  EnterpriseMccCacheNodeResource,
  enterpriseMccCacheNodeResourceSerializer,
  enterpriseMccCacheNodeResourceDeserializer,
  _EnterpriseMccCacheNodeResourceListResult,
  _enterpriseMccCacheNodeResourceListResultDeserializer,
  MccCacheNodeTlsCertificateHistory,
  mccCacheNodeTlsCertificateHistoryDeserializer,
} from "../../models/models.js";
import {
  EnterpriseMccCacheNodesOperationsGetCacheNodeTlsCertificateHistoryOptionalParams,
  EnterpriseMccCacheNodesOperationsGetCacheNodeMccIssueDetailsHistoryOptionalParams,
  EnterpriseMccCacheNodesOperationsGetCacheNodeAutoUpdateHistoryOptionalParams,
  EnterpriseMccCacheNodesOperationsGetCacheNodeInstallDetailsOptionalParams,
  EnterpriseMccCacheNodesOperationsListByEnterpriseMccCustomerResourceOptionalParams,
  EnterpriseMccCacheNodesOperationsDeleteOptionalParams,
  EnterpriseMccCacheNodesOperationsUpdateOptionalParams,
  EnterpriseMccCacheNodesOperationsCreateOrUpdateOptionalParams,
  EnterpriseMccCacheNodesOperationsGetOptionalParams,
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

export function _enterpriseMccCacheNodesOperationsGetCacheNodeTlsCertificateHistorySend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: EnterpriseMccCacheNodesOperationsGetCacheNodeTlsCertificateHistoryOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/enterpriseMccCustomers/{customerResourceName}/enterpriseMccCacheNodes/{cacheNodeResourceName}/getCacheNodeTlsCertificateHistory{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      customerResourceName: customerResourceName,
      cacheNodeResourceName: cacheNodeResourceName,
      "api%2Dversion": context.apiVersion,
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

export async function _enterpriseMccCacheNodesOperationsGetCacheNodeTlsCertificateHistoryDeserialize(
  result: PathUncheckedResponse,
): Promise<MccCacheNodeTlsCertificateHistory> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return mccCacheNodeTlsCertificateHistoryDeserializer(result.body);
}

/** This api gets ispCacheNode resource tls certificate histrory information */
export async function enterpriseMccCacheNodesOperationsGetCacheNodeTlsCertificateHistory(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: EnterpriseMccCacheNodesOperationsGetCacheNodeTlsCertificateHistoryOptionalParams = {
    requestOptions: {},
  },
): Promise<MccCacheNodeTlsCertificateHistory> {
  const result = await _enterpriseMccCacheNodesOperationsGetCacheNodeTlsCertificateHistorySend(
    context,
    resourceGroupName,
    customerResourceName,
    cacheNodeResourceName,
    options,
  );
  return _enterpriseMccCacheNodesOperationsGetCacheNodeTlsCertificateHistoryDeserialize(result);
}

export function _enterpriseMccCacheNodesOperationsGetCacheNodeMccIssueDetailsHistorySend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: EnterpriseMccCacheNodesOperationsGetCacheNodeMccIssueDetailsHistoryOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/enterpriseMccCustomers/{customerResourceName}/enterpriseMccCacheNodes/{cacheNodeResourceName}/getCacheNodeMccIssueDetailsHistory{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      customerResourceName: customerResourceName,
      cacheNodeResourceName: cacheNodeResourceName,
      "api%2Dversion": context.apiVersion,
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

export async function _enterpriseMccCacheNodesOperationsGetCacheNodeMccIssueDetailsHistoryDeserialize(
  result: PathUncheckedResponse,
): Promise<MccCacheNodeIssueHistory> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return mccCacheNodeIssueHistoryDeserializer(result.body);
}

/** This api gets ispCacheNode resource issues details histrory information */
export async function enterpriseMccCacheNodesOperationsGetCacheNodeMccIssueDetailsHistory(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: EnterpriseMccCacheNodesOperationsGetCacheNodeMccIssueDetailsHistoryOptionalParams = {
    requestOptions: {},
  },
): Promise<MccCacheNodeIssueHistory> {
  const result = await _enterpriseMccCacheNodesOperationsGetCacheNodeMccIssueDetailsHistorySend(
    context,
    resourceGroupName,
    customerResourceName,
    cacheNodeResourceName,
    options,
  );
  return _enterpriseMccCacheNodesOperationsGetCacheNodeMccIssueDetailsHistoryDeserialize(result);
}

export function _enterpriseMccCacheNodesOperationsGetCacheNodeAutoUpdateHistorySend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: EnterpriseMccCacheNodesOperationsGetCacheNodeAutoUpdateHistoryOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/enterpriseMccCustomers/{customerResourceName}/enterpriseMccCacheNodes/{cacheNodeResourceName}/getCacheNodeAutoUpdateHistory{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      customerResourceName: customerResourceName,
      cacheNodeResourceName: cacheNodeResourceName,
      "api%2Dversion": context.apiVersion,
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

export async function _enterpriseMccCacheNodesOperationsGetCacheNodeAutoUpdateHistoryDeserialize(
  result: PathUncheckedResponse,
): Promise<MccCacheNodeAutoUpdateHistory> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return mccCacheNodeAutoUpdateHistoryDeserializer(result.body);
}

/** This api gets ispCacheNode resource auto update histrory information */
export async function enterpriseMccCacheNodesOperationsGetCacheNodeAutoUpdateHistory(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: EnterpriseMccCacheNodesOperationsGetCacheNodeAutoUpdateHistoryOptionalParams = {
    requestOptions: {},
  },
): Promise<MccCacheNodeAutoUpdateHistory> {
  const result = await _enterpriseMccCacheNodesOperationsGetCacheNodeAutoUpdateHistorySend(
    context,
    resourceGroupName,
    customerResourceName,
    cacheNodeResourceName,
    options,
  );
  return _enterpriseMccCacheNodesOperationsGetCacheNodeAutoUpdateHistoryDeserialize(result);
}

export function _enterpriseMccCacheNodesOperationsGetCacheNodeInstallDetailsSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: EnterpriseMccCacheNodesOperationsGetCacheNodeInstallDetailsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/enterpriseMccCustomers/{customerResourceName}/enterpriseMccCacheNodes/{cacheNodeResourceName}/getCacheNodeInstallDetails{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      customerResourceName: customerResourceName,
      cacheNodeResourceName: cacheNodeResourceName,
      "api%2Dversion": context.apiVersion,
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

export async function _enterpriseMccCacheNodesOperationsGetCacheNodeInstallDetailsDeserialize(
  result: PathUncheckedResponse,
): Promise<MccCacheNodeInstallDetails> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return mccCacheNodeInstallDetailsDeserializer(result.body);
}

/** This api gets secrets of the ispCacheNode resource install details */
export async function enterpriseMccCacheNodesOperationsGetCacheNodeInstallDetails(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: EnterpriseMccCacheNodesOperationsGetCacheNodeInstallDetailsOptionalParams = {
    requestOptions: {},
  },
): Promise<MccCacheNodeInstallDetails> {
  const result = await _enterpriseMccCacheNodesOperationsGetCacheNodeInstallDetailsSend(
    context,
    resourceGroupName,
    customerResourceName,
    cacheNodeResourceName,
    options,
  );
  return _enterpriseMccCacheNodesOperationsGetCacheNodeInstallDetailsDeserialize(result);
}

export function _enterpriseMccCacheNodesOperationsListByEnterpriseMccCustomerResourceSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  options: EnterpriseMccCacheNodesOperationsListByEnterpriseMccCustomerResourceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/enterpriseMccCustomers/{customerResourceName}/enterpriseMccCacheNodes{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      customerResourceName: customerResourceName,
      "api%2Dversion": context.apiVersion,
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

export async function _enterpriseMccCacheNodesOperationsListByEnterpriseMccCustomerResourceDeserialize(
  result: PathUncheckedResponse,
): Promise<_EnterpriseMccCacheNodeResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _enterpriseMccCacheNodeResourceListResultDeserializer(result.body);
}

/** This api retrieves information about all ispCacheNode resources under the given subscription and resource group */
export function enterpriseMccCacheNodesOperationsListByEnterpriseMccCustomerResource(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  options: EnterpriseMccCacheNodesOperationsListByEnterpriseMccCustomerResourceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<EnterpriseMccCacheNodeResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _enterpriseMccCacheNodesOperationsListByEnterpriseMccCustomerResourceSend(
        context,
        resourceGroupName,
        customerResourceName,
        options,
      ),
    _enterpriseMccCacheNodesOperationsListByEnterpriseMccCustomerResourceDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _enterpriseMccCacheNodesOperationsDeleteSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: EnterpriseMccCacheNodesOperationsDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/enterpriseMccCustomers/{customerResourceName}/enterpriseMccCacheNodes/{cacheNodeResourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      customerResourceName: customerResourceName,
      cacheNodeResourceName: cacheNodeResourceName,
      "api%2Dversion": context.apiVersion,
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

export async function _enterpriseMccCacheNodesOperationsDeleteDeserialize(
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

/** This api deletes an existing ispCacheNode resource */
export function enterpriseMccCacheNodesOperationsDelete(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: EnterpriseMccCacheNodesOperationsDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _enterpriseMccCacheNodesOperationsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _enterpriseMccCacheNodesOperationsDeleteSend(
          context,
          resourceGroupName,
          customerResourceName,
          cacheNodeResourceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _enterpriseMccCacheNodesOperationsUpdateSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  properties: ConnectedCachePatchResource,
  options: EnterpriseMccCacheNodesOperationsUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/enterpriseMccCustomers/{customerResourceName}/enterpriseMccCacheNodes/{cacheNodeResourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      customerResourceName: customerResourceName,
      cacheNodeResourceName: cacheNodeResourceName,
      "api%2Dversion": context.apiVersion,
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
    body: connectedCachePatchResourceSerializer(properties),
  });
}

export async function _enterpriseMccCacheNodesOperationsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<EnterpriseMccCacheNodeResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return enterpriseMccCacheNodeResourceDeserializer(result.body);
}

/** This api updates an existing ispCacheNode resource */
export async function enterpriseMccCacheNodesOperationsUpdate(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  properties: ConnectedCachePatchResource,
  options: EnterpriseMccCacheNodesOperationsUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<EnterpriseMccCacheNodeResource> {
  const result = await _enterpriseMccCacheNodesOperationsUpdateSend(
    context,
    resourceGroupName,
    customerResourceName,
    cacheNodeResourceName,
    properties,
    options,
  );
  return _enterpriseMccCacheNodesOperationsUpdateDeserialize(result);
}

export function _enterpriseMccCacheNodesOperationsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  resource: EnterpriseMccCacheNodeResource,
  options: EnterpriseMccCacheNodesOperationsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/enterpriseMccCustomers/{customerResourceName}/enterpriseMccCacheNodes/{cacheNodeResourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      customerResourceName: customerResourceName,
      cacheNodeResourceName: cacheNodeResourceName,
      "api%2Dversion": context.apiVersion,
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
    body: enterpriseMccCacheNodeResourceSerializer(resource),
  });
}

export async function _enterpriseMccCacheNodesOperationsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<EnterpriseMccCacheNodeResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return enterpriseMccCacheNodeResourceDeserializer(result.body);
}

/** This api creates an ispCacheNode with the specified create parameters */
export function enterpriseMccCacheNodesOperationsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  resource: EnterpriseMccCacheNodeResource,
  options: EnterpriseMccCacheNodesOperationsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<EnterpriseMccCacheNodeResource>, EnterpriseMccCacheNodeResource> {
  return getLongRunningPoller(
    context,
    _enterpriseMccCacheNodesOperationsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _enterpriseMccCacheNodesOperationsCreateOrUpdateSend(
          context,
          resourceGroupName,
          customerResourceName,
          cacheNodeResourceName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<EnterpriseMccCacheNodeResource>, EnterpriseMccCacheNodeResource>;
}

export function _enterpriseMccCacheNodesOperationsGetSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: EnterpriseMccCacheNodesOperationsGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/enterpriseMccCustomers/{customerResourceName}/enterpriseMccCacheNodes/{cacheNodeResourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      customerResourceName: customerResourceName,
      cacheNodeResourceName: cacheNodeResourceName,
      "api%2Dversion": context.apiVersion,
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

export async function _enterpriseMccCacheNodesOperationsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<EnterpriseMccCacheNodeResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return enterpriseMccCacheNodeResourceDeserializer(result.body);
}

/** This api gets ispCacheNode resource information */
export async function enterpriseMccCacheNodesOperationsGet(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: EnterpriseMccCacheNodesOperationsGetOptionalParams = {
    requestOptions: {},
  },
): Promise<EnterpriseMccCacheNodeResource> {
  const result = await _enterpriseMccCacheNodesOperationsGetSend(
    context,
    resourceGroupName,
    customerResourceName,
    cacheNodeResourceName,
    options,
  );
  return _enterpriseMccCacheNodesOperationsGetDeserialize(result);
}
