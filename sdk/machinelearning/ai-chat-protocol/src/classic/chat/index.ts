// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ChatProtocolContext } from "../../api/ChatProtocolContext.js";
import {
  StreamingChatCompletionOptions,
  ChatCompletionChunk,
  ChatCompletionOptions,
  ChatCompletion,
} from "../../models/models.js";
import { createStreaming, create } from "../../api/chat/index.js";
import {
  ChatCreateStreamingOptions,
  ChatCreateOptions,
} from "../../models/options.js";

export interface ChatOperations {
  createStreaming: (
    operationRoute: string,
    body: StreamingChatCompletionOptions,
    options?: ChatCreateStreamingOptions,
  ) => Promise<ChatCompletionChunk>;
  create: (
    operationRoute: string,
    body: ChatCompletionOptions,
    options?: ChatCreateOptions,
  ) => Promise<ChatCompletion>;
}

export function getChat(context: ChatProtocolContext) {
  return {
    createStreaming: (
      operationRoute: string,
      body: StreamingChatCompletionOptions,
      options?: ChatCreateStreamingOptions,
    ) => createStreaming(context, operationRoute, body, options),
    create: (
      operationRoute: string,
      body: ChatCompletionOptions,
      options?: ChatCreateOptions,
    ) => create(context, operationRoute, body, options),
  };
}

export function getChatOperations(
  context: ChatProtocolContext,
): ChatOperations {
  return {
    ...getChat(context),
  };
}
