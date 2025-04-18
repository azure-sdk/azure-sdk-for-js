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

/** Playwright workspace is the parent resource for most of the other service resources. */
export interface WorkspaceOutput {
  /** The workspace id. */
  readonly id: string;
  /** Fully-qualified Azure resource id for the workspace. */
  readonly resourceId: string;
  /** The workspace name. */
  readonly name: string;
  /**
   * The state of workspace - Active | Inactive
   *
   * Possible values: "Active", "Inactive"
   */
  readonly state: ResourceStateOutput;
  /** Azure subscription id for the workspace. */
  readonly subscriptionId: string;
  /**
   * Azure subscription state - Registered | Unregistered | Warned | Suspended | Deleted
   *
   * Possible values: "Registered", "Warned", "Suspended", "Deleted", "Unregistered"
   */
  readonly subscriptionState: SubscriptionStateOutput;
  /** Azure tenant id for the workspace. */
  readonly tenantId: string;
  /** Azure location of the workspace, for eg. eastus, southeastasia. */
  readonly location: string;
  /**
   * This property sets the connection region for client workers to cloud-hosted browsers. If enabled, workers connect to browsers in the closest Azure region, ensuring lower latency. If disabled, workers connect to browsers in the Azure region in which the workspace was initially created.
   *
   * Possible values: "Enabled", "Disabled"
   */
  readonly regionalAffinity?: EnablementStatusOutput;
  /**
   * When enabled, this feature allows the workspace to use local auth (through service access token) for executing operations.
   *
   * Possible values: "Enabled", "Disabled"
   */
  readonly localAuth?: EnablementStatusOutput;
}

/** Alias for AccessTokenStateOutput */
export type AccessTokenStateOutput = string;
/** Alias for ResourceStateOutput */
export type ResourceStateOutput = string;
/** Alias for SubscriptionStateOutput */
export type SubscriptionStateOutput = string;
/** Alias for EnablementStatusOutput */
export type EnablementStatusOutput = string;
