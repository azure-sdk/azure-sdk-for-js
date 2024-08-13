# Release History
    
## 1.0.0-beta.7 (2024-08-13)
Compared with version 1.0.0-beta.6
    
### Features Added

  - Added operation group ContentPackage
  - Added operation group ContentPackages
  - Added operation group ContentTemplate
  - Added operation group ContentTemplates
  - Added operation group IncidentTasks
  - Added operation group ProductPackage
  - Added operation group ProductPackages
  - Added operation group ProductTemplate
  - Added operation group ProductTemplates
  - Added operation Entities.runPlaybook
  - Added Interface AddIncidentTaskActionProperties
  - Added Interface AlertPropertyMapping
  - Added Interface AutomationRuleAddIncidentTaskAction
  - Added Interface ContentPackageInstallOptionalParams
  - Added Interface ContentPackagesGetOptionalParams
  - Added Interface ContentPackagesListNextOptionalParams
  - Added Interface ContentPackagesListOptionalParams
  - Added Interface ContentPackageUninstallOptionalParams
  - Added Interface ContentTemplateDeleteOptionalParams
  - Added Interface ContentTemplateGetOptionalParams
  - Added Interface ContentTemplateInstallOptionalParams
  - Added Interface ContentTemplatesListNextOptionalParams
  - Added Interface ContentTemplatesListOptionalParams
  - Added Interface EntitiesRunPlaybookOptionalParams
  - Added Interface EntityManualTriggerRequestBody
  - Added Interface IncidentTask
  - Added Interface IncidentTaskList
  - Added Interface IncidentTasksCreateOrUpdateOptionalParams
  - Added Interface IncidentTasksDeleteOptionalParams
  - Added Interface IncidentTasksGetOptionalParams
  - Added Interface IncidentTasksListNextOptionalParams
  - Added Interface IncidentTasksListOptionalParams
  - Added Interface PackageBaseProperties
  - Added Interface PackageList
  - Added Interface PackageModel
  - Added Interface PackageProperties
  - Added Interface ProductPackageAdditionalProperties
  - Added Interface ProductPackageGetOptionalParams
  - Added Interface ProductPackageList
  - Added Interface ProductPackageModel
  - Added Interface ProductPackageProperties
  - Added Interface ProductPackagesListNextOptionalParams
  - Added Interface ProductPackagesListOptionalParams
  - Added Interface ProductTemplateAdditionalProperties
  - Added Interface ProductTemplateGetOptionalParams
  - Added Interface ProductTemplateList
  - Added Interface ProductTemplateModel
  - Added Interface ProductTemplateProperties
  - Added Interface ProductTemplatesListNextOptionalParams
  - Added Interface ProductTemplatesListOptionalParams
  - Added Interface PullRequest
  - Added Interface RepositoryAccess
  - Added Interface RepositoryAccessProperties
  - Added Interface ServicePrincipal
  - Added Interface TemplateAdditionalProperties
  - Added Interface TemplateBaseProperties
  - Added Interface TemplateList
  - Added Interface TemplateModel
  - Added Interface TemplateProperties
  - Added Interface Warning
  - Added Interface WarningBody
  - Added Type Alias AlertProperty
  - Added Type Alias ContentPackageInstallResponse
  - Added Type Alias ContentPackagesGetResponse
  - Added Type Alias ContentPackagesListNextResponse
  - Added Type Alias ContentPackagesListResponse
  - Added Type Alias ContentTemplateGetResponse
  - Added Type Alias ContentTemplateInstallResponse
  - Added Type Alias ContentTemplatesListNextResponse
  - Added Type Alias ContentTemplatesListResponse
  - Added Type Alias EntityKindEnum
  - Added Type Alias Flag
  - Added Type Alias IncidentTasksCreateOrUpdateResponse
  - Added Type Alias IncidentTasksGetResponse
  - Added Type Alias IncidentTasksListNextResponse
  - Added Type Alias IncidentTasksListResponse
  - Added Type Alias IncidentTaskStatus
  - Added Type Alias PackageKind
  - Added Type Alias ProductPackageGetResponse
  - Added Type Alias ProductPackagesListNextResponse
  - Added Type Alias ProductPackagesListResponse
  - Added Type Alias ProductTemplateGetResponse
  - Added Type Alias ProductTemplatesListNextResponse
  - Added Type Alias ProductTemplatesListResponse
  - Added Type Alias RepositoryAccessKind
  - Added Type Alias SourceControlsDeleteResponse
  - Added Type Alias State
  - Added Type Alias ThreatIntelligenceResourceInnerKind
  - Added Type Alias ThreatIntelligenceSortingOrder
  - Added Type Alias WarningCode
  - Interface ActionResponse has a new optional parameter etag
  - Interface AlertDetailsOverride has a new optional parameter alertDynamicProperties
  - Interface Repo has a new optional parameter installationId
  - Interface SourceControl has a new optional parameter pullRequest
  - Interface SourceControl has a new optional parameter repositoryAccess
  - Interface SourceControl has a new optional parameter servicePrincipal
  - Type of parameter actionType of interface AutomationRuleAction is changed from "ModifyProperties" | "RunPlaybook" to "AddIncidentTask" | "ModifyProperties" | "RunPlaybook"
  - Added Enum KnownAlertProperty
  - Added Enum KnownEntityKindEnum
  - Added Enum KnownFlag
  - Added Enum KnownIncidentTaskStatus
  - Added Enum KnownPackageKind
  - Added Enum KnownRepositoryAccessKind
  - Added Enum KnownState
  - Added Enum KnownThreatIntelligenceResourceInnerKind
  - Added Enum KnownThreatIntelligenceSortingOrder
  - Added Enum KnownWarningCode
  - Enum KnownActionType has a new value AddIncidentTask
  - Enum KnownContentType has a new value AutomationRule
  - Enum KnownContentType has a new value HuntingQuery
  - Enum KnownContentType has a new value Parser
  - Enum KnownContentType has a new value Playbook
  - Enum KnownRepoType has a new value AzureDevOps

