# Release History
    
## 2.0.0 (2025-04-24)
    
### Features Added

  - Added operation Fleets.beginCreateOrUpdate
  - Added operation Fleets.beginCreateOrUpdateAndWait
  - Added operation Fleets.beginDelete
  - Added operation Fleets.beginDeleteAndWait
  - Added operation Fleets.beginUpdate
  - Added operation Fleets.beginUpdateAndWait
  - Added Interface BasePriorityProfile
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
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
  - Interface Fleet has a new optional parameter additionalLocationsProfile
  - Interface Fleet has a new optional parameter computeProfile
  - Interface Fleet has a new optional parameter provisioningState
  - Interface Fleet has a new optional parameter regularPriorityProfile
  - Interface Fleet has a new optional parameter spotPriorityProfile
  - Interface Fleet has a new optional parameter timeCreated
  - Interface Fleet has a new optional parameter uniqueId
  - Interface Fleet has a new optional parameter vmAttributes
  - Interface Fleet has a new optional parameter vmSizesProfile
  - Interface FleetsCreateOrUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface FleetsDeleteOptionalParams has a new optional parameter resumeFrom
  - Interface FleetsUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface VirtualMachineScaleSetDataDisk has a new optional parameter diskIopsReadWrite
  - Added Enum KnownStatusLevelTypes
  - Enum KnownAcceleratorType has a new value Fpga
  - Enum KnownDiskControllerTypes has a new value Scsi
  - Added function getContinuationToken

### Breaking Changes

  - Removed operation FleetsOperations.createOrUpdate
  - Removed operation FleetsOperations.delete
  - Removed operation FleetsOperations.update
  - Deleted Class AzureFleetClient
  - Interface Fleet no longer has parameter properties
  - Interface VirtualMachineScaleSetDataDisk no longer has parameter diskIOPSReadWrite
  - Interface VirtualMachineScaleSet has a new required parameter name
  - Type of parameter tags of interface FleetUpdate is changed from Record<string, string> to {
        [propertyName: string]: string;
    }
  - Type of parameter userAssignedIdentities of interface ManagedServiceIdentity is changed from Record<string, UserAssignedIdentity | null> to {
        [propertyName: string]: UserAssignedIdentity | null;
    }
  - Type of parameter userAssignedIdentities of interface ManagedServiceIdentityUpdate is changed from Record<string, UserAssignedIdentity | null> to {
        [propertyName: string]: UserAssignedIdentity | null;
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
  - Enum KnownAcceleratorType no longer has value FPGA
  - Enum KnownDiskControllerTypes no longer has value SCSI
  - Removed function restorePoller
    
    
## 1.0.0 (2024-10-21)

### Features Added

This is the first stable version with the package of @azure/arm-computefleet.
