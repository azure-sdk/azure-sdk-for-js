// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  cloudExadataInfrastructurePropertiesSerializer,
  cloudExadataInfrastructureUpdatePropertiesSerializer,
  CloudExadataInfrastructure,
  CloudExadataInfrastructureUpdate,
  _CloudExadataInfrastructureListResult,
} from "../../models/models.js";
import { DatabaseContext as Client } from "../index.js";
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
  CloudExadataInfrastructuresListBySubscriptionOptionalParams,
  CloudExadataInfrastructuresGetOptionalParams,
  CloudExadataInfrastructuresUpdateOptionalParams,
  CloudExadataInfrastructuresDeleteOptionalParams,
  CloudExadataInfrastructuresCreateOrUpdateOptionalParams,
  CloudExadataInfrastructuresListByResourceGroupOptionalParams,
  CloudExadataInfrastructuresAddStorageCapacityOptionalParams,
} from "../../models/options.js";

export function _cloudExadataInfrastructuresListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: CloudExadataInfrastructuresListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/cloudExadataInfrastructures",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudExadataInfrastructuresListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_CloudExadataInfrastructureListResult> {
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
              ocid: p.properties?.["ocid"],
              computeCount: p.properties?.["computeCount"],
              storageCount: p.properties?.["storageCount"],
              totalStorageSizeInGbs: p.properties?.["totalStorageSizeInGbs"],
              availableStorageSizeInGbs:
                p.properties?.["availableStorageSizeInGbs"],
              timeCreated: p.properties?.["timeCreated"],
              lifecycleDetails: p.properties?.["lifecycleDetails"],
              maintenanceWindow: !p.properties?.maintenanceWindow
                ? undefined
                : {
                    preference: p.properties?.maintenanceWindow?.["preference"],
                    months:
                      p.properties?.maintenanceWindow?.["months"] === undefined
                        ? p.properties?.maintenanceWindow?.["months"]
                        : p.properties?.maintenanceWindow?.["months"].map(
                            (p: any) => {
                              return { name: p["name"] };
                            },
                          ),
                    weeksOfMonth:
                      p.properties?.maintenanceWindow?.["weeksOfMonth"],
                    daysOfWeek:
                      p.properties?.maintenanceWindow?.["daysOfWeek"] ===
                      undefined
                        ? p.properties?.maintenanceWindow?.["daysOfWeek"]
                        : p.properties?.maintenanceWindow?.["daysOfWeek"].map(
                            (p: any) => {
                              return { name: p["name"] };
                            },
                          ),
                    hoursOfDay: p.properties?.maintenanceWindow?.["hoursOfDay"],
                    leadTimeInWeeks:
                      p.properties?.maintenanceWindow?.["leadTimeInWeeks"],
                    patchingMode:
                      p.properties?.maintenanceWindow?.["patchingMode"],
                    customActionTimeoutInMins:
                      p.properties?.maintenanceWindow?.[
                        "customActionTimeoutInMins"
                      ],
                    isCustomActionTimeoutEnabled:
                      p.properties?.maintenanceWindow?.[
                        "isCustomActionTimeoutEnabled"
                      ],
                    isMonthlyPatchingEnabled:
                      p.properties?.maintenanceWindow?.[
                        "isMonthlyPatchingEnabled"
                      ],
                  },
              estimatedPatchingTime: !p.properties?.estimatedPatchingTime
                ? undefined
                : {
                    estimatedDbServerPatchingTime:
                      p.properties?.estimatedPatchingTime?.[
                        "estimatedDbServerPatchingTime"
                      ],
                    estimatedNetworkSwitchesPatchingTime:
                      p.properties?.estimatedPatchingTime?.[
                        "estimatedNetworkSwitchesPatchingTime"
                      ],
                    estimatedStorageServerPatchingTime:
                      p.properties?.estimatedPatchingTime?.[
                        "estimatedStorageServerPatchingTime"
                      ],
                    totalEstimatedPatchingTime:
                      p.properties?.estimatedPatchingTime?.[
                        "totalEstimatedPatchingTime"
                      ],
                  },
              customerContacts:
                p.properties?.["customerContacts"] === undefined
                  ? p.properties?.["customerContacts"]
                  : p.properties?.["customerContacts"].map((p: any) => {
                      return { email: p["email"] };
                    }),
              provisioningState: p.properties?.["provisioningState"],
              lifecycleState: p.properties?.["lifecycleState"],
              shape: p.properties?.["shape"],
              ociUrl: p.properties?.["ociUrl"],
              cpuCount: p.properties?.["cpuCount"],
              maxCpuCount: p.properties?.["maxCpuCount"],
              memorySizeInGbs: p.properties?.["memorySizeInGbs"],
              maxMemoryInGbs: p.properties?.["maxMemoryInGbs"],
              dbNodeStorageSizeInGbs: p.properties?.["dbNodeStorageSizeInGbs"],
              maxDbNodeStorageSizeInGbs:
                p.properties?.["maxDbNodeStorageSizeInGbs"],
              dataStorageSizeInTbs: p.properties?.["dataStorageSizeInTbs"],
              maxDataStorageInTbs: p.properties?.["maxDataStorageInTbs"],
              dbServerVersion: p.properties?.["dbServerVersion"],
              storageServerVersion: p.properties?.["storageServerVersion"],
              activatedStorageCount: p.properties?.["activatedStorageCount"],
              additionalStorageCount: p.properties?.["additionalStorageCount"],
              displayName: p.properties?.["displayName"],
              lastMaintenanceRunId: p.properties?.["lastMaintenanceRunId"],
              nextMaintenanceRunId: p.properties?.["nextMaintenanceRunId"],
              monthlyDbServerVersion: p.properties?.["monthlyDbServerVersion"],
              monthlyStorageServerVersion:
                p.properties?.["monthlyStorageServerVersion"],
            },
        zones: p["zones"],
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List CloudExadataInfrastructure resources by subscription ID */
export function cloudExadataInfrastructuresListBySubscription(
  context: Client,
  subscriptionId: string,
  options: CloudExadataInfrastructuresListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CloudExadataInfrastructure> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _cloudExadataInfrastructuresListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _cloudExadataInfrastructuresListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _cloudExadataInfrastructuresGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudExadataInfrastructuresGetDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudExadataInfrastructure> {
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
          ocid: result.body.properties?.["ocid"],
          computeCount: result.body.properties?.["computeCount"],
          storageCount: result.body.properties?.["storageCount"],
          totalStorageSizeInGbs:
            result.body.properties?.["totalStorageSizeInGbs"],
          availableStorageSizeInGbs:
            result.body.properties?.["availableStorageSizeInGbs"],
          timeCreated: result.body.properties?.["timeCreated"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          maintenanceWindow: !result.body.properties?.maintenanceWindow
            ? undefined
            : {
                preference:
                  result.body.properties?.maintenanceWindow?.["preference"],
                months:
                  result.body.properties?.maintenanceWindow?.["months"] ===
                  undefined
                    ? result.body.properties?.maintenanceWindow?.["months"]
                    : result.body.properties?.maintenanceWindow?.["months"].map(
                        (p: any) => {
                          return { name: p["name"] };
                        },
                      ),
                weeksOfMonth:
                  result.body.properties?.maintenanceWindow?.["weeksOfMonth"],
                daysOfWeek:
                  result.body.properties?.maintenanceWindow?.["daysOfWeek"] ===
                  undefined
                    ? result.body.properties?.maintenanceWindow?.["daysOfWeek"]
                    : result.body.properties?.maintenanceWindow?.[
                        "daysOfWeek"
                      ].map((p: any) => {
                        return { name: p["name"] };
                      }),
                hoursOfDay:
                  result.body.properties?.maintenanceWindow?.["hoursOfDay"],
                leadTimeInWeeks:
                  result.body.properties?.maintenanceWindow?.[
                    "leadTimeInWeeks"
                  ],
                patchingMode:
                  result.body.properties?.maintenanceWindow?.["patchingMode"],
                customActionTimeoutInMins:
                  result.body.properties?.maintenanceWindow?.[
                    "customActionTimeoutInMins"
                  ],
                isCustomActionTimeoutEnabled:
                  result.body.properties?.maintenanceWindow?.[
                    "isCustomActionTimeoutEnabled"
                  ],
                isMonthlyPatchingEnabled:
                  result.body.properties?.maintenanceWindow?.[
                    "isMonthlyPatchingEnabled"
                  ],
              },
          estimatedPatchingTime: !result.body.properties?.estimatedPatchingTime
            ? undefined
            : {
                estimatedDbServerPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedDbServerPatchingTime"
                  ],
                estimatedNetworkSwitchesPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedNetworkSwitchesPatchingTime"
                  ],
                estimatedStorageServerPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedStorageServerPatchingTime"
                  ],
                totalEstimatedPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "totalEstimatedPatchingTime"
                  ],
              },
          customerContacts:
            result.body.properties?.["customerContacts"] === undefined
              ? result.body.properties?.["customerContacts"]
              : result.body.properties?.["customerContacts"].map((p: any) => {
                  return { email: p["email"] };
                }),
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          shape: result.body.properties?.["shape"],
          ociUrl: result.body.properties?.["ociUrl"],
          cpuCount: result.body.properties?.["cpuCount"],
          maxCpuCount: result.body.properties?.["maxCpuCount"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          maxMemoryInGbs: result.body.properties?.["maxMemoryInGbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          maxDbNodeStorageSizeInGbs:
            result.body.properties?.["maxDbNodeStorageSizeInGbs"],
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          maxDataStorageInTbs: result.body.properties?.["maxDataStorageInTbs"],
          dbServerVersion: result.body.properties?.["dbServerVersion"],
          storageServerVersion:
            result.body.properties?.["storageServerVersion"],
          activatedStorageCount:
            result.body.properties?.["activatedStorageCount"],
          additionalStorageCount:
            result.body.properties?.["additionalStorageCount"],
          displayName: result.body.properties?.["displayName"],
          lastMaintenanceRunId:
            result.body.properties?.["lastMaintenanceRunId"],
          nextMaintenanceRunId:
            result.body.properties?.["nextMaintenanceRunId"],
          monthlyDbServerVersion:
            result.body.properties?.["monthlyDbServerVersion"],
          monthlyStorageServerVersion:
            result.body.properties?.["monthlyStorageServerVersion"],
        },
    zones: result.body["zones"],
  };
}

