// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  sAPDiscoverySitePropertiesSerializer,
  extendedLocationSerializer,
  SAPDiscoverySite,
  SAPDiscoverySiteTagsUpdate,
  OperationStatusResult,
  _SAPDiscoverySiteListResult,
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
  SAPDiscoverySitesGetOptionalParams,
  SAPDiscoverySitesCreateOptionalParams,
  SAPDiscoverySitesUpdateOptionalParams,
  SAPDiscoverySitesDeleteOptionalParams,
  SAPDiscoverySitesListByResourceGroupOptionalParams,
  SAPDiscoverySitesListBySubscriptionOptionalParams,
  SAPDiscoverySitesImportEntitiesOptionalParams,
} from "../../models/options.js";

export function _sAPDiscoverySitesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  options: SAPDiscoverySitesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}",
      subscriptionId,
      resourceGroupName,
      sapDiscoverySiteName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _sAPDiscoverySitesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPDiscoverySite> {
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
          masterSiteId: result.body.properties?.["masterSiteId"],
          migrateProjectId: result.body.properties?.["migrateProjectId"],
          provisioningState: result.body.properties?.["provisioningState"],
          errors: !result.body.properties?.errors
            ? undefined
            : {
                properties: !result.body.properties?.errors?.properties
                  ? undefined
                  : {
                      code: result.body.properties?.errors?.properties?.[
                        "code"
                      ],
                      message:
                        result.body.properties?.errors?.properties?.["message"],
                      recommendation:
                        result.body.properties?.errors?.properties?.[
                          "recommendation"
                        ],
                      details:
                        result.body.properties?.errors?.properties?.[
                          "details"
                        ] === undefined
                          ? result.body.properties?.errors?.properties?.[
                              "details"
                            ]
                          : result.body.properties?.errors?.properties?.[
                              "details"
                            ].map((p: any) => {
                              return {
                                code: p["code"],
                                message: p["message"],
                                recommendation: p["recommendation"],
                                details: !p.details ? undefined : p.details,
                              };
                            }),
                    },
              },
        },
    extendedLocation: !result.body.extendedLocation
      ? undefined
      : {
          type: result.body.extendedLocation?.["type"],
          name: result.body.extendedLocation?.["name"],
        },
  };
}

/** Gets a SAP Migration discovery site resource. */
export async function sAPDiscoverySitesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  options: SAPDiscoverySitesGetOptionalParams = { requestOptions: {} },
): Promise<SAPDiscoverySite> {
  const result = await _sAPDiscoverySitesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    sapDiscoverySiteName,
    options,
  );
  return _sAPDiscoverySitesGetDeserialize(result);
}

export function _sAPDiscoverySitesCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  resource: SAPDiscoverySite,
  options: SAPDiscoverySitesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}",
      subscriptionId,
      resourceGroupName,
      sapDiscoverySiteName,
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
          : sAPDiscoverySitePropertiesSerializer(resource.properties),
        extendedLocation: !resource.extendedLocation
          ? resource.extendedLocation
          : extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _sAPDiscoverySitesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPDiscoverySite> {
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
          masterSiteId: result.body.properties?.["masterSiteId"],
          migrateProjectId: result.body.properties?.["migrateProjectId"],
          provisioningState: result.body.properties?.["provisioningState"],
          errors: !result.body.properties?.errors
            ? undefined
            : {
                properties: !result.body.properties?.errors?.properties
                  ? undefined
                  : {
                      code: result.body.properties?.errors?.properties?.[
                        "code"
                      ],
                      message:
                        result.body.properties?.errors?.properties?.["message"],
                      recommendation:
                        result.body.properties?.errors?.properties?.[
                          "recommendation"
                        ],
                      details:
                        result.body.properties?.errors?.properties?.[
                          "details"
                        ] === undefined
                          ? result.body.properties?.errors?.properties?.[
                              "details"
                            ]
                          : result.body.properties?.errors?.properties?.[
                              "details"
                            ].map((p: any) => {
                              return {
                                code: p["code"],
                                message: p["message"],
                                recommendation: p["recommendation"],
                                details: !p.details ? undefined : p.details,
                              };
                            }),
                    },
              },
        },
    extendedLocation: !result.body.extendedLocation
      ? undefined
      : {
          type: result.body.extendedLocation?.["type"],
          name: result.body.extendedLocation?.["name"],
        },
  };
}

