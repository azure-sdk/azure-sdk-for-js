// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type {
  QueryServiceQueryModelsQueryResponseOutput,
  OperationsModelsOperationResultQueryOutput,
  InstructionStatusEnumOutput,
  InstrustionDomainEnumOutput,
  InstructionSubDomainEnumOutput,
  InstructionCategoryEnumOutput,
  InstructionLanguageEnumOutput,
  InstructionsModelsRetrievalPropertiesOutput,
  InstructionsModelsRelationshipsOutput,
  PagedInstructionOutput,
  OperationStatusErrorOutput,
  ResourceOperationStatusInstructionUpdateStatusRequestErrorOutput,
  ExampleQueryModelsExampleQueryRequestOutput,
  PagedExampleQueryRequestOutput,
  ExampleQueryModelsLinkInstructionRequestOutput,
  AliasDictionaryModelsAliasOutput,
  PagedAliasOutput,
  AliasDictionaryModelsActivateAliasOutput,
  ValidateQueryModelsTestResponseOutput,
  ValidateQueryModelsTestQueryOutput,
  PagedValidateTestSummaryOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface QueryServiceQueryApiExecute200Response extends HttpResponse {
  status: "200";
  body: QueryServiceQueryModelsQueryResponseOutput;
}

export interface QueryServiceQueryApiExecuteDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface QueryServiceQueryApiExecuteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & QueryServiceQueryApiExecuteDefaultHeaders;
}

/** The request has succeeded. */
export interface OperationStatusOperationProgressGetOperationResult200Response
  extends HttpResponse {
  status: "200";
  body: OperationsModelsOperationResultQueryOutput;
}

export interface OperationStatusOperationProgressGetOperationResultDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface OperationStatusOperationProgressGetOperationResultDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & OperationStatusOperationProgressGetOperationResultDefaultHeaders;
}

/** The request has succeeded. */
export interface InstructionsInstructionsGet200Response extends HttpResponse {
  status: "200";
  body: {
    id: string;
    status: InstructionStatusEnumOutput;
    domain: InstrustionDomainEnumOutput;
    subDomain: InstructionSubDomainEnumOutput;
    category: InstructionCategoryEnumOutput;
    language: InstructionLanguageEnumOutput;
    retrieval: InstructionsModelsRetrievalPropertiesOutput;
    relationships: InstructionsModelsRelationshipsOutput;
    comment: string;
  };
}

export interface InstructionsInstructionsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface InstructionsInstructionsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & InstructionsInstructionsGetDefaultHeaders;
}

/** The request has succeeded. */
export interface InstructionsInstructionsList200Response extends HttpResponse {
  status: "200";
  body: PagedInstructionOutput;
}

export interface InstructionsInstructionsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface InstructionsInstructionsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & InstructionsInstructionsListDefaultHeaders;
}

export interface InstructionsInstructionsCreate202Headers {
  location: string;
  /** The background job location. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface InstructionsInstructionsCreate202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & InstructionsInstructionsCreate202Headers;
}

export interface InstructionsInstructionsCreateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface InstructionsInstructionsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & InstructionsInstructionsCreateDefaultHeaders;
}

/** The final response for long-running create operation */
export interface InstructionsInstructionsCreateLogicalResponse extends HttpResponse {
  status: "200";
}

export interface InstructionsInstructionsUpdate200Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded. */
export interface InstructionsInstructionsUpdate200Response extends HttpResponse {
  status: "200";
  body: {
    id: string;
    status: InstructionStatusEnumOutput;
    domain: InstrustionDomainEnumOutput;
    subDomain: InstructionSubDomainEnumOutput;
    category: InstructionCategoryEnumOutput;
    language: InstructionLanguageEnumOutput;
    retrieval: InstructionsModelsRetrievalPropertiesOutput;
    relationships: InstructionsModelsRelationshipsOutput;
    comment: string;
  };
  headers: RawHttpHeaders & InstructionsInstructionsUpdate200Headers;
}

export interface InstructionsInstructionsUpdate201Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface InstructionsInstructionsUpdate201Response extends HttpResponse {
  status: "201";
  body: {
    id: string;
    status: InstructionStatusEnumOutput;
    domain: InstrustionDomainEnumOutput;
    subDomain: InstructionSubDomainEnumOutput;
    category: InstructionCategoryEnumOutput;
    language: InstructionLanguageEnumOutput;
    retrieval: InstructionsModelsRetrievalPropertiesOutput;
    relationships: InstructionsModelsRelationshipsOutput;
    comment: string;
  };
  headers: RawHttpHeaders & InstructionsInstructionsUpdate201Headers;
}

export interface InstructionsInstructionsUpdateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface InstructionsInstructionsUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & InstructionsInstructionsUpdateDefaultHeaders;
}

