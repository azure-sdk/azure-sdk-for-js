// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type {
  ConnectionType,
  Evaluation,
  AgentEvaluationRequest,
  AnnotationDTO,
  EvaluationUpload,
  ListViewType,
  DatasetVersion,
  PendingUploadRequest,
  Index,
  RedTeam,
  RedTeamUpload,
  SimulationDTO,
  EvaluationResult,
  AssetCredentialRequest,
} from "./models.js";

export interface ConnectionsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConnectionsGetHeaderParam {
  headers?: RawHttpHeadersInput & ConnectionsGetHeaders;
}

export type ConnectionsGetParameters = ConnectionsGetHeaderParam &
  RequestParameters;

export interface ConnectionsGetWithCredentialsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConnectionsGetWithCredentialsHeaderParam {
  headers?: RawHttpHeadersInput & ConnectionsGetWithCredentialsHeaders;
}

export type ConnectionsGetWithCredentialsParameters =
  ConnectionsGetWithCredentialsHeaderParam & RequestParameters;

export interface ConnectionsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConnectionsListQueryParamProperties {
  /**
   * List connections of this specific type
   *
   * Possible values: "AzureOpenAI", "AzureBlob", "AzureStorageAccount", "CognitiveSearch", "CosmosDB", "ApiKey", "AppConfig", "AppInsights", "CustomKeys"
   */
  connectionType?: ConnectionType;
  /** List connections that are default connections */
  defaultConnection?: boolean;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ConnectionsListQueryParam {
  queryParameters?: ConnectionsListQueryParamProperties;
}

export interface ConnectionsListHeaderParam {
  headers?: RawHttpHeadersInput & ConnectionsListHeaders;
}

export type ConnectionsListParameters = ConnectionsListQueryParam &
  ConnectionsListHeaderParam &
  RequestParameters;

export interface ConnectionsListWithCredentialsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConnectionsListWithCredentialsQueryParamProperties {
  /**
   * List connections of this specific type
   *
   * Possible values: "AzureOpenAI", "AzureBlob", "AzureStorageAccount", "CognitiveSearch", "CosmosDB", "ApiKey", "AppConfig", "AppInsights", "CustomKeys"
   */
  connectionType?: ConnectionType;
  /** List connections that are default connections */
  defaultConnection?: boolean;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ConnectionsListWithCredentialsQueryParam {
  queryParameters?: ConnectionsListWithCredentialsQueryParamProperties;
}

export interface ConnectionsListWithCredentialsHeaderParam {
  headers?: RawHttpHeadersInput & ConnectionsListWithCredentialsHeaders;
}

export type ConnectionsListWithCredentialsParameters =
  ConnectionsListWithCredentialsQueryParam &
    ConnectionsListWithCredentialsHeaderParam &
    RequestParameters;

export interface EvaluationsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface EvaluationsGetHeaderParam {
  headers?: RawHttpHeadersInput & EvaluationsGetHeaders;
}

export type EvaluationsGetParameters = EvaluationsGetHeaderParam &
  RequestParameters;

export interface EvaluationsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface EvaluationsListQueryParamProperties {
  /** Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2 */
  tags?: string;
  /** Comma-separated list of property names (and optionally values). Example: prop1,prop2=value2 */
  properties?: string;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface EvaluationsListQueryParam {
  queryParameters?: EvaluationsListQueryParamProperties;
}

export interface EvaluationsListHeaderParam {
  headers?: RawHttpHeadersInput & EvaluationsListHeaders;
}

export type EvaluationsListParameters = EvaluationsListQueryParam &
  EvaluationsListHeaderParam &
  RequestParameters;

export interface EvaluationsCreateRunBodyParam {
  /** Evaluation to be run */
  body: Evaluation;
}

export type EvaluationsCreateRunParameters = EvaluationsCreateRunBodyParam &
  RequestParameters;

export interface EvaluationsCreateAgentEvaluationBodyParam {
  /** Agent evaluation to be run */
  body: AgentEvaluationRequest;
}

export type EvaluationsCreateAgentEvaluationParameters =
  EvaluationsCreateAgentEvaluationBodyParam & RequestParameters;
export type EvaluationsCheckAnnotationParameters = RequestParameters;

export interface EvaluationsSubmitAnnotationBodyParam {
  /** Annotation data inputList of supported annotation. */
  body: AnnotationDTO;
}

export type EvaluationsSubmitAnnotationParameters =
  EvaluationsSubmitAnnotationBodyParam & RequestParameters;
export type EvaluationsOperationResultsParameters = RequestParameters;

export interface EvaluationsUploadRunBodyParam {
  /** Evaluation to upload. */
  body: EvaluationUpload;
}

export type EvaluationsUploadRunParameters = EvaluationsUploadRunBodyParam &
  RequestParameters;

export interface EvaluationsUploadUpdateRunBodyParam {
  /** Evaluation upload to update. */
  body: EvaluationUpload;
}

export type EvaluationsUploadUpdateRunParameters =
  EvaluationsUploadUpdateRunBodyParam & RequestParameters;

export interface DatasetsListVersionsQueryParamProperties {
  /** Top count of results, top count cannot be greater than the page size. If topCount > page size, results with be default page size count will be returned */
  top?: number;
  /** Continuation token for pagination. */
  skip?: string;
  /** Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2 */
  tags?: string;
  /**
   * [ListViewType.ActiveOnly, ListViewType.ArchivedOnly, ListViewType.All] View type for including/excluding (for example) archived entities.
   *
   * Possible values: "ActiveOnly", "ArchivedOnly", "All"
   */
  listViewType?: ListViewType;
}

export interface DatasetsListVersionsQueryParam {
  queryParameters?: DatasetsListVersionsQueryParamProperties;
}

export type DatasetsListVersionsParameters = DatasetsListVersionsQueryParam &
  RequestParameters;

export interface DatasetsListLatestQueryParamProperties {
  /** Top count of results, top count cannot be greater than the page size. If topCount > page size, results with be default page size count will be returned */
  top?: number;
  /** Continuation token for pagination. */
  skip?: string;
  /** Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2 */
  tags?: string;
  /**
   * [ListViewType.ActiveOnly, ListViewType.ArchivedOnly, ListViewType.All] View type for including/excluding (for example) archived entities.
   *
   * Possible values: "ActiveOnly", "ArchivedOnly", "All"
   */
  listViewType?: ListViewType;
}

export interface DatasetsListLatestQueryParam {
  queryParameters?: DatasetsListLatestQueryParamProperties;
}

export type DatasetsListLatestParameters = DatasetsListLatestQueryParam &
  RequestParameters;
export type DatasetsGetVersionParameters = RequestParameters;
export type DatasetsDeleteVersionParameters = RequestParameters;

export interface DatasetsCreateOrUpdateVersionBodyParam {
  /** The definition of the DatasetVersion to create or update */
  body: DatasetVersion;
}

export type DatasetsCreateOrUpdateVersionParameters =
  DatasetsCreateOrUpdateVersionBodyParam & RequestParameters;

export interface DatasetsStartPendingUploadVersionBodyParam {
  /** Parameters for the action */
  body: PendingUploadRequest;
}

export type DatasetsStartPendingUploadVersionParameters =
  DatasetsStartPendingUploadVersionBodyParam & RequestParameters;

export interface DatasetsGetCredentialsBodyParam {
  /** Parameters for the action */
  body: Record<string, unknown>;
}

export type DatasetsGetCredentialsParameters = DatasetsGetCredentialsBodyParam &
  RequestParameters;

export interface IndexesListVersionsQueryParamProperties {
  /** Top count of results, top count cannot be greater than the page size. If topCount > page size, results with be default page size count will be returned */
  top?: number;
  /** Continuation token for pagination. */
  skip?: string;
  /** Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2 */
  tags?: string;
  /**
   * [ListViewType.ActiveOnly, ListViewType.ArchivedOnly, ListViewType.All] View type for including/excluding (for example) archived entities.
   *
   * Possible values: "ActiveOnly", "ArchivedOnly", "All"
   */
  listViewType?: ListViewType;
}

export interface IndexesListVersionsQueryParam {
  queryParameters?: IndexesListVersionsQueryParamProperties;
}

export type IndexesListVersionsParameters = IndexesListVersionsQueryParam &
  RequestParameters;

export interface IndexesListLatestQueryParamProperties {
  /** Top count of results, top count cannot be greater than the page size. If topCount > page size, results with be default page size count will be returned */
  top?: number;
  /** Continuation token for pagination. */
  skip?: string;
  /** Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2 */
  tags?: string;
  /**
   * [ListViewType.ActiveOnly, ListViewType.ArchivedOnly, ListViewType.All] View type for including/excluding (for example) archived entities.
   *
   * Possible values: "ActiveOnly", "ArchivedOnly", "All"
   */
  listViewType?: ListViewType;
}

export interface IndexesListLatestQueryParam {
  queryParameters?: IndexesListLatestQueryParamProperties;
}

export type IndexesListLatestParameters = IndexesListLatestQueryParam &
  RequestParameters;
export type IndexesGetVersionParameters = RequestParameters;
export type IndexesDeleteVersionParameters = RequestParameters;

export interface IndexesCreateOrUpdateVersionBodyParam {
  /** The definition of the Index to create or update */
  body: Index;
}

export type IndexesCreateOrUpdateVersionParameters =
  IndexesCreateOrUpdateVersionBodyParam & RequestParameters;

export interface DeploymentsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DeploymentsGetHeaderParam {
  headers?: RawHttpHeadersInput & DeploymentsGetHeaders;
}

export type DeploymentsGetParameters = DeploymentsGetHeaderParam &
  RequestParameters;

export interface DeploymentsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DeploymentsListQueryParamProperties {
  /** Model publisher to filter models by */
  modelPublisher?: string;
  /** Model name (the publisher specific name) to filter models by */
  modelName?: string;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface DeploymentsListQueryParam {
  queryParameters?: DeploymentsListQueryParamProperties;
}

export interface DeploymentsListHeaderParam {
  headers?: RawHttpHeadersInput & DeploymentsListHeaders;
}

export type DeploymentsListParameters = DeploymentsListQueryParam &
  DeploymentsListHeaderParam &
  RequestParameters;

export interface RedTeamsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface RedTeamsGetHeaderParam {
  headers?: RawHttpHeadersInput & RedTeamsGetHeaders;
}

export type RedTeamsGetParameters = RedTeamsGetHeaderParam & RequestParameters;

export interface RedTeamsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface RedTeamsListQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface RedTeamsListQueryParam {
  queryParameters?: RedTeamsListQueryParamProperties;
}

export interface RedTeamsListHeaderParam {
  headers?: RawHttpHeadersInput & RedTeamsListHeaders;
}

export type RedTeamsListParameters = RedTeamsListQueryParam &
  RedTeamsListHeaderParam &
  RequestParameters;

export interface RedTeamsCreateRunBodyParam {
  /** Redteam to be run */
  body: RedTeam;
}

export type RedTeamsCreateRunParameters = RedTeamsCreateRunBodyParam &
  RequestParameters;

export interface RedTeamsUploadRunBodyParam {
  /** Redteam to upload. */
  body: RedTeamUpload;
}

export type RedTeamsUploadRunParameters = RedTeamsUploadRunBodyParam &
  RequestParameters;

export interface RedTeamsUploadUpdateRunBodyParam {
  /** Redteam upload to update. */
  body: RedTeamUpload;
}

export type RedTeamsUploadUpdateRunParameters =
  RedTeamsUploadUpdateRunBodyParam & RequestParameters;
export type RedTeamsGetJailBreakDatasetWithTypeParameters = RequestParameters;

/** This is the wrapper object for the parameter `riskTypes` with explode set to true and style set to form. */
export interface RedTeamsGetAttackObjectivesRiskTypesQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: true;
  /** Style of the value */
  style: "form";
}

export interface RedTeamsGetAttackObjectivesQueryParamProperties {
  /** Risk types for the attack objectives dataset */
  riskTypes?: RedTeamsGetAttackObjectivesRiskTypesQueryParam;
  /** The language for the attack objectives dataset, defaults to 'en' */
  lang?: string;
  /** The strategy */
  strategy?: string;
}

export interface RedTeamsGetAttackObjectivesQueryParam {
  queryParameters?: RedTeamsGetAttackObjectivesQueryParamProperties;
}

export type RedTeamsGetAttackObjectivesParameters =
  RedTeamsGetAttackObjectivesQueryParam & RequestParameters;
export type RedTeamsGetJailBreakDatasetParameters = RequestParameters;
export type RedTeamsGetTemplateParametersWithTypeParameters = RequestParameters;
export type RedTeamsGetTemplateParametersParameters = RequestParameters;

export interface RedTeamsGetTemplateParametersImageQueryParamProperties {
  /** Image path. */
  path: string;
}

export interface RedTeamsGetTemplateParametersImageQueryParam {
  queryParameters: RedTeamsGetTemplateParametersImageQueryParamProperties;
}

export type RedTeamsGetTemplateParametersImageParameters =
  RedTeamsGetTemplateParametersImageQueryParam & RequestParameters;

export interface RedTeamsSubmitSimulationBodyParam {
  /** Properties of a Prompt Version. */
  body: SimulationDTO;
}

export type RedTeamsSubmitSimulationParameters =
  RedTeamsSubmitSimulationBodyParam & RequestParameters;

export interface EvaluationResultsListVersionsQueryParamProperties {
  /** Top count of results, top count cannot be greater than the page size. If topCount > page size, results with be default page size count will be returned */
  top?: number;
  /** Continuation token for pagination. */
  skip?: string;
  /** Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2 */
  tags?: string;
  /**
   * [ListViewType.ActiveOnly, ListViewType.ArchivedOnly, ListViewType.All] View type for including/excluding (for example) archived entities.
   *
   * Possible values: "ActiveOnly", "ArchivedOnly", "All"
   */
  listViewType?: ListViewType;
}

export interface EvaluationResultsListVersionsQueryParam {
  queryParameters?: EvaluationResultsListVersionsQueryParamProperties;
}

export type EvaluationResultsListVersionsParameters =
  EvaluationResultsListVersionsQueryParam & RequestParameters;

export interface EvaluationResultsListLatestQueryParamProperties {
  /** Top count of results, top count cannot be greater than the page size. If topCount > page size, results with be default page size count will be returned */
  top?: number;
  /** Continuation token for pagination. */
  skip?: string;
  /** Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2 */
  tags?: string;
  /**
   * [ListViewType.ActiveOnly, ListViewType.ArchivedOnly, ListViewType.All] View type for including/excluding (for example) archived entities.
   *
   * Possible values: "ActiveOnly", "ArchivedOnly", "All"
   */
  listViewType?: ListViewType;
}

export interface EvaluationResultsListLatestQueryParam {
  queryParameters?: EvaluationResultsListLatestQueryParamProperties;
}

export type EvaluationResultsListLatestParameters =
  EvaluationResultsListLatestQueryParam & RequestParameters;
export type EvaluationResultsGetVersionParameters = RequestParameters;
export type EvaluationResultsDeleteVersionParameters = RequestParameters;

export interface EvaluationResultsCreateOrUpdateVersionBodyParam {
  /** The definition of the EvaluationResult to create or update */
  body: EvaluationResult;
}

export type EvaluationResultsCreateOrUpdateVersionParameters =
  EvaluationResultsCreateOrUpdateVersionBodyParam & RequestParameters;

export interface EvaluationResultsStartPendingUploadBodyParam {
  /** Parameters for the action */
  body: PendingUploadRequest;
}

export type EvaluationResultsStartPendingUploadParameters =
  EvaluationResultsStartPendingUploadBodyParam & RequestParameters;

export interface EvaluationResultsGetCredentialsBodyParam {
  /** Parameters for the action */
  body: AssetCredentialRequest;
}

export type EvaluationResultsGetCredentialsParameters =
  EvaluationResultsGetCredentialsBodyParam & RequestParameters;
