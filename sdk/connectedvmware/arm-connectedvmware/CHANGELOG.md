# Release History
    
## 1.0.0-beta.3 (2023-09-19)
    
**Features**

  - Added operation group VirtualMachineInstances
  - Added operation group VMInstanceGuestAgents
  - Added operation group VmInstanceHybridIdentityMetadataOperations
  - Added operation GuestAgents.list
  - Added operation HybridIdentityMetadataOperations.list
  - Added operation VirtualMachines.beginCreateOrUpdate
  - Added operation VirtualMachines.beginCreateOrUpdateAndWait
  - Added operation VirtualMachines.listAll
  - Added Interface AzureArcVMwareManagementServiceAPIUpgradeExtensionsHeaders
  - Added Interface ClustersDeleteHeaders
  - Added Interface DatastoresDeleteHeaders
  - Added Interface ErrorAdditionalInfo
  - Added Interface ExtensionTargetProperties
  - Added Interface GuestAgentProfileUpdate
  - Added Interface GuestAgentsDeleteHeaders
  - Added Interface GuestAgentsListNextOptionalParams
  - Added Interface GuestAgentsListOptionalParams
  - Added Interface HostsDeleteHeaders
  - Added Interface HybridIdentityMetadataListNextOptionalParams
  - Added Interface HybridIdentityMetadataListOptionalParams
  - Added Interface InfrastructureProfile
  - Added Interface MachineExtensionsDeleteHeaders
  - Added Interface MachineExtensionUpgrade
  - Added Interface OsProfileForVMInstance
  - Added Interface ResourcePoolsDeleteHeaders
  - Added Interface UpgradeExtensionsOptionalParams
  - Added Interface VCentersDeleteHeaders
  - Added Interface VirtualMachineInstance
  - Added Interface VirtualMachineInstancesCreateOrUpdateOptionalParams
  - Added Interface VirtualMachineInstancesDeleteHeaders
  - Added Interface VirtualMachineInstancesDeleteOptionalParams
  - Added Interface VirtualMachineInstancesGetOptionalParams
  - Added Interface VirtualMachineInstancesList
  - Added Interface VirtualMachineInstancesListNextOptionalParams
  - Added Interface VirtualMachineInstancesListOptionalParams
  - Added Interface VirtualMachineInstancesRestartHeaders
  - Added Interface VirtualMachineInstancesRestartOptionalParams
  - Added Interface VirtualMachineInstancesStartHeaders
  - Added Interface VirtualMachineInstancesStartOptionalParams
  - Added Interface VirtualMachineInstancesStopHeaders
  - Added Interface VirtualMachineInstancesStopOptionalParams
  - Added Interface VirtualMachineInstancesUpdateHeaders
  - Added Interface VirtualMachineInstancesUpdateOptionalParams
  - Added Interface VirtualMachineInstanceUpdate
  - Added Interface VirtualMachinesAssessPatchesHeaders
  - Added Interface VirtualMachinesCreateOrUpdateOptionalParams
  - Added Interface VirtualMachinesDeleteHeaders
  - Added Interface VirtualMachinesInstallPatchesHeaders
  - Added Interface VirtualMachinesListAllNextOptionalParams
  - Added Interface VirtualMachinesListAllOptionalParams
  - Added Interface VirtualMachinesRestartHeaders
  - Added Interface VirtualMachinesStartHeaders
  - Added Interface VirtualMachinesStopHeaders
  - Added Interface VirtualMachinesUpdateHeaders
  - Added Interface VirtualMachineTemplatesDeleteHeaders
  - Added Interface VirtualNetworksDeleteHeaders
  - Added Interface VMInstanceGuestAgentsCreateOptionalParams
  - Added Interface VMInstanceGuestAgentsDeleteHeaders
  - Added Interface VMInstanceGuestAgentsDeleteOptionalParams
  - Added Interface VMInstanceGuestAgentsGetOptionalParams
  - Added Interface VMInstanceGuestAgentsListNextOptionalParams
  - Added Interface VMInstanceGuestAgentsListOptionalParams
  - Added Interface VmInstanceHybridIdentityMetadata
  - Added Interface VmInstanceHybridIdentityMetadataGetOptionalParams
  - Added Interface VmInstanceHybridIdentityMetadataList
  - Added Interface VmInstanceHybridIdentityMetadataListNextOptionalParams
  - Added Interface VmInstanceHybridIdentityMetadataListOptionalParams
  - Added Type Alias GuestAgentsListNextResponse
  - Added Type Alias GuestAgentsListResponse
  - Added Type Alias HybridIdentityMetadataListNextResponse
  - Added Type Alias HybridIdentityMetadataListResponse
  - Added Type Alias VirtualMachineInstancesCreateOrUpdateResponse
  - Added Type Alias VirtualMachineInstancesDeleteResponse
  - Added Type Alias VirtualMachineInstancesGetResponse
  - Added Type Alias VirtualMachineInstancesListNextResponse
  - Added Type Alias VirtualMachineInstancesListResponse
  - Added Type Alias VirtualMachineInstancesRestartResponse
  - Added Type Alias VirtualMachineInstancesStartResponse
  - Added Type Alias VirtualMachineInstancesStopResponse
  - Added Type Alias VirtualMachineInstancesUpdateResponse
  - Added Type Alias VirtualMachinesCreateOrUpdateResponse
  - Added Type Alias VirtualMachinesListAllNextResponse
  - Added Type Alias VirtualMachinesListAllResponse
  - Added Type Alias VMInstanceGuestAgentsCreateResponse
  - Added Type Alias VMInstanceGuestAgentsDeleteResponse
  - Added Type Alias VMInstanceGuestAgentsGetResponse
  - Added Type Alias VMInstanceGuestAgentsListNextResponse
  - Added Type Alias VMInstanceGuestAgentsListResponse
  - Added Type Alias VmInstanceHybridIdentityMetadataGetResponse
  - Added Type Alias VmInstanceHybridIdentityMetadataListNextResponse
  - Added Type Alias VmInstanceHybridIdentityMetadataListResponse
  - Interface Cluster has a new optional parameter totalCpuMHz
  - Interface Cluster has a new optional parameter totalMemoryGB
  - Interface Cluster has a new optional parameter usedCpuMHz
  - Interface Cluster has a new optional parameter usedMemoryGB
  - Interface Datastore has a new optional parameter capacityGB
  - Interface Datastore has a new optional parameter freeSpaceGB
  - Interface ErrorDetail has a new optional parameter additionalInfo
  - Interface GuestAgent has a new optional parameter privateLinkScopeResourceId
  - Interface GuestAgentProfile has a new optional parameter clientPublicKey
  - Interface GuestAgentProfile has a new optional parameter mssqlDiscovered
  - Interface Host has a new optional parameter cpuMhz
  - Interface Host has a new optional parameter datastoreIds
  - Interface Host has a new optional parameter memorySizeGB
  - Interface Host has a new optional parameter networkIds
  - Interface Host has a new optional parameter overallCpuUsageMHz
  - Interface Host has a new optional parameter overallMemoryUsageGB
  - Interface InventoryItemDetails has a new optional parameter inventoryType
  - Interface Resource has a new optional parameter systemData
  - Interface ResourcePool has a new optional parameter cpuCapacityMHz
  - Interface ResourcePool has a new optional parameter cpuOverallUsageMHz
  - Interface ResourcePool has a new optional parameter datastoreIds
  - Interface ResourcePool has a new optional parameter memCapacityGB
  - Interface ResourcePool has a new optional parameter memOverallUsageGB
  - Interface ResourcePool has a new optional parameter networkIds
  - Interface VirtualMachineInventoryItem has a new optional parameter cluster
  - Interface VirtualMachinesDeleteOptionalParams has a new optional parameter deleteFromHost
  - Interface VirtualMachineTemplateInventoryItem has a new optional parameter toolsVersion
  - Interface VirtualMachineTemplateInventoryItem has a new optional parameter toolsVersionStatus
  - Interface VirtualMachineUpdate has a new optional parameter guestAgentProfile

