// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  sitePropertiesSerializer,
  siteUpdatePropertiesSerializer,
  Site,
  SiteUpdate,
  _SiteListResult,
} from "../../models/models.js";
import { EdgeContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  SitesBySubscriptionListOptionalParams,
  SitesBySubscriptionGetOptionalParams,
  SitesBySubscriptionCreateOrUpdateOptionalParams,
  SitesBySubscriptionUpdateOptionalParams,
  SitesBySubscriptionDeleteOptionalParams,
} from "../../models/options.js";

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
              displayName: p.properties?.["displayName"],
              description: p.properties?.["description"],
              addressResourceId: p.properties?.["addressResourceId"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
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

  return {
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
          displayName: result.body.properties?.["displayName"],
          description: result.body.properties?.["description"],
          addressResourceId: result.body.properties?.["addressResourceId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
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
      body: {
        properties: !resource.properties
          ? resource.properties
          : sitePropertiesSerializer(resource.properties),
      },
    });
}

export async function _sitesBySubscriptionCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Site> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
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
          displayName: result.body.properties?.["displayName"],
          description: result.body.properties?.["description"],
          addressResourceId: result.body.properties?.["addressResourceId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
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
      body: {
        properties: !properties.properties
          ? properties.properties
          : siteUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _sitesBySubscriptionUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Site> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
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
          displayName: result.body.properties?.["displayName"],
          description: result.body.properties?.["description"],
          addressResourceId: result.body.properties?.["addressResourceId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
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
