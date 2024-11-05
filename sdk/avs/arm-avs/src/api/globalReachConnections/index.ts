// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  globalReachConnectionPropertiesSerializer,
  GlobalReachConnection,
  _GlobalReachConnectionList,
} from "../../models/models.js";
import { AVSContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  GlobalReachConnectionsListOptionalParams,
  GlobalReachConnectionsGetOptionalParams,
  GlobalReachConnectionsCreateOrUpdateOptionalParams,
  GlobalReachConnectionsDeleteOptionalParams,
} from "../../models/options.js";

export function _globalReachConnectionsListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: GlobalReachConnectionsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _globalReachConnectionsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_GlobalReachConnectionList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              provisioningState: p.properties?.["provisioningState"],
              addressPrefix: p.properties?.["addressPrefix"],
              authorizationKey: p.properties?.["authorizationKey"],
              circuitConnectionStatus:
                p.properties?.["circuitConnectionStatus"],
              peerExpressRouteCircuit:
                p.properties?.["peerExpressRouteCircuit"],
              expressRouteId: p.properties?.["expressRouteId"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List GlobalReachConnection resources by PrivateCloud */
export function globalReachConnectionsList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: GlobalReachConnectionsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<GlobalReachConnection> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _globalReachConnectionsListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _globalReachConnectionsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _globalReachConnectionsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  options: GlobalReachConnectionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      globalReachConnectionName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _globalReachConnectionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<GlobalReachConnection> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.["provisioningState"],
          addressPrefix: result.body.properties?.["addressPrefix"],
          authorizationKey: result.body.properties?.["authorizationKey"],
          circuitConnectionStatus:
            result.body.properties?.["circuitConnectionStatus"],
          peerExpressRouteCircuit:
            result.body.properties?.["peerExpressRouteCircuit"],
          expressRouteId: result.body.properties?.["expressRouteId"],
        },
  };
}

/** Get a GlobalReachConnection */
export async function globalReachConnectionsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  options: GlobalReachConnectionsGetOptionalParams = { requestOptions: {} },
): Promise<GlobalReachConnection> {
  const result = await _globalReachConnectionsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    globalReachConnectionName,
    options,
  );
  return _globalReachConnectionsGetDeserialize(result);
}

export function _globalReachConnectionsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  globalReachConnection: GlobalReachConnection,
  options: GlobalReachConnectionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      globalReachConnectionName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !globalReachConnection.properties
          ? globalReachConnection.properties
          : globalReachConnectionPropertiesSerializer(
              globalReachConnection.properties,
            ),
      },
    });
}

export async function _globalReachConnectionsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<GlobalReachConnection> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.["provisioningState"],
          addressPrefix: result.body.properties?.["addressPrefix"],
          authorizationKey: result.body.properties?.["authorizationKey"],
          circuitConnectionStatus:
            result.body.properties?.["circuitConnectionStatus"],
          peerExpressRouteCircuit:
            result.body.properties?.["peerExpressRouteCircuit"],
          expressRouteId: result.body.properties?.["expressRouteId"],
        },
  };
}

/** Create a GlobalReachConnection */
export function globalReachConnectionsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  globalReachConnection: GlobalReachConnection,
  options: GlobalReachConnectionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<GlobalReachConnection>, GlobalReachConnection> {
  return getLongRunningPoller(
    context,
    _globalReachConnectionsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _globalReachConnectionsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          globalReachConnectionName,
          globalReachConnection,
          options,
        ),
    },
  ) as PollerLike<OperationState<GlobalReachConnection>, GlobalReachConnection>;
}

export function _globalReachConnectionsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  options: GlobalReachConnectionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      globalReachConnectionName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _globalReachConnectionsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a GlobalReachConnection */
export function globalReachConnectionsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  globalReachConnectionName: string,
  options: GlobalReachConnectionsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _globalReachConnectionsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _globalReachConnectionsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          globalReachConnectionName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}
