// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ClientContext } from "../../api/azureAIContext.js";
import {
  ConnectionsListResponse,
  ConnectionsListSecretsResponse,
} from "../../models/models.js";
import { list, listSecrets } from "../../api/endpoints/index.js";
import {
  EndpointsListOptionalParams,
  EndpointsListSecretsOptionalParams,
} from "../../models/options.js";

/** Interface representing a Endpoints operations. */
export interface EndpointsOperations {
  /** List the details of all the connections (not including their credentials) */
  list: (
    options?: EndpointsListOptionalParams,
  ) => Promise<ConnectionsListResponse>;
  /** Get the details of a single connection, including credential (if available). */
  listSecrets: (
    connectionNameInUrl: string,
    connectionName: string,
    subscriptionId: string,
    resourceGroupName: string,
    workspaceName: string,
    apiVersionInBody: string,
    options?: EndpointsListSecretsOptionalParams,
  ) => Promise<ConnectionsListSecretsResponse>;
}

export function getEndpoints(context: ClientContext) {
  return {
    list: (options?: EndpointsListOptionalParams) => list(context, options),
    listSecrets: (
      connectionNameInUrl: string,
      connectionName: string,
      subscriptionId: string,
      resourceGroupName: string,
      workspaceName: string,
      apiVersionInBody: string,
      options?: EndpointsListSecretsOptionalParams,
    ) =>
      listSecrets(
        context,
        connectionNameInUrl,
        connectionName,
        subscriptionId,
        resourceGroupName,
        workspaceName,
        apiVersionInBody,
        options,
      ),
  };
}

export function getEndpointsOperations(
  context: ClientContext,
): EndpointsOperations {
  return {
    ...getEndpoints(context),
  };
}