/** Get a CloudExadataInfrastructure */
export async function cloudExadataInfrastructuresGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresGetOptionalParams = {
    requestOptions: {},
  },
): Promise<CloudExadataInfrastructure> {
  const result = await _cloudExadataInfrastructuresGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudexadatainfrastructurename,
    options,
  );
  return _cloudExadataInfrastructuresGetDeserialize(result);
}

export function _cloudExadataInfrastructuresUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  properties: CloudExadataInfrastructureUpdate,
  options: CloudExadataInfrastructuresUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        zones: properties["zones"],
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : cloudExadataInfrastructureUpdatePropertiesSerializer(
              properties.properties,
            ),
      },
    });
}

export async function _cloudExadataInfrastructuresUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudExadataInfrastructure> {
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
          ocid: result.body.properties?.["ocid"],
          computeCount: result.body.properties?.["computeCount"],
          storageCount: result.body.properties?.["storageCount"],
          totalStorageSizeInGbs:
            result.body.properties?.["totalStorageSizeInGbs"],
          availableStorageSizeInGbs:
            result.body.properties?.["availableStorageSizeInGbs"],
          timeCreated: result.body.properties?.["timeCreated"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          maintenanceWindow: !result.body.properties?.maintenanceWindow
            ? undefined
            : {
                preference:
                  result.body.properties?.maintenanceWindow?.["preference"],
                months:
                  result.body.properties?.maintenanceWindow?.["months"] ===
                  undefined
                    ? result.body.properties?.maintenanceWindow?.["months"]
                    : result.body.properties?.maintenanceWindow?.["months"].map(
                        (p: any) => {
                          return { name: p["name"] };
                        },
                      ),
                weeksOfMonth:
                  result.body.properties?.maintenanceWindow?.["weeksOfMonth"],
                daysOfWeek:
                  result.body.properties?.maintenanceWindow?.["daysOfWeek"] ===
                  undefined
                    ? result.body.properties?.maintenanceWindow?.["daysOfWeek"]
                    : result.body.properties?.maintenanceWindow?.[
                        "daysOfWeek"
                      ].map((p: any) => {
                        return { name: p["name"] };
                      }),
                hoursOfDay:
                  result.body.properties?.maintenanceWindow?.["hoursOfDay"],
                leadTimeInWeeks:
                  result.body.properties?.maintenanceWindow?.[
                    "leadTimeInWeeks"
                  ],
                patchingMode:
                  result.body.properties?.maintenanceWindow?.["patchingMode"],
                customActionTimeoutInMins:
                  result.body.properties?.maintenanceWindow?.[
                    "customActionTimeoutInMins"
                  ],
                isCustomActionTimeoutEnabled:
                  result.body.properties?.maintenanceWindow?.[
                    "isCustomActionTimeoutEnabled"
                  ],
                isMonthlyPatchingEnabled:
                  result.body.properties?.maintenanceWindow?.[
                    "isMonthlyPatchingEnabled"
                  ],
              },
          estimatedPatchingTime: !result.body.properties?.estimatedPatchingTime
            ? undefined
            : {
                estimatedDbServerPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedDbServerPatchingTime"
                  ],
                estimatedNetworkSwitchesPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedNetworkSwitchesPatchingTime"
                  ],
                estimatedStorageServerPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedStorageServerPatchingTime"
                  ],
                totalEstimatedPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "totalEstimatedPatchingTime"
                  ],
              },
          customerContacts:
            result.body.properties?.["customerContacts"] === undefined
              ? result.body.properties?.["customerContacts"]
              : result.body.properties?.["customerContacts"].map((p: any) => {
                  return { email: p["email"] };
                }),
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          shape: result.body.properties?.["shape"],
          ociUrl: result.body.properties?.["ociUrl"],
          cpuCount: result.body.properties?.["cpuCount"],
          maxCpuCount: result.body.properties?.["maxCpuCount"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          maxMemoryInGbs: result.body.properties?.["maxMemoryInGbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          maxDbNodeStorageSizeInGbs:
            result.body.properties?.["maxDbNodeStorageSizeInGbs"],
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          maxDataStorageInTbs: result.body.properties?.["maxDataStorageInTbs"],
          dbServerVersion: result.body.properties?.["dbServerVersion"],
          storageServerVersion:
            result.body.properties?.["storageServerVersion"],
          activatedStorageCount:
            result.body.properties?.["activatedStorageCount"],
          additionalStorageCount:
            result.body.properties?.["additionalStorageCount"],
          displayName: result.body.properties?.["displayName"],
          lastMaintenanceRunId:
            result.body.properties?.["lastMaintenanceRunId"],
          nextMaintenanceRunId:
            result.body.properties?.["nextMaintenanceRunId"],
          monthlyDbServerVersion:
            result.body.properties?.["monthlyDbServerVersion"],
          monthlyStorageServerVersion:
            result.body.properties?.["monthlyStorageServerVersion"],
        },
    zones: result.body["zones"],
  };
}

