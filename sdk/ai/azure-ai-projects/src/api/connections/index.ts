// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  GetWorkspaceResponse,
  ListConnectionsResponse,
  GetConnectionResponse,
} from "../../models/models.js";
import { deserializeConnectionPropertiesUnion } from "../../utils/deserializeUtil.js";
import { ProjectsContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  ConnectionsGetWorkspaceOptionalParams,
  ConnectionsListConnectionsOptionalParams,
  ConnectionsGetConnectionOptionalParams,
  ConnectionsGetConnectionWithSecretsOptionalParams,
} from "../../models/options.js";

export function _getWorkspaceSend(
  context: Client,
  options: ConnectionsGetWorkspaceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getWorkspaceDeserialize(
  result: PathUncheckedResponse,
): Promise<GetWorkspaceResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    properties: {
      applicationInsights: result.body.properties["applicationInsights"],
    },
  };
}

/** Gets the properties of the specified machine learning workspace. */
export async function getWorkspace(
  context: Client,
  options: ConnectionsGetWorkspaceOptionalParams = { requestOptions: {} },
): Promise<GetWorkspaceResponse> {
  const result = await _getWorkspaceSend(context, options);
  return _getWorkspaceDeserialize(result);
}

export function _listConnectionsSend(
  context: Client,
  options: ConnectionsListConnectionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/connections")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        category: options?.category,
        includeAll: options?.includeAll,
        target: options?.target,
      },
    });
}

export async function _listConnectionsDeserialize(
  result: PathUncheckedResponse,
): Promise<ListConnectionsResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        name: p["name"],
        properties: deserializeConnectionPropertiesUnion(p.properties),
      };
    }),
  };
}

/** List the details of all the connections (not including their credentials) */
export async function listConnections(
  context: Client,
  options: ConnectionsListConnectionsOptionalParams = { requestOptions: {} },
): Promise<ListConnectionsResponse> {
  const result = await _listConnectionsSend(context, options);
  return _listConnectionsDeserialize(result);
}

export function _getConnectionSend(
  context: Client,
  connectionName: string,
  options: ConnectionsGetConnectionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/connections/{connectionName}", connectionName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getConnectionDeserialize(
  result: PathUncheckedResponse,
): Promise<GetConnectionResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    properties: deserializeConnectionPropertiesUnion(result.body.properties),
  };
}

/** Get the details of a single connection, without credentials. */
export async function getConnection(
  context: Client,
  connectionName: string,
  options: ConnectionsGetConnectionOptionalParams = { requestOptions: {} },
): Promise<GetConnectionResponse> {
  const result = await _getConnectionSend(context, connectionName, options);
  return _getConnectionDeserialize(result);
}

export function _getConnectionWithSecretsSend(
  context: Client,
  connectionName: string,
  ignored: string,
  options: ConnectionsGetConnectionWithSecretsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/connections/{connectionName}/listsecrets", connectionName)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { ignored: ignored },
    });
}

export async function _getConnectionWithSecretsDeserialize(
  result: PathUncheckedResponse,
): Promise<GetConnectionResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    properties: deserializeConnectionPropertiesUnion(result.body.properties),
  };
}

/** Get the details of a single connection, including credentials (if available). */
export async function getConnectionWithSecrets(
  context: Client,
  connectionName: string,
  ignored: string,
  options: ConnectionsGetConnectionWithSecretsOptionalParams = {
    requestOptions: {},
  },
): Promise<GetConnectionResponse> {
  const result = await _getConnectionWithSecretsSend(
    context,
    connectionName,
    ignored,
    options,
  );
  return _getConnectionWithSecretsDeserialize(result);
}
