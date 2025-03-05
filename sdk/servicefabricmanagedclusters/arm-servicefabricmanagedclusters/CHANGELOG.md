# Release History
    
## 1.0.0-beta.4 (2025-03-05)
Compared with version 1.0.0-beta.3
    
### Features Added

  - Added operation ManagedClusters.beginStartFaultSimulation
  - Added operation ManagedClusters.beginStartFaultSimulationAndWait
  - Added operation ManagedClusters.beginStopFaultSimulation
  - Added operation ManagedClusters.beginStopFaultSimulationAndWait
  - Added operation ManagedClusters.getFaultSimulation
  - Added operation ManagedClusters.listFaultSimulation
  - Added operation NodeTypes.beginDeallocate
  - Added operation NodeTypes.beginDeallocateAndWait
  - Added operation NodeTypes.beginRedeploy
  - Added operation NodeTypes.beginRedeployAndWait
  - Added operation NodeTypes.beginStart
  - Added operation NodeTypes.beginStartAndWait
  - Added operation NodeTypes.beginStartFaultSimulation
  - Added operation NodeTypes.beginStartFaultSimulationAndWait
  - Added operation NodeTypes.beginStopFaultSimulation
  - Added operation NodeTypes.beginStopFaultSimulationAndWait
  - Added operation NodeTypes.getFaultSimulation
  - Added operation NodeTypes.listFaultSimulation
  - Added Interface ApplicationTypesDeleteHeaders
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface FaultSimulation
  - Added Interface FaultSimulationConstraints
  - Added Interface FaultSimulationContent
  - Added Interface FaultSimulationDetails
  - Added Interface FaultSimulationIdContent
  - Added Interface FaultSimulationListResult
  - Added Interface ManagedClustersGetFaultSimulationOptionalParams
  - Added Interface ManagedClustersListFaultSimulationNextOptionalParams
  - Added Interface ManagedClustersListFaultSimulationOptionalParams
  - Added Interface ManagedClustersStartFaultSimulationHeaders
  - Added Interface ManagedClustersStartFaultSimulationOptionalParams
  - Added Interface ManagedClustersStopFaultSimulationHeaders
  - Added Interface ManagedClustersStopFaultSimulationOptionalParams
  - Added Interface NodeTypeFaultSimulation
  - Added Interface NodeTypesDeallocateHeaders
  - Added Interface NodeTypesDeallocateOptionalParams
  - Added Interface NodeTypesGetFaultSimulationOptionalParams
  - Added Interface NodeTypesListFaultSimulationNextOptionalParams
  - Added Interface NodeTypesListFaultSimulationOptionalParams
  - Added Interface NodeTypesRedeployHeaders
  - Added Interface NodeTypesRedeployOptionalParams
  - Added Interface NodeTypesStartFaultSimulationHeaders
  - Added Interface NodeTypesStartFaultSimulationOptionalParams
  - Added Interface NodeTypesStartHeaders
  - Added Interface NodeTypesStartOptionalParams
  - Added Interface NodeTypesStopFaultSimulationHeaders
  - Added Interface NodeTypesStopFaultSimulationOptionalParams
  - Added Interface TrackedResource
  - Added Interface ZoneFaultSimulationContent
  - Added Type Alias ApplicationsDeleteResponse
  - Added Type Alias ApplicationTypesDeleteResponse
  - Added Type Alias ApplicationTypeVersionsDeleteResponse
  - Added Type Alias CreatedByType
  - Added Type Alias FaultKind
  - Added Type Alias FaultSimulationContentUnion
  - Added Type Alias FaultSimulationStatus
  - Added Type Alias ManagedClustersDeleteResponse
  - Added Type Alias ManagedClustersGetFaultSimulationResponse
  - Added Type Alias ManagedClustersListFaultSimulationNextResponse
  - Added Type Alias ManagedClustersListFaultSimulationResponse
  - Added Type Alias ManagedClustersStartFaultSimulationResponse
  - Added Type Alias ManagedClustersStopFaultSimulationResponse
  - Added Type Alias NodeTypesDeallocateResponse
  - Added Type Alias NodeTypesDeleteNodeResponse
  - Added Type Alias NodeTypesDeleteResponse
  - Added Type Alias NodeTypesGetFaultSimulationResponse
  - Added Type Alias NodeTypesListFaultSimulationNextResponse
  - Added Type Alias NodeTypesListFaultSimulationResponse
  - Added Type Alias NodeTypesRedeployResponse
  - Added Type Alias NodeTypesReimageResponse
  - Added Type Alias NodeTypesRestartResponse
  - Added Type Alias NodeTypesStartFaultSimulationResponse
  - Added Type Alias NodeTypesStartResponse
  - Added Type Alias NodeTypesStopFaultSimulationResponse
  - Added Type Alias ServicesDeleteResponse
  - Added Type Alias SfmcOperationStatus
  - Interface ApplicationResource has a new optional parameter location
  - Interface ApplicationResource has a new optional parameter tags
  - Interface ApplicationTypeResource has a new optional parameter location
  - Interface ApplicationTypeResource has a new optional parameter tags
  - Interface ApplicationTypeVersionResource has a new optional parameter location
  - Interface ApplicationTypeVersionResource has a new optional parameter tags
  - Interface ManagedCluster has a new optional parameter etag
  - Interface NodeType has a new optional parameter tags
  - Interface ServiceResource has a new optional parameter location
  - Interface ServiceResource has a new optional parameter tags
  - Type of parameter type of interface ServicePlacementPolicy is changed from "InvalidDomain" | "NonPartiallyPlaceService" | "PreferredPrimaryDomain" | "RequiredDomain" | "RequiredDomainDistribution" to "InvalidDomain" | "NonPartiallyPlaceService" | "PreferredPrimaryDomain" | "RequiredDomainDistribution" | "RequiredDomain"
  - Added Enum KnownCreatedByType
  - Added Enum KnownFaultKind
  - Added Enum KnownFaultSimulationStatus
  - Added Enum KnownSfmcOperationStatus
  - Enum KnownDiskType has a new value PremiumV2LRS
  - Enum KnownDiskType has a new value PremiumZRS
  - Enum KnownDiskType has a new value StandardSSDZRS

