// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AudioTranscriptionOptions,
  AudioTranscription,
  AudioTranslationOptions,
  AudioTranslation,
  CompletionsOptions,
  Completions,
  ChatCompletionsOptions,
  ChatCompletions,
  ImageGenerationOptions,
  ImageGenerations,
  EmbeddingsOptions,
  Embeddings,
} from "../models/models.js";
import {
  GetAudioTranscriptionAsPlainText200Response,
  GetAudioTranscriptionAsPlainTextDefaultResponse,
  GetAudioTranscriptionAsResponseObject200Response,
  GetAudioTranscriptionAsResponseObjectDefaultResponse,
  GetAudioTranslationAsPlainText200Response,
  GetAudioTranslationAsPlainTextDefaultResponse,
  GetAudioTranslationAsResponseObject200Response,
  GetAudioTranslationAsResponseObjectDefaultResponse,
  GetChatCompletions200Response,
  GetChatCompletionsDefaultResponse,
  GetChatCompletionsWithAzureExtensions200Response,
  GetChatCompletionsWithAzureExtensionsDefaultResponse,
  GetCompletions200Response,
  GetCompletionsDefaultResponse,
  GetEmbeddings200Response,
  GetEmbeddingsDefaultResponse,
  GetImageGenerations200Response,
  GetImageGenerationsDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
import {
  GetAudioTranscriptionAsPlainTextOptions,
  GetAudioTranscriptionAsResponseObjectOptions,
  GetAudioTranslationAsPlainTextOptions,
  GetAudioTranslationAsResponseObjectOptions,
  GetCompletionsOptions,
  GetChatCompletionsOptions,
  GetChatCompletionsWithAzureExtensionsOptions,
  GetImageGenerationsOptions,
  GetEmbeddingsOptions,
} from "../models/options.js";

export function _getAudioTranscriptionAsPlainTextSend(
  context: Client,
  deploymentId: string,
  body: AudioTranscriptionOptions,
  options: GetAudioTranscriptionAsPlainTextOptions = { requestOptions: {} },
): StreamableMethod<
  | GetAudioTranscriptionAsPlainText200Response
  | GetAudioTranscriptionAsPlainTextDefaultResponse
> {
  return context
    .path("/deployments/{deploymentId}/audio/transcriptions", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        file: uint8ArrayToString(body["file"], "base64"),
        filename: body["filename"],
        responseFormat: body["responseFormat"],
        language: body["language"],
        prompt: body["prompt"],
        temperature: body["temperature"],
        model: body["model"],
      },
    }) as StreamableMethod<
    | GetAudioTranscriptionAsPlainText200Response
    | GetAudioTranscriptionAsPlainTextDefaultResponse
  >;
}

export async function _getAudioTranscriptionAsPlainTextDeserialize(
  result:
    | GetAudioTranscriptionAsPlainText200Response
    | GetAudioTranscriptionAsPlainTextDefaultResponse,
): Promise<string> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * Gets transcribed text and associated metadata from provided spoken audio data. Audio will be transcribed in the
 * written language corresponding to the language it was spoken in.
 */
export async function getAudioTranscriptionAsPlainText(
  context: Client,
  deploymentId: string,
  body: AudioTranscriptionOptions,
  options: GetAudioTranscriptionAsPlainTextOptions = { requestOptions: {} },
): Promise<string> {
  const result = await _getAudioTranscriptionAsPlainTextSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getAudioTranscriptionAsPlainTextDeserialize(result);
}

export function _getAudioTranscriptionAsResponseObjectSend(
  context: Client,
  deploymentId: string,
  body: AudioTranscriptionOptions,
  options: GetAudioTranscriptionAsResponseObjectOptions = {
    requestOptions: {},
  },
): StreamableMethod<
  | GetAudioTranscriptionAsResponseObject200Response
  | GetAudioTranscriptionAsResponseObjectDefaultResponse
> {
  return context
    .path("/deployments/{deploymentId}/audio/transcriptions", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        file: uint8ArrayToString(body["file"], "base64"),
        filename: body["filename"],
        responseFormat: body["responseFormat"],
        language: body["language"],
        prompt: body["prompt"],
        temperature: body["temperature"],
        model: body["model"],
      },
    }) as StreamableMethod<
    | GetAudioTranscriptionAsResponseObject200Response
    | GetAudioTranscriptionAsResponseObjectDefaultResponse
  >;
}

