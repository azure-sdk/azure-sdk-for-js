// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type {
  ConnectionOutput,
  PagedConnectionOutput,
  EvaluationOutput,
  PagedEvaluationOutput,
  AgentEvaluationResultOutput,
  PagedDatasetVersionOutput,
  DatasetVersionOutput,
  RepeatabilityResultOutput,
  PendingUploadResponseOutput,
  AssetCredentialResponseOutput,
  PagedIndexOutput,
  IndexOutput,
  DeploymentOutput,
  PagedDeploymentOutput,
  RedTeamOutput,
  PagedRedTeamOutput,
  AttackObjectiveOutput,
  LongRunningResponseOutput,
  PagedEvaluationResultOutput,
  EvaluationResultOutput,
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

/** The request has succeeded. */
export interface EvaluationsCreateRun200Response extends HttpResponse {
  status: "200";
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
export interface EvaluationsCreateAgentRun200Response extends HttpResponse {
  status: "200";
  body: Array<AgentEvaluationResultOutput>;
}

export interface EvaluationsCreateAgentRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationsCreateAgentRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationsCreateAgentRunDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationsCheckAnnotation200Response extends HttpResponse {
  status: "200";
  body: string[];
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface EvaluationsSubmitAnnotation202Response extends HttpResponse {
  status: "202";
  body: string;
}

/** The request has succeeded. */
export interface EvaluationsUploadRun200Response extends HttpResponse {
  status: "200";
  body: EvaluationOutput;
}

export interface EvaluationsUploadRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationsUploadRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationsUploadRunDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationsUploadUpdateRun200Response extends HttpResponse {
  status: "200";
  body: EvaluationOutput;
}

export interface EvaluationsUploadUpdateRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationsUploadUpdateRunDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationsUploadUpdateRunDefaultHeaders;
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

export interface DatasetsCreate200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface DatasetsCreate200Response extends HttpResponse {
  status: "200";
  body: DatasetVersionOutput;
  headers: RawHttpHeaders & DatasetsCreate200Headers;
}

export interface DatasetsCreateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsCreateDefaultHeaders;
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
export interface DatasetsStartPendingUpload200Response extends HttpResponse {
  status: "200";
  body: PendingUploadResponseOutput;
}

export interface DatasetsStartPendingUploadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsStartPendingUploadDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsStartPendingUploadDefaultHeaders;
}

/** The request has succeeded. */
export interface DatasetsFetchAssetCredentials200Response extends HttpResponse {
  status: "200";
  body: AssetCredentialResponseOutput;
}

export interface DatasetsFetchAssetCredentialsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DatasetsFetchAssetCredentialsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DatasetsFetchAssetCredentialsDefaultHeaders;
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

export interface IndexesCreate200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface IndexesCreate200Response extends HttpResponse {
  status: "200";
  body: IndexOutput;
  headers: RawHttpHeaders & IndexesCreate200Headers;
}

export interface IndexesCreateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesCreateDefaultHeaders;
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

/** The request has succeeded. */
export interface RedTeamsCreateRun200Response extends HttpResponse {
  status: "200";
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

/** The request has succeeded. */
export interface RedTeamsUploadRun200Response extends HttpResponse {
  status: "200";
  body: RedTeamOutput;
}

export interface RedTeamsUploadRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RedTeamsUploadRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RedTeamsUploadRunDefaultHeaders;
}

/** The request has succeeded. */
export interface RedTeamsUploadUpdateRun200Response extends HttpResponse {
  status: "200";
  body: RedTeamOutput;
}

export interface RedTeamsUploadUpdateRunDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RedTeamsUploadUpdateRunDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RedTeamsUploadUpdateRunDefaultHeaders;
}

/** The request has succeeded. */
export interface RedTeamsGetJailBreakDatasetWithType200Response
  extends HttpResponse {
  status: "200";
  body: string[];
}

export interface RedTeamsGetJailBreakDatasetWithTypeDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RedTeamsGetJailBreakDatasetWithTypeDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RedTeamsGetJailBreakDatasetWithTypeDefaultHeaders;
}

/** The request has succeeded. */
export interface RedTeamsGetAttackObjectives200Response extends HttpResponse {
  status: "200";
  body: Array<AttackObjectiveOutput>;
}

export interface RedTeamsGetAttackObjectivesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RedTeamsGetAttackObjectivesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RedTeamsGetAttackObjectivesDefaultHeaders;
}

/** The request has succeeded. */
export interface RedTeamsGetJailBreakDataset200Response extends HttpResponse {
  status: "200";
  body: string[];
}

export interface RedTeamsGetJailBreakDatasetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RedTeamsGetJailBreakDatasetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RedTeamsGetJailBreakDatasetDefaultHeaders;
}

/** The request has succeeded. */
export interface RedTeamsGetTemplateParametersWithType200Response
  extends HttpResponse {
  status: "200";
  body: string;
}

export interface RedTeamsGetTemplateParametersWithTypeDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RedTeamsGetTemplateParametersWithTypeDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RedTeamsGetTemplateParametersWithTypeDefaultHeaders;
}

/** The request has succeeded. */
export interface RedTeamsGetTemplateParameters200Response extends HttpResponse {
  status: "200";
  body: string;
}

export interface RedTeamsGetTemplateParametersDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RedTeamsGetTemplateParametersDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RedTeamsGetTemplateParametersDefaultHeaders;
}

/** The request has succeeded. */
export interface RedTeamsGetTemplateParametersImage200Response
  extends HttpResponse {
  status: "200";
  body: string;
}

export interface RedTeamsGetTemplateParametersImageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RedTeamsGetTemplateParametersImageDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RedTeamsGetTemplateParametersImageDefaultHeaders;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface RedTeamsSubmitSimulation202Response extends HttpResponse {
  status: "202";
  body: LongRunningResponseOutput;
}

export interface RedTeamsSubmitSimulationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RedTeamsSubmitSimulationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RedTeamsSubmitSimulationDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationResultsListVersions200Response extends HttpResponse {
  status: "200";
  body: PagedEvaluationResultOutput;
}

export interface EvaluationResultsListVersionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsListVersionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationResultsListVersionsDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationResultsListLatest200Response extends HttpResponse {
  status: "200";
  body: PagedEvaluationResultOutput;
}

export interface EvaluationResultsListLatestDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsListLatestDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationResultsListLatestDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationResultsGetVersion200Response extends HttpResponse {
  status: "200";
  body: EvaluationResultOutput;
}

export interface EvaluationResultsGetVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsGetVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationResultsGetVersionDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface EvaluationResultsDeleteVersion204Response
  extends HttpResponse {
  status: "204";
}

export interface EvaluationResultsDeleteVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsDeleteVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationResultsDeleteVersionDefaultHeaders;
}

export interface EvaluationResultsCreate200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface EvaluationResultsCreate200Response extends HttpResponse {
  status: "200";
  body: EvaluationResultOutput;
  headers: RawHttpHeaders & EvaluationResultsCreate200Headers;
}

export interface EvaluationResultsCreateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationResultsCreateDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationResultsCreateVersion200Response
  extends HttpResponse {
  status: "200";
  body: EvaluationResultOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface EvaluationResultsCreateVersion201Response
  extends HttpResponse {
  status: "201";
  body: EvaluationResultOutput;
}

export interface EvaluationResultsCreateVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsCreateVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationResultsCreateVersionDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationResultsStartPendingUpload200Response
  extends HttpResponse {
  status: "200";
  body: PendingUploadResponseOutput;
}

export interface EvaluationResultsStartPendingUploadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsStartPendingUploadDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EvaluationResultsStartPendingUploadDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationResultsFetchAssetCredentials200Response
  extends HttpResponse {
  status: "200";
  body: AssetCredentialResponseOutput;
}

export interface EvaluationResultsFetchAssetCredentialsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsFetchAssetCredentialsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    EvaluationResultsFetchAssetCredentialsDefaultHeaders;
}

/** The request has succeeded. */
export interface EvaluationResultsGetAgentEvaluationResults200Response
  extends HttpResponse {
  status: "200";
  body: Array<AgentEvaluationResultOutput>;
}

export interface EvaluationResultsGetAgentEvaluationResultsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EvaluationResultsGetAgentEvaluationResultsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    EvaluationResultsGetAgentEvaluationResultsDefaultHeaders;
}
