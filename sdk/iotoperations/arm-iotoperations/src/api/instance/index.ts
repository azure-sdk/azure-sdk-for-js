// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  extendedLocationSerializer,
  instancePropertiesSerializer,
  managedServiceIdentitySerializer,
  InstanceResource,
  InstancePatchModel,
  _InstanceResourceListResult,
} from "../../models/models.js";
import { IoTOperationsContext as Client } from "../index.js";
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
  InstanceGetOptionalParams,
  InstanceCreateOrUpdateOptionalParams,
  InstanceUpdateOptionalParams,
  InstanceDeleteOptionalParams,
  InstanceListByResourceGroupOptionalParams,
  InstanceListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _instanceGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  options: InstanceGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _instanceGetDeserialize(
  result: PathUncheckedResponse,
): Promise<InstanceResource> {
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
          description: result.body.properties?.["description"],
          provisioningState: result.body.properties?.["provisioningState"],
          version: result.body.properties?.["version"],
          schemaRegistryRef: {
            resourceId: result.body.properties?.schemaRegistryRef["resourceId"],
          },
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
}

/** Get a InstanceResource */
export async function instanceGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  options: InstanceGetOptionalParams = { requestOptions: {} },
): Promise<InstanceResource> {
  const result = await _instanceGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    instanceName,
    options,
  );
  return _instanceGetDeserialize(result);
}

export function _instanceCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  resource: InstanceResource,
  options: InstanceCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
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
          : instancePropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
        identity: !resource.identity
          ? resource.identity
          : managedServiceIdentitySerializer(resource.identity),
      },
    });
}

export async function _instanceCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<InstanceResource> {
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
          description: result.body.properties?.["description"],
          provisioningState: result.body.properties?.["provisioningState"],
          version: result.body.properties?.["version"],
          schemaRegistryRef: {
            resourceId: result.body.properties?.schemaRegistryRef["resourceId"],
          },
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
}

/** Create a InstanceResource */
export function instanceCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  resource: InstanceResource,
  options: InstanceCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<InstanceResource>, InstanceResource> {
  return getLongRunningPoller(
    context,
    _instanceCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _instanceCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<InstanceResource>, InstanceResource>;
}

export function _instanceUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  properties: InstancePatchModel,
  options: InstanceUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        identity: !properties.identity
          ? properties.identity
          : managedServiceIdentitySerializer(properties.identity),
      },
    });
}

export async function _instanceUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<InstanceResource> {
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
          description: result.body.properties?.["description"],
          provisioningState: result.body.properties?.["provisioningState"],
          version: result.body.properties?.["version"],
          schemaRegistryRef: {
            resourceId: result.body.properties?.schemaRegistryRef["resourceId"],
          },
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
}

/** Update a InstanceResource */
export async function instanceUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  properties: InstancePatchModel,
  options: InstanceUpdateOptionalParams = { requestOptions: {} },
): Promise<InstanceResource> {
  const result = await _instanceUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    instanceName,
    properties,
    options,
  );
  return _instanceUpdateDeserialize(result);
}

export function _instanceDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  options: InstanceDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _instanceDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a InstanceResource */
export function instanceDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  options: InstanceDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _instanceDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _instanceDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _instanceListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: InstanceListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _instanceListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_InstanceResourceListResult> {
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
              description: p.properties?.["description"],
              provisioningState: p.properties?.["provisioningState"],
              version: p.properties?.["version"],
              schemaRegistryRef: {
                resourceId: p.properties?.schemaRegistryRef["resourceId"],
              },
            },
        extendedLocation: {
          name: p.extendedLocation["name"],
          type: p.extendedLocation["type"],
        },
        identity: !p.identity
          ? undefined
          : {
              principalId: p.identity?.["principalId"],
              tenantId: p.identity?.["tenantId"],
              type: p.identity?.["type"],
              userAssignedIdentities: p.identity?.["userAssignedIdentities"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List InstanceResource resources by resource group */
export function instanceListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: InstanceListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<InstanceResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _instanceListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _instanceListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _instanceListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: InstanceListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.IoTOperations/instances",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _instanceListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_InstanceResourceListResult> {
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
              description: p.properties?.["description"],
              provisioningState: p.properties?.["provisioningState"],
              version: p.properties?.["version"],
              schemaRegistryRef: {
                resourceId: p.properties?.schemaRegistryRef["resourceId"],
              },
            },
        extendedLocation: {
          name: p.extendedLocation["name"],
          type: p.extendedLocation["type"],
        },
        identity: !p.identity
          ? undefined
          : {
              principalId: p.identity?.["principalId"],
              tenantId: p.identity?.["tenantId"],
              type: p.identity?.["type"],
              userAssignedIdentities: p.identity?.["userAssignedIdentities"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List InstanceResource resources by subscription ID */
export function instanceListBySubscription(
  context: Client,
  subscriptionId: string,
  options: InstanceListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<InstanceResource> {
  return buildPagedAsyncIterator(
    context,
    () => _instanceListBySubscriptionSend(context, subscriptionId, options),
    _instanceListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