export async function _getAudioTranscriptionAsResponseObjectDeserialize(
  result:
    | GetAudioTranscriptionAsResponseObject200Response
    | GetAudioTranscriptionAsResponseObjectDefaultResponse,
): Promise<AudioTranscription> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    text: result.body["text"],
    task: result.body["task"],
    language: result.body["language"],
    duration: result.body["duration"],
    segments: !result.body["segments"]
      ? result.body["segments"]
      : result.body["segments"].map((p) => ({
          id: p["id"],
          start: p["start"],
          end: p["end"],
          text: p["text"],
          temperature: p["temperature"],
          avgLogprob: p["avgLogprob"],
          compressionRatio: p["compressionRatio"],
          noSpeechProb: p["noSpeechProb"],
          tokens: p["tokens"],
          seek: p["seek"],
        })),
  };
}

/**
 * Gets transcribed text and associated metadata from provided spoken audio data. Audio will be transcribed in the
 * written language corresponding to the language it was spoken in.
 */
export async function getAudioTranscriptionAsResponseObject(
  context: Client,
  deploymentId: string,
  body: AudioTranscriptionOptions,
  options: GetAudioTranscriptionAsResponseObjectOptions = {
    requestOptions: {},
  },
): Promise<AudioTranscription> {
  const result = await _getAudioTranscriptionAsResponseObjectSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getAudioTranscriptionAsResponseObjectDeserialize(result);
}

export function _getAudioTranslationAsPlainTextSend(
  context: Client,
  deploymentId: string,
  body: AudioTranslationOptions,
  options: GetAudioTranslationAsPlainTextOptions = { requestOptions: {} },
): StreamableMethod<
  | GetAudioTranslationAsPlainText200Response
  | GetAudioTranslationAsPlainTextDefaultResponse
> {
  return context
    .path("/deployments/{deploymentId}/audio/translations", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        file: uint8ArrayToString(body["file"], "base64"),
        filename: body["filename"],
        responseFormat: body["responseFormat"],
        prompt: body["prompt"],
        temperature: body["temperature"],
        model: body["model"],
      },
    }) as StreamableMethod<
    | GetAudioTranslationAsPlainText200Response
    | GetAudioTranslationAsPlainTextDefaultResponse
  >;
}

export async function _getAudioTranslationAsPlainTextDeserialize(
  result:
    | GetAudioTranslationAsPlainText200Response
    | GetAudioTranslationAsPlainTextDefaultResponse,
): Promise<string> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Gets English language transcribed text and associated metadata from provided spoken audio data. */
export async function getAudioTranslationAsPlainText(
  context: Client,
  deploymentId: string,
  body: AudioTranslationOptions,
  options: GetAudioTranslationAsPlainTextOptions = { requestOptions: {} },
): Promise<string> {
  const result = await _getAudioTranslationAsPlainTextSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getAudioTranslationAsPlainTextDeserialize(result);
}

export function _getAudioTranslationAsResponseObjectSend(
  context: Client,
  deploymentId: string,
  body: AudioTranslationOptions,
  options: GetAudioTranslationAsResponseObjectOptions = { requestOptions: {} },
): StreamableMethod<
  | GetAudioTranslationAsResponseObject200Response
  | GetAudioTranslationAsResponseObjectDefaultResponse
> {
  return context
    .path("/deployments/{deploymentId}/audio/translations", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        file: uint8ArrayToString(body["file"], "base64"),
        filename: body["filename"],
        responseFormat: body["responseFormat"],
        prompt: body["prompt"],
        temperature: body["temperature"],
        model: body["model"],
      },
    }) as StreamableMethod<
    | GetAudioTranslationAsResponseObject200Response
    | GetAudioTranslationAsResponseObjectDefaultResponse
  >;
}

export async function _getAudioTranslationAsResponseObjectDeserialize(
  result:
    | GetAudioTranslationAsResponseObject200Response
    | GetAudioTranslationAsResponseObjectDefaultResponse,
): Promise<AudioTranslation> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    text: result.body["text"],
    task: result.body["task"],
    language: result.body["language"],
    duration: result.body["duration"],
    segments: !result.body["segments"]
      ? result.body["segments"]
      : result.body["segments"].map((p) => ({
          id: p["id"],
          start: p["start"],
          end: p["end"],
          text: p["text"],
          temperature: p["temperature"],
          avgLogprob: p["avgLogprob"],
          compressionRatio: p["compressionRatio"],
          noSpeechProb: p["noSpeechProb"],
          tokens: p["tokens"],
          seek: p["seek"],
        })),
  };
}

/** Gets English language transcribed text and associated metadata from provided spoken audio data. */
export async function getAudioTranslationAsResponseObject(
  context: Client,
  deploymentId: string,
  body: AudioTranslationOptions,
  options: GetAudioTranslationAsResponseObjectOptions = { requestOptions: {} },
): Promise<AudioTranslation> {
  const result = await _getAudioTranslationAsResponseObjectSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getAudioTranslationAsResponseObjectDeserialize(result);
}

