// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  extendedLocationSerializer,
  campaignVersionPropertiesSerializer,
  CampaignVersion,
  CampaignVersionTagsUpdate,
  _CampaignVersionListResult,
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
  CampaignVersionsGetOptionalParams,
  CampaignVersionsCreateOrUpdateOptionalParams,
  CampaignVersionsUpdateOptionalParams,
  CampaignVersionsDeleteOptionalParams,
  CampaignVersionsListByCampaignOptionalParams,
} from "../../models/options.js";

export function _campaignVersionsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  campaignName: string,
  versionName: string,
  options: CampaignVersionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/campaigns/{campaignName}/versions/{versionName}",
      subscriptionId,
      resourceGroupName,
      campaignName,
      versionName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _campaignVersionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<CampaignVersion> {
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
          firstStage: result.body.properties?.["firstStage"],
          selfDriving: result.body.properties?.["selfDriving"],
          stages: result.body.properties?.["stages"],
        },
    extendedLocation: !result.body.extendedLocation
      ? undefined
      : {
          name: result.body.extendedLocation?.["name"],
          type: result.body.extendedLocation?.["type"],
        },
  };
}

/** Returns the details of the campaignVersion. */
export async function campaignVersionsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  campaignName: string,
  versionName: string,
  options: CampaignVersionsGetOptionalParams = { requestOptions: {} },
): Promise<CampaignVersion> {
  const result = await _campaignVersionsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    campaignName,
    versionName,
    options,
  );
  return _campaignVersionsGetDeserialize(result);
}

export function _campaignVersionsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  campaignName: string,
  versionName: string,
  resource: CampaignVersion,
  options: CampaignVersionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/campaigns/{campaignName}/versions/{versionName}",
      subscriptionId,
      resourceGroupName,
      campaignName,
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
          : campaignVersionPropertiesSerializer(resource.properties),
        extendedLocation: !resource.extendedLocation
          ? resource.extendedLocation
          : extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _campaignVersionsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CampaignVersion> {
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
          firstStage: result.body.properties?.["firstStage"],
          selfDriving: result.body.properties?.["selfDriving"],
          stages: result.body.properties?.["stages"],
        },
    extendedLocation: !result.body.extendedLocation
      ? undefined
      : {
          name: result.body.extendedLocation?.["name"],
          type: result.body.extendedLocation?.["type"],
        },
  };
}

/** Creates a new or updates an existing campaignVersion. */
export function campaignVersionsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  campaignName: string,
  versionName: string,
  resource: CampaignVersion,
  options: CampaignVersionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<CampaignVersion>, CampaignVersion> {
  return getLongRunningPoller(
    context,
    _campaignVersionsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _campaignVersionsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          campaignName,
          versionName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<CampaignVersion>, CampaignVersion>;
}

export function _campaignVersionsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  campaignName: string,
  versionName: string,
  properties: CampaignVersionTagsUpdate,
  options: CampaignVersionsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/campaigns/{campaignName}/versions/{versionName}",
      subscriptionId,
      resourceGroupName,
      campaignName,
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

export async function _campaignVersionsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CampaignVersion> {
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
          firstStage: result.body.properties?.["firstStage"],
          selfDriving: result.body.properties?.["selfDriving"],
          stages: result.body.properties?.["stages"],
        },
    extendedLocation: !result.body.extendedLocation
      ? undefined
      : {
          name: result.body.extendedLocation?.["name"],
          type: result.body.extendedLocation?.["type"],
        },
  };
}

/** Updates an existing campaignVersion. */
export function campaignVersionsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  campaignName: string,
  versionName: string,
  properties: CampaignVersionTagsUpdate,
  options: CampaignVersionsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CampaignVersion>, CampaignVersion> {
  return getLongRunningPoller(
    context,
    _campaignVersionsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _campaignVersionsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          campaignName,
          versionName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<CampaignVersion>, CampaignVersion>;
}

export function _campaignVersionsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  campaignName: string,
  versionName: string,
  options: CampaignVersionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/campaigns/{campaignName}/versions/{versionName}",
      subscriptionId,
      resourceGroupName,
      campaignName,
      versionName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _campaignVersionsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes a specified campaignVersion. */
export function campaignVersionsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  campaignName: string,
  versionName: string,
  options: CampaignVersionsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _campaignVersionsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _campaignVersionsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          campaignName,
          versionName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _campaignVersionsListByCampaignSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  campaignName: string,
  options: CampaignVersionsListByCampaignOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/campaigns/{campaignName}/versions",
      subscriptionId,
      resourceGroupName,
      campaignName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _campaignVersionsListByCampaignDeserialize(
  result: PathUncheckedResponse,
): Promise<_CampaignVersionListResult> {
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
              firstStage: p.properties?.["firstStage"],
              selfDriving: p.properties?.["selfDriving"],
              stages: p.properties?.["stages"],
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

/** Lists CampaignVersions within a Campaign. */
export function campaignVersionsListByCampaign(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  campaignName: string,
  options: CampaignVersionsListByCampaignOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CampaignVersion> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _campaignVersionsListByCampaignSend(
        context,
        subscriptionId,
        resourceGroupName,
        campaignName,
        options,
      ),
    _campaignVersionsListByCampaignDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
