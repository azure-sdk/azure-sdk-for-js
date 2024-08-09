// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ChatMessage as ChatMessageRest,
  TextChatMessage as TextChatMessageRest,
} from "../rest/index.js";

/** A single, role-attributed message within a chat completion interaction. */
export interface ChatMessage {
  /** the discriminator possible values: text */
  kind: MessageKind;
  /** The role associated with the message. */
  role: ChatRole;
  /**
   * Field that allows the chat app to store and retrieve data, the structure of such data is dependant on the backend
   * being used. The client must send back the data in this field unchanged in subsequent requests, until the chat app
   * sends a new one. The data in this field can be used to implement stateful services, such as remembering previous
   * conversations or user preferences.
   */
  sessionState?: any;
}

export function chatMessageUnionSerializer(item: ChatMessageUnion) {
  switch (item.kind) {
    case "text":
      return textChatMessageSerializer(item as TextChatMessage);

    default:
      return chatMessageSerializer(item);
  }
}

export function chatMessageSerializer(item: ChatMessageUnion): ChatMessageRest {
  return {
    kind: item["kind"],
    role: item["role"],
    sessionState: item["sessionState"],
  };
}

/** A single, role-attributed text message within a chat completion interaction. */
export interface TextChatMessage extends ChatMessage {
  /** The type of the message. */
  kind: "text";
  /** The text associated with the message. */
  content: string;
}

export function textChatMessageSerializer(
  item: TextChatMessage,
): TextChatMessageRest {
  return {
    kind: item["kind"],
    role: item["role"],
    sessionState: item["sessionState"],
    content: item["content"],
  };
}

/** Identifies the type of a message. */
export type MessageKind = "text";
/** A representation of the intended purpose of a message. */
export type ChatRole = "user" | "system" | "assistant";

export interface StreamingChatCompletionOptions {
  /** The collection of context messages associated with this completion request. */
  messages: ChatMessageUnion[];
  /** Indicates whether the completion is a streaming or non-streaming completion. */
  stream: true;
  /**
   * Field that allows the chat app to store and retrieve data, the structure of such data is dependant on the backend
   * being used. The client must send back the data in this field unchanged in subsequent requests, until the chat app
   * sends a new one. The data in this field can be used to implement stateful services, such as remembering previous
   * conversations or user preferences.
   */
  sessionState?: any;
  /**
   * Context allows the chat app to receive extra parameters from the client, such as temperature, functions, or
   * customer_info. These parameters are specific to the chat app and not understood by the generic clients.
   */
  context?: Record<string, any>;
}

/** A single response to a streaming completion request. */
export interface ChatCompletionChunk {
  /** The collection of choice deltas received in this chunk. */
  choices: ChoiceDelta[];
}

/** The representation of an incremental choice received in a streaming completion. */
export interface ChoiceDelta {
  /** The index of the of the chat choice, relative to the other choices in the same completion. */
  index: number;
  /** The partial message received for this choice. */
  delta: ChatMessageDeltaUnion;
  /**
   * Field that allows the chat app to store and retrieve data, the structure of such data is dependant on the backend
   * being used. The client must send back the data in this field unchanged in subsequent requests, until the chat app
   * sends a new one. The data in this field can be used to implement stateful services, such as remembering previous
   * conversations or user preferences.
   */
  sessionState?: any;
  /**
   * Context allows the chat app to receive extra parameters from the client, such as temperature, functions, or
   * customer_info. These parameters are specific to the chat app and not understood by the generic clients.
   */
  context?: Record<string, any>;
  /** The reason this chat completion completed its generation. */
  finishReason?: FinishReason;
}

/** The representation of a delta message received in a streaming completion. */
export interface ChatMessageDelta {
  /** the discriminator possible values: text */
  kind: MessageKind;
  /** The role associated with the message. */
  role?: ChatRole;
  /**
   * Field that allows the chat app to store and retrieve data, the structure of such data is dependant on the backend
   * being used. The client must send back the data in this field unchanged in subsequent requests, until the chat app
   * sends a new one. The data in this field can be used to implement stateful services, such as remembering previous
   * conversations or user preferences.
   */
  sessionState?: any;
}

/** The representation of a delta text message received in a streaming completion. */
export interface TextChatMessageDelta extends ChatMessageDelta {
  /** The type of the message. */
  kind: "text";
  /** An incremental part of the text associated with the message. */
  content?: string;
}

/** Representation of the reason why a chat session has finished processing. */
export type FinishReason = "stop" | "length";

export interface ChatCompletionOptions {
  /** The collection of context messages associated with this completion request. */
  messages: ChatMessageUnion[];
  /** Indicates whether the completion is a streaming or non-streaming completion. */
  stream: false;
  /**
   * Field that allows the chat app to store and retrieve data, the structure of such data is dependant on the backend
   * being used. The client must send back the data in this field unchanged in subsequent requests, until the chat app
   * sends a new one. The data in this field can be used to implement stateful services, such as remembering previous
   * conversations or user preferences.
   */
  sessionState?: any;
  /**
   * Context allows the chat app to receive extra parameters from the client, such as temperature, functions, or
   * customer_info. These parameters are specific to the chat app and not understood by the generic clients.
   */
  context?: Record<string, any>;
}

/** Representation of the response to a chat completion request. */
export interface ChatCompletion {
  /** The collection of generated completions. */
  choices: ChatChoice[];
}

/** The representation of a single generated completion. */
export interface ChatChoice {
  /** The index of the of the chat choice, relative to the other choices in the same completion. */
  index: number;
  /** The chat message for a given chat completion. */
  message: ChatMessageUnion;
  /**
   * Field that allows the chat app to store and retrieve data, the structure of such data is dependant on the backend
   * being used. The client must send back the data in this field unchanged in subsequent requests, until the chat app
   * sends a new one. The data in this field can be used to implement stateful services, such as remembering previous
   * conversations or user preferences.
   */
  sessionState?: any;
  /**
   * Context allows the chat app to receive extra parameters from the client, such as temperature, functions, or
   * customer_info. These parameters are specific to the chat app and not understood by the generic clients.
   */
  context?: Record<string, any>;
  /** The reason this chat completion completed its generation. */
  finishReason: FinishReason;
}

/** Type of APIVersion */
export type APIVersion = "2023-10-01-preview";
/** Alias for ChatMessageUnion */
export type ChatMessageUnion = TextChatMessage | ChatMessage;
/** Alias for ChatMessageDeltaUnion */
export type ChatMessageDeltaUnion = TextChatMessageDelta | ChatMessageDelta;
