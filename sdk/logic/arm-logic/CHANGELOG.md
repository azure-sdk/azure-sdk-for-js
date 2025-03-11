# Release History
    
## 9.0.0 (2025-03-11)
    
### Features Added

  - Added operation group ApiOperations
  - Added operation group IntegrationServiceEnvironmentNetworkHealthOperations
  - Added operation IntegrationServiceEnvironments.update
  - Added operation WorkflowTriggerHistories.beginResubmit
  - Added operation WorkflowTriggerHistories.beginResubmitAndWait
  - Added operation WorkflowTriggers.beginRun
  - Added operation WorkflowTriggers.beginRunAndWait
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
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface IntegrationServiceEnvironmentManagedApisDeleteHeaders
  - Added Interface IntegrationServiceEnvironmentManagedApisPutHeaders
  - Added Interface IntegrationServiceEnvironmentNetworkHealth
  - Added Interface IntegrationServiceEnvironmentsCreateOrUpdateHeaders
  - Added Interface ProxyResource
  - Added Interface SystemData
  - Added Interface TrackedResource
  - Added Interface WorkflowRunActionScopeRepetitionsListNextOptionalParams
  - Added Interface WorkflowsMoveHeaders
  - Added Interface WorkflowTriggerHistoriesResubmitHeaders
  - Added Interface WorkflowTriggersRunHeaders
  - Added Type Alias ActionType
  - Added Type Alias ApiOperationsListNextResponse
  - Added Type Alias ApiOperationsListResponse
  - Added Type Alias CreatedByType
  - Added Type Alias IntegrationServiceEnvironmentManagedApisDeleteResponse
  - Added Type Alias Origin
  - Added Type Alias WorkflowRunActionScopeRepetitionsListNextResponse
  - Added Type Alias WorkflowTriggerHistoriesResubmitResponse
  - Interface ApiOperation has a new optional parameter annotation
  - Interface ApiOperation has a new optional parameter api
  - Interface ApiOperation has a new optional parameter description
  - Interface ApiOperation has a new optional parameter inputsDefinition
  - Interface ApiOperation has a new optional parameter isNotification
  - Interface ApiOperation has a new optional parameter isWebhook
  - Interface ApiOperation has a new optional parameter pageable
  - Interface ApiOperation has a new optional parameter responsesDefinition
  - Interface ApiOperation has a new optional parameter summary
  - Interface ApiOperation has a new optional parameter trigger
  - Interface ApiOperation has a new optional parameter triggerHint
  - Interface ApiOperation has a new optional parameter visibility
  - Interface AssemblyDefinition has a new optional parameter assemblyCulture
  - Interface AssemblyDefinition has a new optional parameter assemblyPublicKeyToken
  - Interface AssemblyDefinition has a new optional parameter assemblyVersion
  - Interface AssemblyDefinition has a new optional parameter changedTime
  - Interface AssemblyDefinition has a new optional parameter content
  - Interface AssemblyDefinition has a new optional parameter contentLink
  - Interface AssemblyDefinition has a new optional parameter contentType
  - Interface AssemblyDefinition has a new optional parameter createdTime
  - Interface AssemblyDefinition has a new optional parameter metadata
  - Interface BatchConfiguration has a new optional parameter changedTime
  - Interface BatchConfiguration has a new optional parameter createdTime
  - Interface BatchConfiguration has a new optional parameter metadata
  - Interface IntegrationServiceEnvironment has a new optional parameter encryptionConfiguration
  - Interface IntegrationServiceEnvironment has a new optional parameter endpointsConfiguration
  - Interface IntegrationServiceEnvironment has a new optional parameter integrationServiceEnvironmentId
  - Interface IntegrationServiceEnvironment has a new optional parameter networkConfiguration
  - Interface IntegrationServiceEnvironment has a new optional parameter provisioningState
  - Interface IntegrationServiceEnvironment has a new optional parameter state
  - Interface Operation has a new optional parameter actionType
  - Interface Operation has a new optional parameter isDataAction
  - Interface RequestHistory has a new optional parameter endTime
  - Interface RequestHistory has a new optional parameter request
  - Interface RequestHistory has a new optional parameter response
  - Interface RequestHistory has a new optional parameter startTime
  - Interface Resource has a new optional parameter systemData
  - Interface WorkflowTriggerHistoriesResubmitOptionalParams has a new optional parameter resumeFrom
  - Interface WorkflowTriggerHistoriesResubmitOptionalParams has a new optional parameter updateIntervalInMs
  - Interface WorkflowTriggersRunOptionalParams has a new optional parameter resumeFrom
  - Interface WorkflowTriggersRunOptionalParams has a new optional parameter updateIntervalInMs
  - Added Enum KnownActionType
  - Added Enum KnownAgreementType
  - Added Enum KnownCreatedByType
  - Added Enum KnownDayOfWeek
  - Added Enum KnownDaysOfWeek
  - Added Enum KnownEdifactDecimalIndicator
  - Added Enum KnownEventLevel
  - Added Enum KnownOrigin
  - Added Enum KnownSegmentTerminatorSuffix
  - Enum KnownManagedServiceIdentityType has a new value SystemAssignedUserAssigned
  - Enum KnownTrackingRecordType has a new value As2MDN
  - Enum KnownTrackingRecordType has a new value As2Message

