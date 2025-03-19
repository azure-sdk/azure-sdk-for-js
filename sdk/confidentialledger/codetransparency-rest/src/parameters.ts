// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RequestParameters } from "@azure-rest/core-client";

export interface CreateEntryBodyParam {
  /**
   * A raw CoseSign1 signature
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface CreateEntryMediaTypesParam {
  /** The MIME content type a Cose body is application/cose, containing a CoseSign1 signature. */
  contentType: "application/cose";
}

export type CreateEntryParameters = CreateEntryMediaTypesParam &
  CreateEntryBodyParam &
  RequestParameters;
export type GetEntryStatusParameters = RequestParameters;
export type ListEntryStatusesParameters = RequestParameters;

export interface GetEntryQueryParamProperties {
  /** Embed a receipt as part of the response */
  embedReceipt?: boolean;
}

export interface GetEntryQueryParam {
  queryParameters?: GetEntryQueryParamProperties;
}

export type GetEntryParameters = GetEntryQueryParam & RequestParameters;
export type GetEntryReceiptParameters = RequestParameters;

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
export type GetParametersParameters = RequestParameters;
export type GetDidConfigParameters = RequestParameters;
export type GetCodeTransparencyConfigParameters = RequestParameters;
export type GetCodeTransparencyVersionParameters = RequestParameters;
