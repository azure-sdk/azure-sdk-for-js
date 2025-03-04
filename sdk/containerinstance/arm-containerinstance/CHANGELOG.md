# Release History
    
## 10.0.0-beta.1 (2025-03-04)
Compared with version 9.1.0
    
### Features Added

  - Added operation group CGProfile
  - Added operation group CGProfiles
  - Added operation group NGroups
  - Added Interface ApiEntityReference
  - Added Interface ApplicationGateway
  - Added Interface ApplicationGatewayBackendAddressPool
  - Added Interface CGProfileCreateOrUpdateHeaders
  - Added Interface CGProfileCreateOrUpdateOptionalParams
  - Added Interface CGProfileDeleteHeaders
  - Added Interface CGProfileDeleteOptionalParams
  - Added Interface CGProfileGetByRevisionNumberOptionalParams
  - Added Interface CGProfileGetOptionalParams
  - Added Interface CGProfileListAllRevisionsNextOptionalParams
  - Added Interface CGProfileListAllRevisionsOptionalParams
  - Added Interface CGProfilesListByResourceGroupNextOptionalParams
  - Added Interface CGProfilesListByResourceGroupOptionalParams
  - Added Interface CGProfilesListBySubscriptionNextOptionalParams
  - Added Interface CGProfilesListBySubscriptionOptionalParams
  - Added Interface CGProfileUpdateHeaders
  - Added Interface CGProfileUpdateOptionalParams
  - Added Interface ContainerGroupProfile
  - Added Interface ContainerGroupProfileListResult
  - Added Interface ContainerGroupProfilePatch
  - Added Interface ContainerGroupProfileStub
  - Added Interface ElasticProfile
  - Added Interface ElasticProfileContainerGroupNamingPolicy
  - Added Interface ElasticProfileContainerGroupNamingPolicyGuidNamingPolicy
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface FileShare
  - Added Interface FileShareProperties
  - Added Interface IdentityAccessControl
  - Added Interface IdentityAcls
  - Added Interface ListResultContainerGroup
  - Added Interface ListResultContainerGroupProperties
  - Added Interface LoadBalancer
  - Added Interface LoadBalancerBackendAddressPool
  - Added Interface NetworkProfile
  - Added Interface NGroup
  - Added Interface NGroupCGPropertyContainer
  - Added Interface NGroupCGPropertyContainerProperties
  - Added Interface NGroupCGPropertyVolume
  - Added Interface NGroupContainerGroupProperties
  - Added Interface NGroupIdentity
  - Added Interface NGroupsCreateOrUpdateHeaders
  - Added Interface NGroupsCreateOrUpdateOptionalParams
  - Added Interface NGroupsDeleteHeaders
  - Added Interface NGroupsDeleteOptionalParams
  - Added Interface NGroupsGetOptionalParams
  - Added Interface NGroupSkus
  - Added Interface NGroupsListByResourceGroupNextOptionalParams
  - Added Interface NGroupsListByResourceGroupOptionalParams
  - Added Interface NGroupsListNextOptionalParams
  - Added Interface NGroupsListOptionalParams
  - Added Interface NGroupsListResult
  - Added Interface NGroupsRestartHeaders
  - Added Interface NGroupsRestartOptionalParams
  - Added Interface NGroupsSkusList
  - Added Interface NGroupsStartHeaders
  - Added Interface NGroupsStartOptionalParams
  - Added Interface NGroupsStopOptionalParams
  - Added Interface NGroupsUpdateHeaders
  - Added Interface NGroupsUpdateOptionalParams
  - Added Interface PlacementProfile
  - Added Interface SecretReference
  - Added Interface StorageProfile
  - Added Interface SystemData
  - Added Interface UpdateProfile
  - Added Interface UpdateProfileRollingUpdateProfile
  - Added Type Alias AzureFileShareAccessTier
  - Added Type Alias AzureFileShareAccessType
  - Added Type Alias CGProfileCreateOrUpdateResponse
  - Added Type Alias CGProfileDeleteResponse
  - Added Type Alias CGProfileGetByRevisionNumberResponse
  - Added Type Alias CGProfileGetResponse
  - Added Type Alias CGProfileListAllRevisionsNextResponse
  - Added Type Alias CGProfileListAllRevisionsResponse
  - Added Type Alias CGProfilesListByResourceGroupNextResponse
  - Added Type Alias CGProfilesListByResourceGroupResponse
  - Added Type Alias CGProfilesListBySubscriptionNextResponse
  - Added Type Alias CGProfilesListBySubscriptionResponse
  - Added Type Alias CGProfileUpdateResponse
  - Added Type Alias ContainerGroupProvisioningState
  - Added Type Alias CreatedByType
  - Added Type Alias IdentityAccessLevel
  - Added Type Alias NGroupProvisioningState
  - Added Type Alias NGroupsCreateOrUpdateResponse
  - Added Type Alias NGroupsDeleteResponse
  - Added Type Alias NGroupsGetResponse
  - Added Type Alias NGroupsListByResourceGroupNextResponse
  - Added Type Alias NGroupsListByResourceGroupResponse
  - Added Type Alias NGroupsListNextResponse
  - Added Type Alias NGroupsListResponse
  - Added Type Alias NGroupsRestartResponse
  - Added Type Alias NGroupsStartResponse
  - Added Type Alias NGroupsUpdateResponse
  - Added Type Alias NGroupUpdateMode
  - Interface AzureFileVolume has a new optional parameter storageAccountKeyReference
  - Interface ContainerGroupProperties has a new optional parameter identityAcls
  - Interface ContainerGroupProperties has a new optional parameter secretReferences
  - Interface EnvironmentVariable has a new optional parameter secureValueReference
  - Interface ImageRegistryCredential has a new optional parameter passwordReference
  - Interface Volume has a new optional parameter secretReference
  - Added Enum KnownContainerGroupProvisioningState
  - Added Enum KnownCreatedByType
  - Added Enum KnownIdentityAccessLevel
  - Added Enum KnownNGroupProvisioningState
  - Added Enum KnownNGroupUpdateMode
  - Enum KnownContainerGroupSku has a new value NotSpecified

