# Release History
    
## 2.0.0 (2025-05-09)
    
### Features Added

  - Added operation group IntegrationFabricsOperations
  - Added operation group ManagedGrafanasOperations
  - Added operation group ManagedPrivateEndpointModelsOperations
  - Added operation PrivateEndpointConnectionsOperations.approve
  - Added operation PrivateEndpointConnectionsOperations.delete
  - Added Interface DashboardClientOptionalParams
  - Added Interface IntegrationFabric
  - Added Interface IntegrationFabricProperties
  - Added Interface IntegrationFabricPropertiesUpdateParameters
  - Added Interface IntegrationFabricsCreateOptionalParams
  - Added Interface IntegrationFabricsDeleteOptionalParams
  - Added Interface IntegrationFabricsGetOptionalParams
  - Added Interface IntegrationFabricsListOptionalParams
  - Added Interface IntegrationFabricsUpdateOptionalParams
  - Added Interface IntegrationFabricUpdateParameters
  - Added Interface ManagedGrafanasCheckEnterpriseDetailsOptionalParams
  - Added Interface ManagedGrafanasCreateOptionalParams
  - Added Interface ManagedGrafanasDeleteOptionalParams
  - Added Interface ManagedGrafanasFetchAvailablePluginsOptionalParams
  - Added Interface ManagedGrafanasGetOptionalParams
  - Added Interface ManagedGrafanasListByResourceGroupOptionalParams
  - Added Interface ManagedGrafanasListOptionalParams
  - Added Interface ManagedGrafanasRefreshOptionalParams
  - Added Interface ManagedGrafanasUpdateOptionalParams
  - Added Interface ManagedPrivateEndpointModelProperties
  - Added Interface ManagedPrivateEndpointModelsCreateOptionalParams
  - Added Interface ManagedPrivateEndpointModelsDeleteOptionalParams
  - Added Interface ManagedPrivateEndpointModelsGetOptionalParams
  - Added Interface ManagedPrivateEndpointModelsListOptionalParams
  - Added Interface ManagedPrivateEndpointModelsUpdateOptionalParams
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface PrivateEndpointConnectionProperties
  - Added Interface PrivateLinkResourceProperties
  - Added Interface ProxyResource
  - Added Interface RestorePollerOptions
  - Added Interface Security
  - Added Interface Snapshots
  - Added Interface Users
  - Added Class DashboardClient
  - Added Type Alias ContinuablePage
  - Interface GrafanaConfigurations has a new optional parameter security
  - Interface GrafanaConfigurations has a new optional parameter snapshots
  - Interface GrafanaConfigurations has a new optional parameter users
  - Interface ManagedPrivateEndpointModel has a new optional parameter properties
  - Interface PrivateEndpointConnection has a new optional parameter properties
  - Interface PrivateLinkResource has a new optional parameter properties
  - Added Enum KnownVersions
  - Added function restorePoller

### Breaking Changes

  - Removed operation group Grafana
  - Removed operation group ManagedPrivateEndpoints
  - Removed operation PrivateEndpointConnections.beginApprove
  - Removed operation PrivateEndpointConnections.beginApproveAndWait
  - Removed operation PrivateEndpointConnections.beginDelete
  - Removed operation PrivateEndpointConnections.beginDeleteAndWait
  - Deleted Class DashboardManagementClient
  - Interface ManagedGrafana no longer has parameter id
  - Interface ManagedGrafana no longer has parameter name
  - Interface ManagedGrafana no longer has parameter systemData
  - Interface ManagedGrafana no longer has parameter type
  - Interface ManagedPrivateEndpointModel no longer has parameter connectionState
  - Interface ManagedPrivateEndpointModel no longer has parameter groupIds
  - Interface ManagedPrivateEndpointModel no longer has parameter privateLinkResourceId
  - Interface ManagedPrivateEndpointModel no longer has parameter privateLinkResourceRegion
  - Interface ManagedPrivateEndpointModel no longer has parameter privateLinkServicePrivateIP
  - Interface ManagedPrivateEndpointModel no longer has parameter privateLinkServiceUrl
  - Interface ManagedPrivateEndpointModel no longer has parameter provisioningState
  - Interface ManagedPrivateEndpointModel no longer has parameter requestMessage
  - Interface PrivateEndpointConnection no longer has parameter groupIds
  - Interface PrivateEndpointConnection no longer has parameter privateEndpoint
  - Interface PrivateEndpointConnection no longer has parameter privateLinkServiceConnectionState
  - Interface PrivateEndpointConnection no longer has parameter provisioningState
  - Interface PrivateEndpointConnectionsApproveOptionalParams no longer has parameter body
  - Interface PrivateEndpointConnectionsApproveOptionalParams no longer has parameter resumeFrom
  - Interface PrivateEndpointConnectionsDeleteOptionalParams no longer has parameter resumeFrom
  - Interface PrivateLinkResource no longer has parameter groupId
  - Interface PrivateLinkResource no longer has parameter provisioningState
  - Interface PrivateLinkResource no longer has parameter requiredMembers
  - Interface PrivateLinkResource no longer has parameter requiredZoneNames
  - Type of parameter info of interface ErrorAdditionalInfo is changed from Record<string, unknown> to Record<string, any>
  - Type of parameter grafanaPlugins of interface ManagedGrafanaProperties is changed from {
        [propertyName: string]: GrafanaPlugin;
    } to Record<string, GrafanaPlugin>
  - Type of parameter grafanaPlugins of interface ManagedGrafanaPropertiesUpdateParameters is changed from {
        [propertyName: string]: GrafanaPlugin;
    } to Record<string, GrafanaPlugin>
  - Type of parameter tags of interface ManagedGrafanaUpdateParameters is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter tags of interface ManagedPrivateEndpointUpdateParameters is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter userAssignedIdentities of interface ManagedServiceIdentity is changed from {
        [propertyName: string]: UserAssignedIdentity;
    } to Record<string, UserAssignedIdentity>
  - Type of parameter tags of interface TrackedResource is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Removed function getContinuationToken
    
    
