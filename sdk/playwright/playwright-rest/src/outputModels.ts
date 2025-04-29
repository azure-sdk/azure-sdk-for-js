// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Model of an access-token linked to a workspace. */
export interface AccessTokenOutput {
  /** The access-token id. */
  readonly id: string;
  /** The access-token name. */
  name: string;
  /** The access-token value in JWT format. */
  readonly jwtToken?: string;
  /** The access-token createdAt utcDateTime. */
  readonly createdAt: string;
  /** The access-token expiryAt utcDateTime. */
  expiryAt: string;
  /**
   * The access-token state - Active | Expired.
   *
   * Possible values: "Active", "Expired"
   */
  readonly state: AccessTokenStateOutput;
}

/** Paged collection of AccessToken items */
export interface PagedAccessTokenOutput {
  /** The AccessToken items on this page */
  value: Array<AccessTokenOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Alias for AccessTokenStateOutput */
export type AccessTokenStateOutput = string;
