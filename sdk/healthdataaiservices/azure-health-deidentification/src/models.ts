// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** A job containing a batch of documents to de-identify. */
export interface DeidentificationJob {
  /** Storage location to perform the operation on. */
  sourceLocation: SourceStorageLocation;
  /** Target location to store output of operation. */
  targetLocation: TargetStorageLocation;
  /** Customization parameters to override default service behaviors. */
  customizations?: CustomizationOptions;
}

/** Storage location. */
export interface SourceStorageLocation {
  /** URL to storage location. */
  location: string;
  /** Prefix to filter path by. */
  prefix: string;
  /** List of extensions to filter path by. */
  extensions?: string[];
  /** Language and Locale that the service should use. */
  locale?: string;
  /**
   * Data type of the input documents.
   *
   * Possible values: "Plaintext"
   */
  dataType?: DocumentDataType;
}

/** Storage location. */
export interface TargetStorageLocation {
  /** URL to storage location. */
  location: string;
  /** Prefix to filter path by. */
  prefix: string;
  /** When set to true during a job, the service will overwrite the output location if it already exists. */
  overwrite?: boolean;
}

/** Customizations options to override default service behaviors. */
export interface CustomizationOptions {
  /** Format of the redacted output. Only valid when Operation is Redact. */
  redactionFormat?: string;
  /** When set to true during a job, the service will surrogate all documents individually. */
  disableConsistency?: boolean;
  /**
   * Operation to perform on the input documents.
   *
   * Possible values: "Redact", "Surrogate", "Tag"
   */
  operation?: OperationType;
}

/** Summary metrics of a job. */
export interface JobSummary {
  /** Number of documents that have completed. */
  successful: number;
  /** Number of documents that have failed. */
  failed: number;
  /** Number of documents that have been canceled. */
  canceled: number;
  /** Number of documents total. */
  total: number;
  /** Number of bytes processed. */
  bytesProcessed: number;
}

/** Request body for de-identification operation. */
export interface DeidentificationContent {
  /** Input text to de-identify. */
  inputText: string;
  /**
   * Data type of the input.
   *
   * Possible values: "Plaintext"
   */
  dataType?: DocumentDataType;
  /** Customization parameters to override default service behaviors. */
  customizations?: CustomizationOptions;
}

/** Alias for DocumentDataType */
export type DocumentDataType = string;
/** Alias for OperationType */
export type OperationType = string;
/** Alias for JobStatus */
export type JobStatus = string;
