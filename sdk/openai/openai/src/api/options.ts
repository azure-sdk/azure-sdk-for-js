// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FilePurpose } from "../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface CancelUploadOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CompleteUploadOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface AddUploadPartOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CreateUploadOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CancelBatchOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetBatchOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CreateBatchOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListBatchesOptionalParams extends OperationOptions {
  /** Identifier for the last event from the previous pagination request. */
  after?: string;
  /** Number of batches to retrieve. Defaults to 20. */
  limit?: number;
}

/** Optional parameters. */
export interface GetFileContentOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetFileOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DeleteFileOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface UploadFileOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ListFilesOptionalParams extends OperationOptions {
  /** A value that, when provided, limits list results to files matching the corresponding purpose. */
  purpose?: FilePurpose;
}

/** Optional parameters. */
export interface GetEmbeddingsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GenerateSpeechFromTextOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GetImageGenerationsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetChatCompletionsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetCompletionsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetAudioTranslationAsResponseObjectOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GetAudioTranslationAsPlainTextOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GetAudioTranscriptionAsResponseObjectOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GetAudioTranscriptionAsPlainTextOptionalParams
  extends OperationOptions {}