### Breaking Changes

  - Removed operation group BookmarkOperations
  - Removed operation group BookmarkRelations
  - Removed operation group DataConnectorsCheckRequirementsOperations
  - Removed operation group DomainWhois
  - Removed operation group EntitiesGetTimeline
  - Removed operation group EntitiesRelations
  - Removed operation group EntityQueries
  - Removed operation group EntityQueryTemplates
  - Removed operation group EntityRelations
  - Removed operation group FileImports
  - Removed operation group IPGeodata
  - Removed operation group OfficeConsents
  - Removed operation group ProductSettings
  - Removed operation DataConnectors.connect
  - Removed operation DataConnectors.disconnect
  - Removed operation Entities.expand
  - Removed operation Entities.get
  - Removed operation Entities.getInsights
  - Removed operation Entities.list
  - Removed operation Entities.queries
  - Removed operation Incidents.createTeam
  - Operation SourceControlOperations.listRepositories has a new signature
  - Operation SourceControls.delete has a new signature
  - Interface Bookmark no longer has parameter entityMappings
  - Interface Bookmark no longer has parameter tactics
  - Interface Bookmark no longer has parameter techniques
  - Interface FusionAlertRule no longer has parameter scenarioExclusionPatterns
  - Interface FusionAlertRule no longer has parameter sourceSettings
  - Interface FusionAlertRuleTemplate no longer has parameter sourceSettings
  - Interface Incident no longer has parameter teamInformation
  - Interface IncidentAdditionalData no longer has parameter techniques
  - Interface IoTDeviceEntity no longer has parameter deviceSubType
  - Interface IoTDeviceEntity no longer has parameter importance
  - Interface IoTDeviceEntity no longer has parameter isAuthorized
  - Interface IoTDeviceEntity no longer has parameter isProgramming
  - Interface IoTDeviceEntity no longer has parameter isScanner
  - Interface IoTDeviceEntity no longer has parameter nicEntityIds
  - Interface IoTDeviceEntity no longer has parameter owners
  - Interface IoTDeviceEntity no longer has parameter purdueLayer
  - Interface IoTDeviceEntity no longer has parameter sensor
  - Interface IoTDeviceEntity no longer has parameter site
  - Interface IoTDeviceEntity no longer has parameter zone
  - Interface IoTDeviceEntityProperties no longer has parameter deviceSubType
  - Interface IoTDeviceEntityProperties no longer has parameter importance
  - Interface IoTDeviceEntityProperties no longer has parameter isAuthorized
  - Interface IoTDeviceEntityProperties no longer has parameter isProgramming
  - Interface IoTDeviceEntityProperties no longer has parameter isScanner
  - Interface IoTDeviceEntityProperties no longer has parameter nicEntityIds
  - Interface IoTDeviceEntityProperties no longer has parameter owners
  - Interface IoTDeviceEntityProperties no longer has parameter purdueLayer
  - Interface IoTDeviceEntityProperties no longer has parameter sensor
  - Interface IoTDeviceEntityProperties no longer has parameter site
  - Interface IoTDeviceEntityProperties no longer has parameter zone
  - Interface Repository no longer has parameter pathMapping
  - Interface Watchlist no longer has parameter sourceType
  - Parameter logicAppResourceId of interface PlaybookActionProperties is now required
  - Parameter branch of interface Repository is now required
  - Parameter url of interface Repository is now required
  - Parameter contentTypes of interface SourceControl is now required
  - Parameter displayName of interface SourceControl is now required
  - Parameter repository of interface SourceControl is now required
  - Parameter repoType of interface SourceControl is now required
  - Type of parameter additionalData of interface AccountEntity is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter additionalData of interface AzureResourceEntity is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter additionalData of interface CloudApplicationEntity is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter additionalData of interface DnsEntity is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter kind of interface Entity is changed from EntityKind to EntityKindEnum
  - Type of parameter additionalData of interface EntityCommonProperties is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter additionalData of interface FileEntity is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter additionalData of interface FileHashEntity is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter additionalData of interface HostEntity is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter additionalData of interface HuntingBookmark is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter entityKind of interface IncidentEntitiesResultsMetadata is changed from EntityKind to EntityKindEnum
  - Type of parameter additionalData of interface IoTDeviceEntity is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter additionalData of interface IpEntity is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter additionalData of interface MailboxEntity is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter additionalData of interface MailClusterEntity is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter additionalData of interface MailMessageEntity is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter additionalData of interface MalwareEntity is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter kind of interface MetadataModel is changed from Kind to string
  - Type of parameter kind of interface MetadataPatch is changed from Kind to string
  - Type of parameter additionalData of interface ProcessEntity is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter additionalData of interface RegistryKeyEntity is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter additionalData of interface RegistryValueEntity is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter additionalData of interface SecurityAlert is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter additionalData of interface SecurityGroupEntity is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter additionalData of interface SubmissionMailEntity is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter additionalData of interface ThreatIntelligenceIndicatorModel is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter kind of interface ThreatIntelligenceInformation is changed from ThreatIntelligenceResourceKindEnum to ThreatIntelligenceResourceInnerKind
  - Type of parameter sortOrder of interface ThreatIntelligenceSortingCriteria is changed from ThreatIntelligenceSortingCriteriaEnum to ThreatIntelligenceSortingOrder
  - Type of parameter additionalData of interface UrlEntity is changed from {
        [propertyName: string]: Record<string, unknown>;
    } to {
        [propertyName: string]: any;
    }
  - Type of parameter entityMapping of interface WatchlistItem is changed from {
        [propertyName: string]: any;
    } to Record<string, unknown>
  - Type of parameter itemsKeyValue of interface WatchlistItem is changed from {
        [propertyName: string]: any;
    } to Record<string, unknown>
  - Type of parameter webhookSecretUpdateTime of interface Webhook is changed from string to Date
  - Class SecurityInsights no longer has parameter bookmarkOperations
  - Class SecurityInsights no longer has parameter bookmarkRelations
  - Class SecurityInsights no longer has parameter dataConnectorsCheckRequirementsOperations
  - Class SecurityInsights no longer has parameter domainWhois
  - Class SecurityInsights no longer has parameter entitiesGetTimeline
  - Class SecurityInsights no longer has parameter entitiesRelations
  - Class SecurityInsights no longer has parameter entityQueries
  - Class SecurityInsights no longer has parameter entityQueryTemplates
  - Class SecurityInsights no longer has parameter entityRelations
  - Class SecurityInsights no longer has parameter fileImports
  - Class SecurityInsights no longer has parameter iPGeodata
  - Class SecurityInsights no longer has parameter officeConsents
  - Class SecurityInsights no longer has parameter productSettings
  - Removed Enum KnownConnectAuthKind
  - Removed Enum KnownConnectivityType
  - Removed Enum KnownCustomEntityQueryKind
  - Removed Enum KnownDataConnectorAuthorizationState
  - Removed Enum KnownDataConnectorLicenseState
  - Removed Enum KnownDeleteStatus
  - Removed Enum KnownDeviceImportance
  - Removed Enum KnownEntityItemQueryKind
  - Removed Enum KnownEntityKind
  - Removed Enum KnownEntityProviders
  - Removed Enum KnownEntityQueryKind
  - Removed Enum KnownEntityQueryTemplateKind
  - Removed Enum KnownEntityTimelineKind
  - Removed Enum KnownEntityType
  - Removed Enum KnownEnum13
  - Removed Enum KnownFileFormat
  - Removed Enum KnownFileImportContentType
  - Removed Enum KnownFileImportState
  - Removed Enum KnownGetInsightsError
  - Removed Enum KnownIngestionMode
  - Removed Enum KnownOutputType
  - Removed Enum KnownPermissionProviderScope
  - Removed Enum KnownPollingFrequency
  - Removed Enum KnownProviderName
  - Removed Enum KnownSettingKind
  - Removed Enum KnownSettingType
  - Removed Enum KnownSourceType
  - Removed Enum KnownThreatIntelligenceResourceKindEnum
  - Removed Enum KnownThreatIntelligenceSortingCriteriaEnum
  - Removed Enum KnownUebaDataSources
  - Enum KnownAlertRuleKind no longer has value MLBehaviorAnalytics
  - Enum KnownAlertRuleKind no longer has value NRT
  - Enum KnownAlertRuleKind no longer has value ThreatIntelligence
  - Enum KnownDataConnectorKind no longer has value AmazonWebServicesS3
  - Enum KnownDataConnectorKind no longer has value APIPolling
  - Enum KnownDataConnectorKind no longer has value Dynamics365
  - Enum KnownDataConnectorKind no longer has value GenericUI
  - Enum KnownDataConnectorKind no longer has value IOT
  - Enum KnownDataConnectorKind no longer has value MicrosoftThreatIntelligence
  - Enum KnownDataConnectorKind no longer has value MicrosoftThreatProtection
  - Enum KnownDataConnectorKind no longer has value Office365Project
  - Enum KnownDataConnectorKind no longer has value OfficeATP
  - Enum KnownDataConnectorKind no longer has value OfficeIRM
  - Enum KnownDataConnectorKind no longer has value OfficePowerBI
  - Enum KnownDataConnectorKind no longer has value ThreatIntelligenceTaxii
  - Enum KnownMicrosoftSecurityProductName no longer has value MicrosoftDefenderAdvancedThreatProtection
  - Enum KnownMicrosoftSecurityProductName no longer has value Office365AdvancedThreatProtection
  - Enum KnownRepoType no longer has value DevOps
    
    
