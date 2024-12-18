// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { StorageClient } from "./storageClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  FileSystemResource,
  FileSystemResourceProperties,
  MarketplaceDetails,
  KnownMarketplaceSubscriptionStatus,
  MarketplaceSubscriptionStatus,
  KnownProvisioningState,
  ProvisioningState,
  UserDetails,
  ManagedServiceIdentity,
  KnownManagedServiceIdentityType,
  ManagedServiceIdentityType,
  UserAssignedIdentity,
  TrackedResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  FileSystemResourceUpdate,
  FileSystemResourceUpdateProperties,
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  KnownVersions,
} from "./models/index.js";
export {
  OperationsListOptionalParams,
  FileSystemsGetOptionalParams,
  FileSystemsCreateOrUpdateOptionalParams,
  FileSystemsUpdateOptionalParams,
  FileSystemsDeleteOptionalParams,
  FileSystemsListByResourceGroupOptionalParams,
  FileSystemsListBySubscriptionOptionalParams,
  StorageClientOptionalParams,
} from "./api/index.js";
export {
  FileSystemsOperations,
  OperationsOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
