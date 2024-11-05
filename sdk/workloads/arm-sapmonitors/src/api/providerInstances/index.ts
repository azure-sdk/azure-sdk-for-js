// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  providerInstancePropertiesSerializer,
  ProviderInstance,
  _ProviderInstanceListResult,
} from "../../models/models.js";
import { WorkloadsContext as Client } from "../index.js";
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
  ProviderInstancesGetOptionalParams,
  ProviderInstancesCreateOptionalParams,
  ProviderInstancesDeleteOptionalParams,
  ProviderInstancesListByMonitorOptionalParams,
} from "../../models/options.js";

export function _providerInstancesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  providerInstanceName: string,
  options: ProviderInstancesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances/{providerInstanceName}",
      subscriptionId,
      resourceGroupName,
      monitorName,
      providerInstanceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _providerInstancesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ProviderInstance> {
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
          provisioningState: result.body.properties?.["provisioningState"],
          health: !result.body.properties?.health
            ? undefined
            : {
                healthState: result.body.properties?.health?.["healthState"],
                impactingReasons:
                  result.body.properties?.health?.["impactingReasons"],
              },
          errors: !result.body.properties?.errors
            ? undefined
            : {
                code: result.body.properties?.errors?.["code"],
                message: result.body.properties?.errors?.["message"],
                target: result.body.properties?.errors?.["target"],
                details:
                  result.body.properties?.errors?.["details"] === undefined
                    ? result.body.properties?.errors?.["details"]
                    : result.body.properties?.errors?.["details"].map(
                        (p: any) => {
                          return {
                            code: p["code"],
                            message: p["message"],
                            target: p["target"],
                            details: !p.details ? undefined : p.details,
                            additionalInfo:
                              p["additionalInfo"] === undefined
                                ? p["additionalInfo"]
                                : p["additionalInfo"].map((p: any) => {
                                    return { type: p["type"], info: p["info"] };
                                  }),
                          };
                        },
                      ),
                additionalInfo:
                  result.body.properties?.errors?.["additionalInfo"] ===
                  undefined
                    ? result.body.properties?.errors?.["additionalInfo"]
                    : result.body.properties?.errors?.["additionalInfo"].map(
                        (p: any) => {
                          return { type: p["type"], info: p["info"] };
                        },
                      ),
              },
          providerSettings: !result.body.properties?.providerSettings
            ? undefined
            : {
                providerType:
                  result.body.properties?.providerSettings?.["providerType"],
              },
        },
  };
}

/** Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. */
export async function providerInstancesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  providerInstanceName: string,
  options: ProviderInstancesGetOptionalParams = { requestOptions: {} },
): Promise<ProviderInstance> {
  const result = await _providerInstancesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    monitorName,
    providerInstanceName,
    options,
  );
  return _providerInstancesGetDeserialize(result);
}

export function _providerInstancesCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  providerInstanceName: string,
  resource: ProviderInstance,
  options: ProviderInstancesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances/{providerInstanceName}",
      subscriptionId,
      resourceGroupName,
      monitorName,
      providerInstanceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : providerInstancePropertiesSerializer(resource.properties),
      },
    });
}

