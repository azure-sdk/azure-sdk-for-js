// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createDatabase,
  DatabaseContext,
  DatabaseClientOptionalParams,
} from "./databaseContext.js";
export {
  AutonomousDatabaseVersionsListByLocationOptionalParams,
  AutonomousDatabaseVersionsGetOptionalParams,
  AutonomousDatabaseNationalCharacterSetsListByLocationOptionalParams,
  AutonomousDatabaseNationalCharacterSetsGetOptionalParams,
  AutonomousDatabaseCharacterSetsListByLocationOptionalParams,
  AutonomousDatabaseCharacterSetsGetOptionalParams,
  AutonomousDatabaseBackupsListByAutonomousDatabaseOptionalParams,
  AutonomousDatabaseBackupsUpdateOptionalParams,
  AutonomousDatabaseBackupsCreateOrUpdateOptionalParams,
  AutonomousDatabaseBackupsDeleteOptionalParams,
  AutonomousDatabaseBackupsGetOptionalParams,
  AutonomousDatabasesChangeDisasterRecoveryConfigurationOptionalParams,
  AutonomousDatabasesShrinkOptionalParams,
  AutonomousDatabasesRestoreOptionalParams,
  AutonomousDatabasesGenerateWalletOptionalParams,
  AutonomousDatabasesFailoverOptionalParams,
  AutonomousDatabasesSwitchoverOptionalParams,
  AutonomousDatabasesListByResourceGroupOptionalParams,
  AutonomousDatabasesCreateOrUpdateOptionalParams,
  AutonomousDatabasesDeleteOptionalParams,
  AutonomousDatabasesUpdateOptionalParams,
  AutonomousDatabasesGetOptionalParams,
  AutonomousDatabasesListBySubscriptionOptionalParams,
  DnsPrivateZonesListByLocationOptionalParams,
  DnsPrivateZonesGetOptionalParams,
  DnsPrivateViewsListByLocationOptionalParams,
  DnsPrivateViewsGetOptionalParams,
  DbSystemShapesListByLocationOptionalParams,
  DbSystemShapesGetOptionalParams,
  GiVersionsListByLocationOptionalParams,
  GiVersionsGetOptionalParams,
  DbNodesActionOptionalParams,
  DbNodesListByCloudVmClusterOptionalParams,
  DbNodesGetOptionalParams,
  OracleSubscriptionsAddAzureSubscriptionsOptionalParams,
  OracleSubscriptionsListActivationLinksOptionalParams,
  OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams,
  OracleSubscriptionsListCloudAccountDetailsOptionalParams,
  OracleSubscriptionsCreateOrUpdateOptionalParams,
  OracleSubscriptionsDeleteOptionalParams,
  OracleSubscriptionsUpdateOptionalParams,
  OracleSubscriptionsGetOptionalParams,
  OracleSubscriptionsListBySubscriptionOptionalParams,
  SystemVersionsListByLocationOptionalParams,
  SystemVersionsGetOptionalParams,
  VirtualNetworkAddressesListByCloudVmClusterOptionalParams,
  VirtualNetworkAddressesCreateOrUpdateOptionalParams,
  VirtualNetworkAddressesDeleteOptionalParams,
  VirtualNetworkAddressesGetOptionalParams,
  CloudVmClustersListPrivateIpAddressesOptionalParams,
  CloudVmClustersRemoveVmsOptionalParams,
  CloudVmClustersAddVmsOptionalParams,
  CloudVmClustersListByResourceGroupOptionalParams,
  CloudVmClustersCreateOrUpdateOptionalParams,
  CloudVmClustersDeleteOptionalParams,
  CloudVmClustersUpdateOptionalParams,
  CloudVmClustersGetOptionalParams,
  CloudVmClustersListBySubscriptionOptionalParams,
  DbServersListByCloudExadataInfrastructureOptionalParams,
  DbServersGetOptionalParams,
  CloudExadataInfrastructuresAddStorageCapacityOptionalParams,
  CloudExadataInfrastructuresListByResourceGroupOptionalParams,
  CloudExadataInfrastructuresCreateOrUpdateOptionalParams,
  CloudExadataInfrastructuresDeleteOptionalParams,
  CloudExadataInfrastructuresUpdateOptionalParams,
  CloudExadataInfrastructuresGetOptionalParams,
  CloudExadataInfrastructuresListBySubscriptionOptionalParams,
  OperationsListOptionalParams,
} from "./options.js";
export {
  autonomousDatabaseBackupsListByAutonomousDatabase,
  autonomousDatabaseBackupsUpdate,
  autonomousDatabaseBackupsCreateOrUpdate,
  autonomousDatabaseBackupsDelete,
  autonomousDatabaseBackupsGet,
} from "./autonomousDatabaseBackups/index.js";
export {
  autonomousDatabaseCharacterSetsListByLocation,
  autonomousDatabaseCharacterSetsGet,
} from "./autonomousDatabaseCharacterSets/index.js";
export {
  autonomousDatabaseNationalCharacterSetsListByLocation,
  autonomousDatabaseNationalCharacterSetsGet,
} from "./autonomousDatabaseNationalCharacterSets/index.js";
export {
  autonomousDatabasesChangeDisasterRecoveryConfiguration,
  autonomousDatabasesShrink,
  autonomousDatabasesRestore,
  autonomousDatabasesGenerateWallet,
  autonomousDatabasesFailover,
  autonomousDatabasesSwitchover,
  autonomousDatabasesListByResourceGroup,
  autonomousDatabasesCreateOrUpdate,
  autonomousDatabasesDelete,
  autonomousDatabasesUpdate,
  autonomousDatabasesGet,
  autonomousDatabasesListBySubscription,
} from "./autonomousDatabases/index.js";
export {
  autonomousDatabaseVersionsListByLocation,
  autonomousDatabaseVersionsGet,
} from "./autonomousDatabaseVersions/index.js";
export {
  cloudExadataInfrastructuresAddStorageCapacity,
  cloudExadataInfrastructuresListByResourceGroup,
  cloudExadataInfrastructuresCreateOrUpdate,
  cloudExadataInfrastructuresDelete,
  cloudExadataInfrastructuresUpdate,
  cloudExadataInfrastructuresGet,
  cloudExadataInfrastructuresListBySubscription,
} from "./cloudExadataInfrastructures/index.js";
export {
  cloudVmClustersListPrivateIpAddresses,
  cloudVmClustersRemoveVms,
  cloudVmClustersAddVms,
  cloudVmClustersListByResourceGroup,
  cloudVmClustersCreateOrUpdate,
  cloudVmClustersDelete,
  cloudVmClustersUpdate,
  cloudVmClustersGet,
  cloudVmClustersListBySubscription,
} from "./cloudVmClusters/index.js";
export { dbNodesAction, dbNodesListByCloudVmCluster, dbNodesGet } from "./dbNodes/index.js";
export { dbServersListByCloudExadataInfrastructure, dbServersGet } from "./dbServers/index.js";
export { dbSystemShapesListByLocation, dbSystemShapesGet } from "./dbSystemShapes/index.js";
export { dnsPrivateViewsListByLocation, dnsPrivateViewsGet } from "./dnsPrivateViews/index.js";
export { dnsPrivateZonesListByLocation, dnsPrivateZonesGet } from "./dnsPrivateZones/index.js";
export { giVersionsListByLocation, giVersionsGet } from "./giVersions/index.js";
export { operationsList } from "./operations/index.js";
export {
  oracleSubscriptionsAddAzureSubscriptions,
  oracleSubscriptionsListActivationLinks,
  oracleSubscriptionsListSaasSubscriptionDetails,
  oracleSubscriptionsListCloudAccountDetails,
  oracleSubscriptionsCreateOrUpdate,
  oracleSubscriptionsDelete,
  oracleSubscriptionsUpdate,
  oracleSubscriptionsGet,
  oracleSubscriptionsListBySubscription,
} from "./oracleSubscriptions/index.js";
export { systemVersionsListByLocation, systemVersionsGet } from "./systemVersions/index.js";
export {
  virtualNetworkAddressesListByCloudVmCluster,
  virtualNetworkAddressesCreateOrUpdate,
  virtualNetworkAddressesDelete,
  virtualNetworkAddressesGet,
} from "./virtualNetworkAddresses/index.js";
