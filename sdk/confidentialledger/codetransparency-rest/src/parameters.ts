// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";

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

export interface CreateEntryChangedBodyParam {
  /**
   * CoseSign1 signature envelope
   *
   * Value may contain any sequence of octets
   */
  body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream;
}

export interface CreateEntryChangedMediaTypesParam {
  /** The MIME content type a Cose body is application/cose, containing a CoseSign1 signature, see IETF SCITT draft */
  contentType: "application/cose";
}

export type CreateEntryChangedParameters = CreateEntryChangedMediaTypesParam &
  CreateEntryChangedBodyParam &
  RequestParameters;

export interface GetEntryChangedQueryParamProperties {
  /** Embed a receipt as part of the response */
  embedReceipt?: boolean;
}

export interface GetEntryChangedQueryParam {
  queryParameters?: GetEntryChangedQueryParamProperties;
}

export type GetEntryChangedParameters = GetEntryChangedQueryParam & RequestParameters;
export type GetEntryReceiptChangedParameters = RequestParameters;
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
