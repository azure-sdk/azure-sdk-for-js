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
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _virtualNetworkAddressesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  options: VirtualNetworkAddressesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
      virtualnetworkaddressname,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualNetworkAddressesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualNetworkAddress> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return virtualNetworkAddressDeserializer(result.body);
}

/** Get a VirtualNetworkAddress */
export async function virtualNetworkAddressesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  options: VirtualNetworkAddressesGetOptionalParams = { requestOptions: {} },
): Promise<VirtualNetworkAddress> {
  const result = await _virtualNetworkAddressesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudvmclustername,
    virtualnetworkaddressname,
    options,
  );
  return _virtualNetworkAddressesGetDeserialize(result);
}

export function _virtualNetworkAddressesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  options: VirtualNetworkAddressesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
      virtualnetworkaddressname,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualNetworkAddressesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a VirtualNetworkAddress */
export function virtualNetworkAddressesDelete(
  context: Client,
  subscriptionId: string,
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
          subscriptionId,
          resourceGroupName,
          cloudvmclustername,
          virtualnetworkaddressname,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualNetworkAddressesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  resource: VirtualNetworkAddress,
  options: VirtualNetworkAddressesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
      virtualnetworkaddressname,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: virtualNetworkAddressSerializer(resource),
    });
}

export async function _virtualNetworkAddressesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualNetworkAddress> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return virtualNetworkAddressDeserializer(result.body);
}

/** Create a VirtualNetworkAddress */
export function virtualNetworkAddressesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
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
          subscriptionId,
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

export function _virtualNetworkAddressesListByCloudVmClusterSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: VirtualNetworkAddressesListByCloudVmClusterOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualNetworkAddressesListByCloudVmClusterDeserialize(
  result: PathUncheckedResponse,
): Promise<_VirtualNetworkAddressListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _virtualNetworkAddressListResultDeserializer(result.body);
}

/** List VirtualNetworkAddress resources by CloudVmCluster */
export function virtualNetworkAddressesListByCloudVmCluster(
  context: Client,
  subscriptionId: string,
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
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        options,
      ),
    _virtualNetworkAddressesListByCloudVmClusterDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
