// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  chatRequestMessageUnionSerializer,
  functionDefinitionSerializer,
  azureChatExtensionConfigurationUnionSerializer,
  azureChatEnhancementConfigurationSerializer,
  chatCompletionsResponseFormatUnionSerializer,
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
  SpeechGenerationOptions,
  EmbeddingsOptions,
  Embeddings,
  FilePurpose,
  FileListResponse,
  OpenAIFile,
  FileDeletionStatus,
  OpenAIPageableListOfBatch,
  Batch,
  BatchCreateRequest,
} from "../models/models.js";
import { OpenAIContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
import { serializeRecord } from "../helpers/serializerHelpers.js";
import {
  GetAudioTranscriptionAsPlainTextOptionalParams,
  GetAudioTranscriptionAsResponseObjectOptionalParams,
  GetAudioTranslationAsPlainTextOptionalParams,
  GetAudioTranslationAsResponseObjectOptionalParams,
  GetCompletionsOptionalParams,
  GetChatCompletionsOptionalParams,
  GetImageGenerationsOptionalParams,
  GenerateSpeechFromTextOptionalParams,
  GetEmbeddingsOptionalParams,
  ListFilesOptionalParams,
  UploadFileOptionalParams,
  DeleteFileOptionalParams,
  GetFileOptionalParams,
  GetFileContentOptionalParams,
  ListBatchesOptionalParams,
  CreateBatchOptionalParams,
  GetBatchOptionalParams,
  CancelBatchOptionalParams,
} from "../models/options.js";

export function _getAudioTranscriptionAsPlainTextSend(
  context: Client,
  deploymentId: string,
  body: AudioTranscriptionOptions,
  options: GetAudioTranscriptionAsPlainTextOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/deployments/{deploymentId}/audio/transcriptions", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      queryParameters: {
        "api-version": options?.apiVersion ?? "2024-07-01-preview",
      },
      body: {
        file: uint8ArrayToString(body["file"], "base64"),
        filename: body["filename"],
        response_format: body["responseFormat"],
        language: body["language"],
        prompt: body["prompt"],
        temperature: body["temperature"],
        timestamp_granularities: body["timestampGranularities"],
        model: body["model"],
      },
    });
}

export async function _getAudioTranscriptionAsPlainTextDeserialize(
  result: PathUncheckedResponse,
): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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
  options: GetAudioTranscriptionAsPlainTextOptionalParams = {
    requestOptions: {},
  },
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
  options: GetAudioTranscriptionAsResponseObjectOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/deployments/{deploymentId}/audio/transcriptions", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      queryParameters: {
        "api-version": options?.apiVersion ?? "2024-07-01-preview",
      },
      body: {
        file: uint8ArrayToString(body["file"], "base64"),
        filename: body["filename"],
        response_format: body["responseFormat"],
        language: body["language"],
        prompt: body["prompt"],
        temperature: body["temperature"],
        timestamp_granularities: body["timestampGranularities"],
        model: body["model"],
      },
    });
}

export async function _getAudioTranscriptionAsResponseObjectDeserialize(
  result: PathUncheckedResponse,
): Promise<AudioTranscription> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    text: result.body["text"],
    task: result.body["task"],
    language: result.body["language"],
    duration: result.body["duration"],
    segments:
      result.body["segments"] === undefined
        ? result.body["segments"]
        : result.body["segments"].map((p: any) => {
            return {
              id: p["id"],
              start: p["start"],
              end: p["end"],
              text: p["text"],
              temperature: p["temperature"],
              avgLogprob: p["avg_logprob"],
              compressionRatio: p["compression_ratio"],
              noSpeechProb: p["no_speech_prob"],
              tokens: p["tokens"],
              seek: p["seek"],
            };
          }),
    words:
      result.body["words"] === undefined
        ? result.body["words"]
        : result.body["words"].map((p: any) => {
            return { word: p["word"], start: p["start"], end: p["end"] };
          }),
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
  options: GetAudioTranscriptionAsResponseObjectOptionalParams = {
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
  options: GetAudioTranslationAsPlainTextOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/deployments/{deploymentId}/audio/translations", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      queryParameters: {
        "api-version": options?.apiVersion ?? "2024-07-01-preview",
      },
      body: {
        file: uint8ArrayToString(body["file"], "base64"),
        filename: body["filename"],
        response_format: body["responseFormat"],
        prompt: body["prompt"],
        temperature: body["temperature"],
        model: body["model"],
      },
    });
}

export async function _getAudioTranslationAsPlainTextDeserialize(
  result: PathUncheckedResponse,
): Promise<string> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Gets English language transcribed text and associated metadata from provided spoken audio data. */
export async function getAudioTranslationAsPlainText(
  context: Client,
  deploymentId: string,
  body: AudioTranslationOptions,
  options: GetAudioTranslationAsPlainTextOptionalParams = {
    requestOptions: {},
  },
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
  options: GetAudioTranslationAsResponseObjectOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/deployments/{deploymentId}/audio/translations", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      queryParameters: {
        "api-version": options?.apiVersion ?? "2024-07-01-preview",
      },
      body: {
        file: uint8ArrayToString(body["file"], "base64"),
        filename: body["filename"],
        response_format: body["responseFormat"],
        prompt: body["prompt"],
        temperature: body["temperature"],
        model: body["model"],
      },
    });
}

