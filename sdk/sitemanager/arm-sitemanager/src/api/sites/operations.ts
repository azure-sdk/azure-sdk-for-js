// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EdgeContext as Client } from "../index.js";
import {
  _SiteListResult,
  _siteListResultDeserializer,
  Site,
  siteSerializer,
  siteDeserializer,
  errorResponseDeserializer,
  SiteUpdate,
  siteUpdateSerializer,
} from "../../models/models.js";
import {
  SitesListByResourceGroupOptionalParams,
  SitesDeleteOptionalParams,
  SitesUpdateOptionalParams,
  SitesCreateOrUpdateOptionalParams,
  SitesGetOptionalParams,
} from "./options.js";
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

export function _sitesListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: SitesListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/sites{?api-version}",
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

export async function _sitesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_SiteListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _siteListResultDeserializer(result.body);
}

/** List Site resources by resource group */
export function sitesListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: SitesListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Site> {
  return buildPagedAsyncIterator(
    context,
    () => _sitesListByResourceGroupSend(context, resourceGroupName, options),
    _sitesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _sitesDeleteSend(
  context: Client,
  resourceGroupName: string,
  siteName: string,
  options: SitesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/sites/{siteName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      siteName: siteName,
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

export async function _sitesDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a Site */
export async function sitesDelete(
  context: Client,
  resourceGroupName: string,
  siteName: string,
  options: SitesDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _sitesDeleteSend(context, resourceGroupName, siteName, options);
  return _sitesDeleteDeserialize(result);
}

export function _sitesUpdateSend(
  context: Client,
  resourceGroupName: string,
  siteName: string,
  properties: SiteUpdate,
  options: SitesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/sites/{siteName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      siteName: siteName,
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
    body: siteUpdateSerializer(properties),
  });
}

export async function _sitesUpdateDeserialize(result: PathUncheckedResponse): Promise<Site> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return siteDeserializer(result.body);
}

/** Update a Site */
export async function sitesUpdate(
  context: Client,
  resourceGroupName: string,
  siteName: string,
  properties: SiteUpdate,
  options: SitesUpdateOptionalParams = { requestOptions: {} },
): Promise<Site> {
  const result = await _sitesUpdateSend(context, resourceGroupName, siteName, properties, options);
  return _sitesUpdateDeserialize(result);
}

export function _sitesCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  siteName: string,
  resource: Site,
  options: SitesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/sites/{siteName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      siteName: siteName,
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
    body: siteSerializer(resource),
  });
}

export async function _sitesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Site> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return siteDeserializer(result.body);
}

/** Create a Site */
export function sitesCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  siteName: string,
  resource: Site,
  options: SitesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Site>, Site> {
  return getLongRunningPoller(context, _sitesCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _sitesCreateOrUpdateSend(context, resourceGroupName, siteName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<Site>, Site>;
}

export function _sitesGetSend(
  context: Client,
  resourceGroupName: string,
  siteName: string,
  options: SitesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/sites/{siteName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      siteName: siteName,
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

export async function _sitesGetDeserialize(result: PathUncheckedResponse): Promise<Site> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return siteDeserializer(result.body);
}

/** Get a Site */
export async function sitesGet(
  context: Client,
  resourceGroupName: string,
  siteName: string,
  options: SitesGetOptionalParams = { requestOptions: {} },
): Promise<Site> {
  const result = await _sitesGetSend(context, resourceGroupName, siteName, options);
  return _sitesGetDeserialize(result);
}
