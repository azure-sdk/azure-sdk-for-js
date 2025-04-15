// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type {
  ConnectionOutput,
  PagedConnectionOutput,
  EvaluationOutput,
  PagedEvaluationOutput,
  PagedDatasetVersionOutput,
  DatasetVersionOutput,
  PendingUploadResponseOutput,
  AssetCredentialResponseOutput,
  PagedIndexOutput,
  IndexOutput,
  DeploymentOutput,
  PagedDeploymentOutput,
  RedTeamOutput,
  PagedRedTeamOutput,
} from "./outputModels.js";

export interface ConnectionsGet200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ConnectionsGet200Response extends HttpResponse {
  status: "200";
  body: ConnectionOutput;
  headers: RawHttpHeaders & ConnectionsGet200Headers;
}

export interface ConnectionsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConnectionsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConnectionsGetDefaultHeaders;
}

export interface ConnectionsGetWithCredentials200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ConnectionsGetWithCredentials200Response extends HttpResponse {
  status: "200";
  body: ConnectionOutput;
  headers: RawHttpHeaders & ConnectionsGetWithCredentials200Headers;
}

export interface ConnectionsGetWithCredentialsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConnectionsGetWithCredentialsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConnectionsGetWithCredentialsDefaultHeaders;
}

export interface ConnectionsList200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ConnectionsList200Response extends HttpResponse {
  status: "200";
  body: PagedConnectionOutput;
  headers: RawHttpHeaders & ConnectionsList200Headers;
}

export interface ConnectionsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConnectionsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConnectionsListDefaultHeaders;
}

export interface EvaluationsGet200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface EvaluationsGet200Response extends HttpResponse {
  status: "200";
  body: EvaluationOutput;
  headers: RawHttpHeaders & EvaluationsGet200Headers;
}

export interface EvaluationsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationsGetDefaultHeaders;
}

export interface EvaluationsList200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface EvaluationsList200Response extends HttpResponse {
  status: "200";
  body: PagedEvaluationOutput;
  headers: RawHttpHeaders & EvaluationsList200Headers;
}

export interface EvaluationsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationsListDefaultHeaders;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface EvaluationsCreateRun201Response extends HttpResponse {
  status: "201";
  body: EvaluationOutput;
}

export interface EvaluationsCreateRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationsCreateRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationsCreateRunDefaultHeaders;
}

/** The request has succeeded. */
export interface DatasetsListVersions200Response extends HttpResponse {
  status: "200";
  body: PagedDatasetVersionOutput;
}

export interface DatasetsListVersionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsListVersionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsListVersionsDefaultHeaders;
}

/** The request has succeeded. */
export interface DatasetsListLatest200Response extends HttpResponse {
  status: "200";
  body: PagedDatasetVersionOutput;
}

export interface DatasetsListLatestDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsListLatestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsListLatestDefaultHeaders;
}

/** The request has succeeded. */
export interface DatasetsGetVersion200Response extends HttpResponse {
  status: "200";
  body: DatasetVersionOutput;
}

export interface DatasetsGetVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsGetVersionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsGetVersionDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DatasetsDeleteVersion204Response extends HttpResponse {
  status: "204";
}

export interface DatasetsDeleteVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsDeleteVersionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsDeleteVersionDefaultHeaders;
}

/** The request has succeeded. */
export interface DatasetsCreateVersion200Response extends HttpResponse {
  status: "200";
  body: DatasetVersionOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface DatasetsCreateVersion201Response extends HttpResponse {
  status: "201";
  body: DatasetVersionOutput;
}

export interface DatasetsCreateVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsCreateVersionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsCreateVersionDefaultHeaders;
}

/** The request has succeeded. */
export interface DatasetsStartPendingUploadVersion200Response
  extends HttpResponse {
  status: "200";
  body: PendingUploadResponseOutput;
}

export interface DatasetsStartPendingUploadVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsStartPendingUploadVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsStartPendingUploadVersionDefaultHeaders;
}

/** The request has succeeded. */
export interface DatasetsGetCredentials200Response extends HttpResponse {
  status: "200";
  body: AssetCredentialResponseOutput;
}

export interface DatasetsGetCredentialsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsGetCredentialsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsGetCredentialsDefaultHeaders;
}

/** The request has succeeded. */
export interface IndexesListVersions200Response extends HttpResponse {
  status: "200";
  body: PagedIndexOutput;
}

export interface IndexesListVersionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesListVersionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesListVersionsDefaultHeaders;
}

/** The request has succeeded. */
export interface IndexesListLatest200Response extends HttpResponse {
  status: "200";
  body: PagedIndexOutput;
}

export interface IndexesListLatestDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesListLatestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesListLatestDefaultHeaders;
}

/** The request has succeeded. */
export interface IndexesGetVersion200Response extends HttpResponse {
  status: "200";
  body: IndexOutput;
}

export interface IndexesGetVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesGetVersionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesGetVersionDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IndexesDeleteVersion204Response extends HttpResponse {
  status: "204";
}

export interface IndexesDeleteVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesDeleteVersionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesDeleteVersionDefaultHeaders;
}

/** The request has succeeded. */
export interface IndexesCreateVersion200Response extends HttpResponse {
  status: "200";
  body: IndexOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface IndexesCreateVersion201Response extends HttpResponse {
  status: "201";
  body: IndexOutput;
}

export interface IndexesCreateVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesCreateVersionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesCreateVersionDefaultHeaders;
}

export interface DeploymentsGet200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface DeploymentsGet200Response extends HttpResponse {
  status: "200";
  body: DeploymentOutput;
  headers: RawHttpHeaders & DeploymentsGet200Headers;
}

export interface DeploymentsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeploymentsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeploymentsGetDefaultHeaders;
}

export interface DeploymentsList200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface DeploymentsList200Response extends HttpResponse {
  status: "200";
  body: PagedDeploymentOutput;
  headers: RawHttpHeaders & DeploymentsList200Headers;
}

export interface DeploymentsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeploymentsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeploymentsListDefaultHeaders;
}

export interface RedTeamsGet200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface RedTeamsGet200Response extends HttpResponse {
  status: "200";
  body: RedTeamOutput;
  headers: RawHttpHeaders & RedTeamsGet200Headers;
}

export interface RedTeamsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RedTeamsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RedTeamsGetDefaultHeaders;
}

export interface RedTeamsList200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface RedTeamsList200Response extends HttpResponse {
  status: "200";
  body: PagedRedTeamOutput;
  headers: RawHttpHeaders & RedTeamsList200Headers;
}

export interface RedTeamsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RedTeamsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RedTeamsListDefaultHeaders;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface RedTeamsCreateRun201Response extends HttpResponse {
  status: "201";
  body: RedTeamOutput;
}

export interface RedTeamsCreateRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RedTeamsCreateRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RedTeamsCreateRunDefaultHeaders;
}
