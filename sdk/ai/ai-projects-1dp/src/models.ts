// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** The request details to use when creating a new agent. */
export interface CreateAgentOptions {
  /** The ID of the model to use. */
  model: string;
  /** The name of the new agent. */
  name?: string | null;
  /** The description of the new agent. */
  description?: string | null;
  /** The system instructions for the new agent to use. */
  instructions?: string | null;
  /** The collection of tools to enable for the new agent. */
  tools?: Array<ToolDefinition>;
  /**
   * A set of resources that are used by the agent's tools. The resources are specific to the type of tool. For example, the `code_interpreter`
   * tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   */
  tool_resources?: ToolResources | null;
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
  top_p?: number | null;
  /** The response format of the tool calls used by this agent. */
  response_format?: AgentsApiResponseFormatOption | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** An abstract representation of an input tool definition that an agent can use. */
export interface ToolDefinitionParent {
  type: string;
}

/** The input definition information for a code interpreter tool as used to configure an agent. */
export interface CodeInterpreterToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'code_interpreter'. */
  type: "code_interpreter";
}

/** The input definition information for a file search tool as used to configure an agent. */
export interface FileSearchToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'file_search'. */
  type: "file_search";
  /** Options overrides for the file search tool. */
  file_search?: FileSearchToolDefinitionDetails;
}

/** Options overrides for the file search tool. */
export interface FileSearchToolDefinitionDetails {
  /**
   * The maximum number of results the file search tool should output. The default is 20 for gpt-4* models and 5 for gpt-3.5-turbo. This number should be between 1 and 50 inclusive.
   *
   * Note that the file search tool may output fewer than `max_num_results` results. See the file search tool documentation for more information.
   */
  max_num_results?: number;
  /** Ranking options for file search. */
  ranking_options?: FileSearchRankingOptions;
}

/** Ranking options for file search. */
export interface FileSearchRankingOptions {
  /** File search ranker. */
  ranker: string;
  /** Ranker search threshold. */
  score_threshold: number;
}

/** The input definition information for a function tool as used to configure an agent. */
export interface FunctionToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'function'. */
  type: "function";
  /** The definition of the concrete function that the function tool should call. */
  function: FunctionDefinition;
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
  parameters?: Record<string, unknown>;
}

/** The input definition information for a bing grounding search tool as used to configure an agent. */
export interface BingGroundingToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'bing_grounding'. */
  type: "bing_grounding";
  /** The list of connections used by the bing grounding tool. */
  bing_grounding: ToolConnectionList;
}

/** A set of connection resources currently used by either the `bing_grounding`, `fabric_aiskill`, or `sharepoint_grounding` tools. */
export interface ToolConnectionList {
  /**
   * The connections attached to this tool. There can be a maximum of 1 connection
   * resource attached to the tool.
   */
  connections?: Array<ToolConnection>;
}

/** A connection resource. */
export interface ToolConnection {
  /** A connection in a ToolConnectionList attached to this tool. */
  connection_id: string;
}

/** The input definition information for a Microsoft Fabric tool as used to configure an agent. */
export interface MicrosoftFabricToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'fabric_aiskill'. */
  type: "fabric_aiskill";
  /** The list of connections used by the Microsoft Fabric tool. */
  fabric_aiskill: ToolConnectionList;
}

/** The input definition information for a sharepoint tool as used to configure an agent. */
export interface SharepointToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'sharepoint_grounding'. */
  type: "sharepoint_grounding";
  /** The list of connections used by the SharePoint tool. */
  sharepoint_grounding: ToolConnectionList;
}

/** The input definition information for an Azure AI search tool as used to configure an agent. */
export interface AzureAISearchToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'azure_ai_search'. */
  type: "azure_ai_search";
}

/** The input definition information for an OpenAPI tool as used to configure an agent. */
export interface OpenApiToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'openapi'. */
  type: "openapi";
  /** The openapi function definition. */
  openapi: OpenApiFunctionDefinition;
}

/** The input definition information for an openapi function. */
export interface OpenApiFunctionDefinition {
  /** The name of the function to be called. */
  name: string;
  /** A description of what the function does, used by the model to choose when and how to call the function. */
  description?: string;
  /** The openapi function shape, described as a JSON Schema object. */
  spec: unknown;
  /** Open API authentication details */
  auth: OpenApiAuthDetails;
}

/** authentication details for OpenApiFunctionDefinition */
export interface OpenApiAuthDetailsParent {
  type: OpenApiAuthType;
}

/** Security details for OpenApi anonymous authentication */
export interface OpenApiAnonymousAuthDetails extends OpenApiAuthDetailsParent {
  /** The object type, which is always 'anonymous'. */
  type: "anonymous";
}

/** Security details for OpenApi connection authentication */
export interface OpenApiConnectionAuthDetails extends OpenApiAuthDetailsParent {
  /** The object type, which is always 'connection'. */
  type: "connection";
  /** Connection auth security details */
  security_scheme: OpenApiConnectionSecurityScheme;
}

/** Security scheme for OpenApi managed_identity authentication */
export interface OpenApiConnectionSecurityScheme {
  /** Connection id for Connection auth type */
  connection_id: string;
}

