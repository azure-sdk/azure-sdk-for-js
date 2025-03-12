# Release History
    
## 9.0.0 (2025-03-12)
    
### Features Added

  - Added operation group ApiOperations
  - Added operation group AssemblyDefinitions
  - Added operation group BatchConfigurations
  - Added operation group RequestHistories
  - Added operation group Templates
  - Added operation group WorkflowRunActionRepetitionDefinitions
  - Added operation group WorkflowRunActionRequestHistoriesOperations
  - Added operation group WorkflowRunActionScopeRepetitionsOperations
  - Added operation group WorkflowRunOperationsOperations
  - Added operation group WorkflowRunsOperations
  - Added operation group WorkflowsOperations
  - Added operation IntegrationServiceEnvironments.integrationServiceEnvironmentNetworkHealthGet
  - Added operation IntegrationServiceEnvironments.list
  - Added operation WorkflowTriggerHistories.beginResubmit
  - Added operation WorkflowTriggerHistories.beginResubmitAndWait
  - Added operation WorkflowTriggers.beginRun
  - Added operation WorkflowTriggers.beginRunAndWait
  - Added operation WorkflowVersions.listCallbackUrl
  - Added Interface ApiOperationsListNextOptionalParams
  - Added Interface ApiOperationsListOptionalParams
  - Added Interface As2AcknowledgementConnectionSettings
  - Added Interface As2AgreementContent
  - Added Interface As2EnvelopeSettings
  - Added Interface As2ErrorSettings
  - Added Interface As2MdnSettings
  - Added Interface As2MessageConnectionSettings
  - Added Interface As2OneWayAgreement
  - Added Interface As2ProtocolSettings
  - Added Interface As2SecuritySettings
  - Added Interface As2ValidationSettings
  - Added Interface AssemblyDefinitionsCreateOrUpdateOptionalParams
  - Added Interface AssemblyDefinitionsDeleteOptionalParams
  - Added Interface AssemblyDefinitionsGetOptionalParams
  - Added Interface AssemblyDefinitionsListContentCallbackUrlOptionalParams
  - Added Interface AssemblyDefinitionsListOptionalParams
  - Added Interface AzureResourceManagerCommonTypesTrackedResourceUpdate
  - Added Interface AzureResourceManagerFoundationsArmTagsProperty
  - Added Interface BatchConfigurationsCreateOrUpdateOptionalParams
  - Added Interface BatchConfigurationsDeleteOptionalParams
  - Added Interface BatchConfigurationsGetOptionalParams
  - Added Interface BatchConfigurationsListOptionalParams
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface FlowTemplateConnectorDetails
  - Added Interface FlowTemplateDetails
  - Added Interface FlowTemplateManifest
  - Added Interface IntegrationAccountAgreementProperties
  - Added Interface IntegrationAccountCertificateProperties
  - Added Interface IntegrationAccountMapProperties
  - Added Interface IntegrationAccountPartnerProperties
  - Added Interface IntegrationAccountProperties
  - Added Interface IntegrationAccountSchemaProperties
  - Added Interface IntegrationAccountSessionProperties
  - Added Interface IntegrationServiceEnvironmentManagedApisDeleteHeaders
  - Added Interface IntegrationServiceEnvironmentManagedApisPutHeaders
  - Added Interface IntegrationServiceEnvironmentNetworkHealth
  - Added Interface IntegrationServiceEnvironmentsCreateOrUpdateHeaders
  - Added Interface IntegrationServiceEnvironmentsIntegrationServiceEnvironmentNetworkHealthGetOptionalParams
  - Added Interface IntegrationServiceEnvironmentsListNextOptionalParams
  - Added Interface IntegrationServiceEnvironmentsListOptionalParams
  - Added Interface IntegrationServiceEnvironmentsUpdateHeaders
  - Added Interface ProxyResource
  - Added Interface RequestHistoriesGetOptionalParams
  - Added Interface RequestHistoriesListNextOptionalParams
  - Added Interface RequestHistoriesListOptionalParams
  - Added Interface SystemData
  - Added Interface Template
  - Added Interface TemplateListResult
  - Added Interface TemplateProperties
  - Added Interface TemplatesCreateOrUpdateOptionalParams
  - Added Interface TemplatesDeleteOptionalParams
  - Added Interface TemplatesDisableOptionalParams
  - Added Interface TemplatesEnableOptionalParams
  - Added Interface TemplatesGenerateUpgradedDefinitionOptionalParams
  - Added Interface TemplatesGetOptionalParams
  - Added Interface TemplatesListByResourceGroupNextOptionalParams
  - Added Interface TemplatesListByResourceGroupOptionalParams
  - Added Interface TemplatesListBySubscriptionNextOptionalParams
  - Added Interface TemplatesListBySubscriptionOptionalParams
  - Added Interface TemplatesListCallbackUrlOptionalParams
  - Added Interface TemplatesListSwaggerOptionalParams
  - Added Interface TemplatesMoveHeaders
  - Added Interface TemplatesMoveOptionalParams
  - Added Interface TemplatesRegenerateAccessKeyOptionalParams
  - Added Interface TemplatesUpdateOptionalParams
  - Added Interface TemplatesValidateByResourceGroupOptionalParams
  - Added Interface TemplateUpdate
  - Added Interface TrackedResource
  - Added Interface WorkflowProperties
  - Added Interface WorkflowRunActionProperties
  - Added Interface WorkflowRunActionRepetitionDefinitionsGetOptionalParams
  - Added Interface WorkflowRunActionRepetitionDefinitionsListExpressionTracesOptionalParams
  - Added Interface WorkflowRunActionRepetitionDefinitionsListNextOptionalParams
  - Added Interface WorkflowRunActionRepetitionDefinitionsListOptionalParams
  - Added Interface WorkflowRunActionRequestHistoriesOperationsGetOptionalParams
  - Added Interface WorkflowRunActionRequestHistoriesOperationsListNextOptionalParams
  - Added Interface WorkflowRunActionRequestHistoriesOperationsListOptionalParams
  - Added Interface WorkflowRunActionScopeRepetitionsOperationsGetOptionalParams
  - Added Interface WorkflowRunActionScopeRepetitionsOperationsListNextOptionalParams
  - Added Interface WorkflowRunActionScopeRepetitionsOperationsListOptionalParams
  - Added Interface WorkflowRunOperationsOperationsGetOptionalParams
  - Added Interface WorkflowRunProperties
  - Added Interface WorkflowRunsOperationsListNextOptionalParams
  - Added Interface WorkflowRunsOperationsListOptionalParams
  - Added Interface WorkflowsMoveHeaders
  - Added Interface WorkflowsOperationsValidateByLocationOptionalParams
  - Added Interface WorkflowTriggerHistoriesResubmitHeaders
  - Added Interface WorkflowTriggerHistoryProperties
  - Added Interface WorkflowTriggerProperties
  - Added Interface WorkflowTriggersRunHeaders
  - Added Interface WorkflowVersionProperties
  - Added Interface WorkflowVersionsListCallbackUrlOptionalParams
  - Added Type Alias ActionType
  - Added Type Alias ApiOperationsListNextResponse
  - Added Type Alias ApiOperationsListResponse
  - Added Type Alias AssemblyDefinitionsCreateOrUpdateResponse
  - Added Type Alias AssemblyDefinitionsGetResponse
  - Added Type Alias AssemblyDefinitionsListContentCallbackUrlResponse
  - Added Type Alias AssemblyDefinitionsListResponse
  - Added Type Alias BatchConfigurationsCreateOrUpdateResponse
  - Added Type Alias BatchConfigurationsGetResponse
  - Added Type Alias BatchConfigurationsListResponse
  - Added Type Alias CreatedByType
  - Added Type Alias FlowRunExecutionMode
  - Added Type Alias FlowTemplateSku
  - Added Type Alias FlowTemplateState
  - Added Type Alias FlowTemplateType
  - Added Type Alias IntegrationServiceEnvironmentManagedApisDeleteResponse
  - Added Type Alias IntegrationServiceEnvironmentsIntegrationServiceEnvironmentNetworkHealthGetResponse
  - Added Type Alias IntegrationServiceEnvironmentsListNextResponse
  - Added Type Alias IntegrationServiceEnvironmentsListResponse
  - Added Type Alias Origin
  - Added Type Alias RequestHistoriesGetResponse
  - Added Type Alias RequestHistoriesListNextResponse
  - Added Type Alias RequestHistoriesListResponse
  - Added Type Alias TemplatesCreateOrUpdateResponse
  - Added Type Alias TemplatesGenerateUpgradedDefinitionResponse
  - Added Type Alias TemplatesGetResponse
  - Added Type Alias TemplatesListByResourceGroupNextResponse
  - Added Type Alias TemplatesListByResourceGroupResponse
  - Added Type Alias TemplatesListBySubscriptionNextResponse
  - Added Type Alias TemplatesListBySubscriptionResponse
  - Added Type Alias TemplatesListCallbackUrlResponse
  - Added Type Alias TemplatesListSwaggerResponse
  - Added Type Alias TemplatesUpdateResponse
  - Added Type Alias WorkflowRunActionRepetitionDefinitionsGetResponse
  - Added Type Alias WorkflowRunActionRepetitionDefinitionsListExpressionTracesResponse
  - Added Type Alias WorkflowRunActionRepetitionDefinitionsListNextResponse
  - Added Type Alias WorkflowRunActionRepetitionDefinitionsListResponse
  - Added Type Alias WorkflowRunActionRequestHistoriesOperationsGetResponse
  - Added Type Alias WorkflowRunActionRequestHistoriesOperationsListNextResponse
  - Added Type Alias WorkflowRunActionRequestHistoriesOperationsListResponse
  - Added Type Alias WorkflowRunActionScopeRepetitionsOperationsGetResponse
  - Added Type Alias WorkflowRunActionScopeRepetitionsOperationsListNextResponse
  - Added Type Alias WorkflowRunActionScopeRepetitionsOperationsListResponse
  - Added Type Alias WorkflowRunOperationsOperationsGetResponse
  - Added Type Alias WorkflowRunsOperationsListNextResponse
  - Added Type Alias WorkflowRunsOperationsListResponse
  - Added Type Alias WorkflowTriggerHistoriesResubmitResponse
  - Added Type Alias WorkflowVersionsListCallbackUrlResponse
  - Interface ApiOperationPropertiesDefinition has a new optional parameter provisioningState
  - Interface AssemblyProperties has a new optional parameter provisioningState
  - Interface BatchConfigurationProperties has a new optional parameter provisioningState
  - Interface IntegrationAccount has a new optional parameter properties
  - Interface IntegrationServiceEnvironmentManagedApi has a new optional parameter properties
  - Interface Operation has a new optional parameter actionType
  - Interface Operation has a new optional parameter isDataAction
  - Interface OperationResult has a new optional parameter canResubmit
  - Interface OperationResult has a new optional parameter executionMode
  - Interface RequestHistoryProperties has a new optional parameter provisioningState
  - Interface Resource has a new optional parameter systemData
  - Interface Workflow has a new optional parameter properties
  - Interface WorkflowRun has a new optional parameter properties
  - Interface WorkflowRunAction has a new optional parameter properties
  - Interface WorkflowRunActionRepetitionDefinition has a new optional parameter properties
  - Interface WorkflowRunActionRepetitionProperties has a new optional parameter provisioningState
  - Interface WorkflowTrigger has a new optional parameter properties
  - Interface WorkflowTriggerHistoriesResubmitOptionalParams has a new optional parameter resumeFrom
  - Interface WorkflowTriggerHistoriesResubmitOptionalParams has a new optional parameter updateIntervalInMs
  - Interface WorkflowTriggerHistory has a new optional parameter properties
  - Interface WorkflowTriggersRunOptionalParams has a new optional parameter resumeFrom
  - Interface WorkflowTriggersRunOptionalParams has a new optional parameter updateIntervalInMs
  - Interface WorkflowVersion has a new optional parameter properties
  - Added Enum KnownActionType
  - Added Enum KnownAgreementType
  - Added Enum KnownCreatedByType
  - Added Enum KnownDayOfWeek
  - Added Enum KnownDaysOfWeek
  - Added Enum KnownEdifactDecimalIndicator
  - Added Enum KnownEventLevel
  - Added Enum KnownFlowRunExecutionMode
  - Added Enum KnownFlowTemplateSku
  - Added Enum KnownFlowTemplateState
  - Added Enum KnownFlowTemplateType
  - Added Enum KnownOrigin
  - Added Enum KnownSegmentTerminatorSuffix

