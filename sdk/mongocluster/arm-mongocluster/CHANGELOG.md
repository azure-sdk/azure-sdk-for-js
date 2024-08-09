# Release History
    
## 1.0.0-beta.3 (2024-08-09)
Compared with version 1.0.0-beta.2
    
### Features Added

  - Added operation FirewallRules.beginCreateOrUpdate
  - Added operation FirewallRules.beginCreateOrUpdateAndWait
  - Added operation FirewallRules.beginDelete
  - Added operation FirewallRules.beginDeleteAndWait
  - Added operation MongoClusters.beginCreateOrUpdate
  - Added operation MongoClusters.beginCreateOrUpdateAndWait
  - Added operation MongoClusters.beginDelete
  - Added operation MongoClusters.beginDeleteAndWait
  - Added operation MongoClusters.beginUpdate
  - Added operation MongoClusters.beginUpdateAndWait
  - Added operation PrivateEndpointConnections.beginCreate
  - Added operation PrivateEndpointConnections.beginCreateAndWait
  - Added operation PrivateEndpointConnections.beginDelete
  - Added operation PrivateEndpointConnections.beginDeleteAndWait
  - Added Interface FirewallRuleListResult
  - Added Interface FirewallRulesCreateOrUpdateHeaders
  - Added Interface FirewallRulesDeleteHeaders
  - Added Interface FirewallRulesListByMongoClusterNextOptionalParams
  - Added Interface MongoClusterListResult
  - Added Interface MongoClusterManagementClientForTestingOptionalParams
  - Added Interface MongoClustersCreateOrUpdateHeaders
  - Added Interface MongoClustersDeleteHeaders
  - Added Interface MongoClustersListByResourceGroupNextOptionalParams
  - Added Interface MongoClustersListNextOptionalParams
  - Added Interface MongoClustersUpdateHeaders
  - Added Interface NodeGroupProperties
  - Added Interface OperationListResult
  - Added Interface OperationsListNextOptionalParams
  - Added Interface PrivateEndpointConnectionResourceListResult
  - Added Interface PrivateEndpointConnectionsCreateHeaders
  - Added Interface PrivateEndpointConnectionsDeleteHeaders
  - Added Interface PrivateEndpointConnectionsListByMongoClusterNextOptionalParams
  - Added Interface PrivateLinkResourceListResult
  - Added Interface PrivateLinksListByMongoClusterNextOptionalParams
  - Added Class MongoClusterManagementClientForTesting
  - Added Type Alias FirewallRulesCreateOrUpdateResponse
  - Added Type Alias FirewallRulesDeleteResponse
  - Added Type Alias FirewallRulesGetResponse
  - Added Type Alias FirewallRulesListByMongoClusterNextResponse
  - Added Type Alias FirewallRulesListByMongoClusterResponse
  - Added Type Alias MongoClustersCheckNameAvailabilityResponse
  - Added Type Alias MongoClustersCreateOrUpdateResponse
  - Added Type Alias MongoClustersDeleteResponse
  - Added Type Alias MongoClustersGetResponse
  - Added Type Alias MongoClustersListByResourceGroupNextResponse
  - Added Type Alias MongoClustersListByResourceGroupResponse
  - Added Type Alias MongoClustersListConnectionStringsResponse
  - Added Type Alias MongoClustersListNextResponse
  - Added Type Alias MongoClustersListResponse
  - Added Type Alias MongoClustersUpdateResponse
  - Added Type Alias OperationsListNextResponse
  - Added Type Alias OperationsListResponse
  - Added Type Alias PrivateEndpointConnectionsCreateResponse
  - Added Type Alias PrivateEndpointConnectionsDeleteResponse
  - Added Type Alias PrivateEndpointConnectionsGetResponse
  - Added Type Alias PrivateEndpointConnectionsListByMongoClusterNextResponse
  - Added Type Alias PrivateEndpointConnectionsListByMongoClusterResponse
  - Added Type Alias PrivateLinksListByMongoClusterNextResponse
  - Added Type Alias PrivateLinksListByMongoClusterResponse
  - Interface FirewallRulesCreateOrUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface FirewallRulesDeleteOptionalParams has a new optional parameter resumeFrom
  - Interface MongoClustersCreateOrUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface MongoClustersDeleteOptionalParams has a new optional parameter resumeFrom
  - Interface MongoClustersUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface PrivateEndpointConnectionsCreateOptionalParams has a new optional parameter resumeFrom
  - Interface PrivateEndpointConnectionsDeleteOptionalParams has a new optional parameter resumeFrom
  - Added Enum KnownProvisioningState
  - Enum KnownOrigin has a new value System
  - Enum KnownOrigin has a new value User
  - Enum KnownOrigin has a new value UserSystem
  - Added function getContinuationToken

### Breaking Changes

  - Removed operation FirewallRulesOperations.createOrUpdate
  - Removed operation FirewallRulesOperations.delete
  - Removed operation MongoClustersOperations.createOrUpdate
  - Removed operation MongoClustersOperations.delete
  - Removed operation MongoClustersOperations.update
  - Removed operation PrivateEndpointConnectionsOperations.create
  - Removed operation PrivateEndpointConnectionsOperations.delete
  - Deleted Class MongoClusterManagementClient
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, any> to Record<string, unknown>
  - Type of parameter tags of interface MongoClusterUpdate is changed from Record<string, string> to {
        [propertyName: string]: string;
    }
  - Type of parameter tags of interface TrackedResource is changed from Record<string, string> to {
        [propertyName: string]: string;
    }
  - Removed Enum KnownResourceProvisioningState
  - Enum KnownOrigin no longer has value "user,system"
  - Enum KnownOrigin no longer has value system
  - Enum KnownOrigin no longer has value user
  - Removed function restorePoller
    
## 1.0.0-beta.2 (2024-07-30)

### Features Added

- disable hierarchy api subpath export and issue fix.

## 1.0.0-beta.1 (2024-07-05)

### Features Added

Initial release of the Azure MongoCluster package
