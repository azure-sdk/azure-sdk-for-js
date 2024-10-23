// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  CreateEntryResultOutput,
  GetOperationResultOutput,
  ListOperationResultOutput,
  EntryIdsOutput,
  ServiceUnavailableErrorOutput,
  ParametersResultOutput,
  DidDocumentOutput,
  CodeTransparencyConfigurationOutput,
  VersionResultOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface CreateEntry200Response extends HttpResponse {
  status: "200";
  body: CreateEntryResultOutput;
}

export interface CreateEntryDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateEntryDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateEntryDefaultHeaders;
}

/** The request has succeeded. */
export interface GetEntryStatus200Response extends HttpResponse {
  status: "200";
  body: GetOperationResultOutput;
}

export interface GetEntryStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetEntryStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetEntryStatusDefaultHeaders;
}

/** The request has succeeded. */
export interface ListEntryStatuses200Response extends HttpResponse {
  status: "200";
  body: ListOperationResultOutput;
}

export interface ListEntryStatusesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListEntryStatusesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListEntryStatusesDefaultHeaders;
}

export interface GetEntry200Headers {
  /** The MIME content type a Cose body is application/cose, containing a CoseSign1 signature. */
  "content-type": "application/cose";
}

/** An Entry in Cose format */
export interface GetEntry200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetEntry200Headers;
}

export interface GetEntryDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetEntryDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetEntryDefaultHeaders;
}

export interface GetEntryReceipt200Headers {
  /** The MIME content type for raw receipt is application/cbor. */
  "content-type": "application/cbor";
}

/** A Raw Entry in cbor format */
export interface GetEntryReceipt200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetEntryReceipt200Headers;
}

export interface GetEntryReceiptDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetEntryReceiptDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetEntryReceiptDefaultHeaders;
}

/** The request has succeeded. */
export interface ListEntryIds200Response extends HttpResponse {
  status: "200";
  body: EntryIdsOutput;
}

export interface ListEntryIds503Headers {
  /** Retry the same request after a suggested number of seconds */
  "retry-after"?: string;
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

/** Service unavailable. */
export interface ListEntryIds503Response extends HttpResponse {
  status: "503";
  body: ServiceUnavailableErrorOutput;
  headers: RawHttpHeaders & ListEntryIds503Headers;
}

export interface ListEntryIdsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListEntryIdsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListEntryIdsDefaultHeaders;
}

/** The request has succeeded. */
export interface GetParameters200Response extends HttpResponse {
  status: "200";
  body: ParametersResultOutput;
}

export interface GetParametersDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetParametersDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetParametersDefaultHeaders;
}

/** The request has succeeded. */
export interface GetDidConfig200Response extends HttpResponse {
  status: "200";
  body: DidDocumentOutput;
}

export interface GetDidConfigDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetDidConfigDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetDidConfigDefaultHeaders;
}

/** The request has succeeded. */
export interface GetCodeTransparencyConfig200Response extends HttpResponse {
  status: "200";
  body: CodeTransparencyConfigurationOutput;
}

export interface GetCodeTransparencyConfigDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetCodeTransparencyConfigDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetCodeTransparencyConfigDefaultHeaders;
}

/** The request has succeeded. */
export interface GetCodeTransparencyVersion200Response extends HttpResponse {
  status: "200";
  body: VersionResultOutput;
}

export interface GetCodeTransparencyVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetCodeTransparencyVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetCodeTransparencyVersionDefaultHeaders;
}
