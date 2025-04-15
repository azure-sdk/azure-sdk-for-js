# @azure/arm-databasewatcher client library samples for TypeScript (Beta)

These sample programs show how to use the TypeScript client libraries for @azure/arm-databasewatcher in some common scenarios.

| **File Name**                                                                                     | **Description**                                                                                                                                 |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [alertRuleResourcesCreateOrUpdateSample.ts][alertruleresourcescreateorupdatesample]               | create a AlertRuleResource x-ms-original-file: 2025-01-02/AlertRuleResources_CreateOrUpdate_MaximumSet_Gen.json                                 |
| [alertRuleResourcesDeleteSample.ts][alertruleresourcesdeletesample]                               | delete a AlertRuleResource x-ms-original-file: 2025-01-02/AlertRuleResources_Delete_MaximumSet_Gen.json                                         |
| [alertRuleResourcesGetSample.ts][alertruleresourcesgetsample]                                     | get a AlertRuleResource x-ms-original-file: 2025-01-02/AlertRuleResources_Get_MaximumSet_Gen.json                                               |
| [alertRuleResourcesListByParentSample.ts][alertruleresourceslistbyparentsample]                   | list AlertRuleResource resources by Watcher x-ms-original-file: 2025-01-02/AlertRuleResources_ListByParent_MaximumSet_Gen.json                  |
| [healthValidationsGetSample.ts][healthvalidationsgetsample]                                       | get a HealthValidation x-ms-original-file: 2025-01-02/HealthValidations_Get_MaximumSet_Gen.json                                                 |
| [healthValidationsListByParentSample.ts][healthvalidationslistbyparentsample]                     | list HealthValidation resources by Watcher x-ms-original-file: 2025-01-02/HealthValidations_ListByParent_MaximumSet_Gen.json                    |
| [healthValidationsStartValidationSample.ts][healthvalidationsstartvalidationsample]               | starts health validation for a watcher. x-ms-original-file: 2025-01-02/HealthValidations_StartValidation_MaximumSet_Gen.json                    |
| [operationsListSample.ts][operationslistsample]                                                   | list the operations for the provider x-ms-original-file: 2025-01-02/Operations_List_MaximumSet_Gen.json                                         |
| [sharedPrivateLinkResourcesCreateSample.ts][sharedprivatelinkresourcescreatesample]               | create a SharedPrivateLinkResource x-ms-original-file: 2025-01-02/SharedPrivateLinkResources_Create_MaximumSet_Gen.json                         |
| [sharedPrivateLinkResourcesDeleteSample.ts][sharedprivatelinkresourcesdeletesample]               | delete a SharedPrivateLinkResource x-ms-original-file: 2025-01-02/SharedPrivateLinkResources_Delete_MaximumSet_Gen.json                         |
| [sharedPrivateLinkResourcesGetSample.ts][sharedprivatelinkresourcesgetsample]                     | get a SharedPrivateLinkResource x-ms-original-file: 2025-01-02/SharedPrivateLinkResources_Get_MaximumSet_Gen.json                               |
| [sharedPrivateLinkResourcesListByWatcherSample.ts][sharedprivatelinkresourceslistbywatchersample] | list SharedPrivateLinkResource resources by Watcher x-ms-original-file: 2025-01-02/SharedPrivateLinkResources_ListByWatcher_MaximumSet_Gen.json |
| [targetsCreateOrUpdateSample.ts][targetscreateorupdatesample]                                     | create a Target x-ms-original-file: 2025-01-02/Targets_CreateOrUpdate_MaximumSet_Gen.json                                                       |
| [targetsDeleteSample.ts][targetsdeletesample]                                                     | delete a Target x-ms-original-file: 2025-01-02/Targets_Delete_MaximumSet_Gen.json                                                               |
| [targetsGetSample.ts][targetsgetsample]                                                           | get a Target x-ms-original-file: 2025-01-02/Targets_Get_MaximumSet_Gen.json                                                                     |
| [targetsListByWatcherSample.ts][targetslistbywatchersample]                                       | list Target resources by Watcher x-ms-original-file: 2025-01-02/Targets_ListByWatcher_MaximumSet_Gen.json                                       |
| [watchersCreateOrUpdateSample.ts][watcherscreateorupdatesample]                                   | create a Watcher x-ms-original-file: 2025-01-02/Watchers_CreateOrUpdate_MaximumSet_Gen.json                                                     |
| [watchersDeleteSample.ts][watchersdeletesample]                                                   | delete a Watcher x-ms-original-file: 2025-01-02/Watchers_Delete_MaximumSet_Gen.json                                                             |
| [watchersGetSample.ts][watchersgetsample]                                                         | get a Watcher x-ms-original-file: 2025-01-02/Watchers_Get_MaximumSet_Gen.json                                                                   |
| [watchersListByResourceGroupSample.ts][watcherslistbyresourcegroupsample]                         | list Watcher resources by resource group x-ms-original-file: 2025-01-02/Watchers_ListByResourceGroup_MaximumSet_Gen.json                        |
| [watchersListBySubscriptionSample.ts][watcherslistbysubscriptionsample]                           | list Watcher resources by subscription ID x-ms-original-file: 2025-01-02/Watchers_ListBySubscription_MaximumSet_Gen.json                        |
| [watchersStartSample.ts][watchersstartsample]                                                     | the action to start monitoring all targets configured for a database watcher. x-ms-original-file: 2025-01-02/Watchers_Start_MaximumSet_Gen.json |
| [watchersStopSample.ts][watchersstopsample]                                                       | the action to stop monitoring all targets configured for a database watcher. x-ms-original-file: 2025-01-02/Watchers_Stop_MaximumSet_Gen.json   |
| [watchersUpdateSample.ts][watchersupdatesample]                                                   | update a Watcher x-ms-original-file: 2025-01-02/Watchers_Update_MaximumSet_Gen.json                                                             |

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
node dist/alertRuleResourcesCreateOrUpdateSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node dist/alertRuleResourcesCreateOrUpdateSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[alertruleresourcescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/alertRuleResourcesCreateOrUpdateSample.ts
[alertruleresourcesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/alertRuleResourcesDeleteSample.ts
[alertruleresourcesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/alertRuleResourcesGetSample.ts
[alertruleresourceslistbyparentsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/alertRuleResourcesListByParentSample.ts
[healthvalidationsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/healthValidationsGetSample.ts
[healthvalidationslistbyparentsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/healthValidationsListByParentSample.ts
[healthvalidationsstartvalidationsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/healthValidationsStartValidationSample.ts
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/operationsListSample.ts
[sharedprivatelinkresourcescreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/sharedPrivateLinkResourcesCreateSample.ts
[sharedprivatelinkresourcesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/sharedPrivateLinkResourcesDeleteSample.ts
[sharedprivatelinkresourcesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/sharedPrivateLinkResourcesGetSample.ts
[sharedprivatelinkresourceslistbywatchersample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/sharedPrivateLinkResourcesListByWatcherSample.ts
[targetscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/targetsCreateOrUpdateSample.ts
[targetsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/targetsDeleteSample.ts
[targetsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/targetsGetSample.ts
[targetslistbywatchersample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/targetsListByWatcherSample.ts
[watcherscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/watchersCreateOrUpdateSample.ts
[watchersdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/watchersDeleteSample.ts
[watchersgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/watchersGetSample.ts
[watcherslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/watchersListByResourceGroupSample.ts
[watcherslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/watchersListBySubscriptionSample.ts
[watchersstartsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/watchersStartSample.ts
[watchersstopsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/watchersStopSample.ts
[watchersupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/typescript/src/watchersUpdateSample.ts
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-databasewatcher?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/databasewatcher/arm-databasewatcher/README.md
[typescript]: https://www.typescriptlang.org/docs/home.html
