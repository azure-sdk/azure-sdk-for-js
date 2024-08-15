// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  extendedLocationSerializer,
  virtualNetworkPropertiesSerializer,
  VirtualNetwork,
  VirtualNetworkTagsUpdate,
  _VirtualNetworkListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  ScVmmContext as Client,
  VirtualNetworksCreateOrUpdate200Response,
  VirtualNetworksCreateOrUpdate201Response,
  VirtualNetworksCreateOrUpdateDefaultResponse,
  VirtualNetworksCreateOrUpdateLogicalResponse,
  VirtualNetworksDelete202Response,
  VirtualNetworksDelete204Response,
  VirtualNetworksDeleteDefaultResponse,
  VirtualNetworksDeleteLogicalResponse,
  VirtualNetworksGet200Response,
  VirtualNetworksGetDefaultResponse,
  VirtualNetworksListByResourceGroup200Response,
  VirtualNetworksListByResourceGroupDefaultResponse,
  VirtualNetworksListBySubscription200Response,
  VirtualNetworksListBySubscriptionDefaultResponse,
  VirtualNetworksUpdate200Response,
  VirtualNetworksUpdate202Response,
  VirtualNetworksUpdateDefaultResponse,
  VirtualNetworksUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  VirtualNetworksGetOptionalParams,
  VirtualNetworksCreateOrUpdateOptionalParams,
  VirtualNetworksUpdateOptionalParams,
  VirtualNetworksDeleteOptionalParams,
  VirtualNetworksListByResourceGroupOptionalParams,
  VirtualNetworksListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _virtualNetworksGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  options: VirtualNetworksGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  VirtualNetworksGet200Response | VirtualNetworksGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}",
      subscriptionId,
      resourceGroupName,
      virtualNetworkName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualNetworksGetDeserialize(
  result: VirtualNetworksGet200Response | VirtualNetworksGetDefaultResponse,
): Promise<VirtualNetwork> {
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
          networkName: result.body.properties?.["networkName"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Implements VirtualNetwork GET method. */
export async function virtualNetworksGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  options: VirtualNetworksGetOptionalParams = { requestOptions: {} },
): Promise<VirtualNetwork> {
  const result = await _virtualNetworksGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    virtualNetworkName,
    options,
  );
  return _virtualNetworksGetDeserialize(result);
}

export function _virtualNetworksCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  resource: VirtualNetwork,
  options: VirtualNetworksCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualNetworksCreateOrUpdate200Response
  | VirtualNetworksCreateOrUpdate201Response
  | VirtualNetworksCreateOrUpdateDefaultResponse
  | VirtualNetworksCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}",
      subscriptionId,
      resourceGroupName,
      virtualNetworkName,
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
          : virtualNetworkPropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _virtualNetworksCreateOrUpdateDeserialize(
  result:
    | VirtualNetworksCreateOrUpdate200Response
    | VirtualNetworksCreateOrUpdate201Response
    | VirtualNetworksCreateOrUpdateDefaultResponse
    | VirtualNetworksCreateOrUpdateLogicalResponse,
): Promise<VirtualNetwork> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const res = result as unknown as VirtualNetworksCreateOrUpdateLogicalResponse;
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
          networkName: res.body.properties?.["networkName"],
          provisioningState: res.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: res.body.extendedLocation["type"],
      name: res.body.extendedLocation["name"],
    },
  };
}

/** Onboards the ScVmm virtual network as an Azure virtual network resource. */
export function virtualNetworksCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  resource: VirtualNetwork,
  options: VirtualNetworksCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VirtualNetwork>, VirtualNetwork> {
  return getLongRunningPoller(
    context,
    _virtualNetworksCreateOrUpdateDeserialize,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualNetworksCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          virtualNetworkName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<VirtualNetwork>, VirtualNetwork>;
}

export function _virtualNetworksUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  properties: VirtualNetworkTagsUpdate,
  options: VirtualNetworksUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualNetworksUpdate200Response
  | VirtualNetworksUpdate202Response
  | VirtualNetworksUpdateDefaultResponse
  | VirtualNetworksUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}",
      subscriptionId,
      resourceGroupName,
      virtualNetworkName,
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

export async function _virtualNetworksUpdateDeserialize(
  result:
    | VirtualNetworksUpdate200Response
    | VirtualNetworksUpdate202Response
    | VirtualNetworksUpdateDefaultResponse
    | VirtualNetworksUpdateLogicalResponse,
): Promise<VirtualNetwork> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const res = result as unknown as VirtualNetworksUpdateLogicalResponse;
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
          networkName: res.body.properties?.["networkName"],
          provisioningState: res.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: res.body.extendedLocation["type"],
      name: res.body.extendedLocation["name"],
    },
  };
}

/** Updates the VirtualNetworks resource. */
export function virtualNetworksUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  properties: VirtualNetworkTagsUpdate,
  options: VirtualNetworksUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VirtualNetwork>, VirtualNetwork> {
  return getLongRunningPoller(context, _virtualNetworksUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _virtualNetworksUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        virtualNetworkName,
        properties,
        options,
      ),
  }) as PollerLike<OperationState<VirtualNetwork>, VirtualNetwork>;
}

export function _virtualNetworksDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  options: VirtualNetworksDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | VirtualNetworksDelete202Response
  | VirtualNetworksDelete204Response
  | VirtualNetworksDeleteDefaultResponse
  | VirtualNetworksDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}",
      subscriptionId,
      resourceGroupName,
      virtualNetworkName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { force: options?.force },
    });
}

export async function _virtualNetworksDeleteDeserialize(
  result:
    | VirtualNetworksDelete202Response
    | VirtualNetworksDelete204Response
    | VirtualNetworksDeleteDefaultResponse
    | VirtualNetworksDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Deregisters the ScVmm virtual network from Azure. */
export function virtualNetworksDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualNetworkName: string,
  options: VirtualNetworksDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _virtualNetworksDeleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _virtualNetworksDeleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        virtualNetworkName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _virtualNetworksListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: VirtualNetworksListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualNetworksListByResourceGroup200Response
  | VirtualNetworksListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualNetworksListByResourceGroupDeserialize(
  result:
    | VirtualNetworksListByResourceGroup200Response
    | VirtualNetworksListByResourceGroupDefaultResponse,
): Promise<_VirtualNetworkListResult> {
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
              networkName: p.properties?.["networkName"],
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

/** List of VirtualNetworks in a resource group. */
export function virtualNetworksListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: VirtualNetworksListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualNetwork> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _virtualNetworksListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _virtualNetworksListByResourceGroupDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _virtualNetworksListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: VirtualNetworksListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | VirtualNetworksListBySubscription200Response
  | VirtualNetworksListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/virtualNetworks",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualNetworksListBySubscriptionDeserialize(
  result:
    | VirtualNetworksListBySubscription200Response
    | VirtualNetworksListBySubscriptionDefaultResponse,
): Promise<_VirtualNetworkListResult> {
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
              networkName: p.properties?.["networkName"],
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

/** List of VirtualNetworks in a subscription. */
export function virtualNetworksListBySubscription(
  context: Client,
  subscriptionId: string,
  options: VirtualNetworksListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualNetwork> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _virtualNetworksListBySubscriptionSend(context, subscriptionId, options),
    _virtualNetworksListBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
