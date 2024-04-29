// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { getChatOperations, ChatOperations } from "./classic/chat/index.js";
import {
  createChatProtocol,
  ChatProtocolClientOptions,
  ChatProtocolContext,
} from "./api/index.js";

export { ChatProtocolClientOptions } from "./api/chatProtocolContext.js";

export class ChatProtocolClient {
  private _client: ChatProtocolContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure APIs for the Azure Chat protocol. */
  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: ChatProtocolClientOptions = {},
  ) {
    this._client = createChatProtocol(endpointParam, credential, options);
    this.pipeline = this._client.pipeline;
    this.chat = getChatOperations(this._client);
  }

  /** The operation groups for Chat */
  public readonly chat: ChatOperations;
}
