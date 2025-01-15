// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { getOperationsOperations, OperationsOperations } from "./classic/operations/index.js";
import { getEndpointsOperations, EndpointsOperations } from "./classic/endpoints/index.js";
import {
  getServiceConfigurationsOperations,
  ServiceConfigurationsOperations,
} from "./classic/serviceConfigurations/index.js";
import {
  getGenerateAwsTemplateOperations,
  GenerateAwsTemplateOperations,
} from "./classic/generateAwsTemplate/index.js";
import {
  getPublicCloudConnectorsOperations,
  PublicCloudConnectorsOperations,
} from "./classic/publicCloudConnectors/index.js";
import {
  getSolutionConfigurationsOperations,
  SolutionConfigurationsOperations,
} from "./classic/solutionConfigurations/index.js";
import { getInventoryOperations, InventoryOperations } from "./classic/inventory/index.js";
import {
  getSolutionTypesOperations,
  SolutionTypesOperations,
} from "./classic/solutionTypes/index.js";
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

  /** REST API for public clouds. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
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
    this.serviceConfigurations = getServiceConfigurationsOperations(this._client);
    this.generateAwsTemplate = getGenerateAwsTemplateOperations(this._client, subscriptionId);
    this.publicCloudConnectors = getPublicCloudConnectorsOperations(this._client, subscriptionId);
    this.solutionConfigurations = getSolutionConfigurationsOperations(this._client);
    this.inventory = getInventoryOperations(this._client);
    this.solutionTypes = getSolutionTypesOperations(this._client, subscriptionId);
  }

  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for Endpoints */
  public readonly endpoints: EndpointsOperations;
  /** The operation groups for ServiceConfigurations */
  public readonly serviceConfigurations: ServiceConfigurationsOperations;
  /** The operation groups for GenerateAwsTemplate */
  public readonly generateAwsTemplate: GenerateAwsTemplateOperations;
  /** The operation groups for PublicCloudConnectors */
  public readonly publicCloudConnectors: PublicCloudConnectorsOperations;
  /** The operation groups for SolutionConfigurations */
  public readonly solutionConfigurations: SolutionConfigurationsOperations;
  /** The operation groups for Inventory */
  public readonly inventory: InventoryOperations;
  /** The operation groups for SolutionTypes */
  public readonly solutionTypes: SolutionTypesOperations;
}
