// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** An abstract representation of an input tool definition that an assistant can use. */
export interface ToolDefinitionOutputParent {
  type: string;
}

/** The input definition information for a code interpreter tool as used to configure an assistant. */
export interface CodeInterpreterToolDefinitionOutput
  extends ToolDefinitionOutputParent {
  /** The object type, which is always 'code_interpreter'. */
  type: "code_interpreter";
}

/** The input definition information for a fie search tool as used to configure an assistant. */
export interface FileSearchToolDefinitionOutput
  extends ToolDefinitionOutputParent {
  /** The object type, which is always 'file_search'. */
  type: "file_search";
}

/** The input definition information for a fie search tool as used to configure an assistant. */
export interface BrowseToolDefinitionOutput extends ToolDefinitionOutputParent {
  /** The object type, which is always 'browse'. */
  type: "browse";
}

/** The input definition information for a function tool as used to configure an assistant. */
export interface FunctionToolDefinitionOutput
  extends ToolDefinitionOutputParent {
  /** The object type, which is always 'function'. */
  type: "function";
  /** The definition of the concrete function that the function tool should call. */
  function: FunctionDefinitionOutput;
}

/** The input definition information for a function. */
export interface FunctionDefinitionOutput {
  /** The name of the function to be called. */
  name: string;
  /** A description of what the function does, used by the model to choose when and how to call the function. */
  description?: string;
  /** The parameters the functions accepts, described as a JSON Schema object. */
  parameters: any;
}

