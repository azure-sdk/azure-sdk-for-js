// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getEndpointsOperations,
  EndpointsOperations,
} from "./classic/endpoints/index.js";
import {
  getServiceConfigurationsOperations,
  ServiceConfigurationsOperations,
} from "./classic/serviceConfigurations/index.js";
import {
  createHybridConnectivityManagementAPI,
  HybridConnectivityManagementAPIContext,
  HybridConnectivityManagementAPIClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { HybridConnectivityManagementAPIClientOptionalParams } from "./api/hybridConnectivityManagementAPIContext.js";

export class HybridConnectivityManagementAPIClient {
  private _client: HybridConnectivityManagementAPIContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    options: HybridConnectivityManagementAPIClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createHybridConnectivityManagementAPI(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.operations = getOperationsOperations(this._client);
    this.endpoints = getEndpointsOperations(this._client);
    this.serviceConfigurations = getServiceConfigurationsOperations(
      this._client,
    );
  }

  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for Endpoints */
  public readonly endpoints: EndpointsOperations;
  /** The operation groups for ServiceConfigurations */
  public readonly serviceConfigurations: ServiceConfigurationsOperations;
}
