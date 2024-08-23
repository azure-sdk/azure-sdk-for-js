# Release History
    
## 1.0.0-beta.2 (2024-08-23)
Compared with version 1.0.0-beta.1
    
### Features Added

  - Added operation Fleets.beginCreateOrUpdate
  - Added operation Fleets.beginCreateOrUpdateAndWait
  - Added operation Fleets.beginDelete
  - Added operation Fleets.beginDeleteAndWait
  - Added operation Fleets.beginUpdate
  - Added operation Fleets.beginUpdateAndWait
  - Added Interface BasePriorityProfile
  - Added Interface ComponentsQjfoe3SchemasManagedserviceidentityupdatePropertiesUserassignedidentitiesAdditionalproperties
  - Added Interface FleetListResult
  - Added Interface FleetsCreateOrUpdateHeaders
  - Added Interface FleetsDeleteHeaders
  - Added Interface FleetsListByResourceGroupNextOptionalParams
  - Added Interface FleetsListBySubscriptionNextOptionalParams
  - Added Interface FleetsListVirtualMachineScaleSetsNextOptionalParams
  - Added Interface FleetsUpdateHeaders
  - Added Interface MicrosoftAzureFleetOptionalParams
  - Added Interface OperationListResult
  - Added Interface OperationsListNextOptionalParams
  - Added Interface SubResourceReadOnly
  - Added Interface VirtualMachineScaleSetListResult
  - Added Class MicrosoftAzureFleet
  - Added Type Alias FleetsCreateOrUpdateResponse
  - Added Type Alias FleetsDeleteResponse
  - Added Type Alias FleetsGetResponse
  - Added Type Alias FleetsListByResourceGroupNextResponse
  - Added Type Alias FleetsListByResourceGroupResponse
  - Added Type Alias FleetsListBySubscriptionNextResponse
  - Added Type Alias FleetsListBySubscriptionResponse
  - Added Type Alias FleetsListVirtualMachineScaleSetsNextResponse
  - Added Type Alias FleetsListVirtualMachineScaleSetsResponse
  - Added Type Alias FleetsUpdateResponse
  - Added Type Alias OperationsListNextResponse
  - Added Type Alias OperationsListResponse
  - Added Type Alias StatusLevelTypes
  - Interface Fleet has a new optional parameter computeProfile
  - Interface Fleet has a new optional parameter provisioningState
  - Interface Fleet has a new optional parameter regularPriorityProfile
  - Interface Fleet has a new optional parameter spotPriorityProfile
  - Interface Fleet has a new optional parameter timeCreated
  - Interface Fleet has a new optional parameter uniqueId
  - Interface Fleet has a new optional parameter vmSizesProfile
  - Interface FleetsCreateOrUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface FleetsDeleteOptionalParams has a new optional parameter resumeFrom
  - Interface FleetsUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface VirtualMachineScaleSetDataDisk has a new optional parameter diskIopsReadWrite
  - Added Enum KnownProvisioningState
  - Added Enum KnownStatusLevelTypes
  - Enum KnownDiskControllerTypes has a new value Scsi
  - Enum KnownManagedServiceIdentityType has a new value SystemAssignedUserAssigned
  - Enum KnownNetworkApiVersion has a new value TwoThousandTwenty1101
  - Enum KnownOrigin has a new value System
  - Enum KnownOrigin has a new value User
  - Enum KnownOrigin has a new value UserSystem
  - Enum KnownStorageAccountTypes has a new value PremiumLRS
  - Enum KnownStorageAccountTypes has a new value PremiumV2LRS
  - Enum KnownStorageAccountTypes has a new value PremiumZRS
  - Enum KnownStorageAccountTypes has a new value StandardLRS
  - Enum KnownStorageAccountTypes has a new value StandardSSDLRS
  - Enum KnownStorageAccountTypes has a new value StandardSSDZRS
  - Enum KnownStorageAccountTypes has a new value UltraSSDLRS
  - Added function getContinuationToken

### Breaking Changes

  - Removed operation FleetsOperations.createOrUpdate
  - Removed operation FleetsOperations.delete
  - Removed operation FleetsOperations.update
  - Deleted Class AzureFleetClient
  - Interface Fleet no longer has parameter properties
  - Interface VirtualMachineScaleSetDataDisk no longer has parameter diskIOPSReadWrite
  - Interface VirtualMachineScaleSet has a new required parameter name
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, any> to Record<string, unknown>
  - Type of parameter tags of interface FleetUpdate is changed from Record<string, string> to {
        [propertyName: string]: string;
    }
  - Type of parameter userAssignedIdentities of interface ManagedServiceIdentity is changed from Record<string, UserAssignedIdentity | null> to {
        [propertyName: string]: UserAssignedIdentity | null;
    }
  - Type of parameter userAssignedIdentities of interface ManagedServiceIdentityUpdate is changed from Record<string, UserAssignedIdentity | null> to {
        [propertyName: string]: ComponentsQjfoe3SchemasManagedserviceidentityupdatePropertiesUserassignedidentitiesAdditionalproperties | null;
    }
  - Type of parameter tags of interface TrackedResource is changed from Record<string, string> to {
        [propertyName: string]: string;
    }
  - Type of parameter protectedSettings of interface VirtualMachineScaleSetExtensionProperties is changed from Record<string, any> to {
        [propertyName: string]: any;
    }
  - Type of parameter settings of interface VirtualMachineScaleSetExtensionProperties is changed from Record<string, any> to {
        [propertyName: string]: any;
    }
  - Removed Enum KnownResourceProvisioningState
  - Enum KnownDiskControllerTypes no longer has value SCSI
  - Enum KnownManagedServiceIdentityType no longer has value "SystemAssigned,UserAssigned"
  - Enum KnownNetworkApiVersion no longer has value "2020-11-01"
  - Enum KnownOrigin no longer has value "user,system"
  - Enum KnownOrigin no longer has value system
  - Enum KnownOrigin no longer has value user
  - Enum KnownStorageAccountTypes no longer has value Premium_LRS
  - Enum KnownStorageAccountTypes no longer has value Premium_ZRS
  - Enum KnownStorageAccountTypes no longer has value PremiumV2_LRS
  - Enum KnownStorageAccountTypes no longer has value Standard_LRS
  - Enum KnownStorageAccountTypes no longer has value StandardSSD_LRS
  - Enum KnownStorageAccountTypes no longer has value StandardSSD_ZRS
  - Enum KnownStorageAccountTypes no longer has value UltraSSD_LRS
  - Removed function restorePoller
    
    
## 1.0.0-beta.1 (2024-07-22)

### Features Added

Initial release of the Azure Compute Fleet package
