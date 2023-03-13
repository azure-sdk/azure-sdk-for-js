# Release History
    
## 1.0.0-beta.3 (2023-03-13)
    
**Features**

  - Added operation GuestAgents.list
  - Added operation HybridIdentityMetadataOperations.list
  - Added operation VirtualMachines.beginCreateOrUpdate
  - Added operation VirtualMachines.beginCreateOrUpdateAndWait
  - Added operation VirtualMachines.listAll
  - Added Interface ErrorAdditionalInfo
  - Added Interface ExtensionTargetProperties
  - Added Interface GuestAgentProfileUpdate
  - Added Interface GuestAgentsListNextOptionalParams
  - Added Interface GuestAgentsListOptionalParams
  - Added Interface HybridIdentityMetadataListNextOptionalParams
  - Added Interface HybridIdentityMetadataListOptionalParams
  - Added Interface MachineExtensionUpgrade
  - Added Interface UpgradeExtensionsOptionalParams
  - Added Interface VirtualMachinesCreateOrUpdateOptionalParams
  - Added Interface VirtualMachinesListAllNextOptionalParams
  - Added Interface VirtualMachinesListAllOptionalParams
  - Added Type Alias GuestAgentsListNextResponse
  - Added Type Alias GuestAgentsListResponse
  - Added Type Alias HybridIdentityMetadataListNextResponse
  - Added Type Alias HybridIdentityMetadataListResponse
  - Added Type Alias VirtualMachinesCreateOrUpdateResponse
  - Added Type Alias VirtualMachinesListAllNextResponse
  - Added Type Alias VirtualMachinesListAllResponse
  - Interface Datastore has a new optional parameter capacityGB
  - Interface Datastore has a new optional parameter freeSpaceGB
  - Interface ErrorDetail has a new optional parameter additionalInfo
  - Interface GuestAgentProfile has a new optional parameter clientPublicKey
  - Interface GuestAgentProfile has a new optional parameter mssqlDiscovered
  - Interface Host has a new optional parameter datastoreIds
  - Interface Host has a new optional parameter networkIds
  - Interface InventoryItemDetails has a new optional parameter inventoryType
  - Interface ResourcePool has a new optional parameter datastoreIds
  - Interface ResourcePool has a new optional parameter networkIds
  - Interface VirtualMachineInventoryItem has a new optional parameter cluster
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
  - Type of parameter error of interface ErrorResponse is changed from ErrorDefinition to ErrorDetail
    
    
## 1.0.0-beta.2 (2022-12-30)
    
**Features**

  - Interface MachineExtensionsListNextOptionalParams no longer has parameter expand
    
    
## 1.0.0-beta.1 (2022-08-15)

The package of @azure/arm-connectedvmware is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
