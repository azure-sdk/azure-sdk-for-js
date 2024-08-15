// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  virtualMachineInstancePropertiesSerializer,
  extendedLocationSerializer,
  virtualMachineInstanceUpdatePropertiesSerializer,
  VirtualMachineInstance,
  VirtualMachineInstanceUpdate,
  StopVirtualMachineOptions,
  VirtualMachineCreateCheckpoint,
  VirtualMachineDeleteCheckpoint,
  VirtualMachineRestoreCheckpoint,
  _VirtualMachineInstanceListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  ScVmmContext as Client,
  VirtualMachineInstancesCreateCheckpoint202Response,
  VirtualMachineInstancesCreateCheckpointDefaultResponse,
  VirtualMachineInstancesCreateCheckpointLogicalResponse,
  VirtualMachineInstancesCreateOrUpdate200Response,
  VirtualMachineInstancesCreateOrUpdate201Response,
  VirtualMachineInstancesCreateOrUpdateDefaultResponse,
  VirtualMachineInstancesCreateOrUpdateLogicalResponse,
  VirtualMachineInstancesDelete202Response,
  VirtualMachineInstancesDelete204Response,
  VirtualMachineInstancesDeleteCheckpoint202Response,
  VirtualMachineInstancesDeleteCheckpointDefaultResponse,
  VirtualMachineInstancesDeleteCheckpointLogicalResponse,
  VirtualMachineInstancesDeleteDefaultResponse,
  VirtualMachineInstancesDeleteLogicalResponse,
  VirtualMachineInstancesGet200Response,
  VirtualMachineInstancesGetDefaultResponse,
  VirtualMachineInstancesList200Response,
  VirtualMachineInstancesListDefaultResponse,
  VirtualMachineInstancesRestart202Response,
  VirtualMachineInstancesRestartDefaultResponse,
  VirtualMachineInstancesRestartLogicalResponse,
  VirtualMachineInstancesRestoreCheckpoint202Response,
  VirtualMachineInstancesRestoreCheckpointDefaultResponse,
  VirtualMachineInstancesRestoreCheckpointLogicalResponse,
  VirtualMachineInstancesStart202Response,
  VirtualMachineInstancesStartDefaultResponse,
  VirtualMachineInstancesStartLogicalResponse,
  VirtualMachineInstancesStop202Response,
  VirtualMachineInstancesStopDefaultResponse,
  VirtualMachineInstancesStopLogicalResponse,
  VirtualMachineInstancesUpdate200Response,
  VirtualMachineInstancesUpdate202Response,
  VirtualMachineInstancesUpdateDefaultResponse,
  VirtualMachineInstancesUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  VirtualMachineInstancesGetOptionalParams,
  VirtualMachineInstancesCreateOrUpdateOptionalParams,
  VirtualMachineInstancesUpdateOptionalParams,
  VirtualMachineInstancesDeleteOptionalParams,
  VirtualMachineInstancesListOptionalParams,
  VirtualMachineInstancesStopOptionalParams,
  VirtualMachineInstancesStartOptionalParams,
  VirtualMachineInstancesRestartOptionalParams,
  VirtualMachineInstancesCreateCheckpointOptionalParams,
  VirtualMachineInstancesDeleteCheckpointOptionalParams,
  VirtualMachineInstancesRestoreCheckpointOptionalParams,
} from "../../models/options.js";

