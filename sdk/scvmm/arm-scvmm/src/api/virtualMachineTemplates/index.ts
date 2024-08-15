// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  extendedLocationSerializer,
  virtualMachineTemplatePropertiesSerializer,
  VirtualMachineTemplate,
  VirtualMachineTemplateTagsUpdate,
  _VirtualMachineTemplateListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  ScVmmContext as Client,
  VirtualMachineTemplatesCreateOrUpdate200Response,
  VirtualMachineTemplatesCreateOrUpdate201Response,
  VirtualMachineTemplatesCreateOrUpdateDefaultResponse,
  VirtualMachineTemplatesCreateOrUpdateLogicalResponse,
  VirtualMachineTemplatesDelete202Response,
  VirtualMachineTemplatesDelete204Response,
  VirtualMachineTemplatesDeleteDefaultResponse,
  VirtualMachineTemplatesDeleteLogicalResponse,
  VirtualMachineTemplatesGet200Response,
  VirtualMachineTemplatesGetDefaultResponse,
  VirtualMachineTemplatesListByResourceGroup200Response,
  VirtualMachineTemplatesListByResourceGroupDefaultResponse,
  VirtualMachineTemplatesListBySubscription200Response,
  VirtualMachineTemplatesListBySubscriptionDefaultResponse,
  VirtualMachineTemplatesUpdate200Response,
  VirtualMachineTemplatesUpdate202Response,
  VirtualMachineTemplatesUpdateDefaultResponse,
  VirtualMachineTemplatesUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
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
): StreamableMethod<
  | VirtualMachineTemplatesGet200Response
  | VirtualMachineTemplatesGetDefaultResponse
