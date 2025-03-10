// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** The retrieval properties of the instruction. */
export interface InstructionsModelsRetrievalProperties {
  /** The sub-topics related to the instruction. */
  subTopics: string[];
  /** The keywords associated with the instruction. */
  keywords: string[];
  /** The sample questions for the instruction. */
  sampleQuestions: string[];
}

/** Relationships */
export interface InstructionsModelsRelationships {
  /** List of dependent instructions */
  dependencies: string[];
  /** List of InstructionIds to be excluded */
  exclusions: string[];
}

/** This is the request model for Instruction */
export interface InstructionsModelsInstruction {
  /** intruction Id for the instruction */
  instructionId: string;
  /** Version for the instruction */
  instructionVersion: string;
  /**
   * The language of the instruction.
   *
   * Possible values: "EN"
   */
  language: InstructionLanguageEnum;
  /** The retrieval properties of the instruction. */
  retrieval: InstructionsModelsRetrievalProperties;
  /** The relationships of the instruction. */
  relationships: InstructionsModelsRelationships;
  /** The comment for the instruction. */
  comment: string;
}

/** This is the patch request to update the status of instruction */
export interface InstructionsModelsUpdateStatusRequest {
  /**
   * status of the instruction
   *
   * Possible values: "Active", "Inactive"
   */
  status: InstructionStatusEnum;
}

/** The example query resource. */
export interface ExampleQueryModelsExampleQueryRequest {
  /** The user question associated with the example. */
  userQuestion: string;
  /** The linked instructions for the example query. */
  linkedInstructions: string[];
  /** The sample query for the example. */
  sampleQuery: ExampleQueryModelsSampleQuery;
}

/** The sample query resource. */
export interface ExampleQueryModelsSampleQuery {
  /** The query language. */
  language: string;
  /** The query string. */
  query: string;
}

/** The patch request for the example query. */
export interface ExampleQueryModelsLinkInstructionRequest {
  /** The linked instructions for the example query. */
  linkedInstructions?: string[];
}

/** This is the request model for Alias */
export interface AliasDictionaryModelsAlias {
  /** Key for the alias */
  name: string;
  /** List of aliases */
  aliases: string[];
}

/** This is the patch request to update the status of Alias */
export interface AliasDictionaryModelsActivateAlias {
  /** status of the alias */
  enabled: boolean;
}

/** Test Query Request */
export interface ValidateQueryModelsTestQueryRequest {
  /** The name of the test query. */
  testName: string;
  /** The test cases for the query. */
  testCases: Array<ValidateQueryModelsCopilotTestCase>;
  /** The run in conversation context. */
  runInConversationContext: boolean;
  /** coversation Id */
  conversationId?: string;
}

/** Test Case for Test run */
export interface ValidateQueryModelsCopilotTestCase {
  /** The natural language input for the test case. */
  naturalLanguage?: string;
  /** The expected query for the test case. */
  expectedQuery?: string;
  /** The expected entities for the test case. */
  expectedEntities?: string;
}

/** feedbackRequest */
export interface FeedbackModelsFeedbackRequest {
  /** The query id */
  operationId: string;
  /** conversation id */
  conversationId: string;
  /**
   * The feedback
   *
   * Possible values: "Neutral", "ThumbUp", "ThumbDown"
   */
  feedback: FeedbackCategory;
  /**
   * QueryEndpoint
   *
   * Possible values: "V3", "Assistant"
   */
  queryEndpoint: QueryEndpoint;
}

/** Alias for InstructionStatusEnum */
export type InstructionStatusEnum = string;
/** Alias for InstrustionDomainEnum */
export type InstrustionDomainEnum = string;
/** Alias for InstructionSubDomainEnum */
export type InstructionSubDomainEnum = string;
/** Alias for InstructionCategoryEnum */
export type InstructionCategoryEnum = string;
/** Alias for InstructionLanguageEnum */
export type InstructionLanguageEnum = string;
/** Alias for FeedbackCategory */
export type FeedbackCategory = string;
/** Alias for QueryEndpoint */
export type QueryEndpoint = string;
