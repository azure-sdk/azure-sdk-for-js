# @azure/arm-sapmonitors client library samples for JavaScript (Beta)

These sample programs show how to use the JavaScript client libraries for @azure/arm-sapmonitors in some common scenarios.

| **File Name**                                                                       | **Description**                                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [alertTemplatesGetSample.js][alerttemplatesgetsample]                               | gets properties of an alert template for the specified subscription, resource group, SAP monitor name, and resource name. x-ms-original-file: 2024-02-01-preview/AlertTemplates_Get.json                                       |
| [alertTemplatesListSample.js][alerttemplateslistsample]                             | gets a list of alert templates in the specified SAP monitor. The operations returns various properties of each alert template. x-ms-original-file: 2024-02-01-preview/AlertTemplates_List.json                                 |
| [alertsCreateSample.js][alertscreatesample]                                         | creates an alert for the specified subscription, resource group, SAP monitor name, and resource name. x-ms-original-file: 2024-02-01-preview/Alerts_Create.json                                                                |
| [alertsDeleteSample.js][alertsdeletesample]                                         | deletes an alert for the specified subscription, resource group, SAP monitor name, and resource name. x-ms-original-file: 2024-02-01-preview/Alerts_Delete.json                                                                |
| [alertsGetSample.js][alertsgetsample]                                               | gets properties of an alert for the specified subscription, resource group, SAP monitor name, and resource name. x-ms-original-file: 2024-02-01-preview/Alerts_Get.json                                                        |
| [alertsListSample.js][alertslistsample]                                             | gets a list of alerts in the specified SAP monitor. The operations returns various properties of each alerts. x-ms-original-file: 2024-02-01-preview/Alerts_List.json                                                          |
| [monitorsCreateSample.js][monitorscreatesample]                                     | creates a SAP monitor for the specified subscription, resource group, and resource name. x-ms-original-file: 2024-02-01-preview/Monitors_Create_Create_A_Sap_Monitor.json                                                      |
| [monitorsDeleteSample.js][monitorsdeletesample]                                     | deletes a SAP monitor with the specified subscription, resource group, and SAP monitor name. x-ms-original-file: 2024-02-01-preview/Monitors_Delete.json                                                                       |
| [monitorsGetSample.js][monitorsgetsample]                                           | gets properties of a SAP monitor for the specified subscription, resource group, and resource name. x-ms-original-file: 2024-02-01-preview/Monitors_Get.json                                                                   |
| [monitorsListByResourceGroupSample.js][monitorslistbyresourcegroupsample]           | gets a list of SAP monitors in the specified resource group. x-ms-original-file: 2024-02-01-preview/Monitors_ListByResourceGroup.json                                                                                          |
| [monitorsListSample.js][monitorslistsample]                                         | gets a list of SAP monitors in the specified subscription. The operations returns various properties of each SAP monitor. x-ms-original-file: 2024-02-01-preview/Monitors_List.json                                            |
| [monitorsUpdateSample.js][monitorsupdatesample]                                     | patches the Tags field of a SAP monitor for the specified subscription, resource group, and SAP monitor name. x-ms-original-file: 2024-02-01-preview/Monitors_Update_Delete_Tags_Field_Of_A_Sap_Monitor.json                   |
| [providerInstancesCreateSample.js][providerinstancescreatesample]                   | creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. x-ms-original-file: 2024-02-01-preview/ProviderInstances_Create_Create_A_Db2_Provider.json                    |
| [providerInstancesDeleteSample.js][providerinstancesdeletesample]                   | deletes a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. x-ms-original-file: 2024-02-01-preview/ProviderInstances_Delete.json                                          |
| [providerInstancesGetSample.js][providerinstancesgetsample]                         | gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. x-ms-original-file: 2024-02-01-preview/ProviderInstances_Get_Get_Properties_Of_A_Db2_Provider.json |
| [providerInstancesListByMonitorSample.js][providerinstanceslistbymonitorsample]     | gets a list of provider instances in the specified SAP monitor. The operations returns various properties of each provider instances. x-ms-original-file: 2024-02-01-preview/ProviderInstances_List.json                       |
| [sapLandscapeMonitorCreateSample.js][saplandscapemonitorcreatesample]               | creates a SAP Landscape Monitor Dashboard for the specified subscription, resource group, and resource name. x-ms-original-file: 2024-02-01-preview/SapLandscapeMonitor_Create.json                                            |
| [sapLandscapeMonitorDeleteSample.js][saplandscapemonitordeletesample]               | deletes a SAP Landscape Monitor Dashboard with the specified subscription, resource group, and SAP monitor name. x-ms-original-file: 2024-02-01-preview/SapLandscapeMonitor_Delete.json                                        |
| [sapLandscapeMonitorGetSample.js][saplandscapemonitorgetsample]                     | gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name. x-ms-original-file: 2024-02-01-preview/SapLandscapeMonitor_Get.json                      |
| [sapLandscapeMonitorListByMonitorSample.js][saplandscapemonitorlistbymonitorsample] | gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name. x-ms-original-file: 2024-02-01-preview/SapLandscapeMonitor_List.json                     |
| [sapLandscapeMonitorUpdateSample.js][saplandscapemonitorupdatesample]               | patches the SAP Landscape Monitor Dashboard for the specified subscription, resource group, and SAP monitor name. x-ms-original-file: 2024-02-01-preview/SapLandscapeMonitor_Update.json                                       |

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
node alertTemplatesGetSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node alertTemplatesGetSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[alerttemplatesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/alertTemplatesGetSample.js
[alerttemplateslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/alertTemplatesListSample.js
[alertscreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/alertsCreateSample.js
[alertsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/alertsDeleteSample.js
[alertsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/alertsGetSample.js
[alertslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/alertsListSample.js
[monitorscreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/monitorsCreateSample.js
[monitorsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/monitorsDeleteSample.js
[monitorsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/monitorsGetSample.js
[monitorslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/monitorsListByResourceGroupSample.js
[monitorslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/monitorsListSample.js
[monitorsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/monitorsUpdateSample.js
[providerinstancescreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/providerInstancesCreateSample.js
[providerinstancesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/providerInstancesDeleteSample.js
[providerinstancesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/providerInstancesGetSample.js
[providerinstanceslistbymonitorsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/providerInstancesListByMonitorSample.js
[saplandscapemonitorcreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/sapLandscapeMonitorCreateSample.js
[saplandscapemonitordeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/sapLandscapeMonitorDeleteSample.js
[saplandscapemonitorgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/sapLandscapeMonitorGetSample.js
[saplandscapemonitorlistbymonitorsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/sapLandscapeMonitorListByMonitorSample.js
[saplandscapemonitorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/workloads/arm-sapmonitors/samples/v1-beta/javascript/sapLandscapeMonitorUpdateSample.js
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-sapmonitors?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/workloads/arm-sapmonitors/README.md
