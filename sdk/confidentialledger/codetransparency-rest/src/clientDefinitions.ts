// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  GetTransparencyConfigCborParameters,
  GetTransparencyConfigJsonParameters,
  GetPublicKeysParameters,
  GetCodeTransparencyConfigParameters,
  GetCodeTransparencyVersionParameters,
  CreateEntryChangedParameters,
  GetEntryChangedParameters,
  GetEntryReceiptChangedParameters,
  GetEntryStatementParameters,
  ListEntryIdsParameters,
} from "./parameters.js";
import type {
  GetTransparencyConfigCbor200Response,
  GetTransparencyConfigCbor500Response,
  GetTransparencyConfigCbor503Response,
  GetTransparencyConfigJson200Response,
  GetTransparencyConfigJson500Response,
  GetTransparencyConfigJson503Response,
  GetPublicKeys200Response,
  GetPublicKeys500Response,
  GetPublicKeys503Response,
  GetCodeTransparencyConfig200Response,
  GetCodeTransparencyConfig500Response,
  GetCodeTransparencyConfig503Response,
  GetCodeTransparencyVersion200Response,
  GetCodeTransparencyVersion500Response,
  GetCodeTransparencyVersion503Response,
  CreateEntryChanged201Response,
  CreateEntryChanged202Response,
  CreateEntryChanged400Response,
  CreateEntryChanged404Response,
  CreateEntryChanged500Response,
  CreateEntryChanged503Response,
  GetEntryChanged200Response,
  GetEntryChanged400Response,
  GetEntryChanged404Response,
  GetEntryChanged500Response,
  GetEntryChanged503Response,
  GetEntryReceiptChanged200Response,
  GetEntryReceiptChanged400Response,
  GetEntryReceiptChanged404Response,
  GetEntryReceiptChanged500Response,
  GetEntryReceiptChanged503Response,
  GetEntryStatement200Response,
  GetEntryStatement400Response,
  GetEntryStatement404Response,
  GetEntryStatement500Response,
  GetEntryStatement503Response,
  ListEntryIds200Response,
  ListEntryIds500Response,
  ListEntryIds503Response,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetTransparencyConfigCbor {
  /** Get the transparency configuration file, see IETF SCITT draft */
  get(
    options: GetTransparencyConfigCborParameters,
  ): StreamableMethod<
    | GetTransparencyConfigCbor200Response
    | GetTransparencyConfigCbor500Response
    | GetTransparencyConfigCbor503Response
  >;
  /** Get the transparency configuration file, see IETF SCITT draft */
  get(
    options: GetTransparencyConfigJsonParameters,
  ): StreamableMethod<
    | GetTransparencyConfigJson200Response
    | GetTransparencyConfigJson500Response
    | GetTransparencyConfigJson503Response
  >;
}

export interface GetPublicKeys {
  /** Get the public keys used by the service to sign receipts */
  get(
    options?: GetPublicKeysParameters,
  ): StreamableMethod<
    GetPublicKeys200Response | GetPublicKeys500Response | GetPublicKeys503Response
  >;
}

export interface GetCodeTransparencyConfig {
  /** Get CodeTransparency configuration information. */
  get(
    options?: GetCodeTransparencyConfigParameters,
  ): StreamableMethod<
    | GetCodeTransparencyConfig200Response
    | GetCodeTransparencyConfig500Response
    | GetCodeTransparencyConfig503Response
  >;
}

export interface GetCodeTransparencyVersion {
  /** Get CodeTransparency version information. */
  get(
    options?: GetCodeTransparencyVersionParameters,
  ): StreamableMethod<
    | GetCodeTransparencyVersion200Response
    | GetCodeTransparencyVersion500Response
    | GetCodeTransparencyVersion503Response
  >;
}

export interface CreateEntryChanged {
  /** Post an entry to be registered on the CodeTransparency instance, see IETF SCITT draft */
  post(
    options: CreateEntryChangedParameters,
  ): StreamableMethod<
    | CreateEntryChanged201Response
    | CreateEntryChanged202Response
    | CreateEntryChanged400Response
    | CreateEntryChanged404Response
    | CreateEntryChanged500Response
    | CreateEntryChanged503Response
  >;
}

export interface GetEntryChanged {
  /** Get signed statement with or without receipt embedded in its unprotected header */
  get(
    options?: GetEntryChangedParameters,
  ): StreamableMethod<
    | GetEntryChanged200Response
    | GetEntryChanged400Response
    | GetEntryChanged404Response
    | GetEntryChanged500Response
    | GetEntryChanged503Response
  >;
}

export interface GetEntryReceiptChanged {
  /** Get the receipt of an entry given a specific entry id. */
  get(
    options?: GetEntryReceiptChangedParameters,
  ): StreamableMethod<
    | GetEntryReceiptChanged200Response
    | GetEntryReceiptChanged400Response
    | GetEntryReceiptChanged404Response
    | GetEntryReceiptChanged500Response
    | GetEntryReceiptChanged503Response
  >;
}

export interface GetEntryStatement {
  /** Get the receipt of an entry given a specific entry id. */
  get(
    options?: GetEntryStatementParameters,
  ): StreamableMethod<
    | GetEntryStatement200Response
    | GetEntryStatement400Response
    | GetEntryStatement404Response
    | GetEntryStatement500Response
    | GetEntryStatement503Response
  >;
}

export interface ListEntryIds {
  /** Historical query to get a list of entries of a given range */
  get(
    options?: ListEntryIdsParameters,
  ): StreamableMethod<ListEntryIds200Response | ListEntryIds500Response | ListEntryIds503Response>;
}

export interface Routes {
  /** Resource for '/.well-known/transparency-configuration' has methods for the following verbs: get */
  (path: "/.well-known/transparency-configuration"): GetTransparencyConfigCbor;
  /** Resource for '/jwks' has methods for the following verbs: get */
  (path: "/jwks"): GetPublicKeys;
  /** Resource for '/configuration' has methods for the following verbs: get */
  (path: "/configuration"): GetCodeTransparencyConfig;
  /** Resource for '/version' has methods for the following verbs: get */
  (path: "/version"): GetCodeTransparencyVersion;
  /** Resource for '/entries' has methods for the following verbs: post */
  (path: "/entries"): CreateEntryChanged;
  /** Resource for '/entries/\{entryId\}' has methods for the following verbs: get */
  (path: "/entries/{entryId}", entryId: string): GetEntryChanged;
  /** Resource for '/entries/\{entryId\}/receipt' has methods for the following verbs: get */
  (path: "/entries/{entryId}/receipt", entryId: string): GetEntryReceiptChanged;
  /** Resource for '/entries/\{entryId\}/statement' has methods for the following verbs: get */
  (path: "/entries/{entryId}/statement", entryId: string): GetEntryStatement;
  /** Resource for '/entries/txIds' has methods for the following verbs: get */
  (path: "/entries/txIds"): ListEntryIds;
}

export type CodeTransparencyClient = Client & {
  path: Routes;
};
