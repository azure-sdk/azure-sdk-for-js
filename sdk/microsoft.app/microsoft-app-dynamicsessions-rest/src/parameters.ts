// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { SessionCodeExecutionRequest } from "./models.js";

export interface ExecuteCodeHeaders {
  /** The id of this execution operation. */
  "operation-id"?: string;
}

export interface ExecuteCodeBodyParam {
  /** The request to execute code. */
  body: SessionCodeExecutionRequest;
}

export interface ExecuteCodeQueryParamProperties {
  /** The user-assigned identifier of the session. */
  identifier: string;
}

export interface ExecuteCodeQueryParam {
  queryParameters: ExecuteCodeQueryParamProperties;
}

export interface ExecuteCodeHeaderParam {
  headers?: RawHttpHeadersInput & ExecuteCodeHeaders;
}

export type ExecuteCodeParameters = ExecuteCodeQueryParam &
  ExecuteCodeHeaderParam &
  ExecuteCodeBodyParam &
  RequestParameters;

export interface GetResultQueryParamProperties {
  /** The user-assigned identifier of the session. */
  identifier: string;
}

export interface GetResultQueryParam {
  queryParameters: GetResultQueryParamProperties;
}

export type GetResultParameters = GetResultQueryParam & RequestParameters;

export interface ListFilesMetadataQueryParamProperties {
  /** The user-assigned identifier of the session. */
  identifier: string;
  /** The path of the file after uploaded. */
  path?: string;
}

export interface ListFilesMetadataQueryParam {
  queryParameters: ListFilesMetadataQueryParamProperties;
}

export type ListFilesMetadataParameters = ListFilesMetadataQueryParam &
  RequestParameters;

export interface GetFileMetadataQueryParamProperties {
  /** The user-assigned identifier of the session. */
  identifier: string;
  /** The path of the file after uploaded. */
  path?: string;
}

export interface GetFileMetadataQueryParam {
  queryParameters: GetFileMetadataQueryParamProperties;
}

export type GetFileMetadataParameters = GetFileMetadataQueryParam &
  RequestParameters;

export interface DeleteFileQueryParamProperties {
  /** The user-assigned identifier of the session. */
  identifier: string;
  /** The path of the file after uploaded. */
  path?: string;
}

export interface DeleteFileQueryParam {
  queryParameters: DeleteFileQueryParamProperties;
}

export type DeleteFileParameters = DeleteFileQueryParam & RequestParameters;

export interface UploadFileBodyParam {
  body:
    | FormData
    | Array<{
        name: "file";
        body:
          | string
          | Uint8Array
          | ReadableStream<Uint8Array>
          | NodeJS.ReadableStream
          | File;
        filename?: string;
        contentType?: string;
      }>;
}

export interface UploadFileQueryParamProperties {
  /** The user-assigned identifier of the session. */
  identifier: string;
  /** The path of the file after uploaded. */
  path?: string;
}

export interface UploadFileQueryParam {
  queryParameters: UploadFileQueryParamProperties;
}

export interface UploadFileMediaTypesParam {
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType: "multipart/form-data";
}

export type UploadFileParameters = UploadFileQueryParam &
  UploadFileMediaTypesParam &
  UploadFileBodyParam &
  RequestParameters;

export interface GetFileContentQueryParamProperties {
  /** The user-assigned identifier of the session. */
  identifier: string;
  /** The path of the file after uploaded. */
  path?: string;
}

export interface GetFileContentQueryParam {
  queryParameters: GetFileContentQueryParamProperties;
}

export type GetFileContentParameters = GetFileContentQueryParam &
  RequestParameters;
