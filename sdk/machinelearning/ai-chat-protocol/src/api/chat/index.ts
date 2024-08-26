// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ChatCompletionChunk,
  ChatCompletion,
  ChatMessageUnion,
} from "../../models/models.js";
import { ChatProtocolContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
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
): StreamableMethod {
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
    });
}

export async function _createStreamingDeserialize(
  result: PathUncheckedResponse,
): Promise<ChatCompletionChunk> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    choices: result.body["choices"].map((p: any) => {
      return {
        index: p["index"],
        delta: {
          kind: p.delta["kind"],
          role: p.delta["role"],
          sessionState: p.delta["sessionState"],
        },
        sessionState: p["sessionState"],
        context: p["context"],
        finishReason: p["finishReason"],
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
): StreamableMethod {
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
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<ChatCompletion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    choices: result.body["choices"].map((p: any) => {
      return {
        index: p["index"],
        message: {
          kind: p.message["kind"],
          role: p.message["role"],
          sessionState: p.message["sessionState"],
        },
        sessionState: p["sessionState"],
        context: p["context"],
        finishReason: p["finishReason"],
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
