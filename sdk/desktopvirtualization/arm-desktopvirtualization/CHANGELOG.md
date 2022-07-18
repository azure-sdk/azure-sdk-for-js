# Release History
    
## 1.0.0-beta.4 (2022-07-18)
    
**Features**

  - Added operation group ScalingPlanPooledSchedules
  - Added Interface AgentUpdatePatchProperties
  - Added Interface AgentUpdateProperties
  - Added Interface MaintenanceWindowPatchProperties
  - Added Interface MaintenanceWindowProperties
  - Added Interface ScalingPlanPooledScheduleList
  - Added Interface ScalingPlanPooledSchedulesCreateOptionalParams
  - Added Interface ScalingPlanPooledSchedulesDeleteOptionalParams
  - Added Interface ScalingPlanPooledSchedulesGetOptionalParams
  - Added Interface ScalingPlanPooledSchedulesListNextOptionalParams
  - Added Interface ScalingPlanPooledSchedulesListOptionalParams
  - Added Interface ScalingPlanPooledSchedulesUpdateOptionalParams
  - Added Type Alias DayOfWeek
  - Added Type Alias HostpoolPublicNetworkAccess
  - Added Type Alias ScalingPlanPooledSchedule
  - Added Type Alias ScalingPlanPooledSchedulePatch
  - Added Type Alias ScalingPlanPooledSchedulesCreateResponse
  - Added Type Alias ScalingPlanPooledSchedulesGetResponse
  - Added Type Alias ScalingPlanPooledSchedulesListNextResponse
  - Added Type Alias ScalingPlanPooledSchedulesListResponse
  - Added Type Alias ScalingPlanPooledSchedulesUpdateResponse
  - Added Type Alias SessionHostComponentUpdateType
  - Class DesktopVirtualizationAPIClient has a new parameter scalingPlanPooledSchedules
  - Type Alias HostPool has a new parameter agentUpdate
  - Type Alias HostPool has a new parameter privateEndpointConnections
  - Type Alias HostPoolPatch has a new parameter agentUpdate
  - Type Alias SessionHost has a new parameter friendlyName
  - Type Alias SessionHostPatch has a new parameter friendlyName
  - Type Alias Workspace has a new parameter privateEndpointConnections
  - Added Enum KnownHostpoolPublicNetworkAccess
  - Added Enum KnownSessionHostComponentUpdateType

**Breaking Changes**

  - Interface ScalingPlanPatch no longer has parameter schedules
  - Type Alias ScalingPlan no longer has parameter schedules
  - Parameter timeZone of Type Alias ScalingPlan is now required
  - Removed Enum KnownScalingScheduleDaysOfWeekItem
    
## 1.0.0-beta.3 (2022-04-18)

**features**

  - bug fix

## 1.0.0-beta.2 (2021-12-27)
    
The package of @azure/arm-desktopvirtualization is using our next generation design principles since version 1.0.0-beta.2, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
