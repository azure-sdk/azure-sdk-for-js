# Release History
    
## 3.0.0 (2022-12-14)
    
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
  - Added Interface ValidateResult
  - Added Interface ValueSecretInfo
  - Added Type Alias Type
  - Added Type Alias ValidationItemResult
  - Added Enum KnownType
  - Added Enum KnownValidationItemResult
  - Added function getContinuationToken

**Breaking Changes**

  - Type of parameter result of interface ValidationResultItem is changed from ValidationResultStatus to ValidationItemResult
  - Removed Enum KnownAzureResourceType
  - Removed Enum KnownTargetServiceType
  - Removed Enum KnownValidationResultStatus
    
    
## 2.0.0 (2022-05-16)
    
**Features**

  - Added Interface ValidateOperationResult
  - Enum KnownValidationResultStatus has a new value Failure

**Breaking Changes**

  - Enum KnownValidationResultStatus no longer has value Failed
    
    
## 1.0.0 (2022-04-27)

The package of @azure/arm-servicelinker is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
