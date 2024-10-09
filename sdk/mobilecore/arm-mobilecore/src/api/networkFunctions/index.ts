// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  networkFunctionResourcePropertiesSerializer,
  NetworkFunctionResource,
  NetworkFunctionResourceTagsUpdate,
  _NetworkFunctionResourceListResult,
} from "../../models/models.js";
import { MobilePacketCoreContext as Client } from "../index.js";
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
  NetworkFunctionsGetOptionalParams,
  NetworkFunctionsCreateOrUpdateOptionalParams,
  NetworkFunctionsUpdateTagsOptionalParams,
  NetworkFunctionsDeleteOptionalParams,
  NetworkFunctionsListByResourceGroupOptionalParams,
  NetworkFunctionsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _networkFunctionsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  networkFunctionName: string,
  options: NetworkFunctionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/networkFunctions/{networkFunctionName}",
      subscriptionId,
      resourceGroupName,
      networkFunctionName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _networkFunctionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<NetworkFunctionResource> {
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
          sku: result.body.properties?.["sku"],
          networkFunctionType: result.body.properties?.["networkFunctionType"],
          networkFunctionAdministrativeState:
            result.body.properties?.["networkFunctionAdministrativeState"],
          networkFunctionOperationalStatus:
            result.body.properties?.["networkFunctionOperationalStatus"],
          infrastructureElementCount:
            result.body.properties?.["infrastructureElementCount"],
          capacity: result.body.properties?.["capacity"],
          userDescription: result.body.properties?.["userDescription"],
          deploymentNotes: result.body.properties?.["deploymentNotes"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a NetworkFunctionResource */
export async function networkFunctionsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  networkFunctionName: string,
  options: NetworkFunctionsGetOptionalParams = { requestOptions: {} },
): Promise<NetworkFunctionResource> {
  const result = await _networkFunctionsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    networkFunctionName,
    options,
  );
  return _networkFunctionsGetDeserialize(result);
}

export function _networkFunctionsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  networkFunctionName: string,
  resource: NetworkFunctionResource,
  options: NetworkFunctionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/networkFunctions/{networkFunctionName}",
      subscriptionId,
      resourceGroupName,
      networkFunctionName,
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
          : networkFunctionResourcePropertiesSerializer(resource.properties),
      },
    });
}

export async function _networkFunctionsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<NetworkFunctionResource> {
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
          sku: result.body.properties?.["sku"],
          networkFunctionType: result.body.properties?.["networkFunctionType"],
          networkFunctionAdministrativeState:
            result.body.properties?.["networkFunctionAdministrativeState"],
          networkFunctionOperationalStatus:
            result.body.properties?.["networkFunctionOperationalStatus"],
          infrastructureElementCount:
            result.body.properties?.["infrastructureElementCount"],
          capacity: result.body.properties?.["capacity"],
          userDescription: result.body.properties?.["userDescription"],
          deploymentNotes: result.body.properties?.["deploymentNotes"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a NetworkFunctionResource */
export function networkFunctionsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  networkFunctionName: string,
  resource: NetworkFunctionResource,
  options: NetworkFunctionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<NetworkFunctionResource>,
  NetworkFunctionResource
> {
  return getLongRunningPoller(
    context,
    _networkFunctionsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _networkFunctionsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          networkFunctionName,
          resource,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<NetworkFunctionResource>,
    NetworkFunctionResource
  >;
}

export function _networkFunctionsUpdateTagsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  networkFunctionName: string,
  properties: NetworkFunctionResourceTagsUpdate,
  options: NetworkFunctionsUpdateTagsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/networkFunctions/{networkFunctionName}",
      subscriptionId,
      resourceGroupName,
      networkFunctionName,
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

export async function _networkFunctionsUpdateTagsDeserialize(
  result: PathUncheckedResponse,
): Promise<NetworkFunctionResource> {
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
          sku: result.body.properties?.["sku"],
          networkFunctionType: result.body.properties?.["networkFunctionType"],
          networkFunctionAdministrativeState:
            result.body.properties?.["networkFunctionAdministrativeState"],
          networkFunctionOperationalStatus:
            result.body.properties?.["networkFunctionOperationalStatus"],
          infrastructureElementCount:
            result.body.properties?.["infrastructureElementCount"],
          capacity: result.body.properties?.["capacity"],
          userDescription: result.body.properties?.["userDescription"],
          deploymentNotes: result.body.properties?.["deploymentNotes"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Update a NetworkFunctionResource */
export async function networkFunctionsUpdateTags(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  networkFunctionName: string,
  properties: NetworkFunctionResourceTagsUpdate,
  options: NetworkFunctionsUpdateTagsOptionalParams = { requestOptions: {} },
): Promise<NetworkFunctionResource> {
  const result = await _networkFunctionsUpdateTagsSend(
    context,
    subscriptionId,
    resourceGroupName,
    networkFunctionName,
    properties,
    options,
  );
  return _networkFunctionsUpdateTagsDeserialize(result);
}

export function _networkFunctionsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  networkFunctionName: string,
  options: NetworkFunctionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/networkFunctions/{networkFunctionName}",
      subscriptionId,
      resourceGroupName,
      networkFunctionName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _networkFunctionsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a NetworkFunctionResource */
export async function networkFunctionsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  networkFunctionName: string,
  options: NetworkFunctionsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _networkFunctionsDeleteSend(
    context,
    subscriptionId,
    resourceGroupName,
    networkFunctionName,
    options,
  );
  return _networkFunctionsDeleteDeserialize(result);
}

export function _networkFunctionsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: NetworkFunctionsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobilePacketCore/networkFunctions",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _networkFunctionsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_NetworkFunctionResourceListResult> {
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
              sku: p.properties?.["sku"],
              networkFunctionType: p.properties?.["networkFunctionType"],
              networkFunctionAdministrativeState:
                p.properties?.["networkFunctionAdministrativeState"],
              networkFunctionOperationalStatus:
                p.properties?.["networkFunctionOperationalStatus"],
              infrastructureElementCount:
                p.properties?.["infrastructureElementCount"],
              capacity: p.properties?.["capacity"],
              userDescription: p.properties?.["userDescription"],
              deploymentNotes: p.properties?.["deploymentNotes"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List NetworkFunctionResource resources by resource group */
export function networkFunctionsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: NetworkFunctionsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<NetworkFunctionResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _networkFunctionsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _networkFunctionsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _networkFunctionsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: NetworkFunctionsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.MobilePacketCore/networkFunctions",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _networkFunctionsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_NetworkFunctionResourceListResult> {
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
              sku: p.properties?.["sku"],
              networkFunctionType: p.properties?.["networkFunctionType"],
              networkFunctionAdministrativeState:
                p.properties?.["networkFunctionAdministrativeState"],
              networkFunctionOperationalStatus:
                p.properties?.["networkFunctionOperationalStatus"],
              infrastructureElementCount:
                p.properties?.["infrastructureElementCount"],
              capacity: p.properties?.["capacity"],
              userDescription: p.properties?.["userDescription"],
              deploymentNotes: p.properties?.["deploymentNotes"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List NetworkFunctionResource resources by subscription ID */
export function networkFunctionsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: NetworkFunctionsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<NetworkFunctionResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _networkFunctionsListBySubscriptionSend(context, subscriptionId, options),
    _networkFunctionsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
