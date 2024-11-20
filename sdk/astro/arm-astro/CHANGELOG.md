# Release History
    
## 1.0.0-beta.2 (2024-11-20)
Compared with version 1.0.0-beta.1
    
### Features Added

  - Added operation OrganizationsOperations.createOrUpdate
  - Added operation OrganizationsOperations.delete
  - Added operation OrganizationsOperations.getResources
  - Added operation OrganizationsOperations.getRoles
  - Added operation OrganizationsOperations.getUsers
  - Added operation OrganizationsOperations.manageRoles
  - Added operation OrganizationsOperations.removeUser
  - Added operation OrganizationsOperations.update
  - Added Interface AstroClientOptionalParams
  - Added Interface GetResourcesRequest
  - Added Interface GetResourcesSuccessResponse
  - Added Interface GetRolesRequest
  - Added Interface GetRolesSuccessResponse
  - Added Interface GetUsersRequest
  - Added Interface GetUsersSuccessResponse
  - Added Interface ManagedServiceIdentityV4
  - Added Interface ManageRolesModel
  - Added Interface MarketplaceDetails
  - Added Interface OfferDetails
  - Added Interface OrganizationProperties
  - Added Interface OrganizationsGetResourcesOptionalParams
  - Added Interface OrganizationsGetRolesOptionalParams
  - Added Interface OrganizationsGetUsersOptionalParams
  - Added Interface OrganizationsManageRolesOptionalParams
  - Added Interface OrganizationsRemoveUserOptionalParams
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageInfo
  - Added Interface PageSettings
  - Added Interface PartnerOrganizationProperties
  - Added Interface PartnerResource
  - Added Interface RemoveUserRequest
  - Added Interface RestorePollerOptions
  - Added Interface Role
  - Added Interface SingleSignOnProperties
  - Added Interface User
  - Added Interface UserDetails
  - Added Class AstroClient
  - Added Type Alias ContinuablePage
  - Added Type Alias RenewalMode
  - Interface OrganizationResourceUpdateProperties has a new optional parameter marketplace
  - Added Enum KnownRenewalMode
  - Enum KnownManagedServiceIdentityType has a new value SystemAndUserAssigned
  - Enum KnownOrigin has a new value "user,system"
  - Enum KnownOrigin has a new value system
  - Enum KnownOrigin has a new value user
  - Enum KnownVersions has a new value v1
  - Enum KnownVersions has a new value v1_preview
  - Enum KnownVersions has a new value v2024_08_27
  - Enum KnownVersions has a new value v2024_08_27_preview
  - Enum KnownVersions has a new value v2024_11_01_preview
  - Added function restorePoller

### Breaking Changes

  - Removed operation Organizations.beginCreateOrUpdate
  - Removed operation Organizations.beginCreateOrUpdateAndWait
  - Removed operation Organizations.beginDelete
  - Removed operation Organizations.beginDeleteAndWait
  - Removed operation Organizations.beginUpdate
  - Removed operation Organizations.beginUpdateAndWait
  - Deleted Class AstroManagementClient
  - Interface OrganizationsCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface OrganizationsDeleteOptionalParams no longer has parameter resumeFrom
  - Interface OrganizationsUpdateOptionalParams no longer has parameter resumeFrom
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, unknown> to Record<string, any>
  - Type of parameter identity of interface OrganizationResource is changed from ManagedServiceIdentity to ManagedServiceIdentityV4
  - Type of parameter properties of interface OrganizationResource is changed from LiftrBaseDataOrganizationProperties to OrganizationProperties
  - Type of parameter identity of interface OrganizationResourceUpdate is changed from ManagedServiceIdentity to ManagedServiceIdentityV4
  - Type of parameter tags of interface OrganizationResourceUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter partnerOrganizationProperties of interface OrganizationResourceUpdateProperties is changed from LiftrBaseDataPartnerOrganizationPropertiesUpdate to PartnerOrganizationProperties
  - Type of parameter user of interface OrganizationResourceUpdateProperties is changed from LiftrBaseUserDetailsUpdate to UserDetails
  - Type of parameter tags of interface TrackedResource is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Enum KnownManagedServiceIdentityType no longer has value SystemAssignedUserAssigned
  - Enum KnownOrigin no longer has value System
  - Enum KnownOrigin no longer has value User
  - Enum KnownOrigin no longer has value UserSystem
  - Enum KnownVersions no longer has value V1Preview
  - Removed function getContinuationToken
    
    
## 1.0.0-beta.1 (2024-02-07)

The package of @azure/arm-astro is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart ).
