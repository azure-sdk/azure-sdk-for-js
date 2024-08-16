// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { serializeRecord } from "../helpers/serializerHelpers.js";

/** An abstract representation of a chat message as provided in a request. */
export interface ChatRequestMessage {
  /** the discriminator possible values: system, user, assistant, tool */
  role: ChatRole;
}

export function chatRequestMessageUnionSerializer(
  item: ChatRequestMessageUnion,
) {
  switch (item.role) {
    case "system":
      return chatRequestSystemMessageSerializer(
        item as ChatRequestSystemMessage,
      );

    case "user":
      return chatRequestUserMessageSerializer(item as ChatRequestUserMessage);

    case "assistant":
      return chatRequestAssistantMessageSerializer(
        item as ChatRequestAssistantMessage,
      );

    case "tool":
      return chatRequestToolMessageSerializer(item as ChatRequestToolMessage);

    default:
      return chatRequestMessageSerializer(item);
  }
}

export function chatRequestMessageSerializer(
  item: ChatRequestMessageUnion,
): Record<string, unknown> {
  return {
    ...chatRequestMessageUnionSerializer(item),
  };
}

/**
 * A request chat message containing system instructions that influence how the model will generate a chat completions
 * response.
 */
export interface ChatRequestSystemMessage extends ChatRequestMessage {
  /** The chat role associated with this message, which is always 'system' for system messages. */
  role: "system";
  /** The contents of the system message. */
  content: string;
}

export function chatRequestSystemMessageSerializer(
  item: ChatRequestSystemMessage,
): Record<string, unknown> {
  return {
    role: item["role"],
    content: item["content"],
  };
}

/** A request chat message representing user input to the assistant. */
export interface ChatRequestUserMessage extends ChatRequestMessage {
  /** The chat role associated with this message, which is always 'user' for user messages. */
  role: "user";
  /** The contents of the user message, with available input types varying by selected model. */
  content: string | ChatMessageContentItemUnion[];
}

export function chatRequestUserMessageSerializer(
  item: ChatRequestUserMessage,
): Record<string, unknown> {
  return {
    role: item["role"],
    content: item["content"] as any,
  };
}

/** An abstract representation of a structured content item within a chat message. */
export interface ChatMessageContentItem {
  /** the discriminator possible values: text, image_url */
  type: string;
}

export function chatMessageContentItemUnionSerializer(
  item: ChatMessageContentItemUnion,
) {
  switch (item.type) {
    case "text":
      return chatMessageTextContentItemSerializer(
        item as ChatMessageTextContentItem,
      );

    case "image_url":
      return chatMessageImageContentItemSerializer(
        item as ChatMessageImageContentItem,
      );

    default:
      return chatMessageContentItemSerializer(item);
  }
}

export function chatMessageContentItemSerializer(
  item: ChatMessageContentItemUnion,
): Record<string, unknown> {
  return {
    ...chatMessageContentItemUnionSerializer(item),
  };
}

/** A structured chat content item containing plain text. */
export interface ChatMessageTextContentItem extends ChatMessageContentItem {
  /** The discriminated object type: always 'text' for this type. */
  type: "text";
  /** The content of the message. */
  text: string;
}

export function chatMessageTextContentItemSerializer(
  item: ChatMessageTextContentItem,
): Record<string, unknown> {
  return {
    type: item["type"],
    text: item["text"],
  };
}

/** A structured chat content item containing an image reference. */
export interface ChatMessageImageContentItem extends ChatMessageContentItem {
  /** The discriminated object type: always 'image_url' for this type. */
  type: "image_url";
  /** An internet location, which must be accessible to the model,from which the image may be retrieved. */
  imageUrl: ChatMessageImageUrl;
}

export function chatMessageImageContentItemSerializer(
  item: ChatMessageImageContentItem,
): Record<string, unknown> {
  return {
    type: item["type"],
    image_url: chatMessageImageUrlSerializer(item.imageUrl),
  };
}

/** An internet location from which the model may retrieve an image. */
export interface ChatMessageImageUrl {
  /** The URL of the image. */
  url: string;
  /**
   * The evaluation quality setting to use, which controls relative prioritization of speed, token consumption, and
   * accuracy.
   */
  detail?: ChatMessageImageDetailLevel;
}

