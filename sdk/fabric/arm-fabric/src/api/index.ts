// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { createFabric, FabricContext, FabricClientOptionalParams } from "./fabricContext.js";
export {
  OperationsListOptionalParams,
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
} from "./options.js";
export {
  fabricCapacitiesListUsages,
  fabricCapacitiesListSkus,
  fabricCapacitiesListSkusForCapacity,
  fabricCapacitiesCheckNameAvailability,
  fabricCapacitiesSuspend,
  fabricCapacitiesResume,
  fabricCapacitiesListBySubscription,
  fabricCapacitiesListByResourceGroup,
  fabricCapacitiesDelete,
  fabricCapacitiesUpdate,
  fabricCapacitiesCreateOrUpdate,
  fabricCapacitiesGet,
} from "./fabricCapacities/index.js";
export { operationsList } from "./operations/index.js";
