// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Quota, _PagedQuota } from "../../models/models.js";
import { DevOpsInfrastructureContext as Client } from "../index.js";
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
import { SubscriptionUsagesUsagesOptionalParams } from "../../models/options.js";

export function _subscriptionUsagesUsagesSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: SubscriptionUsagesUsagesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.DevOpsInfrastructure/locations/{location}/usages",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _subscriptionUsagesUsagesDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedQuota> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        name: !p.name
          ? undefined
          : {
              value: p.name?.["value"],
              localizedValue: p.name?.["localizedValue"],
            },
        id: p["id"],
        unit: p["unit"],
        currentValue: p["currentValue"],
        limit: p["limit"],
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Quota resources by subscription ID */
export function subscriptionUsagesUsages(
  context: Client,
  subscriptionId: string,
  location: string,
  options: SubscriptionUsagesUsagesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Quota> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _subscriptionUsagesUsagesSend(context, subscriptionId, location, options),
    _subscriptionUsagesUsagesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