export function chatMessageImageUrlSerializer(
  item: ChatMessageImageUrl,
): Record<string, unknown> {
  return {
    url: item["url"],
    detail: item["detail"],
  };
}

/** A representation of the possible image detail levels for image-based chat completions message content. */
export type ChatMessageImageDetailLevel = "auto" | "low" | "high";

/** A request chat message representing response or action from the assistant. */
export interface ChatRequestAssistantMessage extends ChatRequestMessage {
  /** The chat role associated with this message, which is always 'assistant' for assistant messages. */
  role: "assistant";
  /** The content of the message. */
  content?: string | null;
  /**
   * The tool calls that must be resolved and have their outputs appended to subsequent input messages for the chat
   * completions request to resolve as configured.
   */
  toolCalls?: ChatCompletionsToolCall[];
}

export function chatRequestAssistantMessageSerializer(
  item: ChatRequestAssistantMessage,
): Record<string, unknown> {
  return {
    role: item["role"],
    content: item["content"],
    tool_calls:
      item["toolCalls"] === undefined
        ? item["toolCalls"]
        : item["toolCalls"].map(chatCompletionsToolCallSerializer),
  };
}

/** A function tool call requested by the AI model. */
export interface ChatCompletionsToolCall {
  /** The ID of the tool call. */
  id: string;
  /** The type of tool call. Currently, only `function` is supported. */
  type: "function";
  /** The details of the function call requested by the AI model. */
  function: FunctionCall;
}

export function chatCompletionsToolCallSerializer(
  item: ChatCompletionsToolCall,
): Record<string, unknown> {
  return {
    id: item["id"],
    type: item["type"],
    function: functionCallSerializer(item.function),
  };
}

/** The name and arguments of a function that should be called, as generated by the model. */
export interface FunctionCall {
  /** The name of the function to call. */
  name: string;
  /**
   * The arguments to call the function with, as generated by the model in JSON format.
   * Note that the model does not always generate valid JSON, and may hallucinate parameters
   * not defined by your function schema. Validate the arguments in your code before calling
   * your function.
   */
  arguments: string;
}

export function functionCallSerializer(
  item: FunctionCall,
): Record<string, unknown> {
  return {
    name: item["name"],
    arguments: item["arguments"],
  };
}

/** A request chat message representing requested output from a configured tool. */
export interface ChatRequestToolMessage extends ChatRequestMessage {
  /** The chat role associated with this message, which is always 'tool' for tool messages. */
  role: "tool";
  /** The content of the message. */
  content: string | null;
  /** The ID of the tool call resolved by the provided content. */
  toolCallId: string;
}

export function chatRequestToolMessageSerializer(
  item: ChatRequestToolMessage,
): Record<string, unknown> {
  return {
    role: item["role"],
    content: item["content"],
    tool_call_id: item["toolCallId"],
  };
}

/** A description of the intended purpose of a message within a chat completions interaction. */
export type ChatRole = "system" | "user" | "assistant" | "tool";

/**
 * Represents the format that the model must output. Use this to enable JSON mode instead of the default text mode.
 * Note that to enable JSON mode, some AI models may also require you to instruct the model to produce JSON
 * via a system or user message.
 */
export interface ChatCompletionsResponseFormat {
  /** the discriminator possible values: text, json_object */
  type: string;
}

export function chatCompletionsResponseFormatUnionSerializer(
  item: ChatCompletionsResponseFormatUnion,
) {
  switch (item.type) {
    case "text":
      return chatCompletionsResponseFormatTextSerializer(
        item as ChatCompletionsResponseFormatText,
      );

    case "json_object":
      return chatCompletionsResponseFormatJSONSerializer(
        item as ChatCompletionsResponseFormatJSON,
      );

    default:
      return chatCompletionsResponseFormatSerializer(item);
  }
}

export function chatCompletionsResponseFormatSerializer(
  item: ChatCompletionsResponseFormatUnion,
): Record<string, unknown> {
  return {
    type: item["type"],
  };
}

/** A response format for Chat Completions that emits text responses. This is the default response format. */
export interface ChatCompletionsResponseFormatText
  extends ChatCompletionsResponseFormat {
  /** Response format type: always 'text' for this object. */
  type: "text";
}

export function chatCompletionsResponseFormatTextSerializer(
  item: ChatCompletionsResponseFormatText,
): Record<string, unknown> {
  return {
    type: item["type"],
  };
}

