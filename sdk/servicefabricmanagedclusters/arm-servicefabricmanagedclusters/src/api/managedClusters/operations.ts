// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceFabricContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  faultSimulationContentUnionSerializer,
  FaultSimulationContentUnion,
  FaultSimulation,
  faultSimulationDeserializer,
  FaultSimulationIdContent,
  faultSimulationIdContentSerializer,
  _FaultSimulationListResult,
  _faultSimulationListResultDeserializer,
  ManagedCluster,
  managedClusterSerializer,
  managedClusterDeserializer,
  ManagedClusterUpdateParameters,
  managedClusterUpdateParametersSerializer,
  _ManagedClusterListResult,
  _managedClusterListResultDeserializer,
} from "../../models/models.js";
import {
  ManagedClustersStopFaultSimulationOptionalParams,
  ManagedClustersStartFaultSimulationOptionalParams,
  ManagedClustersListFaultSimulationOptionalParams,
  ManagedClustersGetFaultSimulationOptionalParams,
  ManagedClustersListBySubscriptionOptionalParams,
  ManagedClustersListByResourceGroupOptionalParams,
  ManagedClustersDeleteOptionalParams,
  ManagedClustersUpdateOptionalParams,
  ManagedClustersCreateOrUpdateOptionalParams,
  ManagedClustersGetOptionalParams,
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

export function _managedClustersStopFaultSimulationSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  parameters: FaultSimulationIdContent,
  options: ManagedClustersStopFaultSimulationOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/stopFaultSimulation{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
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
    body: faultSimulationIdContentSerializer(parameters),
  });
}

export async function _managedClustersStopFaultSimulationDeserialize(
  result: PathUncheckedResponse,
): Promise<FaultSimulation> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return faultSimulationDeserializer(result.body);
}

/** Stops a fault simulation on the cluster. */
export function managedClustersStopFaultSimulation(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  parameters: FaultSimulationIdContent,
  options: ManagedClustersStopFaultSimulationOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<FaultSimulation>, FaultSimulation> {
  return getLongRunningPoller(
    context,
    _managedClustersStopFaultSimulationDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _managedClustersStopFaultSimulationSend(
          context,
          resourceGroupName,
          clusterName,
          parameters,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<FaultSimulation>, FaultSimulation>;
}

export function _managedClustersStartFaultSimulationSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  parameters: FaultSimulationContentUnion,
  options: ManagedClustersStartFaultSimulationOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/startFaultSimulation{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
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
    body: faultSimulationContentUnionSerializer(parameters),
  });
}

export async function _managedClustersStartFaultSimulationDeserialize(
  result: PathUncheckedResponse,
): Promise<FaultSimulation> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return faultSimulationDeserializer(result.body);
}

