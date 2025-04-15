# @azure/arm-sapmonitors client library samples for TypeScript (Beta)

These sample programs show how to use the TypeScript client libraries for @azure/arm-sapmonitors in some common scenarios.

| **File Name**                                                                       | **Description**                                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [alertTemplatesGetSample.ts][alerttemplatesgetsample]                               | gets properties of an alert template for the specified subscription, resource group, SAP monitor name, and resource name. x-ms-original-file: 2024-02-01-preview/AlertTemplates_Get.json                                       |
| [alertTemplatesListSample.ts][alerttemplateslistsample]                             | gets a list of alert templates in the specified SAP monitor. The operations returns various properties of each alert template. x-ms-original-file: 2024-02-01-preview/AlertTemplates_List.json                                 |
| [alertsCreateSample.ts][alertscreatesample]                                         | creates an alert for the specified subscription, resource group, SAP monitor name, and resource name. x-ms-original-file: 2024-02-01-preview/Alerts_Create.json                                                                |
| [alertsDeleteSample.ts][alertsdeletesample]                                         | deletes an alert for the specified subscription, resource group, SAP monitor name, and resource name. x-ms-original-file: 2024-02-01-preview/Alerts_Delete.json                                                                |
| [alertsGetSample.ts][alertsgetsample]                                               | gets properties of an alert for the specified subscription, resource group, SAP monitor name, and resource name. x-ms-original-file: 2024-02-01-preview/Alerts_Get.json                                                        |
| [alertsListSample.ts][alertslistsample]                                             | gets a list of alerts in the specified SAP monitor. The operations returns various properties of each alerts. x-ms-original-file: 2024-02-01-preview/Alerts_List.json                                                          |
| [monitorsCreateSample.ts][monitorscreatesample]                                     | creates a SAP monitor for the specified subscription, resource group, and resource name. x-ms-original-file: 2024-02-01-preview/Monitors_Create_Create_A_Sap_Monitor.json                                                      |
| [monitorsDeleteSample.ts][monitorsdeletesample]                                     | deletes a SAP monitor with the specified subscription, resource group, and SAP monitor name. x-ms-original-file: 2024-02-01-preview/Monitors_Delete.json                                                                       |
| [monitorsGetSample.ts][monitorsgetsample]                                           | gets properties of a SAP monitor for the specified subscription, resource group, and resource name. x-ms-original-file: 2024-02-01-preview/Monitors_Get.json                                                                   |
| [monitorsListByResourceGroupSample.ts][monitorslistbyresourcegroupsample]           | gets a list of SAP monitors in the specified resource group. x-ms-original-file: 2024-02-01-preview/Monitors_ListByResourceGroup.json                                                                                          |
| [monitorsListSample.ts][monitorslistsample]                                         | gets a list of SAP monitors in the specified subscription. The operations returns various properties of each SAP monitor. x-ms-original-file: 2024-02-01-preview/Monitors_List.json                                            |
| [monitorsUpdateSample.ts][monitorsupdatesample]                                     | patches the Tags field of a SAP monitor for the specified subscription, resource group, and SAP monitor name. x-ms-original-file: 2024-02-01-preview/Monitors_Update_Delete_Tags_Field_Of_A_Sap_Monitor.json                   |
| [providerInstancesCreateSample.ts][providerinstancescreatesample]                   | creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. x-ms-original-file: 2024-02-01-preview/ProviderInstances_Create_Create_A_Db2_Provider.json                    |
| [providerInstancesDeleteSample.ts][providerinstancesdeletesample]                   | deletes a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. x-ms-original-file: 2024-02-01-preview/ProviderInstances_Delete.json                                          |
| [providerInstancesGetSample.ts][providerinstancesgetsample]                         | gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. x-ms-original-file: 2024-02-01-preview/ProviderInstances_Get_Get_Properties_Of_A_Db2_Provider.json |
| [providerInstancesListByMonitorSample.ts][providerinstanceslistbymonitorsample]     | gets a list of provider instances in the specified SAP monitor. The operations returns various properties of each provider instances. x-ms-original-file: 2024-02-01-preview/ProviderInstances_List.json                       |
| [sapLandscapeMonitorCreateSample.ts][saplandscapemonitorcreatesample]               | creates a SAP Landscape Monitor Dashboard for the specified subscription, resource group, and resource name. x-ms-original-file: 2024-02-01-preview/SapLandscapeMonitor_Create.json                                            |
| [sapLandscapeMonitorDeleteSample.ts][saplandscapemonitordeletesample]               | deletes a SAP Landscape Monitor Dashboard with the specified subscription, resource group, and SAP monitor name. x-ms-original-file: 2024-02-01-preview/SapLandscapeMonitor_Delete.json                                        |
| [sapLandscapeMonitorGetSample.ts][saplandscapemonitorgetsample]                     | gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name. x-ms-original-file: 2024-02-01-preview/SapLandscapeMonitor_Get.json                      |
| [sapLandscapeMonitorListByMonitorSample.ts][saplandscapemonitorlistbymonitorsample] | gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name. x-ms-original-file: 2024-02-01-preview/SapLandscapeMonitor_List.json                     |
| [sapLandscapeMonitorUpdateSample.ts][saplandscapemonitorupdatesample]               | patches the SAP Landscape Monitor Dashboard for the specified subscription, resource group, and SAP monitor name. x-ms-original-file: 2024-02-01-preview/SapLandscapeMonitor_Update.json                                       |

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
node dist/alertTemplatesGetSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node dist/alertTemplatesGetSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[alerttemplatesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/alertTemplatesGetSample.ts
[alerttemplateslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/alertTemplatesListSample.ts
[alertscreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/alertsCreateSample.ts
[alertsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/alertsDeleteSample.ts
[alertsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/alertsGetSample.ts
[alertslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/alertsListSample.ts
[monitorscreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/monitorsCreateSample.ts
[monitorsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/monitorsDeleteSample.ts
[monitorsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/monitorsGetSample.ts
[monitorslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/monitorsListByResourceGroupSample.ts
[monitorslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/monitorsListSample.ts
[monitorsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/monitorsUpdateSample.ts
[providerinstancescreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/providerInstancesCreateSample.ts
[providerinstancesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/providerInstancesDeleteSample.ts
[providerinstancesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/providerInstancesGetSample.ts
[providerinstanceslistbymonitorsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/providerInstancesListByMonitorSample.ts
[saplandscapemonitorcreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/sapLandscapeMonitorCreateSample.ts
[saplandscapemonitordeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/sapLandscapeMonitorDeleteSample.ts
[saplandscapemonitorgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/sapLandscapeMonitorGetSample.ts
[saplandscapemonitorlistbymonitorsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/sapLandscapeMonitorListByMonitorSample.ts
[saplandscapemonitorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/typescript/src/sapLandscapeMonitorUpdateSample.ts
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-sapmonitors?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/workloads/arm-sapmonitors/README.md
[typescript]: https://www.typescriptlang.org/docs/home.html
