# @azure/arm-informaticadatamanagement client library samples for JavaScript

These sample programs show how to use the JavaScript client libraries for @azure/arm-informaticadatamanagement in some common scenarios.

| **File Name**                                                                                                   | **Description**                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [operationsListSample.js][operationslistsample]                                                                 | list the operations for the provider x-ms-original-file: 2024-05-08/Operations_List_MaximumSet_Gen.json                                                                       |
| [organizationsCreateOrUpdateSample.js][organizationscreateorupdatesample]                                       | create a InformaticaOrganizationResource x-ms-original-file: 2024-05-08/Organizations_CreateOrUpdate_MaximumSet_Gen.json                                                      |
| [organizationsDeleteSample.js][organizationsdeletesample]                                                       | delete a InformaticaOrganizationResource x-ms-original-file: 2024-05-08/Organizations_Delete_MaximumSet_Gen.json                                                              |
| [organizationsGetAllServerlessRuntimesSample.js][organizationsgetallserverlessruntimessample]                   | gets all serverless runtime resources in a given informatica organization resource. x-ms-original-file: 2024-05-08/Organizations_GetAllServerlessRuntimes_MaximumSet_Gen.json |
| [organizationsGetSample.js][organizationsgetsample]                                                             | get a InformaticaOrganizationResource x-ms-original-file: 2024-05-08/Organizations_Get_MaximumSet_Gen.json                                                                    |
| [organizationsGetServerlessMetadataSample.js][organizationsgetserverlessmetadatasample]                         | gets Metadata of the serverless runtime environment. x-ms-original-file: 2024-05-08/Organizations_GetServerlessMetadata_MaximumSet_Gen.json                                   |
| [organizationsUpdateSample.js][organizationsupdatesample]                                                       | update a InformaticaOrganizationResource x-ms-original-file: 2024-05-08/Organizations_Update_MaximumSet_Gen.json                                                              |
| [serverlessRuntimesCheckDependenciesSample.js][serverlessruntimescheckdependenciessample]                       | checks all dependencies for a serverless runtime resource x-ms-original-file: 2024-05-08/ServerlessRuntimes_CheckDependencies_MaximumSet_Gen.json                             |
| [serverlessRuntimesCreateOrUpdateSample.js][serverlessruntimescreateorupdatesample]                             | create a InformaticaServerlessRuntimeResource x-ms-original-file: 2024-05-08/ServerlessRuntimes_CreateOrUpdate_MaximumSet_Gen.json                                            |
| [serverlessRuntimesDeleteSample.js][serverlessruntimesdeletesample]                                             | delete a InformaticaServerlessRuntimeResource x-ms-original-file: 2024-05-08/ServerlessRuntimes_Delete_MaximumSet_Gen.json                                                    |
| [serverlessRuntimesGetSample.js][serverlessruntimesgetsample]                                                   | get a InformaticaServerlessRuntimeResource x-ms-original-file: 2024-05-08/ServerlessRuntimes_Get_MaximumSet_Gen.json                                                          |
| [serverlessRuntimesServerlessResourceByIdSample.js][serverlessruntimesserverlessresourcebyidsample]             | returns a serverless runtime resource by ID x-ms-original-file: 2024-05-08/ServerlessRuntimes_ServerlessResourceById_MaximumSet_Gen.json                                      |
| [serverlessRuntimesStartFailedServerlessRuntimeSample.js][serverlessruntimesstartfailedserverlessruntimesample] | starts a failed runtime resource x-ms-original-file: 2024-05-08/ServerlessRuntimes_StartFailedServerlessRuntime_MaximumSet_Gen.json                                           |
| [serverlessRuntimesUpdateSample.js][serverlessruntimesupdatesample]                                             | update a InformaticaServerlessRuntimeResource x-ms-original-file: 2024-05-08/ServerlessRuntimes_Update_MaximumSet_Gen.json                                                    |

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
node operationsListSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node operationsListSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/informatica/arm-informaticadatamanagement/samples/v1/javascript/operationsListSample.js
[organizationscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/informatica/arm-informaticadatamanagement/samples/v1/javascript/organizationsCreateOrUpdateSample.js
[organizationsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/informatica/arm-informaticadatamanagement/samples/v1/javascript/organizationsDeleteSample.js
[organizationsgetallserverlessruntimessample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/informatica/arm-informaticadatamanagement/samples/v1/javascript/organizationsGetAllServerlessRuntimesSample.js
[organizationsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/informatica/arm-informaticadatamanagement/samples/v1/javascript/organizationsGetSample.js
[organizationsgetserverlessmetadatasample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/informatica/arm-informaticadatamanagement/samples/v1/javascript/organizationsGetServerlessMetadataSample.js
[organizationsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/informatica/arm-informaticadatamanagement/samples/v1/javascript/organizationsUpdateSample.js
[serverlessruntimescheckdependenciessample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/informatica/arm-informaticadatamanagement/samples/v1/javascript/serverlessRuntimesCheckDependenciesSample.js
[serverlessruntimescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/informatica/arm-informaticadatamanagement/samples/v1/javascript/serverlessRuntimesCreateOrUpdateSample.js
[serverlessruntimesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/informatica/arm-informaticadatamanagement/samples/v1/javascript/serverlessRuntimesDeleteSample.js
[serverlessruntimesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/informatica/arm-informaticadatamanagement/samples/v1/javascript/serverlessRuntimesGetSample.js
[serverlessruntimesserverlessresourcebyidsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/informatica/arm-informaticadatamanagement/samples/v1/javascript/serverlessRuntimesServerlessResourceByIdSample.js
[serverlessruntimesstartfailedserverlessruntimesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/informatica/arm-informaticadatamanagement/samples/v1/javascript/serverlessRuntimesStartFailedServerlessRuntimeSample.js
[serverlessruntimesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/informatica/arm-informaticadatamanagement/samples/v1/javascript/serverlessRuntimesUpdateSample.js
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-informaticadatamanagement?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/informatica/arm-informaticadatamanagement/README.md