### Breaking Changes

  - Interface ProxyResource no longer has parameter location
  - Interface ProxyResource no longer has parameter tags
  - Interface Resource no longer has parameter etag
  - Interface Resource no longer has parameter location
  - Interface Resource no longer has parameter tags
  - Parameter value of interface ApplicationResourceList is now required
  - Parameter value of interface ApplicationTypeResourceList is now required
  - Parameter value of interface ApplicationTypeVersionResourceList is now required
  - Parameter value of interface ManagedClusterListResult is now required
  - Parameter value of interface ManagedVMSizesResult is now required
  - Parameter value of interface NodeTypeListResult is now required
  - Parameter value of interface NodeTypeListSkuResult is now required
  - Parameter value of interface OperationListResult is now required
  - Parameter value of interface ServiceResourceList is now required
  - Type of parameter supportExpiryUtc of interface ManagedClusterCodeVersionResult is changed from string to Date
  - Type of parameter createdByType of interface SystemData is changed from string to CreatedByType
  - Type of parameter lastModifiedByType of interface SystemData is changed from string to CreatedByType
  - Removed Enum KnownUpgradeMode
    
    
## 1.0.0-beta.3 (2024-12-12)
Compared with version 1.0.0-beta.2
    
### Features Added

  - Added operation NodeTypes.beginUpdate
  - Added operation NodeTypes.beginUpdateAndWait
  - Added Interface NodeTypesUpdateHeaders
  - Interface ManagedCluster has a new optional parameter allocatedOutboundPorts
  - Interface NodeTypesUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface NodeTypesUpdateOptionalParams has a new optional parameter updateIntervalInMs

### Breaking Changes

  - Removed operation NodeTypes.update
  - Interface ManagedCluster no longer has parameter customFqdn
    
    
## 1.0.0-beta.2 (2024-10-16)
Compared with version 1.0.0-beta.1
    
### Features Added

  - Added Interface VmApplication
  - Added Type Alias AutoGeneratedDomainNameLabelScope
  - Interface ManagedCluster has a new optional parameter autoGeneratedDomainNameLabelScope
  - Interface ManagedCluster has a new optional parameter customFqdn
  - Interface NodeType has a new optional parameter vmApplications
  - Added Enum KnownAutoGeneratedDomainNameLabelScope
    
    
## 1.0.0-beta.1 (2024-07-26)

### Features Added

The package of @azure/arm-servicefabricmanagedclusters is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
