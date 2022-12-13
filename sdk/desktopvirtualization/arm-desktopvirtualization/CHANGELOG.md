# Release History
    
## 1.0.0-beta.5 (2022-12-13)
    
**Features**

  - Added operation group ScalingPlanPooledSchedules
  - Added Interface AgentUpdatePatchProperties
  - Added Interface AgentUpdateProperties
  - Added Interface MaintenanceWindowPatchProperties
  - Added Interface MaintenanceWindowProperties
  - Added Interface ScalingPlanPooledSchedule
  - Added Interface ScalingPlanPooledScheduleList
  - Added Interface ScalingPlanPooledSchedulePatch
  - Added Interface ScalingPlanPooledSchedulesCreateOptionalParams
  - Added Interface ScalingPlanPooledSchedulesDeleteOptionalParams
  - Added Interface ScalingPlanPooledSchedulesGetOptionalParams
  - Added Interface ScalingPlanPooledSchedulesListNextOptionalParams
  - Added Interface ScalingPlanPooledSchedulesListOptionalParams
  - Added Interface ScalingPlanPooledSchedulesUpdateOptionalParams
  - Added Type Alias DayOfWeek
  - Added Type Alias HostpoolPublicNetworkAccess
  - Added Type Alias ScalingPlanPooledSchedulesCreateResponse
  - Added Type Alias ScalingPlanPooledSchedulesGetResponse
  - Added Type Alias ScalingPlanPooledSchedulesListNextResponse
  - Added Type Alias ScalingPlanPooledSchedulesListResponse
  - Added Type Alias ScalingPlanPooledSchedulesUpdateResponse
  - Added Type Alias SessionHostComponentUpdateType
  - Interface ApplicationGroupsListByResourceGroupOptionalParams has a new optional parameter initialSkip
  - Interface ApplicationGroupsListByResourceGroupOptionalParams has a new optional parameter isDescending
  - Interface ApplicationGroupsListByResourceGroupOptionalParams has a new optional parameter pageSize
  - Interface ApplicationsListOptionalParams has a new optional parameter initialSkip
  - Interface ApplicationsListOptionalParams has a new optional parameter isDescending
  - Interface ApplicationsListOptionalParams has a new optional parameter pageSize
  - Interface DesktopsListOptionalParams has a new optional parameter initialSkip
  - Interface DesktopsListOptionalParams has a new optional parameter isDescending
  - Interface DesktopsListOptionalParams has a new optional parameter pageSize
  - Interface HostPool has a new optional parameter agentUpdate
  - Interface HostPool has a new optional parameter privateEndpointConnections
  - Interface HostPoolPatch has a new optional parameter agentUpdate
  - Interface HostPoolsListByResourceGroupOptionalParams has a new optional parameter initialSkip
  - Interface HostPoolsListByResourceGroupOptionalParams has a new optional parameter isDescending
  - Interface HostPoolsListByResourceGroupOptionalParams has a new optional parameter pageSize
  - Interface HostPoolsListOptionalParams has a new optional parameter initialSkip
  - Interface HostPoolsListOptionalParams has a new optional parameter isDescending
  - Interface HostPoolsListOptionalParams has a new optional parameter pageSize
  - Interface MsixPackagesListOptionalParams has a new optional parameter initialSkip
  - Interface MsixPackagesListOptionalParams has a new optional parameter isDescending
  - Interface MsixPackagesListOptionalParams has a new optional parameter pageSize
  - Interface PrivateEndpointConnectionsListByHostPoolOptionalParams has a new optional parameter initialSkip
  - Interface PrivateEndpointConnectionsListByHostPoolOptionalParams has a new optional parameter isDescending
  - Interface PrivateEndpointConnectionsListByHostPoolOptionalParams has a new optional parameter pageSize
  - Interface PrivateLinkResourcesListByHostPoolOptionalParams has a new optional parameter initialSkip
  - Interface PrivateLinkResourcesListByHostPoolOptionalParams has a new optional parameter isDescending
  - Interface PrivateLinkResourcesListByHostPoolOptionalParams has a new optional parameter pageSize
  - Interface PrivateLinkResourcesListByWorkspaceOptionalParams has a new optional parameter initialSkip
  - Interface PrivateLinkResourcesListByWorkspaceOptionalParams has a new optional parameter isDescending
  - Interface PrivateLinkResourcesListByWorkspaceOptionalParams has a new optional parameter pageSize
  - Interface ScalingPlansListByHostPoolOptionalParams has a new optional parameter initialSkip
  - Interface ScalingPlansListByHostPoolOptionalParams has a new optional parameter isDescending
  - Interface ScalingPlansListByHostPoolOptionalParams has a new optional parameter pageSize
  - Interface ScalingPlansListByResourceGroupOptionalParams has a new optional parameter initialSkip
  - Interface ScalingPlansListByResourceGroupOptionalParams has a new optional parameter isDescending
  - Interface ScalingPlansListByResourceGroupOptionalParams has a new optional parameter pageSize
  - Interface ScalingPlansListBySubscriptionOptionalParams has a new optional parameter initialSkip
  - Interface ScalingPlansListBySubscriptionOptionalParams has a new optional parameter isDescending
  - Interface ScalingPlansListBySubscriptionOptionalParams has a new optional parameter pageSize
  - Interface SessionHost has a new optional parameter friendlyName
  - Interface SessionHostPatch has a new optional parameter friendlyName
  - Interface SessionHostsListOptionalParams has a new optional parameter initialSkip
  - Interface SessionHostsListOptionalParams has a new optional parameter isDescending
  - Interface SessionHostsListOptionalParams has a new optional parameter pageSize
  - Interface StartMenuItemsListOptionalParams has a new optional parameter initialSkip
  - Interface StartMenuItemsListOptionalParams has a new optional parameter isDescending
  - Interface StartMenuItemsListOptionalParams has a new optional parameter pageSize
  - Interface UserSessionsListByHostPoolOptionalParams has a new optional parameter initialSkip
  - Interface UserSessionsListByHostPoolOptionalParams has a new optional parameter isDescending
  - Interface UserSessionsListByHostPoolOptionalParams has a new optional parameter pageSize
  - Interface UserSessionsListOptionalParams has a new optional parameter initialSkip
  - Interface UserSessionsListOptionalParams has a new optional parameter isDescending
  - Interface UserSessionsListOptionalParams has a new optional parameter pageSize
  - Interface Workspace has a new optional parameter privateEndpointConnections
  - Interface WorkspacesListByResourceGroupOptionalParams has a new optional parameter initialSkip
  - Interface WorkspacesListByResourceGroupOptionalParams has a new optional parameter isDescending
  - Interface WorkspacesListByResourceGroupOptionalParams has a new optional parameter pageSize
  - Added Enum KnownHostpoolPublicNetworkAccess
  - Added Enum KnownSessionHostComponentUpdateType

