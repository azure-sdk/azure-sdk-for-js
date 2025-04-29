// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { FileSharesClient } from "./fileSharesClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  FileShare,
  FileShareProperties,
  MediaTier,
  Redundancy,
  Protocol,
  NfsProtocolProperties,
  ShareRootSquash,
  PublicAccessProperties,
  KnownFileShareProvisioningState,
  FileShareProvisioningState,
  KnownPublicNetworkAccess,
  PublicNetworkAccess,
  PrivateEndpointConnection,
  PrivateEndpointConnectionProperties,
  PrivateEndpoint,
  PrivateLinkServiceConnectionState,
  KnownPrivateEndpointServiceConnectionStatus,
  PrivateEndpointServiceConnectionStatus,
  KnownPrivateEndpointConnectionProvisioningState,
  PrivateEndpointConnectionProvisioningState,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  TrackedResource,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  FileShareUpdate,
  FileShareUpdateProperties,
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityResponse,
  KnownCheckNameAvailabilityReason,
  CheckNameAvailabilityReason,
  FileShareSnapshot,
  FileShareSnapshotProperties,
  MetadataItem,
  ProxyResource,
  FileShareSnapshotUpdate,
  FileShareSnapshotUpdateProperties,
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  KnownVersions,
} from "./models/index.js";
export { FileSharesClientOptionalParams } from "./api/index.js";
export {
  FileSharesListByFileShareOptionalParams,
  FileSharesDeleteFileShareSnapshotOptionalParams,
  FileSharesUpdateFileShareSnapshotOptionalParams,
  FileSharesCreateOrUpdateFileShareSnapshotOptionalParams,
  FileSharesGetFileShareSnapshotOptionalParams,
  FileSharesCheckNameAvailabilityOptionalParams,
  FileSharesListByParentOptionalParams,
  FileSharesListBySubscriptionOptionalParams,
  FileSharesDeleteOptionalParams,
  FileSharesUpdateOptionalParams,
  FileSharesCreateOrUpdateOptionalParams,
  FileSharesGetOptionalParams,
} from "./api/fileShares/index.js";
export { OperationsListOptionalParams } from "./api/operations/index.js";
export { FileSharesOperations, OperationsOperations } from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
