// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseContext as Client,
  VirtualNetworkAddressesCreateOrUpdateOptionalParams,
  VirtualNetworkAddressesDeleteOptionalParams,
  VirtualNetworkAddressesGetOptionalParams,
  VirtualNetworkAddressesListByCloudVmClusterOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  VirtualNetworkAddress,
  virtualNetworkAddressSerializer,
  virtualNetworkAddressDeserializer,
  _VirtualNetworkAddressListResult,
  _virtualNetworkAddressListResultDeserializer,
} from "../../models/models.js";
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

export function _virtualNetworkAddressesListByCloudVmClusterSend(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: VirtualNetworkAddressesListByCloudVmClusterOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      cloudvmclustername: cloudvmclustername,
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

export async function _virtualNetworkAddressesListByCloudVmClusterDeserialize(
  result: PathUncheckedResponse,
): Promise<_VirtualNetworkAddressListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _virtualNetworkAddressListResultDeserializer(result.body);
}

/** List VirtualNetworkAddress resources by CloudVmCluster */
export function virtualNetworkAddressesListByCloudVmCluster(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: VirtualNetworkAddressesListByCloudVmClusterOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualNetworkAddress> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _virtualNetworkAddressesListByCloudVmClusterSend(
        context,
        resourceGroupName,
        cloudvmclustername,
        options,
      ),
    _virtualNetworkAddressesListByCloudVmClusterDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _virtualNetworkAddressesCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  resource: VirtualNetworkAddress,
  options: VirtualNetworkAddressesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      cloudvmclustername: cloudvmclustername,
      virtualnetworkaddressname: virtualnetworkaddressname,
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
    body: virtualNetworkAddressSerializer(resource),
  });
}

export async function _virtualNetworkAddressesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualNetworkAddress> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return virtualNetworkAddressDeserializer(result.body);
}

/** Create a VirtualNetworkAddress */
export function virtualNetworkAddressesCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  resource: VirtualNetworkAddress,
  options: VirtualNetworkAddressesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<VirtualNetworkAddress>, VirtualNetworkAddress> {
  return getLongRunningPoller(
    context,
    _virtualNetworkAddressesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualNetworkAddressesCreateOrUpdateSend(
          context,
          resourceGroupName,
          cloudvmclustername,
          virtualnetworkaddressname,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<VirtualNetworkAddress>, VirtualNetworkAddress>;
}

export function _virtualNetworkAddressesDeleteSend(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  options: VirtualNetworkAddressesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      cloudvmclustername: cloudvmclustername,
      virtualnetworkaddressname: virtualnetworkaddressname,
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

export async function _virtualNetworkAddressesDeleteDeserialize(
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

/** Delete a VirtualNetworkAddress */
export function virtualNetworkAddressesDelete(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  options: VirtualNetworkAddressesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualNetworkAddressesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualNetworkAddressesDeleteSend(
          context,
          resourceGroupName,
          cloudvmclustername,
          virtualnetworkaddressname,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualNetworkAddressesGetSend(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  options: VirtualNetworkAddressesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      cloudvmclustername: cloudvmclustername,
      virtualnetworkaddressname: virtualnetworkaddressname,
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

export async function _virtualNetworkAddressesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualNetworkAddress> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return virtualNetworkAddressDeserializer(result.body);
}

/** Get a VirtualNetworkAddress */
export async function virtualNetworkAddressesGet(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  options: VirtualNetworkAddressesGetOptionalParams = { requestOptions: {} },
): Promise<VirtualNetworkAddress> {
  const result = await _virtualNetworkAddressesGetSend(
    context,
    resourceGroupName,
    cloudvmclustername,
    virtualnetworkaddressname,
    options,
  );
  return _virtualNetworkAddressesGetDeserialize(result);
}
