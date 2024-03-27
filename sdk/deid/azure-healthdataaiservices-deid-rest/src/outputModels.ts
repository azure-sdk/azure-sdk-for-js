// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";
import { ErrorModel } from "@azure-rest/core-client";

/** A job containing a batch of documents to deidentify. */
export interface JobOutput {
  /** Storage location to perform the operation on. */
  sourceLocation: SourceStorageLocationOutput;
  /** Target location to store output of operation. */
  targetLocation: TargetStorageLocationOutput;
  /**
   * Data type of the input documents.
   *
   * Possible values: "PlainText"
   */
  dataType: string;
  /**
   * Operation to perform on the input documents.
   *
   * Possible values: "Redact", "Surrogate", "Tag"
   */
  operation: string;
  /** Format of the redacted output. Only valid when Operation is Redact. */
  redactionFormat?: string;
  /**
   * Current status of a job.
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed", "Canceled", "PartialFailed"
   */
  readonly status: string;
  /** Error when job fails in it's entirety. */
  readonly error?: ErrorModel;
  /** Date and time when the job was created. */
  readonly createdAt: string;
  /** Date and time when the job was started. */
  readonly startedAt?: string;
  /**
   * Date and time when the job was completed.
   *
   * If the job is canceled, this is the time when the job was canceled.
   *
   * If the job failed, this is the time when the job failed.
   */
  readonly lastUpdatedAt?: string;
  /** Summary of a job. Exists only when the job is completed. */
  readonly summary?: JobSummaryOutput;
}

/** Storage location. */
export interface SourceStorageLocationOutput {
  /** URL to storage location. Must be a valid Azure Storage SAS URI. */
  location: string;
  /** Prefix to filter blobs by. */
  prefix: string;
  /** List of extensions to filter blobs by. */
  extensions?: string[];
}

/** Storage location. */
export interface TargetStorageLocationOutput {
  /** URL to storage location. Must be a valid Azure Storage SAS URI. */
  location: string;
  /** Prefix to filter blobs by. */
  prefix: string;
}

/** Summary metrics the documents pertaining to a job. */
export interface JobSummaryOutput {
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

/** Provides the 'x-ms-client-request-id' header to enable request correlation in requests and responses. */
export interface ClientRequestIdHeaderOutput {}

/** File report once job has completed. */
export interface FileOutput {
  /** Id of the file report. */
  readonly id: string;
  /** File Location for the input. */
  input: FileLocationOutput;
  /** File Location for the output. */
  output?: FileLocationOutput;
  /**
   * Status of the file.
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed", "Canceled"
   */
  status: string;
  /** Error when file fails. */
  error?: ErrorModel;
}

/** Location of a file. */
export interface FileLocationOutput {
  /** Absolute path to the file in storage. */
  path: string;
  /** The entity tag for this resource. */
  readonly etag: string;
}

/** Request for synchronous DeID operation. */
export interface DeidRequestOutput {
  /** Input text to deidentify. */
  inputText: string;
  /**
   * Data type of the input.
   *
   * Possible values: "PlainText"
   */
  dataType: string;
  /**
   * Operation to perform on the input.
   *
   * Possible values: "Redact", "Surrogate", "Tag"
   */
  operation: string;
  /**
   * Requested Encoding of the tag response indices.
   *
   * Possible values: "TextElement_v8", "UnicodeCodePoint", "Utf16CodeUnit"
   */
  stringIndexType?: string;
  /** Format of the redacted output. Only valid when OperationType is Redact. */
  redactionFormat?: string;
}

/** Response for synchronous DeID operation. */
export interface DeidResponseOutput {
  /** Output text after deidentification. Not available for Tag Operation. */
  outputText?: string;
  /** Result of the tag operation. Only available for Tag Operation. */
  taggerResult?: PhiTaggerResultOutput;
}

/** Result of the tag operation. */
export interface PhiTaggerResultOutput {
  /** List of entities detected in the input. */
  entities: Array<PhiEntityOutput>;
  /**
   * Requested Encoding of the tag response indices.
   *
   * Possible values: "TextElement_v8", "UnicodeCodePoint", "Utf16CodeUnit"
   */
  stringIndexType: string;
  /** Path to the file in the storage container. */
  path?: string;
  /** Checksum of the file. */
  checksum?: string;
}

/** Phi Entity tag in the input. */
export interface PhiEntityOutput {
  /**
   * Phi Category of the entity.
   *
   * Possible values: "Unknown", "Account", "Age", "BioID", "City", "CountryOrRegion", "Date", "Device", "Doctor", "Email", "Fax", "HealthPlan", "Hospital", "IDNum", "IPAddress", "License", "LocationOther", "MedicalRecord", "Organization", "Patient", "Phone", "Profession", "SocialSecurity", "State", "Street", "Url", "Username", "Vehicle", "Zip"
   */
  category: string;
  /** Starting index of the location from within the input text. */
  offset: number;
  /** Length of the input text. */
  length: number;
  /** Text of the entity. */
  text?: string;
  /** Confidence score of the text/type pairing. */
  confidenceScore?: number;
}

/** Paged collection of Job items */
export type PagedJobOutput = Paged<JobOutput>;
/** Paged collection of File items */
export type PagedFileOutput = Paged<FileOutput>;