export async function _getAudioTranslationAsResponseObjectDeserialize(
  result: PathUncheckedResponse,
): Promise<AudioTranslation> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    text: result.body["text"],
    task: result.body["task"],
    language: result.body["language"],
    duration: result.body["duration"],
    segments:
      result.body["segments"] === undefined
        ? result.body["segments"]
        : result.body["segments"].map((p: any) => {
            return {
              id: p["id"],
              start: p["start"],
              end: p["end"],
              text: p["text"],
              temperature: p["temperature"],
              avgLogprob: p["avg_logprob"],
              compressionRatio: p["compression_ratio"],
              noSpeechProb: p["no_speech_prob"],
              tokens: p["tokens"],
              seek: p["seek"],
            };
          }),
  };
}

/** Gets English language transcribed text and associated metadata from provided spoken audio data. */
export async function getAudioTranslationAsResponseObject(
  context: Client,
  deploymentId: string,
  body: AudioTranslationOptions,
  options: GetAudioTranslationAsResponseObjectOptionalParams = {
    requestOptions: {},
  },
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
  options: GetCompletionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/deployments/{deploymentId}/completions", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2024-07-01-preview",
      },
      body: {
        prompt: body["prompt"],
        max_tokens: body["maxTokens"],
        temperature: body["temperature"],
        top_p: body["topP"],
        logit_bias: !body.logitBias
          ? body.logitBias
          : (serializeRecord(body.logitBias as any) as any),
        user: body["user"],
        n: body["n"],
        logprobs: body["logprobs"],
        suffix: body["suffix"],
        echo: body["echo"],
        stop: body["stop"],
        presence_penalty: body["presencePenalty"],
        frequency_penalty: body["frequencyPenalty"],
        best_of: body["bestOf"],
        stream: body["stream"],
        model: body["model"],
      },
    });
}

export async function _getCompletionsDeserialize(
  result: PathUncheckedResponse,
): Promise<Completions> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    created: new Date(result.body["created"]),
    promptFilterResults:
      result.body["prompt_filter_results"] === undefined
        ? result.body["prompt_filter_results"]
        : result.body["prompt_filter_results"].map((p: any) => {
            return {
              promptIndex: p["prompt_index"],
              contentFilterResults: {
                sexual: !p.content_filter_results.sexual
                  ? undefined
                  : {
                      filtered: p.content_filter_results.sexual?.["filtered"],
                      severity: p.content_filter_results.sexual?.["severity"],
                    },
                violence: !p.content_filter_results.violence
                  ? undefined
                  : {
                      filtered: p.content_filter_results.violence?.["filtered"],
                      severity: p.content_filter_results.violence?.["severity"],
                    },
                hate: !p.content_filter_results.hate
                  ? undefined
                  : {
                      filtered: p.content_filter_results.hate?.["filtered"],
                      severity: p.content_filter_results.hate?.["severity"],
                    },
                selfHarm: !p.content_filter_results.self_harm
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.self_harm?.["filtered"],
                      severity:
                        p.content_filter_results.self_harm?.["severity"],
                    },
                profanity: !p.content_filter_results.profanity
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.profanity?.["filtered"],
                      detected:
                        p.content_filter_results.profanity?.["detected"],
                    },
                customBlocklists: !p.content_filter_results.custom_blocklists
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.custom_blocklists?.[
                          "filtered"
                        ],
                      details: p.content_filter_results.custom_blocklists?.[
                        "details"
                      ].map((p: any) => {
                        return { filtered: p["filtered"], id: p["id"] };
                      }),
                    },
                error: !p.content_filter_results.error
                  ? undefined
                  : p.content_filter_results.error,
                jailbreak: !p.content_filter_results.jailbreak
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.jailbreak?.["filtered"],
                      detected:
                        p.content_filter_results.jailbreak?.["detected"],
                    },
                indirectAttack: !p.content_filter_results.indirect_attack
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.indirect_attack?.["filtered"],
                      detected:
                        p.content_filter_results.indirect_attack?.["detected"],
                    },
              },
            };
          }),
    choices: result.body["choices"].map((p: any) => {
      return {
        text: p["text"],
        index: p["index"],
        contentFilterResults: !p.content_filter_results
          ? undefined
          : {
              sexual: !p.content_filter_results?.sexual
                ? undefined
                : {
                    filtered: p.content_filter_results?.sexual?.["filtered"],
                    severity: p.content_filter_results?.sexual?.["severity"],
                  },
              violence: !p.content_filter_results?.violence
                ? undefined
                : {
                    filtered: p.content_filter_results?.violence?.["filtered"],
                    severity: p.content_filter_results?.violence?.["severity"],
                  },
              hate: !p.content_filter_results?.hate
                ? undefined
                : {
                    filtered: p.content_filter_results?.hate?.["filtered"],
                    severity: p.content_filter_results?.hate?.["severity"],
                  },
              selfHarm: !p.content_filter_results?.self_harm
                ? undefined
                : {
                    filtered: p.content_filter_results?.self_harm?.["filtered"],
                    severity: p.content_filter_results?.self_harm?.["severity"],
                  },
              profanity: !p.content_filter_results?.profanity
                ? undefined
                : {
                    filtered: p.content_filter_results?.profanity?.["filtered"],
                    detected: p.content_filter_results?.profanity?.["detected"],
                  },
              customBlocklists: !p.content_filter_results?.custom_blocklists
                ? undefined
                : {
                    filtered:
                      p.content_filter_results?.custom_blocklists?.["filtered"],
                    details: p.content_filter_results?.custom_blocklists?.[
                      "details"
                    ].map((p: any) => {
                      return { filtered: p["filtered"], id: p["id"] };
                    }),
                  },
              error: !p.content_filter_results?.error
                ? undefined
                : p.content_filter_results?.error,
              protectedMaterialText: !p.content_filter_results
                ?.protected_material_text
                ? undefined
                : {
                    filtered:
                      p.content_filter_results?.protected_material_text?.[
                        "filtered"
                      ],
                    detected:
                      p.content_filter_results?.protected_material_text?.[
                        "detected"
                      ],
                  },
              protectedMaterialCode: !p.content_filter_results
                ?.protected_material_code
                ? undefined
                : {
                    filtered:
                      p.content_filter_results?.protected_material_code?.[
                        "filtered"
                      ],
                    detected:
                      p.content_filter_results?.protected_material_code?.[
                        "detected"
                      ],
                    url: p.content_filter_results?.protected_material_code?.[
                      "URL"
                    ],
                    license:
                      p.content_filter_results?.protected_material_code?.[
                        "license"
                      ],
                  },
            },
        logprobs:
          p.logprobs === null
            ? null
            : {
                tokens: p.logprobs["tokens"],
                tokenLogprobs: p.logprobs["token_logprobs"],
                topLogprobs: p.logprobs["top_logprobs"],
                textOffset: p.logprobs["text_offset"],
              },
        finishReason: p["finish_reason"],
      };
    }),
    usage: {
      completionTokens: result.body.usage["completion_tokens"],
      promptTokens: result.body.usage["prompt_tokens"],
      totalTokens: result.body.usage["total_tokens"],
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
  options: GetCompletionsOptionalParams = { requestOptions: {} },
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
  options: GetChatCompletionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/deployments/{deploymentId}/chat/completions", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2024-07-01-preview",
      },
      body: {
        messages: body["messages"].map((p) =>
          chatRequestMessageUnionSerializer(p),
        ),
        functions:
          body["functions"] === undefined
            ? body["functions"]
            : body["functions"].map(functionDefinitionSerializer),
        function_call: body["functionCall"],
        max_tokens: body["maxTokens"],
        temperature: body["temperature"],
        top_p: body["topP"],
        logit_bias: !body.logitBias
          ? body.logitBias
          : (serializeRecord(body.logitBias as any) as any),
        user: body["user"],
        n: body["n"],
        stop: body["stop"],
        presence_penalty: body["presencePenalty"],
        frequency_penalty: body["frequencyPenalty"],
        stream: body["stream"],
        model: body["model"],
        data_sources:
          body["dataSources"] === undefined
            ? body["dataSources"]
            : body["dataSources"].map((p) =>
                azureChatExtensionConfigurationUnionSerializer(p),
              ),
        enhancements: !body.enhancements
          ? body.enhancements
          : azureChatEnhancementConfigurationSerializer(body.enhancements),
        seed: body["seed"],
        logprobs: body["logprobs"],
        top_logprobs: body["topLogprobs"],
        response_format: !body.responseFormat
          ? body.responseFormat
          : chatCompletionsResponseFormatUnionSerializer(body.responseFormat),
        tools: body["tools"],
        tool_choice: body["toolChoice"],
      },
    });
}

