// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  sAPInstancePropertiesSerializer,
  SAPInstance,
  SAPInstanceTagsUpdate,
  _SAPInstanceListResult,
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
  SAPInstancesGetOptionalParams,
  SAPInstancesCreateOptionalParams,
  SAPInstancesUpdateOptionalParams,
  SAPInstancesDeleteOptionalParams,
  SAPInstancesListBySapDiscoverySiteOptionalParams,
} from "../../models/options.js";

export function _sAPInstancesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  options: SAPInstancesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances/{sapInstanceName}",
      subscriptionId,
      resourceGroupName,
      sapDiscoverySiteName,
      sapInstanceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _sAPInstancesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPInstance> {
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
          systemSid: result.body.properties?.["systemSid"],
          environment: result.body.properties?.["environment"],
          landscapeSid: result.body.properties?.["landscapeSid"],
          application: result.body.properties?.["application"],
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
  };
}

/** Gets the SAP Instance resource. */
export async function sAPInstancesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  options: SAPInstancesGetOptionalParams = { requestOptions: {} },
): Promise<SAPInstance> {
  const result = await _sAPInstancesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    sapDiscoverySiteName,
    sapInstanceName,
    options,
  );
  return _sAPInstancesGetDeserialize(result);
}

export function _sAPInstancesCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  resource: SAPInstance,
  options: SAPInstancesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances/{sapInstanceName}",
      subscriptionId,
      resourceGroupName,
      sapDiscoverySiteName,
      sapInstanceName,
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
          : sAPInstancePropertiesSerializer(resource.properties),
      },
    });
}

export async function _sAPInstancesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPInstance> {
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
          systemSid: result.body.properties?.["systemSid"],
          environment: result.body.properties?.["environment"],
          landscapeSid: result.body.properties?.["landscapeSid"],
          application: result.body.properties?.["application"],
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
  };
}

/** Creates the SAP Instance resource. <br><br>This will be used by service only. PUT operation on this resource by end user will return a Bad Request error. */
export function sAPInstancesCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  resource: SAPInstance,
  options: SAPInstancesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SAPInstance>, SAPInstance> {
  return getLongRunningPoller(
    context,
    _sAPInstancesCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sAPInstancesCreateSend(
          context,
          subscriptionId,
          resourceGroupName,
          sapDiscoverySiteName,
          sapInstanceName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<SAPInstance>, SAPInstance>;
}

export function _sAPInstancesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  properties: SAPInstanceTagsUpdate,
  options: SAPInstancesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances/{sapInstanceName}",
      subscriptionId,
      resourceGroupName,
      sapDiscoverySiteName,
      sapInstanceName,
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

export async function _sAPInstancesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPInstance> {
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
          systemSid: result.body.properties?.["systemSid"],
          environment: result.body.properties?.["environment"],
          landscapeSid: result.body.properties?.["landscapeSid"],
          application: result.body.properties?.["application"],
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
  };
}

/** Updates the SAP Instance resource. */
export async function sAPInstancesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  properties: SAPInstanceTagsUpdate,
  options: SAPInstancesUpdateOptionalParams = { requestOptions: {} },
): Promise<SAPInstance> {
  const result = await _sAPInstancesUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    sapDiscoverySiteName,
    sapInstanceName,
    properties,
    options,
  );
  return _sAPInstancesUpdateDeserialize(result);
}

export function _sAPInstancesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  options: SAPInstancesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances/{sapInstanceName}",
      subscriptionId,
      resourceGroupName,
      sapDiscoverySiteName,
      sapInstanceName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _sAPInstancesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes the SAP Instance resource. <br><br>This will be used by service only. Delete operation on this resource by end user will return a Bad Request error. You can delete the parent resource, which is the SAP Migration discovery site resource, using the delete operation on it. */
export function sAPInstancesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  options: SAPInstancesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _sAPInstancesDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sAPInstancesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          sapDiscoverySiteName,
          sapInstanceName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _sAPInstancesListBySapDiscoverySiteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  options: SAPInstancesListBySapDiscoverySiteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances",
      subscriptionId,
      resourceGroupName,
      sapDiscoverySiteName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _sAPInstancesListBySapDiscoverySiteDeserialize(
  result: PathUncheckedResponse,
): Promise<_SAPInstanceListResult> {
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
              systemSid: p.properties?.["systemSid"],
              environment: p.properties?.["environment"],
              landscapeSid: p.properties?.["landscapeSid"],
              application: p.properties?.["application"],
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
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Lists the SAP Instance resources for the given SAP Migration discovery site resource. */
export function sAPInstancesListBySapDiscoverySite(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  options: SAPInstancesListBySapDiscoverySiteOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SAPInstance> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _sAPInstancesListBySapDiscoverySiteSend(
        context,
        subscriptionId,
        resourceGroupName,
        sapDiscoverySiteName,
        options,
      ),
    _sAPInstancesListBySapDiscoverySiteDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
