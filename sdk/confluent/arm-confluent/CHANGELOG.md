# Release History
    
## 3.2.0 (2024-12-24)
    
### Features Added

  - Added operation group Cluster
  - Added operation group Connector
  - Added operation group Environment
  - Added operation group Topics
  - Added Interface AzureBlobStorageSinkConnectorServiceInfo
  - Added Interface AzureBlobStorageSourceConnectorServiceInfo
  - Added Interface AzureCosmosDBSinkConnectorServiceInfo
  - Added Interface AzureCosmosDBSourceConnectorServiceInfo
  - Added Interface AzureSynapseAnalyticsSinkConnectorServiceInfo
  - Added Interface ClusterCreateOrUpdateOptionalParams
  - Added Interface ClusterDeleteHeaders
  - Added Interface ClusterDeleteOptionalParams
  - Added Interface ConnectorCreateOrUpdateOptionalParams
  - Added Interface ConnectorDeleteHeaders
  - Added Interface ConnectorDeleteOptionalParams
  - Added Interface ConnectorGetOptionalParams
  - Added Interface ConnectorInfoBase
  - Added Interface ConnectorListNextOptionalParams
  - Added Interface ConnectorListOptionalParams
  - Added Interface ConnectorResource
  - Added Interface ConnectorServiceTypeInfoBase
  - Added Interface EnvironmentCreateOrUpdateOptionalParams
  - Added Interface EnvironmentDeleteHeaders
  - Added Interface EnvironmentDeleteOptionalParams
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface KafkaAzureBlobStorageSinkConnectorInfo
  - Added Interface KafkaAzureBlobStorageSourceConnectorInfo
  - Added Interface KafkaAzureCosmosDBSinkConnectorInfo
  - Added Interface KafkaAzureCosmosDBSourceConnectorInfo
  - Added Interface KafkaAzureSynapseAnalyticsSinkConnectorInfo
  - Added Interface ListConnectorsSuccessResponse
  - Added Interface ListTopicsSuccessResponse
  - Added Interface PartnerInfoBase
  - Added Interface ProxyResource
  - Added Interface Resource
  - Added Interface StreamGovernanceConfig
  - Added Interface TopicMetadataEntity
  - Added Interface TopicRecord
  - Added Interface TopicsCreateOptionalParams
  - Added Interface TopicsDeleteHeaders
  - Added Interface TopicsDeleteOptionalParams
  - Added Interface TopicsGetOptionalParams
  - Added Interface TopicsInputConfig
  - Added Interface TopicsListNextOptionalParams
  - Added Interface TopicsListOptionalParams
  - Added Interface TopicsRelatedLink
  - Added Type Alias AuthType
  - Added Type Alias ClusterCreateOrUpdateResponse
  - Added Type Alias ClusterDeleteResponse
  - Added Type Alias ConnectorClass
  - Added Type Alias ConnectorCreateOrUpdateResponse
  - Added Type Alias ConnectorDeleteResponse
  - Added Type Alias ConnectorGetResponse
  - Added Type Alias ConnectorListNextResponse
  - Added Type Alias ConnectorListResponse
  - Added Type Alias ConnectorServiceType
  - Added Type Alias ConnectorServiceTypeInfoBaseUnion
  - Added Type Alias ConnectorStatus
  - Added Type Alias ConnectorType
  - Added Type Alias DataFormatType
  - Added Type Alias EnvironmentCreateOrUpdateResponse
  - Added Type Alias EnvironmentDeleteResponse
  - Added Type Alias Package
  - Added Type Alias PartnerConnectorType
  - Added Type Alias PartnerInfoBaseUnion
  - Added Type Alias TopicsCreateResponse
  - Added Type Alias TopicsDeleteResponse
  - Added Type Alias TopicsGetResponse
  - Added Type Alias TopicsListNextResponse
  - Added Type Alias TopicsListResponse
  - Interface SCClusterRecord has a new optional parameter type
  - Interface SCClusterSpecEntity has a new optional parameter package
  - Interface SCEnvironmentRecord has a new optional parameter streamGovernanceConfig
  - Interface SCEnvironmentRecord has a new optional parameter type
  - Added Enum KnownAuthType
  - Added Enum KnownConnectorClass
  - Added Enum KnownConnectorServiceType
  - Added Enum KnownConnectorStatus
  - Added Enum KnownConnectorType
  - Added Enum KnownDataFormatType
  - Added Enum KnownPackage
  - Added Enum KnownPartnerConnectorType
    
    
