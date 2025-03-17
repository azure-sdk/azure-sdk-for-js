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

export interface AgentsCreateAgentQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsCreateAgentQueryParam {
  queryParameters: AgentsCreateAgentQueryParamProperties;
}

export type AgentsCreateAgentParameters = AgentsCreateAgentQueryParam &
  AgentsCreateAgentBodyParam &
  RequestParameters;

export interface AgentsListAgentsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
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
  queryParameters: AgentsListAgentsQueryParamProperties;
}

export type AgentsListAgentsParameters = AgentsListAgentsQueryParam &
  RequestParameters;

export interface AgentsGetAgentQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsGetAgentQueryParam {
  queryParameters: AgentsGetAgentQueryParamProperties;
}

export type AgentsGetAgentParameters = AgentsGetAgentQueryParam &
  RequestParameters;

export interface AgentsUpdateAgentBodyParam {
  body: UpdateAgentOptions;
}

export interface AgentsUpdateAgentQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsUpdateAgentQueryParam {
  queryParameters: AgentsUpdateAgentQueryParamProperties;
}

export type AgentsUpdateAgentParameters = AgentsUpdateAgentQueryParam &
  AgentsUpdateAgentBodyParam &
  RequestParameters;

export interface AgentsDeleteAgentQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsDeleteAgentQueryParam {
  queryParameters: AgentsDeleteAgentQueryParamProperties;
}

export type AgentsDeleteAgentParameters = AgentsDeleteAgentQueryParam &
  RequestParameters;

export interface AgentsCreateThreadBodyParam {
  body: AgentThreadCreationOptions;
}

export interface AgentsCreateThreadQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsCreateThreadQueryParam {
  queryParameters: AgentsCreateThreadQueryParamProperties;
}

export type AgentsCreateThreadParameters = AgentsCreateThreadQueryParam &
  AgentsCreateThreadBodyParam &
  RequestParameters;

export interface AgentsGetThreadQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsGetThreadQueryParam {
  queryParameters: AgentsGetThreadQueryParamProperties;
}

export type AgentsGetThreadParameters = AgentsGetThreadQueryParam &
  RequestParameters;

export interface AgentsUpdateThreadBodyParam {
  body: UpdateAgentThreadOptions;
}

export interface AgentsUpdateThreadQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsUpdateThreadQueryParam {
  queryParameters: AgentsUpdateThreadQueryParamProperties;
}

export type AgentsUpdateThreadParameters = AgentsUpdateThreadQueryParam &
  AgentsUpdateThreadBodyParam &
  RequestParameters;

export interface AgentsDeleteThreadQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsDeleteThreadQueryParam {
  queryParameters: AgentsDeleteThreadQueryParamProperties;
}

export type AgentsDeleteThreadParameters = AgentsDeleteThreadQueryParam &
  RequestParameters;

export interface AgentsCreateMessageBodyParam {
  body: ThreadMessageOptions;
}

export interface AgentsCreateMessageQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsCreateMessageQueryParam {
  queryParameters: AgentsCreateMessageQueryParamProperties;
}

export type AgentsCreateMessageParameters = AgentsCreateMessageQueryParam &
  AgentsCreateMessageBodyParam &
  RequestParameters;

export interface AgentsListMessagesQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
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
  queryParameters: AgentsListMessagesQueryParamProperties;
}

export type AgentsListMessagesParameters = AgentsListMessagesQueryParam &
  RequestParameters;

export interface AgentsGetMessageQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsGetMessageQueryParam {
  queryParameters: AgentsGetMessageQueryParamProperties;
}

export type AgentsGetMessageParameters = AgentsGetMessageQueryParam &
  RequestParameters;

export interface AgentsUpdateMessageBodyParam {
  body: { metadata?: Record<string, string> | null };
}

export interface AgentsUpdateMessageQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsUpdateMessageQueryParam {
  queryParameters: AgentsUpdateMessageQueryParamProperties;
}

