# Release History
    
## 1.1.0-beta.1 (2025-04-18)
Compared with version 1.0.0
    
### Features Added

  - Added operation group DiagnosticOperations
  - Added Interface CustomStateStoreRetainmentPolicy
  - Added Interface CustomSubscriberQueueRetainmentPolicy
  - Added Interface CustomTopicRetainmentPolicy
  - Added Interface DataflowEndpointOtel
  - Added Interface DiagnosticCreateOrUpdateOptionalParams
  - Added Interface DiagnosticDeleteOptionalParams
  - Added Interface DiagnosticGetOptionalParams
  - Added Interface DiagnosticListByResourceGroupOptionalParams
  - Added Interface DiagnosticProperties
  - Added Interface DiagnosticResource
  - Added Interface DynamicPersistenceSettings
  - Added Interface DynamicRetainmentSettings
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface InstanceFeature
  - Added Interface Persistence
  - Added Interface RemoteSupportProperties
  - Added Interface StateStoreRetainmentPolicy
  - Added Interface StateStoreRetainmentResources
  - Added Interface StateStoreRetainmentSettings
  - Added Interface SubscriberQueueRetainmentPolicy
  - Added Interface SubscriberQueueRetainmentSettings
  - Added Interface TopicRetainmentPolicy
  - Added Interface TopicRetainmentSettings
  - Added Interface VolumeClaimResourceRequirementsClaims
  - Added Type Alias InstanceFeatureMode
  - Added Type Alias RemoteSupportAccessLevels
  - Added Type Alias RemoteSupportActivationState
  - Added Type Alias RetainmentPolicyMode
  - Added Type Alias StateStoreRetainmentPolicyUnion
  - Added Type Alias SubscriberQueueRetainmentPolicyUnion
  - Added Type Alias TopicRetainmentPolicyUnion
  - Interface BrokerProperties has a new optional parameter persistence
  - Interface DataflowEndpointProperties has a new optional parameter otelSettings
  - Interface InstanceProperties has a new optional parameter adrNamespace
  - Interface InstanceProperties has a new optional parameter features
  - Interface InstanceProperties has a new optional parameter secretProviderClassRef
  - Interface VolumeClaimResourceRequirements has a new optional parameter claims
  - Added Enum KnownInstanceFeatureMode
  - Added Enum KnownRemoteSupportAccessLevels
  - Added Enum KnownRemoteSupportActivationState
  - Added Enum KnownRetainmentPolicyMode
  - Enum KnownEndpointType has a new value EventGrid
  - Enum KnownEndpointType has a new value Eventhub
  - Enum KnownEndpointType has a new value FabricRT
  - Enum KnownEndpointType has a new value LocalMq
  - Enum KnownEndpointType has a new value Otel
  - Enum KnownVersions has a new value _20250701Preview
  - Enum KnownVersions has a new value V20250401
    
    
## 1.0.0 (2024-12-13)

### Features Added

This is the first stable version with the package of @azure/arm-iotoperations
