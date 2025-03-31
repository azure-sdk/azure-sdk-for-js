# @azure/arm-oracledatabase client library samples for TypeScript

These sample programs show how to use the TypeScript client libraries for @azure/arm-oracledatabase in some common scenarios.

| **File Name**                                                                                                                   | **Description**                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [autonomousDatabaseBackupsListByAutonomousDatabaseSample.ts][autonomousdatabasebackupslistbyautonomousdatabasesample]           | list AutonomousDatabaseBackup resources by AutonomousDatabase x-ms-original-file: 2024-10-01-preview/autonomousDatabaseBackup_listByParent.json                              |
| [autonomousDatabaseBackupsUpdateSample.ts][autonomousdatabasebackupsupdatesample]                                               | update a AutonomousDatabaseBackup x-ms-original-file: 2024-10-01-preview/autonomousDatabaseBackup_patch.json                                                                 |
| [autonomousDatabasesChangeDisasterRecoveryConfigurationSample.ts][autonomousdatabaseschangedisasterrecoveryconfigurationsample] | perform ChangeDisasterRecoveryConfiguration action on Autonomous Database x-ms-original-file: 2024-10-01-preview/autonomousDatabase_changeDisasterRecoveryConfiguration.json |
| [autonomousDatabasesFailoverSample.ts][autonomousdatabasesfailoversample]                                                       | perform failover action on Autonomous Database x-ms-original-file: 2024-10-01-preview/autonomousDatabase_failover.json                                                       |
| [autonomousDatabasesGenerateWalletSample.ts][autonomousdatabasesgeneratewalletsample]                                           | generate wallet action on Autonomous Database x-ms-original-file: 2024-10-01-preview/autonomousDatabase_generateWallet.json                                                  |
| [autonomousDatabasesRestoreSample.ts][autonomousdatabasesrestoresample]                                                         | restores an Autonomous Database based on the provided request parameters. x-ms-original-file: 2024-10-01-preview/autonomousDatabase_restore.json                             |
| [autonomousDatabasesSwitchoverSample.ts][autonomousdatabasesswitchoversample]                                                   | perform switchover action on Autonomous Database x-ms-original-file: 2024-10-01-preview/autonomousDatabase_switchover.json                                                   |
| [cloudExadataInfrastructuresAddStorageCapacitySample.ts][cloudexadatainfrastructuresaddstoragecapacitysample]                   | perform add storage capacity on exadata infra x-ms-original-file: 2024-10-01-preview/exaInfra_addStorageCapacity.json                                                        |
| [cloudVmClustersAddVmsSample.ts][cloudvmclustersaddvmssample]                                                                   | add VMs to the VM Cluster x-ms-original-file: 2024-10-01-preview/vmClusters_addVms.json                                                                                      |
| [cloudVmClustersListPrivateIpAddressesSample.ts][cloudvmclusterslistprivateipaddressessample]                                   | list Private IP Addresses by the provided filter x-ms-original-file: 2024-10-01-preview/vmClusters_listPrivateIpAddresses.json                                               |
| [cloudVmClustersRemoveVmsSample.ts][cloudvmclustersremovevmssample]                                                             | remove VMs from the VM Cluster x-ms-original-file: 2024-10-01-preview/vmClusters_removeVms.json                                                                              |
| [dbNodesActionSample.ts][dbnodesactionsample]                                                                                   | vM actions on DbNode of VM Cluster by the provided filter x-ms-original-file: 2024-10-01-preview/dbNodes_action.json                                                         |
| [dbNodesListByCloudVmClusterSample.ts][dbnodeslistbycloudvmclustersample]                                                       | list DbNode resources by CloudVmCluster x-ms-original-file: 2024-10-01-preview/dbNodes_listByParent.json                                                                     |
| [dbServersListByCloudExadataInfrastructureSample.ts][dbserverslistbycloudexadatainfrastructuresample]                           | list DbServer resources by CloudExadataInfrastructure x-ms-original-file: 2024-10-01-preview/dbServers_listByParent.json                                                     |
| [operationsListSample.ts][operationslistsample]                                                                                 | list the operations for the provider x-ms-original-file: 2024-10-01-preview/operations_list.json                                                                             |
| [oracleSubscriptionsAddAzureSubscriptionsSample.ts][oraclesubscriptionsaddazuresubscriptionssample]                             | add Azure Subscriptions x-ms-original-file: 2024-10-01-preview/oracleSubscriptions_addAzureSubscriptions.json                                                                |
| [oracleSubscriptionsListActivationLinksSample.ts][oraclesubscriptionslistactivationlinkssample]                                 | list Activation Links x-ms-original-file: 2024-10-01-preview/oracleSubscriptions_listActivationLinks.json                                                                    |
| [oracleSubscriptionsListCloudAccountDetailsSample.ts][oraclesubscriptionslistcloudaccountdetailssample]                         | list Cloud Account Details x-ms-original-file: 2024-10-01-preview/oracleSubscriptions_listCloudAccountDetails.json                                                           |
| [oracleSubscriptionsListSaasSubscriptionDetailsSample.ts][oraclesubscriptionslistsaassubscriptiondetailssample]                 | list Saas Subscription Details x-ms-original-file: 2024-10-01-preview/oracleSubscriptions_listSaasSubscriptionDetails.json                                                   |
| [oracleSubscriptionsUpdateSample.ts][oraclesubscriptionsupdatesample]                                                           | update a OracleSubscription x-ms-original-file: 2024-10-01-preview/oracleSubscriptions_patch.json                                                                            |
| [virtualNetworkAddressesListByCloudVmClusterSample.ts][virtualnetworkaddresseslistbycloudvmclustersample]                       | list VirtualNetworkAddress resources by CloudVmCluster x-ms-original-file: 2024-10-01-preview/virtualNetworkAddresses_listByParent.json                                      |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