export type AgentsUpdateMessageParameters = AgentsUpdateMessageQueryParam &
  AgentsUpdateMessageBodyParam &
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
  /** The API version to use for this operation. */
  "api-version": string;
  /**
   * A list of additional fields to include in the response.
   * Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.
   */
  "include[]"?: RunAdditionalFieldList[] | AgentsCreateRunIncludeQueryParam;
}

export interface AgentsCreateRunQueryParam {
  queryParameters: AgentsCreateRunQueryParamProperties;
}

export type AgentsCreateRunParameters = AgentsCreateRunQueryParam &
  AgentsCreateRunBodyParam &
  RequestParameters;

export interface AgentsListRunsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
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
  queryParameters: AgentsListRunsQueryParamProperties;
}

export type AgentsListRunsParameters = AgentsListRunsQueryParam &
  RequestParameters;

export interface AgentsGetRunQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsGetRunQueryParam {
  queryParameters: AgentsGetRunQueryParamProperties;
}

export type AgentsGetRunParameters = AgentsGetRunQueryParam & RequestParameters;

export interface AgentsUpdateRunBodyParam {
  body: { metadata?: Record<string, string> | null };
}

export interface AgentsUpdateRunQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsUpdateRunQueryParam {
  queryParameters: AgentsUpdateRunQueryParamProperties;
}

export type AgentsUpdateRunParameters = AgentsUpdateRunQueryParam &
  AgentsUpdateRunBodyParam &
  RequestParameters;

export interface AgentsSubmitToolOutputsToRunBodyParam {
  body: { tool_outputs: Array<ToolOutput>; stream?: boolean | null };
}

export interface AgentsSubmitToolOutputsToRunQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsSubmitToolOutputsToRunQueryParam {
  queryParameters: AgentsSubmitToolOutputsToRunQueryParamProperties;
}

export type AgentsSubmitToolOutputsToRunParameters =
  AgentsSubmitToolOutputsToRunQueryParam &
    AgentsSubmitToolOutputsToRunBodyParam &
    RequestParameters;

export interface AgentsCancelRunQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsCancelRunQueryParam {
  queryParameters: AgentsCancelRunQueryParamProperties;
}

export type AgentsCancelRunParameters = AgentsCancelRunQueryParam &
  RequestParameters;

export interface AgentsCreateThreadAndRunBodyParam {
  body: CreateAndRunThreadOptions;
}

export interface AgentsCreateThreadAndRunQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsCreateThreadAndRunQueryParam {
  queryParameters: AgentsCreateThreadAndRunQueryParamProperties;
}

export type AgentsCreateThreadAndRunParameters =
  AgentsCreateThreadAndRunQueryParam &
    AgentsCreateThreadAndRunBodyParam &
    RequestParameters;

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
  /** The API version to use for this operation. */
  "api-version": string;
  /**
   * A list of additional fields to include in the response.
   * Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.
   */
  "include[]"?: RunAdditionalFieldList[] | AgentsGetRunStepIncludeQueryParam;
}

export interface AgentsGetRunStepQueryParam {
  queryParameters: AgentsGetRunStepQueryParamProperties;
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
  /** The API version to use for this operation. */
  "api-version": string;
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
  queryParameters: AgentsListRunStepsQueryParamProperties;
}

export type AgentsListRunStepsParameters = AgentsListRunStepsQueryParam &
  RequestParameters;

export interface AgentsListFilesQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
  /**
   * The purpose of the file.
   *
   * Possible values: "fine-tune", "fine-tune-results", "assistants", "assistants_output", "batch", "batch_output", "vision"
   */
  purpose?: FilePurpose;
}

