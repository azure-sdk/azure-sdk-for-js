// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
  tools?: Array<ToolDefinition>;
  /**
   * A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter`
   * tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   */
  tool_resources?: CreateToolResourcesOptions | null;
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
  /** The response format of the tool calls used by this assistant. */
  response_format?: AssistantsApiResponseFormatOption | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** An abstract representation of an input tool definition that an assistant can use. */
export interface ToolDefinitionParent {
  type: string;
}

/** The input definition information for a code interpreter tool as used to configure an assistant. */
export interface CodeInterpreterToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'code_interpreter'. */
  type: "code_interpreter";
}

/** The input definition information for a file search tool as used to configure an assistant. */
export interface FileSearchToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'file_search'. */
  type: "file_search";
}

/** The input definition information for a function tool as used to configure an assistant. */
export interface FunctionToolDefinition extends ToolDefinitionParent {
  /** The object type, which is always 'function'. */
  type: "function";
  /** The definition of the concrete function that the function tool should call. */
  function: FunctionDefinition;
}

/** The input definition information for a function. */
export interface FunctionDefinition {
  /** The name of the function to be called. */
  name: string;
  /** A description of what the function does, used by the model to choose when and how to call the function. */
  description?: string;
  /** The parameters the functions accepts, described as a JSON Schema object. */
  parameters: unknown;
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
  code_interpreter?: CreateCodeInterpreterToolResourceOptions;
  /** A list of vector stores or their IDs made available to the `file_search` tool. */
  file_search?: CreateFileSearchToolResourceOptions;
}

/** A set of resources that will be used by the `code_interpreter` tool. Request object. */
export interface CreateCodeInterpreterToolResourceOptions {
  /** A list of file IDs made available to the `code_interpreter` tool. */
  file_ids?: string[];
}