/** The final response for long-running update operation */
export interface InstructionsInstructionsUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: {
    id: string;
    status: InstructionStatusEnumOutput;
    domain: InstrustionDomainEnumOutput;
    subDomain: InstructionSubDomainEnumOutput;
    category: InstructionCategoryEnumOutput;
    language: InstructionLanguageEnumOutput;
    retrieval: InstructionsModelsRetrievalPropertiesOutput;
    relationships: InstructionsModelsRelationshipsOutput;
    comment: string;
  };
}

export interface InstructionsInstructionsDelete202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface InstructionsInstructionsDelete202Response extends HttpResponse {
  status: "202";
  body: OperationStatusErrorOutput;
  headers: RawHttpHeaders & InstructionsInstructionsDelete202Headers;
}

export interface InstructionsInstructionsDeleteDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface InstructionsInstructionsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & InstructionsInstructionsDeleteDefaultHeaders;
}

/** The final response for long-running delete operation */
export interface InstructionsInstructionsDeleteLogicalResponse extends HttpResponse {
  status: "200";
  body: OperationStatusErrorOutput;
}

export interface InstructionsInstructionsUpdateStatus202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface InstructionsInstructionsUpdateStatus202Response extends HttpResponse {
  status: "202";
  body: ResourceOperationStatusInstructionUpdateStatusRequestErrorOutput;
  headers: RawHttpHeaders & InstructionsInstructionsUpdateStatus202Headers;
}

export interface InstructionsInstructionsUpdateStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface InstructionsInstructionsUpdateStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & InstructionsInstructionsUpdateStatusDefaultHeaders;
}

/** The final response for long-running updateStatus operation */
export interface InstructionsInstructionsUpdateStatusLogicalResponse extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusInstructionUpdateStatusRequestErrorOutput;
}

/** The request has succeeded. */
export interface ExampleQueryServiceExampleQueryOperationsGetExample200Response
  extends HttpResponse {
  status: "200";
  body: ExampleQueryModelsExampleQueryRequestOutput;
}

export interface ExampleQueryServiceExampleQueryOperationsGetExampleDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ExampleQueryServiceExampleQueryOperationsGetExampleDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ExampleQueryServiceExampleQueryOperationsGetExampleDefaultHeaders;
}

/** The request has succeeded. */
export interface ExampleQueryServiceExampleQueryOperationsListAllExamples200Response
  extends HttpResponse {
  status: "200";
  body: PagedExampleQueryRequestOutput;
}

export interface ExampleQueryServiceExampleQueryOperationsListAllExamplesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ExampleQueryServiceExampleQueryOperationsListAllExamplesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ExampleQueryServiceExampleQueryOperationsListAllExamplesDefaultHeaders;
}

/** The request has succeeded. */
export interface ExampleQueryServiceExampleQueryOperationsUpdateExample200Response
  extends HttpResponse {
  status: "200";
  body: ExampleQueryModelsExampleQueryRequestOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ExampleQueryServiceExampleQueryOperationsUpdateExample201Response
  extends HttpResponse {
  status: "201";
  body: ExampleQueryModelsExampleQueryRequestOutput;
}

export interface ExampleQueryServiceExampleQueryOperationsUpdateExampleDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ExampleQueryServiceExampleQueryOperationsUpdateExampleDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ExampleQueryServiceExampleQueryOperationsUpdateExampleDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ExampleQueryServiceExampleQueryOperationsDeleteExample204Response
  extends HttpResponse {
  status: "204";
}

export interface ExampleQueryServiceExampleQueryOperationsDeleteExampleDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ExampleQueryServiceExampleQueryOperationsDeleteExampleDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ExampleQueryServiceExampleQueryOperationsDeleteExampleDefaultHeaders;
}

export interface ExampleQueryServiceExampleQueryOperationsCreateExample201Headers {
  location: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ExampleQueryServiceExampleQueryOperationsCreateExample201Response
  extends HttpResponse {
  status: "201";
  headers: RawHttpHeaders & ExampleQueryServiceExampleQueryOperationsCreateExample201Headers;
}

export interface ExampleQueryServiceExampleQueryOperationsCreateExampleDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ExampleQueryServiceExampleQueryOperationsCreateExampleDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ExampleQueryServiceExampleQueryOperationsCreateExampleDefaultHeaders;
}

/** The request has succeeded. */
export interface ExampleQueryServiceExampleQueryOperationsLinkInstruction200Response
  extends HttpResponse {
  status: "200";
  body: ExampleQueryModelsLinkInstructionRequestOutput;
}

