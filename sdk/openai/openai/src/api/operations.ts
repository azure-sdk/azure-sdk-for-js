// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  createToolResourcesOptionsSerializer,
  updateToolResourcesOptionsSerializer,
  assistantThreadCreationOptionsSerializer,
  threadMessageOptionsSerializer,
  messageAttachmentSerializer,
  threadMessageSerializer,
  truncationObjectSerializer,
  toolOutputSerializer,
  vectorStoreExpirationPolicySerializer,
  AssistantCreationOptions,
  Assistant,
  OpenAIPageableListOfAssistant,
  UpdateAssistantOptions,
  AssistantDeletionStatus,
  AssistantThreadCreationOptions,
  ThreadMessageOptions,
  MessageRole,
  AssistantThread,
  UpdateAssistantThreadOptions,
  ThreadDeletionStatus,
  ThreadMessage,
  MessageStatus,
  MessageIncompleteDetailsReason,
  OpenAIPageableListOfThreadMessage,
  TruncationStrategy,
  CreateRunOptions,
  ThreadRun,
  RunStatus,
  IncompleteRunDetails,
  OpenAIPageableListOfThreadRun,
  ToolOutput,
  CreateAndRunThreadOptions,
  RunStep,
  RunStepType,
  RunStepStatus,
  RunStepErrorCode,
  OpenAIPageableListOfRunStep,
  FilePurpose,
  FileListResponse,
  OpenAIFile,
  FileState,
  FileDeletionStatus,
  OpenAIPageableListOfVectorStore,
  VectorStore,
  VectorStoreStatus,
  VectorStoreExpirationPolicyAnchor,
  VectorStoreOptions,
  VectorStoreUpdateOptions,
  VectorStoreDeletionStatus,
  OpenAIPageableListOfVectorStoreFile,
  VectorStoreFile,
  VectorStoreFileStatus,
  VectorStoreFileErrorCode,
  VectorStoreFileDeletionStatus,
  VectorStoreFileBatch,
  VectorStoreFileBatchStatus,
} from "../models/models.js";
import {
  deserializeMessageContentUnion,
  deserializeRequiredActionUnion,
  deserializeRunStepDetailsUnion,
} from "../utils/deserializeUtil.js";
import {
  AssistantsContext as Client,
  CancelRun200Response,
  CancelVectorStoreFileBatch200Response,
  CreateAssistant200Response,
  CreateMessage200Response,
  CreateRun200Response,
  CreateThread200Response,
  CreateThreadAndRun200Response,
  CreateVectorStore200Response,
  CreateVectorStoreFile200Response,
  CreateVectorStoreFileBatch200Response,
  DeleteAssistant200Response,
  DeleteFile200Response,
  DeleteThread200Response,
  DeleteVectorStore200Response,
  DeleteVectorStoreFile200Response,
  GetAssistant200Response,
  GetFile200Response,
  GetFileContent200Response,
  GetMessage200Response,
  GetRun200Response,
  GetRunStep200Response,
  GetThread200Response,
  GetVectorStore200Response,
  GetVectorStoreFile200Response,
  GetVectorStoreFileBatch200Response,
  ListAssistants200Response,
  ListFiles200Response,
  ListMessages200Response,
  ListRuns200Response,
  ListRunSteps200Response,
  ListVectorStoreFileBatchFiles200Response,
  ListVectorStoreFiles200Response,
  ListVectorStores200Response,
  ModifyVectorStore200Response,
  SubmitToolOutputsToRun200Response,
  UpdateAssistant200Response,
  UpdateMessage200Response,
  UpdateRun200Response,
  UpdateThread200Response,
  UploadFile200Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
import { serializeRecord } from "../helpers/serializerHelpers.js";
import {
  CreateAssistantOptionalParams,
  ListAssistantsOptionalParams,
  GetAssistantOptionalParams,
  UpdateAssistantOptionalParams,
  DeleteAssistantOptionalParams,
  CreateThreadOptionalParams,
  GetThreadOptionalParams,
  UpdateThreadOptionalParams,
  DeleteThreadOptionalParams,
  CreateMessageOptionalParams,
  ListMessagesOptionalParams,
  GetMessageOptionalParams,
  UpdateMessageOptionalParams,
  CreateRunOptionalParams,
  ListRunsOptionalParams,
  GetRunOptionalParams,
  UpdateRunOptionalParams,
  SubmitToolOutputsToRunOptionalParams,
  CancelRunOptionalParams,
  CreateThreadAndRunOptionalParams,
  GetRunStepOptionalParams,
  ListRunStepsOptionalParams,
  ListFilesOptionalParams,
  UploadFileOptionalParams,
  DeleteFileOptionalParams,
  GetFileOptionalParams,
  GetFileContentOptionalParams,
  ListVectorStoresOptionalParams,
  CreateVectorStoreOptionalParams,
  GetVectorStoreOptionalParams,
  ModifyVectorStoreOptionalParams,
  DeleteVectorStoreOptionalParams,
  ListVectorStoreFilesOptionalParams,
  CreateVectorStoreFileOptionalParams,
  GetVectorStoreFileOptionalParams,
  DeleteVectorStoreFileOptionalParams,
  CreateVectorStoreFileBatchOptionalParams,
  GetVectorStoreFileBatchOptionalParams,
  CancelVectorStoreFileBatchOptionalParams,
  ListVectorStoreFileBatchFilesOptionalParams,
} from "../models/options.js";

export function _createAssistantSend(
  context: Client,
  body: AssistantCreationOptions,
  options: CreateAssistantOptionalParams = { requestOptions: {} },
): StreamableMethod<CreateAssistant200Response> {
  return context
    .path("/assistants")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        model: body["model"],
        name: body["name"],
        description: body["description"],
        instructions: body["instructions"],
        tools: body["tools"],
        tool_resources: !body.toolResources
          ? body.toolResources
          : createToolResourcesOptionsSerializer(body.toolResources),
        temperature: body["temperature"],
        top_p: body["topP"],
        response_format: body["responseFormat"],
        metadata: !body.metadata
          ? body.metadata
          : (serializeRecord(body.metadata as any) as any),
      },
    });
}

export async function _createAssistantDeserialize(
  result: CreateAssistant200Response,
): Promise<Assistant> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    name: result.body["name"],
    description: result.body["description"],
    model: result.body["model"],
    instructions: result.body["instructions"],
    tools: result.body["tools"],
    toolResources:
      result.body.tool_resources === null
        ? null
        : {
            codeInterpreter: !result.body.tool_resources.code_interpreter
              ? undefined
              : {
                  fileIds:
                    result.body.tool_resources.code_interpreter?.["file_ids"],
                },
            fileSearch: !result.body.tool_resources.file_search
              ? undefined
              : {
                  vectorStoreIds:
                    result.body.tool_resources.file_search?.[
                      "vector_store_ids"
                    ],
                },
          },
    temperature: result.body["temperature"],
    topP: result.body["top_p"],
    responseFormat: result.body["response_format"],
    metadata: result.body["metadata"],
  };
}

/** Creates a new assistant. */
export async function createAssistant(
  context: Client,
  body: AssistantCreationOptions,
  options: CreateAssistantOptionalParams = { requestOptions: {} },
): Promise<Assistant> {
  const result = await _createAssistantSend(context, body, options);
  return _createAssistantDeserialize(result);
}

export function _listAssistantsSend(
  context: Client,
  options: ListAssistantsOptionalParams = { requestOptions: {} },
): StreamableMethod<ListAssistants200Response> {
  return context
    .path("/assistants")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listAssistantsDeserialize(
  result: ListAssistants200Response,
): Promise<OpenAIPageableListOfAssistant> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    object: result.body["object"],
    data: result.body["data"].map((p) => ({
      id: p["id"],
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      name: p["name"],
      description: p["description"],
      model: p["model"],
      instructions: p["instructions"],
      tools: p["tools"],
      toolResources:
        p.tool_resources === null
          ? null
          : {
              codeInterpreter: !p.tool_resources.code_interpreter
                ? undefined
                : { fileIds: p.tool_resources.code_interpreter?.["file_ids"] },
              fileSearch: !p.tool_resources.file_search
                ? undefined
                : {
                    vectorStoreIds:
                      p.tool_resources.file_search?.["vector_store_ids"],
                  },
            },
      temperature: p["temperature"],
      topP: p["top_p"],
      responseFormat: p["response_format"],
      metadata: p["metadata"],
    })),
    firstId: result.body["first_id"],
    lastId: result.body["last_id"],
    hasMore: result.body["has_more"],
  };
}