/** Security details for OpenApi managed_identity authentication */
export interface OpenApiManagedAuthDetails extends OpenApiAuthDetailsParent {
  /** The object type, which is always 'managed_identity'. */
  type: "managed_identity";
  /** Connection auth security details */
  security_scheme: OpenApiManagedSecurityScheme;
}

/** Security scheme for OpenApi managed_identity authentication */
export interface OpenApiManagedSecurityScheme {
  /** Authentication scope for managed_identity auth type */
  audience: string;
}

/** The input definition information for a azure function tool as used to configure an agent. */
export interface AzureFunctionToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'azure_function'. */
  type: "azure_function";
  /** The definition of the concrete function that the function tool should call. */
  azure_function: AzureFunctionDefinition;
}

/** The definition of Azure function. */
export interface AzureFunctionDefinition {
  /** The definition of azure function and its parameters. */
  function: FunctionDefinition;
  /** Input storage queue. The queue storage trigger runs a function as messages are added to it. */
  input_binding: AzureFunctionBinding;
  /** Output storage queue. The function writes output to this queue when the input items are processed. */
  output_binding: AzureFunctionBinding;
}

/** The structure for keeping storage queue name and URI. */
export interface AzureFunctionBinding {
  /** The type of binding, which is always 'storage_queue'. */
  type: "storage_queue";
  /** Storage queue. */
  storage_queue: AzureFunctionStorageQueue;
}

/** The structure for keeping storage queue name and URI. */
export interface AzureFunctionStorageQueue {
  /** URI to the Azure Storage Queue service allowing you to manipulate a queue. */
  queue_service_endpoint: string;
  /** The name of an Azure function storage queue. */
  queue_name: string;
}

/**
 * A set of resources that are used by the agent's tools. The resources are specific to the type of
 * tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search`
 * tool requires a list of vector store IDs.
 */
export interface ToolResources {
  /** Resources to be used by the `code_interpreter` tool consisting of file IDs. */
  code_interpreter?: CodeInterpreterToolResource;
  /** Resources to be used by the `file_search` tool consisting of vector store IDs. */
  file_search?: FileSearchToolResource;
  /** Resources to be used by the `azure_ai_search` tool consisting of index IDs and names. */
  azure_ai_search?: AzureAISearchResource;
}

/** A set of resources that are used by the `code_interpreter` tool. */
export interface CodeInterpreterToolResource {
  /**
   * A list of file IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files
   * associated with the tool.
   */
  file_ids?: string[];
  /** The data sources to be used. This option is mutually exclusive with the `fileIds` property. */
  data_sources?: Array<VectorStoreDataSource>;
}

/**
 * The structure, containing Azure asset URI path and the asset type of the file used as a data source
 * for the enterprise file search.
 */
export interface VectorStoreDataSource {
  /** Asset URI. */
  uri: string;
  /**
   * The asset type
   *
   * Possible values: "uri_asset", "id_asset"
   */
  type: VectorStoreDataSourceAssetType;
}

/** A set of resources that are used by the `file_search` tool. */
export interface FileSearchToolResource {
  /**
   * The ID of the vector store attached to this agent. There can be a maximum of 1 vector
   * store attached to the agent.
   */
  vector_store_ids?: string[];
  /**
   * The list of vector store configuration objects from Azure.
   * This list is limited to one element.
   * The only element of this list contains the list of azure asset IDs used by the search tool.
   */
  vector_stores?: Array<VectorStoreConfigurations>;
}

/** The structure, containing the list of vector storage configurations i.e. the list of azure asset IDs. */
export interface VectorStoreConfigurations {
  /** Name */
  name: string;
  /** Configurations */
  configuration: VectorStoreConfiguration;
}

/**
 * Vector storage configuration is the list of data sources, used when multiple
 * files can be used for the enterprise file search.
 */
export interface VectorStoreConfiguration {
  /** Data sources */
  data_sources: Array<VectorStoreDataSource>;
}

/** A set of index resources used by the `azure_ai_search` tool. */
export interface AzureAISearchResource {
  /**
   * The indices attached to this agent. There can be a maximum of 1 index
   * resource attached to the agent.
   */
  indexes?: Array<IndexResource>;
}

/** A Index resource. */
export interface IndexResource {
  /** An index connection id in an IndexResource attached to this agent. */
  index_connection_id: string;
  /** The name of an index in an IndexResource attached to this agent. */
  index_name: string;
}

/**
 * An object describing the expected output of the model. If `json_object` only `function` type `tools` are allowed to be passed to the Run.
 * If `text` the model can return text or any value needed.
 */
export interface AgentsApiResponseFormat {
  /**
   * Must be one of `text` or `json_object`.
   *
   * Possible values: "text", "json_object"
   */
  type?: ResponseFormat;
}

/** The type of response format being defined: `json_schema` */
export interface ResponseFormatJsonSchemaType {
  /** Type */
  type: "json_schema";
  /** The JSON schema, describing response format. */
  json_schema: ResponseFormatJsonSchema;
}

/** A description of what the response format is for, used by the model to determine how to respond in the format. */
export interface ResponseFormatJsonSchema {
  /** A description of what the response format is for, used by the model to determine how to respond in the format. */
  description?: string;
  /** The name of a schema. */
  name: string;
  /** The JSON schema object, describing the response format. */
  schema: unknown;
}

