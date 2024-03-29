// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import { RegistrationOutput, PagedRegistrationOutput } from "./outputModels";

/** The request has succeeded. */
export interface GetRegistration200Response extends HttpResponse {
  status: "200";
  body: RegistrationOutput;
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

/** The request has succeeded. */
export interface CreateOrReplaceRegistration200Response extends HttpResponse {
  status: "200";
  body: RegistrationOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateOrReplaceRegistration201Response extends HttpResponse {
  status: "201";
  body: RegistrationOutput;
}

export interface CreateOrReplaceRegistrationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateOrReplaceRegistrationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateOrReplaceRegistrationDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteRegistration204Response extends HttpResponse {
  status: "204";
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

/** The request has succeeded. */
export interface ListRegistrations200Response extends HttpResponse {
  status: "200";
  body: PagedRegistrationOutput;
}

export interface ListRegistrationsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListRegistrationsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListRegistrationsDefaultHeaders;
}
