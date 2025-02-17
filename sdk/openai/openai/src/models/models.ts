// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
  responseFormat?: AssistantsApiResponseFormatOption | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

export function assistantCreationOptionsSerializer(
  item: AssistantCreationOptions,
): any {
  return {
    model: item["model"],
    name: item["name"],
    description: item["description"],
    instructions: item["instructions"],
    tools: !item["tools"]
      ? item["tools"]
      : toolDefinitionUnionArraySerializer(item["tools"]),
    tool_resources: !item["toolResources"]
      ? item["toolResources"]
      : createToolResourcesOptionsSerializer(item["toolResources"]),
    temperature: item["temperature"],
    top_p: item["topP"],
    response_format: !item["responseFormat"]
      ? item["responseFormat"]
      : assistantsApiResponseFormatOptionSerializer(item["responseFormat"]),
    metadata: item["metadata"],
  };
}

export function toolDefinitionUnionArraySerializer(
  result: Array<ToolDefinitionUnion>,
): any[] {
  return result.map((item) => {
    return toolDefinitionUnionSerializer(item);
  });
}

export function toolDefinitionUnionArrayDeserializer(
  result: Array<ToolDefinitionUnion>,
): any[] {
  return result.map((item) => {
    return toolDefinitionUnionDeserializer(item);
  });
}

/** An abstract representation of an input tool definition that an assistant can use. */
export interface ToolDefinition {
  /** The object type. */
  /** The discriminator possible values: code_interpreter, file_search, function */
  type: string;
}

export function toolDefinitionSerializer(item: ToolDefinition): any {
  return { type: item["type"] };
}

export function toolDefinitionDeserializer(item: any): ToolDefinition {
  return {
    type: item["type"],
  };
}

/** Alias for ToolDefinitionUnion */
export type ToolDefinitionUnion =
  | CodeInterpreterToolDefinition
  | FileSearchToolDefinition
  | FunctionToolDefinition
  | ToolDefinition;