export function _getCompletionsSend(
  context: Client,
  deploymentId: string,
  body: CompletionsOptions,
  options: GetCompletionsOptions = { requestOptions: {} },
): StreamableMethod<GetCompletions200Response | GetCompletionsDefaultResponse> {
  return context
    .path("/deployments/{deploymentId}/completions", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        prompt: body["prompt"],
        maxTokens: body["maxTokens"],
        temperature: body["temperature"],
        topP: body["topP"],
        logitBias: body["logitBias"],
        user: body["user"],
        n: body["n"],
        logprobs: body["logprobs"],
        echo: body["echo"],
        stop: body["stop"],
        presencePenalty: body["presencePenalty"],
        frequencyPenalty: body["frequencyPenalty"],
        bestOf: body["bestOf"],
        stream: body["stream"],
        model: body["model"],
      },
    });
}

export async function _getCompletionsDeserialize(
  result: GetCompletions200Response | GetCompletionsDefaultResponse,
): Promise<Completions> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    created: new Date(result.body["created"]),
    promptFilterResults: !result.body["promptFilterResults"]
      ? result.body["promptFilterResults"]
      : result.body["promptFilterResults"].map((p) => ({
          promptIndex: p["promptIndex"],
          contentFilterResults: {
            sexual: !p.contentFilterResults.sexual
              ? undefined
              : {
                  severity: p.contentFilterResults.sexual?.["severity"],
                  filtered: p.contentFilterResults.sexual?.["filtered"],
                },
            violence: !p.contentFilterResults.violence
              ? undefined
              : {
                  severity: p.contentFilterResults.violence?.["severity"],
                  filtered: p.contentFilterResults.violence?.["filtered"],
                },
            hate: !p.contentFilterResults.hate
              ? undefined
              : {
                  severity: p.contentFilterResults.hate?.["severity"],
                  filtered: p.contentFilterResults.hate?.["filtered"],
                },
            selfHarm: !p.contentFilterResults.selfHarm
              ? undefined
              : {
                  severity: p.contentFilterResults.selfHarm?.["severity"],
                  filtered: p.contentFilterResults.selfHarm?.["filtered"],
                },
            profanity: !p.contentFilterResults.profanity
              ? undefined
              : {
                  filtered: p.contentFilterResults.profanity?.["filtered"],
                  detected: p.contentFilterResults.profanity?.["detected"],
                },
            customBlocklists: !p.contentFilterResults["customBlocklists"]
              ? p.contentFilterResults["customBlocklists"]
              : p.contentFilterResults["customBlocklists"].map((p) => ({
                  id: p["id"],
                  filtered: p["filtered"],
                })),
            error: !p.contentFilterResults.error
              ? undefined
              : p.contentFilterResults.error,
            jailbreak: !p.contentFilterResults.jailbreak
              ? undefined
              : {
                  filtered: p.contentFilterResults.jailbreak?.["filtered"],
                  detected: p.contentFilterResults.jailbreak?.["detected"],
                },
          },
        })),
    choices: result.body["choices"].map((p) => ({
      text: p["text"],
      index: p["index"],
      contentFilterResults: !p.contentFilterResults
        ? undefined
        : {
            sexual: !p.contentFilterResults?.sexual
              ? undefined
              : {
                  severity: p.contentFilterResults?.sexual?.["severity"],
                  filtered: p.contentFilterResults?.sexual?.["filtered"],
                },
            violence: !p.contentFilterResults?.violence
              ? undefined
              : {
                  severity: p.contentFilterResults?.violence?.["severity"],
                  filtered: p.contentFilterResults?.violence?.["filtered"],
                },
            hate: !p.contentFilterResults?.hate
              ? undefined
              : {
                  severity: p.contentFilterResults?.hate?.["severity"],
                  filtered: p.contentFilterResults?.hate?.["filtered"],
                },
            selfHarm: !p.contentFilterResults?.selfHarm
              ? undefined
              : {
                  severity: p.contentFilterResults?.selfHarm?.["severity"],
                  filtered: p.contentFilterResults?.selfHarm?.["filtered"],
                },
            profanity: !p.contentFilterResults?.profanity
              ? undefined
              : {
                  filtered: p.contentFilterResults?.profanity?.["filtered"],
                  detected: p.contentFilterResults?.profanity?.["detected"],
                },
            customBlocklists: !p.contentFilterResults?.["customBlocklists"]
              ? p.contentFilterResults?.["customBlocklists"]
              : p.contentFilterResults?.["customBlocklists"].map((p) => ({
                  id: p["id"],
                  filtered: p["filtered"],
                })),
            error: !p.contentFilterResults?.error
              ? undefined
              : p.contentFilterResults?.error,
            protectedMaterialText: !p.contentFilterResults
              ?.protectedMaterialText
              ? undefined
              : {
                  filtered:
                    p.contentFilterResults?.protectedMaterialText?.["filtered"],
                  detected:
                    p.contentFilterResults?.protectedMaterialText?.["detected"],
                },
            protectedMaterialCode: !p.contentFilterResults
              ?.protectedMaterialCode
              ? undefined
              : {
                  filtered:
                    p.contentFilterResults?.protectedMaterialCode?.["filtered"],
                  detected:
                    p.contentFilterResults?.protectedMaterialCode?.["detected"],
                  url: p.contentFilterResults?.protectedMaterialCode?.["url"],
                  license:
                    p.contentFilterResults?.protectedMaterialCode?.["license"],
                },
          },
      logprobs:
        p.logprobs === null
          ? null
          : {
              tokens: p.logprobs["tokens"],
              tokenLogprobs: p.logprobs["tokenLogprobs"],
              topLogprobs: p.logprobs["topLogprobs"],
              textOffset: p.logprobs["textOffset"],
            },
      finishReason: p["finishReason"],
    })),
    usage: {
      completionTokens: result.body.usage["completionTokens"],
      promptTokens: result.body.usage["promptTokens"],
      totalTokens: result.body.usage["totalTokens"],
    },
  };
}

