// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  extendedLocationSerializer,
  solutionVersionPropertiesSerializer,
  SolutionVersion,
  SolutionVersionTagsUpdate,
  _SolutionVersionListResult,
} from "../../models/models.js";
import { ToolchainOrchestratorContext as Client } from "../index.js";
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
  SolutionVersionsGetOptionalParams,
  SolutionVersionsCreateOrUpdateOptionalParams,
  SolutionVersionsUpdateOptionalParams,
  SolutionVersionsDeleteOptionalParams,
  SolutionVersionsListBySolutionOptionalParams,
} from "../../models/options.js";

export function _solutionVersionsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionName: string,
  versionName: string,
  options: SolutionVersionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/solutions/{solutionName}/versions/{versionName}",
      subscriptionId,
      resourceGroupName,
      solutionName,
      versionName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _solutionVersionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SolutionVersion> {
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
          components:
            result.body.properties?.["components"] === undefined
              ? result.body.properties?.["components"]
              : result.body.properties?.["components"].map((p: any) => {
                  return {
                    name: p["name"],
                    metadata: p["metadata"],
                    properties: p["properties"],
                    constraints: p["constraints"],
                    dependencies: p["dependencies"],
                    type: p["type"],
                  };
                }),
          displayName: result.body.properties?.["displayName"],
          metadata: result.body.properties?.["metadata"],
        },
    extendedLocation: !result.body.extendedLocation
      ? undefined
      : {
          name: result.body.extendedLocation?.["name"],
          type: result.body.extendedLocation?.["type"],
        },
  };
}

/** Returns details of specified SolutionVersion resource. */
export async function solutionVersionsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionName: string,
  versionName: string,
  options: SolutionVersionsGetOptionalParams = { requestOptions: {} },
): Promise<SolutionVersion> {
  const result = await _solutionVersionsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    solutionName,
    versionName,
    options,
  );
  return _solutionVersionsGetDeserialize(result);
}

export function _solutionVersionsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionName: string,
  versionName: string,
  resource: SolutionVersion,
  options: SolutionVersionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/solutions/{solutionName}/versions/{versionName}",
      subscriptionId,
      resourceGroupName,
      solutionName,
      versionName,
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
          : solutionVersionPropertiesSerializer(resource.properties),
        extendedLocation: !resource.extendedLocation
          ? resource.extendedLocation
          : extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _solutionVersionsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SolutionVersion> {
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
          components:
            result.body.properties?.["components"] === undefined
              ? result.body.properties?.["components"]
              : result.body.properties?.["components"].map((p: any) => {
                  return {
                    name: p["name"],
                    metadata: p["metadata"],
                    properties: p["properties"],
                    constraints: p["constraints"],
                    dependencies: p["dependencies"],
                    type: p["type"],
                  };
                }),
          displayName: result.body.properties?.["displayName"],
          metadata: result.body.properties?.["metadata"],
        },
    extendedLocation: !result.body.extendedLocation
      ? undefined
      : {
          name: result.body.extendedLocation?.["name"],
          type: result.body.extendedLocation?.["type"],
        },
  };
}

/** Creates new or updates existing SolutionVersion resource. */
export function solutionVersionsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionName: string,
  versionName: string,
  resource: SolutionVersion,
  options: SolutionVersionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<SolutionVersion>, SolutionVersion> {
  return getLongRunningPoller(
    context,
    _solutionVersionsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _solutionVersionsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          solutionName,
          versionName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<SolutionVersion>, SolutionVersion>;
}

export function _solutionVersionsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionName: string,
  versionName: string,
  properties: SolutionVersionTagsUpdate,
  options: SolutionVersionsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/solutions/{solutionName}/versions/{versionName}",
      subscriptionId,
      resourceGroupName,
      solutionName,
      versionName,
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

export async function _solutionVersionsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SolutionVersion> {
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
          components:
            result.body.properties?.["components"] === undefined
              ? result.body.properties?.["components"]
              : result.body.properties?.["components"].map((p: any) => {
                  return {
                    name: p["name"],
                    metadata: p["metadata"],
                    properties: p["properties"],
                    constraints: p["constraints"],
                    dependencies: p["dependencies"],
                    type: p["type"],
                  };
                }),
          displayName: result.body.properties?.["displayName"],
          metadata: result.body.properties?.["metadata"],
        },
    extendedLocation: !result.body.extendedLocation
      ? undefined
      : {
          name: result.body.extendedLocation?.["name"],
          type: result.body.extendedLocation?.["type"],
        },
  };
}

/** Updates existing SolutionVersion resource. */
export function solutionVersionsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionName: string,
  versionName: string,
  properties: SolutionVersionTagsUpdate,
  options: SolutionVersionsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SolutionVersion>, SolutionVersion> {
  return getLongRunningPoller(
    context,
    _solutionVersionsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _solutionVersionsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          solutionName,
          versionName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<SolutionVersion>, SolutionVersion>;
}

export function _solutionVersionsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionName: string,
  versionName: string,
  options: SolutionVersionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/solutions/{solutionName}/versions/{versionName}",
      subscriptionId,
      resourceGroupName,
      solutionName,
      versionName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _solutionVersionsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes specified SolutionVersion resource. */
export function solutionVersionsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionName: string,
  versionName: string,
  options: SolutionVersionsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _solutionVersionsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _solutionVersionsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          solutionName,
          versionName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _solutionVersionsListBySolutionSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionName: string,
  options: SolutionVersionsListBySolutionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/solutions/{solutionName}/versions",
      subscriptionId,
      resourceGroupName,
      solutionName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _solutionVersionsListBySolutionDeserialize(
  result: PathUncheckedResponse,
): Promise<_SolutionVersionListResult> {
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
              components:
                p.properties?.["components"] === undefined
                  ? p.properties?.["components"]
                  : p.properties?.["components"].map((p: any) => {
                      return {
                        name: p["name"],
                        metadata: p["metadata"],
                        properties: p["properties"],
                        constraints: p["constraints"],
                        dependencies: p["dependencies"],
                        type: p["type"],
                      };
                    }),
              displayName: p.properties?.["displayName"],
              metadata: p.properties?.["metadata"],
            },
        extendedLocation: !p.extendedLocation
          ? undefined
          : {
              name: p.extendedLocation?.["name"],
              type: p.extendedLocation?.["type"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Returns a collection of SolutionVersion resources belonging to a Solution resource. */
export function solutionVersionsListBySolution(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionName: string,
  options: SolutionVersionsListBySolutionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SolutionVersion> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _solutionVersionsListBySolutionSend(
        context,
        subscriptionId,
        resourceGroupName,
        solutionName,
        options,
      ),
    _solutionVersionsListBySolutionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
