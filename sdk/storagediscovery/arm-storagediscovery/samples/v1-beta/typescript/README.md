# @azure/arm-storagediscovery client library samples for TypeScript (Beta)

These sample programs show how to use the TypeScript client libraries for @azure/arm-storagediscovery in some common scenarios.

| **File Name**                                                                                                 | **Description**                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [operationsListSample.ts][operationslistsample]                                                               | list the operations for the provider x-ms-original-file: 2025-06-01-preview/Operation_List.json                                                       |
| [storageDiscoveryWorkspacesCreateOrUpdateSample.ts][storagediscoveryworkspacescreateorupdatesample]           | create a StorageDiscoveryWorkspace x-ms-original-file: 2025-06-01-preview/StorageDiscoveryWorkspaces_CreateOrUpdate.json                              |
| [storageDiscoveryWorkspacesDeleteSample.ts][storagediscoveryworkspacesdeletesample]                           | delete a StorageDiscoveryWorkspace x-ms-original-file: 2025-06-01-preview/StorageDiscoveryWorkspaces_Delete.json                                      |
| [storageDiscoveryWorkspacesGetSample.ts][storagediscoveryworkspacesgetsample]                                 | get a StorageDiscoveryWorkspace x-ms-original-file: 2025-06-01-preview/StorageDiscoveryWorkspaces_Get.json                                            |
| [storageDiscoveryWorkspacesListByResourceGroupSample.ts][storagediscoveryworkspaceslistbyresourcegroupsample] | list StorageDiscoveryWorkspace resources by resource group x-ms-original-file: 2025-06-01-preview/StorageDiscoveryWorkspaces_ListByResourceGroup.json |
| [storageDiscoveryWorkspacesListBySubscriptionSample.ts][storagediscoveryworkspaceslistbysubscriptionsample]   | list StorageDiscoveryWorkspace resources by subscription ID x-ms-original-file: 2025-06-01-preview/StorageDiscoveryWorkspaces_ListBySubscription.json |
| [storageDiscoveryWorkspacesUpdateSample.ts][storagediscoveryworkspacesupdatesample]                           | update a StorageDiscoveryWorkspace x-ms-original-file: 2025-06-01-preview/StorageDiscoveryWorkspaces_Update.json                                      |

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
node dist/operationsListSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node dist/operationsListSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/storagediscovery/arm-storagediscovery/samples/v1-beta/typescript/src/operationsListSample.ts
[storagediscoveryworkspacescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/storagediscovery/arm-storagediscovery/samples/v1-beta/typescript/src/storageDiscoveryWorkspacesCreateOrUpdateSample.ts
[storagediscoveryworkspacesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/storagediscovery/arm-storagediscovery/samples/v1-beta/typescript/src/storageDiscoveryWorkspacesDeleteSample.ts
[storagediscoveryworkspacesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/storagediscovery/arm-storagediscovery/samples/v1-beta/typescript/src/storageDiscoveryWorkspacesGetSample.ts
[storagediscoveryworkspaceslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/storagediscovery/arm-storagediscovery/samples/v1-beta/typescript/src/storageDiscoveryWorkspacesListByResourceGroupSample.ts
[storagediscoveryworkspaceslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/storagediscovery/arm-storagediscovery/samples/v1-beta/typescript/src/storageDiscoveryWorkspacesListBySubscriptionSample.ts
[storagediscoveryworkspacesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/storagediscovery/arm-storagediscovery/samples/v1-beta/typescript/src/storageDiscoveryWorkspacesUpdateSample.ts
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-storagediscovery?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/storagediscovery/arm-storagediscovery/README.md
[typescript]: https://www.typescriptlang.org/docs/home.html
