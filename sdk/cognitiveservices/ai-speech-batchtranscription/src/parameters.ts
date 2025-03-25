// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RequestParameters } from "@azure-rest/core-client";
import type { TranscriptionJob } from "./models.js";

export interface StartTranscriptionBodyParam {
  /** The resource instance. */
  body: TranscriptionJob;
}

export type StartTranscriptionParameters = StartTranscriptionBodyParam & RequestParameters;
export type GetTranscriptionParameters = RequestParameters;
export type DeleteTranscriptionParameters = RequestParameters;

export interface ListTranscriptionsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** Filter the result list using the given expression. */
  filter?: string;
}

export interface ListTranscriptionsQueryParam {
  queryParameters?: ListTranscriptionsQueryParamProperties;
}

export type ListTranscriptionsParameters = ListTranscriptionsQueryParam & RequestParameters;

export interface ListTranscriptionFilesQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** Filter the result list using the given expression. */
  filter?: string;
}

export interface ListTranscriptionFilesQueryParam {
  queryParameters?: ListTranscriptionFilesQueryParamProperties;
}

export type ListTranscriptionFilesParameters = ListTranscriptionFilesQueryParam & RequestParameters;
