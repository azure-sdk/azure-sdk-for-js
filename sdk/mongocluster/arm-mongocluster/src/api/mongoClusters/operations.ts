// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MongoClusterManagementContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  MongoCluster,
  mongoClusterSerializer,
  mongoClusterDeserializer,
  MongoClusterUpdate,
  mongoClusterUpdateSerializer,
  _MongoClusterListResult,
  _mongoClusterListResultDeserializer,
  ListConnectionStringsResult,
  listConnectionStringsResultDeserializer,
  CheckNameAvailabilityRequest,
  checkNameAvailabilityRequestSerializer,
  CheckNameAvailabilityResponse,
  checkNameAvailabilityResponseDeserializer,
  PromoteReplicaRequest,
  promoteReplicaRequestSerializer,
} from "../../models/models.js";
import {
  MongoClustersPromoteOptionalParams,
  MongoClustersCheckNameAvailabilityOptionalParams,
  MongoClustersListConnectionStringsOptionalParams,
  MongoClustersListOptionalParams,
  MongoClustersListByResourceGroupOptionalParams,
  MongoClustersDeleteOptionalParams,
  MongoClustersUpdateOptionalParams,
  MongoClustersCreateOrUpdateOptionalParams,
  MongoClustersGetOptionalParams,
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

export function _mongoClustersPromoteSend(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  body: PromoteReplicaRequest,
  options: MongoClustersPromoteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/promote{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mongoClusterName: mongoClusterName,
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
    body: promoteReplicaRequestSerializer(body),
  });
}

export async function _mongoClustersPromoteDeserialize(
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

/** Promotes a replica mongo cluster to a primary role. */
export function mongoClustersPromote(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  body: PromoteReplicaRequest,
  options: MongoClustersPromoteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _mongoClustersPromoteDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _mongoClustersPromoteSend(context, resourceGroupName, mongoClusterName, body, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _mongoClustersCheckNameAvailabilitySend(
  context: Client,
  location: string,
  body: CheckNameAvailabilityRequest,
  options: MongoClustersCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/checkMongoClusterNameAvailability{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
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
    body: checkNameAvailabilityRequestSerializer(body),
  });
}

export async function _mongoClustersCheckNameAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckNameAvailabilityResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return checkNameAvailabilityResponseDeserializer(result.body);
}

/** Check if mongo cluster name is available for use. */
export async function mongoClustersCheckNameAvailability(
  context: Client,
  location: string,
  body: CheckNameAvailabilityRequest,
  options: MongoClustersCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): Promise<CheckNameAvailabilityResponse> {
  const result = await _mongoClustersCheckNameAvailabilitySend(context, location, body, options);
  return _mongoClustersCheckNameAvailabilityDeserialize(result);
}

export function _mongoClustersListConnectionStringsSend(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  options: MongoClustersListConnectionStringsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/listConnectionStrings{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mongoClusterName: mongoClusterName,
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

export async function _mongoClustersListConnectionStringsDeserialize(
  result: PathUncheckedResponse,
): Promise<ListConnectionStringsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return listConnectionStringsResultDeserializer(result.body);
}

/** List mongo cluster connection strings. This includes the default connection string using SCRAM-SHA-256, as well as other connection strings supported by the cluster. */
export async function mongoClustersListConnectionStrings(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  options: MongoClustersListConnectionStringsOptionalParams = {
    requestOptions: {},
  },
): Promise<ListConnectionStringsResult> {
  const result = await _mongoClustersListConnectionStringsSend(
    context,
    resourceGroupName,
    mongoClusterName,
    options,
  );
  return _mongoClustersListConnectionStringsDeserialize(result);
}

export function _mongoClustersListSend(
  context: Client,
  options: MongoClustersListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/mongoClusters{?api-version}",
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

export async function _mongoClustersListDeserialize(
  result: PathUncheckedResponse,
): Promise<_MongoClusterListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _mongoClusterListResultDeserializer(result.body);
}

/** List all the mongo clusters in a given subscription. */
export function mongoClustersList(
  context: Client,
  options: MongoClustersListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<MongoCluster> {
  return buildPagedAsyncIterator(
    context,
    () => _mongoClustersListSend(context, options),
    _mongoClustersListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _mongoClustersListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: MongoClustersListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters{?api-version}",
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

export async function _mongoClustersListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_MongoClusterListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _mongoClusterListResultDeserializer(result.body);
}

/** List all the mongo clusters in a given resource group. */
export function mongoClustersListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: MongoClustersListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<MongoCluster> {
  return buildPagedAsyncIterator(
    context,
    () => _mongoClustersListByResourceGroupSend(context, resourceGroupName, options),
    _mongoClustersListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _mongoClustersDeleteSend(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  options: MongoClustersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mongoClusterName: mongoClusterName,
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

export async function _mongoClustersDeleteDeserialize(
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

/** Deletes a mongo cluster. */
export function mongoClustersDelete(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  options: MongoClustersDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _mongoClustersDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _mongoClustersDeleteSend(context, resourceGroupName, mongoClusterName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _mongoClustersUpdateSend(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  properties: MongoClusterUpdate,
  options: MongoClustersUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mongoClusterName: mongoClusterName,
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
    body: mongoClusterUpdateSerializer(properties),
  });
}

export async function _mongoClustersUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<MongoCluster> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return mongoClusterDeserializer(result.body);
}

/** Updates an existing mongo cluster. The request body can contain one to many of the properties present in the normal mongo cluster definition. */
export function mongoClustersUpdate(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  properties: MongoClusterUpdate,
  options: MongoClustersUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<MongoCluster>, MongoCluster> {
  return getLongRunningPoller(context, _mongoClustersUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _mongoClustersUpdateSend(context, resourceGroupName, mongoClusterName, properties, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<MongoCluster>, MongoCluster>;
}

export function _mongoClustersCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  resource: MongoCluster,
  options: MongoClustersCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mongoClusterName: mongoClusterName,
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
    body: mongoClusterSerializer(resource),
  });
}

export async function _mongoClustersCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<MongoCluster> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return mongoClusterDeserializer(result.body);
}

/** Create or update a mongo cluster. Update overwrites all properties for the resource. To only modify some of the properties, use PATCH. */
export function mongoClustersCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  resource: MongoCluster,
  options: MongoClustersCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<MongoCluster>, MongoCluster> {
  return getLongRunningPoller(context, _mongoClustersCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _mongoClustersCreateOrUpdateSend(
        context,
        resourceGroupName,
        mongoClusterName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<MongoCluster>, MongoCluster>;
}

export function _mongoClustersGetSend(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  options: MongoClustersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mongoClusterName: mongoClusterName,
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

export async function _mongoClustersGetDeserialize(
  result: PathUncheckedResponse,
): Promise<MongoCluster> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return mongoClusterDeserializer(result.body);
}

/** Gets information about a mongo cluster. */
export async function mongoClustersGet(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  options: MongoClustersGetOptionalParams = { requestOptions: {} },
): Promise<MongoCluster> {
  const result = await _mongoClustersGetSend(context, resourceGroupName, mongoClusterName, options);
  return _mongoClustersGetDeserialize(result);
}