/** Gets a list of assistants that were previously created. */
export async function listAssistants(
  context: Client,
  options: ListAssistantsOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfAssistant> {
  const result = await _listAssistantsSend(context, options);
  return _listAssistantsDeserialize(result);
}

export function _getAssistantSend(
  context: Client,
  assistantId: string,
  options: GetAssistantOptionalParams = { requestOptions: {} },
): StreamableMethod<GetAssistant200Response> {
  return context
    .path("/assistants/{assistantId}", assistantId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAssistantDeserialize(
  result: GetAssistant200Response,
): Promise<Assistant> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    name: result.body["name"],
    description: result.body["description"],
    model: result.body["model"],
    instructions: result.body["instructions"],
    tools: result.body["tools"],
    toolResources:
      result.body.tool_resources === null
        ? null
        : {
            codeInterpreter: !result.body.tool_resources.code_interpreter
              ? undefined
              : {
                  fileIds:
                    result.body.tool_resources.code_interpreter?.["file_ids"],
                },
            fileSearch: !result.body.tool_resources.file_search
              ? undefined
              : {
                  vectorStoreIds:
                    result.body.tool_resources.file_search?.[
                      "vector_store_ids"
                    ],
                },
          },
    temperature: result.body["temperature"],
    topP: result.body["top_p"],
    responseFormat: result.body["response_format"],
    metadata: result.body["metadata"],
  };
}

/** Retrieves an existing assistant. */
export async function getAssistant(
  context: Client,
  assistantId: string,
  options: GetAssistantOptionalParams = { requestOptions: {} },
): Promise<Assistant> {
  const result = await _getAssistantSend(context, assistantId, options);
  return _getAssistantDeserialize(result);
}

export function _updateAssistantSend(
  context: Client,
  assistantId: string,
  body: UpdateAssistantOptions,
  options: UpdateAssistantOptionalParams = { requestOptions: {} },
): StreamableMethod<UpdateAssistant200Response> {
  return context
    .path("/assistants/{assistantId}", assistantId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        model: body["model"],
        name: body["name"],
        description: body["description"],
        instructions: body["instructions"],
        tools: body["tools"],
        tool_resources: !body.toolResources
          ? body.toolResources
          : updateToolResourcesOptionsSerializer(body.toolResources),
        temperature: body["temperature"],
        top_p: body["topP"],
        response_format: body["responseFormat"],
        metadata: !body.metadata
          ? body.metadata
          : (serializeRecord(body.metadata as any) as any),
      },
    });
}

export async function _updateAssistantDeserialize(
  result: UpdateAssistant200Response,
): Promise<Assistant> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    name: result.body["name"],
    description: result.body["description"],
    model: result.body["model"],
    instructions: result.body["instructions"],
    tools: result.body["tools"],
    toolResources:
      result.body.tool_resources === null
        ? null
        : {
            codeInterpreter: !result.body.tool_resources.code_interpreter
              ? undefined
              : {
                  fileIds:
                    result.body.tool_resources.code_interpreter?.["file_ids"],
                },
            fileSearch: !result.body.tool_resources.file_search
              ? undefined
              : {
                  vectorStoreIds:
                    result.body.tool_resources.file_search?.[
                      "vector_store_ids"
                    ],
                },
          },
    temperature: result.body["temperature"],
    topP: result.body["top_p"],
    responseFormat: result.body["response_format"],
    metadata: result.body["metadata"],
  };
}

/** Modifies an existing assistant. */
export async function updateAssistant(
  context: Client,
  assistantId: string,
  body: UpdateAssistantOptions,
  options: UpdateAssistantOptionalParams = { requestOptions: {} },
): Promise<Assistant> {
  const result = await _updateAssistantSend(
    context,
    assistantId,
    body,
    options,
  );
  return _updateAssistantDeserialize(result);
}

export function _deleteAssistantSend(
  context: Client,
  assistantId: string,
  options: DeleteAssistantOptionalParams = { requestOptions: {} },
): StreamableMethod<DeleteAssistant200Response> {
  return context
    .path("/assistants/{assistantId}", assistantId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteAssistantDeserialize(
  result: DeleteAssistant200Response,
): Promise<AssistantDeletionStatus> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    deleted: result.body["deleted"],
    object: result.body["object"],
  };
}

/** Deletes an assistant. */
export async function deleteAssistant(
  context: Client,
  assistantId: string,
  options: DeleteAssistantOptionalParams = { requestOptions: {} },
): Promise<AssistantDeletionStatus> {
  const result = await _deleteAssistantSend(context, assistantId, options);
  return _deleteAssistantDeserialize(result);
}

export function _createThreadSend(
  context: Client,
  body: AssistantThreadCreationOptions,
  options: CreateThreadOptionalParams = { requestOptions: {} },
): StreamableMethod<CreateThread200Response> {
  return context
    .path("/threads")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        messages:
          body["messages"] === undefined
            ? body["messages"]
            : body["messages"].map(threadMessageOptionsSerializer),
        tool_resources: !body.toolResources
          ? body.toolResources
          : createToolResourcesOptionsSerializer(body.toolResources),
        metadata: !body.metadata
          ? body.metadata
          : (serializeRecord(body.metadata as any) as any),
      },
    });
}

export async function _createThreadDeserialize(
  result: CreateThread200Response,
): Promise<AssistantThread> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    toolResources:
      result.body.tool_resources === null
        ? null
        : {
            codeInterpreter: !result.body.tool_resources.code_interpreter
              ? undefined
              : {
                  fileIds:
                    result.body.tool_resources.code_interpreter?.["file_ids"],
                },
            fileSearch: !result.body.tool_resources.file_search
              ? undefined
              : {
                  vectorStoreIds:
                    result.body.tool_resources.file_search?.[
                      "vector_store_ids"
                    ],
                },
          },
    metadata: result.body["metadata"],
  };
}

/** Creates a new thread. Threads contain messages and can be run by assistants. */
export async function createThread(
  context: Client,
  body: AssistantThreadCreationOptions,
  options: CreateThreadOptionalParams = { requestOptions: {} },
): Promise<AssistantThread> {
  const result = await _createThreadSend(context, body, options);
  return _createThreadDeserialize(result);
}

export function _getThreadSend(
  context: Client,
  threadId: string,
  options: GetThreadOptionalParams = { requestOptions: {} },
): StreamableMethod<GetThread200Response> {
  return context
    .path("/threads/{threadId}", threadId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getThreadDeserialize(
  result: GetThread200Response,
): Promise<AssistantThread> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    toolResources:
      result.body.tool_resources === null
        ? null
        : {
            codeInterpreter: !result.body.tool_resources.code_interpreter
              ? undefined
              : {
                  fileIds:
                    result.body.tool_resources.code_interpreter?.["file_ids"],
                },
            fileSearch: !result.body.tool_resources.file_search
              ? undefined
              : {
                  vectorStoreIds:
                    result.body.tool_resources.file_search?.[
                      "vector_store_ids"
                    ],
                },
          },
    metadata: result.body["metadata"],
  };
}

/** Gets information about an existing thread. */
export async function getThread(
  context: Client,
  threadId: string,
  options: GetThreadOptionalParams = { requestOptions: {} },
): Promise<AssistantThread> {
  const result = await _getThreadSend(context, threadId, options);
  return _getThreadDeserialize(result);
}

export function _updateThreadSend(
  context: Client,
  threadId: string,
  body: UpdateAssistantThreadOptions,
  options: UpdateThreadOptionalParams = { requestOptions: {} },
): StreamableMethod<UpdateThread200Response> {
  return context
    .path("/threads/{threadId}", threadId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        tool_resources: !body.toolResources
          ? body.toolResources
          : updateToolResourcesOptionsSerializer(body.toolResources),
        metadata: !body.metadata
          ? body.metadata
          : (serializeRecord(body.metadata as any) as any),
      },
    });
}

export async function _updateThreadDeserialize(
  result: UpdateThread200Response,
): Promise<AssistantThread> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    toolResources:
      result.body.tool_resources === null
        ? null
        : {
            codeInterpreter: !result.body.tool_resources.code_interpreter
              ? undefined
              : {
                  fileIds:
                    result.body.tool_resources.code_interpreter?.["file_ids"],
                },
            fileSearch: !result.body.tool_resources.file_search
              ? undefined
              : {
                  vectorStoreIds:
                    result.body.tool_resources.file_search?.[
                      "vector_store_ids"
                    ],
                },
          },
    metadata: result.body["metadata"],
  };
}

/** Modifies an existing thread. */
export async function updateThread(
  context: Client,
  threadId: string,
  body: UpdateAssistantThreadOptions,
  options: UpdateThreadOptionalParams = { requestOptions: {} },
): Promise<AssistantThread> {
  const result = await _updateThreadSend(context, threadId, body, options);
  return _updateThreadDeserialize(result);
}

export function _deleteThreadSend(
  context: Client,
  threadId: string,
  options: DeleteThreadOptionalParams = { requestOptions: {} },
): StreamableMethod<DeleteThread200Response> {
  return context
    .path("/threads/{threadId}", threadId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteThreadDeserialize(
  result: DeleteThread200Response,
): Promise<ThreadDeletionStatus> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    deleted: result.body["deleted"],
    object: result.body["object"],
  };
}

/** Deletes an existing thread. */
export async function deleteThread(
  context: Client,
  threadId: string,
  options: DeleteThreadOptionalParams = { requestOptions: {} },
): Promise<ThreadDeletionStatus> {
  const result = await _deleteThreadSend(context, threadId, options);
  return _deleteThreadDeserialize(result);
}

