# @azure/arm-loadtesting client library samples for JavaScript

These sample programs show how to use the JavaScript client libraries for @azure/arm-loadtesting in some common scenarios.

| **File Name**                                                                               | **Description**                                                                                                                                                  |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [checkAvailabilityQuotaSample.js][checkavailabilityquotasample]                             | check Quota Availability on quota bucket per region per subscription. x-ms-original-file: 2024-12-01-preview/Quotas_CheckAvailability.json                       |
| [createOrUpdateLoadtestSample.js][createorupdateloadtestsample]                             | create a LoadTestResource x-ms-original-file: 2024-12-01-preview/LoadTests_CreateOrUpdate.json                                                                   |
| [deleteLoadtestSample.js][deleteloadtestsample]                                             | delete a LoadTestResource x-ms-original-file: 2024-12-01-preview/LoadTests_Delete.json                                                                           |
| [getLoadtestSample.js][getloadtestsample]                                                   | get a LoadTestResource x-ms-original-file: 2024-12-01-preview/LoadTests_Get.json                                                                                 |
| [getQuotaSample.js][getquotasample]                                                         | get the available quota for a quota bucket per region per subscription. x-ms-original-file: 2024-12-01-preview/Quotas_Get.json                                   |
| [listByResourceGroupSample.js][listbyresourcegroupsample]                                   | list LoadTestResource resources by resource group x-ms-original-file: 2024-12-01-preview/LoadTests_ListByResourceGroup.json                                      |
| [listBySubscriptionSample.js][listbysubscriptionsample]                                     | list LoadTestResource resources by subscription ID x-ms-original-file: 2024-12-01-preview/LoadTests_ListBySubscription.json                                      |
| [listQuotaSample.js][listquotasample]                                                       | list quotas for a given subscription Id. x-ms-original-file: 2024-12-01-preview/Quotas_List.json                                                                 |
| [outboundNetworkDependenciesEndpointsSample.js][outboundnetworkdependenciesendpointssample] | lists the endpoints that agents may call as part of load testing. x-ms-original-file: 2024-12-01-preview/LoadTests_ListOutboundNetworkDependenciesEndpoints.json |
| [updateLoadtestSample.js][updateloadtestsample]                                             | update a LoadTestResource x-ms-original-file: 2024-12-01-preview/LoadTests_Update.json                                                                           |

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
node checkAvailabilityQuotaSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node checkAvailabilityQuotaSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[checkavailabilityquotasample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/javascript/checkAvailabilityQuotaSample.js
[createorupdateloadtestsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/javascript/createOrUpdateLoadtestSample.js
[deleteloadtestsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/javascript/deleteLoadtestSample.js
[getloadtestsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/javascript/getLoadtestSample.js
[getquotasample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/javascript/getQuotaSample.js
[listbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/javascript/listByResourceGroupSample.js
[listbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/javascript/listBySubscriptionSample.js
[listquotasample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/javascript/listQuotaSample.js
[outboundnetworkdependenciesendpointssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/javascript/outboundNetworkDependenciesEndpointsSample.js
[updateloadtestsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/javascript/updateLoadtestSample.js
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-loadtesting?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/loadtesting/arm-loadtesting/README.md