### Breaking Changes

  - Removed operation group IntegrationServiceEnvironmentManagedApiOperations
  - Removed operation group IntegrationServiceEnvironmentNetworkHealth
  - Removed operation IntegrationServiceEnvironments.beginUpdate
  - Removed operation IntegrationServiceEnvironments.beginUpdateAndWait
  - Removed operation WorkflowRunActionRepetitions.list
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
  - Operation IntegrationServiceEnvironments.delete has a new signature
  - Operation IntegrationServiceEnvironments.get has a new signature
  - Operation IntegrationServiceEnvironments.restart has a new signature
  - Operation IntegrationServiceEnvironmentSkus.list has a new signature
  - Operation WorkflowRuns.list has a new signature
  - Operation Workflows.update has a new signature
  - Interface ApiOperation no longer has parameter properties
  - Interface ApiResourceProperties no longer has parameter name
  - Interface AssemblyDefinition no longer has parameter properties
  - Interface BatchConfiguration no longer has parameter properties
  - Interface EdifactValidationOverride no longer has parameter validateEDITypes
  - Interface EdifactValidationOverride no longer has parameter validateXSDTypes
  - Interface EdifactValidationSettings no longer has parameter validateEDITypes
  - Interface EdifactValidationSettings no longer has parameter validateXSDTypes
  - Interface IntegrationServiceEnvironment no longer has parameter properties
  - Interface IntegrationServiceEnvironmentManagedApi no longer has parameter namePropertiesName
  - Interface IntegrationServiceEnvironmentsUpdateOptionalParams no longer has parameter resumeFrom
  - Interface IntegrationServiceEnvironmentsUpdateOptionalParams no longer has parameter updateIntervalInMs
  - Interface Operation no longer has parameter properties
  - Interface RequestHistory no longer has parameter properties
  - Interface Resource no longer has parameter location
  - Interface Resource no longer has parameter tags
  - Interface WorkflowRun no longer has parameter name
  - Interface WorkflowRun no longer has parameter type
  - Interface WorkflowRunAction no longer has parameter name
  - Interface WorkflowRunAction no longer has parameter type
  - Interface WorkflowTrigger no longer has parameter name
  - Interface WorkflowTrigger no longer has parameter type
  - Interface WorkflowTriggerHistory no longer has parameter name
  - Interface WorkflowTriggerHistory no longer has parameter type
  - Interface X12ValidationOverride no longer has parameter validateEDITypes
  - Interface X12ValidationOverride no longer has parameter validateXSDTypes
  - Interface X12ValidationSettings no longer has parameter validateEDITypes
  - Interface X12ValidationSettings no longer has parameter validateXSDTypes
  - Interface AssemblyDefinition has a new required parameter assemblyName
  - Interface BatchConfiguration has a new required parameter batchGroupName
  - Interface BatchConfiguration has a new required parameter releaseCriteria
  - Interface EdifactValidationOverride has a new required parameter validateEdiTypes
  - Interface EdifactValidationOverride has a new required parameter validateXsdTypes
  - Interface EdifactValidationSettings has a new required parameter validateEdiTypes
  - Interface EdifactValidationSettings has a new required parameter validateXsdTypes
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
  - Type of parameter metadata of interface ContentLink is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter error of interface ErrorResponse is changed from ErrorProperties to ErrorDetail
  - Type of parameter metadata of interface IntegrationAccountAgreement is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter metadata of interface IntegrationAccountCertificate is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter metadata of interface IntegrationAccountMap is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter metadata of interface IntegrationAccountPartner is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter metadata of interface IntegrationAccountSchema is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter content of interface IntegrationAccountSession is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter connectionParameters of interface IntegrationServiceEnvironmentManagedApi is changed from {
        [propertyName: string]: any;
    } to {
        [propertyName: string]: {
            [propertyName: string]: any;
        };
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
  - Type of parameter definition of interface Workflow is changed from any to {
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
  - Type of parameter error of interface WorkflowRun is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter error of interface WorkflowRunAction is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter trackedProperties of interface WorkflowRunAction is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter inputs of interface WorkflowRunActionRepetitionDefinition is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter outputs of interface WorkflowRunActionRepetitionDefinition is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter trackedProperties of interface WorkflowRunActionRepetitionDefinition is changed from any to {
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
  - Type of parameter error of interface WorkflowTriggerHistory is changed from any to {
        [propertyName: string]: any;
    }
  - Type of parameter definition of interface WorkflowVersion is changed from any to {
        [propertyName: string]: any;
    }
  - Class LogicManagementClient no longer has parameter integrationServiceEnvironmentManagedApiOperations
  - Class LogicManagementClient no longer has parameter integrationServiceEnvironmentNetworkHealth
  - Removed Enum KnownAzureAsyncOperationState
  - Removed Enum KnownErrorResponseCode
  - Removed Enum KnownIntegrationServiceEnvironmentNetworkDependencyHealthState
  - Enum KnownTrackingRecordType no longer has value AS2MDN
  - Enum KnownTrackingRecordType no longer has value AS2Message
    
    
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
