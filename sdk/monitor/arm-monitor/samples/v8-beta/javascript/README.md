# @azure/arm-monitor client library samples for JavaScript (Beta)

These sample programs show how to use the JavaScript client libraries for @azure/arm-monitor in some common scenarios.

| **File Name**                                                                                         | **Description**                                                                                                                            |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [azureMonitorWorkspacesCreateOrUpdateSample.js][azuremonitorworkspacescreateorupdatesample]           | create or update a workspace x-ms-original-file: 2023-10-01-preview/AzureMonitorWorkspaceCreate.json                                       |
| [azureMonitorWorkspacesDeleteSample.js][azuremonitorworkspacesdeletesample]                           | delete a workspace x-ms-original-file: 2023-10-01-preview/AzureMonitorWorkspaceDelete.json                                                 |
| [azureMonitorWorkspacesGetSample.js][azuremonitorworkspacesgetsample]                                 | returns the specific Azure Monitor workspace x-ms-original-file: 2023-10-01-preview/AzureMonitorWorkspaceGet.json                          |
| [azureMonitorWorkspacesListByResourceGroupSample.js][azuremonitorworkspaceslistbyresourcegroupsample] | lists all workspaces in the specified resource group x-ms-original-file: 2023-10-01-preview/AzureMonitorWorkspacesListByResourceGroup.json |
| [azureMonitorWorkspacesListBySubscriptionSample.js][azuremonitorworkspaceslistbysubscriptionsample]   | lists all workspaces in the specified subscription x-ms-original-file: 2023-10-01-preview/AzureMonitorWorkspacesListBySubscription.json    |
| [azureMonitorWorkspacesUpdateSample.js][azuremonitorworkspacesupdatesample]                           | updates part of a workspace x-ms-original-file: 2023-10-01-preview/AzureMonitorWorkspaceUpdate.json                                        |
| [operationsListSample.js][operationslistsample]                                                       | list the operations for the provider x-ms-original-file: 2023-10-01-preview/OperationsList.json                                            |
| [pipelineGroupsCreateOrUpdateSample.js][pipelinegroupscreateorupdatesample]                           | create or update a pipeline group instance. x-ms-original-file: 2023-10-01-preview/PipelineGroupCreateSyslogs.json                         |
| [pipelineGroupsDeleteSample.js][pipelinegroupsdeletesample]                                           | delete a pipeline group instance. x-ms-original-file: 2023-10-01-preview/PipelineGroupDelete.json                                          |
| [pipelineGroupsGetSample.js][pipelinegroupsgetsample]                                                 | returns the specific pipeline group instance. x-ms-original-file: 2023-10-01-preview/PipelineGroupGet.json                                 |
| [pipelineGroupsListByResourceGroupSample.js][pipelinegroupslistbyresourcegroupsample]                 | lists all workspaces in the specified resource group x-ms-original-file: 2023-10-01-preview/PipelineGroupListByResourceGroup.json          |
| [pipelineGroupsListBySubscriptionSample.js][pipelinegroupslistbysubscriptionsample]                   | lists all workspaces in the specified subscription x-ms-original-file: 2023-10-01-preview/PipelineGroupListBySubscription.json             |
| [pipelineGroupsUpdateSample.js][pipelinegroupsupdatesample]                                           | updates a pipeline group instance x-ms-original-file: 2023-10-01-preview/PipelineGroupUpdate.json                                          |

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
node azureMonitorWorkspacesCreateOrUpdateSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node azureMonitorWorkspacesCreateOrUpdateSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[azuremonitorworkspacescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/javascript/azureMonitorWorkspacesCreateOrUpdateSample.js
[azuremonitorworkspacesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/javascript/azureMonitorWorkspacesDeleteSample.js
[azuremonitorworkspacesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/javascript/azureMonitorWorkspacesGetSample.js
[azuremonitorworkspaceslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/javascript/azureMonitorWorkspacesListByResourceGroupSample.js
[azuremonitorworkspaceslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/javascript/azureMonitorWorkspacesListBySubscriptionSample.js
[azuremonitorworkspacesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/javascript/azureMonitorWorkspacesUpdateSample.js
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/javascript/operationsListSample.js
[pipelinegroupscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/javascript/pipelineGroupsCreateOrUpdateSample.js
[pipelinegroupsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/javascript/pipelineGroupsDeleteSample.js
[pipelinegroupsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/javascript/pipelineGroupsGetSample.js
[pipelinegroupslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/javascript/pipelineGroupsListByResourceGroupSample.js
[pipelinegroupslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/javascript/pipelineGroupsListBySubscriptionSample.js
[pipelinegroupsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/javascript/pipelineGroupsUpdateSample.js
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-monitor?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/monitor/arm-monitor/README.md
