# Release History
    
## 10.0.0-beta.1 (2022-07-20)
    
**Features**

  - Added operation group DatabaseAdvancedThreatProtectionSettings
  - Added operation group DistributedAvailabilityGroups
  - Added operation group EndpointCertificates
  - Added operation group IPv6FirewallRules
  - Added operation group ManagedInstanceDtcs
  - Added operation group ManagedServerDnsAliases
  - Added operation group ServerAdvancedThreatProtectionSettings
  - Added operation group ServerTrustCertificates
  - Added Interface DatabaseAdvancedThreatProtectionListResult
  - Added Interface DatabaseAdvancedThreatProtectionSettingsCreateOrUpdateOptionalParams
  - Added Interface DatabaseAdvancedThreatProtectionSettingsGetOptionalParams
  - Added Interface DatabaseAdvancedThreatProtectionSettingsListByDatabaseNextOptionalParams
  - Added Interface DatabaseAdvancedThreatProtectionSettingsListByDatabaseOptionalParams
  - Added Interface DistributedAvailabilityGroupsCreateOrUpdateOptionalParams
  - Added Interface DistributedAvailabilityGroupsDeleteOptionalParams
  - Added Interface DistributedAvailabilityGroupsGetOptionalParams
  - Added Interface DistributedAvailabilityGroupsListByInstanceNextOptionalParams
  - Added Interface DistributedAvailabilityGroupsListByInstanceOptionalParams
  - Added Interface DistributedAvailabilityGroupsListResult
  - Added Interface DistributedAvailabilityGroupsUpdateOptionalParams
  - Added Interface EndpointCertificateListResult
  - Added Interface EndpointCertificatesGetOptionalParams
  - Added Interface EndpointCertificatesListByInstanceNextOptionalParams
  - Added Interface EndpointCertificatesListByInstanceOptionalParams
  - Added Interface IPv6FirewallRuleListResult
  - Added Interface IPv6FirewallRulesCreateOrUpdateOptionalParams
  - Added Interface IPv6FirewallRulesDeleteOptionalParams
  - Added Interface IPv6FirewallRulesGetOptionalParams
  - Added Interface IPv6FirewallRulesListByServerNextOptionalParams
  - Added Interface IPv6FirewallRulesListByServerOptionalParams
  - Added Interface LogicalServerAdvancedThreatProtectionListResult
  - Added Interface ManagedInstanceDtcListResult
  - Added Interface ManagedInstanceDtcsCreateOrUpdateOptionalParams
  - Added Interface ManagedInstanceDtcSecuritySettings
  - Added Interface ManagedInstanceDtcsGetOptionalParams
  - Added Interface ManagedInstanceDtcsListByManagedInstanceNextOptionalParams
  - Added Interface ManagedInstanceDtcsListByManagedInstanceOptionalParams
  - Added Interface ManagedInstanceDtcTransactionManagerCommunicationSettings
  - Added Interface ManagedServerDnsAliasAcquisition
  - Added Interface ManagedServerDnsAliasCreation
  - Added Interface ManagedServerDnsAliasesAcquireOptionalParams
  - Added Interface ManagedServerDnsAliasesCreateOrUpdateOptionalParams
  - Added Interface ManagedServerDnsAliasesDeleteOptionalParams
  - Added Interface ManagedServerDnsAliasesGetOptionalParams
  - Added Interface ManagedServerDnsAliasesListByManagedInstanceNextOptionalParams
  - Added Interface ManagedServerDnsAliasesListByManagedInstanceOptionalParams
  - Added Interface ManagedServerDnsAliasListResult
  - Added Interface ServerAdvancedThreatProtectionSettingsCreateOrUpdateOptionalParams
  - Added Interface ServerAdvancedThreatProtectionSettingsGetOptionalParams
  - Added Interface ServerAdvancedThreatProtectionSettingsListByServerNextOptionalParams
  - Added Interface ServerAdvancedThreatProtectionSettingsListByServerOptionalParams
  - Added Interface ServerTrustCertificatesCreateOrUpdateOptionalParams
  - Added Interface ServerTrustCertificatesDeleteOptionalParams
  - Added Interface ServerTrustCertificatesGetOptionalParams
  - Added Interface ServerTrustCertificatesListByInstanceNextOptionalParams
  - Added Interface ServerTrustCertificatesListByInstanceOptionalParams
  - Added Interface ServerTrustCertificatesListResult
  - Added Type Alias AdvancedThreatProtectionName
  - Added Type Alias AdvancedThreatProtectionState
  - Added Type Alias DatabaseAdvancedThreatProtection
  - Added Type Alias DatabaseAdvancedThreatProtectionSettingsCreateOrUpdateResponse
  - Added Type Alias DatabaseAdvancedThreatProtectionSettingsGetResponse
  - Added Type Alias DatabaseAdvancedThreatProtectionSettingsListByDatabaseNextResponse
  - Added Type Alias DatabaseAdvancedThreatProtectionSettingsListByDatabaseResponse
  - Added Type Alias DistributedAvailabilityGroup
  - Added Type Alias DistributedAvailabilityGroupsCreateOrUpdateResponse
  - Added Type Alias DistributedAvailabilityGroupsGetResponse
  - Added Type Alias DistributedAvailabilityGroupsListByInstanceNextResponse
  - Added Type Alias DistributedAvailabilityGroupsListByInstanceResponse
  - Added Type Alias DistributedAvailabilityGroupsUpdateResponse
  - Added Type Alias DtcName
  - Added Type Alias EndpointCertificate
  - Added Type Alias EndpointCertificatesGetResponse
  - Added Type Alias EndpointCertificatesListByInstanceNextResponse
  - Added Type Alias EndpointCertificatesListByInstanceResponse
  - Added Type Alias IPv6FirewallRule
  - Added Type Alias IPv6FirewallRulesCreateOrUpdateResponse
  - Added Type Alias IPv6FirewallRulesGetResponse
  - Added Type Alias IPv6FirewallRulesListByServerNextResponse
  - Added Type Alias IPv6FirewallRulesListByServerResponse
  - Added Type Alias ManagedInstanceDtc
  - Added Type Alias ManagedInstanceDtcsCreateOrUpdateResponse
  - Added Type Alias ManagedInstanceDtcsGetResponse
  - Added Type Alias ManagedInstanceDtcsListByManagedInstanceNextResponse
  - Added Type Alias ManagedInstanceDtcsListByManagedInstanceResponse
  - Added Type Alias ManagedServerDnsAlias
  - Added Type Alias ManagedServerDnsAliasesAcquireResponse
  - Added Type Alias ManagedServerDnsAliasesCreateOrUpdateResponse
  - Added Type Alias ManagedServerDnsAliasesGetResponse
  - Added Type Alias ManagedServerDnsAliasesListByManagedInstanceNextResponse
  - Added Type Alias ManagedServerDnsAliasesListByManagedInstanceResponse
  - Added Type Alias ReplicationLinksFailoverAllowDataLossResponse
  - Added Type Alias ReplicationLinksFailoverResponse
  - Added Type Alias ReplicationMode
  - Added Type Alias ServerAdvancedThreatProtection
  - Added Type Alias ServerAdvancedThreatProtectionSettingsCreateOrUpdateResponse
  - Added Type Alias ServerAdvancedThreatProtectionSettingsGetResponse
  - Added Type Alias ServerAdvancedThreatProtectionSettingsListByServerNextResponse
  - Added Type Alias ServerAdvancedThreatProtectionSettingsListByServerResponse
  - Added Type Alias ServerTrustCertificate
  - Added Type Alias ServerTrustCertificatesCreateOrUpdateResponse
  - Added Type Alias ServerTrustCertificatesGetResponse
  - Added Type Alias ServerTrustCertificatesListByInstanceNextResponse
  - Added Type Alias ServerTrustCertificatesListByInstanceResponse
  - Added Type Alias SyncGroupsType
  - Interface ElasticPoolUpdate has a new optional parameter highAvailabilityReplicaCount
  - Class SqlManagementClient has a new parameter databaseAdvancedThreatProtectionSettings
  - Class SqlManagementClient has a new parameter distributedAvailabilityGroups
  - Class SqlManagementClient has a new parameter endpointCertificates
  - Class SqlManagementClient has a new parameter iPv6FirewallRules
  - Class SqlManagementClient has a new parameter managedInstanceDtcs
  - Class SqlManagementClient has a new parameter managedServerDnsAliases
  - Class SqlManagementClient has a new parameter serverAdvancedThreatProtectionSettings
  - Class SqlManagementClient has a new parameter serverTrustCertificates
  - Type Alias Database has a new parameter sourceResourceId
  - Type Alias DatabaseBlobAuditingPolicy has a new parameter isManagedIdentityInUse
  - Type Alias ElasticPool has a new parameter highAvailabilityReplicaCount
  - Type Alias ExtendedDatabaseBlobAuditingPolicy has a new parameter isManagedIdentityInUse
  - Type Alias ExtendedServerBlobAuditingPolicy has a new parameter isManagedIdentityInUse
  - Type Alias ServerBlobAuditingPolicy has a new parameter isManagedIdentityInUse
  - Added Enum KnownAdvancedThreatProtectionName
  - Added Enum KnownDtcName
  - Added Enum KnownReplicationMode
  - Added Enum KnownSyncGroupsType

**Breaking Changes**

  - Removed operation group OperationsHealthOperations
  - Removed operation ReplicationLinks.beginUnlink
  - Removed operation ReplicationLinks.beginUnlinkAndWait
  - Operation SyncGroups.listLogs has a new signature
  - Interface DatabaseIdentity no longer has parameter delegatedResources
  - Interface DatabaseUpdate no longer has parameter primaryDelegatedIdentityClientId
  - Class SqlManagementClient no longer has parameter operationsHealthOperations
  - Type Alias Database no longer has parameter primaryDelegatedIdentityClientId
  - Removed Enum KnownEnum60
    
## 9.0.1 (2022-05-01)

**Features**

  - Bug fix

## 9.0.0 (2021-12-07)

The package of @azure/arm-sql is using our next generation design principles since version 9.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