## 1.0.0-beta.6 (2023-02-03)
    
### Features Added

  - Interface BookmarkRelationsListNextOptionalParams no longer has parameter filter
  - Interface BookmarkRelationsListNextOptionalParams no longer has parameter orderby
  - Interface BookmarkRelationsListNextOptionalParams no longer has parameter skipToken
  - Interface BookmarkRelationsListNextOptionalParams no longer has parameter top
  - Interface EntitiesRelationsListNextOptionalParams no longer has parameter filter
  - Interface EntitiesRelationsListNextOptionalParams no longer has parameter orderby
  - Interface EntitiesRelationsListNextOptionalParams no longer has parameter skipToken
  - Interface EntitiesRelationsListNextOptionalParams no longer has parameter top
  - Interface EntityQueriesListNextOptionalParams no longer has parameter kind
  - Interface FileImportsListNextOptionalParams no longer has parameter filter
  - Interface FileImportsListNextOptionalParams no longer has parameter orderby
  - Interface FileImportsListNextOptionalParams no longer has parameter skipToken
  - Interface FileImportsListNextOptionalParams no longer has parameter top
  - Interface IncidentCommentsListNextOptionalParams no longer has parameter filter
  - Interface IncidentCommentsListNextOptionalParams no longer has parameter orderby
  - Interface IncidentCommentsListNextOptionalParams no longer has parameter skipToken
  - Interface IncidentCommentsListNextOptionalParams no longer has parameter top
  - Interface IncidentRelationsListNextOptionalParams no longer has parameter filter
  - Interface IncidentRelationsListNextOptionalParams no longer has parameter orderby
  - Interface IncidentRelationsListNextOptionalParams no longer has parameter skipToken
  - Interface IncidentRelationsListNextOptionalParams no longer has parameter top
  - Interface IncidentsListNextOptionalParams no longer has parameter filter
  - Interface IncidentsListNextOptionalParams no longer has parameter orderby
  - Interface IncidentsListNextOptionalParams no longer has parameter skipToken
  - Interface IncidentsListNextOptionalParams no longer has parameter top
  - Interface MetadataListNextOptionalParams no longer has parameter filter
  - Interface MetadataListNextOptionalParams no longer has parameter orderby
  - Interface MetadataListNextOptionalParams no longer has parameter skip
  - Interface MetadataListNextOptionalParams no longer has parameter top
  - Interface ThreatIntelligenceIndicatorsListNextOptionalParams no longer has parameter filter
  - Interface ThreatIntelligenceIndicatorsListNextOptionalParams no longer has parameter orderby
  - Interface ThreatIntelligenceIndicatorsListNextOptionalParams no longer has parameter skipToken
  - Interface ThreatIntelligenceIndicatorsListNextOptionalParams no longer has parameter top
  - Interface WatchlistItemsListNextOptionalParams no longer has parameter skipToken
  - Interface WatchlistsListNextOptionalParams no longer has parameter skipToken
    
    
## 1.0.0-beta.5 (2022-09-27)
    
