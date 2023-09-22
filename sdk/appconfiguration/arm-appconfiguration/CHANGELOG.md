# Release History
    
## 4.1.0-beta.1 (2023-09-22)
    
**Features**

  - Added operation group NetworkSecurityPerimeterConfigurations
  - Added Interface NetworkSecurityPerimeter
  - Added Interface NetworkSecurityPerimeterConfiguration
  - Added Interface NetworkSecurityPerimeterConfigurationListResult
  - Added Interface NetworkSecurityPerimeterConfigurationsGetOptionalParams
  - Added Interface NetworkSecurityPerimeterConfigurationsListByConfigurationStoreNextOptionalParams
  - Added Interface NetworkSecurityPerimeterConfigurationsListByConfigurationStoreOptionalParams
  - Added Interface NetworkSecurityPerimeterConfigurationsReconcileOptionalParams
  - Added Interface NetworkSecurityPerimeterProfile
  - Added Interface NetworkSecurityPerimeterProfileAccessRule
  - Added Interface NetworkSecurityPerimeterProfileAccessRuleProperties
  - Added Interface NetworkSecurityPerimeterProvisioningIssue
  - Added Interface NetworkSecurityPerimeterProvisioningIssueProperties
  - Added Interface NetworkSecurityPerimeterResourceAssociation
  - Added Interface NspAccessRuleSubscription
  - Added Type Alias NetworkSecurityPerimeterConfigurationsGetResponse
  - Added Type Alias NetworkSecurityPerimeterConfigurationsListByConfigurationStoreNextResponse
  - Added Type Alias NetworkSecurityPerimeterConfigurationsListByConfigurationStoreResponse
  - Added Type Alias NetworkSecurityPerimeterConfigurationsReconcileResponse
    
    
## 4.0.0 (2023-04-06)
    
**Features**

  - Added operation group Replicas
  - Added Interface Replica
  - Added Interface ReplicaListResult
  - Added Interface ReplicasCreateOptionalParams
  - Added Interface ReplicasDeleteHeaders
  - Added Interface ReplicasDeleteOptionalParams
  - Added Interface ReplicasGetOptionalParams
  - Added Interface ReplicasListByConfigurationStoreNextOptionalParams
  - Added Interface ReplicasListByConfigurationStoreOptionalParams
  - Added Type Alias ReplicaProvisioningState
  - Added Type Alias ReplicasCreateResponse
  - Added Type Alias ReplicasGetResponse
  - Added Type Alias ReplicasListByConfigurationStoreNextResponse
  - Added Type Alias ReplicasListByConfigurationStoreResponse
  - Added Enum KnownReplicaProvisioningState
  - Interface ConfigurationStoresListByResourceGroupNextOptionalParams no longer has parameter skipToken
  - Interface ConfigurationStoresListKeysNextOptionalParams no longer has parameter skipToken
  - Interface ConfigurationStoresListNextOptionalParams no longer has parameter skipToken
  - Interface OperationsListNextOptionalParams no longer has parameter skipToken

**Breaking Changes**

  - Removed operation KeyValues.listByConfigurationStore
    
    
## 3.1.0 (2022-11-15)
    
**Features**

  - Added Interface ConfigurationStore
  - Added Interface TrackedResource
    
## 3.0.2 (2022-10-08)

**Bugs Fixed**

  -  revert credential scopes

## 3.0.1 (2022-09-30)

**Bugs Fixed**

  -  fix better user experience of credential scopes in government cloud

## 3.0.0 (2022-06-10)

The package of @azure/arm-appconfiguration is using our next generation design principles since version 3.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
