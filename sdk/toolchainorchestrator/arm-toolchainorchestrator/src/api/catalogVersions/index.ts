// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  extendedLocationSerializer,
  catalogVersionPropertiesSerializer,
  CatalogVersion,
  CatalogVersionTagsUpdate,
  EvalExpressionResponse,
  _CatalogVersionListResult,
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
  CatalogVersionsGetOptionalParams,
  CatalogVersionsCreateOrUpdateOptionalParams,
  CatalogVersionsUpdateOptionalParams,
  CatalogVersionsDeleteOptionalParams,
  CatalogVersionsListByCatalogOptionalParams,
  CatalogVersionsEvalExpressionOptionalParams,
} from "../../models/options.js";

export function _catalogVersionsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  versionName: string,
  options: CatalogVersionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/catalogs/{catalogName}/versions/{versionName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      versionName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _catalogVersionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<CatalogVersion> {
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
          properties: result.body.properties?.["properties"],
          metadata: result.body.properties?.["metadata"],
          parentName: result.body.properties?.["parentName"],
          catalogType: result.body.properties?.["catalogType"],
          status: !result.body.properties?.status
            ? undefined
            : { properties: result.body.properties?.status?.["properties"] },
        },
    extendedLocation: !result.body.extendedLocation
      ? undefined
      : {
          name: result.body.extendedLocation?.["name"],
          type: result.body.extendedLocation?.["type"],
        },
  };
}

/** Returns the details of the CatalogVersion. */
export async function catalogVersionsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  versionName: string,
  options: CatalogVersionsGetOptionalParams = { requestOptions: {} },
): Promise<CatalogVersion> {
  const result = await _catalogVersionsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    versionName,
    options,
  );
  return _catalogVersionsGetDeserialize(result);
}

export function _catalogVersionsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  versionName: string,
  resource: CatalogVersion,
  options: CatalogVersionsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/catalogs/{catalogName}/versions/{versionName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
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
          : catalogVersionPropertiesSerializer(resource.properties),
        extendedLocation: !resource.extendedLocation
          ? resource.extendedLocation
          : extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _catalogVersionsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CatalogVersion> {
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
          properties: result.body.properties?.["properties"],
          metadata: result.body.properties?.["metadata"],
          parentName: result.body.properties?.["parentName"],
          catalogType: result.body.properties?.["catalogType"],
          status: !result.body.properties?.status
            ? undefined
            : { properties: result.body.properties?.status?.["properties"] },
        },
    extendedLocation: !result.body.extendedLocation
      ? undefined
      : {
          name: result.body.extendedLocation?.["name"],
          type: result.body.extendedLocation?.["type"],
        },
  };
}

/** Creates new or updates a CatalogVersion. */
export function catalogVersionsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  versionName: string,
  resource: CatalogVersion,
  options: CatalogVersionsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CatalogVersion>, CatalogVersion> {
  return getLongRunningPoller(
    context,
    _catalogVersionsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _catalogVersionsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          versionName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<CatalogVersion>, CatalogVersion>;
}

export function _catalogVersionsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  versionName: string,
  properties: CatalogVersionTagsUpdate,
  options: CatalogVersionsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/catalogs/{catalogName}/versions/{versionName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
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

export async function _catalogVersionsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CatalogVersion> {
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
          properties: result.body.properties?.["properties"],
          metadata: result.body.properties?.["metadata"],
          parentName: result.body.properties?.["parentName"],
          catalogType: result.body.properties?.["catalogType"],
          status: !result.body.properties?.status
            ? undefined
            : { properties: result.body.properties?.status?.["properties"] },
        },
    extendedLocation: !result.body.extendedLocation
      ? undefined
      : {
          name: result.body.extendedLocation?.["name"],
          type: result.body.extendedLocation?.["type"],
        },
  };
}

/** Updates the existing CatalogVersion. */
export function catalogVersionsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  versionName: string,
  properties: CatalogVersionTagsUpdate,
  options: CatalogVersionsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CatalogVersion>, CatalogVersion> {
  return getLongRunningPoller(
    context,
    _catalogVersionsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _catalogVersionsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          versionName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<CatalogVersion>, CatalogVersion>;
}

export function _catalogVersionsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  versionName: string,
  options: CatalogVersionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/catalogs/{catalogName}/versions/{versionName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      versionName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _catalogVersionsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes the specified CatalogVersion. */
export function catalogVersionsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  versionName: string,
  options: CatalogVersionsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _catalogVersionsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _catalogVersionsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          versionName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _catalogVersionsListByCatalogSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogVersionsListByCatalogOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/catalogs/{catalogName}/versions",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _catalogVersionsListByCatalogDeserialize(
  result: PathUncheckedResponse,
): Promise<_CatalogVersionListResult> {
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
              properties: p.properties?.["properties"],
              metadata: p.properties?.["metadata"],
              parentName: p.properties?.["parentName"],
              catalogType: p.properties?.["catalogType"],
              status: !p.properties?.status
                ? undefined
                : { properties: p.properties?.status?.["properties"] },
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

/** Lists CatalogVersions within a Catalog. */
export function catalogVersionsListByCatalog(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogVersionsListByCatalogOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<CatalogVersion> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _catalogVersionsListByCatalogSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    _catalogVersionsListByCatalogDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _catalogVersionsEvalExpressionSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  versionName: string,
  options: CatalogVersionsEvalExpressionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/catalogs/{catalogName}/versions/{versionName}/evalExpression",
      subscriptionId,
      resourceGroupName,
      catalogName,
      versionName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _catalogVersionsEvalExpressionDeserialize(
  result: PathUncheckedResponse,
): Promise<EvalExpressionResponse> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    status: result.body["status"],
    error: !result.body.error
      ? undefined
      : {
          code: result.body.error?.["code"],
          message: result.body.error?.["message"],
        },
    properties: result.body["properties"],
  };
}

/** Evaluate the CatalogVersion's properties */
export function catalogVersionsEvalExpression(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  versionName: string,
  options: CatalogVersionsEvalExpressionOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<EvalExpressionResponse>, EvalExpressionResponse> {
  return getLongRunningPoller(
    context,
    _catalogVersionsEvalExpressionDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _catalogVersionsEvalExpressionSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          versionName,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<EvalExpressionResponse>,
    EvalExpressionResponse
  >;
}