/** Creates a discovery site resource for SAP Migration. This resource will be used to run system discovery and assessment with Azure Migrate. */
export function sAPDiscoverySitesCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  resource: SAPDiscoverySite,
  options: SAPDiscoverySitesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SAPDiscoverySite>, SAPDiscoverySite> {
  return getLongRunningPoller(
    context,
    _sAPDiscoverySitesCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sAPDiscoverySitesCreateSend(
          context,
          subscriptionId,
          resourceGroupName,
          sapDiscoverySiteName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<SAPDiscoverySite>, SAPDiscoverySite>;
}

export function _sAPDiscoverySitesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  properties: SAPDiscoverySiteTagsUpdate,
  options: SAPDiscoverySitesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}",
      subscriptionId,
      resourceGroupName,
      sapDiscoverySiteName,
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

export async function _sAPDiscoverySitesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPDiscoverySite> {
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
          masterSiteId: result.body.properties?.["masterSiteId"],
          migrateProjectId: result.body.properties?.["migrateProjectId"],
          provisioningState: result.body.properties?.["provisioningState"],
          errors: !result.body.properties?.errors
            ? undefined
            : {
                properties: !result.body.properties?.errors?.properties
                  ? undefined
                  : {
                      code: result.body.properties?.errors?.properties?.[
                        "code"
                      ],
                      message:
                        result.body.properties?.errors?.properties?.["message"],
                      recommendation:
                        result.body.properties?.errors?.properties?.[
                          "recommendation"
                        ],
                      details:
                        result.body.properties?.errors?.properties?.[
                          "details"
                        ] === undefined
                          ? result.body.properties?.errors?.properties?.[
                              "details"
                            ]
                          : result.body.properties?.errors?.properties?.[
                              "details"
                            ].map((p: any) => {
                              return {
                                code: p["code"],
                                message: p["message"],
                                recommendation: p["recommendation"],
                                details: !p.details ? undefined : p.details,
                              };
                            }),
                    },
              },
        },
    extendedLocation: !result.body.extendedLocation
      ? undefined
      : {
          type: result.body.extendedLocation?.["type"],
          name: result.body.extendedLocation?.["name"],
        },
  };
}

/** Updates a SAP Migration discovery site resource. */
export async function sAPDiscoverySitesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  properties: SAPDiscoverySiteTagsUpdate,
  options: SAPDiscoverySitesUpdateOptionalParams = { requestOptions: {} },
): Promise<SAPDiscoverySite> {
  const result = await _sAPDiscoverySitesUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    sapDiscoverySiteName,
    properties,
    options,
  );
  return _sAPDiscoverySitesUpdateDeserialize(result);
}

export function _sAPDiscoverySitesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  options: SAPDiscoverySitesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}",
      subscriptionId,
      resourceGroupName,
      sapDiscoverySiteName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _sAPDiscoverySitesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes a SAP Migration discovery site resource and its child resources, that is the associated SAP Instances and Server Instances. */
