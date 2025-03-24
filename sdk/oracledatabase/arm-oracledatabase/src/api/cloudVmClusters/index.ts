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
  errorResponseDeserializer,
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
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _cloudVmClustersListPrivateIpAddressesSend(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: PrivateIpAddressesFilter,
  options: CloudVmClustersListPrivateIpAddressesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/listPrivateIpAddresses{?api-version}",
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
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: privateIpAddressesFilterSerializer(body),
  });
}

export async function _cloudVmClustersListPrivateIpAddressesDeserialize(
  result: PathUncheckedResponse,
): Promise<PrivateIpAddressProperties[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return privateIpAddressPropertiesArrayDeserializer(result.body);
}

/** List Private IP Addresses by the provided filter */
export async function cloudVmClustersListPrivateIpAddresses(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: PrivateIpAddressesFilter,
  options: CloudVmClustersListPrivateIpAddressesOptionalParams = {
    requestOptions: {},
  },
): Promise<PrivateIpAddressProperties[]> {
  const result = await _cloudVmClustersListPrivateIpAddressesSend(
    context,
    resourceGroupName,
    cloudvmclustername,
    body,
    options,
  );
  return _cloudVmClustersListPrivateIpAddressesDeserialize(result);
}

export function _cloudVmClustersRemoveVmsSend(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: AddRemoveDbNode,
  options: CloudVmClustersRemoveVmsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/removeVms{?api-version}",
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
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: addRemoveDbNodeSerializer(body),
  });
}

export async function _cloudVmClustersRemoveVmsDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudVmCluster> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return cloudVmClusterDeserializer(result.body);
}

/** Remove VMs from the VM Cluster */
export function cloudVmClustersRemoveVms(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: AddRemoveDbNode,
  options: CloudVmClustersRemoveVmsOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudVmCluster>, CloudVmCluster> {
  return getLongRunningPoller(context, _cloudVmClustersRemoveVmsDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _cloudVmClustersRemoveVmsSend(context, resourceGroupName, cloudvmclustername, body, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
}

export function _cloudVmClustersAddVmsSend(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: AddRemoveDbNode,
  options: CloudVmClustersAddVmsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/addVms{?api-version}",
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
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: addRemoveDbNodeSerializer(body),
  });
}

export async function _cloudVmClustersAddVmsDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudVmCluster> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return cloudVmClusterDeserializer(result.body);
}

/** Add VMs to the VM Cluster */
export function cloudVmClustersAddVms(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  body: AddRemoveDbNode,
  options: CloudVmClustersAddVmsOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudVmCluster>, CloudVmCluster> {
  return getLongRunningPoller(context, _cloudVmClustersAddVmsDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _cloudVmClustersAddVmsSend(context, resourceGroupName, cloudvmclustername, body, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
}

export function _cloudVmClustersListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: CloudVmClustersListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters{?api-version}",
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

export async function _cloudVmClustersListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_CloudVmClusterListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _cloudVmClusterListResultDeserializer(result.body);
}

/** List CloudVmCluster resources by resource group */
export function cloudVmClustersListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: CloudVmClustersListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CloudVmCluster> {
  return buildPagedAsyncIterator(
    context,
    () => _cloudVmClustersListByResourceGroupSend(context, resourceGroupName, options),
    _cloudVmClustersListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _cloudVmClustersCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  resource: CloudVmCluster,
  options: CloudVmClustersCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}{?api-version}",
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
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: cloudVmClusterSerializer(resource),
  });
}

export async function _cloudVmClustersCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudVmCluster> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return cloudVmClusterDeserializer(result.body);
}

/** Create a CloudVmCluster */
export function cloudVmClustersCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  resource: CloudVmCluster,
  options: CloudVmClustersCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudVmCluster>, CloudVmCluster> {
  return getLongRunningPoller(context, _cloudVmClustersCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _cloudVmClustersCreateOrUpdateSend(
        context,
        resourceGroupName,
        cloudvmclustername,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
}

export function _cloudVmClustersDeleteSend(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: CloudVmClustersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}{?api-version}",
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
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _cloudVmClustersDeleteDeserialize(
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

/** Delete a CloudVmCluster */
export function cloudVmClustersDelete(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: CloudVmClustersDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _cloudVmClustersDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _cloudVmClustersDeleteSend(context, resourceGroupName, cloudvmclustername, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _cloudVmClustersUpdateSend(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  properties: CloudVmClusterUpdate,
  options: CloudVmClustersUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}{?api-version}",
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
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: cloudVmClusterUpdateSerializer(properties),
  });
}

export async function _cloudVmClustersUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudVmCluster> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return cloudVmClusterDeserializer(result.body);
}

/** Update a CloudVmCluster */
export function cloudVmClustersUpdate(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  properties: CloudVmClusterUpdate,
  options: CloudVmClustersUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudVmCluster>, CloudVmCluster> {
  return getLongRunningPoller(context, _cloudVmClustersUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _cloudVmClustersUpdateSend(
        context,
        resourceGroupName,
        cloudvmclustername,
        properties,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<CloudVmCluster>, CloudVmCluster>;
}

export function _cloudVmClustersGetSend(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: CloudVmClustersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}{?api-version}",
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

export async function _cloudVmClustersGetDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudVmCluster> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return cloudVmClusterDeserializer(result.body);
}

/** Get a CloudVmCluster */
export async function cloudVmClustersGet(
  context: Client,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: CloudVmClustersGetOptionalParams = { requestOptions: {} },
): Promise<CloudVmCluster> {
  const result = await _cloudVmClustersGetSend(
    context,
    resourceGroupName,
    cloudvmclustername,
    options,
  );
  return _cloudVmClustersGetDeserialize(result);
}

export function _cloudVmClustersListBySubscriptionSend(
  context: Client,
  options: CloudVmClustersListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Oracle.Database/cloudVmClusters{?api-version}",
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

export async function _cloudVmClustersListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_CloudVmClusterListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _cloudVmClusterListResultDeserializer(result.body);
}

/** List CloudVmCluster resources by subscription ID */
export function cloudVmClustersListBySubscription(
  context: Client,
  options: CloudVmClustersListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CloudVmCluster> {
  return buildPagedAsyncIterator(
    context,
    () => _cloudVmClustersListBySubscriptionSend(context, options),
    _cloudVmClustersListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
