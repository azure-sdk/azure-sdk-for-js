// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  imagePropertiesSerializer,
  catalogPropertiesSerializer,
  Device,
  Deployment,
  Image,
  DeviceGroup,
  CountDevicesResponse,
  Catalog,
  CatalogUpdate,
  ListDeviceGroupsRequest,
  DeviceInsight,
  _CatalogListResult,
  _DeploymentListResult,
  _DeviceGroupListResult,
  _DeviceListResult,
  _PagedDeviceInsight,
} from "../../models/models.js";
import { AzureSphereContext as Client } from "../index.js";
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
  CatalogsGetOptionalParams,
  CatalogsCreateOrUpdateOptionalParams,
  CatalogsUpdateOptionalParams,
  CatalogsDeleteOptionalParams,
  CatalogsListByResourceGroupOptionalParams,
  CatalogsListBySubscriptionOptionalParams,
  CatalogsCountDevicesOptionalParams,
  CatalogsListDeploymentsOptionalParams,
  CatalogsListDeviceGroupsOptionalParams,
  CatalogsListDeviceInsightsOptionalParams,
  CatalogsListDevicesOptionalParams,
  CatalogsUploadImageOptionalParams,
} from "../../models/options.js";

export function _catalogsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _catalogsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Catalog> {
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
          tenantId: result.body.properties?.["tenantId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a Catalog */
export async function catalogsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsGetOptionalParams = { requestOptions: {} },
): Promise<Catalog> {
  const result = await _catalogsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    options,
  );
  return _catalogsGetDeserialize(result);
}

export function _catalogsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  resource: Catalog,
  options: CatalogsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
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
          : catalogPropertiesSerializer(resource.properties),
      },
    });
}

export async function _catalogsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Catalog> {
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
          tenantId: result.body.properties?.["tenantId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a Catalog */
export function catalogsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  resource: Catalog,
  options: CatalogsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Catalog>, Catalog> {
  return getLongRunningPoller(
    context,
    _catalogsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _catalogsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<Catalog>, Catalog>;
}

export function _catalogsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  properties: CatalogUpdate,
  options: CatalogsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
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

export async function _catalogsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Catalog> {
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
          tenantId: result.body.properties?.["tenantId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Update a Catalog */
export async function catalogsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  properties: CatalogUpdate,
  options: CatalogsUpdateOptionalParams = { requestOptions: {} },
): Promise<Catalog> {
  const result = await _catalogsUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    properties,
    options,
  );
  return _catalogsUpdateDeserialize(result);
}

export function _catalogsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _catalogsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Catalog */
export function catalogsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _catalogsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _catalogsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _catalogsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CatalogsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _catalogsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_CatalogListResult> {
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
              tenantId: p.properties?.["tenantId"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Catalog resources by resource group */
export function catalogsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CatalogsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Catalog> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _catalogsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _catalogsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _catalogsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: CatalogsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AzureSphere/catalogs",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _catalogsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_CatalogListResult> {
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
              tenantId: p.properties?.["tenantId"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Catalog resources by subscription ID */
export function catalogsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: CatalogsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Catalog> {
  return buildPagedAsyncIterator(
    context,
    () => _catalogsListBySubscriptionSend(context, subscriptionId, options),
    _catalogsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _catalogsCountDevicesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsCountDevicesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/countDevices",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _catalogsCountDevicesDeserialize(
  result: PathUncheckedResponse,
): Promise<CountDevicesResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"],
  };
}

/** Counts devices in catalog. */
export async function catalogsCountDevices(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsCountDevicesOptionalParams = { requestOptions: {} },
): Promise<CountDevicesResponse> {
  const result = await _catalogsCountDevicesSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    options,
  );
  return _catalogsCountDevicesDeserialize(result);
}

export function _catalogsListDeploymentsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsListDeploymentsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeployments",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        $filter: options?.filter,
        $top: options?.top,
        $skip: options?.skip,
        $maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _catalogsListDeploymentsDeserialize(
  result: PathUncheckedResponse,
): Promise<_DeploymentListResult> {
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
              deploymentId: p.properties?.["deploymentId"],
              deployedImages:
                p.properties?.["deployedImages"] === undefined
                  ? p.properties?.["deployedImages"]
                  : p.properties?.["deployedImages"].map((p: any) => {
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
                              lastModifiedByType:
                                p.systemData?.["lastModifiedByType"],
                              lastModifiedAt:
                                p.systemData?.["lastModifiedAt"] !== undefined
                                  ? new Date(p.systemData?.["lastModifiedAt"])
                                  : undefined,
                            },
                        properties: !p.properties
                          ? undefined
                          : {
                              image: p.properties?.["image"],
                              imageId: p.properties?.["imageId"],
                              imageName: p.properties?.["imageName"],
                              regionalDataBoundary:
                                p.properties?.["regionalDataBoundary"],
                              uri: p.properties?.["uri"],
                              description: p.properties?.["description"],
                              componentId: p.properties?.["componentId"],
                              imageType: p.properties?.["imageType"],
                              provisioningState:
                                p.properties?.["provisioningState"],
                            },
                      };
                    }),
              deploymentDateUtc:
                p.properties?.["deploymentDateUtc"] !== undefined
                  ? new Date(p.properties?.["deploymentDateUtc"])
                  : undefined,
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Lists deployments for catalog. */
export function catalogsListDeployments(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsListDeploymentsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Deployment> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _catalogsListDeploymentsSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    _catalogsListDeploymentsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _catalogsListDeviceGroupsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  listDeviceGroupsRequest: ListDeviceGroupsRequest,
  options: CatalogsListDeviceGroupsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeviceGroups",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        $filter: options?.filter,
        $top: options?.top,
        $skip: options?.skip,
        $maxpagesize: options?.maxpagesize,
      },
      body: { deviceGroupName: listDeviceGroupsRequest["deviceGroupName"] },
    });
}

