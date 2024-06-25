// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  OperationIdParameter,
  EmbedReceiptParameter,
  EntryIdParameter,
  TransactionsRange,
} from "./models.js";

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

export interface GetEntryStatusBodyParam {
  /** Body parameter. */
  body: OperationIdParameter;
}

export type GetEntryStatusParameters = GetEntryStatusBodyParam &
  RequestParameters;
export type ListEntryStatusesParameters = RequestParameters;

export interface GetEntryBodyParam {
  /** Body parameter. */
  body: EmbedReceiptParameter;
}

export interface GetEntryQueryParamProperties {
  /** Embed a receipt as part of the response */
  embedReceipt?: boolean;
}

export interface GetEntryQueryParam {
  queryParameters?: GetEntryQueryParamProperties;
}

export type GetEntryParameters = GetEntryQueryParam &
  GetEntryBodyParam &
  RequestParameters;

export interface GetEntryReceiptBodyParam {
  /** Body parameter. */
  body: EntryIdParameter;
}

export type GetEntryReceiptParameters = GetEntryReceiptBodyParam &
  RequestParameters;

export interface ListEntryIdsBodyParam {
  /** Body parameter. */
  body: TransactionsRange;
}

export interface ListEntryIdsQueryParamProperties {
  /** Starting Transaction Id */
  from?: number;
  /** Ending Transaction Id */
  to?: number;
}

export interface ListEntryIdsQueryParam {
  queryParameters?: ListEntryIdsQueryParamProperties;
}

export type ListEntryIdsParameters = ListEntryIdsQueryParam &
  ListEntryIdsBodyParam &
  RequestParameters;
export type GetParametersParameters = RequestParameters;
export type GetDidConfigParameters = RequestParameters;
export type GetCodeTransparencyConfigParameters = RequestParameters;
export type GetCodeTransparencyVersionParameters = RequestParameters;