> {
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
  result:
    | VirtualMachineTemplatesGet200Response
    | VirtualMachineTemplatesGetDefaultResponse,
): Promise<VirtualMachineTemplate> {
  if (isUnexpected(result)) {
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
              : result.body.properties?.["networkInterfaces"].map((p) => {
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
              : result.body.properties?.["disks"].map((p) => {
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
): StreamableMethod<
  | VirtualMachineTemplatesCreateOrUpdate200Response
  | VirtualMachineTemplatesCreateOrUpdate201Response
  | VirtualMachineTemplatesCreateOrUpdateDefaultResponse
  | VirtualMachineTemplatesCreateOrUpdateLogicalResponse
> {
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
  result:
    | VirtualMachineTemplatesCreateOrUpdate200Response
    | VirtualMachineTemplatesCreateOrUpdate201Response
    | VirtualMachineTemplatesCreateOrUpdateDefaultResponse
    | VirtualMachineTemplatesCreateOrUpdateLogicalResponse,
): Promise<VirtualMachineTemplate> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const res =
    result as unknown as VirtualMachineTemplatesCreateOrUpdateLogicalResponse;
  return {
    tags: res.body["tags"],
    location: res.body["location"],
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
          inventoryItemId: res.body.properties?.["inventoryItemId"],
          uuid: res.body.properties?.["uuid"],
          vmmServerId: res.body.properties?.["vmmServerId"],
          osType: res.body.properties?.["osType"],
          osName: res.body.properties?.["osName"],
          computerName: res.body.properties?.["computerName"],
          memoryMB: res.body.properties?.["memoryMB"],
          cpuCount: res.body.properties?.["cpuCount"],
          limitCpuForMigration: res.body.properties?.["limitCpuForMigration"],
          dynamicMemoryEnabled: res.body.properties?.["dynamicMemoryEnabled"],
          isCustomizable: res.body.properties?.["isCustomizable"],
          dynamicMemoryMaxMB: res.body.properties?.["dynamicMemoryMaxMB"],
          dynamicMemoryMinMB: res.body.properties?.["dynamicMemoryMinMB"],
          isHighlyAvailable: res.body.properties?.["isHighlyAvailable"],
          generation: res.body.properties?.["generation"],
          networkInterfaces:
            res.body.properties?.["networkInterfaces"] === undefined
              ? res.body.properties?.["networkInterfaces"]
              : res.body.properties?.["networkInterfaces"].map((p) => {
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
            res.body.properties?.["disks"] === undefined
              ? res.body.properties?.["disks"]
              : res.body.properties?.["disks"].map((p) => {
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
          provisioningState: res.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: res.body.extendedLocation["type"],
      name: res.body.extendedLocation["name"],
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
): StreamableMethod<
  | VirtualMachineTemplatesUpdate200Response
  | VirtualMachineTemplatesUpdate202Response
  | VirtualMachineTemplatesUpdateDefaultResponse
  | VirtualMachineTemplatesUpdateLogicalResponse
> {
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
  result:
    | VirtualMachineTemplatesUpdate200Response
    | VirtualMachineTemplatesUpdate202Response
    | VirtualMachineTemplatesUpdateDefaultResponse
    | VirtualMachineTemplatesUpdateLogicalResponse,
): Promise<VirtualMachineTemplate> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const res = result as unknown as VirtualMachineTemplatesUpdateLogicalResponse;
  return {
    tags: res.body["tags"],
    location: res.body["location"],
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
          inventoryItemId: res.body.properties?.["inventoryItemId"],
          uuid: res.body.properties?.["uuid"],
          vmmServerId: res.body.properties?.["vmmServerId"],
          osType: res.body.properties?.["osType"],
          osName: res.body.properties?.["osName"],
          computerName: res.body.properties?.["computerName"],
          memoryMB: res.body.properties?.["memoryMB"],
          cpuCount: res.body.properties?.["cpuCount"],
          limitCpuForMigration: res.body.properties?.["limitCpuForMigration"],
          dynamicMemoryEnabled: res.body.properties?.["dynamicMemoryEnabled"],
          isCustomizable: res.body.properties?.["isCustomizable"],
          dynamicMemoryMaxMB: res.body.properties?.["dynamicMemoryMaxMB"],
          dynamicMemoryMinMB: res.body.properties?.["dynamicMemoryMinMB"],
          isHighlyAvailable: res.body.properties?.["isHighlyAvailable"],
          generation: res.body.properties?.["generation"],
          networkInterfaces:
            res.body.properties?.["networkInterfaces"] === undefined
              ? res.body.properties?.["networkInterfaces"]
              : res.body.properties?.["networkInterfaces"].map((p) => {
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
            res.body.properties?.["disks"] === undefined
              ? res.body.properties?.["disks"]
              : res.body.properties?.["disks"].map((p) => {
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
          provisioningState: res.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: res.body.extendedLocation["type"],
      name: res.body.extendedLocation["name"],
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
): StreamableMethod<
  | VirtualMachineTemplatesDelete202Response
  | VirtualMachineTemplatesDelete204Response
  | VirtualMachineTemplatesDeleteDefaultResponse
  | VirtualMachineTemplatesDeleteLogicalResponse
> {
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
  result:
    | VirtualMachineTemplatesDelete202Response
    | VirtualMachineTemplatesDelete204Response
    | VirtualMachineTemplatesDeleteDefaultResponse
    | VirtualMachineTemplatesDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
): StreamableMethod<
  | VirtualMachineTemplatesListByResourceGroup200Response
  | VirtualMachineTemplatesListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualMachineTemplatesListByResourceGroupDeserialize(
  result:
    | VirtualMachineTemplatesListByResourceGroup200Response
    | VirtualMachineTemplatesListByResourceGroupDefaultResponse,
): Promise<_VirtualMachineTemplateListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => {
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
                  : p.properties?.["networkInterfaces"].map((p) => {
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
                  : p.properties?.["disks"].map((p) => {
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
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _virtualMachineTemplatesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: VirtualMachineTemplatesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualMachineTemplatesListBySubscription200Response
  | VirtualMachineTemplatesListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/virtualMachineTemplates",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualMachineTemplatesListBySubscriptionDeserialize(
  result:
    | VirtualMachineTemplatesListBySubscription200Response
    | VirtualMachineTemplatesListBySubscriptionDefaultResponse,
): Promise<_VirtualMachineTemplateListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => {
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
                  : p.properties?.["networkInterfaces"].map((p) => {
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
                  : p.properties?.["disks"].map((p) => {
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
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
