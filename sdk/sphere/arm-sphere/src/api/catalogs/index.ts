// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CatalogsCountDevicesOptionalParams,
  CatalogsCreateOrUpdateOptionalParams,
  CatalogsDeleteOptionalParams,
  CatalogsGetOptionalParams,
  CatalogsListByResourceGroupOptionalParams,
  CatalogsListBySubscriptionOptionalParams,
  CatalogsListDeploymentsOptionalParams,
  CatalogsListDeviceGroupsOptionalParams,
  CatalogsListDeviceInsightsOptionalParams,
  CatalogsListDevicesOptionalParams,
  CatalogsUpdateOptionalParams,
  CatalogsUploadImageOptionalParams,
  AzureSphereContext as Client,
} from "../index.js";
import {
  Device,
  errorResponseDeserializer,
  _DeviceListResult,
  _deviceListResultDeserializer,
  Deployment,
  Image,
  imageSerializer,
  _DeploymentListResult,
  _deploymentListResultDeserializer,
  DeviceGroup,
  _DeviceGroupListResult,
  _deviceGroupListResultDeserializer,
  CountDevicesResponse,
  countDevicesResponseDeserializer,
  Catalog,
  catalogSerializer,
  catalogDeserializer,
  CatalogUpdate,
  catalogUpdateSerializer,
  _CatalogListResult,
  _catalogListResultDeserializer,
  ListDeviceGroupsRequest,
  listDeviceGroupsRequestSerializer,
  _PagedDeviceInsight,
  _pagedDeviceInsightDeserializer,
  DeviceInsight,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _catalogsUploadImageSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  uploadImageRequest: Image,
  options: CatalogsUploadImageOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/uploadImage{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: imageSerializer(uploadImageRequest),
  });
}

