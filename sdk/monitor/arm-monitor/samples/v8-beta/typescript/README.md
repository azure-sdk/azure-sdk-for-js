# @azure/arm-monitor client library samples for TypeScript (Beta)

These sample programs show how to use the TypeScript client libraries for @azure/arm-monitor in some common scenarios.

| **File Name**                                                                                         | **Description**                                                                                                                            |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [azureMonitorWorkspacesCreateOrUpdateSample.ts][azuremonitorworkspacescreateorupdatesample]           | create or update a workspace x-ms-original-file: 2023-10-01-preview/AzureMonitorWorkspaceCreate.json                                       |
| [azureMonitorWorkspacesDeleteSample.ts][azuremonitorworkspacesdeletesample]                           | delete a workspace x-ms-original-file: 2023-10-01-preview/AzureMonitorWorkspaceDelete.json                                                 |
| [azureMonitorWorkspacesGetSample.ts][azuremonitorworkspacesgetsample]                                 | returns the specific Azure Monitor workspace x-ms-original-file: 2023-10-01-preview/AzureMonitorWorkspaceGet.json                          |
| [azureMonitorWorkspacesListByResourceGroupSample.ts][azuremonitorworkspaceslistbyresourcegroupsample] | lists all workspaces in the specified resource group x-ms-original-file: 2023-10-01-preview/AzureMonitorWorkspacesListByResourceGroup.json |
| [azureMonitorWorkspacesListBySubscriptionSample.ts][azuremonitorworkspaceslistbysubscriptionsample]   | lists all workspaces in the specified subscription x-ms-original-file: 2023-10-01-preview/AzureMonitorWorkspacesListBySubscription.json    |
| [azureMonitorWorkspacesUpdateSample.ts][azuremonitorworkspacesupdatesample]                           | updates part of a workspace x-ms-original-file: 2023-10-01-preview/AzureMonitorWorkspaceUpdate.json                                        |
| [operationsListSample.ts][operationslistsample]                                                       | list the operations for the provider x-ms-original-file: 2023-10-01-preview/OperationsList.json                                            |
| [pipelineGroupsCreateOrUpdateSample.ts][pipelinegroupscreateorupdatesample]                           | create or update a pipeline group instance. x-ms-original-file: 2023-10-01-preview/PipelineGroupCreateSyslogs.json                         |
| [pipelineGroupsDeleteSample.ts][pipelinegroupsdeletesample]                                           | delete a pipeline group instance. x-ms-original-file: 2023-10-01-preview/PipelineGroupDelete.json                                          |
| [pipelineGroupsGetSample.ts][pipelinegroupsgetsample]                                                 | returns the specific pipeline group instance. x-ms-original-file: 2023-10-01-preview/PipelineGroupGet.json                                 |
| [pipelineGroupsListByResourceGroupSample.ts][pipelinegroupslistbyresourcegroupsample]                 | lists all workspaces in the specified resource group x-ms-original-file: 2023-10-01-preview/PipelineGroupListByResourceGroup.json          |
| [pipelineGroupsListBySubscriptionSample.ts][pipelinegroupslistbysubscriptionsample]                   | lists all workspaces in the specified subscription x-ms-original-file: 2023-10-01-preview/PipelineGroupListBySubscription.json             |
| [pipelineGroupsUpdateSample.ts][pipelinegroupsupdatesample]                                           | updates a pipeline group instance x-ms-original-file: 2023-10-01-preview/PipelineGroupUpdate.json                                          |

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
node dist/azureMonitorWorkspacesCreateOrUpdateSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node dist/azureMonitorWorkspacesCreateOrUpdateSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[azuremonitorworkspacescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/typescript/src/azureMonitorWorkspacesCreateOrUpdateSample.ts
[azuremonitorworkspacesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/typescript/src/azureMonitorWorkspacesDeleteSample.ts
[azuremonitorworkspacesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/typescript/src/azureMonitorWorkspacesGetSample.ts
[azuremonitorworkspaceslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/typescript/src/azureMonitorWorkspacesListByResourceGroupSample.ts
[azuremonitorworkspaceslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/typescript/src/azureMonitorWorkspacesListBySubscriptionSample.ts
[azuremonitorworkspacesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/typescript/src/azureMonitorWorkspacesUpdateSample.ts
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/typescript/src/operationsListSample.ts
[pipelinegroupscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/typescript/src/pipelineGroupsCreateOrUpdateSample.ts
[pipelinegroupsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/typescript/src/pipelineGroupsDeleteSample.ts
[pipelinegroupsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/typescript/src/pipelineGroupsGetSample.ts
[pipelinegroupslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/typescript/src/pipelineGroupsListByResourceGroupSample.ts
[pipelinegroupslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/typescript/src/pipelineGroupsListBySubscriptionSample.ts
[pipelinegroupsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/arm-monitor/samples/v8-beta/typescript/src/pipelineGroupsUpdateSample.ts
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-monitor?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/monitor/arm-monitor/README.md
[typescript]: https://www.typescriptlang.org/docs/home.html