/** The request details to use when modifying an existing agent. */
export interface UpdateAgentOptions {
  /** The ID of the model to use. */
  model?: string;
  /** The modified name for the agent to use. */
  name?: string | null;
  /** The modified description for the agent to use. */
  description?: string | null;
  /** The modified system instructions for the new agent to use. */
  instructions?: string | null;
  /** The modified collection of tools to enable for the agent. */
  tools?: Array<ToolDefinition>;
  /**
   * A set of resources that are used by the agent's tools. The resources are specific to the type of tool. For example,
   * the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   */
  tool_resources?: ToolResources;
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
  top_p?: number | null;
  /** The response format of the tool calls used by this agent. */
  response_format?: AgentsApiResponseFormatOption | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** The details used to create a new agent thread. */
export interface AgentThreadCreationOptions {
  /** The initial messages to associate with the new thread. */
  messages?: Array<ThreadMessageOptions>;
  /**
   * A set of resources that are made available to the agent's tools in this thread. The resources are specific to the
   * type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires
   * a list of vector store IDs.
   */
  tool_resources?: ToolResources | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** A single message within an agent thread, as provided during that thread's creation for its initial state. */
export interface ThreadMessageOptions {
  /**
   * The role of the entity that is creating the message. Allowed values include:
   * - `user`: Indicates the message is sent by an actual user and should be used in most
   * cases to represent user-generated messages.
   * - `assistant`: Indicates the message is generated by the agent. Use this value to insert
   * messages from the agent into the
   * conversation.
   *
   * Possible values: "user", "assistant"
   */
  role: MessageRole;
  /**
   * The textual content of the initial message. Currently, robust input including images and annotated text may only be provided via
   * a separate call to the create message API.
   */
  content: string;
  /** A list of files attached to the message, and the tools they should be added to. */
  attachments?: Array<MessageAttachment> | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** This describes to which tools a file has been attached. */
export interface MessageAttachment {
  /** The ID of the file to attach to the message. */
  file_id?: string;
  /** Azure asset ID. */
  data_source?: VectorStoreDataSource;
  /** The tools to add to this file. */
  tools: Array<MessageAttachmentToolDefinition>;
}

/** The details used to update an existing agent thread */
export interface UpdateAgentThreadOptions {
  /**
   * A set of resources that are made available to the agent's tools in this thread. The resources are specific to the
   * type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires
   * a list of vector store IDs
   */
  tool_resources?: ToolResources | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** The details used when creating a new run of an agent thread. */
export interface CreateRunOptions {
  /** The ID of the agent that should run the thread. */
  assistant_id: string;
  /** The overridden model name that the agent should use to run the thread. */
  model?: string | null;
  /** The overridden system instructions that the agent should use to run the thread. */
  instructions?: string | null;
  /**
   * Additional instructions to append at the end of the instructions for the run. This is useful for modifying the behavior
   * on a per-run basis without overriding other instructions.
   */
  additional_instructions?: string | null;
  /** Adds additional messages to the thread before creating the run. */
  additional_messages?: Array<ThreadMessageOptions> | null;
  /** The overridden list of enabled tools that the agent should use to run the thread. */
  tools?: Array<ToolDefinition> | null;
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
  top_p?: number | null;
  /**
   * The maximum number of prompt tokens that may be used over the course of the run. The run will make a best effort to use only
   * the number of prompt tokens specified, across multiple turns of the run. If the run exceeds the number of prompt tokens specified,
   * the run will end with status `incomplete`. See `incomplete_details` for more info.
   */
  max_prompt_tokens?: number | null;
  /**
   * The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort
   * to use only the number of completion tokens specified, across multiple turns of the run. If the run exceeds the number of
   * completion tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
   */
  max_completion_tokens?: number | null;
  /** The strategy to use for dropping messages as the context windows moves forward. */
  truncation_strategy?: TruncationObject | null;
  /** Controls whether or not and which tool is called by the model. */
  tool_choice?: AgentsApiToolChoiceOption | null;
  /** Specifies the format that the model must output. */
  response_format?: AgentsApiResponseFormatOption | null;
  /** If `true` functions will run in parallel during tool use. */
  parallel_tool_calls?: boolean;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
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
   *
   * Possible values: "auto", "last_messages"
   */
  type: TruncationStrategy;
  /** The number of most recent messages from the thread when constructing the context for the run. */
  last_messages?: number | null;
}

/** Specifies a tool the model should use. Use to force the model to call a specific tool. */
export interface AgentsNamedToolChoice {
  /**
   * the type of tool. If type is `function`, the function name must be set.
   *
   * Possible values: "function", "code_interpreter", "file_search", "bing_grounding", "fabric_aiskill", "sharepoint_grounding", "azure_ai_search"
   */
  type: AgentsNamedToolChoiceType;
  /** The name of the function to call */
  function?: FunctionName;
}

/** The function name that will be used, if using the `function` tool */
export interface FunctionName {
  /** The name of the function to call */
  name: string;
}

/**
 * Request object. A set of resources that are used by the agent's tools. The resources are specific to the type of tool.
 * For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of
 * vector store IDs.
 */
export interface UpdateToolResourcesOptions {
  /**
   * Overrides the list of file IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files
   * associated with the tool.
   */
  code_interpreter?: UpdateCodeInterpreterToolResourceOptions;
  /** Overrides the vector store attached to this agent. There can be a maximum of 1 vector store attached to the agent. */
  file_search?: UpdateFileSearchToolResourceOptions;
  /** Overrides the resources to be used by the `azure_ai_search` tool consisting of index IDs and names. */
  azure_ai_search?: AzureAISearchResource;
}

/** Request object to update `code_interpreted` tool resources. */
export interface UpdateCodeInterpreterToolResourceOptions {
  /** A list of file IDs to override the current list of the agent. */
  file_ids?: string[];
}

/** Request object to update `file_search` tool resources. */
export interface UpdateFileSearchToolResourceOptions {
  /** A list of vector store IDs to override the current list of the agent. */
  vector_store_ids?: string[];
}

/** The data provided during a tool outputs submission to resolve pending tool calls and allow the model to continue. */
export interface ToolOutput {
  /** The ID of the tool call being resolved, as provided in the tool calls of a required action from a run. */
  tool_call_id?: string;
  /** The output from the tool to be submitted. */
  output?: string;
}

/** The details used when creating and immediately running a new agent thread. */
export interface CreateAndRunThreadOptions {
  /** The ID of the agent for which the thread should be created. */
  assistant_id: string;
  /** The details used to create the new thread. If no thread is provided, an empty one will be created. */
  thread?: AgentThreadCreationOptions;
  /** The overridden model that the agent should use to run the thread. */
  model?: string | null;
  /** The overridden system instructions the agent should use to run the thread. */
  instructions?: string | null;
  /** The overridden list of enabled tools the agent should use to run the thread. */
  tools?: Array<ToolDefinition> | null;
  /** Override the tools the agent can use for this run. This is useful for modifying the behavior on a per-run basis */
  tool_resources?: UpdateToolResourcesOptions | null;
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
  top_p?: number | null;
  /**
   * The maximum number of prompt tokens that may be used over the course of the run. The run will make a best effort to use only
   * the number of prompt tokens specified, across multiple turns of the run. If the run exceeds the number of prompt tokens specified,
   * the run will end with status `incomplete`. See `incomplete_details` for more info.
   */
  max_prompt_tokens?: number | null;
  /**
   * The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only
   * the number of completion tokens specified, across multiple turns of the run. If the run exceeds the number of completion tokens
   * specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
   */
  max_completion_tokens?: number | null;
  /** The strategy to use for dropping messages as the context windows moves forward. */
  truncation_strategy?: TruncationObject | null;
  /** Controls whether or not and which tool is called by the model. */
  tool_choice?: AgentsApiToolChoiceOption | null;
  /** Specifies the format that the model must output. */
  response_format?: AgentsApiResponseFormatOption | null;
  /** If `true` functions will run in parallel during tool use. */
  parallel_tool_calls?: boolean;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** The expiration policy for a vector store. */
export interface VectorStoreExpirationPolicy {
  /**
   * Anchor timestamp after which the expiration policy applies. Supported anchors: `last_active_at`.
   *
   * Possible values: "last_active_at"
   */
  anchor: VectorStoreExpirationPolicyAnchor;
  /** The anchor timestamp after which the expiration policy applies. */
  days: number;
}

/** Request object for creating a vector store. */
export interface VectorStoreOptions {
  /** A list of file IDs that the vector store should use. Useful for tools like `file_search` that can access files. */
  file_ids?: string[];
  /** The name of the vector store. */
  name?: string;
  /** The vector store configuration, used when vector store is created from Azure asset URIs. */
  configuration?: VectorStoreConfiguration;
  /** Details on when this vector store expires */
  expires_after?: VectorStoreExpirationPolicy;
  /** The chunking strategy used to chunk the file(s). If not set, will use the auto strategy. Only applicable if file_ids is non-empty. */
  chunking_strategy?: VectorStoreChunkingStrategyRequest;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** An abstract representation of a vector store chunking strategy configuration. */
export interface VectorStoreChunkingStrategyRequestParent {
  type: VectorStoreChunkingStrategyRequestType;
}

/** The default strategy. This strategy currently uses a max_chunk_size_tokens of 800 and chunk_overlap_tokens of 400. */
export interface VectorStoreAutoChunkingStrategyRequest
  extends VectorStoreChunkingStrategyRequestParent {
  /** The object type, which is always 'auto'. */
  type: "auto";
}

/** A statically configured chunking strategy. */
export interface VectorStoreStaticChunkingStrategyRequest
  extends VectorStoreChunkingStrategyRequestParent {
  /** The object type, which is always 'static'. */
  type: "static";
  /** The options for the static chunking strategy. */
  static: VectorStoreStaticChunkingStrategyOptions;
}

/** Options to configure a vector store static chunking strategy. */
export interface VectorStoreStaticChunkingStrategyOptions {
  /** The maximum number of tokens in each chunk. The default value is 800. The minimum value is 100 and the maximum value is 4096. */
  max_chunk_size_tokens: number;
  /**
   * The number of tokens that overlap between chunks. The default value is 400.
   * Note that the overlap must not exceed half of max_chunk_size_tokens.
   */
  chunk_overlap_tokens: number;
}

/** Request object for updating a vector store. */
export interface VectorStoreUpdateOptions {
  /** The name of the vector store. */
  name?: string | null;
  /** Details on when this vector store expires */
  expires_after?: VectorStoreExpirationPolicy | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** Evaluation Definition */
export interface Evaluation {
  /** Identifier of the evaluation. */
  id?: string;
  /** Data for evaluation. */
  data: InputData;
  /** Update stage to 'Archive' to archive the asset. Default is Development, which means the asset is under development. */
  displayName?: string;
  /** Description of the evaluation. It can be used to store additional information about the evaluation and is mutable. */
  description?: string;
  /** Evaluation's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Evaluation's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
  /** Evaluators to be used for the evaluation. */
  evaluators: Record<string, EvaluatorConfiguration>;
}

/** Abstract data class. */
export interface InputDataParent {
  type: string;
}

/** Dataset as source for evaluation. */
export interface Dataset extends InputDataParent {
  type: "dataset";
  /** Evaluation input data */
  id: string;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {}

/** Evaluator Configuration */
export interface EvaluatorConfiguration {
  /** Identifier of the evaluator. */
  id: string;
  /** Initialization parameters of the evaluator. */
  initParams?: Record<string, unknown>;
  /** Data parameters of the evaluator. */
  dataMapping?: Record<string, string>;
}

/** DatasetVersion Definition */
export interface DatasetVersion {
  /** [Required] Uri of the data. Example: https://go.microsoft.com/fwlink/?linkid=2202330 */
  datasetUri: string;
  /**
   * Data type
   *
   * Possible values: "uri_file"
   */
  datasetType: DatasetType;
  /** Asset stage */
  stage?: string;
  /** The asset description text. */
  description?: string;
  /** Tag dictionary. Tags can be added, removed, and updated. */
  tags?: Record<string, string>;
}

/** Represents a request for a pending upload. */
export interface PendingUploadRequest {
  /** If PendingUploadId is not provided, a random GUID will be used. */
  pendingUploadId?: string;
  /** TemporaryBlobReference is the only supported type. */
  pendingUploadType: "TemporaryBlobReference";
}

/**
 * The configuration information for a chat completions request.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export interface ChatCompletionsOptions extends Record<string, unknown> {
  /**
   * The collection of context messages associated with this chat completions request.
   * Typical usage begins with a chat message for the System role that provides instructions for
   * the behavior of the assistant, followed by alternating messages between the User and
   * Assistant roles.
   */
  messages: Array<ChatRequestMessage>;
  /**
   * A value that influences the probability of generated tokens appearing based on their cumulative
   * frequency in generated text.
   * Positive values will make tokens less likely to appear as their frequency increases and
   * decrease the likelihood of the model repeating the same statements verbatim.
   * Supported range is [-2, 2].
   */
  frequency_penalty?: number;
  /** A value indicating whether chat completions should be streamed for this request. */
  stream?: boolean;
  /**
   * A value that influences the probability of generated tokens appearing based on their existing
   * presence in generated text.
   * Positive values will make tokens less likely to appear when they already exist and increase the
   * model's likelihood to output new topics.
   * Supported range is [-2, 2].
   */
  presence_penalty?: number;
  /**
   * The sampling temperature to use that controls the apparent creativity of generated completions.
   * Higher values will make output more random while lower values will make results more focused
   * and deterministic.
   * It is not recommended to modify temperature and top_p for the same completions request as the
   * interaction of these two settings is difficult to predict.
   * Supported range is [0, 1].
   */
  temperature?: number;
  /**
   * An alternative to sampling with temperature called nucleus sampling. This value causes the
   * model to consider the results of tokens with the provided probability mass. As an example, a
   * value of 0.15 will cause only the tokens comprising the top 15% of probability mass to be
   * considered.
   * It is not recommended to modify temperature and top_p for the same completions request as the
   * interaction of these two settings is difficult to predict.
   * Supported range is [0, 1].
   */
  top_p?: number;
  /** The maximum number of tokens to generate. */
  max_tokens?: number;
  /**
   * An object specifying the format that the model must output.
   *
   * Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured Outputs which ensures the model will match your supplied JSON schema.
   *
   * Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the message the model generates is valid JSON.
   *
   * **Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if `finish_reason="length"`, which indicates the generation exceeded `max_tokens` or the conversation exceeded the max context length.
   */
  response_format?: ChatCompletionsResponseFormat;
  /** A collection of textual sequences that will end completions generation. */
  stop?: string[];
  /**
   * A list of tools the model may request to call. Currently, only functions are supported as a tool. The model
   * may response with a function call request and provide the input arguments in JSON format for that function.
   */
  tools?: Array<ChatCompletionsToolDefinition>;
  /** If specified, the model will configure which of the provided tools it can use for the chat completions response. */
  tool_choice?:
    | ChatCompletionsToolChoicePreset
    | ChatCompletionsNamedToolChoice;
  /**
   * If specified, the system will make a best effort to sample deterministically such that repeated requests with the
   * same seed and parameters should return the same result. Determinism is not guaranteed.
   */
  seed?: number;
  /** ID of the specific AI model to use, if more than one model is available on the endpoint. */
  model?: string;
  /**
   * The modalities that the model is allowed to use for the chat completions response. The default modality
   * is `text`. Indicating an unsupported modality combination results in an 422 error.
   */
  modalities?: ChatCompletionsModality[];
}

/** An abstract representation of a chat message as provided in a request. */
export interface ChatRequestMessageParent {
  role: ChatRole;
}

/**
 * A request chat message containing system instructions that influence how the model will generate a chat completions
 * response.
 */
export interface ChatRequestSystemMessage extends ChatRequestMessageParent {
  /** The chat role associated with this message, which is always 'system' for system messages. */
  role: "system";
  /** The contents of the system message. */
  content: string;
}

/** A request chat message representing user input to the assistant. */
export interface ChatRequestUserMessage extends ChatRequestMessageParent {
  /** The chat role associated with this message, which is always 'user' for user messages. */
  role: "user";
  /** The contents of the user message, with available input types varying by selected model. */
  content: string | Array<ChatMessageContentItem>;
}

/** An abstract representation of a structured content item within a chat message. */
export interface ChatMessageContentItemParent {
  type: string;
}

/** A structured chat content item containing plain text. */
export interface ChatMessageTextContentItem
  extends ChatMessageContentItemParent {
  /** The discriminated object type: always 'text' for this type. */
  type: "text";
  /** The content of the message. */
  text: string;
}

/** A structured chat content item containing an image reference. */
export interface ChatMessageImageContentItem
  extends ChatMessageContentItemParent {
  /** The discriminated object type: always 'image_url' for this type. */
  type: "image_url";
  /** An internet location, which must be accessible to the model,from which the image may be retrieved. */
  image_url: ChatMessageImageUrl;
}

/** An internet location from which the model may retrieve an image. */
export interface ChatMessageImageUrl {
  /** The URL of the image. */
  url: string;
  /**
   * The evaluation quality setting to use, which controls relative prioritization of speed, token consumption, and
   * accuracy.
   *
   * Possible values: "auto", "low", "high"
   */
  detail?: ChatMessageImageDetailLevel;
}

/** A structured chat content item containing an audio reference. */
export interface ChatMessageAudioContentItem
  extends ChatMessageContentItemParent {
  /** The discriminated object type: always 'image_url' for this type. */
  type: "audio_url";
  /** An internet location, which must be accessible to the model, from which the audio may be retrieved. */
  audio_url: ChatMessageAudioUrl;
}

/** An internet location from which the model may retrieve an audio. */
export interface ChatMessageAudioUrl {
  /** The URL of the audio. */
  url: string;
}

/** A structured chat content item containing an audio content. */
export interface ChatMessageInputAudioContentItem
  extends ChatMessageContentItemParent {
  /** The discriminated object type: always 'input_audio' for this type. */
  type: "input_audio";
  /**
   * The audio format of the audio reference.
   *
   * Possible values: "wav", "mp3"
   */
  format: AudioContentFormat;
}

/** A request chat message representing response or action from the assistant. */
export interface ChatRequestAssistantMessage extends ChatRequestMessageParent {
  /** The chat role associated with this message, which is always 'assistant' for assistant messages. */
  role: "assistant";
  /** The content of the message. */
  content?: string;
  /**
   * The tool calls that must be resolved and have their outputs appended to subsequent input messages for the chat
   * completions request to resolve as configured.
   */
  tool_calls?: Array<ChatCompletionsToolCall>;
  /**   The audio generated by a previous response in a multi-turn conversation. */
  audio?: ChatRequestAudioReference;
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

/** A reference to an audio response generated by the model. */
export interface ChatRequestAudioReference {
  /**   Unique identifier for the audio response. This value corresponds to the id of a previous audio completion. */
  id: string;
}

/** A request chat message representing requested output from a configured tool. */
export interface ChatRequestToolMessage extends ChatRequestMessageParent {
  /** The chat role associated with this message, which is always 'tool' for tool messages. */
  role: "tool";
  /** The content of the message. */
  content?: string;
  /** The ID of the tool call resolved by the provided content. */
  tool_call_id: string;
}

/**
 * Represents the format that the model must output. Use this to enable JSON mode instead of the default text mode.
 * Note that to enable JSON mode, some AI models may also require you to instruct the model to produce JSON
 * via a system or user message.
 */
export interface ChatCompletionsResponseFormatParent {
  type: string;
}

/** A response format for Chat Completions that emits text responses. This is the default response format. */
export interface ChatCompletionsResponseFormatText
  extends ChatCompletionsResponseFormatParent {
  /** Response format type: always 'text' for this object. */
  type: "text";
}

/**
 * A response format for Chat Completions that restricts responses to emitting valid JSON objects.
 * Note that to enable JSON mode, some AI models may also require you to instruct the model to produce JSON
 * via a system or user message.
 */
export interface ChatCompletionsResponseFormatJsonObject
  extends ChatCompletionsResponseFormatParent {
  /** Response format type: always 'json_object' for this object. */
  type: "json_object";
}

/**
 * A response format for Chat Completions that restricts responses to emitting valid JSON objects, with a
 * JSON schema specified by the caller.
 */
export interface ChatCompletionsResponseFormatJsonSchema
  extends ChatCompletionsResponseFormatParent {
  /** The type of response format being defined: `json_schema` */
  type: "json_schema";
  /** The definition of the required JSON schema in the response, and associated metadata. */
  json_schema: ChatCompletionsResponseFormatJsonSchemaDefinition;
}

/** The definition of the required JSON schema in the response, and associated metadata. */
export interface ChatCompletionsResponseFormatJsonSchemaDefinition {
  /** The name of the response format. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. */
  name: string;
  /** The definition of the JSON schema */
  schema: Record<string, unknown>;
  /** A description of the response format, used by the AI model to determine how to generate responses in this format. */
  description?: string;
  /**
   * Whether to enable strict schema adherence when generating the output.
   * If set to true, the model will always follow the exact schema defined in the `schema` field. Only a subset of
   * JSON Schema is supported when `strict` is `true`.
   */
  strict?: boolean;
}

/** The definition of a chat completions tool that can call a function. */
export interface ChatCompletionsToolDefinition {
  /** The type of the tool. Currently, only `function` is supported. */
  type: "function";
  /** The function definition details for the function tool. */
  function: FunctionDefinition;
}

/** A tool selection of a specific, named function tool that will limit chat completions to using the named function. */
export interface ChatCompletionsNamedToolChoice {
  /** The type of the tool. Currently, only `function` is supported. */
  type: "function";
  /** The function that should be called. */
  function: ChatCompletionsNamedToolChoiceFunction;
}

/** A tool selection of a specific, named function tool that will limit chat completions to using the named function. */
export interface ChatCompletionsNamedToolChoiceFunction {
  /** The name of the function that should be called. */
  name: string;
}

/** The configuration information for an embeddings request. */
export interface EmbeddingsOptions extends Record<string, unknown> {
  /**
   * Input text to embed, encoded as a string or array of tokens.
   * To embed multiple inputs in a single request, pass an array
   * of strings or array of token arrays.
   */
  input: string[];
  /**
   * Optional. The number of dimensions the resulting output embeddings should have.
   * Passing null causes the model to use its default value.
   * Returns a 422 error if the model doesn't support the value or parameter.
   */
  dimensions?: number;
  /**
   * Optional. The desired format for the returned embeddings.
   *
   * Possible values: "base64", "binary", "float", "int8", "ubinary", "uint8"
   */
  encoding_format?: EmbeddingEncodingFormat;
  /**
   * Optional. The type of the input.
   * Returns a 422 error if the model doesn't support the value or parameter.
   *
   * Possible values: "text", "query", "document"
   */
  input_type?: EmbeddingInputType;
  /** ID of the specific AI model to use, if more than one model is available on the endpoint. */
  model?: string;
}

/** The configuration information for an image embeddings request. */
export interface ImageEmbeddingsOptions extends Record<string, unknown> {
  /**
   * Input image to embed. To embed multiple inputs in a single request, pass an array.
   * The input must not exceed the max input tokens for the model.
   */
  input: Array<ImageEmbeddingInput>;
  /**
   * Optional. The number of dimensions the resulting output embeddings should have.
   * Passing null causes the model to use its default value.
   * Returns a 422 error if the model doesn't support the value or parameter.
   */
  dimensions?: number;
  /**
   * Optional. The number of dimensions the resulting output embeddings should have.
   * Passing null causes the model to use its default value.
   * Returns a 422 error if the model doesn't support the value or parameter.
   *
   * Possible values: "base64", "binary", "float", "int8", "ubinary", "uint8"
   */
  encoding_format?: EmbeddingEncodingFormat;
  /**
   * Optional. The type of the input.
   * Returns a 422 error if the model doesn't support the value or parameter.
   *
   * Possible values: "text", "query", "document"
   */
  input_type?: EmbeddingInputType;
  /** ID of the specific AI model to use, if more than one model is available on the endpoint. */
  model?: string;
}

/** Represents an image with optional text. */
export interface ImageEmbeddingInput {
  /** The input image encoded in base64 string as a data URL. Example: `data:image/{format};base64,{data}`. */
  image: string;
  /**
   * Optional. The text input to feed into the model (like DINO, CLIP).
   * Returns a 422 error if the model doesn't support the value or parameter.
   */
  text?: string;
}

/** Index resource Definition */
export interface IndexParent {
  /** Asset stage */
  stage?: string;
  /** The asset description text. */
  description?: string;
  /** Tag dictionary. Tags can be added, removed, and updated. */
  tags?: Record<string, string>;
  indexType: IndexType;
}

/** Azure AI Search Index Definition */
export interface AzureAISearchIndex extends IndexParent {
  /** Type of index */
  indexType: "AzureSearch";
  /** Connection id to Azure AI Search */
  connectionId: string;
  /** Name of index in Azure AI Search resource to attach */
  indexName: string;
}

/** Managed Azure AI Search Index Definition */
export interface ManagedAzureAISearchIndex extends IndexParent {
  /** Type of index */
  indexType: "ManagedAzureSearch";
  /** Vector store id of managed index */
  vectorStoreId: string;
}

/** CosmosDB Vector Store Index Definition */
export interface CosmosDBIndex extends IndexParent {
  /** Type of index */
  indexType: "CosmosDBNoSqlVectorStore";
  /** Connection id to CosmosDB */
  connectionId: string;
  /** Name of the CosmosDB Database */
  databaseName: string;
  /** Name of CosmosDB Container */
  containerName: string;
  /** Embedding model configuration */
  embeddingConfiguration: EmbeddingConfiguration;
}

/** Embedding configuration class */
export interface EmbeddingConfiguration {
  /** Connection id to embedding model */
  connectionId?: string;
  /** Deployment name of embedding model */
  deploymentName: string;
  /** Embedding field */
  embeddingField: string;
}

/** An abstract representation of an input tool definition that an agent can use. */
export type ToolDefinition =
  | ToolDefinitionParent
  | CodeInterpreterToolDefinition
  | FileSearchToolDefinition
  | FunctionToolDefinition
  | BingGroundingToolDefinition
  | MicrosoftFabricToolDefinition
  | SharepointToolDefinition
  | AzureAISearchToolDefinition
  | OpenApiToolDefinition
  | AzureFunctionToolDefinition;
/** authentication details for OpenApiFunctionDefinition */
export type OpenApiAuthDetails =
  | OpenApiAuthDetailsParent
  | OpenApiAnonymousAuthDetails
  | OpenApiConnectionAuthDetails
  | OpenApiManagedAuthDetails;
/** An abstract representation of a vector store chunking strategy configuration. */
export type VectorStoreChunkingStrategyRequest =
  | VectorStoreChunkingStrategyRequestParent
  | VectorStoreAutoChunkingStrategyRequest
  | VectorStoreStaticChunkingStrategyRequest;
/** Abstract data class. */
export type InputData = InputDataParent | Dataset;
/** An abstract representation of a chat message as provided in a request. */
export type ChatRequestMessage =
  | ChatRequestMessageParent
  | ChatRequestSystemMessage
  | ChatRequestUserMessage
  | ChatRequestAssistantMessage
  | ChatRequestToolMessage;
/** An abstract representation of a structured content item within a chat message. */
export type ChatMessageContentItem =
  | ChatMessageContentItemParent
  | ChatMessageTextContentItem
  | ChatMessageImageContentItem
  | ChatMessageAudioContentItem
  | ChatMessageInputAudioContentItem;
/**
 * Represents the format that the model must output. Use this to enable JSON mode instead of the default text mode.
 * Note that to enable JSON mode, some AI models may also require you to instruct the model to produce JSON
 * via a system or user message.
 */
export type ChatCompletionsResponseFormat =
  | ChatCompletionsResponseFormatParent
  | ChatCompletionsResponseFormatText
  | ChatCompletionsResponseFormatJsonObject
  | ChatCompletionsResponseFormatJsonSchema;
/** Index resource Definition */
export type Index =
  | IndexParent
  | AzureAISearchIndex
  | ManagedAzureAISearchIndex
  | CosmosDBIndex;
/** Alias for OpenApiAuthType */
export type OpenApiAuthType = string;
/** Alias for VectorStoreDataSourceAssetType */
export type VectorStoreDataSourceAssetType = string;
/** Alias for AgentsApiResponseFormatMode */
export type AgentsApiResponseFormatMode = string;
/** Alias for ResponseFormat */
export type ResponseFormat = string;
/** Alias for AgentsApiResponseFormatOption */
export type AgentsApiResponseFormatOption =
  | string
  | AgentsApiResponseFormatMode
  | AgentsApiResponseFormat
  | ResponseFormatJsonSchemaType;
/** Alias for ListSortOrder */
export type ListSortOrder = string;
/** Alias for MessageRole */
export type MessageRole = string;
/** Alias for MessageAttachmentToolDefinition */
export type MessageAttachmentToolDefinition =
  | CodeInterpreterToolDefinition
  | FileSearchToolDefinition;
/** Alias for RunAdditionalFieldList */
export type RunAdditionalFieldList = string;
/** Alias for TruncationStrategy */
export type TruncationStrategy = string;
/** Alias for AgentsApiToolChoiceOptionMode */
export type AgentsApiToolChoiceOptionMode = string;
/** Alias for AgentsNamedToolChoiceType */
export type AgentsNamedToolChoiceType = string;
/** Alias for AgentsApiToolChoiceOption */
export type AgentsApiToolChoiceOption =
  | string
  | AgentsApiToolChoiceOptionMode
  | AgentsNamedToolChoice;
/** Alias for FilePurpose */
export type FilePurpose = string;
/** Alias for VectorStoreExpirationPolicyAnchor */
export type VectorStoreExpirationPolicyAnchor = string;
/** Alias for VectorStoreChunkingStrategyRequestType */
export type VectorStoreChunkingStrategyRequestType = string;
/** Alias for VectorStoreFileStatusFilter */
export type VectorStoreFileStatusFilter = string;
/** Alias for ConnectionCategory */
export type ConnectionCategory = string;
/** Alias for ListViewType */
export type ListViewType = string;
/** Alias for DatasetType */
export type DatasetType = string;
/** Alias for ExtraParameters */
export type ExtraParameters = string;
/** Alias for ChatRole */
export type ChatRole = string;
/** Alias for ChatMessageImageDetailLevel */
export type ChatMessageImageDetailLevel = string;
/** Alias for AudioContentFormat */
export type AudioContentFormat = string;
/** Alias for ChatCompletionsToolChoicePreset */
export type ChatCompletionsToolChoicePreset = string;
/** Alias for ChatCompletionsModality */
export type ChatCompletionsModality = string;
/** Alias for EmbeddingEncodingFormat */
export type EmbeddingEncodingFormat = string;
/** Alias for EmbeddingInputType */
export type EmbeddingInputType = string;
/** Alias for IndexType */
export type IndexType = string;
