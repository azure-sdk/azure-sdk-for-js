// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  QueryServiceQueryApiExecuteParameters,
  OperationStatusOperationProgressGetOperationResultParameters,
  InstructionsInstructionsGetParameters,
  InstructionsInstructionsUpdateParameters,
  InstructionsInstructionsDeleteParameters,
  InstructionsInstructionsListParameters,
  InstructionsInstructionsCreateParameters,
  InstructionsInstructionsUpdateStatusParameters,
  ExampleQueryServiceExampleQueryOperationsGetExampleParameters,
  ExampleQueryServiceExampleQueryOperationsUpdateExampleParameters,
  ExampleQueryServiceExampleQueryOperationsDeleteExampleParameters,
  ExampleQueryServiceExampleQueryOperationsListAllExamplesParameters,
  ExampleQueryServiceExampleQueryOperationsCreateExampleParameters,
  ExampleQueryServiceExampleQueryOperationsLinkInstructionParameters,
  AliasDictionaryAliasesGetParameters,
  AliasDictionaryAliasesUpdateParameters,
  AliasDictionaryAliasesDeleteParameters,
  AliasDictionaryAliasesCreateParameters,
  AliasDictionaryAliasesListParameters,
  AliasDictionaryAliasesActivateParameters,
  ValidateQueryServiceValidateQueryApiExecuteParameters,
  ValidateQueryServiceValidateQueryApiGetValidateTestDetailsParameters,
  ValidateQueryServiceValidateQueryApiListValidateTestRequestsParameters,
  FeedbackServiceFeedbackSubmitParameters,
} from "./parameters.js";
import type {
  QueryServiceQueryApiExecute200Response,
  QueryServiceQueryApiExecuteDefaultResponse,
  OperationStatusOperationProgressGetOperationResult200Response,
  OperationStatusOperationProgressGetOperationResultDefaultResponse,
  InstructionsInstructionsGet200Response,
  InstructionsInstructionsGetDefaultResponse,
  InstructionsInstructionsUpdate200Response,
  InstructionsInstructionsUpdate201Response,
  InstructionsInstructionsUpdateDefaultResponse,
  InstructionsInstructionsDelete202Response,
  InstructionsInstructionsDeleteDefaultResponse,
  InstructionsInstructionsList200Response,
  InstructionsInstructionsListDefaultResponse,
  InstructionsInstructionsCreate202Response,
  InstructionsInstructionsCreateDefaultResponse,
  InstructionsInstructionsUpdateStatus202Response,
  InstructionsInstructionsUpdateStatusDefaultResponse,
  ExampleQueryServiceExampleQueryOperationsGetExample200Response,
  ExampleQueryServiceExampleQueryOperationsGetExampleDefaultResponse,
  ExampleQueryServiceExampleQueryOperationsUpdateExample200Response,
  ExampleQueryServiceExampleQueryOperationsUpdateExample201Response,
  ExampleQueryServiceExampleQueryOperationsUpdateExampleDefaultResponse,
  ExampleQueryServiceExampleQueryOperationsDeleteExample204Response,
  ExampleQueryServiceExampleQueryOperationsDeleteExampleDefaultResponse,
  ExampleQueryServiceExampleQueryOperationsListAllExamples200Response,
  ExampleQueryServiceExampleQueryOperationsListAllExamplesDefaultResponse,
  ExampleQueryServiceExampleQueryOperationsCreateExample201Response,
  ExampleQueryServiceExampleQueryOperationsCreateExampleDefaultResponse,
  ExampleQueryServiceExampleQueryOperationsLinkInstruction200Response,
  ExampleQueryServiceExampleQueryOperationsLinkInstructionDefaultResponse,
  AliasDictionaryAliasesGet200Response,
  AliasDictionaryAliasesGetDefaultResponse,
  AliasDictionaryAliasesUpdate200Response,
  AliasDictionaryAliasesUpdate201Response,
  AliasDictionaryAliasesUpdateDefaultResponse,
  AliasDictionaryAliasesDelete204Response,
  AliasDictionaryAliasesDeleteDefaultResponse,
  AliasDictionaryAliasesCreate202Response,
  AliasDictionaryAliasesCreateDefaultResponse,
  AliasDictionaryAliasesList200Response,
  AliasDictionaryAliasesListDefaultResponse,
  AliasDictionaryAliasesActivate200Response,
  AliasDictionaryAliasesActivateDefaultResponse,
  ValidateQueryServiceValidateQueryApiExecute200Response,
  ValidateQueryServiceValidateQueryApiExecuteDefaultResponse,
  ValidateQueryServiceValidateQueryApiGetValidateTestDetails200Response,
  ValidateQueryServiceValidateQueryApiGetValidateTestDetailsDefaultResponse,
  ValidateQueryServiceValidateQueryApiListValidateTestRequests200Response,
  ValidateQueryServiceValidateQueryApiListValidateTestRequestsDefaultResponse,
  FeedbackServiceFeedbackSubmit201Response,
  FeedbackServiceFeedbackSubmitDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface QueryServiceQueryApiExecute {
  /** execute the query */
  post(
    options: QueryServiceQueryApiExecuteParameters,
  ): StreamableMethod<
    QueryServiceQueryApiExecute200Response | QueryServiceQueryApiExecuteDefaultResponse
  >;
}

export interface OperationStatusOperationProgressGetOperationResult {
  /** Get operation progress */
  get(
    options?: OperationStatusOperationProgressGetOperationResultParameters,
  ): StreamableMethod<
    | OperationStatusOperationProgressGetOperationResult200Response
    | OperationStatusOperationProgressGetOperationResultDefaultResponse
  >;
}

export interface InstructionsInstructionsGet {
  /** Gets single instruction. */
  get(
    options?: InstructionsInstructionsGetParameters,
  ): StreamableMethod<
    InstructionsInstructionsGet200Response | InstructionsInstructionsGetDefaultResponse
  >;
  /** update instructions. */
  patch(
    options: InstructionsInstructionsUpdateParameters,
  ): StreamableMethod<
    | InstructionsInstructionsUpdate200Response
    | InstructionsInstructionsUpdate201Response
    | InstructionsInstructionsUpdateDefaultResponse
  >;
  /** Delete instructions. */
  delete(
    options?: InstructionsInstructionsDeleteParameters,
  ): StreamableMethod<
    InstructionsInstructionsDelete202Response | InstructionsInstructionsDeleteDefaultResponse
  >;
}

export interface InstructionsInstructionsList {
  /** List Instruction resources */
  get(
    options: InstructionsInstructionsListParameters,
  ): StreamableMethod<
    InstructionsInstructionsList200Response | InstructionsInstructionsListDefaultResponse
  >;
  /** Create an instruction. */
  post(
    options: InstructionsInstructionsCreateParameters,
  ): StreamableMethod<
    InstructionsInstructionsCreate202Response | InstructionsInstructionsCreateDefaultResponse
  >;
}

export interface InstructionsInstructionsUpdateStatus {
  /** Update instruction status. */
  post(
    options: InstructionsInstructionsUpdateStatusParameters,
  ): StreamableMethod<
    | InstructionsInstructionsUpdateStatus202Response
    | InstructionsInstructionsUpdateStatusDefaultResponse
  >;
}

export interface ExampleQueryServiceExampleQueryOperationsGetExample {
  /** get the example query */
  get(
    options?: ExampleQueryServiceExampleQueryOperationsGetExampleParameters,
  ): StreamableMethod<
    | ExampleQueryServiceExampleQueryOperationsGetExample200Response
    | ExampleQueryServiceExampleQueryOperationsGetExampleDefaultResponse
  >;
  /** update the example query */
  patch(
    options: ExampleQueryServiceExampleQueryOperationsUpdateExampleParameters,
  ): StreamableMethod<
    | ExampleQueryServiceExampleQueryOperationsUpdateExample200Response
    | ExampleQueryServiceExampleQueryOperationsUpdateExample201Response
    | ExampleQueryServiceExampleQueryOperationsUpdateExampleDefaultResponse
  >;
  /** delete the example query */
  delete(
    options?: ExampleQueryServiceExampleQueryOperationsDeleteExampleParameters,
  ): StreamableMethod<
    | ExampleQueryServiceExampleQueryOperationsDeleteExample204Response
    | ExampleQueryServiceExampleQueryOperationsDeleteExampleDefaultResponse
  >;
}

export interface ExampleQueryServiceExampleQueryOperationsListAllExamples {
  /** get all example queries */
  get(
    options?: ExampleQueryServiceExampleQueryOperationsListAllExamplesParameters,
  ): StreamableMethod<
    | ExampleQueryServiceExampleQueryOperationsListAllExamples200Response
    | ExampleQueryServiceExampleQueryOperationsListAllExamplesDefaultResponse
  >;
  /** create the example query */
  post(
    options: ExampleQueryServiceExampleQueryOperationsCreateExampleParameters,
  ): StreamableMethod<
    | ExampleQueryServiceExampleQueryOperationsCreateExample201Response
    | ExampleQueryServiceExampleQueryOperationsCreateExampleDefaultResponse
  >;
}

export interface ExampleQueryServiceExampleQueryOperationsLinkInstruction {
  /** Update instruction status. */
  post(
    options: ExampleQueryServiceExampleQueryOperationsLinkInstructionParameters,
  ): StreamableMethod<
    | ExampleQueryServiceExampleQueryOperationsLinkInstruction200Response
    | ExampleQueryServiceExampleQueryOperationsLinkInstructionDefaultResponse
  >;
}

export interface AliasDictionaryAliasesGet {
  /** Get an alias by Id */
  get(
    options?: AliasDictionaryAliasesGetParameters,
  ): StreamableMethod<
    AliasDictionaryAliasesGet200Response | AliasDictionaryAliasesGetDefaultResponse
  >;
  /** Update an alias */
  patch(
    options: AliasDictionaryAliasesUpdateParameters,
  ): StreamableMethod<
    | AliasDictionaryAliasesUpdate200Response
    | AliasDictionaryAliasesUpdate201Response
    | AliasDictionaryAliasesUpdateDefaultResponse
  >;
  /** Delete an alias */
  delete(
    options?: AliasDictionaryAliasesDeleteParameters,
  ): StreamableMethod<
    AliasDictionaryAliasesDelete204Response | AliasDictionaryAliasesDeleteDefaultResponse
  >;
}

export interface AliasDictionaryAliasesCreate {
  /** Create an alias */
  post(
    options: AliasDictionaryAliasesCreateParameters,
  ): StreamableMethod<
    AliasDictionaryAliasesCreate202Response | AliasDictionaryAliasesCreateDefaultResponse
  >;
  /** List all aliases */
  get(
    options?: AliasDictionaryAliasesListParameters,
  ): StreamableMethod<
    AliasDictionaryAliasesList200Response | AliasDictionaryAliasesListDefaultResponse
  >;
}

export interface AliasDictionaryAliasesActivate {
  /** Deactivate an alias */
  post(
    options: AliasDictionaryAliasesActivateParameters,
  ): StreamableMethod<
    AliasDictionaryAliasesActivate200Response | AliasDictionaryAliasesActivateDefaultResponse
  >;
}

export interface ValidateQueryServiceValidateQueryApiExecute {
  /** Validate a query */
  post(
    options: ValidateQueryServiceValidateQueryApiExecuteParameters,
  ): StreamableMethod<
    | ValidateQueryServiceValidateQueryApiExecute200Response
    | ValidateQueryServiceValidateQueryApiExecuteDefaultResponse
  >;
}

export interface ValidateQueryServiceValidateQueryApiGetValidateTestDetails {
  /** Get the details of a validate test */
  get(
    options?: ValidateQueryServiceValidateQueryApiGetValidateTestDetailsParameters,
  ): StreamableMethod<
    | ValidateQueryServiceValidateQueryApiGetValidateTestDetails200Response
    | ValidateQueryServiceValidateQueryApiGetValidateTestDetailsDefaultResponse
  >;
}

export interface ValidateQueryServiceValidateQueryApiListValidateTestRequests {
  /** List validate test requests */
  get(
    options?: ValidateQueryServiceValidateQueryApiListValidateTestRequestsParameters,
  ): StreamableMethod<
    | ValidateQueryServiceValidateQueryApiListValidateTestRequests200Response
    | ValidateQueryServiceValidateQueryApiListValidateTestRequestsDefaultResponse
  >;
}

export interface FeedbackServiceFeedbackSubmit {
  /** Send feedback for a query */
  post(
    options: FeedbackServiceFeedbackSubmitParameters,
  ): StreamableMethod<
    FeedbackServiceFeedbackSubmit201Response | FeedbackServiceFeedbackSubmitDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/copilot/query:execute' has methods for the following verbs: post */
  (path: "/copilot/query:execute"): QueryServiceQueryApiExecute;
  /** Resource for '/copilot/operation/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/copilot/operation/{operationId}",
    operationId: string,
  ): OperationStatusOperationProgressGetOperationResult;
  /** Resource for '/copilot/instruction/\{id\}' has methods for the following verbs: get, patch, delete */
  (path: "/copilot/instruction/{id}", id: string): InstructionsInstructionsGet;
  /** Resource for '/copilot/instruction' has methods for the following verbs: get, post */
  (path: "/copilot/instruction"): InstructionsInstructionsList;
  /** Resource for '/copilot/instruction/\{id\}:updateStatus' has methods for the following verbs: post */
  (
    path: "/copilot/instruction/{id}:updateStatus",
    id: string,
  ): InstructionsInstructionsUpdateStatus;
  /** Resource for '/copilot/exampleQuery/\{exampleId\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/copilot/exampleQuery/{exampleId}",
    exampleId: string,
  ): ExampleQueryServiceExampleQueryOperationsGetExample;
  /** Resource for '/copilot/exampleQuery' has methods for the following verbs: get, post */
  (path: "/copilot/exampleQuery"): ExampleQueryServiceExampleQueryOperationsListAllExamples;
  /** Resource for '/copilot/exampleQuery/\{exampleId\}:linkInstruction' has methods for the following verbs: post */
  (
    path: "/copilot/exampleQuery/{exampleId}:linkInstruction",
    exampleId: string,
  ): ExampleQueryServiceExampleQueryOperationsLinkInstruction;
  /** Resource for '/copilot/aliases/\{id\}' has methods for the following verbs: get, patch, delete */
  (path: "/copilot/aliases/{id}", id: string): AliasDictionaryAliasesGet;
  /** Resource for '/copilot/aliases' has methods for the following verbs: post, get */
  (path: "/copilot/aliases"): AliasDictionaryAliasesCreate;
  /** Resource for '/copilot/aliases/\{id\}:activate' has methods for the following verbs: post */
  (path: "/copilot/aliases/{id}:activate", id: string): AliasDictionaryAliasesActivate;
  /** Resource for '/copilot/validate:execute' has methods for the following verbs: post */
  (path: "/copilot/validate:execute"): ValidateQueryServiceValidateQueryApiExecute;
  /** Resource for '/copilot/validate/\{validateTestId\}' has methods for the following verbs: get */
  (
    path: "/copilot/validate/{validateTestId}",
    validateTestId: string,
  ): ValidateQueryServiceValidateQueryApiGetValidateTestDetails;
  /** Resource for '/copilot/validate' has methods for the following verbs: get */
  (path: "/copilot/validate"): ValidateQueryServiceValidateQueryApiListValidateTestRequests;
  /** Resource for '/copilot/feedback' has methods for the following verbs: post */
  (path: "/copilot/feedback"): FeedbackServiceFeedbackSubmit;
}

export type CopilotServiceClient = Client & {
  path: Routes;
};