Before running the samples in Node, they must be compiled to JavaScript using the TypeScript compiler. For more information on TypeScript, see the [TypeScript documentation][typescript]. Install the TypeScript compiler using:

```bash
npm install -g typescript
```

You need [an Azure subscription][freesub] to run these sample programs.

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Compile the samples:

```bash
npm run build
```

3. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

4. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node dist/autonomousDatabaseBackupsListByAutonomousDatabaseSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node dist/autonomousDatabaseBackupsListByAutonomousDatabaseSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[autonomousdatabasebackupslistbyautonomousdatabasesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/autonomousDatabaseBackupsListByAutonomousDatabaseSample.ts
[autonomousdatabasebackupsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/autonomousDatabaseBackupsUpdateSample.ts
[autonomousdatabaseschangedisasterrecoveryconfigurationsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/autonomousDatabasesChangeDisasterRecoveryConfigurationSample.ts
[autonomousdatabasesfailoversample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/autonomousDatabasesFailoverSample.ts
[autonomousdatabasesgeneratewalletsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/autonomousDatabasesGenerateWalletSample.ts
[autonomousdatabasesrestoresample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/autonomousDatabasesRestoreSample.ts
[autonomousdatabasesswitchoversample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/autonomousDatabasesSwitchoverSample.ts
[cloudexadatainfrastructuresaddstoragecapacitysample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/cloudExadataInfrastructuresAddStorageCapacitySample.ts
[cloudvmclustersaddvmssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/cloudVmClustersAddVmsSample.ts
[cloudvmclusterslistprivateipaddressessample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/cloudVmClustersListPrivateIpAddressesSample.ts
[cloudvmclustersremovevmssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/cloudVmClustersRemoveVmsSample.ts
[dbnodesactionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/dbNodesActionSample.ts
[dbnodeslistbycloudvmclustersample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/dbNodesListByCloudVmClusterSample.ts
[dbserverslistbycloudexadatainfrastructuresample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/dbServersListByCloudExadataInfrastructureSample.ts
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/operationsListSample.ts
[oraclesubscriptionsaddazuresubscriptionssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/oracleSubscriptionsAddAzureSubscriptionsSample.ts
[oraclesubscriptionslistactivationlinkssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/oracleSubscriptionsListActivationLinksSample.ts
[oraclesubscriptionslistcloudaccountdetailssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/oracleSubscriptionsListCloudAccountDetailsSample.ts
[oraclesubscriptionslistsaassubscriptiondetailssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/oracleSubscriptionsListSaasSubscriptionDetailsSample.ts
[oraclesubscriptionsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/oracleSubscriptionsUpdateSample.ts
[virtualnetworkaddresseslistbycloudvmclustersample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/oracledatabase/arm-oracledatabase/samples/v1/typescript/src/virtualNetworkAddressesListByCloudVmClusterSample.ts
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-oracledatabase?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/oracledatabase/arm-oracledatabase/README.md
[typescript]: https://www.typescriptlang.org/docs/home.html