export function _virtualMachineInstancesGetSend(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualMachineInstancesGet200Response
  | VirtualMachineInstancesGetDefaultResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default",
      resourceUri,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualMachineInstancesGetDeserialize(
  result:
    | VirtualMachineInstancesGet200Response
    | VirtualMachineInstancesGetDefaultResponse,
): Promise<VirtualMachineInstance> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          availabilitySets:
            result.body.properties?.["availabilitySets"] === undefined
              ? result.body.properties?.["availabilitySets"]
              : result.body.properties?.["availabilitySets"].map((p) => {
                  return { id: p["id"], name: p["name"] };
                }),
          osProfile: !result.body.properties?.osProfile
            ? undefined
            : {
                adminPassword:
                  result.body.properties?.osProfile?.["adminPassword"],
                computerName:
                  result.body.properties?.osProfile?.["computerName"],
                osType: result.body.properties?.osProfile?.["osType"],
                osSku: result.body.properties?.osProfile?.["osSku"],
                osVersion: result.body.properties?.osProfile?.["osVersion"],
                domainName: result.body.properties?.osProfile?.["domainName"],
                domainUsername:
                  result.body.properties?.osProfile?.["domainUsername"],
                domainPassword:
                  result.body.properties?.osProfile?.["domainPassword"],
                workgroup: result.body.properties?.osProfile?.["workgroup"],
                productKey: result.body.properties?.osProfile?.["productKey"],
                timezone: result.body.properties?.osProfile?.["timezone"],
                runOnceCommands:
                  result.body.properties?.osProfile?.["runOnceCommands"],
              },
          hardwareProfile: !result.body.properties?.hardwareProfile
            ? undefined
            : {
                memoryMB: result.body.properties?.hardwareProfile?.["memoryMB"],
                cpuCount: result.body.properties?.hardwareProfile?.["cpuCount"],
                limitCpuForMigration:
                  result.body.properties?.hardwareProfile?.[
                    "limitCpuForMigration"
                  ],
                dynamicMemoryEnabled:
                  result.body.properties?.hardwareProfile?.[
                    "dynamicMemoryEnabled"
                  ],
                dynamicMemoryMaxMB:
                  result.body.properties?.hardwareProfile?.[
                    "dynamicMemoryMaxMB"
                  ],
                dynamicMemoryMinMB:
                  result.body.properties?.hardwareProfile?.[
                    "dynamicMemoryMinMB"
                  ],
                isHighlyAvailable:
                  result.body.properties?.hardwareProfile?.[
                    "isHighlyAvailable"
                  ],
              },
          networkProfile: !result.body.properties?.networkProfile
            ? undefined
            : {
                networkInterfaces:
                  result.body.properties?.networkProfile?.[
                    "networkInterfaces"
                  ] === undefined
                    ? result.body.properties?.networkProfile?.[
                        "networkInterfaces"
                      ]
                    : result.body.properties?.networkProfile?.[
                        "networkInterfaces"
                      ].map((p) => {
                        return {
                          name: p["name"],
                          displayName: p["displayName"],
                          ipv4Addresses: p["ipv4Addresses"],
                          ipv6Addresses: p["ipv6Addresses"],
                          macAddress: p["macAddress"],
                          virtualNetworkId: p["virtualNetworkId"],
                          networkName: p["networkName"],
                          ipv4AddressType: p["ipv4AddressType"],
                          ipv6AddressType: p["ipv6AddressType"],
                          macAddressType: p["macAddressType"],
                          nicId: p["nicId"],
                        };
                      }),
              },
          storageProfile: !result.body.properties?.storageProfile
            ? undefined
            : {
                disks:
                  result.body.properties?.storageProfile?.["disks"] ===
                  undefined
                    ? result.body.properties?.storageProfile?.["disks"]
                    : result.body.properties?.storageProfile?.["disks"].map(
                        (p) => {
                          return {
                            name: p["name"],
                            displayName: p["displayName"],
                            diskId: p["diskId"],
                            diskSizeGB: p["diskSizeGB"],
                            maxDiskSizeGB: p["maxDiskSizeGB"],
                            bus: p["bus"],
                            lun: p["lun"],
                            busType: p["busType"],
                            vhdType: p["vhdType"],
                            volumeType: p["volumeType"],
                            vhdFormatType: p["vhdFormatType"],
                            templateDiskId: p["templateDiskId"],
                            storageQosPolicy: !p.storageQoSPolicy
                              ? undefined
                              : {
                                  name: p.storageQoSPolicy?.["name"],
                                  id: p.storageQoSPolicy?.["id"],
                                },
                            createDiffDisk: p["createDiffDisk"],
                          };
                        },
                      ),
              },
          infrastructureProfile: !result.body.properties?.infrastructureProfile
            ? undefined
            : {
                inventoryItemId:
                  result.body.properties?.infrastructureProfile?.[
                    "inventoryItemId"
                  ],
                vmmServerId:
                  result.body.properties?.infrastructureProfile?.[
                    "vmmServerId"
                  ],
                cloudId:
                  result.body.properties?.infrastructureProfile?.["cloudId"],
                templateId:
                  result.body.properties?.infrastructureProfile?.["templateId"],
                vmName:
                  result.body.properties?.infrastructureProfile?.["vmName"],
                uuid: result.body.properties?.infrastructureProfile?.["uuid"],
                lastRestoredVmCheckpoint: !result.body.properties
                  ?.infrastructureProfile?.lastRestoredVMCheckpoint
                  ? undefined
                  : {
                      parentCheckpointId:
                        result.body.properties?.infrastructureProfile
                          ?.lastRestoredVMCheckpoint?.["parentCheckpointID"],
                      checkpointId:
                        result.body.properties?.infrastructureProfile
                          ?.lastRestoredVMCheckpoint?.["checkpointID"],
                      name: result.body.properties?.infrastructureProfile
                        ?.lastRestoredVMCheckpoint?.["name"],
                      description:
                        result.body.properties?.infrastructureProfile
                          ?.lastRestoredVMCheckpoint?.["description"],
                    },
                checkpoints:
                  result.body.properties?.infrastructureProfile?.[
                    "checkpoints"
                  ] === undefined
                    ? result.body.properties?.infrastructureProfile?.[
                        "checkpoints"
                      ]
                    : result.body.properties?.infrastructureProfile?.[
                        "checkpoints"
                      ].map((p) => {
                        return {
                          parentCheckpointId: p["parentCheckpointID"],
                          checkpointId: p["checkpointID"],
                          name: p["name"],
                          description: p["description"],
                        };
                      }),
                checkpointType:
                  result.body.properties?.infrastructureProfile?.[
                    "checkpointType"
                  ],
                generation:
                  result.body.properties?.infrastructureProfile?.["generation"],
                biosGuid:
                  result.body.properties?.infrastructureProfile?.["biosGuid"],
              },
          powerState: result.body.properties?.["powerState"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Retrieves information about a virtual machine instance. */
export async function virtualMachineInstancesGet(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesGetOptionalParams = { requestOptions: {} },
): Promise<VirtualMachineInstance> {
  const result = await _virtualMachineInstancesGetSend(
    context,
    resourceUri,
    options,
  );
  return _virtualMachineInstancesGetDeserialize(result);
}

export function _virtualMachineInstancesCreateOrUpdateSend(
  context: Client,
  resourceUri: string,
  resource: VirtualMachineInstance,
  options: VirtualMachineInstancesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualMachineInstancesCreateOrUpdate200Response
  | VirtualMachineInstancesCreateOrUpdate201Response
  | VirtualMachineInstancesCreateOrUpdateDefaultResponse
  | VirtualMachineInstancesCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default",
      resourceUri,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : virtualMachineInstancePropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _virtualMachineInstancesCreateOrUpdateDeserialize(
  result:
    | VirtualMachineInstancesCreateOrUpdate200Response
    | VirtualMachineInstancesCreateOrUpdate201Response
    | VirtualMachineInstancesCreateOrUpdateDefaultResponse
    | VirtualMachineInstancesCreateOrUpdateLogicalResponse,
): Promise<VirtualMachineInstance> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const res =
    result as unknown as VirtualMachineInstancesCreateOrUpdateLogicalResponse;
  return {
    id: res.body["id"],
    name: res.body["name"],
    type: res.body["type"],
    systemData: !res.body.systemData
      ? undefined
      : {
          createdBy: res.body.systemData?.["createdBy"],
          createdByType: res.body.systemData?.["createdByType"],
          createdAt:
            res.body.systemData?.["createdAt"] !== undefined
              ? new Date(res.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: res.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: res.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            res.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(res.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !res.body.properties
      ? undefined
      : {
          availabilitySets:
            res.body.properties?.["availabilitySets"] === undefined
              ? res.body.properties?.["availabilitySets"]
              : res.body.properties?.["availabilitySets"].map((p) => {
                  return { id: p["id"], name: p["name"] };
                }),
          osProfile: !res.body.properties?.osProfile
            ? undefined
            : {
                adminPassword:
                  res.body.properties?.osProfile?.["adminPassword"],
                computerName: res.body.properties?.osProfile?.["computerName"],
                osType: res.body.properties?.osProfile?.["osType"],
                osSku: res.body.properties?.osProfile?.["osSku"],
                osVersion: res.body.properties?.osProfile?.["osVersion"],
                domainName: res.body.properties?.osProfile?.["domainName"],
                domainUsername:
                  res.body.properties?.osProfile?.["domainUsername"],
                domainPassword:
                  res.body.properties?.osProfile?.["domainPassword"],
                workgroup: res.body.properties?.osProfile?.["workgroup"],
                productKey: res.body.properties?.osProfile?.["productKey"],
                timezone: res.body.properties?.osProfile?.["timezone"],
                runOnceCommands:
                  res.body.properties?.osProfile?.["runOnceCommands"],
              },
          hardwareProfile: !res.body.properties?.hardwareProfile
            ? undefined
            : {
                memoryMB: res.body.properties?.hardwareProfile?.["memoryMB"],
                cpuCount: res.body.properties?.hardwareProfile?.["cpuCount"],
                limitCpuForMigration:
                  res.body.properties?.hardwareProfile?.[
                    "limitCpuForMigration"
                  ],
                dynamicMemoryEnabled:
                  res.body.properties?.hardwareProfile?.[
                    "dynamicMemoryEnabled"
                  ],
                dynamicMemoryMaxMB:
                  res.body.properties?.hardwareProfile?.["dynamicMemoryMaxMB"],
                dynamicMemoryMinMB:
                  res.body.properties?.hardwareProfile?.["dynamicMemoryMinMB"],
                isHighlyAvailable:
                  res.body.properties?.hardwareProfile?.["isHighlyAvailable"],
              },
          networkProfile: !res.body.properties?.networkProfile
            ? undefined
            : {
                networkInterfaces:
                  res.body.properties?.networkProfile?.["networkInterfaces"] ===
                  undefined
                    ? res.body.properties?.networkProfile?.["networkInterfaces"]
                    : res.body.properties?.networkProfile?.[
                        "networkInterfaces"
                      ].map((p) => {
                        return {
                          name: p["name"],
                          displayName: p["displayName"],
                          ipv4Addresses: p["ipv4Addresses"],
                          ipv6Addresses: p["ipv6Addresses"],
                          macAddress: p["macAddress"],
                          virtualNetworkId: p["virtualNetworkId"],
                          networkName: p["networkName"],
                          ipv4AddressType: p["ipv4AddressType"],
                          ipv6AddressType: p["ipv6AddressType"],
                          macAddressType: p["macAddressType"],
                          nicId: p["nicId"],
                        };
                      }),
              },
          storageProfile: !res.body.properties?.storageProfile
            ? undefined
            : {
                disks:
                  res.body.properties?.storageProfile?.["disks"] === undefined
                    ? res.body.properties?.storageProfile?.["disks"]
                    : res.body.properties?.storageProfile?.["disks"].map(
                        (p) => {
                          return {
                            name: p["name"],
                            displayName: p["displayName"],
                            diskId: p["diskId"],
                            diskSizeGB: p["diskSizeGB"],
                            maxDiskSizeGB: p["maxDiskSizeGB"],
                            bus: p["bus"],
                            lun: p["lun"],
                            busType: p["busType"],
                            vhdType: p["vhdType"],
                            volumeType: p["volumeType"],
                            vhdFormatType: p["vhdFormatType"],
                            templateDiskId: p["templateDiskId"],
                            storageQosPolicy: !p.storageQoSPolicy
                              ? undefined
                              : {
                                  name: p.storageQoSPolicy?.["name"],
                                  id: p.storageQoSPolicy?.["id"],
                                },
                            createDiffDisk: p["createDiffDisk"],
                          };
                        },
                      ),
              },
          infrastructureProfile: !res.body.properties?.infrastructureProfile
            ? undefined
            : {
                inventoryItemId:
                  res.body.properties?.infrastructureProfile?.[
                    "inventoryItemId"
                  ],
                vmmServerId:
                  res.body.properties?.infrastructureProfile?.["vmmServerId"],
                cloudId:
                  res.body.properties?.infrastructureProfile?.["cloudId"],
                templateId:
                  res.body.properties?.infrastructureProfile?.["templateId"],
                vmName: res.body.properties?.infrastructureProfile?.["vmName"],
                uuid: res.body.properties?.infrastructureProfile?.["uuid"],
                lastRestoredVmCheckpoint: !res.body.properties
                  ?.infrastructureProfile?.lastRestoredVMCheckpoint
                  ? undefined
                  : {
                      parentCheckpointId:
                        res.body.properties?.infrastructureProfile
                          ?.lastRestoredVMCheckpoint?.["parentCheckpointID"],
                      checkpointId:
                        res.body.properties?.infrastructureProfile
                          ?.lastRestoredVMCheckpoint?.["checkpointID"],
                      name: res.body.properties?.infrastructureProfile
                        ?.lastRestoredVMCheckpoint?.["name"],
                      description:
                        res.body.properties?.infrastructureProfile
                          ?.lastRestoredVMCheckpoint?.["description"],
                    },
                checkpoints:
                  res.body.properties?.infrastructureProfile?.[
                    "checkpoints"
                  ] === undefined
                    ? res.body.properties?.infrastructureProfile?.[
                        "checkpoints"
                      ]
                    : res.body.properties?.infrastructureProfile?.[
                        "checkpoints"
                      ].map((p) => {
                        return {
                          parentCheckpointId: p["parentCheckpointID"],
                          checkpointId: p["checkpointID"],
                          name: p["name"],
                          description: p["description"],
                        };
                      }),
                checkpointType:
                  res.body.properties?.infrastructureProfile?.[
                    "checkpointType"
                  ],
                generation:
                  res.body.properties?.infrastructureProfile?.["generation"],
                biosGuid:
                  res.body.properties?.infrastructureProfile?.["biosGuid"],
              },
          powerState: res.body.properties?.["powerState"],
          provisioningState: res.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: res.body.extendedLocation["type"],
      name: res.body.extendedLocation["name"],
    },
  };
}

/** The operation to create or update a virtual machine instance. Please note some properties can be set only during virtual machine instance creation. */
export function virtualMachineInstancesCreateOrUpdate(
  context: Client,
  resourceUri: string,
  resource: VirtualMachineInstance,
  options: VirtualMachineInstancesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<VirtualMachineInstance>, VirtualMachineInstance> {
  return getLongRunningPoller(
    context,
    _virtualMachineInstancesCreateOrUpdateDeserialize,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineInstancesCreateOrUpdateSend(
          context,
          resourceUri,
          resource,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<VirtualMachineInstance>,
    VirtualMachineInstance
  >;
}

export function _virtualMachineInstancesUpdateSend(
  context: Client,
  resourceUri: string,
  properties: VirtualMachineInstanceUpdate,
  options: VirtualMachineInstancesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualMachineInstancesUpdate200Response
  | VirtualMachineInstancesUpdate202Response
  | VirtualMachineInstancesUpdateDefaultResponse
  | VirtualMachineInstancesUpdateLogicalResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default",
      resourceUri,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? properties.properties
          : virtualMachineInstanceUpdatePropertiesSerializer(
              properties.properties,
            ),
      },
    });
}

export async function _virtualMachineInstancesUpdateDeserialize(
  result:
    | VirtualMachineInstancesUpdate200Response
    | VirtualMachineInstancesUpdate202Response
    | VirtualMachineInstancesUpdateDefaultResponse
    | VirtualMachineInstancesUpdateLogicalResponse,
): Promise<VirtualMachineInstance> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const res = result as unknown as VirtualMachineInstancesUpdateLogicalResponse;
  return {
    id: res.body["id"],
    name: res.body["name"],
    type: res.body["type"],
    systemData: !res.body.systemData
      ? undefined
      : {
          createdBy: res.body.systemData?.["createdBy"],
          createdByType: res.body.systemData?.["createdByType"],
          createdAt:
            res.body.systemData?.["createdAt"] !== undefined
              ? new Date(res.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: res.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: res.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            res.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(res.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !res.body.properties
      ? undefined
      : {
          availabilitySets:
            res.body.properties?.["availabilitySets"] === undefined
              ? res.body.properties?.["availabilitySets"]
              : res.body.properties?.["availabilitySets"].map((p) => {
                  return { id: p["id"], name: p["name"] };
                }),
          osProfile: !res.body.properties?.osProfile
            ? undefined
            : {
                adminPassword:
                  res.body.properties?.osProfile?.["adminPassword"],
                computerName: res.body.properties?.osProfile?.["computerName"],
                osType: res.body.properties?.osProfile?.["osType"],
                osSku: res.body.properties?.osProfile?.["osSku"],
                osVersion: res.body.properties?.osProfile?.["osVersion"],
                domainName: res.body.properties?.osProfile?.["domainName"],
                domainUsername:
                  res.body.properties?.osProfile?.["domainUsername"],
                domainPassword:
                  res.body.properties?.osProfile?.["domainPassword"],
                workgroup: res.body.properties?.osProfile?.["workgroup"],
                productKey: res.body.properties?.osProfile?.["productKey"],
                timezone: res.body.properties?.osProfile?.["timezone"],
                runOnceCommands:
                  res.body.properties?.osProfile?.["runOnceCommands"],
              },
          hardwareProfile: !res.body.properties?.hardwareProfile
            ? undefined
            : {
                memoryMB: res.body.properties?.hardwareProfile?.["memoryMB"],
                cpuCount: res.body.properties?.hardwareProfile?.["cpuCount"],
                limitCpuForMigration:
                  res.body.properties?.hardwareProfile?.[
                    "limitCpuForMigration"
                  ],
                dynamicMemoryEnabled:
                  res.body.properties?.hardwareProfile?.[
                    "dynamicMemoryEnabled"
                  ],
                dynamicMemoryMaxMB:
                  res.body.properties?.hardwareProfile?.["dynamicMemoryMaxMB"],
                dynamicMemoryMinMB:
                  res.body.properties?.hardwareProfile?.["dynamicMemoryMinMB"],
                isHighlyAvailable:
                  res.body.properties?.hardwareProfile?.["isHighlyAvailable"],
              },
          networkProfile: !res.body.properties?.networkProfile
            ? undefined
            : {
                networkInterfaces:
                  res.body.properties?.networkProfile?.["networkInterfaces"] ===
                  undefined
                    ? res.body.properties?.networkProfile?.["networkInterfaces"]
                    : res.body.properties?.networkProfile?.[
                        "networkInterfaces"
                      ].map((p) => {
                        return {
                          name: p["name"],
                          displayName: p["displayName"],
                          ipv4Addresses: p["ipv4Addresses"],
                          ipv6Addresses: p["ipv6Addresses"],
                          macAddress: p["macAddress"],
                          virtualNetworkId: p["virtualNetworkId"],
                          networkName: p["networkName"],
                          ipv4AddressType: p["ipv4AddressType"],
                          ipv6AddressType: p["ipv6AddressType"],
                          macAddressType: p["macAddressType"],
                          nicId: p["nicId"],
                        };
                      }),
              },
          storageProfile: !res.body.properties?.storageProfile
            ? undefined
            : {
                disks:
                  res.body.properties?.storageProfile?.["disks"] === undefined
                    ? res.body.properties?.storageProfile?.["disks"]
                    : res.body.properties?.storageProfile?.["disks"].map(
                        (p) => {
                          return {
                            name: p["name"],
                            displayName: p["displayName"],
                            diskId: p["diskId"],
                            diskSizeGB: p["diskSizeGB"],
                            maxDiskSizeGB: p["maxDiskSizeGB"],
                            bus: p["bus"],
                            lun: p["lun"],
                            busType: p["busType"],
                            vhdType: p["vhdType"],
                            volumeType: p["volumeType"],
                            vhdFormatType: p["vhdFormatType"],
                            templateDiskId: p["templateDiskId"],
                            storageQosPolicy: !p.storageQoSPolicy
                              ? undefined
                              : {
                                  name: p.storageQoSPolicy?.["name"],
                                  id: p.storageQoSPolicy?.["id"],
                                },
                            createDiffDisk: p["createDiffDisk"],
                          };
                        },
                      ),
              },
          infrastructureProfile: !res.body.properties?.infrastructureProfile
            ? undefined
            : {
                inventoryItemId:
                  res.body.properties?.infrastructureProfile?.[
                    "inventoryItemId"
                  ],
                vmmServerId:
                  res.body.properties?.infrastructureProfile?.["vmmServerId"],
                cloudId:
                  res.body.properties?.infrastructureProfile?.["cloudId"],
                templateId:
                  res.body.properties?.infrastructureProfile?.["templateId"],
                vmName: res.body.properties?.infrastructureProfile?.["vmName"],
                uuid: res.body.properties?.infrastructureProfile?.["uuid"],
                lastRestoredVmCheckpoint: !res.body.properties
                  ?.infrastructureProfile?.lastRestoredVMCheckpoint
                  ? undefined
                  : {
                      parentCheckpointId:
                        res.body.properties?.infrastructureProfile
                          ?.lastRestoredVMCheckpoint?.["parentCheckpointID"],
                      checkpointId:
                        res.body.properties?.infrastructureProfile
                          ?.lastRestoredVMCheckpoint?.["checkpointID"],
                      name: res.body.properties?.infrastructureProfile
                        ?.lastRestoredVMCheckpoint?.["name"],
                      description:
                        res.body.properties?.infrastructureProfile
                          ?.lastRestoredVMCheckpoint?.["description"],
                    },
                checkpoints:
                  res.body.properties?.infrastructureProfile?.[
                    "checkpoints"
                  ] === undefined
                    ? res.body.properties?.infrastructureProfile?.[
                        "checkpoints"
                      ]
                    : res.body.properties?.infrastructureProfile?.[
                        "checkpoints"
                      ].map((p) => {
                        return {
                          parentCheckpointId: p["parentCheckpointID"],
                          checkpointId: p["checkpointID"],
                          name: p["name"],
                          description: p["description"],
                        };
                      }),
                checkpointType:
                  res.body.properties?.infrastructureProfile?.[
                    "checkpointType"
                  ],
                generation:
                  res.body.properties?.infrastructureProfile?.["generation"],
                biosGuid:
                  res.body.properties?.infrastructureProfile?.["biosGuid"],
              },
          powerState: res.body.properties?.["powerState"],
          provisioningState: res.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: res.body.extendedLocation["type"],
      name: res.body.extendedLocation["name"],
    },
  };
}

/** The operation to update a virtual machine instance. */
export function virtualMachineInstancesUpdate(
  context: Client,
  resourceUri: string,
  properties: VirtualMachineInstanceUpdate,
  options: VirtualMachineInstancesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VirtualMachineInstance>, VirtualMachineInstance> {
  return getLongRunningPoller(
    context,
    _virtualMachineInstancesUpdateDeserialize,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineInstancesUpdateSend(
          context,
          resourceUri,
          properties,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<VirtualMachineInstance>,
    VirtualMachineInstance
  >;
}

export function _virtualMachineInstancesDeleteSend(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualMachineInstancesDelete202Response
  | VirtualMachineInstancesDelete204Response
  | VirtualMachineInstancesDeleteDefaultResponse
  | VirtualMachineInstancesDeleteLogicalResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default",
      resourceUri,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        force: options?.force,
        deleteFromHost: options?.deleteFromHost,
      },
    });
}

export async function _virtualMachineInstancesDeleteDeserialize(
  result:
    | VirtualMachineInstancesDelete202Response
    | VirtualMachineInstancesDelete204Response
    | VirtualMachineInstancesDeleteDefaultResponse
    | VirtualMachineInstancesDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** The operation to delete a virtual machine instance. */
export function virtualMachineInstancesDelete(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachineInstancesDeleteDeserialize,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineInstancesDeleteSend(context, resourceUri, options),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualMachineInstancesListSend(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesListOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualMachineInstancesList200Response
  | VirtualMachineInstancesListDefaultResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances",
      resourceUri,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualMachineInstancesListDeserialize(
  result:
    | VirtualMachineInstancesList200Response
    | VirtualMachineInstancesListDefaultResponse,
): Promise<_VirtualMachineInstanceListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => {
      return {
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              availabilitySets:
                p.properties?.["availabilitySets"] === undefined
                  ? p.properties?.["availabilitySets"]
                  : p.properties?.["availabilitySets"].map((p) => {
                      return { id: p["id"], name: p["name"] };
                    }),
              osProfile: !p.properties?.osProfile
                ? undefined
                : {
                    adminPassword: p.properties?.osProfile?.["adminPassword"],
                    computerName: p.properties?.osProfile?.["computerName"],
                    osType: p.properties?.osProfile?.["osType"],
                    osSku: p.properties?.osProfile?.["osSku"],
                    osVersion: p.properties?.osProfile?.["osVersion"],
                    domainName: p.properties?.osProfile?.["domainName"],
                    domainUsername: p.properties?.osProfile?.["domainUsername"],
                    domainPassword: p.properties?.osProfile?.["domainPassword"],
                    workgroup: p.properties?.osProfile?.["workgroup"],
                    productKey: p.properties?.osProfile?.["productKey"],
                    timezone: p.properties?.osProfile?.["timezone"],
                    runOnceCommands:
                      p.properties?.osProfile?.["runOnceCommands"],
                  },
              hardwareProfile: !p.properties?.hardwareProfile
                ? undefined
                : {
                    memoryMB: p.properties?.hardwareProfile?.["memoryMB"],
                    cpuCount: p.properties?.hardwareProfile?.["cpuCount"],
                    limitCpuForMigration:
                      p.properties?.hardwareProfile?.["limitCpuForMigration"],
                    dynamicMemoryEnabled:
                      p.properties?.hardwareProfile?.["dynamicMemoryEnabled"],
                    dynamicMemoryMaxMB:
                      p.properties?.hardwareProfile?.["dynamicMemoryMaxMB"],
                    dynamicMemoryMinMB:
                      p.properties?.hardwareProfile?.["dynamicMemoryMinMB"],
                    isHighlyAvailable:
                      p.properties?.hardwareProfile?.["isHighlyAvailable"],
                  },
              networkProfile: !p.properties?.networkProfile
                ? undefined
                : {
                    networkInterfaces:
                      p.properties?.networkProfile?.["networkInterfaces"] ===
                      undefined
                        ? p.properties?.networkProfile?.["networkInterfaces"]
                        : p.properties?.networkProfile?.[
                            "networkInterfaces"
                          ].map((p) => {
                            return {
                              name: p["name"],
                              displayName: p["displayName"],
                              ipv4Addresses: p["ipv4Addresses"],
                              ipv6Addresses: p["ipv6Addresses"],
                              macAddress: p["macAddress"],
                              virtualNetworkId: p["virtualNetworkId"],
                              networkName: p["networkName"],
                              ipv4AddressType: p["ipv4AddressType"],
                              ipv6AddressType: p["ipv6AddressType"],
                              macAddressType: p["macAddressType"],
                              nicId: p["nicId"],
                            };
                          }),
                  },
              storageProfile: !p.properties?.storageProfile
                ? undefined
                : {
                    disks:
                      p.properties?.storageProfile?.["disks"] === undefined
                        ? p.properties?.storageProfile?.["disks"]
                        : p.properties?.storageProfile?.["disks"].map((p) => {
                            return {
                              name: p["name"],
                              displayName: p["displayName"],
                              diskId: p["diskId"],
                              diskSizeGB: p["diskSizeGB"],
                              maxDiskSizeGB: p["maxDiskSizeGB"],
                              bus: p["bus"],
                              lun: p["lun"],
                              busType: p["busType"],
                              vhdType: p["vhdType"],
                              volumeType: p["volumeType"],
                              vhdFormatType: p["vhdFormatType"],
                              templateDiskId: p["templateDiskId"],
                              storageQosPolicy: !p.storageQoSPolicy
                                ? undefined
                                : {
                                    name: p.storageQoSPolicy?.["name"],
                                    id: p.storageQoSPolicy?.["id"],
                                  },
                              createDiffDisk: p["createDiffDisk"],
                            };
                          }),
                  },
              infrastructureProfile: !p.properties?.infrastructureProfile
                ? undefined
                : {
                    inventoryItemId:
                      p.properties?.infrastructureProfile?.["inventoryItemId"],
                    vmmServerId:
                      p.properties?.infrastructureProfile?.["vmmServerId"],
                    cloudId: p.properties?.infrastructureProfile?.["cloudId"],
                    templateId:
                      p.properties?.infrastructureProfile?.["templateId"],
                    vmName: p.properties?.infrastructureProfile?.["vmName"],
                    uuid: p.properties?.infrastructureProfile?.["uuid"],
                    lastRestoredVmCheckpoint: !p.properties
                      ?.infrastructureProfile?.lastRestoredVMCheckpoint
                      ? undefined
                      : {
                          parentCheckpointId:
                            p.properties?.infrastructureProfile
                              ?.lastRestoredVMCheckpoint?.[
                              "parentCheckpointID"
                            ],
                          checkpointId:
                            p.properties?.infrastructureProfile
                              ?.lastRestoredVMCheckpoint?.["checkpointID"],
                          name: p.properties?.infrastructureProfile
                            ?.lastRestoredVMCheckpoint?.["name"],
                          description:
                            p.properties?.infrastructureProfile
                              ?.lastRestoredVMCheckpoint?.["description"],
                        },
                    checkpoints:
                      p.properties?.infrastructureProfile?.["checkpoints"] ===
                      undefined
                        ? p.properties?.infrastructureProfile?.["checkpoints"]
                        : p.properties?.infrastructureProfile?.[
                            "checkpoints"
                          ].map((p) => {
                            return {
                              parentCheckpointId: p["parentCheckpointID"],
                              checkpointId: p["checkpointID"],
                              name: p["name"],
                              description: p["description"],
                            };
                          }),
                    checkpointType:
                      p.properties?.infrastructureProfile?.["checkpointType"],
                    generation:
                      p.properties?.infrastructureProfile?.["generation"],
                    biosGuid: p.properties?.infrastructureProfile?.["biosGuid"],
                  },
              powerState: p.properties?.["powerState"],
              provisioningState: p.properties?.["provisioningState"],
            },
        extendedLocation: {
          type: p.extendedLocation["type"],
          name: p.extendedLocation["name"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Lists all of the virtual machine instances within the specified parent resource. */
export function virtualMachineInstancesList(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<VirtualMachineInstance> {
  return buildPagedAsyncIterator(
    context,
    () => _virtualMachineInstancesListSend(context, resourceUri, options),
    _virtualMachineInstancesListDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _virtualMachineInstancesStopSend(
  context: Client,
  resourceUri: string,
  body: StopVirtualMachineOptions,
  options: VirtualMachineInstancesStopOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualMachineInstancesStop202Response
  | VirtualMachineInstancesStopDefaultResponse
  | VirtualMachineInstancesStopLogicalResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/stop",
      resourceUri,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { skipShutdown: body["skipShutdown"] },
    });
}

export async function _virtualMachineInstancesStopDeserialize(
  result:
    | VirtualMachineInstancesStop202Response
    | VirtualMachineInstancesStopDefaultResponse
    | VirtualMachineInstancesStopLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** The operation to power off (stop) a virtual machine instance. */
export function virtualMachineInstancesStop(
  context: Client,
  resourceUri: string,
  body: StopVirtualMachineOptions,
  options: VirtualMachineInstancesStopOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachineInstancesStopDeserialize,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineInstancesStopSend(context, resourceUri, body, options),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualMachineInstancesStartSend(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesStartOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualMachineInstancesStart202Response
  | VirtualMachineInstancesStartDefaultResponse
  | VirtualMachineInstancesStartLogicalResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/start",
      resourceUri,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualMachineInstancesStartDeserialize(
  result:
    | VirtualMachineInstancesStart202Response
    | VirtualMachineInstancesStartDefaultResponse
    | VirtualMachineInstancesStartLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** The operation to start a virtual machine instance. */
export function virtualMachineInstancesStart(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesStartOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachineInstancesStartDeserialize,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineInstancesStartSend(context, resourceUri, options),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualMachineInstancesRestartSend(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesRestartOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualMachineInstancesRestart202Response
  | VirtualMachineInstancesRestartDefaultResponse
  | VirtualMachineInstancesRestartLogicalResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restart",
      resourceUri,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualMachineInstancesRestartDeserialize(
  result:
    | VirtualMachineInstancesRestart202Response
    | VirtualMachineInstancesRestartDefaultResponse
    | VirtualMachineInstancesRestartLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** The operation to restart a virtual machine instance. */
export function virtualMachineInstancesRestart(
  context: Client,
  resourceUri: string,
  options: VirtualMachineInstancesRestartOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachineInstancesRestartDeserialize,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineInstancesRestartSend(context, resourceUri, options),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualMachineInstancesCreateCheckpointSend(
  context: Client,
  resourceUri: string,
  body: VirtualMachineCreateCheckpoint,
  options: VirtualMachineInstancesCreateCheckpointOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualMachineInstancesCreateCheckpoint202Response
  | VirtualMachineInstancesCreateCheckpointDefaultResponse
  | VirtualMachineInstancesCreateCheckpointLogicalResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/createCheckpoint",
      resourceUri,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"], description: body["description"] },
    });
}

export async function _virtualMachineInstancesCreateCheckpointDeserialize(
  result:
    | VirtualMachineInstancesCreateCheckpoint202Response
    | VirtualMachineInstancesCreateCheckpointDefaultResponse
    | VirtualMachineInstancesCreateCheckpointLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Creates a checkpoint in virtual machine instance. */
export function virtualMachineInstancesCreateCheckpoint(
  context: Client,
  resourceUri: string,
  body: VirtualMachineCreateCheckpoint,
  options: VirtualMachineInstancesCreateCheckpointOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachineInstancesCreateCheckpointDeserialize,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineInstancesCreateCheckpointSend(
          context,
          resourceUri,
          body,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualMachineInstancesDeleteCheckpointSend(
  context: Client,
  resourceUri: string,
  body: VirtualMachineDeleteCheckpoint,
  options: VirtualMachineInstancesDeleteCheckpointOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualMachineInstancesDeleteCheckpoint202Response
  | VirtualMachineInstancesDeleteCheckpointDefaultResponse
  | VirtualMachineInstancesDeleteCheckpointLogicalResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/deleteCheckpoint",
      resourceUri,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { id: body["id"] },
    });
}

export async function _virtualMachineInstancesDeleteCheckpointDeserialize(
  result:
    | VirtualMachineInstancesDeleteCheckpoint202Response
    | VirtualMachineInstancesDeleteCheckpointDefaultResponse
    | VirtualMachineInstancesDeleteCheckpointLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes a checkpoint in virtual machine instance. */
export function virtualMachineInstancesDeleteCheckpoint(
  context: Client,
  resourceUri: string,
  body: VirtualMachineDeleteCheckpoint,
  options: VirtualMachineInstancesDeleteCheckpointOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachineInstancesDeleteCheckpointDeserialize,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineInstancesDeleteCheckpointSend(
          context,
          resourceUri,
          body,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualMachineInstancesRestoreCheckpointSend(
  context: Client,
  resourceUri: string,
  body: VirtualMachineRestoreCheckpoint,
  options: VirtualMachineInstancesRestoreCheckpointOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualMachineInstancesRestoreCheckpoint202Response
  | VirtualMachineInstancesRestoreCheckpointDefaultResponse
  | VirtualMachineInstancesRestoreCheckpointLogicalResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restoreCheckpoint",
      resourceUri,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { id: body["id"] },
    });
}

export async function _virtualMachineInstancesRestoreCheckpointDeserialize(
  result:
    | VirtualMachineInstancesRestoreCheckpoint202Response
    | VirtualMachineInstancesRestoreCheckpointDefaultResponse
    | VirtualMachineInstancesRestoreCheckpointLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Restores to a checkpoint in virtual machine instance. */
export function virtualMachineInstancesRestoreCheckpoint(
  context: Client,
  resourceUri: string,
  body: VirtualMachineRestoreCheckpoint,
  options: VirtualMachineInstancesRestoreCheckpointOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachineInstancesRestoreCheckpointDeserialize,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineInstancesRestoreCheckpointSend(
          context,
          resourceUri,
          body,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}
