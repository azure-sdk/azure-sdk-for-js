// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ConnectedCacheContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  ConnectedCachePatchResource,
  connectedCachePatchResourceSerializer,
  IspCacheNodeResource,
  ispCacheNodeResourceSerializer,
  ispCacheNodeResourceDeserializer,
  _IspCacheNodeResourceListResult,
  _ispCacheNodeResourceListResultDeserializer,
  MccCacheNodeBgpCidrDetails,
  mccCacheNodeBgpCidrDetailsDeserializer,
  MccCacheNodeInstallDetails,
  mccCacheNodeInstallDetailsDeserializer,
  MccCacheNodeAutoUpdateHistory,
  mccCacheNodeAutoUpdateHistoryDeserializer,
  MccCacheNodeIssueHistory,
  mccCacheNodeIssueHistoryDeserializer,
} from "../../models/models.js";
import {
  IspCacheNodesOperationsGetCacheNodeMccIssueDetailsHistoryOptionalParams,
  IspCacheNodesOperationsGetCacheNodeAutoUpdateHistoryOptionalParams,
  IspCacheNodesOperationsGetCacheNodeInstallDetailsOptionalParams,
  IspCacheNodesOperationsGetBgpCidrsOptionalParams,
  IspCacheNodesOperationsListByIspCustomerResourceOptionalParams,
  IspCacheNodesOperationsDeleteOptionalParams,
  IspCacheNodesOperationsUpdateOptionalParams,
  IspCacheNodesOperationsCreateOrUpdateOptionalParams,
  IspCacheNodesOperationsGetOptionalParams,
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

export function _ispCacheNodesOperationsGetCacheNodeMccIssueDetailsHistorySend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: IspCacheNodesOperationsGetCacheNodeMccIssueDetailsHistoryOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/ispCustomers/{customerResourceName}/ispCacheNodes/{cacheNodeResourceName}/getCacheNodeMccIssueDetailsHistory{?api%2Dversion}",
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

export async function _ispCacheNodesOperationsGetCacheNodeMccIssueDetailsHistoryDeserialize(
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
export async function ispCacheNodesOperationsGetCacheNodeMccIssueDetailsHistory(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: IspCacheNodesOperationsGetCacheNodeMccIssueDetailsHistoryOptionalParams = {
    requestOptions: {},
  },
): Promise<MccCacheNodeIssueHistory> {
  const result = await _ispCacheNodesOperationsGetCacheNodeMccIssueDetailsHistorySend(
    context,
    resourceGroupName,
    customerResourceName,
    cacheNodeResourceName,
    options,
  );
  return _ispCacheNodesOperationsGetCacheNodeMccIssueDetailsHistoryDeserialize(result);
}

export function _ispCacheNodesOperationsGetCacheNodeAutoUpdateHistorySend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: IspCacheNodesOperationsGetCacheNodeAutoUpdateHistoryOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/ispCustomers/{customerResourceName}/ispCacheNodes/{cacheNodeResourceName}/getCacheNodeAutoUpdateHistory{?api%2Dversion}",
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

export async function _ispCacheNodesOperationsGetCacheNodeAutoUpdateHistoryDeserialize(
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
export async function ispCacheNodesOperationsGetCacheNodeAutoUpdateHistory(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: IspCacheNodesOperationsGetCacheNodeAutoUpdateHistoryOptionalParams = {
    requestOptions: {},
  },
): Promise<MccCacheNodeAutoUpdateHistory> {
  const result = await _ispCacheNodesOperationsGetCacheNodeAutoUpdateHistorySend(
    context,
    resourceGroupName,
    customerResourceName,
    cacheNodeResourceName,
    options,
  );
  return _ispCacheNodesOperationsGetCacheNodeAutoUpdateHistoryDeserialize(result);
}

export function _ispCacheNodesOperationsGetCacheNodeInstallDetailsSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: IspCacheNodesOperationsGetCacheNodeInstallDetailsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/ispCustomers/{customerResourceName}/ispCacheNodes/{cacheNodeResourceName}/getCacheNodeInstallDetails{?api%2Dversion}",
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

export async function _ispCacheNodesOperationsGetCacheNodeInstallDetailsDeserialize(
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
export async function ispCacheNodesOperationsGetCacheNodeInstallDetails(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: IspCacheNodesOperationsGetCacheNodeInstallDetailsOptionalParams = {
    requestOptions: {},
  },
): Promise<MccCacheNodeInstallDetails> {
  const result = await _ispCacheNodesOperationsGetCacheNodeInstallDetailsSend(
    context,
    resourceGroupName,
    customerResourceName,
    cacheNodeResourceName,
    options,
  );
  return _ispCacheNodesOperationsGetCacheNodeInstallDetailsDeserialize(result);
}

export function _ispCacheNodesOperationsGetBgpCidrsSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: IspCacheNodesOperationsGetBgpCidrsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/ispCustomers/{customerResourceName}/ispCacheNodes/{cacheNodeResourceName}/getBgpCidrs{?api%2Dversion}",
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

export async function _ispCacheNodesOperationsGetBgpCidrsDeserialize(
  result: PathUncheckedResponse,
): Promise<MccCacheNodeBgpCidrDetails> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return mccCacheNodeBgpCidrDetailsDeserializer(result.body);
}

/** This api gets ispCacheNode resource information */
export async function ispCacheNodesOperationsGetBgpCidrs(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: IspCacheNodesOperationsGetBgpCidrsOptionalParams = {
    requestOptions: {},
  },
): Promise<MccCacheNodeBgpCidrDetails> {
  const result = await _ispCacheNodesOperationsGetBgpCidrsSend(
    context,
    resourceGroupName,
    customerResourceName,
    cacheNodeResourceName,
    options,
  );
  return _ispCacheNodesOperationsGetBgpCidrsDeserialize(result);
}

export function _ispCacheNodesOperationsListByIspCustomerResourceSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  options: IspCacheNodesOperationsListByIspCustomerResourceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/ispCustomers/{customerResourceName}/ispCacheNodes{?api%2Dversion}",
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

export async function _ispCacheNodesOperationsListByIspCustomerResourceDeserialize(
  result: PathUncheckedResponse,
): Promise<_IspCacheNodeResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _ispCacheNodeResourceListResultDeserializer(result.body);
}

/** This api retrieves information about all ispCacheNode resources under the given subscription and resource group */
export function ispCacheNodesOperationsListByIspCustomerResource(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  options: IspCacheNodesOperationsListByIspCustomerResourceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<IspCacheNodeResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _ispCacheNodesOperationsListByIspCustomerResourceSend(
        context,
        resourceGroupName,
        customerResourceName,
        options,
      ),
    _ispCacheNodesOperationsListByIspCustomerResourceDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _ispCacheNodesOperationsDeleteSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: IspCacheNodesOperationsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/ispCustomers/{customerResourceName}/ispCacheNodes/{cacheNodeResourceName}{?api%2Dversion}",
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

export async function _ispCacheNodesOperationsDeleteDeserialize(
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
export function ispCacheNodesOperationsDelete(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: IspCacheNodesOperationsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _ispCacheNodesOperationsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _ispCacheNodesOperationsDeleteSend(
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

export function _ispCacheNodesOperationsUpdateSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  properties: ConnectedCachePatchResource,
  options: IspCacheNodesOperationsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/ispCustomers/{customerResourceName}/ispCacheNodes/{cacheNodeResourceName}{?api%2Dversion}",
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

export async function _ispCacheNodesOperationsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<IspCacheNodeResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return ispCacheNodeResourceDeserializer(result.body);
}

/** This api updates an existing ispCacheNode resource */
export async function ispCacheNodesOperationsUpdate(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  properties: ConnectedCachePatchResource,
  options: IspCacheNodesOperationsUpdateOptionalParams = { requestOptions: {} },
): Promise<IspCacheNodeResource> {
  const result = await _ispCacheNodesOperationsUpdateSend(
    context,
    resourceGroupName,
    customerResourceName,
    cacheNodeResourceName,
    properties,
    options,
  );
  return _ispCacheNodesOperationsUpdateDeserialize(result);
}

export function _ispCacheNodesOperationsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  resource: IspCacheNodeResource,
  options: IspCacheNodesOperationsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/ispCustomers/{customerResourceName}/ispCacheNodes/{cacheNodeResourceName}{?api%2Dversion}",
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
    body: ispCacheNodeResourceSerializer(resource),
  });
}

export async function _ispCacheNodesOperationsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<IspCacheNodeResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return ispCacheNodeResourceDeserializer(result.body);
}

/** This api creates an ispCacheNode with the specified create parameters */
export function ispCacheNodesOperationsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  resource: IspCacheNodeResource,
  options: IspCacheNodesOperationsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<IspCacheNodeResource>, IspCacheNodeResource> {
  return getLongRunningPoller(
    context,
    _ispCacheNodesOperationsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _ispCacheNodesOperationsCreateOrUpdateSend(
          context,
          resourceGroupName,
          customerResourceName,
          cacheNodeResourceName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<IspCacheNodeResource>, IspCacheNodeResource>;
}

export function _ispCacheNodesOperationsGetSend(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: IspCacheNodesOperationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedCache/ispCustomers/{customerResourceName}/ispCacheNodes/{cacheNodeResourceName}{?api%2Dversion}",
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

export async function _ispCacheNodesOperationsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<IspCacheNodeResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return ispCacheNodeResourceDeserializer(result.body);
}

/** This api gets ispCacheNode resource information */
export async function ispCacheNodesOperationsGet(
  context: Client,
  resourceGroupName: string,
  customerResourceName: string,
  cacheNodeResourceName: string,
  options: IspCacheNodesOperationsGetOptionalParams = { requestOptions: {} },
): Promise<IspCacheNodeResource> {
  const result = await _ispCacheNodesOperationsGetSend(
    context,
    resourceGroupName,
    customerResourceName,
    cacheNodeResourceName,
    options,
  );
  return _ispCacheNodesOperationsGetDeserialize(result);
}