export interface AgentsListFilesQueryParam {
  queryParameters: AgentsListFilesQueryParamProperties;
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

export interface AgentsUploadFileQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsUploadFileQueryParam {
  queryParameters: AgentsUploadFileQueryParamProperties;
}

export interface AgentsUploadFileMediaTypesParam {
  /** The name of the file to upload. */
  contentType: "multipart/form-data";
}

export type AgentsUploadFileParameters = AgentsUploadFileQueryParam &
  AgentsUploadFileMediaTypesParam &
  AgentsUploadFileBodyParam &
  RequestParameters;

export interface AgentsDeleteFileQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsDeleteFileQueryParam {
  queryParameters: AgentsDeleteFileQueryParamProperties;
}

export type AgentsDeleteFileParameters = AgentsDeleteFileQueryParam &
  RequestParameters;

export interface AgentsGetFileQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsGetFileQueryParam {
  queryParameters: AgentsGetFileQueryParamProperties;
}

export type AgentsGetFileParameters = AgentsGetFileQueryParam &
  RequestParameters;

export interface AgentsGetFileContentQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsGetFileContentQueryParam {
  queryParameters: AgentsGetFileContentQueryParamProperties;
}

export type AgentsGetFileContentParameters = AgentsGetFileContentQueryParam &
  RequestParameters;

export interface AgentsListVectorStoresQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
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
  queryParameters: AgentsListVectorStoresQueryParamProperties;
}

export type AgentsListVectorStoresParameters =
  AgentsListVectorStoresQueryParam & RequestParameters;

export interface AgentsCreateVectorStoreBodyParam {
  body: VectorStoreOptions;
}

export interface AgentsCreateVectorStoreQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsCreateVectorStoreQueryParam {
  queryParameters: AgentsCreateVectorStoreQueryParamProperties;
}

export type AgentsCreateVectorStoreParameters =
  AgentsCreateVectorStoreQueryParam &
    AgentsCreateVectorStoreBodyParam &
    RequestParameters;

export interface AgentsGetVectorStoreQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsGetVectorStoreQueryParam {
  queryParameters: AgentsGetVectorStoreQueryParamProperties;
}

export type AgentsGetVectorStoreParameters = AgentsGetVectorStoreQueryParam &
  RequestParameters;

export interface AgentsModifyVectorStoreBodyParam {
  body: VectorStoreUpdateOptions;
}

export interface AgentsModifyVectorStoreQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsModifyVectorStoreQueryParam {
  queryParameters: AgentsModifyVectorStoreQueryParamProperties;
}

export type AgentsModifyVectorStoreParameters =
  AgentsModifyVectorStoreQueryParam &
    AgentsModifyVectorStoreBodyParam &
    RequestParameters;

export interface AgentsDeleteVectorStoreQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsDeleteVectorStoreQueryParam {
  queryParameters: AgentsDeleteVectorStoreQueryParamProperties;
}

export type AgentsDeleteVectorStoreParameters =
  AgentsDeleteVectorStoreQueryParam & RequestParameters;

export interface AgentsListVectorStoreFilesQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
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
  queryParameters: AgentsListVectorStoreFilesQueryParamProperties;
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

export interface AgentsCreateVectorStoreFileQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsCreateVectorStoreFileQueryParam {
  queryParameters: AgentsCreateVectorStoreFileQueryParamProperties;
}

export type AgentsCreateVectorStoreFileParameters =
  AgentsCreateVectorStoreFileQueryParam &
    AgentsCreateVectorStoreFileBodyParam &
    RequestParameters;

export interface AgentsGetVectorStoreFileQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsGetVectorStoreFileQueryParam {
  queryParameters: AgentsGetVectorStoreFileQueryParamProperties;
}

export type AgentsGetVectorStoreFileParameters =
  AgentsGetVectorStoreFileQueryParam & RequestParameters;

export interface AgentsDeleteVectorStoreFileQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsDeleteVectorStoreFileQueryParam {
  queryParameters: AgentsDeleteVectorStoreFileQueryParamProperties;
}

