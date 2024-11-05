// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { StorageClient, StorageClientOptionalParams } from "./storageClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  TrackedResource,
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
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  FileSystemResourceUpdate,
  FileSystemResourceUpdateProperties,
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  Versions,
  OperationsListOptionalParams,
  FileSystemsGetOptionalParams,
  FileSystemsCreateOrUpdateOptionalParams,
  FileSystemsUpdateOptionalParams,
  FileSystemsDeleteOptionalParams,
  FileSystemsListByResourceGroupOptionalParams,
  FileSystemsListBySubscriptionOptionalParams,
} from "./models/index.js";
export {
  FileSystemsOperations,
  OperationsOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
