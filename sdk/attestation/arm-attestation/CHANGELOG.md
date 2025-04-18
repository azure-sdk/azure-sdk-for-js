# Release History
    
## 2.2.0 (2025-04-18)
    
### Features Added

  - Added operation group PrivateLinkResources
  - Added Interface AttestationServicePatchSpecificParams
  - Added Interface LogSpecification
  - Added Interface OperationProperties
  - Added Interface PrivateLinkResource
  - Added Interface PrivateLinkResourceListResult
  - Added Interface PrivateLinkResourcesListByProviderOptionalParams
  - Added Interface ServiceSpecification
  - Added Type Alias PrivateLinkResourcesListByProviderResponse
  - Added Type Alias PublicNetworkAccessType
  - Added Type Alias TpmAttestationAuthenticationType
  - Interface AttestationProvider has a new optional parameter publicNetworkAccess
  - Interface AttestationProvider has a new optional parameter tpmAttestationAuthentication
  - Interface AttestationServiceCreationSpecificParams has a new optional parameter publicNetworkAccess
  - Interface AttestationServiceCreationSpecificParams has a new optional parameter tpmAttestationAuthentication
  - Interface AttestationServicePatchParams has a new optional parameter properties
  - Interface OperationsDefinition has a new optional parameter properties
  - Added Enum KnownPublicNetworkAccessType
  - Added Enum KnownTpmAttestationAuthenticationType
    
    
## 2.1.0 (2022-11-16)
    
### Features Added

  - Added Interface AttestationProvider
  - Added Interface PrivateEndpointConnection
  - Added Interface TrackedResource
    
## 2.0.2 (2022-10-08)

### Bugs Fixed

  -  revert credential scopes

## 2.0.1 (2022-09-30)

### Bugs Fixed

  -  fix better user experience of credential scopes in government cloud

## 2.0.0 (2021-12-30)

The package of @azure/arm-attestation is using our next generation design principles since version 2.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