export type AgentsDeleteVectorStoreFileParameters =
  AgentsDeleteVectorStoreFileQueryParam & RequestParameters;

export interface AgentsCreateVectorStoreFileBatchBodyParam {
  body: {
    file_ids?: string[];
    data_sources?: Array<VectorStoreDataSource>;
    chunking_strategy?: VectorStoreChunkingStrategyRequest;
  };
}

export interface AgentsCreateVectorStoreFileBatchQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsCreateVectorStoreFileBatchQueryParam {
  queryParameters: AgentsCreateVectorStoreFileBatchQueryParamProperties;
}

export type AgentsCreateVectorStoreFileBatchParameters =
  AgentsCreateVectorStoreFileBatchQueryParam &
    AgentsCreateVectorStoreFileBatchBodyParam &
    RequestParameters;

export interface AgentsGetVectorStoreFileBatchQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsGetVectorStoreFileBatchQueryParam {
  queryParameters: AgentsGetVectorStoreFileBatchQueryParamProperties;
}

export type AgentsGetVectorStoreFileBatchParameters =
  AgentsGetVectorStoreFileBatchQueryParam & RequestParameters;

export interface AgentsCancelVectorStoreFileBatchQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentsCancelVectorStoreFileBatchQueryParam {
  queryParameters: AgentsCancelVectorStoreFileBatchQueryParamProperties;
}

export type AgentsCancelVectorStoreFileBatchParameters =
  AgentsCancelVectorStoreFileBatchQueryParam & RequestParameters;

export interface AgentsListVectorStoreFileBatchFilesQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
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
  queryParameters: AgentsListVectorStoreFileBatchFilesQueryParamProperties;
}

export type AgentsListVectorStoreFileBatchFilesParameters =
  AgentsListVectorStoreFileBatchFilesQueryParam & RequestParameters;

export interface ConnectionsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConnectionsGetQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ConnectionsGetQueryParam {
  queryParameters: ConnectionsGetQueryParamProperties;
}

export interface ConnectionsGetHeaderParam {
  headers?: RawHttpHeadersInput & ConnectionsGetHeaders;
}

export type ConnectionsGetParameters = ConnectionsGetQueryParam &
  ConnectionsGetHeaderParam &
  RequestParameters;

export interface ConnectionsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConnectionsListQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
  /**
   * Specific type of connection to return in list
   *
   * Possible values: "AzureOpenAI", "AzureBlob", "CognitiveSearch", "CosmosDB", "ApiKey"
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
  queryParameters: ConnectionsListQueryParamProperties;
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

export interface EvaluationsGetQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface EvaluationsGetQueryParam {
  queryParameters: EvaluationsGetQueryParamProperties;
}

export interface EvaluationsGetHeaderParam {
  headers?: RawHttpHeadersInput & EvaluationsGetHeaders;
}

export type EvaluationsGetParameters = EvaluationsGetQueryParam &
  EvaluationsGetHeaderParam &
  RequestParameters;

export interface EvaluationsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface EvaluationsListQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface EvaluationsListQueryParam {
  queryParameters: EvaluationsListQueryParamProperties;
}

export interface EvaluationsListHeaderParam {
  headers?: RawHttpHeadersInput & EvaluationsListHeaders;
}

export type EvaluationsListParameters = EvaluationsListQueryParam &
  EvaluationsListHeaderParam &
  RequestParameters;

export interface EvaluationsCreateRunBodyParam {
  /** Evalution to be run */
  body: Evaluation;
}

export interface EvaluationsCreateRunQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface EvaluationsCreateRunQueryParam {
  queryParameters: EvaluationsCreateRunQueryParamProperties;
}

export type EvaluationsCreateRunParameters = EvaluationsCreateRunQueryParam &
  EvaluationsCreateRunBodyParam &
  RequestParameters;

