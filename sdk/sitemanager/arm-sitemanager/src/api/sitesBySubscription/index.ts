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

export function _sitesBySubscriptionListSend(
  context: Client,
  subscriptionId: string,
  options: SitesBySubscriptionListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/sites",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _sitesBySubscriptionListDeserialize(
  result: PathUncheckedResponse,
): Promise<_SiteListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _siteListResultDeserializer(result.body);
}

/** List Site resources by subscription ID */
export function sitesBySubscriptionList(
  context: Client,
  subscriptionId: string,
  options: SitesBySubscriptionListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Site> {
  return buildPagedAsyncIterator(
    context,
    () => _sitesBySubscriptionListSend(context, subscriptionId, options),
    _sitesBySubscriptionListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _sitesBySubscriptionGetSend(
  context: Client,
  subscriptionId: string,
  siteName: string,
  options: SitesBySubscriptionGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/sites/{siteName}",
      subscriptionId,
      siteName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _sitesBySubscriptionGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Site> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return siteDeserializer(result.body);
}

/** Get a Site */
export async function sitesBySubscriptionGet(
  context: Client,
  subscriptionId: string,
  siteName: string,
  options: SitesBySubscriptionGetOptionalParams = { requestOptions: {} },
): Promise<Site> {
  const result = await _sitesBySubscriptionGetSend(
    context,
    subscriptionId,
    siteName,
    options,
  );
  return _sitesBySubscriptionGetDeserialize(result);
}

export function _sitesBySubscriptionCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  siteName: string,
  resource: Site,
  options: SitesBySubscriptionCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/sites/{siteName}",
      subscriptionId,
      siteName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: siteSerializer(resource),
    });
}

export async function _sitesBySubscriptionCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Site> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return siteDeserializer(result.body);
}

/** Create a Site */
export function sitesBySubscriptionCreateOrUpdate(
  context: Client,
  subscriptionId: string,
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
        _sitesBySubscriptionCreateOrUpdateSend(
          context,
          subscriptionId,
          siteName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<Site>, Site>;
}

export function _sitesBySubscriptionUpdateSend(
  context: Client,
  subscriptionId: string,
  siteName: string,
  properties: SiteUpdate,
  options: SitesBySubscriptionUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/sites/{siteName}",
      subscriptionId,
      siteName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: siteUpdateSerializer(properties),
    });
}

export async function _sitesBySubscriptionUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Site> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return siteDeserializer(result.body);
}

/** Update a Site */
export async function sitesBySubscriptionUpdate(
  context: Client,
  subscriptionId: string,
  siteName: string,
  properties: SiteUpdate,
  options: SitesBySubscriptionUpdateOptionalParams = { requestOptions: {} },
): Promise<Site> {
  const result = await _sitesBySubscriptionUpdateSend(
    context,
    subscriptionId,
    siteName,
    properties,
    options,
  );
  return _sitesBySubscriptionUpdateDeserialize(result);
}

export function _sitesBySubscriptionDeleteSend(
  context: Client,
  subscriptionId: string,
  siteName: string,
  options: SitesBySubscriptionDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/sites/{siteName}",
      subscriptionId,
      siteName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _sitesBySubscriptionDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Site */
export async function sitesBySubscriptionDelete(
  context: Client,
  subscriptionId: string,
  siteName: string,
  options: SitesBySubscriptionDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _sitesBySubscriptionDeleteSend(
    context,
    subscriptionId,
    siteName,
    options,
  );
  return _sitesBySubscriptionDeleteDeserialize(result);
}
