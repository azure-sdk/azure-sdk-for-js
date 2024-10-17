// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getSolutionsOperations,
  SolutionsOperations,
} from "./classic/solutions/index.js";
import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getTargetsOperations,
  TargetsOperations,
} from "./classic/targets/index.js";
import {
  getInstancesOperations,
  InstancesOperations,
} from "./classic/instances/index.js";
import {
  getCampaignsOperations,
  CampaignsOperations,
} from "./classic/campaigns/index.js";
import {
  getActivationsOperations,
  ActivationsOperations,
} from "./classic/activations/index.js";
import {
  getCatalogsOperations,
  CatalogsOperations,
} from "./classic/catalogs/index.js";
import {
  getSolutionVersionsOperations,
  SolutionVersionsOperations,
} from "./classic/solutionVersions/index.js";
import {
  getCatalogVersionsOperations,
  CatalogVersionsOperations,
} from "./classic/catalogVersions/index.js";
import {
  getCampaignVersionsOperations,
  CampaignVersionsOperations,
} from "./classic/campaignVersions/index.js";
import {
  getDiagnosticsOperations,
  DiagnosticsOperations,
} from "./classic/diagnostics/index.js";
import {
  createToolchainOrchestrator,
  ToolchainOrchestratorContext,
  ToolchainOrchestratorClientOptionalParams,
} from "./api/index.js";

export { ToolchainOrchestratorClientOptionalParams } from "./api/toolchainOrchestratorContext.js";

export class ToolchainOrchestratorClient {
  private _client: ToolchainOrchestratorContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Microsoft ToolchainOrchestrator Resource Provider. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: ToolchainOrchestratorClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createToolchainOrchestrator(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.solutions = getSolutionsOperations(this._client, subscriptionId);
    this.operations = getOperationsOperations(this._client);
    this.targets = getTargetsOperations(this._client, subscriptionId);
    this.instances = getInstancesOperations(this._client, subscriptionId);
    this.campaigns = getCampaignsOperations(this._client, subscriptionId);
    this.activations = getActivationsOperations(this._client, subscriptionId);
    this.catalogs = getCatalogsOperations(this._client, subscriptionId);
    this.solutionVersions = getSolutionVersionsOperations(
      this._client,
      subscriptionId,
    );
    this.catalogVersions = getCatalogVersionsOperations(
      this._client,
      subscriptionId,
    );
    this.campaignVersions = getCampaignVersionsOperations(
      this._client,
      subscriptionId,
    );
    this.diagnostics = getDiagnosticsOperations(this._client, subscriptionId);
  }

  /** The operation groups for Solutions */
  public readonly solutions: SolutionsOperations;
  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for Targets */
  public readonly targets: TargetsOperations;
  /** The operation groups for Instances */
  public readonly instances: InstancesOperations;
  /** The operation groups for Campaigns */
  public readonly campaigns: CampaignsOperations;
  /** The operation groups for Activations */
  public readonly activations: ActivationsOperations;
  /** The operation groups for Catalogs */
  public readonly catalogs: CatalogsOperations;
  /** The operation groups for SolutionVersions */
  public readonly solutionVersions: SolutionVersionsOperations;
  /** The operation groups for CatalogVersions */
  public readonly catalogVersions: CatalogVersionsOperations;
  /** The operation groups for CampaignVersions */
  public readonly campaignVersions: CampaignVersionsOperations;
  /** The operation groups for Diagnostics */
  public readonly diagnostics: DiagnosticsOperations;
}
