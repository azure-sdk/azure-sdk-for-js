// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseContext as Client,
  CloudVmClustersAddVmsOptionalParams,
  CloudVmClustersCreateOrUpdateOptionalParams,
  CloudVmClustersDeleteOptionalParams,
  CloudVmClustersGetOptionalParams,
  CloudVmClustersListByResourceGroupOptionalParams,
  CloudVmClustersListBySubscriptionOptionalParams,
  CloudVmClustersListPrivateIpAddressesOptionalParams,
  CloudVmClustersRemoveVmsOptionalParams,
  CloudVmClustersUpdateOptionalParams,
} from "../index.js";
import {
  _CloudVmClusterListResult,
  _cloudVmClusterListResultDeserializer,
  CloudVmCluster,
  cloudVmClusterSerializer,
  cloudVmClusterDeserializer,
  CloudVmClusterUpdate,
  cloudVmClusterUpdateSerializer,
  AddRemoveDbNode,
  addRemoveDbNodeSerializer,
  PrivateIpAddressesFilter,
  privateIpAddressesFilterSerializer,
  PrivateIpAddressProperties,
  privateIpAddressPropertiesArrayDeserializer,
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

export function _cloudVmClustersListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: CloudVmClustersListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/cloudVmClusters",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudVmClustersListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_CloudVmClusterListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _cloudVmClusterListResultDeserializer(result.body);
}

/** List CloudVmCluster resources by subscription ID */
export function cloudVmClustersListBySubscription(
  context: Client,
  subscriptionId: string,
  options: CloudVmClustersListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CloudVmCluster> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _cloudVmClustersListBySubscriptionSend(context, subscriptionId, options),
    _cloudVmClustersListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _cloudVmClustersGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: CloudVmClustersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudVmClustersGetDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudVmCluster> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return cloudVmClusterDeserializer(result.body);
}

/** Get a CloudVmCluster */
export async function cloudVmClustersGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: CloudVmClustersGetOptionalParams = { requestOptions: {} },
): Promise<CloudVmCluster> {
  const result = await _cloudVmClustersGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudvmclustername,
    options,
  );
  return _cloudVmClustersGetDeserialize(result);
}

export function _cloudVmClustersUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  properties: CloudVmClusterUpdate,
  options: CloudVmClustersUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: cloudVmClusterUpdateSerializer(properties),
    });
}

export async function _cloudVmClustersUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudVmCluster> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return cloudVmClusterDeserializer(result.body);
}

/** Update a CloudVmCluster */
export function cloudVmClustersUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  properties: CloudVmClusterUpdate,
  options: CloudVmClustersUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudVmCluster>, CloudVmCluster> {
  return getLongRunningPoller(
    context,
    _cloudVmClustersUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudVmClustersUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudvmclustername,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
}

export function _cloudVmClustersDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: CloudVmClustersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudVmClustersDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a CloudVmCluster */
export function cloudVmClustersDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: CloudVmClustersDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _cloudVmClustersDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudVmClustersDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudvmclustername,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _cloudVmClustersCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  resource: CloudVmCluster,
  options: CloudVmClustersCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: cloudVmClusterSerializer(resource),
    });
}

export async function _cloudVmClustersCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudVmCluster> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return cloudVmClusterDeserializer(result.body);
}

/** Create a CloudVmCluster */
export function cloudVmClustersCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  resource: CloudVmCluster,
  options: CloudVmClustersCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudVmCluster>, CloudVmCluster> {
  return getLongRunningPoller(
    context,
    _cloudVmClustersCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudVmClustersCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudvmclustername,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
}

export function _cloudVmClustersListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CloudVmClustersListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudVmClustersListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_CloudVmClusterListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _cloudVmClusterListResultDeserializer(result.body);
}

/** List CloudVmCluster resources by resource group */
export function cloudVmClustersListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CloudVmClustersListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CloudVmCluster> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _cloudVmClustersListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _cloudVmClustersListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _cloudVmClustersAddVmsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: AddRemoveDbNode,
  options: CloudVmClustersAddVmsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/addVms",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: addRemoveDbNodeSerializer(body),
    });
}

export async function _cloudVmClustersAddVmsDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudVmCluster> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return cloudVmClusterDeserializer(result.body);
}

/** Add VMs to the VM Cluster */
export function cloudVmClustersAddVms(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: AddRemoveDbNode,
  options: CloudVmClustersAddVmsOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudVmCluster>, CloudVmCluster> {
  return getLongRunningPoller(
    context,
    _cloudVmClustersAddVmsDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudVmClustersAddVmsSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudvmclustername,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
}

export function _cloudVmClustersRemoveVmsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: AddRemoveDbNode,
  options: CloudVmClustersRemoveVmsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/removeVms",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: addRemoveDbNodeSerializer(body),
    });
}

export async function _cloudVmClustersRemoveVmsDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudVmCluster> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return cloudVmClusterDeserializer(result.body);
}

/** Remove VMs from the VM Cluster */
export function cloudVmClustersRemoveVms(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: AddRemoveDbNode,
  options: CloudVmClustersRemoveVmsOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudVmCluster>, CloudVmCluster> {
  return getLongRunningPoller(
    context,
    _cloudVmClustersRemoveVmsDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudVmClustersRemoveVmsSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudvmclustername,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
}

export function _cloudVmClustersListPrivateIpAddressesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: PrivateIpAddressesFilter,
  options: CloudVmClustersListPrivateIpAddressesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/listPrivateIpAddresses",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: privateIpAddressesFilterSerializer(body),
    });
}

export async function _cloudVmClustersListPrivateIpAddressesDeserialize(
  result: PathUncheckedResponse,
): Promise<PrivateIpAddressProperties[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return privateIpAddressPropertiesArrayDeserializer(result.body);
}

/** List Private IP Addresses by the provided filter */
export async function cloudVmClustersListPrivateIpAddresses(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: PrivateIpAddressesFilter,
  options: CloudVmClustersListPrivateIpAddressesOptionalParams = {
    requestOptions: {},
  },
): Promise<PrivateIpAddressProperties[]> {
  const result = await _cloudVmClustersListPrivateIpAddressesSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudvmclustername,
    body,
    options,
  );
  return _cloudVmClustersListPrivateIpAddressesDeserialize(result);
}