/**
 * Gets completions for the provided input prompts.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export async function getCompletions(
  context: Client,
  deploymentId: string,
  body: CompletionsOptions,
  options: GetCompletionsOptions = { requestOptions: {} },
): Promise<Completions> {
  const result = await _getCompletionsSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getCompletionsDeserialize(result);
}

export function _getChatCompletionsSend(
  context: Client,
  deploymentId: string,
  body: ChatCompletionsOptions,
  options: GetChatCompletionsOptions = { requestOptions: {} },
): StreamableMethod<
  GetChatCompletions200Response | GetChatCompletionsDefaultResponse
> {
  return context
    .path("/deployments/{deploymentId}/chat/completions", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        messages: body["messages"],
        functions: !body["functions"]
          ? body["functions"]
          : body["functions"].map((p) => ({
              name: p["name"],
              description: p["description"],
              parameters: p["parameters"],
            })),
        functionCall: body["functionCall"],
        maxTokens: body["maxTokens"],
        temperature: body["temperature"],
        topP: body["topP"],
        logitBias: body["logitBias"],
        user: body["user"],
        n: body["n"],
        stop: body["stop"],
        presencePenalty: body["presencePenalty"],
        frequencyPenalty: body["frequencyPenalty"],
        stream: body["stream"],
        model: body["model"],
        dataSources: body["dataSources"],
        enhancements: !body.enhancements
          ? undefined
          : {
              grounding: !body.enhancements?.grounding
                ? undefined
                : { enabled: body.enhancements?.grounding?.["enabled"] },
              ocr: !body.enhancements?.ocr
                ? undefined
                : { enabled: body.enhancements?.ocr?.["enabled"] },
            },
        seed: body["seed"],
        responseFormat: !body.responseFormat
          ? undefined
          : { type: body.responseFormat?.["type"] },
        tools: body["tools"],
        toolChoice: body["toolChoice"],
      },
    });
}

export async function _getChatCompletionsDeserialize(
  result: GetChatCompletions200Response | GetChatCompletionsDefaultResponse,
): Promise<ChatCompletions> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    created: new Date(result.body["created"]),
    choices: result.body["choices"].map((p) => ({
      message: !p.message
        ? undefined
        : {
            role: p.message?.["role"],
            content: p.message?.["content"],
            toolCalls: !p.message?.["toolCalls"]
              ? p.message?.["toolCalls"]
              : p.message?.["toolCalls"],
            functionCall: !p.message?.functionCall
              ? undefined
              : {
                  name: p.message?.functionCall?.["name"],
                  arguments: p.message?.functionCall?.["arguments"],
                },
            context: !p.message?.context
              ? undefined
              : {
                  messages: !p.message?.context?.["messages"]
                    ? p.message?.context?.["messages"]
                    : p.message?.context?.["messages"].map((p) => ({
                        role: p["role"],
                        content: p["content"],
                        toolCalls: !p["toolCalls"]
                          ? p["toolCalls"]
                          : p["toolCalls"],
                        functionCall: !p.functionCall
                          ? undefined
                          : {
                              name: p.functionCall?.["name"],
                              arguments: p.functionCall?.["arguments"],
                            },
                        context: !p.context ? undefined : p.context,
                      })),
                },
          },
      index: p["index"],
      finishReason: p["finishReason"],
      finishDetails: !p.finishDetails
        ? undefined
        : { type: p.finishDetails?.["type"] },
      delta: !p.delta
        ? undefined
        : {
            role: p.delta?.["role"],
            content: p.delta?.["content"],
            toolCalls: !p.delta?.["toolCalls"]
              ? p.delta?.["toolCalls"]
              : p.delta?.["toolCalls"],
            functionCall: !p.delta?.functionCall
              ? undefined
              : {
                  name: p.delta?.functionCall?.["name"],
                  arguments: p.delta?.functionCall?.["arguments"],
                },
            context: !p.delta?.context
              ? undefined
              : {
                  messages: !p.delta?.context?.["messages"]
                    ? p.delta?.context?.["messages"]
                    : p.delta?.context?.["messages"].map((p) => ({
                        role: p["role"],
                        content: p["content"],
                        toolCalls: !p["toolCalls"]
                          ? p["toolCalls"]
                          : p["toolCalls"],
                        functionCall: !p.functionCall
                          ? undefined
                          : {
                              name: p.functionCall?.["name"],
                              arguments: p.functionCall?.["arguments"],
                            },
                        context: !p.context ? undefined : p.context,
                      })),
                },
          },
      contentFilterResults: !p.contentFilterResults
        ? undefined
        : {
            sexual: !p.contentFilterResults?.sexual
              ? undefined
              : {
                  severity: p.contentFilterResults?.sexual?.["severity"],
                  filtered: p.contentFilterResults?.sexual?.["filtered"],
                },
            violence: !p.contentFilterResults?.violence
              ? undefined
              : {
                  severity: p.contentFilterResults?.violence?.["severity"],
                  filtered: p.contentFilterResults?.violence?.["filtered"],
                },
            hate: !p.contentFilterResults?.hate
              ? undefined
              : {
                  severity: p.contentFilterResults?.hate?.["severity"],
                  filtered: p.contentFilterResults?.hate?.["filtered"],
                },
            selfHarm: !p.contentFilterResults?.selfHarm
              ? undefined
              : {
                  severity: p.contentFilterResults?.selfHarm?.["severity"],
                  filtered: p.contentFilterResults?.selfHarm?.["filtered"],
                },
            profanity: !p.contentFilterResults?.profanity
              ? undefined
              : {
                  filtered: p.contentFilterResults?.profanity?.["filtered"],
                  detected: p.contentFilterResults?.profanity?.["detected"],
                },
            customBlocklists: !p.contentFilterResults?.["customBlocklists"]
              ? p.contentFilterResults?.["customBlocklists"]
              : p.contentFilterResults?.["customBlocklists"].map((p) => ({
                  id: p["id"],
                  filtered: p["filtered"],
                })),
            error: !p.contentFilterResults?.error
              ? undefined
              : p.contentFilterResults?.error,
            protectedMaterialText: !p.contentFilterResults
              ?.protectedMaterialText
              ? undefined
              : {
                  filtered:
                    p.contentFilterResults?.protectedMaterialText?.["filtered"],
                  detected:
                    p.contentFilterResults?.protectedMaterialText?.["detected"],
                },
            protectedMaterialCode: !p.contentFilterResults
              ?.protectedMaterialCode
              ? undefined
              : {
                  filtered:
                    p.contentFilterResults?.protectedMaterialCode?.["filtered"],
                  detected:
                    p.contentFilterResults?.protectedMaterialCode?.["detected"],
                  url: p.contentFilterResults?.protectedMaterialCode?.["url"],
                  license:
                    p.contentFilterResults?.protectedMaterialCode?.["license"],
                },
          },
      enhancements: !p.enhancements
        ? undefined
        : {
            grounding: !p.enhancements?.grounding
              ? undefined
              : {
                  lines: p.enhancements?.grounding?.["lines"].map((p) => ({
                    text: p["text"],
                    spans: p["spans"].map((p) => ({
                      text: p["text"],
                      offset: p["offset"],
                      length: p["length"],
                      polygon: p["polygon"].map((p) => ({
                        x: p["x"],
                        y: p["y"],
                      })),
                    })),
                  })),
                },
          },
    })),
    promptFilterResults: !result.body["promptFilterResults"]
      ? result.body["promptFilterResults"]
      : result.body["promptFilterResults"].map((p) => ({
          promptIndex: p["promptIndex"],
          contentFilterResults: {
            sexual: !p.contentFilterResults.sexual
              ? undefined
              : {
                  severity: p.contentFilterResults.sexual?.["severity"],
                  filtered: p.contentFilterResults.sexual?.["filtered"],
                },
            violence: !p.contentFilterResults.violence
              ? undefined
              : {
                  severity: p.contentFilterResults.violence?.["severity"],
                  filtered: p.contentFilterResults.violence?.["filtered"],
                },
            hate: !p.contentFilterResults.hate
              ? undefined
              : {
                  severity: p.contentFilterResults.hate?.["severity"],
                  filtered: p.contentFilterResults.hate?.["filtered"],
                },
            selfHarm: !p.contentFilterResults.selfHarm
              ? undefined
              : {
                  severity: p.contentFilterResults.selfHarm?.["severity"],
                  filtered: p.contentFilterResults.selfHarm?.["filtered"],
                },
            profanity: !p.contentFilterResults.profanity
              ? undefined
              : {
                  filtered: p.contentFilterResults.profanity?.["filtered"],
                  detected: p.contentFilterResults.profanity?.["detected"],
                },
            customBlocklists: !p.contentFilterResults["customBlocklists"]
              ? p.contentFilterResults["customBlocklists"]
              : p.contentFilterResults["customBlocklists"].map((p) => ({
                  id: p["id"],
                  filtered: p["filtered"],
                })),
            error: !p.contentFilterResults.error
              ? undefined
              : p.contentFilterResults.error,
            jailbreak: !p.contentFilterResults.jailbreak
              ? undefined
              : {
                  filtered: p.contentFilterResults.jailbreak?.["filtered"],
                  detected: p.contentFilterResults.jailbreak?.["detected"],
                },
          },
        })),
    systemFingerprint: result.body["systemFingerprint"],
    usage: {
      completionTokens: result.body.usage["completionTokens"],
      promptTokens: result.body.usage["promptTokens"],
      totalTokens: result.body.usage["totalTokens"],
    },
  };
}

/**
 * Gets chat completions for the provided chat messages.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export async function getChatCompletions(
  context: Client,
  deploymentId: string,
  body: ChatCompletionsOptions,
  options: GetChatCompletionsOptions = { requestOptions: {} },
): Promise<ChatCompletions> {
  const result = await _getChatCompletionsSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getChatCompletionsDeserialize(result);
}

export function _getChatCompletionsWithAzureExtensionsSend(
  context: Client,
  deploymentId: string,
  body: ChatCompletionsOptions,
  options: GetChatCompletionsWithAzureExtensionsOptions = {
    requestOptions: {},
  },
): StreamableMethod<
  | GetChatCompletionsWithAzureExtensions200Response
  | GetChatCompletionsWithAzureExtensionsDefaultResponse
> {
  return context
    .path(
      "/deployments/{deploymentId}/extensions/chat/completions",
      deploymentId,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        messages: body["messages"],
        functions: !body["functions"]
          ? body["functions"]
          : body["functions"].map((p) => ({
              name: p["name"],
              description: p["description"],
              parameters: p["parameters"],
            })),
        functionCall: body["functionCall"],
        maxTokens: body["maxTokens"],
        temperature: body["temperature"],
        topP: body["topP"],
        logitBias: body["logitBias"],
        user: body["user"],
        n: body["n"],
        stop: body["stop"],
        presencePenalty: body["presencePenalty"],
        frequencyPenalty: body["frequencyPenalty"],
        stream: body["stream"],
        model: body["model"],
        dataSources: body["dataSources"],
        enhancements: !body.enhancements
          ? undefined
          : {
              grounding: !body.enhancements?.grounding
                ? undefined
                : { enabled: body.enhancements?.grounding?.["enabled"] },
              ocr: !body.enhancements?.ocr
                ? undefined
                : { enabled: body.enhancements?.ocr?.["enabled"] },
            },
        seed: body["seed"],
        responseFormat: !body.responseFormat
          ? undefined
          : { type: body.responseFormat?.["type"] },
        tools: body["tools"],
        toolChoice: body["toolChoice"],
      },
    });
}

export async function _getChatCompletionsWithAzureExtensionsDeserialize(
  result:
    | GetChatCompletionsWithAzureExtensions200Response
    | GetChatCompletionsWithAzureExtensionsDefaultResponse,
): Promise<ChatCompletions> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    created: new Date(result.body["created"]),
    choices: result.body["choices"].map((p) => ({
      message: !p.message
        ? undefined
        : {
            role: p.message?.["role"],
            content: p.message?.["content"],
            toolCalls: !p.message?.["toolCalls"]
              ? p.message?.["toolCalls"]
              : p.message?.["toolCalls"],
            functionCall: !p.message?.functionCall
              ? undefined
              : {
                  name: p.message?.functionCall?.["name"],
                  arguments: p.message?.functionCall?.["arguments"],
                },
            context: !p.message?.context
              ? undefined
              : {
                  messages: !p.message?.context?.["messages"]
                    ? p.message?.context?.["messages"]
                    : p.message?.context?.["messages"].map((p) => ({
                        role: p["role"],
                        content: p["content"],
                        toolCalls: !p["toolCalls"]
                          ? p["toolCalls"]
                          : p["toolCalls"],
                        functionCall: !p.functionCall
                          ? undefined
                          : {
                              name: p.functionCall?.["name"],
                              arguments: p.functionCall?.["arguments"],
                            },
                        context: !p.context ? undefined : p.context,
                      })),
                },
          },
      index: p["index"],
      finishReason: p["finishReason"],
      finishDetails: !p.finishDetails
        ? undefined
        : { type: p.finishDetails?.["type"] },
      delta: !p.delta
        ? undefined
        : {
            role: p.delta?.["role"],
            content: p.delta?.["content"],
            toolCalls: !p.delta?.["toolCalls"]
              ? p.delta?.["toolCalls"]
              : p.delta?.["toolCalls"],
            functionCall: !p.delta?.functionCall
              ? undefined
              : {
                  name: p.delta?.functionCall?.["name"],
                  arguments: p.delta?.functionCall?.["arguments"],
                },
            context: !p.delta?.context
              ? undefined
              : {
                  messages: !p.delta?.context?.["messages"]
                    ? p.delta?.context?.["messages"]
                    : p.delta?.context?.["messages"].map((p) => ({
                        role: p["role"],
                        content: p["content"],
                        toolCalls: !p["toolCalls"]
                          ? p["toolCalls"]
                          : p["toolCalls"],
                        functionCall: !p.functionCall
                          ? undefined
                          : {
                              name: p.functionCall?.["name"],
                              arguments: p.functionCall?.["arguments"],
                            },
                        context: !p.context ? undefined : p.context,
                      })),
                },
          },
      contentFilterResults: !p.contentFilterResults
        ? undefined
        : {
            sexual: !p.contentFilterResults?.sexual
              ? undefined
              : {
                  severity: p.contentFilterResults?.sexual?.["severity"],
                  filtered: p.contentFilterResults?.sexual?.["filtered"],
                },
            violence: !p.contentFilterResults?.violence
              ? undefined
              : {
                  severity: p.contentFilterResults?.violence?.["severity"],
                  filtered: p.contentFilterResults?.violence?.["filtered"],
                },
            hate: !p.contentFilterResults?.hate
              ? undefined
              : {
                  severity: p.contentFilterResults?.hate?.["severity"],
                  filtered: p.contentFilterResults?.hate?.["filtered"],
                },
            selfHarm: !p.contentFilterResults?.selfHarm
              ? undefined
              : {
                  severity: p.contentFilterResults?.selfHarm?.["severity"],
                  filtered: p.contentFilterResults?.selfHarm?.["filtered"],
                },
            profanity: !p.contentFilterResults?.profanity
              ? undefined
              : {
                  filtered: p.contentFilterResults?.profanity?.["filtered"],
                  detected: p.contentFilterResults?.profanity?.["detected"],
                },
            customBlocklists: !p.contentFilterResults?.["customBlocklists"]
              ? p.contentFilterResults?.["customBlocklists"]
              : p.contentFilterResults?.["customBlocklists"].map((p) => ({
                  id: p["id"],
                  filtered: p["filtered"],
                })),
            error: !p.contentFilterResults?.error
              ? undefined
              : p.contentFilterResults?.error,
            protectedMaterialText: !p.contentFilterResults
              ?.protectedMaterialText
              ? undefined
              : {
                  filtered:
                    p.contentFilterResults?.protectedMaterialText?.["filtered"],
                  detected:
                    p.contentFilterResults?.protectedMaterialText?.["detected"],
                },
            protectedMaterialCode: !p.contentFilterResults
              ?.protectedMaterialCode
              ? undefined
              : {
                  filtered:
                    p.contentFilterResults?.protectedMaterialCode?.["filtered"],
                  detected:
                    p.contentFilterResults?.protectedMaterialCode?.["detected"],
                  url: p.contentFilterResults?.protectedMaterialCode?.["url"],
                  license:
                    p.contentFilterResults?.protectedMaterialCode?.["license"],
                },
          },
      enhancements: !p.enhancements
        ? undefined
        : {
            grounding: !p.enhancements?.grounding
              ? undefined
              : {
                  lines: p.enhancements?.grounding?.["lines"].map((p) => ({
                    text: p["text"],
                    spans: p["spans"].map((p) => ({
                      text: p["text"],
                      offset: p["offset"],
                      length: p["length"],
                      polygon: p["polygon"].map((p) => ({
                        x: p["x"],
                        y: p["y"],
                      })),
                    })),
                  })),
                },
          },
    })),
    promptFilterResults: !result.body["promptFilterResults"]
      ? result.body["promptFilterResults"]
      : result.body["promptFilterResults"].map((p) => ({
          promptIndex: p["promptIndex"],
          contentFilterResults: {
            sexual: !p.contentFilterResults.sexual
              ? undefined
              : {
                  severity: p.contentFilterResults.sexual?.["severity"],
                  filtered: p.contentFilterResults.sexual?.["filtered"],
                },
            violence: !p.contentFilterResults.violence
              ? undefined
              : {
                  severity: p.contentFilterResults.violence?.["severity"],
                  filtered: p.contentFilterResults.violence?.["filtered"],
                },
            hate: !p.contentFilterResults.hate
              ? undefined
              : {
                  severity: p.contentFilterResults.hate?.["severity"],
                  filtered: p.contentFilterResults.hate?.["filtered"],
                },
            selfHarm: !p.contentFilterResults.selfHarm
              ? undefined
              : {
                  severity: p.contentFilterResults.selfHarm?.["severity"],
                  filtered: p.contentFilterResults.selfHarm?.["filtered"],
                },
            profanity: !p.contentFilterResults.profanity
              ? undefined
              : {
                  filtered: p.contentFilterResults.profanity?.["filtered"],
                  detected: p.contentFilterResults.profanity?.["detected"],
                },
            customBlocklists: !p.contentFilterResults["customBlocklists"]
              ? p.contentFilterResults["customBlocklists"]
              : p.contentFilterResults["customBlocklists"].map((p) => ({
                  id: p["id"],
                  filtered: p["filtered"],
                })),
            error: !p.contentFilterResults.error
              ? undefined
              : p.contentFilterResults.error,
            jailbreak: !p.contentFilterResults.jailbreak
              ? undefined
              : {
                  filtered: p.contentFilterResults.jailbreak?.["filtered"],
                  detected: p.contentFilterResults.jailbreak?.["detected"],
                },
          },
        })),
    systemFingerprint: result.body["systemFingerprint"],
    usage: {
      completionTokens: result.body.usage["completionTokens"],
      promptTokens: result.body.usage["promptTokens"],
      totalTokens: result.body.usage["totalTokens"],
    },
  };
}

/**
 * Gets chat completions for the provided chat messages.
 * This is an Azure-specific version of chat completions that supports integration with configured data sources and
 * other augmentations to the base chat completions capabilities.
 */
