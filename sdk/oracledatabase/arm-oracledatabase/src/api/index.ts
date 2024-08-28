// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  createDatabase,
  DatabaseContext,
  DatabaseClientOptionalParams,
} from "./databaseContext.js";
export {
  autonomousDatabaseBackupsGet,
  autonomousDatabaseBackupsDelete,
  autonomousDatabaseBackupsCreateOrUpdate,
  autonomousDatabaseBackupsUpdate,
  autonomousDatabaseBackupsListByAutonomousDatabase,
} from "./autonomousDatabaseBackups/index.js";
export {
  autonomousDatabaseCharacterSetsGet,
  autonomousDatabaseCharacterSetsListByLocation,
} from "./autonomousDatabaseCharacterSets/index.js";
export {
  autonomousDatabaseNationalCharacterSetsGet,
  autonomousDatabaseNationalCharacterSetsListByLocation,
} from "./autonomousDatabaseNationalCharacterSets/index.js";
export {
  autonomousDatabasesListBySubscription,
  autonomousDatabasesGet,
  autonomousDatabasesUpdate,
  autonomousDatabasesDelete,
  autonomousDatabasesCreateOrUpdate,
  autonomousDatabasesListByResourceGroup,
  autonomousDatabasesSwitchover,
  autonomousDatabasesFailover,
  autonomousDatabasesGenerateWallet,
  autonomousDatabasesRestore,
  autonomousDatabasesShrink,
} from "./autonomousDatabases/index.js";
export {
  autonomousDatabaseVersionsGet,
  autonomousDatabaseVersionsListByLocation,
} from "./autonomousDatabaseVersions/index.js";
export {
  cloudExadataInfrastructuresListBySubscription,
  cloudExadataInfrastructuresGet,
  cloudExadataInfrastructuresUpdate,
  cloudExadataInfrastructuresDelete,
  cloudExadataInfrastructuresCreateOrUpdate,
  cloudExadataInfrastructuresListByResourceGroup,
  cloudExadataInfrastructuresAddStorageCapacity,
} from "./cloudExadataInfrastructures/index.js";
export {
  cloudVmClustersListBySubscription,
  cloudVmClustersGet,
  cloudVmClustersUpdate,
  cloudVmClustersDelete,
  cloudVmClustersCreateOrUpdate,
  cloudVmClustersListByResourceGroup,
  cloudVmClustersAddVms,
  cloudVmClustersRemoveVms,
  cloudVmClustersListPrivateIpAddresses,
} from "./cloudVmClusters/index.js";
export {
  dbNodesGet,
  dbNodesListByCloudVmCluster,
  dbNodesAction,
} from "./dbNodes/index.js";
export {
  dbServersGet,
  dbServersListByCloudExadataInfrastructure,
} from "./dbServers/index.js";
export {
  dbSystemShapesGet,
  dbSystemShapesListByLocation,
} from "./dbSystemShapes/index.js";
export {
  dnsPrivateViewsGet,
  dnsPrivateViewsListByLocation,
} from "./dnsPrivateViews/index.js";
export {
  dnsPrivateZonesGet,
  dnsPrivateZonesListByLocation,
} from "./dnsPrivateZones/index.js";
export { giVersionsGet, giVersionsListByLocation } from "./giVersions/index.js";
export { operationsList } from "./operations/index.js";
export {
  oracleSubscriptionsListBySubscription,
  oracleSubscriptionsGet,
  oracleSubscriptionsUpdate,
  oracleSubscriptionsDelete,
  oracleSubscriptionsCreateOrUpdate,
  oracleSubscriptionsListCloudAccountDetails,
  oracleSubscriptionsListSaasSubscriptionDetails,
  oracleSubscriptionsListActivationLinks,
  oracleSubscriptionsAddAzureSubscriptions,
} from "./oracleSubscriptions/index.js";
export {
  systemVersionsGet,
  systemVersionsListByLocation,
} from "./systemVersions/index.js";
export {
  virtualNetworkAddressesGet,
  virtualNetworkAddressesDelete,
  virtualNetworkAddressesCreateOrUpdate,
  virtualNetworkAddressesListByCloudVmCluster,
} from "./virtualNetworkAddresses/index.js";
