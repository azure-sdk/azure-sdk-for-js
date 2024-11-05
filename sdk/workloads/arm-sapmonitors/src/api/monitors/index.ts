// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  monitorPropertiesSerializer,
  managedServiceIdentitySerializer,
  Monitor,
  UpdateMonitorRequest,
  _MonitorListResult,
} from "../../models/models.js";
import { WorkloadsContext as Client } from "../index.js";
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
  MonitorsGetOptionalParams,
  MonitorsCreateOptionalParams,
  MonitorsUpdateOptionalParams,
  MonitorsDeleteOptionalParams,
  MonitorsListByResourceGroupOptionalParams,
  MonitorsListOptionalParams,
} from "../../models/options.js";

export function _monitorsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: MonitorsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}",
      subscriptionId,
      resourceGroupName,
      monitorName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _monitorsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Monitor> {
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
          provisioningState: result.body.properties?.["provisioningState"],
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
          appLocation: result.body.properties?.["appLocation"],
          routingPreference: result.body.properties?.["routingPreference"],
          zoneRedundancyPreference:
            result.body.properties?.["zoneRedundancyPreference"],
          managedResourceGroupConfiguration: !result.body.properties
            ?.managedResourceGroupConfiguration
            ? undefined
            : {
                name: result.body.properties
                  ?.managedResourceGroupConfiguration?.["name"],
              },
          logAnalyticsWorkspaceArmId:
            result.body.properties?.["logAnalyticsWorkspaceArmId"],
          monitorSubnet: result.body.properties?.["monitorSubnet"],
          appServicePlanConfiguration: !result.body.properties
            ?.appServicePlanConfiguration
            ? undefined
            : {
                tier: result.body.properties?.appServicePlanConfiguration?.[
                  "tier"
                ],
                capacity:
                  result.body.properties?.appServicePlanConfiguration?.[
                    "capacity"
                  ],
              },
          msiArmId: result.body.properties?.["msiArmId"],
          storageAccountArmId: result.body.properties?.["storageAccountArmId"],
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

/** Gets properties of a SAP monitor for the specified subscription, resource group, and resource name. */
export async function monitorsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: MonitorsGetOptionalParams = { requestOptions: {} },
): Promise<Monitor> {
  const result = await _monitorsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    monitorName,
    options,
  );
  return _monitorsGetDeserialize(result);
}

export function _monitorsCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  resource: Monitor,
  options: MonitorsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}",
      subscriptionId,
      resourceGroupName,
      monitorName,
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
          : monitorPropertiesSerializer(resource.properties),
        identity: !resource.identity
          ? resource.identity
          : managedServiceIdentitySerializer(resource.identity),
      },
    });
}

