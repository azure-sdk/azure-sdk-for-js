// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type {
  CreateAgentOptions,
  ListSortOrder,
  UpdateAgentOptions,
  AgentThreadCreationOptions,
  UpdateAgentThreadOptions,
  ThreadMessageOptions,
  RunAdditionalFieldList,
  CreateRunOptions,
  ToolOutput,
  CreateAndRunThreadOptions,
  FilePurpose,
  HttpPartFile,
  HttpPartFilePurpose,
  HttpPartString,
  VectorStoreOptions,
  VectorStoreUpdateOptions,
  VectorStoreFileStatusFilter,
  VectorStoreDataSource,
  VectorStoreChunkingStrategyRequest,
  ConnectionType,
  Evaluation,
  ListViewType,
  DatasetVersion,
  PendingUploadRequest,
  Index,
} from "./models.js";

export interface AssistantsCreateAgentBodyParam {
  body: CreateAgentOptions;
}

export type AssistantsCreateAgentParameters = AssistantsCreateAgentBodyParam &
  RequestParameters;

export interface AssistantsListAgentsQueryParamProperties {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /**
   * Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order.
   *
   * Possible values: "asc", "desc"
   */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

export interface AssistantsListAgentsQueryParam {
  queryParameters?: AssistantsListAgentsQueryParamProperties;
}

export type AssistantsListAgentsParameters = AssistantsListAgentsQueryParam &
  RequestParameters;
export type AssistantsGetAgentParameters = RequestParameters;

export interface AssistantsUpdateAgentBodyParam {
  body: UpdateAgentOptions;
}

export type AssistantsUpdateAgentParameters = AssistantsUpdateAgentBodyParam &
  RequestParameters;
export type AssistantsDeleteAgentParameters = RequestParameters;

export interface AssistantsCreateThreadBodyParam {
  body: AgentThreadCreationOptions;
}

export type AssistantsCreateThreadParameters = AssistantsCreateThreadBodyParam &
  RequestParameters;
export type AssistantsGetThreadParameters = RequestParameters;

export interface AssistantsUpdateThreadBodyParam {
  body: UpdateAgentThreadOptions;
}

export type AssistantsUpdateThreadParameters = AssistantsUpdateThreadBodyParam &
  RequestParameters;
export type AssistantsDeleteThreadParameters = RequestParameters;

export interface AssistantsCreateMessageBodyParam {
  body: ThreadMessageOptions;
}

export type AssistantsCreateMessageParameters =
  AssistantsCreateMessageBodyParam & RequestParameters;

export interface AssistantsListMessagesQueryParamProperties {
  /** Filter messages by the run ID that generated them. */
  runId?: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /**
   * Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order.
   *
   * Possible values: "asc", "desc"
   */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

export interface AssistantsListMessagesQueryParam {
  queryParameters?: AssistantsListMessagesQueryParamProperties;
}

export type AssistantsListMessagesParameters =
  AssistantsListMessagesQueryParam & RequestParameters;
export type AssistantsGetMessageParameters = RequestParameters;

export interface AssistantsUpdateMessageBodyParam {
  body: { metadata?: Record<string, string> | null };
}

export type AssistantsUpdateMessageParameters =
  AssistantsUpdateMessageBodyParam & RequestParameters;

export interface AssistantsCreateRunBodyParam {
  body: CreateRunOptions;
}

/** This is the wrapper object for the parameter `include[]` with explode set to false and style set to form. */
export interface AssistantsCreateRunIncludeQueryParam {
  /** Value of the parameter */
  value: RunAdditionalFieldList[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface AssistantsCreateRunQueryParamProperties {
  /**
   * A list of additional fields to include in the response.
   * Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.
   */
  "include[]"?: RunAdditionalFieldList[] | AssistantsCreateRunIncludeQueryParam;
}

export interface AssistantsCreateRunQueryParam {
  queryParameters?: AssistantsCreateRunQueryParamProperties;
}

export type AssistantsCreateRunParameters = AssistantsCreateRunQueryParam &
  AssistantsCreateRunBodyParam &
  RequestParameters;

export interface AssistantsListRunsQueryParamProperties {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /**
   * Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order.
   *
   * Possible values: "asc", "desc"
   */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

export interface AssistantsListRunsQueryParam {
  queryParameters?: AssistantsListRunsQueryParamProperties;
}

export type AssistantsListRunsParameters = AssistantsListRunsQueryParam &
  RequestParameters;
export type AssistantsGetRunParameters = RequestParameters;

export interface AssistantsUpdateRunBodyParam {
  body: { metadata?: Record<string, string> | null };
}

export type AssistantsUpdateRunParameters = AssistantsUpdateRunBodyParam &
  RequestParameters;

export interface AssistantsSubmitToolOutputsToRunBodyParam {
  body: { tool_outputs: Array<ToolOutput>; stream?: boolean | null };
}

export type AssistantsSubmitToolOutputsToRunParameters =
  AssistantsSubmitToolOutputsToRunBodyParam & RequestParameters;
export type AssistantsCancelRunParameters = RequestParameters;

export interface AssistantsCreateThreadAndRunBodyParam {
  body: CreateAndRunThreadOptions;
}

export type AssistantsCreateThreadAndRunParameters =
  AssistantsCreateThreadAndRunBodyParam & RequestParameters;

/** This is the wrapper object for the parameter `include[]` with explode set to false and style set to form. */
export interface AssistantsGetRunStepIncludeQueryParam {
  /** Value of the parameter */
  value: RunAdditionalFieldList[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface AssistantsGetRunStepQueryParamProperties {
  /**
   * A list of additional fields to include in the response.
   * Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.
   */
  "include[]"?:
    | RunAdditionalFieldList[]
    | AssistantsGetRunStepIncludeQueryParam;
}

export interface AssistantsGetRunStepQueryParam {
  queryParameters?: AssistantsGetRunStepQueryParamProperties;
}

export type AssistantsGetRunStepParameters = AssistantsGetRunStepQueryParam &
  RequestParameters;

/** This is the wrapper object for the parameter `include[]` with explode set to false and style set to form. */
export interface AssistantsListRunStepsIncludeQueryParam {
  /** Value of the parameter */
  value: RunAdditionalFieldList[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface AssistantsListRunStepsQueryParamProperties {
  /**
   * A list of additional fields to include in the response.
   * Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.
   */
  "include[]"?:
    | RunAdditionalFieldList[]
    | AssistantsListRunStepsIncludeQueryParam;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /**
   * Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order.
   *
   * Possible values: "asc", "desc"
   */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

export interface AssistantsListRunStepsQueryParam {
  queryParameters?: AssistantsListRunStepsQueryParamProperties;
}

export type AssistantsListRunStepsParameters =
  AssistantsListRunStepsQueryParam & RequestParameters;

export interface AssistantsListFilesQueryParamProperties {
  /**
   * The purpose of the file.
   *
   * Possible values: "fine-tune", "fine-tune-results", "assistants", "assistants_output", "batch", "batch_output", "vision"
   */
  purpose?: FilePurpose;
}

export interface AssistantsListFilesQueryParam {
  queryParameters?: AssistantsListFilesQueryParamProperties;
}

export type AssistantsListFilesParameters = AssistantsListFilesQueryParam &
  RequestParameters;

export interface AssistantsUploadFileBodyParam {
  /** Multipart body */
  body:
    | FormData
    | Array<
        | {
            name: "file";
            body: HttpPartFile;
            filename?: string;
            contentType?: string;
          }
        | {
            name: "purpose";
            body: HttpPartFilePurpose;
            filename?: string;
            contentType?: string;
          }
        | { name: "filename"; body: HttpPartString }
      >;
}

export interface AssistantsUploadFileMediaTypesParam {
  /** The name of the file to upload. */
  contentType: "multipart/form-data";
}

export type AssistantsUploadFileParameters =
  AssistantsUploadFileMediaTypesParam &
    AssistantsUploadFileBodyParam &
    RequestParameters;
export type AssistantsDeleteFileParameters = RequestParameters;
export type AssistantsGetFileParameters = RequestParameters;
export type AssistantsGetFileContentParameters = RequestParameters;

export interface AssistantsListVectorStoresQueryParamProperties {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /**
   * Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order.
   *
   * Possible values: "asc", "desc"
   */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

export interface AssistantsListVectorStoresQueryParam {
  queryParameters?: AssistantsListVectorStoresQueryParamProperties;
}

export type AssistantsListVectorStoresParameters =
  AssistantsListVectorStoresQueryParam & RequestParameters;

export interface AssistantsCreateVectorStoreBodyParam {
  body: VectorStoreOptions;
}

export type AssistantsCreateVectorStoreParameters =
  AssistantsCreateVectorStoreBodyParam & RequestParameters;
export type AssistantsGetVectorStoreParameters = RequestParameters;

export interface AssistantsModifyVectorStoreBodyParam {
  body: VectorStoreUpdateOptions;
}

export type AssistantsModifyVectorStoreParameters =
  AssistantsModifyVectorStoreBodyParam & RequestParameters;
export type AssistantsDeleteVectorStoreParameters = RequestParameters;

export interface AssistantsListVectorStoreFilesQueryParamProperties {
  /**
   * Filter by file status.
   *
   * Possible values: "in_progress", "completed", "failed", "cancelled"
   */
  filter?: VectorStoreFileStatusFilter;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /**
   * Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order.
   *
   * Possible values: "asc", "desc"
   */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

export interface AssistantsListVectorStoreFilesQueryParam {
  queryParameters?: AssistantsListVectorStoreFilesQueryParamProperties;
}

export type AssistantsListVectorStoreFilesParameters =
  AssistantsListVectorStoreFilesQueryParam & RequestParameters;

export interface AssistantsCreateVectorStoreFileBodyParam {
  body: {
    file_id?: string;
    data_source?: VectorStoreDataSource;
    chunking_strategy?: VectorStoreChunkingStrategyRequest;
  };
}

export type AssistantsCreateVectorStoreFileParameters =
  AssistantsCreateVectorStoreFileBodyParam & RequestParameters;
export type AssistantsGetVectorStoreFileParameters = RequestParameters;
export type AssistantsDeleteVectorStoreFileParameters = RequestParameters;

export interface AssistantsCreateVectorStoreFileBatchBodyParam {
  body: {
    file_ids?: string[];
    data_sources?: Array<VectorStoreDataSource>;
    chunking_strategy?: VectorStoreChunkingStrategyRequest;
  };
}

export type AssistantsCreateVectorStoreFileBatchParameters =
  AssistantsCreateVectorStoreFileBatchBodyParam & RequestParameters;
export type AssistantsGetVectorStoreFileBatchParameters = RequestParameters;
export type AssistantsCancelVectorStoreFileBatchParameters = RequestParameters;

export interface AssistantsListVectorStoreFileBatchFilesQueryParamProperties {
  /**
   * Filter by file status.
   *
   * Possible values: "in_progress", "completed", "failed", "cancelled"
   */
  filter?: VectorStoreFileStatusFilter;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /**
   * Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order.
   *
   * Possible values: "asc", "desc"
   */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

export interface AssistantsListVectorStoreFileBatchFilesQueryParam {
  queryParameters?: AssistantsListVectorStoreFileBatchFilesQueryParamProperties;
}

export type AssistantsListVectorStoreFileBatchFilesParameters =
  AssistantsListVectorStoreFileBatchFilesQueryParam & RequestParameters;

export interface ConnectionsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConnectionsGetHeaderParam {
  headers?: RawHttpHeadersInput & ConnectionsGetHeaders;
}

export type ConnectionsGetParameters = ConnectionsGetHeaderParam &
  RequestParameters;

export interface ConnectionsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConnectionsListQueryParamProperties {
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

export interface ConnectionsListQueryParam {
  queryParameters?: ConnectionsListQueryParamProperties;
}

export interface ConnectionsListHeaderParam {
  headers?: RawHttpHeadersInput & ConnectionsListHeaders;
}

export type ConnectionsListParameters = ConnectionsListQueryParam &
  ConnectionsListHeaderParam &
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

export interface DatasetsCreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DatasetsCreateBodyParam {
  /** The definition of the DatasetVersion to create */
  body: DatasetVersion;
}

export interface DatasetsCreateHeaderParam {
  headers?: RawHttpHeadersInput & DatasetsCreateHeaders;
}

export type DatasetsCreateParameters = DatasetsCreateHeaderParam &
  DatasetsCreateBodyParam &
  RequestParameters;

export interface DatasetsCreateVersionBodyParam {
  /** The definition of the DatasetVersion to create */
  body: DatasetVersion;
}

export type DatasetsCreateVersionParameters = DatasetsCreateVersionBodyParam &
  RequestParameters;

export interface DatasetsStartPendingUploadBodyParam {
  /** Parameters for the action */
  body: PendingUploadRequest;
}

export type DatasetsStartPendingUploadParameters =
  DatasetsStartPendingUploadBodyParam & RequestParameters;

export interface DatasetsStartPendingUploadAutoIncrementHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DatasetsStartPendingUploadAutoIncrementBodyParam {
  body: PendingUploadRequest;
}

export interface DatasetsStartPendingUploadAutoIncrementHeaderParam {
  headers?: RawHttpHeadersInput &
    DatasetsStartPendingUploadAutoIncrementHeaders;
}

export type DatasetsStartPendingUploadAutoIncrementParameters =
  DatasetsStartPendingUploadAutoIncrementHeaderParam &
    DatasetsStartPendingUploadAutoIncrementBodyParam &
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

export interface IndexesCreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexesCreateBodyParam {
  /** The definition of the Index to create */
  body: Index;
}

export interface IndexesCreateHeaderParam {
  headers?: RawHttpHeadersInput & IndexesCreateHeaders;
}

export type IndexesCreateParameters = IndexesCreateHeaderParam &
  IndexesCreateBodyParam &
  RequestParameters;

export interface IndexesCreateVersionBodyParam {
  /** The definition of the Index to create */
  body: Index;
}

export type IndexesCreateVersionParameters = IndexesCreateVersionBodyParam &
  RequestParameters;

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
  /** Flag to include models from connections in response. */
  includeConnectedModels?: boolean;
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
