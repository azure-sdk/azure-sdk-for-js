// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type {
  PagedApiOutput,
  PagedApiAllOutput,
  ApiOutput,
  PagedApiDefinitionOutput,
  ApiDefinitionOutput,
  ResourceOperationStatusApiSpecExportResultApiSpecExportResultErrorOutput,
  PagedApiDeploymentOutput,
  ApiDeploymentOutput,
  PagedEnvironmentOutput,
  PagedEnvironmentAllOutput,
  EnvironmentOutput,
  PagedApiVersionOutput,
  ApiVersionOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface ApisList200Response extends HttpResponse {
  status: "200";
  body: PagedApiOutput;
}

export interface ApisListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ApisListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ApisListDefaultHeaders;
}

/** The request has succeeded. */
export interface ApisListAll200Response extends HttpResponse {
  status: "200";
  body: PagedApiAllOutput;
}

export interface ApisListAllDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ApisListAllDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ApisListAllDefaultHeaders;
}

/** The request has succeeded. */
export interface ApisGet200Response extends HttpResponse {
  status: "200";
  body: ApiOutput;
}

export interface ApisGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ApisGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ApisGetDefaultHeaders;
}

/** The request has succeeded. */
export interface ApiDefinitionsListDefinitions200Response extends HttpResponse {
  status: "200";
  body: PagedApiDefinitionOutput;
}

export interface ApiDefinitionsListDefinitionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ApiDefinitionsListDefinitionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ApiDefinitionsListDefinitionsDefaultHeaders;
}

/** The request has succeeded. */
export interface ApiDefinitionsGetDefinition200Response extends HttpResponse {
  status: "200";
  body: ApiDefinitionOutput;
}

export interface ApiDefinitionsGetDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ApiDefinitionsGetDefinitionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ApiDefinitionsGetDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface ApiDefinitionsGetExportSpecificationOperationStatus200Response
  extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusApiSpecExportResultApiSpecExportResultErrorOutput;
}

export interface ApiDefinitionsGetExportSpecificationOperationStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ApiDefinitionsGetExportSpecificationOperationStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ApiDefinitionsGetExportSpecificationOperationStatusDefaultHeaders;
}

export interface ApiDefinitionsExportSpecification202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface ApiDefinitionsExportSpecification202Response extends HttpResponse {
  status: "202";
  body: ResourceOperationStatusApiSpecExportResultApiSpecExportResultErrorOutput;
  headers: RawHttpHeaders & ApiDefinitionsExportSpecification202Headers;
}

export interface ApiDefinitionsExportSpecificationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ApiDefinitionsExportSpecificationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ApiDefinitionsExportSpecificationDefaultHeaders;
}

/** The final response for long-running exportSpecification operation */
export interface ApiDefinitionsExportSpecificationLogicalResponse extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusApiSpecExportResultApiSpecExportResultErrorOutput;
}

/** The request has succeeded. */
export interface ApiDeploymentsListDeployments200Response extends HttpResponse {
  status: "200";
  body: PagedApiDeploymentOutput;
}

export interface ApiDeploymentsListDeploymentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ApiDeploymentsListDeploymentsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ApiDeploymentsListDeploymentsDefaultHeaders;
}

/** The request has succeeded. */
export interface ApiDeploymentsGetDeployment200Response extends HttpResponse {
  status: "200";
  body: ApiDeploymentOutput;
}

export interface ApiDeploymentsGetDeploymentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ApiDeploymentsGetDeploymentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ApiDeploymentsGetDeploymentDefaultHeaders;
}

/** The request has succeeded. */
export interface EnvironmentsList200Response extends HttpResponse {
  status: "200";
  body: PagedEnvironmentOutput;
}

export interface EnvironmentsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsListDefaultHeaders;
}

/** The request has succeeded. */
export interface EnvironmentsListAll200Response extends HttpResponse {
  status: "200";
  body: PagedEnvironmentAllOutput;
}

export interface EnvironmentsListAllDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsListAllDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsListAllDefaultHeaders;
}

/** The request has succeeded. */
export interface EnvironmentsGet200Response extends HttpResponse {
  status: "200";
  body: EnvironmentOutput;
}

export interface EnvironmentsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsGetDefaultHeaders;
}

/** The request has succeeded. */
export interface ApiVersionsListVersions200Response extends HttpResponse {
  status: "200";
  body: PagedApiVersionOutput;
}

export interface ApiVersionsListVersionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ApiVersionsListVersionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ApiVersionsListVersionsDefaultHeaders;
}

/** The request has succeeded. */
export interface ApiVersionsGetVersion200Response extends HttpResponse {
  status: "200";
  body: ApiVersionOutput;
}

export interface ApiVersionsGetVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ApiVersionsGetVersionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ApiVersionsGetVersionDefaultHeaders;
}
