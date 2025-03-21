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

export interface AgentsCreateAgentBodyParam {
  body: CreateAgentOptions;
}

export type AgentsCreateAgentParameters = AgentsCreateAgentBodyParam &
  RequestParameters;

export interface AgentsListAgentsQueryParamProperties {
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

export interface AgentsListAgentsQueryParam {
  queryParameters?: AgentsListAgentsQueryParamProperties;
}

export type AgentsListAgentsParameters = AgentsListAgentsQueryParam &
  RequestParameters;
export type AgentsGetAgentParameters = RequestParameters;

export interface AgentsUpdateAgentBodyParam {
  body: UpdateAgentOptions;
}

export type AgentsUpdateAgentParameters = AgentsUpdateAgentBodyParam &
  RequestParameters;
export type AgentsDeleteAgentParameters = RequestParameters;

export interface AgentsCreateThreadBodyParam {
  body: AgentThreadCreationOptions;
}

export type AgentsCreateThreadParameters = AgentsCreateThreadBodyParam &
  RequestParameters;
export type AgentsGetThreadParameters = RequestParameters;

export interface AgentsUpdateThreadBodyParam {
  body: UpdateAgentThreadOptions;
}

export type AgentsUpdateThreadParameters = AgentsUpdateThreadBodyParam &
  RequestParameters;
export type AgentsDeleteThreadParameters = RequestParameters;

export interface AgentsCreateMessageBodyParam {
  body: ThreadMessageOptions;
}

export type AgentsCreateMessageParameters = AgentsCreateMessageBodyParam &
  RequestParameters;

export interface AgentsListMessagesQueryParamProperties {
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

export interface AgentsListMessagesQueryParam {
  queryParameters?: AgentsListMessagesQueryParamProperties;
}

export type AgentsListMessagesParameters = AgentsListMessagesQueryParam &
  RequestParameters;
export type AgentsGetMessageParameters = RequestParameters;

export interface AgentsUpdateMessageBodyParam {
  body: { metadata?: Record<string, string> | null };
}

export type AgentsUpdateMessageParameters = AgentsUpdateMessageBodyParam &
  RequestParameters;

export interface AgentsCreateRunBodyParam {
  body: CreateRunOptions;
}

/** This is the wrapper object for the parameter `include[]` with explode set to false and style set to form. */
export interface AgentsCreateRunIncludeQueryParam {
  /** Value of the parameter */
  value: RunAdditionalFieldList[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface AgentsCreateRunQueryParamProperties {
  /**
   * A list of additional fields to include in the response.
   * Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.
   */
  "include[]"?: RunAdditionalFieldList[] | AgentsCreateRunIncludeQueryParam;
}

export interface AgentsCreateRunQueryParam {
  queryParameters?: AgentsCreateRunQueryParamProperties;
}

export type AgentsCreateRunParameters = AgentsCreateRunQueryParam &
  AgentsCreateRunBodyParam &
  RequestParameters;

export interface AgentsListRunsQueryParamProperties {
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

export interface AgentsListRunsQueryParam {
  queryParameters?: AgentsListRunsQueryParamProperties;
}

export type AgentsListRunsParameters = AgentsListRunsQueryParam &
  RequestParameters;
export type AgentsGetRunParameters = RequestParameters;

export interface AgentsUpdateRunBodyParam {
  body: { metadata?: Record<string, string> | null };
}

export type AgentsUpdateRunParameters = AgentsUpdateRunBodyParam &
  RequestParameters;

export interface AgentsSubmitToolOutputsToRunBodyParam {
  body: { tool_outputs: Array<ToolOutput>; stream?: boolean | null };
}

export type AgentsSubmitToolOutputsToRunParameters =
  AgentsSubmitToolOutputsToRunBodyParam & RequestParameters;
export type AgentsCancelRunParameters = RequestParameters;

export interface AgentsCreateThreadAndRunBodyParam {
  body: CreateAndRunThreadOptions;
}

export type AgentsCreateThreadAndRunParameters =
  AgentsCreateThreadAndRunBodyParam & RequestParameters;

/** This is the wrapper object for the parameter `include[]` with explode set to false and style set to form. */
export interface AgentsGetRunStepIncludeQueryParam {
  /** Value of the parameter */
  value: RunAdditionalFieldList[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface AgentsGetRunStepQueryParamProperties {
  /**
   * A list of additional fields to include in the response.
   * Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.
   */
  "include[]"?: RunAdditionalFieldList[] | AgentsGetRunStepIncludeQueryParam;
}

export interface AgentsGetRunStepQueryParam {
  queryParameters?: AgentsGetRunStepQueryParamProperties;
}

export type AgentsGetRunStepParameters = AgentsGetRunStepQueryParam &
  RequestParameters;

/** This is the wrapper object for the parameter `include[]` with explode set to false and style set to form. */
export interface AgentsListRunStepsIncludeQueryParam {
  /** Value of the parameter */
  value: RunAdditionalFieldList[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface AgentsListRunStepsQueryParamProperties {
  /**
   * A list of additional fields to include in the response.
   * Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.
   */
  "include[]"?: RunAdditionalFieldList[] | AgentsListRunStepsIncludeQueryParam;
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

export interface AgentsListRunStepsQueryParam {
  queryParameters?: AgentsListRunStepsQueryParamProperties;
}

export type AgentsListRunStepsParameters = AgentsListRunStepsQueryParam &
  RequestParameters;

export interface AgentsListFilesQueryParamProperties {
  /**
   * The purpose of the file.
   *
   * Possible values: "fine-tune", "fine-tune-results", "assistants", "assistants_output", "batch", "batch_output", "vision"
   */
  purpose?: FilePurpose;
}

export interface AgentsListFilesQueryParam {
  queryParameters?: AgentsListFilesQueryParamProperties;
}

export type AgentsListFilesParameters = AgentsListFilesQueryParam &
  RequestParameters;

export interface AgentsUploadFileBodyParam {
  body:
    | FormData
    | Array<
        | {
            name: "file";
            body:
              | string
              | Uint8Array
              | ReadableStream<Uint8Array>
              | NodeJS.ReadableStream
              | File;
            filename?: string;
            contentType?: string;
          }
        | {
            name: "purpose";
            body: FilePurpose;
            filename?: string;
            contentType?: string;
          }
        | { name: "filename"; body: string }
      >;
}

export interface AgentsUploadFileMediaTypesParam {
  /** The name of the file to upload. */
  contentType: "multipart/form-data";
}

export type AgentsUploadFileParameters = AgentsUploadFileMediaTypesParam &
  AgentsUploadFileBodyParam &
  RequestParameters;
export type AgentsDeleteFileParameters = RequestParameters;
export type AgentsGetFileParameters = RequestParameters;
export type AgentsGetFileContentParameters = RequestParameters;

export interface AgentsListVectorStoresQueryParamProperties {
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

export interface AgentsListVectorStoresQueryParam {
  queryParameters?: AgentsListVectorStoresQueryParamProperties;
}

export type AgentsListVectorStoresParameters =
  AgentsListVectorStoresQueryParam & RequestParameters;

export interface AgentsCreateVectorStoreBodyParam {
  body: VectorStoreOptions;
}

export type AgentsCreateVectorStoreParameters =
  AgentsCreateVectorStoreBodyParam & RequestParameters;
export type AgentsGetVectorStoreParameters = RequestParameters;

export interface AgentsModifyVectorStoreBodyParam {
  body: VectorStoreUpdateOptions;
}

export type AgentsModifyVectorStoreParameters =
  AgentsModifyVectorStoreBodyParam & RequestParameters;
export type AgentsDeleteVectorStoreParameters = RequestParameters;

export interface AgentsListVectorStoreFilesQueryParamProperties {
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

export interface AgentsListVectorStoreFilesQueryParam {
  queryParameters?: AgentsListVectorStoreFilesQueryParamProperties;
}

export type AgentsListVectorStoreFilesParameters =
  AgentsListVectorStoreFilesQueryParam & RequestParameters;

export interface AgentsCreateVectorStoreFileBodyParam {
  body: {
    file_id?: string;
    data_source?: VectorStoreDataSource;
    chunking_strategy?: VectorStoreChunkingStrategyRequest;
  };
}

export type AgentsCreateVectorStoreFileParameters =
  AgentsCreateVectorStoreFileBodyParam & RequestParameters;
export type AgentsGetVectorStoreFileParameters = RequestParameters;
export type AgentsDeleteVectorStoreFileParameters = RequestParameters;

export interface AgentsCreateVectorStoreFileBatchBodyParam {
  body: {
    file_ids?: string[];
    data_sources?: Array<VectorStoreDataSource>;
    chunking_strategy?: VectorStoreChunkingStrategyRequest;
  };
}

export type AgentsCreateVectorStoreFileBatchParameters =
  AgentsCreateVectorStoreFileBatchBodyParam & RequestParameters;
export type AgentsGetVectorStoreFileBatchParameters = RequestParameters;
export type AgentsCancelVectorStoreFileBatchParameters = RequestParameters;

export interface AgentsListVectorStoreFileBatchFilesQueryParamProperties {
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

export interface AgentsListVectorStoreFileBatchFilesQueryParam {
  queryParameters?: AgentsListVectorStoreFileBatchFilesQueryParamProperties;
}

export type AgentsListVectorStoreFileBatchFilesParameters =
  AgentsListVectorStoreFileBatchFilesQueryParam & RequestParameters;

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
  $connectionType?: ConnectionType;
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
  /** Please choose OrderBy value from ['createdtime', 'modifiedtime'] */
  $orderBy?: string;
  /** Top count of results, top count cannot be greater than the page size. If topCount > page size, results with be default page size count will be returned */
  $top?: number;
  /** Continuation token for pagination. */
  $skip?: string;
  /** Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2 */
  $tags?: string;
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
  /**
   * View type for including/excluding (for example) archived entities.
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
  /** View type for including/excluding (for example) archived entities. */
  listViewType: string;
  /** Ordering of list: Please choose orderby value from ['createdAt', 'lastModifiedAt']. */
  orderBy?: string;
  /** Ordering of list: Please choose orderby value from ['createdAt', 'lastModifiedAt']. */
  orderby?: string;
  /** Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2. */
  tags?: string;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface IndexesListVersionsQueryParam {
  queryParameters: IndexesListVersionsQueryParamProperties;
}

export type IndexesListVersionsParameters = IndexesListVersionsQueryParam &
  RequestParameters;

export interface IndexesListLatestQueryParamProperties {
  /**
   * View type for including/excluding (for example) archived entities.
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
  $modelPublisher?: string;
  /** Model name (the publisher specific name) to filter models by */
  $modelName?: string;
  /** Flag to include models from connections in response. */
  $includeConnectedModels?: boolean;
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
