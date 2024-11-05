// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { QuotaNames, Quota, _QuotaListResult } from "../../models/models.js";
import { AzurePlaywrightServiceContext as Client } from "../index.js";
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
import {
  QuotasGetOptionalParams,
  QuotasListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _quotasGetSend(
  context: Client,
  subscriptionId: string,
  location: string,
  quotaName: QuotaNames,
  options: QuotasGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AzurePlaywrightService/locations/{location}/quotas/{quotaName}",
      subscriptionId,
      location,
      quotaName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _quotasGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Quota> {
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
          freeTrial: !result.body.properties?.freeTrial
            ? undefined
            : {
                accountId: result.body.properties?.freeTrial?.["accountId"],
                state: result.body.properties?.freeTrial?.["state"],
              },
          offeringType: result.body.properties?.["offeringType"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get subscription quota by name. */
export async function quotasGet(
  context: Client,
  subscriptionId: string,
  location: string,
  quotaName: QuotaNames,
  options: QuotasGetOptionalParams = { requestOptions: {} },
): Promise<Quota> {
  const result = await _quotasGetSend(
    context,
    subscriptionId,
    location,
    quotaName,
    options,
  );
  return _quotasGetDeserialize(result);
}

export function _quotasListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: QuotasListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AzurePlaywrightService/locations/{location}/quotas",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _quotasListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_QuotaListResult> {
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
              freeTrial: !p.properties?.freeTrial
                ? undefined
                : {
                    accountId: p.properties?.freeTrial?.["accountId"],
                    state: p.properties?.freeTrial?.["state"],
                  },
              offeringType: p.properties?.["offeringType"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List quotas for a given subscription Id. */
export function quotasListBySubscription(
  context: Client,
  subscriptionId: string,
  location: string,
  options: QuotasListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Quota> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _quotasListBySubscriptionSend(context, subscriptionId, location, options),
    _quotasListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