### Breaking Changes

  - Type of parameter value of interface ContainerGroupListResult is changed from ContainerGroup[] to ListResultContainerGroup[]
    
    
## 9.2.0-beta.1 (2024-10-18)
Compared with version 9.1.0
    
### Features Added

  - Added operation group ContainerGroupProfileOperations
  - Added operation group ContainerGroupProfiles
  - Added Interface ConfigMap
  - Added Interface ContainerGroupProfile
  - Added Interface ContainerGroupProfileGetByRevisionNumberOptionalParams
  - Added Interface ContainerGroupProfileListAllRevisionsNextOptionalParams
  - Added Interface ContainerGroupProfileListAllRevisionsOptionalParams
  - Added Interface ContainerGroupProfileListResult
  - Added Interface ContainerGroupProfilePatch
  - Added Interface ContainerGroupProfileProperties
  - Added Interface ContainerGroupProfileReferenceDefinition
  - Added Interface ContainerGroupProfilesCreateOrUpdateOptionalParams
  - Added Interface ContainerGroupProfilesDeleteOptionalParams
  - Added Interface ContainerGroupProfilesGetOptionalParams
  - Added Interface ContainerGroupProfilesListByResourceGroupNextOptionalParams
  - Added Interface ContainerGroupProfilesListByResourceGroupOptionalParams
  - Added Interface ContainerGroupProfilesListNextOptionalParams
  - Added Interface ContainerGroupProfilesListOptionalParams
  - Added Interface ContainerGroupProfilesPatchOptionalParams
  - Added Interface StandbyPoolProfileDefinition
  - Added Type Alias ContainerGroupProfileGetByRevisionNumberResponse
  - Added Type Alias ContainerGroupProfileListAllRevisionsNextResponse
  - Added Type Alias ContainerGroupProfileListAllRevisionsResponse
  - Added Type Alias ContainerGroupProfilesCreateOrUpdateResponse
  - Added Type Alias ContainerGroupProfilesGetResponse
  - Added Type Alias ContainerGroupProfilesListByResourceGroupNextResponse
  - Added Type Alias ContainerGroupProfilesListByResourceGroupResponse
  - Added Type Alias ContainerGroupProfilesListNextResponse
  - Added Type Alias ContainerGroupProfilesListResponse
  - Added Type Alias ContainerGroupProfilesPatchResponse
  - Interface Container has a new optional parameter configMap
  - Interface ContainerGroupProperties has a new optional parameter containerGroupProfile
  - Interface ContainerGroupProperties has a new optional parameter isCreatedFromStandbyPool
  - Interface ContainerGroupProperties has a new optional parameter standbyPoolProfile
    
    