export async function getChatCompletionsWithAzureExtensions(
  context: Client,
  deploymentId: string,
  body: ChatCompletionsOptions,
  options: GetChatCompletionsWithAzureExtensionsOptions = {
    requestOptions: {},
  },
): Promise<ChatCompletions> {
  const result = await _getChatCompletionsWithAzureExtensionsSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getChatCompletionsWithAzureExtensionsDeserialize(result);
}

export function _getImageGenerationsSend(
  context: Client,
  deploymentId: string,
  body: ImageGenerationOptions,
  options: GetImageGenerationsOptions = { requestOptions: {} },
): StreamableMethod<
  GetImageGenerations200Response | GetImageGenerationsDefaultResponse
> {
  return context
    .path("/deployments/{deploymentId}/images/generations", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        model: body["model"],
        prompt: body["prompt"],
        n: body["n"],
        size: body["size"],
        responseFormat: body["responseFormat"],
        quality: body["quality"],
        style: body["style"],
        user: body["user"],
      },
    });
}

export async function _getImageGenerationsDeserialize(
  result: GetImageGenerations200Response | GetImageGenerationsDefaultResponse,
): Promise<ImageGenerations> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    created: new Date(result.body["created"]),
    data: result.body["data"].map((p) => ({
      url: p["url"],
      base64Data: p["base64Data"],
      revisedPrompt: p["revisedPrompt"],
    })),
  };
}

