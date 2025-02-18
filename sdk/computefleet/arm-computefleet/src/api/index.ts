// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createAzureFleet,
  AzureFleetContext,
  AzureFleetClientOptionalParams,
} from "./azureFleetContext.js";
export {
  FleetsListVirtualMachineScaleSetsOptionalParams,
  FleetsListBySubscriptionOptionalParams,
  FleetsListByResourceGroupOptionalParams,
  FleetsDeleteOptionalParams,
  FleetsUpdateOptionalParams,
  FleetsCreateOrUpdateOptionalParams,
  FleetsGetOptionalParams,
  OperationsListOptionalParams,
} from "./options.js";
export {
  fleetsListVirtualMachineScaleSets,
  fleetsListBySubscription,
  fleetsListByResourceGroup,
  fleetsDelete,
  fleetsUpdate,
  fleetsCreateOrUpdate,
  fleetsGet,
} from "./fleets/index.js";
export { operationsList } from "./operations/index.js";
