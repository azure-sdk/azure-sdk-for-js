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
  RepeatabilityResultOutput,
  PendingUploadResponseOutput,
  PagedIndexOutput,
  IndexOutput,
  DeploymentOutput,
  PagedDeploymentOutput,
  PagedEvaluationResultOutput,
  EvaluationResultOutput,
  RedTeamOutput,
  PagedRedTeamOutput,
} from "./outputModels.js";

export interface ConnectionsConnectionsGet200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ConnectionsConnectionsGet200Response extends HttpResponse {
  status: "200";
  body: ConnectionOutput;
  headers: RawHttpHeaders & ConnectionsConnectionsGet200Headers;
}

export interface ConnectionsConnectionsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConnectionsConnectionsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConnectionsConnectionsGetDefaultHeaders;
}

export interface ConnectionsConnectionsList200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ConnectionsConnectionsList200Response extends HttpResponse {
  status: "200";
  body: PagedConnectionOutput;
  headers: RawHttpHeaders & ConnectionsConnectionsList200Headers;
}

export interface ConnectionsConnectionsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConnectionsConnectionsListDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConnectionsConnectionsListDefaultHeaders;
}

export interface EvaluationsEvaluationsGet200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface EvaluationsEvaluationsGet200Response extends HttpResponse {
  status: "200";
  body: EvaluationOutput;
  headers: RawHttpHeaders & EvaluationsEvaluationsGet200Headers;
}

export interface EvaluationsEvaluationsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationsEvaluationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationsEvaluationsGetDefaultHeaders;
}

export interface EvaluationsEvaluationsList200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface EvaluationsEvaluationsList200Response extends HttpResponse {
  status: "200";
  body: PagedEvaluationOutput;
  headers: RawHttpHeaders & EvaluationsEvaluationsList200Headers;
}

export interface EvaluationsEvaluationsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationsEvaluationsListDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationsEvaluationsListDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationsEvaluationsCreateRun200Response
  extends HttpResponse {
  status: "200";
  body: EvaluationOutput;
}

export interface EvaluationsEvaluationsCreateRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationsEvaluationsCreateRunDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationsEvaluationsCreateRunDefaultHeaders;
}

/** The request has succeeded. */
export interface DatasetsDatasetsListVersions200Response extends HttpResponse {
  status: "200";
  body: PagedDatasetVersionOutput;
}

export interface DatasetsDatasetsListVersionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsDatasetsListVersionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsDatasetsListVersionsDefaultHeaders;
}

/** The request has succeeded. */
export interface DatasetsDatasetsListLatest200Response extends HttpResponse {
  status: "200";
  body: PagedDatasetVersionOutput;
}

export interface DatasetsDatasetsListLatestDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsDatasetsListLatestDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsDatasetsListLatestDefaultHeaders;
}

/** The request has succeeded. */
export interface DatasetsDatasetsGetVersion200Response extends HttpResponse {
  status: "200";
  body: DatasetVersionOutput;
}

export interface DatasetsDatasetsGetVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsDatasetsGetVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsDatasetsGetVersionDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DatasetsDatasetsDeleteVersion204Response extends HttpResponse {
  status: "204";
}

export interface DatasetsDatasetsDeleteVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsDatasetsDeleteVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsDatasetsDeleteVersionDefaultHeaders;
}

export interface DatasetsDatasetsCreate200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface DatasetsDatasetsCreate200Response extends HttpResponse {
  status: "200";
  body: DatasetVersionOutput;
  headers: RawHttpHeaders & DatasetsDatasetsCreate200Headers;
}

export interface DatasetsDatasetsCreateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsDatasetsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsDatasetsCreateDefaultHeaders;
}

/** The request has succeeded. */
export interface DatasetsDatasetsCreateVersion200Response extends HttpResponse {
  status: "200";
  body: DatasetVersionOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface DatasetsDatasetsCreateVersion201Response extends HttpResponse {
  status: "201";
  body: DatasetVersionOutput;
}

export interface DatasetsDatasetsCreateVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsDatasetsCreateVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsDatasetsCreateVersionDefaultHeaders;
}

/** The request has succeeded. */
export interface DatasetsDatasetsStartPendingUploadVersion200Response
  extends HttpResponse {
  status: "200";
  body: PendingUploadResponseOutput;
}

export interface DatasetsDatasetsStartPendingUploadVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsDatasetsStartPendingUploadVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    DatasetsDatasetsStartPendingUploadVersionDefaultHeaders;
}

/** The request has succeeded. */
export interface DatasetsDatasetsStartPendingUpload200Response
  extends HttpResponse {
  status: "200";
  body: PendingUploadResponseOutput;
}

export interface DatasetsDatasetsStartPendingUploadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsDatasetsStartPendingUploadDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsDatasetsStartPendingUploadDefaultHeaders;
}

/** The request has succeeded. */
export interface IndexesIndexesListVersions200Response extends HttpResponse {
  status: "200";
  body: PagedIndexOutput;
}

export interface IndexesIndexesListVersionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesIndexesListVersionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesIndexesListVersionsDefaultHeaders;
}

/** The request has succeeded. */
export interface IndexesIndexesListLatest200Response extends HttpResponse {
  status: "200";
  body: PagedIndexOutput;
}

export interface IndexesIndexesListLatestDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesIndexesListLatestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesIndexesListLatestDefaultHeaders;
}

/** The request has succeeded. */
export interface IndexesIndexesGetVersion200Response extends HttpResponse {
  status: "200";
  body: IndexOutput;
}