export interface DatasetsListLatestDatasetsQueryParamProperties {
  /** Continuation token for pagination. This is the nextLink from the previous response. */
  $continuationToken?: string;
  /**
   * View type for including/excluding (for example) archived entities.
   *
   * Possible values: "ActiveOnly", "ArchivedOnly", "All"
   */
  listViewType?: ListViewType;
}

export interface DatasetsListLatestDatasetsQueryParam {
  queryParameters?: DatasetsListLatestDatasetsQueryParamProperties;
}

export type DatasetsListLatestDatasetsParameters =
  DatasetsListLatestDatasetsQueryParam & RequestParameters;

export interface DatasetsListDatasetVersionsQueryParamProperties {
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

export interface DatasetsListDatasetVersionsQueryParam {
  queryParameters?: DatasetsListDatasetVersionsQueryParamProperties;
}

export type DatasetsListDatasetVersionsParameters =
  DatasetsListDatasetVersionsQueryParam & RequestParameters;
export type DatasetsDeleteVersionParameters = RequestParameters;
export type DatasetsGetVersionParameters = RequestParameters;

export interface DatasetsCreateOrUpdateBodyParam {
  /** Version entity to create or update. */
  body: DatasetVersion;
}

export type DatasetsCreateOrUpdateParameters = DatasetsCreateOrUpdateBodyParam &
  RequestParameters;

export interface DatasetsCreateOrGetStartPendingUploadBodyParam {
  /** Pensing upload request. */
  body: PendingUploadRequest;
}

export type DatasetsCreateOrGetStartPendingUploadParameters =
  DatasetsCreateOrGetStartPendingUploadBodyParam & RequestParameters;

export interface IndexesListLatestIndexesQueryParamProperties {
  /** Continuation token for pagination. This is the nextLink from the previous response. */
  $continuationToken?: string;
  /**
   * View type for including/excluding (for example) archived entities.
   *
   * Possible values: "ActiveOnly", "ArchivedOnly", "All"
   */
  listViewType?: ListViewType;
}

export interface IndexesListLatestIndexesQueryParam {
  queryParameters?: IndexesListLatestIndexesQueryParamProperties;
}

export type IndexesListLatestIndexesParameters =
  IndexesListLatestIndexesQueryParam & RequestParameters;

export interface IndexesGetQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface IndexesGetQueryParam {
  queryParameters: IndexesGetQueryParamProperties;
}

export type IndexesGetParameters = IndexesGetQueryParam & RequestParameters;

export interface IndexesCreateIndexBodyParam {
  /** Properties of an Index Version. */
  body: Index;
}

export interface IndexesCreateIndexQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface IndexesCreateIndexQueryParam {
  queryParameters: IndexesCreateIndexQueryParamProperties;
}

export type IndexesCreateIndexParameters = IndexesCreateIndexQueryParam &
  IndexesCreateIndexBodyParam &
  RequestParameters;

export interface IndexesListIndexVersionsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
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

export interface IndexesListIndexVersionsQueryParam {
  queryParameters: IndexesListIndexVersionsQueryParamProperties;
}

export type IndexesListIndexVersionsParameters =
  IndexesListIndexVersionsQueryParam & RequestParameters;
export type IndexesDeleteVersionParameters = RequestParameters;

export interface DeploymentsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DeploymentsGetQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface DeploymentsGetQueryParam {
  queryParameters: DeploymentsGetQueryParamProperties;
}

export interface DeploymentsGetHeaderParam {
  headers?: RawHttpHeadersInput & DeploymentsGetHeaders;
}

export type DeploymentsGetParameters = DeploymentsGetQueryParam &
  DeploymentsGetHeaderParam &
  RequestParameters;

export interface DeploymentsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DeploymentsListQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
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
  queryParameters: DeploymentsListQueryParamProperties;
}

export interface DeploymentsListHeaderParam {
  headers?: RawHttpHeadersInput & DeploymentsListHeaders;
}

export type DeploymentsListParameters = DeploymentsListQueryParam &
  DeploymentsListHeaderParam &
  RequestParameters;
