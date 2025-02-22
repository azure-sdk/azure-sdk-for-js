// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
export type GetOperationResultParameters = RequestParameters;