## 9.1.0 (2023-04-24)
    
### Features Added

  - Added Interface ConfidentialComputeProperties
  - Added Interface DeploymentExtensionSpec
  - Added Interface SecurityContextCapabilitiesDefinition
  - Added Interface SecurityContextDefinition
  - Added Type Alias ContainerGroupPriority
  - Interface Container has a new optional parameter securityContext
  - Interface ContainerGroupProperties has a new optional parameter confidentialComputeProperties
  - Interface ContainerGroupProperties has a new optional parameter extensions
  - Interface ContainerGroupProperties has a new optional parameter priority
  - Interface EncryptionProperties has a new optional parameter identity
  - Interface InitContainerDefinition has a new optional parameter securityContext
  - Added Enum KnownContainerGroupPriority
  - Enum KnownContainerGroupSku has a new value Confidential
  - Added function getContinuationToken
    
    
## 9.0.0 (2022-08-30)
    
### Features Added

  - Added operation group SubnetServiceAssociationLink
  - Added Interface ContainerGroupProperties
  - Added Interface SubnetServiceAssociationLinkDeleteOptionalParams
  - Added Interface UserAssignedIdentities
  - Added Type Alias DnsNameLabelReusePolicy
  - Interface IpAddress has a new optional parameter autoGeneratedDomainNameLabelScope
  - Interface Usage has a new optional parameter id
  - Class ContainerInstanceManagementClient has a new parameter subnetServiceAssociationLink
  - Added Enum KnownDnsNameLabelReusePolicy

### Breaking Changes

  - Interface ContainerGroup no longer has parameter containers
  - Interface ContainerGroup no longer has parameter diagnostics
  - Interface ContainerGroup no longer has parameter dnsConfig
  - Interface ContainerGroup no longer has parameter encryptionProperties
  - Interface ContainerGroup no longer has parameter identity
  - Interface ContainerGroup no longer has parameter imageRegistryCredentials
  - Interface ContainerGroup no longer has parameter initContainers
  - Interface ContainerGroup no longer has parameter instanceView
  - Interface ContainerGroup no longer has parameter ipAddress
  - Interface ContainerGroup no longer has parameter osType
  - Interface ContainerGroup no longer has parameter provisioningState
  - Interface ContainerGroup no longer has parameter restartPolicy
  - Interface ContainerGroup no longer has parameter sku
  - Interface ContainerGroup no longer has parameter subnetIds
  - Interface ContainerGroup no longer has parameter volumes
  - Interface IpAddress no longer has parameter dnsNameLabelReusePolicy
  - Removed Enum KnownAutoGeneratedDomainNameLabelScope
    
    
## 8.2.0 (2022-07-11)
    
### Features Added

  - Added Interface ContainerGroup
    
    
## 8.1.0 (2022-04-06)
    
### Features Added

  - Added Type Alias AutoGeneratedDomainNameLabelScope
  - Interface IpAddress has a new optional parameter dnsNameLabelReusePolicy
  - Added Enum KnownAutoGeneratedDomainNameLabelScope
    
    
## 8.0.0 (2022-01-04)

The package of @azure/arm-containerinstance is using our next generation design principles since version 8.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
