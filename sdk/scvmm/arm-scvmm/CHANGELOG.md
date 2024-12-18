# Release History
    
## 2.0.0 (2024-12-18)
    
### Features Added

  - Added operation AvailabilitySetsOperations.createOrUpdate
  - Added operation AvailabilitySetsOperations.delete
  - Added operation AvailabilitySetsOperations.update
  - Added operation CloudsOperations.createOrUpdate
  - Added operation CloudsOperations.delete
  - Added operation CloudsOperations.update
  - Added operation GuestAgentsOperations.create
  - Added operation VirtualMachineInstancesOperations.createCheckpoint
  - Added operation VirtualMachineInstancesOperations.createOrUpdate
  - Added operation VirtualMachineInstancesOperations.delete
  - Added operation VirtualMachineInstancesOperations.deleteCheckpoint
  - Added operation VirtualMachineInstancesOperations.restart
  - Added operation VirtualMachineInstancesOperations.restoreCheckpoint
  - Added operation VirtualMachineInstancesOperations.start
  - Added operation VirtualMachineInstancesOperations.stop
  - Added operation VirtualMachineInstancesOperations.update
  - Added operation VirtualMachineTemplatesOperations.createOrUpdate
  - Added operation VirtualMachineTemplatesOperations.delete
  - Added operation VirtualMachineTemplatesOperations.update
  - Added operation VirtualNetworksOperations.createOrUpdate
  - Added operation VirtualNetworksOperations.delete
  - Added operation VirtualNetworksOperations.update
  - Added operation VmmServersOperations.createOrUpdate
  - Added operation VmmServersOperations.delete
  - Added operation VmmServersOperations.update
  - Added Interface ExtensionResource
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface RestorePollerOptions
  - Added Interface ScVmmClientOptionalParams
  - Added Class ScVmmClient
  - Added Type Alias ContinuablePage
  - Interface GuestAgentProperties has a new optional parameter privateLinkScopeResourceId
  - Interface OsProfileForVmInstance has a new optional parameter domainName
  - Interface OsProfileForVmInstance has a new optional parameter domainPassword
  - Interface OsProfileForVmInstance has a new optional parameter domainUsername
  - Interface OsProfileForVmInstance has a new optional parameter productKey
  - Interface OsProfileForVmInstance has a new optional parameter runOnceCommands
  - Interface OsProfileForVmInstance has a new optional parameter timezone
  - Interface OsProfileForVmInstance has a new optional parameter workgroup
  - Interface VirtualMachineInstancesStopOptionalParams has a new optional parameter body
  - Added Enum KnownVersions
  - Enum KnownCreateDiffDisk has a new value "false"
  - Enum KnownCreateDiffDisk has a new value "true"
  - Enum KnownDeleteFromHost has a new value "false"
  - Enum KnownDeleteFromHost has a new value "true"
  - Enum KnownDynamicMemoryEnabled has a new value "false"
  - Enum KnownDynamicMemoryEnabled has a new value "true"
  - Enum KnownForceDelete has a new value "false"
  - Enum KnownForceDelete has a new value "true"
  - Enum KnownIsCustomizable has a new value "false"
  - Enum KnownIsCustomizable has a new value "true"
  - Enum KnownIsHighlyAvailable has a new value "false"
  - Enum KnownIsHighlyAvailable has a new value "true"
  - Enum KnownLimitCpuForMigration has a new value "false"
  - Enum KnownLimitCpuForMigration has a new value "true"
  - Enum KnownOrigin has a new value "user,system"
  - Enum KnownOrigin has a new value system
  - Enum KnownOrigin has a new value user
  - Enum KnownProvisioningAction has a new value install
  - Enum KnownProvisioningAction has a new value repair
  - Enum KnownProvisioningAction has a new value uninstall
  - Enum KnownSkipShutdown has a new value "false"
  - Enum KnownSkipShutdown has a new value "true"
  - Added function restorePoller

