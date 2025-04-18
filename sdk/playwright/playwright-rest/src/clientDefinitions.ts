// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  AccessTokensCreateOrReplaceParameters,
  AccessTokensGetParameters,
  AccessTokensDeleteParameters,
  AccessTokensListParameters,
  WorkspacesGetParameters,
  WorkspacesGetBrowsersParameters,
} from "./parameters.js";
import type {
  AccessTokensCreateOrReplace200Response,
  AccessTokensCreateOrReplace201Response,
  AccessTokensCreateOrReplaceDefaultResponse,
  AccessTokensGet200Response,
  AccessTokensGetDefaultResponse,
  AccessTokensDelete204Response,
  AccessTokensDeleteDefaultResponse,
  AccessTokensList200Response,
  AccessTokensListDefaultResponse,
  WorkspacesGet200Response,
  WorkspacesGetDefaultResponse,
  WorkspacesGetBrowsers302Response,
  WorkspacesGetBrowsersDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface AccessTokensCreateOrReplace {
  /** Creates an access-token for the workspace with given access-token id. Authorization required is Bearer JWT Access token provided by EntraID. */
  put(
    options: AccessTokensCreateOrReplaceParameters,
  ): StreamableMethod<
    | AccessTokensCreateOrReplace200Response
    | AccessTokensCreateOrReplace201Response
    | AccessTokensCreateOrReplaceDefaultResponse
  >;
  /** Gets an access-token for the workspace with given access-token id. Authorization required is Bearer JWT Access token provided by EntraID. */
  get(
    options?: AccessTokensGetParameters,
  ): StreamableMethod<AccessTokensGet200Response | AccessTokensGetDefaultResponse>;
  /** Deletes an access-token for the workspace with given access-token id. Authorization required is Bearer JWT Access token provided by EntraID. */
  delete(
    options?: AccessTokensDeleteParameters,
  ): StreamableMethod<AccessTokensDelete204Response | AccessTokensDeleteDefaultResponse>;
}

export interface AccessTokensList {
  /** Lists access-tokens for the given workspace id. It can use OData query params like $select, $filter, $orderby, $top and $skip. The default page size is 10. Use nextLink in response to fetch more objects in the list. Authorization required is Bearer JWT Access token provided by EntraID. */
  get(
    options?: AccessTokensListParameters,
  ): StreamableMethod<AccessTokensList200Response | AccessTokensListDefaultResponse>;
}

export interface WorkspacesGet {
  /** Get details of the Azure resource mapped to a workspace for the given workspace id. Authorization required is Bearer JWT Access token provided by EntraID. */
  get(
    options?: WorkspacesGetParameters,
  ): StreamableMethod<WorkspacesGet200Response | WorkspacesGetDefaultResponse>;
}

export interface WorkspacesGetBrowsers {
  /** Gets remote browsers corresponding to given workspace id and redirects the client for executing Playwright scripts. Authorization required is Bearer JWT Access token provided by EntraID or Playwright Service. */
  get(
    options?: WorkspacesGetBrowsersParameters,
  ): StreamableMethod<WorkspacesGetBrowsers302Response | WorkspacesGetBrowsersDefaultResponse>;
}

export interface Routes {
  /** Resource for '/playwrightworkspaces/\{workspaceId\}/access-tokens/\{accessTokenId\}' has methods for the following verbs: put, get, delete */
  (
    path: "/playwrightworkspaces/{workspaceId}/access-tokens/{accessTokenId}",
    workspaceId: string,
    accessTokenId: string,
  ): AccessTokensCreateOrReplace;
  /** Resource for '/playwrightworkspaces/\{workspaceId\}/access-tokens' has methods for the following verbs: get */
  (
    path: "/playwrightworkspaces/{workspaceId}/access-tokens",
    workspaceId: string,
  ): AccessTokensList;
  /** Resource for '/playwrightworkspaces/\{workspaceId\}' has methods for the following verbs: get */
  (path: "/playwrightworkspaces/{workspaceId}", workspaceId: string): WorkspacesGet;
  /** Resource for '/playwrightworkspaces/\{workspaceId\}/browsers' has methods for the following verbs: get */
  (
    path: "/playwrightworkspaces/{workspaceId}/browsers",
    workspaceId: string,
  ): WorkspacesGetBrowsers;
}

export type PlaywrightServiceClient = Client & {
  path: Routes;
};