export function _createMessageSend(
  context: Client,
  threadId: string,
  body: ThreadMessageOptions,
  options: CreateMessageOptionalParams = { requestOptions: {} },
): StreamableMethod<CreateMessage200Response> {
  return context
    .path("/threads/{threadId}/messages", threadId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        role: body["role"],
        content: body["content"],
        attachments:
          body["attachments"] === undefined || body["attachments"] === null
            ? body["attachments"]
            : body["attachments"].map(messageAttachmentSerializer),
        metadata: !body.metadata
          ? body.metadata
          : (serializeRecord(body.metadata as any) as any),
      },
    });
}

export async function _createMessageDeserialize(
  result: CreateMessage200Response,
): Promise<ThreadMessage> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    threadId: result.body["thread_id"],
    status: result.body["status"] as MessageStatus,
    incompleteDetails:
      result.body.incomplete_details === null
        ? null
        : {
            reason: result.body.incomplete_details[
              "reason"
            ] as MessageIncompleteDetailsReason,
          },
    completedAt:
      result.body["completed_at"] === null
        ? null
        : new Date(result.body["completed_at"]),
    incompleteAt:
      result.body["incomplete_at"] === null
        ? null
        : new Date(result.body["incomplete_at"]),
    role: result.body["role"] as MessageRole,
    content: result.body["content"].map((p) =>
      deserializeMessageContentUnion(p),
    ),
    assistantId: result.body["assistant_id"],
    runId: result.body["run_id"],
    attachments:
      result.body["attachments"] === null
        ? result.body["attachments"]
        : result.body["attachments"].map((p) => ({
            fileId: p["file_id"],
            tools: p["tools"],
          })),
    metadata: result.body["metadata"],
  };
}

/** Creates a new message on a specified thread. */
export async function createMessage(
  context: Client,
  threadId: string,
  body: ThreadMessageOptions,
  options: CreateMessageOptionalParams = { requestOptions: {} },
): Promise<ThreadMessage> {
  const result = await _createMessageSend(context, threadId, body, options);
  return _createMessageDeserialize(result);
}

export function _listMessagesSend(
  context: Client,
  threadId: string,
  options: ListMessagesOptionalParams = { requestOptions: {} },
): StreamableMethod<ListMessages200Response> {
  return context
    .path("/threads/{threadId}/messages", threadId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        runId: options?.runId,
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listMessagesDeserialize(
  result: ListMessages200Response,
): Promise<OpenAIPageableListOfThreadMessage> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    object: result.body["object"],
    data: result.body["data"].map((p) => ({
      id: p["id"],
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      threadId: p["thread_id"],
      status: p["status"] as MessageStatus,
      incompleteDetails:
        p.incomplete_details === null
          ? null
          : {
              reason: p.incomplete_details[
                "reason"
              ] as MessageIncompleteDetailsReason,
            },
      completedAt:
        p["completed_at"] === null ? null : new Date(p["completed_at"]),
      incompleteAt:
        p["incomplete_at"] === null ? null : new Date(p["incomplete_at"]),
      role: p["role"] as MessageRole,
      content: p["content"].map((p) => deserializeMessageContentUnion(p)),
      assistantId: p["assistant_id"],
      runId: p["run_id"],
      attachments:
        p["attachments"] === null
          ? p["attachments"]
          : p["attachments"].map((p) => ({
              fileId: p["file_id"],
              tools: p["tools"],
            })),
      metadata: p["metadata"],
    })),
    firstId: result.body["first_id"],
    lastId: result.body["last_id"],
    hasMore: result.body["has_more"],
  };
}

/** Gets a list of messages that exist on a thread. */
export async function listMessages(
  context: Client,
  threadId: string,
  options: ListMessagesOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfThreadMessage> {
  const result = await _listMessagesSend(context, threadId, options);
  return _listMessagesDeserialize(result);
}

export function _getMessageSend(
  context: Client,
  threadId: string,
  messageId: string,
  options: GetMessageOptionalParams = { requestOptions: {} },
): StreamableMethod<GetMessage200Response> {
  return context
    .path("/threads/{threadId}/messages/{messageId}", threadId, messageId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getMessageDeserialize(
  result: GetMessage200Response,
): Promise<ThreadMessage> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    threadId: result.body["thread_id"],
    status: result.body["status"] as MessageStatus,
    incompleteDetails:
      result.body.incomplete_details === null
        ? null
        : {
            reason: result.body.incomplete_details[
              "reason"
            ] as MessageIncompleteDetailsReason,
          },
    completedAt:
      result.body["completed_at"] === null
        ? null
        : new Date(result.body["completed_at"]),
    incompleteAt:
      result.body["incomplete_at"] === null
        ? null
        : new Date(result.body["incomplete_at"]),
    role: result.body["role"] as MessageRole,
    content: result.body["content"].map((p) =>
      deserializeMessageContentUnion(p),
    ),
    assistantId: result.body["assistant_id"],
    runId: result.body["run_id"],
    attachments:
      result.body["attachments"] === null
        ? result.body["attachments"]
        : result.body["attachments"].map((p) => ({
            fileId: p["file_id"],
            tools: p["tools"],
          })),
    metadata: result.body["metadata"],
  };
}

/** Gets an existing message from an existing thread. */
export async function getMessage(
  context: Client,
  threadId: string,
  messageId: string,
  options: GetMessageOptionalParams = { requestOptions: {} },
): Promise<ThreadMessage> {
  const result = await _getMessageSend(context, threadId, messageId, options);
  return _getMessageDeserialize(result);
}

export function _updateMessageSend(
  context: Client,
  threadId: string,
  messageId: string,
  options: UpdateMessageOptionalParams = { requestOptions: {} },
): StreamableMethod<UpdateMessage200Response> {
  return context
    .path("/threads/{threadId}/messages/{messageId}", threadId, messageId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { metadata: options?.metadata },
    });
}

export async function _updateMessageDeserialize(
  result: UpdateMessage200Response,
): Promise<ThreadMessage> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    threadId: result.body["thread_id"],
    status: result.body["status"] as MessageStatus,
    incompleteDetails:
      result.body.incomplete_details === null
        ? null
        : {
            reason: result.body.incomplete_details[
              "reason"
            ] as MessageIncompleteDetailsReason,
          },
    completedAt:
      result.body["completed_at"] === null
        ? null
        : new Date(result.body["completed_at"]),
    incompleteAt:
      result.body["incomplete_at"] === null
        ? null
        : new Date(result.body["incomplete_at"]),
    role: result.body["role"] as MessageRole,
    content: result.body["content"].map((p) =>
      deserializeMessageContentUnion(p),
    ),
    assistantId: result.body["assistant_id"],
    runId: result.body["run_id"],
    attachments:
      result.body["attachments"] === null
        ? result.body["attachments"]
        : result.body["attachments"].map((p) => ({
            fileId: p["file_id"],
            tools: p["tools"],
          })),
    metadata: result.body["metadata"],
  };
}

/** Modifies an existing message on an existing thread. */
export async function updateMessage(
  context: Client,
  threadId: string,
  messageId: string,
  options: UpdateMessageOptionalParams = { requestOptions: {} },
): Promise<ThreadMessage> {
  const result = await _updateMessageSend(
    context,
    threadId,
    messageId,
    options,
  );
  return _updateMessageDeserialize(result);
}

export function _createRunSend(
  context: Client,
  threadId: string,
  body: CreateRunOptions,
  options: CreateRunOptionalParams = { requestOptions: {} },
): StreamableMethod<CreateRun200Response> {
  return context
    .path("/threads/{threadId}/runs", threadId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        assistant_id: body["assistantId"],
        model: body["model"],
        instructions: body["instructions"],
        additional_instructions: body["additionalInstructions"],
        additional_messages:
          body["additionalMessages"] === undefined ||
          body["additionalMessages"] === null
            ? body["additionalMessages"]
            : body["additionalMessages"].map(threadMessageSerializer),
        tools: body["tools"],
        stream: body["stream"],
        temperature: body["temperature"],
        top_p: body["topP"],
        max_prompt_tokens: body["maxPromptTokens"],
        max_completion_tokens: body["maxCompletionTokens"],
        truncation_strategy: !body.truncationStrategy
          ? body.truncationStrategy
          : truncationObjectSerializer(body.truncationStrategy),
        tool_choice: body["toolChoice"],
        response_format: body["responseFormat"],
        metadata: !body.metadata
          ? body.metadata
          : (serializeRecord(body.metadata as any) as any),
      },
    });
}

