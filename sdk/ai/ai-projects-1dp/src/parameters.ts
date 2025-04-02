// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type {
  ConnectionType,
  Evaluation,
  ListViewType,
  DatasetVersion,
  PendingUploadRequest,
  Index,
  EvaluationResult,
  RedTeam,
} from "./models.js";

export interface ConnectionsConnectionsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConnectionsConnectionsGetHeaderParam {
  headers?: RawHttpHeadersInput & ConnectionsConnectionsGetHeaders;
}

export type ConnectionsConnectionsGetParameters =
  ConnectionsConnectionsGetHeaderParam & RequestParameters;

export interface ConnectionsConnectionsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConnectionsConnectionsListQueryParamProperties {
  /**
   * Specific type of connection to return in list
   *
   * Possible values: "AzureOpenAI", "AzureBlob", "CognitiveSearch", "CosmosDB", "ApiKey", "AppInsights", "CustomKeys"
   */
  connectionType?: ConnectionType;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ConnectionsConnectionsListQueryParam {
  queryParameters?: ConnectionsConnectionsListQueryParamProperties;
}

export interface ConnectionsConnectionsListHeaderParam {
  headers?: RawHttpHeadersInput & ConnectionsConnectionsListHeaders;
}

export type ConnectionsConnectionsListParameters =
  ConnectionsConnectionsListQueryParam &
    ConnectionsConnectionsListHeaderParam &
    RequestParameters;

export interface EvaluationsEvaluationsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface EvaluationsEvaluationsGetHeaderParam {
  headers?: RawHttpHeadersInput & EvaluationsEvaluationsGetHeaders;
}

export type EvaluationsEvaluationsGetParameters =
  EvaluationsEvaluationsGetHeaderParam & RequestParameters;

export interface EvaluationsEvaluationsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface EvaluationsEvaluationsListQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface EvaluationsEvaluationsListQueryParam {
  queryParameters?: EvaluationsEvaluationsListQueryParamProperties;
}

export interface EvaluationsEvaluationsListHeaderParam {
  headers?: RawHttpHeadersInput & EvaluationsEvaluationsListHeaders;
}

export type EvaluationsEvaluationsListParameters =
  EvaluationsEvaluationsListQueryParam &
    EvaluationsEvaluationsListHeaderParam &
    RequestParameters;

export interface EvaluationsEvaluationsCreateRunBodyParam {
  /** Evaluation to be run */
  body: Evaluation;
}

export type EvaluationsEvaluationsCreateRunParameters =
  EvaluationsEvaluationsCreateRunBodyParam & RequestParameters;

export interface DatasetsDatasetsListVersionsQueryParamProperties {
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

export interface DatasetsDatasetsListVersionsQueryParam {
  queryParameters?: DatasetsDatasetsListVersionsQueryParamProperties;
}

export type DatasetsDatasetsListVersionsParameters =
  DatasetsDatasetsListVersionsQueryParam & RequestParameters;

export interface DatasetsDatasetsListLatestQueryParamProperties {
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

export interface DatasetsDatasetsListLatestQueryParam {
  queryParameters?: DatasetsDatasetsListLatestQueryParamProperties;
}

export type DatasetsDatasetsListLatestParameters =
  DatasetsDatasetsListLatestQueryParam & RequestParameters;
export type DatasetsDatasetsGetVersionParameters = RequestParameters;
export type DatasetsDatasetsDeleteVersionParameters = RequestParameters;

export interface DatasetsDatasetsCreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DatasetsDatasetsCreateBodyParam {
  /** The definition of the DatasetVersion to create */
  body: DatasetVersion;
}

export interface DatasetsDatasetsCreateHeaderParam {
  headers?: RawHttpHeadersInput & DatasetsDatasetsCreateHeaders;
}

export type DatasetsDatasetsCreateParameters =
  DatasetsDatasetsCreateHeaderParam &
    DatasetsDatasetsCreateBodyParam &
    RequestParameters;

export interface DatasetsDatasetsCreateVersionBodyParam {
  /** The definition of the DatasetVersion to create */
  body: DatasetVersion;
}

export type DatasetsDatasetsCreateVersionParameters =
  DatasetsDatasetsCreateVersionBodyParam & RequestParameters;

export interface DatasetsDatasetsStartPendingUploadVersionBodyParam {
  /** Parameters for the action */
  body: PendingUploadRequest;
}

export type DatasetsDatasetsStartPendingUploadVersionParameters =
  DatasetsDatasetsStartPendingUploadVersionBodyParam & RequestParameters;

export interface DatasetsDatasetsStartPendingUploadBodyParam {
  /** Parameters for the action */
  body: PendingUploadRequest;
}

export type DatasetsDatasetsStartPendingUploadParameters =
  DatasetsDatasetsStartPendingUploadBodyParam & RequestParameters;

export interface IndexesIndexesListVersionsQueryParamProperties {
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

export interface IndexesIndexesListVersionsQueryParam {
  queryParameters?: IndexesIndexesListVersionsQueryParamProperties;
}

export type IndexesIndexesListVersionsParameters =
  IndexesIndexesListVersionsQueryParam & RequestParameters;

export interface IndexesIndexesListLatestQueryParamProperties {
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

export interface IndexesIndexesListLatestQueryParam {
  queryParameters?: IndexesIndexesListLatestQueryParamProperties;
}

export type IndexesIndexesListLatestParameters =
  IndexesIndexesListLatestQueryParam & RequestParameters;
export type IndexesIndexesGetVersionParameters = RequestParameters;
export type IndexesIndexesDeleteVersionParameters = RequestParameters;

export interface IndexesIndexesCreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexesIndexesCreateBodyParam {
  /** The definition of the Index to create */
  body: Index;
}

export interface IndexesIndexesCreateHeaderParam {
  headers?: RawHttpHeadersInput & IndexesIndexesCreateHeaders;
}

export type IndexesIndexesCreateParameters = IndexesIndexesCreateHeaderParam &
  IndexesIndexesCreateBodyParam &
  RequestParameters;

export interface IndexesIndexesCreateVersionBodyParam {
  /** The definition of the Index to create */
  body: Index;
}

export type IndexesIndexesCreateVersionParameters =
  IndexesIndexesCreateVersionBodyParam & RequestParameters;

export interface DeploymentsDeploymentsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DeploymentsDeploymentsGetHeaderParam {
  headers?: RawHttpHeadersInput & DeploymentsDeploymentsGetHeaders;
}

export type DeploymentsDeploymentsGetParameters =
  DeploymentsDeploymentsGetHeaderParam & RequestParameters;

export interface DeploymentsDeploymentsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DeploymentsDeploymentsListQueryParamProperties {
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

export interface DeploymentsDeploymentsListQueryParam {
  queryParameters?: DeploymentsDeploymentsListQueryParamProperties;
}

export interface DeploymentsDeploymentsListHeaderParam {
  headers?: RawHttpHeadersInput & DeploymentsDeploymentsListHeaders;
}

export type DeploymentsDeploymentsListParameters =
  DeploymentsDeploymentsListQueryParam &
    DeploymentsDeploymentsListHeaderParam &
    RequestParameters;

export interface EvaluationResultsEvaluationResultsListVersionsQueryParamProperties {
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

export interface EvaluationResultsEvaluationResultsListVersionsQueryParam {
  queryParameters?: EvaluationResultsEvaluationResultsListVersionsQueryParamProperties;
}

export type EvaluationResultsEvaluationResultsListVersionsParameters =
  EvaluationResultsEvaluationResultsListVersionsQueryParam & RequestParameters;

export interface EvaluationResultsEvaluationResultsListLatestQueryParamProperties {
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

export interface EvaluationResultsEvaluationResultsListLatestQueryParam {
  queryParameters?: EvaluationResultsEvaluationResultsListLatestQueryParamProperties;
}

export type EvaluationResultsEvaluationResultsListLatestParameters =
  EvaluationResultsEvaluationResultsListLatestQueryParam & RequestParameters;
export type EvaluationResultsEvaluationResultsGetVersionParameters =
  RequestParameters;
export type EvaluationResultsEvaluationResultsDeleteVersionParameters =
  RequestParameters;

export interface EvaluationResultsEvaluationResultsCreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface EvaluationResultsEvaluationResultsCreateBodyParam {
  /** The definition of the EvaluationResult to create */
  body: EvaluationResult;
}

export interface EvaluationResultsEvaluationResultsCreateHeaderParam {
  headers?: RawHttpHeadersInput &
    EvaluationResultsEvaluationResultsCreateHeaders;
}

export type EvaluationResultsEvaluationResultsCreateParameters =
  EvaluationResultsEvaluationResultsCreateHeaderParam &
    EvaluationResultsEvaluationResultsCreateBodyParam &
    RequestParameters;

export interface EvaluationResultsEvaluationResultsCreateVersionBodyParam {
  /** The definition of the EvaluationResult to create */
  body: EvaluationResult;
}

export type EvaluationResultsEvaluationResultsCreateVersionParameters =
  EvaluationResultsEvaluationResultsCreateVersionBodyParam & RequestParameters;

export interface EvaluationResultsEvaluationResultsStartPendingUploadBodyParam {
  /** Parameters for the action */
  body: PendingUploadRequest;
}

export type EvaluationResultsEvaluationResultsStartPendingUploadParameters =
  EvaluationResultsEvaluationResultsStartPendingUploadBodyParam &
    RequestParameters;

export interface RedTeamsRedTeamsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface RedTeamsRedTeamsGetHeaderParam {
  headers?: RawHttpHeadersInput & RedTeamsRedTeamsGetHeaders;
}

export type RedTeamsRedTeamsGetParameters = RedTeamsRedTeamsGetHeaderParam &
  RequestParameters;

export interface RedTeamsRedTeamsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface RedTeamsRedTeamsListQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface RedTeamsRedTeamsListQueryParam {
  queryParameters?: RedTeamsRedTeamsListQueryParamProperties;
}

export interface RedTeamsRedTeamsListHeaderParam {
  headers?: RawHttpHeadersInput & RedTeamsRedTeamsListHeaders;
}

export type RedTeamsRedTeamsListParameters = RedTeamsRedTeamsListQueryParam &
  RedTeamsRedTeamsListHeaderParam &
  RequestParameters;

export interface RedTeamsRedTeamsCreateRunBodyParam {
  /** Redteam to be run */
  body: RedTeam;
}

export type RedTeamsRedTeamsCreateRunParameters =
  RedTeamsRedTeamsCreateRunBodyParam & RequestParameters;
