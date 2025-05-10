// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createHealthBot, HealthBotContext, HealthBotClientOptionalParams } from "./api/index.js";
import { HealthBotsOperations, _getHealthBotsOperations } from "./classic/healthBots/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { HealthBotClientOptionalParams } from "./api/healthBotContext.js";

export class HealthBotClient {
  private _client: HealthBotContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure Health Bot is a cloud platform that empowers developers in Healthcare organizations to build and deploy their compliant, AI-powered virtual health assistants and health bots, that help them improve processes and reduce costs. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: HealthBotClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createHealthBot(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.healthBots = _getHealthBotsOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for healthBots */
  public readonly healthBots: HealthBotsOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
