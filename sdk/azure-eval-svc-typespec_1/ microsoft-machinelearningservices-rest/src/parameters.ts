// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type { AnnotationDTO, SimulationDTO, GradersDTO } from "./models.js";

export type GetAnnotationParameters = RequestParameters;

export interface SubmitAnnotationBodyParam {
  /** Properties of a Prompt Version. */
  body: AnnotationDTO;
}

export type SubmitAnnotationParameters = SubmitAnnotationBodyParam &
  RequestParameters;
export type GetJailBreakDatasetWithTypeParameters = RequestParameters;

/** This is the wrapper object for the parameter `riskTypes` with explode set to false and style set to form. */
export interface GetAttackObjectivesRiskTypesQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface GetAttackObjectivesQueryParamProperties {
  /** Risk types for the attack objectives dataset */
  riskTypes: string[] | GetAttackObjectivesRiskTypesQueryParam;
  /** The language for the attack objectives dataset, defaults to 'en' */
  lang: string;
}

export interface GetAttackObjectivesQueryParam {
  queryParameters: GetAttackObjectivesQueryParamProperties;
}

export type GetAttackObjectivesParameters = GetAttackObjectivesQueryParam &
  RequestParameters;
export type GetJailBreakDatasetParameters = RequestParameters;
export type GetTemplateParametersWithTypeParameters = RequestParameters;
export type GetTemplateParametersParameters = RequestParameters;

export interface GetTemplateParametersImageQueryParamProperties {
  /** Image path. */
  path: string;
}

export interface GetTemplateParametersImageQueryParam {
  queryParameters: GetTemplateParametersImageQueryParamProperties;
}

export type GetTemplateParametersImageParameters =
  GetTemplateParametersImageQueryParam & RequestParameters;

export interface SubmitSimulationBodyParam {
  /** Properties of a Prompt Version. */
  body: SimulationDTO;
}

export type SubmitSimulationParameters = SubmitSimulationBodyParam &
  RequestParameters;

export interface SubmitAoaiEvaluationBodyParam {
  /** Properties of a Prompt Version. */
  body: GradersDTO;
}

export type SubmitAoaiEvaluationParameters = SubmitAoaiEvaluationBodyParam &
  RequestParameters;

export interface GetOperationResultHeaders {
  /** Api key. */
  "api-key"?: string;
  /** Model Endpoint. */
  "model-endpoint"?: string;
}

export interface GetOperationResultHeaderParam {
  headers?: RawHttpHeadersInput & GetOperationResultHeaders;
}

export type GetOperationResultParameters = GetOperationResultHeaderParam &
  RequestParameters;