### Breaking Changes

  - Removed operation group IntegrationAccountAssemblies
  - Removed operation group IntegrationAccountBatchConfigurations
  - Removed operation group IntegrationServiceEnvironmentManagedApiOperations
  - Removed operation group IntegrationServiceEnvironmentNetworkHealth
  - Removed operation group IntegrationServiceEnvironmentSkus
  - Removed operation group WorkflowRunActionRepetitions
  - Removed operation group WorkflowRunActionRepetitionsRequestHistories
  - Removed operation group WorkflowRunActionRequestHistories
  - Removed operation group WorkflowRunActionScopeRepetitions
  - Removed operation group WorkflowRunOperations
  - Removed operation group WorkflowVersionTriggers
  - Removed operation WorkflowRuns.list
  - Removed operation Workflows.validateByLocation
  - Removed operation WorkflowTriggerHistories.resubmit
  - Removed operation WorkflowTriggers.run
  - Operation IntegrationServiceEnvironmentManagedApis.beginDelete has a new signature
  - Operation IntegrationServiceEnvironmentManagedApis.beginDeleteAndWait has a new signature
  - Operation IntegrationServiceEnvironmentManagedApis.beginPut has a new signature
  - Operation IntegrationServiceEnvironmentManagedApis.beginPutAndWait has a new signature
  - Operation IntegrationServiceEnvironmentManagedApis.get has a new signature
  - Operation IntegrationServiceEnvironmentManagedApis.list has a new signature
  - Operation IntegrationServiceEnvironments.beginCreateOrUpdate has a new signature
  - Operation IntegrationServiceEnvironments.beginCreateOrUpdateAndWait has a new signature
  - Operation IntegrationServiceEnvironments.beginUpdate has a new signature
  - Operation IntegrationServiceEnvironments.beginUpdateAndWait has a new signature
  - Operation IntegrationServiceEnvironments.delete has a new signature
  - Operation IntegrationServiceEnvironments.get has a new signature
  - Operation IntegrationServiceEnvironments.restart has a new signature
  - Operation Workflows.update has a new signature
  - Interface ApiResourceProperties no longer has parameter name
  - Interface EdifactValidationOverride no longer has parameter validateEDITypes
  - Interface EdifactValidationOverride no longer has parameter validateXSDTypes
  - Interface EdifactValidationSettings no longer has parameter validateEDITypes
  - Interface EdifactValidationSettings no longer has parameter validateXSDTypes
  - Interface IntegrationAccount no longer has parameter integrationServiceEnvironment
  - Interface IntegrationAccount no longer has parameter state
  - Interface IntegrationAccountAgreement no longer has parameter agreementType
  - Interface IntegrationAccountAgreement no longer has parameter changedTime
  - Interface IntegrationAccountAgreement no longer has parameter content
  - Interface IntegrationAccountAgreement no longer has parameter createdTime
  - Interface IntegrationAccountAgreement no longer has parameter guestIdentity
  - Interface IntegrationAccountAgreement no longer has parameter guestPartner
  - Interface IntegrationAccountAgreement no longer has parameter hostIdentity
  - Interface IntegrationAccountAgreement no longer has parameter hostPartner
  - Interface IntegrationAccountAgreement no longer has parameter metadata
  - Interface IntegrationAccountCertificate no longer has parameter changedTime
  - Interface IntegrationAccountCertificate no longer has parameter createdTime
  - Interface IntegrationAccountCertificate no longer has parameter key
  - Interface IntegrationAccountCertificate no longer has parameter metadata
  - Interface IntegrationAccountCertificate no longer has parameter publicCertificate
  - Interface IntegrationAccountMap no longer has parameter changedTime
  - Interface IntegrationAccountMap no longer has parameter content
  - Interface IntegrationAccountMap no longer has parameter contentLink
  - Interface IntegrationAccountMap no longer has parameter contentType
  - Interface IntegrationAccountMap no longer has parameter createdTime
  - Interface IntegrationAccountMap no longer has parameter mapType
  - Interface IntegrationAccountMap no longer has parameter metadata
  - Interface IntegrationAccountMap no longer has parameter parametersSchema
  - Interface IntegrationAccountPartner no longer has parameter changedTime
  - Interface IntegrationAccountPartner no longer has parameter content
  - Interface IntegrationAccountPartner no longer has parameter createdTime
  - Interface IntegrationAccountPartner no longer has parameter metadata
  - Interface IntegrationAccountPartner no longer has parameter partnerType
  - Interface IntegrationAccountSchema no longer has parameter changedTime
  - Interface IntegrationAccountSchema no longer has parameter content
  - Interface IntegrationAccountSchema no longer has parameter contentLink
  - Interface IntegrationAccountSchema no longer has parameter contentType
  - Interface IntegrationAccountSchema no longer has parameter createdTime
  - Interface IntegrationAccountSchema no longer has parameter documentName
  - Interface IntegrationAccountSchema no longer has parameter fileName
  - Interface IntegrationAccountSchema no longer has parameter metadata
  - Interface IntegrationAccountSchema no longer has parameter schemaType
  - Interface IntegrationAccountSchema no longer has parameter targetNamespace
  - Interface IntegrationAccountSession no longer has parameter changedTime
  - Interface IntegrationAccountSession no longer has parameter content
  - Interface IntegrationAccountSession no longer has parameter createdTime
  - Interface IntegrationServiceEnvironment no longer has parameter identity
  - Interface IntegrationServiceEnvironmentManagedApi no longer has parameter apiDefinitions
  - Interface IntegrationServiceEnvironmentManagedApi no longer has parameter apiDefinitionUrl
  - Interface IntegrationServiceEnvironmentManagedApi no longer has parameter backendService
  - Interface IntegrationServiceEnvironmentManagedApi no longer has parameter capabilities
  - Interface IntegrationServiceEnvironmentManagedApi no longer has parameter category
  - Interface IntegrationServiceEnvironmentManagedApi no longer has parameter connectionParameters
  - Interface IntegrationServiceEnvironmentManagedApi no longer has parameter deploymentParameters
  - Interface IntegrationServiceEnvironmentManagedApi no longer has parameter generalInformation
  - Interface IntegrationServiceEnvironmentManagedApi no longer has parameter integrationServiceEnvironment
  - Interface IntegrationServiceEnvironmentManagedApi no longer has parameter metadata
  - Interface IntegrationServiceEnvironmentManagedApi no longer has parameter namePropertiesName
  - Interface IntegrationServiceEnvironmentManagedApi no longer has parameter policies
  - Interface IntegrationServiceEnvironmentManagedApi no longer has parameter provisioningState
  - Interface IntegrationServiceEnvironmentManagedApi no longer has parameter runtimeUrls
  - Interface Operation no longer has parameter properties
  - Interface Resource no longer has parameter location
  - Interface Resource no longer has parameter tags
  - Interface Workflow no longer has parameter accessControl
  - Interface Workflow no longer has parameter accessEndpoint
  - Interface Workflow no longer has parameter changedTime
  - Interface Workflow no longer has parameter createdTime
  - Interface Workflow no longer has parameter definition
  - Interface Workflow no longer has parameter endpointsConfiguration
  - Interface Workflow no longer has parameter identity
  - Interface Workflow no longer has parameter integrationAccount
  - Interface Workflow no longer has parameter integrationServiceEnvironment
  - Interface Workflow no longer has parameter parameters
  - Interface Workflow no longer has parameter provisioningState
  - Interface Workflow no longer has parameter sku
  - Interface Workflow no longer has parameter state
  - Interface Workflow no longer has parameter version
  - Interface WorkflowRun no longer has parameter code
  - Interface WorkflowRun no longer has parameter correlation
  - Interface WorkflowRun no longer has parameter correlationId
  - Interface WorkflowRun no longer has parameter endTime
  - Interface WorkflowRun no longer has parameter error
  - Interface WorkflowRun no longer has parameter name
  - Interface WorkflowRun no longer has parameter outputs
  - Interface WorkflowRun no longer has parameter response
  - Interface WorkflowRun no longer has parameter startTime
  - Interface WorkflowRun no longer has parameter status
  - Interface WorkflowRun no longer has parameter trigger
  - Interface WorkflowRun no longer has parameter type
  - Interface WorkflowRun no longer has parameter waitEndTime
  - Interface WorkflowRun no longer has parameter workflow
  - Interface WorkflowRunAction no longer has parameter code
  - Interface WorkflowRunAction no longer has parameter correlation
  - Interface WorkflowRunAction no longer has parameter endTime
  - Interface WorkflowRunAction no longer has parameter error
  - Interface WorkflowRunAction no longer has parameter inputsLink
  - Interface WorkflowRunAction no longer has parameter name
  - Interface WorkflowRunAction no longer has parameter outputsLink
  - Interface WorkflowRunAction no longer has parameter retryHistory
  - Interface WorkflowRunAction no longer has parameter startTime
  - Interface WorkflowRunAction no longer has parameter status
  - Interface WorkflowRunAction no longer has parameter trackedProperties
  - Interface WorkflowRunAction no longer has parameter trackingId
  - Interface WorkflowRunAction no longer has parameter type
  - Interface WorkflowRunActionRepetitionDefinition no longer has parameter code
  - Interface WorkflowRunActionRepetitionDefinition no longer has parameter correlation
  - Interface WorkflowRunActionRepetitionDefinition no longer has parameter endTime
  - Interface WorkflowRunActionRepetitionDefinition no longer has parameter error
  - Interface WorkflowRunActionRepetitionDefinition no longer has parameter inputs
  - Interface WorkflowRunActionRepetitionDefinition no longer has parameter inputsLink
  - Interface WorkflowRunActionRepetitionDefinition no longer has parameter iterationCount
  - Interface WorkflowRunActionRepetitionDefinition no longer has parameter outputs
  - Interface WorkflowRunActionRepetitionDefinition no longer has parameter outputsLink
  - Interface WorkflowRunActionRepetitionDefinition no longer has parameter repetitionIndexes
  - Interface WorkflowRunActionRepetitionDefinition no longer has parameter retryHistory
  - Interface WorkflowRunActionRepetitionDefinition no longer has parameter startTime
  - Interface WorkflowRunActionRepetitionDefinition no longer has parameter status
  - Interface WorkflowRunActionRepetitionDefinition no longer has parameter trackedProperties
  - Interface WorkflowRunActionRepetitionDefinition no longer has parameter trackingId
  - Interface WorkflowTrigger no longer has parameter changedTime
  - Interface WorkflowTrigger no longer has parameter createdTime
  - Interface WorkflowTrigger no longer has parameter lastExecutionTime
  - Interface WorkflowTrigger no longer has parameter name
  - Interface WorkflowTrigger no longer has parameter nextExecutionTime
  - Interface WorkflowTrigger no longer has parameter provisioningState
  - Interface WorkflowTrigger no longer has parameter recurrence
  - Interface WorkflowTrigger no longer has parameter state
  - Interface WorkflowTrigger no longer has parameter status
  - Interface WorkflowTrigger no longer has parameter type
  - Interface WorkflowTrigger no longer has parameter workflow
  - Interface WorkflowTriggerHistory no longer has parameter code
  - Interface WorkflowTriggerHistory no longer has parameter correlation
  - Interface WorkflowTriggerHistory no longer has parameter endTime
  - Interface WorkflowTriggerHistory no longer has parameter error
  - Interface WorkflowTriggerHistory no longer has parameter fired
  - Interface WorkflowTriggerHistory no longer has parameter inputsLink
  - Interface WorkflowTriggerHistory no longer has parameter name
  - Interface WorkflowTriggerHistory no longer has parameter outputsLink
  - Interface WorkflowTriggerHistory no longer has parameter run
  - Interface WorkflowTriggerHistory no longer has parameter scheduledTime
  - Interface WorkflowTriggerHistory no longer has parameter startTime
  - Interface WorkflowTriggerHistory no longer has parameter status
  - Interface WorkflowTriggerHistory no longer has parameter trackingId
  - Interface WorkflowTriggerHistory no longer has parameter type
  - Interface WorkflowVersion no longer has parameter accessControl
  - Interface WorkflowVersion no longer has parameter accessEndpoint
  - Interface WorkflowVersion no longer has parameter changedTime
  - Interface WorkflowVersion no longer has parameter createdTime
  - Interface WorkflowVersion no longer has parameter definition
  - Interface WorkflowVersion no longer has parameter endpointsConfiguration
  - Interface WorkflowVersion no longer has parameter integrationAccount
  - Interface WorkflowVersion no longer has parameter parameters
  - Interface WorkflowVersion no longer has parameter provisioningState
  - Interface WorkflowVersion no longer has parameter sku
  - Interface WorkflowVersion no longer has parameter state
  - Interface WorkflowVersion no longer has parameter version
  - Interface X12ValidationOverride no longer has parameter validateEDITypes
  - Interface X12ValidationOverride no longer has parameter validateXSDTypes
  - Interface X12ValidationSettings no longer has parameter validateEDITypes
  - Interface X12ValidationSettings no longer has parameter validateXSDTypes
  - Interface EdifactValidationOverride has a new required parameter validateEdiTypes
  - Interface EdifactValidationOverride has a new required parameter validateXsdTypes
  - Interface EdifactValidationSettings has a new required parameter validateEdiTypes
  - Interface EdifactValidationSettings has a new required parameter validateXsdTypes
  - Interface IntegrationAccountAgreement has a new required parameter properties
  - Interface IntegrationAccountCertificate has a new required parameter properties
  - Interface IntegrationAccountMap has a new required parameter properties
  - Interface IntegrationAccountPartner has a new required parameter properties
  - Interface IntegrationAccountSchema has a new required parameter properties
  - Interface IntegrationAccountSession has a new required parameter properties
  - Interface X12ValidationOverride has a new required parameter validateEdiTypes
  - Interface X12ValidationOverride has a new required parameter validateXsdTypes
  - Interface X12ValidationSettings has a new required parameter validateEdiTypes
  - Interface X12ValidationSettings has a new required parameter validateXsdTypes
  - Parameter value of interface ApiOperationListResult is now required
  - Parameter value of interface IntegrationAccountAgreementListResult is now required
  - Parameter value of interface IntegrationAccountCertificateListResult is now required
  - Parameter value of interface IntegrationAccountListResult is now required
  - Parameter value of interface IntegrationAccountMapListResult is now required
  - Parameter value of interface IntegrationAccountPartnerListResult is now required
  - Parameter value of interface IntegrationAccountSchemaListResult is now required
  - Parameter value of interface IntegrationAccountSessionListResult is now required
  - Parameter value of interface IntegrationServiceEnvironmentListResult is now required
  - Parameter value of interface IntegrationServiceEnvironmentManagedApiListResult is now required
  - Parameter value of interface IntegrationServiceEnvironmentSkuList is now required
  - Parameter value of interface RequestHistoryListResult is now required
  - Parameter value of interface WorkflowListResult is now required
  - Parameter value of interface WorkflowRunActionListResult is now required
  - Parameter value of interface WorkflowRunActionRepetitionDefinitionCollection is now required
  - Parameter value of interface WorkflowRunListResult is now required
  - Parameter value of interface WorkflowTriggerHistoryListResult is now required
  - Parameter value of interface WorkflowTriggerListResult is now required
  - Parameter value of interface WorkflowVersionListResult is now required
  - Type of parameter aS2 of interface AgreementContent is changed from AS2AgreementContent to As2AgreementContent
  - Type of parameter swagger of interface ApiReference is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter connectionParameters of interface ApiResourceProperties is changed from {
        [propertyName: string]: any;
    } to {
        [propertyName: string]: {
            [propertyName: string]: any;
        };
    }
  - Type of parameter content of interface ArtifactContentPropertiesDefinition is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter metadata of interface ArtifactProperties is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter metadata of interface ContentLink is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter error of interface ErrorResponse is changed from ErrorProperties to ErrorDetail
  - Type of parameter value of interface Expression is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter origin of interface Operation is changed from string to Origin
  - Type of parameter inputs of interface OperationResult is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter outputs of interface OperationResult is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter trackedProperties of interface OperationResult is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter error of interface OperationResultProperties is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter headers of interface Request_2 is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter headers of interface Response_2 is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter parameters of interface SwaggerCustomDynamicSchema is changed from {
        [propertyName: string]: any;
    } to {
        [propertyName: string]: {
            [propertyName: string]: any;
        };
    }
  - Type of parameter value of interface SwaggerCustomDynamicTreeParameter is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter extensions of interface SwaggerExternalDocumentation is changed from {
        [propertyName: string]: any;
    } to {
        [propertyName: string]: {
            [propertyName: string]: any;
        };
    }
  - Type of parameter additionalProperties of interface SwaggerSchema is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter example of interface SwaggerSchema is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter extensions of interface SwaggerXml is changed from {
        [propertyName: string]: any;
    } to {
        [propertyName: string]: {
            [propertyName: string]: any;
        };
    }
  - Type of parameter record of interface TrackingEvent is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter error of interface WorkflowOutputParameter is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter metadata of interface WorkflowParameter is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter value of interface WorkflowParameter is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter error of interface WorkflowRunTrigger is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter inputs of interface WorkflowRunTrigger is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter outputs of interface WorkflowRunTrigger is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter trackedProperties of interface WorkflowRunTrigger is changed from any to {
        [propertyName: string]: any;
    }
  - Class LogicManagementClient no longer has parameter integrationAccountAssemblies
  - Class LogicManagementClient no longer has parameter integrationAccountBatchConfigurations
  - Class LogicManagementClient no longer has parameter integrationServiceEnvironmentManagedApiOperations
  - Class LogicManagementClient no longer has parameter integrationServiceEnvironmentNetworkHealth
  - Class LogicManagementClient no longer has parameter integrationServiceEnvironmentSkus
  - Class LogicManagementClient no longer has parameter workflowRunActionRepetitions
  - Class LogicManagementClient no longer has parameter workflowRunActionRepetitionsRequestHistories
  - Class LogicManagementClient no longer has parameter workflowRunActionRequestHistories
  - Class LogicManagementClient no longer has parameter workflowRunActionScopeRepetitions
  - Class LogicManagementClient no longer has parameter workflowRunOperations
  - Class LogicManagementClient no longer has parameter workflowVersionTriggers
  - Removed Enum KnownAzureAsyncOperationState
  - Removed Enum KnownErrorResponseCode
  - Removed Enum KnownIntegrationServiceEnvironmentNetworkDependencyHealthState
  - Removed Enum KnownManagedServiceIdentityType
    
    