## 3.1.0 (2024-03-13)
    
### Features Added

  - Added operation Access.createRoleBinding
  - Added operation Access.deleteRoleBinding
  - Added operation Access.listRoleBindingNameList
  - Added operation Organization.createAPIKey
  - Added operation Organization.deleteClusterAPIKey
  - Added operation Organization.getClusterAPIKey
  - Added operation Organization.getClusterById
  - Added operation Organization.getEnvironmentById
  - Added operation Organization.getSchemaRegistryClusterById
  - Added operation Organization.listClusters
  - Added operation Organization.listEnvironments
  - Added operation Organization.listRegions
  - Added operation Organization.listSchemaRegistryClusters
  - Added Interface AccessCreateRoleBindingOptionalParams
  - Added Interface AccessCreateRoleBindingRequestModel
  - Added Interface AccessDeleteRoleBindingOptionalParams
  - Added Interface AccessListRoleBindingNameListOptionalParams
  - Added Interface AccessRoleBindingNameListSuccessResponse
  - Added Interface APIKeyOwnerEntity
  - Added Interface APIKeyRecord
  - Added Interface APIKeyResourceEntity
  - Added Interface APIKeySpecEntity
  - Added Interface CreateAPIKeyModel
  - Added Interface GetEnvironmentsResponse
  - Added Interface ListClustersSuccessResponse
  - Added Interface ListRegionsSuccessResponse
  - Added Interface ListSchemaRegistryClustersResponse
  - Added Interface OrganizationCreateAPIKeyOptionalParams
  - Added Interface OrganizationDeleteClusterAPIKeyOptionalParams
  - Added Interface OrganizationGetClusterAPIKeyOptionalParams
  - Added Interface OrganizationGetClusterByIdOptionalParams
  - Added Interface OrganizationGetEnvironmentByIdOptionalParams
  - Added Interface OrganizationGetSchemaRegistryClusterByIdOptionalParams
  - Added Interface OrganizationListClustersNextOptionalParams
  - Added Interface OrganizationListClustersOptionalParams
  - Added Interface OrganizationListEnvironmentsNextOptionalParams
  - Added Interface OrganizationListEnvironmentsOptionalParams
  - Added Interface OrganizationListRegionsOptionalParams
  - Added Interface OrganizationListSchemaRegistryClustersNextOptionalParams
  - Added Interface OrganizationListSchemaRegistryClustersOptionalParams
  - Added Interface RegionRecord
  - Added Interface RegionSpecEntity
  - Added Interface SCClusterByokEntity
  - Added Interface SCClusterNetworkEnvironmentEntity
  - Added Interface SCClusterRecord
  - Added Interface SCClusterSpecEntity
  - Added Interface SCConfluentListMetadata
  - Added Interface SCEnvironmentRecord
  - Added Interface SchemaRegistryClusterEnvironmentRegionEntity
  - Added Interface SchemaRegistryClusterRecord
  - Added Interface SchemaRegistryClusterSpecEntity
  - Added Interface SchemaRegistryClusterStatusEntity
  - Added Interface SCMetadataEntity
  - Added Type Alias AccessCreateRoleBindingResponse
  - Added Type Alias AccessListRoleBindingNameListResponse
  - Added Type Alias OrganizationCreateAPIKeyResponse
  - Added Type Alias OrganizationGetClusterAPIKeyResponse
  - Added Type Alias OrganizationGetClusterByIdResponse
  - Added Type Alias OrganizationGetEnvironmentByIdResponse
  - Added Type Alias OrganizationGetSchemaRegistryClusterByIdResponse
  - Added Type Alias OrganizationListClustersNextResponse
  - Added Type Alias OrganizationListClustersResponse
  - Added Type Alias OrganizationListEnvironmentsNextResponse
  - Added Type Alias OrganizationListEnvironmentsResponse
  - Added Type Alias OrganizationListRegionsResponse
  - Added Type Alias OrganizationListSchemaRegistryClustersNextResponse
  - Added Type Alias OrganizationListSchemaRegistryClustersResponse
    
    
## 3.0.0 (2023-11-07)

The package of @azure/arm-confluent is using our next generation design principles since version 3.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/azsdk/js/mgmt/quickstart).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart ).
