// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  GetAnnotationParameters,
  SubmitAnnotationParameters,
  GetJailBreakDatasetWithTypeParameters,
  GetAttackObjectivesParameters,
  GetJailBreakDatasetParameters,
  GetTemplateParametersWithTypeParameters,
  GetTemplateParametersParameters,
  GetTemplateParametersImageParameters,
  SubmitSimulationParameters,
  SubmitAoaiEvaluationParameters,
  GetOperationResultParameters,
} from "./parameters.js";
import type {
  GetAnnotation200Response,
  GetAnnotationDefaultResponse,
  SubmitAnnotation202Response,
  SubmitAnnotationDefaultResponse,
  GetJailBreakDatasetWithType200Response,
  GetJailBreakDatasetWithTypeDefaultResponse,
  GetAttackObjectives200Response,
  GetAttackObjectivesDefaultResponse,
  GetJailBreakDataset200Response,
  GetJailBreakDatasetDefaultResponse,
  GetTemplateParametersWithType200Response,
  GetTemplateParametersWithTypeDefaultResponse,
  GetTemplateParameters200Response,
  GetTemplateParametersDefaultResponse,
  GetTemplateParametersImage200Response,
  GetTemplateParametersImageDefaultResponse,
  SubmitSimulation202Response,
  SubmitSimulationDefaultResponse,
  SubmitAoaiEvaluation202Response,
  SubmitAoaiEvaluationDefaultResponse,
  GetOperationResult200Response,
  GetOperationResultDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetAnnotation {
  /** Get the supported annotation tasks. */
  get(
    options?: GetAnnotationParameters,
  ): StreamableMethod<GetAnnotation200Response | GetAnnotationDefaultResponse>;
}

export interface SubmitAnnotation {
  /** Submit a request for annotation. */
  post(
    options: SubmitAnnotationParameters,
  ): StreamableMethod<
    SubmitAnnotation202Response | SubmitAnnotationDefaultResponse
  >;
}

export interface GetJailBreakDatasetWithType {
  /** Get the jailbreak dataset with type. */
  get(
    options?: GetJailBreakDatasetWithTypeParameters,
  ): StreamableMethod<
    | GetJailBreakDatasetWithType200Response
    | GetJailBreakDatasetWithTypeDefaultResponse
  >;
}

export interface GetAttackObjectives {
  /** Get the attack objectives. */
  get(
    options?: GetAttackObjectivesParameters,
  ): StreamableMethod<
    GetAttackObjectives200Response | GetAttackObjectivesDefaultResponse
  >;
}

export interface GetJailBreakDataset {
  /** Get the jailbreak dataset. */
  get(
    options?: GetJailBreakDatasetParameters,
  ): StreamableMethod<
    GetJailBreakDataset200Response | GetJailBreakDatasetDefaultResponse
  >;
}

export interface GetTemplateParametersWithType {
  /** Get template parameters with type. */
  get(
    options?: GetTemplateParametersWithTypeParameters,
  ): StreamableMethod<
    | GetTemplateParametersWithType200Response
    | GetTemplateParametersWithTypeDefaultResponse
  >;
}

export interface GetTemplateParameters {
  /** Get template parameters. */
  get(
    options?: GetTemplateParametersParameters,
  ): StreamableMethod<
    GetTemplateParameters200Response | GetTemplateParametersDefaultResponse
  >;
}

export interface GetTemplateParametersImage {
  /** Get the template parameters image. */
  get(
    options: GetTemplateParametersImageParameters,
  ): StreamableMethod<
    | GetTemplateParametersImage200Response
    | GetTemplateParametersImageDefaultResponse
  >;
}

export interface SubmitSimulation {
  /** Submit a request for simulation. */
  post(
    options: SubmitSimulationParameters,
  ): StreamableMethod<
    SubmitSimulation202Response | SubmitSimulationDefaultResponse
  >;
}

export interface SubmitAoaiEvaluation {
  /** Submit a request for graders. */
  post(
    options: SubmitAoaiEvaluationParameters,
  ): StreamableMethod<
    SubmitAoaiEvaluation202Response | SubmitAoaiEvaluationDefaultResponse
  >;
}

export interface GetOperationResult {
  /** Get the operation result. */
  get(
    options?: GetOperationResultParameters,
  ): StreamableMethod<
    GetOperationResult200Response | GetOperationResultDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/checkannotation' has methods for the following verbs: get */
  (path: "/checkannotation"): GetAnnotation;
  /** Resource for '/submitannotation' has methods for the following verbs: post */
  (path: "/submitannotation"): SubmitAnnotation;
  /** Resource for '/simulation/jailbreak/\{type\}' has methods for the following verbs: get */
  (
    path: "/simulation/jailbreak/{type}",
    type: string,
  ): GetJailBreakDatasetWithType;
  /** Resource for '/simulation/attackobjectives' has methods for the following verbs: get */
  (path: "/simulation/attackobjectives"): GetAttackObjectives;
  /** Resource for '/simulation/jailbreak/' has methods for the following verbs: get */
  (path: "/simulation/jailbreak/"): GetJailBreakDataset;
  /** Resource for '/simulation/template/parameters/\{type\}' has methods for the following verbs: get */
  (
    path: "/simulation/template/parameters/{type}",
    type: string,
  ): GetTemplateParametersWithType;
  /** Resource for '/simulation/template/parameters/' has methods for the following verbs: get */
  (path: "/simulation/template/parameters/"): GetTemplateParameters;
  /** Resource for '/simulation/template/parameters/image' has methods for the following verbs: get */
  (path: "/simulation/template/parameters/image"): GetTemplateParametersImage;
  /** Resource for '/simulation/chat/completions/submit' has methods for the following verbs: post */
  (path: "/simulation/chat/completions/submit"): SubmitSimulation;
  /** Resource for '/submitaoaievaluation' has methods for the following verbs: post */
  (path: "/submitaoaievaluation"): SubmitAoaiEvaluation;
  /** Resource for '/operations/\{operationId\}' has methods for the following verbs: get */
  (path: "/operations/{operationId}", operationId: string): GetOperationResult;
}

export type MachineLearningServicesClient = Client & {
  path: Routes;
};