export async function _getChatCompletionsDeserialize(
  result: PathUncheckedResponse,
): Promise<ChatCompletions> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    created: new Date(result.body["created"]),
    choices: result.body["choices"].map((p: any) => {
      return {
        message: !p.message
          ? undefined
          : {
              role: p.message?.["role"],
              content: p.message?.["content"],
              toolCalls:
                p.message?.["tool_calls"] === undefined
                  ? p.message?.["tool_calls"]
                  : p.message?.["tool_calls"],
              functionCall: !p.message?.function_call
                ? undefined
                : {
                    name: p.message?.function_call?.["name"],
                    arguments: p.message?.function_call?.["arguments"],
                  },
              context: !p.message?.context
                ? undefined
                : {
                    citations:
                      p.message?.context?.["citations"] === undefined
                        ? p.message?.context?.["citations"]
                        : p.message?.context?.["citations"].map((p: any) => {
                            return {
                              content: p["content"],
                              title: p["title"],
                              url: p["url"],
                              filepath: p["filepath"],
                              chunkId: p["chunk_id"],
                            };
                          }),
                    intent: p.message?.context?.["intent"],
                    allRetrievedDocuments:
                      p.message?.context?.["all_retrieved_documents"] ===
                      undefined
                        ? p.message?.context?.["all_retrieved_documents"]
                        : p.message?.context?.["all_retrieved_documents"].map(
                            (p: any) => {
                              return {
                                content: p["content"],
                                title: p["title"],
                                url: p["url"],
                                filepath: p["filepath"],
                                chunkId: p["chunk_id"],
                                searchQueries: p["search_queries"],
                                dataSourceIndex: p["data_source_index"],
                                originalSearchScore: p["original_search_score"],
                                rerankScore: p["rerank_score"],
                                filterReason: p["filter_reason"],
                              };
                            },
                          ),
                  },
            },
        logprobs:
          p.logprobs === null
            ? null
            : {
                content:
                  p.logprobs["content"] === null
                    ? p.logprobs["content"]
                    : p.logprobs["content"].map((p: any) => {
                        return {
                          token: p["token"],
                          logprob: p["logprob"],
                          bytes: p["bytes"],
                          topLogprobs:
                            p["top_logprobs"] === null
                              ? p["top_logprobs"]
                              : p["top_logprobs"].map((p: any) => {
                                  return {
                                    token: p["token"],
                                    logprob: p["logprob"],
                                    bytes: p["bytes"],
                                  };
                                }),
                        };
                      }),
              },
        index: p["index"],
        finishReason: p["finish_reason"],
        delta: !p.delta
          ? undefined
          : {
              role: p.delta?.["role"],
              content: p.delta?.["content"],
              toolCalls:
                p.delta?.["tool_calls"] === undefined
                  ? p.delta?.["tool_calls"]
                  : p.delta?.["tool_calls"],
              functionCall: !p.delta?.function_call
                ? undefined
                : {
                    name: p.delta?.function_call?.["name"],
                    arguments: p.delta?.function_call?.["arguments"],
                  },
              context: !p.delta?.context
                ? undefined
                : {
                    citations:
                      p.delta?.context?.["citations"] === undefined
                        ? p.delta?.context?.["citations"]
                        : p.delta?.context?.["citations"].map((p: any) => {
                            return {
                              content: p["content"],
                              title: p["title"],
                              url: p["url"],
                              filepath: p["filepath"],
                              chunkId: p["chunk_id"],
                            };
                          }),
                    intent: p.delta?.context?.["intent"],
                    allRetrievedDocuments:
                      p.delta?.context?.["all_retrieved_documents"] ===
                      undefined
                        ? p.delta?.context?.["all_retrieved_documents"]
                        : p.delta?.context?.["all_retrieved_documents"].map(
                            (p: any) => {
                              return {
                                content: p["content"],
                                title: p["title"],
                                url: p["url"],
                                filepath: p["filepath"],
                                chunkId: p["chunk_id"],
                                searchQueries: p["search_queries"],
                                dataSourceIndex: p["data_source_index"],
                                originalSearchScore: p["original_search_score"],
                                rerankScore: p["rerank_score"],
                                filterReason: p["filter_reason"],
                              };
                            },
                          ),
                  },
            },
        contentFilterResults: !p.content_filter_results
          ? undefined
          : {
              sexual: !p.content_filter_results?.sexual
                ? undefined
                : {
                    filtered: p.content_filter_results?.sexual?.["filtered"],
                    severity: p.content_filter_results?.sexual?.["severity"],
                  },
              violence: !p.content_filter_results?.violence
                ? undefined
                : {
                    filtered: p.content_filter_results?.violence?.["filtered"],
                    severity: p.content_filter_results?.violence?.["severity"],
                  },
              hate: !p.content_filter_results?.hate
                ? undefined
                : {
                    filtered: p.content_filter_results?.hate?.["filtered"],
                    severity: p.content_filter_results?.hate?.["severity"],
                  },
              selfHarm: !p.content_filter_results?.self_harm
                ? undefined
                : {
                    filtered: p.content_filter_results?.self_harm?.["filtered"],
                    severity: p.content_filter_results?.self_harm?.["severity"],
                  },
              profanity: !p.content_filter_results?.profanity
                ? undefined
                : {
                    filtered: p.content_filter_results?.profanity?.["filtered"],
                    detected: p.content_filter_results?.profanity?.["detected"],
                  },
              customBlocklists: !p.content_filter_results?.custom_blocklists
                ? undefined
                : {
                    filtered:
                      p.content_filter_results?.custom_blocklists?.["filtered"],
                    details: p.content_filter_results?.custom_blocklists?.[
                      "details"
                    ].map((p: any) => {
                      return { filtered: p["filtered"], id: p["id"] };
                    }),
                  },
              error: !p.content_filter_results?.error
                ? undefined
                : p.content_filter_results?.error,
              protectedMaterialText: !p.content_filter_results
                ?.protected_material_text
                ? undefined
                : {
                    filtered:
                      p.content_filter_results?.protected_material_text?.[
                        "filtered"
                      ],
                    detected:
                      p.content_filter_results?.protected_material_text?.[
                        "detected"
                      ],
                  },
              protectedMaterialCode: !p.content_filter_results
                ?.protected_material_code
                ? undefined
                : {
                    filtered:
                      p.content_filter_results?.protected_material_code?.[
                        "filtered"
                      ],
                    detected:
                      p.content_filter_results?.protected_material_code?.[
                        "detected"
                      ],
                    url: p.content_filter_results?.protected_material_code?.[
                      "URL"
                    ],
                    license:
                      p.content_filter_results?.protected_material_code?.[
                        "license"
                      ],
                  },
            },
        enhancements: !p.enhancements
          ? undefined
          : {
              grounding: !p.enhancements?.grounding
                ? undefined
                : {
                    lines: p.enhancements?.grounding?.["lines"].map(
                      (p: any) => {
                        return {
                          text: p["text"],
                          spans: p["spans"].map((p: any) => {
                            return {
                              text: p["text"],
                              offset: p["offset"],
                              length: p["length"],
                              polygon: p["polygon"].map((p: any) => {
                                return { x: p["x"], y: p["y"] };
                              }),
                            };
                          }),
                        };
                      },
                    ),
                  },
            },
      };
    }),
    model: result.body["model"],
    promptFilterResults:
      result.body["prompt_filter_results"] === undefined
        ? result.body["prompt_filter_results"]
        : result.body["prompt_filter_results"].map((p: any) => {
            return {
              promptIndex: p["prompt_index"],
              contentFilterResults: {
                sexual: !p.content_filter_results.sexual
                  ? undefined
                  : {
                      filtered: p.content_filter_results.sexual?.["filtered"],
                      severity: p.content_filter_results.sexual?.["severity"],
                    },
                violence: !p.content_filter_results.violence
                  ? undefined
                  : {
                      filtered: p.content_filter_results.violence?.["filtered"],
                      severity: p.content_filter_results.violence?.["severity"],
                    },
                hate: !p.content_filter_results.hate
                  ? undefined
                  : {
                      filtered: p.content_filter_results.hate?.["filtered"],
                      severity: p.content_filter_results.hate?.["severity"],
                    },
                selfHarm: !p.content_filter_results.self_harm
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.self_harm?.["filtered"],
                      severity:
                        p.content_filter_results.self_harm?.["severity"],
                    },
                profanity: !p.content_filter_results.profanity
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.profanity?.["filtered"],
                      detected:
                        p.content_filter_results.profanity?.["detected"],
                    },
                customBlocklists: !p.content_filter_results.custom_blocklists
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.custom_blocklists?.[
                          "filtered"
                        ],
                      details: p.content_filter_results.custom_blocklists?.[
                        "details"
                      ].map((p: any) => {
                        return { filtered: p["filtered"], id: p["id"] };
                      }),
                    },
                error: !p.content_filter_results.error
                  ? undefined
                  : p.content_filter_results.error,
                jailbreak: !p.content_filter_results.jailbreak
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.jailbreak?.["filtered"],
                      detected:
                        p.content_filter_results.jailbreak?.["detected"],
                    },
                indirectAttack: !p.content_filter_results.indirect_attack
                  ? undefined
                  : {
                      filtered:
                        p.content_filter_results.indirect_attack?.["filtered"],
                      detected:
                        p.content_filter_results.indirect_attack?.["detected"],
                    },
              },
            };
          }),
    systemFingerprint: result.body["system_fingerprint"],
    usage: {
      completionTokens: result.body.usage["completion_tokens"],
      promptTokens: result.body.usage["prompt_tokens"],
      totalTokens: result.body.usage["total_tokens"],
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
  options: GetChatCompletionsOptionalParams = { requestOptions: {} },
): Promise<ChatCompletions> {
  const result = await _getChatCompletionsSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getChatCompletionsDeserialize(result);
}

