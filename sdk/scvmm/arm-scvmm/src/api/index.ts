// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  GuestAgentsListByVirtualMachineInstanceOptionalParams,
  GuestAgentsDeleteOptionalParams,
  GuestAgentsCreateOptionalParams,
  GuestAgentsGetOptionalParams,
  VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams,
  VmInstanceHybridIdentityMetadatasGetOptionalParams,
  VirtualMachineInstancesRestoreCheckpointOptionalParams,
  VirtualMachineInstancesDeleteCheckpointOptionalParams,
  VirtualMachineInstancesCreateCheckpointOptionalParams,
  VirtualMachineInstancesRestartOptionalParams,
  VirtualMachineInstancesStartOptionalParams,
  VirtualMachineInstancesStopOptionalParams,
  VirtualMachineInstancesListOptionalParams,
  VirtualMachineInstancesDeleteOptionalParams,
  VirtualMachineInstancesUpdateOptionalParams,
  VirtualMachineInstancesCreateOrUpdateOptionalParams,
  VirtualMachineInstancesGetOptionalParams,
  InventoryItemsListByVmmServerOptionalParams,
  InventoryItemsDeleteOptionalParams,
  InventoryItemsCreateOptionalParams,
  InventoryItemsGetOptionalParams,
  AvailabilitySetsListBySubscriptionOptionalParams,
  AvailabilitySetsListByResourceGroupOptionalParams,
  AvailabilitySetsDeleteOptionalParams,
  AvailabilitySetsUpdateOptionalParams,
  AvailabilitySetsCreateOrUpdateOptionalParams,
  AvailabilitySetsGetOptionalParams,
  VirtualMachineTemplatesListBySubscriptionOptionalParams,
  VirtualMachineTemplatesListByResourceGroupOptionalParams,
  VirtualMachineTemplatesDeleteOptionalParams,
  VirtualMachineTemplatesUpdateOptionalParams,
  VirtualMachineTemplatesCreateOrUpdateOptionalParams,
  VirtualMachineTemplatesGetOptionalParams,
  VirtualNetworksListBySubscriptionOptionalParams,
  VirtualNetworksListByResourceGroupOptionalParams,
  VirtualNetworksDeleteOptionalParams,
  VirtualNetworksUpdateOptionalParams,
  VirtualNetworksCreateOrUpdateOptionalParams,
  VirtualNetworksGetOptionalParams,
  CloudsListBySubscriptionOptionalParams,
  CloudsListByResourceGroupOptionalParams,
  CloudsDeleteOptionalParams,
  CloudsUpdateOptionalParams,
  CloudsCreateOrUpdateOptionalParams,
  CloudsGetOptionalParams,
  VmmServersListBySubscriptionOptionalParams,
  VmmServersListByResourceGroupOptionalParams,
  VmmServersDeleteOptionalParams,
  VmmServersUpdateOptionalParams,
  VmmServersCreateOrUpdateOptionalParams,
  VmmServersGetOptionalParams,
  OperationsListOptionalParams,
} from "./options.js";
export { createScVmm, ScVmmContext, ScVmmClientOptionalParams } from "./scVmmContext.js";
export {
  availabilitySetsListBySubscription,
  availabilitySetsListByResourceGroup,
  availabilitySetsDelete,
  availabilitySetsUpdate,
  availabilitySetsCreateOrUpdate,
  availabilitySetsGet,
} from "./availabilitySets/index.js";
export {
  cloudsListBySubscription,
  cloudsListByResourceGroup,
  cloudsDelete,
  cloudsUpdate,
  cloudsCreateOrUpdate,
  cloudsGet,
} from "./clouds/index.js";
export {
  guestAgentsListByVirtualMachineInstance,
  guestAgentsDelete,
  guestAgentsCreate,
  guestAgentsGet,
} from "./guestAgents/index.js";
export {
  inventoryItemsListByVmmServer,
  inventoryItemsDelete,
  inventoryItemsCreate,
  inventoryItemsGet,
} from "./inventoryItems/index.js";
export { operationsList } from "./operations/index.js";
export {
  virtualMachineInstancesRestoreCheckpoint,
  virtualMachineInstancesDeleteCheckpoint,
  virtualMachineInstancesCreateCheckpoint,
  virtualMachineInstancesRestart,
  virtualMachineInstancesStart,
  virtualMachineInstancesStop,
  virtualMachineInstancesList,
  virtualMachineInstancesDelete,
  virtualMachineInstancesUpdate,
  virtualMachineInstancesCreateOrUpdate,
  virtualMachineInstancesGet,
} from "./virtualMachineInstances/index.js";
export {
  virtualMachineTemplatesListBySubscription,
  virtualMachineTemplatesListByResourceGroup,
  virtualMachineTemplatesDelete,
  virtualMachineTemplatesUpdate,
  virtualMachineTemplatesCreateOrUpdate,
  virtualMachineTemplatesGet,
} from "./virtualMachineTemplates/index.js";
export {
  virtualNetworksListBySubscription,
  virtualNetworksListByResourceGroup,
  virtualNetworksDelete,
  virtualNetworksUpdate,
  virtualNetworksCreateOrUpdate,
  virtualNetworksGet,
} from "./virtualNetworks/index.js";
export {
  vmInstanceHybridIdentityMetadatasListByVirtualMachineInstance,
  vmInstanceHybridIdentityMetadatasGet,
} from "./vmInstanceHybridIdentityMetadatas/index.js";
export {
  vmmServersListBySubscription,
  vmmServersListByResourceGroup,
  vmmServersDelete,
  vmmServersUpdate,
  vmmServersCreateOrUpdate,
  vmmServersGet,
} from "./vmmServers/index.js";
