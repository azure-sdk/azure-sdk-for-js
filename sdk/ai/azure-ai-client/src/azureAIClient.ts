// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getAgentsOperations,
  AgentsOperations,
} from "./classic/agents/index.js";
import {
  getEndpointsOperations,
  EndpointsOperations,
} from "./classic/endpoints/index.js";
import {
  getEvaluationsOperations,
  EvaluationsOperations,
} from "./classic/evaluations/index.js";
import {
  createAzureAI,
  ClientContext,
  AzureAIClientOptionalParams,
} from "./api/index.js";

export { AzureAIClientOptionalParams } from "./api/azureAIContext.js";

export class AzureAIClient {
  private _client: ClientContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    subscriptionId: string,
    resourceGroupName: string,
    projectName: string,
    credential: TokenCredential,
    options: AzureAIClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createAzureAI(
      endpointParam,
      subscriptionId,
      resourceGroupName,
      projectName,
      credential,
      { ...options, userAgentOptions: { userAgentPrefix } },
    );
    this.pipeline = this._client.pipeline;
    this.agents = getAgentsOperations(this._client);
    this.endpoints = getEndpointsOperations(this._client);
    this.evaluations = getEvaluationsOperations(this._client);
  }

  /** The operation groups for Agents */
  public readonly agents: AgentsOperations;
  /** The operation groups for Endpoints */
  public readonly endpoints: EndpointsOperations;
  /** The operation groups for Evaluations */
  public readonly evaluations: EvaluationsOperations;
}
