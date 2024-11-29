// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  EdgeContext as Client,
  SitesCreateOrUpdateOptionalParams,
  SitesDeleteOptionalParams,
  SitesGetOptionalParams,
  SitesListByResourceGroupOptionalParams,
  SitesUpdateOptionalParams,
} from "../index.js";
import {
  _SiteListResult,
  _siteListResultDeserializer,
  Site,
  siteSerializer,
  siteDeserializer,
  SiteUpdate,
  siteUpdateSerializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _sitesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  siteName: string,
  options: SitesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/sites/{siteName}",
      subscriptionId,
      resourceGroupName,
      siteName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _sitesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Site> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return siteDeserializer(result.body);
}

/** Get a Site */
export async function sitesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  siteName: string,
  options: SitesGetOptionalParams = { requestOptions: {} },
): Promise<Site> {
  const result = await _sitesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    siteName,
    options,
  );
  return _sitesGetDeserialize(result);
}

export function _sitesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  siteName: string,
  resource: Site,
  options: SitesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/sites/{siteName}",
      subscriptionId,
      resourceGroupName,
      siteName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: siteSerializer(resource),
    });
}

export async function _sitesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Site> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return siteDeserializer(result.body);
}

/** Create a Site */
export function sitesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  siteName: string,
  resource: Site,
  options: SitesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Site>, Site> {
  return getLongRunningPoller(
    context,
    _sitesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sitesCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          siteName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<Site>, Site>;
}

export function _sitesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  siteName: string,
  properties: SiteUpdate,
  options: SitesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/sites/{siteName}",
      subscriptionId,
      resourceGroupName,
      siteName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: siteUpdateSerializer(properties),
    });
}

export async function _sitesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Site> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return siteDeserializer(result.body);
}

/** Update a Site */
export async function sitesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  siteName: string,
  properties: SiteUpdate,
  options: SitesUpdateOptionalParams = { requestOptions: {} },
): Promise<Site> {
  const result = await _sitesUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    siteName,
    properties,
    options,
  );
  return _sitesUpdateDeserialize(result);
}

export function _sitesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  siteName: string,
  options: SitesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/sites/{siteName}",
      subscriptionId,
      resourceGroupName,
      siteName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _sitesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Site */
export async function sitesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  siteName: string,
  options: SitesDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _sitesDeleteSend(
    context,
    subscriptionId,
    resourceGroupName,
    siteName,
    options,
  );
  return _sitesDeleteDeserialize(result);
}

export function _sitesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SitesListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/sites",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _sitesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_SiteListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _siteListResultDeserializer(result.body);
}

/** List Site resources by resource group */
export function sitesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SitesListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Site> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _sitesListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _sitesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