export interface IndexesIndexesGetVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesIndexesGetVersionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesIndexesGetVersionDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface IndexesIndexesDeleteVersion204Response extends HttpResponse {
  status: "204";
}

export interface IndexesIndexesDeleteVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesIndexesDeleteVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesIndexesDeleteVersionDefaultHeaders;
}

export interface IndexesIndexesCreate200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface IndexesIndexesCreate200Response extends HttpResponse {
  status: "200";
  body: IndexOutput;
  headers: RawHttpHeaders & IndexesIndexesCreate200Headers;
}

export interface IndexesIndexesCreateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesIndexesCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesIndexesCreateDefaultHeaders;
}

/** The request has succeeded. */
export interface IndexesIndexesCreateVersion200Response extends HttpResponse {
  status: "200";
  body: IndexOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface IndexesIndexesCreateVersion201Response extends HttpResponse {
  status: "201";
  body: IndexOutput;
}

export interface IndexesIndexesCreateVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesIndexesCreateVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesIndexesCreateVersionDefaultHeaders;
}

export interface DeploymentsDeploymentsGet200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface DeploymentsDeploymentsGet200Response extends HttpResponse {
  status: "200";
  body: DeploymentOutput;
  headers: RawHttpHeaders & DeploymentsDeploymentsGet200Headers;
}

export interface DeploymentsDeploymentsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeploymentsDeploymentsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeploymentsDeploymentsGetDefaultHeaders;
}

export interface DeploymentsDeploymentsList200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface DeploymentsDeploymentsList200Response extends HttpResponse {
  status: "200";
  body: PagedDeploymentOutput;
  headers: RawHttpHeaders & DeploymentsDeploymentsList200Headers;
}

export interface DeploymentsDeploymentsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeploymentsDeploymentsListDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeploymentsDeploymentsListDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationResultsEvaluationResultsListVersions200Response
  extends HttpResponse {
  status: "200";
  body: PagedEvaluationResultOutput;
}

export interface EvaluationResultsEvaluationResultsListVersionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsEvaluationResultsListVersionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    EvaluationResultsEvaluationResultsListVersionsDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationResultsEvaluationResultsListLatest200Response
  extends HttpResponse {
  status: "200";
  body: PagedEvaluationResultOutput;
}

export interface EvaluationResultsEvaluationResultsListLatestDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsEvaluationResultsListLatestDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    EvaluationResultsEvaluationResultsListLatestDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationResultsEvaluationResultsGetVersion200Response
  extends HttpResponse {
  status: "200";
  body: EvaluationResultOutput;
}

export interface EvaluationResultsEvaluationResultsGetVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsEvaluationResultsGetVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    EvaluationResultsEvaluationResultsGetVersionDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface EvaluationResultsEvaluationResultsDeleteVersion204Response
  extends HttpResponse {
  status: "204";
}

export interface EvaluationResultsEvaluationResultsDeleteVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsEvaluationResultsDeleteVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    EvaluationResultsEvaluationResultsDeleteVersionDefaultHeaders;
}

export interface EvaluationResultsEvaluationResultsCreate200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface EvaluationResultsEvaluationResultsCreate200Response
  extends HttpResponse {
  status: "200";
  body: EvaluationResultOutput;
  headers: RawHttpHeaders & EvaluationResultsEvaluationResultsCreate200Headers;
}

export interface EvaluationResultsEvaluationResultsCreateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsEvaluationResultsCreateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    EvaluationResultsEvaluationResultsCreateDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationResultsEvaluationResultsCreateVersion200Response
  extends HttpResponse {
  status: "200";
  body: EvaluationResultOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface EvaluationResultsEvaluationResultsCreateVersion201Response
  extends HttpResponse {
  status: "201";
  body: EvaluationResultOutput;
}

export interface EvaluationResultsEvaluationResultsCreateVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsEvaluationResultsCreateVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    EvaluationResultsEvaluationResultsCreateVersionDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationResultsEvaluationResultsStartPendingUpload200Response
  extends HttpResponse {
  status: "200";
  body: PendingUploadResponseOutput;
}

export interface EvaluationResultsEvaluationResultsStartPendingUploadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsEvaluationResultsStartPendingUploadDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    EvaluationResultsEvaluationResultsStartPendingUploadDefaultHeaders;
}

export interface RedTeamsRedTeamsGet200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface RedTeamsRedTeamsGet200Response extends HttpResponse {
  status: "200";
  body: RedTeamOutput;
  headers: RawHttpHeaders & RedTeamsRedTeamsGet200Headers;
}

export interface RedTeamsRedTeamsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RedTeamsRedTeamsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RedTeamsRedTeamsGetDefaultHeaders;
}

export interface RedTeamsRedTeamsList200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface RedTeamsRedTeamsList200Response extends HttpResponse {
  status: "200";
  body: PagedRedTeamOutput;
  headers: RawHttpHeaders & RedTeamsRedTeamsList200Headers;
}

export interface RedTeamsRedTeamsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RedTeamsRedTeamsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RedTeamsRedTeamsListDefaultHeaders;
}

/** The request has succeeded. */
export interface RedTeamsRedTeamsCreateRun200Response extends HttpResponse {
  status: "200";
  body: RedTeamOutput;
}

export interface RedTeamsRedTeamsCreateRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RedTeamsRedTeamsCreateRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RedTeamsRedTeamsCreateRunDefaultHeaders;
}