### Features Added

  - Added operation group FileImports
  - Added Interface AutomationRuleBooleanCondition
  - Added Interface AutomationRulePropertyArrayValuesCondition
  - Added Interface BooleanConditionProperties
  - Added Interface FileImport
  - Added Interface FileImportList
  - Added Interface FileImportsCreateOptionalParams
  - Added Interface FileImportsDeleteOptionalParams
  - Added Interface FileImportsGetOptionalParams
  - Added Interface FileImportsListNextOptionalParams
  - Added Interface FileImportsListOptionalParams
  - Added Interface FileMetadata
  - Added Interface PropertyArrayConditionProperties
  - Added Interface ValidationError
  - Added Type Alias AutomationRuleBooleanConditionSupportedOperator
  - Added Type Alias AutomationRulePropertyArrayConditionSupportedArrayConditionType
  - Added Type Alias AutomationRulePropertyArrayConditionSupportedArrayType
  - Added Type Alias DeleteStatus
  - Added Type Alias FileFormat
  - Added Type Alias FileImportContentType
  - Added Type Alias FileImportsCreateResponse
  - Added Type Alias FileImportsDeleteResponse
  - Added Type Alias FileImportsGetResponse
  - Added Type Alias FileImportsListNextResponse
  - Added Type Alias FileImportsListResponse
  - Added Type Alias FileImportState
  - Added Type Alias IngestionMode
  - Interface NrtAlertRule has a new optional parameter eventGroupingSettings
  - Interface NrtAlertRuleTemplate has a new optional parameter eventGroupingSettings
  - Interface QueryBasedAlertRuleTemplateProperties has a new optional parameter eventGroupingSettings
  - Class SecurityInsights has a new parameter fileImports
  - Added Enum KnownAutomationRuleBooleanConditionSupportedOperator
  - Added Enum KnownAutomationRulePropertyArrayConditionSupportedArrayConditionType
  - Added Enum KnownAutomationRulePropertyArrayConditionSupportedArrayType
  - Added Enum KnownDeleteStatus
  - Added Enum KnownFileFormat
  - Added Enum KnownFileImportContentType
  - Added Enum KnownFileImportState
  - Added Enum KnownIngestionMode
  - Enum KnownAutomationRulePropertyConditionSupportedProperty has a new value IncidentCustomDetailsKey
  - Enum KnownAutomationRulePropertyConditionSupportedProperty has a new value IncidentCustomDetailsValue
  - Enum KnownAutomationRulePropertyConditionSupportedProperty has a new value IncidentUpdatedBySource
  - Enum KnownConditionType has a new value Boolean
  - Enum KnownConditionType has a new value PropertyArray

### Breaking Changes

  - Interface AADDataConnector has a new required parameter kind
  - Interface AatpDataConnector has a new required parameter kind
  - Interface AccountEntity has a new required parameter kind
  - Interface ActivityCustomEntityQuery has a new required parameter kind
  - Interface ActivityEntityQuery has a new required parameter kind
  - Interface ActivityEntityQueryTemplate has a new required parameter kind
  - Interface Anomalies has a new required parameter kind
  - Interface AnomalySecurityMLAnalyticsSettings has a new required parameter kind
  - Interface ASCDataConnector has a new required parameter kind
  - Interface AwsCloudTrailDataConnector has a new required parameter kind
  - Interface AwsS3DataConnector has a new required parameter kind
  - Interface AzureResourceEntity has a new required parameter kind
  - Interface CloudApplicationEntity has a new required parameter kind
  - Interface CodelessApiPollingDataConnector has a new required parameter kind
  - Interface CodelessUiDataConnector has a new required parameter kind
  - Interface DnsEntity has a new required parameter kind
  - Interface Dynamics365DataConnector has a new required parameter kind
  - Interface EntityAnalytics has a new required parameter kind
  - Interface ExpansionEntityQuery has a new required parameter kind
  - Interface EyesOn has a new required parameter kind
  - Interface FileEntity has a new required parameter kind
  - Interface FileHashEntity has a new required parameter kind
  - Interface FusionAlertRule has a new required parameter kind
  - Interface FusionAlertRuleTemplate has a new required parameter kind
  - Interface HostEntity has a new required parameter kind
  - Interface HuntingBookmark has a new required parameter kind
  - Interface IoTDataConnector has a new required parameter kind
  - Interface IoTDeviceEntity has a new required parameter kind
  - Interface IpEntity has a new required parameter kind
  - Interface MailboxEntity has a new required parameter kind
  - Interface MailClusterEntity has a new required parameter kind
  - Interface MailMessageEntity has a new required parameter kind
  - Interface MalwareEntity has a new required parameter kind
  - Interface McasDataConnector has a new required parameter kind
  - Interface MdatpDataConnector has a new required parameter kind
  - Interface MicrosoftSecurityIncidentCreationAlertRule has a new required parameter kind
  - Interface MicrosoftSecurityIncidentCreationAlertRuleTemplate has a new required parameter kind
  - Interface MLBehaviorAnalyticsAlertRule has a new required parameter kind
  - Interface MLBehaviorAnalyticsAlertRuleTemplate has a new required parameter kind
  - Interface MstiDataConnector has a new required parameter kind
  - Interface MTPDataConnector has a new required parameter kind
  - Interface NicEntity has a new required parameter kind
  - Interface NrtAlertRule has a new required parameter kind
  - Interface NrtAlertRuleTemplate has a new required parameter kind
  - Interface Office365ProjectDataConnector has a new required parameter kind
  - Interface OfficeATPDataConnector has a new required parameter kind
  - Interface OfficeDataConnector has a new required parameter kind
  - Interface OfficeIRMDataConnector has a new required parameter kind
  - Interface OfficePowerBIDataConnector has a new required parameter kind
  - Interface ProcessEntity has a new required parameter kind
  - Interface RegistryKeyEntity has a new required parameter kind
  - Interface RegistryValueEntity has a new required parameter kind
  - Interface ScheduledAlertRule has a new required parameter kind
  - Interface ScheduledAlertRuleTemplate has a new required parameter kind
  - Interface SecurityAlert has a new required parameter kind
  - Interface SecurityGroupEntity has a new required parameter kind
  - Interface SubmissionMailEntity has a new required parameter kind
  - Interface ThreatIntelligenceAlertRule has a new required parameter kind
  - Interface ThreatIntelligenceAlertRuleTemplate has a new required parameter kind
  - Interface ThreatIntelligenceIndicatorModel has a new required parameter kind
  - Interface TIDataConnector has a new required parameter kind
  - Interface TiTaxiiDataConnector has a new required parameter kind
  - Interface Ueba has a new required parameter kind
  - Interface UrlEntity has a new required parameter kind
  - Parameter logicAppsResourceId of interface ManualTriggerRequestBody is now required
    
    
