// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ChatRole,
  ChatCompletions,
  CompletionsFinishReason,
  ModelInfo,
  ModelType,
} from "../models/models.js";
import { ModelContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../helpers/serializerHelpers.js";
import {
  CompleteOptionalParams,
  GetModelInfoOptionalParams,
} from "../models/options.js";

export function _completeSend(
  context: Client,
  body: Record<string, any>,
  options: CompleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/chat/completions")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.extraParams !== undefined
          ? { "extra-parameters": options?.extraParams }
          : {}),
      },
      body: serializeRecord(body as any) as any,
    });
}

export async function _completeDeserialize(
  result: PathUncheckedResponse,
): Promise<ChatCompletions> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    created: new Date(result.body["created"]),
    model: result.body["model"],
    usage: {
      completionTokens: result.body.usage["completion_tokens"],
      promptTokens: result.body.usage["prompt_tokens"],
      totalTokens: result.body.usage["total_tokens"],
    },
    choices: result.body["choices"].map((p: any) => {
      return {
        index: p["index"],
        finishReason: p["finish_reason"] as CompletionsFinishReason,
        message: {
          role: p.message["role"] as ChatRole,
          content: p.message["content"],
          toolCalls:
            p.message["tool_calls"] === undefined
              ? p.message["tool_calls"]
              : p.message["tool_calls"].map((p: any) => {
                  return {
                    id: p["id"],
                    type: p["type"],
                    function: {
                      name: p.function["name"],
                      arguments: p.function["arguments"],
                    },
                  };
                }),
        },
      };
    }),
  };
}

/**
 * Gets chat completions for the provided chat messages.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data. The method makes a REST API call to the `/chat/completions` route
 * on the given endpoint.
 */
export async function complete(
  context: Client,
  body: Record<string, any>,
  options: CompleteOptionalParams = { requestOptions: {} },
): Promise<ChatCompletions> {
  const result = await _completeSend(context, body, options);
  return _completeDeserialize(result);
}

export function _getModelInfoSend(
  context: Client,
  options: GetModelInfoOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/info")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getModelInfoDeserialize(
  result: PathUncheckedResponse,
): Promise<ModelInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    modelName: result.body["model_name"],
    modelType: result.body["model_type"] as ModelType,
    modelProviderName: result.body["model_provider_name"],
  };
}

/**
 * Returns information about the AI model.
 * The method makes a REST API call to the `/info` route on the given endpoint.
 */
export async function getModelInfo(
  context: Client,
  options: GetModelInfoOptionalParams = { requestOptions: {} },
): Promise<ModelInfo> {
  const result = await _getModelInfoSend(context, options);
  return _getModelInfoDeserialize(result);
}
