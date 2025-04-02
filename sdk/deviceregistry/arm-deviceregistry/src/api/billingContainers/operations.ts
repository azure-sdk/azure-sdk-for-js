// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DeviceRegistryManagementContext as Client } from "../index.js";
import {
  BillingContainer,
  billingContainerDeserializer,
  errorResponseDeserializer,
  _BillingContainerListResult,
  _billingContainerListResultDeserializer,
} from "../../models/models.js";
import {
  BillingContainersListBySubscriptionOptionalParams,
  BillingContainersGetOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listBySubscriptionSend(
  context: Client,
  options: BillingContainersListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/billingContainers{?api-version}",
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

export async function _listBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_BillingContainerListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _billingContainerListResultDeserializer(result.body);
}

/** List BillingContainer resources by subscription ID */
export function listBySubscription(
  context: Client,
  options: BillingContainersListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<BillingContainer> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, options),
    _listBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: Client,
  billingContainerName: string,
  options: BillingContainersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/billingContainers/{billingContainerName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      billingContainerName: billingContainerName,
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

export async function _getDeserialize(result: PathUncheckedResponse): Promise<BillingContainer> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return billingContainerDeserializer(result.body);
}

/** Get a BillingContainer */
export async function get(
  context: Client,
  billingContainerName: string,
  options: BillingContainersGetOptionalParams = { requestOptions: {} },
): Promise<BillingContainer> {
  const result = await _getSend(context, billingContainerName, options);
  return _getDeserialize(result);
}
