// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NetworkAnalyticsContext as Client,
  DataProductsCatalogsGetOptionalParams,
  DataProductsCatalogsListByResourceGroupOptionalParams,
  DataProductsCatalogsListBySubscriptionOptionalParams,
} from "../index.js";
import {
  DataProductsCatalog,
  dataProductsCatalogDeserializer,
  _DataProductsCatalogListResult,
  _dataProductsCatalogListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _dataProductsCatalogsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: DataProductsCatalogsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProductsCatalogs/default",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataProductsCatalogsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DataProductsCatalog> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dataProductsCatalogDeserializer(result.body);
}

/** Retrieve data type resource. */
export async function dataProductsCatalogsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: DataProductsCatalogsGetOptionalParams = { requestOptions: {} },
): Promise<DataProductsCatalog> {
  const result = await _dataProductsCatalogsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    options,
  );
  return _dataProductsCatalogsGetDeserialize(result);
}

export function _dataProductsCatalogsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: DataProductsCatalogsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProductsCatalogs",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataProductsCatalogsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_DataProductsCatalogListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _dataProductsCatalogListResultDeserializer(result.body);
}

/** List data catalog by resource group. */
export function dataProductsCatalogsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: DataProductsCatalogsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DataProductsCatalog> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dataProductsCatalogsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _dataProductsCatalogsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _dataProductsCatalogsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: DataProductsCatalogsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkAnalytics/dataProductsCatalogs",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataProductsCatalogsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_DataProductsCatalogListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _dataProductsCatalogListResultDeserializer(result.body);
}

/** List data catalog by subscription. */
export function dataProductsCatalogsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: DataProductsCatalogsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DataProductsCatalog> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dataProductsCatalogsListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _dataProductsCatalogsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
