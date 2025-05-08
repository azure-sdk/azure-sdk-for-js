// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type {
  LongRunningResponseOutput,
  AttackObjectiveOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface GetAnnotation200Response extends HttpResponse {
  status: "200";
  body: string[];
}

export interface GetAnnotationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetAnnotationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetAnnotationDefaultHeaders;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface SubmitAnnotation202Response extends HttpResponse {
  status: "202";
  body: LongRunningResponseOutput;
}

export interface SubmitAnnotationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface SubmitAnnotationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & SubmitAnnotationDefaultHeaders;
}

/** The request has succeeded. */
export interface GetJailBreakDatasetWithType200Response extends HttpResponse {
  status: "200";
  body: string[];
}

export interface GetJailBreakDatasetWithTypeDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetJailBreakDatasetWithTypeDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetJailBreakDatasetWithTypeDefaultHeaders;
}

/** The request has succeeded. */
export interface GetAttackObjectives200Response extends HttpResponse {
  status: "200";
  body: Array<AttackObjectiveOutput>;
}

export interface GetAttackObjectivesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetAttackObjectivesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetAttackObjectivesDefaultHeaders;
}

/** The request has succeeded. */
export interface GetJailBreakDataset200Response extends HttpResponse {
  status: "200";
  body: string[];
}

export interface GetJailBreakDatasetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetJailBreakDatasetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetJailBreakDatasetDefaultHeaders;
}

/** The request has succeeded. */
export interface GetTemplateParametersWithType200Response extends HttpResponse {
  status: "200";
  body: string;
}

export interface GetTemplateParametersWithTypeDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetTemplateParametersWithTypeDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetTemplateParametersWithTypeDefaultHeaders;
}

/** The request has succeeded. */
export interface GetTemplateParameters200Response extends HttpResponse {
  status: "200";
  body: string;
}

export interface GetTemplateParametersDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetTemplateParametersDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetTemplateParametersDefaultHeaders;
}

/** The request has succeeded. */
export interface GetTemplateParametersImage200Response extends HttpResponse {
  status: "200";
  body: string;
}

export interface GetTemplateParametersImageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetTemplateParametersImageDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetTemplateParametersImageDefaultHeaders;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface SubmitSimulation202Response extends HttpResponse {
  status: "202";
  body: LongRunningResponseOutput;
}

export interface SubmitSimulationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface SubmitSimulationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & SubmitSimulationDefaultHeaders;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface SubmitAoaiEvaluation202Response extends HttpResponse {
  status: "202";
  body: LongRunningResponseOutput;
}

export interface SubmitAoaiEvaluationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface SubmitAoaiEvaluationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & SubmitAoaiEvaluationDefaultHeaders;
}

/** The request has succeeded. */
export interface GetOperationResult200Response extends HttpResponse {
  status: "200";
  body: string;
}

export interface GetOperationResultDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetOperationResultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetOperationResultDefaultHeaders;
}
