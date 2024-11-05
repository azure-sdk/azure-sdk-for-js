// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  frontendPropertiesSerializer,
  Frontend,
  FrontendUpdate,
  _FrontendListResult,
} from "../../models/models.js";
import { ServiceNetworkingContext as Client } from "../index.js";
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
  FrontendsInterfaceGetOptionalParams,
  FrontendsInterfaceCreateOrUpdateOptionalParams,
  FrontendsInterfaceUpdateOptionalParams,
  FrontendsInterfaceDeleteOptionalParams,
  FrontendsInterfaceListByTrafficControllerOptionalParams,
} from "../../models/options.js";

export function _frontendsInterfaceGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  frontendName: string,
  options: FrontendsInterfaceGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
      frontendName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _frontendsInterfaceGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Frontend> {
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
          fqdn: result.body.properties?.["fqdn"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a Frontend */
export async function frontendsInterfaceGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  frontendName: string,
  options: FrontendsInterfaceGetOptionalParams = { requestOptions: {} },
): Promise<Frontend> {
  const result = await _frontendsInterfaceGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    trafficControllerName,
    frontendName,
    options,
  );
  return _frontendsInterfaceGetDeserialize(result);
}

export function _frontendsInterfaceCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  frontendName: string,
  resource: Frontend,
  options: FrontendsInterfaceCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
      frontendName,
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
          : frontendPropertiesSerializer(resource.properties),
      },
    });
}

export async function _frontendsInterfaceCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Frontend> {
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
          fqdn: result.body.properties?.["fqdn"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a Frontend */
export function frontendsInterfaceCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  frontendName: string,
  resource: Frontend,
  options: FrontendsInterfaceCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<Frontend>, Frontend> {
  return getLongRunningPoller(
    context,
    _frontendsInterfaceCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _frontendsInterfaceCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          trafficControllerName,
          frontendName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<Frontend>, Frontend>;
}

export function _frontendsInterfaceUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  frontendName: string,
  properties: FrontendUpdate,
  options: FrontendsInterfaceUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
      frontendName,
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

export async function _frontendsInterfaceUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Frontend> {
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
          fqdn: result.body.properties?.["fqdn"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Update a Frontend */
export async function frontendsInterfaceUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  frontendName: string,
  properties: FrontendUpdate,
  options: FrontendsInterfaceUpdateOptionalParams = { requestOptions: {} },
): Promise<Frontend> {
  const result = await _frontendsInterfaceUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    trafficControllerName,
    frontendName,
    properties,
    options,
  );
  return _frontendsInterfaceUpdateDeserialize(result);
}

export function _frontendsInterfaceDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  frontendName: string,
  options: FrontendsInterfaceDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
      frontendName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _frontendsInterfaceDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Frontend */
export function frontendsInterfaceDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  frontendName: string,
  options: FrontendsInterfaceDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _frontendsInterfaceDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _frontendsInterfaceDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          trafficControllerName,
          frontendName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _frontendsInterfaceListByTrafficControllerSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  options: FrontendsInterfaceListByTrafficControllerOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _frontendsInterfaceListByTrafficControllerDeserialize(
  result: PathUncheckedResponse,
): Promise<_FrontendListResult> {
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
              fqdn: p.properties?.["fqdn"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Frontend resources by TrafficController */
export function frontendsInterfaceListByTrafficController(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  options: FrontendsInterfaceListByTrafficControllerOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<Frontend> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _frontendsInterfaceListByTrafficControllerSend(
        context,
        subscriptionId,
        resourceGroupName,
        trafficControllerName,
        options,
      ),
    _frontendsInterfaceListByTrafficControllerDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
