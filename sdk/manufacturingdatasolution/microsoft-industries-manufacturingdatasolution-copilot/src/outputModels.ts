// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ErrorModel } from "@azure-rest/core-client";

/** Query Response Result */
export interface QueryServiceQueryModelsQueryResponseOutput {
  /** Resultant Query Query or Query query execution response (JArray string) */
  result?: string;
  /** Summary of the Resultant Query Query or Query query execution response (JArray string) */
  summary?: string;
}

/** Operation Response Model */
export interface OperationsModelsOperationResultQueryOutput {
  /**
   * The operation status.
   *
   * Possible values: "Accepted", "InProgress", "TransientFailure", "Succeeded", "Failed", "Deleting", "Canceled", "Unknown", "Skipped"
   */
  readonly status: OperationStatusValueOutput;
  /** The operation id. */
  readonly operationId: string;
  /** The error message. */
  readonly errorMessage: string[];
}

/** The retrieval properties of the instruction. */
export interface InstructionsModelsRetrievalPropertiesOutput {
  /** The sub-topics related to the instruction. */
  subTopics: string[];
  /** The keywords associated with the instruction. */
  keywords: string[];
  /** The sample questions for the instruction. */
  sampleQuestions: string[];
}

/** Relationships */
export interface InstructionsModelsRelationshipsOutput {
  /** List of dependent instructions */
  dependencies: string[];
  /** List of InstructionIds to be excluded */
  exclusions: string[];
}

/** Paged collection of Instruction items */
export interface PagedInstructionOutput {
  /** The Instruction items on this page */
  value: Array<InstructionsModelsInstructionOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** This is the request model for Instruction */
export interface InstructionsModelsInstructionOutput {
  /** Id for the instruction */
  readonly id: string;
  /** intruction Id for the instruction */
  instructionId: string;
  /** Version for the instruction */
  instructionVersion: string;
  /**
   * Status for the instruction
   *
   * Possible values: "Active", "Inactive"
   */
  readonly status: InstructionStatusEnumOutput;
  /**
   * Domain for the instruction
   *
   * Possible values: "MOM", "SCM", "DE"
   */
  readonly domain: InstrustionDomainEnumOutput;
  /**
   * Sub-domain for the instruction
   *
   * Possible values: "Production", "Quality", "Maintenance", "Inventory", "Downtime", "Scrap", "Mixed"
   */
  readonly subDomain: InstructionSubDomainEnumOutput;
  /**
   * Category for the instruction
   *
   * Possible values: "Transactional", "Analytical", "Trend", "KPI"
   */
  readonly category: InstructionCategoryEnumOutput;
  /**
   * The language of the instruction.
   *
   * Possible values: "EN"
   */
  language: InstructionLanguageEnumOutput;
  /** The retrieval properties of the instruction. */
  retrieval: InstructionsModelsRetrievalPropertiesOutput;
  /** The relationships of the instruction. */
  relationships: InstructionsModelsRelationshipsOutput;
  /** The comment for the instruction. */
  comment: string;
}

/** Provides status details for long running operations. */
export interface OperationStatusErrorOutput {
  /** The unique ID of the operation. */
  id: string;
  /**
   * The status of the operation
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed", "Canceled"
   */
  status: OperationStateOutput;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
}

/** Provides status details for long running operations. */
export interface ResourceOperationStatusInstructionUpdateStatusRequestErrorOutput {
  /** The unique ID of the operation. */
  id: string;
  /**
   * The status of the operation
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed", "Canceled"
   */
  status: OperationStateOutput;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: InstructionsModelsUpdateStatusRequestOutput;
}

/** This is the patch request to update the status of instruction */
export interface InstructionsModelsUpdateStatusRequestOutput {
  /**
   * status of the instruction
   *
   * Possible values: "Active", "Inactive"
   */
  status: InstructionStatusEnumOutput;
}

/** The example query resource. */
export interface ExampleQueryModelsExampleQueryRequestOutput {
  /** The ID of the example query. */
  readonly exampleId: string;
  /** The user question associated with the example. */
  userQuestion: string;
  /** The linked instructions for the example query. */
  linkedInstructions: string[];
  /** The sample query for the example. */
  sampleQuery: ExampleQueryModelsSampleQueryOutput;
}

/** The sample query resource. */
export interface ExampleQueryModelsSampleQueryOutput {
  /** The query language. */
  language: string;
  /** The query string. */
  query: string;
}

/** Paged collection of ExampleQueryRequest items */
export interface PagedExampleQueryRequestOutput {
  /** The ExampleQueryRequest items on this page */
  value: Array<ExampleQueryModelsExampleQueryRequestOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** The patch request for the example query. */
export interface ExampleQueryModelsLinkInstructionRequestOutput {
  /** The linked instructions for the example query. */
  linkedInstructions?: string[];
}

/** This is the request model for Alias */
export interface AliasDictionaryModelsAliasOutput {
  /** Id for the alias */
  readonly id: string;
  /** Key for the alias */
  name: string;
  /** List of aliases */
  aliases: string[];
  /** Indicates if the alias is enabled */
  readonly isCustom: boolean;
  /** Indicates if the alias is enabled */
  readonly enabled: boolean;
}

/** Paged collection of Alias items */
export interface PagedAliasOutput {
  /** The Alias items on this page */
  value: Array<AliasDictionaryModelsAliasOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** This is the patch request to update the status of Alias */
export interface AliasDictionaryModelsActivateAliasOutput {
  /** status of the alias */
  enabled: boolean;
}

/** test response */
export interface ValidateQueryModelsTestResponseOutput {
  /** Test Run Id */
  testRunId: string;
  /** Test Run Status */
  testRunStatus: string;
  /** creation date */
  createdDateTime: string;
  /** created by */
  createdBy: string;
}

/** Test Query */
export interface ValidateQueryModelsTestQueryOutput {
  /** The unique identifier of the test query. */
  readonly validateTestId: string;
  /** start date of test run */
  fromDate?: string;
  /** end date of test run */
  toDate?: string;
}

/** Paged collection of ValidateTestSummary items */
export interface PagedValidateTestSummaryOutput {
  /** The ValidateTestSummary items on this page */
  value: Array<ValidateQueryModelsValidateTestSummaryOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Validate Test Response */
export interface ValidateQueryModelsValidateTestSummaryOutput {
  /** The unique identifier of the test. */
  readonly testId: string;
  /** The time when the test was created. */
  createdTime: string;
  /** The user who created the test. */
  createdBy: string;
}

/** Alias for OperationStatusValueOutput */
export type OperationStatusValueOutput = string;
/** Alias for InstructionStatusEnumOutput */
export type InstructionStatusEnumOutput = string;
/** Alias for InstrustionDomainEnumOutput */
export type InstrustionDomainEnumOutput = string;
/** Alias for InstructionSubDomainEnumOutput */
export type InstructionSubDomainEnumOutput = string;
/** Alias for InstructionCategoryEnumOutput */
export type InstructionCategoryEnumOutput = string;
/** Alias for InstructionLanguageEnumOutput */
export type InstructionLanguageEnumOutput = string;
/** Alias for OperationStateOutput */
export type OperationStateOutput = string;
