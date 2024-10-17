// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  extendedLocationSerializer,
  solutionPropertiesSerializer,
  Solution,
  SolutionTagsUpdate,
  _SolutionListResult,
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
  SolutionsGetOptionalParams,
  SolutionsCreateOrUpdateOptionalParams,
  SolutionsUpdateOptionalParams,
  SolutionsDeleteOptionalParams,
  SolutionsListByResourceGroupOptionalParams,
  SolutionsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _solutionsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionName: string,
  options: SolutionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/solutions/{solutionName}",
      subscriptionId,
      resourceGroupName,
      solutionName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _solutionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Solution> {
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
      : { provisioningState: result.body.properties?.["provisioningState"] },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Returns details of specified Solution resource. */
export async function solutionsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionName: string,
  options: SolutionsGetOptionalParams = { requestOptions: {} },
): Promise<Solution> {
  const result = await _solutionsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    solutionName,
    options,
  );
  return _solutionsGetDeserialize(result);
}

export function _solutionsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionName: string,
  resource: Solution,
  options: SolutionsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/solutions/{solutionName}",
      subscriptionId,
      resourceGroupName,
      solutionName,
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
          : solutionPropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _solutionsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Solution> {
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
      : { provisioningState: result.body.properties?.["provisioningState"] },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Creates new or updates existing Solution resource. */
export function solutionsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionName: string,
  resource: Solution,
  options: SolutionsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Solution>, Solution> {
  return getLongRunningPoller(
    context,
    _solutionsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _solutionsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          solutionName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<Solution>, Solution>;
}

export function _solutionsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionName: string,
  properties: SolutionTagsUpdate,
  options: SolutionsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/solutions/{solutionName}",
      subscriptionId,
      resourceGroupName,
      solutionName,
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

export async function _solutionsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Solution> {
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
      : { provisioningState: result.body.properties?.["provisioningState"] },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Updates existing Solution resource. */
export function solutionsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionName: string,
  properties: SolutionTagsUpdate,
  options: SolutionsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Solution>, Solution> {
  return getLongRunningPoller(
    context,
    _solutionsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _solutionsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          solutionName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<Solution>, Solution>;
}

export function _solutionsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionName: string,
  options: SolutionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/solutions/{solutionName}",
      subscriptionId,
      resourceGroupName,
      solutionName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _solutionsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes specified Solution resource. */
export function solutionsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionName: string,
  options: SolutionsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _solutionsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _solutionsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          solutionName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _solutionsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SolutionsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/solutions",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _solutionsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_SolutionListResult> {
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
          : { provisioningState: p.properties?.["provisioningState"] },
        extendedLocation: {
          name: p.extendedLocation["name"],
          type: p.extendedLocation["type"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Returns a collection of Solution resources within the resource group. */
export function solutionsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SolutionsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Solution> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _solutionsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _solutionsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _solutionsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: SolutionsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ToolchainOrchestrator/solutions",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _solutionsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_SolutionListResult> {
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
          : { provisioningState: p.properties?.["provisioningState"] },
        extendedLocation: {
          name: p.extendedLocation["name"],
          type: p.extendedLocation["type"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Lists Solutions resources within an Azure subscription. */
export function solutionsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: SolutionsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Solution> {
  return buildPagedAsyncIterator(
    context,
    () => _solutionsListBySubscriptionSend(context, subscriptionId, options),
    _solutionsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
