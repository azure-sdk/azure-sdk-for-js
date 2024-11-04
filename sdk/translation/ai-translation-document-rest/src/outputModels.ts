// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ErrorModel } from "@azure-rest/core-client";

/** Translation job Status Response */
export interface TranslationsStatusOutput {
  /** The summary status of individual operation */
  value: Array<TranslationStatusOutput>;
  /** Url for the next page.  Null if no more pages available */
  nextLink?: string;
}

/** Translation job status response */
export interface TranslationStatusOutput {
  /** Id of the translation operation. */
  id: string;
  /** Operation created date time */
  createdDateTimeUtc: string;
  /** Date time in which the operation's status has been updated */
  lastActionDateTimeUtc: string;
  /**
   * List of possible statuses for job or document
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed", "Cancelled", "Cancelling", "ValidationFailed"
   */
  status: StatusOutput;
  /**
   * This contains an outer error with error code, message, details, target and an
   * inner error with more descriptive details.
   */
  error?: ErrorModel;
  /** Status Summary */
  summary: StatusSummaryOutput;
}

/** Status Summary */
export interface StatusSummaryOutput {
  /** Total count */
  total: number;
  /** Failed count */
  failed: number;
  /** Number of Success */
  success: number;
  /** Number of in progress */
  inProgress: number;
  /** Count of not yet started */
  notYetStarted: number;
  /** Number of cancelled */
  cancelled: number;
  /** Total characters charged by the API */
  totalCharacterCharged: number;
}

/** Document Status Response */
export interface DocumentStatusOutput {
  /** Location of the document or folder */
  path?: string;
  /** Location of the source document */
  sourcePath: string;
  /** Operation created date time */
  createdDateTimeUtc: string;
  /** Date time in which the operation's status has been updated */
  lastActionDateTimeUtc: string;
  /**
   * List of possible statuses for job or document
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed", "Cancelled", "Cancelling", "ValidationFailed"
   */
  status: StatusOutput;
  /** To language */
  to: string;
  /**
   * This contains an outer error with error code, message, details, target and an
   * inner error with more descriptive details.
   */
  error?: ErrorModel;
  /** Progress of the translation if available */
  progress: number;
  /** Document Id */
  id: string;
  /** Character charged by the API */
  characterCharged?: number;
}

/** Documents Status Response */
export interface DocumentsStatusOutput {
  /** The detail status of individual documents */
  value: Array<DocumentStatusOutput>;
  /** Url for the next page.  Null if no more pages available */
  nextLink?: string;
}

/** List of supported file formats */
export interface SupportedFileFormatsOutput {
  /** list of objects */
  value: Array<FileFormatOutput>;
}

/** File Format */
export interface FileFormatOutput {
  /** Name of the format */
  format: string;
  /** Supported file extension for this format */
  fileExtensions: string[];
  /** Supported Content-Types for this format */
  contentTypes: string[];
  /** Default version if none is specified */
  defaultVersion?: string;
  /** Supported Version */
  versions?: string[];
  /**
   * Supported Type for this format
   *
   * Possible values: "document", "glossary"
   */
  type?: FileFormatTypeOutput;
}

/** Alias for StatusOutput */
export type StatusOutput = string;
/** Alias for FileFormatTypeOutput */
export type FileFormatTypeOutput = string;
