// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  placementPolicyPropertiesUnionSerializer,
  placementPolicyUpdatePropertiesSerializer,
  PlacementPolicy,
  PlacementPolicyUpdate,
  _PlacementPoliciesList,
} from "../../models/models.js";
import { AVSContext as Client } from "../index.js";
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
  PlacementPoliciesListOptionalParams,
  PlacementPoliciesGetOptionalParams,
  PlacementPoliciesCreateOrUpdateOptionalParams,
  PlacementPoliciesUpdateOptionalParams,
  PlacementPoliciesDeleteOptionalParams,
} from "../../models/options.js";

export function _placementPoliciesListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: PlacementPoliciesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _placementPoliciesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_PlacementPoliciesList> {
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
              type: p.properties?.["type"],
              state: p.properties?.["state"],
              displayName: p.properties?.["displayName"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List PlacementPolicy resources by Cluster */
export function placementPoliciesList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  options: PlacementPoliciesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<PlacementPolicy> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _placementPoliciesListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
    _placementPoliciesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _placementPoliciesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  options: PlacementPoliciesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      placementPolicyName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _placementPoliciesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<PlacementPolicy> {
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
          type: result.body.properties?.["type"],
          state: result.body.properties?.["state"],
          displayName: result.body.properties?.["displayName"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a PlacementPolicy */
export async function placementPoliciesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  options: PlacementPoliciesGetOptionalParams = { requestOptions: {} },
): Promise<PlacementPolicy> {
  const result = await _placementPoliciesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    clusterName,
    placementPolicyName,
    options,
  );
  return _placementPoliciesGetDeserialize(result);
}

export function _placementPoliciesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  placementPolicy: PlacementPolicy,
  options: PlacementPoliciesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      placementPolicyName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !placementPolicy.properties
          ? placementPolicy.properties
          : placementPolicyPropertiesUnionSerializer(
              placementPolicy.properties,
            ),
      },
    });
}

export async function _placementPoliciesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PlacementPolicy> {
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
          type: result.body.properties?.["type"],
          state: result.body.properties?.["state"],
          displayName: result.body.properties?.["displayName"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a PlacementPolicy */
export function placementPoliciesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  placementPolicy: PlacementPolicy,
  options: PlacementPoliciesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<PlacementPolicy>, PlacementPolicy> {
  return getLongRunningPoller(
    context,
    _placementPoliciesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _placementPoliciesCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          clusterName,
          placementPolicyName,
          placementPolicy,
          options,
        ),
    },
  ) as PollerLike<OperationState<PlacementPolicy>, PlacementPolicy>;
}

export function _placementPoliciesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  placementPolicyUpdate: PlacementPolicyUpdate,
  options: PlacementPoliciesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      placementPolicyName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !placementPolicyUpdate.properties
          ? placementPolicyUpdate.properties
          : placementPolicyUpdatePropertiesSerializer(
              placementPolicyUpdate.properties,
            ),
      },
    });
}

export async function _placementPoliciesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PlacementPolicy> {
  const expectedStatuses = ["200", "202"];
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
          type: result.body.properties?.["type"],
          state: result.body.properties?.["state"],
          displayName: result.body.properties?.["displayName"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Update a PlacementPolicy */
export async function placementPoliciesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  placementPolicyUpdate: PlacementPolicyUpdate,
  options: PlacementPoliciesUpdateOptionalParams = { requestOptions: {} },
): Promise<PlacementPolicy> {
  const result = await _placementPoliciesUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    clusterName,
    placementPolicyName,
    placementPolicyUpdate,
    options,
  );
  return _placementPoliciesUpdateDeserialize(result);
}

export function _placementPoliciesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  options: PlacementPoliciesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      clusterName,
      placementPolicyName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _placementPoliciesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a PlacementPolicy */
export function placementPoliciesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  clusterName: string,
  placementPolicyName: string,
  options: PlacementPoliciesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _placementPoliciesDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _placementPoliciesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          clusterName,
          placementPolicyName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}