## 1.0.0-beta.4 (2022-07-11)
    
### Features Added

  - Added operation group SecurityMLAnalyticsSettings
  - Added Interface AADCheckRequirements
  - Added Interface AADCheckRequirementsProperties
  - Added Interface AADDataConnector
  - Added Interface AADDataConnectorProperties
  - Added Interface AatpCheckRequirements
  - Added Interface AatpCheckRequirementsProperties
  - Added Interface AatpDataConnector
  - Added Interface AatpDataConnectorProperties
  - Added Interface AccountEntity
  - Added Interface AccountEntityProperties
  - Added Interface ActionRequest
  - Added Interface ActionRequestProperties
  - Added Interface ActionResponse
  - Added Interface ActionResponseProperties
  - Added Interface ActivityCustomEntityQuery
  - Added Interface ActivityEntityQuery
  - Added Interface ActivityEntityQueryTemplate
  - Added Interface ActivityTimelineItem
  - Added Interface AlertRule
  - Added Interface AlertRuleTemplate
  - Added Interface AlertRuleTemplateWithMitreProperties
  - Added Interface Anomalies
  - Added Interface AnomalySecurityMLAnalyticsSettings
  - Added Interface AnomalyTimelineItem
  - Added Interface ASCCheckRequirements
  - Added Interface ASCDataConnector
  - Added Interface ASCDataConnectorProperties
  - Added Interface AutomationRule
  - Added Interface AutomationRuleModifyPropertiesAction
  - Added Interface AutomationRulePropertyArrayChangedValuesCondition
  - Added Interface AutomationRulePropertyValuesChangedCondition
  - Added Interface AutomationRuleRunPlaybookAction
  - Added Interface AwsCloudTrailCheckRequirements
  - Added Interface AwsCloudTrailDataConnector
  - Added Interface AwsCloudTrailDataConnectorDataTypesLogs
  - Added Interface AwsS3CheckRequirements
  - Added Interface AwsS3DataConnector
  - Added Interface AwsS3DataConnectorDataTypesLogs
  - Added Interface AzureResourceEntity
  - Added Interface AzureResourceEntityProperties
  - Added Interface Bookmark
  - Added Interface BookmarkTimelineItem
  - Added Interface CloudApplicationEntity
  - Added Interface CloudApplicationEntityProperties
  - Added Interface CodelessApiPollingDataConnector
  - Added Interface CodelessUiConnectorConfigPropertiesConnectivityCriteriaItem
  - Added Interface CodelessUiConnectorConfigPropertiesDataTypesItem
  - Added Interface CodelessUiConnectorConfigPropertiesGraphQueriesItem
  - Added Interface CodelessUiConnectorConfigPropertiesInstructionStepsItem
  - Added Interface CodelessUiConnectorConfigPropertiesSampleQueriesItem
  - Added Interface CodelessUiDataConnector
  - Added Interface CustomEntityQuery
  - Added Interface Customs
  - Added Interface DataConnector
  - Added Interface DnsEntity
  - Added Interface DnsEntityProperties
  - Added Interface Dynamics365CheckRequirements
  - Added Interface Dynamics365CheckRequirementsProperties
  - Added Interface Dynamics365DataConnector
  - Added Interface Dynamics365DataConnectorDataTypesDynamics365CdsActivities
  - Added Interface Dynamics365DataConnectorProperties
  - Added Interface Entity
  - Added Interface EntityAnalytics
  - Added Interface EntityQuery
  - Added Interface EntityQueryTemplate
  - Added Interface ExpansionEntityQuery
  - Added Interface EyesOn
  - Added Interface FileEntity
  - Added Interface FileEntityProperties
  - Added Interface FileHashEntity
  - Added Interface FileHashEntityProperties
  - Added Interface FusionAlertRule
  - Added Interface FusionAlertRuleTemplate
  - Added Interface GetInsightsErrorKind
  - Added Interface HostEntity
  - Added Interface HostEntityProperties
  - Added Interface HuntingBookmark
  - Added Interface HuntingBookmarkProperties
  - Added Interface Incident
  - Added Interface IncidentComment
  - Added Interface InsightQueryItem
  - Added Interface InsightQueryItemProperties
  - Added Interface InstructionStepsInstructionsItem
  - Added Interface IoTCheckRequirements
  - Added Interface IoTDataConnector
  - Added Interface IoTDataConnectorProperties
  - Added Interface IoTDeviceEntity
  - Added Interface IoTDeviceEntityProperties
  - Added Interface IpEntity
  - Added Interface IpEntityProperties
  - Added Interface MailboxEntity
  - Added Interface MailboxEntityProperties
  - Added Interface MailClusterEntity
  - Added Interface MailClusterEntityProperties
  - Added Interface MailMessageEntity
  - Added Interface MailMessageEntityProperties
  - Added Interface MalwareEntity
  - Added Interface MalwareEntityProperties
  - Added Interface McasCheckRequirements
  - Added Interface McasCheckRequirementsProperties
  - Added Interface McasDataConnector
  - Added Interface McasDataConnectorDataTypes
  - Added Interface McasDataConnectorProperties
  - Added Interface MdatpCheckRequirements
  - Added Interface MdatpCheckRequirementsProperties
  - Added Interface MdatpDataConnector
  - Added Interface MdatpDataConnectorProperties
  - Added Interface MetadataModel
  - Added Interface MetadataPatch
  - Added Interface MicrosoftSecurityIncidentCreationAlertRule
  - Added Interface MicrosoftSecurityIncidentCreationAlertRuleProperties
  - Added Interface MicrosoftSecurityIncidentCreationAlertRuleTemplate
  - Added Interface MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties
  - Added Interface MLBehaviorAnalyticsAlertRule
  - Added Interface MLBehaviorAnalyticsAlertRuleTemplate
  - Added Interface MLBehaviorAnalyticsAlertRuleTemplateProperties
  - Added Interface MstiCheckRequirements
  - Added Interface MstiCheckRequirementsProperties
  - Added Interface MstiDataConnector
  - Added Interface MstiDataConnectorDataTypesBingSafetyPhishingURL
  - Added Interface MstiDataConnectorDataTypesMicrosoftEmergingThreatFeed
  - Added Interface MstiDataConnectorProperties
  - Added Interface MtpCheckRequirements
  - Added Interface MTPCheckRequirementsProperties
  - Added Interface MTPDataConnector
  - Added Interface MTPDataConnectorDataTypesIncidents
  - Added Interface MTPDataConnectorProperties
  - Added Interface NicEntity
  - Added Interface NicEntityProperties
  - Added Interface NrtAlertRule
  - Added Interface NrtAlertRuleTemplate
  - Added Interface NrtAlertRuleTemplateProperties
  - Added Interface Office365ProjectCheckRequirements
  - Added Interface Office365ProjectCheckRequirementsProperties
  - Added Interface Office365ProjectConnectorDataTypesLogs
  - Added Interface Office365ProjectDataConnector
  - Added Interface Office365ProjectDataConnectorProperties
  - Added Interface OfficeATPCheckRequirements
  - Added Interface OfficeATPCheckRequirementsProperties
  - Added Interface OfficeATPDataConnector
  - Added Interface OfficeATPDataConnectorProperties
  - Added Interface OfficeConsent
  - Added Interface OfficeDataConnector
  - Added Interface OfficeDataConnectorDataTypesExchange
  - Added Interface OfficeDataConnectorDataTypesSharePoint
  - Added Interface OfficeDataConnectorDataTypesTeams
  - Added Interface OfficeDataConnectorProperties
  - Added Interface OfficeIRMCheckRequirements
  - Added Interface OfficeIRMCheckRequirementsProperties
  - Added Interface OfficeIRMDataConnector
  - Added Interface OfficeIRMDataConnectorProperties
  - Added Interface OfficePowerBICheckRequirements
  - Added Interface OfficePowerBICheckRequirementsProperties
  - Added Interface OfficePowerBIConnectorDataTypesLogs
  - Added Interface OfficePowerBIDataConnector
  - Added Interface OfficePowerBIDataConnectorProperties
  - Added Interface PermissionsCustomsItem
  - Added Interface PermissionsResourceProviderItem
  - Added Interface ProcessEntity
  - Added Interface ProcessEntityProperties
  - Added Interface PropertyArrayChangedConditionProperties
  - Added Interface PropertyChangedConditionProperties
  - Added Interface PropertyConditionProperties
  - Added Interface RegistryKeyEntity
  - Added Interface RegistryKeyEntityProperties
  - Added Interface RegistryValueEntity
  - Added Interface RegistryValueEntityProperties
  - Added Interface Relation
  - Added Interface ResourceWithEtag
  - Added Interface ScheduledAlertRule
  - Added Interface ScheduledAlertRuleProperties
  - Added Interface ScheduledAlertRuleTemplate
  - Added Interface SecurityAlert
  - Added Interface SecurityAlertProperties
  - Added Interface SecurityAlertTimelineItem
  - Added Interface SecurityGroupEntity
  - Added Interface SecurityGroupEntityProperties
  - Added Interface SecurityMLAnalyticsSetting
  - Added Interface SecurityMLAnalyticsSettingsCreateOrUpdateOptionalParams
  - Added Interface SecurityMLAnalyticsSettingsDataSource
  - Added Interface SecurityMLAnalyticsSettingsDeleteOptionalParams
  - Added Interface SecurityMLAnalyticsSettingsGetOptionalParams
  - Added Interface SecurityMLAnalyticsSettingsList
  - Added Interface SecurityMLAnalyticsSettingsListNextOptionalParams
  - Added Interface SecurityMLAnalyticsSettingsListOptionalParams
  - Added Interface SentinelOnboardingState
  - Added Interface Settings
  - Added Interface SourceControl
  - Added Interface SubmissionMailEntity
  - Added Interface SubmissionMailEntityProperties
  - Added Interface ThreatIntelligenceAlertRule
  - Added Interface ThreatIntelligenceAlertRuleTemplate
  - Added Interface ThreatIntelligenceAlertRuleTemplateProperties
  - Added Interface ThreatIntelligenceIndicatorModel
  - Added Interface ThreatIntelligenceIndicatorProperties
  - Added Interface ThreatIntelligenceInformation
  - Added Interface TICheckRequirements
  - Added Interface TICheckRequirementsProperties
  - Added Interface TIDataConnector
  - Added Interface TIDataConnectorDataTypesIndicators
  - Added Interface TIDataConnectorProperties
  - Added Interface TiTaxiiCheckRequirements
  - Added Interface TiTaxiiCheckRequirementsProperties
  - Added Interface TiTaxiiDataConnector
  - Added Interface TiTaxiiDataConnectorDataTypesTaxiiClient
  - Added Interface TiTaxiiDataConnectorProperties
  - Added Interface Ueba
  - Added Interface UrlEntity
  - Added Interface UrlEntityProperties
  - Added Interface Watchlist
  - Added Interface WatchlistItem
  - Added Type Alias AutomationRulePropertyArrayChangedConditionSupportedArrayType
  - Added Type Alias AutomationRulePropertyArrayChangedConditionSupportedChangeType
  - Added Type Alias AutomationRulePropertyChangedConditionSupportedChangedType
  - Added Type Alias AutomationRulePropertyChangedConditionSupportedPropertyType
  - Added Type Alias DeviceImportance
  - Added Type Alias EntityProviders
  - Added Type Alias Enum13
  - Added Type Alias GetInsightsError
  - Added Type Alias SecurityMLAnalyticsSettingsCreateOrUpdateResponse
  - Added Type Alias SecurityMLAnalyticsSettingsGetResponse
  - Added Type Alias SecurityMLAnalyticsSettingsKind
  - Added Type Alias SecurityMLAnalyticsSettingsListNextResponse
  - Added Type Alias SecurityMLAnalyticsSettingsListResponse
  - Added Type Alias SecurityMLAnalyticsSettingUnion
  - Added Type Alias SettingsStatus
  - Interface DataConnectorConnectBody has a new optional parameter dataCollectionEndpoint
  - Interface DataConnectorConnectBody has a new optional parameter dataCollectionRuleImmutableId
  - Interface DataConnectorConnectBody has a new optional parameter outputStream
  - Class SecurityInsights has a new parameter securityMLAnalyticsSettings
  - Added Enum KnownAutomationRulePropertyArrayChangedConditionSupportedArrayType
  - Added Enum KnownAutomationRulePropertyArrayChangedConditionSupportedChangeType
  - Added Enum KnownAutomationRulePropertyChangedConditionSupportedChangedType
  - Added Enum KnownAutomationRulePropertyChangedConditionSupportedPropertyType
  - Added Enum KnownDeviceImportance
  - Added Enum KnownEntityProviders
  - Added Enum KnownEnum13
  - Added Enum KnownGetInsightsError
  - Added Enum KnownSecurityMLAnalyticsSettingsKind
  - Added Enum KnownSettingsStatus
  - Enum KnownAutomationRulePropertyConditionSupportedProperty has a new value AlertAnalyticRuleIds
  - Enum KnownConditionType has a new value PropertyArrayChanged
  - Enum KnownConditionType has a new value PropertyChanged
  - Enum KnownEntityKind has a new value Nic
  - Enum KnownEntityTimelineKind has a new value Anomaly
  - Enum KnownEntityType has a new value Nic
  - Enum KnownTriggersOn has a new value Alerts
  - Enum KnownTriggersWhen has a new value Updated

