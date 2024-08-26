// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { uint8ArrayToString } from "@azure/core-util";

/** Translation job submission batch request */
export interface StartTranslationDetails {
  /** The input list of documents or folders containing documents */
  inputs: BatchRequest[];
}

export function startTranslationDetailsSerializer(
  item: StartTranslationDetails,
): Record<string, unknown> {
  return {
    inputs: item["inputs"].map(batchRequestSerializer),
  };
}

/** Definition for the input batch translation request */
export interface BatchRequest {
  /** Source of the input documents */
  source: SourceInput;
  /** Location of the destination for the output */
  targets: TargetInput[];
  /** Storage type of the input documents source string */
  storageType?: StorageInputType;
}

export function batchRequestSerializer(
  item: BatchRequest,
): Record<string, unknown> {
  return {
    source: sourceInputSerializer(item.source),
    targets: item["targets"].map(targetInputSerializer),
    storageType: item["storageType"],
  };
}

/** Source of the input documents */
export interface SourceInput {
  /** Location of the folder / container or single file with your documents */
  sourceUrl: string;
  /** Document filter */
  filter?: DocumentFilter;
  /**
   * Language code
   * If none is specified, we will perform auto detect on the document
   */
  language?: string;
  /** Storage Source */
  storageSource?: StorageSource;
}

export function sourceInputSerializer(
  item: SourceInput,
): Record<string, unknown> {
  return {
    sourceUrl: item["sourceUrl"],
    filter: !item.filter ? item.filter : documentFilterSerializer(item.filter),
    language: item["language"],
    storageSource: item["storageSource"],
  };
}

/** Document filter */
export interface DocumentFilter {
  /**
   * A case-sensitive prefix string to filter documents in the source path for
   * translation.
   * For example, when using a Azure storage blob Uri, use the prefix
   * to restrict sub folders for translation.
   */
  prefix?: string;
  /**
   * A case-sensitive suffix string to filter documents in the source path for
   * translation.
   * This is most often use for file extensions
   */
  suffix?: string;
}

export function documentFilterSerializer(
  item: DocumentFilter,
): Record<string, unknown> {
  return {
    prefix: item["prefix"],
    suffix: item["suffix"],
  };
}

/** Known values of {@link StorageSource} that the service accepts. */
export enum KnownStorageSource {
  /** AzureBlob */
  AzureBlob = "AzureBlob",
}

/**
 * Storage Source \
 * {@link KnownStorageSource} can be used interchangeably with StorageSource,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AzureBlob**
 */
export type StorageSource = string;

/** Destination for the finished translated documents */
export interface TargetInput {
  /** Location of the folder / container with your documents */
  targetUrl: string;
  /** Category / custom system for translation request */
  category?: string;
  /** Target Language */
  language: string;
  /** List of Glossary */
  glossaries?: Glossary[];
  /** Storage Source */
  storageSource?: StorageSource;
}

export function targetInputSerializer(
  item: TargetInput,
): Record<string, unknown> {
  return {
    targetUrl: item["targetUrl"],
    category: item["category"],
    language: item["language"],
    glossaries:
      item["glossaries"] === undefined
        ? item["glossaries"]
        : item["glossaries"].map(glossarySerializer),
    storageSource: item["storageSource"],
  };
}

/** Glossary / translation memory for the request */
export interface Glossary {
  /**
   * Location of the glossary.
   * We will use the file extension to extract the
   * formatting if the format parameter is not supplied.
   *
   * If the translation
   * language pair is not present in the glossary, it will not be applied
   */
  glossaryUrl: string;
  /** Format */
  format: string;
  /** Optional Version.  If not specified, default is used. */
  version?: string;
  /** Storage Source */
  storageSource?: StorageSource;
}

export function glossarySerializer(item: Glossary): Record<string, unknown> {
  return {
    glossaryUrl: item["glossaryUrl"],
    format: item["format"],
    version: item["version"],
    storageSource: item["storageSource"],
  };
}

