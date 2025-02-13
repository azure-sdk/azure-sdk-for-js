// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";

export interface GetTransparencyConfigCborHeaders {
  /** Accept header */
  accept: "application/cbor";
}

export interface GetTransparencyConfigCborHeaderParam {
  headers: RawHttpHeadersInput & GetTransparencyConfigCborHeaders;
}

export type GetTransparencyConfigCborParameters = GetTransparencyConfigCborHeaderParam &
  RequestParameters;

export interface GetTransparencyConfigJsonHeaders {
  /** Accept header */
  accept: "application/json";
}

export interface GetTransparencyConfigJsonHeaderParam {
  headers: RawHttpHeadersInput & GetTransparencyConfigJsonHeaders;
}

export type GetTransparencyConfigJsonParameters = GetTransparencyConfigJsonHeaderParam &
  RequestParameters;
export type GetPublicKeysParameters = RequestParameters;
export type GetCodeTransparencyConfigParameters = RequestParameters;
export type GetCodeTransparencyVersionParameters = RequestParameters;

export interface CreateEntryBodyParam {
  /**
   * CoseSign1 signature envelope
   *
   * Value may contain any sequence of octets
   */
  body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream;
}

export interface CreateEntryMediaTypesParam {
  /** The MIME content type a Cose body is application/cose, containing a CoseSign1 signature, see IETF SCITT draft */
  contentType: "application/cose";
}

export type CreateEntryParameters = CreateEntryMediaTypesParam &
  CreateEntryBodyParam &
  RequestParameters;

export interface GetEntryHeaders {
  /** Accept header */
  accept: "application/cose";
}

export interface GetEntryQueryParamProperties {
  /** Embed a receipt as part of the response */
  embedReceipt?: boolean;
}

export interface GetEntryQueryParam {
  queryParameters?: GetEntryQueryParamProperties;
}

export interface GetEntryHeaderParam {
  headers: RawHttpHeadersInput & GetEntryHeaders;
}

export type GetEntryParameters = GetEntryQueryParam & GetEntryHeaderParam & RequestParameters;
export type GetEntryReceiptParameters = RequestParameters;
export type GetEntryStatementParameters = RequestParameters;

export interface ListEntryIdsQueryParamProperties {
  /** Starting Transaction Id */
  from?: number;
  /** Ending Transaction Id */
  to?: number;
}

export interface ListEntryIdsQueryParam {
  queryParameters?: ListEntryIdsQueryParamProperties;
}

export type ListEntryIdsParameters = ListEntryIdsQueryParam & RequestParameters;