/**
 * A response format for Chat Completions that restricts responses to emitting valid JSON objects.
 * Note that to enable JSON mode, some AI models may also require you to instruct the model to produce JSON
 * via a system or user message.
 */
export interface ChatCompletionsResponseFormatJSON
  extends ChatCompletionsResponseFormat {
  /** Response format type: always 'json_object' for this object. */
  type: "json_object";
}

export function chatCompletionsResponseFormatJSONSerializer(
  item: ChatCompletionsResponseFormatJSON,
): Record<string, unknown> {
  return {
    type: item["type"],
  };
}

/** The definition of a chat completions tool that can call a function. */
export interface ChatCompletionsToolDefinition {
  /** The type of the tool. Currently, only `function` is supported. */
  type: "function";
  /** The function definition details for the function tool. */
  function: FunctionDefinition;
}

export function chatCompletionsToolDefinitionSerializer(
  item: ChatCompletionsToolDefinition,
): Record<string, unknown> {
  return {
    type: item["type"],
    function: functionDefinitionSerializer(item.function),
  };
}

/** The definition of a caller-specified function that chat completions may invoke in response to matching user input. */
export interface FunctionDefinition {
  /** The name of the function to be called. */
  name: string;
  /**
   * A description of what the function does. The model will use this description when selecting the function and
   * interpreting its parameters.
   */
  description?: string;
  /** The parameters the function accepts, described as a JSON Schema object. */
  parameters?: Record<string, any>;
}

export function functionDefinitionSerializer(
  item: FunctionDefinition,
): Record<string, unknown> {
  return {
    name: item["name"],
    description: item["description"],
    parameters: !item.parameters
      ? item.parameters
      : (serializeRecord(item.parameters as any) as any),
  };
}

/** Represents a generic policy for how a chat completions tool may be selected. */
export type ChatCompletionsToolSelectionPreset = "auto" | "none" | "required";

/** A tool selection of a specific, named function tool that will limit chat completions to using the named function. */
export interface ChatCompletionsNamedToolSelection {
  /** The type of the tool. Currently, only `function` is supported. */
  type: "function";
  /** The function that should be called. */
  function: ChatCompletionsFunctionToolSelection;
}

export function chatCompletionsNamedToolSelectionSerializer(
  item: ChatCompletionsNamedToolSelection,
): Record<string, unknown> {
  return {
    type: item["type"],
    function: chatCompletionsFunctionToolSelectionSerializer(item.function),
  };
}

/** A tool selection of a specific, named function tool that will limit chat completions to using the named function. */
export interface ChatCompletionsFunctionToolSelection {
  /** The name of the function that should be called. */
  name: string;
}

export function chatCompletionsFunctionToolSelectionSerializer(
  item: ChatCompletionsFunctionToolSelection,
): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

/** Controls what happens if extra parameters, undefined by the REST API, are passed in the JSON request payload. */
export type ExtraParameters = "error" | "drop" | "pass-through";

/**
 * Representation of the response data from a chat completions request.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export interface ChatCompletions {
  /** A unique identifier associated with this chat completions response. */
  id: string;
  /**
   * The first timestamp associated with generation activity for this completions response,
   * represented as seconds since the beginning of the Unix epoch of 00:00 on 1 Jan 1970.
   */
  created: Date;
  /** The model used for the chat completion. */
  model: string;
  /** Usage information for tokens processed and generated as part of this completions operation. */
  usage: CompletionsUsage;
  /**
   * The collection of completions choices associated with this completions response.
   * Generally, `n` choices are generated per provided prompt with a default value of 1.
   * Token limits and other settings may limit the number of choices generated.
   */
  choices: ChatChoice[];
}

/**
 * Representation of the token counts processed for a completions request.
 * Counts consider all tokens across prompts, choices, choice alternates, best_of generations, and
 * other consumers.
 */
export interface CompletionsUsage {
  /** The number of tokens generated across all completions emissions. */
  completionTokens: number;
  /** The number of tokens in the provided prompts for the completions request. */
  promptTokens: number;
  /** The total number of tokens processed for the completions request and response. */
  totalTokens: number;
}

/**
 * The representation of a single prompt completion as part of an overall chat completions request.
 * Generally, `n` choices are generated per provided prompt with a default value of 1.
 * Token limits and other settings may limit the number of choices generated.
 */
