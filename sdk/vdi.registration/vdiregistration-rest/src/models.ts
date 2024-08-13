// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The storage configuration definition */
export interface Storage {}

/** The processing configuration definition */
export interface Processing {}

/** The AI Task configuration definition */
export interface AiTaskConfiguration {
  /** Version of the AI Task configured */
  version: string;
}

/** Represents the registration payload */
export interface Registration {
  /** The registration name. */
  name: string;
  /** The storage configuration definition */
  storage: Storage;
  /** The processing configuration definition */
  processing: Processing;
  /** The processing configuration definition */
  customProperties: Record<string, unknown>;
  /** The AI Task configuration definition */
  aiTaskConfigurations: Record<string, AiTaskConfiguration>;
  /** The anlytics configuration definition */
  analytics: Record<string, unknown>;
}