export function _getImageGenerationsSend(
  context: Client,
  deploymentId: string,
  body: ImageGenerationOptions,
  options: GetImageGenerationsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/deployments/{deploymentId}/images/generations", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2024-07-01-preview",
      },
      body: {
        model: body["model"],
        prompt: body["prompt"],
        n: body["n"],
        size: body["size"],
        response_format: body["responseFormat"],
        quality: body["quality"],
        style: body["style"],
        user: body["user"],
      },
    });
}

export async function _getImageGenerationsDeserialize(
  result: PathUncheckedResponse,
): Promise<ImageGenerations> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    created: new Date(result.body["created"]),
    data: result.body["data"].map((p: any) => {
      return {
        url: p["url"],
        base64Data: p["b64_json"],
        contentFilterResults: !p.content_filter_results
          ? undefined
          : {
              sexual: !p.content_filter_results?.sexual
                ? undefined
                : {
                    filtered: p.content_filter_results?.sexual?.["filtered"],
                    severity: p.content_filter_results?.sexual?.["severity"],
                  },
              violence: !p.content_filter_results?.violence
                ? undefined
                : {
                    filtered: p.content_filter_results?.violence?.["filtered"],
                    severity: p.content_filter_results?.violence?.["severity"],
                  },
              hate: !p.content_filter_results?.hate
                ? undefined
                : {
                    filtered: p.content_filter_results?.hate?.["filtered"],
                    severity: p.content_filter_results?.hate?.["severity"],
                  },
              selfHarm: !p.content_filter_results?.self_harm
                ? undefined
                : {
                    filtered: p.content_filter_results?.self_harm?.["filtered"],
                    severity: p.content_filter_results?.self_harm?.["severity"],
                  },
            },
        revisedPrompt: p["revised_prompt"],
        promptFilterResults: !p.prompt_filter_results
          ? undefined
          : {
              sexual: !p.prompt_filter_results?.sexual
                ? undefined
                : {
                    filtered: p.prompt_filter_results?.sexual?.["filtered"],
                    severity: p.prompt_filter_results?.sexual?.["severity"],
                  },
              violence: !p.prompt_filter_results?.violence
                ? undefined
                : {
                    filtered: p.prompt_filter_results?.violence?.["filtered"],
                    severity: p.prompt_filter_results?.violence?.["severity"],
                  },
              hate: !p.prompt_filter_results?.hate
                ? undefined
                : {
                    filtered: p.prompt_filter_results?.hate?.["filtered"],
                    severity: p.prompt_filter_results?.hate?.["severity"],
                  },
              selfHarm: !p.prompt_filter_results?.self_harm
                ? undefined
                : {
                    filtered: p.prompt_filter_results?.self_harm?.["filtered"],
                    severity: p.prompt_filter_results?.self_harm?.["severity"],
                  },
              profanity: !p.prompt_filter_results?.profanity
                ? undefined
                : {
                    filtered: p.prompt_filter_results?.profanity?.["filtered"],
                    detected: p.prompt_filter_results?.profanity?.["detected"],
                  },
              jailbreak: !p.prompt_filter_results?.jailbreak
                ? undefined
                : {
                    filtered: p.prompt_filter_results?.jailbreak?.["filtered"],
                    detected: p.prompt_filter_results?.jailbreak?.["detected"],
                  },
              customBlocklists: !p.prompt_filter_results?.custom_blocklists
                ? undefined
                : {
                    filtered:
                      p.prompt_filter_results?.custom_blocklists?.["filtered"],
                    details: p.prompt_filter_results?.custom_blocklists?.[
                      "details"
                    ].map((p: any) => {
                      return { filtered: p["filtered"], id: p["id"] };
                    }),
                  },
            },
      };
    }),
  };
}

