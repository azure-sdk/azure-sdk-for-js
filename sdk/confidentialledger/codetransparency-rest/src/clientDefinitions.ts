// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CreateEntryParameters,
  GetEntryStatusParameters,
  ListEntryStatusesParameters,
  GetEntryParameters,
  GetEntryReceiptParameters,
  ListEntryIdsParameters,
  GetParametersParameters,
  GetDidConfigParameters,
  GetCodeTransparencyConfigParameters,
  GetCodeTransparencyVersionParameters,
} from "./parameters.js";
import {
  CreateEntry200Response,
  CreateEntryDefaultResponse,
  GetEntryStatus200Response,
  GetEntryStatusDefaultResponse,
  ListEntryStatuses200Response,
  ListEntryStatusesDefaultResponse,
  GetEntry200Response,
  GetEntryDefaultResponse,
  GetEntryReceipt200Response,
  GetEntryReceiptDefaultResponse,
  ListEntryIds200Response,
  ListEntryIds503Response,
  ListEntryIdsDefaultResponse,
  GetParameters200Response,
  GetParametersDefaultResponse,
  GetDidConfig200Response,
  GetDidConfigDefaultResponse,
  GetCodeTransparencyConfig200Response,
  GetCodeTransparencyConfigDefaultResponse,
  GetCodeTransparencyVersion200Response,
  GetCodeTransparencyVersionDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CreateEntry {
  /** Post an entry to be registered on the CodeTransparency instance. */
  post(
    options: CreateEntryParameters,
  ): StreamableMethod<CreateEntry200Response | CreateEntryDefaultResponse>;
}

export interface GetEntryStatus {
  /** Get the status the entry operation */
  get(
    options?: GetEntryStatusParameters,
  ): StreamableMethod<
    GetEntryStatus200Response | GetEntryStatusDefaultResponse
  >;
}

export interface ListEntryStatuses {
  /** Get the status of all entries operations */
  get(
    options?: ListEntryStatusesParameters,
  ): StreamableMethod<
    ListEntryStatuses200Response | ListEntryStatusesDefaultResponse
  >;
}

export interface GetEntry {
  /** Get Entry with or without receipt embedded in its unprotected header */
  get(
    options?: GetEntryParameters,
  ): StreamableMethod<GetEntry200Response | GetEntryDefaultResponse>;
}

export interface GetEntryReceipt {
  /** Get the receipt of an entry given a specific entry id. */
  get(
    options?: GetEntryReceiptParameters,
  ): StreamableMethod<
    GetEntryReceipt200Response | GetEntryReceiptDefaultResponse
  >;
}

export interface ListEntryIds {
  /** Historical query to get a list of entries of a given range */
  get(
    options?: ListEntryIdsParameters,
  ): StreamableMethod<
    | ListEntryIds200Response
    | ListEntryIds503Response
    | ListEntryIdsDefaultResponse
  >;
}

export interface GetParameters {
  /** Get service parameters */
  get(
    options?: GetParametersParameters,
  ): StreamableMethod<GetParameters200Response | GetParametersDefaultResponse>;
}

export interface GetDidConfig {
  /** Get the DID configuration file. */
  get(
    options?: GetDidConfigParameters,
  ): StreamableMethod<GetDidConfig200Response | GetDidConfigDefaultResponse>;
}

export interface GetCodeTransparencyConfig {
  /** Get CodeTransparency configuration information. */
  get(
    options?: GetCodeTransparencyConfigParameters,
  ): StreamableMethod<
    | GetCodeTransparencyConfig200Response
    | GetCodeTransparencyConfigDefaultResponse
  >;
}

export interface GetCodeTransparencyVersion {
  /** Get CodeTransparency version information. */
  get(
    options?: GetCodeTransparencyVersionParameters,
  ): StreamableMethod<
    | GetCodeTransparencyVersion200Response
    | GetCodeTransparencyVersionDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/entries' has methods for the following verbs: post */
  (path: "/entries"): CreateEntry;
  /** Resource for '/operations/\{operationId\}' has methods for the following verbs: get */
  (path: "/operations/{operationId}", operationId: string): GetEntryStatus;
  /** Resource for '/operations' has methods for the following verbs: get */
  (path: "/operations"): ListEntryStatuses;
  /** Resource for '/entries/\{entryId\}' has methods for the following verbs: get */
  (path: "/entries/{entryId}", entryId: string): GetEntry;
  /** Resource for '/entries/\{entryId\}/receipt' has methods for the following verbs: get */
  (path: "/entries/{entryId}/receipt", entryId: string): GetEntryReceipt;
  /** Resource for '/entries/txIds' has methods for the following verbs: get */
  (path: "/entries/txIds"): ListEntryIds;
  /** Resource for '/parameters' has methods for the following verbs: get */
  (path: "/parameters"): GetParameters;
  /** Resource for '/.well-known/did.json' has methods for the following verbs: get */
  (path: "/.well-known/did.json"): GetDidConfig;
  /** Resource for '/configuration' has methods for the following verbs: get */
  (path: "/configuration"): GetCodeTransparencyConfig;
  /** Resource for '/version' has methods for the following verbs: get */
  (path: "/version"): GetCodeTransparencyVersion;
}

export type CodeTransparencyClient = Client & {
  path: Routes;
};
