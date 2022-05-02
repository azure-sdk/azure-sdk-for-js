# Release History
    
## 2.0.0 (2022-05-02)
    
**Features**

  - Added Interface ApiError
  - Added Interface ApiErrorBase
  - Added Interface InnerError
  - Interface Resource has a new optional parameter tags
  - Add parameters of Resource to TypeAlias ImageTemplate

**Breaking Changes**

  - Interface ImageTemplateVmProfile no longer has parameter userAssignedIdentities
  - Interface VirtualNetworkConfig no longer has parameter proxyVmSize
  - Interface Resource has a new required parameter location
  - Delete parameters of TrackedResource in TypeAlias ImageTemplate
  - Type Alias ImageTemplate no longer has parameter systemData
  - Type Alias ImageTemplatePlatformImageSource no longer has parameter exactVersion
  - Removed Enum KnownCreatedByType
    
## 1.0.2 (2022-04-26)

**Features**

  - Bug fix

## 1.0.1 (2022-01-11)

**Feature**

  - Bump version
    
## 1.0.0 (2022-01-10)

The package of @azure/arm-imagebuilder is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