export async function _monitorsCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<Monitor> {
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
          provisioningState: result.body.properties?.["provisioningState"],
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
          appLocation: result.body.properties?.["appLocation"],
          routingPreference: result.body.properties?.["routingPreference"],
          zoneRedundancyPreference:
            result.body.properties?.["zoneRedundancyPreference"],
          managedResourceGroupConfiguration: !result.body.properties
            ?.managedResourceGroupConfiguration
            ? undefined
            : {
                name: result.body.properties
                  ?.managedResourceGroupConfiguration?.["name"],
              },
          logAnalyticsWorkspaceArmId:
            result.body.properties?.["logAnalyticsWorkspaceArmId"],
          monitorSubnet: result.body.properties?.["monitorSubnet"],
          appServicePlanConfiguration: !result.body.properties
            ?.appServicePlanConfiguration
            ? undefined
            : {
                tier: result.body.properties?.appServicePlanConfiguration?.[
                  "tier"
                ],
                capacity:
                  result.body.properties?.appServicePlanConfiguration?.[
                    "capacity"
                  ],
              },
          msiArmId: result.body.properties?.["msiArmId"],
          storageAccountArmId: result.body.properties?.["storageAccountArmId"],
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

/** Creates a SAP monitor for the specified subscription, resource group, and resource name. */
export function monitorsCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  resource: Monitor,
  options: MonitorsCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Monitor>, Monitor> {
  return getLongRunningPoller(
    context,
    _monitorsCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _monitorsCreateSend(
          context,
          subscriptionId,
          resourceGroupName,
          monitorName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<Monitor>, Monitor>;
}

export function _monitorsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  properties: UpdateMonitorRequest,
  options: MonitorsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}",
      subscriptionId,
      resourceGroupName,
      monitorName,
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

export async function _monitorsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Monitor> {
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
          provisioningState: result.body.properties?.["provisioningState"],
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
          appLocation: result.body.properties?.["appLocation"],
          routingPreference: result.body.properties?.["routingPreference"],
          zoneRedundancyPreference:
            result.body.properties?.["zoneRedundancyPreference"],
          managedResourceGroupConfiguration: !result.body.properties
            ?.managedResourceGroupConfiguration
            ? undefined
            : {
                name: result.body.properties
                  ?.managedResourceGroupConfiguration?.["name"],
              },
          logAnalyticsWorkspaceArmId:
            result.body.properties?.["logAnalyticsWorkspaceArmId"],
          monitorSubnet: result.body.properties?.["monitorSubnet"],
          appServicePlanConfiguration: !result.body.properties
            ?.appServicePlanConfiguration
            ? undefined
            : {
                tier: result.body.properties?.appServicePlanConfiguration?.[
                  "tier"
                ],
                capacity:
                  result.body.properties?.appServicePlanConfiguration?.[
                    "capacity"
                  ],
              },
          msiArmId: result.body.properties?.["msiArmId"],
          storageAccountArmId: result.body.properties?.["storageAccountArmId"],
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

/** Patches the Tags field of a SAP monitor for the specified subscription, resource group, and SAP monitor name. */
export function monitorsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  properties: UpdateMonitorRequest,
  options: MonitorsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Monitor>, Monitor> {
  return getLongRunningPoller(
    context,
    _monitorsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _monitorsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          monitorName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<Monitor>, Monitor>;
}

export function _monitorsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: MonitorsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}",
      subscriptionId,
      resourceGroupName,
      monitorName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _monitorsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes a SAP monitor with the specified subscription, resource group, and SAP monitor name. */
export function monitorsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: MonitorsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _monitorsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _monitorsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          monitorName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _monitorsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: MonitorsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _monitorsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_MonitorListResult> {
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
              provisioningState: p.properties?.["provisioningState"],
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
              appLocation: p.properties?.["appLocation"],
              routingPreference: p.properties?.["routingPreference"],
              zoneRedundancyPreference:
                p.properties?.["zoneRedundancyPreference"],
              managedResourceGroupConfiguration: !p.properties
                ?.managedResourceGroupConfiguration
                ? undefined
                : {
                    name: p.properties?.managedResourceGroupConfiguration?.[
                      "name"
                    ],
                  },
              logAnalyticsWorkspaceArmId:
                p.properties?.["logAnalyticsWorkspaceArmId"],
              monitorSubnet: p.properties?.["monitorSubnet"],
              appServicePlanConfiguration: !p.properties
                ?.appServicePlanConfiguration
                ? undefined
                : {
                    tier: p.properties?.appServicePlanConfiguration?.["tier"],
                    capacity:
                      p.properties?.appServicePlanConfiguration?.["capacity"],
                  },
              msiArmId: p.properties?.["msiArmId"],
              storageAccountArmId: p.properties?.["storageAccountArmId"],
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

/** Gets a list of SAP monitors in the specified resource group. */
export function monitorsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: MonitorsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Monitor> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _monitorsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _monitorsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _monitorsListSend(
  context: Client,
  subscriptionId: string,
  options: MonitorsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/monitors",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _monitorsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_MonitorListResult> {
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
              provisioningState: p.properties?.["provisioningState"],
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
              appLocation: p.properties?.["appLocation"],
              routingPreference: p.properties?.["routingPreference"],
              zoneRedundancyPreference:
                p.properties?.["zoneRedundancyPreference"],
              managedResourceGroupConfiguration: !p.properties
                ?.managedResourceGroupConfiguration
                ? undefined
                : {
                    name: p.properties?.managedResourceGroupConfiguration?.[
                      "name"
                    ],
                  },
              logAnalyticsWorkspaceArmId:
                p.properties?.["logAnalyticsWorkspaceArmId"],
              monitorSubnet: p.properties?.["monitorSubnet"],
              appServicePlanConfiguration: !p.properties
                ?.appServicePlanConfiguration
                ? undefined
                : {
                    tier: p.properties?.appServicePlanConfiguration?.["tier"],
                    capacity:
                      p.properties?.appServicePlanConfiguration?.["capacity"],
                  },
              msiArmId: p.properties?.["msiArmId"],
              storageAccountArmId: p.properties?.["storageAccountArmId"],
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

/** Gets a list of SAP monitors in the specified subscription. The operations returns various properties of each SAP monitor. */
export function monitorsList(
  context: Client,
  subscriptionId: string,
  options: MonitorsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Monitor> {
  return buildPagedAsyncIterator(
    context,
    () => _monitorsListSend(context, subscriptionId, options),
    _monitorsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
