// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RequestParameters } from "@azure-rest/core-client";
import type { Transcription, TranscriptionUpdate } from "./models.js";

export interface SubmitTranscriptionBodyParam {
  /** Transcription */
  body: Transcription;
}

export type SubmitTranscriptionParameters = SubmitTranscriptionBodyParam & RequestParameters;

export interface GetTranscriptionsQueryParamProperties {
  /** Number of transcriptions that will be skipped. */
  skip?: number;
  /** Number of transcriptions that will be included after skipping. */
  top?: number;
  /**
   * A filtering expression for selecting a subset of the available transcriptions.
   *             - Supported properties: displayName, description, createdDateTime, lastActionDateTime, status, locale.
   *             - Operators:
   *               - eq, ne are supported for all properties.
   *               - gt, ge, lt, le are supported for createdDateTime and lastActionDateTime.
   *               - and, or, not are supported.
   *             - Example:
   *               filter=createdDateTime gt 2022-02-01T11:00:00Z
   */
  filter?: string;
}

export interface GetTranscriptionsQueryParam {
  queryParameters?: GetTranscriptionsQueryParamProperties;
}

export type GetTranscriptionsParameters = GetTranscriptionsQueryParam & RequestParameters;

export interface GetTranscriptionFilesQueryParamProperties {
  /** Number of transcription files that will be skipped. */
  skip?: number;
  /** Number of transcription files that will be included after skipping. */
  top?: number;
  /**
   * This parameter defines the duration in minutes for which an SAS url should be valid.
   *             The parameter can only be used for operations on speech resources that don't have BYOS enabled and transcriptions without a destinationContainerUrl. For speech resources
   *             that don't have BYOS enabled, the default SAS validity duration is 12 hours.
   *             For speech resources with BYOS and transcriptions with a destinationContainerUrl, returned urls do not contain an SAS token.
   */
  sasLifetimeMinutes?: number;
}

export interface GetTranscriptionFilesQueryParam {
  queryParameters?: GetTranscriptionFilesQueryParamProperties;
}

export type GetTranscriptionFilesParameters = GetTranscriptionFilesQueryParam & RequestParameters;
export type GetTranscriptionParameters = RequestParameters;
/** Transcription Update */
export type TranscriptionUpdateResourceMergeAndPatch = Partial<TranscriptionUpdate>;

export interface PatchTranscriptionBodyParam {
  /** Transcription Update */
  body: TranscriptionUpdate;
}

export interface PatchTranscriptionMediaTypesParam {
  /** request content type */
  contentType: "application/json" | "application/merge-patch+json";
}

export type PatchTranscriptionParameters = PatchTranscriptionMediaTypesParam &
  PatchTranscriptionBodyParam &
  RequestParameters;
export type DeleteTranscriptionParameters = RequestParameters;
