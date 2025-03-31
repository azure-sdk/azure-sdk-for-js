// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { FabricClient } from "./fabricClient.js";
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
  FabricCapacity,
  FabricCapacityProperties,
  KnownProvisioningState,
  ProvisioningState,
  KnownResourceState,
  ResourceState,
  CapacityAdministration,
  RpSku,
  KnownRpSkuTier,
  RpSkuTier,
  TrackedResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  FabricCapacityUpdate,
  FabricCapacityUpdateProperties,
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityResponse,
  KnownCheckNameAvailabilityReason,
  CheckNameAvailabilityReason,
  RpSkuDetailsForExistingResource,
  RpSkuDetailsForNewResource,
  Quota,
  QuotaName,
  KnownVersions,
} from "./models/index.js";
export { FabricClientOptionalParams } from "./api/index.js";
export {
  FabricCapacitiesListUsagesOptionalParams,
  FabricCapacitiesListSkusOptionalParams,
  FabricCapacitiesListSkusForCapacityOptionalParams,
  FabricCapacitiesCheckNameAvailabilityOptionalParams,
  FabricCapacitiesSuspendOptionalParams,
  FabricCapacitiesResumeOptionalParams,
  FabricCapacitiesListBySubscriptionOptionalParams,
  FabricCapacitiesListByResourceGroupOptionalParams,
  FabricCapacitiesDeleteOptionalParams,
  FabricCapacitiesUpdateOptionalParams,
  FabricCapacitiesCreateOrUpdateOptionalParams,
  FabricCapacitiesGetOptionalParams,
} from "./api/fabricCapacities/index.js";
export { OperationsListOptionalParams } from "./api/operations/index.js";
export { FabricCapacitiesOperations, OperationsOperations } from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
