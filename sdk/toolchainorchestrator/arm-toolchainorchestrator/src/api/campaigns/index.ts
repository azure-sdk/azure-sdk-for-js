// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  extendedLocationSerializer,
  campaignPropertiesSerializer,
  Campaign,
  CampaignTagsUpdate,
  _CampaignListResult,
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
  CampaignsGetOptionalParams,
  CampaignsCreateOrUpdateOptionalParams,
  CampaignsUpdateOptionalParams,
  CampaignsDeleteOptionalParams,
  CampaignsListByResourceGroupOptionalParams,
  CampaignsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _campaignsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  campaignName: string,
  options: CampaignsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/campaigns/{campaignName}",
      subscriptionId,
      resourceGroupName,
      campaignName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _campaignsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Campaign> {
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

/** Returns the details of the campaign. */
export async function campaignsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  campaignName: string,
  options: CampaignsGetOptionalParams = { requestOptions: {} },
): Promise<Campaign> {
  const result = await _campaignsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    campaignName,
    options,
  );
  return _campaignsGetDeserialize(result);
}

export function _campaignsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  campaignName: string,
  resource: Campaign,
  options: CampaignsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/campaigns/{campaignName}",
      subscriptionId,
      resourceGroupName,
      campaignName,
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
          : campaignPropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _campaignsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Campaign> {
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

/** Creates a new or updates an existing campaign. */
export function campaignsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  campaignName: string,
  resource: Campaign,
  options: CampaignsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Campaign>, Campaign> {
  return getLongRunningPoller(
    context,
    _campaignsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _campaignsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          campaignName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<Campaign>, Campaign>;
}

export function _campaignsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  campaignName: string,
  properties: CampaignTagsUpdate,
  options: CampaignsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/campaigns/{campaignName}",
      subscriptionId,
      resourceGroupName,
      campaignName,
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

export async function _campaignsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Campaign> {
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

/** Updates an existing campaign. */
export function campaignsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  campaignName: string,
  properties: CampaignTagsUpdate,
  options: CampaignsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Campaign>, Campaign> {
  return getLongRunningPoller(
    context,
    _campaignsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _campaignsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          campaignName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<Campaign>, Campaign>;
}

export function _campaignsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  campaignName: string,
  options: CampaignsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/campaigns/{campaignName}",
      subscriptionId,
      resourceGroupName,
      campaignName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _campaignsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes a specified campaign. */
export function campaignsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  campaignName: string,
  options: CampaignsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _campaignsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _campaignsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          campaignName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _campaignsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CampaignsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/campaigns",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _campaignsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_CampaignListResult> {
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

/** Returns a collection of campaigns within the resource group. */
export function campaignsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CampaignsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Campaign> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _campaignsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _campaignsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _campaignsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: CampaignsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ToolchainOrchestrator/campaigns",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _campaignsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_CampaignListResult> {
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

/** Lists campaigns within an Azure subscription. */
export function campaignsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: CampaignsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Campaign> {
  return buildPagedAsyncIterator(
    context,
    () => _campaignsListBySubscriptionSend(context, subscriptionId, options),
    _campaignsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