/** Starts a fault simulation on the cluster. */
export function managedClustersStartFaultSimulation(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  parameters: FaultSimulationContentUnion,
  options: ManagedClustersStartFaultSimulationOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<FaultSimulation>, FaultSimulation> {
  return getLongRunningPoller(
    context,
    _managedClustersStartFaultSimulationDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _managedClustersStartFaultSimulationSend(
          context,
          resourceGroupName,
          clusterName,
          parameters,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<FaultSimulation>, FaultSimulation>;
}

export function _managedClustersListFaultSimulationSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  options: ManagedClustersListFaultSimulationOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/listFaultSimulation{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
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

export async function _managedClustersListFaultSimulationDeserialize(
  result: PathUncheckedResponse,
): Promise<_FaultSimulationListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _faultSimulationListResultDeserializer(result.body);
}

/** Gets the list of recent fault simulations for the cluster. */
export function managedClustersListFaultSimulation(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  options: ManagedClustersListFaultSimulationOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<FaultSimulation> {
  return buildPagedAsyncIterator(
    context,
    () => _managedClustersListFaultSimulationSend(context, resourceGroupName, clusterName, options),
    _managedClustersListFaultSimulationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _managedClustersGetFaultSimulationSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  parameters: FaultSimulationIdContent,
  options: ManagedClustersGetFaultSimulationOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/getFaultSimulation{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
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
    body: faultSimulationIdContentSerializer(parameters),
  });
}

export async function _managedClustersGetFaultSimulationDeserialize(
  result: PathUncheckedResponse,
): Promise<FaultSimulation> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return faultSimulationDeserializer(result.body);
}

/** Gets a fault simulation by the simulationId. */
export async function managedClustersGetFaultSimulation(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  parameters: FaultSimulationIdContent,
  options: ManagedClustersGetFaultSimulationOptionalParams = {
    requestOptions: {},
  },
): Promise<FaultSimulation> {
  const result = await _managedClustersGetFaultSimulationSend(
    context,
    resourceGroupName,
    clusterName,
    parameters,
    options,
  );
  return _managedClustersGetFaultSimulationDeserialize(result);
}

export function _managedClustersListBySubscriptionSend(
  context: Client,
  options: ManagedClustersListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/managedClusters{?api-version}",
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

export async function _managedClustersListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_ManagedClusterListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _managedClusterListResultDeserializer(result.body);
}

/** Gets all Service Fabric cluster resources created or in the process of being created in the subscription. */
export function managedClustersListBySubscription(
  context: Client,
  options: ManagedClustersListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ManagedCluster> {
  return buildPagedAsyncIterator(
    context,
    () => _managedClustersListBySubscriptionSend(context, options),
    _managedClustersListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _managedClustersListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: ManagedClustersListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters{?api-version}",
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

export async function _managedClustersListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_ManagedClusterListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _managedClusterListResultDeserializer(result.body);
}

/** Gets all Service Fabric cluster resources created or in the process of being created in the resource group. */
export function managedClustersListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: ManagedClustersListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ManagedCluster> {
  return buildPagedAsyncIterator(
    context,
    () => _managedClustersListByResourceGroupSend(context, resourceGroupName, options),
    _managedClustersListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _managedClustersDeleteSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  options: ManagedClustersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
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

export async function _managedClustersDeleteDeserialize(
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

/** Delete a Service Fabric managed cluster resource with the specified name. */
export function managedClustersDelete(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  options: ManagedClustersDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _managedClustersDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _managedClustersDeleteSend(context, resourceGroupName, clusterName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _managedClustersUpdateSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  parameters: ManagedClusterUpdateParameters,
  options: ManagedClustersUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
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
    body: managedClusterUpdateParametersSerializer(parameters),
  });
}

export async function _managedClustersUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ManagedCluster> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return managedClusterDeserializer(result.body);
}

/** Update the tags of of a Service Fabric managed cluster resource with the specified name. */
export async function managedClustersUpdate(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  parameters: ManagedClusterUpdateParameters,
  options: ManagedClustersUpdateOptionalParams = { requestOptions: {} },
): Promise<ManagedCluster> {
  const result = await _managedClustersUpdateSend(
    context,
    resourceGroupName,
    clusterName,
    parameters,
    options,
  );
  return _managedClustersUpdateDeserialize(result);
}

export function _managedClustersCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  parameters: ManagedCluster,
  options: ManagedClustersCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
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
    body: managedClusterSerializer(parameters),
  });
}

export async function _managedClustersCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ManagedCluster> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return managedClusterDeserializer(result.body);
}

/** Create or update a Service Fabric managed cluster resource with the specified name. */
export function managedClustersCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  parameters: ManagedCluster,
  options: ManagedClustersCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ManagedCluster>, ManagedCluster> {
  return getLongRunningPoller(context, _managedClustersCreateOrUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _managedClustersCreateOrUpdateSend(
        context,
        resourceGroupName,
        clusterName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<ManagedCluster>, ManagedCluster>;
}

export function _managedClustersGetSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  options: ManagedClustersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
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

export async function _managedClustersGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ManagedCluster> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return managedClusterDeserializer(result.body);
}

/** Get a Service Fabric managed cluster resource created or in the process of being created in the specified resource group. */
export async function managedClustersGet(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  options: ManagedClustersGetOptionalParams = { requestOptions: {} },
): Promise<ManagedCluster> {
  const result = await _managedClustersGetSend(context, resourceGroupName, clusterName, options);
  return _managedClustersGetDeserialize(result);
}
