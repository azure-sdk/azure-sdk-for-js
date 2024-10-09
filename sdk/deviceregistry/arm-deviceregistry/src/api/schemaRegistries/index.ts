// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  schemaRegistryPropertiesSerializer,
  systemAssignedServiceIdentitySerializer,
  schemaRegistryUpdatePropertiesSerializer,
  SchemaRegistry,
  SchemaRegistryUpdate,
  _SchemaRegistryListResult,
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
  SchemaRegistriesGetOptionalParams,
  SchemaRegistriesCreateOrReplaceOptionalParams,
  SchemaRegistriesUpdateOptionalParams,
  SchemaRegistriesDeleteOptionalParams,
  SchemaRegistriesListByResourceGroupOptionalParams,
  SchemaRegistriesListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _schemaRegistriesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  options: SchemaRegistriesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}",
      subscriptionId,
      resourceGroupName,
      schemaRegistryName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _schemaRegistriesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SchemaRegistry> {
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
          uuid: result.body.properties?.["uuid"],
          namespace: result.body.properties?.["namespace"],
          displayName: result.body.properties?.["displayName"],
          description: result.body.properties?.["description"],
          storageAccountContainerUrl:
            result.body.properties?.["storageAccountContainerUrl"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
        },
  };
}

/** Get a SchemaRegistry */
export async function schemaRegistriesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  options: SchemaRegistriesGetOptionalParams = { requestOptions: {} },
): Promise<SchemaRegistry> {
  const result = await _schemaRegistriesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    schemaRegistryName,
    options,
  );
  return _schemaRegistriesGetDeserialize(result);
}

export function _schemaRegistriesCreateOrReplaceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  resource: SchemaRegistry,
  options: SchemaRegistriesCreateOrReplaceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}",
      subscriptionId,
      resourceGroupName,
      schemaRegistryName,
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
          : schemaRegistryPropertiesSerializer(resource.properties),
        identity: !resource.identity
          ? resource.identity
          : systemAssignedServiceIdentitySerializer(resource.identity),
      },
    });
}

export async function _schemaRegistriesCreateOrReplaceDeserialize(
  result: PathUncheckedResponse,
): Promise<SchemaRegistry> {
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
          uuid: result.body.properties?.["uuid"],
          namespace: result.body.properties?.["namespace"],
          displayName: result.body.properties?.["displayName"],
          description: result.body.properties?.["description"],
          storageAccountContainerUrl:
            result.body.properties?.["storageAccountContainerUrl"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
        },
  };
}

/** Create a SchemaRegistry */
export function schemaRegistriesCreateOrReplace(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  resource: SchemaRegistry,
  options: SchemaRegistriesCreateOrReplaceOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<SchemaRegistry>, SchemaRegistry> {
  return getLongRunningPoller(
    context,
    _schemaRegistriesCreateOrReplaceDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _schemaRegistriesCreateOrReplaceSend(
          context,
          subscriptionId,
          resourceGroupName,
          schemaRegistryName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<SchemaRegistry>, SchemaRegistry>;
}

export function _schemaRegistriesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  properties: SchemaRegistryUpdate,
  options: SchemaRegistriesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}",
      subscriptionId,
      resourceGroupName,
      schemaRegistryName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        identity: !properties.identity
          ? properties.identity
          : systemAssignedServiceIdentitySerializer(properties.identity),
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : schemaRegistryUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _schemaRegistriesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SchemaRegistry> {
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
          uuid: result.body.properties?.["uuid"],
          namespace: result.body.properties?.["namespace"],
          displayName: result.body.properties?.["displayName"],
          description: result.body.properties?.["description"],
          storageAccountContainerUrl:
            result.body.properties?.["storageAccountContainerUrl"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
        },
  };
}

/** Update a SchemaRegistry */
export function schemaRegistriesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  properties: SchemaRegistryUpdate,
  options: SchemaRegistriesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SchemaRegistry>, SchemaRegistry> {
  return getLongRunningPoller(
    context,
    _schemaRegistriesUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _schemaRegistriesUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          schemaRegistryName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<SchemaRegistry>, SchemaRegistry>;
}

export function _schemaRegistriesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  options: SchemaRegistriesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}",
      subscriptionId,
      resourceGroupName,
      schemaRegistryName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _schemaRegistriesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a SchemaRegistry */
export function schemaRegistriesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  schemaRegistryName: string,
  options: SchemaRegistriesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _schemaRegistriesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _schemaRegistriesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          schemaRegistryName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _schemaRegistriesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SchemaRegistriesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _schemaRegistriesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_SchemaRegistryListResult> {
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
              uuid: p.properties?.["uuid"],
              namespace: p.properties?.["namespace"],
              displayName: p.properties?.["displayName"],
              description: p.properties?.["description"],
              storageAccountContainerUrl:
                p.properties?.["storageAccountContainerUrl"],
              provisioningState: p.properties?.["provisioningState"],
            },
        identity: !p.identity
          ? undefined
          : {
              principalId: p.identity?.["principalId"],
              tenantId: p.identity?.["tenantId"],
              type: p.identity?.["type"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List SchemaRegistry resources by resource group */
export function schemaRegistriesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SchemaRegistriesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SchemaRegistry> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _schemaRegistriesListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _schemaRegistriesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _schemaRegistriesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: SchemaRegistriesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/schemaRegistries",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _schemaRegistriesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_SchemaRegistryListResult> {
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
              uuid: p.properties?.["uuid"],
              namespace: p.properties?.["namespace"],
              displayName: p.properties?.["displayName"],
              description: p.properties?.["description"],
              storageAccountContainerUrl:
                p.properties?.["storageAccountContainerUrl"],
              provisioningState: p.properties?.["provisioningState"],
            },
        identity: !p.identity
          ? undefined
          : {
              principalId: p.identity?.["principalId"],
              tenantId: p.identity?.["tenantId"],
              type: p.identity?.["type"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List SchemaRegistry resources by subscription ID */
export function schemaRegistriesListBySubscription(
  context: Client,
  subscriptionId: string,
  options: SchemaRegistriesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SchemaRegistry> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _schemaRegistriesListBySubscriptionSend(context, subscriptionId, options),
    _schemaRegistriesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
