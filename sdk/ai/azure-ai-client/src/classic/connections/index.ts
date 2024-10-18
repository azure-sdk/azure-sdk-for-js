// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ClientContext } from "../../api/azureAIContext.js";
import {
  ConnectionType,
  ConnectionsListResponse,
  ConnectionsListSecretsResponse,
} from "../../models/models.js";
import { list, listSecrets } from "../../api/connections/index.js";
import {
  ConnectionsListOptionalParams,
  ConnectionsListSecretsOptionalParams,
} from "../../models/options.js";

/** Interface representing a Connections operations. */
export interface ConnectionsOperations {
  /** List the details of all the connections (not including their credentials) */
  list: (
    category: ConnectionType,
    includeAll: boolean,
    target: string,
    options?: ConnectionsListOptionalParams,
  ) => Promise<ConnectionsListResponse>;
  /** Get the details of a single connection, including credential (if available). */
  listSecrets: (
    connectionNameInUrl: string,
    ignored: string,
    options?: ConnectionsListSecretsOptionalParams,
  ) => Promise<ConnectionsListSecretsResponse>;
}

export function getConnections(context: ClientContext) {
  return {
    list: (
      category: ConnectionType,
      includeAll: boolean,
      target: string,
      options?: ConnectionsListOptionalParams,
    ) => list(context, category, includeAll, target, options),
    listSecrets: (
      connectionNameInUrl: string,
      ignored: string,
      options?: ConnectionsListSecretsOptionalParams,
    ) => listSecrets(context, connectionNameInUrl, ignored, options),
  };
}

export function getConnectionsOperations(
  context: ClientContext,
): ConnectionsOperations {
  return {
    ...getConnections(context),
  };
}
