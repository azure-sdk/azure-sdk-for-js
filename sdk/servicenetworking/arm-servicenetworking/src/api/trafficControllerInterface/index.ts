// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  trafficControllerPropertiesSerializer,
  trafficControllerUpdatePropertiesSerializer,
  TrafficController,
  TrafficControllerUpdate,
  _TrafficControllerListResult,
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
  TrafficControllerInterfaceGetOptionalParams,
  TrafficControllerInterfaceCreateOrUpdateOptionalParams,
  TrafficControllerInterfaceUpdateOptionalParams,
  TrafficControllerInterfaceDeleteOptionalParams,
  TrafficControllerInterfaceListByResourceGroupOptionalParams,
  TrafficControllerInterfaceListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _trafficControllerInterfaceGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  options: TrafficControllerInterfaceGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _trafficControllerInterfaceGetDeserialize(
  result: PathUncheckedResponse,
): Promise<TrafficController> {
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
          configurationEndpoints:
            result.body.properties?.["configurationEndpoints"],
          frontends:
            result.body.properties?.["frontends"] === undefined
              ? result.body.properties?.["frontends"]
              : result.body.properties?.["frontends"].map((p: any) => {
                  return { id: p["id"] };
                }),
          associations:
            result.body.properties?.["associations"] === undefined
              ? result.body.properties?.["associations"]
              : result.body.properties?.["associations"].map((p: any) => {
                  return { id: p["id"] };
                }),
          securityPolicies:
            result.body.properties?.["securityPolicies"] === undefined
              ? result.body.properties?.["securityPolicies"]
              : result.body.properties?.["securityPolicies"].map((p: any) => {
                  return { id: p["id"] };
                }),
          securityPolicyConfigurations: !result.body.properties
            ?.securityPolicyConfigurations
            ? undefined
            : {
                wafSecurityPolicy: !result.body.properties
                  ?.securityPolicyConfigurations?.wafSecurityPolicy
                  ? undefined
                  : {
                      id: result.body.properties?.securityPolicyConfigurations
                        ?.wafSecurityPolicy?.["id"],
                    },
              },
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a TrafficController */
export async function trafficControllerInterfaceGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  options: TrafficControllerInterfaceGetOptionalParams = { requestOptions: {} },
): Promise<TrafficController> {
  const result = await _trafficControllerInterfaceGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    trafficControllerName,
    options,
  );
  return _trafficControllerInterfaceGetDeserialize(result);
}

export function _trafficControllerInterfaceCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  resource: TrafficController,
  options: TrafficControllerInterfaceCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
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
          : trafficControllerPropertiesSerializer(resource.properties),
      },
    });
}