## 8.2.0 (2023-01-20)
    
### Features Added

  - Interface IntegrationAccountAgreementsListNextOptionalParams no longer has parameter filter
  - Interface IntegrationAccountAgreementsListNextOptionalParams no longer has parameter top
  - Interface IntegrationAccountCertificatesListNextOptionalParams no longer has parameter top
  - Interface IntegrationAccountMapsListNextOptionalParams no longer has parameter filter
  - Interface IntegrationAccountMapsListNextOptionalParams no longer has parameter top
  - Interface IntegrationAccountPartnersListNextOptionalParams no longer has parameter filter
  - Interface IntegrationAccountPartnersListNextOptionalParams no longer has parameter top
  - Interface IntegrationAccountSchemasListNextOptionalParams no longer has parameter filter
  - Interface IntegrationAccountSchemasListNextOptionalParams no longer has parameter top
  - Interface IntegrationAccountSessionsListNextOptionalParams no longer has parameter filter
  - Interface IntegrationAccountSessionsListNextOptionalParams no longer has parameter top
  - Interface IntegrationAccountsListByResourceGroupNextOptionalParams no longer has parameter top
  - Interface IntegrationAccountsListBySubscriptionNextOptionalParams no longer has parameter top
  - Interface IntegrationServiceEnvironmentsListByResourceGroupNextOptionalParams no longer has parameter top
  - Interface IntegrationServiceEnvironmentsListBySubscriptionNextOptionalParams no longer has parameter top
  - Interface WorkflowRunActionsListNextOptionalParams no longer has parameter filter
  - Interface WorkflowRunActionsListNextOptionalParams no longer has parameter top
  - Interface WorkflowRunsListNextOptionalParams no longer has parameter filter
  - Interface WorkflowRunsListNextOptionalParams no longer has parameter top
  - Interface WorkflowsListByResourceGroupNextOptionalParams no longer has parameter filter
  - Interface WorkflowsListByResourceGroupNextOptionalParams no longer has parameter top
  - Interface WorkflowsListBySubscriptionNextOptionalParams no longer has parameter filter
  - Interface WorkflowsListBySubscriptionNextOptionalParams no longer has parameter top
  - Interface WorkflowTriggerHistoriesListNextOptionalParams no longer has parameter filter
  - Interface WorkflowTriggerHistoriesListNextOptionalParams no longer has parameter top
  - Interface WorkflowTriggersListNextOptionalParams no longer has parameter filter
  - Interface WorkflowTriggersListNextOptionalParams no longer has parameter top
  - Interface WorkflowVersionsListNextOptionalParams no longer has parameter top
    
    
