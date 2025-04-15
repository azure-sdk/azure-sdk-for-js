// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { VerifiedIdClient } from "./verifiedIdClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  Authority,
  AuthorityProperties,
  KnownProvisioningState,
  ProvisioningState,
  TrackedResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  AuthorityUpdate,
  KnownVersions,
} from "./models/index.js";
export { VerifiedIdClientOptionalParams } from "./api/index.js";
export {
  AuthoritiesListBySubscriptionOptionalParams,
  AuthoritiesListByResourceGroupOptionalParams,
  AuthoritiesDeleteOptionalParams,
  AuthoritiesUpdateOptionalParams,
  AuthoritiesCreateOrUpdateOptionalParams,
  AuthoritiesGetOptionalParams,
} from "./api/authorities/index.js";
export { OperationsListOptionalParams } from "./api/operations/index.js";
export { AuthoritiesOperations, OperationsOperations } from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