**Breaking Changes**

  - Interface ApplicationGroup no longer has parameter migrationRequest
  - Interface ApplicationGroupsListByResourceGroupNextOptionalParams no longer has parameter filter
  - Interface ApplicationGroupsListBySubscriptionNextOptionalParams no longer has parameter filter
  - Interface HostPool no longer has parameter migrationRequest
  - Interface UserSessionsListByHostPoolNextOptionalParams no longer has parameter filter
  - Parameter timeZone of interface ScalingPlan is now required
  - Type of parameter publicNetworkAccess of interface HostPool is changed from PublicNetworkAccess to HostpoolPublicNetworkAccess
  - Type of parameter publicNetworkAccess of interface HostPoolPatch is changed from PublicNetworkAccess to HostpoolPublicNetworkAccess
  - Class DesktopVirtualizationAPIClient has a new required parameter scalingPlanPooledSchedules
  - Removed Enum KnownOperation
    
    
## 1.0.0-beta.4 (2022-11-21)
    
**Features**

  - Added Interface Application
  - Added Interface ApplicationGroup
  - Added Interface ApplicationGroupPatch
  - Added Interface Desktop
  - Added Interface ExpandMsixImage
  - Added Interface HostPool
  - Added Interface HostPoolPatch
  - Added Interface MsixPackage
  - Added Interface MsixPackagePatch
  - Added Interface PrivateEndpointConnection
  - Added Interface PrivateEndpointConnectionWithSystemData
  - Added Interface PrivateLinkResource
  - Added Interface ResourceModelWithAllowedPropertySetIdentity
  - Added Interface ResourceModelWithAllowedPropertySetPlan
  - Added Interface ResourceModelWithAllowedPropertySetSku
  - Added Interface ScalingPlan
  - Added Interface SessionHost
  - Added Interface SessionHostPatch
  - Added Interface StartMenuItem
  - Added Interface UserSession
  - Added Interface Workspace
    
## 1.0.0-beta.3 (2022-04-18)

**features**

  - bug fix

## 1.0.0-beta.2 (2021-12-27)
    
The package of @azure/arm-desktopvirtualization is using our next generation design principles since version 1.0.0-beta.2, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
