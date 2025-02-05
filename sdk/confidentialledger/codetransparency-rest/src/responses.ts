// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type {
  TransparencyConfigurationJsonOutput,
  JwksDocumentOutput,
  CodeTransparencyConfigurationOutput,
  VersionResultOutput,
  EntryIdsOutput,
} from "./outputModels.js";

export interface GetTransparencyConfigCbor200Headers {
  /** Default content type is application/cbor. */
  "content-type": "application/cbor";
}

/** Transparency configuration, see IETF SCITT draft. */
export interface GetTransparencyConfigCbor200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetTransparencyConfigCbor200Headers;
}

export interface GetTransparencyConfigCbor500Headers {
  /** The MIME content type for error is application/concise-problem-details+cbor, see RFC9290 */
  "content-type": "application/concise-problem-details+cbor";
}

/** Server error response */
export interface GetTransparencyConfigCbor500Response extends HttpResponse {
  status: "500";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetTransparencyConfigCbor500Headers;
}

export interface GetTransparencyConfigCbor503Headers {
  /** Retry the same request after a suggested number of seconds */
  "retry-after"?: string;
  /** The MIME content type for error, see RFC9290 */
  "content-type": "application/concise-problem-details+cbor";
}

/** Service unavailable error response */
export interface GetTransparencyConfigCbor503Response extends HttpResponse {
  status: "503";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetTransparencyConfigCbor503Headers;
}

export interface GetTransparencyConfigJson200Headers {
  /** Content type header */
  "content-type": "application/json";
}

/** The request has succeeded. */
export interface GetTransparencyConfigJson200Response extends HttpResponse {
  status: "200";
  body: TransparencyConfigurationJsonOutput;
  headers: RawHttpHeaders & GetTransparencyConfigJson200Headers;
}

export interface GetTransparencyConfigJson500Headers {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
  /** Content type header application/json */
  "content-type": "application/json";
}

/** Server error response */
export interface GetTransparencyConfigJson500Response extends HttpResponse {
  status: "500";
  body: ErrorResponse;
  headers: RawHttpHeaders & GetTransparencyConfigJson500Headers;
}

export interface GetTransparencyConfigJson503Headers {
  /** Retry the same request after a suggested number of seconds */
  "retry-after"?: string;
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
  /** Content type header application/json */
  "content-type": "application/json";
}

/** Service temporarily unavailable */
export interface GetTransparencyConfigJson503Response extends HttpResponse {
  status: "503";
  body: ErrorResponse;
  headers: RawHttpHeaders & GetTransparencyConfigJson503Headers;
}

/** The request has succeeded. */
export interface GetPublicKeys200Response extends HttpResponse {
  status: "200";
  body: JwksDocumentOutput;
}

export interface GetPublicKeys500Headers {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
  /** Content type header application/json */
  "content-type": "application/json";
}

/** Server error response */
export interface GetPublicKeys500Response extends HttpResponse {
  status: "500";
  body: ErrorResponse;
  headers: RawHttpHeaders & GetPublicKeys500Headers;
}

export interface GetPublicKeys503Headers {
  /** Retry the same request after a suggested number of seconds */
  "retry-after"?: string;
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
  /** Content type header application/json */
  "content-type": "application/json";
}

/** Service temporarily unavailable */
export interface GetPublicKeys503Response extends HttpResponse {
  status: "503";
  body: ErrorResponse;
  headers: RawHttpHeaders & GetPublicKeys503Headers;
}

/** The request has succeeded. */
export interface GetCodeTransparencyConfig200Response extends HttpResponse {
  status: "200";
  body: CodeTransparencyConfigurationOutput;
}

export interface GetCodeTransparencyConfig500Headers {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
  /** Content type header application/json */
  "content-type": "application/json";
}

/** Server error response */
export interface GetCodeTransparencyConfig500Response extends HttpResponse {
  status: "500";
  body: ErrorResponse;
  headers: RawHttpHeaders & GetCodeTransparencyConfig500Headers;
}

export interface GetCodeTransparencyConfig503Headers {
  /** Retry the same request after a suggested number of seconds */
  "retry-after"?: string;
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
  /** Content type header application/json */
  "content-type": "application/json";
}

/** Service temporarily unavailable */
export interface GetCodeTransparencyConfig503Response extends HttpResponse {
  status: "503";
  body: ErrorResponse;
  headers: RawHttpHeaders & GetCodeTransparencyConfig503Headers;
}

/** The request has succeeded. */
export interface GetCodeTransparencyVersion200Response extends HttpResponse {
  status: "200";
  body: VersionResultOutput;
}

