# Release History
    
## 1.0.0-beta.2 (2024-11-19)
Compared with version 1.0.0-beta.1
    
### Features Added

  - Added Interface AuthenticationProperties
  - Added Interface AuthenticationResource
  - Added Interface AuthenticatorMethodCustom
  - Added Interface AuthenticatorMethods
  - Added Interface AuthenticatorMethodSat
  - Added Interface AuthenticatorMethodX509
  - Added Interface AuthorizationProperties
  - Added Interface AuthorizationResource
  - Added Interface DataExplorerEndpoint
  - Added Interface DataExplorerSettings
  - Added Interface DataLakeStorageEndpoint
  - Added Interface DataLakeStorageSettings
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface FabricOneLakeEndpoint
  - Added Interface FabricOneLakeSettings
  - Added Interface KafkaEndpoint
  - Added Interface KafkaSettings
  - Added Interface ListenerProperties
  - Added Interface ListenerResource
  - Added Interface LocalStorageEndpoint
  - Added Interface LocalStorageSettings
  - Added Interface MqttEndpoint
  - Added Interface MqttSettings
  - Added Type Alias AuthenticationMethod
  - Added Type Alias DataflowEndpointPropertiesUnion
  - Added Enum KnownAuthenticationMethod
  - Added Enum KnownDataExplorerAuthMethod
  - Added Enum KnownDataLakeStorageAuthMethod
  - Added Enum KnownFabricOneLakeAuthMethod
  - Added Enum KnownKafkaAuthMethod
  - Added Enum KnownMqttAuthMethod
  - Added Enum KnownVersions
  - Enum KnownManagedServiceIdentityType has a new value "SystemAssigned,UserAssigned"
  - Enum KnownOrigin has a new value "user,system"
  - Enum KnownOrigin has a new value system
  - Enum KnownOrigin has a new value user

### Breaking Changes

  - Interface DataflowEndpointProperties no longer has parameter dataExplorerSettings
  - Interface DataflowEndpointProperties no longer has parameter dataLakeStorageSettings
  - Interface DataflowEndpointProperties no longer has parameter fabricOneLakeSettings
  - Interface DataflowEndpointProperties no longer has parameter kafkaSettings
  - Interface DataflowEndpointProperties no longer has parameter localStorageSettings
  - Interface DataflowEndpointProperties no longer has parameter mqttSettings
  - Type of parameter properties of interface DataflowEndpointResource is changed from DataflowEndpointProperties to DataflowEndpointPropertiesUnion
  - Removed Enum KnownAccessTokenMethod
  - Removed Enum KnownAnonymousMethod
  - Removed Enum KnownBrokerAuthenticationMethod
  - Removed Enum KnownManagedIdentityMethod
  - Removed Enum KnownSaslMethod
  - Removed Enum KnownServiceAccountTokenMethod
  - Removed Enum KnownX509CertificateMethod
  - Enum KnownManagedServiceIdentityType no longer has value SystemAssignedUserAssigned
  - Enum KnownOrigin no longer has value System
  - Enum KnownOrigin no longer has value User
  - Enum KnownOrigin no longer has value UserSystem
    
    
## 1.0.0-beta.1 (2024-10-23)

### Features Added

Initial release of the Azure IotOperations package
