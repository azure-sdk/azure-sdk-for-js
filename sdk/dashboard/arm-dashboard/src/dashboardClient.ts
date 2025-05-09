// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createDashboard, DashboardContext, DashboardClientOptionalParams } from "./api/index.js";
import {
  IntegrationFabricsOperations,
  _getIntegrationFabricsOperations,
} from "./classic/integrationFabrics/index.js";
import {
  ManagedPrivateEndpointModelsOperations,
  _getManagedPrivateEndpointModelsOperations,
} from "./classic/managedPrivateEndpointModels/index.js";
import {
  PrivateLinkResourcesOperations,
  _getPrivateLinkResourcesOperations,
} from "./classic/privateLinkResources/index.js";
import {
  PrivateEndpointConnectionsOperations,
  _getPrivateEndpointConnectionsOperations,
} from "./classic/privateEndpointConnections/index.js";
import {
  ManagedGrafanasOperations,
  _getManagedGrafanasOperations,
} from "./classic/managedGrafanas/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { DashboardClientOptionalParams } from "./api/dashboardContext.js";

export class DashboardClient {
  private _client: DashboardContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** The Microsoft.Dashboard Rest API spec. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: DashboardClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createDashboard(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.integrationFabrics = _getIntegrationFabricsOperations(this._client);
    this.managedPrivateEndpointModels = _getManagedPrivateEndpointModelsOperations(this._client);
    this.privateLinkResources = _getPrivateLinkResourcesOperations(this._client);
    this.privateEndpointConnections = _getPrivateEndpointConnectionsOperations(this._client);
    this.managedGrafanas = _getManagedGrafanasOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for integrationFabrics */
  public readonly integrationFabrics: IntegrationFabricsOperations;
  /** The operation groups for managedPrivateEndpointModels */
  public readonly managedPrivateEndpointModels: ManagedPrivateEndpointModelsOperations;
  /** The operation groups for privateLinkResources */
  public readonly privateLinkResources: PrivateLinkResourcesOperations;
  /** The operation groups for privateEndpointConnections */
  public readonly privateEndpointConnections: PrivateEndpointConnectionsOperations;
  /** The operation groups for managedGrafanas */
  public readonly managedGrafanas: ManagedGrafanasOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
