// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  _getSolutionTypesOperations,
  SolutionTypesOperations,
} from "./classic/solutionTypes/index.js";
import { _getInventoryOperations, InventoryOperations } from "./classic/inventory/index.js";
import {
  _getSolutionConfigurationsOperations,
  SolutionConfigurationsOperations,
} from "./classic/solutionConfigurations/index.js";
import {
  _getPublicCloudConnectorsOperations,
  PublicCloudConnectorsOperations,
} from "./classic/publicCloudConnectors/index.js";
import {
  _getGenerateAwsTemplateOperations,
  GenerateAwsTemplateOperations,
} from "./classic/generateAwsTemplate/index.js";
import {
  createHybridConnectivity,
  HybridConnectivityContext,
  HybridConnectivityClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { HybridConnectivityClientOptionalParams } from "./api/hybridConnectivityContext.js";

export class HybridConnectivityClient {
  private _client: HybridConnectivityContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** REST API for public clouds. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: HybridConnectivityClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createHybridConnectivity(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.solutionTypes = _getSolutionTypesOperations(this._client);
    this.inventory = _getInventoryOperations(this._client);
    this.solutionConfigurations = _getSolutionConfigurationsOperations(this._client);
    this.publicCloudConnectors = _getPublicCloudConnectorsOperations(this._client);
    this.generateAwsTemplate = _getGenerateAwsTemplateOperations(this._client);
  }

  /** The operation groups for solutionTypes */
  public readonly solutionTypes: SolutionTypesOperations;
  /** The operation groups for inventory */
  public readonly inventory: InventoryOperations;
  /** The operation groups for solutionConfigurations */
  public readonly solutionConfigurations: SolutionConfigurationsOperations;
  /** The operation groups for publicCloudConnectors */
  public readonly publicCloudConnectors: PublicCloudConnectorsOperations;
  /** The operation groups for generateAwsTemplate */
  public readonly generateAwsTemplate: GenerateAwsTemplateOperations;
}
