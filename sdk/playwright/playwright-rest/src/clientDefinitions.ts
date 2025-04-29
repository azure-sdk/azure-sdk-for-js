// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  CreateOrReplaceParameters,
  GetParameters,
  DeleteParameters,
  ListParameters,
  GetBrowsersParameters,
} from "./parameters.js";
import type {
  CreateOrReplace200Response,
  CreateOrReplace201Response,
  CreateOrReplaceDefaultResponse,
  Get200Response,
  GetDefaultResponse,
  Delete204Response,
  DeleteDefaultResponse,
  List200Response,
  ListDefaultResponse,
  GetBrowsers302Response,
  GetBrowsersDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CreateOrReplace {
  /** Creates an access-token for the workspace with given access-token id. Authorization required is Bearer JWT Access token provided by EntraID. */
  put(
    options: CreateOrReplaceParameters,
  ): StreamableMethod<
    CreateOrReplace200Response | CreateOrReplace201Response | CreateOrReplaceDefaultResponse
  >;
  /** Gets an access-token for the workspace with given access-token id. Authorization required is Bearer JWT Access token provided by EntraID. */
  get(options?: GetParameters): StreamableMethod<Get200Response | GetDefaultResponse>;
  /** Deletes an access-token for the workspace with given access-token id. Authorization required is Bearer JWT Access token provided by EntraID. */
  delete(options?: DeleteParameters): StreamableMethod<Delete204Response | DeleteDefaultResponse>;
}

export interface List {
  /** Lists access-tokens for the given workspace id. It can use OData query params like $select, $filter, $orderby, $top and $skip. The default page size is 10. Use nextLink in response to fetch more objects in the list. Authorization required is Bearer JWT Access token provided by EntraID. */
  get(options?: ListParameters): StreamableMethod<List200Response | ListDefaultResponse>;
}

export interface GetBrowsers {
  /** Gets remote browsers corresponding to given workspace id and redirects the client for executing Playwright scripts. Authorization required is Bearer JWT Access token provided by EntraID or Playwright Service. */
  get(
    options?: GetBrowsersParameters,
  ): StreamableMethod<GetBrowsers302Response | GetBrowsersDefaultResponse>;
}

export interface Routes {
  /** Resource for '/playwrightworkspaces/\{workspaceId\}/access-tokens/\{accessTokenId\}' has methods for the following verbs: put, get, delete */
  (
    path: "/playwrightworkspaces/{workspaceId}/access-tokens/{accessTokenId}",
    workspaceId: string,
    accessTokenId: string,
  ): CreateOrReplace;
  /** Resource for '/playwrightworkspaces/\{workspaceId\}/access-tokens' has methods for the following verbs: get */
  (path: "/playwrightworkspaces/{workspaceId}/access-tokens", workspaceId: string): List;
  /** Resource for '/playwrightworkspaces/\{workspaceId\}/browsers' has methods for the following verbs: get */
  (path: "/playwrightworkspaces/{workspaceId}/browsers", workspaceId: string): GetBrowsers;
}

export type PlaywrightServiceClient = Client & {
  path: Routes;
};
