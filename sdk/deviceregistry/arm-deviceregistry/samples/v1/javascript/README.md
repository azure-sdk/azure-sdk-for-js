# @azure/arm-deviceregistry client library samples for JavaScript

These sample programs show how to use the JavaScript client libraries for @azure/arm-deviceregistry in some common scenarios.

| **File Name**                                                                                       | **Description**                                                                                                                    |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [assetEndpointProfilesCreateOrReplaceSample.js][assetendpointprofilescreateorreplacesample]         | create a AssetEndpointProfile x-ms-original-file: 2024-11-01/Create_AssetEndpointProfile.json                                      |
| [assetEndpointProfilesDeleteSample.js][assetendpointprofilesdeletesample]                           | delete a AssetEndpointProfile x-ms-original-file: 2024-11-01/Delete_AssetEndpointProfile.json                                      |
| [assetEndpointProfilesGetSample.js][assetendpointprofilesgetsample]                                 | get a AssetEndpointProfile x-ms-original-file: 2024-11-01/Get_AssetEndpointProfile.json                                            |
| [assetEndpointProfilesListByResourceGroupSample.js][assetendpointprofileslistbyresourcegroupsample] | list AssetEndpointProfile resources by resource group x-ms-original-file: 2024-11-01/List_AssetEndpointProfiles_ResourceGroup.json |
| [assetEndpointProfilesListBySubscriptionSample.js][assetendpointprofileslistbysubscriptionsample]   | list AssetEndpointProfile resources by subscription ID x-ms-original-file: 2024-11-01/List_AssetEndpointProfiles_Subscription.json |
| [assetEndpointProfilesUpdateSample.js][assetendpointprofilesupdatesample]                           | update a AssetEndpointProfile x-ms-original-file: 2024-11-01/Update_AssetEndpointProfile.json                                      |
| [assetsCreateOrReplaceSample.js][assetscreateorreplacesample]                                       | create a Asset x-ms-original-file: 2024-11-01/Create_Asset_With_DiscoveredAssetRef.json                                            |
| [assetsDeleteSample.js][assetsdeletesample]                                                         | delete a Asset x-ms-original-file: 2024-11-01/Delete_Asset.json                                                                    |
| [assetsGetSample.js][assetsgetsample]                                                               | get a Asset x-ms-original-file: 2024-11-01/Get_Asset.json                                                                          |
| [assetsListByResourceGroupSample.js][assetslistbyresourcegroupsample]                               | list Asset resources by resource group x-ms-original-file: 2024-11-01/List_Assets_ResourceGroup.json                               |
| [assetsListBySubscriptionSample.js][assetslistbysubscriptionsample]                                 | list Asset resources by subscription ID x-ms-original-file: 2024-11-01/List_Assets_Subscription.json                               |
| [assetsUpdateSample.js][assetsupdatesample]                                                         | update a Asset x-ms-original-file: 2024-11-01/Update_Asset.json                                                                    |
| [billingContainersGetSample.js][billingcontainersgetsample]                                         | get a BillingContainer x-ms-original-file: 2024-11-01/Get_BillingContainer.json                                                    |
| [billingContainersListBySubscriptionSample.js][billingcontainerslistbysubscriptionsample]           | list BillingContainer resources by subscription ID x-ms-original-file: 2024-11-01/List_BillingContainers_Subscription.json         |
| [operationStatusGetSample.js][operationstatusgetsample]                                             | returns the current status of an async operation. x-ms-original-file: 2024-11-01/Get_OperationStatus.json                          |
| [operationsListSample.js][operationslistsample]                                                     | list the operations for the provider x-ms-original-file: 2024-11-01/List_Operations.json                                           |

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
node assetEndpointProfilesCreateOrReplaceSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node assetEndpointProfilesCreateOrReplaceSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[assetendpointprofilescreateorreplacesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/javascript/assetEndpointProfilesCreateOrReplaceSample.js
[assetendpointprofilesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/javascript/assetEndpointProfilesDeleteSample.js
[assetendpointprofilesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/javascript/assetEndpointProfilesGetSample.js
[assetendpointprofileslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/javascript/assetEndpointProfilesListByResourceGroupSample.js
[assetendpointprofileslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/javascript/assetEndpointProfilesListBySubscriptionSample.js
[assetendpointprofilesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/javascript/assetEndpointProfilesUpdateSample.js
[assetscreateorreplacesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/javascript/assetsCreateOrReplaceSample.js
[assetsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/javascript/assetsDeleteSample.js
[assetsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/javascript/assetsGetSample.js
[assetslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/javascript/assetsListByResourceGroupSample.js
[assetslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/javascript/assetsListBySubscriptionSample.js
[assetsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/javascript/assetsUpdateSample.js
[billingcontainersgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/javascript/billingContainersGetSample.js
[billingcontainerslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/javascript/billingContainersListBySubscriptionSample.js
[operationstatusgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/javascript/operationStatusGetSample.js
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/javascript/operationsListSample.js
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-deviceregistry?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/deviceregistry/arm-deviceregistry/README.md
