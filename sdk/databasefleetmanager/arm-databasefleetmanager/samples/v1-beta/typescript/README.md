# @azure/arm-databasefleetmanager client library samples for TypeScript (Beta)

These sample programs show how to use the TypeScript client libraries for @azure/arm-databasefleetmanager in some common scenarios.

| **File Name**                                                                   | **Description**                                                                                                                       |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [firewallRulesCreateOrUpdateSample.ts][firewallrulescreateorupdatesample]       | creates or updates a firewall rule. x-ms-original-file: 2025-02-01-preview/FirewallRules_CreateOrUpdate_MaximumSet_Gen.json           |
| [firewallRulesDeleteSample.ts][firewallrulesdeletesample]                       | deletes a firewall rule. x-ms-original-file: 2025-02-01-preview/FirewallRules_Delete_MaximumSet_Gen.json                              |
| [firewallRulesGetSample.ts][firewallrulesgetsample]                             | gets a firewall rule. x-ms-original-file: 2025-02-01-preview/FirewallRules_Get_MaximumSet_Gen.json                                    |
| [firewallRulesListByFleetspaceSample.ts][firewallruleslistbyfleetspacesample]   | gets all firewall rules in a fleetspace. x-ms-original-file: 2025-02-01-preview/FirewallRules_ListByFleetspace_MaximumSet_Gen.json    |
| [fleetDatabasesChangeTierSample.ts][fleetdatabaseschangetiersample]             | moves database to a different tier. x-ms-original-file: 2025-02-01-preview/FleetDatabases_ChangeTier_MaximumSet_Gen.json              |
| [fleetDatabasesCreateOrUpdateSample.ts][fleetdatabasescreateorupdatesample]     | creates or updates a fleet database. x-ms-original-file: 2025-02-01-preview/FleetDatabases_CreateOrUpdate_MaximumSet_Gen.json         |
| [fleetDatabasesDeleteSample.ts][fleetdatabasesdeletesample]                     | deletes a fleet database. x-ms-original-file: 2025-02-01-preview/FleetDatabases_Delete_MaximumSet_Gen.json                            |
| [fleetDatabasesGetSample.ts][fleetdatabasesgetsample]                           | gets a fleet database. x-ms-original-file: 2025-02-01-preview/FleetDatabases_Get_MaximumSet_Gen.json                                  |
| [fleetDatabasesListByFleetspaceSample.ts][fleetdatabaseslistbyfleetspacesample] | gets all fleet databases in a fleetspace. x-ms-original-file: 2025-02-01-preview/FleetDatabases_ListByFleetspace_MaximumSet_Gen.json  |
| [fleetDatabasesRenameSample.ts][fleetdatabasesrenamesample]                     | renames a database. x-ms-original-file: 2025-02-01-preview/FleetDatabases_Rename_MaximumSet_Gen.json                                  |
| [fleetDatabasesRevertSample.ts][fleetdatabasesrevertsample]                     | revert a database transparent data encryption (TDE). x-ms-original-file: 2025-02-01-preview/FleetDatabases_Revert_MaximumSet_Gen.json |
| [fleetDatabasesUpdateSample.ts][fleetdatabasesupdatesample]                     | updates a fleet database. x-ms-original-file: 2025-02-01-preview/FleetDatabases_Update_MaximumSet_Gen.json                            |
| [fleetTiersCreateOrUpdateSample.ts][fleettierscreateorupdatesample]             | creates or updates a tier. x-ms-original-file: 2025-02-01-preview/FleetTiers_CreateOrUpdate_MaximumSet_Gen.json                       |
| [fleetTiersDeleteSample.ts][fleettiersdeletesample]                             | deletes a tier. x-ms-original-file: 2025-02-01-preview/FleetTiers_Delete_MaximumSet_Gen.json                                          |
| [fleetTiersDisableSample.ts][fleettiersdisablesample]                           | disables a tier. x-ms-original-file: 2025-02-01-preview/FleetTiers_Disable_MaximumSet_Gen.json                                        |
| [fleetTiersGetSample.ts][fleettiersgetsample]                                   | gets a tier resource. x-ms-original-file: 2025-02-01-preview/FleetTiers_Get_MaximumSet_Gen.json                                       |
| [fleetTiersListByFleetSample.ts][fleettierslistbyfleetsample]                   | list tiers in a fleet. x-ms-original-file: 2025-02-01-preview/FleetTiers_ListByFleet_MaximumSet_Gen.json                              |
| [fleetTiersUpdateSample.ts][fleettiersupdatesample]                             | updates a tier. x-ms-original-file: 2025-02-01-preview/FleetTiers_Update_MaximumSet_Gen.json                                          |
| [fleetsCreateOrUpdateSample.ts][fleetscreateorupdatesample]                     | creates or updates a fleet resource. x-ms-original-file: 2025-02-01-preview/Fleets_CreateOrUpdate_MaximumSet_Gen.json                 |
| [fleetsDeleteSample.ts][fleetsdeletesample]                                     | deletes a fleet. x-ms-original-file: 2025-02-01-preview/Fleets_Delete_MaximumSet_Gen.json                                             |
| [fleetsGetSample.ts][fleetsgetsample]                                           | gets a fleet resource. x-ms-original-file: 2025-02-01-preview/Fleets_Get_MaximumSet_Gen.json                                          |
| [fleetsListByResourceGroupSample.ts][fleetslistbyresourcegroupsample]           | gets all fleets in a resource group. x-ms-original-file: 2025-02-01-preview/Fleets_ListByResourceGroup_MaximumSet_Gen.json            |
| [fleetsListSample.ts][fleetslistsample]                                         | gets all fleets in a subscription. x-ms-original-file: 2025-02-01-preview/Fleets_List_MaximumSet_Gen.json                             |
| [fleetsUpdateSample.ts][fleetsupdatesample]                                     | modifies a fleet resource. x-ms-original-file: 2025-02-01-preview/Fleets_Update_MaximumSet_Gen.json                                   |
| [fleetspacesCreateOrUpdateSample.ts][fleetspacescreateorupdatesample]           | creates or updates a fleetspace resource. x-ms-original-file: 2025-02-01-preview/Fleetspaces_CreateOrUpdate_MaximumSet_Gen.json       |
| [fleetspacesDeleteSample.ts][fleetspacesdeletesample]                           | deletes a fleetspace. x-ms-original-file: 2025-02-01-preview/Fleetspaces_Delete_MaximumSet_Gen.json                                   |
| [fleetspacesGetSample.ts][fleetspacesgetsample]                                 | gets fleetspace resource. x-ms-original-file: 2025-02-01-preview/Fleetspaces_Get_MaximumSet_Gen.json                                  |
| [fleetspacesListByFleetSample.ts][fleetspaceslistbyfleetsample]                 | lists fleetspaces in a fleet. x-ms-original-file: 2025-02-01-preview/Fleetspaces_ListByFleet_MaximumSet_Gen.json                      |
| [fleetspacesRegisterServerSample.ts][fleetspacesregisterserversample]           | migrates an existing logical server into fleet. x-ms-original-file: 2025-02-01-preview/Fleetspaces_RegisterServer_MaximumSet_Gen.json |
| [fleetspacesUnregisterSample.ts][fleetspacesunregistersample]                   | unregisters all databases from a fleetspace x-ms-original-file: 2025-02-01-preview/Fleetspaces_Unregister_MaximumSet_Gen.json         |
| [fleetspacesUpdateSample.ts][fleetspacesupdatesample]                           | modifies a fleetspace resource. x-ms-original-file: 2025-02-01-preview/Fleetspaces_Update_MaximumSet_Gen.json                         |
| [operationsListSample.ts][operationslistsample]                                 | list the operations for the provider x-ms-original-file: 2025-02-01-preview/Operations_List_MaximumSet_Gen.json                       |

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
node dist/firewallRulesCreateOrUpdateSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node dist/firewallRulesCreateOrUpdateSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[firewallrulescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/firewallRulesCreateOrUpdateSample.ts
[firewallrulesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/firewallRulesDeleteSample.ts
[firewallrulesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/firewallRulesGetSample.ts
[firewallruleslistbyfleetspacesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/firewallRulesListByFleetspaceSample.ts
[fleetdatabaseschangetiersample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetDatabasesChangeTierSample.ts
[fleetdatabasescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetDatabasesCreateOrUpdateSample.ts
[fleetdatabasesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetDatabasesDeleteSample.ts
[fleetdatabasesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetDatabasesGetSample.ts
[fleetdatabaseslistbyfleetspacesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetDatabasesListByFleetspaceSample.ts
[fleetdatabasesrenamesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetDatabasesRenameSample.ts
[fleetdatabasesrevertsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetDatabasesRevertSample.ts
[fleetdatabasesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetDatabasesUpdateSample.ts
[fleettierscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetTiersCreateOrUpdateSample.ts
[fleettiersdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetTiersDeleteSample.ts
[fleettiersdisablesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetTiersDisableSample.ts
[fleettiersgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetTiersGetSample.ts
[fleettierslistbyfleetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetTiersListByFleetSample.ts
[fleettiersupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetTiersUpdateSample.ts
[fleetscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetsCreateOrUpdateSample.ts
[fleetsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetsDeleteSample.ts
[fleetsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetsGetSample.ts
[fleetslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetsListByResourceGroupSample.ts
[fleetslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetsListSample.ts
[fleetsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetsUpdateSample.ts
[fleetspacescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetspacesCreateOrUpdateSample.ts
[fleetspacesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetspacesDeleteSample.ts
[fleetspacesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetspacesGetSample.ts
[fleetspaceslistbyfleetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetspacesListByFleetSample.ts
[fleetspacesregisterserversample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetspacesRegisterServerSample.ts
[fleetspacesunregistersample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetspacesUnregisterSample.ts
[fleetspacesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/fleetspacesUpdateSample.ts
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/typescript/src/operationsListSample.ts
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-databasefleetmanager?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/databasefleetmanager/arm-databasefleetmanager/README.md
[typescript]: https://www.typescriptlang.org/docs/home.html
