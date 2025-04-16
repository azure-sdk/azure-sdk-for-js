# @azure/arm-scvmm client library samples for TypeScript

These sample programs show how to use the TypeScript client libraries for @azure/arm-scvmm in some common scenarios.

| **File Name**                                                                                                                                 | **Description**                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [availabilitySetsCreateOrUpdateSample.ts][availabilitysetscreateorupdatesample]                                                               | onboards the ScVmm availability set as an Azure resource. x-ms-original-file: 2025-03-13/AvailabilitySets_CreateOrUpdate_MaximumSet_Gen.json                                                                                                  |
| [availabilitySetsDeleteSample.ts][availabilitysetsdeletesample]                                                                               | deregisters the ScVmm availability set from Azure. x-ms-original-file: 2025-03-13/AvailabilitySets_Delete_MaximumSet_Gen.json                                                                                                                 |
| [availabilitySetsGetSample.ts][availabilitysetsgetsample]                                                                                     | implements AvailabilitySet GET method. x-ms-original-file: 2025-03-13/AvailabilitySets_Get_MaximumSet_Gen.json                                                                                                                                |
| [availabilitySetsListByResourceGroupSample.ts][availabilitysetslistbyresourcegroupsample]                                                     | list of AvailabilitySets in a resource group. x-ms-original-file: 2025-03-13/AvailabilitySets_ListByResourceGroup_MaximumSet_Gen.json                                                                                                         |
| [availabilitySetsListBySubscriptionSample.ts][availabilitysetslistbysubscriptionsample]                                                       | list of AvailabilitySets in a subscription. x-ms-original-file: 2025-03-13/AvailabilitySets_ListBySubscription_MaximumSet_Gen.json                                                                                                            |
| [availabilitySetsUpdateSample.ts][availabilitysetsupdatesample]                                                                               | updates the AvailabilitySets resource. x-ms-original-file: 2025-03-13/AvailabilitySets_Update_MaximumSet_Gen.json                                                                                                                             |
| [cloudsCreateOrUpdateSample.ts][cloudscreateorupdatesample]                                                                                   | onboards the ScVmm fabric cloud as an Azure cloud resource. x-ms-original-file: 2025-03-13/Clouds_CreateOrUpdate_MaximumSet_Gen.json                                                                                                          |
| [cloudsDeleteSample.ts][cloudsdeletesample]                                                                                                   | deregisters the ScVmm fabric cloud from Azure. x-ms-original-file: 2025-03-13/Clouds_Delete_MaximumSet_Gen.json                                                                                                                               |
| [cloudsGetSample.ts][cloudsgetsample]                                                                                                         | implements Cloud GET method. x-ms-original-file: 2025-03-13/Clouds_Get_MaximumSet_Gen.json                                                                                                                                                    |
| [cloudsListByResourceGroupSample.ts][cloudslistbyresourcegroupsample]                                                                         | list of Clouds in a resource group. x-ms-original-file: 2025-03-13/Clouds_ListByResourceGroup_MaximumSet_Gen.json                                                                                                                             |
| [cloudsListBySubscriptionSample.ts][cloudslistbysubscriptionsample]                                                                           | list of Clouds in a subscription. x-ms-original-file: 2025-03-13/Clouds_ListBySubscription_MaximumSet_Gen.json                                                                                                                                |
| [cloudsUpdateSample.ts][cloudsupdatesample]                                                                                                   | updates the Clouds resource. x-ms-original-file: 2025-03-13/Clouds_Update_MaximumSet_Gen.json                                                                                                                                                 |
| [guestAgentsCreateSample.ts][guestagentscreatesample]                                                                                         | create Or Update GuestAgent. x-ms-original-file: 2025-03-13/GuestAgents_Create_MaximumSet_Gen.json                                                                                                                                            |
| [guestAgentsDeleteSample.ts][guestagentsdeletesample]                                                                                         | implements GuestAgent DELETE method. x-ms-original-file: 2025-03-13/GuestAgents_Delete_MaximumSet_Gen.json                                                                                                                                    |
| [guestAgentsGetSample.ts][guestagentsgetsample]                                                                                               | implements GuestAgent GET method. x-ms-original-file: 2025-03-13/GuestAgents_Get_MaximumSet_Gen.json                                                                                                                                          |
| [guestAgentsListByVirtualMachineInstanceSample.ts][guestagentslistbyvirtualmachineinstancesample]                                             | returns the list of GuestAgent of the given vm. x-ms-original-file: 2025-03-13/GuestAgents_ListByVirtualMachineInstance_MaximumSet_Gen.json                                                                                                   |
| [inventoryItemsCreateSample.ts][inventoryitemscreatesample]                                                                                   | create Or Update InventoryItem. x-ms-original-file: 2025-03-13/InventoryItems_Create_MaximumSet_Gen.json                                                                                                                                      |
| [inventoryItemsDeleteSample.ts][inventoryitemsdeletesample]                                                                                   | deletes an inventoryItem. x-ms-original-file: 2025-03-13/InventoryItems_Delete_MaximumSet_Gen.json                                                                                                                                            |
| [inventoryItemsGetSample.ts][inventoryitemsgetsample]                                                                                         | shows an inventory item. x-ms-original-file: 2025-03-13/InventoryItems_Get_MaximumSet_Gen.json                                                                                                                                                |
| [inventoryItemsListByVmmServerSample.ts][inventoryitemslistbyvmmserversample]                                                                 | returns the list of inventoryItems in the given VmmServer. x-ms-original-file: 2025-03-13/InventoryItems_ListByVmmServer_MaximumSet_Gen.json                                                                                                  |
| [operationsListSample.ts][operationslistsample]                                                                                               | list the operations for the provider x-ms-original-file: 2025-03-13/Operations_List_MaximumSet_Gen.json                                                                                                                                       |
| [virtualMachineInstancesCreateCheckpointSample.ts][virtualmachineinstancescreatecheckpointsample]                                             | creates a checkpoint in virtual machine instance. x-ms-original-file: 2025-03-13/VirtualMachineInstances_CreateCheckpoint_MaximumSet_Gen.json                                                                                                 |
| [virtualMachineInstancesCreateOrUpdateSample.ts][virtualmachineinstancescreateorupdatesample]                                                 | the operation to create or update a virtual machine instance. Please note some properties can be set only during virtual machine instance creation. x-ms-original-file: 2025-03-13/VirtualMachineInstances_CreateOrUpdate_MaximumSet_Gen.json |
| [virtualMachineInstancesDeleteCheckpointSample.ts][virtualmachineinstancesdeletecheckpointsample]                                             | deletes a checkpoint in virtual machine instance. x-ms-original-file: 2025-03-13/VirtualMachineInstances_DeleteCheckpoint_MaximumSet_Gen.json                                                                                                 |
| [virtualMachineInstancesDeleteSample.ts][virtualmachineinstancesdeletesample]                                                                 | the operation to delete a virtual machine instance. x-ms-original-file: 2025-03-13/VirtualMachineInstances_Delete_MaximumSet_Gen.json                                                                                                         |
| [virtualMachineInstancesGetSample.ts][virtualmachineinstancesgetsample]                                                                       | retrieves information about a virtual machine instance. x-ms-original-file: 2025-03-13/VirtualMachineInstances_Get_MaximumSet_Gen.json                                                                                                        |
| [virtualMachineInstancesListSample.ts][virtualmachineinstanceslistsample]                                                                     | lists all of the virtual machine instances within the specified parent resource. x-ms-original-file: 2025-03-13/VirtualMachineInstances_List_MaximumSet_Gen.json                                                                              |
| [virtualMachineInstancesRestartSample.ts][virtualmachineinstancesrestartsample]                                                               | the operation to restart a virtual machine instance. x-ms-original-file: 2025-03-13/VirtualMachineInstances_Restart_MaximumSet_Gen.json                                                                                                       |
| [virtualMachineInstancesRestoreCheckpointSample.ts][virtualmachineinstancesrestorecheckpointsample]                                           | restores to a checkpoint in virtual machine instance. x-ms-original-file: 2025-03-13/VirtualMachineInstances_RestoreCheckpoint_MaximumSet_Gen.json                                                                                            |
| [virtualMachineInstancesStartSample.ts][virtualmachineinstancesstartsample]                                                                   | the operation to start a virtual machine instance. x-ms-original-file: 2025-03-13/VirtualMachineInstances_Start_MaximumSet_Gen.json                                                                                                           |
| [virtualMachineInstancesStopSample.ts][virtualmachineinstancesstopsample]                                                                     | the operation to power off (stop) a virtual machine instance. x-ms-original-file: 2025-03-13/VirtualMachineInstances_Stop_MaximumSet_Gen.json                                                                                                 |
| [virtualMachineInstancesUpdateSample.ts][virtualmachineinstancesupdatesample]                                                                 | the operation to update a virtual machine instance. x-ms-original-file: 2025-03-13/VirtualMachineInstances_Update_MaximumSet_Gen.json                                                                                                         |
| [virtualMachineTemplatesCreateOrUpdateSample.ts][virtualmachinetemplatescreateorupdatesample]                                                 | onboards the ScVmm VM Template as an Azure VM Template resource. x-ms-original-file: 2025-03-13/VirtualMachineTemplates_CreateOrUpdate_MaximumSet_Gen.json                                                                                    |
| [virtualMachineTemplatesDeleteSample.ts][virtualmachinetemplatesdeletesample]                                                                 | deregisters the ScVmm VM Template from Azure. x-ms-original-file: 2025-03-13/VirtualMachineTemplates_Delete_MaximumSet_Gen.json                                                                                                               |
| [virtualMachineTemplatesGetSample.ts][virtualmachinetemplatesgetsample]                                                                       | implements VirtualMachineTemplate GET method. x-ms-original-file: 2025-03-13/VirtualMachineTemplates_Get_MaximumSet_Gen.json                                                                                                                  |
| [virtualMachineTemplatesListByResourceGroupSample.ts][virtualmachinetemplateslistbyresourcegroupsample]                                       | list of VirtualMachineTemplates in a resource group. x-ms-original-file: 2025-03-13/VirtualMachineTemplates_ListByResourceGroup_MaximumSet_Gen.json                                                                                           |
| [virtualMachineTemplatesListBySubscriptionSample.ts][virtualmachinetemplateslistbysubscriptionsample]                                         | list of VirtualMachineTemplates in a subscription. x-ms-original-file: 2025-03-13/VirtualMachineTemplates_ListBySubscription_MaximumSet_Gen.json                                                                                              |
| [virtualMachineTemplatesUpdateSample.ts][virtualmachinetemplatesupdatesample]                                                                 | updates the VirtualMachineTemplate resource. x-ms-original-file: 2025-03-13/VirtualMachineTemplates_Update_MaximumSet_Gen.json                                                                                                                |
| [virtualNetworksCreateOrUpdateSample.ts][virtualnetworkscreateorupdatesample]                                                                 | onboards the ScVmm virtual network as an Azure virtual network resource. x-ms-original-file: 2025-03-13/VirtualNetworks_CreateOrUpdate_MaximumSet_Gen.json                                                                                    |
| [virtualNetworksDeleteSample.ts][virtualnetworksdeletesample]                                                                                 | deregisters the ScVmm virtual network from Azure. x-ms-original-file: 2025-03-13/VirtualNetworks_Delete_MaximumSet_Gen.json                                                                                                                   |
| [virtualNetworksGetSample.ts][virtualnetworksgetsample]                                                                                       | implements VirtualNetwork GET method. x-ms-original-file: 2025-03-13/VirtualNetworks_Get_MaximumSet_Gen.json                                                                                                                                  |
| [virtualNetworksListByResourceGroupSample.ts][virtualnetworkslistbyresourcegroupsample]                                                       | list of VirtualNetworks in a resource group. x-ms-original-file: 2025-03-13/VirtualNetworks_ListByResourceGroup_MaximumSet_Gen.json                                                                                                           |
| [virtualNetworksListBySubscriptionSample.ts][virtualnetworkslistbysubscriptionsample]                                                         | list of VirtualNetworks in a subscription. x-ms-original-file: 2025-03-13/VirtualNetworks_ListBySubscription_MaximumSet_Gen.json                                                                                                              |
| [virtualNetworksUpdateSample.ts][virtualnetworksupdatesample]                                                                                 | updates the VirtualNetworks resource. x-ms-original-file: 2025-03-13/VirtualNetworks_Update_MaximumSet_Gen.json                                                                                                                               |
| [vmInstanceHybridIdentityMetadatasGetSample.ts][vminstancehybrididentitymetadatasgetsample]                                                   | implements HybridIdentityMetadata GET method. x-ms-original-file: 2025-03-13/VmInstanceHybridIdentityMetadatas_Get_MaximumSet_Gen.json                                                                                                        |
| [vmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceSample.ts][vminstancehybrididentitymetadataslistbyvirtualmachineinstancesample] | returns the list of HybridIdentityMetadata of the given VM. x-ms-original-file: 2025-03-13/VmInstanceHybridIdentityMetadatas_ListByVirtualMachineInstance_MaximumSet_Gen.json                                                                 |
| [vmmServersCreateOrUpdateSample.ts][vmmserverscreateorupdatesample]                                                                           | onboards the SCVmm fabric as an Azure VmmServer resource. x-ms-original-file: 2025-03-13/VmmServers_CreateOrUpdate_MaximumSet_Gen.json                                                                                                        |
| [vmmServersDeleteSample.ts][vmmserversdeletesample]                                                                                           | removes the SCVmm fabric from Azure. x-ms-original-file: 2025-03-13/VmmServers_Delete_MaximumSet_Gen.json                                                                                                                                     |
| [vmmServersGetSample.ts][vmmserversgetsample]                                                                                                 | implements VmmServer GET method. x-ms-original-file: 2025-03-13/VmmServers_Get_MaximumSet_Gen.json                                                                                                                                            |
| [vmmServersListByResourceGroupSample.ts][vmmserverslistbyresourcegroupsample]                                                                 | list of VmmServers in a resource group. x-ms-original-file: 2025-03-13/VmmServers_ListByResourceGroup_MaximumSet_Gen.json                                                                                                                     |
| [vmmServersListBySubscriptionSample.ts][vmmserverslistbysubscriptionsample]                                                                   | list of VmmServers in a subscription. x-ms-original-file: 2025-03-13/VmmServers_ListBySubscription_MaximumSet_Gen.json                                                                                                                        |
| [vmmServersUpdateSample.ts][vmmserversupdatesample]                                                                                           | updates the VmmServers resource. x-ms-original-file: 2025-03-13/VmmServers_Update_MaximumSet_Gen.json                                                                                                                                         |

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
node dist/availabilitySetsCreateOrUpdateSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env  node dist/availabilitySetsCreateOrUpdateSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[availabilitysetscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/availabilitySetsCreateOrUpdateSample.ts
[availabilitysetsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/availabilitySetsDeleteSample.ts
[availabilitysetsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/availabilitySetsGetSample.ts
[availabilitysetslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/availabilitySetsListByResourceGroupSample.ts
[availabilitysetslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/availabilitySetsListBySubscriptionSample.ts
[availabilitysetsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/availabilitySetsUpdateSample.ts
[cloudscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/cloudsCreateOrUpdateSample.ts
[cloudsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/cloudsDeleteSample.ts
[cloudsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/cloudsGetSample.ts
[cloudslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/cloudsListByResourceGroupSample.ts
[cloudslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/cloudsListBySubscriptionSample.ts
[cloudsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/cloudsUpdateSample.ts
[guestagentscreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/guestAgentsCreateSample.ts
[guestagentsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/guestAgentsDeleteSample.ts
[guestagentsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/guestAgentsGetSample.ts
[guestagentslistbyvirtualmachineinstancesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/guestAgentsListByVirtualMachineInstanceSample.ts
[inventoryitemscreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/inventoryItemsCreateSample.ts
[inventoryitemsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/inventoryItemsDeleteSample.ts
[inventoryitemsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/inventoryItemsGetSample.ts
[inventoryitemslistbyvmmserversample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/inventoryItemsListByVmmServerSample.ts
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/operationsListSample.ts
[virtualmachineinstancescreatecheckpointsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualMachineInstancesCreateCheckpointSample.ts
[virtualmachineinstancescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualMachineInstancesCreateOrUpdateSample.ts
[virtualmachineinstancesdeletecheckpointsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualMachineInstancesDeleteCheckpointSample.ts
[virtualmachineinstancesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualMachineInstancesDeleteSample.ts
[virtualmachineinstancesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualMachineInstancesGetSample.ts
[virtualmachineinstanceslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualMachineInstancesListSample.ts
[virtualmachineinstancesrestartsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualMachineInstancesRestartSample.ts
[virtualmachineinstancesrestorecheckpointsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualMachineInstancesRestoreCheckpointSample.ts
[virtualmachineinstancesstartsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualMachineInstancesStartSample.ts
[virtualmachineinstancesstopsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualMachineInstancesStopSample.ts
[virtualmachineinstancesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualMachineInstancesUpdateSample.ts
[virtualmachinetemplatescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualMachineTemplatesCreateOrUpdateSample.ts
[virtualmachinetemplatesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualMachineTemplatesDeleteSample.ts
[virtualmachinetemplatesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualMachineTemplatesGetSample.ts
[virtualmachinetemplateslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualMachineTemplatesListByResourceGroupSample.ts
[virtualmachinetemplateslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualMachineTemplatesListBySubscriptionSample.ts
[virtualmachinetemplatesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualMachineTemplatesUpdateSample.ts
[virtualnetworkscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualNetworksCreateOrUpdateSample.ts
[virtualnetworksdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualNetworksDeleteSample.ts
[virtualnetworksgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualNetworksGetSample.ts
[virtualnetworkslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualNetworksListByResourceGroupSample.ts
[virtualnetworkslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualNetworksListBySubscriptionSample.ts
[virtualnetworksupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/virtualNetworksUpdateSample.ts
[vminstancehybrididentitymetadatasgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/vmInstanceHybridIdentityMetadatasGetSample.ts
[vminstancehybrididentitymetadataslistbyvirtualmachineinstancesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/vmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceSample.ts
[vmmserverscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/vmmServersCreateOrUpdateSample.ts
[vmmserversdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/vmmServersDeleteSample.ts
[vmmserversgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/vmmServersGetSample.ts
[vmmserverslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/vmmServersListByResourceGroupSample.ts
[vmmserverslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/vmmServersListBySubscriptionSample.ts
[vmmserversupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/scvmm/arm-scvmm/samples/v1/typescript/src/vmmServersUpdateSample.ts
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-scvmm?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/scvmm/arm-scvmm/README.md
[typescript]: https://www.typescriptlang.org/docs/home.html
