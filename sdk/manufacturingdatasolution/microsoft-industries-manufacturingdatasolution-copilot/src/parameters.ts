// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type {
  InstructionsModelsInstruction,
  InstructionsModelsUpdateStatusRequest,
  ExampleQueryModelsExampleQueryRequest,
  ExampleQueryModelsLinkInstructionRequest,
  AliasDictionaryModelsAlias,
  AliasDictionaryModelsActivateAlias,
  ValidateQueryModelsTestQueryRequest,
  FeedbackModelsFeedbackRequest,
} from "./models.js";

export interface QueryServiceQueryApiExecuteHeaders {
  /** Conversation-Id header */
  "Conversation-Id"?: string;
  /** Accept-Language header */
  "Accept-Language": string;
}

export interface QueryServiceQueryApiExecuteBodyParam {
  body: { ask?: string };
}

export interface QueryServiceQueryApiExecuteQueryParamProperties {
  /** maxRetry */
  maxRetry?: number;
  /** Include summary in the response. */
  includeSummary?: boolean;
}

export interface QueryServiceQueryApiExecuteQueryParam {
  queryParameters?: QueryServiceQueryApiExecuteQueryParamProperties;
}

export interface QueryServiceQueryApiExecuteHeaderParam {
  headers: RawHttpHeadersInput & QueryServiceQueryApiExecuteHeaders;
}

export type QueryServiceQueryApiExecuteParameters = QueryServiceQueryApiExecuteQueryParam &
  QueryServiceQueryApiExecuteHeaderParam &
  QueryServiceQueryApiExecuteBodyParam &
  RequestParameters;
export type OperationStatusOperationProgressGetOperationResultParameters = RequestParameters;
export type InstructionsInstructionsGetParameters = RequestParameters;

export interface InstructionsInstructionsListQueryParamProperties {
  /** The instruction status. */
  showActive: boolean;
}

export interface InstructionsInstructionsListQueryParam {
  queryParameters: InstructionsInstructionsListQueryParamProperties;
}

export type InstructionsInstructionsListParameters = InstructionsInstructionsListQueryParam &
  RequestParameters;

export interface InstructionsInstructionsCreateBodyParam {
  /** The resource instance. */
  body: InstructionsModelsInstruction;
}

export type InstructionsInstructionsCreateParameters = InstructionsInstructionsCreateBodyParam &
  RequestParameters;
/** The resource instance. */
export type InstructionsModelsInstructionResourceMergeAndPatch =
  Partial<InstructionsModelsInstruction>;

export interface InstructionsInstructionsUpdateBodyParam {
  /** The resource instance. */
  body: InstructionsModelsInstructionResourceMergeAndPatch;
}

export interface InstructionsInstructionsUpdateMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type InstructionsInstructionsUpdateParameters =
  InstructionsInstructionsUpdateMediaTypesParam &
    InstructionsInstructionsUpdateBodyParam &
    RequestParameters;
export type InstructionsInstructionsDeleteParameters = RequestParameters;

export interface InstructionsInstructionsUpdateStatusBodyParam {
  body: InstructionsModelsUpdateStatusRequest;
}

export type InstructionsInstructionsUpdateStatusParameters =
  InstructionsInstructionsUpdateStatusBodyParam & RequestParameters;
export type ExampleQueryServiceExampleQueryOperationsGetExampleParameters = RequestParameters;

export interface ExampleQueryServiceExampleQueryOperationsListAllExamplesQueryParamProperties {
  /** Instruction id. */
  instructionId?: string;
}

export interface ExampleQueryServiceExampleQueryOperationsListAllExamplesQueryParam {
  queryParameters?: ExampleQueryServiceExampleQueryOperationsListAllExamplesQueryParamProperties;
}

export type ExampleQueryServiceExampleQueryOperationsListAllExamplesParameters =
  ExampleQueryServiceExampleQueryOperationsListAllExamplesQueryParam & RequestParameters;
/** The resource instance. */
export type ExampleQueryModelsExampleQueryRequestResourceMergeAndPatch =
  Partial<ExampleQueryModelsExampleQueryRequest>;

