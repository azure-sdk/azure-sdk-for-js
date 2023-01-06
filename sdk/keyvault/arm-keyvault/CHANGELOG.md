# Release History
    
## 3.0.0-beta.1 (2023-01-06)
    
**Features**

  - Added Interface Action
  - Added Interface Key
  - Added Interface KeyReleasePolicy
  - Added Interface KeyRotationPolicyAttributes
  - Added Interface LifetimeAction
  - Added Interface ManagedHsm
  - Added Interface ManagedHsmsDeleteHeaders
  - Added Interface ManagedHsmsPurgeDeletedHeaders
  - Added Interface ManagedHsmsUpdateHeaders
  - Added Interface MhsmPrivateEndpointConnection
  - Added Interface MhsmPrivateLinkResource
  - Added Interface PrivateEndpointConnection
  - Added Interface PrivateLinkResource
  - Added Interface RotationPolicy
  - Added Interface Secret
  - Added Interface SecretAttributes
  - Added Interface Trigger
  - Added Type Alias KeyRotationPolicyActionType
  - Added Type Alias ManagedHsmsPurgeDeletedResponse
  - Added Type Alias ResourceManagerApiVersions
  - Interface KeyProperties has a new optional parameter releasePolicy
  - Interface KeyProperties has a new optional parameter rotationPolicy
  - Interface MhsmPrivateEndpointConnectionItem has a new optional parameter etag
  - Interface MhsmPrivateEndpointConnectionItem has a new optional parameter id
  - Enum KnownJsonWebKeyOperation has a new value Release
  - Enum KnownKeyPermissions has a new value Getrotationpolicy
  - Enum KnownKeyPermissions has a new value Release
  - Enum KnownKeyPermissions has a new value Rotate
  - Enum KnownKeyPermissions has a new value Setrotationpolicy
  - Added function getContinuationToken

**Breaking Changes**

  - Operation Vaults.list has a new signature
  - Interface ManagedHsmsListByResourceGroupNextOptionalParams no longer has parameter top
  - Interface ManagedHsmsListBySubscriptionNextOptionalParams no longer has parameter top
  - Interface SecretsListNextOptionalParams no longer has parameter top
  - Interface VaultsListByResourceGroupNextOptionalParams no longer has parameter top
  - Interface VaultsListBySubscriptionNextOptionalParams no longer has parameter top
  - Interface VaultsListNextOptionalParams no longer has parameter top
    
    
## 2.0.0 (2022-01-17)

The package of @azure/arm-keyvault is using our next generation design principles since version 2.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
