// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  MessageKind,
  ChatRole,
  ChatCompletionChunk,
  FinishReason,
  ChatCompletion,
  ChatMessageUnion,
} from "../../models/models.js";
import {
  ChatProtocolContext as Client,
  Create200Response,
  CreateStreaming200Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ChatCreateStreamingOptionalParams,
  ChatCreateOptionalParams,
} from "../../models/options.js";

export function _createStreamingSend(
  context: Client,
  operationRoute: string,
  messages: ChatMessageUnion[],
  options: ChatCreateStreamingOptionalParams = { requestOptions: {} },
): StreamableMethod<CreateStreaming200Response> {
  return context
    .path("/{operationRoute}", operationRoute)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        messages: messages,
        stream: stream,
        sessionState: options?.sessionState,
        context: options?.context,
      },
    }) as StreamableMethod<CreateStreaming200Response>;
}

export async function _createStreamingDeserialize(
  result: CreateStreaming200Response,
): Promise<ChatCompletionChunk> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    choices: result.body["choices"].map((p) => {
      return {
        index: p["index"],
        delta: {
          kind: p.delta["kind"] as MessageKind,
          role: p.delta["role"] as ChatRole,
          sessionState: p.delta["sessionState"],
        },
        sessionState: p["sessionState"],
        context: p["context"],
        finishReason: p["finishReason"] as FinishReason,
      };
    }),
  };
}

/** Creates a new streaming chat completion. */
export async function createStreaming(
  context: Client,
  operationRoute: string,
  messages: ChatMessageUnion[],
  options: ChatCreateStreamingOptionalParams = { requestOptions: {} },
): Promise<ChatCompletionChunk> {
  const result = await _createStreamingSend(
    context,
    operationRoute,
    messages,
    options,
  );
  return _createStreamingDeserialize(result);
}

export function _createSend(
  context: Client,
  operationRoute: string,
  messages: ChatMessageUnion[],
  options: ChatCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<Create200Response> {
  return context
    .path("/{operationRoute}", operationRoute)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        messages: messages,
        stream: stream,
        sessionState: options?.sessionState,
        context: options?.context,
      },
    }) as StreamableMethod<Create200Response>;
}

export async function _createDeserialize(
  result: Create200Response,
): Promise<ChatCompletion> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    choices: result.body["choices"].map((p) => {
      return {
        index: p["index"],
        message: {
          kind: p.message["kind"] as MessageKind,
          role: p.message["role"] as ChatRole,
          sessionState: p.message["sessionState"],
        },
        sessionState: p["sessionState"],
        context: p["context"],
        finishReason: p["finishReason"] as FinishReason,
      };
    }),
  };
}

/** Creates a new chat completion. */
export async function create(
  context: Client,
  operationRoute: string,
  messages: ChatMessageUnion[],
  options: ChatCreateOptionalParams = { requestOptions: {} },
): Promise<ChatCompletion> {
  const result = await _createSend(context, operationRoute, messages, options);
  return _createDeserialize(result);
}
