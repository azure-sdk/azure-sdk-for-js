# Release History
    
## 2.0.0 (2024-12-11)
    
### Features Added

  - Added Interface LoadTestResourceListResult
  - Added Interface LoadTestResourceUpdate
  - Added Interface PagedOutboundEnvironmentEndpoint
  - Added Interface ProxyResource
  - Added Interface QuotaResourceListResult
  - Added Type Alias LoadTestsDeleteResponse
  - Interface CheckQuotaAvailabilityResponse has a new optional parameter name
  - Interface CheckQuotaAvailabilityResponse has a new optional parameter systemData
  - Interface LoadTestsCreateOrUpdateHeaders has a new optional parameter retryAfter
  - Interface LoadTestsDeleteHeaders has a new optional parameter retryAfter
  - Interface LoadTestsUpdateHeaders has a new optional parameter location
  - Interface LoadTestsUpdateHeaders has a new optional parameter retryAfter

### Breaking Changes

  - Operation LoadTests.beginUpdate has a new signature
  - Operation LoadTests.beginUpdateAndWait has a new signature
  - Interface CheckQuotaAvailabilityResponse has a new required parameter id
  - Interface CheckQuotaAvailabilityResponse has a new required parameter type
  - Parameter domainName of interface EndpointDependency is now required
    
    
## 1.0.0 (2023-01-28)

The package of @azure/arm-loadtesting is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
