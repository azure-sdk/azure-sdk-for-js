// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ScVmmContext as Client,
  VirtualNetworksCreateOrUpdateOptionalParams,
  VirtualNetworksDeleteOptionalParams,
  VirtualNetworksGetOptionalParams,
  VirtualNetworksListByResourceGroupOptionalParams,
  VirtualNetworksListBySubscriptionOptionalParams,
  VirtualNetworksUpdateOptionalParams,
} from "../index.js";
import {
  VirtualNetwork,
  virtualNetworkSerializer,
  virtualNetworkDeserializer,
  VirtualNetworkTagsUpdate,
  virtualNetworkTagsUpdateSerializer,
  _VirtualNetworkListResult,
  _virtualNetworkListResultDeserializer,
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

export function _virtualNetworksGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  options: VirtualNetworksGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}",
      subscriptionId,
      resourceGroupName,
      virtualNetworkName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualNetworksGetDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualNetwork> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return virtualNetworkDeserializer(result.body);
}

/** Implements VirtualNetwork GET method. */
export async function virtualNetworksGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  options: VirtualNetworksGetOptionalParams = { requestOptions: {} },
): Promise<VirtualNetwork> {
  const result = await _virtualNetworksGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    virtualNetworkName,
    options,
  );
  return _virtualNetworksGetDeserialize(result);
}

export function _virtualNetworksCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  resource: VirtualNetwork,
  options: VirtualNetworksCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}",
      subscriptionId,
      resourceGroupName,
      virtualNetworkName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: virtualNetworkSerializer(resource),
    });
}

export async function _virtualNetworksCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualNetwork> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return virtualNetworkDeserializer(result.body);
}

/** Onboards the ScVmm virtual network as an Azure virtual network resource. */
export function virtualNetworksCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  resource: VirtualNetwork,
  options: VirtualNetworksCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VirtualNetwork>, VirtualNetwork> {
  return getLongRunningPoller(
    context,
    _virtualNetworksCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualNetworksCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          virtualNetworkName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<VirtualNetwork>, VirtualNetwork>;
}

export function _virtualNetworksUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  properties: VirtualNetworkTagsUpdate,
  options: VirtualNetworksUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}",
      subscriptionId,
      resourceGroupName,
      virtualNetworkName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: virtualNetworkTagsUpdateSerializer(properties),
    });
}

export async function _virtualNetworksUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualNetwork> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return virtualNetworkDeserializer(result.body);
}

/** Updates the VirtualNetworks resource. */
export function virtualNetworksUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  properties: VirtualNetworkTagsUpdate,
  options: VirtualNetworksUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VirtualNetwork>, VirtualNetwork> {
  return getLongRunningPoller(
    context,
    _virtualNetworksUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualNetworksUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          virtualNetworkName,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<VirtualNetwork>, VirtualNetwork>;
}

export function _virtualNetworksDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  options: VirtualNetworksDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}",
      subscriptionId,
      resourceGroupName,
      virtualNetworkName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { force: options?.force },
    });
}

export async function _virtualNetworksDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deregisters the ScVmm virtual network from Azure. */
export function virtualNetworksDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  options: VirtualNetworksDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualNetworksDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualNetworksDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          virtualNetworkName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualNetworksListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: VirtualNetworksListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualNetworksListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_VirtualNetworkListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _virtualNetworkListResultDeserializer(result.body);
}

/** List of VirtualNetworks in a resource group. */
export function virtualNetworksListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: VirtualNetworksListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualNetwork> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _virtualNetworksListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _virtualNetworksListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _virtualNetworksListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: VirtualNetworksListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/virtualNetworks",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualNetworksListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_VirtualNetworkListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _virtualNetworkListResultDeserializer(result.body);
}

/** List of VirtualNetworks in a subscription. */
export function virtualNetworksListBySubscription(
  context: Client,
  subscriptionId: string,
  options: VirtualNetworksListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualNetwork> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _virtualNetworksListBySubscriptionSend(context, subscriptionId, options),
    _virtualNetworksListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
