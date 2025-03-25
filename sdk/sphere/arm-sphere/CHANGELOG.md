# Release History
    
## 2.0.0 (2025-03-25)
    
### Features Added

  - Added operation CatalogsOperations.createOrUpdate
  - Added operation CatalogsOperations.delete
  - Added operation CatalogsOperations.uploadImage
  - Added operation DeploymentsOperations.createOrUpdate
  - Added operation DeploymentsOperations.delete
  - Added operation DeviceGroupsOperations.claimDevices
  - Added operation DeviceGroupsOperations.createOrUpdate
  - Added operation DeviceGroupsOperations.delete
  - Added operation DeviceGroupsOperations.update
  - Added operation DevicesOperations.createOrUpdate
  - Added operation DevicesOperations.delete
  - Added operation DevicesOperations.generateCapabilityImage
  - Added operation DevicesOperations.update
  - Added operation ImagesOperations.createOrUpdate
  - Added operation ImagesOperations.delete
  - Added operation ProductsOperations.createOrUpdate
  - Added operation ProductsOperations.delete
  - Added operation ProductsOperations.generateDefaultDeviceGroups
  - Added operation ProductsOperations.update
  - Added Interface AzureSphereClientOptionalParams
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface RestorePollerOptions
  - Added Class AzureSphereClient
  - Added Type Alias ContinuablePage
  - Added Enum KnownVersions
  - Added function restorePoller

### Breaking Changes

  - Removed operation Catalogs.beginCreateOrUpdate
  - Removed operation Catalogs.beginCreateOrUpdateAndWait
  - Removed operation Catalogs.beginDelete
  - Removed operation Catalogs.beginDeleteAndWait
  - Removed operation Catalogs.beginUploadImage
  - Removed operation Catalogs.beginUploadImageAndWait
  - Removed operation Deployments.beginCreateOrUpdate
  - Removed operation Deployments.beginCreateOrUpdateAndWait
  - Removed operation Deployments.beginDelete
  - Removed operation Deployments.beginDeleteAndWait
  - Removed operation DeviceGroups.beginClaimDevices
  - Removed operation DeviceGroups.beginClaimDevicesAndWait
  - Removed operation DeviceGroups.beginCreateOrUpdate
  - Removed operation DeviceGroups.beginCreateOrUpdateAndWait
  - Removed operation DeviceGroups.beginDelete
  - Removed operation DeviceGroups.beginDeleteAndWait
  - Removed operation DeviceGroups.beginUpdate
  - Removed operation DeviceGroups.beginUpdateAndWait
  - Removed operation Devices.beginCreateOrUpdate
  - Removed operation Devices.beginCreateOrUpdateAndWait
  - Removed operation Devices.beginDelete
  - Removed operation Devices.beginDeleteAndWait
  - Removed operation Devices.beginGenerateCapabilityImage
  - Removed operation Devices.beginGenerateCapabilityImageAndWait
  - Removed operation Devices.beginUpdate
  - Removed operation Devices.beginUpdateAndWait
  - Removed operation Images.beginCreateOrUpdate
  - Removed operation Images.beginCreateOrUpdateAndWait
  - Removed operation Images.beginDelete
  - Removed operation Images.beginDeleteAndWait
  - Removed operation Products.beginCreateOrUpdate
  - Removed operation Products.beginCreateOrUpdateAndWait
  - Removed operation Products.beginDelete
  - Removed operation Products.beginDeleteAndWait
  - Removed operation Products.beginUpdate
  - Removed operation Products.beginUpdateAndWait
  - Removed operation Products.listGenerateDefaultDeviceGroups
  - Deleted Class AzureSphereManagementClient
  - Interface CatalogsCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface CatalogsDeleteOptionalParams no longer has parameter resumeFrom
  - Interface CatalogsUploadImageOptionalParams no longer has parameter resumeFrom
  - Interface DeploymentsCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface DeploymentsDeleteOptionalParams no longer has parameter resumeFrom
  - Interface DeviceGroupsClaimDevicesOptionalParams no longer has parameter resumeFrom
  - Interface DeviceGroupsCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface DeviceGroupsDeleteOptionalParams no longer has parameter resumeFrom
  - Interface DeviceGroupsUpdateOptionalParams no longer has parameter resumeFrom
  - Interface DevicesCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface DevicesDeleteOptionalParams no longer has parameter resumeFrom
  - Interface DevicesGenerateCapabilityImageOptionalParams no longer has parameter resumeFrom
  - Interface DevicesUpdateOptionalParams no longer has parameter resumeFrom
  - Interface ImagesCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface ImagesDeleteOptionalParams no longer has parameter resumeFrom
  - Interface ProductsCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface ProductsDeleteOptionalParams no longer has parameter resumeFrom
  - Interface ProductsUpdateOptionalParams no longer has parameter resumeFrom
  - Type of parameter tags of interface CatalogUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, unknown> to Record<string, any>
  - Type of parameter tags of interface TrackedResource is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Removed function getContinuationToken
    
    
## 1.0.0 (2024-03-26)

The package of @azure/arm-sphere is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart ).
