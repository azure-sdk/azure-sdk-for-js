// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { AstroClient } from "./astroClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  OrganizationResource,
  OrganizationProperties,
  MarketplaceDetails,
  KnownMarketplaceSubscriptionStatus,
  MarketplaceSubscriptionStatus,
  OfferDetails,
  KnownRenewalMode,
  RenewalMode,
  UserDetails,
  KnownResourceProvisioningState,
  ResourceProvisioningState,
  PartnerOrganizationProperties,
  SingleSignOnProperties,
  KnownSingleSignOnStates,
  SingleSignOnStates,
  ManagedServiceIdentityV4,
  KnownManagedServiceIdentityType,
  ManagedServiceIdentityType,
  UserAssignedIdentity,
  TrackedResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  OrganizationResourceUpdate,
  OrganizationResourceUpdateProperties,
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  KnownVersions,
} from "./models/index.js";
export {
  AstroClientOptionalParams,
  OrganizationsListBySubscriptionOptionalParams,
  OrganizationsListByResourceGroupOptionalParams,
  OrganizationsDeleteOptionalParams,
  OrganizationsUpdateOptionalParams,
  OrganizationsCreateOrUpdateOptionalParams,
  OrganizationsGetOptionalParams,
  OperationsListOptionalParams,
} from "./api/index.js";
export { OperationsOperations, OrganizationsOperations } from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