export interface GetCodeTransparencyVersion500Headers {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
  /** Content type header application/json */
  "content-type": "application/json";
}

/** Server error response */
export interface GetCodeTransparencyVersion500Response extends HttpResponse {
  status: "500";
  body: ErrorResponse;
  headers: RawHttpHeaders & GetCodeTransparencyVersion500Headers;
}

export interface GetCodeTransparencyVersion503Headers {
  /** Retry the same request after a suggested number of seconds */
  "retry-after"?: string;
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
  /** Content type header application/json */
  "content-type": "application/json";
}

/** Service temporarily unavailable */
export interface GetCodeTransparencyVersion503Response extends HttpResponse {
  status: "503";
  body: ErrorResponse;
  headers: RawHttpHeaders & GetCodeTransparencyVersion503Headers;
}

export interface CreateEntryChanged201Headers {
  /** Location of the transparent statement */
  location: string;
  /** The MIME content type a Cose body is application/cose, containing a CoseSign1 signature. */
  "content-type": "application/cose";
}

/** Response of entry submission if the response can be served immediately, see IETF SCITT draft */
export interface CreateEntryChanged201Response extends HttpResponse {
  status: "201";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & CreateEntryChanged201Headers;
}

export interface CreateEntryChanged202Headers {
  /** Location of the transparent statement */
  location: string;
  /** Response content is CBOR */
  "content-type": "application/cbor";
}

/** Response of entry submission containing the transparent statement id, see IETF SCITT draft */
export interface CreateEntryChanged202Response extends HttpResponse {
  status: "202";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & CreateEntryChanged202Headers;
}

export interface CreateEntryChanged400Headers {
  /** The MIME content type for error is application/concise-problem-details+cbor, see RFC9290 */
  "content-type": "application/concise-problem-details+cbor";
}

/** Validation error response */
export interface CreateEntryChanged400Response extends HttpResponse {
  status: "400";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & CreateEntryChanged400Headers;
}

export interface CreateEntryChanged404Headers {
  /** The MIME content type for error is application/concise-problem-details+cbor, see RFC9290 */
  "content-type": "application/concise-problem-details+cbor";
}

/** Not found error response */
export interface CreateEntryChanged404Response extends HttpResponse {
  status: "404";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & CreateEntryChanged404Headers;
}

export interface CreateEntryChanged500Headers {
  /** The MIME content type for error is application/concise-problem-details+cbor, see RFC9290 */
  "content-type": "application/concise-problem-details+cbor";
}

/** Server error response */
export interface CreateEntryChanged500Response extends HttpResponse {
  status: "500";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & CreateEntryChanged500Headers;
}

export interface CreateEntryChanged503Headers {
  /** Retry the same request after a suggested number of seconds */
  "retry-after"?: string;
  /** The MIME content type for error, see RFC9290 */
  "content-type": "application/concise-problem-details+cbor";
}

/** Service unavailable error response */
export interface CreateEntryChanged503Response extends HttpResponse {
  status: "503";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & CreateEntryChanged503Headers;
}

export interface GetEntryChanged200Headers {
  /** The MIME content type a Cose body is application/cose, containing a CoseSign1 signature, see IETF SCITT draft */
  "content-type": "application/cose";
}

/** Signed statement */
export interface GetEntryChanged200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetEntryChanged200Headers;
}

export interface GetEntryChanged400Headers {
  /** The MIME content type for error is application/concise-problem-details+cbor, see RFC9290 */
  "content-type": "application/concise-problem-details+cbor";
}

/** Validation error response */
export interface GetEntryChanged400Response extends HttpResponse {
  status: "400";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetEntryChanged400Headers;
}

export interface GetEntryChanged404Headers {
  /** The MIME content type for error is application/concise-problem-details+cbor, see RFC9290 */
  "content-type": "application/concise-problem-details+cbor";
}

/** Not found error response */
export interface GetEntryChanged404Response extends HttpResponse {
  status: "404";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetEntryChanged404Headers;
}

export interface GetEntryChanged500Headers {
  /** The MIME content type for error is application/concise-problem-details+cbor, see RFC9290 */
  "content-type": "application/concise-problem-details+cbor";
}

/** Server error response */
export interface GetEntryChanged500Response extends HttpResponse {
  status: "500";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetEntryChanged500Headers;
}

export interface GetEntryChanged503Headers {
  /** Retry the same request after a suggested number of seconds */
  "retry-after"?: string;
  /** The MIME content type for error, see RFC9290 */
  "content-type": "application/concise-problem-details+cbor";
}

