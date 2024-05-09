# Release History
    
## 5.0.0 (2024-05-09)
    
**Features**

  - Added Interface AggregateFunctionProperties
  - Added Interface AzureFunctionOutputDataSource
  - Added Interface FileReferenceInputDataSource
  - Added Interface GatewayMessageBusOutputDataSource
  - Added Interface GatewayMessageBusOutputDataSourceProperties
  - Added Interface GatewayMessageBusSourceProperties
  - Added Interface GatewayMessageBusStreamInputDataSource
  - Added Interface GatewayMessageBusStreamInputDataSourceProperties
  - Added Type Alias ResourceIdentityType
  - Interface BlobDataSourceProperties has a new optional parameter authenticationMode
  - Interface BlobOutputDataSource has a new optional parameter blobPathPrefix
  - Interface BlobOutputDataSourceProperties has a new optional parameter blobPathPrefix
  - Interface BlobReferenceInputDataSource has a new optional parameter authenticationMode
  - Interface BlobStreamInputDataSource has a new optional parameter authenticationMode
  - Interface FunctionProperties has a new optional parameter binding
  - Interface FunctionProperties has a new optional parameter inputs
  - Interface FunctionProperties has a new optional parameter output
  - Interface FunctionsTestOptionalParams has a new optional parameter function
  - Type of parameter type of interface FunctionProperties is changed from "Scalar" to "Scalar" | "Aggregate"
  - Type of parameter type of interface OutputDataSource is changed from "Microsoft.Storage/Blob" | "Microsoft.Storage/Table" | "Microsoft.ServiceBus/EventHub" | "Microsoft.EventHub/EventHub" | "Microsoft.Sql/Server/Database" | "Microsoft.Sql/Server/DataWarehouse" | "Microsoft.Storage/DocumentDB" | "Microsoft.ServiceBus/Queue" | "Microsoft.ServiceBus/Topic" | "PowerBI" | "Microsoft.DataLake/Accounts" to "Microsoft.Storage/Blob" | "Microsoft.Storage/Table" | "Microsoft.ServiceBus/EventHub" | "Microsoft.EventHub/EventHub" | "Microsoft.Sql/Server/Database" | "Microsoft.Sql/Server/DataWarehouse" | "Microsoft.Storage/DocumentDB" | "Microsoft.AzureFunction" | "Microsoft.ServiceBus/Queue" | "Microsoft.ServiceBus/Topic" | "PowerBI" | "Microsoft.DataLake/Accounts" | "GatewayMessageBus"
  - Type of parameter type of interface ReferenceInputDataSource is changed from "Microsoft.Storage/Blob" | "Microsoft.Sql/Server/Database" to "File" | "Microsoft.Storage/Blob" | "Microsoft.Sql/Server/Database"
  - Type of parameter type of interface StreamInputDataSource is changed from "Microsoft.Storage/Blob" | "Microsoft.ServiceBus/EventHub" | "Microsoft.EventHub/EventHub" | "Microsoft.Devices/IotHubs" to "Microsoft.Storage/Blob" | "Microsoft.ServiceBus/EventHub" | "Microsoft.EventHub/EventHub" | "Microsoft.Devices/IotHubs" | "GatewayMessageBus"

**Breaking Changes**

  - Interface FunctionsTestOptionalParams no longer has parameter functionParam
  - Type of parameter type of interface Identity is changed from string to ResourceIdentityType
    
    
## 4.1.0 (2022-12-13)
    
**Features**

  - Added Interface AvroSerialization
  - Added Interface AzureDataLakeStoreOutputDataSource
  - Added Interface AzureDataLakeStoreOutputDataSourceProperties
  - Added Interface AzureMachineLearningWebServiceFunctionBinding
  - Added Interface AzureMachineLearningWebServiceFunctionRetrieveDefaultDefinitionParameters
  - Added Interface AzureSqlDatabaseOutputDataSource
  - Added Interface AzureSqlDatabaseOutputDataSourceProperties
  - Added Interface AzureSqlReferenceInputDataSource
  - Added Interface AzureSynapseOutputDataSource
  - Added Interface AzureSynapseOutputDataSourceProperties
  - Added Interface AzureTableOutputDataSource
  - Added Interface BlobOutputDataSource
  - Added Interface BlobOutputDataSourceProperties
  - Added Interface BlobReferenceInputDataSource
  - Added Interface BlobReferenceInputDataSourceProperties
  - Added Interface BlobStreamInputDataSource
  - Added Interface BlobStreamInputDataSourceProperties
  - Added Interface Cluster
  - Added Interface CsvSerialization
  - Added Interface DocumentDbOutputDataSource
  - Added Interface EventHubDataSourceProperties
  - Added Interface EventHubOutputDataSource
  - Added Interface EventHubOutputDataSourceProperties
  - Added Interface EventHubStreamInputDataSource
  - Added Interface EventHubStreamInputDataSourceProperties
  - Added Interface EventHubV2OutputDataSource
  - Added Interface EventHubV2StreamInputDataSource
  - Added Interface FunctionModel
  - Added Interface Input
  - Added Interface IoTHubStreamInputDataSource
  - Added Interface JavaScriptFunctionBinding
  - Added Interface JavaScriptFunctionRetrieveDefaultDefinitionParameters
  - Added Interface JobStorageAccount
  - Added Interface JsonSerialization
  - Added Interface Output
  - Added Interface ParquetSerialization
  - Added Interface PowerBIOutputDataSource
  - Added Interface PowerBIOutputDataSourceProperties
  - Added Interface PrivateEndpoint
  - Added Interface ProxyResource
  - Added Interface ReferenceInputProperties
  - Added Interface ScalarFunctionProperties
  - Added Interface ServiceBusQueueOutputDataSource
  - Added Interface ServiceBusQueueOutputDataSourceProperties
  - Added Interface ServiceBusTopicOutputDataSource
  - Added Interface ServiceBusTopicOutputDataSourceProperties
  - Added Interface StreamingJob
  - Added Interface StreamInputProperties
  - Added Interface SubscriptionQuota
  - Added Interface TrackedResource
  - Added Interface Transformation
  - Interface FunctionsListByStreamingJobNextOptionalParams no longer has parameter select
  - Interface InputsListByStreamingJobNextOptionalParams no longer has parameter select
  - Interface OutputsListByStreamingJobNextOptionalParams no longer has parameter select
  - Interface StreamingJobsListByResourceGroupNextOptionalParams no longer has parameter expand
  - Interface StreamingJobsListNextOptionalParams no longer has parameter expand
    
## 4.0.1 (2022-05-05)

**Features**

  - Bug fix

## 4.0.0 (2021-12-10)

The package of @azure/arm-streamanalytics is using our next generation design principles since version 4.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
