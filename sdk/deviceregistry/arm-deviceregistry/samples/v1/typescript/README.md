# @azure/arm-deviceregistry client library samples for TypeScript

These sample programs show how to use the TypeScript client libraries for @azure/arm-deviceregistry in some common scenarios.

| **File Name**                                                                                       | **Description**                                                                                                                    |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [assetEndpointProfilesCreateOrReplaceSample.ts][assetendpointprofilescreateorreplacesample]         | create a AssetEndpointProfile x-ms-original-file: 2024-11-01/Create_AssetEndpointProfile.json                                      |
| [assetEndpointProfilesDeleteSample.ts][assetendpointprofilesdeletesample]                           | delete a AssetEndpointProfile x-ms-original-file: 2024-11-01/Delete_AssetEndpointProfile.json                                      |
| [assetEndpointProfilesGetSample.ts][assetendpointprofilesgetsample]                                 | get a AssetEndpointProfile x-ms-original-file: 2024-11-01/Get_AssetEndpointProfile.json                                            |
| [assetEndpointProfilesListByResourceGroupSample.ts][assetendpointprofileslistbyresourcegroupsample] | list AssetEndpointProfile resources by resource group x-ms-original-file: 2024-11-01/List_AssetEndpointProfiles_ResourceGroup.json |
| [assetEndpointProfilesListBySubscriptionSample.ts][assetendpointprofileslistbysubscriptionsample]   | list AssetEndpointProfile resources by subscription ID x-ms-original-file: 2024-11-01/List_AssetEndpointProfiles_Subscription.json |
| [assetEndpointProfilesUpdateSample.ts][assetendpointprofilesupdatesample]                           | update a AssetEndpointProfile x-ms-original-file: 2024-11-01/Update_AssetEndpointProfile.json                                      |
| [assetsCreateOrReplaceSample.ts][assetscreateorreplacesample]                                       | create a Asset x-ms-original-file: 2024-11-01/Create_Asset_With_DiscoveredAssetRef.json                                            |
| [assetsDeleteSample.ts][assetsdeletesample]                                                         | delete a Asset x-ms-original-file: 2024-11-01/Delete_Asset.json                                                                    |
| [assetsGetSample.ts][assetsgetsample]                                                               | get a Asset x-ms-original-file: 2024-11-01/Get_Asset.json                                                                          |
| [assetsListByResourceGroupSample.ts][assetslistbyresourcegroupsample]                               | list Asset resources by resource group x-ms-original-file: 2024-11-01/List_Assets_ResourceGroup.json                               |
| [assetsListBySubscriptionSample.ts][assetslistbysubscriptionsample]                                 | list Asset resources by subscription ID x-ms-original-file: 2024-11-01/List_Assets_Subscription.json                               |
| [assetsUpdateSample.ts][assetsupdatesample]                                                         | update a Asset x-ms-original-file: 2024-11-01/Update_Asset.json                                                                    |
| [billingContainersGetSample.ts][billingcontainersgetsample]                                         | get a BillingContainer x-ms-original-file: 2024-11-01/Get_BillingContainer.json                                                    |
| [billingContainersListBySubscriptionSample.ts][billingcontainerslistbysubscriptionsample]           | list BillingContainer resources by subscription ID x-ms-original-file: 2024-11-01/List_BillingContainers_Subscription.json         |
| [operationStatusGetSample.ts][operationstatusgetsample]                                             | returns the current status of an async operation. x-ms-original-file: 2024-11-01/Get_OperationStatus.json                          |
| [operationsListSample.ts][operationslistsample]                                                     | list the operations for the provider x-ms-original-file: 2024-11-01/List_Operations.json                                           |

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
node dist/assetEndpointProfilesCreateOrReplaceSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node dist/assetEndpointProfilesCreateOrReplaceSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[assetendpointprofilescreateorreplacesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/typescript/src/assetEndpointProfilesCreateOrReplaceSample.ts
[assetendpointprofilesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/typescript/src/assetEndpointProfilesDeleteSample.ts
[assetendpointprofilesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/typescript/src/assetEndpointProfilesGetSample.ts
[assetendpointprofileslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/typescript/src/assetEndpointProfilesListByResourceGroupSample.ts
[assetendpointprofileslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/typescript/src/assetEndpointProfilesListBySubscriptionSample.ts
[assetendpointprofilesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/typescript/src/assetEndpointProfilesUpdateSample.ts
[assetscreateorreplacesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/typescript/src/assetsCreateOrReplaceSample.ts
[assetsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/typescript/src/assetsDeleteSample.ts
[assetsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/typescript/src/assetsGetSample.ts
[assetslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/typescript/src/assetsListByResourceGroupSample.ts
[assetslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/typescript/src/assetsListBySubscriptionSample.ts
[assetsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/typescript/src/assetsUpdateSample.ts
[billingcontainersgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/typescript/src/billingContainersGetSample.ts
[billingcontainerslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/typescript/src/billingContainersListBySubscriptionSample.ts
[operationstatusgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/typescript/src/operationStatusGetSample.ts
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/deviceregistry/arm-deviceregistry/samples/v1/typescript/src/operationsListSample.ts
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-deviceregistry?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/deviceregistry/arm-deviceregistry/README.md
[typescript]: https://www.typescriptlang.org/docs/home.html
