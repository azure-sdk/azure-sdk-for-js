# Release History
    
## 3.0.0 (2022-09-15)
    
**Features**

  - Added Interface Cron
  - Added Interface Recurrence
  - Added Interface RecurrenceSchedule
  - Added Type Alias DaysOfWeek
  - Added Type Alias RecurrenceFrequency
  - Added Type Alias TriggerType
  - Interface ComputeStartStopSchedule has a new optional parameter cron
  - Interface ComputeStartStopSchedule has a new optional parameter recurrence
  - Interface ComputeStartStopSchedule has a new optional parameter status
  - Interface ComputeStartStopSchedule has a new optional parameter triggerType
  - Added Enum KnownRecurrenceFrequency
  - Added Enum KnownTriggerType

**Breaking Changes**

  - Interface AzureBlobDatastore no longer has parameter datastoreType
  - Interface AzureDataLakeGen1Datastore no longer has parameter datastoreType
  - Interface AzureDataLakeGen2Datastore no longer has parameter datastoreType
  - Interface AzureFileDatastore no longer has parameter datastoreType
  - Interface CommandJob no longer has parameter jobType
  - Interface KubernetesOnlineDeployment no longer has parameter endpointComputeType
  - Interface ManagedOnlineDeployment no longer has parameter endpointComputeType
  - Interface MLTableData no longer has parameter dataType
  - Interface PipelineJob no longer has parameter jobType
  - Interface SweepJob no longer has parameter jobType
  - Interface UriFileDataVersion no longer has parameter dataType
  - Interface UriFolderDataVersion no longer has parameter dataType
    
    
## 2.0.0 (2022-08-05)
    
**Breaking Changes**

  - Interface AzureBlobDatastore has a new required parameter datastoreType
  - Interface AzureDataLakeGen1Datastore has a new required parameter datastoreType
  - Interface AzureDataLakeGen2Datastore has a new required parameter datastoreType
  - Interface AzureFileDatastore has a new required parameter datastoreType
  - Interface CommandJob has a new required parameter jobType
  - Interface KubernetesOnlineDeployment has a new required parameter endpointComputeType
  - Interface ManagedOnlineDeployment has a new required parameter endpointComputeType
  - Interface MLTableData has a new required parameter dataType
  - Interface PipelineJob has a new required parameter jobType
  - Interface SweepJob has a new required parameter jobType
  - Interface UriFileDataVersion has a new required parameter dataType
  - Interface UriFolderDataVersion has a new required parameter dataType
    
    
## 1.0.0 (2022-07-13)

The package of @azure/arm-machinelearning is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
