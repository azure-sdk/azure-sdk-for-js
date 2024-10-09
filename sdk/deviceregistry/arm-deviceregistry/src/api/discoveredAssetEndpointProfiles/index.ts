// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  discoveredAssetEndpointProfilePropertiesSerializer,
  extendedLocationSerializer,
  discoveredAssetEndpointProfileUpdatePropertiesSerializer,
  DiscoveredAssetEndpointProfile,
  DiscoveredAssetEndpointProfileUpdate,
  _DiscoveredAssetEndpointProfileListResult,
} from "../../models/models.js";
import { DeviceRegistryContext as Client } from "../index.js";
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
  DiscoveredAssetEndpointProfilesGetOptionalParams,
  DiscoveredAssetEndpointProfilesCreateOrReplaceOptionalParams,
  DiscoveredAssetEndpointProfilesUpdateOptionalParams,
  DiscoveredAssetEndpointProfilesDeleteOptionalParams,
  DiscoveredAssetEndpointProfilesListByResourceGroupOptionalParams,
  DiscoveredAssetEndpointProfilesListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _discoveredAssetEndpointProfilesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  discoveredAssetEndpointProfileName: string,
  options: DiscoveredAssetEndpointProfilesGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/discoveredAssetEndpointProfiles/{discoveredAssetEndpointProfileName}",
      subscriptionId,
      resourceGroupName,
      discoveredAssetEndpointProfileName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _discoveredAssetEndpointProfilesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DiscoveredAssetEndpointProfile> {
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
          targetAddress: result.body.properties?.["targetAddress"],
          additionalConfiguration:
            result.body.properties?.["additionalConfiguration"],
          supportedAuthenticationMethods:
            result.body.properties?.["supportedAuthenticationMethods"],
          endpointProfileType: result.body.properties?.["endpointProfileType"],
          discoveryId: result.body.properties?.["discoveryId"],
          version: result.body.properties?.["version"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Get a DiscoveredAssetEndpointProfile */
export async function discoveredAssetEndpointProfilesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  discoveredAssetEndpointProfileName: string,
  options: DiscoveredAssetEndpointProfilesGetOptionalParams = {
    requestOptions: {},
  },
): Promise<DiscoveredAssetEndpointProfile> {
  const result = await _discoveredAssetEndpointProfilesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    discoveredAssetEndpointProfileName,
    options,
  );
  return _discoveredAssetEndpointProfilesGetDeserialize(result);
}

