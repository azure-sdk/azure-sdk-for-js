// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  OperationsListOptionalParams,
  VmmServersGetOptionalParams,
  VmmServersCreateOrUpdateOptionalParams,
  VmmServersUpdateOptionalParams,
  VmmServersDeleteOptionalParams,
  VmmServersListByResourceGroupOptionalParams,
  VmmServersListBySubscriptionOptionalParams,
  CloudsGetOptionalParams,
  CloudsCreateOrUpdateOptionalParams,
  CloudsUpdateOptionalParams,
  CloudsDeleteOptionalParams,
  CloudsListByResourceGroupOptionalParams,
  CloudsListBySubscriptionOptionalParams,
  VirtualNetworksGetOptionalParams,
  VirtualNetworksCreateOrUpdateOptionalParams,
  VirtualNetworksUpdateOptionalParams,
  VirtualNetworksDeleteOptionalParams,
  VirtualNetworksListByResourceGroupOptionalParams,
  VirtualNetworksListBySubscriptionOptionalParams,
  VirtualMachineTemplatesGetOptionalParams,
  VirtualMachineTemplatesCreateOrUpdateOptionalParams,
  VirtualMachineTemplatesUpdateOptionalParams,
  VirtualMachineTemplatesDeleteOptionalParams,
  VirtualMachineTemplatesListByResourceGroupOptionalParams,
  VirtualMachineTemplatesListBySubscriptionOptionalParams,
  AvailabilitySetsGetOptionalParams,
  AvailabilitySetsCreateOrUpdateOptionalParams,
  AvailabilitySetsUpdateOptionalParams,
  AvailabilitySetsDeleteOptionalParams,
  AvailabilitySetsListByResourceGroupOptionalParams,
  AvailabilitySetsListBySubscriptionOptionalParams,
  InventoryItemsGetOptionalParams,
  InventoryItemsCreateOptionalParams,
  InventoryItemsDeleteOptionalParams,
  InventoryItemsListByVmmServerOptionalParams,
  VirtualMachineInstancesGetOptionalParams,
  VirtualMachineInstancesCreateOrUpdateOptionalParams,
  VirtualMachineInstancesUpdateOptionalParams,
  VirtualMachineInstancesDeleteOptionalParams,
  VirtualMachineInstancesListOptionalParams,
  VirtualMachineInstancesStopOptionalParams,
  VirtualMachineInstancesStartOptionalParams,
  VirtualMachineInstancesRestartOptionalParams,
  VirtualMachineInstancesCreateCheckpointOptionalParams,
  VirtualMachineInstancesDeleteCheckpointOptionalParams,
  VirtualMachineInstancesRestoreCheckpointOptionalParams,
  VmInstanceHybridIdentityMetadatasGetOptionalParams,
  VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams,
  GuestAgentsGetOptionalParams,
  GuestAgentsCreateOptionalParams,
  GuestAgentsDeleteOptionalParams,
  GuestAgentsListByVirtualMachineInstanceOptionalParams,
} from "./options.js";
export {
  createScVmm,
  ScVmmContext,
  ScVmmClientOptionalParams,
} from "./scVmmContext.js";
export {
  availabilitySetsGet,
  availabilitySetsCreateOrUpdate,
  availabilitySetsUpdate,
  availabilitySetsDelete,
  availabilitySetsListByResourceGroup,
  availabilitySetsListBySubscription,
} from "./availabilitySets/index.js";
export {
  cloudsGet,
  cloudsCreateOrUpdate,
  cloudsUpdate,
  cloudsDelete,
  cloudsListByResourceGroup,
  cloudsListBySubscription,
} from "./clouds/index.js";
export {
  guestAgentsGet,
  guestAgentsCreate,
  guestAgentsDelete,
  guestAgentsListByVirtualMachineInstance,
} from "./guestAgents/index.js";
export {
  inventoryItemsGet,
  inventoryItemsCreate,
  inventoryItemsDelete,
  inventoryItemsListByVmmServer,
} from "./inventoryItems/index.js";
export { operationsList } from "./operations/index.js";
export {
  virtualMachineInstancesGet,
  virtualMachineInstancesCreateOrUpdate,
  virtualMachineInstancesUpdate,
  virtualMachineInstancesDelete,
  virtualMachineInstancesList,
  virtualMachineInstancesStop,
  virtualMachineInstancesStart,
  virtualMachineInstancesRestart,
  virtualMachineInstancesCreateCheckpoint,
  virtualMachineInstancesDeleteCheckpoint,
  virtualMachineInstancesRestoreCheckpoint,
} from "./virtualMachineInstances/index.js";
export {
  virtualMachineTemplatesGet,
  virtualMachineTemplatesCreateOrUpdate,
  virtualMachineTemplatesUpdate,
  virtualMachineTemplatesDelete,
  virtualMachineTemplatesListByResourceGroup,
  virtualMachineTemplatesListBySubscription,
} from "./virtualMachineTemplates/index.js";
export {
  virtualNetworksGet,
  virtualNetworksCreateOrUpdate,
  virtualNetworksUpdate,
  virtualNetworksDelete,
  virtualNetworksListByResourceGroup,
  virtualNetworksListBySubscription,
} from "./virtualNetworks/index.js";
export {
  vmInstanceHybridIdentityMetadatasGet,
  vmInstanceHybridIdentityMetadatasListByVirtualMachineInstance,
} from "./vmInstanceHybridIdentityMetadatas/index.js";
export {
  vmmServersGet,
  vmmServersCreateOrUpdate,
  vmmServersUpdate,
  vmmServersDelete,
  vmmServersListByResourceGroup,
  vmmServersListBySubscription,
} from "./vmmServers/index.js";
