// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ConnectionType,
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
  ConnectionsListSecretsOptionalParams,
} from "../../models/options.js";

export function _listSend(
  context: Client,
  category: ConnectionType,
  includeAll: boolean,
  target: string,
  options: ConnectionsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/connections")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        category: category,
        includeAll: includeAll,
        target: target,
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
  category: ConnectionType,
  includeAll: boolean,
  target: string,
  options: ConnectionsListOptionalParams = { requestOptions: {} },
): Promise<ConnectionsListResponse> {
  const result = await _listSend(
    context,
    category,
    includeAll,
    target,
    options,
  );
  return _listDeserialize(result);
}

export function _listSecretsSend(
  context: Client,
  connectionNameInUrl: string,
  ignored: string,
  options: ConnectionsListSecretsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/connections/{connectionNameInUrl}/listsecrets", connectionNameInUrl)
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

/** Get the details of a single connection, including credential (if available). */
export async function listSecrets(
  context: Client,
  connectionNameInUrl: string,
  ignored: string,
  options: ConnectionsListSecretsOptionalParams = { requestOptions: {} },
): Promise<ConnectionsListSecretsResponse> {
  const result = await _listSecretsSend(
    context,
    connectionNameInUrl,
    ignored,
    options,
  );
  return _listSecretsDeserialize(result);
}
