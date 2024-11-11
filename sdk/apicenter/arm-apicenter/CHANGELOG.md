# Release History
    
## 2.0.0-beta.1 (2024-11-11)
Compared with version 1.0.0
    
### Features Added

  - Added operation group ApiSources
  - Added operation group DeletedServices
  - Added Interface ApiSource
  - Added Interface ApiSourceListResult
  - Added Interface ApiSourcesCreateOrUpdateHeaders
  - Added Interface ApiSourcesCreateOrUpdateOptionalParams
  - Added Interface ApiSourcesDeleteOptionalParams
  - Added Interface ApiSourcesGetHeaders
  - Added Interface ApiSourcesGetOptionalParams
  - Added Interface ApiSourcesHeadOptionalParams
  - Added Interface ApiSourcesListNextOptionalParams
  - Added Interface ApiSourcesListOptionalParams
  - Added Interface AzureApiManagementSource
  - Added Interface DeletedService
  - Added Interface DeletedServiceListResult
  - Added Interface DeletedServicesDeleteOptionalParams
  - Added Interface DeletedServicesGetHeaders
  - Added Interface DeletedServicesGetOptionalParams
  - Added Interface DeletedServicesListBySubscriptionNextOptionalParams
  - Added Interface DeletedServicesListBySubscriptionOptionalParams
  - Added Interface DeletedServicesListNextOptionalParams
  - Added Interface DeletedServicesListOptionalParams
  - Added Interface LinkState
  - Added Type Alias ApiSourceLinkState
  - Added Type Alias ApiSourcesCreateOrUpdateResponse
  - Added Type Alias ApiSourcesGetResponse
  - Added Type Alias ApiSourcesHeadResponse
  - Added Type Alias ApiSourcesListNextResponse
  - Added Type Alias ApiSourcesListResponse
  - Added Type Alias DeletedServicesGetResponse
  - Added Type Alias DeletedServicesListBySubscriptionNextResponse
  - Added Type Alias DeletedServicesListBySubscriptionResponse
  - Added Type Alias DeletedServicesListNextResponse
  - Added Type Alias DeletedServicesListResponse
  - Added Type Alias ImportSpecificationOptions
  - Interface Api has a new optional parameter contacts
  - Interface Api has a new optional parameter customProperties
  - Interface Api has a new optional parameter description
  - Interface Api has a new optional parameter externalDocumentation
  - Interface Api has a new optional parameter kind
  - Interface Api has a new optional parameter license
  - Interface Api has a new optional parameter lifecycleStage
  - Interface Api has a new optional parameter summary
  - Interface Api has a new optional parameter termsOfService
  - Interface Api has a new optional parameter title
  - Interface ApiDefinition has a new optional parameter description
  - Interface ApiDefinition has a new optional parameter specification
  - Interface ApiDefinition has a new optional parameter title
  - Interface ApiVersion has a new optional parameter lifecycleStage
  - Interface ApiVersion has a new optional parameter title
  - Interface Deployment has a new optional parameter customProperties
  - Interface Deployment has a new optional parameter definitionId
  - Interface Deployment has a new optional parameter description
  - Interface Deployment has a new optional parameter environmentId
  - Interface Deployment has a new optional parameter server
  - Interface Deployment has a new optional parameter state
  - Interface Deployment has a new optional parameter title
  - Interface Environment has a new optional parameter customProperties
  - Interface Environment has a new optional parameter description
  - Interface Environment has a new optional parameter kind
  - Interface Environment has a new optional parameter onboarding
  - Interface Environment has a new optional parameter server
  - Interface Environment has a new optional parameter title
  - Interface MetadataSchema has a new optional parameter assignedTo
  - Interface MetadataSchema has a new optional parameter schema
  - Interface Service has a new optional parameter provisioningState
  - Interface Service has a new optional parameter restore
  - Interface ServiceUpdate has a new optional parameter restore
  - Interface Workspace has a new optional parameter description
  - Interface Workspace has a new optional parameter title
  - Added Enum KnownApiSourceLinkState
  - Added Enum KnownImportSpecificationOptions

### Breaking Changes

  - Interface Api no longer has parameter properties
  - Interface ApiDefinition no longer has parameter properties
  - Interface ApiVersion no longer has parameter properties
  - Interface Deployment no longer has parameter properties
  - Interface Environment no longer has parameter properties
  - Interface MetadataSchema no longer has parameter properties
  - Interface Service no longer has parameter properties
  - Interface Workspace no longer has parameter properties
  - Removed Enum KnownVersions
    
    
## 1.0.0 (2024-02-21)

The package of @azure/arm-apicenter is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