## 1.1.0 (2023-11-10)
    
### Features Added

  - Added operation group ManagedPrivateEndpoints
  - Added operation Grafana.checkEnterpriseDetails
  - Added operation Grafana.fetchAvailablePlugins
  - Added Interface EnterpriseConfigurations
  - Added Interface EnterpriseDetails
  - Added Interface GrafanaAvailablePlugin
  - Added Interface GrafanaAvailablePluginListResponse
  - Added Interface GrafanaCheckEnterpriseDetailsOptionalParams
  - Added Interface GrafanaConfigurations
  - Added Interface GrafanaCreateHeaders
  - Added Interface GrafanaDeleteHeaders
  - Added Interface GrafanaFetchAvailablePluginsOptionalParams
  - Added Interface GrafanaPlugin
  - Added Interface GrafanaUpdateHeaders
  - Added Interface ManagedPrivateEndpointConnectionState
  - Added Interface ManagedPrivateEndpointModel
  - Added Interface ManagedPrivateEndpointModelListResponse
  - Added Interface ManagedPrivateEndpointsCreateHeaders
  - Added Interface ManagedPrivateEndpointsCreateOptionalParams
  - Added Interface ManagedPrivateEndpointsDeleteHeaders
  - Added Interface ManagedPrivateEndpointsDeleteOptionalParams
  - Added Interface ManagedPrivateEndpointsGetOptionalParams
  - Added Interface ManagedPrivateEndpointsListNextOptionalParams
  - Added Interface ManagedPrivateEndpointsListOptionalParams
  - Added Interface ManagedPrivateEndpointsRefreshHeaders
  - Added Interface ManagedPrivateEndpointsRefreshOptionalParams
  - Added Interface ManagedPrivateEndpointsUpdateHeaders
  - Added Interface ManagedPrivateEndpointsUpdateOptionalParams
  - Added Interface ManagedPrivateEndpointUpdateParameters
  - Added Interface MarketplaceTrialQuota
  - Added Interface PrivateEndpointConnectionsApproveHeaders
  - Added Interface PrivateEndpointConnectionsDeleteHeaders
  - Added Interface SaasSubscriptionDetails
  - Added Interface Smtp
  - Added Interface SubscriptionTerm
  - Added Interface TrackedResource
  - Added Type Alias AvailablePromotion
  - Added Type Alias GrafanaCheckEnterpriseDetailsResponse
  - Added Type Alias GrafanaFetchAvailablePluginsResponse
  - Added Type Alias ManagedPrivateEndpointConnectionStatus
  - Added Type Alias ManagedPrivateEndpointsCreateResponse
  - Added Type Alias ManagedPrivateEndpointsGetResponse
  - Added Type Alias ManagedPrivateEndpointsListNextResponse
  - Added Type Alias ManagedPrivateEndpointsListResponse
  - Added Type Alias ManagedPrivateEndpointsUpdateResponse
  - Added Type Alias MarketplaceAutoRenew
  - Added Type Alias PrivateEndpointConnectionsDeleteResponse
  - Added Type Alias StartTLSPolicy
  - Interface ManagedGrafanaProperties has a new optional parameter enterpriseConfigurations
  - Interface ManagedGrafanaProperties has a new optional parameter grafanaConfigurations
  - Interface ManagedGrafanaProperties has a new optional parameter grafanaMajorVersion
  - Interface ManagedGrafanaProperties has a new optional parameter grafanaPlugins
  - Interface ManagedGrafanaPropertiesUpdateParameters has a new optional parameter enterpriseConfigurations
  - Interface ManagedGrafanaPropertiesUpdateParameters has a new optional parameter grafanaConfigurations
  - Interface ManagedGrafanaPropertiesUpdateParameters has a new optional parameter grafanaMajorVersion
  - Interface ManagedGrafanaPropertiesUpdateParameters has a new optional parameter grafanaPlugins
  - Interface ManagedGrafanaUpdateParameters has a new optional parameter sku
  - Add parameters of PrivateEndpointConnectionsApproveHeaders to TypeAlias PrivateEndpointConnectionsApproveResponse
  - Added Enum KnownAvailablePromotion
  - Added Enum KnownManagedPrivateEndpointConnectionStatus
  - Added Enum KnownMarketplaceAutoRenew
  - Added Enum KnownStartTLSPolicy
    
## 1.0.1 (2023-01-03)

### Features Added

 -  Exposes `getContinuationToken` helper function to extract continuation token

### Bugs Fixed

  - A series of small bug fixs relevant to authentication and apiVersion policy

## 1.0.0 (2022-08-15)

The package of @azure/arm-dashboard is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart ).
