// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { SessionCodeExecutionRequest } from "./models.js";

export interface ExecuteCodeBodyParam {
  /** The request to execute code. */
  body: SessionCodeExecutionRequest;
}

export interface ExecuteCodeQueryParamProperties {
  /** The identifier of the session. */
  identifier: string;
}

export interface ExecuteCodeQueryParam {
  queryParameters: ExecuteCodeQueryParamProperties;
}

export type ExecuteCodeParameters = ExecuteCodeQueryParam &
  ExecuteCodeBodyParam &
  RequestParameters;

export interface GetFileMetadataQueryParamProperties {
  /** The identifier of the session. */
  identifier: string;
}

export interface GetFileMetadataQueryParam {
  queryParameters: GetFileMetadataQueryParamProperties;
}

export type GetFileMetadataParameters = GetFileMetadataQueryParam &
  RequestParameters;

export interface DeleteFileQueryParamProperties {
  /** The identifier of the session. */
  identifier: string;
}

export interface DeleteFileQueryParam {
  queryParameters: DeleteFileQueryParamProperties;
}

export type DeleteFileParameters = DeleteFileQueryParam & RequestParameters;

export interface GetFileContentQueryParamProperties {
  /** The identifier of the session. */
  identifier: string;
}

export interface GetFileContentQueryParam {
  queryParameters: GetFileContentQueryParamProperties;
}

export type GetFileContentParameters = GetFileContentQueryParam &
  RequestParameters;

export interface UploadFileBodyParam {
  body?:
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
  /** The identifier of the session. */
  identifier: string;
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
