// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  BillingContainer,
  _BillingContainerListResult,
} from "../../models/models.js";
import { DeviceRegistryContext as Client } from "../index.js";
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
  BillingContainersGetOptionalParams,
  BillingContainersListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _billingContainersGetSend(
  context: Client,
  subscriptionId: string,
  billingContainerName: string,
  options: BillingContainersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/billingContainers/{billingContainerName}",
      subscriptionId,
      billingContainerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _billingContainersGetDeserialize(
  result: PathUncheckedResponse,
): Promise<BillingContainer> {
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
      : { provisioningState: result.body.properties?.["provisioningState"] },
    etag: result.body["etag"],
  };
}

/** Get a BillingContainer */
export async function billingContainersGet(
  context: Client,
  subscriptionId: string,
  billingContainerName: string,
  options: BillingContainersGetOptionalParams = { requestOptions: {} },
): Promise<BillingContainer> {
  const result = await _billingContainersGetSend(
    context,
    subscriptionId,
    billingContainerName,
    options,
  );
  return _billingContainersGetDeserialize(result);
}

export function _billingContainersListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: BillingContainersListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/billingContainers",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _billingContainersListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_BillingContainerListResult> {
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
          : { provisioningState: p.properties?.["provisioningState"] },
        etag: p["etag"],
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List BillingContainer resources by subscription ID */
export function billingContainersListBySubscription(
  context: Client,
  subscriptionId: string,
  options: BillingContainersListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<BillingContainer> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _billingContainersListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _billingContainersListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