export interface ExampleQueryServiceExampleQueryOperationsUpdateExampleBodyParam {
  /** The resource instance. */
  body: ExampleQueryModelsExampleQueryRequestResourceMergeAndPatch;
}

export interface ExampleQueryServiceExampleQueryOperationsUpdateExampleMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type ExampleQueryServiceExampleQueryOperationsUpdateExampleParameters =
  ExampleQueryServiceExampleQueryOperationsUpdateExampleMediaTypesParam &
    ExampleQueryServiceExampleQueryOperationsUpdateExampleBodyParam &
    RequestParameters;
export type ExampleQueryServiceExampleQueryOperationsDeleteExampleParameters = RequestParameters;

export interface ExampleQueryServiceExampleQueryOperationsCreateExampleBodyParam {
  /** The resource instance. */
  body: ExampleQueryModelsExampleQueryRequest;
}

export type ExampleQueryServiceExampleQueryOperationsCreateExampleParameters =
  ExampleQueryServiceExampleQueryOperationsCreateExampleBodyParam & RequestParameters;

export interface ExampleQueryServiceExampleQueryOperationsLinkInstructionBodyParam {
  body: ExampleQueryModelsLinkInstructionRequest;
}

export type ExampleQueryServiceExampleQueryOperationsLinkInstructionParameters =
  ExampleQueryServiceExampleQueryOperationsLinkInstructionBodyParam & RequestParameters;
export type AliasDictionaryAliasesGetParameters = RequestParameters;

export interface AliasDictionaryAliasesCreateBodyParam {
  /** The resource instance. */
  body: AliasDictionaryModelsAlias;
}

export type AliasDictionaryAliasesCreateParameters = AliasDictionaryAliasesCreateBodyParam &
  RequestParameters;
/** The resource instance. */
export type AliasDictionaryModelsAliasResourceMergeAndPatch = Partial<AliasDictionaryModelsAlias>;

export interface AliasDictionaryAliasesUpdateBodyParam {
  /** The resource instance. */
  body: AliasDictionaryModelsAliasResourceMergeAndPatch;
}

export interface AliasDictionaryAliasesUpdateMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type AliasDictionaryAliasesUpdateParameters = AliasDictionaryAliasesUpdateMediaTypesParam &
  AliasDictionaryAliasesUpdateBodyParam &
  RequestParameters;
export type AliasDictionaryAliasesDeleteParameters = RequestParameters;
export type AliasDictionaryAliasesListParameters = RequestParameters;

export interface AliasDictionaryAliasesActivateBodyParam {
  body: AliasDictionaryModelsActivateAlias;
}

export type AliasDictionaryAliasesActivateParameters = AliasDictionaryAliasesActivateBodyParam &
  RequestParameters;

export interface ValidateQueryServiceValidateQueryApiExecuteBodyParam {
  body: ValidateQueryModelsTestQueryRequest;
}

export type ValidateQueryServiceValidateQueryApiExecuteParameters =
  ValidateQueryServiceValidateQueryApiExecuteBodyParam & RequestParameters;
export type ValidateQueryServiceValidateQueryApiGetValidateTestDetailsParameters =
  RequestParameters;

export interface ValidateQueryServiceValidateQueryApiListValidateTestRequestsQueryParamProperties {
  /** start date */
  fromDate?: Date | string;
  /** end date */
  endDate?: Date | string;
  /** start date */
  testRunId?: Date | string;
}

export interface ValidateQueryServiceValidateQueryApiListValidateTestRequestsQueryParam {
  queryParameters?: ValidateQueryServiceValidateQueryApiListValidateTestRequestsQueryParamProperties;
}

export type ValidateQueryServiceValidateQueryApiListValidateTestRequestsParameters =
  ValidateQueryServiceValidateQueryApiListValidateTestRequestsQueryParam & RequestParameters;

export interface FeedbackServiceFeedbackSubmitBodyParam {
  /** The resource instance. */
  body: FeedbackModelsFeedbackRequest;
}

export type FeedbackServiceFeedbackSubmitParameters = FeedbackServiceFeedbackSubmitBodyParam &
  RequestParameters;
