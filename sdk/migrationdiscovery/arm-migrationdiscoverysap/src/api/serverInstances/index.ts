// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  WorkloadsContext as Client,
  ServerInstancesCreateOptionalParams,
  ServerInstancesDeleteOptionalParams,
  ServerInstancesGetOptionalParams,
  ServerInstancesListBySapInstanceOptionalParams,
  ServerInstancesUpdateOptionalParams,
} from "../index.js";
import {
  ServerInstance,
  serverInstanceSerializer,
  serverInstanceDeserializer,
  errorResponseDeserializer,
  UpdateServerInstanceRequest,
  updateServerInstanceRequestSerializer,
  _ServerInstanceListResult,
  _serverInstanceListResultDeserializer,
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

export function _serverInstancesListBySapInstanceSend(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  options: ServerInstancesListBySapInstanceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances/{sapInstanceName}/serverInstances{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapDiscoverySiteName: sapDiscoverySiteName,
      sapInstanceName: sapInstanceName,
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

export async function _serverInstancesListBySapInstanceDeserialize(
  result: PathUncheckedResponse,
): Promise<_ServerInstanceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _serverInstanceListResultDeserializer(result.body);
}

/** Lists the Server Instance resources for the given SAP Instance resource. */
export function serverInstancesListBySapInstance(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  options: ServerInstancesListBySapInstanceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ServerInstance> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _serverInstancesListBySapInstanceSend(
        context,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        options,
      ),
    _serverInstancesListBySapInstanceDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _serverInstancesDeleteSend(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  serverInstanceName: string,
  options: ServerInstancesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances/{sapInstanceName}/serverInstances/{serverInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapDiscoverySiteName: sapDiscoverySiteName,
      sapInstanceName: sapInstanceName,
      serverInstanceName: serverInstanceName,
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

export async function _serverInstancesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes the Server Instance resource. <br><br>;This will be used by service only. Delete operation on this resource by end user will return a Bad Request error. You can delete the parent resource, which is the SAP Migration discovery site resource, using the delete operation on it. */
export function serverInstancesDelete(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  serverInstanceName: string,
  options: ServerInstancesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _serverInstancesDeleteDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _serverInstancesDeleteSend(
        context,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        serverInstanceName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _serverInstancesUpdateSend(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  serverInstanceName: string,
  properties: UpdateServerInstanceRequest,
  options: ServerInstancesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances/{sapInstanceName}/serverInstances/{serverInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapDiscoverySiteName: sapDiscoverySiteName,
      sapInstanceName: sapInstanceName,
      serverInstanceName: serverInstanceName,
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
    body: updateServerInstanceRequestSerializer(properties),
  });
}

export async function _serverInstancesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ServerInstance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return serverInstanceDeserializer(result.body);
}

/** Updates the Server Instance resource. This operation on a resource by end user will return a Bad Request error. */
export async function serverInstancesUpdate(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  serverInstanceName: string,
  properties: UpdateServerInstanceRequest,
  options: ServerInstancesUpdateOptionalParams = { requestOptions: {} },
): Promise<ServerInstance> {
  const result = await _serverInstancesUpdateSend(
    context,
    resourceGroupName,
    sapDiscoverySiteName,
    sapInstanceName,
    serverInstanceName,
    properties,
    options,
  );
  return _serverInstancesUpdateDeserialize(result);
}

export function _serverInstancesCreateSend(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  serverInstanceName: string,
  resource: ServerInstance,
  options: ServerInstancesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances/{sapInstanceName}/serverInstances/{serverInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapDiscoverySiteName: sapDiscoverySiteName,
      sapInstanceName: sapInstanceName,
      serverInstanceName: serverInstanceName,
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
    body: serverInstanceSerializer(resource),
  });
}

export async function _serverInstancesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<ServerInstance> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return serverInstanceDeserializer(result.body);
}

/** Creates the Server Instance resource. <br><br>;This will be used by service only. PUT operation on this resource by end user will return a Bad Request error. */
export function serverInstancesCreate(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  serverInstanceName: string,
  resource: ServerInstance,
  options: ServerInstancesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ServerInstance>, ServerInstance> {
  return getLongRunningPoller(context, _serverInstancesCreateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _serverInstancesCreateSend(
        context,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        serverInstanceName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<ServerInstance>, ServerInstance>;
}

export function _serverInstancesGetSend(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  serverInstanceName: string,
  options: ServerInstancesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances/{sapInstanceName}/serverInstances/{serverInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapDiscoverySiteName: sapDiscoverySiteName,
      sapInstanceName: sapInstanceName,
      serverInstanceName: serverInstanceName,
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

export async function _serverInstancesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ServerInstance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return serverInstanceDeserializer(result.body);
}

/** Gets the Server Instance resource. */
export async function serverInstancesGet(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  serverInstanceName: string,
  options: ServerInstancesGetOptionalParams = { requestOptions: {} },
): Promise<ServerInstance> {
  const result = await _serverInstancesGetSend(
    context,
    resourceGroupName,
    sapDiscoverySiteName,
    sapInstanceName,
    serverInstanceName,
    options,
  );
  return _serverInstancesGetDeserialize(result);
}
