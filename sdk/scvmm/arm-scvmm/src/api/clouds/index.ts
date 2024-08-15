// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  extendedLocationSerializer,
  cloudPropertiesSerializer,
  Cloud,
  CloudTagsUpdate,
  _CloudListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  CloudsCreateOrUpdate200Response,
  CloudsCreateOrUpdate201Response,
  CloudsCreateOrUpdateDefaultResponse,
  CloudsCreateOrUpdateLogicalResponse,
  CloudsDelete202Response,
  CloudsDelete204Response,
  CloudsDeleteDefaultResponse,
  CloudsDeleteLogicalResponse,
  CloudsGet200Response,
  CloudsGetDefaultResponse,
  CloudsListByResourceGroup200Response,
  CloudsListByResourceGroupDefaultResponse,
  CloudsListBySubscription200Response,
  CloudsListBySubscriptionDefaultResponse,
  CloudsUpdate200Response,
  CloudsUpdate202Response,
  CloudsUpdateDefaultResponse,
  CloudsUpdateLogicalResponse,
  isUnexpected,
  ScVmmContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  CloudsGetOptionalParams,
  CloudsCreateOrUpdateOptionalParams,
  CloudsUpdateOptionalParams,
  CloudsDeleteOptionalParams,
  CloudsListByResourceGroupOptionalParams,
  CloudsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _cloudsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  options: CloudsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<CloudsGet200Response | CloudsGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
      subscriptionId,
      resourceGroupName,
      cloudResourceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudsGetDeserialize(
  result: CloudsGet200Response | CloudsGetDefaultResponse,
): Promise<Cloud> {
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
          cloudName: result.body.properties?.["cloudName"],
          cloudCapacity: !result.body.properties?.cloudCapacity
            ? undefined
            : {
                cpuCount: result.body.properties?.cloudCapacity?.["cpuCount"],
                memoryMB: result.body.properties?.cloudCapacity?.["memoryMB"],
                vmCount: result.body.properties?.cloudCapacity?.["vmCount"],
              },
          storageQosPolicies:
            result.body.properties?.["storageQoSPolicies"] === undefined
              ? result.body.properties?.["storageQoSPolicies"]
              : result.body.properties?.["storageQoSPolicies"].map((p) => {
                  return {
                    name: p["name"],
                    id: p["id"],
                    iopsMaximum: p["iopsMaximum"],
                    iopsMinimum: p["iopsMinimum"],
                    bandwidthLimit: p["bandwidthLimit"],
                    policyId: p["policyId"],
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

/** Implements Cloud GET method. */
export async function cloudsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  options: CloudsGetOptionalParams = { requestOptions: {} },
): Promise<Cloud> {
  const result = await _cloudsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudResourceName,
    options,
  );
  return _cloudsGetDeserialize(result);
}

export function _cloudsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  resource: Cloud,
  options: CloudsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CloudsCreateOrUpdate200Response
  | CloudsCreateOrUpdate201Response
  | CloudsCreateOrUpdateDefaultResponse
  | CloudsCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
      subscriptionId,
      resourceGroupName,
      cloudResourceName,
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
          : cloudPropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _cloudsCreateOrUpdateDeserialize(
  result:
    | CloudsCreateOrUpdate200Response
    | CloudsCreateOrUpdate201Response
    | CloudsCreateOrUpdateDefaultResponse
    | CloudsCreateOrUpdateLogicalResponse,
): Promise<Cloud> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const res = result as unknown as CloudsCreateOrUpdateLogicalResponse;
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
          cloudName: res.body.properties?.["cloudName"],
          cloudCapacity: !res.body.properties?.cloudCapacity
            ? undefined
            : {
                cpuCount: res.body.properties?.cloudCapacity?.["cpuCount"],
                memoryMB: res.body.properties?.cloudCapacity?.["memoryMB"],
                vmCount: res.body.properties?.cloudCapacity?.["vmCount"],
              },
          storageQosPolicies:
            res.body.properties?.["storageQoSPolicies"] === undefined
              ? res.body.properties?.["storageQoSPolicies"]
              : res.body.properties?.["storageQoSPolicies"].map((p) => {
                  return {
                    name: p["name"],
                    id: p["id"],
                    iopsMaximum: p["iopsMaximum"],
                    iopsMinimum: p["iopsMinimum"],
                    bandwidthLimit: p["bandwidthLimit"],
                    policyId: p["policyId"],
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

/** Onboards the ScVmm fabric cloud as an Azure cloud resource. */
export function cloudsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  resource: Cloud,
  options: CloudsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Cloud>, Cloud> {
  return getLongRunningPoller(context, _cloudsCreateOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _cloudsCreateOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudResourceName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<Cloud>, Cloud>;
}

export function _cloudsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  properties: CloudTagsUpdate,
  options: CloudsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CloudsUpdate200Response
  | CloudsUpdate202Response
  | CloudsUpdateDefaultResponse
  | CloudsUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
      subscriptionId,
      resourceGroupName,
      cloudResourceName,
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

export async function _cloudsUpdateDeserialize(
  result:
    | CloudsUpdate200Response
    | CloudsUpdate202Response
    | CloudsUpdateDefaultResponse
    | CloudsUpdateLogicalResponse,
): Promise<Cloud> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const res = result as unknown as CloudsUpdateLogicalResponse;
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
          cloudName: res.body.properties?.["cloudName"],
          cloudCapacity: !res.body.properties?.cloudCapacity
            ? undefined
            : {
                cpuCount: res.body.properties?.cloudCapacity?.["cpuCount"],
                memoryMB: res.body.properties?.cloudCapacity?.["memoryMB"],
                vmCount: res.body.properties?.cloudCapacity?.["vmCount"],
              },
          storageQosPolicies:
            res.body.properties?.["storageQoSPolicies"] === undefined
              ? res.body.properties?.["storageQoSPolicies"]
              : res.body.properties?.["storageQoSPolicies"].map((p) => {
                  return {
                    name: p["name"],
                    id: p["id"],
                    iopsMaximum: p["iopsMaximum"],
                    iopsMinimum: p["iopsMinimum"],
                    bandwidthLimit: p["bandwidthLimit"],
                    policyId: p["policyId"],
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

/** Updates the Clouds resource. */
export function cloudsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  properties: CloudTagsUpdate,
  options: CloudsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Cloud>, Cloud> {
  return getLongRunningPoller(context, _cloudsUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _cloudsUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudResourceName,
        properties,
        options,
      ),
  }) as PollerLike<OperationState<Cloud>, Cloud>;
}

export function _cloudsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  options: CloudsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CloudsDelete202Response
  | CloudsDelete204Response
  | CloudsDeleteDefaultResponse
  | CloudsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
      subscriptionId,
      resourceGroupName,
      cloudResourceName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { force: options?.force },
    });
}

export async function _cloudsDeleteDeserialize(
  result:
    | CloudsDelete202Response
    | CloudsDelete204Response
    | CloudsDeleteDefaultResponse
    | CloudsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Deregisters the ScVmm fabric cloud from Azure. */
export function cloudsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudResourceName: string,
  options: CloudsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _cloudsDeleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _cloudsDeleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudResourceName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _cloudsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CloudsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CloudsListByResourceGroup200Response
  | CloudsListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudsListByResourceGroupDeserialize(
  result:
    | CloudsListByResourceGroup200Response
    | CloudsListByResourceGroupDefaultResponse,
): Promise<_CloudListResult> {
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
              cloudName: p.properties?.["cloudName"],
              cloudCapacity: !p.properties?.cloudCapacity
                ? undefined
                : {
                    cpuCount: p.properties?.cloudCapacity?.["cpuCount"],
                    memoryMB: p.properties?.cloudCapacity?.["memoryMB"],
                    vmCount: p.properties?.cloudCapacity?.["vmCount"],
                  },
              storageQosPolicies:
                p.properties?.["storageQoSPolicies"] === undefined
                  ? p.properties?.["storageQoSPolicies"]
                  : p.properties?.["storageQoSPolicies"].map((p) => {
                      return {
                        name: p["name"],
                        id: p["id"],
                        iopsMaximum: p["iopsMaximum"],
                        iopsMinimum: p["iopsMinimum"],
                        bandwidthLimit: p["bandwidthLimit"],
                        policyId: p["policyId"],
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

/** List of Clouds in a resource group. */
export function cloudsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CloudsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Cloud> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _cloudsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _cloudsListByResourceGroupDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _cloudsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: CloudsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  CloudsListBySubscription200Response | CloudsListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/clouds",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudsListBySubscriptionDeserialize(
  result:
    | CloudsListBySubscription200Response
    | CloudsListBySubscriptionDefaultResponse,
): Promise<_CloudListResult> {
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
              cloudName: p.properties?.["cloudName"],
              cloudCapacity: !p.properties?.cloudCapacity
                ? undefined
                : {
                    cpuCount: p.properties?.cloudCapacity?.["cpuCount"],
                    memoryMB: p.properties?.cloudCapacity?.["memoryMB"],
                    vmCount: p.properties?.cloudCapacity?.["vmCount"],
                  },
              storageQosPolicies:
                p.properties?.["storageQoSPolicies"] === undefined
                  ? p.properties?.["storageQoSPolicies"]
                  : p.properties?.["storageQoSPolicies"].map((p) => {
                      return {
                        name: p["name"],
                        id: p["id"],
                        iopsMaximum: p["iopsMaximum"],
                        iopsMinimum: p["iopsMinimum"],
                        bandwidthLimit: p["bandwidthLimit"],
                        policyId: p["policyId"],
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

/** List of Clouds in a subscription. */
export function cloudsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: CloudsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Cloud> {
  return buildPagedAsyncIterator(
    context,
    () => _cloudsListBySubscriptionSend(context, subscriptionId, options),
    _cloudsListBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
