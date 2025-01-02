// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";
import { FilePurpose } from "../models/models.js";

/** Optional parameters. */
export interface GetAudioTranscriptionAsPlainTextOptionalParams
  extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType?: string;
}

/** Optional parameters. */
export interface GetAudioTranscriptionAsResponseObjectOptionalParams
  extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType?: string;
}

/** Optional parameters. */
export interface GetAudioTranslationAsPlainTextOptionalParams
  extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType?: string;
}

/** Optional parameters. */
export interface GetAudioTranslationAsResponseObjectOptionalParams
  extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType?: string;
}

/** Optional parameters. */
export interface GetCompletionsOptionalParams extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

/** Optional parameters. */
export interface GetChatCompletionsOptionalParams extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

/** Optional parameters. */
export interface GetImageGenerationsOptionalParams extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

/** Optional parameters. */
export interface GenerateSpeechFromTextOptionalParams extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

/** Optional parameters. */
export interface GetEmbeddingsOptionalParams extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

/** Optional parameters. */
export interface ListFilesOptionalParams extends OperationOptions {
  /** A value that, when provided, limits list results to files matching the corresponding purpose. */
  purpose?: FilePurpose;
}

/** Optional parameters. */
export interface UploadFileOptionalParams extends OperationOptions {
  /** The 'content-type' header value, always 'multipart/format-data' for this operation. */
  contentType?: string;
  /** A filename to associate with the uploaded data. */
  filename?: string;
}

/** Optional parameters. */
export interface DeleteFileOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetFileOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetFileContentOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListBatchesOptionalParams extends OperationOptions {
  /** Identifier for the last event from the previous pagination request. */
  after?: string;
  /** Number of batches to retrieve. Defaults to 20. */
  limit?: number;
}

/** Optional parameters. */
export interface CreateBatchOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetBatchOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CancelBatchOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CreateUploadOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface AddUploadPartOptionalParams extends OperationOptions {
  /** The multipart/form-data content-type header for the operation. */
  contentType?: string;
}

/** Optional parameters. */
export interface CompleteUploadOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CancelUploadOptionalParams extends OperationOptions {}