export async function _createRunDeserialize(
  result: CreateRun200Response,
): Promise<ThreadRun> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    threadId: result.body["thread_id"],
    assistantId: result.body["assistant_id"],
    status: result.body["status"] as RunStatus,
    requiredAction: !result.body.requiredAction
      ? result.body.requiredAction
      : deserializeRequiredActionUnion(result.body.required_action),
    lastError:
      result.body.last_error === null
        ? null
        : {
            code: result.body.last_error["code"],
            message: result.body.last_error["message"],
          },
    model: result.body["model"],
    instructions: result.body["instructions"],
    tools: result.body["tools"],
    createdAt: new Date(result.body["created_at"]),
    expiresAt:
      result.body["expires_at"] === null
        ? null
        : new Date(result.body["expires_at"]),
    startedAt:
      result.body["started_at"] === null
        ? null
        : new Date(result.body["started_at"]),
    completedAt:
      result.body["completed_at"] === null
        ? null
        : new Date(result.body["completed_at"]),
    cancelledAt:
      result.body["cancelled_at"] === null
        ? null
        : new Date(result.body["cancelled_at"]),
    failedAt:
      result.body["failed_at"] === null
        ? null
        : new Date(result.body["failed_at"]),
    incompleteDetails: result.body[
      "incomplete_details"
    ] as IncompleteRunDetails,
    usage:
      result.body.usage === null
        ? null
        : {
            completionTokens: result.body.usage["completion_tokens"],
            promptTokens: result.body.usage["prompt_tokens"],
            totalTokens: result.body.usage["total_tokens"],
          },
    temperature: result.body["temperature"],
    topP: result.body["top_p"],
    maxPromptTokens: result.body["max_prompt_tokens"],
    maxCompletionTokens: result.body["max_completion_tokens"],
    truncationStrategy:
      result.body.truncation_strategy === null
        ? null
        : {
            type: result.body.truncation_strategy["type"] as TruncationStrategy,
            lastMessages: result.body.truncation_strategy["last_messages"],
          },
    toolChoice: result.body["tool_choice"],
    responseFormat: result.body["response_format"],
    metadata: result.body["metadata"],
  };
}

/** Creates a new run for an assistant thread. */
export async function createRun(
  context: Client,
  threadId: string,
  body: CreateRunOptions,
  options: CreateRunOptionalParams = { requestOptions: {} },
): Promise<ThreadRun> {
  const result = await _createRunSend(context, threadId, body, options);
  return _createRunDeserialize(result);
}

export function _listRunsSend(
  context: Client,
  threadId: string,
  options: ListRunsOptionalParams = { requestOptions: {} },
): StreamableMethod<ListRuns200Response> {
  return context
    .path("/threads/{threadId}/runs", threadId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listRunsDeserialize(
  result: ListRuns200Response,
): Promise<OpenAIPageableListOfThreadRun> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    object: result.body["object"],
    data: result.body["data"].map((p) => ({
      id: p["id"],
      object: p["object"],
      threadId: p["thread_id"],
      assistantId: p["assistant_id"],
      status: p["status"] as RunStatus,
      requiredAction: !p.requiredAction
        ? p.requiredAction
        : deserializeRequiredActionUnion(p.required_action),
      lastError:
        p.last_error === null
          ? null
          : { code: p.last_error["code"], message: p.last_error["message"] },
      model: p["model"],
      instructions: p["instructions"],
      tools: p["tools"],
      createdAt: new Date(p["created_at"]),
      expiresAt: p["expires_at"] === null ? null : new Date(p["expires_at"]),
      startedAt: p["started_at"] === null ? null : new Date(p["started_at"]),
      completedAt:
        p["completed_at"] === null ? null : new Date(p["completed_at"]),
      cancelledAt:
        p["cancelled_at"] === null ? null : new Date(p["cancelled_at"]),
      failedAt: p["failed_at"] === null ? null : new Date(p["failed_at"]),
      incompleteDetails: p["incomplete_details"] as IncompleteRunDetails,
      usage:
        p.usage === null
          ? null
          : {
              completionTokens: p.usage["completion_tokens"],
              promptTokens: p.usage["prompt_tokens"],
              totalTokens: p.usage["total_tokens"],
            },
      temperature: p["temperature"],
      topP: p["top_p"],
      maxPromptTokens: p["max_prompt_tokens"],
      maxCompletionTokens: p["max_completion_tokens"],
      truncationStrategy:
        p.truncation_strategy === null
          ? null
          : {
              type: p.truncation_strategy["type"] as TruncationStrategy,
              lastMessages: p.truncation_strategy["last_messages"],
            },
      toolChoice: p["tool_choice"],
      responseFormat: p["response_format"],
      metadata: p["metadata"],
    })),
    firstId: result.body["first_id"],
    lastId: result.body["last_id"],
    hasMore: result.body["has_more"],
  };
}

/** Gets a list of runs for a specified thread. */
export async function listRuns(
  context: Client,
  threadId: string,
  options: ListRunsOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfThreadRun> {
  const result = await _listRunsSend(context, threadId, options);
  return _listRunsDeserialize(result);
}

export function _getRunSend(
  context: Client,
  threadId: string,
  runId: string,
  options: GetRunOptionalParams = { requestOptions: {} },
): StreamableMethod<GetRun200Response> {
  return context
    .path("/threads/{threadId}/runs/{runId}", threadId, runId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getRunDeserialize(
  result: GetRun200Response,
): Promise<ThreadRun> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    threadId: result.body["thread_id"],
    assistantId: result.body["assistant_id"],
    status: result.body["status"] as RunStatus,
    requiredAction: !result.body.requiredAction
      ? result.body.requiredAction
      : deserializeRequiredActionUnion(result.body.required_action),
    lastError:
      result.body.last_error === null
        ? null
        : {
            code: result.body.last_error["code"],
            message: result.body.last_error["message"],
          },
    model: result.body["model"],
    instructions: result.body["instructions"],
    tools: result.body["tools"],
    createdAt: new Date(result.body["created_at"]),
    expiresAt:
      result.body["expires_at"] === null
        ? null
        : new Date(result.body["expires_at"]),
    startedAt:
      result.body["started_at"] === null
        ? null
        : new Date(result.body["started_at"]),
    completedAt:
      result.body["completed_at"] === null
        ? null
        : new Date(result.body["completed_at"]),
    cancelledAt:
      result.body["cancelled_at"] === null
        ? null
        : new Date(result.body["cancelled_at"]),
    failedAt:
      result.body["failed_at"] === null
        ? null
        : new Date(result.body["failed_at"]),
    incompleteDetails: result.body[
      "incomplete_details"
    ] as IncompleteRunDetails,
    usage:
      result.body.usage === null
        ? null
        : {
            completionTokens: result.body.usage["completion_tokens"],
            promptTokens: result.body.usage["prompt_tokens"],
            totalTokens: result.body.usage["total_tokens"],
          },
    temperature: result.body["temperature"],
    topP: result.body["top_p"],
    maxPromptTokens: result.body["max_prompt_tokens"],
    maxCompletionTokens: result.body["max_completion_tokens"],
    truncationStrategy:
      result.body.truncation_strategy === null
        ? null
        : {
            type: result.body.truncation_strategy["type"] as TruncationStrategy,
            lastMessages: result.body.truncation_strategy["last_messages"],
          },
    toolChoice: result.body["tool_choice"],
    responseFormat: result.body["response_format"],
    metadata: result.body["metadata"],
  };
}

/** Gets an existing run from an existing thread. */
export async function getRun(
  context: Client,
  threadId: string,
  runId: string,
  options: GetRunOptionalParams = { requestOptions: {} },
): Promise<ThreadRun> {
  const result = await _getRunSend(context, threadId, runId, options);
  return _getRunDeserialize(result);
}

export function _updateRunSend(
  context: Client,
  threadId: string,
  runId: string,
  options: UpdateRunOptionalParams = { requestOptions: {} },
): StreamableMethod<UpdateRun200Response> {
  return context
    .path("/threads/{threadId}/runs/{runId}", threadId, runId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { metadata: options?.metadata },
    });
}

export async function _updateRunDeserialize(
  result: UpdateRun200Response,
): Promise<ThreadRun> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    threadId: result.body["thread_id"],
    assistantId: result.body["assistant_id"],
    status: result.body["status"] as RunStatus,
    requiredAction: !result.body.requiredAction
      ? result.body.requiredAction
      : deserializeRequiredActionUnion(result.body.required_action),
    lastError:
      result.body.last_error === null
        ? null
        : {
            code: result.body.last_error["code"],
            message: result.body.last_error["message"],
          },
    model: result.body["model"],
    instructions: result.body["instructions"],
    tools: result.body["tools"],
    createdAt: new Date(result.body["created_at"]),
    expiresAt:
      result.body["expires_at"] === null
        ? null
        : new Date(result.body["expires_at"]),
    startedAt:
      result.body["started_at"] === null
        ? null
        : new Date(result.body["started_at"]),
    completedAt:
      result.body["completed_at"] === null
        ? null
        : new Date(result.body["completed_at"]),
    cancelledAt:
      result.body["cancelled_at"] === null
        ? null
        : new Date(result.body["cancelled_at"]),
    failedAt:
      result.body["failed_at"] === null
        ? null
        : new Date(result.body["failed_at"]),
    incompleteDetails: result.body[
      "incomplete_details"
    ] as IncompleteRunDetails,
    usage:
      result.body.usage === null
        ? null
        : {
            completionTokens: result.body.usage["completion_tokens"],
            promptTokens: result.body.usage["prompt_tokens"],
            totalTokens: result.body.usage["total_tokens"],
          },
    temperature: result.body["temperature"],
    topP: result.body["top_p"],
    maxPromptTokens: result.body["max_prompt_tokens"],
    maxCompletionTokens: result.body["max_completion_tokens"],
    truncationStrategy:
      result.body.truncation_strategy === null
        ? null
        : {
            type: result.body.truncation_strategy["type"] as TruncationStrategy,
            lastMessages: result.body.truncation_strategy["last_messages"],
          },
    toolChoice: result.body["tool_choice"],
    responseFormat: result.body["response_format"],
    metadata: result.body["metadata"],
  };
}

