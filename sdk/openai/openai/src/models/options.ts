// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

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
