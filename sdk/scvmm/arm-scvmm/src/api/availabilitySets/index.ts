// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  extendedLocationSerializer,
  availabilitySetPropertiesSerializer,
  AvailabilitySet,
  AvailabilitySetTagsUpdate,
  _AvailabilitySetListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  AvailabilitySetsCreateOrUpdate200Response,
  AvailabilitySetsCreateOrUpdate201Response,
  AvailabilitySetsCreateOrUpdateDefaultResponse,
  AvailabilitySetsCreateOrUpdateLogicalResponse,
  AvailabilitySetsDelete202Response,
  AvailabilitySetsDelete204Response,
  AvailabilitySetsDeleteDefaultResponse,
  AvailabilitySetsDeleteLogicalResponse,
  AvailabilitySetsGet200Response,
  AvailabilitySetsGetDefaultResponse,
  AvailabilitySetsListByResourceGroup200Response,
  AvailabilitySetsListByResourceGroupDefaultResponse,
  AvailabilitySetsListBySubscription200Response,
  AvailabilitySetsListBySubscriptionDefaultResponse,
  AvailabilitySetsUpdate200Response,
  AvailabilitySetsUpdate202Response,
  AvailabilitySetsUpdateDefaultResponse,
  AvailabilitySetsUpdateLogicalResponse,
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
  AvailabilitySetsGetOptionalParams,
  AvailabilitySetsCreateOrUpdateOptionalParams,
  AvailabilitySetsUpdateOptionalParams,
  AvailabilitySetsDeleteOptionalParams,
  AvailabilitySetsListByResourceGroupOptionalParams,
  AvailabilitySetsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _availabilitySetsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  options: AvailabilitySetsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  AvailabilitySetsGet200Response | AvailabilitySetsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}",
      subscriptionId,
      resourceGroupName,
      availabilitySetResourceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _availabilitySetsGetDeserialize(
  result: AvailabilitySetsGet200Response | AvailabilitySetsGetDefaultResponse,
): Promise<AvailabilitySet> {
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
          availabilitySetName: result.body.properties?.["availabilitySetName"],
          vmmServerId: result.body.properties?.["vmmServerId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Implements AvailabilitySet GET method. */
export async function availabilitySetsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  options: AvailabilitySetsGetOptionalParams = { requestOptions: {} },
): Promise<AvailabilitySet> {
  const result = await _availabilitySetsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    availabilitySetResourceName,
    options,
  );
  return _availabilitySetsGetDeserialize(result);
}

export function _availabilitySetsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  resource: AvailabilitySet,
  options: AvailabilitySetsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AvailabilitySetsCreateOrUpdate200Response
  | AvailabilitySetsCreateOrUpdate201Response
  | AvailabilitySetsCreateOrUpdateDefaultResponse
  | AvailabilitySetsCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}",
      subscriptionId,
      resourceGroupName,
      availabilitySetResourceName,
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
          : availabilitySetPropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _availabilitySetsCreateOrUpdateDeserialize(
  result:
    | AvailabilitySetsCreateOrUpdate200Response
    | AvailabilitySetsCreateOrUpdate201Response
    | AvailabilitySetsCreateOrUpdateDefaultResponse
    | AvailabilitySetsCreateOrUpdateLogicalResponse,
): Promise<AvailabilitySet> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const res =
    result as unknown as AvailabilitySetsCreateOrUpdateLogicalResponse;
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
          availabilitySetName: res.body.properties?.["availabilitySetName"],
          vmmServerId: res.body.properties?.["vmmServerId"],
          provisioningState: res.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: res.body.extendedLocation["type"],
      name: res.body.extendedLocation["name"],
    },
  };
}