/** Modifies an existing thread run. */
export async function updateRun(
  context: Client,
  threadId: string,
  runId: string,
  options: UpdateRunOptionalParams = { requestOptions: {} },
): Promise<ThreadRun> {
  const result = await _updateRunSend(context, threadId, runId, options);
  return _updateRunDeserialize(result);
}

export function _submitToolOutputsToRunSend(
  context: Client,
  threadId: string,
  runId: string,
  toolOutputs: ToolOutput[],
  options: SubmitToolOutputsToRunOptionalParams = { requestOptions: {} },
): StreamableMethod<SubmitToolOutputsToRun200Response> {
  return context
    .path(
      "/threads/{threadId}/runs/{runId}/submit_tool_outputs",
      threadId,
      runId,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        tool_outputs: toolOutputs.map(toolOutputSerializer),
        stream: options?.stream,
      },
    });
}

export async function _submitToolOutputsToRunDeserialize(
  result: SubmitToolOutputsToRun200Response,
): Promise<ThreadRun> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    threadId: result.body["thread_id"],
    assistantId: result.body["assistant_id"],
    status: result.body["status"] as RunStatus,
    requiredAction: !result.body.requiredAction
      ? result.body.requiredAction
      : deserializeRequiredActionUnion(result.body.required_action),
    lastError:
      result.body.last_error === null
        ? null
        : {
            code: result.body.last_error["code"],
            message: result.body.last_error["message"],
          },
    model: result.body["model"],
    instructions: result.body["instructions"],
    tools: result.body["tools"],
    createdAt: new Date(result.body["created_at"]),
    expiresAt:
      result.body["expires_at"] === null
        ? null
        : new Date(result.body["expires_at"]),
    startedAt:
      result.body["started_at"] === null
        ? null
        : new Date(result.body["started_at"]),
    completedAt:
      result.body["completed_at"] === null
        ? null
        : new Date(result.body["completed_at"]),
    cancelledAt:
      result.body["cancelled_at"] === null
        ? null
        : new Date(result.body["cancelled_at"]),
    failedAt:
      result.body["failed_at"] === null
        ? null
        : new Date(result.body["failed_at"]),
    incompleteDetails: result.body[
      "incomplete_details"
    ] as IncompleteRunDetails,
    usage:
      result.body.usage === null
        ? null
        : {
            completionTokens: result.body.usage["completion_tokens"],
            promptTokens: result.body.usage["prompt_tokens"],
            totalTokens: result.body.usage["total_tokens"],
          },
    temperature: result.body["temperature"],
    topP: result.body["top_p"],
    maxPromptTokens: result.body["max_prompt_tokens"],
    maxCompletionTokens: result.body["max_completion_tokens"],
    truncationStrategy:
      result.body.truncation_strategy === null
        ? null
        : {
            type: result.body.truncation_strategy["type"] as TruncationStrategy,
            lastMessages: result.body.truncation_strategy["last_messages"],
          },
    toolChoice: result.body["tool_choice"],
    responseFormat: result.body["response_format"],
    metadata: result.body["metadata"],
  };
}

/** Submits outputs from tools as requested by tool calls in a run. Runs that need submitted tool outputs will have a status of 'requires_action' with a required_action.type of 'submit_tool_outputs'. */
export async function submitToolOutputsToRun(
  context: Client,
  threadId: string,
  runId: string,
  toolOutputs: ToolOutput[],
  options: SubmitToolOutputsToRunOptionalParams = { requestOptions: {} },
): Promise<ThreadRun> {
  const result = await _submitToolOutputsToRunSend(
    context,
    threadId,
    runId,
    toolOutputs,
    options,
  );
  return _submitToolOutputsToRunDeserialize(result);
}

export function _cancelRunSend(
  context: Client,
  threadId: string,
  runId: string,
  options: CancelRunOptionalParams = { requestOptions: {} },
): StreamableMethod<CancelRun200Response> {
  return context
    .path("/threads/{threadId}/runs/{runId}/cancel", threadId, runId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _cancelRunDeserialize(
  result: CancelRun200Response,
): Promise<ThreadRun> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    threadId: result.body["thread_id"],
    assistantId: result.body["assistant_id"],
    status: result.body["status"] as RunStatus,
    requiredAction: !result.body.requiredAction
      ? result.body.requiredAction
      : deserializeRequiredActionUnion(result.body.required_action),
    lastError:
      result.body.last_error === null
        ? null
        : {
            code: result.body.last_error["code"],
            message: result.body.last_error["message"],
          },
    model: result.body["model"],
    instructions: result.body["instructions"],
    tools: result.body["tools"],
    createdAt: new Date(result.body["created_at"]),
    expiresAt:
      result.body["expires_at"] === null
        ? null
        : new Date(result.body["expires_at"]),
    startedAt:
      result.body["started_at"] === null
        ? null
        : new Date(result.body["started_at"]),
    completedAt:
      result.body["completed_at"] === null
        ? null
        : new Date(result.body["completed_at"]),
    cancelledAt:
      result.body["cancelled_at"] === null
        ? null
        : new Date(result.body["cancelled_at"]),
    failedAt:
      result.body["failed_at"] === null
        ? null
        : new Date(result.body["failed_at"]),
    incompleteDetails: result.body[
      "incomplete_details"
    ] as IncompleteRunDetails,
    usage:
      result.body.usage === null
        ? null
        : {
            completionTokens: result.body.usage["completion_tokens"],
            promptTokens: result.body.usage["prompt_tokens"],
            totalTokens: result.body.usage["total_tokens"],
          },
    temperature: result.body["temperature"],
    topP: result.body["top_p"],
    maxPromptTokens: result.body["max_prompt_tokens"],
    maxCompletionTokens: result.body["max_completion_tokens"],
    truncationStrategy:
      result.body.truncation_strategy === null
        ? null
        : {
            type: result.body.truncation_strategy["type"] as TruncationStrategy,
            lastMessages: result.body.truncation_strategy["last_messages"],
          },
    toolChoice: result.body["tool_choice"],
    responseFormat: result.body["response_format"],
    metadata: result.body["metadata"],
  };
}

/** Cancels a run of an in progress thread. */
export async function cancelRun(
  context: Client,
  threadId: string,
  runId: string,
  options: CancelRunOptionalParams = { requestOptions: {} },
): Promise<ThreadRun> {
  const result = await _cancelRunSend(context, threadId, runId, options);
  return _cancelRunDeserialize(result);
}

export function _createThreadAndRunSend(
  context: Client,
  body: CreateAndRunThreadOptions,
  options: CreateThreadAndRunOptionalParams = { requestOptions: {} },
): StreamableMethod<CreateThreadAndRun200Response> {
  return context
    .path("/threads/runs")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        assistant_id: body["assistantId"],
        thread: !body.thread
          ? body.thread
          : assistantThreadCreationOptionsSerializer(body.thread),
        model: body["model"],
        instructions: body["instructions"],
        tools: body["tools"],
        tool_resources: !body.toolResources
          ? body.toolResources
          : updateToolResourcesOptionsSerializer(body.toolResources),
        stream: body["stream"],
        temperature: body["temperature"],
        top_p: body["topP"],
        max_prompt_tokens: body["maxPromptTokens"],
        max_completion_tokens: body["maxCompletionTokens"],
        truncation_strategy: !body.truncationStrategy
          ? body.truncationStrategy
          : truncationObjectSerializer(body.truncationStrategy),
        tool_choice: body["toolChoice"],
        response_format: body["responseFormat"],
        metadata: !body.metadata
          ? body.metadata
          : (serializeRecord(body.metadata as any) as any),
      },
    });
}

export async function _createThreadAndRunDeserialize(
  result: CreateThreadAndRun200Response,
): Promise<ThreadRun> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    threadId: result.body["thread_id"],
    assistantId: result.body["assistant_id"],
    status: result.body["status"] as RunStatus,
    requiredAction: !result.body.requiredAction
      ? result.body.requiredAction
      : deserializeRequiredActionUnion(result.body.required_action),
    lastError:
      result.body.last_error === null
        ? null
        : {
            code: result.body.last_error["code"],
            message: result.body.last_error["message"],
          },
    model: result.body["model"],
    instructions: result.body["instructions"],
    tools: result.body["tools"],
    createdAt: new Date(result.body["created_at"]),
    expiresAt:
      result.body["expires_at"] === null
        ? null
        : new Date(result.body["expires_at"]),
    startedAt:
      result.body["started_at"] === null
        ? null
        : new Date(result.body["started_at"]),
    completedAt:
      result.body["completed_at"] === null
        ? null
        : new Date(result.body["completed_at"]),
    cancelledAt:
      result.body["cancelled_at"] === null
        ? null
        : new Date(result.body["cancelled_at"]),
    failedAt:
      result.body["failed_at"] === null
        ? null
        : new Date(result.body["failed_at"]),
    incompleteDetails: result.body[
      "incomplete_details"
    ] as IncompleteRunDetails,
    usage:
      result.body.usage === null
        ? null
        : {
            completionTokens: result.body.usage["completion_tokens"],
            promptTokens: result.body.usage["prompt_tokens"],
            totalTokens: result.body.usage["total_tokens"],
          },
    temperature: result.body["temperature"],
    topP: result.body["top_p"],
    maxPromptTokens: result.body["max_prompt_tokens"],
    maxCompletionTokens: result.body["max_completion_tokens"],
    truncationStrategy:
      result.body.truncation_strategy === null
        ? null
        : {
            type: result.body.truncation_strategy["type"] as TruncationStrategy,
            lastMessages: result.body.truncation_strategy["last_messages"],
          },
    toolChoice: result.body["tool_choice"],
    responseFormat: result.body["response_format"],
    metadata: result.body["metadata"],
  };
}

