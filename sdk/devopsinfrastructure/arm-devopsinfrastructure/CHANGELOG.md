# Release History
    
## 1.0.0-beta.2 (2024-10-09)
Compared with version 1.0.0-beta.1
    
### Features Added

  - Added operation PoolsOperations.createOrUpdate
  - Added operation PoolsOperations.delete
  - Added operation PoolsOperations.update
  - Added operation SubscriptionUsagesOperations.usages
  - Added Interface DevOpsInfrastructureClientOptionalParams
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface ResourcePredictions
  - Added Interface RestorePollerOptions
  - Added Interface SubscriptionUsagesUsagesOptionalParams
  - Added Class DevOpsInfrastructureClient
  - Added Type Alias ContinuablePage
  - Added Type Alias Versions
  - Interface Quota has a new optional parameter name
  - Enum KnownManagedServiceIdentityType has a new value SystemAndUserAssigned
  - Enum KnownOrigin has a new value "user,system"
  - Enum KnownOrigin has a new value system
  - Enum KnownOrigin has a new value user
  - Enum KnownStorageAccountType has a new value StandardSSDLRS
  - Enum KnownStorageAccountType has a new value StandardSSDZRS
  - Added function restorePoller

### Breaking Changes

  - Removed operation Pools.beginCreateOrUpdate
  - Removed operation Pools.beginCreateOrUpdateAndWait
  - Removed operation Pools.beginDelete
  - Removed operation Pools.beginDeleteAndWait
  - Removed operation Pools.beginUpdate
  - Removed operation Pools.beginUpdateAndWait
  - Removed operation SubscriptionUsages.listByLocation
  - Deleted Class ManagedDevOpsInfrastructure
  - Interface PoolsCreateOrUpdateOptionalParams no longer has parameter resumeFrom
  - Interface PoolsDeleteOptionalParams no longer has parameter resumeFrom
  - Interface PoolsUpdateOptionalParams no longer has parameter resumeFrom
  - Interface Quota no longer has parameter properties
  - Interface Quota has a new required parameter currentValue
  - Interface Quota has a new required parameter id
  - Interface Quota has a new required parameter limit
  - Interface Quota has a new required parameter unit
  - Type of parameter kind of interface AgentProfile is changed from "Stateful" | "Stateless" to string
  - Type of parameter resourcePredictions of interface AgentProfile is changed from Record<string, unknown> to ResourcePredictions
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, unknown> to Record<string, any>
  - Type of parameter kind of interface FabricProfile is changed from "Vmss" to string
  - Type of parameter userAssignedIdentities of interface ManagedServiceIdentity is changed from {
        [propertyName: string]: UserAssignedIdentity | null;
    } to Record<string, UserAssignedIdentity | null>
  - Type of parameter kind of interface OrganizationProfile is changed from "AzureDevOps" | "GitHub" to string
  - Type of parameter tags of interface PoolUpdate is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter agentProfile of interface PoolUpdateProperties is changed from AgentProfileUpdateUnion to AgentProfileUnion
  - Type of parameter kind of interface ResourcePredictionsProfile is changed from "Automatic" | "Manual" to ResourcePredictionsProfileType
  - Type of parameter tags of interface TrackedResource is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Enum KnownManagedServiceIdentityType no longer has value SystemAssignedUserAssigned
  - Enum KnownOrigin no longer has value System
  - Enum KnownOrigin no longer has value User
  - Enum KnownOrigin no longer has value UserSystem
  - Enum KnownStorageAccountType no longer has value StandardSsdlrs
  - Enum KnownStorageAccountType no longer has value StandardSsdzrs
  - Removed function getContinuationToken
    
    
## 1.0.0-beta.1 (2024-05-09)

The package of @azure/arm-devopsinfrastructure is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
