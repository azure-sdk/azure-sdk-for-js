// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  PagedApiResourceOutput,
  ApiResourceOutput,
  PagedApiDefinitionResourceOutput,
  ApiDefinitionResourceOutput,
  ExportSpecificationResourceOutput,
  PagedApiDeploymentResourceOutput,
  ApiDeploymentResourceOutput,
  PagedEnvironmentResourceOutput,
  EnvironmentResourceOutput,
  PagedApiVersionResourceOutput,
  ApiVersionResourceOutput,
} from "./outputModels";

export interface ListApis200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ListApis200Response extends HttpResponse {
  status: "200";
  body: PagedApiResourceOutput;
  headers: RawHttpHeaders & ListApis200Headers;
}

export interface ListApisDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListApisDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListApisDefaultHeaders;
}

export interface GetApi200Headers {
  /** The entity tag for the response. */
  etag?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface GetApi200Response extends HttpResponse {
  status: "200";
  body: ApiResourceOutput;
  headers: RawHttpHeaders & GetApi200Headers;
}

export interface GetApiDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetApiDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetApiDefaultHeaders;
}

export interface ListDefinitions200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ListDefinitions200Response extends HttpResponse {
  status: "200";
  body: PagedApiDefinitionResourceOutput;
  headers: RawHttpHeaders & ListDefinitions200Headers;
}

export interface ListDefinitionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListDefinitionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListDefinitionsDefaultHeaders;
}

export interface GetDefinition200Headers {
  /** The entity tag for the response. */
  etag?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface GetDefinition200Response extends HttpResponse {
  status: "200";
  body: ApiDefinitionResourceOutput;
  headers: RawHttpHeaders & GetDefinition200Headers;
}

export interface GetDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetDefinitionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetDefinitionDefaultHeaders;
}

export interface ExportSpecification200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: "accepted" | "rejected";
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ExportSpecification200Response extends HttpResponse {
  status: "200";
  body: ExportSpecificationResourceOutput;
  headers: RawHttpHeaders & ExportSpecification200Headers;
}

export interface ExportSpecificationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ExportSpecificationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ExportSpecificationDefaultHeaders;
}

export interface ListDeployments200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ListDeployments200Response extends HttpResponse {
  status: "200";
  body: PagedApiDeploymentResourceOutput;
  headers: RawHttpHeaders & ListDeployments200Headers;
}

export interface ListDeploymentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListDeploymentsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListDeploymentsDefaultHeaders;
}

export interface GetDeployment200Headers {
  /** The entity tag for the response. */
  etag?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface GetDeployment200Response extends HttpResponse {
  status: "200";
  body: ApiDeploymentResourceOutput;
  headers: RawHttpHeaders & GetDeployment200Headers;
}

export interface GetDeploymentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetDeploymentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetDeploymentDefaultHeaders;
}

export interface ListEnvironments200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ListEnvironments200Response extends HttpResponse {
  status: "200";
  body: PagedEnvironmentResourceOutput;
  headers: RawHttpHeaders & ListEnvironments200Headers;
}

export interface ListEnvironmentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListEnvironmentsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListEnvironmentsDefaultHeaders;
}

export interface GetEnvironment200Headers {
  /** The entity tag for the response. */
  etag?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface GetEnvironment200Response extends HttpResponse {
  status: "200";
  body: EnvironmentResourceOutput;
  headers: RawHttpHeaders & GetEnvironment200Headers;
}

export interface GetEnvironmentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetEnvironmentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetEnvironmentDefaultHeaders;
}

export interface ListVersions200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ListVersions200Response extends HttpResponse {
  status: "200";
  body: PagedApiVersionResourceOutput;
  headers: RawHttpHeaders & ListVersions200Headers;
}

export interface ListVersionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListVersionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListVersionsDefaultHeaders;
}

export interface GetVersion200Headers {
  /** The entity tag for the response. */
  etag?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface GetVersion200Response extends HttpResponse {
  status: "200";
  body: ApiVersionResourceOutput;
  headers: RawHttpHeaders & GetVersion200Headers;
}

export interface GetVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetVersionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetVersionDefaultHeaders;
}
