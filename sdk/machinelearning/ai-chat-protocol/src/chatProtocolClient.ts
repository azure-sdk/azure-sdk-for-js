// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { getChatOperations, ChatOperations } from "./classic/chat/index.js";
import {
  createChatProtocol,
  ChatProtocolContext,
  ChatProtocolClientOptionalParams,
} from "./api/index.js";

export { ChatProtocolClientOptionalParams } from "./api/chatProtocolContext.js";

export class ChatProtocolClient {
  private _client: ChatProtocolContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure APIs for the Azure Chat protocol. */
  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: ChatProtocolClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createChatProtocol(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.chat = getChatOperations(this._client);
  }

  /** The operation groups for Chat */
  public readonly chat: ChatOperations;
}
