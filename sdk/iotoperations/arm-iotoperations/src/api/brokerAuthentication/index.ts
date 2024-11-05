// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  extendedLocationSerializer,
  brokerAuthenticationPropertiesSerializer,
  BrokerAuthenticationResource,
  _BrokerAuthenticationResourceListResult,
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
  BrokerAuthenticationGetOptionalParams,
  BrokerAuthenticationCreateOrUpdateOptionalParams,
  BrokerAuthenticationDeleteOptionalParams,
  BrokerAuthenticationListByResourceGroupOptionalParams,
} from "../../models/options.js";

export function _brokerAuthenticationGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authenticationName: string,
  options: BrokerAuthenticationGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authentications/{authenticationName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
      authenticationName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _brokerAuthenticationGetDeserialize(
  result: PathUncheckedResponse,
): Promise<BrokerAuthenticationResource> {
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
          authenticationMethods: result.body.properties?.[
            "authenticationMethods"
          ].map((p: any) => {
            return {
              method: p["method"],
              customSettings: !p.customSettings
                ? undefined
                : {
                    auth: !p.customSettings?.auth
                      ? undefined
                      : {
                          x509: {
                            secretRef:
                              p.customSettings?.auth?.x509["secretRef"],
                          },
                        },
                    caCertConfigMap: p.customSettings?.["caCertConfigMap"],
                    endpoint: p.customSettings?.["endpoint"],
                    headers: p.customSettings?.["headers"],
                  },
              serviceAccountTokenSettings: !p.serviceAccountTokenSettings
                ? undefined
                : { audiences: p.serviceAccountTokenSettings?.["audiences"] },
              x509Settings: !p.x509Settings
                ? undefined
                : {
                    authorizationAttributes:
                      p.x509Settings?.["authorizationAttributes"],
                    trustedClientCaCert:
                      p.x509Settings?.["trustedClientCaCert"],
                  },
            };
          }),
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Get a BrokerAuthenticationResource */
export async function brokerAuthenticationGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authenticationName: string,
  options: BrokerAuthenticationGetOptionalParams = { requestOptions: {} },
): Promise<BrokerAuthenticationResource> {
  const result = await _brokerAuthenticationGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    instanceName,
    brokerName,
    authenticationName,
    options,
  );
  return _brokerAuthenticationGetDeserialize(result);
}

export function _brokerAuthenticationCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authenticationName: string,
  resource: BrokerAuthenticationResource,
  options: BrokerAuthenticationCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authentications/{authenticationName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
      authenticationName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : brokerAuthenticationPropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _brokerAuthenticationCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<BrokerAuthenticationResource> {
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
          authenticationMethods: result.body.properties?.[
            "authenticationMethods"
          ].map((p: any) => {
            return {
              method: p["method"],
              customSettings: !p.customSettings
                ? undefined
                : {
                    auth: !p.customSettings?.auth
                      ? undefined
                      : {
                          x509: {
                            secretRef:
                              p.customSettings?.auth?.x509["secretRef"],
                          },
                        },
                    caCertConfigMap: p.customSettings?.["caCertConfigMap"],
                    endpoint: p.customSettings?.["endpoint"],
                    headers: p.customSettings?.["headers"],
                  },
              serviceAccountTokenSettings: !p.serviceAccountTokenSettings
                ? undefined
                : { audiences: p.serviceAccountTokenSettings?.["audiences"] },
              x509Settings: !p.x509Settings
                ? undefined
                : {
                    authorizationAttributes:
                      p.x509Settings?.["authorizationAttributes"],
                    trustedClientCaCert:
                      p.x509Settings?.["trustedClientCaCert"],
                  },
            };
          }),
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Create a BrokerAuthenticationResource */
export function brokerAuthenticationCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authenticationName: string,
  resource: BrokerAuthenticationResource,
  options: BrokerAuthenticationCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<BrokerAuthenticationResource>,
  BrokerAuthenticationResource
> {
  return getLongRunningPoller(
    context,
    _brokerAuthenticationCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _brokerAuthenticationCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          brokerName,
          authenticationName,
          resource,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<BrokerAuthenticationResource>,
    BrokerAuthenticationResource
  >;
}

export function _brokerAuthenticationDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authenticationName: string,
  options: BrokerAuthenticationDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authentications/{authenticationName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
      authenticationName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _brokerAuthenticationDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a BrokerAuthenticationResource */
export function brokerAuthenticationDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  authenticationName: string,
  options: BrokerAuthenticationDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _brokerAuthenticationDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _brokerAuthenticationDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          brokerName,
          authenticationName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _brokerAuthenticationListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerAuthenticationListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authentications",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _brokerAuthenticationListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_BrokerAuthenticationResourceListResult> {
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
              authenticationMethods: p.properties?.[
                "authenticationMethods"
              ].map((p: any) => {
                return {
                  method: p["method"],
                  customSettings: !p.customSettings
                    ? undefined
                    : {
                        auth: !p.customSettings?.auth
                          ? undefined
                          : {
                              x509: {
                                secretRef:
                                  p.customSettings?.auth?.x509["secretRef"],
                              },
                            },
                        caCertConfigMap: p.customSettings?.["caCertConfigMap"],
                        endpoint: p.customSettings?.["endpoint"],
                        headers: p.customSettings?.["headers"],
                      },
                  serviceAccountTokenSettings: !p.serviceAccountTokenSettings
                    ? undefined
                    : {
                        audiences: p.serviceAccountTokenSettings?.["audiences"],
                      },
                  x509Settings: !p.x509Settings
                    ? undefined
                    : {
                        authorizationAttributes:
                          p.x509Settings?.["authorizationAttributes"],
                        trustedClientCaCert:
                          p.x509Settings?.["trustedClientCaCert"],
                      },
                };
              }),
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

/** List BrokerAuthenticationResource resources by BrokerResource */
export function brokerAuthenticationListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerAuthenticationListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<BrokerAuthenticationResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _brokerAuthenticationListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        brokerName,
        options,
      ),
    _brokerAuthenticationListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
