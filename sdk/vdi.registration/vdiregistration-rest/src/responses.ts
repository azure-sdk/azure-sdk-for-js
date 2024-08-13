// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  StorageOutput,
  ProcessingOutput,
  AiTaskConfigurationOutput,
  RepeatabilityResultOutput,
  PagedRegistrationOutput,
} from "./outputModels.js";

export interface GetRegistration200Headers {
  /** The entity tag for the response. */
  etag?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface GetRegistration200Response extends HttpResponse {
  status: "200";
  body: {
    storage: StorageOutput;
    processing: ProcessingOutput;
    customProperties: Record<string, any>;
    aiTaskConfigurations: Record<string, AiTaskConfigurationOutput>;
    analytics: Record<string, any>;
    status: string;
  };
  headers: RawHttpHeaders & GetRegistration200Headers;
}

export interface GetRegistrationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetRegistrationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetRegistrationDefaultHeaders;
}

export interface CreateOrUpdateRegistration200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** The entity tag for the response. */
  etag?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface CreateOrUpdateRegistration200Response extends HttpResponse {
  status: "200";
  body: {
    storage: StorageOutput;
    processing: ProcessingOutput;
    customProperties: Record<string, any>;
    aiTaskConfigurations: Record<string, AiTaskConfigurationOutput>;
    analytics: Record<string, any>;
    status: string;
  };
  headers: RawHttpHeaders & CreateOrUpdateRegistration200Headers;
}

export interface CreateOrUpdateRegistration201Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** The entity tag for the response. */
  etag?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateOrUpdateRegistration201Response extends HttpResponse {
  status: "201";
  body: {
    storage: StorageOutput;
    processing: ProcessingOutput;
    customProperties: Record<string, any>;
    aiTaskConfigurations: Record<string, AiTaskConfigurationOutput>;
    analytics: Record<string, any>;
    status: string;
  };
  headers: RawHttpHeaders & CreateOrUpdateRegistration201Headers;
}

export interface CreateOrUpdateRegistrationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateOrUpdateRegistrationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateOrUpdateRegistrationDefaultHeaders;
}

export interface DeleteRegistration204Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteRegistration204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & DeleteRegistration204Headers;
}

export interface DeleteRegistrationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeleteRegistrationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeleteRegistrationDefaultHeaders;
}

export interface ListRegistration200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ListRegistration200Response extends HttpResponse {
  status: "200";
  body: PagedRegistrationOutput;
  headers: RawHttpHeaders & ListRegistration200Headers;
}

export interface ListRegistrationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListRegistrationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListRegistrationDefaultHeaders;
}
