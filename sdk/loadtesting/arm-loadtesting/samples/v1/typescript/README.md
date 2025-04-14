# @azure/arm-loadtesting client library samples for TypeScript

These sample programs show how to use the TypeScript client libraries for @azure/arm-loadtesting in some common scenarios.

| **File Name**                                                                               | **Description**                                                                                                                                                  |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [checkAvailabilityQuotaSample.ts][checkavailabilityquotasample]                             | check Quota Availability on quota bucket per region per subscription. x-ms-original-file: 2024-12-01-preview/Quotas_CheckAvailability.json                       |
| [createOrUpdateLoadtestSample.ts][createorupdateloadtestsample]                             | create a LoadTestResource x-ms-original-file: 2024-12-01-preview/LoadTests_CreateOrUpdate.json                                                                   |
| [deleteLoadtestSample.ts][deleteloadtestsample]                                             | delete a LoadTestResource x-ms-original-file: 2024-12-01-preview/LoadTests_Delete.json                                                                           |
| [getLoadtestSample.ts][getloadtestsample]                                                   | get a LoadTestResource x-ms-original-file: 2024-12-01-preview/LoadTests_Get.json                                                                                 |
| [getQuotaSample.ts][getquotasample]                                                         | get the available quota for a quota bucket per region per subscription. x-ms-original-file: 2024-12-01-preview/Quotas_Get.json                                   |
| [listByResourceGroupSample.ts][listbyresourcegroupsample]                                   | list LoadTestResource resources by resource group x-ms-original-file: 2024-12-01-preview/LoadTests_ListByResourceGroup.json                                      |
| [listBySubscriptionSample.ts][listbysubscriptionsample]                                     | list LoadTestResource resources by subscription ID x-ms-original-file: 2024-12-01-preview/LoadTests_ListBySubscription.json                                      |
| [listQuotaSample.ts][listquotasample]                                                       | list quotas for a given subscription Id. x-ms-original-file: 2024-12-01-preview/Quotas_List.json                                                                 |
| [outboundNetworkDependenciesEndpointsSample.ts][outboundnetworkdependenciesendpointssample] | lists the endpoints that agents may call as part of load testing. x-ms-original-file: 2024-12-01-preview/LoadTests_ListOutboundNetworkDependenciesEndpoints.json |
| [updateLoadtestSample.ts][updateloadtestsample]                                             | update a LoadTestResource x-ms-original-file: 2024-12-01-preview/LoadTests_Update.json                                                                           |

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
node dist/checkAvailabilityQuotaSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node dist/checkAvailabilityQuotaSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[checkavailabilityquotasample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/typescript/src/checkAvailabilityQuotaSample.ts
[createorupdateloadtestsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/typescript/src/createOrUpdateLoadtestSample.ts
[deleteloadtestsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/typescript/src/deleteLoadtestSample.ts
[getloadtestsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/typescript/src/getLoadtestSample.ts
[getquotasample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/typescript/src/getQuotaSample.ts
[listbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/typescript/src/listByResourceGroupSample.ts
[listbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/typescript/src/listBySubscriptionSample.ts
[listquotasample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/typescript/src/listQuotaSample.ts
[outboundnetworkdependenciesendpointssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/typescript/src/outboundNetworkDependenciesEndpointsSample.ts
[updateloadtestsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/loadtesting/arm-loadtesting/samples/v1/typescript/src/updateLoadtestSample.ts
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-loadtesting?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/loadtesting/arm-loadtesting/README.md
[typescript]: https://www.typescriptlang.org/docs/home.html
