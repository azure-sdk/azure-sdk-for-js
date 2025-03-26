// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceFabricContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  NodeType,
  nodeTypeSerializer,
  nodeTypeDeserializer,
  NodeTypeUpdateParameters,
  nodeTypeUpdateParametersSerializer,
  _NodeTypeListResult,
  _nodeTypeListResultDeserializer,
  NodeTypeActionParameters,
  nodeTypeActionParametersSerializer,
  faultSimulationContentUnionSerializer,
  FaultSimulationContentUnion,
  FaultSimulation,
  faultSimulationDeserializer,
  FaultSimulationIdContent,
  faultSimulationIdContentSerializer,
  _FaultSimulationListResult,
  _faultSimulationListResultDeserializer,
} from "../../models/models.js";
import {
  NodeTypesListFaultSimulationOptionalParams,
  NodeTypesGetFaultSimulationOptionalParams,
  NodeTypesStopFaultSimulationOptionalParams,
  NodeTypesStartFaultSimulationOptionalParams,
  NodeTypesStartOptionalParams,
  NodeTypesRestartOptionalParams,
  NodeTypesReimageOptionalParams,
  NodeTypesRedeployOptionalParams,
  NodeTypesDeleteNodeOptionalParams,
  NodeTypesDeallocateOptionalParams,
  NodeTypesListByManagedClustersOptionalParams,
  NodeTypesDeleteOptionalParams,
  NodeTypesUpdateOptionalParams,
  NodeTypesCreateOrUpdateOptionalParams,
  NodeTypesGetOptionalParams,
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

export function _nodeTypesListFaultSimulationSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  options: NodeTypesListFaultSimulationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}/listFaultSimulation{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      nodeTypeName: nodeTypeName,
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

export async function _nodeTypesListFaultSimulationDeserialize(
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

/** Gets the list of recent fault simulations for the node type. */
export function nodeTypesListFaultSimulation(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  options: NodeTypesListFaultSimulationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<FaultSimulation> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _nodeTypesListFaultSimulationSend(
        context,
        resourceGroupName,
        clusterName,
        nodeTypeName,
        options,
      ),
    _nodeTypesListFaultSimulationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _nodeTypesGetFaultSimulationSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: FaultSimulationIdContent,
  options: NodeTypesGetFaultSimulationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}/getFaultSimulation{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      nodeTypeName: nodeTypeName,
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

export async function _nodeTypesGetFaultSimulationDeserialize(
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
export async function nodeTypesGetFaultSimulation(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: FaultSimulationIdContent,
  options: NodeTypesGetFaultSimulationOptionalParams = { requestOptions: {} },
): Promise<FaultSimulation> {
  const result = await _nodeTypesGetFaultSimulationSend(
    context,
    resourceGroupName,
    clusterName,
    nodeTypeName,
    parameters,
    options,
  );
  return _nodeTypesGetFaultSimulationDeserialize(result);
}

export function _nodeTypesStopFaultSimulationSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: FaultSimulationIdContent,
  options: NodeTypesStopFaultSimulationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}/stopFaultSimulation{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      nodeTypeName: nodeTypeName,
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

export async function _nodeTypesStopFaultSimulationDeserialize(
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

/** Stops a fault simulation on the node type. */
export function nodeTypesStopFaultSimulation(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: FaultSimulationIdContent,
  options: NodeTypesStopFaultSimulationOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<FaultSimulation>, FaultSimulation> {
  return getLongRunningPoller(context, _nodeTypesStopFaultSimulationDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _nodeTypesStopFaultSimulationSend(
        context,
        resourceGroupName,
        clusterName,
        nodeTypeName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<FaultSimulation>, FaultSimulation>;
}

export function _nodeTypesStartFaultSimulationSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: FaultSimulationContentUnion,
  options: NodeTypesStartFaultSimulationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}/startFaultSimulation{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      nodeTypeName: nodeTypeName,
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

export async function _nodeTypesStartFaultSimulationDeserialize(
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

/** Starts a fault simulation on the node type. */
export function nodeTypesStartFaultSimulation(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: FaultSimulationContentUnion,
  options: NodeTypesStartFaultSimulationOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<FaultSimulation>, FaultSimulation> {
  return getLongRunningPoller(context, _nodeTypesStartFaultSimulationDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _nodeTypesStartFaultSimulationSend(
        context,
        resourceGroupName,
        clusterName,
        nodeTypeName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<FaultSimulation>, FaultSimulation>;
}

export function _nodeTypesStartSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: NodeTypeActionParameters,
  options: NodeTypesStartOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}/start{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      nodeTypeName: nodeTypeName,
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
    body: nodeTypeActionParametersSerializer(parameters),
  });
}

export async function _nodeTypesStartDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Starts one or more nodes on the node type. It will trigger an allocation of the fabric node if needed and activate them. */
export function nodeTypesStart(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: NodeTypeActionParameters,
  options: NodeTypesStartOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _nodeTypesStartDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _nodeTypesStartSend(
        context,
        resourceGroupName,
        clusterName,
        nodeTypeName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _nodeTypesRestartSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: NodeTypeActionParameters,
  options: NodeTypesRestartOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}/restart{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      nodeTypeName: nodeTypeName,
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
    body: nodeTypeActionParametersSerializer(parameters),
  });
}

export async function _nodeTypesRestartDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Restarts one or more nodes on the node type. It will disable the fabric nodes, trigger a restart on the VMs and activate the nodes back again. */
export function nodeTypesRestart(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: NodeTypeActionParameters,
  options: NodeTypesRestartOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _nodeTypesRestartDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _nodeTypesRestartSend(
        context,
        resourceGroupName,
        clusterName,
        nodeTypeName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _nodeTypesReimageSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: NodeTypeActionParameters,
  options: NodeTypesReimageOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}/reimage{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      nodeTypeName: nodeTypeName,
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
    body: nodeTypeActionParametersSerializer(parameters),
  });
}

export async function _nodeTypesReimageDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Reimages one or more nodes on the node type. It will disable the fabric nodes, trigger a reimage on the VMs and activate the nodes back again. */
export function nodeTypesReimage(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: NodeTypeActionParameters,
  options: NodeTypesReimageOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _nodeTypesReimageDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _nodeTypesReimageSend(
        context,
        resourceGroupName,
        clusterName,
        nodeTypeName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _nodeTypesRedeploySend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: NodeTypeActionParameters,
  options: NodeTypesRedeployOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}/redeploy{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      nodeTypeName: nodeTypeName,
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
    body: nodeTypeActionParametersSerializer(parameters),
  });
}

export async function _nodeTypesRedeployDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Redeploys one or more nodes on the node type. It will disable the fabric nodes, trigger a shut down on the VMs, move them to a new node, and power them back on. */
export function nodeTypesRedeploy(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: NodeTypeActionParameters,
  options: NodeTypesRedeployOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _nodeTypesRedeployDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _nodeTypesRedeploySend(
        context,
        resourceGroupName,
        clusterName,
        nodeTypeName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _nodeTypesDeleteNodeSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: NodeTypeActionParameters,
  options: NodeTypesDeleteNodeOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}/deleteNode{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      nodeTypeName: nodeTypeName,
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
    body: nodeTypeActionParametersSerializer(parameters),
  });
}

export async function _nodeTypesDeleteNodeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes one or more nodes on the node type. It will disable the fabric nodes, trigger a delete on the VMs and removes the state from the cluster. */
export function nodeTypesDeleteNode(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: NodeTypeActionParameters,
  options: NodeTypesDeleteNodeOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _nodeTypesDeleteNodeDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _nodeTypesDeleteNodeSend(
        context,
        resourceGroupName,
        clusterName,
        nodeTypeName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _nodeTypesDeallocateSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: NodeTypeActionParameters,
  options: NodeTypesDeallocateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}/deallocate{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      nodeTypeName: nodeTypeName,
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
    body: nodeTypeActionParametersSerializer(parameters),
  });
}

export async function _nodeTypesDeallocateDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deallocates one or more nodes on the node type. It will disable the fabric nodes, trigger a shutdown on the VMs and release them from the cluster. */
export function nodeTypesDeallocate(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: NodeTypeActionParameters,
  options: NodeTypesDeallocateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _nodeTypesDeallocateDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _nodeTypesDeallocateSend(
        context,
        resourceGroupName,
        clusterName,
        nodeTypeName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _nodeTypesListByManagedClustersSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  options: NodeTypesListByManagedClustersOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes{?api-version}",
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

export async function _nodeTypesListByManagedClustersDeserialize(
  result: PathUncheckedResponse,
): Promise<_NodeTypeListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _nodeTypeListResultDeserializer(result.body);
}

/** Gets all Node types of the specified managed cluster. */
export function nodeTypesListByManagedClusters(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  options: NodeTypesListByManagedClustersOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<NodeType> {
  return buildPagedAsyncIterator(
    context,
    () => _nodeTypesListByManagedClustersSend(context, resourceGroupName, clusterName, options),
    _nodeTypesListByManagedClustersDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _nodeTypesDeleteSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  options: NodeTypesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      nodeTypeName: nodeTypeName,
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

export async function _nodeTypesDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a Service Fabric node type of a given managed cluster. */
export function nodeTypesDelete(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  options: NodeTypesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _nodeTypesDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _nodeTypesDeleteSend(context, resourceGroupName, clusterName, nodeTypeName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _nodeTypesUpdateSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: NodeTypeUpdateParameters,
  options: NodeTypesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      nodeTypeName: nodeTypeName,
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
    body: nodeTypeUpdateParametersSerializer(parameters),
  });
}

export async function _nodeTypesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<NodeType> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return nodeTypeDeserializer(result.body);
}

/** Update the configuration of a node type of a given managed cluster, only updating tags. */
export function nodeTypesUpdate(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: NodeTypeUpdateParameters,
  options: NodeTypesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<NodeType>, NodeType> {
  return getLongRunningPoller(context, _nodeTypesUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _nodeTypesUpdateSend(
        context,
        resourceGroupName,
        clusterName,
        nodeTypeName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<NodeType>, NodeType>;
}

export function _nodeTypesCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: NodeType,
  options: NodeTypesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      nodeTypeName: nodeTypeName,
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
    body: nodeTypeSerializer(parameters),
  });
}

export async function _nodeTypesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<NodeType> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return nodeTypeDeserializer(result.body);
}

/** Create or update a Service Fabric node type of a given managed cluster. */
export function nodeTypesCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  parameters: NodeType,
  options: NodeTypesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<NodeType>, NodeType> {
  return getLongRunningPoller(context, _nodeTypesCreateOrUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _nodeTypesCreateOrUpdateSend(
        context,
        resourceGroupName,
        clusterName,
        nodeTypeName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<NodeType>, NodeType>;
}

export function _nodeTypesGetSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  options: NodeTypesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      nodeTypeName: nodeTypeName,
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

export async function _nodeTypesGetDeserialize(result: PathUncheckedResponse): Promise<NodeType> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return nodeTypeDeserializer(result.body);
}

/** Get a Service Fabric node type of a given managed cluster. */
export async function nodeTypesGet(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  nodeTypeName: string,
  options: NodeTypesGetOptionalParams = { requestOptions: {} },
): Promise<NodeType> {
  const result = await _nodeTypesGetSend(
    context,
    resourceGroupName,
    clusterName,
    nodeTypeName,
    options,
  );
  return _nodeTypesGetDeserialize(result);
}
