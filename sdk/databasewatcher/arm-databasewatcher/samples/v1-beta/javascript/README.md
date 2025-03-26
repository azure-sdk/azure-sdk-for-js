# @azure/arm-databasewatcher client library samples for JavaScript (Beta)

These sample programs show how to use the JavaScript client libraries for @azure/arm-databasewatcher in some common scenarios.

| **File Name**                                                                                     | **Description**                                                                                                                                 |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [alertRuleResourcesCreateOrUpdateSample.js][alertruleresourcescreateorupdatesample]               | create a AlertRuleResource x-ms-original-file: 2025-01-02/AlertRuleResources_CreateOrUpdate_MaximumSet_Gen.json                                 |
| [alertRuleResourcesDeleteSample.js][alertruleresourcesdeletesample]                               | delete a AlertRuleResource x-ms-original-file: 2025-01-02/AlertRuleResources_Delete_MaximumSet_Gen.json                                         |
| [alertRuleResourcesGetSample.js][alertruleresourcesgetsample]                                     | get a AlertRuleResource x-ms-original-file: 2025-01-02/AlertRuleResources_Get_MaximumSet_Gen.json                                               |
| [alertRuleResourcesListByParentSample.js][alertruleresourceslistbyparentsample]                   | list AlertRuleResource resources by Watcher x-ms-original-file: 2025-01-02/AlertRuleResources_ListByParent_MaximumSet_Gen.json                  |
| [healthValidationsGetSample.js][healthvalidationsgetsample]                                       | get a HealthValidation x-ms-original-file: 2025-01-02/HealthValidations_Get_MaximumSet_Gen.json                                                 |
| [healthValidationsListByParentSample.js][healthvalidationslistbyparentsample]                     | list HealthValidation resources by Watcher x-ms-original-file: 2025-01-02/HealthValidations_ListByParent_MaximumSet_Gen.json                    |
| [healthValidationsStartValidationSample.js][healthvalidationsstartvalidationsample]               | starts health validation for a watcher. x-ms-original-file: 2025-01-02/HealthValidations_StartValidation_MaximumSet_Gen.json                    |
| [operationsListSample.js][operationslistsample]                                                   | list the operations for the provider x-ms-original-file: 2025-01-02/Operations_List_MaximumSet_Gen.json                                         |
| [sharedPrivateLinkResourcesCreateSample.js][sharedprivatelinkresourcescreatesample]               | create a SharedPrivateLinkResource x-ms-original-file: 2025-01-02/SharedPrivateLinkResources_Create_MaximumSet_Gen.json                         |
| [sharedPrivateLinkResourcesDeleteSample.js][sharedprivatelinkresourcesdeletesample]               | delete a SharedPrivateLinkResource x-ms-original-file: 2025-01-02/SharedPrivateLinkResources_Delete_MaximumSet_Gen.json                         |
| [sharedPrivateLinkResourcesGetSample.js][sharedprivatelinkresourcesgetsample]                     | get a SharedPrivateLinkResource x-ms-original-file: 2025-01-02/SharedPrivateLinkResources_Get_MaximumSet_Gen.json                               |
| [sharedPrivateLinkResourcesListByWatcherSample.js][sharedprivatelinkresourceslistbywatchersample] | list SharedPrivateLinkResource resources by Watcher x-ms-original-file: 2025-01-02/SharedPrivateLinkResources_ListByWatcher_MaximumSet_Gen.json |
| [targetsCreateOrUpdateSample.js][targetscreateorupdatesample]                                     | create a Target x-ms-original-file: 2025-01-02/Targets_CreateOrUpdate_MaximumSet_Gen.json                                                       |
| [targetsDeleteSample.js][targetsdeletesample]                                                     | delete a Target x-ms-original-file: 2025-01-02/Targets_Delete_MaximumSet_Gen.json                                                               |
| [targetsGetSample.js][targetsgetsample]                                                           | get a Target x-ms-original-file: 2025-01-02/Targets_Get_MaximumSet_Gen.json                                                                     |
| [targetsListByWatcherSample.js][targetslistbywatchersample]                                       | list Target resources by Watcher x-ms-original-file: 2025-01-02/Targets_ListByWatcher_MaximumSet_Gen.json                                       |
| [watchersCreateOrUpdateSample.js][watcherscreateorupdatesample]                                   | create a Watcher x-ms-original-file: 2025-01-02/Watchers_CreateOrUpdate_MaximumSet_Gen.json                                                     |
| [watchersDeleteSample.js][watchersdeletesample]                                                   | delete a Watcher x-ms-original-file: 2025-01-02/Watchers_Delete_MaximumSet_Gen.json                                                             |
| [watchersGetSample.js][watchersgetsample]                                                         | get a Watcher x-ms-original-file: 2025-01-02/Watchers_Get_MaximumSet_Gen.json                                                                   |
| [watchersListByResourceGroupSample.js][watcherslistbyresourcegroupsample]                         | list Watcher resources by resource group x-ms-original-file: 2025-01-02/Watchers_ListByResourceGroup_MaximumSet_Gen.json                        |
| [watchersListBySubscriptionSample.js][watcherslistbysubscriptionsample]                           | list Watcher resources by subscription ID x-ms-original-file: 2025-01-02/Watchers_ListBySubscription_MaximumSet_Gen.json                        |
| [watchersStartSample.js][watchersstartsample]                                                     | the action to start monitoring all targets configured for a database watcher. x-ms-original-file: 2025-01-02/Watchers_Start_MaximumSet_Gen.json |
| [watchersStopSample.js][watchersstopsample]                                                       | the action to stop monitoring all targets configured for a database watcher. x-ms-original-file: 2025-01-02/Watchers_Stop_MaximumSet_Gen.json   |
| [watchersUpdateSample.js][watchersupdatesample]                                                   | update a Watcher x-ms-original-file: 2025-01-02/Watchers_Update_MaximumSet_Gen.json                                                             |

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
node alertRuleResourcesCreateOrUpdateSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node alertRuleResourcesCreateOrUpdateSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[alertruleresourcescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/alertRuleResourcesCreateOrUpdateSample.js
[alertruleresourcesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/alertRuleResourcesDeleteSample.js
[alertruleresourcesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/alertRuleResourcesGetSample.js
[alertruleresourceslistbyparentsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/alertRuleResourcesListByParentSample.js
[healthvalidationsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/healthValidationsGetSample.js
[healthvalidationslistbyparentsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/healthValidationsListByParentSample.js
[healthvalidationsstartvalidationsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/healthValidationsStartValidationSample.js
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/operationsListSample.js
[sharedprivatelinkresourcescreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/sharedPrivateLinkResourcesCreateSample.js
[sharedprivatelinkresourcesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/sharedPrivateLinkResourcesDeleteSample.js
[sharedprivatelinkresourcesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/sharedPrivateLinkResourcesGetSample.js
[sharedprivatelinkresourceslistbywatchersample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/sharedPrivateLinkResourcesListByWatcherSample.js
[targetscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/targetsCreateOrUpdateSample.js
[targetsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/targetsDeleteSample.js
[targetsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/targetsGetSample.js
[targetslistbywatchersample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/targetsListByWatcherSample.js
[watcherscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/watchersCreateOrUpdateSample.js
[watchersdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/watchersDeleteSample.js
[watchersgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/watchersGetSample.js
[watcherslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/watchersListByResourceGroupSample.js
[watcherslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/watchersListBySubscriptionSample.js
[watchersstartsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/watchersStartSample.js
[watchersstopsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/watchersStopSample.js
[watchersupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/databasewatcher/arm-databasewatcher/samples/v1-beta/javascript/watchersUpdateSample.js
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-databasewatcher?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/databasewatcher/arm-databasewatcher/README.md
