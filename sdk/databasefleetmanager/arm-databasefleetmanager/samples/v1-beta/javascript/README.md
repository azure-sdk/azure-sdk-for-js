# @azure/arm-databasefleetmanager client library samples for JavaScript (Beta)

These sample programs show how to use the JavaScript client libraries for @azure/arm-databasefleetmanager in some common scenarios.

| **File Name**                                                                   | **Description**                                                                                                                       |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [firewallRulesCreateOrUpdateSample.js][firewallrulescreateorupdatesample]       | creates or updates a firewall rule. x-ms-original-file: 2025-02-01-preview/FirewallRules_CreateOrUpdate_MaximumSet_Gen.json           |
| [firewallRulesDeleteSample.js][firewallrulesdeletesample]                       | deletes a firewall rule. x-ms-original-file: 2025-02-01-preview/FirewallRules_Delete_MaximumSet_Gen.json                              |
| [firewallRulesGetSample.js][firewallrulesgetsample]                             | gets a firewall rule. x-ms-original-file: 2025-02-01-preview/FirewallRules_Get_MaximumSet_Gen.json                                    |
| [firewallRulesListByFleetspaceSample.js][firewallruleslistbyfleetspacesample]   | gets all firewall rules in a fleetspace. x-ms-original-file: 2025-02-01-preview/FirewallRules_ListByFleetspace_MaximumSet_Gen.json    |
| [fleetDatabasesChangeTierSample.js][fleetdatabaseschangetiersample]             | moves database to a different tier. x-ms-original-file: 2025-02-01-preview/FleetDatabases_ChangeTier_MaximumSet_Gen.json              |
| [fleetDatabasesCreateOrUpdateSample.js][fleetdatabasescreateorupdatesample]     | creates or updates a fleet database. x-ms-original-file: 2025-02-01-preview/FleetDatabases_CreateOrUpdate_MaximumSet_Gen.json         |
| [fleetDatabasesDeleteSample.js][fleetdatabasesdeletesample]                     | deletes a fleet database. x-ms-original-file: 2025-02-01-preview/FleetDatabases_Delete_MaximumSet_Gen.json                            |
| [fleetDatabasesGetSample.js][fleetdatabasesgetsample]                           | gets a fleet database. x-ms-original-file: 2025-02-01-preview/FleetDatabases_Get_MaximumSet_Gen.json                                  |
| [fleetDatabasesListByFleetspaceSample.js][fleetdatabaseslistbyfleetspacesample] | gets all fleet databases in a fleetspace. x-ms-original-file: 2025-02-01-preview/FleetDatabases_ListByFleetspace_MaximumSet_Gen.json  |
| [fleetDatabasesRenameSample.js][fleetdatabasesrenamesample]                     | renames a database. x-ms-original-file: 2025-02-01-preview/FleetDatabases_Rename_MaximumSet_Gen.json                                  |
| [fleetDatabasesRevertSample.js][fleetdatabasesrevertsample]                     | revert a database transparent data encryption (TDE). x-ms-original-file: 2025-02-01-preview/FleetDatabases_Revert_MaximumSet_Gen.json |
| [fleetDatabasesUpdateSample.js][fleetdatabasesupdatesample]                     | updates a fleet database. x-ms-original-file: 2025-02-01-preview/FleetDatabases_Update_MaximumSet_Gen.json                            |
| [fleetTiersCreateOrUpdateSample.js][fleettierscreateorupdatesample]             | creates or updates a tier. x-ms-original-file: 2025-02-01-preview/FleetTiers_CreateOrUpdate_MaximumSet_Gen.json                       |
| [fleetTiersDeleteSample.js][fleettiersdeletesample]                             | deletes a tier. x-ms-original-file: 2025-02-01-preview/FleetTiers_Delete_MaximumSet_Gen.json                                          |
| [fleetTiersDisableSample.js][fleettiersdisablesample]                           | disables a tier. x-ms-original-file: 2025-02-01-preview/FleetTiers_Disable_MaximumSet_Gen.json                                        |
| [fleetTiersGetSample.js][fleettiersgetsample]                                   | gets a tier resource. x-ms-original-file: 2025-02-01-preview/FleetTiers_Get_MaximumSet_Gen.json                                       |
| [fleetTiersListByFleetSample.js][fleettierslistbyfleetsample]                   | list tiers in a fleet. x-ms-original-file: 2025-02-01-preview/FleetTiers_ListByFleet_MaximumSet_Gen.json                              |
| [fleetTiersUpdateSample.js][fleettiersupdatesample]                             | updates a tier. x-ms-original-file: 2025-02-01-preview/FleetTiers_Update_MaximumSet_Gen.json                                          |
| [fleetsCreateOrUpdateSample.js][fleetscreateorupdatesample]                     | creates or updates a fleet resource. x-ms-original-file: 2025-02-01-preview/Fleets_CreateOrUpdate_MaximumSet_Gen.json                 |
| [fleetsDeleteSample.js][fleetsdeletesample]                                     | deletes a fleet. x-ms-original-file: 2025-02-01-preview/Fleets_Delete_MaximumSet_Gen.json                                             |
| [fleetsGetSample.js][fleetsgetsample]                                           | gets a fleet resource. x-ms-original-file: 2025-02-01-preview/Fleets_Get_MaximumSet_Gen.json                                          |
| [fleetsListByResourceGroupSample.js][fleetslistbyresourcegroupsample]           | gets all fleets in a resource group. x-ms-original-file: 2025-02-01-preview/Fleets_ListByResourceGroup_MaximumSet_Gen.json            |
| [fleetsListSample.js][fleetslistsample]                                         | gets all fleets in a subscription. x-ms-original-file: 2025-02-01-preview/Fleets_List_MaximumSet_Gen.json                             |
| [fleetsUpdateSample.js][fleetsupdatesample]                                     | modifies a fleet resource. x-ms-original-file: 2025-02-01-preview/Fleets_Update_MaximumSet_Gen.json                                   |
| [fleetspacesCreateOrUpdateSample.js][fleetspacescreateorupdatesample]           | creates or updates a fleetspace resource. x-ms-original-file: 2025-02-01-preview/Fleetspaces_CreateOrUpdate_MaximumSet_Gen.json       |
| [fleetspacesDeleteSample.js][fleetspacesdeletesample]                           | deletes a fleetspace. x-ms-original-file: 2025-02-01-preview/Fleetspaces_Delete_MaximumSet_Gen.json                                   |
| [fleetspacesGetSample.js][fleetspacesgetsample]                                 | gets fleetspace resource. x-ms-original-file: 2025-02-01-preview/Fleetspaces_Get_MaximumSet_Gen.json                                  |
| [fleetspacesListByFleetSample.js][fleetspaceslistbyfleetsample]                 | lists fleetspaces in a fleet. x-ms-original-file: 2025-02-01-preview/Fleetspaces_ListByFleet_MaximumSet_Gen.json                      |
| [fleetspacesRegisterServerSample.js][fleetspacesregisterserversample]           | migrates an existing logical server into fleet. x-ms-original-file: 2025-02-01-preview/Fleetspaces_RegisterServer_MaximumSet_Gen.json |
| [fleetspacesUnregisterSample.js][fleetspacesunregistersample]                   | unregisters all databases from a fleetspace x-ms-original-file: 2025-02-01-preview/Fleetspaces_Unregister_MaximumSet_Gen.json         |
| [fleetspacesUpdateSample.js][fleetspacesupdatesample]                           | modifies a fleetspace resource. x-ms-original-file: 2025-02-01-preview/Fleetspaces_Update_MaximumSet_Gen.json                         |
| [operationsListSample.js][operationslistsample]                                 | list the operations for the provider x-ms-original-file: 2025-02-01-preview/Operations_List_MaximumSet_Gen.json                       |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