export async function _providerInstancesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<ProviderInstance> {
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
          provisioningState: result.body.properties?.["provisioningState"],
          health: !result.body.properties?.health
            ? undefined
            : {
                healthState: result.body.properties?.health?.["healthState"],
                impactingReasons:
                  result.body.properties?.health?.["impactingReasons"],
              },
          errors: !result.body.properties?.errors
            ? undefined
            : {
                code: result.body.properties?.errors?.["code"],
                message: result.body.properties?.errors?.["message"],
                target: result.body.properties?.errors?.["target"],
                details:
                  result.body.properties?.errors?.["details"] === undefined
                    ? result.body.properties?.errors?.["details"]
                    : result.body.properties?.errors?.["details"].map(
                        (p: any) => {
                          return {
                            code: p["code"],
                            message: p["message"],
                            target: p["target"],
                            details: !p.details ? undefined : p.details,
                            additionalInfo:
                              p["additionalInfo"] === undefined
                                ? p["additionalInfo"]
                                : p["additionalInfo"].map((p: any) => {
                                    return { type: p["type"], info: p["info"] };
                                  }),
                          };
                        },
                      ),
                additionalInfo:
                  result.body.properties?.errors?.["additionalInfo"] ===
                  undefined
                    ? result.body.properties?.errors?.["additionalInfo"]
                    : result.body.properties?.errors?.["additionalInfo"].map(
                        (p: any) => {
                          return { type: p["type"], info: p["info"] };
                        },
                      ),
              },
          providerSettings: !result.body.properties?.providerSettings
            ? undefined
            : {
                providerType:
                  result.body.properties?.providerSettings?.["providerType"],
              },
        },
  };
}

/** Creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. */
export function providerInstancesCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  providerInstanceName: string,
  resource: ProviderInstance,
  options: ProviderInstancesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ProviderInstance>, ProviderInstance> {
  return getLongRunningPoller(
    context,
    _providerInstancesCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _providerInstancesCreateSend(
          context,
          subscriptionId,
          resourceGroupName,
          monitorName,
          providerInstanceName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<ProviderInstance>, ProviderInstance>;
}

export function _providerInstancesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  providerInstanceName: string,
  options: ProviderInstancesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances/{providerInstanceName}",
      subscriptionId,
      resourceGroupName,
      monitorName,
      providerInstanceName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _providerInstancesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. */
export function providerInstancesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  providerInstanceName: string,
  options: ProviderInstancesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _providerInstancesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _providerInstancesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          monitorName,
          providerInstanceName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _providerInstancesListByMonitorSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: ProviderInstancesListByMonitorOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances",
      subscriptionId,
      resourceGroupName,
      monitorName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _providerInstancesListByMonitorDeserialize(
  result: PathUncheckedResponse,
): Promise<_ProviderInstanceListResult> {
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
              provisioningState: p.properties?.["provisioningState"],
              health: !p.properties?.health
                ? undefined
                : {
                    healthState: p.properties?.health?.["healthState"],
                    impactingReasons:
                      p.properties?.health?.["impactingReasons"],
                  },
              errors: !p.properties?.errors
                ? undefined
                : {
                    code: p.properties?.errors?.["code"],
                    message: p.properties?.errors?.["message"],
                    target: p.properties?.errors?.["target"],
                    details:
                      p.properties?.errors?.["details"] === undefined
                        ? p.properties?.errors?.["details"]
                        : p.properties?.errors?.["details"].map((p: any) => {
                            return {
                              code: p["code"],
                              message: p["message"],
                              target: p["target"],
                              details: !p.details ? undefined : p.details,
                              additionalInfo:
                                p["additionalInfo"] === undefined
                                  ? p["additionalInfo"]
                                  : p["additionalInfo"].map((p: any) => {
                                      return {
                                        type: p["type"],
                                        info: p["info"],
                                      };
                                    }),
                            };
                          }),
                    additionalInfo:
                      p.properties?.errors?.["additionalInfo"] === undefined
                        ? p.properties?.errors?.["additionalInfo"]
                        : p.properties?.errors?.["additionalInfo"].map(
                            (p: any) => {
                              return { type: p["type"], info: p["info"] };
                            },
                          ),
                  },
              providerSettings: !p.properties?.providerSettings
                ? undefined
                : {
                    providerType:
                      p.properties?.providerSettings?.["providerType"],
                  },
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Gets a list of provider instances in the specified SAP monitor. The operations returns various properties of each provider instances. */
export function providerInstancesListByMonitor(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: ProviderInstancesListByMonitorOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ProviderInstance> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _providerInstancesListByMonitorSend(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        options,
      ),
    _providerInstancesListByMonitorDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
