// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  AssistantCreationOptions,
  ListSortOrder,
  UpdateAssistantOptions,
  AssistantThreadCreationOptions,
  UpdateAssistantThreadOptions,
  ThreadMessageOptions,
  CreateRunOptions,
  ToolOutput,
  CreateAndRunThreadOptions,
  FilePurpose,
  VectorStoreOptions,
  VectorStoreUpdateOptions,
  VectorStoreFileStatusFilter,
} from "./models.js";

export interface CreateAssistantBodyParam {
  /** Body parameter. */
  body: AssistantCreationOptions;
}

export type CreateAssistantParameters = CreateAssistantBodyParam &
  RequestParameters;

export interface ListAssistantsQueryParamProperties {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /** Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order. */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

export interface ListAssistantsQueryParam {
  queryParameters?: ListAssistantsQueryParamProperties;
}

export type ListAssistantsParameters = ListAssistantsQueryParam &
  RequestParameters;
export type GetAssistantParameters = RequestParameters;

export interface UpdateAssistantBodyParam {
  /** Body parameter. */
  body: UpdateAssistantOptions;
}

export type UpdateAssistantParameters = UpdateAssistantBodyParam &
  RequestParameters;
export type DeleteAssistantParameters = RequestParameters;

export interface CreateThreadBodyParam {
  /** Body parameter. */
  body: AssistantThreadCreationOptions;
}

export type CreateThreadParameters = CreateThreadBodyParam & RequestParameters;
export type GetThreadParameters = RequestParameters;

export interface UpdateThreadBodyParam {
  /** Body parameter. */
  body: UpdateAssistantThreadOptions;
}

export type UpdateThreadParameters = UpdateThreadBodyParam & RequestParameters;
export type DeleteThreadParameters = RequestParameters;

export interface CreateMessageBodyParam {
  /** Body parameter. */
  body: ThreadMessageOptions;
}

export type CreateMessageParameters = CreateMessageBodyParam &
  RequestParameters;

export interface ListMessagesQueryParamProperties {
  /** Filter messages by the run ID that generated them. */
  runId?: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /** Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order. */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

export interface ListMessagesQueryParam {
  queryParameters?: ListMessagesQueryParamProperties;
}

export type ListMessagesParameters = ListMessagesQueryParam & RequestParameters;
export type GetMessageParameters = RequestParameters;

export interface UpdateMessageBodyParam {
  body?: { metadata?: Record<string, string> | null };
}

export type UpdateMessageParameters = UpdateMessageBodyParam &
  RequestParameters;

export interface CreateRunBodyParam {
  body?: CreateRunOptions;
}

export type CreateRunParameters = CreateRunBodyParam & RequestParameters;

export interface ListRunsQueryParamProperties {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /** Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order. */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

export interface ListRunsQueryParam {
  queryParameters?: ListRunsQueryParamProperties;
}

export type ListRunsParameters = ListRunsQueryParam & RequestParameters;
export type GetRunParameters = RequestParameters;

export interface UpdateRunBodyParam {
  body?: { metadata?: Record<string, string> | null };
}

export type UpdateRunParameters = UpdateRunBodyParam & RequestParameters;

export interface SubmitToolOutputsToRunBodyParam {
  body?: { tool_outputs: Array<ToolOutput>; stream?: boolean | null };
}

export type SubmitToolOutputsToRunParameters = SubmitToolOutputsToRunBodyParam &
  RequestParameters;
export type CancelRunParameters = RequestParameters;

export interface CreateThreadAndRunBodyParam {
  /** Body parameter. */
  body: CreateAndRunThreadOptions;
}

export type CreateThreadAndRunParameters = CreateThreadAndRunBodyParam &
  RequestParameters;
export type GetRunStepParameters = RequestParameters;

export interface ListRunStepsQueryParamProperties {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /** Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order. */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

export interface ListRunStepsQueryParam {
  queryParameters?: ListRunStepsQueryParamProperties;
}

export type ListRunStepsParameters = ListRunStepsQueryParam & RequestParameters;

export interface ListFilesQueryParamProperties {
  /** A value that, when provided, limits list results to files matching the corresponding purpose. */
  purpose?: FilePurpose;
}

export interface ListFilesQueryParam {
  queryParameters?: ListFilesQueryParamProperties;
}

export type ListFilesParameters = ListFilesQueryParam & RequestParameters;

export interface UploadFileBodyParam {
  body?:
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

export interface UploadFileMediaTypesParam {
  /** The 'content-type' header value, always 'multipart/format-data' for this operation. */
  contentType: "multipart/form-data";
}

export type UploadFileParameters = UploadFileMediaTypesParam &
  UploadFileBodyParam &
  RequestParameters;
export type DeleteFileParameters = RequestParameters;
export type GetFileParameters = RequestParameters;
export type GetFileContentParameters = RequestParameters;

export interface ListVectorStoresQueryParamProperties {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /** Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order. */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

export interface ListVectorStoresQueryParam {
  queryParameters?: ListVectorStoresQueryParamProperties;
}

export type ListVectorStoresParameters = ListVectorStoresQueryParam &
  RequestParameters;

export interface CreateVectorStoreBodyParam {
  /** Body parameter. */
  body: VectorStoreOptions;
}

export type CreateVectorStoreParameters = CreateVectorStoreBodyParam &
  RequestParameters;
export type GetVectorStoreParameters = RequestParameters;

export interface ModifyVectorStoreBodyParam {
  /** Body parameter. */
  body: VectorStoreUpdateOptions;
}

export type ModifyVectorStoreParameters = ModifyVectorStoreBodyParam &
  RequestParameters;
export type DeleteVectorStoreParameters = RequestParameters;

export interface ListVectorStoreFilesQueryParamProperties {
  /** Filter by file status. */
  filter?: VectorStoreFileStatusFilter;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /** Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order. */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

export interface ListVectorStoreFilesQueryParam {
  queryParameters?: ListVectorStoreFilesQueryParamProperties;
}

export type ListVectorStoreFilesParameters = ListVectorStoreFilesQueryParam &
  RequestParameters;

export interface CreateVectorStoreFileBodyParam {
  body?: { file_id: string };
}

export type CreateVectorStoreFileParameters = CreateVectorStoreFileBodyParam &
  RequestParameters;
export type GetVectorStoreFileParameters = RequestParameters;
export type DeleteVectorStoreFileParameters = RequestParameters;

export interface CreateVectorStoreFileBatchBodyParam {
  body?: { file_ids: string[] };
}

export type CreateVectorStoreFileBatchParameters =
  CreateVectorStoreFileBatchBodyParam & RequestParameters;
export type GetVectorStoreFileBatchParameters = RequestParameters;
export type CancelVectorStoreFileBatchParameters = RequestParameters;

export interface ListVectorStoreFileBatchFilesQueryParamProperties {
  /** Filter by file status. */
  filter?: VectorStoreFileStatusFilter;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /** Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order. */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

export interface ListVectorStoreFileBatchFilesQueryParam {
  queryParameters?: ListVectorStoreFileBatchFilesQueryParamProperties;
}

export type ListVectorStoreFileBatchFilesParameters =
  ListVectorStoreFileBatchFilesQueryParam & RequestParameters;
