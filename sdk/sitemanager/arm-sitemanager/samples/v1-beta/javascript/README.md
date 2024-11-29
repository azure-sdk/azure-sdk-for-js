# @azure/arm-sitemanager client library samples for JavaScript (Beta)

These sample programs show how to use the JavaScript client libraries for @azure/arm-sitemanager in some common scenarios.

| **File Name**                                                                         | **Description**                                                                                             |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [sitesBySubscriptionCreateOrUpdateSample.js][sitesbysubscriptioncreateorupdatesample] | create a Site x-ms-original-file: 2024-02-01-preview/SitesBySubscription_CreateOrUpdate.json                |
| [sitesBySubscriptionDeleteSample.js][sitesbysubscriptiondeletesample]                 | delete a Site x-ms-original-file: 2024-02-01-preview/SitesBySubscription_Delete.json                        |
| [sitesBySubscriptionGetSample.js][sitesbysubscriptiongetsample]                       | get a Site x-ms-original-file: 2024-02-01-preview/SitesBySubscription_Get.json                              |
| [sitesBySubscriptionListSample.js][sitesbysubscriptionlistsample]                     | list Site resources by subscription ID x-ms-original-file: 2024-02-01-preview/SitesBySubscription_List.json |
| [sitesBySubscriptionUpdateSample.js][sitesbysubscriptionupdatesample]                 | update a Site x-ms-original-file: 2024-02-01-preview/SitesBySubscription_Update.json                        |
| [sitesCreateOrUpdateSample.js][sitescreateorupdatesample]                             | create a Site x-ms-original-file: 2024-02-01-preview/Sites_CreateOrUpdate.json                              |
| [sitesDeleteSample.js][sitesdeletesample]                                             | delete a Site x-ms-original-file: 2024-02-01-preview/Sites_Delete.json                                      |
| [sitesGetSample.js][sitesgetsample]                                                   | get a Site x-ms-original-file: 2024-02-01-preview/Sites_Get.json                                            |
| [sitesListByResourceGroupSample.js][siteslistbyresourcegroupsample]                   | list Site resources by resource group x-ms-original-file: 2024-02-01-preview/Sites_ListByResourceGroup.json |
| [sitesUpdateSample.js][sitesupdatesample]                                             | update a Site x-ms-original-file: 2024-02-01-preview/Sites_Update.json                                      |

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
node sitesBySubscriptionCreateOrUpdateSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node sitesBySubscriptionCreateOrUpdateSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[sitesbysubscriptioncreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/sitemanager/arm-sitemanager/samples/v1-beta/javascript/sitesBySubscriptionCreateOrUpdateSample.js
[sitesbysubscriptiondeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/sitemanager/arm-sitemanager/samples/v1-beta/javascript/sitesBySubscriptionDeleteSample.js
[sitesbysubscriptiongetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/sitemanager/arm-sitemanager/samples/v1-beta/javascript/sitesBySubscriptionGetSample.js
[sitesbysubscriptionlistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/sitemanager/arm-sitemanager/samples/v1-beta/javascript/sitesBySubscriptionListSample.js
[sitesbysubscriptionupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/sitemanager/arm-sitemanager/samples/v1-beta/javascript/sitesBySubscriptionUpdateSample.js
[sitescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/sitemanager/arm-sitemanager/samples/v1-beta/javascript/sitesCreateOrUpdateSample.js
[sitesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/sitemanager/arm-sitemanager/samples/v1-beta/javascript/sitesDeleteSample.js
[sitesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/sitemanager/arm-sitemanager/samples/v1-beta/javascript/sitesGetSample.js
[siteslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/sitemanager/arm-sitemanager/samples/v1-beta/javascript/sitesListByResourceGroupSample.js
[sitesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/sitemanager/arm-sitemanager/samples/v1-beta/javascript/sitesUpdateSample.js
[apiref]: https://docs.microsoft.com/javascript/api/@azure/arm-sitemanager?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/sitemanager/arm-sitemanager/README.md
