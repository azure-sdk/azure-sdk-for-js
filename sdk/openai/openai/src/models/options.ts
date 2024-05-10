// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import {
  ListSortOrder,
  FilePurpose,
  VectorStoreFileStatusFilter,
} from "./models.js";

export interface CreateAssistantOptionalParams extends OperationOptions {}

export interface ListAssistantsOptionalParams extends OperationOptions {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /** Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order. */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

export interface GetAssistantOptionalParams extends OperationOptions {}

export interface UpdateAssistantOptionalParams extends OperationOptions {}

export interface DeleteAssistantOptionalParams extends OperationOptions {}

export interface CreateThreadOptionalParams extends OperationOptions {}

export interface GetThreadOptionalParams extends OperationOptions {}

export interface UpdateThreadOptionalParams extends OperationOptions {
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string>;
}

export interface DeleteThreadOptionalParams extends OperationOptions {}

export interface CreateMessageOptionalParams extends OperationOptions {
  /** A list of up to 10 file IDs to associate with the message, as used by tools like 'code_interpreter' or 'retrieval' that can read files. */
  fileIds?: string[];
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string>;
}

export interface ListMessagesOptionalParams extends OperationOptions {
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

export interface GetMessageOptionalParams extends OperationOptions {}

export interface UpdateMessageOptionalParams extends OperationOptions {
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string>;
}

export interface ListMessageFilesOptionalParams extends OperationOptions {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /** Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order. */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

export interface GetMessageFileOptionalParams extends OperationOptions {}

export interface CreateRunOptionalParams extends OperationOptions {}

export interface ListRunsOptionalParams extends OperationOptions {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /** Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order. */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

export interface GetRunOptionalParams extends OperationOptions {}

export interface UpdateRunOptionalParams extends OperationOptions {
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string>;
}

export interface SubmitToolOutputsToRunOptionalParams
  extends OperationOptions {}

export interface CancelRunOptionalParams extends OperationOptions {}

export interface CreateThreadAndRunOptionalParams extends OperationOptions {}

export interface GetRunStepOptionalParams extends OperationOptions {}

export interface ListRunStepsOptionalParams extends OperationOptions {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /** Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order. */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

export interface ListFilesOptionalParams extends OperationOptions {
  /** A value that, when provided, limits list results to files matching the corresponding purpose. */
  purpose?: FilePurpose;
}

export interface UploadFileOptionalParams extends OperationOptions {
  /** The 'content-type' header value, always 'multipart/format-data' for this operation. */
  contentType?: string;
}

export interface DeleteFileOptionalParams extends OperationOptions {}

export interface GetFileOptionalParams extends OperationOptions {}

export interface GetFileContentOptionalParams extends OperationOptions {}

export interface ListVectorStoresOptionalParams extends OperationOptions {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /** Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order. */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

export interface CreateVectorStoreOptionalParams extends OperationOptions {}

export interface GetVectorStoreOptionalParams extends OperationOptions {}

export interface ModifyVectorStoreOptionalParams extends OperationOptions {}

export interface DeleteVectorStoreOptionalParams extends OperationOptions {}

export interface ListVectorStoreFilesOptionalParams extends OperationOptions {
  /** Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`. */
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

export interface CreateVectorStoreFileOptionalParams extends OperationOptions {}

export interface GetVectoreStoreFileOptionalParams extends OperationOptions {}

export interface DeleteVectoreStoreFileOptionalParams
  extends OperationOptions {}

export interface CreateVectorStoreFileBatchOptionalParams
  extends OperationOptions {}

export interface GetVectorStoreFileBatchOptionalParams
  extends OperationOptions {}

export interface CancelVectorStoreFileBatchOptionalParams
  extends OperationOptions {}

export interface ListVectorStoreFileBatchFilesOptionalParams
  extends OperationOptions {
  /** Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`. */
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
