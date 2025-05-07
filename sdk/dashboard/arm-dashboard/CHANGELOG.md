# Release History
    
## 1.2.0-beta.1 (2025-05-07)
Compared with version 1.1.0
    
### Features Added

  - Added operation group Dashboards
  - Added operation group IntegrationFabrics
  - Added operation group ManagedDashboards
  - Added Interface DashboardsGetOptionalParams
  - Added Interface DashboardsListBySubscriptionNextOptionalParams
  - Added Interface DashboardsListBySubscriptionOptionalParams
  - Added Interface DashboardsListNextOptionalParams
  - Added Interface DashboardsListOptionalParams
  - Added Interface IntegrationFabric
  - Added Interface IntegrationFabricListResponse
  - Added Interface IntegrationFabricProperties
  - Added Interface IntegrationFabricPropertiesUpdateParameters
  - Added Interface IntegrationFabricsCreateHeaders
  - Added Interface IntegrationFabricsCreateOptionalParams
  - Added Interface IntegrationFabricsDeleteHeaders
  - Added Interface IntegrationFabricsDeleteOptionalParams
  - Added Interface IntegrationFabricsGetOptionalParams
  - Added Interface IntegrationFabricsListNextOptionalParams
  - Added Interface IntegrationFabricsListOptionalParams
  - Added Interface IntegrationFabricsUpdateHeaders
  - Added Interface IntegrationFabricsUpdateOptionalParams
  - Added Interface IntegrationFabricUpdateParameters
  - Added Interface ManagedDashboard
  - Added Interface ManagedDashboardListResponse
  - Added Interface ManagedDashboardsCreateHeaders
  - Added Interface ManagedDashboardsCreateOptionalParams
  - Added Interface ManagedDashboardsDeleteOptionalParams
  - Added Interface ManagedDashboardsUpdateOptionalParams
  - Added Interface ManagedDashboardUpdateParameters
  - Added Interface Security
  - Added Interface Snapshots
  - Added Interface UnifiedAlertingScreenshots
  - Added Interface Users
  - Added Type Alias DashboardsGetResponse
  - Added Type Alias DashboardsListBySubscriptionNextResponse
  - Added Type Alias DashboardsListBySubscriptionResponse
  - Added Type Alias DashboardsListNextResponse
  - Added Type Alias DashboardsListResponse
  - Added Type Alias IntegrationFabricsCreateResponse
  - Added Type Alias IntegrationFabricsDeleteResponse
  - Added Type Alias IntegrationFabricsGetResponse
  - Added Type Alias IntegrationFabricsListNextResponse
  - Added Type Alias IntegrationFabricsListResponse
  - Added Type Alias IntegrationFabricsUpdateResponse
  - Added Type Alias ManagedDashboardsCreateResponse
  - Added Type Alias ManagedDashboardsUpdateResponse
  - Interface GrafanaConfigurations has a new optional parameter security
  - Interface GrafanaConfigurations has a new optional parameter snapshots
  - Interface GrafanaConfigurations has a new optional parameter unifiedAlertingScreenshots
  - Interface GrafanaConfigurations has a new optional parameter users
    
    
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