/** Creates a new assistant thread and immediately starts a run using that new thread. */
export async function createThreadAndRun(
  context: Client,
  body: CreateAndRunThreadOptions,
  options: CreateThreadAndRunOptionalParams = { requestOptions: {} },
): Promise<ThreadRun> {
  const result = await _createThreadAndRunSend(context, body, options);
  return _createThreadAndRunDeserialize(result);
}

export function _getRunStepSend(
  context: Client,
  threadId: string,
  runId: string,
  stepId: string,
  options: GetRunStepOptionalParams = { requestOptions: {} },
): StreamableMethod<GetRunStep200Response> {
  return context
    .path(
      "/threads/{threadId}/runs/{runId}/steps/{stepId}",
      threadId,
      runId,
      stepId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getRunStepDeserialize(
  result: GetRunStep200Response,
): Promise<RunStep> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    type: result.body["type"] as RunStepType,
    assistantId: result.body["assistant_id"],
    threadId: result.body["thread_id"],
    runId: result.body["run_id"],
    status: result.body["status"] as RunStepStatus,
    stepDetails: deserializeRunStepDetailsUnion(result.body.step_details),
    lastError:
      result.body.last_error === null
        ? null
        : {
            code: result.body.last_error["code"] as RunStepErrorCode,
            message: result.body.last_error["message"],
          },
    createdAt: new Date(result.body["created_at"]),
    expiredAt:
      result.body["expired_at"] === null
        ? null
        : new Date(result.body["expired_at"]),
    completedAt:
      result.body["completed_at"] === null
        ? null
        : new Date(result.body["completed_at"]),
    cancelledAt:
      result.body["cancelled_at"] === null
        ? null
        : new Date(result.body["cancelled_at"]),
    failedAt:
      result.body["failed_at"] === null
        ? null
        : new Date(result.body["failed_at"]),
    usage:
      result.body.usage === null
        ? null
        : !result.body.usage
          ? undefined
          : {
              completionTokens: result.body.usage?.["completion_tokens"],
              promptTokens: result.body.usage?.["prompt_tokens"],
              totalTokens: result.body.usage?.["total_tokens"],
            },
    metadata: result.body["metadata"],
  };
}

/** Gets a single run step from a thread run. */
export async function getRunStep(
  context: Client,
  threadId: string,
  runId: string,
  stepId: string,
  options: GetRunStepOptionalParams = { requestOptions: {} },
): Promise<RunStep> {
  const result = await _getRunStepSend(
    context,
    threadId,
    runId,
    stepId,
    options,
  );
  return _getRunStepDeserialize(result);
}

export function _listRunStepsSend(
  context: Client,
  threadId: string,
  runId: string,
  options: ListRunStepsOptionalParams = { requestOptions: {} },
): StreamableMethod<ListRunSteps200Response> {
  return context
    .path("/threads/{threadId}/runs/{runId}/steps", threadId, runId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listRunStepsDeserialize(
  result: ListRunSteps200Response,
): Promise<OpenAIPageableListOfRunStep> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    object: result.body["object"],
    data: result.body["data"].map((p) => ({
      id: p["id"],
      object: p["object"],
      type: p["type"] as RunStepType,
      assistantId: p["assistant_id"],
      threadId: p["thread_id"],
      runId: p["run_id"],
      status: p["status"] as RunStepStatus,
      stepDetails: deserializeRunStepDetailsUnion(p.step_details),
      lastError:
        p.last_error === null
          ? null
          : {
              code: p.last_error["code"] as RunStepErrorCode,
              message: p.last_error["message"],
            },
      createdAt: new Date(p["created_at"]),
      expiredAt: p["expired_at"] === null ? null : new Date(p["expired_at"]),
      completedAt:
        p["completed_at"] === null ? null : new Date(p["completed_at"]),
      cancelledAt:
        p["cancelled_at"] === null ? null : new Date(p["cancelled_at"]),
      failedAt: p["failed_at"] === null ? null : new Date(p["failed_at"]),
      usage:
        p.usage === null
          ? null
          : !p.usage
            ? undefined
            : {
                completionTokens: p.usage?.["completion_tokens"],
                promptTokens: p.usage?.["prompt_tokens"],
                totalTokens: p.usage?.["total_tokens"],
              },
      metadata: p["metadata"],
    })),
    firstId: result.body["first_id"],
    lastId: result.body["last_id"],
    hasMore: result.body["has_more"],
  };
}

/** Gets a list of run steps from a thread run. */
export async function listRunSteps(
  context: Client,
  threadId: string,
  runId: string,
  options: ListRunStepsOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfRunStep> {
  const result = await _listRunStepsSend(context, threadId, runId, options);
  return _listRunStepsDeserialize(result);
}

export function _listFilesSend(
  context: Client,
  options: ListFilesOptionalParams = { requestOptions: {} },
): StreamableMethod<ListFiles200Response> {
  return context
    .path("/files")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { purpose: options?.purpose },
    });
}