/** Creates an image given a prompt. */
export async function getImageGenerations(
  context: Client,
  deploymentId: string,
  body: ImageGenerationOptions,
  options: GetImageGenerationsOptionalParams = { requestOptions: {} },
): Promise<ImageGenerations> {
  const result = await _getImageGenerationsSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _getImageGenerationsDeserialize(result);
}

export function _generateSpeechFromTextSend(
  context: Client,
  deploymentId: string,
  body: SpeechGenerationOptions,
  options: GenerateSpeechFromTextOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/deployments/{deploymentId}/audio/speech", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2024-07-01-preview",
      },
      body: {
        input: body["input"],
        voice: body["voice"],
        response_format: body["responseFormat"],
        speed: body["speed"],
        model: body["model"],
      },
    });
}

export async function _generateSpeechFromTextDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
}

/** Generates text-to-speech audio from the input text. */
export async function generateSpeechFromText(
  context: Client,
  deploymentId: string,
  body: SpeechGenerationOptions,
  options: GenerateSpeechFromTextOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _generateSpeechFromTextSend(
    context,
    deploymentId,
    body,
    options,
  );
  return _generateSpeechFromTextDeserialize(result);
}

export function _getEmbeddingsSend(
  context: Client,
  deploymentId: string,
  body: EmbeddingsOptions,
  options: GetEmbeddingsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/deployments/{deploymentId}/embeddings", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2024-07-01-preview",
      },
      body: {
        user: body["user"],
        model: body["model"],
        input: body["input"],
        encoding_format: body["encodingFormat"],
        dimensions: body["dimensions"],
        input_type: body["inputType"],
      },
    });
}

