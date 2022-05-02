# Release History
    
## 6.0.0-beta.1 (2022-05-02)
    
**Features**

  - Interface ErrorResponse has a new optional parameter code
  - Interface ErrorResponse has a new optional parameter message
  - Add parameters of Resource to TypeAlias ArmDisasterRecovery
  - Add parameters of Resource to TypeAlias AuthorizationRule
  - Add parameters of Resource to TypeAlias ConsumerGroup
  - Add parameters of Resource to TypeAlias Eventhub
  - Add parameters of Resource to TypeAlias NetworkRuleSet
  - Add parameters of Resource to TypeAlias PrivateEndpointConnection

**Breaking Changes**

  - Removed operation group SchemaRegistry
  - Removed operation Namespaces.listNetworkRuleSet
  - Interface Destination no longer has parameter dataLakeAccountName
  - Interface Destination no longer has parameter dataLakeFolderPath
  - Interface Destination no longer has parameter dataLakeSubscriptionId
  - Interface ErrorResponse no longer has parameter error
  - Interface Operation no longer has parameter isDataAction
  - Interface Operation no longer has parameter origin
  - Interface Operation no longer has parameter properties
  - Interface OperationDisplay no longer has parameter description
  - Class EventHubManagementClient no longer has parameter schemaRegistry
  - Delete parameters of ProxyResource in TypeAlias ArmDisasterRecovery
  - Delete parameters of ProxyResource in TypeAlias AuthorizationRule
  - Delete parameters of ProxyResource in TypeAlias ConsumerGroup
  - Delete parameters of ProxyResource in TypeAlias Eventhub
  - Delete parameters of ProxyResource in TypeAlias NetworkRuleSet
  - Delete parameters of ProxyResource in TypeAlias PrivateEndpointConnection
  - Type Alias EHNamespace no longer has parameter alternateName
  - Removed Enum KnownKeyType
  - Removed Enum KnownSchemaCompatibility
  - Removed Enum KnownSchemaType
    
## 5.0.1 (2022-04-18)

**features**

  - Bug fix

## 5.0.0 (2021-12-09)

The package of @azure/arm-eventhub is using our next generation design principles since version 5.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
