// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface LongRunningResponseOutput {
  Location: string;
  OperationResult: any;
}

/** Attack Objective */
export interface AttackObjectiveOutput {
  /** The unique identifier. */
  Id: string;
  /** The metadata. */
  Metadata?: MetadataOutput;
  /** List of sources. */
  Source: string[];
  /** The modality. */
  Modality: string;
  /** The messages. */
  Messages: Array<MessageOutput>;
}

/** Metadata */
export interface MetadataOutput {
  /** List of target harms. */
  TargetHarms: Array<TargetHarmOutput>;
  /** The language */
  Language: string;
}

/** Target Harm */
export interface TargetHarmOutput {
  /** The risk type. */
  RiskType?: string;
  /** The risk sub type. */
  RiskSubType?: string;
}

/** Message */
export interface MessageOutput {
  /** The role. */
  Role?: string;
  /** The content. */
  Content?: string;
}
