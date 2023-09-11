# Release History
    
## 1.0.0-beta.4 (2023-09-11)
    
**Features**

  - Added operation group GuestAgents
  - Added operation group HybridIdentityMetadatas
  - Added operation group MachineExtensions
  - Added operation group VirtualMachineInstanceHybridIdentityMetadata
  - Added operation group VirtualMachineInstances
  - Added operation group VMInstanceGuestAgents
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface GuestAgent
  - Added Interface GuestAgentList
  - Added Interface GuestAgentProfile
  - Added Interface GuestAgentsCreateOptionalParams
  - Added Interface GuestAgentsDeleteOptionalParams
  - Added Interface GuestAgentsGetOptionalParams
  - Added Interface GuestAgentsListByVmNextOptionalParams
  - Added Interface GuestAgentsListByVmOptionalParams
  - Added Interface GuestCredential
  - Added Interface HttpProxyConfiguration
  - Added Interface HybridIdentityMetadata
  - Added Interface HybridIdentityMetadataList
  - Added Interface HybridIdentityMetadatasCreateOptionalParams
  - Added Interface HybridIdentityMetadatasDeleteOptionalParams
  - Added Interface HybridIdentityMetadatasGetOptionalParams
  - Added Interface HybridIdentityMetadatasListByVmNextOptionalParams
  - Added Interface HybridIdentityMetadatasListByVmOptionalParams
  - Added Interface Identity
  - Added Interface InfrastructureProfile
  - Added Interface InfrastructureProfileUpdate
  - Added Interface MachineExtension
  - Added Interface MachineExtensionInstanceView
  - Added Interface MachineExtensionInstanceViewStatus
  - Added Interface MachineExtensionPropertiesInstanceView
  - Added Interface MachineExtensionsCreateOrUpdateOptionalParams
  - Added Interface MachineExtensionsDeleteOptionalParams
  - Added Interface MachineExtensionsGetOptionalParams
  - Added Interface MachineExtensionsListNextOptionalParams
  - Added Interface MachineExtensionsListOptionalParams
  - Added Interface MachineExtensionsListResult
  - Added Interface MachineExtensionsUpdateHeaders
  - Added Interface MachineExtensionsUpdateOptionalParams
  - Added Interface MachineExtensionUpdate
  - Added Interface OsProfileForVMInstance
  - Added Interface TrackedResource
  - Added Interface VirtualMachineInstance
  - Added Interface VirtualMachineInstanceHybridIdentityMetadataGetOptionalParams
  - Added Interface VirtualMachineInstanceHybridIdentityMetadataListNextOptionalParams
  - Added Interface VirtualMachineInstanceHybridIdentityMetadataListOptionalParams
  - Added Interface VirtualMachineInstanceListResult
  - Added Interface VirtualMachineInstancesCreateCheckpointOptionalParams
  - Added Interface VirtualMachineInstancesCreateOrUpdateOptionalParams
  - Added Interface VirtualMachineInstancesDeleteCheckpointOptionalParams
  - Added Interface VirtualMachineInstancesDeleteOptionalParams
  - Added Interface VirtualMachineInstancesGetOptionalParams
  - Added Interface VirtualMachineInstancesListOptionalParams
  - Added Interface VirtualMachineInstancesRestartOptionalParams
  - Added Interface VirtualMachineInstancesRestoreCheckpointOptionalParams
  - Added Interface VirtualMachineInstancesStartOptionalParams
  - Added Interface VirtualMachineInstancesStopOptionalParams
  - Added Interface VirtualMachineInstancesUpdateOptionalParams
  - Added Interface VirtualMachineInstanceUpdate
  - Added Interface VMInstanceGuestAgentsCreateOptionalParams
  - Added Interface VMInstanceGuestAgentsDeleteOptionalParams
  - Added Interface VMInstanceGuestAgentsGetOptionalParams
  - Added Interface VMInstanceGuestAgentsListNextOptionalParams
  - Added Interface VMInstanceGuestAgentsListOptionalParams
  - Added Interface VmInstanceHybridIdentityMetadata
  - Added Interface VmInstanceHybridIdentityMetadataList
  - Added Type Alias GuestAgentsCreateResponse
  - Added Type Alias GuestAgentsGetResponse
  - Added Type Alias GuestAgentsListByVmNextResponse
  - Added Type Alias GuestAgentsListByVmResponse
  - Added Type Alias HybridIdentityMetadatasCreateResponse
  - Added Type Alias HybridIdentityMetadatasGetResponse
  - Added Type Alias HybridIdentityMetadatasListByVmNextResponse
  - Added Type Alias HybridIdentityMetadatasListByVmResponse
  - Added Type Alias IdentityType
  - Added Type Alias MachineExtensionsCreateOrUpdateResponse
  - Added Type Alias MachineExtensionsGetResponse
  - Added Type Alias MachineExtensionsListNextResponse
  - Added Type Alias MachineExtensionsListResponse
  - Added Type Alias MachineExtensionsUpdateResponse
  - Added Type Alias ProvisioningAction
  - Added Type Alias StatusLevelTypes
  - Added Type Alias StatusTypes
  - Added Type Alias VirtualMachineInstanceHybridIdentityMetadataGetResponse
  - Added Type Alias VirtualMachineInstanceHybridIdentityMetadataListNextResponse
  - Added Type Alias VirtualMachineInstanceHybridIdentityMetadataListResponse
  - Added Type Alias VirtualMachineInstancesCreateOrUpdateResponse
  - Added Type Alias VirtualMachineInstancesGetResponse
  - Added Type Alias VirtualMachineInstancesListResponse
  - Added Type Alias VirtualMachineInstancesUpdateResponse
  - Added Type Alias VMInstanceGuestAgentsCreateResponse
  - Added Type Alias VMInstanceGuestAgentsGetResponse
  - Added Type Alias VMInstanceGuestAgentsListNextResponse
  - Added Type Alias VMInstanceGuestAgentsListResponse
  - Interface Resource has a new optional parameter systemData
  - Interface VirtualMachine has a new optional parameter guestAgentProfile
  - Interface VirtualMachine has a new optional parameter identity
  - Interface VirtualMachine has a new optional parameter lastRestoredVMCheckpoint
  - Interface VirtualMachineInventoryItem has a new optional parameter biosGuid
  - Interface VirtualMachineInventoryItem has a new optional parameter managedMachineResourceId
  - Interface VirtualMachineInventoryItem has a new optional parameter osVersion
  - Interface VirtualMachinesDeleteOptionalParams has a new optional parameter deleteFromHost
  - Interface VirtualMachineUpdate has a new optional parameter identity
  - Interface VirtualMachineUpdateProperties has a new optional parameter checkpointType
  - Added Enum KnownIdentityType
  - Added Enum KnownProvisioningAction
  - Added Enum KnownStatusLevelTypes
  - Added Enum KnownStatusTypes

**Breaking Changes**

  - Class Scvmm has a new signature
  - Interface InventoryItem no longer has parameter systemData
    
## 1.0.0-beta.3 (2023-02-01)

**Features**

  - Exposes `getContinuationToken` helper function to extract continuation token

**Bugs Fixed**

  - A series of small bug fixs relevant to authentication and apiVersion policy

## 1.0.0-beta.2 (2022-07-14)
    
**Features**

  - Added Interface CloudInventoryItem
  - Added Interface InventoryItem
  - Added Interface ProxyResource
  - Added Interface VirtualMachineInventoryItem
  - Added Interface VirtualMachineTemplateInventoryItem
  - Added Interface VirtualNetworkInventoryItem
    
    
## 1.0.0-beta.1 (2022-04-27)

The package of @azure/arm-scvmm is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