You need [an Azure subscription][freesub] to run these sample programs.

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

3. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node firewallRulesCreateOrUpdateSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node firewallRulesCreateOrUpdateSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[firewallrulescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/firewallRulesCreateOrUpdateSample.js
[firewallrulesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/firewallRulesDeleteSample.js
[firewallrulesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/firewallRulesGetSample.js
[firewallruleslistbyfleetspacesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/firewallRulesListByFleetspaceSample.js
[fleetdatabaseschangetiersample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetDatabasesChangeTierSample.js
[fleetdatabasescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetDatabasesCreateOrUpdateSample.js
[fleetdatabasesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetDatabasesDeleteSample.js
[fleetdatabasesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetDatabasesGetSample.js
[fleetdatabaseslistbyfleetspacesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetDatabasesListByFleetspaceSample.js
[fleetdatabasesrenamesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetDatabasesRenameSample.js
[fleetdatabasesrevertsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetDatabasesRevertSample.js
[fleetdatabasesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetDatabasesUpdateSample.js
[fleettierscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetTiersCreateOrUpdateSample.js
[fleettiersdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetTiersDeleteSample.js
[fleettiersdisablesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetTiersDisableSample.js
[fleettiersgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetTiersGetSample.js
[fleettierslistbyfleetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetTiersListByFleetSample.js
[fleettiersupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetTiersUpdateSample.js
[fleetscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetsCreateOrUpdateSample.js
[fleetsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetsDeleteSample.js
[fleetsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetsGetSample.js
[fleetslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetsListByResourceGroupSample.js
[fleetslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetsListSample.js
[fleetsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetsUpdateSample.js
[fleetspacescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetspacesCreateOrUpdateSample.js
[fleetspacesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetspacesDeleteSample.js
[fleetspacesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetspacesGetSample.js
[fleetspaceslistbyfleetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetspacesListByFleetSample.js
[fleetspacesregisterserversample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetspacesRegisterServerSample.js
[fleetspacesunregistersample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetspacesUnregisterSample.js
[fleetspacesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/fleetspacesUpdateSample.js
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasefleetmanager/arm-databasefleetmanager/samples/v1-beta/javascript/operationsListSample.js
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-databasefleetmanager?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/databasefleetmanager/arm-databasefleetmanager/README.md
