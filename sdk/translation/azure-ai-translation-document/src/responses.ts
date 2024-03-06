// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  TranslationsStatusOutput,
  DocumentStatusOutput,
  TranslationStatusOutput,
  DocumentsStatusOutput,
  SupportedFileFormatsOutput,
  SupportedStorageSourcesOutput,
} from "./outputModels";

/** There is no content to send for this request, but the headers may be useful. */
export interface StartTranslation204Response extends HttpResponse {
  status: "204";
}

export interface StartTranslationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface StartTranslationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & StartTranslationDefaultHeaders;
}

/** The request has succeeded. */
export interface GetTranslationsStatus200Response extends HttpResponse {
  status: "200";
  body: TranslationsStatusOutput;
}

export interface GetTranslationsStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetTranslationsStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetTranslationsStatusDefaultHeaders;
}

/** The request has succeeded. */
export interface GetDocumentStatus200Response extends HttpResponse {
  status: "200";
  body: DocumentStatusOutput;
}

export interface GetDocumentStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetDocumentStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetDocumentStatusDefaultHeaders;
}

/** The request has succeeded. */
export interface GetTranslationStatus200Response extends HttpResponse {
  status: "200";
  body: TranslationStatusOutput;
}

export interface GetTranslationStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetTranslationStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetTranslationStatusDefaultHeaders;
}

/** The request has succeeded. */
export interface CancelTranslation200Response extends HttpResponse {
  status: "200";
  body: TranslationStatusOutput;
}

export interface CancelTranslationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CancelTranslationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CancelTranslationDefaultHeaders;
}

/** The request has succeeded. */
export interface GetDocumentsStatus200Response extends HttpResponse {
  status: "200";
  body: DocumentsStatusOutput;
}

export interface GetDocumentsStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetDocumentsStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetDocumentsStatusDefaultHeaders;
}

/** The request has succeeded. */
export interface GetSupportedDocumentFormats200Response extends HttpResponse {
  status: "200";
  body: SupportedFileFormatsOutput;
}

export interface GetSupportedDocumentFormatsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetSupportedDocumentFormatsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetSupportedDocumentFormatsDefaultHeaders;
}

/** The request has succeeded. */
export interface GetSupportedGlossaryFormats200Response extends HttpResponse {
  status: "200";
  body: SupportedFileFormatsOutput;
}

export interface GetSupportedGlossaryFormatsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetSupportedGlossaryFormatsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetSupportedGlossaryFormatsDefaultHeaders;
}

/** The request has succeeded. */
export interface GetSupportedStorageSources200Response extends HttpResponse {
  status: "200";
  body: SupportedStorageSourcesOutput;
}

export interface GetSupportedStorageSourcesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetSupportedStorageSourcesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetSupportedStorageSourcesDefaultHeaders;
}