export function _discoveredAssetEndpointProfilesCreateOrReplaceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  discoveredAssetEndpointProfileName: string,
  resource: DiscoveredAssetEndpointProfile,
  options: DiscoveredAssetEndpointProfilesCreateOrReplaceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/discoveredAssetEndpointProfiles/{discoveredAssetEndpointProfileName}",
      subscriptionId,
      resourceGroupName,
      discoveredAssetEndpointProfileName,
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
          : discoveredAssetEndpointProfilePropertiesSerializer(
              resource.properties,
            ),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _discoveredAssetEndpointProfilesCreateOrReplaceDeserialize(
  result: PathUncheckedResponse,
): Promise<DiscoveredAssetEndpointProfile> {
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
          targetAddress: result.body.properties?.["targetAddress"],
          additionalConfiguration:
            result.body.properties?.["additionalConfiguration"],
          supportedAuthenticationMethods:
            result.body.properties?.["supportedAuthenticationMethods"],
          endpointProfileType: result.body.properties?.["endpointProfileType"],
          discoveryId: result.body.properties?.["discoveryId"],
          version: result.body.properties?.["version"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Create a DiscoveredAssetEndpointProfile */
export function discoveredAssetEndpointProfilesCreateOrReplace(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  discoveredAssetEndpointProfileName: string,
  resource: DiscoveredAssetEndpointProfile,
  options: DiscoveredAssetEndpointProfilesCreateOrReplaceOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<DiscoveredAssetEndpointProfile>,
  DiscoveredAssetEndpointProfile
> {
  return getLongRunningPoller(
    context,
    _discoveredAssetEndpointProfilesCreateOrReplaceDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _discoveredAssetEndpointProfilesCreateOrReplaceSend(
          context,
          subscriptionId,
          resourceGroupName,
          discoveredAssetEndpointProfileName,
          resource,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<DiscoveredAssetEndpointProfile>,
    DiscoveredAssetEndpointProfile
  >;
}

export function _discoveredAssetEndpointProfilesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  discoveredAssetEndpointProfileName: string,
  properties: DiscoveredAssetEndpointProfileUpdate,
  options: DiscoveredAssetEndpointProfilesUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/discoveredAssetEndpointProfiles/{discoveredAssetEndpointProfileName}",
      subscriptionId,
      resourceGroupName,
      discoveredAssetEndpointProfileName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : discoveredAssetEndpointProfileUpdatePropertiesSerializer(
              properties.properties,
            ),
      },
    });
}

export async function _discoveredAssetEndpointProfilesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DiscoveredAssetEndpointProfile> {
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
          targetAddress: result.body.properties?.["targetAddress"],
          additionalConfiguration:
            result.body.properties?.["additionalConfiguration"],
          supportedAuthenticationMethods:
            result.body.properties?.["supportedAuthenticationMethods"],
          endpointProfileType: result.body.properties?.["endpointProfileType"],
          discoveryId: result.body.properties?.["discoveryId"],
          version: result.body.properties?.["version"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Update a DiscoveredAssetEndpointProfile */
export function discoveredAssetEndpointProfilesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  discoveredAssetEndpointProfileName: string,
  properties: DiscoveredAssetEndpointProfileUpdate,
  options: DiscoveredAssetEndpointProfilesUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<DiscoveredAssetEndpointProfile>,
  DiscoveredAssetEndpointProfile
> {
  return getLongRunningPoller(
    context,
    _discoveredAssetEndpointProfilesUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _discoveredAssetEndpointProfilesUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          discoveredAssetEndpointProfileName,
          properties,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<DiscoveredAssetEndpointProfile>,
    DiscoveredAssetEndpointProfile
  >;
}

export function _discoveredAssetEndpointProfilesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  discoveredAssetEndpointProfileName: string,
  options: DiscoveredAssetEndpointProfilesDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/discoveredAssetEndpointProfiles/{discoveredAssetEndpointProfileName}",
      subscriptionId,
      resourceGroupName,
      discoveredAssetEndpointProfileName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _discoveredAssetEndpointProfilesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a DiscoveredAssetEndpointProfile */
export function discoveredAssetEndpointProfilesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  discoveredAssetEndpointProfileName: string,
  options: DiscoveredAssetEndpointProfilesDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _discoveredAssetEndpointProfilesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _discoveredAssetEndpointProfilesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          discoveredAssetEndpointProfileName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _discoveredAssetEndpointProfilesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: DiscoveredAssetEndpointProfilesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/discoveredAssetEndpointProfiles",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _discoveredAssetEndpointProfilesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_DiscoveredAssetEndpointProfileListResult> {
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
              targetAddress: p.properties?.["targetAddress"],
              additionalConfiguration:
                p.properties?.["additionalConfiguration"],
              supportedAuthenticationMethods:
                p.properties?.["supportedAuthenticationMethods"],
              endpointProfileType: p.properties?.["endpointProfileType"],
              discoveryId: p.properties?.["discoveryId"],
              version: p.properties?.["version"],
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

/** List DiscoveredAssetEndpointProfile resources by resource group */
export function discoveredAssetEndpointProfilesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: DiscoveredAssetEndpointProfilesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DiscoveredAssetEndpointProfile> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _discoveredAssetEndpointProfilesListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _discoveredAssetEndpointProfilesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _discoveredAssetEndpointProfilesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: DiscoveredAssetEndpointProfilesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/discoveredAssetEndpointProfiles",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _discoveredAssetEndpointProfilesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_DiscoveredAssetEndpointProfileListResult> {
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
              targetAddress: p.properties?.["targetAddress"],
              additionalConfiguration:
                p.properties?.["additionalConfiguration"],
              supportedAuthenticationMethods:
                p.properties?.["supportedAuthenticationMethods"],
              endpointProfileType: p.properties?.["endpointProfileType"],
              discoveryId: p.properties?.["discoveryId"],
              version: p.properties?.["version"],
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

/** List DiscoveredAssetEndpointProfile resources by subscription ID */
export function discoveredAssetEndpointProfilesListBySubscription(
  context: Client,
  subscriptionId: string,
  options: DiscoveredAssetEndpointProfilesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DiscoveredAssetEndpointProfile> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _discoveredAssetEndpointProfilesListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _discoveredAssetEndpointProfilesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
