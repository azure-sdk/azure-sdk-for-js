# Release History
    
## 3.0.0-beta.1 (2022-06-08)
    
**Features**

  - Added Interface MicrosoftServiceLinkerOptionalParams
  - Added Interface ValidateResult
  - Added Class MicrosoftServiceLinker
  - Added Type Alias Type
  - Added Type Alias ValidationItemResult
  - Type Alias SecretAuthInfo has a new parameter secret
  - Added Enum KnownType
  - Added Enum KnownValidationItemResult

**Breaking Changes**

  - Deleted Class ServiceLinkerManagementClient
  - Type Alias SecretAuthInfo no longer has parameter secretInfo
  - Removed Enum KnownAzureResourceType
  - Removed Enum KnownSecretType
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
