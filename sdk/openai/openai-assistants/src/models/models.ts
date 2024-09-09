// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { serializeRecord } from "../helpers/serializerHelpers.js";

/** The request details to use when creating a new assistant. */
export interface AssistantCreationOptions {
  /** The ID of the model to use. */
  model: string;
  /** The name of the new assistant. */
  name?: string | null;
  /** The description of the new assistant. */
  description?: string | null;
  /** The system instructions for the new assistant to use. */
  instructions?: string | null;
  /** The collection of tools to enable for the new assistant. */
  tools?: ToolDefinitionUnion[];
  /**
   * A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter`
   * tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   */
  toolResources?: CreateToolResourcesOptions | null;
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random,
   * while lower values like 0.2 will make it more focused and deterministic.
   */
  temperature?: number | null;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass.
   * So 0.1 means only the tokens comprising the top 10% probability mass are considered.
   *
   * We generally recommend altering this or temperature but not both.
   */
  topP?: number | null;
  /** The response format of the tool calls used by this assistant. */
  responseFormat?:
    | string
    | AssistantsApiResponseFormatMode
    | AssistantsApiResponseFormat;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

export function assistantCreationOptionsSerializer(
  item: AssistantCreationOptions,
): Record<string, unknown> {
  return {
    model: item["model"],
    name: item["name"],
    description: item["description"],
    instructions: item["instructions"],
    tools:
      item["tools"] === undefined
        ? item["tools"]
        : item["tools"].map((p) => toolDefinitionUnionSerializer(p)),
    tool_resources: !item.toolResources
      ? item.toolResources
      : createToolResourcesOptionsSerializer(item.toolResources),
    temperature: item["temperature"],
    top_p: item["topP"],
    response_format: item["responseFormat"],
    metadata: !item.metadata
      ? item.metadata
      : (serializeRecord(item.metadata as any) as any),
  };
}

/** An abstract representation of an input tool definition that an assistant can use. */
export interface ToolDefinition {
  /** the discriminator possible values: code_interpreter, file_search, function */
  type: string;
}

export function toolDefinitionUnionSerializer(item: ToolDefinitionUnion) {
  switch (item.type) {
    case "code_interpreter":
      return codeInterpreterToolDefinitionSerializer(
        item as CodeInterpreterToolDefinition,
      );

    case "file_search":
      return fileSearchToolDefinitionSerializer(
        item as FileSearchToolDefinition,
      );

    case "function":
      return functionToolDefinitionSerializer(item as FunctionToolDefinition);

    default:
      return toolDefinitionSerializer(item);
  }
}

export function toolDefinitionSerializer(
  item: ToolDefinitionUnion,
): Record<string, unknown> {
  return {
    ...toolDefinitionUnionSerializer(item),
  };
}

/** The input definition information for a code interpreter tool as used to configure an assistant. */
export interface CodeInterpreterToolDefinition extends ToolDefinition {
  /** The object type, which is always 'code_interpreter'. */
  type: "code_interpreter";
}

export function codeInterpreterToolDefinitionSerializer(
  item: CodeInterpreterToolDefinition,
): Record<string, unknown> {
  return {
    type: item["type"],
  };
}

/** The input definition information for a file search tool as used to configure an assistant. */
export interface FileSearchToolDefinition extends ToolDefinition {
  /** The object type, which is always 'file_search'. */
  type: "file_search";
  /** Options overrides for the file search tool. */
  fileSearch?: FileSearchToolDefinitionDetails;
}

export function fileSearchToolDefinitionSerializer(
  item: FileSearchToolDefinition,
): Record<string, unknown> {
  return {
    type: item["type"],
    file_search: !item.fileSearch
      ? item.fileSearch
      : fileSearchToolDefinitionDetailsSerializer(item.fileSearch),
  };
}

/** Options overrides for the file search tool. */
export interface FileSearchToolDefinitionDetails {
  /**
   * The maximum number of results the file search tool should output. The default is 20 for gpt-4* models and 5 for gpt-3.5-turbo. This number should be between 1 and 50 inclusive.
   *
   * Note that the file search tool may output fewer than `max_num_results` results. See the file search tool documentation for more information.
   */
  maxNumResults?: number;
}

export function fileSearchToolDefinitionDetailsSerializer(
  item: FileSearchToolDefinitionDetails,
): Record<string, unknown> {
  return {
    max_num_results: item["maxNumResults"],
  };
}

/** The input definition information for a function tool as used to configure an assistant. */
export interface FunctionToolDefinition extends ToolDefinition {
  /** The object type, which is always 'function'. */
  type: "function";
  /** The definition of the concrete function that the function tool should call. */
  function: FunctionDefinition;
}

export function functionToolDefinitionSerializer(
  item: FunctionToolDefinition,
): Record<string, unknown> {
  return {
    type: item["type"],
    function: functionDefinitionSerializer(item.function),
  };
}

/** The input definition information for a function. */
export interface FunctionDefinition {
  /** The name of the function to be called. */
  name: string;
  /** A description of what the function does, used by the model to choose when and how to call the function. */
  description?: string;
  /** The parameters the functions accepts, described as a JSON Schema object. */
  parameters: any;
}

export function functionDefinitionSerializer(
  item: FunctionDefinition,
): Record<string, unknown> {
  return {
    name: item["name"],
    description: item["description"],
    parameters: item["parameters"],
  };
}

/**
 * Request object. A set of resources that are used by the assistant's tools. The resources are specific to the
 * type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search`
 * tool requires a list of vector store IDs.
 */
export interface CreateToolResourcesOptions {
  /**
   * A list of file IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files
   * associated with the tool.
   */
  codeInterpreter?: CreateCodeInterpreterToolResourceOptions;
  /** A list of vector stores or their IDs made available to the `file_search` tool. */
  fileSearch?: CreateFileSearchToolResourceOptions;
}

export function createToolResourcesOptionsSerializer(
  item: CreateToolResourcesOptions,
): Record<string, unknown> {
  return {
    code_interpreter: !item.codeInterpreter
      ? item.codeInterpreter
      : createCodeInterpreterToolResourceOptionsSerializer(
          item.codeInterpreter,
        ),
    file_search: item["fileSearch"] as any,
  };
}

/** A set of resources that will be used by the `code_interpreter` tool. Request object. */
export interface CreateCodeInterpreterToolResourceOptions {
  /** A list of file IDs made available to the `code_interpreter` tool. */
  fileIds?: string[];
}

export function createCodeInterpreterToolResourceOptionsSerializer(
  item: CreateCodeInterpreterToolResourceOptions,
): Record<string, unknown> {
  return {
    file_ids: item["fileIds"],
  };
}

/** File IDs associated to the vector store to be passed to the helper. */
export interface CreateFileSearchToolResourceVectorStoreOptions {
  /** A list of file IDs to add to the vector store. There can be a maximum of 10000 files in a vector store. */
  fileIds: string[];
  /** The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. */
  chunkingStrategy: VectorStoreChunkingStrategyRequestUnion;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

export function createFileSearchToolResourceVectorStoreOptionsSerializer(
  item: CreateFileSearchToolResourceVectorStoreOptions,
): Record<string, unknown> {
  return {
    file_ids: item["fileIds"],
    chunking_strategy: vectorStoreChunkingStrategyRequestUnionSerializer(
      item.chunkingStrategy,
    ),
    metadata: !item.metadata
      ? item.metadata
      : (serializeRecord(item.metadata as any) as any),
  };
}

/** An abstract representation of a vector store chunking strategy configuration. */
export interface VectorStoreChunkingStrategyRequest {
  /** the discriminator possible values: auto, static */
  type: VectorStoreChunkingStrategyRequestType;
}

export function vectorStoreChunkingStrategyRequestUnionSerializer(
  item: VectorStoreChunkingStrategyRequestUnion,
) {
  switch (item.type) {
    case "auto":
      return vectorStoreAutoChunkingStrategyRequestSerializer(
        item as VectorStoreAutoChunkingStrategyRequest,
      );

    case "static":
      return vectorStoreStaticChunkingStrategyRequestSerializer(
        item as VectorStoreStaticChunkingStrategyRequest,
      );

    default:
      return vectorStoreChunkingStrategyRequestSerializer(item);
  }
}

export function vectorStoreChunkingStrategyRequestSerializer(
  item: VectorStoreChunkingStrategyRequestUnion,
): Record<string, unknown> {
  return {
    ...vectorStoreChunkingStrategyRequestUnionSerializer(item),
  };
}

/** The default strategy. This strategy currently uses a max_chunk_size_tokens of 800 and chunk_overlap_tokens of 400. */
export interface VectorStoreAutoChunkingStrategyRequest
  extends VectorStoreChunkingStrategyRequest {
  /** The object type, which is always 'auto'. */
  type: "auto";
}

export function vectorStoreAutoChunkingStrategyRequestSerializer(
  item: VectorStoreAutoChunkingStrategyRequest,
): Record<string, unknown> {
  return {
    type: item["type"],
  };
}

/** A statically configured chunking strategy. */
export interface VectorStoreStaticChunkingStrategyRequest
  extends VectorStoreChunkingStrategyRequest {
  /** The object type, which is always 'static'. */
  type: "static";
  /** The options for the static chunking strategy. */
  static: VectorStoreStaticChunkingStrategyOptions;
}

export function vectorStoreStaticChunkingStrategyRequestSerializer(
  item: VectorStoreStaticChunkingStrategyRequest,
): Record<string, unknown> {
  return {
    type: item["type"],
    static: vectorStoreStaticChunkingStrategyOptionsSerializer(item.static),
  };
}

/** Options to configure a vector store static chunking strategy. */
export interface VectorStoreStaticChunkingStrategyOptions {
  /** The maximum number of tokens in each chunk. The default value is 800. The minimum value is 100 and the maximum value is 4096. */
  maxChunkSizeTokens: number;
  /**
   * The number of tokens that overlap between chunks. The default value is 400.
   * Note that the overlap must not exceed half of max_chunk_size_tokens.     *
   */
  chunkOverlapTokens: number;
}

export function vectorStoreStaticChunkingStrategyOptionsSerializer(
  item: VectorStoreStaticChunkingStrategyOptions,
): Record<string, unknown> {
  return {
    max_chunk_size_tokens: item["maxChunkSizeTokens"],
    chunk_overlap_tokens: item["chunkOverlapTokens"],
  };
}

/** Known values of {@link VectorStoreChunkingStrategyRequestType} that the service accepts. */
export enum KnownVectorStoreChunkingStrategyRequestType {
  /** auto */
  auto = "auto",
  /** static */
  "static" = "static",
}

/**
 * Type of chunking strategy \
 * {@link KnownVectorStoreChunkingStrategyRequestType} can be used interchangeably with VectorStoreChunkingStrategyRequestType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **auto** \
 * **static**
 */
export type VectorStoreChunkingStrategyRequestType = string;

/** Known values of {@link AssistantsApiResponseFormatMode} that the service accepts. */
export enum KnownAssistantsApiResponseFormatMode {
  /** auto */
  auto = "auto",
  /** none */
  none = "none",
}

/**
 * Represents the mode in which the model will handle the return format of a tool call. \
 * {@link KnownAssistantsApiResponseFormatMode} can be used interchangeably with AssistantsApiResponseFormatMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **auto** \
 * **none**
 */
export type AssistantsApiResponseFormatMode = string;

/**
 * An object describing the expected output of the model. If `json_object` only `function` type `tools` are allowed to be passed to the Run.
 * If `text` the model can return text or any value needed.
 */
export interface AssistantsApiResponseFormat {
  /** Must be one of `text` or `json_object`. */
  type?: ApiResponseFormat;
}

export function assistantsApiResponseFormatSerializer(
  item: AssistantsApiResponseFormat,
): Record<string, unknown> {
  return {
    type: item["type"],
  };
}

/** Known values of {@link ApiResponseFormat} that the service accepts. */
export enum KnownApiResponseFormat {
  /** text */
  text = "text",
  /** jsonObject */
  jsonObject = "json_object",
}

/**
 * Possible API response formats. \
 * {@link KnownApiResponseFormat} can be used interchangeably with ApiResponseFormat,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **text** \
 * **json_object**
 */
export type ApiResponseFormat = string;

/** Represents an assistant that can call the model and use tools. */
export interface Assistant {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always assistant. */
  object: "assistant";
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The name of the assistant. */
  name: string | null;
  /** The description of the assistant. */
  description: string | null;
  /** The ID of the model to use. */
  model: string;
  /** The system instructions for the assistant to use. */
  instructions: string | null;
  /** The collection of tools enabled for the assistant. */
  tools: ToolDefinitionUnion[];
  /**
   * A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter`
   * tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   */
  toolResources: ToolResources | null;
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random,
   * while lower values like 0.2 will make it more focused and deterministic.
   */
  temperature: number | null;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass.
   * So 0.1 means only the tokens comprising the top 10% probability mass are considered.
   *
   * We generally recommend altering this or temperature but not both.
   */
  topP: number | null;
  /** The response format of the tool calls used by this assistant. */
  responseFormat?:
    | string
    | AssistantsApiResponseFormatMode
    | AssistantsApiResponseFormat;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

/**
 * A set of resources that are used by the assistant's tools. The resources are specific to the type of
 * tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search`
 * tool requires a list of vector store IDs.
 */
export interface ToolResources {
  /** Resources to be used by the `code_interpreter tool` consisting of file IDs. */
  codeInterpreter?: CodeInterpreterToolResource;
  /** Resources to be used by the `file_search` tool consisting of vector store IDs. */
  fileSearch?: FileSearchToolResource;
}

/** A set of resources that are used by the `code_interpreter` tool. */
export interface CodeInterpreterToolResource {
  /**
   * A list of file IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files
   * associated with the tool.
   */
  fileIds: string[];
}

/** A set of resources that are used by the `file_search` tool. */
export interface FileSearchToolResource {
  /**
   * The ID of the vector store attached to this assistant. There can be a maximum of 1 vector
   * store attached to the assistant.
   */
  vectorStoreIds?: string[];
}

/** Known values of {@link ListSortOrder} that the service accepts. */
export enum KnownListSortOrder {
  /** ascending */
  ascending = "asc",
  /** descending */
  descending = "desc",
}

/**
 * The available sorting options when requesting a list of response objects. \
 * {@link KnownListSortOrder} can be used interchangeably with ListSortOrder,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **asc** \
 * **desc**
 */
export type ListSortOrder = string;

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfAssistant {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: Assistant[];
  /** The first ID represented in this list. */
  firstId: string;
  /** The last ID represented in this list. */
  lastId: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  hasMore?: boolean;
}

/** The request details to use when modifying an existing assistant. */
export interface UpdateAssistantOptions {
  /** The ID of the model to use. */
  model?: string;
  /** The modified name for the assistant to use. */
  name?: string | null;
  /** The modified description for the assistant to use. */
  description?: string | null;
  /** The modified system instructions for the new assistant to use. */
  instructions?: string | null;
  /** The modified collection of tools to enable for the assistant. */
  tools?: ToolDefinitionUnion[];
  /**
   * A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example,
   * the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   */
  toolResources?: UpdateToolResourcesOptions;
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random,
   * while lower values like 0.2 will make it more focused and deterministic.
   */
  temperature?: number | null;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass.
   * So 0.1 means only the tokens comprising the top 10% probability mass are considered.
   *
   * We generally recommend altering this or temperature but not both.
   */
  topP?: number | null;
  /** The response format of the tool calls used by this assistant. */
  responseFormat?:
    | string
    | AssistantsApiResponseFormatMode
    | AssistantsApiResponseFormat;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

export function updateAssistantOptionsSerializer(
  item: UpdateAssistantOptions,
): Record<string, unknown> {
  return {
    model: item["model"],
    name: item["name"],
    description: item["description"],
    instructions: item["instructions"],
    tools:
      item["tools"] === undefined
        ? item["tools"]
        : item["tools"].map((p) => toolDefinitionUnionSerializer(p)),
    tool_resources: !item.toolResources
      ? item.toolResources
      : updateToolResourcesOptionsSerializer(item.toolResources),
    temperature: item["temperature"],
    top_p: item["topP"],
    response_format: item["responseFormat"],
    metadata: !item.metadata
      ? item.metadata
      : (serializeRecord(item.metadata as any) as any),
  };
}

/**
 * Request object. A set of resources that are used by the assistant's tools. The resources are specific to the type of tool.
 * For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of
 * vector store IDs.
 */
export interface UpdateToolResourcesOptions {
  /**
   * Overrides the list of file IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files
   * associated with the tool.
   */
  codeInterpreter?: UpdateCodeInterpreterToolResourceOptions;
  /** Overrides the vector store attached to this assistant. There can be a maximum of 1 vector store attached to the assistant. */
  fileSearch?: UpdateFileSearchToolResourceOptions;
}

export function updateToolResourcesOptionsSerializer(
  item: UpdateToolResourcesOptions,
): Record<string, unknown> {
  return {
    code_interpreter: !item.codeInterpreter
      ? item.codeInterpreter
      : updateCodeInterpreterToolResourceOptionsSerializer(
          item.codeInterpreter,
        ),
    file_search: !item.fileSearch
      ? item.fileSearch
      : updateFileSearchToolResourceOptionsSerializer(item.fileSearch),
  };
}

/** Request object to update `code_interpreted` tool resources. */
export interface UpdateCodeInterpreterToolResourceOptions {
  /** A list of file IDs to override the current list of the assistant. */
  fileIds?: string[];
}

export function updateCodeInterpreterToolResourceOptionsSerializer(
  item: UpdateCodeInterpreterToolResourceOptions,
): Record<string, unknown> {
  return {
    file_ids: item["fileIds"],
  };
}

/** Request object to update `file_search` tool resources. */
export interface UpdateFileSearchToolResourceOptions {
  /** A list of vector store IDs to override the current list of the assistant. */
  vectorStoreIds?: string[];
}

export function updateFileSearchToolResourceOptionsSerializer(
  item: UpdateFileSearchToolResourceOptions,
): Record<string, unknown> {
  return {
    vector_store_ids: item["vectorStoreIds"],
  };
}

/** The status of an assistant deletion operation. */
export interface AssistantDeletionStatus {
  /** The ID of the resource specified for deletion. */
  id: string;
  /** A value indicating whether deletion was successful. */
  deleted: boolean;
  /** The object type, which is always 'assistant.deleted'. */
  object: "assistant.deleted";
}

/** The details used to create a new assistant thread. */
export interface AssistantThreadCreationOptions {
  /** The initial messages to associate with the new thread. */
  messages?: ThreadMessageOptions[];
  /**
   * A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the
   * type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires
   * a list of vector store IDs.
   */
  toolResources?: CreateToolResourcesOptions | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

export function assistantThreadCreationOptionsSerializer(
  item: AssistantThreadCreationOptions,
): Record<string, unknown> {
  return {
    messages:
      item["messages"] === undefined
        ? item["messages"]
        : item["messages"].map(threadMessageOptionsSerializer),
    tool_resources: !item.toolResources
      ? item.toolResources
      : createToolResourcesOptionsSerializer(item.toolResources),
    metadata: !item.metadata
      ? item.metadata
      : (serializeRecord(item.metadata as any) as any),
  };
}

/** A single message within an assistant thread, as provided during that thread's creation for its initial state. */
export interface ThreadMessageOptions {
  /**
   * The role of the entity that is creating the message. Allowed values include:
   * - `user`: Indicates the message is sent by an actual user and should be used in most cases to represent user-generated messages.
   * - `assistant`: Indicates the message is generated by the assistant. Use this value to insert messages from the assistant into
   * the conversation.
   */
  role: MessageRole;
  /**
   * The textual content of the initial message. Currently, robust input including images and annotated text may only be provided via
   * a separate call to the create message API.
   */
  content: string;
  /** A list of files attached to the message, and the tools they should be added to. */
  attachments?: MessageAttachment[] | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

export function threadMessageOptionsSerializer(
  item: ThreadMessageOptions,
): Record<string, unknown> {
  return {
    role: item["role"],
    content: item["content"],
    attachments:
      item["attachments"] === undefined || item["attachments"] === null
        ? item["attachments"]
        : item["attachments"].map(messageAttachmentSerializer),
    metadata: !item.metadata
      ? item.metadata
      : (serializeRecord(item.metadata as any) as any),
  };
}

/** Known values of {@link MessageRole} that the service accepts. */
export enum KnownMessageRole {
  /** user */
  user = "user",
  /** assistant */
  assistant = "assistant",
}

/**
 * The possible values for roles attributed to messages in a thread. \
 * {@link KnownMessageRole} can be used interchangeably with MessageRole,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **assistant**
 */
export type MessageRole = string;

/** This describes to which tools a file has been attached. */
export interface MessageAttachment {
  /** The ID of the file to attach to the message. */
  fileId: string;
  /** The tools to add to this file. */
  tools: MessageAttachmentToolDefinition[];
}

export function messageAttachmentSerializer(
  item: MessageAttachment,
): Record<string, unknown> {
  return {
    file_id: item["fileId"],
    tools: item["tools"],
  };
}

/** Information about a single thread associated with an assistant. */
export interface AssistantThread {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always 'thread'. */
  object: "thread";
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /**
   * A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type
   * of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list
   * of vector store IDs.
   */
  toolResources: ToolResources | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

/** The details used to update an existing assistant thread */
export interface UpdateAssistantThreadOptions {
  /**
   * A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the
   * type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires
   * a list of vector store IDs
   */
  toolResources?: UpdateToolResourcesOptions | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

export function updateAssistantThreadOptionsSerializer(
  item: UpdateAssistantThreadOptions,
): Record<string, unknown> {
  return {
    tool_resources: !item.toolResources
      ? item.toolResources
      : updateToolResourcesOptionsSerializer(item.toolResources),
    metadata: !item.metadata
      ? item.metadata
      : (serializeRecord(item.metadata as any) as any),
  };
}

/** The status of a thread deletion operation. */
export interface ThreadDeletionStatus {
  /** The ID of the resource specified for deletion. */
  id: string;
  /** A value indicating whether deletion was successful. */
  deleted: boolean;
  /** The object type, which is always 'thread.deleted'. */
  object: "thread.deleted";
}

/** A single, existing message within an assistant thread. */
export interface ThreadMessage {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always 'thread.message'. */
  object: "thread.message";
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The ID of the thread that this message belongs to. */
  threadId: string;
  /** The status of the message. */
  status: MessageStatus;
  /** On an incomplete message, details about why the message is incomplete. */
  incompleteDetails: MessageIncompleteDetails | null;
  /** The Unix timestamp (in seconds) for when the message was completed. */
  completedAt: Date | null;
  /** The Unix timestamp (in seconds) for when the message was marked as incomplete. */
  incompleteAt: Date | null;
  /** The role associated with the assistant thread message. */
  role: MessageRole;
  /** The list of content items associated with the assistant thread message. */
  content: MessageContentUnion[];
  /** If applicable, the ID of the assistant that authored this message. */
  assistantId: string | null;
  /** If applicable, the ID of the run associated with the authoring of this message. */
  runId: string | null;
  /** A list of files attached to the message, and the tools they were added to. */
  attachments: MessageAttachment[] | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

export function threadMessageSerializer(
  item: ThreadMessage,
): Record<string, unknown> {
  return {
    id: item["id"],
    object: item["object"],
    created_at: item["createdAt"].getTime(),
    thread_id: item["threadId"],
    status: item["status"],
    incomplete_details: !item.incompleteDetails
      ? item.incompleteDetails
      : messageIncompleteDetailsSerializer(item.incompleteDetails),
    completed_at: item["completedAt"].getTime(),
    incomplete_at: item["incompleteAt"].getTime(),
    role: item["role"],
    content: item["content"].map((p) => messageContentUnionSerializer(p)),
    assistant_id: item["assistantId"],
    run_id: item["runId"],
    attachments:
      item["attachments"] === null
        ? item["attachments"]
        : item["attachments"].map(messageAttachmentSerializer),
    metadata: !item.metadata
      ? item.metadata
      : (serializeRecord(item.metadata as any) as any),
  };
}

/** Known values of {@link MessageStatus} that the service accepts. */
export enum KnownMessageStatus {
  /** inProgress */
  inProgress = "in_progress",
  /** incomplete */
  incomplete = "incomplete",
  /** completed */
  completed = "completed",
}

/**
 * The possible execution status values for a thread message. \
 * {@link KnownMessageStatus} can be used interchangeably with MessageStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **in_progress** \
 * **incomplete** \
 * **completed**
 */
export type MessageStatus = string;

/** Information providing additional detail about a message entering an incomplete status. */
export interface MessageIncompleteDetails {
  /** The provided reason describing why the message was marked as incomplete. */
  reason: MessageIncompleteDetailsReason;
}

export function messageIncompleteDetailsSerializer(
  item: MessageIncompleteDetails,
): Record<string, unknown> {
  return {
    reason: item["reason"],
  };
}

/** Known values of {@link MessageIncompleteDetailsReason} that the service accepts. */
export enum KnownMessageIncompleteDetailsReason {
  /** contentFilter */
  contentFilter = "content_filter",
  /** maxTokens */
  maxTokens = "max_tokens",
  /** runCancelled */
  runCancelled = "run_cancelled",
  /** runFailed */
  runFailed = "run_failed",
  /** runExpired */
  runExpired = "run_expired",
}

/**
 * A set of reasons describing why a message is marked as incomplete. \
 * {@link KnownMessageIncompleteDetailsReason} can be used interchangeably with MessageIncompleteDetailsReason,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **content_filter** \
 * **max_tokens** \
 * **run_cancelled** \
 * **run_failed** \
 * **run_expired**
 */
export type MessageIncompleteDetailsReason = string;

/** An abstract representation of a single item of thread message content. */
export interface MessageContent {
  /** the discriminator possible values: text, image_file */
  type: string;
}

export function messageContentUnionSerializer(item: MessageContentUnion) {
  switch (item.type) {
    case "text":
      return messageTextContentSerializer(item as MessageTextContent);

    case "image_file":
      return messageImageFileContentSerializer(item as MessageImageFileContent);

    default:
      return messageContentSerializer(item);
  }
}

export function messageContentSerializer(
  item: MessageContentUnion,
): Record<string, unknown> {
  return {
    ...messageContentUnionSerializer(item),
  };
}

/** A representation of a textual item of thread message content. */
export interface MessageTextContent extends MessageContent {
  /** The object type, which is always 'text'. */
  type: "text";
  /** The text and associated annotations for this thread message content item. */
  text: MessageTextDetails;
}

export function messageTextContentSerializer(
  item: MessageTextContent,
): Record<string, unknown> {
  return {
    type: item["type"],
    text: messageTextDetailsSerializer(item.text),
  };
}

/** The text and associated annotations for a single item of assistant thread message content. */
export interface MessageTextDetails {
  /** The text data. */
  value: string;
  /** A list of annotations associated with this text. */
  annotations: MessageTextAnnotationUnion[];
}

export function messageTextDetailsSerializer(
  item: MessageTextDetails,
): Record<string, unknown> {
  return {
    value: item["value"],
    annotations: item["annotations"].map((p) =>
      messageTextAnnotationUnionSerializer(p),
    ),
  };
}

/** An abstract representation of an annotation to text thread message content. */
export interface MessageTextAnnotation {
  /** the discriminator possible values: file_citation, file_path */
  type: string;
  /** The textual content associated with this text annotation item. */
  text: string;
}

export function messageTextAnnotationUnionSerializer(
  item: MessageTextAnnotationUnion,
) {
  switch (item.type) {
    case "file_citation":
      return messageTextFileCitationAnnotationSerializer(
        item as MessageTextFileCitationAnnotation,
      );

    case "file_path":
      return messageTextFilePathAnnotationSerializer(
        item as MessageTextFilePathAnnotation,
      );

    default:
      return messageTextAnnotationSerializer(item);
  }
}

export function messageTextAnnotationSerializer(
  item: MessageTextAnnotationUnion,
): Record<string, unknown> {
  return {
    ...messageTextAnnotationUnionSerializer(item),
  };
}

/** A citation within the message that points to a specific quote from a specific File associated with the assistant or the message. Generated when the assistant uses the 'file_search' tool to search files. */
export interface MessageTextFileCitationAnnotation
  extends MessageTextAnnotation {
  /** The object type, which is always 'file_citation'. */
  type: "file_citation";
  /**
   * A citation within the message that points to a specific quote from a specific file.
   * Generated when the assistant uses the "file_search" tool to search files.
   */
  fileCitation: MessageTextFileCitationDetails;
  /** The first text index associated with this text annotation. */
  startIndex?: number;
  /** The last text index associated with this text annotation. */
  endIndex?: number;
}

export function messageTextFileCitationAnnotationSerializer(
  item: MessageTextFileCitationAnnotation,
): Record<string, unknown> {
  return {
    type: item["type"],
    text: item["text"],
    file_citation: messageTextFileCitationDetailsSerializer(item.fileCitation),
    start_index: item["startIndex"],
    end_index: item["endIndex"],
  };
}

/** A representation of a file-based text citation, as used in a file-based annotation of text thread message content. */
export interface MessageTextFileCitationDetails {
  /** The ID of the file associated with this citation. */
  fileId: string;
  /** The specific quote cited in the associated file. */
  quote: string;
}

export function messageTextFileCitationDetailsSerializer(
  item: MessageTextFileCitationDetails,
): Record<string, unknown> {
  return {
    file_id: item["fileId"],
    quote: item["quote"],
  };
}

/** A citation within the message that points to a file located at a specific path. */
export interface MessageTextFilePathAnnotation extends MessageTextAnnotation {
  /** The object type, which is always 'file_path'. */
  type: "file_path";
  /** A URL for the file that's generated when the assistant used the code_interpreter tool to generate a file. */
  filePath: MessageTextFilePathDetails;
  /** The first text index associated with this text annotation. */
  startIndex?: number;
  /** The last text index associated with this text annotation. */
  endIndex?: number;
}

export function messageTextFilePathAnnotationSerializer(
  item: MessageTextFilePathAnnotation,
): Record<string, unknown> {
  return {
    type: item["type"],
    text: item["text"],
    file_path: messageTextFilePathDetailsSerializer(item.filePath),
    start_index: item["startIndex"],
    end_index: item["endIndex"],
  };
}

/** An encapsulation of an image file ID, as used by message image content. */
export interface MessageTextFilePathDetails {
  /** The ID of the specific file that the citation is from. */
  fileId: string;
}

export function messageTextFilePathDetailsSerializer(
  item: MessageTextFilePathDetails,
): Record<string, unknown> {
  return {
    file_id: item["fileId"],
  };
}

/** A representation of image file content in a thread message. */
export interface MessageImageFileContent extends MessageContent {
  /** The object type, which is always 'image_file'. */
  type: "image_file";
  /** The image file for this thread message content item. */
  imageFile: MessageImageFileDetails;
}

export function messageImageFileContentSerializer(
  item: MessageImageFileContent,
): Record<string, unknown> {
  return {
    type: item["type"],
    image_file: messageImageFileDetailsSerializer(item.imageFile),
  };
}

/** An image reference, as represented in thread message content. */
export interface MessageImageFileDetails {
  /** The ID for the file associated with this image. */
  fileId: string;
}

export function messageImageFileDetailsSerializer(
  item: MessageImageFileDetails,
): Record<string, unknown> {
  return {
    file_id: item["fileId"],
  };
}

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfThreadMessage {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: ThreadMessage[];
  /** The first ID represented in this list. */
  firstId: string;
  /** The last ID represented in this list. */
  lastId: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  hasMore?: boolean;
}

/** The details used when creating a new run of an assistant thread. */
export interface CreateRunOptions {
  /** The ID of the assistant that should run the thread. */
  assistantId: string;
  /** The overridden model name that the assistant should use to run the thread. */
  model?: string | null;
  /** The overridden system instructions that the assistant should use to run the thread. */
  instructions?: string | null;
  /**
   * Additional instructions to append at the end of the instructions for the run. This is useful for modifying the behavior
   * on a per-run basis without overriding other instructions.
   */
  additionalInstructions?: string | null;
  /** Adds additional messages to the thread before creating the run. */
  additionalMessages?: ThreadMessage[] | null;
  /** The overridden list of enabled tools that the assistant should use to run the thread. */
  tools?: ToolDefinitionUnion[] | null;
  /**
   * If `true`, returns a stream of events that happen during the Run as server-sent events,
   * terminating when the Run enters a terminal state with a `data: [DONE]` message.
   */
  stream?: boolean;
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output
   * more random, while lower values like 0.2 will make it more focused and deterministic.
   */
  temperature?: number | null;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model
   * considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens
   * comprising the top 10% probability mass are considered.
   *
   * We generally recommend altering this or temperature but not both.
   */
  topP?: number | null;
  /**
   * The maximum number of prompt tokens that may be used over the course of the run. The run will make a best effort to use only
   * the number of prompt tokens specified, across multiple turns of the run. If the run exceeds the number of prompt tokens specified,
   * the run will end with status `incomplete`. See `incomplete_details` for more info.
   */
  maxPromptTokens?: number | null;
  /**
   * The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort
   * to use only the number of completion tokens specified, across multiple turns of the run. If the run exceeds the number of
   * completion tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
   */
  maxCompletionTokens?: number | null;
  /** The strategy to use for dropping messages as the context windows moves forward. */
  truncationStrategy?: TruncationObject | null;
  /** Controls whether or not and which tool is called by the model. */
  toolChoice?:
    | string
    | AssistantsApiToolChoiceOptionMode
    | AssistantsNamedToolChoice;
  /** Specifies the format that the model must output. */
  responseFormat?:
    | string
    | AssistantsApiResponseFormatMode
    | AssistantsApiResponseFormat;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

export function createRunOptionsSerializer(
  item: CreateRunOptions,
): Record<string, unknown> {
  return {
    assistant_id: item["assistantId"],
    model: item["model"],
    instructions: item["instructions"],
    additional_instructions: item["additionalInstructions"],
    additional_messages:
      item["additionalMessages"] === undefined ||
      item["additionalMessages"] === null
        ? item["additionalMessages"]
        : item["additionalMessages"].map(threadMessageSerializer),
    tools:
      item["tools"] === undefined || item["tools"] === null
        ? item["tools"]
        : item["tools"].map((p) => toolDefinitionUnionSerializer(p)),
    stream: item["stream"],
    temperature: item["temperature"],
    top_p: item["topP"],
    max_prompt_tokens: item["maxPromptTokens"],
    max_completion_tokens: item["maxCompletionTokens"],
    truncation_strategy: !item.truncationStrategy
      ? item.truncationStrategy
      : truncationObjectSerializer(item.truncationStrategy),
    tool_choice: item["toolChoice"],
    response_format: item["responseFormat"],
    metadata: !item.metadata
      ? item.metadata
      : (serializeRecord(item.metadata as any) as any),
  };
}

/**
 * Controls for how a thread will be truncated prior to the run. Use this to control the initial
 * context window of the run.
 */
export interface TruncationObject {
  /**
   * The truncation strategy to use for the thread. The default is `auto`. If set to `last_messages`, the thread will
   * be truncated to the `lastMessages` count most recent messages in the thread. When set to `auto`, messages in the middle of the thread
   * will be dropped to fit the context length of the model, `max_prompt_tokens`.
   */
  type: TruncationStrategy;
  /** The number of most recent messages from the thread when constructing the context for the run. */
  lastMessages?: number | null;
}

export function truncationObjectSerializer(
  item: TruncationObject,
): Record<string, unknown> {
  return {
    type: item["type"],
    last_messages: item["lastMessages"],
  };
}

/** Known values of {@link TruncationStrategy} that the service accepts. */
export enum KnownTruncationStrategy {
  /** auto */
  auto = "auto",
  /** lastMessages */
  lastMessages = "last_messages",
}

/**
 * Possible truncation strategies for the thread. \
 * {@link KnownTruncationStrategy} can be used interchangeably with TruncationStrategy,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **auto** \
 * **last_messages**
 */
export type TruncationStrategy = string;

/** Known values of {@link AssistantsApiToolChoiceOptionMode} that the service accepts. */
export enum KnownAssistantsApiToolChoiceOptionMode {
  /** none */
  none = "none",
  /** auto */
  auto = "auto",
}

/**
 * Specifies how the tool choice will be used \
 * {@link KnownAssistantsApiToolChoiceOptionMode} can be used interchangeably with AssistantsApiToolChoiceOptionMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **none** \
 * **auto**
 */
export type AssistantsApiToolChoiceOptionMode = string;

/** Specifies a tool the model should use. Use to force the model to call a specific tool. */
export interface AssistantsNamedToolChoice {
  /** the type of tool. If type is `function`, the function name must be set. */
  type: AssistantsNamedToolChoiceType;
  /** The name of the function to call */
  function?: FunctionName;
}

export function assistantsNamedToolChoiceSerializer(
  item: AssistantsNamedToolChoice,
): Record<string, unknown> {
  return {
    type: item["type"],
    function: !item.function
      ? item.function
      : functionNameSerializer(item.function),
  };
}

/** Known values of {@link AssistantsNamedToolChoiceType} that the service accepts. */
export enum KnownAssistantsNamedToolChoiceType {
  /** function */
  "function" = "function",
  /** codeInterpreter */
  codeInterpreter = "code_interpreter",
  /** fileSearch */
  fileSearch = "file_search",
}

/**
 * Available tool types for assistants named tools. \
 * {@link KnownAssistantsNamedToolChoiceType} can be used interchangeably with AssistantsNamedToolChoiceType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **function** \
 * **code_interpreter** \
 * **file_search**
 */
export type AssistantsNamedToolChoiceType = string;

/** The function name that will be used, if using the `function` tool */
export interface FunctionName {
  /** The name of the function to call */
  name: string;
}

export function functionNameSerializer(
  item: FunctionName,
): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

/** Data representing a single evaluation run of an assistant thread. */
export interface ThreadRun {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always 'thread.run'. */
  object: "thread.run";
  /** The ID of the thread associated with this run. */
  threadId: string;
  /** The ID of the assistant associated with the thread this run was performed against. */
  assistantId: string;
  /** The status of the assistant thread run. */
  status: RunStatus;
  /** The details of the action required for the assistant thread run to continue. */
  requiredAction?: RequiredActionUnion | null;
  /** The last error, if any, encountered by this assistant thread run. */
  lastError: RunError | null;
  /** The ID of the model to use. */
  model: string;
  /** The overridden system instructions used for this assistant thread run. */
  instructions: string;
  /** The overridden enabled tools used for this assistant thread run. */
  tools: ToolDefinitionUnion[];
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The Unix timestamp, in seconds, representing when this item expires. */
  expiresAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this item was started. */
  startedAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this completed. */
  completedAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this was cancelled. */
  cancelledAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this failed. */
  failedAt: Date | null;
  /** Details on why the run is incomplete. Will be `null` if the run is not incomplete. */
  incompleteDetails: IncompleteRunDetails | null;
  /** Usage statistics related to the run. This value will be `null` if the run is not in a terminal state (i.e. `in_progress`, `queued`, etc.). */
  usage: RunCompletionUsage | null;
  /** The sampling temperature used for this run. If not set, defaults to 1. */
  temperature?: number | null;
  /** The nucleus sampling value used for this run. If not set, defaults to 1. */
  topP?: number | null;
  /** The maximum number of prompt tokens specified to have been used over the course of the run. */
  maxPromptTokens: number | null;
  /** The maximum number of completion tokens specified to have been used over the course of the run. */
  maxCompletionTokens: number | null;
  /** The strategy to use for dropping messages as the context windows moves forward. */
  truncationStrategy: TruncationObject | null;
  /** Controls whether or not and which tool is called by the model. */
  toolChoice:
    | string
    | AssistantsApiToolChoiceOptionMode
    | AssistantsNamedToolChoice;
  /** The response format of the tool calls used in this run. */
  responseFormat:
    | string
    | AssistantsApiResponseFormatMode
    | AssistantsApiResponseFormat;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

/** Known values of {@link RunStatus} that the service accepts. */
export enum KnownRunStatus {
  /** queued */
  queued = "queued",
  /** inProgress */
  inProgress = "in_progress",
  /** requiresAction */
  requiresAction = "requires_action",
  /** cancelling */
  cancelling = "cancelling",
  /** cancelled */
  cancelled = "cancelled",
  /** failed */
  failed = "failed",
  /** completed */
  completed = "completed",
  /** expired */
  expired = "expired",
}

/**
 * Possible values for the status of an assistant thread run. \
 * {@link KnownRunStatus} can be used interchangeably with RunStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **queued** \
 * **in_progress** \
 * **requires_action** \
 * **cancelling** \
 * **cancelled** \
 * **failed** \
 * **completed** \
 * **expired**
 */
export type RunStatus = string;

/** An abstract representation of a required action for an assistant thread run to continue. */
export interface RequiredAction {
  /** the discriminator possible values: submit_tool_outputs */
  type: string;
}

/** The details for required tool calls that must be submitted for an assistant thread run to continue. */
export interface SubmitToolOutputsAction extends RequiredAction {
  /** The object type, which is always 'submit_tool_outputs'. */
  type: "submit_tool_outputs";
  /** The details describing tools that should be called to submit tool outputs. */
  submitToolOutputs: SubmitToolOutputsDetails;
}

/** The details describing tools that should be called to submit tool outputs. */
export interface SubmitToolOutputsDetails {
  /** The list of tool calls that must be resolved for the assistant thread run to continue. */
  toolCalls: RequiredToolCallUnion[];
}

/** An abstract representation a a tool invocation needed by the model to continue a run. */
export interface RequiredToolCall {
  /** the discriminator possible values: function */
  type: string;
  /** The ID of the tool call. This ID must be referenced when submitting tool outputs. */
  id: string;
}

/** A representation of a requested call to a function tool, needed by the model to continue evaluation of a run. */
export interface RequiredFunctionToolCall extends RequiredToolCall {
  /** The object type of the required tool call. Always 'function' for function tools. */
  type: "function";
  /** Detailed information about the function to be executed by the tool that includes name and arguments. */
  function: RequiredFunctionToolCallDetails;
}

/** The detailed information for a function invocation, as provided by a required action invoking a function tool, that includes the name of and arguments to the function. */
export interface RequiredFunctionToolCallDetails {
  /** The name of the function. */
  name: string;
  /** The arguments to use when invoking the named function, as provided by the model. Arguments are presented as a JSON document that should be validated and parsed for evaluation. */
  arguments: string;
}

/** The details of an error as encountered by an assistant thread run. */
export interface RunError {
  /** The status for the error. */
  code: string;
  /** The human-readable text associated with the error. */
  message: string;
}

/** Known values of {@link IncompleteRunDetails} that the service accepts. */
export enum KnownIncompleteRunDetails {
  /** maxCompletionTokens */
  maxCompletionTokens = "max_completion_tokens",
  /** maxPromptTokens */
  maxPromptTokens = "max_prompt_tokens",
}

/**
 * The reason why the run is incomplete. This will point to which specific token limit was reached over the course of the run. \
 * {@link KnownIncompleteRunDetails} can be used interchangeably with IncompleteRunDetails,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **max_completion_tokens** \
 * **max_prompt_tokens**
 */
export type IncompleteRunDetails = string;

/** Usage statistics related to the run. This value will be `null` if the run is not in a terminal state (i.e. `in_progress`, `queued`, etc.). */
export interface RunCompletionUsage {
  /** Number of completion tokens used over the course of the run. */
  completionTokens: number;
  /** Number of prompt tokens used over the course of the run. */
  promptTokens: number;
  /** Total number of tokens used (prompt + completion). */
  totalTokens: number;
}

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfThreadRun {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: ThreadRun[];
  /** The first ID represented in this list. */
  firstId: string;
  /** The last ID represented in this list. */
  lastId: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  hasMore?: boolean;
}

/** The data provided during a tool outputs submission to resolve pending tool calls and allow the model to continue. */
export interface ToolOutput {
  /** The ID of the tool call being resolved, as provided in the tool calls of a required action from a run. */
  toolCallId?: string;
  /** The output from the tool to be submitted. */
  output?: string;
}

export function toolOutputSerializer(
  item: ToolOutput,
): Record<string, unknown> {
  return {
    tool_call_id: item["toolCallId"],
    output: item["output"],
  };
}

/** The details used when creating and immediately running a new assistant thread. */
export interface CreateAndRunThreadOptions {
  /** The ID of the assistant for which the thread should be created. */
  assistantId: string;
  /** The details used to create the new thread. If no thread is provided, an empty one will be created. */
  thread?: AssistantThreadCreationOptions;
  /** The overridden model that the assistant should use to run the thread. */
  model?: string | null;
  /** The overridden system instructions the assistant should use to run the thread. */
  instructions?: string | null;
  /** The overridden list of enabled tools the assistant should use to run the thread. */
  tools?: ToolDefinitionUnion[] | null;
  /** Override the tools the assistant can use for this run. This is useful for modifying the behavior on a per-run basis. */
  toolResources?: UpdateToolResourcesOptions | null;
  /**
   * If `true`, returns a stream of events that happen during the Run as server-sent events,
   * terminating when the Run enters a terminal state with a `data: [DONE]` message.
   */
  stream?: boolean;
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output
   * more random, while lower values like 0.2 will make it more focused and deterministic.
   */
  temperature?: number | null;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model
   * considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens
   * comprising the top 10% probability mass are considered.
   *
   * We generally recommend altering this or temperature but not both.
   */
  topP?: number | null;
  /**
   * The maximum number of prompt tokens that may be used over the course of the run. The run will make a best effort to use only
   * the number of prompt tokens specified, across multiple turns of the run. If the run exceeds the number of prompt tokens specified,
   * the run will end with status `incomplete`. See `incomplete_details` for more info.
   */
  maxPromptTokens?: number | null;
  /**
   * The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only
   * the number of completion tokens specified, across multiple turns of the run. If the run exceeds the number of completion tokens
   * specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
   */
  maxCompletionTokens?: number | null;
  /** The strategy to use for dropping messages as the context windows moves forward. */
  truncationStrategy?: TruncationObject | null;
  /** Controls whether or not and which tool is called by the model. */
  toolChoice?:
    | string
    | AssistantsApiToolChoiceOptionMode
    | AssistantsNamedToolChoice;
  /** Specifies the format that the model must output. */
  responseFormat?:
    | string
    | AssistantsApiResponseFormatMode
    | AssistantsApiResponseFormat;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

export function createAndRunThreadOptionsSerializer(
  item: CreateAndRunThreadOptions,
): Record<string, unknown> {
  return {
    assistant_id: item["assistantId"],
    thread: !item.thread
      ? item.thread
      : assistantThreadCreationOptionsSerializer(item.thread),
    model: item["model"],
    instructions: item["instructions"],
    tools:
      item["tools"] === undefined || item["tools"] === null
        ? item["tools"]
        : item["tools"].map((p) => toolDefinitionUnionSerializer(p)),
    tool_resources: !item.toolResources
      ? item.toolResources
      : updateToolResourcesOptionsSerializer(item.toolResources),
    stream: item["stream"],
    temperature: item["temperature"],
    top_p: item["topP"],
    max_prompt_tokens: item["maxPromptTokens"],
    max_completion_tokens: item["maxCompletionTokens"],
    truncation_strategy: !item.truncationStrategy
      ? item.truncationStrategy
      : truncationObjectSerializer(item.truncationStrategy),
    tool_choice: item["toolChoice"],
    response_format: item["responseFormat"],
    metadata: !item.metadata
      ? item.metadata
      : (serializeRecord(item.metadata as any) as any),
  };
}

/** Detailed information about a single step of an assistant thread run. */
export interface RunStep {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always 'thread.run.step'. */
  object: "thread.run.step";
  /** The type of run step, which can be either message_creation or tool_calls. */
  type: RunStepType;
  /** The ID of the assistant associated with the run step. */
  assistantId: string;
  /** The ID of the thread that was run. */
  threadId: string;
  /** The ID of the run that this run step is a part of. */
  runId: string;
  /** The status of this run step. */
  status: RunStepStatus;
  /** The details for this run step. */
  stepDetails: RunStepDetailsUnion;
  /** If applicable, information about the last error encountered by this run step. */
  lastError: RunStepError | null;
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The Unix timestamp, in seconds, representing when this item expired. */
  expiredAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this completed. */
  completedAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this was cancelled. */
  cancelledAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this failed. */
  failedAt: Date | null;
  /** Usage statistics related to the run step. This value will be `null` while the run step's status is `in_progress`. */
  usage?: RunStepCompletionUsage | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

/** Known values of {@link RunStepType} that the service accepts. */
export enum KnownRunStepType {
  /** messageCreation */
  messageCreation = "message_creation",
  /** toolCalls */
  toolCalls = "tool_calls",
}

/**
 * The possible types of run steps. \
 * {@link KnownRunStepType} can be used interchangeably with RunStepType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **message_creation** \
 * **tool_calls**
 */
export type RunStepType = string;

/** Known values of {@link RunStepStatus} that the service accepts. */
export enum KnownRunStepStatus {
  /** inProgress */
  inProgress = "in_progress",
  /** cancelled */
  cancelled = "cancelled",
  /** failed */
  failed = "failed",
  /** completed */
  completed = "completed",
  /** expired */
  expired = "expired",
}

/**
 * Possible values for the status of a run step. \
 * {@link KnownRunStepStatus} can be used interchangeably with RunStepStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **in_progress** \
 * **cancelled** \
 * **failed** \
 * **completed** \
 * **expired**
 */
export type RunStepStatus = string;

/** An abstract representation of the details for a run step. */
export interface RunStepDetails {
  /** the discriminator possible values: message_creation, tool_calls */
  type: RunStepType;
}

/** The detailed information associated with a message creation run step. */
export interface RunStepMessageCreationDetails extends RunStepDetails {
  /** The object type, which is always 'message_creation'. */
  type: "message_creation";
  /** Information about the message creation associated with this run step. */
  messageCreation: RunStepMessageCreationReference;
}

/** The details of a message created as a part of a run step. */
export interface RunStepMessageCreationReference {
  /** The ID of the message created by this run step. */
  messageId: string;
}

/** The detailed information associated with a run step calling tools. */
export interface RunStepToolCallDetails extends RunStepDetails {
  /** The object type, which is always 'tool_calls'. */
  type: "tool_calls";
  /** A list of tool call details for this run step. */
  toolCalls: RunStepToolCallUnion[];
}

/** An abstract representation of a detailed tool call as recorded within a run step for an existing run. */
export interface RunStepToolCall {
  /** the discriminator possible values: code_interpreter, file_search, function */
  type: string;
  /** The ID of the tool call. This ID must be referenced when you submit tool outputs. */
  id: string;
}

/**
 * A record of a call to a code interpreter tool, issued by the model in evaluation of a defined tool, that
 * represents inputs and outputs consumed and emitted by the code interpreter.
 */
export interface RunStepCodeInterpreterToolCall extends RunStepToolCall {
  /** The object type, which is always 'code_interpreter'. */
  type: "code_interpreter";
  /** The details of the tool call to the code interpreter tool. */
  codeInterpreter: RunStepCodeInterpreterToolCallDetails;
}

/** The detailed information about a code interpreter invocation by the model. */
export interface RunStepCodeInterpreterToolCallDetails {
  /** The input provided by the model to the code interpreter tool. */
  input: string;
  /** The outputs produced by the code interpreter tool back to the model in response to the tool call. */
  outputs: RunStepCodeInterpreterToolCallOutputUnion[];
}

/** An abstract representation of an emitted output from a code interpreter tool. */
export interface RunStepCodeInterpreterToolCallOutput {
  /** the discriminator possible values: logs, image */
  type: string;
}

/** A representation of a log output emitted by a code interpreter tool in response to a tool call by the model. */
export interface RunStepCodeInterpreterLogOutput
  extends RunStepCodeInterpreterToolCallOutput {
  /** The object type, which is always 'logs'. */
  type: "logs";
  /** The serialized log output emitted by the code interpreter. */
  logs: string;
}

/** A representation of an image output emitted by a code interpreter tool in response to a tool call by the model. */
export interface RunStepCodeInterpreterImageOutput
  extends RunStepCodeInterpreterToolCallOutput {
  /** The object type, which is always 'image'. */
  type: "image";
  /** Referential information for the image associated with this output. */
  image: RunStepCodeInterpreterImageReference;
}

/** An image reference emitted by a code interpreter tool in response to a tool call by the model. */
export interface RunStepCodeInterpreterImageReference {
  /** The ID of the file associated with this image. */
  fileId: string;
}

/**
 * A record of a call to a file search tool, issued by the model in evaluation of a defined tool, that represents
 * executed file search.
 */
export interface RunStepFileSearchToolCall extends RunStepToolCall {
  /** The object type, which is always 'file_search'. */
  type: "file_search";
  /** Reserved for future use. */
  fileSearch: Record<string, string>;
}

/**
 * A record of a call to a function tool, issued by the model in evaluation of a defined tool, that represents the inputs
 * and output consumed and emitted by the specified function.
 */
export interface RunStepFunctionToolCall extends RunStepToolCall {
  /** The object type, which is always 'function'. */
  type: "function";
  /** The detailed information about the function called by the model. */
  function: RunStepFunctionToolCallDetails;
}

/** The detailed information about the function called by the model. */
export interface RunStepFunctionToolCallDetails {
  /** The name of the function. */
  name: string;
  /** The arguments that the model requires are provided to the named function. */
  arguments: string;
  /** The output of the function, only populated for function calls that have already have had their outputs submitted. */
  output: string | null;
}

/** The error information associated with a failed run step. */
export interface RunStepError {
  /** The error code for this error. */
  code: RunStepErrorCode;
  /** The human-readable text associated with this error. */
  message: string;
}

/** Known values of {@link RunStepErrorCode} that the service accepts. */
export enum KnownRunStepErrorCode {
  /** serverError */
  serverError = "server_error",
  /** rateLimitExceeded */
  rateLimitExceeded = "rate_limit_exceeded",
}

/**
 * Possible error code values attributable to a failed run step. \
 * {@link KnownRunStepErrorCode} can be used interchangeably with RunStepErrorCode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **server_error** \
 * **rate_limit_exceeded**
 */
export type RunStepErrorCode = string;

/** Usage statistics related to the run step. */
export interface RunStepCompletionUsage {
  /** Number of completion tokens used over the course of the run step. */
  completionTokens: number;
  /** Number of prompt tokens used over the course of the run step. */
  promptTokens: number;
  /** Total number of tokens used (prompt + completion). */
  totalTokens: number;
}

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfRunStep {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: RunStep[];
  /** The first ID represented in this list. */
  firstId: string;
  /** The last ID represented in this list. */
  lastId: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  hasMore?: boolean;
}

/** Known values of {@link FilePurpose} that the service accepts. */
export enum KnownFilePurpose {
  /** fineTune */
  fineTune = "fine-tune",
  /** fineTuneResults */
  fineTuneResults = "fine-tune-results",
  /** assistants */
  assistants = "assistants",
  /** assistantsOutput */
  assistantsOutput = "assistants_output",
  /** batch */
  batch = "batch",
  /** batchOutput */
  batchOutput = "batch_output",
  /** vision */
  vision = "vision",
}

/**
 * The possible values denoting the intended usage of a file. \
 * {@link KnownFilePurpose} can be used interchangeably with FilePurpose,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **fine-tune** \
 * **fine-tune-results** \
 * **assistants** \
 * **assistants_output** \
 * **batch** \
 * **batch_output** \
 * **vision**
 */
export type FilePurpose = string;

/** The response data from a file list operation. */
export interface FileListResponse {
  /** The object type, which is always 'list'. */
  object: "list";
  /** The files returned for the request. */
  data: OpenAIFile[];
}

/** Represents an assistant that can call the model and use tools. */
export interface OpenAIFile {
  /** The object type, which is always 'file'. */
  object: "file";
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The size of the file, in bytes. */
  bytes: number;
  /** The name of the file. */
  filename: string;
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The intended purpose of a file. */
  purpose: FilePurpose;
  /** The state of the file. This field is available in Azure OpenAI only. */
  status?: FileState;
  /** The error message with details in case processing of this file failed. This field is available in Azure OpenAI only. */
  statusDetails?: string;
}

/** Known values of {@link FileState} that the service accepts. */
export enum KnownFileState {
  /** uploaded */
  uploaded = "uploaded",
  /** pending */
  pending = "pending",
  /** running */
  running = "running",
  /** processed */
  processed = "processed",
  /** error */
  error = "error",
  /** deleting */
  deleting = "deleting",
  /** deleted */
  deleted = "deleted",
}

/**
 * The state of the file. \
 * {@link KnownFileState} can be used interchangeably with FileState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **uploaded** \
 * **pending** \
 * **running** \
 * **processed** \
 * **error** \
 * **deleting** \
 * **deleted**
 */
export type FileState = string;

/** A status response from a file deletion operation. */
export interface FileDeletionStatus {
  /** The ID of the resource specified for deletion. */
  id: string;
  /** A value indicating whether deletion was successful. */
  deleted: boolean;
  /** The object type, which is always 'file'. */
  object: "file";
}

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfVectorStore {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: VectorStore[];
  /** The first ID represented in this list. */
  firstId: string;
  /** The last ID represented in this list. */
  lastId: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  hasMore?: boolean;
}

/** A vector store is a collection of processed files can be used by the `file_search` tool. */
export interface VectorStore {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `vector_store` */
  object: "vector_store";
  /** The Unix timestamp (in seconds) for when the vector store was created. */
  createdAt: Date;
  /** The name of the vector store. */
  name: string;
  /** The total number of bytes used by the files in the vector store. */
  usageBytes: number;
  /** Files count grouped by status processed or being processed by this vector store. */
  fileCounts: VectorStoreFileCount;
  /** The status of the vector store, which can be either `expired`, `in_progress`, or `completed`. A status of `completed` indicates that the vector store is ready for use. */
  status: VectorStoreStatus;
  /** Details on when this vector store expires */
  expiresAfter?: VectorStoreExpirationPolicy;
  /** The Unix timestamp (in seconds) for when the vector store will expire. */
  expiresAt?: Date | null;
  /** The Unix timestamp (in seconds) for when the vector store was last active. */
  lastActiveAt: Date | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

/** Counts of files processed or being processed by this vector store grouped by status. */
export interface VectorStoreFileCount {
  /** The number of files that are currently being processed. */
  inProgress: number;
  /** The number of files that have been successfully processed. */
  completed: number;
  /** The number of files that have failed to process. */
  failed: number;
  /** The number of files that were cancelled. */
  cancelled: number;
  /** The total number of files. */
  total: number;
}

/** Known values of {@link VectorStoreStatus} that the service accepts. */
export enum KnownVectorStoreStatus {
  /** expired */
  expired = "expired",
  /** inProgress */
  inProgress = "in_progress",
  /** completed */
  completed = "completed",
}

/**
 * Vector store possible status \
 * {@link KnownVectorStoreStatus} can be used interchangeably with VectorStoreStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **expired** \
 * **in_progress** \
 * **completed**
 */
export type VectorStoreStatus = string;

/** The expiration policy for a vector store. */
export interface VectorStoreExpirationPolicy {
  /** Anchor timestamp after which the expiration policy applies. Supported anchors: `last_active_at`. */
  anchor: VectorStoreExpirationPolicyAnchor;
  /** The anchor timestamp after which the expiration policy applies. */
  days: number;
}

export function vectorStoreExpirationPolicySerializer(
  item: VectorStoreExpirationPolicy,
): Record<string, unknown> {
  return {
    anchor: item["anchor"],
    days: item["days"],
  };
}

/** Known values of {@link VectorStoreExpirationPolicyAnchor} that the service accepts. */
export enum KnownVectorStoreExpirationPolicyAnchor {
  /** lastActiveAt */
  lastActiveAt = "last_active_at",
}

/**
 * Describes the relationship between the days and the expiration of this vector store \
 * {@link KnownVectorStoreExpirationPolicyAnchor} can be used interchangeably with VectorStoreExpirationPolicyAnchor,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **last_active_at**
 */
export type VectorStoreExpirationPolicyAnchor = string;

/** Request object for creating a vector store. */
export interface VectorStoreOptions {
  /** A list of file IDs that the vector store should use. Useful for tools like `file_search` that can access files. */
  fileIds?: string[];
  /** The name of the vector store. */
  name?: string;
  /** Details on when this vector store expires */
  expiresAfter?: VectorStoreExpirationPolicy;
  /** The chunking strategy used to chunk the file(s). If not set, will use the auto strategy. Only applicable if file_ids is non-empty. */
  chunkingStrategy?: VectorStoreChunkingStrategyRequestUnion;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

export function vectorStoreOptionsSerializer(
  item: VectorStoreOptions,
): Record<string, unknown> {
  return {
    file_ids: item["fileIds"],
    name: item["name"],
    expires_after: !item.expiresAfter
      ? item.expiresAfter
      : vectorStoreExpirationPolicySerializer(item.expiresAfter),
    chunking_strategy: !item.chunkingStrategy
      ? item.chunkingStrategy
      : vectorStoreChunkingStrategyRequestUnionSerializer(
          item.chunkingStrategy,
        ),
    metadata: !item.metadata
      ? item.metadata
      : (serializeRecord(item.metadata as any) as any),
  };
}

/** Request object for updating a vector store. */
export interface VectorStoreUpdateOptions {
  /** The name of the vector store. */
  name?: string | null;
  /** Details on when this vector store expires */
  expiresAfter?: VectorStoreExpirationPolicy | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

export function vectorStoreUpdateOptionsSerializer(
  item: VectorStoreUpdateOptions,
): Record<string, unknown> {
  return {
    name: item["name"],
    expires_after: !item.expiresAfter
      ? item.expiresAfter
      : vectorStoreExpirationPolicySerializer(item.expiresAfter),
    metadata: !item.metadata
      ? item.metadata
      : (serializeRecord(item.metadata as any) as any),
  };
}

/** Response object for deleting a vector store. */
export interface VectorStoreDeletionStatus {
  /** The ID of the resource specified for deletion. */
  id: string;
  /** A value indicating whether deletion was successful. */
  deleted: boolean;
  /** The object type, which is always 'vector_store.deleted'. */
  object: "vector_store.deleted";
}

/** Known values of {@link VectorStoreFileStatusFilter} that the service accepts. */
export enum KnownVectorStoreFileStatusFilter {
  /** inProgress */
  inProgress = "in_progress",
  /** completed */
  completed = "completed",
  /** failed */
  failed = "failed",
  /** cancelled */
  cancelled = "cancelled",
}

/**
 * Query parameter filter for vector store file retrieval endpoint \
 * {@link KnownVectorStoreFileStatusFilter} can be used interchangeably with VectorStoreFileStatusFilter,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **in_progress** \
 * **completed** \
 * **failed** \
 * **cancelled**
 */
export type VectorStoreFileStatusFilter = string;

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfVectorStoreFile {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: VectorStoreFile[];
  /** The first ID represented in this list. */
  firstId: string;
  /** The last ID represented in this list. */
  lastId: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  hasMore?: boolean;
}

/** Description of a file attached to a vector store. */
export interface VectorStoreFile {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `vector_store.file`. */
  object: "vector_store.file";
  /**
   * The total vector store usage in bytes. Note that this may be different from the original file
   * size.
   */
  usageBytes: number;
  /** The Unix timestamp (in seconds) for when the vector store file was created. */
  createdAt: Date;
  /** The ID of the vector store that the file is attached to. */
  vectorStoreId: string;
  /** The status of the vector store file, which can be either `in_progress`, `completed`, `cancelled`, or `failed`. The status `completed` indicates that the vector store file is ready for use. */
  status: VectorStoreFileStatus;
  /** The last error associated with this vector store file. Will be `null` if there are no errors. */
  lastError: VectorStoreFileError | null;
  /** The strategy used to chunk the file. */
  chunkingStrategy: VectorStoreChunkingStrategyResponseUnion;
}

/** Known values of {@link VectorStoreFileStatus} that the service accepts. */
export enum KnownVectorStoreFileStatus {
  /** inProgress */
  inProgress = "in_progress",
  /** completed */
  completed = "completed",
  /** failed */
  failed = "failed",
  /** cancelled */
  cancelled = "cancelled",
}

/**
 * Vector store file status \
 * {@link KnownVectorStoreFileStatus} can be used interchangeably with VectorStoreFileStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **in_progress** \
 * **completed** \
 * **failed** \
 * **cancelled**
 */
export type VectorStoreFileStatus = string;

/** Details on the error that may have ocurred while processing a file for this vector store */
export interface VectorStoreFileError {
  /** One of `server_error` or `rate_limit_exceeded`. */
  code: VectorStoreFileErrorCode;
  /** A human-readable description of the error. */
  message: string;
}

/** Known values of {@link VectorStoreFileErrorCode} that the service accepts. */
export enum KnownVectorStoreFileErrorCode {
  /** internalError */
  internalError = "internal_error",
  /** fileNotFound */
  fileNotFound = "file_not_found",
  /** parsingError */
  parsingError = "parsing_error",
  /** unhandledMimeType */
  unhandledMimeType = "unhandled_mime_type",
}

/**
 * Error code variants for vector store file processing \
 * {@link KnownVectorStoreFileErrorCode} can be used interchangeably with VectorStoreFileErrorCode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **internal_error** \
 * **file_not_found** \
 * **parsing_error** \
 * **unhandled_mime_type**
 */
export type VectorStoreFileErrorCode = string;

/** An abstract representation of a vector store chunking strategy configuration. */
export interface VectorStoreChunkingStrategyResponse {
  /** the discriminator possible values: other, static */
  type: VectorStoreChunkingStrategyResponseType;
}

/** This is returned when the chunking strategy is unknown. Typically, this is because the file was indexed before the chunking_strategy concept was introduced in the API. */
export interface VectorStoreAutoChunkingStrategyResponse
  extends VectorStoreChunkingStrategyResponse {
  /** The object type, which is always 'other'. */
  type: "other";
}

/** A statically configured chunking strategy. */
export interface VectorStoreStaticChunkingStrategyResponse
  extends VectorStoreChunkingStrategyResponse {
  /** The object type, which is always 'static'. */
  type: "static";
  /** The options for the static chunking strategy. */
  static: VectorStoreStaticChunkingStrategyOptions;
}

/** Known values of {@link VectorStoreChunkingStrategyResponseType} that the service accepts. */
export enum KnownVectorStoreChunkingStrategyResponseType {
  /** other */
  other = "other",
  /** static */
  "static" = "static",
}

/**
 * Type of chunking strategy \
 * {@link KnownVectorStoreChunkingStrategyResponseType} can be used interchangeably with VectorStoreChunkingStrategyResponseType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **other** \
 * **static**
 */
export type VectorStoreChunkingStrategyResponseType = string;

/** Response object for deleting a vector store file relationship. */
export interface VectorStoreFileDeletionStatus {
  /** The ID of the resource specified for deletion. */
  id: string;
  /** A value indicating whether deletion was successful. */
  deleted: boolean;
  /** The object type, which is always 'vector_store.deleted'. */
  object: "vector_store.file.deleted";
}

/** A batch of files attached to a vector store. */
export interface VectorStoreFileBatch {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `vector_store.file_batch`. */
  object: "vector_store.files_batch";
  /** The Unix timestamp (in seconds) for when the vector store files batch was created. */
  createdAt: Date;
  /** The ID of the vector store that the file is attached to. */
  vectorStoreId: string;
  /** The status of the vector store files batch, which can be either `in_progress`, `completed`, `cancelled` or `failed`. */
  status: VectorStoreFileBatchStatus;
  /** Files count grouped by status processed or being processed by this vector store. */
  fileCounts: VectorStoreFileCount;
}

/** Known values of {@link VectorStoreFileBatchStatus} that the service accepts. */
export enum KnownVectorStoreFileBatchStatus {
  /** inProgress */
  inProgress = "in_progress",
  /** completed */
  completed = "completed",
  /** cancelled */
  cancelled = "cancelled",
  /** failed */
  failed = "failed",
}

/**
 * The status of the vector store file batch. \
 * {@link KnownVectorStoreFileBatchStatus} can be used interchangeably with VectorStoreFileBatchStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **in_progress** \
 * **completed** \
 * **cancelled** \
 * **failed**
 */
export type VectorStoreFileBatchStatus = string;
/** The known set of supported API versions. */
export type ServiceApiVersions =
  | "2024-02-15-preview"
  | "2024-05-01-preview"
  | "2024-07-01-preview";

/** Represents a message delta i.e. any changed fields on a message during streaming. */
export interface MessageDeltaChunk {
  /** The identifier of the message, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `thread.message.delta`. */
  object: "thread.message.delta";
  /** The delta containing the fields that have changed on the Message. */
  delta: MessageDelta;
}

/** Represents the typed 'delta' payload within a streaming message delta chunk. */
export interface MessageDelta {
  /** The entity that produced the message. */
  role: MessageRole;
  /** The content of the message as an array of text and/or images. */
  content: MessageDeltaContentUnion[];
}

/** The abstract base representation of a partial streamed message content payload. */
export interface MessageDeltaContent {
  /** The index of the content part of the message. */
  index: number;
  /** the discriminator possible values: image_file, text */
  type: string;
}

/** Represents a streamed image file content part within a streaming message delta chunk. */
export interface MessageDeltaImageFileContent extends MessageDeltaContent {
  /** The type of content for this content part, which is always "image_file." */
  type: "image_file";
  /** The image_file data. */
  imageFile?: MessageDeltaImageFileContentObject;
}

/** Represents the 'image_file' payload within streaming image file content. */
export interface MessageDeltaImageFileContentObject {
  /** The file ID of the image in the message content. */
  fileId?: string;
}

/** Represents a streamed text content part within a streaming message delta chunk. */
export interface MessageDeltaTextContentObject extends MessageDeltaContent {
  /** The type of content for this content part, which is always "text." */
  type: "text";
  /** The text content details. */
  text?: MessageDeltaTextContent;
}

/** Represents the data of a streamed text content part within a streaming message delta chunk. */
export interface MessageDeltaTextContent {
  /** The data that makes up the text. */
  value?: string;
  /** Annotations for the text. */
  annotations?: MessageDeltaTextAnnotationUnion[];
}

/** The abstract base representation of a streamed text content part's text annotation. */
export interface MessageDeltaTextAnnotation {
  /** The index of the annotation within a text content part. */
  index: number;
  /** the discriminator possible values: file_citation, file_path */
  type: string;
}

/** Represents a streamed file citation applied to a streaming text content part. */
export interface MessageDeltaTextFileCitationAnnotationObject
  extends MessageDeltaTextAnnotation {
  /** The type of the text content annotation, which is always "file_citation." */
  type: "file_citation";
  /** The file citation information. */
  fileCitation?: MessageDeltaTextFileCitationAnnotation;
  /** The text in the message content that needs to be replaced */
  text?: string;
  /** The start index of this annotation in the content text. */
  startIndex?: number;
  /** The end index of this annotation in the content text. */
  endIndex?: number;
}

/** Represents the data of a streamed file citation as applied to a streaming text content part. */
export interface MessageDeltaTextFileCitationAnnotation {
  /** The ID of the specific file the citation is from. */
  fileId?: string;
  /** The specific quote in the cited file. */
  quote?: string;
}

/** Represents a streamed file path annotation applied to a streaming text content part. */
export interface MessageDeltaTextFilePathAnnotationObject
  extends MessageDeltaTextAnnotation {
  /** The type of the text content annotation, which is always "file_path." */
  type: "file_path";
  /** The file path information. */
  filePath?: MessageDeltaTextFilePathAnnotation;
  /** The start index of this annotation in the content text. */
  startIndex?: number;
  /** The end index of this annotation in the content text. */
  endIndex?: number;
  /** The text in the message content that needs to be replaced */
  text?: string;
}

/** Represents the data of a streamed file path annotation as applied to a streaming text content part. */
export interface MessageDeltaTextFilePathAnnotation {
  /** The file ID for the annotation. */
  fileId?: string;
}

/** Represents a run step delta i.e. any changed fields on a run step during streaming. */
export interface RunStepDeltaChunk {
  /** The identifier of the run step, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `thread.run.step.delta`. */
  object: "thread.run.step.delta";
  /** The delta containing the fields that have changed on the run step. */
  delta: RunStepDelta;
}

/** Represents the delta payload in a streaming run step delta chunk. */
export interface RunStepDelta {
  /** The details of the run step. */
  stepDetails?: RunStepDeltaDetailUnion;
}

/** Represents a single run step detail item in a streaming run step's delta payload. */
export interface RunStepDeltaDetail {
  /** the discriminator possible values: message_creation, tool_calls */
  type: string;
}

/** Represents a message creation within a streaming run step delta. */
export interface RunStepDeltaMessageCreation extends RunStepDeltaDetail {
  /** The object type, which is always "message_creation." */
  type: "message_creation";
  /** The message creation data. */
  messageCreation?: RunStepDeltaMessageCreationObject;
}

/** Represents the data within a streaming run step message creation response object. */
export interface RunStepDeltaMessageCreationObject {
  /** The ID of the newly-created message. */
  messageId?: string;
}

/** Represents an invocation of tool calls as part of a streaming run step. */
export interface RunStepDeltaToolCallObject extends RunStepDeltaDetail {
  /** The object type, which is always "tool_calls." */
  type: "tool_calls";
  /** The collection of tool calls for the tool call detail item. */
  toolCalls?: RunStepDeltaToolCallUnion[];
}

/** The abstract base representation of a single tool call within a streaming run step's delta tool call details. */
export interface RunStepDeltaToolCall {
  /** The index of the tool call detail in the run step's tool_calls array. */
  index: number;
  /** The ID of the tool call, used when submitting outputs to the run. */
  id: string;
  /** the discriminator possible values: function, file_search, code_interpreter */
  type: string;
}

/** Represents a function tool call within a streaming run step's tool call details. */
export interface RunStepDeltaFunctionToolCall extends RunStepDeltaToolCall {
  /** The object type, which is always "function." */
  type: "function";
  /** The function data for the tool call. */
  function?: RunStepDeltaFunction;
}

/** Represents the function data in a streaming run step delta's function tool call. */
export interface RunStepDeltaFunction {
  /** The name of the function. */
  name?: string;
  /** The arguments passed to the function as input. */
  arguments?: string;
  /** The output of the function, null if outputs have not yet been submitted. */
  output?: string | null;
}

/** Represents a file search tool call within a streaming run step's tool call details. */
export interface RunStepDeltaFileSearchToolCall extends RunStepDeltaToolCall {
  /** The object type, which is always "file_search." */
  type: "file_search";
  /** Reserved for future use. */
  fileSearch?: Record<string, string>;
}

/** Represents a Code Interpreter tool call within a streaming run step's tool call details. */
export interface RunStepDeltaCodeInterpreterToolCall
  extends RunStepDeltaToolCall {
  /** The object type, which is always "code_interpreter." */
  type: "code_interpreter";
  /** The Code Interpreter data for the tool call. */
  codeInterpreter?: RunStepDeltaCodeInterpreterDetailItemObject;
}

/** Represents the Code Interpreter tool call data in a streaming run step's tool calls. */
export interface RunStepDeltaCodeInterpreterDetailItemObject {
  /** The input into the Code Interpreter tool call. */
  input?: string;
  /**
   * The outputs from the Code Interpreter tool call. Code Interpreter can output one or more
   * items, including text (`logs`) or images (`image`). Each of these are represented by a
   * different object type.
   */
  outputs?: RunStepDeltaCodeInterpreterOutputUnion[];
}

/** The abstract base representation of a streaming run step tool call's Code Interpreter tool output. */
export interface RunStepDeltaCodeInterpreterOutput {
  /** The index of the output in the streaming run step tool call's Code Interpreter outputs array. */
  index: number;
  /** the discriminator possible values: logs, image */
  type: string;
}

/** Represents a log output as produced by the Code Interpreter tool and as represented in a streaming run step's delta tool calls collection. */
export interface RunStepDeltaCodeInterpreterLogOutput
  extends RunStepDeltaCodeInterpreterOutput {
  /** The type of the object, which is always "logs." */
  type: "logs";
  /** The text output from the Code Interpreter tool call. */
  logs?: string;
}

/** Represents an image output as produced the Code interpreter tool and as represented in a streaming run step's delta tool calls collection. */
export interface RunStepDeltaCodeInterpreterImageOutput
  extends RunStepDeltaCodeInterpreterOutput {
  /** The object type, which is always "image." */
  type: "image";
  /** The image data for the Code Interpreter tool call output. */
  image?: RunStepDeltaCodeInterpreterImageOutputObject;
}

/** Represents the data for a streaming run step's Code Interpreter tool call image output. */
export interface RunStepDeltaCodeInterpreterImageOutputObject {
  /** The file ID for the image. */
  fileId?: string;
}

/** Known values of {@link ThreadStreamEvent} that the service accepts. */
export enum KnownThreadStreamEvent {
  /** ThreadCreated */
  ThreadCreated = "thread.created",
}

/**
 * Thread operation related streaming events \
 * {@link KnownThreadStreamEvent} can be used interchangeably with ThreadStreamEvent,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **thread.created**
 */
export type ThreadStreamEvent = string;

/** Known values of {@link RunStreamEvent} that the service accepts. */
export enum KnownRunStreamEvent {
  /** ThreadRunCreated */
  ThreadRunCreated = "thread.run.created",
  /** ThreadRunQueued */
  ThreadRunQueued = "thread.run.queued",
  /** ThreadRunInProgress */
  ThreadRunInProgress = "thread.run.in_progress",
  /** ThreadRunRequiresAction */
  ThreadRunRequiresAction = "thread.run.requires_action",
  /** ThreadRunCompleted */
  ThreadRunCompleted = "thread.run.completed",
  /** ThreadRunFailed */
  ThreadRunFailed = "thread.run.failed",
  /** ThreadRunCancelling */
  ThreadRunCancelling = "thread.run.cancelling",
  /** ThreadRunCancelled */
  ThreadRunCancelled = "thread.run.cancelled",
  /** ThreadRunExpired */
  ThreadRunExpired = "thread.run.expired",
}

/**
 * Run operation related streaming events \
 * {@link KnownRunStreamEvent} can be used interchangeably with RunStreamEvent,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **thread.run.created** \
 * **thread.run.queued** \
 * **thread.run.in_progress** \
 * **thread.run.requires_action** \
 * **thread.run.completed** \
 * **thread.run.failed** \
 * **thread.run.cancelling** \
 * **thread.run.cancelled** \
 * **thread.run.expired**
 */
export type RunStreamEvent = string;

/** Known values of {@link RunStepStreamEvent} that the service accepts. */
export enum KnownRunStepStreamEvent {
  /** ThreadRunStepCreated */
  ThreadRunStepCreated = "thread.run.step.created",
  /** ThreadRunStepInProgress */
  ThreadRunStepInProgress = "thread.run.step.in_progress",
  /** ThreadRunStepDelta */
  ThreadRunStepDelta = "thread.run.step.delta",
  /** ThreadRunStepCompleted */
  ThreadRunStepCompleted = "thread.run.step.completed",
  /** ThreadRunStepFailed */
  ThreadRunStepFailed = "thread.run.step.failed",
  /** ThreadRunStepCancelled */
  ThreadRunStepCancelled = "thread.run.step.cancelled",
  /** ThreadRunStepExpired */
  ThreadRunStepExpired = "thread.run.step.expired",
}

/**
 * Run step operation related streaming events \
 * {@link KnownRunStepStreamEvent} can be used interchangeably with RunStepStreamEvent,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **thread.run.step.created** \
 * **thread.run.step.in_progress** \
 * **thread.run.step.delta** \
 * **thread.run.step.completed** \
 * **thread.run.step.failed** \
 * **thread.run.step.cancelled** \
 * **thread.run.step.expired**
 */
export type RunStepStreamEvent = string;

/** Known values of {@link MessageStreamEvent} that the service accepts. */
export enum KnownMessageStreamEvent {
  /** ThreadMessageCreated */
  ThreadMessageCreated = "thread.message.created",
  /** ThreadMessageInProgress */
  ThreadMessageInProgress = "thread.message.in_progress",
  /** ThreadMessageDelta */
  ThreadMessageDelta = "thread.message.delta",
  /** ThreadMessageCompleted */
  ThreadMessageCompleted = "thread.message.completed",
  /** ThreadMessageIncomplete */
  ThreadMessageIncomplete = "thread.message.incomplete",
}

/**
 * Message operation related streaming events \
 * {@link KnownMessageStreamEvent} can be used interchangeably with MessageStreamEvent,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **thread.message.created** \
 * **thread.message.in_progress** \
 * **thread.message.delta** \
 * **thread.message.completed** \
 * **thread.message.incomplete**
 */
export type MessageStreamEvent = string;

/** Known values of {@link ErrorEvent} that the service accepts. */
export enum KnownErrorEvent {
  /** Error */
  Error = "error",
}

/**
 * Terminal event indicating a server side error while streaming. \
 * {@link KnownErrorEvent} can be used interchangeably with ErrorEvent,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **error**
 */
export type ErrorEvent = string;

/** Known values of {@link DoneEvent} that the service accepts. */
export enum KnownDoneEvent {
  /** Done */
  Done = "done",
}

/**
 * Terminal event indicating the successful end of a stream. \
 * {@link KnownDoneEvent} can be used interchangeably with DoneEvent,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **done**
 */
export type DoneEvent = string;
/** Alias for ToolDefinitionUnion */
export type ToolDefinitionUnion =
  | CodeInterpreterToolDefinition
  | FileSearchToolDefinition
  | FunctionToolDefinition
  | ToolDefinition;
/** Alias for VectorStoreChunkingStrategyRequestUnion */
export type VectorStoreChunkingStrategyRequestUnion =
  | VectorStoreAutoChunkingStrategyRequest
  | VectorStoreStaticChunkingStrategyRequest
  | VectorStoreChunkingStrategyRequest;
/** Alias for CreateFileSearchToolResourceOptions */
export type CreateFileSearchToolResourceOptions =
  | string[]
  | CreateFileSearchToolResourceVectorStoreOptions[];
/** Alias for MessageAttachmentToolDefinition */
export type MessageAttachmentToolDefinition =
  | CodeInterpreterToolDefinition
  | FileSearchToolDefinition;
/** Alias for MessageContentUnion */
export type MessageContentUnion =
  | MessageTextContent
  | MessageImageFileContent
  | MessageContent;
/** Alias for MessageTextAnnotationUnion */
export type MessageTextAnnotationUnion =
  | MessageTextFileCitationAnnotation
  | MessageTextFilePathAnnotation
  | MessageTextAnnotation;
/** Alias for RequiredActionUnion */
export type RequiredActionUnion = SubmitToolOutputsAction | RequiredAction;
/** Alias for RequiredActionUnion */
export type RequiredActionUnion = SubmitToolOutputsAction | RequiredAction;
/** Alias for RequiredToolCallUnion */
export type RequiredToolCallUnion = RequiredFunctionToolCall | RequiredToolCall;
/** Alias for RunStepDetailsUnion */
export type RunStepDetailsUnion =
  | RunStepMessageCreationDetails
  | RunStepToolCallDetails
  | RunStepDetails;
/** Alias for RunStepToolCallUnion */
export type RunStepToolCallUnion =
  | RunStepCodeInterpreterToolCall
  | RunStepFileSearchToolCall
  | RunStepFunctionToolCall
  | RunStepToolCall;
/** Alias for RunStepCodeInterpreterToolCallOutputUnion */
export type RunStepCodeInterpreterToolCallOutputUnion =
  | RunStepCodeInterpreterLogOutput
  | RunStepCodeInterpreterImageOutput
  | RunStepCodeInterpreterToolCallOutput;
/** Alias for VectorStoreChunkingStrategyResponseUnion */
export type VectorStoreChunkingStrategyResponseUnion =
  | VectorStoreAutoChunkingStrategyResponse
  | VectorStoreStaticChunkingStrategyResponse
  | VectorStoreChunkingStrategyResponse;
/** Alias for MessageDeltaContentUnion */
export type MessageDeltaContentUnion =
  | MessageDeltaImageFileContent
  | MessageDeltaTextContentObject
  | MessageDeltaContent;
/** Alias for MessageDeltaTextAnnotationUnion */
export type MessageDeltaTextAnnotationUnion =
  | MessageDeltaTextFileCitationAnnotationObject
  | MessageDeltaTextFilePathAnnotationObject
  | MessageDeltaTextAnnotation;
/** Alias for RunStepDeltaDetailUnion */
export type RunStepDeltaDetailUnion =
  | RunStepDeltaMessageCreation
  | RunStepDeltaToolCallObject
  | RunStepDeltaDetail;
/** Alias for RunStepDeltaToolCallUnion */
export type RunStepDeltaToolCallUnion =
  | RunStepDeltaFunctionToolCall
  | RunStepDeltaFileSearchToolCall
  | RunStepDeltaCodeInterpreterToolCall
  | RunStepDeltaToolCall;
/** Alias for RunStepDeltaCodeInterpreterOutputUnion */
export type RunStepDeltaCodeInterpreterOutputUnion =
  | RunStepDeltaCodeInterpreterLogOutput
  | RunStepDeltaCodeInterpreterImageOutput
  | RunStepDeltaCodeInterpreterOutput;