/** Creates an image given a prompt. */
export async function getImageGenerations(
  context: Client,
  deploymentId: string,
  body: ImageGenerationOptions,
  options: GetImageGenerationsOptions = { requestOptions: {} },
): Promise<ImageGenerations> {
  const result = await _getImageGenerationsSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getImageGenerationsDeserialize(result);
}

export function _getEmbeddingsSend(
  context: Client,
  deploymentId: string,
  body: EmbeddingsOptions,
  options: GetEmbeddingsOptions = { requestOptions: {} },
): StreamableMethod<GetEmbeddings200Response | GetEmbeddingsDefaultResponse> {
  return context
    .path("/deployments/{deploymentId}/embeddings", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { user: body["user"], model: body["model"], input: body["input"] },
    });
}

export async function _getEmbeddingsDeserialize(
  result: GetEmbeddings200Response | GetEmbeddingsDefaultResponse,
): Promise<Embeddings> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    data: result.body["data"].map((p) => ({
      embedding: p["embedding"],
      index: p["index"],
    })),
    usage: {
      promptTokens: result.body.usage["promptTokens"],
      totalTokens: result.body.usage["totalTokens"],
    },
  };
}

/** Return the embeddings for a given prompt. */
export async function getEmbeddings(
  context: Client,
  deploymentId: string,
  body: EmbeddingsOptions,
  options: GetEmbeddingsOptions = { requestOptions: {} },
): Promise<Embeddings> {
  const result = await _getEmbeddingsSend(context, deploymentId, body, options);
  return _getEmbeddingsDeserialize(result);
}