export async function _catalogsUploadImageDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Creates an image. Use this action when the image ID is unknown. */
export function catalogsUploadImage(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  uploadImageRequest: Image,
  options: CatalogsUploadImageOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _catalogsUploadImageDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _catalogsUploadImageSend(
        context,
        resourceGroupName,
        catalogName,
        uploadImageRequest,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _catalogsListDevicesSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsListDevicesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDevices{?api-version,$filter,$top,$skip,$maxpagesize}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      "api-version": context.apiVersion,
      $filter: options?.filter,
      $top: options?.top,
      $skip: options?.skip,
      $maxpagesize: options?.maxpagesize,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _catalogsListDevicesDeserialize(
  result: PathUncheckedResponse,
): Promise<_DeviceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _deviceListResultDeserializer(result.body);
}

/** Lists devices for catalog. */
export function catalogsListDevices(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsListDevicesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Device> {
  return buildPagedAsyncIterator(
    context,
    () => _catalogsListDevicesSend(context, resourceGroupName, catalogName, options),
    _catalogsListDevicesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _catalogsListDeviceInsightsSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsListDeviceInsightsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeviceInsights{?api-version,$filter,$top,$skip,$maxpagesize}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      "api-version": context.apiVersion,
      $filter: options?.filter,
      $top: options?.top,
      $skip: options?.skip,
      $maxpagesize: options?.maxpagesize,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _catalogsListDeviceInsightsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedDeviceInsight> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _pagedDeviceInsightDeserializer(result.body);
}

/** Lists device insights for catalog. */
export function catalogsListDeviceInsights(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsListDeviceInsightsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DeviceInsight> {
  return buildPagedAsyncIterator(
    context,
    () => _catalogsListDeviceInsightsSend(context, resourceGroupName, catalogName, options),
    _catalogsListDeviceInsightsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _catalogsListDeviceGroupsSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  listDeviceGroupsRequest: ListDeviceGroupsRequest,
  options: CatalogsListDeviceGroupsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeviceGroups{?api-version,$filter,$top,$skip,$maxpagesize}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      "api-version": context.apiVersion,
      $filter: options?.filter,
      $top: options?.top,
      $skip: options?.skip,
      $maxpagesize: options?.maxpagesize,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: listDeviceGroupsRequestSerializer(listDeviceGroupsRequest),
  });
}

export async function _catalogsListDeviceGroupsDeserialize(
  result: PathUncheckedResponse,
): Promise<_DeviceGroupListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _deviceGroupListResultDeserializer(result.body);
}

/** List the device groups for the catalog. */
export function catalogsListDeviceGroups(
  context: Client,
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

export function _catalogsListDeploymentsSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsListDeploymentsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeployments{?api-version,$filter,$top,$skip,$maxpagesize}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      "api-version": context.apiVersion,
      $filter: options?.filter,
      $top: options?.top,
      $skip: options?.skip,
      $maxpagesize: options?.maxpagesize,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _catalogsListDeploymentsDeserialize(
  result: PathUncheckedResponse,
): Promise<_DeploymentListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _deploymentListResultDeserializer(result.body);
}

/** Lists deployments for catalog. */
export function catalogsListDeployments(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsListDeploymentsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Deployment> {
  return buildPagedAsyncIterator(
    context,
    () => _catalogsListDeploymentsSend(context, resourceGroupName, catalogName, options),
    _catalogsListDeploymentsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _catalogsCountDevicesSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsCountDevicesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/countDevices{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _catalogsCountDevicesDeserialize(
  result: PathUncheckedResponse,
): Promise<CountDevicesResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return countDevicesResponseDeserializer(result.body);
}

/** Counts devices in catalog. */
export async function catalogsCountDevices(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsCountDevicesOptionalParams = { requestOptions: {} },
): Promise<CountDevicesResponse> {
  const result = await _catalogsCountDevicesSend(context, resourceGroupName, catalogName, options);
  return _catalogsCountDevicesDeserialize(result);
}

export function _catalogsListBySubscriptionSend(
  context: Client,
  options: CatalogsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.AzureSphere/catalogs{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _catalogsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_CatalogListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _catalogListResultDeserializer(result.body);
}

/** List Catalog resources by subscription ID */
export function catalogsListBySubscription(
  context: Client,
  options: CatalogsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Catalog> {
  return buildPagedAsyncIterator(
    context,
    () => _catalogsListBySubscriptionSend(context, options),
    _catalogsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _catalogsListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: CatalogsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _catalogsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_CatalogListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _catalogListResultDeserializer(result.body);
}

/** List Catalog resources by resource group */
export function catalogsListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: CatalogsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Catalog> {
  return buildPagedAsyncIterator(
    context,
    () => _catalogsListByResourceGroupSend(context, resourceGroupName, options),
    _catalogsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _catalogsDeleteSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _catalogsDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a Catalog */
export function catalogsDelete(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _catalogsDeleteDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _catalogsDeleteSend(context, resourceGroupName, catalogName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _catalogsUpdateSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  properties: CatalogUpdate,
  options: CatalogsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: catalogUpdateSerializer(properties),
  });
}

export async function _catalogsUpdateDeserialize(result: PathUncheckedResponse): Promise<Catalog> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return catalogDeserializer(result.body);
}

/** Update a Catalog */
export async function catalogsUpdate(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  properties: CatalogUpdate,
  options: CatalogsUpdateOptionalParams = { requestOptions: {} },
): Promise<Catalog> {
  const result = await _catalogsUpdateSend(
    context,
    resourceGroupName,
    catalogName,
    properties,
    options,
  );
  return _catalogsUpdateDeserialize(result);
}

export function _catalogsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  resource: Catalog,
  options: CatalogsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: catalogSerializer(resource),
  });
}

export async function _catalogsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Catalog> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return catalogDeserializer(result.body);
}

/** Create a Catalog */
export function catalogsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  resource: Catalog,
  options: CatalogsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Catalog>, Catalog> {
  return getLongRunningPoller(context, _catalogsCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _catalogsCreateOrUpdateSend(context, resourceGroupName, catalogName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<Catalog>, Catalog>;
}

export function _catalogsGetSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _catalogsGetDeserialize(result: PathUncheckedResponse): Promise<Catalog> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return catalogDeserializer(result.body);
}

/** Get a Catalog */
export async function catalogsGet(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsGetOptionalParams = { requestOptions: {} },
): Promise<Catalog> {
  const result = await _catalogsGetSend(context, resourceGroupName, catalogName, options);
  return _catalogsGetDeserialize(result);
}
