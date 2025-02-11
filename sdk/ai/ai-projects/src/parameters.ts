// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type {
  ConnectionType,
  Evaluation,
  EvaluationSchedule,
} from "./models.js";

export type GetWorkspaceParameters = RequestParameters;

export interface ListConnectionsQueryParamProperties {
  /** Category of the workspace connection. */
  category?: ConnectionType;
  /** Indicates whether to list datastores. Service default: do not list datastores. */
  includeAll?: boolean;
  /** Target of the workspace connection. */
  target?: string;
}

export interface ListConnectionsQueryParam {
  queryParameters?: ListConnectionsQueryParamProperties;
}

export type ListConnectionsParameters = ListConnectionsQueryParam &
  RequestParameters;
export type GetConnectionParameters = RequestParameters;

export interface GetConnectionWithSecretsBodyParam {
  body: { ignored: string };
}

export type GetConnectionWithSecretsParameters =
  GetConnectionWithSecretsBodyParam & RequestParameters;
export type GetAppInsightsParameters = RequestParameters;

export interface GetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface GetHeaderParam {
  headers?: RawHttpHeadersInput & GetHeaders;
}

export type GetParameters = GetHeaderParam & RequestParameters;

export interface CreateBodyParam {
  /** Evaluation to run. */
  body: Evaluation;
}

export type CreateParameters = CreateBodyParam & RequestParameters;

export interface ListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ListQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListQueryParam {
  queryParameters?: ListQueryParamProperties;
}

export interface ListHeaderParam {
  headers?: RawHttpHeadersInput & ListHeaders;
}

export type ListParameters = ListQueryParam &
  ListHeaderParam &
  RequestParameters;

export interface UpdateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The resource instance. */
export type EvaluationResourceMergeAndPatch = Partial<Evaluation>;

export interface UpdateBodyParam {
  /** The resource instance. */
  body: EvaluationResourceMergeAndPatch;
}

export interface UpdateHeaderParam {
  headers?: RawHttpHeadersInput & UpdateHeaders;
}

export interface UpdateMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type UpdateParameters = UpdateHeaderParam &
  UpdateMediaTypesParam &
  UpdateBodyParam &
  RequestParameters;

export interface GetScheduleHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface GetScheduleHeaderParam {
  headers?: RawHttpHeadersInput & GetScheduleHeaders;
}

export type GetScheduleParameters = GetScheduleHeaderParam & RequestParameters;

export interface CreateOrReplaceScheduleHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface CreateOrReplaceScheduleBodyParam {
  /** The resource instance. */
  body: EvaluationSchedule;
}

export interface CreateOrReplaceScheduleHeaderParam {
  headers?: RawHttpHeadersInput & CreateOrReplaceScheduleHeaders;
}

export type CreateOrReplaceScheduleParameters =
  CreateOrReplaceScheduleHeaderParam &
    CreateOrReplaceScheduleBodyParam &
    RequestParameters;

export interface ListScheduleHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ListScheduleQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListScheduleQueryParam {
  queryParameters?: ListScheduleQueryParamProperties;
}

export interface ListScheduleHeaderParam {
  headers?: RawHttpHeadersInput & ListScheduleHeaders;
}

export type ListScheduleParameters = ListScheduleQueryParam &
  ListScheduleHeaderParam &
  RequestParameters;
export type DisableScheduleParameters = RequestParameters;