export function toolDefinitionUnionSerializer(item: ToolDefinitionUnion): any {
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

export function toolDefinitionUnionDeserializer(
  item: any,
): ToolDefinitionUnion {
  switch (item.type) {
    case "code_interpreter":
      return codeInterpreterToolDefinitionDeserializer(
        item as CodeInterpreterToolDefinition,
      );

    case "file_search":
      return fileSearchToolDefinitionDeserializer(
        item as FileSearchToolDefinition,
      );

    case "function":
      return functionToolDefinitionDeserializer(item as FunctionToolDefinition);

    default:
      return toolDefinitionDeserializer(item);
  }
}

/** The input definition information for a code interpreter tool as used to configure an assistant. */
export interface CodeInterpreterToolDefinition extends ToolDefinition {
  /** The object type, which is always 'code_interpreter'. */
  type: "code_interpreter";
}

export function codeInterpreterToolDefinitionSerializer(
  item: CodeInterpreterToolDefinition,
): any {
  return { type: item["type"] };
}

export function codeInterpreterToolDefinitionDeserializer(
  item: any,
): CodeInterpreterToolDefinition {
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
): any {
  return {
    type: item["type"],
    file_search: !item["fileSearch"]
      ? item["fileSearch"]
      : fileSearchToolDefinitionDetailsSerializer(item["fileSearch"]),
  };
}

export function fileSearchToolDefinitionDeserializer(
  item: any,
): FileSearchToolDefinition {
  return {
    type: item["type"],
    fileSearch: !item["file_search"]
      ? item["file_search"]
      : fileSearchToolDefinitionDetailsDeserializer(item["file_search"]),
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
): any {
  return { max_num_results: item["maxNumResults"] };
}

export function fileSearchToolDefinitionDetailsDeserializer(
  item: any,
): FileSearchToolDefinitionDetails {
  return {
    maxNumResults: item["max_num_results"],
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
): any {
  return {
    type: item["type"],
    function: functionDefinitionSerializer(item["function"]),
  };
}

export function functionToolDefinitionDeserializer(
  item: any,
): FunctionToolDefinition {
  return {
    type: item["type"],
    function: functionDefinitionDeserializer(item["function"]),
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

export function functionDefinitionSerializer(item: FunctionDefinition): any {
  return {
    name: item["name"],
    description: item["description"],
    parameters: item["parameters"],
  };
}

export function functionDefinitionDeserializer(item: any): FunctionDefinition {
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
): any {
  return {
    code_interpreter: !item["codeInterpreter"]
      ? item["codeInterpreter"]
      : createCodeInterpreterToolResourceOptionsSerializer(
          item["codeInterpreter"],
        ),
    file_search: !item["fileSearch"]
      ? item["fileSearch"]
      : createFileSearchToolResourceOptionsSerializer(item["fileSearch"]),
  };
}

/** A set of resources that will be used by the `code_interpreter` tool. Request object. */
export interface CreateCodeInterpreterToolResourceOptions {
  /** A list of file IDs made available to the `code_interpreter` tool. */
  fileIds?: string[];
}

export function createCodeInterpreterToolResourceOptionsSerializer(
  item: CreateCodeInterpreterToolResourceOptions,
): any {
  return {
    file_ids: !item["fileIds"]
      ? item["fileIds"]
      : item["fileIds"].map((p: any) => {
          return p;
        }),
  };
}

/** Alias for CreateFileSearchToolResourceOptions */
export type CreateFileSearchToolResourceOptions =
  | string[]
  | CreateFileSearchToolResourceVectorStoreOptions[];

export function createFileSearchToolResourceOptionsSerializer(
  item: CreateFileSearchToolResourceOptions,
): any {
  return item;
}

export function createFileSearchToolResourceVectorStoreOptionsArraySerializer(
  result: Array<CreateFileSearchToolResourceVectorStoreOptions>,
): any[] {
  return result.map((item) => {
    return createFileSearchToolResourceVectorStoreOptionsSerializer(item);
  });
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
): any {
  return {
    file_ids: item["fileIds"].map((p: any) => {
      return p;
    }),
    chunking_strategy: vectorStoreChunkingStrategyRequestUnionSerializer(
      item["chunkingStrategy"],
    ),
    metadata: item["metadata"],
  };
}

/** An abstract representation of a vector store chunking strategy configuration. */
export interface VectorStoreChunkingStrategyRequest {
  /** The object type. */
  /** The discriminator possible values: auto, static */
  type: VectorStoreChunkingStrategyRequestType;
}

export function vectorStoreChunkingStrategyRequestSerializer(
  item: VectorStoreChunkingStrategyRequest,
): any {
  return { type: item["type"] };
}

/** Alias for VectorStoreChunkingStrategyRequestUnion */
export type VectorStoreChunkingStrategyRequestUnion =
  | VectorStoreAutoChunkingStrategyRequest
  | VectorStoreStaticChunkingStrategyRequest
  | VectorStoreChunkingStrategyRequest;

export function vectorStoreChunkingStrategyRequestUnionSerializer(
  item: VectorStoreChunkingStrategyRequestUnion,
): any {
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

/** Type of chunking strategy */
export type VectorStoreChunkingStrategyRequestType = "auto" | "static";

/** The default strategy. This strategy currently uses a max_chunk_size_tokens of 800 and chunk_overlap_tokens of 400. */
export interface VectorStoreAutoChunkingStrategyRequest
  extends VectorStoreChunkingStrategyRequest {
  /** The object type, which is always 'auto'. */
  type: "auto";
}

export function vectorStoreAutoChunkingStrategyRequestSerializer(
  item: VectorStoreAutoChunkingStrategyRequest,
): any {
  return { type: item["type"] };
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
): any {
  return {
    type: item["type"],
    static: vectorStoreStaticChunkingStrategyOptionsSerializer(item["static"]),
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
): any {
  return {
    max_chunk_size_tokens: item["maxChunkSizeTokens"],
    chunk_overlap_tokens: item["chunkOverlapTokens"],
  };
}

export function vectorStoreStaticChunkingStrategyOptionsDeserializer(
  item: any,
): VectorStoreStaticChunkingStrategyOptions {
  return {
    maxChunkSizeTokens: item["max_chunk_size_tokens"],
    chunkOverlapTokens: item["chunk_overlap_tokens"],
  };
}

/** Alias for AssistantsApiResponseFormatOption */
export type AssistantsApiResponseFormatOption =
  | string
  | AssistantsApiResponseFormatMode
  | AssistantsApiResponseFormat;

export function assistantsApiResponseFormatOptionSerializer(
  item: AssistantsApiResponseFormatOption,
): any {
  return item;
}

export function assistantsApiResponseFormatOptionDeserializer(
  item: any,
): AssistantsApiResponseFormatOption {
  return item;
}

/** Represents the mode in which the model will handle the return format of a tool call. */
export type AssistantsApiResponseFormatMode = "auto" | "none";

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
): any {
  return { type: item["type"] };
}

export function assistantsApiResponseFormatDeserializer(
  item: any,
): AssistantsApiResponseFormat {
  return {
    type: item["type"],
  };
}

/** Possible API response formats. */
export type ApiResponseFormat = "text" | "json_object";

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
  responseFormat?: AssistantsApiResponseFormatOption | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

export function assistantDeserializer(item: any): Assistant {
  return {
    id: item["id"],
    object: item["object"],
    createdAt: new Date(item["created_at"] * 1000),
    name: item["name"],
    description: item["description"],
    model: item["model"],
    instructions: item["instructions"],
    tools: toolDefinitionUnionArrayDeserializer(item["tools"]),
    toolResources: !item["tool_resources"]
      ? item["tool_resources"]
      : toolResourcesDeserializer(item["tool_resources"]),
    temperature: item["temperature"],
    topP: item["top_p"],
    responseFormat: !item["response_format"]
      ? item["response_format"]
      : assistantsApiResponseFormatOptionDeserializer(item["response_format"]),
    metadata: item["metadata"],
  };
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

export function toolResourcesDeserializer(item: any): ToolResources {
  return {
    codeInterpreter: !item["code_interpreter"]
      ? item["code_interpreter"]
      : codeInterpreterToolResourceDeserializer(item["code_interpreter"]),
    fileSearch: !item["file_search"]
      ? item["file_search"]
      : fileSearchToolResourceDeserializer(item["file_search"]),
  };
}

/** A set of resources that are used by the `code_interpreter` tool. */
export interface CodeInterpreterToolResource {
  /**
   * A list of file IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files
   * associated with the tool.
   */
  fileIds: string[];
}

export function codeInterpreterToolResourceDeserializer(
  item: any,
): CodeInterpreterToolResource {
  return {
    fileIds: item["file_ids"].map((p: any) => {
      return p;
    }),
  };
}

/** A set of resources that are used by the `file_search` tool. */
export interface FileSearchToolResource {
  /**
   * The ID of the vector store attached to this assistant. There can be a maximum of 1 vector
   * store attached to the assistant.
   */
  vectorStoreIds?: string[];
}

export function fileSearchToolResourceDeserializer(
  item: any,
): FileSearchToolResource {
  return {
    vectorStoreIds: !item["vector_store_ids"]
      ? item["vector_store_ids"]
      : item["vector_store_ids"].map((p: any) => {
          return p;
        }),
  };
}

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
  hasMore: boolean;
}

export function openAIPageableListOfAssistantDeserializer(
  item: any,
): OpenAIPageableListOfAssistant {
  return {
    object: item["object"],
    data: assistantArrayDeserializer(item["data"]),
    firstId: item["first_id"],
    lastId: item["last_id"],
    hasMore: item["has_more"],
  };
}

export function assistantArrayDeserializer(result: Array<Assistant>): any[] {
  return result.map((item) => {
    return assistantDeserializer(item);
  });
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
  responseFormat?: AssistantsApiResponseFormatOption | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

export function updateAssistantOptionsSerializer(
  item: UpdateAssistantOptions,
): any {
  return {
    model: item["model"],
    name: item["name"],
    description: item["description"],
    instructions: item["instructions"],
    tools: !item["tools"]
      ? item["tools"]
      : toolDefinitionUnionArraySerializer(item["tools"]),
    tool_resources: !item["toolResources"]
      ? item["toolResources"]
      : updateToolResourcesOptionsSerializer(item["toolResources"]),
    temperature: item["temperature"],
    top_p: item["topP"],
    response_format: !item["responseFormat"]
      ? item["responseFormat"]
      : assistantsApiResponseFormatOptionSerializer(item["responseFormat"]),
    metadata: item["metadata"],
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
): any {
  return {
    code_interpreter: !item["codeInterpreter"]
      ? item["codeInterpreter"]
      : updateCodeInterpreterToolResourceOptionsSerializer(
          item["codeInterpreter"],
        ),
    file_search: !item["fileSearch"]
      ? item["fileSearch"]
      : updateFileSearchToolResourceOptionsSerializer(item["fileSearch"]),
  };
}

/** Request object to update `code_interpreted` tool resources. */
export interface UpdateCodeInterpreterToolResourceOptions {
  /** A list of file IDs to override the current list of the assistant. */
  fileIds?: string[];
}

export function updateCodeInterpreterToolResourceOptionsSerializer(
  item: UpdateCodeInterpreterToolResourceOptions,
): any {
  return {
    file_ids: !item["fileIds"]
      ? item["fileIds"]
      : item["fileIds"].map((p: any) => {
          return p;
        }),
  };
}

/** Request object to update `file_search` tool resources. */
export interface UpdateFileSearchToolResourceOptions {
  /** A list of vector store IDs to override the current list of the assistant. */
  vectorStoreIds?: string[];
}

export function updateFileSearchToolResourceOptionsSerializer(
  item: UpdateFileSearchToolResourceOptions,
): any {
  return {
    vector_store_ids: !item["vectorStoreIds"]
      ? item["vectorStoreIds"]
      : item["vectorStoreIds"].map((p: any) => {
          return p;
        }),
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

export function assistantDeletionStatusDeserializer(
  item: any,
): AssistantDeletionStatus {
  return {
    id: item["id"],
    deleted: item["deleted"],
    object: item["object"],
  };
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
): any {
  return {
    messages: !item["messages"]
      ? item["messages"]
      : threadMessageOptionsArraySerializer(item["messages"]),
    tool_resources: !item["toolResources"]
      ? item["toolResources"]
      : createToolResourcesOptionsSerializer(item["toolResources"]),
    metadata: item["metadata"],
  };
}

export function threadMessageOptionsArraySerializer(
  result: Array<ThreadMessageOptions>,
): any[] {
  return result.map((item) => {
    return threadMessageOptionsSerializer(item);
  });
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
): any {
  return {
    role: item["role"],
    content: item["content"],
    attachments: !item["attachments"]
      ? item["attachments"]
      : messageAttachmentArraySerializer(item["attachments"]),
    metadata: item["metadata"],
  };
}

/** The possible values for roles attributed to messages in a thread. */
export type MessageRole = "user" | "assistant";

export function messageAttachmentArraySerializer(
  result: Array<MessageAttachment>,
): any[] {
  return result.map((item) => {
    return messageAttachmentSerializer(item);
  });
}

export function messageAttachmentArrayDeserializer(
  result: Array<MessageAttachment>,
): any[] {
  return result.map((item) => {
    return messageAttachmentDeserializer(item);
  });
}

/** This describes to which tools a file has been attached. */
export interface MessageAttachment {
  /** The ID of the file to attach to the message. */
  fileId: string;
  /** The tools to add to this file. */
  tools: MessageAttachmentToolDefinition[];
}

export function messageAttachmentSerializer(item: MessageAttachment): any {
  return {
    file_id: item["fileId"],
    tools: messageAttachmentToolDefinitionArraySerializer(item["tools"]),
  };
}

export function messageAttachmentDeserializer(item: any): MessageAttachment {
  return {
    fileId: item["file_id"],
    tools: messageAttachmentToolDefinitionArrayDeserializer(item["tools"]),
  };
}

export function messageAttachmentToolDefinitionArraySerializer(
  result: Array<MessageAttachmentToolDefinition>,
): any[] {
  return result.map((item) => {
    return messageAttachmentToolDefinitionSerializer(item);
  });
}

export function messageAttachmentToolDefinitionArrayDeserializer(
  result: Array<MessageAttachmentToolDefinition>,
): any[] {
  return result.map((item) => {
    return messageAttachmentToolDefinitionDeserializer(item);
  });
}

/** Alias for MessageAttachmentToolDefinition */
export type MessageAttachmentToolDefinition =
  | CodeInterpreterToolDefinition
  | FileSearchToolDefinition;

export function messageAttachmentToolDefinitionSerializer(
  item: MessageAttachmentToolDefinition,
): any {
  return item;
}

export function messageAttachmentToolDefinitionDeserializer(
  item: any,
): MessageAttachmentToolDefinition {
  return item;
}

/** Alias for _MessageAttachmentTool */
export type _MessageAttachmentTool =
  | CodeInterpreterToolDefinition
  | FileSearchToolDefinition;

export function _messageAttachmentToolSerializer(
  item: _MessageAttachmentTool,
): any {
  return item;
}

export function _messageAttachmentToolDeserializer(
  item: any,
): _MessageAttachmentTool {
  return item;
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

export function assistantThreadDeserializer(item: any): AssistantThread {
  return {
    id: item["id"],
    object: item["object"],
    createdAt: new Date(item["created_at"] * 1000),
    toolResources: !item["tool_resources"]
      ? item["tool_resources"]
      : toolResourcesDeserializer(item["tool_resources"]),
    metadata: item["metadata"],
  };
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
): any {
  return {
    tool_resources: !item["toolResources"]
      ? item["toolResources"]
      : updateToolResourcesOptionsSerializer(item["toolResources"]),
    metadata: item["metadata"],
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

export function threadDeletionStatusDeserializer(
  item: any,
): ThreadDeletionStatus {
  return {
    id: item["id"],
    deleted: item["deleted"],
    object: item["object"],
  };
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

export function threadMessageSerializer(item: ThreadMessage): any {
  return {
    id: item["id"],
    object: item["object"],
    created_at: (item["createdAt"].getTime() / 1000) | 0,
    thread_id: item["threadId"],
    status: item["status"],
    incomplete_details: !item["incompleteDetails"]
      ? item["incompleteDetails"]
      : messageIncompleteDetailsSerializer(item["incompleteDetails"]),
    completed_at: !item["completedAt"]
      ? item["completedAt"]
      : (item["completedAt"].getTime() / 1000) | 0,
    incomplete_at: !item["incompleteAt"]
      ? item["incompleteAt"]
      : (item["incompleteAt"].getTime() / 1000) | 0,
    role: item["role"],
    content: messageContentUnionArraySerializer(item["content"]),
    assistant_id: item["assistantId"],
    run_id: item["runId"],
    attachments: !item["attachments"]
      ? item["attachments"]
      : messageAttachmentArraySerializer(item["attachments"]),
    metadata: item["metadata"],
  };
}

export function threadMessageDeserializer(item: any): ThreadMessage {
  return {
    id: item["id"],
    object: item["object"],
    createdAt: new Date(item["created_at"] * 1000),
    threadId: item["thread_id"],
    status: item["status"],
    incompleteDetails: !item["incomplete_details"]
      ? item["incomplete_details"]
      : messageIncompleteDetailsDeserializer(item["incomplete_details"]),
    completedAt: !item["completed_at"]
      ? item["completed_at"]
      : new Date(item["completed_at"] * 1000),
    incompleteAt: !item["incomplete_at"]
      ? item["incomplete_at"]
      : new Date(item["incomplete_at"] * 1000),
    role: item["role"],
    content: messageContentUnionArrayDeserializer(item["content"]),
    assistantId: item["assistant_id"],
    runId: item["run_id"],
    attachments: !item["attachments"]
      ? item["attachments"]
      : messageAttachmentArrayDeserializer(item["attachments"]),
    metadata: item["metadata"],
  };
}

/** The possible execution status values for a thread message. */
export type MessageStatus = "in_progress" | "incomplete" | "completed";

/** Information providing additional detail about a message entering an incomplete status. */
export interface MessageIncompleteDetails {
  /** The provided reason describing why the message was marked as incomplete. */
  reason: MessageIncompleteDetailsReason;
}

export function messageIncompleteDetailsSerializer(
  item: MessageIncompleteDetails,
): any {
  return { reason: item["reason"] };
}

export function messageIncompleteDetailsDeserializer(
  item: any,
): MessageIncompleteDetails {
  return {
    reason: item["reason"],
  };
}

/** A set of reasons describing why a message is marked as incomplete. */
export type MessageIncompleteDetailsReason =
  | "content_filter"
  | "max_tokens"
  | "run_cancelled"
  | "run_failed"
  | "run_expired";

export function messageContentUnionArraySerializer(
  result: Array<MessageContentUnion>,
): any[] {
  return result.map((item) => {
    return messageContentUnionSerializer(item);
  });
}

export function messageContentUnionArrayDeserializer(
  result: Array<MessageContentUnion>,
): any[] {
  return result.map((item) => {
    return messageContentUnionDeserializer(item);
  });
}

/** An abstract representation of a single item of thread message content. */
export interface MessageContent {
  /** The object type. */
  /** The discriminator possible values: text, image_file */
  type: string;
}

export function messageContentSerializer(item: MessageContent): any {
  return { type: item["type"] };
}

export function messageContentDeserializer(item: any): MessageContent {
  return {
    type: item["type"],
  };
}

/** Alias for MessageContentUnion */
export type MessageContentUnion =
  | MessageTextContent
  | MessageImageFileContent
  | MessageContent;

export function messageContentUnionSerializer(item: MessageContentUnion): any {
  switch (item.type) {
    case "text":
      return messageTextContentSerializer(item as MessageTextContent);

    case "image_file":
      return messageImageFileContentSerializer(item as MessageImageFileContent);

    default:
      return messageContentSerializer(item);
  }
}

export function messageContentUnionDeserializer(
  item: any,
): MessageContentUnion {
  switch (item.type) {
    case "text":
      return messageTextContentDeserializer(item as MessageTextContent);

    case "image_file":
      return messageImageFileContentDeserializer(
        item as MessageImageFileContent,
      );

    default:
      return messageContentDeserializer(item);
  }
}

/** A representation of a textual item of thread message content. */
export interface MessageTextContent extends MessageContent {
  /** The object type, which is always 'text'. */
  type: "text";
  /** The text and associated annotations for this thread message content item. */
  text: MessageTextDetails;
}

export function messageTextContentSerializer(item: MessageTextContent): any {
  return {
    type: item["type"],
    text: messageTextDetailsSerializer(item["text"]),
  };
}

export function messageTextContentDeserializer(item: any): MessageTextContent {
  return {
    type: item["type"],
    text: messageTextDetailsDeserializer(item["text"]),
  };
}

/** The text and associated annotations for a single item of assistant thread message content. */
export interface MessageTextDetails {
  /** The text data. */
  value: string;
  /** A list of annotations associated with this text. */
  annotations: MessageTextAnnotationUnion[];
}

export function messageTextDetailsSerializer(item: MessageTextDetails): any {
  return {
    value: item["value"],
    annotations: messageTextAnnotationUnionArraySerializer(item["annotations"]),
  };
}

export function messageTextDetailsDeserializer(item: any): MessageTextDetails {
  return {
    value: item["value"],
    annotations: messageTextAnnotationUnionArrayDeserializer(
      item["annotations"],
    ),
  };
}

export function messageTextAnnotationUnionArraySerializer(
  result: Array<MessageTextAnnotationUnion>,
): any[] {
  return result.map((item) => {
    return messageTextAnnotationUnionSerializer(item);
  });
}

export function messageTextAnnotationUnionArrayDeserializer(
  result: Array<MessageTextAnnotationUnion>,
): any[] {
  return result.map((item) => {
    return messageTextAnnotationUnionDeserializer(item);
  });
}

/** An abstract representation of an annotation to text thread message content. */
export interface MessageTextAnnotation {
  /** The object type. */
  /** The discriminator possible values: file_citation, file_path */
  type: string;
  /** The textual content associated with this text annotation item. */
  text: string;
}

export function messageTextAnnotationSerializer(
  item: MessageTextAnnotation,
): any {
  return { type: item["type"], text: item["text"] };
}

export function messageTextAnnotationDeserializer(
  item: any,
): MessageTextAnnotation {
  return {
    type: item["type"],
    text: item["text"],
  };
}

/** Alias for MessageTextAnnotationUnion */
export type MessageTextAnnotationUnion =
  | MessageTextFileCitationAnnotation
  | MessageTextFilePathAnnotation
  | MessageTextAnnotation;

export function messageTextAnnotationUnionSerializer(
  item: MessageTextAnnotationUnion,
): any {
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

export function messageTextAnnotationUnionDeserializer(
  item: any,
): MessageTextAnnotationUnion {
  switch (item.type) {
    case "file_citation":
      return messageTextFileCitationAnnotationDeserializer(
        item as MessageTextFileCitationAnnotation,
      );

    case "file_path":
      return messageTextFilePathAnnotationDeserializer(
        item as MessageTextFilePathAnnotation,
      );

    default:
      return messageTextAnnotationDeserializer(item);
  }
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
): any {
  return {
    type: item["type"],
    text: item["text"],
    file_citation: messageTextFileCitationDetailsSerializer(
      item["fileCitation"],
    ),
    start_index: item["startIndex"],
    end_index: item["endIndex"],
  };
}

export function messageTextFileCitationAnnotationDeserializer(
  item: any,
): MessageTextFileCitationAnnotation {
  return {
    type: item["type"],
    text: item["text"],
    fileCitation: messageTextFileCitationDetailsDeserializer(
      item["file_citation"],
    ),
    startIndex: item["start_index"],
    endIndex: item["end_index"],
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
): any {
  return { file_id: item["fileId"], quote: item["quote"] };
}

export function messageTextFileCitationDetailsDeserializer(
  item: any,
): MessageTextFileCitationDetails {
  return {
    fileId: item["file_id"],
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
): any {
  return {
    type: item["type"],
    text: item["text"],
    file_path: messageTextFilePathDetailsSerializer(item["filePath"]),
    start_index: item["startIndex"],
    end_index: item["endIndex"],
  };
}

export function messageTextFilePathAnnotationDeserializer(
  item: any,
): MessageTextFilePathAnnotation {
  return {
    type: item["type"],
    text: item["text"],
    filePath: messageTextFilePathDetailsDeserializer(item["file_path"]),
    startIndex: item["start_index"],
    endIndex: item["end_index"],
  };
}

/** An encapsulation of an image file ID, as used by message image content. */
export interface MessageTextFilePathDetails {
  /** The ID of the specific file that the citation is from. */
  fileId: string;
}

export function messageTextFilePathDetailsSerializer(
  item: MessageTextFilePathDetails,
): any {
  return { file_id: item["fileId"] };
}

export function messageTextFilePathDetailsDeserializer(
  item: any,
): MessageTextFilePathDetails {
  return {
    fileId: item["file_id"],
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
): any {
  return {
    type: item["type"],
    image_file: messageImageFileDetailsSerializer(item["imageFile"]),
  };
}

export function messageImageFileContentDeserializer(
  item: any,
): MessageImageFileContent {
  return {
    type: item["type"],
    imageFile: messageImageFileDetailsDeserializer(item["image_file"]),
  };
}

/** An image reference, as represented in thread message content. */
export interface MessageImageFileDetails {
  /** The ID for the file associated with this image. */
  fileId: string;
}

export function messageImageFileDetailsSerializer(
  item: MessageImageFileDetails,
): any {
  return { file_id: item["fileId"] };
}

export function messageImageFileDetailsDeserializer(
  item: any,
): MessageImageFileDetails {
  return {
    fileId: item["file_id"],
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
  hasMore: boolean;
}

export function openAIPageableListOfThreadMessageDeserializer(
  item: any,
): OpenAIPageableListOfThreadMessage {
  return {
    object: item["object"],
    data: threadMessageArrayDeserializer(item["data"]),
    firstId: item["first_id"],
    lastId: item["last_id"],
    hasMore: item["has_more"],
  };
}

export function threadMessageArraySerializer(
  result: Array<ThreadMessage>,
): any[] {
  return result.map((item) => {
    return threadMessageSerializer(item);
  });
}

export function threadMessageArrayDeserializer(
  result: Array<ThreadMessage>,
): any[] {
  return result.map((item) => {
    return threadMessageDeserializer(item);
  });
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
  /** Whether to enable parallel function calling during tool use. */
  parallelToolCalls?: boolean;
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
  toolChoice?: AssistantsApiToolChoiceOption | null;
  /** Specifies the format that the model must output. */
  responseFormat?: AssistantsApiResponseFormatOption | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

export function createRunOptionsSerializer(item: CreateRunOptions): any {
  return {
    assistant_id: item["assistantId"],
    model: item["model"],
    instructions: item["instructions"],
    additional_instructions: item["additionalInstructions"],
    additional_messages: !item["additionalMessages"]
      ? item["additionalMessages"]
      : threadMessageArraySerializer(item["additionalMessages"]),
    tools: !item["tools"]
      ? item["tools"]
      : toolDefinitionUnionArraySerializer(item["tools"]),
    parallel_tool_calls: item["parallelToolCalls"],
    stream: item["stream"],
    temperature: item["temperature"],
    top_p: item["topP"],
    max_prompt_tokens: item["maxPromptTokens"],
    max_completion_tokens: item["maxCompletionTokens"],
    truncation_strategy: !item["truncationStrategy"]
      ? item["truncationStrategy"]
      : truncationObjectSerializer(item["truncationStrategy"]),
    tool_choice: !item["toolChoice"]
      ? item["toolChoice"]
      : assistantsApiToolChoiceOptionSerializer(item["toolChoice"]),
    response_format: !item["responseFormat"]
      ? item["responseFormat"]
      : assistantsApiResponseFormatOptionSerializer(item["responseFormat"]),
    metadata: item["metadata"],
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

export function truncationObjectSerializer(item: TruncationObject): any {
  return { type: item["type"], last_messages: item["lastMessages"] };
}

export function truncationObjectDeserializer(item: any): TruncationObject {
  return {
    type: item["type"],
    lastMessages: item["last_messages"],
  };
}

/** Possible truncation strategies for the thread. */
export type TruncationStrategy = "auto" | "last_messages";
/** Alias for AssistantsApiToolChoiceOption */
export type AssistantsApiToolChoiceOption =
  | string
  | AssistantsApiToolChoiceOptionMode
  | AssistantsNamedToolChoice;

export function assistantsApiToolChoiceOptionSerializer(
  item: AssistantsApiToolChoiceOption,
): any {
  return item;
}

export function assistantsApiToolChoiceOptionDeserializer(
  item: any,
): AssistantsApiToolChoiceOption {
  return item;
}

/** Specifies how the tool choice will be used */
export type AssistantsApiToolChoiceOptionMode = "none" | "auto";

/** Specifies a tool the model should use. Use to force the model to call a specific tool. */
export interface AssistantsNamedToolChoice {
  /** the type of tool. If type is `function`, the function name must be set. */
  type: AssistantsNamedToolChoiceType;
  /** The name of the function to call */
  function?: FunctionName;
}

export function assistantsNamedToolChoiceSerializer(
  item: AssistantsNamedToolChoice,
): any {
  return {
    type: item["type"],
    function: !item["function"]
      ? item["function"]
      : functionNameSerializer(item["function"]),
  };
}

export function assistantsNamedToolChoiceDeserializer(
  item: any,
): AssistantsNamedToolChoice {
  return {
    type: item["type"],
    function: !item["function"]
      ? item["function"]
      : functionNameDeserializer(item["function"]),
  };
}

/** Available tool types for assistants named tools. */
export type AssistantsNamedToolChoiceType =
  | "function"
  | "code_interpreter"
  | "file_search";

/** The function name that will be used, if using the `function` tool */
export interface FunctionName {
  /** The name of the function to call */
  name: string;
}

export function functionNameSerializer(item: FunctionName): any {
  return { name: item["name"] };
}

export function functionNameDeserializer(item: any): FunctionName {
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
  toolChoice: AssistantsApiToolChoiceOption | null;
  /** Whether to enable parallel function calling during tool use. */
  parallelToolCalls: boolean;
  /** The response format of the tool calls used in this run. */
  responseFormat: AssistantsApiResponseFormatOption | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

export function threadRunDeserializer(item: any): ThreadRun {
  return {
    id: item["id"],
    object: item["object"],
    threadId: item["thread_id"],
    assistantId: item["assistant_id"],
    status: item["status"],
    requiredAction: !item["required_action"]
      ? item["required_action"]
      : requiredActionUnionDeserializer(item["required_action"]),
    lastError: !item["last_error"]
      ? item["last_error"]
      : runErrorDeserializer(item["last_error"]),
    model: item["model"],
    instructions: item["instructions"],
    tools: toolDefinitionUnionArrayDeserializer(item["tools"]),
    createdAt: new Date(item["created_at"] * 1000),
    expiresAt: !item["expires_at"]
      ? item["expires_at"]
      : new Date(item["expires_at"] * 1000),
    startedAt: !item["started_at"]
      ? item["started_at"]
      : new Date(item["started_at"] * 1000),
    completedAt: !item["completed_at"]
      ? item["completed_at"]
      : new Date(item["completed_at"] * 1000),
    cancelledAt: !item["cancelled_at"]
      ? item["cancelled_at"]
      : new Date(item["cancelled_at"] * 1000),
    failedAt: !item["failed_at"]
      ? item["failed_at"]
      : new Date(item["failed_at"] * 1000),
    incompleteDetails: item["incomplete_details"],
    usage: !item["usage"]
      ? item["usage"]
      : runCompletionUsageDeserializer(item["usage"]),
    temperature: item["temperature"],
    topP: item["top_p"],
    maxPromptTokens: item["max_prompt_tokens"],
    maxCompletionTokens: item["max_completion_tokens"],
    truncationStrategy: !item["truncation_strategy"]
      ? item["truncation_strategy"]
      : truncationObjectDeserializer(item["truncation_strategy"]),
    toolChoice: !item["tool_choice"]
      ? item["tool_choice"]
      : assistantsApiToolChoiceOptionDeserializer(item["tool_choice"]),
    parallelToolCalls: item["parallel_tool_calls"],
    responseFormat: !item["response_format"]
      ? item["response_format"]
      : assistantsApiResponseFormatOptionDeserializer(item["response_format"]),
    metadata: item["metadata"],
  };
}

/** Possible values for the status of an assistant thread run. */
export type RunStatus =
  | "queued"
  | "in_progress"
  | "requires_action"
  | "cancelling"
  | "cancelled"
  | "failed"
  | "completed"
  | "expired";

/** An abstract representation of a required action for an assistant thread run to continue. */
export interface RequiredAction {
  /** The object type. */
  /** The discriminator possible values: submit_tool_outputs */
  type: string;
}

export function requiredActionDeserializer(item: any): RequiredAction {
  return {
    type: item["type"],
  };
}

/** Alias for RequiredActionUnion */
export type RequiredActionUnion = SubmitToolOutputsAction | RequiredAction;

export function requiredActionUnionDeserializer(
  item: any,
): RequiredActionUnion {
  switch (item.type) {
    case "submit_tool_outputs":
      return submitToolOutputsActionDeserializer(
        item as SubmitToolOutputsAction,
      );

    default:
      return requiredActionDeserializer(item);
  }
}

/** The details for required tool calls that must be submitted for an assistant thread run to continue. */
export interface SubmitToolOutputsAction extends RequiredAction {
  /** The object type, which is always 'submit_tool_outputs'. */
  type: "submit_tool_outputs";
  /** The details describing tools that should be called to submit tool outputs. */
  submitToolOutputs: SubmitToolOutputsDetails;
}

export function submitToolOutputsActionDeserializer(
  item: any,
): SubmitToolOutputsAction {
  return {
    type: item["type"],
    submitToolOutputs: submitToolOutputsDetailsDeserializer(
      item["submit_tool_outputs"],
    ),
  };
}

/** The details describing tools that should be called to submit tool outputs. */
export interface SubmitToolOutputsDetails {
  /** The list of tool calls that must be resolved for the assistant thread run to continue. */
  toolCalls: RequiredToolCallUnion[];
}

export function submitToolOutputsDetailsDeserializer(
  item: any,
): SubmitToolOutputsDetails {
  return {
    toolCalls: requiredToolCallUnionArrayDeserializer(item["tool_calls"]),
  };
}

export function requiredToolCallUnionArrayDeserializer(
  result: Array<RequiredToolCallUnion>,
): any[] {
  return result.map((item) => {
    return requiredToolCallUnionDeserializer(item);
  });
}

/** An abstract representation a a tool invocation needed by the model to continue a run. */
export interface RequiredToolCall {
  /** The object type for the required tool call. */
  /** The discriminator possible values: function */
  type: string;
  /** The ID of the tool call. This ID must be referenced when submitting tool outputs. */
  id: string;
}

export function requiredToolCallDeserializer(item: any): RequiredToolCall {
  return {
    type: item["type"],
    id: item["id"],
  };
}

/** Alias for RequiredToolCallUnion */
export type RequiredToolCallUnion = RequiredFunctionToolCall | RequiredToolCall;

export function requiredToolCallUnionDeserializer(
  item: any,
): RequiredToolCallUnion {
  switch (item.type) {
    case "function":
      return requiredFunctionToolCallDeserializer(
        item as RequiredFunctionToolCall,
      );

    default:
      return requiredToolCallDeserializer(item);
  }
}

/** A representation of a requested call to a function tool, needed by the model to continue evaluation of a run. */
export interface RequiredFunctionToolCall extends RequiredToolCall {
  /** The object type of the required tool call. Always 'function' for function tools. */
  type: "function";
  /** Detailed information about the function to be executed by the tool that includes name and arguments. */
  function: RequiredFunctionToolCallDetails;
}

export function requiredFunctionToolCallDeserializer(
  item: any,
): RequiredFunctionToolCall {
  return {
    type: item["type"],
    id: item["id"],
    function: requiredFunctionToolCallDetailsDeserializer(item["function"]),
  };
}

/** The detailed information for a function invocation, as provided by a required action invoking a function tool, that includes the name of and arguments to the function. */
export interface RequiredFunctionToolCallDetails {
  /** The name of the function. */
  name: string;
  /** The arguments to use when invoking the named function, as provided by the model. Arguments are presented as a JSON document that should be validated and parsed for evaluation. */
  arguments: string;
}

export function requiredFunctionToolCallDetailsDeserializer(
  item: any,
): RequiredFunctionToolCallDetails {
  return {
    name: item["name"],
    arguments: item["arguments"],
  };
}

/** The details of an error as encountered by an assistant thread run. */
export interface RunError {
  /** The status for the error. */
  code: string;
  /** The human-readable text associated with the error. */
  message: string;
}

export function runErrorDeserializer(item: any): RunError {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** The reason why the run is incomplete. This will point to which specific token limit was reached over the course of the run. */
export type IncompleteRunDetails =
  | "max_completion_tokens"
  | "max_prompt_tokens";

/** Usage statistics related to the run. This value will be `null` if the run is not in a terminal state (i.e. `in_progress`, `queued`, etc.). */
export interface RunCompletionUsage {
  /** Number of completion tokens used over the course of the run. */
  completionTokens: number;
  /** Number of prompt tokens used over the course of the run. */
  promptTokens: number;
  /** Total number of tokens used (prompt + completion). */
  totalTokens: number;
}

export function runCompletionUsageDeserializer(item: any): RunCompletionUsage {
  return {
    completionTokens: item["completion_tokens"],
    promptTokens: item["prompt_tokens"],
    totalTokens: item["total_tokens"],
  };
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
  hasMore: boolean;
}

export function openAIPageableListOfThreadRunDeserializer(
  item: any,
): OpenAIPageableListOfThreadRun {
  return {
    object: item["object"],
    data: threadRunArrayDeserializer(item["data"]),
    firstId: item["first_id"],
    lastId: item["last_id"],
    hasMore: item["has_more"],
  };
}

export function threadRunArrayDeserializer(result: Array<ThreadRun>): any[] {
  return result.map((item) => {
    return threadRunDeserializer(item);
  });
}

/** The data provided during a tool outputs submission to resolve pending tool calls and allow the model to continue. */
export interface ToolOutput {
  /** The ID of the tool call being resolved, as provided in the tool calls of a required action from a run. */
  toolCallId?: string;
  /** The output from the tool to be submitted. */
  output?: string;
}

export function toolOutputSerializer(item: ToolOutput): any {
  return { tool_call_id: item["toolCallId"], output: item["output"] };
}

export function toolOutputArraySerializer(result: Array<ToolOutput>): any[] {
  return result.map((item) => {
    return toolOutputSerializer(item);
  });
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
  /** Whether to enable parallel function calling during tool use. */
  parallelToolCalls?: boolean;
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
  toolChoice?: AssistantsApiToolChoiceOption | null;
  /** Specifies the format that the model must output. */
  responseFormat?: AssistantsApiResponseFormatOption | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

export function createAndRunThreadOptionsSerializer(
  item: CreateAndRunThreadOptions,
): any {
  return {
    assistant_id: item["assistantId"],
    thread: !item["thread"]
      ? item["thread"]
      : assistantThreadCreationOptionsSerializer(item["thread"]),
    model: item["model"],
    instructions: item["instructions"],
    tools: !item["tools"]
      ? item["tools"]
      : toolDefinitionUnionArraySerializer(item["tools"]),
    parallel_tool_calls: item["parallelToolCalls"],
    tool_resources: !item["toolResources"]
      ? item["toolResources"]
      : updateToolResourcesOptionsSerializer(item["toolResources"]),
    stream: item["stream"],
    temperature: item["temperature"],
    top_p: item["topP"],
    max_prompt_tokens: item["maxPromptTokens"],
    max_completion_tokens: item["maxCompletionTokens"],
    truncation_strategy: !item["truncationStrategy"]
      ? item["truncationStrategy"]
      : truncationObjectSerializer(item["truncationStrategy"]),
    tool_choice: !item["toolChoice"]
      ? item["toolChoice"]
      : assistantsApiToolChoiceOptionSerializer(item["toolChoice"]),
    response_format: !item["responseFormat"]
      ? item["responseFormat"]
      : assistantsApiResponseFormatOptionSerializer(item["responseFormat"]),
    metadata: item["metadata"],
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

export function runStepDeserializer(item: any): RunStep {
  return {
    id: item["id"],
    object: item["object"],
    type: item["type"],
    assistantId: item["assistant_id"],
    threadId: item["thread_id"],
    runId: item["run_id"],
    status: item["status"],
    stepDetails: runStepDetailsUnionDeserializer(item["step_details"]),
    lastError: !item["last_error"]
      ? item["last_error"]
      : runStepErrorDeserializer(item["last_error"]),
    createdAt: new Date(item["created_at"] * 1000),
    expiredAt: !item["expired_at"]
      ? item["expired_at"]
      : new Date(item["expired_at"] * 1000),
    completedAt: !item["completed_at"]
      ? item["completed_at"]
      : new Date(item["completed_at"] * 1000),
    cancelledAt: !item["cancelled_at"]
      ? item["cancelled_at"]
      : new Date(item["cancelled_at"] * 1000),
    failedAt: !item["failed_at"]
      ? item["failed_at"]
      : new Date(item["failed_at"] * 1000),
    usage: !item["usage"]
      ? item["usage"]
      : runStepCompletionUsageDeserializer(item["usage"]),
    metadata: item["metadata"],
  };
}

/** The possible types of run steps. */
export type RunStepType = "message_creation" | "tool_calls";
/** Possible values for the status of a run step. */
export type RunStepStatus =
  | "in_progress"
  | "cancelled"
  | "failed"
  | "completed"
  | "expired";

/** An abstract representation of the details for a run step. */
export interface RunStepDetails {
  /** The object type. */
  /** The discriminator possible values: message_creation, tool_calls */
  type: RunStepType;
}

export function runStepDetailsDeserializer(item: any): RunStepDetails {
  return {
    type: item["type"],
  };
}

/** Alias for RunStepDetailsUnion */
export type RunStepDetailsUnion =
  | RunStepMessageCreationDetails
  | RunStepToolCallDetails
  | RunStepDetails;

export function runStepDetailsUnionDeserializer(
  item: any,
): RunStepDetailsUnion {
  switch (item.type) {
    case "message_creation":
      return runStepMessageCreationDetailsDeserializer(
        item as RunStepMessageCreationDetails,
      );

    case "tool_calls":
      return runStepToolCallDetailsDeserializer(item as RunStepToolCallDetails);

    default:
      return runStepDetailsDeserializer(item);
  }
}

/** The detailed information associated with a message creation run step. */
export interface RunStepMessageCreationDetails extends RunStepDetails {
  /** The object type, which is always 'message_creation'. */
  type: "message_creation";
  /** Information about the message creation associated with this run step. */
  messageCreation: RunStepMessageCreationReference;
}

export function runStepMessageCreationDetailsDeserializer(
  item: any,
): RunStepMessageCreationDetails {
  return {
    type: item["type"],
    messageCreation: runStepMessageCreationReferenceDeserializer(
      item["message_creation"],
    ),
  };
}

/** The details of a message created as a part of a run step. */
export interface RunStepMessageCreationReference {
  /** The ID of the message created by this run step. */
  messageId: string;
}

export function runStepMessageCreationReferenceDeserializer(
  item: any,
): RunStepMessageCreationReference {
  return {
    messageId: item["message_id"],
  };
}

/** The detailed information associated with a run step calling tools. */
export interface RunStepToolCallDetails extends RunStepDetails {
  /** The object type, which is always 'tool_calls'. */
  type: "tool_calls";
  /** A list of tool call details for this run step. */
  toolCalls: RunStepToolCallUnion[];
}

export function runStepToolCallDetailsDeserializer(
  item: any,
): RunStepToolCallDetails {
  return {
    type: item["type"],
    toolCalls: runStepToolCallUnionArrayDeserializer(item["tool_calls"]),
  };
}

export function runStepToolCallUnionArrayDeserializer(
  result: Array<RunStepToolCallUnion>,
): any[] {
  return result.map((item) => {
    return runStepToolCallUnionDeserializer(item);
  });
}

/** An abstract representation of a detailed tool call as recorded within a run step for an existing run. */
export interface RunStepToolCall {
  /** The object type. */
  /** The discriminator possible values: code_interpreter, file_search, function */
  type: string;
  /** The ID of the tool call. This ID must be referenced when you submit tool outputs. */
  id: string;
}

export function runStepToolCallDeserializer(item: any): RunStepToolCall {
  return {
    type: item["type"],
    id: item["id"],
  };
}

/** Alias for RunStepToolCallUnion */
export type RunStepToolCallUnion =
  | RunStepCodeInterpreterToolCall
  | RunStepFileSearchToolCall
  | RunStepFunctionToolCall
  | RunStepToolCall;

export function runStepToolCallUnionDeserializer(
  item: any,
): RunStepToolCallUnion {
  switch (item.type) {
    case "code_interpreter":
      return runStepCodeInterpreterToolCallDeserializer(
        item as RunStepCodeInterpreterToolCall,
      );

    case "file_search":
      return runStepFileSearchToolCallDeserializer(
        item as RunStepFileSearchToolCall,
      );

    case "function":
      return runStepFunctionToolCallDeserializer(
        item as RunStepFunctionToolCall,
      );

    default:
      return runStepToolCallDeserializer(item);
  }
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

export function runStepCodeInterpreterToolCallDeserializer(
  item: any,
): RunStepCodeInterpreterToolCall {
  return {
    type: item["type"],
    id: item["id"],
    codeInterpreter: runStepCodeInterpreterToolCallDetailsDeserializer(
      item["code_interpreter"],
    ),
  };
}

/** The detailed information about a code interpreter invocation by the model. */
export interface RunStepCodeInterpreterToolCallDetails {
  /** The input provided by the model to the code interpreter tool. */
  input: string;
  /** The outputs produced by the code interpreter tool back to the model in response to the tool call. */
  outputs: RunStepCodeInterpreterToolCallOutputUnion[];
}

export function runStepCodeInterpreterToolCallDetailsDeserializer(
  item: any,
): RunStepCodeInterpreterToolCallDetails {
  return {
    input: item["input"],
    outputs: runStepCodeInterpreterToolCallOutputUnionArrayDeserializer(
      item["outputs"],
    ),
  };
}

export function runStepCodeInterpreterToolCallOutputUnionArrayDeserializer(
  result: Array<RunStepCodeInterpreterToolCallOutputUnion>,
): any[] {
  return result.map((item) => {
    return runStepCodeInterpreterToolCallOutputUnionDeserializer(item);
  });
}

/** An abstract representation of an emitted output from a code interpreter tool. */
export interface RunStepCodeInterpreterToolCallOutput {
  /** The object type. */
  /** The discriminator possible values: logs, image */
  type: string;
}

export function runStepCodeInterpreterToolCallOutputDeserializer(
  item: any,
): RunStepCodeInterpreterToolCallOutput {
  return {
    type: item["type"],
  };
}

/** Alias for RunStepCodeInterpreterToolCallOutputUnion */
export type RunStepCodeInterpreterToolCallOutputUnion =
  | RunStepCodeInterpreterLogOutput
  | RunStepCodeInterpreterImageOutput
  | RunStepCodeInterpreterToolCallOutput;

export function runStepCodeInterpreterToolCallOutputUnionDeserializer(
  item: any,
): RunStepCodeInterpreterToolCallOutputUnion {
  switch (item.type) {
    case "logs":
      return runStepCodeInterpreterLogOutputDeserializer(
        item as RunStepCodeInterpreterLogOutput,
      );

    case "image":
      return runStepCodeInterpreterImageOutputDeserializer(
        item as RunStepCodeInterpreterImageOutput,
      );

    default:
      return runStepCodeInterpreterToolCallOutputDeserializer(item);
  }
}

/** A representation of a log output emitted by a code interpreter tool in response to a tool call by the model. */
export interface RunStepCodeInterpreterLogOutput
  extends RunStepCodeInterpreterToolCallOutput {
  /** The object type, which is always 'logs'. */
  type: "logs";
  /** The serialized log output emitted by the code interpreter. */
  logs: string;
}

export function runStepCodeInterpreterLogOutputDeserializer(
  item: any,
): RunStepCodeInterpreterLogOutput {
  return {
    type: item["type"],
    logs: item["logs"],
  };
}

/** A representation of an image output emitted by a code interpreter tool in response to a tool call by the model. */
export interface RunStepCodeInterpreterImageOutput
  extends RunStepCodeInterpreterToolCallOutput {
  /** The object type, which is always 'image'. */
  type: "image";
  /** Referential information for the image associated with this output. */
  image: RunStepCodeInterpreterImageReference;
}

export function runStepCodeInterpreterImageOutputDeserializer(
  item: any,
): RunStepCodeInterpreterImageOutput {
  return {
    type: item["type"],
    image: runStepCodeInterpreterImageReferenceDeserializer(item["image"]),
  };
}

/** An image reference emitted by a code interpreter tool in response to a tool call by the model. */
export interface RunStepCodeInterpreterImageReference {
  /** The ID of the file associated with this image. */
  fileId: string;
}

export function runStepCodeInterpreterImageReferenceDeserializer(
  item: any,
): RunStepCodeInterpreterImageReference {
  return {
    fileId: item["file_id"],
  };
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

export function runStepFileSearchToolCallDeserializer(
  item: any,
): RunStepFileSearchToolCall {
  return {
    type: item["type"],
    id: item["id"],
    fileSearch: item["file_search"],
  };
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

export function runStepFunctionToolCallDeserializer(
  item: any,
): RunStepFunctionToolCall {
  return {
    type: item["type"],
    id: item["id"],
    function: runStepFunctionToolCallDetailsDeserializer(item["function"]),
  };
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

export function runStepFunctionToolCallDetailsDeserializer(
  item: any,
): RunStepFunctionToolCallDetails {
  return {
    name: item["name"],
    arguments: item["arguments"],
    output: item["output"],
  };
}

/** The error information associated with a failed run step. */
export interface RunStepError {
  /** The error code for this error. */
  code: RunStepErrorCode;
  /** The human-readable text associated with this error. */
  message: string;
}

export function runStepErrorDeserializer(item: any): RunStepError {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** Possible error code values attributable to a failed run step. */
export type RunStepErrorCode = "server_error" | "rate_limit_exceeded";

/** Usage statistics related to the run step. */
export interface RunStepCompletionUsage {
  /** Number of completion tokens used over the course of the run step. */
  completionTokens: number;
  /** Number of prompt tokens used over the course of the run step. */
  promptTokens: number;
  /** Total number of tokens used (prompt + completion). */
  totalTokens: number;
}

export function runStepCompletionUsageDeserializer(
  item: any,
): RunStepCompletionUsage {
  return {
    completionTokens: item["completion_tokens"],
    promptTokens: item["prompt_tokens"],
    totalTokens: item["total_tokens"],
  };
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
  hasMore: boolean;
}

export function openAIPageableListOfRunStepDeserializer(
  item: any,
): OpenAIPageableListOfRunStep {
  return {
    object: item["object"],
    data: runStepArrayDeserializer(item["data"]),
    firstId: item["first_id"],
    lastId: item["last_id"],
    hasMore: item["has_more"],
  };
}

export function runStepArrayDeserializer(result: Array<RunStep>): any[] {
  return result.map((item) => {
    return runStepDeserializer(item);
  });
}

/** The response data from a file list operation. */
export interface FileListResponse {
  /** The object type, which is always 'list'. */
  object: "list";
  /** The files returned for the request. */
  data: OpenAIFile[];
}

export function fileListResponseDeserializer(item: any): FileListResponse {
  return {
    object: item["object"],
    data: openAIFileArrayDeserializer(item["data"]),
  };
}

export function openAIFileArrayDeserializer(result: Array<OpenAIFile>): any[] {
  return result.map((item) => {
    return openAIFileDeserializer(item);
  });
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

export function openAIFileDeserializer(item: any): OpenAIFile {
  return {
    object: item["object"],
    id: item["id"],
    bytes: item["bytes"],
    filename: item["filename"],
    createdAt: new Date(item["created_at"] * 1000),
    purpose: item["purpose"],
    status: item["status"],
    statusDetails: item["status_details"],
  };
}

/** The possible values denoting the intended usage of a file. */
export type FilePurpose =
  | "fine-tune"
  | "fine-tune-results"
  | "assistants"
  | "assistants_output"
  | "batch"
  | "batch_output"
  | "vision";
/** The state of the file. */
export type FileState =
  | "uploaded"
  | "pending"
  | "running"
  | "processed"
  | "error"
  | "deleting"
  | "deleted";

/** A status response from a file deletion operation. */
export interface FileDeletionStatus {
  /** The ID of the resource specified for deletion. */
  id: string;
  /** A value indicating whether deletion was successful. */
  deleted: boolean;
  /** The object type, which is always 'file'. */
  object: "file";
}

export function fileDeletionStatusDeserializer(item: any): FileDeletionStatus {
  return {
    id: item["id"],
    deleted: item["deleted"],
    object: item["object"],
  };
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
  hasMore: boolean;
}

export function openAIPageableListOfVectorStoreDeserializer(
  item: any,
): OpenAIPageableListOfVectorStore {
  return {
    object: item["object"],
    data: vectorStoreArrayDeserializer(item["data"]),
    firstId: item["first_id"],
    lastId: item["last_id"],
    hasMore: item["has_more"],
  };
}

export function vectorStoreArrayDeserializer(
  result: Array<VectorStore>,
): any[] {
  return result.map((item) => {
    return vectorStoreDeserializer(item);
  });
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

export function vectorStoreDeserializer(item: any): VectorStore {
  return {
    id: item["id"],
    object: item["object"],
    createdAt: new Date(item["created_at"] * 1000),
    name: item["name"],
    usageBytes: item["usage_bytes"],
    fileCounts: vectorStoreFileCountDeserializer(item["file_counts"]),
    status: item["status"],
    expiresAfter: !item["expires_after"]
      ? item["expires_after"]
      : vectorStoreExpirationPolicyDeserializer(item["expires_after"]),
    expiresAt: !item["expires_at"]
      ? item["expires_at"]
      : new Date(item["expires_at"] * 1000),
    lastActiveAt: !item["last_active_at"]
      ? item["last_active_at"]
      : new Date(item["last_active_at"] * 1000),
    metadata: item["metadata"],
  };
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

export function vectorStoreFileCountDeserializer(
  item: any,
): VectorStoreFileCount {
  return {
    inProgress: item["in_progress"],
    completed: item["completed"],
    failed: item["failed"],
    cancelled: item["cancelled"],
    total: item["total"],
  };
}

/** Vector store possible status */
export type VectorStoreStatus = "expired" | "in_progress" | "completed";

/** The expiration policy for a vector store. */
export interface VectorStoreExpirationPolicy {
  /** Anchor timestamp after which the expiration policy applies. Supported anchors: `last_active_at`. */
  anchor: VectorStoreExpirationPolicyAnchor;
  /** The anchor timestamp after which the expiration policy applies. */
  days: number;
}

export function vectorStoreExpirationPolicySerializer(
  item: VectorStoreExpirationPolicy,
): any {
  return { anchor: item["anchor"], days: item["days"] };
}

export function vectorStoreExpirationPolicyDeserializer(
  item: any,
): VectorStoreExpirationPolicy {
  return {
    anchor: item["anchor"],
    days: item["days"],
  };
}

/** Describes the relationship between the days and the expiration of this vector store */
export type VectorStoreExpirationPolicyAnchor = "last_active_at";

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

export function vectorStoreOptionsSerializer(item: VectorStoreOptions): any {
  return {
    file_ids: !item["fileIds"]
      ? item["fileIds"]
      : item["fileIds"].map((p: any) => {
          return p;
        }),
    name: item["name"],
    expires_after: !item["expiresAfter"]
      ? item["expiresAfter"]
      : vectorStoreExpirationPolicySerializer(item["expiresAfter"]),
    chunking_strategy: !item["chunkingStrategy"]
      ? item["chunkingStrategy"]
      : vectorStoreChunkingStrategyRequestUnionSerializer(
          item["chunkingStrategy"],
        ),
    metadata: item["metadata"],
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
): any {
  return {
    name: item["name"],
    expires_after: !item["expiresAfter"]
      ? item["expiresAfter"]
      : vectorStoreExpirationPolicySerializer(item["expiresAfter"]),
    metadata: item["metadata"],
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

export function vectorStoreDeletionStatusDeserializer(
  item: any,
): VectorStoreDeletionStatus {
  return {
    id: item["id"],
    deleted: item["deleted"],
    object: item["object"],
  };
}

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
  hasMore: boolean;
}

export function openAIPageableListOfVectorStoreFileDeserializer(
  item: any,
): OpenAIPageableListOfVectorStoreFile {
  return {
    object: item["object"],
    data: vectorStoreFileArrayDeserializer(item["data"]),
    firstId: item["first_id"],
    lastId: item["last_id"],
    hasMore: item["has_more"],
  };
}

export function vectorStoreFileArrayDeserializer(
  result: Array<VectorStoreFile>,
): any[] {
  return result.map((item) => {
    return vectorStoreFileDeserializer(item);
  });
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

export function vectorStoreFileDeserializer(item: any): VectorStoreFile {
  return {
    id: item["id"],
    object: item["object"],
    usageBytes: item["usage_bytes"],
    createdAt: new Date(item["created_at"] * 1000),
    vectorStoreId: item["vector_store_id"],
    status: item["status"],
    lastError: !item["last_error"]
      ? item["last_error"]
      : vectorStoreFileErrorDeserializer(item["last_error"]),
    chunkingStrategy: vectorStoreChunkingStrategyResponseUnionDeserializer(
      item["chunking_strategy"],
    ),
  };
}

/** Vector store file status */
export type VectorStoreFileStatus =
  | "in_progress"
  | "completed"
  | "failed"
  | "cancelled";

/** Details on the error that may have ocurred while processing a file for this vector store */
export interface VectorStoreFileError {
  /** One of `server_error` or `rate_limit_exceeded`. */
  code: VectorStoreFileErrorCode;
  /** A human-readable description of the error. */
  message: string;
}

export function vectorStoreFileErrorDeserializer(
  item: any,
): VectorStoreFileError {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** Error code variants for vector store file processing */
export type VectorStoreFileErrorCode =
  | "internal_error"
  | "file_not_found"
  | "parsing_error"
  | "unhandled_mime_type";

/** An abstract representation of a vector store chunking strategy configuration. */
export interface VectorStoreChunkingStrategyResponse {
  /** The object type. */
  /** The discriminator possible values: other, static */
  type: VectorStoreChunkingStrategyResponseType;
}

export function vectorStoreChunkingStrategyResponseDeserializer(
  item: any,
): VectorStoreChunkingStrategyResponse {
  return {
    type: item["type"],
  };
}

/** Alias for VectorStoreChunkingStrategyResponseUnion */
export type VectorStoreChunkingStrategyResponseUnion =
  | VectorStoreAutoChunkingStrategyResponse
  | VectorStoreStaticChunkingStrategyResponse
  | VectorStoreChunkingStrategyResponse;

export function vectorStoreChunkingStrategyResponseUnionDeserializer(
  item: any,
): VectorStoreChunkingStrategyResponseUnion {
  switch (item.type) {
    case "other":
      return vectorStoreAutoChunkingStrategyResponseDeserializer(
        item as VectorStoreAutoChunkingStrategyResponse,
      );

    case "static":
      return vectorStoreStaticChunkingStrategyResponseDeserializer(
        item as VectorStoreStaticChunkingStrategyResponse,
      );

    default:
      return vectorStoreChunkingStrategyResponseDeserializer(item);
  }
}

/** Type of chunking strategy */
export type VectorStoreChunkingStrategyResponseType = "other" | "static";

/** This is returned when the chunking strategy is unknown. Typically, this is because the file was indexed before the chunking_strategy concept was introduced in the API. */
export interface VectorStoreAutoChunkingStrategyResponse
  extends VectorStoreChunkingStrategyResponse {
  /** The object type, which is always 'other'. */
  type: "other";
}

export function vectorStoreAutoChunkingStrategyResponseDeserializer(
  item: any,
): VectorStoreAutoChunkingStrategyResponse {
  return {
    type: item["type"],
  };
}

/** A statically configured chunking strategy. */
export interface VectorStoreStaticChunkingStrategyResponse
  extends VectorStoreChunkingStrategyResponse {
  /** The object type, which is always 'static'. */
  type: "static";
  /** The options for the static chunking strategy. */
  static: VectorStoreStaticChunkingStrategyOptions;
}

export function vectorStoreStaticChunkingStrategyResponseDeserializer(
  item: any,
): VectorStoreStaticChunkingStrategyResponse {
  return {
    type: item["type"],
    static: vectorStoreStaticChunkingStrategyOptionsDeserializer(
      item["static"],
    ),
  };
}

/** Response object for deleting a vector store file relationship. */
export interface VectorStoreFileDeletionStatus {
  /** The ID of the resource specified for deletion. */
  id: string;
  /** A value indicating whether deletion was successful. */
  deleted: boolean;
  /** The object type, which is always 'vector_store.deleted'. */
  object: "vector_store.file.deleted";
}

export function vectorStoreFileDeletionStatusDeserializer(
  item: any,
): VectorStoreFileDeletionStatus {
  return {
    id: item["id"],
    deleted: item["deleted"],
    object: item["object"],
  };
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

export function vectorStoreFileBatchDeserializer(
  item: any,
): VectorStoreFileBatch {
  return {
    id: item["id"],
    object: item["object"],
    createdAt: new Date(item["created_at"] * 1000),
    vectorStoreId: item["vector_store_id"],
    status: item["status"],
    fileCounts: vectorStoreFileCountDeserializer(item["file_counts"]),
  };
}

/** The status of the vector store file batch. */
export type VectorStoreFileBatchStatus =
  | "in_progress"
  | "completed"
  | "cancelled"
  | "failed";

/** Represents a message delta i.e. any changed fields on a message during streaming. */
export interface MessageDeltaChunk {
  /** The identifier of the message, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `thread.message.delta`. */
  object: "thread.message.delta";
  /** The delta containing the fields that have changed on the Message. */
  delta: MessageDelta;
}

export function messageDeltaChunkDeserializer(item: any): MessageDeltaChunk {
  return {
    id: item["id"],
    object: item["object"],
    delta: messageDeltaDeserializer(item["delta"]),
  };
}

/** Represents the typed 'delta' payload within a streaming message delta chunk. */
export interface MessageDelta {
  /** The entity that produced the message. */
  role: MessageRole;
  /** The content of the message as an array of text and/or images. */
  content: MessageDeltaContentUnion[];
}

export function messageDeltaDeserializer(item: any): MessageDelta {
  return {
    role: item["role"],
    content: messageDeltaContentUnionArrayDeserializer(item["content"]),
  };
}

export function messageDeltaContentUnionArrayDeserializer(
  result: Array<MessageDeltaContentUnion>,
): any[] {
  return result.map((item) => {
    return messageDeltaContentUnionDeserializer(item);
  });
}

/** The abstract base representation of a partial streamed message content payload. */
export interface MessageDeltaContent {
  /** The index of the content part of the message. */
  index: number;
  /** The type of content for this content part. */
  /** The discriminator possible values: image_file, text */
  type: string;
}

export function messageDeltaContentDeserializer(
  item: any,
): MessageDeltaContent {
  return {
    index: item["index"],
    type: item["type"],
  };
}

/** Alias for MessageDeltaContentUnion */
export type MessageDeltaContentUnion =
  | MessageDeltaImageFileContent
  | MessageDeltaTextContentObject
  | MessageDeltaContent;

export function messageDeltaContentUnionDeserializer(
  item: any,
): MessageDeltaContentUnion {
  switch (item.type) {
    case "image_file":
      return messageDeltaImageFileContentDeserializer(
        item as MessageDeltaImageFileContent,
      );

    case "text":
      return messageDeltaTextContentObjectDeserializer(
        item as MessageDeltaTextContentObject,
      );

    default:
      return messageDeltaContentDeserializer(item);
  }
}

/** Represents a streamed image file content part within a streaming message delta chunk. */
export interface MessageDeltaImageFileContent extends MessageDeltaContent {
  /** The type of content for this content part, which is always "image_file." */
  type: "image_file";
  /** The image_file data. */
  imageFile?: MessageDeltaImageFileContentObject;
}

export function messageDeltaImageFileContentDeserializer(
  item: any,
): MessageDeltaImageFileContent {
  return {
    index: item["index"],
    type: item["type"],
    imageFile: !item["image_file"]
      ? item["image_file"]
      : messageDeltaImageFileContentObjectDeserializer(item["image_file"]),
  };
}

/** Represents the 'image_file' payload within streaming image file content. */
export interface MessageDeltaImageFileContentObject {
  /** The file ID of the image in the message content. */
  fileId?: string;
}

export function messageDeltaImageFileContentObjectDeserializer(
  item: any,
): MessageDeltaImageFileContentObject {
  return {
    fileId: item["file_id"],
  };
}

/** Represents a streamed text content part within a streaming message delta chunk. */
export interface MessageDeltaTextContentObject extends MessageDeltaContent {
  /** The type of content for this content part, which is always "text." */
  type: "text";
  /** The text content details. */
  text?: MessageDeltaTextContent;
}

export function messageDeltaTextContentObjectDeserializer(
  item: any,
): MessageDeltaTextContentObject {
  return {
    index: item["index"],
    type: item["type"],
    text: !item["text"]
      ? item["text"]
      : messageDeltaTextContentDeserializer(item["text"]),
  };
}

/** Represents the data of a streamed text content part within a streaming message delta chunk. */
export interface MessageDeltaTextContent {
  /** The data that makes up the text. */
  value?: string;
  /** Annotations for the text. */
  annotations?: MessageDeltaTextAnnotationUnion[];
}

export function messageDeltaTextContentDeserializer(
  item: any,
): MessageDeltaTextContent {
  return {
    value: item["value"],
    annotations: !item["annotations"]
      ? item["annotations"]
      : messageDeltaTextAnnotationUnionArrayDeserializer(item["annotations"]),
  };
}

export function messageDeltaTextAnnotationUnionArrayDeserializer(
  result: Array<MessageDeltaTextAnnotationUnion>,
): any[] {
  return result.map((item) => {
    return messageDeltaTextAnnotationUnionDeserializer(item);
  });
}

/** The abstract base representation of a streamed text content part's text annotation. */
export interface MessageDeltaTextAnnotation {
  /** The index of the annotation within a text content part. */
  index: number;
  /** The type of the text content annotation. */
  /** The discriminator possible values: file_citation, file_path */
  type: string;
}

export function messageDeltaTextAnnotationDeserializer(
  item: any,
): MessageDeltaTextAnnotation {
  return {
    index: item["index"],
    type: item["type"],
  };
}

/** Alias for MessageDeltaTextAnnotationUnion */
export type MessageDeltaTextAnnotationUnion =
  | MessageDeltaTextFileCitationAnnotationObject
  | MessageDeltaTextFilePathAnnotationObject
  | MessageDeltaTextAnnotation;

export function messageDeltaTextAnnotationUnionDeserializer(
  item: any,
): MessageDeltaTextAnnotationUnion {
  switch (item.type) {
    case "file_citation":
      return messageDeltaTextFileCitationAnnotationObjectDeserializer(
        item as MessageDeltaTextFileCitationAnnotationObject,
      );

    case "file_path":
      return messageDeltaTextFilePathAnnotationObjectDeserializer(
        item as MessageDeltaTextFilePathAnnotationObject,
      );

    default:
      return messageDeltaTextAnnotationDeserializer(item);
  }
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

export function messageDeltaTextFileCitationAnnotationObjectDeserializer(
  item: any,
): MessageDeltaTextFileCitationAnnotationObject {
  return {
    index: item["index"],
    type: item["type"],
    fileCitation: !item["file_citation"]
      ? item["file_citation"]
      : messageDeltaTextFileCitationAnnotationDeserializer(
          item["file_citation"],
        ),
    text: item["text"],
    startIndex: item["start_index"],
    endIndex: item["end_index"],
  };
}

/** Represents the data of a streamed file citation as applied to a streaming text content part. */
export interface MessageDeltaTextFileCitationAnnotation {
  /** The ID of the specific file the citation is from. */
  fileId?: string;
  /** The specific quote in the cited file. */
  quote?: string;
}

export function messageDeltaTextFileCitationAnnotationDeserializer(
  item: any,
): MessageDeltaTextFileCitationAnnotation {
  return {
    fileId: item["file_id"],
    quote: item["quote"],
  };
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

export function messageDeltaTextFilePathAnnotationObjectDeserializer(
  item: any,
): MessageDeltaTextFilePathAnnotationObject {
  return {
    index: item["index"],
    type: item["type"],
    filePath: !item["file_path"]
      ? item["file_path"]
      : messageDeltaTextFilePathAnnotationDeserializer(item["file_path"]),
    startIndex: item["start_index"],
    endIndex: item["end_index"],
    text: item["text"],
  };
}

/** Represents the data of a streamed file path annotation as applied to a streaming text content part. */
export interface MessageDeltaTextFilePathAnnotation {
  /** The file ID for the annotation. */
  fileId?: string;
}

export function messageDeltaTextFilePathAnnotationDeserializer(
  item: any,
): MessageDeltaTextFilePathAnnotation {
  return {
    fileId: item["file_id"],
  };
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

export function runStepDeltaChunkDeserializer(item: any): RunStepDeltaChunk {
  return {
    id: item["id"],
    object: item["object"],
    delta: runStepDeltaDeserializer(item["delta"]),
  };
}

/** Represents the delta payload in a streaming run step delta chunk. */
export interface RunStepDelta {
  /** The details of the run step. */
  stepDetails?: RunStepDeltaDetailUnion;
}

export function runStepDeltaDeserializer(item: any): RunStepDelta {
  return {
    stepDetails: !item["step_details"]
      ? item["step_details"]
      : runStepDeltaDetailUnionDeserializer(item["step_details"]),
  };
}

/** Represents a single run step detail item in a streaming run step's delta payload. */
export interface RunStepDeltaDetail {
  /** The object type for the run step detail object. */
  /** The discriminator possible values: message_creation, tool_calls */
  type: string;
}

export function runStepDeltaDetailDeserializer(item: any): RunStepDeltaDetail {
  return {
    type: item["type"],
  };
}

/** Alias for RunStepDeltaDetailUnion */
export type RunStepDeltaDetailUnion =
  | RunStepDeltaMessageCreation
  | RunStepDeltaToolCallObject
  | RunStepDeltaDetail;

export function runStepDeltaDetailUnionDeserializer(
  item: any,
): RunStepDeltaDetailUnion {
  switch (item.type) {
    case "message_creation":
      return runStepDeltaMessageCreationDeserializer(
        item as RunStepDeltaMessageCreation,
      );

    case "tool_calls":
      return runStepDeltaToolCallObjectDeserializer(
        item as RunStepDeltaToolCallObject,
      );

    default:
      return runStepDeltaDetailDeserializer(item);
  }
}

/** Represents a message creation within a streaming run step delta. */
export interface RunStepDeltaMessageCreation extends RunStepDeltaDetail {
  /** The object type, which is always "message_creation." */
  type: "message_creation";
  /** The message creation data. */
  messageCreation?: RunStepDeltaMessageCreationObject;
}

export function runStepDeltaMessageCreationDeserializer(
  item: any,
): RunStepDeltaMessageCreation {
  return {
    type: item["type"],
    messageCreation: !item["message_creation"]
      ? item["message_creation"]
      : runStepDeltaMessageCreationObjectDeserializer(item["message_creation"]),
  };
}

/** Represents the data within a streaming run step message creation response object. */
export interface RunStepDeltaMessageCreationObject {
  /** The ID of the newly-created message. */
  messageId?: string;
}

export function runStepDeltaMessageCreationObjectDeserializer(
  item: any,
): RunStepDeltaMessageCreationObject {
  return {
    messageId: item["message_id"],
  };
}

/** Represents an invocation of tool calls as part of a streaming run step. */
export interface RunStepDeltaToolCallObject extends RunStepDeltaDetail {
  /** The object type, which is always "tool_calls." */
  type: "tool_calls";
  /** The collection of tool calls for the tool call detail item. */
  toolCalls?: RunStepDeltaToolCallUnion[];
}

export function runStepDeltaToolCallObjectDeserializer(
  item: any,
): RunStepDeltaToolCallObject {
  return {
    type: item["type"],
    toolCalls: !item["tool_calls"]
      ? item["tool_calls"]
      : runStepDeltaToolCallUnionArrayDeserializer(item["tool_calls"]),
  };
}

export function runStepDeltaToolCallUnionArrayDeserializer(
  result: Array<RunStepDeltaToolCallUnion>,
): any[] {
  return result.map((item) => {
    return runStepDeltaToolCallUnionDeserializer(item);
  });
}

/** The abstract base representation of a single tool call within a streaming run step's delta tool call details. */
export interface RunStepDeltaToolCall {
  /** The index of the tool call detail in the run step's tool_calls array. */
  index: number;
  /** The ID of the tool call, used when submitting outputs to the run. */
  id: string;
  /** The type of the tool call detail item in a streaming run step's details. */
  /** The discriminator possible values: function, file_search, code_interpreter */
  type: string;
}

export function runStepDeltaToolCallDeserializer(
  item: any,
): RunStepDeltaToolCall {
  return {
    index: item["index"],
    id: item["id"],
    type: item["type"],
  };
}

/** Alias for RunStepDeltaToolCallUnion */
export type RunStepDeltaToolCallUnion =
  | RunStepDeltaFunctionToolCall
  | RunStepDeltaFileSearchToolCall
  | RunStepDeltaCodeInterpreterToolCall
  | RunStepDeltaToolCall;

export function runStepDeltaToolCallUnionDeserializer(
  item: any,
): RunStepDeltaToolCallUnion {
  switch (item.type) {
    case "function":
      return runStepDeltaFunctionToolCallDeserializer(
        item as RunStepDeltaFunctionToolCall,
      );

    case "file_search":
      return runStepDeltaFileSearchToolCallDeserializer(
        item as RunStepDeltaFileSearchToolCall,
      );

    case "code_interpreter":
      return runStepDeltaCodeInterpreterToolCallDeserializer(
        item as RunStepDeltaCodeInterpreterToolCall,
      );

    default:
      return runStepDeltaToolCallDeserializer(item);
  }
}

/** Represents a function tool call within a streaming run step's tool call details. */
export interface RunStepDeltaFunctionToolCall extends RunStepDeltaToolCall {
  /** The object type, which is always "function." */
  type: "function";
  /** The function data for the tool call. */
  function?: RunStepDeltaFunction;
}

export function runStepDeltaFunctionToolCallDeserializer(
  item: any,
): RunStepDeltaFunctionToolCall {
  return {
    index: item["index"],
    id: item["id"],
    type: item["type"],
    function: !item["function"]
      ? item["function"]
      : runStepDeltaFunctionDeserializer(item["function"]),
  };
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

export function runStepDeltaFunctionDeserializer(
  item: any,
): RunStepDeltaFunction {
  return {
    name: item["name"],
    arguments: item["arguments"],
    output: item["output"],
  };
}

/** Represents a file search tool call within a streaming run step's tool call details. */
export interface RunStepDeltaFileSearchToolCall extends RunStepDeltaToolCall {
  /** The object type, which is always "file_search." */
  type: "file_search";
  /** Reserved for future use. */
  fileSearch?: Record<string, string>;
}

export function runStepDeltaFileSearchToolCallDeserializer(
  item: any,
): RunStepDeltaFileSearchToolCall {
  return {
    index: item["index"],
    id: item["id"],
    type: item["type"],
    fileSearch: item["file_search"],
  };
}

/** Represents a Code Interpreter tool call within a streaming run step's tool call details. */
export interface RunStepDeltaCodeInterpreterToolCall
  extends RunStepDeltaToolCall {
  /** The object type, which is always "code_interpreter." */
  type: "code_interpreter";
  /** The Code Interpreter data for the tool call. */
  codeInterpreter?: RunStepDeltaCodeInterpreterDetailItemObject;
}

export function runStepDeltaCodeInterpreterToolCallDeserializer(
  item: any,
): RunStepDeltaCodeInterpreterToolCall {
  return {
    index: item["index"],
    id: item["id"],
    type: item["type"],
    codeInterpreter: !item["code_interpreter"]
      ? item["code_interpreter"]
      : runStepDeltaCodeInterpreterDetailItemObjectDeserializer(
          item["code_interpreter"],
        ),
  };
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

export function runStepDeltaCodeInterpreterDetailItemObjectDeserializer(
  item: any,
): RunStepDeltaCodeInterpreterDetailItemObject {
  return {
    input: item["input"],
    outputs: !item["outputs"]
      ? item["outputs"]
      : runStepDeltaCodeInterpreterOutputUnionArrayDeserializer(
          item["outputs"],
        ),
  };
}

export function runStepDeltaCodeInterpreterOutputUnionArrayDeserializer(
  result: Array<RunStepDeltaCodeInterpreterOutputUnion>,
): any[] {
  return result.map((item) => {
    return runStepDeltaCodeInterpreterOutputUnionDeserializer(item);
  });
}

/** The abstract base representation of a streaming run step tool call's Code Interpreter tool output. */
export interface RunStepDeltaCodeInterpreterOutput {
  /** The index of the output in the streaming run step tool call's Code Interpreter outputs array. */
  index: number;
  /** The type of the streaming run step tool call's Code Interpreter output. */
  /** The discriminator possible values: logs, image */
  type: string;
}

export function runStepDeltaCodeInterpreterOutputDeserializer(
  item: any,
): RunStepDeltaCodeInterpreterOutput {
  return {
    index: item["index"],
    type: item["type"],
  };
}

/** Alias for RunStepDeltaCodeInterpreterOutputUnion */
export type RunStepDeltaCodeInterpreterOutputUnion =
  | RunStepDeltaCodeInterpreterLogOutput
  | RunStepDeltaCodeInterpreterImageOutput
  | RunStepDeltaCodeInterpreterOutput;

export function runStepDeltaCodeInterpreterOutputUnionDeserializer(
  item: any,
): RunStepDeltaCodeInterpreterOutputUnion {
  switch (item.type) {
    case "logs":
      return runStepDeltaCodeInterpreterLogOutputDeserializer(
        item as RunStepDeltaCodeInterpreterLogOutput,
      );

    case "image":
      return runStepDeltaCodeInterpreterImageOutputDeserializer(
        item as RunStepDeltaCodeInterpreterImageOutput,
      );

    default:
      return runStepDeltaCodeInterpreterOutputDeserializer(item);
  }
}

/** Represents a log output as produced by the Code Interpreter tool and as represented in a streaming run step's delta tool calls collection. */
export interface RunStepDeltaCodeInterpreterLogOutput
  extends RunStepDeltaCodeInterpreterOutput {
  /** The type of the object, which is always "logs." */
  type: "logs";
  /** The text output from the Code Interpreter tool call. */
  logs?: string;
}

export function runStepDeltaCodeInterpreterLogOutputDeserializer(
  item: any,
): RunStepDeltaCodeInterpreterLogOutput {
  return {
    index: item["index"],
    type: item["type"],
    logs: item["logs"],
  };
}

/** Represents an image output as produced the Code interpreter tool and as represented in a streaming run step's delta tool calls collection. */
export interface RunStepDeltaCodeInterpreterImageOutput
  extends RunStepDeltaCodeInterpreterOutput {
  /** The object type, which is always "image." */
  type: "image";
  /** The image data for the Code Interpreter tool call output. */
  image?: RunStepDeltaCodeInterpreterImageOutputObject;
}

export function runStepDeltaCodeInterpreterImageOutputDeserializer(
  item: any,
): RunStepDeltaCodeInterpreterImageOutput {
  return {
    index: item["index"],
    type: item["type"],
    image: !item["image"]
      ? item["image"]
      : runStepDeltaCodeInterpreterImageOutputObjectDeserializer(item["image"]),
  };
}

/** Represents the data for a streaming run step's Code Interpreter tool call image output. */
export interface RunStepDeltaCodeInterpreterImageOutputObject {
  /** The file ID for the image. */
  fileId?: string;
}

export function runStepDeltaCodeInterpreterImageOutputObjectDeserializer(
  item: any,
): RunStepDeltaCodeInterpreterImageOutputObject {
  return {
    fileId: item["file_id"],
  };
}

/** Alias for _ */
export type _ =
  | ThreadStreamEvent
  | RunStreamEvent
  | RunStepStreamEvent
  | MessageStreamEvent
  | ErrorEvent
  | DoneEvent;
/** Thread operation related streaming events */
export type ThreadStreamEvent = "thread.created";
/** Run operation related streaming events */
export type RunStreamEvent =
  | "thread.run.created"
  | "thread.run.queued"
  | "thread.run.in_progress"
  | "thread.run.requires_action"
  | "thread.run.completed"
  | "thread.run.failed"
  | "thread.run.cancelling"
  | "thread.run.cancelled"
  | "thread.run.expired";
/** Run step operation related streaming events */
export type RunStepStreamEvent =
  | "thread.run.step.created"
  | "thread.run.step.in_progress"
  | "thread.run.step.delta"
  | "thread.run.step.completed"
  | "thread.run.step.failed"
  | "thread.run.step.cancelled"
  | "thread.run.step.expired";
/** Message operation related streaming events */
export type MessageStreamEvent =
  | "thread.message.created"
  | "thread.message.in_progress"
  | "thread.message.delta"
  | "thread.message.completed"
  | "thread.message.incomplete";
/** Terminal event indicating a server side error while streaming. */
export type ErrorEvent = "error";
/** Terminal event indicating the successful end of a stream. */
export type DoneEvent = "done";
/** Alias for AssistantStreamEvent */
export type AssistantStreamEvent =
  | string
  | (
      | ThreadStreamEvent
      | RunStreamEvent
      | RunStepStreamEvent
      | MessageStreamEvent
      | ErrorEvent
      | DoneEvent
    );

export function assistantStreamEventDeserializer(
  item: any,
): AssistantStreamEvent {
  return item;
}

/** The available sorting options when requesting a list of response objects. */
export type ListSortOrder = "asc" | "desc";
/** Query parameter filter for vector store file retrieval endpoint */
export type VectorStoreFileStatusFilter =
  | "in_progress"
  | "completed"
  | "failed"
  | "cancelled";

/** The known set of supported API versions. */
export enum KnownServiceApiVersions {
  /** The initial version of Azure OpenAI Assistants that corresponds to functionality in OpenAI's first beta release. */
  v2024_02_15_preview = "2024-02-15-preview",
  /** The May 2024 preview release for Azure OpenAI, including the first availability of assistants V2. */
  v2024_05_01_preview = "2024-05-01-preview",
  /** The July 2024 preview release for Azure OpenAI. */
  v2024_07_01_preview = "2024-07-01-preview",
  /** The September 2024 preview release for Azure OpenAI. */
  v2024_09_01_preview = "2024-09-01-preview",
  /** The October 2024 preview release for Azure OpenAI. */
  v2024_10_01_Preview = "2024-10-01-preview",
  /** The October 2024 preview release for Azure OpenAI. */
  v2025_03_01_Preview = "2025-03-01-preview",
}