/** Onboards the ScVmm availability set as an Azure resource. */
export function availabilitySetsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  resource: AvailabilitySet,
  options: AvailabilitySetsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<AvailabilitySet>, AvailabilitySet> {
  return getLongRunningPoller(
    context,
    _availabilitySetsCreateOrUpdateDeserialize,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _availabilitySetsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          availabilitySetResourceName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<AvailabilitySet>, AvailabilitySet>;
}

export function _availabilitySetsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  properties: AvailabilitySetTagsUpdate,
  options: AvailabilitySetsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AvailabilitySetsUpdate200Response
  | AvailabilitySetsUpdate202Response
  | AvailabilitySetsUpdateDefaultResponse
  | AvailabilitySetsUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}",
      subscriptionId,
      resourceGroupName,
      availabilitySetResourceName,
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

export async function _availabilitySetsUpdateDeserialize(
  result:
    | AvailabilitySetsUpdate200Response
    | AvailabilitySetsUpdate202Response
    | AvailabilitySetsUpdateDefaultResponse
    | AvailabilitySetsUpdateLogicalResponse,
): Promise<AvailabilitySet> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const res = result as unknown as AvailabilitySetsUpdateLogicalResponse;
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
          availabilitySetName: res.body.properties?.["availabilitySetName"],
          vmmServerId: res.body.properties?.["vmmServerId"],
          provisioningState: res.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: res.body.extendedLocation["type"],
      name: res.body.extendedLocation["name"],
    },
  };
}

/** Updates the AvailabilitySets resource. */
export function availabilitySetsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  properties: AvailabilitySetTagsUpdate,
  options: AvailabilitySetsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AvailabilitySet>, AvailabilitySet> {
  return getLongRunningPoller(context, _availabilitySetsUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _availabilitySetsUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        availabilitySetResourceName,
        properties,
        options,
      ),
  }) as PollerLike<OperationState<AvailabilitySet>, AvailabilitySet>;
}

export function _availabilitySetsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  options: AvailabilitySetsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AvailabilitySetsDelete202Response
  | AvailabilitySetsDelete204Response
  | AvailabilitySetsDeleteDefaultResponse
  | AvailabilitySetsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}",
      subscriptionId,
      resourceGroupName,
      availabilitySetResourceName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { force: options?.force },
    });
}

export async function _availabilitySetsDeleteDeserialize(
  result:
    | AvailabilitySetsDelete202Response
    | AvailabilitySetsDelete204Response
    | AvailabilitySetsDeleteDefaultResponse
    | AvailabilitySetsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Deregisters the ScVmm availability set from Azure. */
export function availabilitySetsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  availabilitySetResourceName: string,
  options: AvailabilitySetsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _availabilitySetsDeleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _availabilitySetsDeleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        availabilitySetResourceName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _availabilitySetsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AvailabilitySetsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AvailabilitySetsListByResourceGroup200Response
  | AvailabilitySetsListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _availabilitySetsListByResourceGroupDeserialize(
  result:
    | AvailabilitySetsListByResourceGroup200Response
    | AvailabilitySetsListByResourceGroupDefaultResponse,
): Promise<_AvailabilitySetListResult> {
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
              availabilitySetName: p.properties?.["availabilitySetName"],
              vmmServerId: p.properties?.["vmmServerId"],
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

/** List of AvailabilitySets in a resource group. */
export function availabilitySetsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AvailabilitySetsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AvailabilitySet> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _availabilitySetsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _availabilitySetsListByResourceGroupDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _availabilitySetsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: AvailabilitySetsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AvailabilitySetsListBySubscription200Response
  | AvailabilitySetsListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/availabilitySets",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _availabilitySetsListBySubscriptionDeserialize(
  result:
    | AvailabilitySetsListBySubscription200Response
    | AvailabilitySetsListBySubscriptionDefaultResponse,
): Promise<_AvailabilitySetListResult> {
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
              availabilitySetName: p.properties?.["availabilitySetName"],
              vmmServerId: p.properties?.["vmmServerId"],
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

/** List of AvailabilitySets in a subscription. */
export function availabilitySetsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: AvailabilitySetsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AvailabilitySet> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _availabilitySetsListBySubscriptionSend(context, subscriptionId, options),
    _availabilitySetsListBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
