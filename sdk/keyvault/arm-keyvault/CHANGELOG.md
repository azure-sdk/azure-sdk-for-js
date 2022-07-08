# Release History
    
## 3.0.0 (2022-07-08)
    
**Features**

  - Added operation ManagedHsms.checkMhsmNameAvailability
  - Added Interface Action
  - Added Interface CheckMhsmNameAvailabilityParameters
  - Added Interface CheckMhsmNameAvailabilityResult
  - Added Interface KeyReleasePolicy
  - Added Interface KeyRotationPolicyAttributes
  - Added Interface LifetimeAction
  - Added Interface ManagedHsmsCheckMhsmNameAvailabilityOptionalParams
  - Added Interface ManagedHsmsCreateOrUpdateHeaders
  - Added Interface ManagedHsmsDeleteHeaders
  - Added Interface ManagedHSMSecurityDomainProperties
  - Added Interface ManagedHsmsPurgeDeletedHeaders
  - Added Interface ManagedHsmsUpdateHeaders
  - Added Interface RotationPolicy
  - Added Interface Trigger
  - Added Type Alias ActivationStatus
  - Added Type Alias KeyRotationPolicyActionType
  - Added Type Alias ManagedHsmsCheckMhsmNameAvailabilityResponse
  - Added Type Alias ManagedHsmsPurgeDeletedResponse
  - Interface KeyProperties has a new optional parameter releasePolicy
  - Interface KeyProperties has a new optional parameter rotationPolicy
  - Type Alias Key has a new parameter rotationPolicy
  - Type Alias Key has a new parameter releasePolicy
  - Added Enum KnownActivationStatus
  - Enum KnownJsonWebKeyOperation has a new value Release
  - Enum KnownKeyPermissions has a new value Getrotationpolicy
  - Enum KnownKeyPermissions has a new value Release
  - Enum KnownKeyPermissions has a new value Rotate
  - Enum KnownKeyPermissions has a new value Setrotationpolicy

**Breaking Changes**

  - Interface MhsmPrivateEndpointConnectionsDeleteHeaders no longer has parameter retryAfter
    
    
## 2.0.0 (2022-01-17)

The package of @azure/arm-keyvault is using our next generation design principles since version 2.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
