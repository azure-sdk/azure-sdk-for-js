# Release History
    
## 8.0.0-beta.5 (2023-04-17)
    
**Features**

  - Added operation group TenantActionGroups
  - Added Interface CreateNotificationsAtTenantActionGroupResourceLevelOptionalParams
  - Added Interface GetTestNotificationsAtTenantActionGroupResourceLevelOptionalParams
  - Added Interface MonitorClientCreateNotificationsAtTenantActionGroupResourceLevelHeaders
  - Added Interface TenantActionGroupList
  - Added Interface TenantActionGroupResource
  - Added Interface TenantActionGroupsCreateOrUpdateOptionalParams
  - Added Interface TenantActionGroupsDeleteOptionalParams
  - Added Interface TenantActionGroupsGetOptionalParams
  - Added Interface TenantActionGroupsListByManagementGroupIdOptionalParams
  - Added Interface TenantActionGroupsUpdateOptionalParams
  - Added Interface TenantNotificationRequestBody
  - Added Type Alias CreateNotificationsAtTenantActionGroupResourceLevelResponse
  - Added Type Alias GetTestNotificationsAtTenantActionGroupResourceLevelResponse
  - Added Type Alias TenantActionGroupsCreateOrUpdateResponse
  - Added Type Alias TenantActionGroupsGetResponse
  - Added Type Alias TenantActionGroupsListByManagementGroupIdResponse
  - Added Type Alias TenantActionGroupsUpdateResponse
  - Interface ActionDetail has a new optional parameter message
  - Interface MonitorClientOptionalParams has a new optional parameter apiVersion
  - Added function getContinuationToken

**Breaking Changes**

  - Removed operation group ActionGroups
  - Removed operation group ActivityLogAlerts
  - Removed operation group ActivityLogs
  - Removed operation group AlertRuleIncidents
  - Removed operation group AlertRules
  - Removed operation group AutoscaleSettings
  - Removed operation group Baselines
  - Removed operation group DataCollectionEndpoints
  - Removed operation group DataCollectionRuleAssociations
  - Removed operation group DataCollectionRules
  - Removed operation group DiagnosticSettings
  - Removed operation group DiagnosticSettingsCategory
  - Removed operation group EventCategories
  - Removed operation group LogProfiles
  - Removed operation group MetricAlerts
  - Removed operation group MetricAlertsStatus
  - Removed operation group MetricDefinitions
  - Removed operation group MetricNamespaces
  - Removed operation group Metrics
  - Removed operation group Operations
  - Removed operation group PrivateEndpointConnections
  - Removed operation group PrivateLinkResources
  - Removed operation group PrivateLinkScopedResources
  - Removed operation group PrivateLinkScopeOperationStatus
  - Removed operation group PrivateLinkScopes
  - Removed operation group ScheduledQueryRules
  - Removed operation group TenantActivityLogs
  - Removed operation group VMInsights
  - Class MonitorClient has a new signature
  - Interface ActionDetail no longer has parameter detail
  - Interface AzureResource no longer has parameter identity
  - Interface AzureResource no longer has parameter kind
  - Class MonitorClient no longer has parameter actionGroups
  - Class MonitorClient no longer has parameter activityLogAlerts
  - Class MonitorClient no longer has parameter activityLogs
  - Class MonitorClient no longer has parameter alertRuleIncidents
  - Class MonitorClient no longer has parameter alertRules
  - Class MonitorClient no longer has parameter autoscaleSettings
  - Class MonitorClient no longer has parameter baselines
  - Class MonitorClient no longer has parameter dataCollectionEndpoints
  - Class MonitorClient no longer has parameter dataCollectionRuleAssociations
  - Class MonitorClient no longer has parameter dataCollectionRules
  - Class MonitorClient no longer has parameter diagnosticSettings
  - Class MonitorClient no longer has parameter diagnosticSettingsCategory
  - Class MonitorClient no longer has parameter eventCategories
  - Class MonitorClient no longer has parameter logProfiles
  - Class MonitorClient no longer has parameter metricAlerts
  - Class MonitorClient no longer has parameter metricAlertsStatus
  - Class MonitorClient no longer has parameter metricDefinitions
  - Class MonitorClient no longer has parameter metricNamespaces
  - Class MonitorClient no longer has parameter metrics
  - Class MonitorClient no longer has parameter operations
  - Class MonitorClient no longer has parameter privateEndpointConnections
  - Class MonitorClient no longer has parameter privateLinkResources
  - Class MonitorClient no longer has parameter privateLinkScopedResources
  - Class MonitorClient no longer has parameter privateLinkScopeOperationStatus
  - Class MonitorClient no longer has parameter privateLinkScopes
  - Class MonitorClient no longer has parameter scheduledQueryRules
  - Class MonitorClient no longer has parameter subscriptionId
  - Class MonitorClient no longer has parameter tenantActivityLogs
  - Class MonitorClient no longer has parameter vMInsights
  - Removed Enum KnownAggregationTypeEnum
  - Removed Enum KnownAlertSeverity
  - Removed Enum KnownBaselineSensitivity
  - Removed Enum KnownConditionalOperator
  - Removed Enum KnownCreatedByType
  - Removed Enum KnownCriterionType
  - Removed Enum KnownDataStatus
  - Removed Enum KnownDynamicThresholdOperator
  - Removed Enum KnownDynamicThresholdSensitivity
  - Removed Enum KnownEnabled
  - Removed Enum KnownKnownDataCollectionEndpointProvisioningState
  - Removed Enum KnownKnownDataCollectionEndpointResourceKind
  - Removed Enum KnownKnownDataCollectionRuleAssociationProvisioningState
  - Removed Enum KnownKnownDataCollectionRuleProvisioningState
  - Removed Enum KnownKnownDataCollectionRuleResourceKind
  - Removed Enum KnownKnownDataFlowStreams
  - Removed Enum KnownKnownExtensionDataSourceStreams
  - Removed Enum KnownKnownPerfCounterDataSourceStreams
  - Removed Enum KnownKnownPublicNetworkAccessOptions
  - Removed Enum KnownKnownSyslogDataSourceFacilityNames
  - Removed Enum KnownKnownSyslogDataSourceLogLevels
  - Removed Enum KnownKnownSyslogDataSourceStreams
  - Removed Enum KnownKnownWindowsEventLogDataSourceStreams
  - Removed Enum KnownMetricClass
  - Removed Enum KnownMetricTriggerType
  - Removed Enum KnownMetricUnit
  - Removed Enum KnownNamespaceClassification
  - Removed Enum KnownOdatatype
  - Removed Enum KnownOnboardingStatus
  - Removed Enum KnownOperator
  - Removed Enum KnownProvisioningState
  - Removed Enum KnownQueryType
  - Removed Enum KnownScaleRuleMetricDimensionOperationType
    
    
## 7.0.0 (2021-12-20)

The package of @azure/arm-monitor is using our next generation design principles since version 7.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