### Breaking Changes

  - Removed operation AvailabilitySets.beginCreateOrUpdate
  - Removed operation AvailabilitySets.beginCreateOrUpdateAndWait
  - Removed operation AvailabilitySets.beginDelete
  - Removed operation AvailabilitySets.beginDeleteAndWait
  - Removed operation AvailabilitySets.beginUpdate
  - Removed operation AvailabilitySets.beginUpdateAndWait
  - Removed operation Clouds.beginCreateOrUpdate
  - Removed operation Clouds.beginCreateOrUpdateAndWait
  - Removed operation Clouds.beginDelete
  - Removed operation Clouds.beginDeleteAndWait
  - Removed operation Clouds.beginUpdate
  - Removed operation Clouds.beginUpdateAndWait
  - Removed operation GuestAgents.beginCreate
  - Removed operation GuestAgents.beginCreateAndWait
  - Removed operation VirtualMachineInstances.beginCreateCheckpoint
  - Removed operation VirtualMachineInstances.beginCreateCheckpointAndWait
  - Removed operation VirtualMachineInstances.beginCreateOrUpdate
  - Removed operation VirtualMachineInstances.beginCreateOrUpdateAndWait
  - Removed operation VirtualMachineInstances.beginDelete
  - Removed operation VirtualMachineInstances.beginDeleteAndWait
  - Removed operation VirtualMachineInstances.beginDeleteCheckpoint
  - Removed operation VirtualMachineInstances.beginDeleteCheckpointAndWait
  - Removed operation VirtualMachineInstances.beginRestart
  - Removed operation VirtualMachineInstances.beginRestartAndWait
  - Removed operation VirtualMachineInstances.beginRestoreCheckpoint
  - Removed operation VirtualMachineInstances.beginRestoreCheckpointAndWait
  - Removed operation VirtualMachineInstances.beginStart
  - Removed operation VirtualMachineInstances.beginStartAndWait
  - Removed operation VirtualMachineInstances.beginStop
  - Removed operation VirtualMachineInstances.beginStopAndWait
  - Removed operation VirtualMachineInstances.beginUpdate
  - Removed operation VirtualMachineInstances.beginUpdateAndWait
  - Removed operation VirtualMachineTemplates.beginCreateOrUpdate
  - Removed operation VirtualMachineTemplates.beginCreateOrUpdateAndWait
  - Removed operation VirtualMachineTemplates.beginDelete
  - Removed operation VirtualMachineTemplates.beginDeleteAndWait
  - Removed operation VirtualMachineTemplates.beginUpdate
  - Removed operation VirtualMachineTemplates.beginUpdateAndWait
  - Removed operation VirtualNetworks.beginCreateOrUpdate
  - Removed operation VirtualNetworks.beginCreateOrUpdateAndWait
  - Removed operation VirtualNetworks.beginDelete
  - Removed operation VirtualNetworks.beginDeleteAndWait
  - Removed operation VirtualNetworks.beginUpdate
  - Removed operation VirtualNetworks.beginUpdateAndWait
  - Removed operation VmmServers.beginCreateOrUpdate
  - Removed operation VmmServers.beginCreateOrUpdateAndWait
  - Removed operation VmmServers.beginDelete
  - Removed operation VmmServers.beginDeleteAndWait
  - Removed operation VmmServers.beginUpdate
  - Removed operation VmmServers.beginUpdateAndWait
  - Deleted Class ScVmm
  - Interface AvailabilitySetsCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface AvailabilitySetsDeleteOptionalParams no longer has parameter resumeFrom
  - Interface AvailabilitySetsUpdateOptionalParams no longer has parameter resumeFrom
  - Interface CloudsCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface CloudsDeleteOptionalParams no longer has parameter resumeFrom
  - Interface CloudsUpdateOptionalParams no longer has parameter resumeFrom
  - Interface GuestAgentsCreateOptionalParams no longer has parameter resumeFrom
  - Interface VirtualMachineInstancesCreateCheckpointOptionalParams no longer has parameter resumeFrom
  - Interface VirtualMachineInstancesCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface VirtualMachineInstancesDeleteCheckpointOptionalParams no longer has parameter resumeFrom
  - Interface VirtualMachineInstancesDeleteOptionalParams no longer has parameter resumeFrom
  - Interface VirtualMachineInstancesRestartOptionalParams no longer has parameter resumeFrom
  - Interface VirtualMachineInstancesRestoreCheckpointOptionalParams no longer has parameter resumeFrom
  - Interface VirtualMachineInstancesStartOptionalParams no longer has parameter resumeFrom
  - Interface VirtualMachineInstancesStopOptionalParams no longer has parameter resumeFrom
  - Interface VirtualMachineInstancesUpdateOptionalParams no longer has parameter resumeFrom
  - Interface VirtualMachineTemplatesCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface VirtualMachineTemplatesDeleteOptionalParams no longer has parameter resumeFrom
  - Interface VirtualMachineTemplatesUpdateOptionalParams no longer has parameter resumeFrom
  - Interface VirtualNetworksCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface VirtualNetworksDeleteOptionalParams no longer has parameter resumeFrom
  - Interface VirtualNetworksUpdateOptionalParams no longer has parameter resumeFrom
  - Interface VmmServersCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface VmmServersDeleteOptionalParams no longer has parameter resumeFrom
  - Interface VmmServersUpdateOptionalParams no longer has parameter resumeFrom
  - Type of parameter tags of interface AvailabilitySetTagsUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter tags of interface CloudTagsUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter inventoryType of interface InventoryItemProperties is changed from "Cloud" | "VirtualMachine" | "VirtualMachineTemplate" | "VirtualNetwork" to InventoryType
  - Type of parameter tags of interface TrackedResource is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter tags of interface VirtualMachineTemplateTagsUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter tags of interface VirtualNetworkTagsUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter tags of interface VmmServerTagsUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Enum KnownCreateDiffDisk no longer has value False
  - Enum KnownCreateDiffDisk no longer has value True
  - Enum KnownDeleteFromHost no longer has value False
  - Enum KnownDeleteFromHost no longer has value True
  - Enum KnownDynamicMemoryEnabled no longer has value False
  - Enum KnownDynamicMemoryEnabled no longer has value True
  - Enum KnownForceDelete no longer has value False
  - Enum KnownForceDelete no longer has value True
  - Enum KnownIsCustomizable no longer has value False
  - Enum KnownIsCustomizable no longer has value True
  - Enum KnownIsHighlyAvailable no longer has value False
  - Enum KnownIsHighlyAvailable no longer has value True
  - Enum KnownLimitCpuForMigration no longer has value False
  - Enum KnownLimitCpuForMigration no longer has value True
  - Enum KnownOrigin no longer has value System
  - Enum KnownOrigin no longer has value User
  - Enum KnownOrigin no longer has value UserSystem
  - Enum KnownProvisioningAction no longer has value Install
  - Enum KnownProvisioningAction no longer has value Repair
  - Enum KnownProvisioningAction no longer has value Uninstall
  - Enum KnownSkipShutdown no longer has value False
  - Enum KnownSkipShutdown no longer has value True
  - Removed function getContinuationToken
    
    
## 1.0.0 (2024-06-25)

### Features Added

The package of @azure/arm-scvmm is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