/** Service unavailable error response */
export interface GetEntryChanged503Response extends HttpResponse {
  status: "503";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetEntryChanged503Headers;
}

export interface GetEntryReceiptChanged200Headers {
  /** The MIME content type for receipt is application/cose. */
  "content-type": "application/cose";
}

/** A ledger receipt, see IETF SCITT draft */
export interface GetEntryReceiptChanged200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetEntryReceiptChanged200Headers;
}

export interface GetEntryReceiptChanged400Headers {
  /** The MIME content type for error is application/concise-problem-details+cbor, see RFC9290 */
  "content-type": "application/concise-problem-details+cbor";
}

/** Validation error response */
export interface GetEntryReceiptChanged400Response extends HttpResponse {
  status: "400";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetEntryReceiptChanged400Headers;
}

export interface GetEntryReceiptChanged404Headers {
  /** The MIME content type for error is application/concise-problem-details+cbor, see RFC9290 */
  "content-type": "application/concise-problem-details+cbor";
}

/** Not found error response */
export interface GetEntryReceiptChanged404Response extends HttpResponse {
  status: "404";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetEntryReceiptChanged404Headers;
}

export interface GetEntryReceiptChanged500Headers {
  /** The MIME content type for error is application/concise-problem-details+cbor, see RFC9290 */
  "content-type": "application/concise-problem-details+cbor";
}

/** Server error response */
export interface GetEntryReceiptChanged500Response extends HttpResponse {
  status: "500";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetEntryReceiptChanged500Headers;
}

export interface GetEntryReceiptChanged503Headers {
  /** Retry the same request after a suggested number of seconds */
  "retry-after"?: string;
  /** The MIME content type for error, see RFC9290 */
  "content-type": "application/concise-problem-details+cbor";
}

/** Service unavailable error response */
export interface GetEntryReceiptChanged503Response extends HttpResponse {
  status: "503";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetEntryReceiptChanged503Headers;
}

export interface GetEntryStatement200Headers {
  /** The MIME content type a Cose body is application/cose, containing a CoseSign1 signature, see IETF SCITT draft */
  "content-type": "application/cose";
}

/** Transparent statement */
export interface GetEntryStatement200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetEntryStatement200Headers;
}

export interface GetEntryStatement400Headers {
  /** The MIME content type for error is application/concise-problem-details+cbor, see RFC9290 */
  "content-type": "application/concise-problem-details+cbor";
}

/** Validation error response */
export interface GetEntryStatement400Response extends HttpResponse {
  status: "400";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetEntryStatement400Headers;
}

export interface GetEntryStatement404Headers {
  /** The MIME content type for error is application/concise-problem-details+cbor, see RFC9290 */
  "content-type": "application/concise-problem-details+cbor";
}

/** Not found error response */
export interface GetEntryStatement404Response extends HttpResponse {
  status: "404";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetEntryStatement404Headers;
}

export interface GetEntryStatement500Headers {
  /** The MIME content type for error is application/concise-problem-details+cbor, see RFC9290 */
  "content-type": "application/concise-problem-details+cbor";
}

/** Server error response */
export interface GetEntryStatement500Response extends HttpResponse {
  status: "500";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetEntryStatement500Headers;
}

export interface GetEntryStatement503Headers {
  /** Retry the same request after a suggested number of seconds */
  "retry-after"?: string;
  /** The MIME content type for error, see RFC9290 */
  "content-type": "application/concise-problem-details+cbor";
}

/** Service unavailable error response */
export interface GetEntryStatement503Response extends HttpResponse {
  status: "503";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & GetEntryStatement503Headers;
}

/** The request has succeeded. */
export interface ListEntryIds200Response extends HttpResponse {
  status: "200";
  body: EntryIdsOutput;
}

export interface ListEntryIds500Headers {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
  /** Content type header application/json */
  "content-type": "application/json";
}

/** Server error response */
export interface ListEntryIds500Response extends HttpResponse {
  status: "500";
  body: ErrorResponse;
  headers: RawHttpHeaders & ListEntryIds500Headers;
}

export interface ListEntryIds503Headers {
  /** Retry the same request after a suggested number of seconds */
  "retry-after"?: string;
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
  /** Content type header application/json */
  "content-type": "application/json";
}

/** Service temporarily unavailable */
export interface ListEntryIds503Response extends HttpResponse {
  status: "503";
  body: ErrorResponse;
  headers: RawHttpHeaders & ListEntryIds503Headers;
}
