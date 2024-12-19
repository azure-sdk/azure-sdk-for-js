# Release History
    
## 3.0.0 (2024-12-19)
    
### Features Added

  - Added operation FileSystemsOperations.createOrUpdate
  - Added operation FileSystemsOperations.delete
  - Added Interface FileSystemResourceProperties
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface RestorePollerOptions
  - Added Interface StorageClientOptionalParams
  - Added Class StorageClient
  - Added Type Alias ContinuablePage
  - Interface FileSystemResource has a new optional parameter properties
  - Added Enum KnownVersions
  - Enum KnownManagedServiceIdentityType has a new value "SystemAssigned,UserAssigned"
  - Enum KnownOrigin has a new value "user,system"
  - Enum KnownOrigin has a new value system
  - Enum KnownOrigin has a new value user
  - Added function restorePoller

### Breaking Changes

  - Removed operation FileSystems.beginCreateOrUpdate
  - Removed operation FileSystems.beginCreateOrUpdateAndWait
  - Removed operation FileSystems.beginDelete
  - Removed operation FileSystems.beginDeleteAndWait
  - Deleted Class QumuloStorage
  - Interface FileSystemResource no longer has parameter adminPassword
  - Interface FileSystemResource no longer has parameter availabilityZone
  - Interface FileSystemResource no longer has parameter clusterLoginUrl
  - Interface FileSystemResource no longer has parameter delegatedSubnetId
  - Interface FileSystemResource no longer has parameter marketplaceDetails
  - Interface FileSystemResource no longer has parameter privateIPs
  - Interface FileSystemResource no longer has parameter provisioningState
  - Interface FileSystemResource no longer has parameter storageSku
  - Interface FileSystemResource no longer has parameter userDetails
  - Interface FileSystemsCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface FileSystemsDeleteOptionalParams no longer has parameter resumeFrom
  - Type of parameter tags of interface FileSystemResourceUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter userAssignedIdentities of interface ManagedServiceIdentity is changed from {
        [propertyName: string]: UserAssignedIdentity;
    } to Record<string, UserAssignedIdentity>
  - Type of parameter tags of interface TrackedResource is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Enum KnownManagedServiceIdentityType no longer has value SystemAssignedUserAssigned
  - Enum KnownOrigin no longer has value System
  - Enum KnownOrigin no longer has value User
  - Enum KnownOrigin no longer has value UserSystem
  - Removed function getContinuationToken
    
    
## 2.0.0 (2024-07-17)
    
### Features Added

  - Added Interface FileSystemsCreateOrUpdateHeaders
  - Added Interface FileSystemsDeleteHeaders
  - Added Type Alias FileSystemsDeleteResponse
  - Interface MarketplaceDetails has a new optional parameter termUnit
  - Added Enum KnownMarketplaceSubscriptionStatus
  - Added Enum KnownProvisioningState

### Breaking Changes

  - Interface FileSystemResource no longer has parameter initialCapacity
  - Interface FileSystemResourceUpdateProperties no longer has parameter clusterLoginUrl
  - Interface FileSystemResourceUpdateProperties no longer has parameter privateIPs
  - Type of parameter storageSku of interface FileSystemResource is changed from StorageSku to string
    
    
## 1.0.0 (2023-05-29)

The package of @azure/arm-qumulo is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