/** Represents an assistant that can call the model and use tools. */
export interface AssistantOutput {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always assistant. */
  object: "assistant";
  /** The Unix timestamp, in seconds, representing when this object was created. */
  created_at: number;
  /** The name of the assistant. */
  name: string | null;
  /** The description of the assistant. */
  description: string | null;
  /** The ID of the model to use. */
  model: string;
  /** The system instructions for the assistant to use. */
  instructions: string | null;
  /** The collection of tools enabled for the assistant. */
  tools: Array<ToolDefinitionOutput>;
  /**
   * A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter`
   * tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   */
  tool_resources: ToolResourcesOutput | null;
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
  top_p: number | null;
  /** The response format of the tool calls used by this assistant. */
  response_format?: AssistantsApiResponseFormatOptionOutput | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

/**
 * A set of resources that are used by the assistant's tools. The resources are specific to the type of
 * tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search`
 * tool requires a list of vector store IDs.
 */
export interface ToolResourcesOutput {
  /** Resources to be used by the `code_interpreter tool` consisting of file IDs. */
  code_interpreter?: CodeInterpreterToolResourceOutput;
  /** Resources to be used by the `file_search` tool consisting of vector store IDs. */
  file_search?: FileSearchToolResourceOutput;
}

/** A set of resources that are used by the `code_interpreter` tool. */
export interface CodeInterpreterToolResourceOutput {
  /**
   * A list of file IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files
   * associated with the tool.
   */
  file_ids: string[];
}

/** A set of resources that are used by the `file_search` tool. */
export interface FileSearchToolResourceOutput {
  /**
   * The ID of the vector store attached to this assistant. There can be a maximum of 1 vector
   * store attached to the assistant.
   */
  vector_store_ids?: string[];
}

/**
 * An object describing the expected output of the model. If `json_object` only `function` type `tools` are allowed to be passed to the Run.
 * If `text` the model can return text or any value needed.
 */
export interface AssistantsApiResponseFormatOutput {
  /** Must be one of `text` or `json_object`. */
  type?: ApiResponseFormatOutput;
}

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfOutput {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: Array<AssistantOutput>;
  /** The first ID represented in this list. */
  first_id: string;
  /** The last ID represented in this list. */
  last_id: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  has_more: boolean;
}

/** The status of an assistant deletion operation. */
export interface AssistantDeletionStatusOutput {
  /** The ID of the resource specified for deletion. */
  id: string;
  /** A value indicating whether deletion was successful. */
  deleted: boolean;
  /** The object type, which is always 'assistant.deleted'. */
  object: "assistant.deleted";
}

/** Information about a single thread associated with an assistant. */
export interface AssistantThreadOutput {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always 'thread'. */
  object: "thread";
  /** The Unix timestamp, in seconds, representing when this object was created. */
  created_at: number;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

/** The status of a thread deletion operation. */
export interface ThreadDeletionStatusOutput {
  /** The ID of the resource specified for deletion. */
  id: string;
  /** A value indicating whether deletion was successful. */
  deleted: boolean;
  /** The object type, which is always 'thread.deleted'. */
  object: "thread.deleted";
}

/** A single, existing message within an assistant thread. */
export interface ThreadMessageOutput {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always 'thread.message'. */
  object: "thread.message";
  /** The Unix timestamp, in seconds, representing when this object was created. */
  created_at: number;
  /** The ID of the thread that this message belongs to. */
  thread_id: string;
  /** The status of the message. */
  status: MessageStatusOutput;
  /** On an incomplete message, details about why the message is incomplete. */
  incomplete_details: MessageIncompleteDetailsReasonOutput | null;
  /** The Unix timestamp (in seconds) for when the message was completed. */
  completed_at: number | null;
  /** The Unix timestamp (in seconds) for when the message was marked as incomplete. */
  incomplete_at: number | null;
  /** The role associated with the assistant thread message. */
  role: MessageRoleOutput;
  /** The list of content items associated with the assistant thread message. */
  content: Array<MessageContentOutput>;
  /** If applicable, the ID of the assistant that authored this message. */
  assistant_id?: string;
  /** If applicable, the ID of the run associated with the authoring of this message. */
  run_id?: string;
  /**
   * A list of file IDs that the assistant should use. Useful for tools like retrieval and code_interpreter that can
   * access files.
   */
  file_ids: string[];
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

/** An abstract representation of a single item of thread message content. */
export interface MessageContentOutputParent {
  type: string;
}

/** A representation of a textual item of thread message content. */
export interface MessageTextContentOutput extends MessageContentOutputParent {
  /** The object type, which is always 'text'. */
  type: "text";
  /** The text and associated annotations for this thread message content item. */
  text: MessageTextDetailsOutput;
}

/** The text and associated annotations for a single item of assistant thread message content. */
export interface MessageTextDetailsOutput {
  /** The text data. */
  value: string;
  /** A list of annotations associated with this text. */
  annotations: Array<MessageTextAnnotationOutput>;
}

/** An abstract representation of an annotation to text thread message content. */
export interface MessageTextAnnotationOutputParent {
  /** The textual content associated with this text annotation item. */
  text: string;
  type: string;
}

/** A citation within the message that points to a specific quote from a specific File associated with the assistant or the message. Generated when the assistant uses the 'retrieval' tool to search files. */
export interface MessageTextFileCitationAnnotationOutput
  extends MessageTextAnnotationOutputParent {
  /** The object type, which is always 'file_citation'. */
  type: "file_citation";
  /**
   * A citation within the message that points to a specific quote from a specific file.
   * Generated when the assistant uses the "retrieval" tool to search files.
   */
  file_citation: MessageTextFileCitationDetailsOutput;
  /** The first text index associated with this text annotation. */
  start_index?: number;
  /** The last text index associated with this text annotation. */
  end_index?: number;
}

/** A representation of a file-based text citation, as used in a file-based annotation of text thread message content. */
export interface MessageTextFileCitationDetailsOutput {
  /** The ID of the file associated with this citation. */
  file_id: string;
  /** The specific quote cited in the associated file. */
  quote: string;
}

/** A citation within the message that points to a file located at a specific path. */
export interface MessageTextFilePathAnnotationOutput
  extends MessageTextAnnotationOutputParent {
  /** The object type, which is always 'file_path'. */
  type: "file_path";
  /** A URL for the file that's generated when the assistant used the code_interpreter tool to generate a file. */
  file_path: MessageTextFilePathDetailsOutput;
  /** The first text index associated with this text annotation. */
  start_index?: number;
  /** The last text index associated with this text annotation. */
  end_index?: number;
}

/** An encapsulation of an image file ID, as used by message image content. */
export interface MessageTextFilePathDetailsOutput {
  /** The ID of the specific file that the citation is from. */
  file_id: string;
}

/** A representation of image file content in a thread message. */
export interface MessageImageFileContentOutput
  extends MessageContentOutputParent {
  /** The object type, which is always 'image_file'. */
  type: "image_file";
  /** The image file for this thread message content item. */
  image_file: MessageImageFileDetailsOutput;
}

/** An image reference, as represented in thread message content. */
export interface MessageImageFileDetailsOutput {
  /** The ID for the file associated with this image. */
  file_id: string;
}

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfOutput {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: Array<ThreadMessageOutput>;
  /** The first ID represented in this list. */
  first_id: string;
  /** The last ID represented in this list. */
  last_id: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  has_more: boolean;
}

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfOutput {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: Array<MessageFileOutput>;
  /** The first ID represented in this list. */
  first_id: string;
  /** The last ID represented in this list. */
  last_id: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  has_more: boolean;
}

/** Information about a file attached to an assistant thread message. */
export interface MessageFileOutput {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always 'thread.message.file'. */
  object: "thread.message.file";
  /** The Unix timestamp, in seconds, representing when this object was created. */
  created_at: number;
  /** The ID of the message that this file is attached to. */
  message_id: string;
}

/** Data representing a single evaluation run of an assistant thread. */
export interface ThreadRunOutput {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always 'thread.run'. */
  object: "thread.run";
  /** The ID of the thread associated with this run. */
  thread_id: string;
  /** The ID of the assistant associated with the thread this run was performed against. */
  assistant_id: string;
  /** The status of the assistant thread run. */
  status: RunStatusOutput;
  /** The details of the action required for the assistant thread run to continue. */
  required_action?: RequiredActionOutput | null;
  /** The last error, if any, encountered by this assistant thread run. */
  last_error: RunErrorOutput | null;
  /** The ID of the model to use. */
  model: string;
  /** The overridden system instructions used for this assistant thread run. */
  instructions: string;
  /** The overridden enabled tools used for this assistant thread run. */
  tools: Array<ToolDefinitionOutput>;
  /** A list of attached file IDs, ordered by creation date in ascending order. */
  file_ids: string[];
  /** The Unix timestamp, in seconds, representing when this object was created. */
  created_at: number;
  /** The Unix timestamp, in seconds, representing when this item expires. */
  expires_at: number | null;
  /** The Unix timestamp, in seconds, representing when this item was started. */
  started_at: number | null;
  /** The Unix timestamp, in seconds, representing when this completed. */
  completed_at: number | null;
  /** The Unix timestamp, in seconds, representing when this was cancelled. */
  cancelled_at: number | null;
  /** The Unix timestamp, in seconds, representing when this failed. */
  failed_at: number | null;
  /** Details on why the run is incomplete. Will be `null` if the run is not incomplete. */
  incomplete_details: IncompleteRunDetailsOutput | null;
  /** Usage statistics related to the run. This value will be `null` if the run is not in a terminal state (i.e. `in_progress`, `queued`, etc.). */
  usage: RunCompletionUsageOutput | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

/** An abstract representation of a required action for an assistant thread run to continue. */
export interface RequiredActionOutputParent {
  type: string;
}

/** The details for required tool calls that must be submitted for an assistant thread run to continue. */
export interface SubmitToolOutputsActionOutput
  extends RequiredActionOutputParent {
  /** The object type, which is always 'submit_tool_outputs'. */
  type: "submit_tool_outputs";
  /** The details describing tools that should be called to submit tool outputs. */
  submit_tool_outputs: SubmitToolOutputsDetailsOutput;
}

/** The details describing tools that should be called to submit tool outputs. */
export interface SubmitToolOutputsDetailsOutput {
  /** The list of tool calls that must be resolved for the assistant thread run to continue. */
  tool_calls: Array<RequiredToolCallOutput>;
}

/** An abstract representation a a tool invocation needed by the model to continue a run. */
export interface RequiredToolCallOutputParent {
  /** The ID of the tool call. This ID must be referenced when submitting tool outputs. */
  id: string;
  type: string;
}

/** A representation of a requested call to a function tool, needed by the model to continue evaluation of a run. */
export interface RequiredFunctionToolCallOutput
  extends RequiredToolCallOutputParent {
  /** The object type of the required tool call. Always 'function' for function tools. */
  type: "function";
  /** Detailed information about the function to be executed by the tool that includes name and arguments. */
  function: RequiredFunctionToolCallDetailsOutput;
}

/** The detailed information for a function invocation, as provided by a required action invoking a function tool, that includes the name of and arguments to the function. */
export interface RequiredFunctionToolCallDetailsOutput {
  /** The name of the function. */
  name: string;
  /** The arguments to use when invoking the named function, as provided by the model. Arguments are presented as a JSON document that should be validated and parsed for evaluation. */
  arguments: string;
}

/** The details of an error as encountered by an assistant thread run. */
export interface RunErrorOutput {
  /** The status for the error. */
  code: string;
  /** The human-readable text associated with the error. */
  message: string;
}

/** Usage statistics related to the run. */
export interface RunCompletionUsageOutput {
  /** Number of completion tokens used over the course of the run. */
  completion_tokens: number;
  /** Number of prompt tokens used over the course of the run. */
  prompt_tokens: number;
  /** Total number of tokens used (prompt + completion). */
  total_tokens: number;
}

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfOutput {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: Array<ThreadRunOutput>;
  /** The first ID represented in this list. */
  first_id: string;
  /** The last ID represented in this list. */
  last_id: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  has_more: boolean;
}

/** Detailed information about a single step of an assistant thread run. */
export interface RunStepOutput {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always 'thread.run.step'. */
  object: "thread.run.step";
  /** The type of run step, which can be either message_creation or tool_calls. */
  type: RunStepTypeOutput;
  /** The ID of the assistant associated with the run step. */
  assistant_id: string;
  /** The ID of the thread that was run. */
  thread_id: string;
  /** The ID of the run that this run step is a part of. */
  run_id: string;
  /** The status of this run step. */
  status: RunStepStatusOutput;
  /** The details for this run step. */
  step_details: RunStepDetailsOutput;
  /** If applicable, information about the last error encountered by this run step. */
  last_error: RunStepErrorOutput | null;
  /** The Unix timestamp, in seconds, representing when this object was created. */
  created_at: number;
  /** The Unix timestamp, in seconds, representing when this item expired. */
  expired_at: number | null;
  /** The Unix timestamp, in seconds, representing when this completed. */
  completed_at: number | null;
  /** The Unix timestamp, in seconds, representing when this was cancelled. */
  cancelled_at: number | null;
  /** The Unix timestamp, in seconds, representing when this failed. */
  failed_at: number | null;
  /** Usage statistics related to the run step. This value will be `null` while the run step's status is `in_progress`. */
  usage?: RunStepCompletionUsageOutput | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

/** An abstract representation of the details for a run step. */
export interface RunStepDetailsOutputParent {
  type: RunStepTypeOutput;
}

/** The detailed information associated with a message creation run step. */
export interface RunStepMessageCreationDetailsOutput
  extends RunStepDetailsOutputParent {
  /** The object type, which is always 'message_creation'. */
  type: "message_creation";
  /** Information about the message creation associated with this run step. */
  message_creation: RunStepMessageCreationReferenceOutput;
}

/** The details of a message created as a part of a run step. */
export interface RunStepMessageCreationReferenceOutput {
  /** The ID of the message created by this run step. */
  message_id: string;
}

/** The detailed information associated with a run step calling tools. */
export interface RunStepToolCallDetailsOutput
  extends RunStepDetailsOutputParent {
  /** The object type, which is always 'tool_calls'. */
  type: "tool_calls";
  /** A list of tool call details for this run step. */
  tool_calls: Array<RunStepToolCallOutput>;
}

/** An abstract representation of a detailed tool call as recorded within a run step for an existing run. */
export interface RunStepToolCallOutputParent {
  /** The ID of the tool call. This ID must be referenced when you submit tool outputs. */
  id: string;
  type: string;
}

/**
 * A record of a call to a code interpreter tool, issued by the model in evaluation of a defined tool, that
 * represents inputs and outputs consumed and emitted by the code interpreter.
 */
export interface RunStepCodeInterpreterToolCallOutput
  extends RunStepToolCallOutputParent {
  /** The object type, which is always 'code_interpreter'. */
  type: "code_interpreter";
  /** The details of the tool call to the code interpreter tool. */
  code_interpreter: RunStepCodeInterpreterToolCallDetailsOutput;
}

/** The detailed information about a code interpreter invocation by the model. */
export interface RunStepCodeInterpreterToolCallDetailsOutput {
  /** The input provided by the model to the code interpreter tool. */
  input: string;
  /** The outputs produced by the code interpreter tool back to the model in response to the tool call. */
  outputs: Array<RunStepCodeInterpreterToolCallOutputOutput>;
}

/** An abstract representation of an emitted output from a code interpreter tool. */
export interface RunStepCodeInterpreterToolCallOutputOutputParent {
  type: string;
}

/** A representation of a log output emitted by a code interpreter tool in response to a tool call by the model. */
export interface RunStepCodeInterpreterLogOutputOutput
  extends RunStepCodeInterpreterToolCallOutputOutputParent {
  /** The object type, which is always 'logs'. */
  type: "logs";
  /** The serialized log output emitted by the code interpreter. */
  logs: string;
}

/** A representation of an image output emitted by a code interpreter tool in response to a tool call by the model. */
export interface RunStepCodeInterpreterImageOutputOutput
  extends RunStepCodeInterpreterToolCallOutputOutputParent {
  /** The object type, which is always 'image'. */
  type: "image";
  /** Referential information for the image associated with this output. */
  image: RunStepCodeInterpreterImageReferenceOutput;
}

/** An image reference emitted by a code interpreter tool in response to a tool call by the model. */
export interface RunStepCodeInterpreterImageReferenceOutput {
  /** The ID of the file associated with this image. */
  file_id: string;
}

/**
 * A record of a call to a retrieval tool, issued by the model in evaluation of a defined tool, that represents
 * executed retrieval actions.
 */
export interface RunStepRetrievalToolCallOutput
  extends RunStepToolCallOutputParent {
  /** The object type, which is always 'retrieval'. */
  type: "retrieval";
  /** The key/value pairs produced by the retrieval tool. */
  retrieval: Record<string, string>;
}

/**
 * A record of a call to a function tool, issued by the model in evaluation of a defined tool, that represents the inputs
 * and output consumed and emitted by the specified function.
 */
export interface RunStepFunctionToolCallOutput
  extends RunStepToolCallOutputParent {
  /** The object type, which is always 'function'. */
  type: "function";
  /** The detailed information about the function called by the model. */
  function: RunStepFunctionToolCallDetailsOutput;
}

/** The detailed information about the function called by the model. */
export interface RunStepFunctionToolCallDetailsOutput {
  /** The name of the function. */
  name: string;
  /** The arguments that the model requires are provided to the named function. */
  arguments: string;
  /** The output of the function, only populated for function calls that have already have had their outputs submitted. */
  output: string | null;
}

/** The error information associated with a failed run step. */
export interface RunStepErrorOutput {
  /** The error code for this error. */
  code: RunStepErrorCodeOutput;
  /** The human-readable text associated with this error. */
  message: string;
}

/** Usage statistics related to the run step. */
export interface RunStepCompletionUsageOutput {
  /** Number of completion tokens used over the course of the run step. */
  completion_tokens: number;
  /** Number of prompt tokens used over the course of the run step. */
  prompt_tokens: number;
  /** Total number of tokens used (prompt + completion). */
  total_tokens: number;
}

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfOutput {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: Array<RunStepOutput>;
  /** The first ID represented in this list. */
  first_id: string;
  /** The last ID represented in this list. */
  last_id: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  has_more: boolean;
}

/** The response data from a file list operation. */
export interface FileListResponseOutput {
  /** The object type, which is always 'list'. */
  object: "list";
  /** The files returned for the request. */
  data: Array<OpenAIFileOutput>;
}

/** Represents an assistant that can call the model and use tools. */
export interface OpenAIFileOutput {
  /** The object type, which is always 'file'. */
  object: "file";
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The size of the file, in bytes. */
  bytes: number;
  /** The name of the file. */
  filename: string;
  /** The Unix timestamp, in seconds, representing when this object was created. */
  created_at: number;
  /** The intended purpose of a file. */
  purpose: FilePurposeOutput;
}

/** A status response from a file deletion operation. */
export interface FileDeletionStatusOutput {
  /** The ID of the resource specified for deletion. */
  id: string;
  /** A value indicating whether deletion was successful. */
  deleted: boolean;
  /** The object type, which is always 'file'. */
  object: "file";
}

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfOutput {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: Array<VectorStoreOutput>;
  /** The first ID represented in this list. */
  first_id: string;
  /** The last ID represented in this list. */
  last_id: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  has_more: boolean;
}

/** A vector store is a collection of processed files can be used by the `file_search` tool. */
export interface VectorStoreOutput {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `vector_store` */
  object: "vector_store";
  /** The Unix timestamp (in seconds) for when the vector store was created. */
  created_at: number;
  /** The name of the vector store. */
  name: string;
  /** The total number of bytes used by the files in the vector store. */
  usage_bytes: number;
  /** Files count grouped by status processed or being processed by this vector store. */
  file_counts: VectorStoreFileCountOutput;
  /** The status of the vector store, which can be either `expired`, `in_progress`, or `completed`. A status of `completed` indicates that the vector store is ready for use. */
  status: VectorStoreStatusOutput;
  /** Details on when this vector store expires */
  expires_after?: VectorStoreExpirationPolicyOutput;
  /** The Unix timestamp (in seconds) for when the vector store will expire. */
  expires_at?: number | null;
  /** The Unix timestamp (in seconds) for when the vector store was last active. */
  last_active_at: number | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata: Record<string, string> | null;
}

/** Counts of files processed or being processed by this vector store grouped by status. */
export interface VectorStoreFileCountOutput {
  /** The number of files that are currently being processed. */
  in_progress: number;
  /** The number of files that have been successfully processed. */
  completed: number;
  /** The number of files that have failed to process. */
  failed: number;
  /** The number of files that were cancelled. */
  cancelled: number;
  /** The total number of files. */
  total: number;
}

/** The expiration policy for a vector store. */
export interface VectorStoreExpirationPolicyOutput {
  /** Anchor timestamp after which the expiration policy applies. Supported anchors: `last_active_at`. */
  anchor: VectorStoreExpirationPolicyAnchorOutput;
  /** The number of days after the anchor time that the vector store will expire. */
  days: number;
}

/** Response object for deleting a vector store. */
export interface VectorStoreDeletionStatusOutput {
  /** The ID of the resource specified for deletion. */
  id: string;
  /** A value indicating whether deletion was successful. */
  deleted: boolean;
  /** The object type, which is always 'vector_store.deleted'. */
  object: "vector_store.deleted";
}

/** The response data for a requested list of items. */
export interface OpenAIPageableListOfOutput {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: Array<VectorStoreFileOutput>;
  /** The first ID represented in this list. */
  first_id: string;
  /** The last ID represented in this list. */
  last_id: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  has_more: boolean;
}

/** Description of a file attached to a vector store. */
export interface VectorStoreFileOutput {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `vector_store.file`. */
  object: "vector_store.file";
  /**
   * The total vector store usage in bytes. Note that this may be different from the original file
   * size.
   */
  usage_bytes: number;
  /** The Unix timestamp (in seconds) for when the vector store file was created. */
  created_at: number;
  /** The ID of the vector store that the file is attached to. */
  vector_store_id: string;
  /** The status of the vector store file, which can be either `in_progress`, `completed`, `cancelled`, or `failed`. The status `completed` indicates that the vector store file is ready for use. */
  status: VectorStoreFileStatusOutput;
  /** The last error associated with this vector store file. Will be `null` if there are no errors. */
  last_error: VectorStoreFileErrorOutput | null;
}

/** Details on the error that may have ocurred while processing a file for this vector store */
export interface VectorStoreFileErrorOutput {
  /** One of `server_error` or `rate_limit_exceeded`. */
  code: VectorStoreFileErrorCodeOutput;
  /** A human-readable description of the error. */
  message: string;
}

/** Response object for deleting a vector store file relationship. */
export interface VectorStoreFileDeletionStatusOutput {
  /** The ID of the resource specified for deletion. */
  id: string;
  /** A value indicating whether deletion was successful. */
  deleted: boolean;
  /** The object type, which is always 'vector_store.deleted'. */
  object: "vector_store.file.deleted";
}

/** A batch of files attached to a vector store. */
export interface VectorStoreFileBatchOutput {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `vector_store.file_batch`. */
  object: "vector_store.files_batch";
  /** The Unix timestamp (in seconds) for when the vector store files batch was created. */
  created_at: number;
  /** The ID of the vector store that the file is attached to. */
  vector_store_id: string;
  /** The status of the vector store files batch, which can be either `in_progress`, `completed`, `cancelled` or `failed`. */
  status: VectorStoreFileBatchStatusOutput;
  /** Files count grouped by status processed or being processed by this vector store. */
  file_counts: VectorStoreFileCountOutput;
}

/** An abstract representation of an input tool definition that an assistant can use. */
export type ToolDefinitionOutput =
  | ToolDefinitionOutputParent
  | CodeInterpreterToolDefinitionOutput
  | FileSearchToolDefinitionOutput
  | BrowseToolDefinitionOutput
  | FunctionToolDefinitionOutput;
/** An abstract representation of a single item of thread message content. */
export type MessageContentOutput =
  | MessageContentOutputParent
  | MessageTextContentOutput
  | MessageImageFileContentOutput;
/** An abstract representation of an annotation to text thread message content. */
export type MessageTextAnnotationOutput =
  | MessageTextAnnotationOutputParent
  | MessageTextFileCitationAnnotationOutput
  | MessageTextFilePathAnnotationOutput;
/** An abstract representation of a required action for an assistant thread run to continue. */
export type RequiredActionOutput =
  | RequiredActionOutputParent
  | SubmitToolOutputsActionOutput;
/** An abstract representation a a tool invocation needed by the model to continue a run. */
export type RequiredToolCallOutput =
  | RequiredToolCallOutputParent
  | RequiredFunctionToolCallOutput;
/** An abstract representation of the details for a run step. */
export type RunStepDetailsOutput =
  | RunStepDetailsOutputParent
  | RunStepMessageCreationDetailsOutput
  | RunStepToolCallDetailsOutput;
/** An abstract representation of a detailed tool call as recorded within a run step for an existing run. */
export type RunStepToolCallOutput =
  | RunStepToolCallOutputParent
  | RunStepCodeInterpreterToolCallOutput
  | RunStepRetrievalToolCallOutput
  | RunStepFunctionToolCallOutput;
/** An abstract representation of an emitted output from a code interpreter tool. */
export type RunStepCodeInterpreterToolCallOutputOutput =
  | RunStepCodeInterpreterToolCallOutputOutputParent
  | RunStepCodeInterpreterLogOutputOutput
  | RunStepCodeInterpreterImageOutputOutput;
/** Alias for ApiResponseFormatOutput */
export type ApiResponseFormatOutput = string | "text" | "json_object";
/** Alias for AssistantsApiResponseFormatOptionOutput */
export type AssistantsApiResponseFormatOptionOutput =
  | string
  | "auto"
  | "none"
  | AssistantsApiResponseFormatOutput;
/** Alias for MessageRoleOutput */
export type MessageRoleOutput = string | "user" | "assistant";
/** Alias for MessageStatusOutput */
export type MessageStatusOutput =
  | string
  | "in_progress"
  | "incomplete"
  | "completed";
/** Alias for MessageIncompleteDetailsReasonOutput */
export type MessageIncompleteDetailsReasonOutput =
  | string
  | "content_filter"
  | "max_tokens"
  | "run_cancelled"
  | "run_failed"
  | "run_expired";
/** Alias for RunStatusOutput */
export type RunStatusOutput =
  | string
  | "queued"
  | "in_progress"
  | "requires_action"
  | "cancelling"
  | "cancelled"
  | "failed"
  | "completed"
  | "expired";
/** Alias for IncompleteRunDetailsOutput */
export type IncompleteRunDetailsOutput =
  | string
  | "max_completion_tokens"
  | "max_prompt_tokens";
/** Alias for RunStepTypeOutput */
export type RunStepTypeOutput = string | "message_creation" | "tool_calls";
/** Alias for RunStepStatusOutput */
export type RunStepStatusOutput =
  | string
  | "in_progress"
  | "cancelled"
  | "failed"
  | "completed"
  | "expired";
/** Alias for RunStepErrorCodeOutput */
export type RunStepErrorCodeOutput =
  | string
  | "server_error"
  | "rate_limit_exceeded";
/** Alias for FilePurposeOutput */
export type FilePurposeOutput =
  | string
  | "fine-tune"
  | "fine-tune-results"
  | "assistants"
  | "assistants_output";
/** Alias for VectorStoreStatusOutput */
export type VectorStoreStatusOutput =
  | string
  | "expired"
  | "in_progress"
  | "completed";
/** Alias for VectorStoreExpirationPolicyAnchorOutput */
export type VectorStoreExpirationPolicyAnchorOutput = string | "last_active_at";
/** Alias for VectorStoreFileStatusOutput */
export type VectorStoreFileStatusOutput =
  | string
  | "in_progress"
  | "completed"
  | "failed"
  | "cancelled";
/** Alias for VectorStoreFileErrorCodeOutput */
export type VectorStoreFileErrorCodeOutput =
  | string
  | "internal_error"
  | "file_not_found"
  | "parsing_error"
  | "unhandled_mime_type";
/** Alias for VectorStoreFileBatchStatusOutput */
export type VectorStoreFileBatchStatusOutput =
  | string
  | "in_progress"
  | "completed"
  | "cancelled"
  | "failed";