### Breaking Changes

  - Removed Enum KnownEnum12
  - Removed Enum KnownProvisioningState
  - Removed Enum KnownSkuKind
    
    
## 1.0.0-beta.3 (2022-05-16)
    
### Features Added

  - Added Type Alias ProvisioningState
  - Type Alias Watchlist has a new parameter sasUri
  - Type Alias Watchlist has a new parameter provisioningState
  - Added Enum KnownProvisioningState

### Breaking Changes

  - Type Alias WatchlistItem no longer has parameter itemsKeyValue
  - Type Alias WatchlistItem no longer has parameter entityMapping
    
    
## 1.0.0-beta.2 (2022-03-17)
    
### Features Added

  - Added operation Incidents.runPlaybook
  - Added Interface AutomationRulePropertyValuesCondition
  - Added Interface AzureDevOpsResourceInfo
  - Added Interface BookmarkEntityMappings
  - Added Interface Deployment
  - Added Interface DeploymentInfo
  - Added Interface EntityFieldMapping
  - Added Interface FusionScenarioExclusionPattern
  - Added Interface FusionSourceSettings
  - Added Interface FusionSourceSubTypeSetting
  - Added Interface FusionSubTypeSeverityFilter
  - Added Interface FusionSubTypeSeverityFiltersItem
  - Added Interface FusionTemplateSourceSetting
  - Added Interface FusionTemplateSourceSubType
  - Added Interface FusionTemplateSubTypeSeverityFilter
  - Added Interface GitHubResourceInfo
  - Added Interface IncidentPropertiesAction
  - Added Interface IncidentsRunPlaybookOptionalParams
  - Added Interface ManualTriggerRequestBody
  - Added Interface Office365ProjectConnectorDataTypes
  - Added Interface OfficePowerBIConnectorDataTypes
  - Added Interface PlaybookActionProperties
  - Added Interface RepositoryResourceInfo
  - Added Interface WatchlistsCreateOrUpdateHeaders
  - Added Interface WatchlistsDeleteHeaders
  - Added Interface Webhook
  - Added Type Alias ActionType
  - Added Type Alias AlertRuleTemplateWithMitreProperties
  - Added Type Alias AutomationRulesDeleteResponse
  - Added Type Alias ConditionType
  - Added Type Alias DeploymentFetchStatus
  - Added Type Alias DeploymentResult
  - Added Type Alias DeploymentState
  - Added Type Alias Enum12
  - Added Type Alias IncidentsRunPlaybookResponse
  - Added Type Alias IoTCheckRequirements
  - Added Type Alias IoTDataConnector
  - Added Type Alias IoTDataConnectorProperties
  - Added Type Alias Office365ProjectCheckRequirements
  - Added Type Alias Office365ProjectCheckRequirementsProperties
  - Added Type Alias Office365ProjectConnectorDataTypesLogs
  - Added Type Alias Office365ProjectDataConnector
  - Added Type Alias Office365ProjectDataConnectorProperties
  - Added Type Alias OfficePowerBICheckRequirements
  - Added Type Alias OfficePowerBICheckRequirementsProperties
  - Added Type Alias OfficePowerBIConnectorDataTypesLogs
  - Added Type Alias OfficePowerBIDataConnector
  - Added Type Alias OfficePowerBIDataConnectorProperties
  - Added Type Alias PropertyConditionProperties
  - Added Type Alias SourceType
  - Added Type Alias Version
  - Added Type Alias WatchlistsDeleteResponse
  - Interface AutomationRulesCreateOrUpdateOptionalParams has a new optional parameter automationRuleToUpsert
  - Interface IncidentAdditionalData has a new optional parameter providerIncidentUrl
  - Interface IncidentAdditionalData has a new optional parameter techniques
  - Interface ScheduledAlertRuleCommonProperties has a new optional parameter alertDetailsOverride
  - Interface ScheduledAlertRuleCommonProperties has a new optional parameter customDetails
  - Interface ScheduledAlertRuleCommonProperties has a new optional parameter entityMappings
  - Interface ScheduledAlertRuleCommonProperties has a new optional parameter query
  - Interface ScheduledAlertRuleCommonProperties has a new optional parameter severity
  - Interface WatchlistItemsListNextOptionalParams has a new optional parameter skipToken
  - Interface WatchlistItemsListOptionalParams has a new optional parameter skipToken
  - Interface WatchlistsListNextOptionalParams has a new optional parameter skipToken
  - Interface WatchlistsListOptionalParams has a new optional parameter skipToken
  - Add parameters of AlertRuleTemplateWithMitreProperties to TypeAlias MLBehaviorAnalyticsAlertRuleTemplateProperties
  - Add parameters of AlertRuleTemplateWithMitreProperties to TypeAlias NrtAlertRuleTemplateProperties
  - Add parameters of AlertRuleTemplateWithMitreProperties to TypeAlias ThreatIntelligenceAlertRuleTemplateProperties
  - Type Alias Bookmark has a new parameter entityMappings
  - Type Alias Bookmark has a new parameter tactics
  - Type Alias Bookmark has a new parameter techniques
  - Type Alias FusionAlertRule has a new parameter sourceSettings
  - Type Alias FusionAlertRule has a new parameter scenarioExclusionPatterns
  - Type Alias FusionAlertRule has a new parameter techniques
  - Type Alias FusionAlertRuleTemplate has a new parameter techniques
  - Type Alias FusionAlertRuleTemplate has a new parameter sourceSettings
  - Type Alias MetadataModel has a new parameter customVersion
  - Type Alias MetadataModel has a new parameter contentSchemaVersion
  - Type Alias MetadataModel has a new parameter icon
  - Type Alias MetadataModel has a new parameter threatAnalysisTactics
  - Type Alias MetadataModel has a new parameter threatAnalysisTechniques
  - Type Alias MetadataModel has a new parameter previewImages
  - Type Alias MetadataModel has a new parameter previewImagesDark
  - Type Alias MetadataPatch has a new parameter customVersion
  - Type Alias MetadataPatch has a new parameter contentSchemaVersion
  - Type Alias MetadataPatch has a new parameter icon
  - Type Alias MetadataPatch has a new parameter threatAnalysisTactics
  - Type Alias MetadataPatch has a new parameter threatAnalysisTechniques
  - Type Alias MetadataPatch has a new parameter previewImages
  - Type Alias MetadataPatch has a new parameter previewImagesDark
  - Type Alias MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties has a new parameter displayNamesFilter
  - Type Alias MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties has a new parameter displayNamesExcludeFilter
  - Type Alias MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties has a new parameter productFilter
  - Type Alias MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties has a new parameter severitiesFilter
  - Type Alias MLBehaviorAnalyticsAlertRule has a new parameter techniques
  - Type Alias MLBehaviorAnalyticsAlertRuleTemplate has a new parameter techniques
  - Type Alias NrtAlertRule has a new parameter techniques
  - Type Alias NrtAlertRuleTemplate has a new parameter techniques
  - Type Alias ScheduledAlertRule has a new parameter techniques
  - Type Alias ScheduledAlertRuleProperties has a new parameter alertRuleTemplateName
  - Type Alias ScheduledAlertRuleProperties has a new parameter templateVersion
  - Type Alias ScheduledAlertRuleProperties has a new parameter description
  - Type Alias ScheduledAlertRuleProperties has a new parameter lastModifiedUtc
  - Type Alias ScheduledAlertRuleProperties has a new parameter tactics
  - Type Alias ScheduledAlertRuleProperties has a new parameter techniques
  - Type Alias ScheduledAlertRuleProperties has a new parameter incidentConfiguration
  - Type Alias ScheduledAlertRuleTemplate has a new parameter techniques
  - Type Alias SourceControl has a new parameter version
  - Type Alias SourceControl has a new parameter repositoryResourceInfo
  - Type Alias SourceControl has a new parameter lastDeploymentInfo
  - Type Alias ThreatIntelligenceAlertRule has a new parameter techniques
  - Type Alias ThreatIntelligenceAlertRuleTemplate has a new parameter techniques
  - Type Alias Watchlist has a new parameter sourceType
  - Added Enum KnownActionType
  - Added Enum KnownConditionType
  - Added Enum KnownDeploymentFetchStatus
  - Added Enum KnownDeploymentResult
  - Added Enum KnownDeploymentState
  - Added Enum KnownEnum12
  - Added Enum KnownSourceType
  - Added Enum KnownVersion
  - Enum KnownAttackTactic has a new value ImpairProcessControl
  - Enum KnownAttackTactic has a new value InhibitResponseFunction
  - Enum KnownAttackTactic has a new value Reconnaissance
  - Enum KnownAttackTactic has a new value ResourceDevelopment
  - Enum KnownAutomationRulePropertyConditionSupportedProperty has a new value AlertProductNames
  - Enum KnownAutomationRulePropertyConditionSupportedProperty has a new value IncidentLabel
  - Enum KnownDataConnectorKind has a new value IOT
  - Enum KnownDataConnectorKind has a new value Office365Project
  - Enum KnownDataConnectorKind has a new value OfficePowerBI
  - Enum KnownIncidentLabelType has a new value AutoAssigned
  - Enum KnownKind has a new value AutomationRule
  - Enum KnownKind has a new value AzureFunction
  - Enum KnownKind has a new value LogicAppsCustomConnector

