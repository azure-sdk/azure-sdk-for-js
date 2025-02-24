// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type {
  GetWorkspaceResponseOutput,
  ListConnectionsResponseOutput,
  GetConnectionResponseOutput,
  GetAppInsightsResponseOutput,
  EvaluationOutput,
  PagedEvaluationOutput,
  EvaluationScheduleOutput,
  PagedEvaluationScheduleOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface GetWorkspace200Response extends HttpResponse {
  status: "200";
  body: GetWorkspaceResponseOutput;
}

export interface GetWorkspaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetWorkspaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetWorkspaceDefaultHeaders;
}

/** The request has succeeded. */
export interface ListConnections200Response extends HttpResponse {
  status: "200";
  body: ListConnectionsResponseOutput;
}

export interface ListConnectionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListConnectionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListConnectionsDefaultHeaders;
}

/** The request has succeeded. */
export interface GetConnection200Response extends HttpResponse {
  status: "200";
  body: GetConnectionResponseOutput;
}

export interface GetConnectionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetConnectionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetConnectionDefaultHeaders;
}

/** The request has succeeded. */
export interface GetConnectionWithSecrets200Response extends HttpResponse {
  status: "200";
  body: GetConnectionResponseOutput;
}

export interface GetConnectionWithSecretsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetConnectionWithSecretsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetConnectionWithSecretsDefaultHeaders;
}

/** The request has succeeded. */
export interface GetAppInsights200Response extends HttpResponse {
  status: "200";
  body: GetAppInsightsResponseOutput;
}

export interface GetAppInsightsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetAppInsightsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetAppInsightsDefaultHeaders;
}

export interface Get200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: EvaluationOutput;
  headers: RawHttpHeaders & Get200Headers;
}

export interface GetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetDefaultHeaders;
}

/** Response model for create evaluation */
export interface Create201Response extends HttpResponse {
  status: "201";
  body: EvaluationOutput;
}

export interface List200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface List200Response extends HttpResponse {
  status: "200";
  body: PagedEvaluationOutput;
  headers: RawHttpHeaders & List200Headers;
}

export interface ListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListDefaultHeaders;
}

export interface Update200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface Update200Response extends HttpResponse {
  status: "200";
  body: EvaluationOutput;
  headers: RawHttpHeaders & Update200Headers;
}

export interface UpdateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface UpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & UpdateDefaultHeaders;
}

export interface GetSchedule200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface GetSchedule200Response extends HttpResponse {
  status: "200";
  body: EvaluationScheduleOutput;
  headers: RawHttpHeaders & GetSchedule200Headers;
}

export interface GetScheduleDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetScheduleDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetScheduleDefaultHeaders;
}

export interface CreateOrReplaceSchedule200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface CreateOrReplaceSchedule200Response extends HttpResponse {
  status: "200";
  body: EvaluationScheduleOutput;
  headers: RawHttpHeaders & CreateOrReplaceSchedule200Headers;
}

export interface CreateOrReplaceSchedule201Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateOrReplaceSchedule201Response extends HttpResponse {
  status: "201";
  body: EvaluationScheduleOutput;
  headers: RawHttpHeaders & CreateOrReplaceSchedule201Headers;
}

export interface CreateOrReplaceScheduleDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateOrReplaceScheduleDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateOrReplaceScheduleDefaultHeaders;
}

export interface ListSchedule200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ListSchedule200Response extends HttpResponse {
  status: "200";
  body: PagedEvaluationScheduleOutput;
  headers: RawHttpHeaders & ListSchedule200Headers;
}

export interface ListScheduleDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListScheduleDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListScheduleDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DisableSchedule204Response extends HttpResponse {
  status: "204";
}

export interface DisableScheduleDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DisableScheduleDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DisableScheduleDefaultHeaders;
}