export async function _trafficControllerInterfaceCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<TrafficController> {
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
          configurationEndpoints:
            result.body.properties?.["configurationEndpoints"],
          frontends:
            result.body.properties?.["frontends"] === undefined
              ? result.body.properties?.["frontends"]
              : result.body.properties?.["frontends"].map((p: any) => {
                  return { id: p["id"] };
                }),
          associations:
            result.body.properties?.["associations"] === undefined
              ? result.body.properties?.["associations"]
              : result.body.properties?.["associations"].map((p: any) => {
                  return { id: p["id"] };
                }),
          securityPolicies:
            result.body.properties?.["securityPolicies"] === undefined
              ? result.body.properties?.["securityPolicies"]
              : result.body.properties?.["securityPolicies"].map((p: any) => {
                  return { id: p["id"] };
                }),
          securityPolicyConfigurations: !result.body.properties
            ?.securityPolicyConfigurations
            ? undefined
            : {
                wafSecurityPolicy: !result.body.properties
                  ?.securityPolicyConfigurations?.wafSecurityPolicy
                  ? undefined
                  : {
                      id: result.body.properties?.securityPolicyConfigurations
                        ?.wafSecurityPolicy?.["id"],
                    },
              },
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a TrafficController */
export function trafficControllerInterfaceCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  resource: TrafficController,
  options: TrafficControllerInterfaceCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<TrafficController>, TrafficController> {
  return getLongRunningPoller(
    context,
    _trafficControllerInterfaceCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _trafficControllerInterfaceCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          trafficControllerName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<TrafficController>, TrafficController>;
}

export function _trafficControllerInterfaceUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  properties: TrafficControllerUpdate,
  options: TrafficControllerInterfaceUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : trafficControllerUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _trafficControllerInterfaceUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<TrafficController> {
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
          configurationEndpoints:
            result.body.properties?.["configurationEndpoints"],
          frontends:
            result.body.properties?.["frontends"] === undefined
              ? result.body.properties?.["frontends"]
              : result.body.properties?.["frontends"].map((p: any) => {
                  return { id: p["id"] };
                }),
          associations:
            result.body.properties?.["associations"] === undefined
              ? result.body.properties?.["associations"]
              : result.body.properties?.["associations"].map((p: any) => {
                  return { id: p["id"] };
                }),
          securityPolicies:
            result.body.properties?.["securityPolicies"] === undefined
              ? result.body.properties?.["securityPolicies"]
              : result.body.properties?.["securityPolicies"].map((p: any) => {
                  return { id: p["id"] };
                }),
          securityPolicyConfigurations: !result.body.properties
            ?.securityPolicyConfigurations
            ? undefined
            : {
                wafSecurityPolicy: !result.body.properties
                  ?.securityPolicyConfigurations?.wafSecurityPolicy
                  ? undefined
                  : {
                      id: result.body.properties?.securityPolicyConfigurations
                        ?.wafSecurityPolicy?.["id"],
                    },
              },
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Update a TrafficController */
export async function trafficControllerInterfaceUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  properties: TrafficControllerUpdate,
  options: TrafficControllerInterfaceUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<TrafficController> {
  const result = await _trafficControllerInterfaceUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    trafficControllerName,
    properties,
    options,
  );
  return _trafficControllerInterfaceUpdateDeserialize(result);
}

export function _trafficControllerInterfaceDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  options: TrafficControllerInterfaceDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}",
      subscriptionId,
      resourceGroupName,
      trafficControllerName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _trafficControllerInterfaceDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a TrafficController */
export function trafficControllerInterfaceDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  trafficControllerName: string,
  options: TrafficControllerInterfaceDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _trafficControllerInterfaceDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _trafficControllerInterfaceDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          trafficControllerName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _trafficControllerInterfaceListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: TrafficControllerInterfaceListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _trafficControllerInterfaceListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_TrafficControllerListResult> {
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
              configurationEndpoints: p.properties?.["configurationEndpoints"],
              frontends:
                p.properties?.["frontends"] === undefined
                  ? p.properties?.["frontends"]
                  : p.properties?.["frontends"].map((p: any) => {
                      return { id: p["id"] };
                    }),
              associations:
                p.properties?.["associations"] === undefined
                  ? p.properties?.["associations"]
                  : p.properties?.["associations"].map((p: any) => {
                      return { id: p["id"] };
                    }),
              securityPolicies:
                p.properties?.["securityPolicies"] === undefined
                  ? p.properties?.["securityPolicies"]
                  : p.properties?.["securityPolicies"].map((p: any) => {
                      return { id: p["id"] };
                    }),
              securityPolicyConfigurations: !p.properties
                ?.securityPolicyConfigurations
                ? undefined
                : {
                    wafSecurityPolicy: !p.properties
                      ?.securityPolicyConfigurations?.wafSecurityPolicy
                      ? undefined
                      : {
                          id: p.properties?.securityPolicyConfigurations
                            ?.wafSecurityPolicy?.["id"],
                        },
                  },
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List TrafficController resources by resource group */
export function trafficControllerInterfaceListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: TrafficControllerInterfaceListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<TrafficController> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _trafficControllerInterfaceListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _trafficControllerInterfaceListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _trafficControllerInterfaceListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: TrafficControllerInterfaceListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceNetworking/trafficControllers",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _trafficControllerInterfaceListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_TrafficControllerListResult> {
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
              configurationEndpoints: p.properties?.["configurationEndpoints"],
              frontends:
                p.properties?.["frontends"] === undefined
                  ? p.properties?.["frontends"]
                  : p.properties?.["frontends"].map((p: any) => {
                      return { id: p["id"] };
                    }),
              associations:
                p.properties?.["associations"] === undefined
                  ? p.properties?.["associations"]
                  : p.properties?.["associations"].map((p: any) => {
                      return { id: p["id"] };
                    }),
              securityPolicies:
                p.properties?.["securityPolicies"] === undefined
                  ? p.properties?.["securityPolicies"]
                  : p.properties?.["securityPolicies"].map((p: any) => {
                      return { id: p["id"] };
                    }),
              securityPolicyConfigurations: !p.properties
                ?.securityPolicyConfigurations
                ? undefined
                : {
                    wafSecurityPolicy: !p.properties
                      ?.securityPolicyConfigurations?.wafSecurityPolicy
                      ? undefined
                      : {
                          id: p.properties?.securityPolicyConfigurations
                            ?.wafSecurityPolicy?.["id"],
                        },
                  },
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List TrafficController resources by subscription ID */
export function trafficControllerInterfaceListBySubscription(
  context: Client,
  subscriptionId: string,
  options: TrafficControllerInterfaceListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<TrafficController> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _trafficControllerInterfaceListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _trafficControllerInterfaceListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
