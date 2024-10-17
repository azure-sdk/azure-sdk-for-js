// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ExecuteCodeParameters,
  GetResultParameters,
  ListFilesMetadataParameters,
  UploadFileParameters,
  GetFileMetadataParameters,
  DeleteFileParameters,
  GetFileContentParameters,
} from "./parameters.js";
import {
  ExecuteCode202Response,
  ExecuteCodeDefaultResponse,
  GetResult200Response,
  GetResultDefaultResponse,
  ListFilesMetadata200Response,
  ListFilesMetadataDefaultResponse,
  UploadFile200Response,
  UploadFileDefaultResponse,
  GetFileMetadata200Response,
  GetFileMetadataDefaultResponse,
  DeleteFile204Response,
  DeleteFileDefaultResponse,
  GetFileContent200Response,
  GetFileContentDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ExecuteCode {
  /** Execute code in a session. */
  post(
    options: ExecuteCodeParameters,
  ): StreamableMethod<ExecuteCode202Response | ExecuteCodeDefaultResponse>;
}

export interface GetResult {
  /** Get the code execution result. */
  get(
    options: GetResultParameters,
  ): StreamableMethod<GetResult200Response | GetResultDefaultResponse>;
}

export interface ListFilesMetadata {
  /** List the file resources. */
  get(
    options: ListFilesMetadataParameters,
  ): StreamableMethod<
    ListFilesMetadata200Response | ListFilesMetadataDefaultResponse
  >;
  /** Upload a file to a session. */
  post(
    options: UploadFileParameters,
  ): StreamableMethod<UploadFile200Response | UploadFileDefaultResponse>;
}

export interface GetFileMetadata {
  /** Get the file resource. */
  get(
    options: GetFileMetadataParameters,
  ): StreamableMethod<
    GetFileMetadata200Response | GetFileMetadataDefaultResponse
  >;
  /** Delete the file. */
  delete(
    options: DeleteFileParameters,
  ): StreamableMethod<DeleteFile204Response | DeleteFileDefaultResponse>;
}

export interface GetFileContent {
  /** Get the content of the file. */
  get(
    options: GetFileContentParameters,
  ): StreamableMethod<
    GetFileContent200Response | GetFileContentDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/executions' has methods for the following verbs: post */
  (path: "/executions"): ExecuteCode;
  /** Resource for '/executions/\{executionId\}' has methods for the following verbs: get */
  (path: "/executions/{executionId}", executionId: string): GetResult;
  /** Resource for '/files' has methods for the following verbs: get, post */
  (path: "/files"): ListFilesMetadata;
  /** Resource for '/files/\{name\}' has methods for the following verbs: get, delete */
  (path: "/files/{name}", name: string): GetFileMetadata;
  /** Resource for '/files/\{name\}/content' has methods for the following verbs: get */
  (path: "/files/{name}/content", name: string): GetFileContent;
}

export type DynamicSessionsClient = Client & {
  path: Routes;
};