export interface ExampleQueryServiceExampleQueryOperationsLinkInstructionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ExampleQueryServiceExampleQueryOperationsLinkInstructionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ExampleQueryServiceExampleQueryOperationsLinkInstructionDefaultHeaders;
}

/** The request has succeeded. */
export interface AliasDictionaryAliasesGet200Response extends HttpResponse {
  status: "200";
  body: AliasDictionaryModelsAliasOutput;
}

export interface AliasDictionaryAliasesGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AliasDictionaryAliasesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AliasDictionaryAliasesGetDefaultHeaders;
}

export interface AliasDictionaryAliasesCreate202Headers {
  location: string;
  /** The background job location. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface AliasDictionaryAliasesCreate202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & AliasDictionaryAliasesCreate202Headers;
}

export interface AliasDictionaryAliasesCreateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AliasDictionaryAliasesCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AliasDictionaryAliasesCreateDefaultHeaders;
}

/** The final response for long-running create operation */
export interface AliasDictionaryAliasesCreateLogicalResponse extends HttpResponse {
  status: "200";
}

export interface AliasDictionaryAliasesUpdate200Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded. */
export interface AliasDictionaryAliasesUpdate200Response extends HttpResponse {
  status: "200";
  body: AliasDictionaryModelsAliasOutput;
  headers: RawHttpHeaders & AliasDictionaryAliasesUpdate200Headers;
}

export interface AliasDictionaryAliasesUpdate201Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface AliasDictionaryAliasesUpdate201Response extends HttpResponse {
  status: "201";
  body: AliasDictionaryModelsAliasOutput;
  headers: RawHttpHeaders & AliasDictionaryAliasesUpdate201Headers;
}

export interface AliasDictionaryAliasesUpdateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AliasDictionaryAliasesUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AliasDictionaryAliasesUpdateDefaultHeaders;
}

/** The final response for long-running update operation */
export interface AliasDictionaryAliasesUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: AliasDictionaryModelsAliasOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface AliasDictionaryAliasesDelete204Response extends HttpResponse {
  status: "204";
}

export interface AliasDictionaryAliasesDeleteDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AliasDictionaryAliasesDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AliasDictionaryAliasesDeleteDefaultHeaders;
}

/** The request has succeeded. */
export interface AliasDictionaryAliasesList200Response extends HttpResponse {
  status: "200";
  body: PagedAliasOutput;
}

export interface AliasDictionaryAliasesListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AliasDictionaryAliasesListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AliasDictionaryAliasesListDefaultHeaders;
}

/** The request has succeeded. */
export interface AliasDictionaryAliasesActivate200Response extends HttpResponse {
  status: "200";
  body: AliasDictionaryModelsActivateAliasOutput;
}

export interface AliasDictionaryAliasesActivateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AliasDictionaryAliasesActivateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AliasDictionaryAliasesActivateDefaultHeaders;
}

/** The request has succeeded. */
export interface ValidateQueryServiceValidateQueryApiExecute200Response extends HttpResponse {
  status: "200";
  body: ValidateQueryModelsTestResponseOutput;
}

export interface ValidateQueryServiceValidateQueryApiExecuteDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ValidateQueryServiceValidateQueryApiExecuteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ValidateQueryServiceValidateQueryApiExecuteDefaultHeaders;
}

/** The request has succeeded. */
export interface ValidateQueryServiceValidateQueryApiGetValidateTestDetails200Response
  extends HttpResponse {
  status: "200";
  body: ValidateQueryModelsTestQueryOutput;
}

export interface ValidateQueryServiceValidateQueryApiGetValidateTestDetailsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ValidateQueryServiceValidateQueryApiGetValidateTestDetailsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    ValidateQueryServiceValidateQueryApiGetValidateTestDetailsDefaultHeaders;
}

/** The request has succeeded. */
export interface ValidateQueryServiceValidateQueryApiListValidateTestRequests200Response
  extends HttpResponse {
  status: "200";
  body: PagedValidateTestSummaryOutput;
}

export interface ValidateQueryServiceValidateQueryApiListValidateTestRequestsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ValidateQueryServiceValidateQueryApiListValidateTestRequestsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    ValidateQueryServiceValidateQueryApiListValidateTestRequestsDefaultHeaders;
}

export interface FeedbackServiceFeedbackSubmit201Headers {
  location: string;
  /** operation Id. */
  "operation-id": string;
  /** conversation Id. */
  "conversation-id": string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface FeedbackServiceFeedbackSubmit201Response extends HttpResponse {
  status: "201";
  headers: RawHttpHeaders & FeedbackServiceFeedbackSubmit201Headers;
}

export interface FeedbackServiceFeedbackSubmitDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface FeedbackServiceFeedbackSubmitDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & FeedbackServiceFeedbackSubmitDefaultHeaders;
}