export function sAPDiscoverySitesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  options: SAPDiscoverySitesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _sAPDiscoverySitesDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sAPDiscoverySitesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          sapDiscoverySiteName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _sAPDiscoverySitesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SAPDiscoverySitesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _sAPDiscoverySitesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_SAPDiscoverySiteListResult> {
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
              masterSiteId: p.properties?.["masterSiteId"],
              migrateProjectId: p.properties?.["migrateProjectId"],
              provisioningState: p.properties?.["provisioningState"],
              errors: !p.properties?.errors
                ? undefined
                : {
                    properties: !p.properties?.errors?.properties
                      ? undefined
                      : {
                          code: p.properties?.errors?.properties?.["code"],
                          message:
                            p.properties?.errors?.properties?.["message"],
                          recommendation:
                            p.properties?.errors?.properties?.[
                              "recommendation"
                            ],
                          details:
                            p.properties?.errors?.properties?.["details"] ===
                            undefined
                              ? p.properties?.errors?.properties?.["details"]
                              : p.properties?.errors?.properties?.[
                                  "details"
                                ].map((p: any) => {
                                  return {
                                    code: p["code"],
                                    message: p["message"],
                                    recommendation: p["recommendation"],
                                    details: !p.details ? undefined : p.details,
                                  };
                                }),
                        },
                  },
            },
        extendedLocation: !p.extendedLocation
          ? undefined
          : {
              type: p.extendedLocation?.["type"],
              name: p.extendedLocation?.["name"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Gets all SAP Migration discovery site resources in a Resource Group. */
export function sAPDiscoverySitesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SAPDiscoverySitesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SAPDiscoverySite> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _sAPDiscoverySitesListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _sAPDiscoverySitesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _sAPDiscoverySitesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: SAPDiscoverySitesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/sapDiscoverySites",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _sAPDiscoverySitesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_SAPDiscoverySiteListResult> {
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
              masterSiteId: p.properties?.["masterSiteId"],
              migrateProjectId: p.properties?.["migrateProjectId"],
              provisioningState: p.properties?.["provisioningState"],
              errors: !p.properties?.errors
                ? undefined
                : {
                    properties: !p.properties?.errors?.properties
                      ? undefined
                      : {
                          code: p.properties?.errors?.properties?.["code"],
                          message:
                            p.properties?.errors?.properties?.["message"],
                          recommendation:
                            p.properties?.errors?.properties?.[
                              "recommendation"
                            ],
                          details:
                            p.properties?.errors?.properties?.["details"] ===
                            undefined
                              ? p.properties?.errors?.properties?.["details"]
                              : p.properties?.errors?.properties?.[
                                  "details"
                                ].map((p: any) => {
                                  return {
                                    code: p["code"],
                                    message: p["message"],
                                    recommendation: p["recommendation"],
                                    details: !p.details ? undefined : p.details,
                                  };
                                }),
                        },
                  },
            },
        extendedLocation: !p.extendedLocation
          ? undefined
          : {
              type: p.extendedLocation?.["type"],
              name: p.extendedLocation?.["name"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Gets all SAP Migration discovery site resources in a Subscription. */
export function sAPDiscoverySitesListBySubscription(
  context: Client,
  subscriptionId: string,
  options: SAPDiscoverySitesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SAPDiscoverySite> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _sAPDiscoverySitesListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _sAPDiscoverySitesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _sAPDiscoverySitesImportEntitiesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  options: SAPDiscoverySitesImportEntitiesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/importEntities",
      subscriptionId,
      resourceGroupName,
      sapDiscoverySiteName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _sAPDiscoverySitesImportEntitiesDeserialize(
  result: PathUncheckedResponse,
): Promise<OperationStatusResult> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    status: result.body["status"],
    percentComplete: result.body["percentComplete"],
    startTime:
      result.body["startTime"] !== undefined
        ? new Date(result.body["startTime"])
        : undefined,
    endTime:
      result.body["endTime"] !== undefined
        ? new Date(result.body["endTime"])
        : undefined,
    operations:
      result.body["operations"] === undefined
        ? result.body["operations"]
        : result.body["operations"].map((p: any) => {
            return {
              id: p["id"],
              name: p["name"],
              status: p["status"],
              percentComplete: p["percentComplete"],
              startTime:
                p["startTime"] !== undefined
                  ? new Date(p["startTime"])
                  : undefined,
              endTime:
                p["endTime"] !== undefined ? new Date(p["endTime"]) : undefined,
              operations: !p.operations ? undefined : (p.operations as any),
              error: !p.error
                ? undefined
                : {
                    code: p.error?.["code"],
                    message: p.error?.["message"],
                    target: p.error?.["target"],
                    details:
                      p.error?.["details"] === undefined
                        ? p.error?.["details"]
                        : p.error?.["details"].map((p: any) => {
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
                      p.error?.["additionalInfo"] === undefined
                        ? p.error?.["additionalInfo"]
                        : p.error?.["additionalInfo"].map((p: any) => {
                            return { type: p["type"], info: p["info"] };
                          }),
                  },
            };
          }),
    error: !result.body.error
      ? undefined
      : {
          code: result.body.error?.["code"],
          message: result.body.error?.["message"],
          target: result.body.error?.["target"],
          details:
            result.body.error?.["details"] === undefined
              ? result.body.error?.["details"]
              : result.body.error?.["details"].map((p: any) => {
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
                }),
          additionalInfo:
            result.body.error?.["additionalInfo"] === undefined
              ? result.body.error?.["additionalInfo"]
              : result.body.error?.["additionalInfo"].map((p: any) => {
                  return { type: p["type"], info: p["info"] };
                }),
        },
  };
}

/** Import your SAP systems' inventory using the [Discovery template](https://go.microsoft.com/fwlink/?linkid=2249111) into your SAP Migration discovery site resource and it's child resources, the SAP instances and Server instances. */
export function sAPDiscoverySitesImportEntities(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  options: SAPDiscoverySitesImportEntitiesOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<OperationStatusResult>, OperationStatusResult> {
  return getLongRunningPoller(
    context,
    _sAPDiscoverySitesImportEntitiesDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sAPDiscoverySitesImportEntitiesSend(
          context,
          subscriptionId,
          resourceGroupName,
          sapDiscoverySiteName,
          options,
        ),
    },
  ) as PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}
