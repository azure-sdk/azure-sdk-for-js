// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AccessTokensCreateOrReplaceParameters,
  AccessTokensGetParameters,
  AccessTokensDeleteParameters,
  AccessTokensListParameters,
  AccountsGetParameters,
  AccountsGetBrowsersParameters,
} from "./parameters.js";
import {
  AccessTokensCreateOrReplace200Response,
  AccessTokensCreateOrReplace201Response,
  AccessTokensCreateOrReplaceDefaultResponse,
  AccessTokensGet200Response,
  AccessTokensGetDefaultResponse,
  AccessTokensDelete204Response,
  AccessTokensDeleteDefaultResponse,
  AccessTokensList200Response,
  AccessTokensListDefaultResponse,
  AccountsGet200Response,
  AccountsGetDefaultResponse,
  AccountsGetBrowsers302Response,
  AccountsGetBrowsersDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface AccessTokensCreateOrReplace {
  /** Creates an access-token for the account with given access-token id. Authorization required is Bearer JWT Access token provided by EntraID. */
  put(
    options: AccessTokensCreateOrReplaceParameters,
  ): StreamableMethod<
    | AccessTokensCreateOrReplace200Response
    | AccessTokensCreateOrReplace201Response
    | AccessTokensCreateOrReplaceDefaultResponse
  >;
  /** Gets an access-token for the account with given access-token id. Authorization required is Bearer JWT Access token provided by EntraID. */
  get(
    options?: AccessTokensGetParameters,
  ): StreamableMethod<AccessTokensGet200Response | AccessTokensGetDefaultResponse>;
  /** Deletes an access-token for the account with given access-token id. Authorization required is Bearer JWT Access token provided by EntraID. */
  delete(
    options?: AccessTokensDeleteParameters,
  ): StreamableMethod<AccessTokensDelete204Response | AccessTokensDeleteDefaultResponse>;
}

export interface AccessTokensList {
  /** Lists access-tokens for the given account id. It can use OData query params like $select, $filter, $orderby, $top and $skip. The default page size is 10. Use nextLink in response to fetch more objects in the list. Authorization required is Bearer JWT Access token provided by EntraID. */
  get(
    options?: AccessTokensListParameters,
  ): StreamableMethod<AccessTokensList200Response | AccessTokensListDefaultResponse>;
}

export interface AccountsGet {
  /** Get details of the Azure resource mapped to an account for the given account id. Authorization required is Bearer JWT Access token provided by EntraID. */
  get(
    options?: AccountsGetParameters,
  ): StreamableMethod<AccountsGet200Response | AccountsGetDefaultResponse>;
}

export interface AccountsGetBrowsers {
  /** Gets remote browsers corresponding to given account id and redirects the client for running Playwright tests. Authorization required is Bearer JWT Access token provided by EntraID or Microsoft Playwright Testing Service. */
  get(
    options?: AccountsGetBrowsersParameters,
  ): StreamableMethod<AccountsGetBrowsers302Response | AccountsGetBrowsersDefaultResponse>;
}

export interface Routes {
  /** Resource for '/accounts/\{accountId\}/access-tokens/\{accessTokenId\}' has methods for the following verbs: put, get, delete */
  (
    path: "/accounts/{accountId}/access-tokens/{accessTokenId}",
    accountId: string,
    accessTokenId: string,
  ): AccessTokensCreateOrReplace;
  /** Resource for '/accounts/\{accountId\}/access-tokens' has methods for the following verbs: get */
  (path: "/accounts/{accountId}/access-tokens", accountId: string): AccessTokensList;
  /** Resource for '/accounts/\{accountId\}' has methods for the following verbs: get */
  (path: "/accounts/{accountId}", accountId: string): AccountsGet;
  /** Resource for '/accounts/\{accountId\}/browsers' has methods for the following verbs: get */
  (path: "/accounts/{accountId}/browsers", accountId: string): AccountsGetBrowsers;
}

export type MicrosoftPlaywrightTestingClient = Client & {
  path: Routes;
};
