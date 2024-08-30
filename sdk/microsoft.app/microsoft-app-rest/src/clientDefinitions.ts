// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ExecuteCodeParameters,
  GetFileMetadataParameters,
  DeleteFileParameters,
  GetFileContentParameters,
  UploadFileParameters,
} from "./parameters.js";
import {
  ExecuteCode200Response,
  ExecuteCodeDefaultResponse,
  GetFileMetadata200Response,
  GetFileMetadataDefaultResponse,
  DeleteFile204Response,
  DeleteFileDefaultResponse,
  GetFileContent200Response,
  GetFileContentDefaultResponse,
  UploadFile200Response,
  UploadFileDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ExecuteCode {
  /** Execute code in a session. */
  post(
    options: ExecuteCodeParameters,
  ): StreamableMethod<ExecuteCode200Response | ExecuteCodeDefaultResponse>;
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

export interface UploadFile {
  /** Upload a file to a session. */
  post(
    options: UploadFileParameters,
  ): StreamableMethod<UploadFile200Response | UploadFileDefaultResponse>;
}

export interface Routes {
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/sessionPools/\{sessionPoolName\}/code/execute' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/sessionPools/{sessionPoolName}/code/execute",
    subscriptionId: string,
    resourceGroupName: string,
    sessionPoolName: string,
  ): ExecuteCode;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/sessionPools/\{sessionPoolName\}/files/\{fileName\}' has methods for the following verbs: get, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/sessionPools/{sessionPoolName}/files/{fileName}",
    subscriptionId: string,
    resourceGroupName: string,
    sessionPoolName: string,
    fileName: string,
  ): GetFileMetadata;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/sessionPools/\{sessionPoolName\}/files/content/\{filename\}' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/sessionPools/{sessionPoolName}/files/content/{filename}",
    subscriptionId: string,
    resourceGroupName: string,
    sessionPoolName: string,
    filename: string,
  ): GetFileContent;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/sessionPools/\{sessionPoolName\}/files/\{fileName\}:uploadFile' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/sessionPools/{sessionPoolName}/files/{fileName}:uploadFile",
    subscriptionId: string,
    resourceGroupName: string,
    sessionPoolName: string,
    fileName: string,
  ): UploadFile;
}

export type AppClient = Client & {
  path: Routes;
};
