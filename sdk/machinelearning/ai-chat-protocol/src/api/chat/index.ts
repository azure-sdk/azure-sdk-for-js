// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StreamingChatCompletionOptions,
  ChatCompletionChunk,
  ChatCompletionOptions,
  ChatCompletion,
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
  body: StreamingChatCompletionOptions,
  options: ChatCreateStreamingOptionalParams = { requestOptions: {} },
): StreamableMethod<CreateStreaming200Response> {
  return context
    .path("/{operationRoute}", operationRoute)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        messages: body["messages"],
        stream: body["stream"],
        sessionState: body["sessionState"],
        context: body["context"],
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
    choices: result.body["choices"].map((p) => ({
      index: p["index"],
      delta: {
        kind: p.delta["kind"],
        role: p.delta["role"],
        sessionState: p.delta["sessionState"],
      },
      sessionState: p["sessionState"],
      context: p["context"],
      finishReason: p["finishReason"],
    })),
  };
}

/** Creates a new streaming chat completion. */
export async function createStreaming(
  context: Client,
  operationRoute: string,
  body: StreamingChatCompletionOptions,
  options: ChatCreateStreamingOptionalParams = { requestOptions: {} },
): Promise<ChatCompletionChunk> {
  const result = await _createStreamingSend(
    context,
    operationRoute,
    body,
    options,
  );
  return _createStreamingDeserialize(result);
}

export function _createSend(
  context: Client,
  operationRoute: string,
  body: ChatCompletionOptions,
  options: ChatCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<Create200Response> {
  return context
    .path("/{operationRoute}", operationRoute)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        messages: body["messages"],
        stream: body["stream"],
        sessionState: body["sessionState"],
        context: body["context"],
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
    choices: result.body["choices"].map((p) => ({
      index: p["index"],
      message: {
        kind: p.message["kind"],
        role: p.message["role"],
        sessionState: p.message["sessionState"],
      },
      sessionState: p["sessionState"],
      context: p["context"],
      finishReason: p["finishReason"],
    })),
  };
}

/** Creates a new chat completion. */
export async function create(
  context: Client,
  operationRoute: string,
  body: ChatCompletionOptions,
  options: ChatCreateOptionalParams = { requestOptions: {} },
): Promise<ChatCompletion> {
  const result = await _createSend(context, operationRoute, body, options);
  return _createDeserialize(result);
}