/** Update a CloudExadataInfrastructure */
export function cloudExadataInfrastructuresUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  properties: CloudExadataInfrastructureUpdate,
  options: CloudExadataInfrastructuresUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<CloudExadataInfrastructure>,
  CloudExadataInfrastructure
> {
  return getLongRunningPoller(
    context,
    _cloudExadataInfrastructuresUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudExadataInfrastructuresUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudexadatainfrastructurename,
          properties,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<CloudExadataInfrastructure>,
    CloudExadataInfrastructure
  >;
}

export function _cloudExadataInfrastructuresDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudExadataInfrastructuresDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a CloudExadataInfrastructure */
export function cloudExadataInfrastructuresDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _cloudExadataInfrastructuresDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudExadataInfrastructuresDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudexadatainfrastructurename,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _cloudExadataInfrastructuresCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  resource: CloudExadataInfrastructure,
  options: CloudExadataInfrastructuresCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
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
          : cloudExadataInfrastructurePropertiesSerializer(resource.properties),
        zones: resource["zones"],
      },
    });
}

export async function _cloudExadataInfrastructuresCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudExadataInfrastructure> {
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
          ocid: result.body.properties?.["ocid"],
          computeCount: result.body.properties?.["computeCount"],
          storageCount: result.body.properties?.["storageCount"],
          totalStorageSizeInGbs:
            result.body.properties?.["totalStorageSizeInGbs"],
          availableStorageSizeInGbs:
            result.body.properties?.["availableStorageSizeInGbs"],
          timeCreated: result.body.properties?.["timeCreated"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          maintenanceWindow: !result.body.properties?.maintenanceWindow
            ? undefined
            : {
                preference:
                  result.body.properties?.maintenanceWindow?.["preference"],
                months:
                  result.body.properties?.maintenanceWindow?.["months"] ===
                  undefined
                    ? result.body.properties?.maintenanceWindow?.["months"]
                    : result.body.properties?.maintenanceWindow?.["months"].map(
                        (p: any) => {
                          return { name: p["name"] };
                        },
                      ),
                weeksOfMonth:
                  result.body.properties?.maintenanceWindow?.["weeksOfMonth"],
                daysOfWeek:
                  result.body.properties?.maintenanceWindow?.["daysOfWeek"] ===
                  undefined
                    ? result.body.properties?.maintenanceWindow?.["daysOfWeek"]
                    : result.body.properties?.maintenanceWindow?.[
                        "daysOfWeek"
                      ].map((p: any) => {
                        return { name: p["name"] };
                      }),
                hoursOfDay:
                  result.body.properties?.maintenanceWindow?.["hoursOfDay"],
                leadTimeInWeeks:
                  result.body.properties?.maintenanceWindow?.[
                    "leadTimeInWeeks"
                  ],
                patchingMode:
                  result.body.properties?.maintenanceWindow?.["patchingMode"],
                customActionTimeoutInMins:
                  result.body.properties?.maintenanceWindow?.[
                    "customActionTimeoutInMins"
                  ],
                isCustomActionTimeoutEnabled:
                  result.body.properties?.maintenanceWindow?.[
                    "isCustomActionTimeoutEnabled"
                  ],
                isMonthlyPatchingEnabled:
                  result.body.properties?.maintenanceWindow?.[
                    "isMonthlyPatchingEnabled"
                  ],
              },
          estimatedPatchingTime: !result.body.properties?.estimatedPatchingTime
            ? undefined
            : {
                estimatedDbServerPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedDbServerPatchingTime"
                  ],
                estimatedNetworkSwitchesPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedNetworkSwitchesPatchingTime"
                  ],
                estimatedStorageServerPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedStorageServerPatchingTime"
                  ],
                totalEstimatedPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "totalEstimatedPatchingTime"
                  ],
              },
          customerContacts:
            result.body.properties?.["customerContacts"] === undefined
              ? result.body.properties?.["customerContacts"]
              : result.body.properties?.["customerContacts"].map((p: any) => {
                  return { email: p["email"] };
                }),
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          shape: result.body.properties?.["shape"],
          ociUrl: result.body.properties?.["ociUrl"],
          cpuCount: result.body.properties?.["cpuCount"],
          maxCpuCount: result.body.properties?.["maxCpuCount"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          maxMemoryInGbs: result.body.properties?.["maxMemoryInGbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          maxDbNodeStorageSizeInGbs:
            result.body.properties?.["maxDbNodeStorageSizeInGbs"],
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          maxDataStorageInTbs: result.body.properties?.["maxDataStorageInTbs"],
          dbServerVersion: result.body.properties?.["dbServerVersion"],
          storageServerVersion:
            result.body.properties?.["storageServerVersion"],
          activatedStorageCount:
            result.body.properties?.["activatedStorageCount"],
          additionalStorageCount:
            result.body.properties?.["additionalStorageCount"],
          displayName: result.body.properties?.["displayName"],
          lastMaintenanceRunId:
            result.body.properties?.["lastMaintenanceRunId"],
          nextMaintenanceRunId:
            result.body.properties?.["nextMaintenanceRunId"],
          monthlyDbServerVersion:
            result.body.properties?.["monthlyDbServerVersion"],
          monthlyStorageServerVersion:
            result.body.properties?.["monthlyStorageServerVersion"],
        },
    zones: result.body["zones"],
  };
}