**Breaking Changes**

  - Removed operation GuestAgents.listByVm
  - Removed operation HybridIdentityMetadataOperations.listByVm
  - Removed operation VirtualMachines.beginCreate
  - Removed operation VirtualMachines.beginCreateAndWait
  - Removed operation VirtualMachines.listByResourceGroup
  - Operation VirtualMachines.list has a new signature
  - Class AzureArcVMwareManagementServiceAPI has a new signature
  - Interface GuestAgent no longer has parameter systemData
  - Interface HybridIdentityMetadata no longer has parameter systemData
  - Interface InventoryItem no longer has parameter systemData
  - Interface VirtualMachinesDeleteOptionalParams no longer has parameter retain
  - Type of parameter provisioningState of interface Cluster is changed from string to ProvisioningState
  - Type of parameter error of interface ErrorResponse is changed from ErrorDefinition to ErrorDetail
  - Type of parameter provisioningState of interface GuestAgent is changed from string to ProvisioningState
  - Type of parameter provisioningState of interface Host is changed from string to ProvisioningState
  - Type of parameter provisioningState of interface HybridIdentityMetadata is changed from string to ProvisioningState
  - Type of parameter provisioningState of interface InventoryItem is changed from string to ProvisioningState
  - Type of parameter provisioningState of interface InventoryItemProperties is changed from string to ProvisioningState
  - Type of parameter provisioningState of interface ResourcePool is changed from string to ProvisioningState
  - Type of parameter provisioningState of interface VCenter is changed from string to ProvisioningState
  - Type of parameter provisioningState of interface VirtualMachine is changed from string to ProvisioningState
  - Type of parameter provisioningState of interface VirtualMachineTemplate is changed from string to ProvisioningState
  - Type of parameter provisioningState of interface VirtualNetwork is changed from string to ProvisioningState
    
    
## 1.0.0-beta.2 (2022-12-30)
    
**Features**

  - Interface MachineExtensionsListNextOptionalParams no longer has parameter expand
    
    
## 1.0.0-beta.1 (2022-08-15)

The package of @azure/arm-connectedvmware is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
