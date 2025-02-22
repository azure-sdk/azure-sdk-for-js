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
  Config: unknown;
}

/** Alias for SimulationType */
export type SimulationType = "Default" | "CustomPersona" | "HarmTurnGenerator";
