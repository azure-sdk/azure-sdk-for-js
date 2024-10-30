// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProjectsContext } from "../../api/aIProjectContext.js";
import {
  GetWorkspaceResponse,
  ListConnectionsResponse,
  GetConnectionResponse,
} from "../../models/models.js";
import {
  getWorkspace,
  listConnections,
  getConnection,
  getConnectionWithSecrets,
} from "../../api/connections/index.js";
import {
  ConnectionsGetWorkspaceOptionalParams,
  ConnectionsListConnectionsOptionalParams,
  ConnectionsGetConnectionOptionalParams,
  ConnectionsGetConnectionWithSecretsOptionalParams,
} from "../../models/options.js";

/** Interface representing a Connections operations. */
export interface ConnectionsOperations {
  /** Gets the properties of the specified machine learning workspace. */
  getWorkspace: (
    options?: ConnectionsGetWorkspaceOptionalParams,
  ) => Promise<GetWorkspaceResponse>;
  /** List the details of all the connections (not including their credentials) */
  listConnections: (
    options?: ConnectionsListConnectionsOptionalParams,
  ) => Promise<ListConnectionsResponse>;
  /** Get the details of a single connection, without credentials. */
  getConnection: (
    connectionName: string,
    options?: ConnectionsGetConnectionOptionalParams,
  ) => Promise<GetConnectionResponse>;
  /** Get the details of a single connection, including credentials (if available). */
  getConnectionWithSecrets: (
    connectionName: string,
    ignored: string,
    options?: ConnectionsGetConnectionWithSecretsOptionalParams,
  ) => Promise<GetConnectionResponse>;
}

export function getConnections(context: ProjectsContext) {
  return {
    getWorkspace: (options?: ConnectionsGetWorkspaceOptionalParams) =>
      getWorkspace(context, options),
    listConnections: (options?: ConnectionsListConnectionsOptionalParams) =>
      listConnections(context, options),
    getConnection: (
      connectionName: string,
      options?: ConnectionsGetConnectionOptionalParams,
    ) => getConnection(context, connectionName, options),
    getConnectionWithSecrets: (
      connectionName: string,
      ignored: string,
      options?: ConnectionsGetConnectionWithSecretsOptionalParams,
    ) => getConnectionWithSecrets(context, connectionName, ignored, options),
  };
}

export function getConnectionsOperations(
  context: ProjectsContext,
): ConnectionsOperations {
  return {
    ...getConnections(context),
  };
}
