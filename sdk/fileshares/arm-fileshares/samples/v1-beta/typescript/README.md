# @azure/arm-fileshares client library samples for TypeScript (Beta)

These sample programs show how to use the TypeScript client libraries for @azure/arm-fileshares in some common scenarios.

| **File Name**                                                                                         | **Description**                                                                                                                               |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [fileSharesCheckNameAvailabilitySample.ts][fileshareschecknameavailabilitysample]                     | implements local CheckNameAvailability operations x-ms-original-file: 2024-01-01-preview/FileShares_CheckNameAvailability_MaximumSet_Gen.json |
| [fileSharesCreateOrUpdateFileShareSnapshotSample.ts][filesharescreateorupdatefilesharesnapshotsample] | create a FileShareSnapshot. x-ms-original-file: 2024-01-01-preview/FileShares_CreateOrUpdateFileShareSnapshot_MaximumSet_Gen.json             |
| [fileSharesCreateOrUpdateSample.ts][filesharescreateorupdatesample]                                   | create or update a file share. x-ms-original-file: 2024-01-01-preview/FileShares_CreateOrUpdate_MaximumSet_Gen.json                           |
| [fileSharesDeleteFileShareSnapshotSample.ts][filesharesdeletefilesharesnapshotsample]                 | delete a FileShareSnapshot. x-ms-original-file: 2024-01-01-preview/FileShares_DeleteFileShareSnapshot_MaximumSet_Gen.json                     |
| [fileSharesDeleteSample.ts][filesharesdeletesample]                                                   | delete a FileShare x-ms-original-file: 2024-01-01-preview/FileShares_Delete_MaximumSet_Gen.json                                               |
| [fileSharesGetFileShareSnapshotSample.ts][filesharesgetfilesharesnapshotsample]                       | get a FileShareSnapshot x-ms-original-file: 2024-01-01-preview/FileShares_GetFileShareSnapshot_MaximumSet_Gen.json                            |
| [fileSharesGetSample.ts][filesharesgetsample]                                                         | get a FileShare x-ms-original-file: 2024-01-01-preview/FileShares_Get_MaximumSet_Gen.json                                                     |
| [fileSharesListByFileShareSample.ts][fileshareslistbyfilesharesample]                                 | list FileShareSnapshot by FileShare. x-ms-original-file: 2024-01-01-preview/FileShares_ListByFileShare_MaximumSet_Gen.json                    |
| [fileSharesListByParentSample.ts][fileshareslistbyparentsample]                                       | list FileShare resources by resource group x-ms-original-file: 2024-01-01-preview/FileShares_ListByParent_MaximumSet_Gen.json                 |
| [fileSharesListBySubscriptionSample.ts][fileshareslistbysubscriptionsample]                           | list FileShare resources by subscription ID x-ms-original-file: 2024-01-01-preview/FileShares_ListBySubscription_MaximumSet_Gen.json          |
| [fileSharesUpdateFileShareSnapshotSample.ts][filesharesupdatefilesharesnapshotsample]                 | update a FileShareSnapshot. x-ms-original-file: 2024-01-01-preview/FileShares_UpdateFileShareSnapshot_MaximumSet_Gen.json                     |
| [fileSharesUpdateSample.ts][filesharesupdatesample]                                                   | update a FileShare x-ms-original-file: 2024-01-01-preview/FileShares_Update_MaximumSet_Gen.json                                               |
| [operationsListSample.ts][operationslistsample]                                                       | list the operations for the provider x-ms-original-file: 2024-01-01-preview/Operations_List_MaximumSet_Gen.json                               |

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
node dist/fileSharesCheckNameAvailabilitySample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node dist/fileSharesCheckNameAvailabilitySample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[fileshareschecknameavailabilitysample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/typescript/src/fileSharesCheckNameAvailabilitySample.ts
[filesharescreateorupdatefilesharesnapshotsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/typescript/src/fileSharesCreateOrUpdateFileShareSnapshotSample.ts
[filesharescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/typescript/src/fileSharesCreateOrUpdateSample.ts
[filesharesdeletefilesharesnapshotsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/typescript/src/fileSharesDeleteFileShareSnapshotSample.ts
[filesharesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/typescript/src/fileSharesDeleteSample.ts
[filesharesgetfilesharesnapshotsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/typescript/src/fileSharesGetFileShareSnapshotSample.ts
[filesharesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/typescript/src/fileSharesGetSample.ts
[fileshareslistbyfilesharesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/typescript/src/fileSharesListByFileShareSample.ts
[fileshareslistbyparentsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/typescript/src/fileSharesListByParentSample.ts
[fileshareslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/typescript/src/fileSharesListBySubscriptionSample.ts
[filesharesupdatefilesharesnapshotsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/typescript/src/fileSharesUpdateFileShareSnapshotSample.ts
[filesharesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/typescript/src/fileSharesUpdateSample.ts
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/typescript/src/operationsListSample.ts
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-fileshares?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/fileshares/arm-fileshares/README.md
[typescript]: https://www.typescriptlang.org/docs/home.html
