// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  extendedLocationSerializer,
  brokerListenerPropertiesSerializer,
  BrokerListenerResource,
  _BrokerListenerResourceListResult,
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
  BrokerListenerGetOptionalParams,
  BrokerListenerCreateOrUpdateOptionalParams,
  BrokerListenerDeleteOptionalParams,
  BrokerListenerListByResourceGroupOptionalParams,
} from "../../models/options.js";

export function _brokerListenerGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  listenerName: string,
  options: BrokerListenerGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners/{listenerName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
      listenerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _brokerListenerGetDeserialize(
  result: PathUncheckedResponse,
): Promise<BrokerListenerResource> {
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
          serviceName: result.body.properties?.["serviceName"],
          ports: result.body.properties?.["ports"].map((p: any) => {
            return {
              authenticationRef: p["authenticationRef"],
              authorizationRef: p["authorizationRef"],
              nodePort: p["nodePort"],
              port: p["port"],
              protocol: p["protocol"],
              tls: !p.tls
                ? undefined
                : {
                    mode: p.tls?.["mode"],
                    certManagerCertificateSpec: !p.tls
                      ?.certManagerCertificateSpec
                      ? undefined
                      : {
                          duration:
                            p.tls?.certManagerCertificateSpec?.["duration"],
                          secretName:
                            p.tls?.certManagerCertificateSpec?.["secretName"],
                          renewBefore:
                            p.tls?.certManagerCertificateSpec?.["renewBefore"],
                          issuerRef: {
                            group:
                              p.tls?.certManagerCertificateSpec?.issuerRef[
                                "group"
                              ],
                            kind: p.tls?.certManagerCertificateSpec?.issuerRef[
                              "kind"
                            ],
                            name: p.tls?.certManagerCertificateSpec?.issuerRef[
                              "name"
                            ],
                          },
                          privateKey: !p.tls?.certManagerCertificateSpec
                            ?.privateKey
                            ? undefined
                            : {
                                algorithm:
                                  p.tls?.certManagerCertificateSpec
                                    ?.privateKey?.["algorithm"],
                                rotationPolicy:
                                  p.tls?.certManagerCertificateSpec
                                    ?.privateKey?.["rotationPolicy"],
                              },
                          san: !p.tls?.certManagerCertificateSpec?.san
                            ? undefined
                            : {
                                dns: p.tls?.certManagerCertificateSpec?.san?.[
                                  "dns"
                                ],
                                ip: p.tls?.certManagerCertificateSpec?.san?.[
                                  "ip"
                                ],
                              },
                        },
                    manual: !p.tls?.manual
                      ? undefined
                      : { secretRef: p.tls?.manual?.["secretRef"] },
                  },
            };
          }),
          serviceType: result.body.properties?.["serviceType"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Get a BrokerListenerResource */
export async function brokerListenerGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  listenerName: string,
  options: BrokerListenerGetOptionalParams = { requestOptions: {} },
): Promise<BrokerListenerResource> {
  const result = await _brokerListenerGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    instanceName,
    brokerName,
    listenerName,
    options,
  );
  return _brokerListenerGetDeserialize(result);
}

export function _brokerListenerCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  listenerName: string,
  resource: BrokerListenerResource,
  options: BrokerListenerCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners/{listenerName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
      listenerName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : brokerListenerPropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _brokerListenerCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<BrokerListenerResource> {
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
          serviceName: result.body.properties?.["serviceName"],
          ports: result.body.properties?.["ports"].map((p: any) => {
            return {
              authenticationRef: p["authenticationRef"],
              authorizationRef: p["authorizationRef"],
              nodePort: p["nodePort"],
              port: p["port"],
              protocol: p["protocol"],
              tls: !p.tls
                ? undefined
                : {
                    mode: p.tls?.["mode"],
                    certManagerCertificateSpec: !p.tls
                      ?.certManagerCertificateSpec
                      ? undefined
                      : {
                          duration:
                            p.tls?.certManagerCertificateSpec?.["duration"],
                          secretName:
                            p.tls?.certManagerCertificateSpec?.["secretName"],
                          renewBefore:
                            p.tls?.certManagerCertificateSpec?.["renewBefore"],
                          issuerRef: {
                            group:
                              p.tls?.certManagerCertificateSpec?.issuerRef[
                                "group"
                              ],
                            kind: p.tls?.certManagerCertificateSpec?.issuerRef[
                              "kind"
                            ],
                            name: p.tls?.certManagerCertificateSpec?.issuerRef[
                              "name"
                            ],
                          },
                          privateKey: !p.tls?.certManagerCertificateSpec
                            ?.privateKey
                            ? undefined
                            : {
                                algorithm:
                                  p.tls?.certManagerCertificateSpec
                                    ?.privateKey?.["algorithm"],
                                rotationPolicy:
                                  p.tls?.certManagerCertificateSpec
                                    ?.privateKey?.["rotationPolicy"],
                              },
                          san: !p.tls?.certManagerCertificateSpec?.san
                            ? undefined
                            : {
                                dns: p.tls?.certManagerCertificateSpec?.san?.[
                                  "dns"
                                ],
                                ip: p.tls?.certManagerCertificateSpec?.san?.[
                                  "ip"
                                ],
                              },
                        },
                    manual: !p.tls?.manual
                      ? undefined
                      : { secretRef: p.tls?.manual?.["secretRef"] },
                  },
            };
          }),
          serviceType: result.body.properties?.["serviceType"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Create a BrokerListenerResource */
export function brokerListenerCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  listenerName: string,
  resource: BrokerListenerResource,
  options: BrokerListenerCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<BrokerListenerResource>, BrokerListenerResource> {
  return getLongRunningPoller(
    context,
    _brokerListenerCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _brokerListenerCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          brokerName,
          listenerName,
          resource,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<BrokerListenerResource>,
    BrokerListenerResource
  >;
}

export function _brokerListenerDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  listenerName: string,
  options: BrokerListenerDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners/{listenerName}",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
      listenerName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _brokerListenerDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a BrokerListenerResource */
export function brokerListenerDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  listenerName: string,
  options: BrokerListenerDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _brokerListenerDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _brokerListenerDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          instanceName,
          brokerName,
          listenerName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _brokerListenerListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerListenerListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners",
      subscriptionId,
      resourceGroupName,
      instanceName,
      brokerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _brokerListenerListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_BrokerListenerResourceListResult> {
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
              serviceName: p.properties?.["serviceName"],
              ports: p.properties?.["ports"].map((p: any) => {
                return {
                  authenticationRef: p["authenticationRef"],
                  authorizationRef: p["authorizationRef"],
                  nodePort: p["nodePort"],
                  port: p["port"],
                  protocol: p["protocol"],
                  tls: !p.tls
                    ? undefined
                    : {
                        mode: p.tls?.["mode"],
                        certManagerCertificateSpec: !p.tls
                          ?.certManagerCertificateSpec
                          ? undefined
                          : {
                              duration:
                                p.tls?.certManagerCertificateSpec?.["duration"],
                              secretName:
                                p.tls?.certManagerCertificateSpec?.[
                                  "secretName"
                                ],
                              renewBefore:
                                p.tls?.certManagerCertificateSpec?.[
                                  "renewBefore"
                                ],
                              issuerRef: {
                                group:
                                  p.tls?.certManagerCertificateSpec?.issuerRef[
                                    "group"
                                  ],
                                kind: p.tls?.certManagerCertificateSpec
                                  ?.issuerRef["kind"],
                                name: p.tls?.certManagerCertificateSpec
                                  ?.issuerRef["name"],
                              },
                              privateKey: !p.tls?.certManagerCertificateSpec
                                ?.privateKey
                                ? undefined
                                : {
                                    algorithm:
                                      p.tls?.certManagerCertificateSpec
                                        ?.privateKey?.["algorithm"],
                                    rotationPolicy:
                                      p.tls?.certManagerCertificateSpec
                                        ?.privateKey?.["rotationPolicy"],
                                  },
                              san: !p.tls?.certManagerCertificateSpec?.san
                                ? undefined
                                : {
                                    dns: p.tls?.certManagerCertificateSpec
                                      ?.san?.["dns"],
                                    ip: p.tls?.certManagerCertificateSpec
                                      ?.san?.["ip"],
                                  },
                            },
                        manual: !p.tls?.manual
                          ? undefined
                          : { secretRef: p.tls?.manual?.["secretRef"] },
                      },
                };
              }),
              serviceType: p.properties?.["serviceType"],
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

/** List BrokerListenerResource resources by BrokerResource */
export function brokerListenerListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  instanceName: string,
  brokerName: string,
  options: BrokerListenerListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<BrokerListenerResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _brokerListenerListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        instanceName,
        brokerName,
        options,
      ),
    _brokerListenerListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
