// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** A job containing a batch of documents to deidentify. */
export interface DeidentifyJob {
  /** Storage location to perform the operation on. */
  sourceLocation: SourceStorageLocation;
  /** Target location to store output of operation. */
  targetLocation: TargetStorageLocation;
  /** Data type of the input documents. */
  dataType: DocumentDataType;
  /** Operation to perform on the input documents. */
  operation: OperationType;
  /** Format of the redacted output. Only valid when Operation is Redact. */
  redactionFormat?: string;
}

/** Storage location. */
export interface SourceStorageLocation {
  /** URL to storage location. Must be a valid Azure Storage SAS URI. */
  location: string;
  /** Prefix to filter blobs by. */
  prefix: string;
  /** List of extensions to filter blobs by. */
  extensions: string[];
}

/** Storage location. */
export interface TargetStorageLocation {
  /** URL to storage location. Must be a valid Azure Storage SAS URI. */
  location: string;
  /** Prefix to filter blobs by. */
  prefix: string;
}

/** Summary metrics the documents pertaining to a job. */
export interface JobSummary {
  /** Number of blobs that have completed. */
  successful: number;
  /** Number of blobs that have failed. */
  failed: number;
  /** Number of blobs that have been canceled. */
  canceled: number;
  /** Number of blobs total. */
  total: number;
  /** Number of bytes processed. */
  bytesProcessed: number;
}

/** Request for synchronous De-Identify operation. */
export interface DeidentifyOptions {
  /** Input text to deidentify. */
  inputText: string;
  /** Data type of the input. */
  dataType: DocumentDataType;
  /** Operation to perform on the input. */
  operation: OperationType;
  /** Requested Encoding of the tag response indices. */
  stringIndexType: StringIndexType;
  /** Format of the redacted output. Only valid when OperationType is Redact. */
  redactionFormat?: string;
}

/** Enum of supported Data Types. */
export type DocumentDataType = "PlainText";
/** Enum of supported Operation Types. */
export type OperationType = "Redact" | "Surrogate" | "Tag";
/** List of statuses a job can have. */
export type JobStatus =
  | "NotStarted"
  | "Running"
  | "Succeeded"
  | "Failed"
  | "Canceled"
  | "PartialFailed";
/** List of supported index encodings. */
export type StringIndexType =
  | "TextElement_v8"
  | "UnicodeCodePoint"
  | "Utf16CodeUnit";
