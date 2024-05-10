// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  AssistantOutput,
  OpenAIPageableListOfOutput,
  AssistantDeletionStatusOutput,
  AssistantThreadOutput,
  ThreadDeletionStatusOutput,
  ThreadMessageOutput,
  MessageFileOutput,
  ThreadRunOutput,
  RunStepOutput,
  FileListResponseOutput,
  OpenAIFileOutput,
  FileDeletionStatusOutput,
  VectorStoreOutput,
  VectorStoreDeletionStatusOutput,
  VectorStoreFileOutput,
  VectorStoreFileDeletionStatusOutput,
  VectorStoreFileBatchOutput,
} from "./outputModels.js";

/** The new assistant instance. */
export interface CreateAssistant200Response extends HttpResponse {
  status: "200";
  body: AssistantOutput;
}

/** The requested list of assistants. */
export interface ListAssistants200Response extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfOutput;
}

/** The requested assistant instance. */
export interface GetAssistant200Response extends HttpResponse {
  status: "200";
  body: AssistantOutput;
}

/** The updated assistant instance. */
export interface UpdateAssistant200Response extends HttpResponse {
  status: "200";
  body: AssistantOutput;
}

/** Status information about the requested deletion operation. */
export interface DeleteAssistant200Response extends HttpResponse {
  status: "200";
  body: AssistantDeletionStatusOutput;
}

/** Information about the newly created thread. */
export interface CreateThread200Response extends HttpResponse {
  status: "200";
  body: AssistantThreadOutput;
}

/** Information about the requested thread. */
export interface GetThread200Response extends HttpResponse {
  status: "200";
  body: AssistantThreadOutput;
}

/** Information about the modified thread. */
export interface UpdateThread200Response extends HttpResponse {
  status: "200";
  body: AssistantThreadOutput;
}

/** Status information about the requested thread deletion operation. */
export interface DeleteThread200Response extends HttpResponse {
  status: "200";
  body: ThreadDeletionStatusOutput;
}

/** A representation of the new message. */
export interface CreateMessage200Response extends HttpResponse {
  status: "200";
  body: ThreadMessageOutput;
}

/** The requested list of messages. */
export interface ListMessages200Response extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfOutput;
}

/** A representation of the requested message. */
export interface GetMessage200Response extends HttpResponse {
  status: "200";
  body: ThreadMessageOutput;
}

/** A representation of the modified message. */
export interface UpdateMessage200Response extends HttpResponse {
  status: "200";
  body: ThreadMessageOutput;
}

/** The requested list of files associated with the specified message. */
export interface ListMessageFiles200Response extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfOutput;
}

/** The requested file information. */
export interface GetMessageFile200Response extends HttpResponse {
  status: "200";
  body: MessageFileOutput;
}

/** Information about the new thread run. */
export interface CreateRun200Response extends HttpResponse {
  status: "200";
  body: ThreadRunOutput;
}

/** The requested list of thread runs. */
export interface ListRuns200Response extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfOutput;
}

/** The requested information about the specified thread run. */
export interface GetRun200Response extends HttpResponse {
  status: "200";
  body: ThreadRunOutput;
}

/** Information about the modified run. */
export interface UpdateRun200Response extends HttpResponse {
  status: "200";
  body: ThreadRunOutput;
}

/** Updated information about the run. */
export interface SubmitToolOutputsToRun200Response extends HttpResponse {
  status: "200";
  body: ThreadRunOutput;
}

/** Updated information about the cancelled run. */
export interface CancelRun200Response extends HttpResponse {
  status: "200";
  body: ThreadRunOutput;
}

/** Information about the newly created thread. */
export interface CreateThreadAndRun200Response extends HttpResponse {
  status: "200";
  body: ThreadRunOutput;
}

/** Information about the requested run step. */
export interface GetRunStep200Response extends HttpResponse {
  status: "200";
  body: RunStepOutput;
}

/** The requested list of run steps. */
export interface ListRunSteps200Response extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfOutput;
}

/** The requested list of files. */
export interface ListFiles200Response extends HttpResponse {
  status: "200";
  body: FileListResponseOutput;
}

/** A representation of the uploaded file. */
export interface UploadFile200Response extends HttpResponse {
  status: "200";
  body: OpenAIFileOutput;
}

/** The request has succeeded. */
export interface DeleteFile200Response extends HttpResponse {
  status: "200";
  body: FileDeletionStatusOutput;
}

/** The request has succeeded. */
export interface GetFile200Response extends HttpResponse {
  status: "200";
  body: OpenAIFileOutput;
}

/** The request has succeeded. */
export interface GetFileContent200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface ListVectorStores200Response extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfOutput;
}

/** The request has succeeded. */
export interface CreateVectorStore200Response extends HttpResponse {
  status: "200";
  body: VectorStoreOutput;
}

/** The request has succeeded. */
export interface GetVectorStore200Response extends HttpResponse {
  status: "200";
  body: VectorStoreOutput;
}

/** The request has succeeded. */
export interface ModifyVectorStore200Response extends HttpResponse {
  status: "200";
  body: VectorStoreOutput;
}

/** The request has succeeded. */
export interface DeleteVectorStore200Response extends HttpResponse {
  status: "200";
  body: VectorStoreDeletionStatusOutput;
}

/** The request has succeeded. */
export interface ListVectorStoreFiles200Response extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfOutput;
}

/** The request has succeeded. */
export interface CreateVectorStoreFile200Response extends HttpResponse {
  status: "200";
  body: VectorStoreFileOutput;
}

/** The request has succeeded. */
export interface GetVectoreStoreFile200Response extends HttpResponse {
  status: "200";
  body: VectorStoreFileOutput;
}

/** The request has succeeded. */
export interface DeleteVectoreStoreFile200Response extends HttpResponse {
  status: "200";
  body: VectorStoreFileDeletionStatusOutput;
}

/** The request has succeeded. */
export interface CreateVectorStoreFileBatch200Response extends HttpResponse {
  status: "200";
  body: VectorStoreFileBatchOutput;
}

/** The request has succeeded. */
export interface GetVectorStoreFileBatch200Response extends HttpResponse {
  status: "200";
  body: VectorStoreFileBatchOutput;
}

/** The request has succeeded. */
export interface CancelVectorStoreFileBatch200Response extends HttpResponse {
  status: "200";
  body: VectorStoreFileBatchOutput;
}

/** The request has succeeded. */
export interface ListVectorStoreFileBatchFiles200Response extends HttpResponse {
  status: "200";
  body: OpenAIPageableListOfOutput;
}