export async function _getEmbeddingsDeserialize(
  result: PathUncheckedResponse,
): Promise<Embeddings> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    data: result.body["data"].map((p: any) => {
      return { embedding: p["embedding"], index: p["index"] };
    }),
    usage: {
      promptTokens: result.body.usage["prompt_tokens"],
      totalTokens: result.body.usage["total_tokens"],
    },
  };
}

/** Return the embeddings for a given prompt. */
export async function getEmbeddings(
  context: Client,
  deploymentId: string,
  body: EmbeddingsOptions,
  options: GetEmbeddingsOptionalParams = { requestOptions: {} },
): Promise<Embeddings> {
  const result = await _getEmbeddingsSend(context, deploymentId, body, options);
  return _getEmbeddingsDeserialize(result);
}

export function _listFilesSend(
  context: Client,
  options: ListFilesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/files")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { purpose: options?.purpose },
    });
}

export async function _listFilesDeserialize(
  result: PathUncheckedResponse,
): Promise<FileListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    object: result.body["object"],
    data: result.body["data"].map((p: any) => {
      return {
        object: p["object"],
        id: p["id"],
        bytes: p["bytes"],
        filename: p["filename"],
        createdAt: new Date(p["created_at"]),
        purpose: p["purpose"],
        status: p["status"],
        statusDetails: p["status_details"],
      };
    }),
  };
}

/** Gets a list of previously uploaded files. */
export async function listFiles(
  context: Client,
  options: ListFilesOptionalParams = { requestOptions: {} },
): Promise<FileListResponse> {
  const result = await _listFilesSend(context, options);
  return _listFilesDeserialize(result);
}

export function _uploadFileSend(
  context: Client,
  file: Uint8Array,
  purpose: FilePurpose,
  options: UploadFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/files")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        file: uint8ArrayToString(file, "base64"),
        purpose: purpose,
        filename: options?.filename,
      },
    });
}

export async function _uploadFileDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    object: result.body["object"],
    id: result.body["id"],
    bytes: result.body["bytes"],
    filename: result.body["filename"],
    createdAt: new Date(result.body["created_at"]),
    purpose: result.body["purpose"],
    status: result.body["status"],
    statusDetails: result.body["status_details"],
  };
}

/** Uploads a file for use by other operations. */
export async function uploadFile(
  context: Client,
  file: Uint8Array,
  purpose: FilePurpose,
  options: UploadFileOptionalParams = { requestOptions: {} },
): Promise<OpenAIFile> {
  const result = await _uploadFileSend(context, file, purpose, options);
  return _uploadFileDeserialize(result);
}

export function _deleteFileSend(
  context: Client,
  fileId: string,
  options: DeleteFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/files/{fileId}", fileId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteFileDeserialize(
  result: PathUncheckedResponse,
): Promise<FileDeletionStatus> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    deleted: result.body["deleted"],
    object: result.body["object"],
  };
}

/** Delete a previously uploaded file. */
export async function deleteFile(
  context: Client,
  fileId: string,
  options: DeleteFileOptionalParams = { requestOptions: {} },
): Promise<FileDeletionStatus> {
  const result = await _deleteFileSend(context, fileId, options);
  return _deleteFileDeserialize(result);
}

export function _getFileSend(
  context: Client,
  fileId: string,
  options: GetFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/files/{fileId}", fileId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getFileDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    object: result.body["object"],
    id: result.body["id"],
    bytes: result.body["bytes"],
    filename: result.body["filename"],
    createdAt: new Date(result.body["created_at"]),
    purpose: result.body["purpose"],
    status: result.body["status"],
    statusDetails: result.body["status_details"],
  };
}

/** Returns information about a specific file. Does not retrieve file content. */
export async function getFile(
  context: Client,
  fileId: string,
  options: GetFileOptionalParams = { requestOptions: {} },
): Promise<OpenAIFile> {
  const result = await _getFileSend(context, fileId, options);
  return _getFileDeserialize(result);
}

export function _getFileContentSend(
  context: Client,
  fileId: string,
  options: GetFileContentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/files/{fileId}/content", fileId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getFileContentDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return typeof result.body === "string"
    ? stringToUint8Array(result.body, "base64")
    : result.body;
}

/** Returns information about a specific file. Does not retrieve file content. */
export async function getFileContent(
  context: Client,
  fileId: string,
  options: GetFileContentOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _getFileContentSend(context, fileId, options);
  return _getFileContentDeserialize(result);
}

