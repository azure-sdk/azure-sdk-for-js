// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { ChatCompletions, ModelInfo } from "./models/models.js";
import {
  CompleteOptionalParams,
  GetModelInfoOptionalParams,
} from "./models/options.js";
import {
  createChatCompletions,
  ModelContext,
  ChatCompletionsClientOptionalParams,
  complete,
  getModelInfo,
} from "./api/index.js";

export { ChatCompletionsClientOptionalParams } from "./api/chatCompletionsContext.js";

export class ChatCompletionsClient {
  private _client: ModelContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    credential: KeyCredential | KeyCredential | TokenCredential,
    options: ChatCompletionsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createChatCompletions(endpoint, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /**
   * Gets chat completions for the provided chat messages.
   * Completions support a wide variety of tasks and generate text that continues from or "completes"
   * provided prompt data. The method makes a REST API call to the `/chat/completions` route
   * on the given endpoint.
   */
  complete(
    body: Record<string, any>,
    options: CompleteOptionalParams = { requestOptions: {} },
  ): Promise<ChatCompletions> {
    return complete(this._client, body, options);
  }

  /**
   * Returns information about the AI model.
   * The method makes a REST API call to the `/info` route on the given endpoint.
   */
  getModelInfo(
    options: GetModelInfoOptionalParams = { requestOptions: {} },
  ): Promise<ModelInfo> {
    return getModelInfo(this._client, options);
  }
}