export async function _listFilesDeserialize(
  result: ListFiles200Response,
): Promise<FileListResponse> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    object: result.body["object"],
    data: result.body["data"].map((p) => ({
      object: p["object"],
      id: p["id"],
      bytes: p["bytes"],
      filename: p["filename"],
      createdAt: new Date(p["created_at"]),
      purpose: p["purpose"] as FilePurpose,
      status: p["status"] as FileState,
      statusDetails: p["status_details"],
    })),
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
): StreamableMethod<UploadFile200Response> {
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
  result: UploadFile200Response,
): Promise<OpenAIFile> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    object: result.body["object"],
    id: result.body["id"],
    bytes: result.body["bytes"],
    filename: result.body["filename"],
    createdAt: new Date(result.body["created_at"]),
    purpose: result.body["purpose"] as FilePurpose,
    status: result.body["status"] as FileState,
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
): StreamableMethod<DeleteFile200Response> {
  return context
    .path("/files/{fileId}", fileId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteFileDeserialize(
  result: DeleteFile200Response,
): Promise<FileDeletionStatus> {
  if (result.status !== "200") {
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
): StreamableMethod<GetFile200Response> {
  return context
    .path("/files/{fileId}", fileId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getFileDeserialize(
  result: GetFile200Response,
): Promise<OpenAIFile> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    object: result.body["object"],
    id: result.body["id"],
    bytes: result.body["bytes"],
    filename: result.body["filename"],
    createdAt: new Date(result.body["created_at"]),
    purpose: result.body["purpose"] as FilePurpose,
    status: result.body["status"] as FileState,
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
): StreamableMethod<GetFileContent200Response> {
  return context
    .path("/files/{fileId}/content", fileId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getFileContentDeserialize(
  result: GetFileContent200Response,
): Promise<Uint8Array> {
  if (result.status !== "200") {
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

export function _listVectorStoresSend(
  context: Client,
  options: ListVectorStoresOptionalParams = { requestOptions: {} },
): StreamableMethod<ListVectorStores200Response> {
  return context
    .path("/vector_stores")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listVectorStoresDeserialize(
  result: ListVectorStores200Response,
): Promise<OpenAIPageableListOfVectorStore> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    object: result.body["object"],
    data: result.body["data"].map((p) => ({
      id: p["id"],
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      name: p["name"],
      usageBytes: p["usage_bytes"],
      fileCounts: {
        inProgress: p.file_counts["in_progress"],
        completed: p.file_counts["completed"],
        failed: p.file_counts["failed"],
        cancelled: p.file_counts["cancelled"],
        total: p.file_counts["total"],
      },
      status: p["status"] as VectorStoreStatus,
      expiresAfter: !p.expires_after
        ? undefined
        : {
            anchor: p.expires_after?.[
              "anchor"
            ] as VectorStoreExpirationPolicyAnchor,
            days: p.expires_after?.["days"],
          },
      expiresAt:
        p["expires_at"] !== undefined ? new Date(p["expires_at"]) : undefined,
      lastActiveAt:
        p["last_active_at"] === null ? null : new Date(p["last_active_at"]),
      metadata: p["metadata"],
    })),
    firstId: result.body["first_id"],
    lastId: result.body["last_id"],
    hasMore: result.body["has_more"],
  };
}

/** Returns a list of vector stores. */
export async function listVectorStores(
  context: Client,
  options: ListVectorStoresOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfVectorStore> {
  const result = await _listVectorStoresSend(context, options);
  return _listVectorStoresDeserialize(result);
}

export function _createVectorStoreSend(
  context: Client,
  body: VectorStoreOptions,
  options: CreateVectorStoreOptionalParams = { requestOptions: {} },
): StreamableMethod<CreateVectorStore200Response> {
  return context
    .path("/vector_stores")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        file_ids: body["fileIds"],
        name: body["name"],
        expires_after: !body.expiresAfter
          ? body.expiresAfter
          : vectorStoreExpirationPolicySerializer(body.expiresAfter),
        metadata: !body.metadata
          ? body.metadata
          : (serializeRecord(body.metadata as any) as any),
      },
    });
}

export async function _createVectorStoreDeserialize(
  result: CreateVectorStore200Response,
): Promise<VectorStore> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    name: result.body["name"],
    usageBytes: result.body["usage_bytes"],
    fileCounts: {
      inProgress: result.body.file_counts["in_progress"],
      completed: result.body.file_counts["completed"],
      failed: result.body.file_counts["failed"],
      cancelled: result.body.file_counts["cancelled"],
      total: result.body.file_counts["total"],
    },
    status: result.body["status"] as VectorStoreStatus,
    expiresAfter: !result.body.expires_after
      ? undefined
      : {
          anchor: result.body.expires_after?.[
            "anchor"
          ] as VectorStoreExpirationPolicyAnchor,
          days: result.body.expires_after?.["days"],
        },
    expiresAt:
      result.body["expires_at"] !== undefined
        ? new Date(result.body["expires_at"])
        : undefined,
    lastActiveAt:
      result.body["last_active_at"] === null
        ? null
        : new Date(result.body["last_active_at"]),
    metadata: result.body["metadata"],
  };
}

/** Creates a vector store. */
export async function createVectorStore(
  context: Client,
  body: VectorStoreOptions,
  options: CreateVectorStoreOptionalParams = { requestOptions: {} },
): Promise<VectorStore> {
  const result = await _createVectorStoreSend(context, body, options);
  return _createVectorStoreDeserialize(result);
}

export function _getVectorStoreSend(
  context: Client,
  vectorStoreId: string,
  options: GetVectorStoreOptionalParams = { requestOptions: {} },
): StreamableMethod<GetVectorStore200Response> {
  return context
    .path("/vector_stores/{vectorStoreId}", vectorStoreId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getVectorStoreDeserialize(
  result: GetVectorStore200Response,
): Promise<VectorStore> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    name: result.body["name"],
    usageBytes: result.body["usage_bytes"],
    fileCounts: {
      inProgress: result.body.file_counts["in_progress"],
      completed: result.body.file_counts["completed"],
      failed: result.body.file_counts["failed"],
      cancelled: result.body.file_counts["cancelled"],
      total: result.body.file_counts["total"],
    },
    status: result.body["status"] as VectorStoreStatus,
    expiresAfter: !result.body.expires_after
      ? undefined
      : {
          anchor: result.body.expires_after?.[
            "anchor"
          ] as VectorStoreExpirationPolicyAnchor,
          days: result.body.expires_after?.["days"],
        },
    expiresAt:
      result.body["expires_at"] !== undefined
        ? new Date(result.body["expires_at"])
        : undefined,
    lastActiveAt:
      result.body["last_active_at"] === null
        ? null
        : new Date(result.body["last_active_at"]),
    metadata: result.body["metadata"],
  };
}

/** Returns the vector store object matching the specified ID. */
export async function getVectorStore(
  context: Client,
  vectorStoreId: string,
  options: GetVectorStoreOptionalParams = { requestOptions: {} },
): Promise<VectorStore> {
  const result = await _getVectorStoreSend(context, vectorStoreId, options);
  return _getVectorStoreDeserialize(result);
}

export function _modifyVectorStoreSend(
  context: Client,
  vectorStoreId: string,
  body: VectorStoreUpdateOptions,
  options: ModifyVectorStoreOptionalParams = { requestOptions: {} },
): StreamableMethod<ModifyVectorStore200Response> {
  return context
    .path("/vector_stores/{vectorStoreId}", vectorStoreId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        name: body["name"],
        expires_after: !body.expiresAfter
          ? body.expiresAfter
          : vectorStoreExpirationPolicySerializer(body.expiresAfter),
        metadata: !body.metadata
          ? body.metadata
          : (serializeRecord(body.metadata as any) as any),
      },
    });
}

export async function _modifyVectorStoreDeserialize(
  result: ModifyVectorStore200Response,
): Promise<VectorStore> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    name: result.body["name"],
    usageBytes: result.body["usage_bytes"],
    fileCounts: {
      inProgress: result.body.file_counts["in_progress"],
      completed: result.body.file_counts["completed"],
      failed: result.body.file_counts["failed"],
      cancelled: result.body.file_counts["cancelled"],
      total: result.body.file_counts["total"],
    },
    status: result.body["status"] as VectorStoreStatus,
    expiresAfter: !result.body.expires_after
      ? undefined
      : {
          anchor: result.body.expires_after?.[
            "anchor"
          ] as VectorStoreExpirationPolicyAnchor,
          days: result.body.expires_after?.["days"],
        },
    expiresAt:
      result.body["expires_at"] !== undefined
        ? new Date(result.body["expires_at"])
        : undefined,
    lastActiveAt:
      result.body["last_active_at"] === null
        ? null
        : new Date(result.body["last_active_at"]),
    metadata: result.body["metadata"],
  };
}

/** The ID of the vector store to modify. */
export async function modifyVectorStore(
  context: Client,
  vectorStoreId: string,
  body: VectorStoreUpdateOptions,
  options: ModifyVectorStoreOptionalParams = { requestOptions: {} },
): Promise<VectorStore> {
  const result = await _modifyVectorStoreSend(
    context,
    vectorStoreId,
    body,
    options,
  );
  return _modifyVectorStoreDeserialize(result);
}

export function _deleteVectorStoreSend(
  context: Client,
  vectorStoreId: string,
  options: DeleteVectorStoreOptionalParams = { requestOptions: {} },
): StreamableMethod<DeleteVectorStore200Response> {
  return context
    .path("/vector_stores/{vectorStoreId}", vectorStoreId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteVectorStoreDeserialize(
  result: DeleteVectorStore200Response,
): Promise<VectorStoreDeletionStatus> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    deleted: result.body["deleted"],
    object: result.body["object"],
  };
}

/** Deletes the vector store object matching the specified ID. */
export async function deleteVectorStore(
  context: Client,
  vectorStoreId: string,
  options: DeleteVectorStoreOptionalParams = { requestOptions: {} },
): Promise<VectorStoreDeletionStatus> {
  const result = await _deleteVectorStoreSend(context, vectorStoreId, options);
  return _deleteVectorStoreDeserialize(result);
}

export function _listVectorStoreFilesSend(
  context: Client,
  vectorStoreId: string,
  options: ListVectorStoreFilesOptionalParams = { requestOptions: {} },
): StreamableMethod<ListVectorStoreFiles200Response> {
  return context
    .path("/vector_stores/{vectorStoreId}/files", vectorStoreId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        filter: options?.filter,
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listVectorStoreFilesDeserialize(
  result: ListVectorStoreFiles200Response,
): Promise<OpenAIPageableListOfVectorStoreFile> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    object: result.body["object"],
    data: result.body["data"].map((p) => ({
      id: p["id"],
      object: p["object"],
      usageBytes: p["usage_bytes"],
      createdAt: new Date(p["created_at"]),
      vectorStoreId: p["vector_store_id"],
      status: p["status"] as VectorStoreFileStatus,
      lastError:
        p.last_error === null
          ? null
          : {
              code: p.last_error["code"] as VectorStoreFileErrorCode,
              message: p.last_error["message"],
            },
    })),
    firstId: result.body["first_id"],
    lastId: result.body["last_id"],
    hasMore: result.body["has_more"],
  };
}

/** Returns a list of vector store files. */
export async function listVectorStoreFiles(
  context: Client,
  vectorStoreId: string,
  options: ListVectorStoreFilesOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfVectorStoreFile> {
  const result = await _listVectorStoreFilesSend(
    context,
    vectorStoreId,
    options,
  );
  return _listVectorStoreFilesDeserialize(result);
}

export function _createVectorStoreFileSend(
  context: Client,
  vectorStoreId: string,
  fileId: string,
  options: CreateVectorStoreFileOptionalParams = { requestOptions: {} },
): StreamableMethod<CreateVectorStoreFile200Response> {
  return context
    .path("/vector_stores/{vectorStoreId}/files", vectorStoreId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { file_id: fileId },
    });
}

export async function _createVectorStoreFileDeserialize(
  result: CreateVectorStoreFile200Response,
): Promise<VectorStoreFile> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    usageBytes: result.body["usage_bytes"],
    createdAt: new Date(result.body["created_at"]),
    vectorStoreId: result.body["vector_store_id"],
    status: result.body["status"] as VectorStoreFileStatus,
    lastError:
      result.body.last_error === null
        ? null
        : {
            code: result.body.last_error["code"] as VectorStoreFileErrorCode,
            message: result.body.last_error["message"],
          },
  };
}