### Breaking Changes

  - Operation AutomationRules.createOrUpdate has a new signature
  - Operation ThreatIntelligenceIndicator.create has a new signature
  - Operation ThreatIntelligenceIndicator.createIndicator has a new signature
  - Operation ThreatIntelligenceIndicator.replaceTags has a new signature
  - Interface QueryBasedAlertRuleTemplateProperties no longer has parameter tactics
  - Delete parameters of MicrosoftSecurityIncidentCreationAlertRuleCommonProperties in TypeAlias MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties
  - Delete parameters of AlertRuleTemplatePropertiesBase in TypeAlias MLBehaviorAnalyticsAlertRuleTemplateProperties
  - Delete parameters of AlertRuleTemplatePropertiesBase in TypeAlias NrtAlertRuleTemplateProperties
  - Delete parameters of QueryBasedAlertRuleProperties in TypeAlias ScheduledAlertRuleProperties
  - Delete parameters of AlertRuleTemplatePropertiesBase in TypeAlias ThreatIntelligenceAlertRuleTemplateProperties
  - Delete parameters of ThreatIntelligenceResourceKind in TypeAlias ThreatIntelligenceInformation
  - Type Alias MLBehaviorAnalyticsAlertRuleTemplateProperties no longer has parameter tactics
  - Type Alias ThreatIntelligenceAlertRuleTemplateProperties no longer has parameter tactics
  - Type Alias Watchlist no longer has parameter watchlistItemsCount
  - Type Alias ScheduledAlertRuleProperties has a new parameter displayName
  - Type Alias ScheduledAlertRuleProperties has a new parameter enabled
  - Type Alias ScheduledAlertRuleProperties has a new parameter suppressionDuration
  - Type Alias ScheduledAlertRuleProperties has a new parameter suppressionEnabled
  - Type Alias ThreatIntelligenceInformation has a new parameter kind
  - Parameter displayName of Type Alias AutomationRule is now required
  - Parameter order of Type Alias AutomationRule is now required
  - Parameter triggeringLogic of Type Alias AutomationRule is now required
  - Parameter actions of Type Alias AutomationRule is now required
  - Removed Enum KnownAutomationRuleActionType
  - Removed Enum KnownAutomationRuleConditionType
  - Removed Enum KnownEnum8
  - Removed Enum KnownSource
  - Enum KnownIncidentLabelType no longer has value System
    
    
## 1.0.0-beta.1 (2022-01-19)

The package of @azure/arm-securityinsight is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
