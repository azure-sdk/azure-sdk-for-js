// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  VectorStoreChunkingStrategyRequestUnion,
  FilePurpose,
  ListSortOrder,
  RunIncludes,
  VectorStoreFileStatusFilter,
} from "../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ListVectorStoreFileBatchFilesOptionalParams
  extends OperationOptions {
  /** Filter by file status. */
  filter?: VectorStoreFileStatusFilter;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /** Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order. */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

/** Optional parameters. */
export interface CancelVectorStoreFileBatchOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GetVectorStoreFileBatchOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface CreateVectorStoreFileBatchOptionalParams
  extends OperationOptions {
  /** The chunking strategy used to chunk the file(s). If not set, will use the auto strategy. */
  chunkingStrategy?: VectorStoreChunkingStrategyRequestUnion;
}

/** Optional parameters. */
export interface DeleteVectorStoreFileOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetVectorStoreFileOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CreateVectorStoreFileOptionalParams extends OperationOptions {
  /** The chunking strategy used to chunk the file(s). If not set, will use the auto strategy. */
  chunkingStrategy?: VectorStoreChunkingStrategyRequestUnion;
}

/** Optional parameters. */
export interface ListVectorStoreFilesOptionalParams extends OperationOptions {
  /** Filter by file status. */
  filter?: VectorStoreFileStatusFilter;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /** Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order. */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

/** Optional parameters. */
export interface DeleteVectorStoreOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ModifyVectorStoreOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetVectorStoreOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CreateVectorStoreOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListVectorStoresOptionalParams extends OperationOptions {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /** Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order. */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

/** Optional parameters. */
export interface GetFileContentOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetFileOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DeleteFileOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface UploadFileOptionalParams extends OperationOptions {
  /** A filename to associate with the uploaded data. */
  filename?: string;
}

/** Optional parameters. */
export interface ListFilesOptionalParams extends OperationOptions {
  /** A value that, when provided, limits list results to files matching the corresponding purpose. */
  purpose?: FilePurpose;
}

/** Optional parameters. */
export interface ListRunStepsOptionalParams extends OperationOptions {
  /** A list of additional fields to include in the response. */
  runInclude?: RunIncludes[];
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /** Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order. */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

/** Optional parameters. */
export interface GetRunStepOptionalParams extends OperationOptions {
  /** A list of additional fields to include in the response. */
  runInclude?: RunIncludes[];
}

/** Optional parameters. */
export interface CreateThreadAndRunOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CancelRunOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface SubmitToolOutputsToRunOptionalParams extends OperationOptions {
  /** If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message. */
  stream?: boolean | null;
}

/** Optional parameters. */
export interface UpdateRunOptionalParams extends OperationOptions {
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** Optional parameters. */
export interface GetRunOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListRunsOptionalParams extends OperationOptions {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /** Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order. */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

/** Optional parameters. */
export interface CreateRunOptionalParams extends OperationOptions {
  /** A list of additional fields to include in the response. */
  runInclude?: RunIncludes[];
}

/** Optional parameters. */
export interface UpdateMessageOptionalParams extends OperationOptions {
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string> | null;
}

/** Optional parameters. */
export interface GetMessageOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListMessagesOptionalParams extends OperationOptions {
  /** Filter messages by the run ID that generated them. */
  runId?: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /** Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order. */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

/** Optional parameters. */
export interface CreateMessageOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DeleteThreadOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface UpdateThreadOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetThreadOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CreateThreadOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DeleteAssistantOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface UpdateAssistantOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetAssistantOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListAssistantsOptionalParams extends OperationOptions {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. */
  limit?: number;
  /** Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order. */
  order?: ListSortOrder;
  /** A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. */
  after?: string;
  /** A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. */
  before?: string;
}

/** Optional parameters. */
export interface CreateAssistantOptionalParams extends OperationOptions {}