/** Known values of {@link StorageInputType} that the service accepts. */
export enum KnownStorageInputType {
  /** Folder */
  Folder = "Folder",
  /** File */
  File = "File",
}

/**
 * Storage type of the input documents source string \
 * {@link KnownStorageInputType} can be used interchangeably with StorageInputType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Folder** \
 * **File**
 */
export type StorageInputType = string;

/** Translation job Status Response */
export interface _TranslationsStatus {
  /** The summary status of individual operation */
  value: TranslationStatus[];
  /** Url for the next page.  Null if no more pages available */
  nextLink?: string;
}

/** Translation job status response */
export interface TranslationStatus {
  /** Id of the operation. */
  id: string;
  /** Operation created date time */
  createdDateTimeUtc: Date;
  /** Date time in which the operation's status has been updated */
  lastActionDateTimeUtc: Date;
  /** List of possible statuses for job or document */
  status: Status;
  /**
   * This contains an outer error with error code, message, details, target and an
   * inner error with more descriptive details.
   */
  error?: TranslationError;
  /** Status Summary */
  summary: StatusSummary;
}

/** Known values of {@link Status} that the service accepts. */
export enum KnownStatus {
  /** NotStarted */
  NotStarted = "NotStarted",
  /** Running */
  Running = "Running",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Cancelled */
  Cancelled = "Cancelled",
  /** Cancelling */
  Cancelling = "Cancelling",
  /** ValidationFailed */
  ValidationFailed = "ValidationFailed",
}

/**
 * List of possible statuses for job or document \
 * {@link KnownStatus} can be used interchangeably with Status,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotStarted** \
 * **Running** \
 * **Succeeded** \
 * **Failed** \
 * **Cancelled** \
 * **Cancelling** \
 * **ValidationFailed**
 */
export type Status = string;

/**
 * This contains an outer error with error code, message, details, target and an
 * inner error with more descriptive details.
 */
export interface TranslationError {
  /** Enums containing high level error codes. */
  code: TranslationErrorCode;
  /** Gets high level error message. */
  message: string;
  /**
   * Gets the source of the error.
   * For example it would be "documents" or
   * "document id" in case of invalid document.
   */
  readonly target?: string;
  /**
   * New Inner Error format which conforms to Cognitive Services API Guidelines
   * which is available at
   * https://microsoft.sharepoint.com/%3Aw%3A/t/CognitiveServicesPMO/EUoytcrjuJdKpeOKIK_QRC8BPtUYQpKBi8JsWyeDMRsWlQ?e=CPq8ow.
   * This
   * contains required properties ErrorCode, message and optional properties target,
   * details(key value pair), inner error(this can be nested).
   */
  innerError?: InnerTranslationError;
}

/** Known values of {@link TranslationErrorCode} that the service accepts. */
export enum KnownTranslationErrorCode {
  /** InvalidRequest */
  InvalidRequest = "InvalidRequest",
  /** InvalidArgument */
  InvalidArgument = "InvalidArgument",
  /** InternalServerError */
  InternalServerError = "InternalServerError",
  /** ServiceUnavailable */
  ServiceUnavailable = "ServiceUnavailable",
  /** ResourceNotFound */
  ResourceNotFound = "ResourceNotFound",
  /** Unauthorized */
  Unauthorized = "Unauthorized",
  /** RequestRateTooHigh */
  RequestRateTooHigh = "RequestRateTooHigh",
}

/**
 * Enums containing high level error codes. \
 * {@link KnownTranslationErrorCode} can be used interchangeably with TranslationErrorCode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **InvalidRequest** \
 * **InvalidArgument** \
 * **InternalServerError** \
 * **ServiceUnavailable** \
 * **ResourceNotFound** \
 * **Unauthorized** \
 * **RequestRateTooHigh**
 */