/** File IDs associated to the vector store to be passed to the helper. */
export interface CreateFileSearchToolResourceVectorStoreOptions {
  /** A list of file IDs to add to the vector store. There can be a maximum of 10000 files in a vector store. */
  file_ids: string[];
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/**
 * An object describing the expected output of the model. If `json_object` only `function` type `tools` are allowed to be passed to the Run.
 * If `text` the model can return text or any value needed.
 */
export interface AssistantsApiResponseFormat {
  /** Must be one of `text` or `json_object`. */
  type?: ApiResponseFormat;
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
  tools?: Array<ToolDefinition>;
  /**
   * A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example,
   * the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   */
  tool_resources?: UpdateToolResourcesOptions;
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
  /** The response format of the tool calls used by this assistant. */
  response_format?: AssistantsApiResponseFormatOption | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
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
  code_interpreter?: UpdateCodeInterpreterToolResourceOptions;
  /** Overrides the vector store attached to this assistant. There can be a maximum of 1 vector store attached to the assistant. */
  file_search?: UpdateFileSearchToolResourceOptions;
}

/** Request object to update `code_interpreted` tool resources. */
export interface UpdateCodeInterpreterToolResourceOptions {
  /** A list of file IDs to override the current list of the assistant. */
  fileIds?: string[];
}

/** Request object to update `file_search` tool resources. */
export interface UpdateFileSearchToolResourceOptions {
  /** A list of vector store IDs to override the current list of the assistant. */
  vector_store_ids?: string[];
}

/** The details used to create a new assistant thread. */
export interface AssistantThreadCreationOptions {
  /** The initial messages to associate with the new thread. */
  messages?: Array<ThreadMessageOptions>;
  /**
   * A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the
   * type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires
   * a list of vector store IDs.
   */
  tool_resources?: CreateToolResourcesOptions | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
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
  attachments?: Array<MessageAttachment> | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** This describes to which tools a file has been attached. */
export interface MessageAttachment {
  /** The ID of the file to attach to the message. */
  file_id: string;
  /** The tools to add to this file. */
  tools: MessageAttachmentToolDefinition[];
}

/** The details used to update an existing assistant thread */
export interface UpdateAssistantThreadOptions {
  /**
   * A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the
   * type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires
   * a list of vector store IDs
   */
  tool_resources?: UpdateToolResourcesOptions | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** A single, existing message within an assistant thread. */
export interface ThreadMessage {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always 'thread.message'. */
  object: "thread.message";
  /** The Unix timestamp, in seconds, representing when this object was created. */
  created_at: number;
  /** The ID of the thread that this message belongs to. */
  thread_id: string;
  /** The status of the message. */
  status: MessageStatus;
  /** On an incomplete message, details about why the message is incomplete. */
  incomplete_details: MessageIncompleteDetails | null;
  /** The Unix timestamp (in seconds) for when the message was completed. */
  completed_at: number | null;
  /** The Unix timestamp (in seconds) for when the message was marked as incomplete. */
  incomplete_at: number | null;
  /** The role associated with the assistant thread message. */
  role: MessageRole;
  /** The list of content items associated with the assistant thread message. */
  content: Array<MessageContent>;
  /** If applicable, the ID of the assistant that authored this message. */
  assistant_id: string | null;
  /** If applicable, the ID of the run associated with the authoring of this message. */
  run_id: string | null;
  /** A list of files attached to the message, and the tools they were added to. */
  attachments: Array<MessageAttachment> | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

/** Information providing additional detail about a message entering an incomplete status. */
export interface MessageIncompleteDetails {
  /** The provided reason describing why the message was marked as incomplete. */
  reason: MessageIncompleteDetailsReason;
}

/** An abstract representation of a single item of thread message content. */
export interface MessageContentParent {
  type: string;
}

/** A representation of a textual item of thread message content. */
export interface MessageTextContent extends MessageContentParent {
  /** The object type, which is always 'text'. */
  type: "text";
  /** The text and associated annotations for this thread message content item. */
  text: MessageTextDetails;
}

/** The text and associated annotations for a single item of assistant thread message content. */
export interface MessageTextDetails {
  /** The text data. */
  value: string;
  /** A list of annotations associated with this text. */
  annotations: Array<MessageTextAnnotation>;
}

/** An abstract representation of an annotation to text thread message content. */
export interface MessageTextAnnotationParent {
  /** The textual content associated with this text annotation item. */
  text: string;
  type: string;
}

/** A citation within the message that points to a specific quote from a specific File associated with the assistant or the message. Generated when the assistant uses the 'file_search' tool to search files. */
export interface MessageTextFileCitationAnnotation
  extends MessageTextAnnotationParent {
  /** The object type, which is always 'file_citation'. */
  type: "file_citation";
  /**
   * A citation within the message that points to a specific quote from a specific file.
   * Generated when the assistant uses the "file_search" tool to search files.
   */
  file_citation: MessageTextFileCitationDetails;
  /** The first text index associated with this text annotation. */
  start_index?: number;
  /** The last text index associated with this text annotation. */
  end_index?: number;
}

/** A representation of a file-based text citation, as used in a file-based annotation of text thread message content. */
export interface MessageTextFileCitationDetails {
  /** The ID of the file associated with this citation. */
  file_id: string;
  /** The specific quote cited in the associated file. */
  quote: string;
}

/** A citation within the message that points to a file located at a specific path. */
export interface MessageTextFilePathAnnotation
  extends MessageTextAnnotationParent {
  /** The object type, which is always 'file_path'. */
  type: "file_path";
  /** A URL for the file that's generated when the assistant used the code_interpreter tool to generate a file. */
  file_path: MessageTextFilePathDetails;
  /** The first text index associated with this text annotation. */
  start_index?: number;
  /** The last text index associated with this text annotation. */
  end_index?: number;
}

/** An encapsulation of an image file ID, as used by message image content. */
export interface MessageTextFilePathDetails {
  /** The ID of the specific file that the citation is from. */
  file_id: string;
}

/** A representation of image file content in a thread message. */
export interface MessageImageFileContent extends MessageContentParent {
  /** The object type, which is always 'image_file'. */
  type: "image_file";
  /** The image file for this thread message content item. */
  image_file: MessageImageFileDetails;
}

/** An image reference, as represented in thread message content. */
export interface MessageImageFileDetails {
  /** The ID for the file associated with this image. */
  file_id: string;
}

/** The details used when creating a new run of an assistant thread. */
export interface CreateRunOptions {
  /** The ID of the assistant that should run the thread. */
  assistant_id: string;
  /** The overridden model name that the assistant should use to run the thread. */
  model?: string | null;
  /** The overridden system instructions that the assistant should use to run the thread. */
  instructions?: string | null;
  /**
   * Additional instructions to append at the end of the instructions for the run. This is useful for modifying the behavior
   * on a per-run basis without overriding other instructions.
   */
  additional_instructions?: string | null;
  /** Adds additional messages to the thread before creating the run. */
  additional_messages?: Array<ThreadMessage> | null;
  /** The overridden list of enabled tools that the assistant should use to run the thread. */
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
  tool_choice?: AssistantsApiToolChoiceOption | null;
  /** Specifies the format that the model must output. */
  response_format?: AssistantsApiResponseFormatOption | null;
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
   */
  type: TruncationStrategy;
  /** The number of most recent messages from the thread when constructing the context for the run. */
  last_messages?: number | null;
}

/** Specifies a tool the model should use. Use to force the model to call a specific tool. */
export interface AssistantsNamedToolChoice {
  /** the type of tool. If type is `function`, the function name must be set. */
  type: AssistantsNamedToolChoiceType;
  /** The name of the function to call */
  function?: FunctionName;
}

/** The function name that will be used, if using the `function` tool */
export interface FunctionName {
  /** The name of the function to call */
  name: string;
}

/** The data provided during a tool outputs submission to resolve pending tool calls and allow the model to continue. */
export interface ToolOutput {
  /** The ID of the tool call being resolved, as provided in the tool calls of a required action from a run. */
  tool_call_id?: string;
  /** The output from the tool to be submitted. */
  output?: string;
}

/** The details used when creating and immediately running a new assistant thread. */
export interface CreateAndRunThreadOptions {
  /** The ID of the assistant for which the thread should be created. */
  assistant_id: string;
  /** The details used to create the new thread. If no thread is provided, an empty one will be created. */
  thread?: AssistantThreadCreationOptions;
  /** The overridden model that the assistant should use to run the thread. */
  model?: string | null;
  /** The overridden system instructions the assistant should use to run the thread. */
  instructions?: string | null;
  /** The overridden list of enabled tools the assistant should use to run the thread. */
  tools?: Array<ToolDefinition> | null;
  /** Override the tools the assistant can use for this run. This is useful for modifying the behavior on a per-run basis. */
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
  tool_choice?: AssistantsApiToolChoiceOption | null;
  /** Specifies the format that the model must output. */
  response_format?: AssistantsApiResponseFormatOption | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** The expiration policy for a vector store. */
export interface VectorStoreExpirationPolicy {
  /** Anchor timestamp after which the expiration policy applies. Supported anchors: `last_active_at`. */
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
  /** Details on when this vector store expires */
  expires_after?: VectorStoreExpirationPolicy;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
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

/** An abstract representation of an input tool definition that an assistant can use. */
export type ToolDefinition =
  | ToolDefinitionParent
  | CodeInterpreterToolDefinition
  | FileSearchToolDefinition
  | FunctionToolDefinition;
/** An abstract representation of a single item of thread message content. */
export type MessageContent =
  | MessageContentParent
  | MessageTextContent
  | MessageImageFileContent;
/** An abstract representation of an annotation to text thread message content. */
export type MessageTextAnnotation =
  | MessageTextAnnotationParent
  | MessageTextFileCitationAnnotation
  | MessageTextFilePathAnnotation;
/** Alias for CreateFileSearchToolResourceOptions */
export type CreateFileSearchToolResourceOptions =
  | string[]
  | Array<CreateFileSearchToolResourceVectorStoreOptions>;
/** Alias for AssistantsApiResponseFormatMode */
export type AssistantsApiResponseFormatMode = string;
/** Alias for ApiResponseFormat */
export type ApiResponseFormat = string;
/** Alias for AssistantsApiResponseFormatOption */
export type AssistantsApiResponseFormatOption =
  | string
  | AssistantsApiResponseFormatMode
  | AssistantsApiResponseFormat;
/** Alias for ListSortOrder */
export type ListSortOrder = string;
/** Alias for MessageRole */
export type MessageRole = string;
/** Alias for MessageAttachmentToolDefinition */
export type MessageAttachmentToolDefinition =
  | CodeInterpreterToolDefinition
  | FileSearchToolDefinition;
/** Alias for MessageStatus */
export type MessageStatus = string;
/** Alias for MessageIncompleteDetailsReason */
export type MessageIncompleteDetailsReason = string;
/** Alias for TruncationStrategy */
export type TruncationStrategy = string;
/** Alias for AssistantsApiToolChoiceOptionMode */
export type AssistantsApiToolChoiceOptionMode = string;
/** Alias for AssistantsNamedToolChoiceType */
export type AssistantsNamedToolChoiceType = string;
/** Alias for AssistantsApiToolChoiceOption */
export type AssistantsApiToolChoiceOption =
  | string
  | AssistantsApiToolChoiceOptionMode
  | AssistantsNamedToolChoice;
/** Alias for FilePurpose */
export type FilePurpose = string;
/** Alias for VectorStoreExpirationPolicyAnchor */
export type VectorStoreExpirationPolicyAnchor = string;
/** Alias for VectorStoreFileStatusFilter */
export type VectorStoreFileStatusFilter = string;