export async function _catalogsListDeviceGroupsDeserialize(
  result: PathUncheckedResponse,
): Promise<_DeviceGroupListResult> {
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
              description: p.properties?.["description"],
              osFeedType: p.properties?.["osFeedType"],
              updatePolicy: p.properties?.["updatePolicy"],
              allowCrashDumpsCollection:
                p.properties?.["allowCrashDumpsCollection"],
              regionalDataBoundary: p.properties?.["regionalDataBoundary"],
              hasDeployment: p.properties?.["hasDeployment"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List the device groups for the catalog. */
export function catalogsListDeviceGroups(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  listDeviceGroupsRequest: ListDeviceGroupsRequest,
  options: CatalogsListDeviceGroupsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DeviceGroup> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _catalogsListDeviceGroupsSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        listDeviceGroupsRequest,
        options,
      ),
    _catalogsListDeviceGroupsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _catalogsListDeviceInsightsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsListDeviceInsightsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeviceInsights",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        $filter: options?.filter,
        $top: options?.top,
        $skip: options?.skip,
        $maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _catalogsListDeviceInsightsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedDeviceInsight> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        deviceId: p["deviceId"],
        description: p["description"],
        startTimestampUtc: new Date(p["startTimestampUtc"]),
        endTimestampUtc: new Date(p["endTimestampUtc"]),
        eventCategory: p["eventCategory"],
        eventClass: p["eventClass"],
        eventType: p["eventType"],
        eventCount: p["eventCount"],
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Lists device insights for catalog. */
export function catalogsListDeviceInsights(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsListDeviceInsightsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DeviceInsight> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _catalogsListDeviceInsightsSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    _catalogsListDeviceInsightsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _catalogsListDevicesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsListDevicesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDevices",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        $filter: options?.filter,
        $top: options?.top,
        $skip: options?.skip,
        $maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _catalogsListDevicesDeserialize(
  result: PathUncheckedResponse,
): Promise<_DeviceListResult> {
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
              deviceId: p.properties?.["deviceId"],
              chipSku: p.properties?.["chipSku"],
              lastAvailableOsVersion: p.properties?.["lastAvailableOsVersion"],
              lastInstalledOsVersion: p.properties?.["lastInstalledOsVersion"],
              lastOsUpdateUtc:
                p.properties?.["lastOsUpdateUtc"] !== undefined
                  ? new Date(p.properties?.["lastOsUpdateUtc"])
                  : undefined,
              lastUpdateRequestUtc:
                p.properties?.["lastUpdateRequestUtc"] !== undefined
                  ? new Date(p.properties?.["lastUpdateRequestUtc"])
                  : undefined,
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Lists devices for catalog. */
export function catalogsListDevices(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsListDevicesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Device> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _catalogsListDevicesSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    _catalogsListDevicesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _catalogsUploadImageSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  uploadImageRequest: Image,
  options: CatalogsUploadImageOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/uploadImage",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !uploadImageRequest.properties
          ? uploadImageRequest.properties
          : imagePropertiesSerializer(uploadImageRequest.properties),
      },
    });
}

export async function _catalogsUploadImageDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Creates an image. Use this action when the image ID is unknown. */
export function catalogsUploadImage(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  uploadImageRequest: Image,
  options: CatalogsUploadImageOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _catalogsUploadImageDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _catalogsUploadImageSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          uploadImageRequest,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}