export function _listBatchesSend(
  context: Client,
  options: ListBatchesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/batches")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { after: options?.after, limit: options?.limit },
    });
}

export async function _listBatchesDeserialize(
  result: PathUncheckedResponse,
): Promise<OpenAIPageableListOfBatch> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    object: result.body["object"],
    data:
      result.body["data"] === undefined
        ? result.body["data"]
        : result.body["data"].map((p: any) => {
            return {
              id: p["id"],
              object: p["object"],
              endpoint: p["endpoint"],
              errors: !p.errors
                ? undefined
                : {
                    object: p.errors?.["object"],
                    data:
                      p.errors?.["data"] === undefined
                        ? p.errors?.["data"]
                        : p.errors?.["data"].map((p: any) => {
                            return {
                              code: p["code"],
                              message: p["message"],
                              param: p["param"],
                              line: p["line"],
                            };
                          }),
                  },
              inputFileId: p["input_file_id"],
              completionWindow: p["completion_window"],
              status: p["status"],
              outputFileId: p["output_file_id"],
              errorFileId: p["error_file_id"],
              createdAt:
                p["created_at"] !== undefined
                  ? new Date(p["created_at"])
                  : undefined,
              inProgressAt:
                p["in_progress_at"] !== undefined
                  ? new Date(p["in_progress_at"])
                  : undefined,
              expiresAt:
                p["expires_at"] !== undefined
                  ? new Date(p["expires_at"])
                  : undefined,
              finalizingAt:
                p["finalizing_at"] !== undefined
                  ? new Date(p["finalizing_at"])
                  : undefined,
              completedAt:
                p["completed_at"] !== undefined
                  ? new Date(p["completed_at"])
                  : undefined,
              failedAt:
                p["failed_at"] !== undefined
                  ? new Date(p["failed_at"])
                  : undefined,
              expiredAt:
                p["expired_at"] !== undefined
                  ? new Date(p["expired_at"])
                  : undefined,
              cancellingAt:
                p["cancelling_at"] !== undefined
                  ? new Date(p["cancelling_at"])
                  : undefined,
              cancelledAt:
                p["cancelled_at"] !== undefined
                  ? new Date(p["cancelled_at"])
                  : undefined,
              requestCounts: !p.request_counts
                ? undefined
                : {
                    total: p.request_counts?.["total"],
                    completed: p.request_counts?.["completed"],
                    failed: p.request_counts?.["failed"],
                  },
              metadata: p["metadata"],
            };
          }),
    firstId: result.body["first_id"],
    lastId: result.body["last_id"],
    hasMore: result.body["has_more"],
  };
}

/** Gets a list of all batches owned by the Azure OpenAI resource. */
export async function listBatches(
  context: Client,
  options: ListBatchesOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfBatch> {
  const result = await _listBatchesSend(context, options);
  return _listBatchesDeserialize(result);
}

export function _createBatchSend(
  context: Client,
  createBatchRequest: BatchCreateRequest,
  options: CreateBatchOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/batches")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        endpoint: createBatchRequest["endpoint"],
        input_file_id: createBatchRequest["inputFileId"],
        completion_window: createBatchRequest["completionWindow"],
        metadata: !createBatchRequest.metadata
          ? createBatchRequest.metadata
          : (serializeRecord(createBatchRequest.metadata as any) as any),
      },
    });
}

export async function _createBatchDeserialize(
  result: PathUncheckedResponse,
): Promise<Batch> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    endpoint: result.body["endpoint"],
    errors: !result.body.errors
      ? undefined
      : {
          object: result.body.errors?.["object"],
          data:
            result.body.errors?.["data"] === undefined
              ? result.body.errors?.["data"]
              : result.body.errors?.["data"].map((p: any) => {
                  return {
                    code: p["code"],
                    message: p["message"],
                    param: p["param"],
                    line: p["line"],
                  };
                }),
        },
    inputFileId: result.body["input_file_id"],
    completionWindow: result.body["completion_window"],
    status: result.body["status"],
    outputFileId: result.body["output_file_id"],
    errorFileId: result.body["error_file_id"],
    createdAt:
      result.body["created_at"] !== undefined
        ? new Date(result.body["created_at"])
        : undefined,
    inProgressAt:
      result.body["in_progress_at"] !== undefined
        ? new Date(result.body["in_progress_at"])
        : undefined,
    expiresAt:
      result.body["expires_at"] !== undefined
        ? new Date(result.body["expires_at"])
        : undefined,
    finalizingAt:
      result.body["finalizing_at"] !== undefined
        ? new Date(result.body["finalizing_at"])
        : undefined,
    completedAt:
      result.body["completed_at"] !== undefined
        ? new Date(result.body["completed_at"])
        : undefined,
    failedAt:
      result.body["failed_at"] !== undefined
        ? new Date(result.body["failed_at"])
        : undefined,
    expiredAt:
      result.body["expired_at"] !== undefined
        ? new Date(result.body["expired_at"])
        : undefined,
    cancellingAt:
      result.body["cancelling_at"] !== undefined
        ? new Date(result.body["cancelling_at"])
        : undefined,
    cancelledAt:
      result.body["cancelled_at"] !== undefined
        ? new Date(result.body["cancelled_at"])
        : undefined,
    requestCounts: !result.body.request_counts
      ? undefined
      : {
          total: result.body.request_counts?.["total"],
          completed: result.body.request_counts?.["completed"],
          failed: result.body.request_counts?.["failed"],
        },
    metadata: result.body["metadata"],
  };
}

/**
 * Creates and executes a batch from an uploaded file of requests.
 * Response includes details of the enqueued job including job status.
 * The ID of the result file is added to the response once complete.
 */
