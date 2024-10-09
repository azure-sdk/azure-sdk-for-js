// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  extendedLocationSerializer,
  virtualMachineTemplatePropertiesSerializer,
  VirtualMachineTemplate,
  VirtualMachineTemplateTagsUpdate,
  _VirtualMachineTemplateListResult,
} from "../../models/models.js";
import { ScVmmContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  VirtualMachineTemplatesGetOptionalParams,
  VirtualMachineTemplatesCreateOrUpdateOptionalParams,
  VirtualMachineTemplatesUpdateOptionalParams,
  VirtualMachineTemplatesDeleteOptionalParams,
  VirtualMachineTemplatesListByResourceGroupOptionalParams,
  VirtualMachineTemplatesListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _virtualMachineTemplatesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  options: VirtualMachineTemplatesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}",
      subscriptionId,
      resourceGroupName,
      virtualMachineTemplateName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualMachineTemplatesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualMachineTemplate> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
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
          inventoryItemId: result.body.properties?.["inventoryItemId"],
          uuid: result.body.properties?.["uuid"],
          vmmServerId: result.body.properties?.["vmmServerId"],
          osType: result.body.properties?.["osType"],
          osName: result.body.properties?.["osName"],
          computerName: result.body.properties?.["computerName"],
          memoryMB: result.body.properties?.["memoryMB"],
          cpuCount: result.body.properties?.["cpuCount"],
          limitCpuForMigration:
            result.body.properties?.["limitCpuForMigration"],
          dynamicMemoryEnabled:
            result.body.properties?.["dynamicMemoryEnabled"],
          isCustomizable: result.body.properties?.["isCustomizable"],
          dynamicMemoryMaxMB: result.body.properties?.["dynamicMemoryMaxMB"],
          dynamicMemoryMinMB: result.body.properties?.["dynamicMemoryMinMB"],
          isHighlyAvailable: result.body.properties?.["isHighlyAvailable"],
          generation: result.body.properties?.["generation"],
          networkInterfaces:
            result.body.properties?.["networkInterfaces"] === undefined
              ? result.body.properties?.["networkInterfaces"]
              : result.body.properties?.["networkInterfaces"].map((p: any) => {
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
          disks:
            result.body.properties?.["disks"] === undefined
              ? result.body.properties?.["disks"]
              : result.body.properties?.["disks"].map((p: any) => {
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
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Implements VirtualMachineTemplate GET method. */
export async function virtualMachineTemplatesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  options: VirtualMachineTemplatesGetOptionalParams = { requestOptions: {} },
): Promise<VirtualMachineTemplate> {
  const result = await _virtualMachineTemplatesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    virtualMachineTemplateName,
    options,
  );
  return _virtualMachineTemplatesGetDeserialize(result);
}

export function _virtualMachineTemplatesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  resource: VirtualMachineTemplate,
  options: VirtualMachineTemplatesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}",
      subscriptionId,
      resourceGroupName,
      virtualMachineTemplateName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !resource.tags
          ? resource.tags
          : (serializeRecord(resource.tags as any) as any),
        location: resource["location"],
        properties: !resource.properties
          ? resource.properties
          : virtualMachineTemplatePropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _virtualMachineTemplatesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualMachineTemplate> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
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
          inventoryItemId: result.body.properties?.["inventoryItemId"],
          uuid: result.body.properties?.["uuid"],
          vmmServerId: result.body.properties?.["vmmServerId"],
          osType: result.body.properties?.["osType"],
          osName: result.body.properties?.["osName"],
          computerName: result.body.properties?.["computerName"],
          memoryMB: result.body.properties?.["memoryMB"],
          cpuCount: result.body.properties?.["cpuCount"],
          limitCpuForMigration:
            result.body.properties?.["limitCpuForMigration"],
          dynamicMemoryEnabled:
            result.body.properties?.["dynamicMemoryEnabled"],
          isCustomizable: result.body.properties?.["isCustomizable"],
          dynamicMemoryMaxMB: result.body.properties?.["dynamicMemoryMaxMB"],
          dynamicMemoryMinMB: result.body.properties?.["dynamicMemoryMinMB"],
          isHighlyAvailable: result.body.properties?.["isHighlyAvailable"],
          generation: result.body.properties?.["generation"],
          networkInterfaces:
            result.body.properties?.["networkInterfaces"] === undefined
              ? result.body.properties?.["networkInterfaces"]
              : result.body.properties?.["networkInterfaces"].map((p: any) => {
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
          disks:
            result.body.properties?.["disks"] === undefined
              ? result.body.properties?.["disks"]
              : result.body.properties?.["disks"].map((p: any) => {
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
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Onboards the ScVmm VM Template as an Azure VM Template resource. */
export function virtualMachineTemplatesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  resource: VirtualMachineTemplate,
  options: VirtualMachineTemplatesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<VirtualMachineTemplate>, VirtualMachineTemplate> {
  return getLongRunningPoller(
    context,
    _virtualMachineTemplatesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineTemplatesCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          virtualMachineTemplateName,
          resource,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<VirtualMachineTemplate>,
    VirtualMachineTemplate
  >;
}

export function _virtualMachineTemplatesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  properties: VirtualMachineTemplateTagsUpdate,
  options: VirtualMachineTemplatesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}",
      subscriptionId,
      resourceGroupName,
      virtualMachineTemplateName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
      },
    });
}

export async function _virtualMachineTemplatesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualMachineTemplate> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
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
          inventoryItemId: result.body.properties?.["inventoryItemId"],
          uuid: result.body.properties?.["uuid"],
          vmmServerId: result.body.properties?.["vmmServerId"],
          osType: result.body.properties?.["osType"],
          osName: result.body.properties?.["osName"],
          computerName: result.body.properties?.["computerName"],
          memoryMB: result.body.properties?.["memoryMB"],
          cpuCount: result.body.properties?.["cpuCount"],
          limitCpuForMigration:
            result.body.properties?.["limitCpuForMigration"],
          dynamicMemoryEnabled:
            result.body.properties?.["dynamicMemoryEnabled"],
          isCustomizable: result.body.properties?.["isCustomizable"],
          dynamicMemoryMaxMB: result.body.properties?.["dynamicMemoryMaxMB"],
          dynamicMemoryMinMB: result.body.properties?.["dynamicMemoryMinMB"],
          isHighlyAvailable: result.body.properties?.["isHighlyAvailable"],
          generation: result.body.properties?.["generation"],
          networkInterfaces:
            result.body.properties?.["networkInterfaces"] === undefined
              ? result.body.properties?.["networkInterfaces"]
              : result.body.properties?.["networkInterfaces"].map((p: any) => {
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
          disks:
            result.body.properties?.["disks"] === undefined
              ? result.body.properties?.["disks"]
              : result.body.properties?.["disks"].map((p: any) => {
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
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Updates the VirtualMachineTemplate resource. */
export function virtualMachineTemplatesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  properties: VirtualMachineTemplateTagsUpdate,
  options: VirtualMachineTemplatesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VirtualMachineTemplate>, VirtualMachineTemplate> {
  return getLongRunningPoller(
    context,
    _virtualMachineTemplatesUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineTemplatesUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          virtualMachineTemplateName,
          properties,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<VirtualMachineTemplate>,
    VirtualMachineTemplate
  >;
}

export function _virtualMachineTemplatesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  options: VirtualMachineTemplatesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}",
      subscriptionId,
      resourceGroupName,
      virtualMachineTemplateName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { force: options?.force },
    });
}

export async function _virtualMachineTemplatesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deregisters the ScVmm VM Template from Azure. */
export function virtualMachineTemplatesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  options: VirtualMachineTemplatesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachineTemplatesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineTemplatesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          virtualMachineTemplateName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualMachineTemplatesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: VirtualMachineTemplatesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualMachineTemplatesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_VirtualMachineTemplateListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        tags: p["tags"],
        location: p["location"],
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
              inventoryItemId: p.properties?.["inventoryItemId"],
              uuid: p.properties?.["uuid"],
              vmmServerId: p.properties?.["vmmServerId"],
              osType: p.properties?.["osType"],
              osName: p.properties?.["osName"],
              computerName: p.properties?.["computerName"],
              memoryMB: p.properties?.["memoryMB"],
              cpuCount: p.properties?.["cpuCount"],
              limitCpuForMigration: p.properties?.["limitCpuForMigration"],
              dynamicMemoryEnabled: p.properties?.["dynamicMemoryEnabled"],
              isCustomizable: p.properties?.["isCustomizable"],
              dynamicMemoryMaxMB: p.properties?.["dynamicMemoryMaxMB"],
              dynamicMemoryMinMB: p.properties?.["dynamicMemoryMinMB"],
              isHighlyAvailable: p.properties?.["isHighlyAvailable"],
              generation: p.properties?.["generation"],
              networkInterfaces:
                p.properties?.["networkInterfaces"] === undefined
                  ? p.properties?.["networkInterfaces"]
                  : p.properties?.["networkInterfaces"].map((p: any) => {
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
              disks:
                p.properties?.["disks"] === undefined
                  ? p.properties?.["disks"]
                  : p.properties?.["disks"].map((p: any) => {
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

/** List of VirtualMachineTemplates in a resource group. */
export function virtualMachineTemplatesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: VirtualMachineTemplatesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualMachineTemplate> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _virtualMachineTemplatesListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _virtualMachineTemplatesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _virtualMachineTemplatesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: VirtualMachineTemplatesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/virtualMachineTemplates",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualMachineTemplatesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_VirtualMachineTemplateListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        tags: p["tags"],
        location: p["location"],
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
              inventoryItemId: p.properties?.["inventoryItemId"],
              uuid: p.properties?.["uuid"],
              vmmServerId: p.properties?.["vmmServerId"],
              osType: p.properties?.["osType"],
              osName: p.properties?.["osName"],
              computerName: p.properties?.["computerName"],
              memoryMB: p.properties?.["memoryMB"],
              cpuCount: p.properties?.["cpuCount"],
              limitCpuForMigration: p.properties?.["limitCpuForMigration"],
              dynamicMemoryEnabled: p.properties?.["dynamicMemoryEnabled"],
              isCustomizable: p.properties?.["isCustomizable"],
              dynamicMemoryMaxMB: p.properties?.["dynamicMemoryMaxMB"],
              dynamicMemoryMinMB: p.properties?.["dynamicMemoryMinMB"],
              isHighlyAvailable: p.properties?.["isHighlyAvailable"],
              generation: p.properties?.["generation"],
              networkInterfaces:
                p.properties?.["networkInterfaces"] === undefined
                  ? p.properties?.["networkInterfaces"]
                  : p.properties?.["networkInterfaces"].map((p: any) => {
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
              disks:
                p.properties?.["disks"] === undefined
                  ? p.properties?.["disks"]
                  : p.properties?.["disks"].map((p: any) => {
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

/** List of VirtualMachineTemplates in a subscription. */
export function virtualMachineTemplatesListBySubscription(
  context: Client,
  subscriptionId: string,
  options: VirtualMachineTemplatesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualMachineTemplate> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _virtualMachineTemplatesListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _virtualMachineTemplatesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
