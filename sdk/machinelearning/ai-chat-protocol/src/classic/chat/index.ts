// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ChatProtocolContext } from "../../api/chatProtocolContext.js";
import {
  ChatCompletionChunk,
  ChatCompletion,
  ChatMessageUnion,
} from "../../models/models.js";
import { createStreaming, create } from "../../api/chat/index.js";
import {
  ChatCreateStreamingOptionalParams,
  ChatCreateOptionalParams,
} from "../../models/options.js";

/** Interface representing a Chat operations. */
export interface ChatOperations {
  /** Creates a new streaming chat completion. */
  createStreaming: (
    operationRoute: string,
    messages: ChatMessageUnion[],
    options?: ChatCreateStreamingOptionalParams,
  ) => Promise<ChatCompletionChunk>;
  /** Creates a new chat completion. */
  create: (
    operationRoute: string,
    messages: ChatMessageUnion[],
    options?: ChatCreateOptionalParams,
  ) => Promise<ChatCompletion>;
}

export function getChat(context: ChatProtocolContext) {
  return {
    createStreaming: (
      operationRoute: string,
      messages: ChatMessageUnion[],
      options?: ChatCreateStreamingOptionalParams,
    ) => createStreaming(context, operationRoute, messages, options),
    create: (
      operationRoute: string,
      messages: ChatMessageUnion[],
      options?: ChatCreateOptionalParams,
    ) => create(context, operationRoute, messages, options),
  };
}

export function getChatOperations(
  context: ChatProtocolContext,
): ChatOperations {
  return {
    ...getChat(context),
  };
}
