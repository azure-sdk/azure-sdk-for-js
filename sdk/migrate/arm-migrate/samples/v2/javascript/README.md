# @azure/arm-migrate client library samples for JavaScript

These sample programs show how to use the JavaScript client libraries for @azure/arm-migrate in some common scenarios.

| **File Name**                                                                                                     | **Description**                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [avsAssessedMachinesV2OperationsGetSample.js][avsassessedmachinesv2operationsgetsample]                           | get a AvsAssessedMachineV2 x-ms-original-file: 2024-03-03-preview/AvsAssessedMachinesV2Operations_Get_MaximumSet_Gen.json                                                 |
| [avsAssessedMachinesV2OperationsListByParentSample.js][avsassessedmachinesv2operationslistbyparentsample]         | list AvsAssessedMachineV2 resources by AvsAssessmentV2 x-ms-original-file: 2024-03-03-preview/AvsAssessedMachinesV2Operations_ListByParent_MaximumSet_Gen.json            |
| [avsAssessmentV2SummaryOperationsGetSample.js][avsassessmentv2summaryoperationsgetsample]                         | get a AvsAssessmentV2Summary x-ms-original-file: 2024-03-03-preview/AvsAssessmentV2SummaryOperations_Get_MaximumSet_Gen.json                                              |
| [avsAssessmentV2SummaryOperationsListByParentSample.js][avsassessmentv2summaryoperationslistbyparentsample]       | list AvsAssessmentV2Summary resources by AvsAssessmentV2 x-ms-original-file: 2024-03-03-preview/AvsAssessmentV2SummaryOperations_ListByParent_MaximumSet_Gen.json         |
| [avsAssessmentsV2OperationsCreateSample.js][avsassessmentsv2operationscreatesample]                               | create a AvsAssessmentV2 x-ms-original-file: 2024-03-03-preview/AvsAssessmentsV2Operations_Create_MaximumSet_Gen.json                                                     |
| [avsAssessmentsV2OperationsDeleteSample.js][avsassessmentsv2operationsdeletesample]                               | delete a AvsAssessmentV2 x-ms-original-file: 2024-03-03-preview/AvsAssessmentsV2Operations_Delete_MaximumSet_Gen.json                                                     |
| [avsAssessmentsV2OperationsDownloadUrlSample.js][avsassessmentsv2operationsdownloadurlsample]                     | get the URL for downloading the assessment in a report format. x-ms-original-file: 2024-03-03-preview/AvsAssessmentsV2Operations_DownloadUrl_MaximumSet_Gen.json          |
| [avsAssessmentsV2OperationsGetSample.js][avsassessmentsv2operationsgetsample]                                     | get a AvsAssessmentV2 x-ms-original-file: 2024-03-03-preview/AvsAssessmentsV2Operations_Get_MaximumSet_Gen.json                                                           |
| [avsAssessmentsV2OperationsListByParentSample.js][avsassessmentsv2operationslistbyparentsample]                   | list AvsAssessmentV2 resources by AssessmentProject x-ms-original-file: 2024-03-03-preview/AvsAssessmentsV2Operations_ListByParent_MaximumSet_Gen.json                    |
| [avsGraphAssessmentOptionsOperationsGetSample.js][avsgraphassessmentoptionsoperationsgetsample]                   | get a AvsGraphAssessmentOptions x-ms-original-file: 2024-03-03-preview/AvsGraphAssessmentOptionsOperations_Get_MaximumSet_Gen.json                                        |
| [avsGraphAssessmentOptionsOperationsListByParentSample.js][avsgraphassessmentoptionsoperationslistbyparentsample] | list AvsGraphAssessmentOptions resources by AssessmentProject x-ms-original-file: 2024-03-03-preview/AvsGraphAssessmentOptionsOperations_ListByParent_MaximumSet_Gen.json |
| [operationsListSample.js][operationslistsample]                                                                   | list the operations for the provider x-ms-original-file: 2024-03-03-preview/Operations_List_MaximumSet_Gen.json                                                           |

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
node avsAssessedMachinesV2OperationsGetSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node avsAssessedMachinesV2OperationsGetSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[avsassessedmachinesv2operationsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/migrate/arm-migrate/samples/v2/javascript/avsAssessedMachinesV2OperationsGetSample.js
[avsassessedmachinesv2operationslistbyparentsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/migrate/arm-migrate/samples/v2/javascript/avsAssessedMachinesV2OperationsListByParentSample.js
[avsassessmentv2summaryoperationsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/migrate/arm-migrate/samples/v2/javascript/avsAssessmentV2SummaryOperationsGetSample.js
[avsassessmentv2summaryoperationslistbyparentsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/migrate/arm-migrate/samples/v2/javascript/avsAssessmentV2SummaryOperationsListByParentSample.js
[avsassessmentsv2operationscreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/migrate/arm-migrate/samples/v2/javascript/avsAssessmentsV2OperationsCreateSample.js
[avsassessmentsv2operationsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/migrate/arm-migrate/samples/v2/javascript/avsAssessmentsV2OperationsDeleteSample.js
[avsassessmentsv2operationsdownloadurlsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/migrate/arm-migrate/samples/v2/javascript/avsAssessmentsV2OperationsDownloadUrlSample.js
[avsassessmentsv2operationsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/migrate/arm-migrate/samples/v2/javascript/avsAssessmentsV2OperationsGetSample.js
[avsassessmentsv2operationslistbyparentsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/migrate/arm-migrate/samples/v2/javascript/avsAssessmentsV2OperationsListByParentSample.js
[avsgraphassessmentoptionsoperationsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/migrate/arm-migrate/samples/v2/javascript/avsGraphAssessmentOptionsOperationsGetSample.js
[avsgraphassessmentoptionsoperationslistbyparentsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/migrate/arm-migrate/samples/v2/javascript/avsGraphAssessmentOptionsOperationsListByParentSample.js
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/migrate/arm-migrate/samples/v2/javascript/operationsListSample.js
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-migrate?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/migrate/arm-migrate/README.md