export async function createBatch(
  context: Client,
  createBatchRequest: BatchCreateRequest,
  options: CreateBatchOptionalParams = { requestOptions: {} },
): Promise<Batch> {
  const result = await _createBatchSend(context, createBatchRequest, options);
  return _createBatchDeserialize(result);
}

export function _getBatchSend(
  context: Client,
  batchId: string,
  options: GetBatchOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/batches/{batchId}", batchId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getBatchDeserialize(
  result: PathUncheckedResponse,
): Promise<Batch> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    endpoint: result.body["endpoint"],
    errors: !result.body.errors
      ? undefined
      : {
          object: result.body.errors?.["object"],
          data:
            result.body.errors?.["data"] === undefined
              ? result.body.errors?.["data"]
              : result.body.errors?.["data"].map((p: any) => {
                  return {
                    code: p["code"],
                    message: p["message"],
                    param: p["param"],
                    line: p["line"],
                  };
                }),
        },
    inputFileId: result.body["input_file_id"],
    completionWindow: result.body["completion_window"],
    status: result.body["status"],
    outputFileId: result.body["output_file_id"],
    errorFileId: result.body["error_file_id"],
    createdAt:
      result.body["created_at"] !== undefined
        ? new Date(result.body["created_at"])
        : undefined,
    inProgressAt:
      result.body["in_progress_at"] !== undefined
        ? new Date(result.body["in_progress_at"])
        : undefined,
    expiresAt:
      result.body["expires_at"] !== undefined
        ? new Date(result.body["expires_at"])
        : undefined,
    finalizingAt:
      result.body["finalizing_at"] !== undefined
        ? new Date(result.body["finalizing_at"])
        : undefined,
    completedAt:
      result.body["completed_at"] !== undefined
        ? new Date(result.body["completed_at"])
        : undefined,
    failedAt:
      result.body["failed_at"] !== undefined
        ? new Date(result.body["failed_at"])
        : undefined,
    expiredAt:
      result.body["expired_at"] !== undefined
        ? new Date(result.body["expired_at"])
        : undefined,
    cancellingAt:
      result.body["cancelling_at"] !== undefined
        ? new Date(result.body["cancelling_at"])
        : undefined,
    cancelledAt:
      result.body["cancelled_at"] !== undefined
        ? new Date(result.body["cancelled_at"])
        : undefined,
    requestCounts: !result.body.request_counts
      ? undefined
      : {
          total: result.body.request_counts?.["total"],
          completed: result.body.request_counts?.["completed"],
          failed: result.body.request_counts?.["failed"],
        },
    metadata: result.body["metadata"],
  };
}

/** Gets details for a single batch specified by the given batchID. */
export async function getBatch(
  context: Client,
  batchId: string,
  options: GetBatchOptionalParams = { requestOptions: {} },
): Promise<Batch> {
  const result = await _getBatchSend(context, batchId, options);
  return _getBatchDeserialize(result);
}

export function _cancelBatchSend(
  context: Client,
  batchId: string,
  options: CancelBatchOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/batches/{batchId}/cancel", batchId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _cancelBatchDeserialize(
  result: PathUncheckedResponse,
): Promise<Batch> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    endpoint: result.body["endpoint"],
    errors: !result.body.errors
      ? undefined
      : {
          object: result.body.errors?.["object"],
          data:
            result.body.errors?.["data"] === undefined
              ? result.body.errors?.["data"]
              : result.body.errors?.["data"].map((p: any) => {
                  return {
                    code: p["code"],
                    message: p["message"],
                    param: p["param"],
                    line: p["line"],
                  };
                }),
        },
    inputFileId: result.body["input_file_id"],
    completionWindow: result.body["completion_window"],
    status: result.body["status"],
    outputFileId: result.body["output_file_id"],
    errorFileId: result.body["error_file_id"],
    createdAt:
      result.body["created_at"] !== undefined
        ? new Date(result.body["created_at"])
        : undefined,
    inProgressAt:
      result.body["in_progress_at"] !== undefined
        ? new Date(result.body["in_progress_at"])
        : undefined,
    expiresAt:
      result.body["expires_at"] !== undefined
        ? new Date(result.body["expires_at"])
        : undefined,
    finalizingAt:
      result.body["finalizing_at"] !== undefined
        ? new Date(result.body["finalizing_at"])
        : undefined,
    completedAt:
      result.body["completed_at"] !== undefined
        ? new Date(result.body["completed_at"])
        : undefined,
    failedAt:
      result.body["failed_at"] !== undefined
        ? new Date(result.body["failed_at"])
        : undefined,
    expiredAt:
      result.body["expired_at"] !== undefined
        ? new Date(result.body["expired_at"])
        : undefined,
    cancellingAt:
      result.body["cancelling_at"] !== undefined
        ? new Date(result.body["cancelling_at"])
        : undefined,
    cancelledAt:
      result.body["cancelled_at"] !== undefined
        ? new Date(result.body["cancelled_at"])
        : undefined,
    requestCounts: !result.body.request_counts
      ? undefined
      : {
          total: result.body.request_counts?.["total"],
          completed: result.body.request_counts?.["completed"],
          failed: result.body.request_counts?.["failed"],
        },
    metadata: result.body["metadata"],
  };
}

/** Gets details for a single batch specified by the given batchID. */
export async function cancelBatch(
  context: Client,
  batchId: string,
  options: CancelBatchOptionalParams = { requestOptions: {} },
): Promise<Batch> {
  const result = await _cancelBatchSend(context, batchId, options);
  return _cancelBatchDeserialize(result);
}
