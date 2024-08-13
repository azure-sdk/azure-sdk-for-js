// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";

/** The storage configuration definition */
export interface StorageOutput {}

/** The processing configuration definition */
export interface ProcessingOutput {}

/** The AI Task configuration definition */
export interface AiTaskConfigurationOutput {
  /** Version of the AI Task configured */
  version: string;
}

/** Represents the registration payload */
export interface RegistrationOutput {
  /** The registration name. */
  name: string;
  /** The storage configuration definition */
  storage: StorageOutput;
  /** The processing configuration definition */
  processing: ProcessingOutput;
  /** The processing configuration definition */
  customProperties: Record<string, any>;
  /** The AI Task configuration definition */
  aiTaskConfigurations: Record<string, AiTaskConfigurationOutput>;
  /** The anlytics configuration definition */
  analytics: Record<string, any>;
  /** The status of the created registration */
  readonly status: string;
}

/** Alias for RepeatabilityResultOutput */
export type RepeatabilityResultOutput = "accepted" | "rejected";
/** Paged collection of Registration items */
export type PagedRegistrationOutput = Paged<RegistrationOutput>;