export type TranslationErrorCode = string;

/**
 * New Inner Error format which conforms to Cognitive Services API Guidelines
 * which is available at
 * https://microsoft.sharepoint.com/%3Aw%3A/t/CognitiveServicesPMO/EUoytcrjuJdKpeOKIK_QRC8BPtUYQpKBi8JsWyeDMRsWlQ?e=CPq8ow.
 * This
 * contains required properties ErrorCode, message and optional properties target,
 * details(key value pair), inner error(this can be nested).
 */
export interface InnerTranslationError {
  /** Gets code error string. */
  code: string;
  /** Gets high level error message. */
  message: string;
  /**
   * Gets the source of the error.
   * For example it would be "documents" or
   * "document id" in case of invalid document.
   */
  readonly target?: string;
  /**
   * New Inner Error format which conforms to Cognitive Services API Guidelines
   * which is available at
   * https://microsoft.sharepoint.com/%3Aw%3A/t/CognitiveServicesPMO/EUoytcrjuJdKpeOKIK_QRC8BPtUYQpKBi8JsWyeDMRsWlQ?e=CPq8ow.
   * This
   * contains required properties ErrorCode, message and optional properties target,
   * details(key value pair), inner error(this can be nested).
   */
  innerError?: InnerTranslationError;
}

/** Status Summary */
export interface StatusSummary {
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
export interface DocumentStatus {
  /** Location of the document or folder */
  path?: string;
  /** Location of the source document */
  sourcePath: string;
  /** Operation created date time */
  createdDateTimeUtc: Date;
  /** Date time in which the operation's status has been updated */
  lastActionDateTimeUtc: Date;
  /** List of possible statuses for job or document */
  status: Status;
  /** To language */
  to: string;
  /**
   * This contains an outer error with error code, message, details, target and an
   * inner error with more descriptive details.
   */
  error?: TranslationError;
  /** Progress of the translation if available */
  progress: number;
  /** Document Id */
  id: string;
  /** Character charged by the API */
  characterCharged?: number;
}

/** Documents Status Response */
export interface _DocumentsStatus {
  /** The detail status of individual documents */
  value: DocumentStatus[];
  /** Url for the next page.  Null if no more pages available */
  nextLink?: string;
}

/** Known values of {@link FileFormatType} that the service accepts. */
export enum KnownFileFormatType {
  /** document */
  document = "document",
  /** glossary */
  glossary = "glossary",
}

/**
 * Format types \
 * {@link KnownFileFormatType} can be used interchangeably with FileFormatType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **document** \
 * **glossary**
 */
export type FileFormatType = string;

/** List of supported file formats */
export interface SupportedFileFormats {
  /** list of objects */
  value: FileFormat[];
}

/** File Format */
export interface FileFormat {
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
  /** Supported Type for this format */
  type?: string;
}

/** Document Translate Request Content */
export interface DocumentTranslateContent {
  /** Document to be translated in the form */
  document: Uint8Array;
  /** Glossary-translation memory will be used during translation in the form. */
  glossary?: Uint8Array[];
}

export function documentTranslateContentSerializer(
  item: DocumentTranslateContent,
): Record<string, unknown> {
  return {
    document: uint8ArrayToString(item["document"], "base64"),
    glossary:
      item["glossary"] === undefined
        ? item["glossary"]
        : item["glossary"].map((p) => uint8ArrayToString(p, "base64")),
  };
}

/**
 * Contains unified error information used for HTTP responses across any Cognitive
 * Service. Instances
 * can be created either through
 * Microsoft.CloudAI.Containers.HttpStatusExceptionV2 or by returning it directly
 * from
 * a controller.
 */
export interface TranslationErrorResponse {
  /**
   * This contains an outer error with error code, message, details, target and an
   * inner error with more descriptive details.
   */
  error?: TranslationError;
}

/** Document Translation supported versions */
export type Versions = "2024-05-01";
