// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type { SessionCodeExecutionRequest } from "./models.js";

export interface CodeExecutionExecuteHeaders {
  /** The id of this execution operation. */
  "operation-id"?: string;
}

export interface CodeExecutionExecuteBodyParam {
  /** The request to execute code. */
  body: SessionCodeExecutionRequest;
}

export interface CodeExecutionExecuteQueryParamProperties {
  /** The user-assigned identifier of the session. */
  identifier: string;
}

export interface CodeExecutionExecuteQueryParam {
  queryParameters: CodeExecutionExecuteQueryParamProperties;
}

export interface CodeExecutionExecuteHeaderParam {
  headers?: RawHttpHeadersInput & CodeExecutionExecuteHeaders;
}

export type CodeExecutionExecuteParameters = CodeExecutionExecuteQueryParam &
  CodeExecutionExecuteHeaderParam &
  CodeExecutionExecuteBodyParam &
  RequestParameters;

export interface CodeExecutionGetQueryParamProperties {
  /** The user-assigned identifier of the session. */
  identifier: string;
}

export interface CodeExecutionGetQueryParam {
  queryParameters: CodeExecutionGetQueryParamProperties;
}

export type CodeExecutionGetParameters = CodeExecutionGetQueryParam & RequestParameters;

export interface SessionResourceFilesListQueryParamProperties {
  /** The user-assigned identifier of the session. */
  identifier: string;
  /** The path of the file after uploaded. */
  path?: string;
}

export interface SessionResourceFilesListQueryParam {
  queryParameters: SessionResourceFilesListQueryParamProperties;
}

export type SessionResourceFilesListParameters = SessionResourceFilesListQueryParam &
  RequestParameters;

export interface SessionResourceFilesGetQueryParamProperties {
  /** The user-assigned identifier of the session. */
  identifier: string;
  /** The path of the file after uploaded. */
  path?: string;
}

export interface SessionResourceFilesGetQueryParam {
  queryParameters: SessionResourceFilesGetQueryParamProperties;
}

export type SessionResourceFilesGetParameters = SessionResourceFilesGetQueryParam &
  RequestParameters;

export interface SessionResourceFilesDeleteQueryParamProperties {
  /** The user-assigned identifier of the session. */
  identifier: string;
  /** The path of the file after uploaded. */
  path?: string;
}

export interface SessionResourceFilesDeleteQueryParam {
  queryParameters: SessionResourceFilesDeleteQueryParamProperties;
}

export type SessionResourceFilesDeleteParameters = SessionResourceFilesDeleteQueryParam &
  RequestParameters;

export interface SessionResourceFilesUploadBodyParam {
  /**
   * Multipart body
   *
   * Value may contain any sequence of octets
   */
  body:
    | FormData
    | Array<{
        name: "file";
        body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File;
        filename?: string;
        contentType?: string;
      }>;
}

export interface SessionResourceFilesUploadQueryParamProperties {
  /** The user-assigned identifier of the session. */
  identifier: string;
  /** The path of the file after uploaded. */
  path?: string;
}

export interface SessionResourceFilesUploadQueryParam {
  queryParameters: SessionResourceFilesUploadQueryParamProperties;
}

export interface SessionResourceFilesUploadMediaTypesParam {
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType: "multipart/form-data";
}

export type SessionResourceFilesUploadParameters = SessionResourceFilesUploadQueryParam &
  SessionResourceFilesUploadMediaTypesParam &
  SessionResourceFilesUploadBodyParam &
  RequestParameters;

export interface SessionResourceFilesGetContentQueryParamProperties {
  /** The user-assigned identifier of the session. */
  identifier: string;
  /** The path of the file after uploaded. */
  path?: string;
}

export interface SessionResourceFilesGetContentQueryParam {
  queryParameters: SessionResourceFilesGetContentQueryParamProperties;
}

export type SessionResourceFilesGetContentParameters = SessionResourceFilesGetContentQueryParam &
  RequestParameters;

export interface SessionManagementGetQueryParamProperties {
  /** The user-assigned identifier of the session. */
  identifier: string;
}

export interface SessionManagementGetQueryParam {
  queryParameters: SessionManagementGetQueryParamProperties;
}

export type SessionManagementGetParameters = SessionManagementGetQueryParam & RequestParameters;

export interface SessionManagementDeleteQueryParamProperties {
  /** The user-assigned identifier of the session. */
  identifier: string;
}

export interface SessionManagementDeleteQueryParam {
  queryParameters: SessionManagementDeleteQueryParamProperties;
}

export type SessionManagementDeleteParameters = SessionManagementDeleteQueryParam &
  RequestParameters;

export interface ListSessionsGetQueryParamProperties {
  /** The offset for pagination purpose. */
  skip?: number;
}

export interface ListSessionsGetQueryParam {
  queryParameters?: ListSessionsGetQueryParamProperties;
}

export type ListSessionsGetParameters = ListSessionsGetQueryParam & RequestParameters;
export type SessionPoolMetadataGetParameters = RequestParameters;
