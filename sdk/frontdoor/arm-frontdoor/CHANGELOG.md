# Release History
    
## 6.0.0 (2022-07-06)
    
**Features**

  - Added operation Policies.beginUpdate
  - Added operation Policies.beginUpdateAndWait
  - Added Interface PoliciesUpdateOptionalParams
  - Added Type Alias PoliciesUpdateResponse
  - Interface FrontDoorManagementClientOptionalParams has a new optional parameter apiVersion
  - Class FrontDoorManagementClient has a new parameter apiVersion

**Breaking Changes**

  - Removed operation group Endpoints
  - Removed operation group Experiments
  - Removed operation group FrontDoorNameAvailability
  - Removed operation group FrontDoorNameAvailabilityWithSubscription
  - Removed operation group FrontDoors
  - Removed operation group FrontendEndpoints
  - Removed operation group NetworkExperimentProfiles
  - Removed operation group PreconfiguredEndpoints
  - Removed operation group Reports
  - Removed operation group RulesEngines
  - Class FrontDoorManagementClient no longer has parameter endpoints
  - Class FrontDoorManagementClient no longer has parameter experiments
  - Class FrontDoorManagementClient no longer has parameter frontDoorNameAvailability
  - Class FrontDoorManagementClient no longer has parameter frontDoorNameAvailabilityWithSubscription
  - Class FrontDoorManagementClient no longer has parameter frontDoors
  - Class FrontDoorManagementClient no longer has parameter frontendEndpoints
  - Class FrontDoorManagementClient no longer has parameter networkExperimentProfiles
  - Class FrontDoorManagementClient no longer has parameter preconfiguredEndpoints
  - Class FrontDoorManagementClient no longer has parameter reports
  - Class FrontDoorManagementClient no longer has parameter rulesEngines
  - Removed Enum KnownAggregationInterval
  - Removed Enum KnownAvailability
  - Removed Enum KnownBackendEnabledState
  - Removed Enum KnownCustomHttpsProvisioningState
  - Removed Enum KnownCustomHttpsProvisioningSubstate
  - Removed Enum KnownDynamicCompressionEnabled
  - Removed Enum KnownEndpointType
  - Removed Enum KnownEnforceCertificateNameCheckEnabledState
  - Removed Enum KnownFrontDoorCertificateSource
  - Removed Enum KnownFrontDoorCertificateType
  - Removed Enum KnownFrontDoorEnabledState
  - Removed Enum KnownFrontDoorForwardingProtocol
  - Removed Enum KnownFrontDoorHealthProbeMethod
  - Removed Enum KnownFrontDoorProtocol
  - Removed Enum KnownFrontDoorQuery
  - Removed Enum KnownFrontDoorRedirectProtocol
  - Removed Enum KnownFrontDoorRedirectType
  - Removed Enum KnownFrontDoorResourceState
  - Removed Enum KnownFrontDoorTlsProtocolType
  - Removed Enum KnownHeaderActionType
  - Removed Enum KnownHealthProbeEnabled
  - Removed Enum KnownLatencyScorecardAggregationInterval
  - Removed Enum KnownMatchProcessingBehavior
  - Removed Enum KnownMinimumTLSVersion
  - Removed Enum KnownNetworkExperimentResourceState
  - Removed Enum KnownPrivateEndpointStatus
  - Removed Enum KnownRoutingRuleEnabledState
  - Removed Enum KnownRulesEngineMatchVariable
  - Removed Enum KnownRulesEngineOperator
  - Removed Enum KnownSessionAffinityEnabledState
  - Removed Enum KnownState
  - Removed Enum KnownTimeseriesAggregationInterval
  - Removed Enum KnownTimeseriesType
  - Removed Enum KnownTransform
    
## 5.0.1 (2022-04-26)

**Features**

  - Bug fix

## 5.0.0 (2022-01-13)

The package of @azure/arm-frontdoor is using our next generation design principles since version 5.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