export interface ChatChoice {
  /** The ordered index associated with this chat completions choice. */
  index: number;
  /** The reason that this chat completions choice completed its generated. */
  finishReason: CompletionsFinishReason | null;
  /** The chat message for a given chat completions prompt. */
  message: ChatResponseMessage;
}

/** Representation of the manner in which a completions response concluded. */
export type CompletionsFinishReason =
  | "stop"
  | "length"
  | "content_filter"
  | "tool_calls";

/** A representation of a chat message as received in a response. */
export interface ChatResponseMessage {
  /** The chat role associated with the message. */
  role: ChatRole;
  /** The content of the message. */
  content: string | null;
  /**
   * The tool calls that must be resolved and have their outputs appended to subsequent input messages for the chat
   * completions request to resolve as configured.
   */
  toolCalls?: ChatCompletionsToolCall[];
}

/** Represents some basic information about the AI model. */
export interface ModelInfo {
  /** The name of the AI model. For example: `Phi21` */
  modelName: string;
  /** The type of the AI model. A Unique identifier for the profile. */
  modelType: ModelType;
  /** The model provider name. For example: `Microsoft Research` */
  modelProviderName: string;
}

/** The type of AI model */
export type ModelType =
  | "embeddings"
  | "image_generation"
  | "text_generation"
  | "image_embeddings"
  | "audio_generation"
  | "chat";

/**
 * Represents a response update to a chat completions request, when the service is streaming updates
 * using Server Sent Events (SSE).
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export interface StreamingChatCompletionsUpdate {
  /** A unique identifier associated with this chat completions response. */
  id: string;
  /**
   * The first timestamp associated with generation activity for this completions response,
   * represented as seconds since the beginning of the Unix epoch of 00:00 on 1 Jan 1970.
   */
  created: Date;
  /** The model used for the chat completion. */
  model: string;
  /** Usage information for tokens processed and generated as part of this completions operation. */
  usage: CompletionsUsage;
  /**
   * An update to the collection of completion choices associated with this completions response.
   * Generally, `n` choices are generated per provided prompt with a default value of 1.
   * Token limits and other settings may limit the number of choices generated.
   */
  choices: StreamingChatChoiceUpdate[];
}

/**
 * Represents an update to a single prompt completion when the service is streaming updates
 * using Server Sent Events (SSE).
 * Generally, `n` choices are generated per provided prompt with a default value of 1.
 * Token limits and other settings may limit the number of choices generated.
 */
export interface StreamingChatChoiceUpdate {
  /** The ordered index associated with this chat completions choice. */
  index: number;
  /** The reason that this chat completions choice completed its generated. */
  finishReason: CompletionsFinishReason | null;
  /** An update to the chat message for a given chat completions prompt. */
  delta: StreamingChatResponseMessageUpdate;
}

/** A representation of a chat message update as received in a streaming response. */
export interface StreamingChatResponseMessageUpdate {
  /** The chat role associated with the message. If present, should always be 'assistant' */
  role?: ChatRole;
  /** The content of the message. */
  content?: string;
  /**
   * The tool calls that must be resolved and have their outputs appended to subsequent input messages for the chat
   * completions request to resolve as configured.
   */
  toolCalls?: StreamingChatResponseToolCallUpdate[];
}

/** An update to the function tool call information requested by the AI model. */
export interface StreamingChatResponseToolCallUpdate {
  /** The ID of the tool call. */
  id: string;
  /** Updates to the function call requested by the AI model. */
  function: FunctionCall;
}

/** The AI.Model service versions. */
export type Versions = "2024-05-01-preview";
/** Alias for ChatRequestMessageUnion */
export type ChatRequestMessageUnion =
  | ChatRequestSystemMessage
  | ChatRequestUserMessage
  | ChatRequestAssistantMessage
  | ChatRequestToolMessage
  | ChatRequestMessage;
/** Alias for ChatMessageContentItemUnion */
export type ChatMessageContentItemUnion =
  | ChatMessageTextContentItem
  | ChatMessageImageContentItem
  | ChatMessageContentItem;
/** Alias for ChatCompletionsResponseFormatUnion */
export type ChatCompletionsResponseFormatUnion =
  | ChatCompletionsResponseFormatText
  | ChatCompletionsResponseFormatJSON
  | ChatCompletionsResponseFormat;
