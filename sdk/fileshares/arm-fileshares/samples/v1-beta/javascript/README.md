# @azure/arm-fileshares client library samples for JavaScript (Beta)

These sample programs show how to use the JavaScript client libraries for @azure/arm-fileshares in some common scenarios.

| **File Name**                                                                                         | **Description**                                                                                                                               |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [fileSharesCheckNameAvailabilitySample.js][fileshareschecknameavailabilitysample]                     | implements local CheckNameAvailability operations x-ms-original-file: 2024-01-01-preview/FileShares_CheckNameAvailability_MaximumSet_Gen.json |
| [fileSharesCreateOrUpdateFileShareSnapshotSample.js][filesharescreateorupdatefilesharesnapshotsample] | create a FileShareSnapshot. x-ms-original-file: 2024-01-01-preview/FileShares_CreateOrUpdateFileShareSnapshot_MaximumSet_Gen.json             |
| [fileSharesCreateOrUpdateSample.js][filesharescreateorupdatesample]                                   | create or update a file share. x-ms-original-file: 2024-01-01-preview/FileShares_CreateOrUpdate_MaximumSet_Gen.json                           |
| [fileSharesDeleteFileShareSnapshotSample.js][filesharesdeletefilesharesnapshotsample]                 | delete a FileShareSnapshot. x-ms-original-file: 2024-01-01-preview/FileShares_DeleteFileShareSnapshot_MaximumSet_Gen.json                     |
| [fileSharesDeleteSample.js][filesharesdeletesample]                                                   | delete a FileShare x-ms-original-file: 2024-01-01-preview/FileShares_Delete_MaximumSet_Gen.json                                               |
| [fileSharesGetFileShareSnapshotSample.js][filesharesgetfilesharesnapshotsample]                       | get a FileShareSnapshot x-ms-original-file: 2024-01-01-preview/FileShares_GetFileShareSnapshot_MaximumSet_Gen.json                            |
| [fileSharesGetSample.js][filesharesgetsample]                                                         | get a FileShare x-ms-original-file: 2024-01-01-preview/FileShares_Get_MaximumSet_Gen.json                                                     |
| [fileSharesListByFileShareSample.js][fileshareslistbyfilesharesample]                                 | list FileShareSnapshot by FileShare. x-ms-original-file: 2024-01-01-preview/FileShares_ListByFileShare_MaximumSet_Gen.json                    |
| [fileSharesListByParentSample.js][fileshareslistbyparentsample]                                       | list FileShare resources by resource group x-ms-original-file: 2024-01-01-preview/FileShares_ListByParent_MaximumSet_Gen.json                 |
| [fileSharesListBySubscriptionSample.js][fileshareslistbysubscriptionsample]                           | list FileShare resources by subscription ID x-ms-original-file: 2024-01-01-preview/FileShares_ListBySubscription_MaximumSet_Gen.json          |
| [fileSharesUpdateFileShareSnapshotSample.js][filesharesupdatefilesharesnapshotsample]                 | update a FileShareSnapshot. x-ms-original-file: 2024-01-01-preview/FileShares_UpdateFileShareSnapshot_MaximumSet_Gen.json                     |
| [fileSharesUpdateSample.js][filesharesupdatesample]                                                   | update a FileShare x-ms-original-file: 2024-01-01-preview/FileShares_Update_MaximumSet_Gen.json                                               |
| [operationsListSample.js][operationslistsample]                                                       | list the operations for the provider x-ms-original-file: 2024-01-01-preview/Operations_List_MaximumSet_Gen.json                               |

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
node fileSharesCheckNameAvailabilitySample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node fileSharesCheckNameAvailabilitySample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[fileshareschecknameavailabilitysample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/javascript/fileSharesCheckNameAvailabilitySample.js
[filesharescreateorupdatefilesharesnapshotsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/javascript/fileSharesCreateOrUpdateFileShareSnapshotSample.js
[filesharescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/javascript/fileSharesCreateOrUpdateSample.js
[filesharesdeletefilesharesnapshotsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/javascript/fileSharesDeleteFileShareSnapshotSample.js
[filesharesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/javascript/fileSharesDeleteSample.js
[filesharesgetfilesharesnapshotsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/javascript/fileSharesGetFileShareSnapshotSample.js
[filesharesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/javascript/fileSharesGetSample.js
[fileshareslistbyfilesharesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/javascript/fileSharesListByFileShareSample.js
[fileshareslistbyparentsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/javascript/fileSharesListByParentSample.js
[fileshareslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/javascript/fileSharesListBySubscriptionSample.js
[filesharesupdatefilesharesnapshotsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/javascript/fileSharesUpdateFileShareSnapshotSample.js
[filesharesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/javascript/fileSharesUpdateSample.js
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/fileshares/arm-fileshares/samples/v1-beta/javascript/operationsListSample.js
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-fileshares?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/fileshares/arm-fileshares/README.md
