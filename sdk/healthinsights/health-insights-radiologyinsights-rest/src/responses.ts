// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse } from "@azure-rest/core-client";
import type {
  RadiologyInsightsJobOutput,
  HealthInsightsErrorResponseOutput,
} from "./outputModels.js";

/** Get the headers of the succeeded request */
export interface GetJob200Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
  /** An opaque, globally-unique, server-generated string identifier for the request. */
  "x-ms-request-id"?: string;
}
/** The request has succeeded. Get job response */
export interface GetJob200Response extends HttpResponse {
  /** The body of the request */
  body: RadiologyInsightsJobOutput;
  /** The header of the request */
  headers: RawHttpHeaders & GetJob200Headers;
  /** The status of the request */
  status: "200";
}

/** Get the default headers of the request */
export interface GetJobDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
  /** An opaque, globally-unique, server-generated string identifier for the request. */
  "x-ms-request-id"?: string;
}
/** Get the default Response */
export interface GetJobDefaultResponse extends HttpResponse {
  /** The body of the default response */
  body: HealthInsightsErrorResponseOutput;
  /** The headers of the default response */
  headers: RawHttpHeaders & GetJobDefaultHeaders;
  /** The status of the default response */
  status: string;
}

/** Creation of the Headers of the request */
export interface CreateJob200Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
  /** An opaque, globally-unique, server-generated string identifier for the request. */
  "x-ms-request-id"?: string;
}
/** The request has succeeded. Create job response */
export interface CreateJob200Response extends HttpResponse {
  /** The body of the request */
  body: RadiologyInsightsJobOutput;
  /** The headers of the request */
  headers: RawHttpHeaders & CreateJob200Headers;
  /** The status of the request */
  status: "200";
}
/** Creation of the new resource headers after request has succeeded */
export interface CreateJob201Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
  /** An opaque, globally-unique, server-generated string identifier for the request. */
  "x-ms-request-id"?: string;
}
/** The request has succeeded and a new resource has been created as a result. */
export interface CreateJob201Response extends HttpResponse {
  /** The body of the new resource created */
  body: RadiologyInsightsJobOutput;
  /** The headers of the new resource created */
  headers: RawHttpHeaders & CreateJob201Headers;
  /** The status of the new resource created */
  status: "201";
}

/** The default header request creation */
export interface CreateJobDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
  /** An opaque, globally-unique, server-generated string identifier for the request. */
  "x-ms-request-id"?: string;
}
/** The default header response creation */
export interface CreateJobDefaultResponse extends HttpResponse {
  /** The body of the default response */
  body: HealthInsightsErrorResponseOutput;
  /** The headers of the default response */
  headers: RawHttpHeaders & CreateJobDefaultHeaders;
  /** The status of the default response */
  status: string;
}
/** The final response for long-running createJob operation */
export interface CreateJobLogicalResponse extends HttpResponse {
  /** The body of the final response */
  body: RadiologyInsightsJobOutput;
  /** The status of the final response */
  status: "200";
}
