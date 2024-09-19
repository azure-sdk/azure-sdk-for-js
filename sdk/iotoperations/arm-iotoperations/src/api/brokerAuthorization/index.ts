// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  extendedLocationSerializer,
  brokerAuthorizationPropertiesSerializer,
  BrokerAuthorizationResource,
  _BrokerAuthorizationResourceListResult,
} from "../../models/models.js";
import { IoTOperationsContext as Client } from "../index.js";
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
  BrokerAuthorizationGetOptionalParams,
  BrokerAuthorizationCreateOrUpdateOptionalParams,
  BrokerAuthorizationDeleteOptionalParams,
  BrokerAuthorizationListByResourceGroupOptionalParams,
} from "../../models/options.js";

export function _brokerAuthorizationGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authorizationName: string,
  options: BrokerAuthorizationGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations/{authorizationName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
      authorizationName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _brokerAuthorizationGetDeserialize(
  result: PathUncheckedResponse,
): Promise<BrokerAuthorizationResource> {
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
          authorizationPolicies: {
            cache: result.body.properties?.authorizationPolicies["cache"],
            rules:
              result.body.properties?.authorizationPolicies["rules"] ===
              undefined
                ? result.body.properties?.authorizationPolicies["rules"]
                : result.body.properties?.authorizationPolicies["rules"].map(
                    (p: any) => {
                      return {
                        brokerResources: p["brokerResources"].map((p: any) => {
                          return {
                            method: p["method"],
                            clientIds: p["clientIds"],
                            topics: p["topics"],
                          };
                        }),
                        principals: {
                          attributes: p.principals["attributes"],
                          clientIds: p.principals["clientIds"],
                          usernames: p.principals["usernames"],
                        },
                        stateStoreResources:
                          p["stateStoreResources"] === undefined
                            ? p["stateStoreResources"]
                            : p["stateStoreResources"].map((p: any) => {
                                return {
                                  keyType: p["keyType"],
                                  keys: p["keys"],
                                  method: p["method"],
                                };
                              }),
                      };
                    },
                  ),
          },
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Get a BrokerAuthorizationResource */
export async function brokerAuthorizationGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authorizationName: string,
  options: BrokerAuthorizationGetOptionalParams = { requestOptions: {} },
): Promise<BrokerAuthorizationResource> {
  const result = await _brokerAuthorizationGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    instanceName,
    brokerName,
    authorizationName,
    options,
  );
  return _brokerAuthorizationGetDeserialize(result);
}

export function _brokerAuthorizationCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authorizationName: string,
  resource: BrokerAuthorizationResource,
  options: BrokerAuthorizationCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations/{authorizationName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
      authorizationName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : brokerAuthorizationPropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _brokerAuthorizationCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<BrokerAuthorizationResource> {
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
          authorizationPolicies: {
            cache: result.body.properties?.authorizationPolicies["cache"],
            rules:
              result.body.properties?.authorizationPolicies["rules"] ===
              undefined
                ? result.body.properties?.authorizationPolicies["rules"]
                : result.body.properties?.authorizationPolicies["rules"].map(
                    (p: any) => {
                      return {
                        brokerResources: p["brokerResources"].map((p: any) => {
                          return {
                            method: p["method"],
                            clientIds: p["clientIds"],
                            topics: p["topics"],
                          };
                        }),
                        principals: {
                          attributes: p.principals["attributes"],
                          clientIds: p.principals["clientIds"],
                          usernames: p.principals["usernames"],
                        },
                        stateStoreResources:
                          p["stateStoreResources"] === undefined
                            ? p["stateStoreResources"]
                            : p["stateStoreResources"].map((p: any) => {
                                return {
                                  keyType: p["keyType"],
                                  keys: p["keys"],
                                  method: p["method"],
                                };
                              }),
                      };
                    },
                  ),
          },
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Create a BrokerAuthorizationResource */
export function brokerAuthorizationCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authorizationName: string,
  resource: BrokerAuthorizationResource,
  options: BrokerAuthorizationCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<BrokerAuthorizationResource>,
  BrokerAuthorizationResource
> {
  return getLongRunningPoller(
    context,
    _brokerAuthorizationCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _brokerAuthorizationCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          brokerName,
          authorizationName,
          resource,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<BrokerAuthorizationResource>,
    BrokerAuthorizationResource
  >;
}

export function _brokerAuthorizationDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authorizationName: string,
  options: BrokerAuthorizationDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations/{authorizationName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
      authorizationName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _brokerAuthorizationDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a BrokerAuthorizationResource */
export function brokerAuthorizationDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authorizationName: string,
  options: BrokerAuthorizationDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _brokerAuthorizationDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _brokerAuthorizationDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          brokerName,
          authorizationName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _brokerAuthorizationListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerAuthorizationListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _brokerAuthorizationListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_BrokerAuthorizationResourceListResult> {
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
              authorizationPolicies: {
                cache: p.properties?.authorizationPolicies["cache"],
                rules:
                  p.properties?.authorizationPolicies["rules"] === undefined
                    ? p.properties?.authorizationPolicies["rules"]
                    : p.properties?.authorizationPolicies["rules"].map(
                        (p: any) => {
                          return {
                            brokerResources: p["brokerResources"].map(
                              (p: any) => {
                                return {
                                  method: p["method"],
                                  clientIds: p["clientIds"],
                                  topics: p["topics"],
                                };
                              },
                            ),
                            principals: {
                              attributes: p.principals["attributes"],
                              clientIds: p.principals["clientIds"],
                              usernames: p.principals["usernames"],
                            },
                            stateStoreResources:
                              p["stateStoreResources"] === undefined
                                ? p["stateStoreResources"]
                                : p["stateStoreResources"].map((p: any) => {
                                    return {
                                      keyType: p["keyType"],
                                      keys: p["keys"],
                                      method: p["method"],
                                    };
                                  }),
                          };
                        },
                      ),
              },
              provisioningState: p.properties?.["provisioningState"],
            },
        extendedLocation: {
          name: p.extendedLocation["name"],
          type: p.extendedLocation["type"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List BrokerAuthorizationResource resources by BrokerResource */
export function brokerAuthorizationListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerAuthorizationListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<BrokerAuthorizationResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _brokerAuthorizationListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        brokerName,
        options,
      ),
    _brokerAuthorizationListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