/** Create a vector store file by attaching a file to a vector store. */
export async function createVectorStoreFile(
  context: Client,
  vectorStoreId: string,
  fileId: string,
  options: CreateVectorStoreFileOptionalParams = { requestOptions: {} },
): Promise<VectorStoreFile> {
  const result = await _createVectorStoreFileSend(
    context,
    vectorStoreId,
    fileId,
    options,
  );
  return _createVectorStoreFileDeserialize(result);
}

export function _getVectorStoreFileSend(
  context: Client,
  vectorStoreId: string,
  fileId: string,
  options: GetVectorStoreFileOptionalParams = { requestOptions: {} },
): StreamableMethod<GetVectorStoreFile200Response> {
  return context
    .path(
      "/vector_stores/{vectorStoreId}/files/{fileId}",
      vectorStoreId,
      fileId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getVectorStoreFileDeserialize(
  result: GetVectorStoreFile200Response,
): Promise<VectorStoreFile> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    usageBytes: result.body["usage_bytes"],
    createdAt: new Date(result.body["created_at"]),
    vectorStoreId: result.body["vector_store_id"],
    status: result.body["status"] as VectorStoreFileStatus,
    lastError:
      result.body.last_error === null
        ? null
        : {
            code: result.body.last_error["code"] as VectorStoreFileErrorCode,
            message: result.body.last_error["message"],
          },
  };
}

/** Retrieves a vector store file. */
export async function getVectorStoreFile(
  context: Client,
  vectorStoreId: string,
  fileId: string,
  options: GetVectorStoreFileOptionalParams = { requestOptions: {} },
): Promise<VectorStoreFile> {
  const result = await _getVectorStoreFileSend(
    context,
    vectorStoreId,
    fileId,
    options,
  );
  return _getVectorStoreFileDeserialize(result);
}

export function _deleteVectorStoreFileSend(
  context: Client,
  vectorStoreId: string,
  fileId: string,
  options: DeleteVectorStoreFileOptionalParams = { requestOptions: {} },
): StreamableMethod<DeleteVectorStoreFile200Response> {
  return context
    .path(
      "/vector_stores/{vectorStoreId}/files/{fileId}",
      vectorStoreId,
      fileId,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteVectorStoreFileDeserialize(
  result: DeleteVectorStoreFile200Response,
): Promise<VectorStoreFileDeletionStatus> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    deleted: result.body["deleted"],
    object: result.body["object"],
  };
}

/**
 * Delete a vector store file. This will remove the file from the vector store but the file itself will not be deleted.
 * To delete the file, use the delete file endpoint.
 */
export async function deleteVectorStoreFile(
  context: Client,
  vectorStoreId: string,
  fileId: string,
  options: DeleteVectorStoreFileOptionalParams = { requestOptions: {} },
): Promise<VectorStoreFileDeletionStatus> {
  const result = await _deleteVectorStoreFileSend(
    context,
    vectorStoreId,
    fileId,
    options,
  );
  return _deleteVectorStoreFileDeserialize(result);
}

export function _createVectorStoreFileBatchSend(
  context: Client,
  vectorStoreId: string,
  fileIds: string[],
  options: CreateVectorStoreFileBatchOptionalParams = { requestOptions: {} },
): StreamableMethod<CreateVectorStoreFileBatch200Response> {
  return context
    .path("/vector_stores/{vectorStoreId}/file_batches", vectorStoreId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { file_ids: fileIds },
    });
}

export async function _createVectorStoreFileBatchDeserialize(
  result: CreateVectorStoreFileBatch200Response,
): Promise<VectorStoreFileBatch> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    vectorStoreId: result.body["vector_store_id"],
    status: result.body["status"] as VectorStoreFileBatchStatus,
    fileCounts: {
      inProgress: result.body.file_counts["in_progress"],
      completed: result.body.file_counts["completed"],
      failed: result.body.file_counts["failed"],
      cancelled: result.body.file_counts["cancelled"],
      total: result.body.file_counts["total"],
    },
  };
}

/** Create a vector store file batch. */
export async function createVectorStoreFileBatch(
  context: Client,
  vectorStoreId: string,
  fileIds: string[],
  options: CreateVectorStoreFileBatchOptionalParams = { requestOptions: {} },
): Promise<VectorStoreFileBatch> {
  const result = await _createVectorStoreFileBatchSend(
    context,
    vectorStoreId,
    fileIds,
    options,
  );
  return _createVectorStoreFileBatchDeserialize(result);
}

export function _getVectorStoreFileBatchSend(
  context: Client,
  vectorStoreId: string,
  batchId: string,
  options: GetVectorStoreFileBatchOptionalParams = { requestOptions: {} },
): StreamableMethod<GetVectorStoreFileBatch200Response> {
  return context
    .path(
      "/vector_stores/{vectorStoreId}/file_batches/{batchId}",
      vectorStoreId,
      batchId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getVectorStoreFileBatchDeserialize(
  result: GetVectorStoreFileBatch200Response,
): Promise<VectorStoreFileBatch> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    vectorStoreId: result.body["vector_store_id"],
    status: result.body["status"] as VectorStoreFileBatchStatus,
    fileCounts: {
      inProgress: result.body.file_counts["in_progress"],
      completed: result.body.file_counts["completed"],
      failed: result.body.file_counts["failed"],
      cancelled: result.body.file_counts["cancelled"],
      total: result.body.file_counts["total"],
    },
  };
}

/** Retrieve a vector store file batch. */
export async function getVectorStoreFileBatch(
  context: Client,
  vectorStoreId: string,
  batchId: string,
  options: GetVectorStoreFileBatchOptionalParams = { requestOptions: {} },
): Promise<VectorStoreFileBatch> {
  const result = await _getVectorStoreFileBatchSend(
    context,
    vectorStoreId,
    batchId,
    options,
  );
  return _getVectorStoreFileBatchDeserialize(result);
}

export function _cancelVectorStoreFileBatchSend(
  context: Client,
  vectorStoreId: string,
  batchId: string,
  options: CancelVectorStoreFileBatchOptionalParams = { requestOptions: {} },
): StreamableMethod<CancelVectorStoreFileBatch200Response> {
  return context
    .path(
      "/vector_stores/{vectorStoreId}/file_batches/{batchId}/cancel",
      vectorStoreId,
      batchId,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _cancelVectorStoreFileBatchDeserialize(
  result: CancelVectorStoreFileBatch200Response,
): Promise<VectorStoreFileBatch> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    vectorStoreId: result.body["vector_store_id"],
    status: result.body["status"] as VectorStoreFileBatchStatus,
    fileCounts: {
      inProgress: result.body.file_counts["in_progress"],
      completed: result.body.file_counts["completed"],
      failed: result.body.file_counts["failed"],
      cancelled: result.body.file_counts["cancelled"],
      total: result.body.file_counts["total"],
    },
  };
}

/** Cancel a vector store file batch. This attempts to cancel the processing of files in this batch as soon as possible. */
export async function cancelVectorStoreFileBatch(
  context: Client,
  vectorStoreId: string,
  batchId: string,
  options: CancelVectorStoreFileBatchOptionalParams = { requestOptions: {} },
): Promise<VectorStoreFileBatch> {
  const result = await _cancelVectorStoreFileBatchSend(
    context,
    vectorStoreId,
    batchId,
    options,
  );
  return _cancelVectorStoreFileBatchDeserialize(result);
}

export function _listVectorStoreFileBatchFilesSend(
  context: Client,
  vectorStoreId: string,
  batchId: string,
  options: ListVectorStoreFileBatchFilesOptionalParams = { requestOptions: {} },
): StreamableMethod<ListVectorStoreFileBatchFiles200Response> {
  return context
    .path(
      "/vector_stores/{vectorStoreId}/file_batches/{batchId}/files",
      vectorStoreId,
      batchId,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        filter: options?.filter,
        limit: options?.limit,
        order: options?.order,
        after: options?.after,
        before: options?.before,
      },
    });
}

export async function _listVectorStoreFileBatchFilesDeserialize(
  result: ListVectorStoreFileBatchFiles200Response,
): Promise<OpenAIPageableListOfVectorStoreFile> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    object: result.body["object"],
    data: result.body["data"].map((p) => ({
      id: p["id"],
      object: p["object"],
      usageBytes: p["usage_bytes"],
      createdAt: new Date(p["created_at"]),
      vectorStoreId: p["vector_store_id"],
      status: p["status"] as VectorStoreFileStatus,
      lastError:
        p.last_error === null
          ? null
          : {
              code: p.last_error["code"] as VectorStoreFileErrorCode,
              message: p.last_error["message"],
            },
    })),
    firstId: result.body["first_id"],
    lastId: result.body["last_id"],
    hasMore: result.body["has_more"],
  };
}

/** Returns a list of vector store files in a batch. */
export async function listVectorStoreFileBatchFiles(
  context: Client,
  vectorStoreId: string,
  batchId: string,
  options: ListVectorStoreFileBatchFilesOptionalParams = { requestOptions: {} },
): Promise<OpenAIPageableListOfVectorStoreFile> {
  const result = await _listVectorStoreFileBatchFilesSend(
    context,
    vectorStoreId,
    batchId,
    options,
  );
  return _listVectorStoreFileBatchFilesDeserialize(result);
}
