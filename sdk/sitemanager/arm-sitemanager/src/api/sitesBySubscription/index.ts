// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  EdgeContext as Client,
  SitesBySubscriptionCreateOrUpdateOptionalParams,
  SitesBySubscriptionDeleteOptionalParams,
  SitesBySubscriptionGetOptionalParams,
  SitesBySubscriptionListOptionalParams,
  SitesBySubscriptionUpdateOptionalParams,
} from "../index.js";
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

export function _sitesBySubscriptionDeleteSend(
  context: Client,
  siteName: string,
  options: SitesBySubscriptionDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/sites/{siteName}",
      context.subscriptionId,
      siteName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _sitesBySubscriptionDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a Site */
export async function sitesBySubscriptionDelete(
  context: Client,
  siteName: string,
  options: SitesBySubscriptionDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _sitesBySubscriptionDeleteSend(context, siteName, options);
  return _sitesBySubscriptionDeleteDeserialize(result);
}

export function _sitesBySubscriptionUpdateSend(
  context: Client,
  siteName: string,
  properties: SiteUpdate,
  options: SitesBySubscriptionUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/sites/{siteName}",
      context.subscriptionId,
      siteName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: siteUpdateSerializer(properties),
    });
}

export async function _sitesBySubscriptionUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Site> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return siteDeserializer(result.body);
}

/** Update a Site */
export async function sitesBySubscriptionUpdate(
  context: Client,
  siteName: string,
  properties: SiteUpdate,
  options: SitesBySubscriptionUpdateOptionalParams = { requestOptions: {} },
): Promise<Site> {
  const result = await _sitesBySubscriptionUpdateSend(context, siteName, properties, options);
  return _sitesBySubscriptionUpdateDeserialize(result);
}

export function _sitesBySubscriptionCreateOrUpdateSend(
  context: Client,
  siteName: string,
  resource: Site,
  options: SitesBySubscriptionCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/sites/{siteName}",
      context.subscriptionId,
      siteName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: siteSerializer(resource),
    });
}

export async function _sitesBySubscriptionCreateOrUpdateDeserialize(
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
export function sitesBySubscriptionCreateOrUpdate(
  context: Client,
  siteName: string,
  resource: Site,
  options: SitesBySubscriptionCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<Site>, Site> {
  return getLongRunningPoller(
    context,
    _sitesBySubscriptionCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sitesBySubscriptionCreateOrUpdateSend(context, siteName, resource, options),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<Site>, Site>;
}

export function _sitesBySubscriptionGetSend(
  context: Client,
  siteName: string,
  options: SitesBySubscriptionGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/sites/{siteName}",
      context.subscriptionId,
      siteName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _sitesBySubscriptionGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Site> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return siteDeserializer(result.body);
}

/** Get a Site */
export async function sitesBySubscriptionGet(
  context: Client,
  siteName: string,
  options: SitesBySubscriptionGetOptionalParams = { requestOptions: {} },
): Promise<Site> {
  const result = await _sitesBySubscriptionGetSend(context, siteName, options);
  return _sitesBySubscriptionGetDeserialize(result);
}

export function _sitesBySubscriptionListSend(
  context: Client,
  options: SitesBySubscriptionListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/subscriptions/{subscriptionId}/providers/Microsoft.Edge/sites", context.subscriptionId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _sitesBySubscriptionListDeserialize(
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

/** List Site resources by subscription ID */
export function sitesBySubscriptionList(
  context: Client,
  options: SitesBySubscriptionListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Site> {
  return buildPagedAsyncIterator(
    context,
    () => _sitesBySubscriptionListSend(context, options),
    _sitesBySubscriptionListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
