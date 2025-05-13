# Release History
    
## 6.0.0-beta.2 (2025-05-13)
Compared with version 5.1.0
    
### Features Added

  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface IotDpsResourceCreateOrUpdateHeaders
  - Added Interface IotDpsResourceCreateOrUpdatePrivateEndpointConnectionHeaders
  - Added Interface IotDpsResourceDeleteHeaders
  - Added Interface IotDpsResourceUpdateHeaders
  - Added Interface ManagedServiceIdentity
  - Added Interface ProxyResource
  - Added Interface TrackedResource
  - Added Interface UserAssignedIdentity
  - Added Type Alias IotHubAuthenticationType
  - Added Type Alias ManagedServiceIdentityType
  - Interface IotDpsPropertiesDescription has a new optional parameter portalOperationsHostName
  - Interface IotHubDefinitionDescription has a new optional parameter authenticationType
  - Interface IotHubDefinitionDescription has a new optional parameter selectedUserAssignedIdentityResourceId
  - Interface ProvisioningServiceDescription has a new optional parameter identity
  - Interface Resource has a new optional parameter systemData
  - Add parameters of IotDpsResourceUpdateHeaders to TypeAlias IotDpsResourceUpdateResponse
  - Added Enum KnownIotHubAuthenticationType
  - Added Enum KnownManagedServiceIdentityType

### Breaking Changes

  - Interface CertificateResponse no longer has parameter id
  - Interface CertificateResponse no longer has parameter name
  - Interface CertificateResponse no longer has parameter systemData
  - Interface CertificateResponse no longer has parameter type
  - Interface GroupIdInformation no longer has parameter id
  - Interface GroupIdInformation no longer has parameter name
  - Interface GroupIdInformation no longer has parameter type
  - Interface IotDpsResourceDeletePrivateEndpointConnectionHeaders no longer has parameter azureAsyncOperation
  - Interface PrivateEndpointConnection no longer has parameter id
  - Interface PrivateEndpointConnection no longer has parameter name
  - Interface PrivateEndpointConnection no longer has parameter systemData
  - Interface PrivateEndpointConnection no longer has parameter type
  - Interface ProvisioningServiceDescription no longer has parameter systemData
  - Interface Resource no longer has parameter location
  - Interface Resource no longer has parameter tags
  - Parameter value of interface IotDpsSkuDefinitionListResult is now required
  - Parameter value of interface OperationListResult is now required
  - Parameter value of interface ProvisioningServiceDescriptionListResult is now required
  - Parameter value of interface SharedAccessSignatureAuthorizationRuleListResult is now required
  - Type of parameter code of interface ErrorDetails is changed from string to number
  - Type of parameter retryAfter of interface IotDpsResourceDeletePrivateEndpointConnectionHeaders is changed from string to number
    
    
## 6.0.0-beta.1 (2023-06-07)
    
### Features Added

  - Added Interface ManagedServiceIdentity
  - Added Interface UserAssignedIdentity
  - Added Type Alias ManagedServiceIdentityType
  - Interface IotDpsPropertiesDescription has a new optional parameter portalOperationsHostName
  - Interface ProvisioningServiceDescription has a new optional parameter identity
  - Interface Resource has a new optional parameter resourcegroup
  - Interface Resource has a new optional parameter subscriptionid
  - Added Enum KnownManagedServiceIdentityType

### Breaking Changes

  - Type of parameter code of interface ErrorDetails is changed from string to number
    
    
## 5.1.0 (2023-01-05)
    
### Features Added

  - Added Interface ProvisioningServiceDescription
  - Added function getContinuationToken
    
## 5.0.1 (2022-04-27)
    
### Features Added

  -  Bug fix
    
## 5.0.0 (2022-04-25)
    
### Features Added

  - Added Interface ErrorMessage
  - Added Interface IotDpsResourceDeletePrivateEndpointConnectionHeaders

### Breaking Changes

  - Operation DpsCertificate.createOrUpdate has a new signature
    
    
## 4.1.1 (2022-04-18)

**features**

  - bug fix

## 4.1.0 (2022-01-24)
    
### Features Added

  - Added Interface SystemData
  - Added Type Alias CreatedByType
  - Interface CertificateResponse has a new optional parameter systemData
  - Interface IotDpsPropertiesDescription has a new optional parameter enableDataResidency
  - Interface PrivateEndpointConnection has a new optional parameter systemData
  - Type Alias ProvisioningServiceDescription has a new parameter systemData
  - Added Enum KnownCreatedByType
    
    
## 4.0.0 (2022-01-12)

The package of @azure/arm-deviceprovisioningservices is using our next generation design principles since version 4.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
