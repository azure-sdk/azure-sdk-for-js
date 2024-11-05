// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
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
import {
  getInventoryOperations,
  InventoryOperations,
} from "./classic/inventory/index.js";
import {
  getSolutionTypesOperations,
  SolutionTypesOperations,
} from "./classic/solutionTypes/index.js";
import {
  createHybridConnectivity,
  HybridConnectivityContext,
  HybridConnectivityClientOptionalParams,
} from "./api/index.js";

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
      : "azsdk-js-client";
    this._client = createHybridConnectivity(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.generateAwsTemplate = getGenerateAwsTemplateOperations(
      this._client,
      subscriptionId,
    );
    this.publicCloudConnectors = getPublicCloudConnectorsOperations(
      this._client,
      subscriptionId,
    );
    this.solutionConfigurations = getSolutionConfigurationsOperations(
      this._client,
    );
    this.inventory = getInventoryOperations(this._client);
    this.solutionTypes = getSolutionTypesOperations(
      this._client,
      subscriptionId,
    );
  }

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
