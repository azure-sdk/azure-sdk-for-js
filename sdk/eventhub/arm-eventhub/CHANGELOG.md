# Release History
    
## 6.0.0 (2022-10-18)
    
**Features**

  - Added operation group HybridConnections
  - Added operation group WCFRelays
  - Added operation PrivateLinkResources.list
  - Added Interface AuthorizationRule
  - Added Interface CheckNameAvailability
  - Added Interface HybridConnection
  - Added Interface HybridConnectionListResult
  - Added Interface HybridConnectionsCreateOrUpdateAuthorizationRuleOptionalParams
  - Added Interface HybridConnectionsCreateOrUpdateOptionalParams
  - Added Interface HybridConnectionsDeleteAuthorizationRuleOptionalParams
  - Added Interface HybridConnectionsDeleteOptionalParams
  - Added Interface HybridConnectionsGetAuthorizationRuleOptionalParams
  - Added Interface HybridConnectionsGetOptionalParams
  - Added Interface HybridConnectionsListAuthorizationRulesNextOptionalParams
  - Added Interface HybridConnectionsListAuthorizationRulesOptionalParams
  - Added Interface HybridConnectionsListByNamespaceNextOptionalParams
  - Added Interface HybridConnectionsListByNamespaceOptionalParams
  - Added Interface HybridConnectionsListKeysOptionalParams
  - Added Interface HybridConnectionsRegenerateKeysOptionalParams
  - Added Interface NetworkRuleSet
  - Added Interface PrivateEndpointConnection
  - Added Interface PrivateLinkResourcesListOptionalParams
  - Added Interface RelayAPIOptionalParams
  - Added Interface RelayNamespace
  - Added Interface RelayNamespaceListResult
  - Added Interface RelayUpdateParameters
  - Added Interface ResourceNamespacePatch
  - Added Interface TrackedResource
  - Added Interface WcfRelay
  - Added Interface WCFRelaysCreateOrUpdateAuthorizationRuleOptionalParams
  - Added Interface WCFRelaysCreateOrUpdateOptionalParams
  - Added Interface WCFRelaysDeleteAuthorizationRuleOptionalParams
  - Added Interface WCFRelaysDeleteOptionalParams
  - Added Interface WCFRelaysGetAuthorizationRuleOptionalParams
  - Added Interface WCFRelaysGetOptionalParams
  - Added Interface WCFRelaysListAuthorizationRulesNextOptionalParams
  - Added Interface WCFRelaysListAuthorizationRulesOptionalParams
  - Added Interface WCFRelaysListByNamespaceNextOptionalParams
  - Added Interface WCFRelaysListByNamespaceOptionalParams
  - Added Interface WCFRelaysListKeysOptionalParams
  - Added Interface WcfRelaysListResult
  - Added Interface WCFRelaysRegenerateKeysOptionalParams
  - Added Class RelayAPI
  - Added Type Alias HybridConnectionsCreateOrUpdateAuthorizationRuleResponse
  - Added Type Alias HybridConnectionsCreateOrUpdateResponse
  - Added Type Alias HybridConnectionsGetAuthorizationRuleResponse
  - Added Type Alias HybridConnectionsGetResponse
  - Added Type Alias HybridConnectionsListAuthorizationRulesNextResponse
  - Added Type Alias HybridConnectionsListAuthorizationRulesResponse
  - Added Type Alias HybridConnectionsListByNamespaceNextResponse
  - Added Type Alias HybridConnectionsListByNamespaceResponse
  - Added Type Alias HybridConnectionsListKeysResponse
  - Added Type Alias HybridConnectionsRegenerateKeysResponse
  - Added Type Alias PrivateLinkResourcesListResponse
  - Added Type Alias PublicNetworkAccess
  - Added Type Alias Relaytype
  - Added Type Alias WCFRelaysCreateOrUpdateAuthorizationRuleResponse
  - Added Type Alias WCFRelaysCreateOrUpdateResponse
  - Added Type Alias WCFRelaysGetAuthorizationRuleResponse
  - Added Type Alias WCFRelaysGetResponse
  - Added Type Alias WCFRelaysListAuthorizationRulesNextResponse
  - Added Type Alias WCFRelaysListAuthorizationRulesResponse
  - Added Type Alias WCFRelaysListByNamespaceNextResponse
  - Added Type Alias WCFRelaysListByNamespaceResponse
  - Added Type Alias WCFRelaysListKeysResponse
  - Added Type Alias WCFRelaysRegenerateKeysResponse
  - Added Enum KnownPublicNetworkAccess
  - Added Enum KnownUnavailableReason

**Breaking Changes**

  - Removed operation group Clusters
  - Removed operation group Configuration
  - Removed operation group ConsumerGroups
  - Removed operation group DisasterRecoveryConfigs
  - Removed operation group EventHubs
  - Removed operation group SchemaRegistry
  - Removed operation Namespaces.listNetworkRuleSet
  - Operation Namespaces.beginCreateOrUpdate has a new signature
  - Operation Namespaces.beginCreateOrUpdateAndWait has a new signature
  - Operation Namespaces.checkNameAvailability has a new signature
  - Operation Namespaces.update has a new signature
  - Operation PrivateLinkResources.get has a new signature
  - Deleted Class EventHubManagementClient
  - Interface AccessKeys no longer has parameter aliasPrimaryConnectionString
  - Interface AccessKeys no longer has parameter aliasSecondaryConnectionString
  - Interface Sku no longer has parameter capacity
  - Removed Enum KnownClusterSkuName
  - Removed Enum KnownPublicNetworkAccessFlag
  - Removed Enum KnownSchemaCompatibility
  - Removed Enum KnownSchemaType
  - Enum KnownSkuName no longer has value Basic
  - Enum KnownSkuName no longer has value Premium
  - Enum KnownSkuTier no longer has value Basic
  - Enum KnownSkuTier no longer has value Premium
    
## 5.0.1 (2022-04-18)

**features**

  - Bug fix

## 5.0.0 (2021-12-09)

The package of @azure/arm-eventhub is using our next generation design principles since version 5.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
