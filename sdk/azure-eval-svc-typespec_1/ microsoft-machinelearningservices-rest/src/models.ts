// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface AnnotationDTO {
  AnnotationTask: string;
  ContentType: string;
  UserTextList: string[];
  Contents: Array<Content>;
  MetricList: string[];
  PromptVersion: string;
}

export interface Content {
  Messages: unknown[];
}

/** Customization Parameters */
export interface SimulationDTO {
  /** Additional headers. */
  Headers?: Record<string, string>;
  /** Parameters. */
  Params?: Record<string, string>;
  /** Template parameters. */
  TemplateParameters?: Record<string, string>;
  /** Customization parameters. */
  CustomizationParameters?: CustomizationParameters;
  /** Json. */
  Json?: string;
  /** Url. */
  Url?: string;
  /** Template key. */
  TemplateKey?: string;
  /** Type of Simulation. */
  SimulationType?: SimulationType;
  /** 'True' if Microsoft internal tenant and 'False' otherwise. */
  IsMicrosoftTenant?: boolean;
  /** Azure subscription id. */
  SubscriptionId?: string;
  /** Resource group name. */
  ResourceGroupName?: string;
  /** Workspace name. */
  WorkspaceName?: string;
}

/** Customization Parameters */
export interface CustomizationParameters {
  /** Application scenario. */
  ApplicationScenario?: string;
  /** List of harm categories. */
  HarmCategories: string[];
}

export interface GradersDTO {
  Data: Data;
  ModelConfig: ModelConfig;
  SampleGenerators: Array<SampleGenerator>;
  Graders: Array<Grader>;
}

export interface Data {
  assetId: string;
}

export interface ModelConfig {
  AzureEndpoint: string;
}

export interface SampleGenerator {
  ModelName: string;
  Type: string;
  SamplingParams: unknown;
  TrajectoryTemplate: unknown;
}

export interface Grader {
  Name: string;
  Description: string;
  Config: GraderConfigBase;
}

export interface GraderConfigBase {
  Type: string;
}

export interface StringCheckConfig extends GraderConfigBase {
  Type: string;
  Lhs: VRef;
  Rhs: VRef;
  CaseSensitive: boolean;
  Operation: string;
  TrueGrade: number;
  FalseGrade: number;
}

export interface VRef {
  Type: string;
  NamespaceName: string;
  VariableName: string;
}

export interface StringValidityConfig extends GraderConfigBase {
  Type: string;
  Operation: string;
  TrueGrade: number;
  FalseGrade: number;
  Reference: VRef;
}

export interface ChatCriteriaModelGraderConfig extends GraderConfigBase {
  Type: string;
  ModelName?: string;
  TrueGrade: number;
  FalseGrade: number;
  Conversation?: VRef;
  Response: VRef;
  Criteria: JsonSchema;
}

export interface JsonSchema {
  Type: string;
  Value: string;
}

export interface JsonSchemaConfig extends GraderConfigBase {
  Type: string;
  JsonSchema: JsonSchema;
  Reference: VRef;
}

export interface SentimentClassificationConfig extends GraderConfigBase {
  Type: string;
  ModelName: string;
  NegativeGrade: number;
  NeutralGrade: number;
  PositiveGrade: number;
  UnsureGrade: number;
  Text: VRef;
}

export interface FactualityConfig extends GraderConfigBase {
  Type: string;
  ModelName: string;
  AgreementGrade: number;
  DifferButFactualAgreementGrade: number;
  DisagreementGrade: number;
  SubsetGrade: number;
  SupersetGrade: number;
  Question: VRef;
  Reference: VRef;
  Submission: VRef;
}

export interface SemanticSimilarityConfig extends GraderConfigBase {
  Type: string;
  ModelName: string;
  InvalidGrade: number;
  Prompt: Prompt;
  Labels: Array<Label>;
}

export interface Prompt {
  Type: string;
  Template: string;
}

export interface Label {
  Text: string;
  Grade: number;
}

/** Alias for SimulationType */
export type SimulationType = "Default" | "CustomPersona" | "HarmTurnGenerator";