/** Create a CloudExadataInfrastructure */
export function cloudExadataInfrastructuresCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  resource: CloudExadataInfrastructure,
  options: CloudExadataInfrastructuresCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<CloudExadataInfrastructure>,
  CloudExadataInfrastructure
> {
  return getLongRunningPoller(
    context,
    _cloudExadataInfrastructuresCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudExadataInfrastructuresCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudexadatainfrastructurename,
          resource,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<CloudExadataInfrastructure>,
    CloudExadataInfrastructure
  >;
}

export function _cloudExadataInfrastructuresListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CloudExadataInfrastructuresListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudExadataInfrastructuresListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_CloudExadataInfrastructureListResult> {
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
              ocid: p.properties?.["ocid"],
              computeCount: p.properties?.["computeCount"],
              storageCount: p.properties?.["storageCount"],
              totalStorageSizeInGbs: p.properties?.["totalStorageSizeInGbs"],
              availableStorageSizeInGbs:
                p.properties?.["availableStorageSizeInGbs"],
              timeCreated: p.properties?.["timeCreated"],
              lifecycleDetails: p.properties?.["lifecycleDetails"],
              maintenanceWindow: !p.properties?.maintenanceWindow
                ? undefined
                : {
                    preference: p.properties?.maintenanceWindow?.["preference"],
                    months:
                      p.properties?.maintenanceWindow?.["months"] === undefined
                        ? p.properties?.maintenanceWindow?.["months"]
                        : p.properties?.maintenanceWindow?.["months"].map(
                            (p: any) => {
                              return { name: p["name"] };
                            },
                          ),
                    weeksOfMonth:
                      p.properties?.maintenanceWindow?.["weeksOfMonth"],
                    daysOfWeek:
                      p.properties?.maintenanceWindow?.["daysOfWeek"] ===
                      undefined
                        ? p.properties?.maintenanceWindow?.["daysOfWeek"]
                        : p.properties?.maintenanceWindow?.["daysOfWeek"].map(
                            (p: any) => {
                              return { name: p["name"] };
                            },
                          ),
                    hoursOfDay: p.properties?.maintenanceWindow?.["hoursOfDay"],
                    leadTimeInWeeks:
                      p.properties?.maintenanceWindow?.["leadTimeInWeeks"],
                    patchingMode:
                      p.properties?.maintenanceWindow?.["patchingMode"],
                    customActionTimeoutInMins:
                      p.properties?.maintenanceWindow?.[
                        "customActionTimeoutInMins"
                      ],
                    isCustomActionTimeoutEnabled:
                      p.properties?.maintenanceWindow?.[
                        "isCustomActionTimeoutEnabled"
                      ],
                    isMonthlyPatchingEnabled:
                      p.properties?.maintenanceWindow?.[
                        "isMonthlyPatchingEnabled"
                      ],
                  },
              estimatedPatchingTime: !p.properties?.estimatedPatchingTime
                ? undefined
                : {
                    estimatedDbServerPatchingTime:
                      p.properties?.estimatedPatchingTime?.[
                        "estimatedDbServerPatchingTime"
                      ],
                    estimatedNetworkSwitchesPatchingTime:
                      p.properties?.estimatedPatchingTime?.[
                        "estimatedNetworkSwitchesPatchingTime"
                      ],
                    estimatedStorageServerPatchingTime:
                      p.properties?.estimatedPatchingTime?.[
                        "estimatedStorageServerPatchingTime"
                      ],
                    totalEstimatedPatchingTime:
                      p.properties?.estimatedPatchingTime?.[
                        "totalEstimatedPatchingTime"
                      ],
                  },
              customerContacts:
                p.properties?.["customerContacts"] === undefined
                  ? p.properties?.["customerContacts"]
                  : p.properties?.["customerContacts"].map((p: any) => {
                      return { email: p["email"] };
                    }),
              provisioningState: p.properties?.["provisioningState"],
              lifecycleState: p.properties?.["lifecycleState"],
              shape: p.properties?.["shape"],
              ociUrl: p.properties?.["ociUrl"],
              cpuCount: p.properties?.["cpuCount"],
              maxCpuCount: p.properties?.["maxCpuCount"],
              memorySizeInGbs: p.properties?.["memorySizeInGbs"],
              maxMemoryInGbs: p.properties?.["maxMemoryInGbs"],
              dbNodeStorageSizeInGbs: p.properties?.["dbNodeStorageSizeInGbs"],
              maxDbNodeStorageSizeInGbs:
                p.properties?.["maxDbNodeStorageSizeInGbs"],
              dataStorageSizeInTbs: p.properties?.["dataStorageSizeInTbs"],
              maxDataStorageInTbs: p.properties?.["maxDataStorageInTbs"],
              dbServerVersion: p.properties?.["dbServerVersion"],
              storageServerVersion: p.properties?.["storageServerVersion"],
              activatedStorageCount: p.properties?.["activatedStorageCount"],
              additionalStorageCount: p.properties?.["additionalStorageCount"],
              displayName: p.properties?.["displayName"],
              lastMaintenanceRunId: p.properties?.["lastMaintenanceRunId"],
              nextMaintenanceRunId: p.properties?.["nextMaintenanceRunId"],
              monthlyDbServerVersion: p.properties?.["monthlyDbServerVersion"],
              monthlyStorageServerVersion:
                p.properties?.["monthlyStorageServerVersion"],
            },
        zones: p["zones"],
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List CloudExadataInfrastructure resources by resource group */
export function cloudExadataInfrastructuresListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CloudExadataInfrastructuresListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CloudExadataInfrastructure> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _cloudExadataInfrastructuresListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _cloudExadataInfrastructuresListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _cloudExadataInfrastructuresAddStorageCapacitySend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresAddStorageCapacityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/addStorageCapacity",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudExadataInfrastructuresAddStorageCapacityDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudExadataInfrastructure> {
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
          ocid: result.body.properties?.["ocid"],
          computeCount: result.body.properties?.["computeCount"],
          storageCount: result.body.properties?.["storageCount"],
          totalStorageSizeInGbs:
            result.body.properties?.["totalStorageSizeInGbs"],
          availableStorageSizeInGbs:
            result.body.properties?.["availableStorageSizeInGbs"],
          timeCreated: result.body.properties?.["timeCreated"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          maintenanceWindow: !result.body.properties?.maintenanceWindow
            ? undefined
            : {
                preference:
                  result.body.properties?.maintenanceWindow?.["preference"],
                months:
                  result.body.properties?.maintenanceWindow?.["months"] ===
                  undefined
                    ? result.body.properties?.maintenanceWindow?.["months"]
                    : result.body.properties?.maintenanceWindow?.["months"].map(
                        (p: any) => {
                          return { name: p["name"] };
                        },
                      ),
                weeksOfMonth:
                  result.body.properties?.maintenanceWindow?.["weeksOfMonth"],
                daysOfWeek:
                  result.body.properties?.maintenanceWindow?.["daysOfWeek"] ===
                  undefined
                    ? result.body.properties?.maintenanceWindow?.["daysOfWeek"]
                    : result.body.properties?.maintenanceWindow?.[
                        "daysOfWeek"
                      ].map((p: any) => {
                        return { name: p["name"] };
                      }),
                hoursOfDay:
                  result.body.properties?.maintenanceWindow?.["hoursOfDay"],
                leadTimeInWeeks:
                  result.body.properties?.maintenanceWindow?.[
                    "leadTimeInWeeks"
                  ],
                patchingMode:
                  result.body.properties?.maintenanceWindow?.["patchingMode"],
                customActionTimeoutInMins:
                  result.body.properties?.maintenanceWindow?.[
                    "customActionTimeoutInMins"
                  ],
                isCustomActionTimeoutEnabled:
                  result.body.properties?.maintenanceWindow?.[
                    "isCustomActionTimeoutEnabled"
                  ],
                isMonthlyPatchingEnabled:
                  result.body.properties?.maintenanceWindow?.[
                    "isMonthlyPatchingEnabled"
                  ],
              },
          estimatedPatchingTime: !result.body.properties?.estimatedPatchingTime
            ? undefined
            : {
                estimatedDbServerPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedDbServerPatchingTime"
                  ],
                estimatedNetworkSwitchesPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedNetworkSwitchesPatchingTime"
                  ],
                estimatedStorageServerPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedStorageServerPatchingTime"
                  ],
                totalEstimatedPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "totalEstimatedPatchingTime"
                  ],
              },
          customerContacts:
            result.body.properties?.["customerContacts"] === undefined
              ? result.body.properties?.["customerContacts"]
              : result.body.properties?.["customerContacts"].map((p: any) => {
                  return { email: p["email"] };
                }),
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          shape: result.body.properties?.["shape"],
          ociUrl: result.body.properties?.["ociUrl"],
          cpuCount: result.body.properties?.["cpuCount"],
          maxCpuCount: result.body.properties?.["maxCpuCount"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          maxMemoryInGbs: result.body.properties?.["maxMemoryInGbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          maxDbNodeStorageSizeInGbs:
            result.body.properties?.["maxDbNodeStorageSizeInGbs"],
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          maxDataStorageInTbs: result.body.properties?.["maxDataStorageInTbs"],
          dbServerVersion: result.body.properties?.["dbServerVersion"],
          storageServerVersion:
            result.body.properties?.["storageServerVersion"],
          activatedStorageCount:
            result.body.properties?.["activatedStorageCount"],
          additionalStorageCount:
            result.body.properties?.["additionalStorageCount"],
          displayName: result.body.properties?.["displayName"],
          lastMaintenanceRunId:
            result.body.properties?.["lastMaintenanceRunId"],
          nextMaintenanceRunId:
            result.body.properties?.["nextMaintenanceRunId"],
          monthlyDbServerVersion:
            result.body.properties?.["monthlyDbServerVersion"],
          monthlyStorageServerVersion:
            result.body.properties?.["monthlyStorageServerVersion"],
        },
    zones: result.body["zones"],
  };
}

/** Perform add storage capacity on exadata infra */
export function cloudExadataInfrastructuresAddStorageCapacity(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresAddStorageCapacityOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<CloudExadataInfrastructure>,
  CloudExadataInfrastructure
> {
  return getLongRunningPoller(
    context,
    _cloudExadataInfrastructuresAddStorageCapacityDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudExadataInfrastructuresAddStorageCapacitySend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudexadatainfrastructurename,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<CloudExadataInfrastructure>,
    CloudExadataInfrastructure
  >;
}
