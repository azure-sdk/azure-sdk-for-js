# Release History
    
## 3.0.0-beta.1 (2024-03-20)
    
**Features**

  - Added Interface ValidateResult
  - Added Type Alias LinkerStatus
  - Interface LinkerPatch has a new optional parameter targetId
  - Interface LinkerResource has a new optional parameter targetId
  - Interface SecretAuthInfo has a new optional parameter secret
  - Added Enum KnownLinkerStatus

**Breaking Changes**

  - Interface LinkerPatch no longer has parameter scope
  - Interface LinkerPatch no longer has parameter targetService
  - Interface LinkerResource no longer has parameter scope
  - Interface LinkerResource no longer has parameter targetService
  - Interface SecretAuthInfo no longer has parameter secretInfo
  - Parameter clientId of interface UserAssignedIdentityAuthInfo is now required
  - Parameter subscriptionId of interface UserAssignedIdentityAuthInfo is now required
  - Removed Enum KnownAzureResourceType
  - Removed Enum KnownSecretType
  - Removed Enum KnownTargetServiceType
  - Removed Enum KnownValidationResultStatus
    
    
## 2.1.0 (2022-12-16)
    
**Features**

  - Added Interface AzureKeyVaultProperties
  - Added Interface AzureResource
  - Added Interface ConfluentBootstrapServer
  - Added Interface ConfluentSchemaRegistry
  - Added Interface KeyVaultSecretReferenceSecretInfo
  - Added Interface KeyVaultSecretUriSecretInfo
  - Added Interface LinkerResource
  - Added Interface ProxyResource
  - Added Interface SecretAuthInfo
  - Added Interface ServicePrincipalCertificateAuthInfo
  - Added Interface ServicePrincipalSecretAuthInfo
  - Added Interface SystemAssignedIdentityAuthInfo
  - Added Interface UserAssignedIdentityAuthInfo
  - Added Interface ValueSecretInfo
  - Added function getContinuationToken
    
    
## 2.0.0 (2022-05-16)
    
**Features**

  - Added Interface ValidateOperationResult
  - Enum KnownValidationResultStatus has a new value Failure

**Breaking Changes**

  - Enum KnownValidationResultStatus no longer has value Failed
    
    
## 1.0.0 (2022-04-27)

The package of @azure/arm-servicelinker is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