## 8.1.0 (2022-09-21)
    
### Features Added

  - Added Interface ApiOperation
  - Added Interface ApiReference
  - Added Interface ArtifactContentPropertiesDefinition
  - Added Interface AssemblyDefinition
  - Added Interface AssemblyProperties
  - Added Interface AzureResourceErrorInfo
  - Added Interface BatchConfiguration
  - Added Interface BatchConfigurationProperties
  - Added Interface ExpressionRoot
  - Added Interface IntegrationAccount
  - Added Interface IntegrationAccountAgreement
  - Added Interface IntegrationAccountCertificate
  - Added Interface IntegrationAccountMap
  - Added Interface IntegrationAccountPartner
  - Added Interface IntegrationAccountSchema
  - Added Interface IntegrationAccountSession
  - Added Interface IntegrationServiceEnvironment
  - Added Interface IntegrationServiceEnvironmentManagedApi
  - Added Interface IntegrationServiceEnvironmentManagedApiProperties
  - Added Interface KeyVaultReference
  - Added Interface ManagedApi
  - Added Interface OperationResult
  - Added Interface RequestHistory
  - Added Interface RunActionCorrelation
  - Added Interface Workflow
  - Added Interface WorkflowOutputParameter
  - Added Interface WorkflowReference
  - Added Interface WorkflowRun
  - Added Interface WorkflowRunAction
  - Added Interface WorkflowRunActionRepetitionDefinition
  - Added Interface WorkflowRunActionRepetitionProperties
  - Added Interface WorkflowTrigger
  - Added Interface WorkflowTriggerHistory
  - Added Interface WorkflowTriggerReference
  - Added Interface WorkflowVersion
    
    
## 8.0.0 (2021-12-17)

The package of @azure/arm-logic is using our next generation design principles since version 8.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
