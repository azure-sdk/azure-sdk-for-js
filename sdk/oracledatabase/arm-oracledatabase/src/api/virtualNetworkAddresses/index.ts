// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  virtualNetworkAddressPropertiesSerializer,
  VirtualNetworkAddress,
  _VirtualNetworkAddressListResult,
} from "../../models/models.js";
import { DatabaseContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  VirtualNetworkAddressesGetOptionalParams,
  VirtualNetworkAddressesDeleteOptionalParams,
  VirtualNetworkAddressesCreateOrUpdateOptionalParams,
  VirtualNetworkAddressesListByCloudVmClusterOptionalParams,
} from "../../models/options.js";

export function _virtualNetworkAddressesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  options: VirtualNetworkAddressesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
      virtualnetworkaddressname,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualNetworkAddressesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualNetworkAddress> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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
          ipAddress: result.body.properties?.["ipAddress"],
          vmOcid: result.body.properties?.["vmOcid"],
          ocid: result.body.properties?.["ocid"],
          domain: result.body.properties?.["domain"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          timeAssigned:
            result.body.properties?.["timeAssigned"] !== undefined
              ? new Date(result.body.properties?.["timeAssigned"])
              : undefined,
        },
  };
}

/** Get a VirtualNetworkAddress */
export async function virtualNetworkAddressesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  options: VirtualNetworkAddressesGetOptionalParams = { requestOptions: {} },
): Promise<VirtualNetworkAddress> {
  const result = await _virtualNetworkAddressesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudvmclustername,
    virtualnetworkaddressname,
    options,
  );
  return _virtualNetworkAddressesGetDeserialize(result);
}

export function _virtualNetworkAddressesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  options: VirtualNetworkAddressesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
      virtualnetworkaddressname,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualNetworkAddressesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a VirtualNetworkAddress */
export function virtualNetworkAddressesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  options: VirtualNetworkAddressesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualNetworkAddressesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualNetworkAddressesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudvmclustername,
          virtualnetworkaddressname,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualNetworkAddressesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  resource: VirtualNetworkAddress,
  options: VirtualNetworkAddressesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
      virtualnetworkaddressname,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : virtualNetworkAddressPropertiesSerializer(resource.properties),
      },
    });
}

export async function _virtualNetworkAddressesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualNetworkAddress> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
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
          ipAddress: result.body.properties?.["ipAddress"],
          vmOcid: result.body.properties?.["vmOcid"],
          ocid: result.body.properties?.["ocid"],
          domain: result.body.properties?.["domain"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          timeAssigned:
            result.body.properties?.["timeAssigned"] !== undefined
              ? new Date(result.body.properties?.["timeAssigned"])
              : undefined,
        },
  };
}

/** Create a VirtualNetworkAddress */
export function virtualNetworkAddressesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  virtualnetworkaddressname: string,
  resource: VirtualNetworkAddress,
  options: VirtualNetworkAddressesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<VirtualNetworkAddress>, VirtualNetworkAddress> {
  return getLongRunningPoller(
    context,
    _virtualNetworkAddressesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualNetworkAddressesCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudvmclustername,
          virtualnetworkaddressname,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<VirtualNetworkAddress>, VirtualNetworkAddress>;
}

export function _virtualNetworkAddressesListByCloudVmClusterSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: VirtualNetworkAddressesListByCloudVmClusterOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses",
      subscriptionId,
      resourceGroupName,
      cloudvmclustername,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualNetworkAddressesListByCloudVmClusterDeserialize(
  result: PathUncheckedResponse,
): Promise<_VirtualNetworkAddressListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
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
              ipAddress: p.properties?.["ipAddress"],
              vmOcid: p.properties?.["vmOcid"],
              ocid: p.properties?.["ocid"],
              domain: p.properties?.["domain"],
              lifecycleDetails: p.properties?.["lifecycleDetails"],
              provisioningState: p.properties?.["provisioningState"],
              lifecycleState: p.properties?.["lifecycleState"],
              timeAssigned:
                p.properties?.["timeAssigned"] !== undefined
                  ? new Date(p.properties?.["timeAssigned"])
                  : undefined,
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List VirtualNetworkAddress resources by CloudVmCluster */
export function virtualNetworkAddressesListByCloudVmCluster(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudvmclustername: string,
  options: VirtualNetworkAddressesListByCloudVmClusterOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualNetworkAddress> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _virtualNetworkAddressesListByCloudVmClusterSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudvmclustername,
        options,
      ),
    _virtualNetworkAddressesListByCloudVmClusterDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
