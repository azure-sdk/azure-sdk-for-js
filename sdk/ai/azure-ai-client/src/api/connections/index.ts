// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ConnectionsListResponse,
  ConnectionsListSecretsResponse,
} from "../../models/models.js";
import { deserializeConnectionPropertiesUnion } from "../../utils/deserializeUtil.js";
import { ClientContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  ConnectionsListOptionalParams,
  ConnectionsGetOptionalParams,
  ConnectionsListSecretsOptionalParams,
} from "../../models/options.js";

export function _listSend(
  context: Client,
  options: ConnectionsListOptionalParams = { requestOptions: {} },
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

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<ConnectionsListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        name: p["name"],
        properties: deserializeConnectionPropertiesUnion(p.properties),
      };
    }),
  };
}

/** List the details of all the connections (not including their credentials) */
export async function list(
  context: Client,
  options: ConnectionsListOptionalParams = { requestOptions: {} },
): Promise<ConnectionsListResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _getSend(
  context: Client,
  connectionName: string,
  options: ConnectionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/connections/{connectionName}", connectionName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<ConnectionsListSecretsResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
    properties: deserializeConnectionPropertiesUnion(result.body.properties),
  };
}

/** Get the details of a single connection, without credentials. */
export async function get(
  context: Client,
  connectionName: string,
  options: ConnectionsGetOptionalParams = { requestOptions: {} },
): Promise<ConnectionsListSecretsResponse> {
  const result = await _getSend(context, connectionName, options);
  return _getDeserialize(result);
}

export function _listSecretsSend(
  context: Client,
  connectionName: string,
  ignored: string,
  options: ConnectionsListSecretsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/connections/{connectionName}/listsecrets", connectionName)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { ignored: ignored },
    });
}

export async function _listSecretsDeserialize(
  result: PathUncheckedResponse,
): Promise<ConnectionsListSecretsResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
    properties: deserializeConnectionPropertiesUnion(result.body.properties),
  };
}

/** Get the details of a single connection, including credentials (if available). */
export async function listSecrets(
  context: Client,
  connectionName: string,
  ignored: string,
  options: ConnectionsListSecretsOptionalParams = { requestOptions: {} },
): Promise<ConnectionsListSecretsResponse> {
  const result = await _listSecretsSend(
    context,
    connectionName,
    ignored,
    options,
  );
  return _listSecretsDeserialize(result);
}
