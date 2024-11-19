// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseContext as Client,
  OracleSubscriptionsAddAzureSubscriptionsOptionalParams,
  OracleSubscriptionsCreateOrUpdateOptionalParams,
  OracleSubscriptionsDeleteOptionalParams,
  OracleSubscriptionsGetOptionalParams,
  OracleSubscriptionsListActivationLinksOptionalParams,
  OracleSubscriptionsListBySubscriptionOptionalParams,
  OracleSubscriptionsListCloudAccountDetailsOptionalParams,
  OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams,
  OracleSubscriptionsUpdateOptionalParams,
} from "../index.js";
import {
  _OracleSubscriptionListResult,
  _oracleSubscriptionListResultDeserializer,
  OracleSubscription,
  oracleSubscriptionSerializer,
  oracleSubscriptionDeserializer,
  OracleSubscriptionUpdate,
  oracleSubscriptionUpdateSerializer,
  AzureSubscriptions,
  azureSubscriptionsSerializer,
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

export function _oracleSubscriptionsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _oracleSubscriptionsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_OracleSubscriptionListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _oracleSubscriptionListResultDeserializer(result.body);
}

/** List OracleSubscription resources by subscription ID */
export function oracleSubscriptionsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<OracleSubscription> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _oracleSubscriptionsListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _oracleSubscriptionsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _oracleSubscriptionsGetSend(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _oracleSubscriptionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<OracleSubscription> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return oracleSubscriptionDeserializer(result.body);
}

/** Get a OracleSubscription */
export async function oracleSubscriptionsGet(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsGetOptionalParams = { requestOptions: {} },
): Promise<OracleSubscription> {
  const result = await _oracleSubscriptionsGetSend(
    context,
    subscriptionId,
    options,
  );
  return _oracleSubscriptionsGetDeserialize(result);
}

export function _oracleSubscriptionsUpdateSend(
  context: Client,
  subscriptionId: string,
  properties: OracleSubscriptionUpdate,
  options: OracleSubscriptionsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default",
      subscriptionId,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: oracleSubscriptionUpdateSerializer(properties),
    });
}

export async function _oracleSubscriptionsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<OracleSubscription> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return oracleSubscriptionDeserializer(result.body);
}

/** Update a OracleSubscription */
export function oracleSubscriptionsUpdate(
  context: Client,
  subscriptionId: string,
  properties: OracleSubscriptionUpdate,
  options: OracleSubscriptionsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OracleSubscription>, OracleSubscription> {
  return getLongRunningPoller(
    context,
    _oracleSubscriptionsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _oracleSubscriptionsUpdateSend(
          context,
          subscriptionId,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<OracleSubscription>, OracleSubscription>;
}

export function _oracleSubscriptionsDeleteSend(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default",
      subscriptionId,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _oracleSubscriptionsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a OracleSubscription */
export function oracleSubscriptionsDelete(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _oracleSubscriptionsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _oracleSubscriptionsDeleteSend(context, subscriptionId, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _oracleSubscriptionsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resource: OracleSubscription,
  options: OracleSubscriptionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default",
      subscriptionId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: oracleSubscriptionSerializer(resource),
    });
}

export async function _oracleSubscriptionsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<OracleSubscription> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return oracleSubscriptionDeserializer(result.body);
}

/** Create a OracleSubscription */
export function oracleSubscriptionsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resource: OracleSubscription,
  options: OracleSubscriptionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<OracleSubscription>, OracleSubscription> {
  return getLongRunningPoller(
    context,
    _oracleSubscriptionsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _oracleSubscriptionsCreateOrUpdateSend(
          context,
          subscriptionId,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<OracleSubscription>, OracleSubscription>;
}

export function _oracleSubscriptionsListCloudAccountDetailsSend(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListCloudAccountDetailsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listCloudAccountDetails",
      subscriptionId,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _oracleSubscriptionsListCloudAccountDetailsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** List Cloud Account Details */
export function oracleSubscriptionsListCloudAccountDetails(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListCloudAccountDetailsOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _oracleSubscriptionsListCloudAccountDetailsDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _oracleSubscriptionsListCloudAccountDetailsSend(
          context,
          subscriptionId,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _oracleSubscriptionsListSaasSubscriptionDetailsSend(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listSaasSubscriptionDetails",
      subscriptionId,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _oracleSubscriptionsListSaasSubscriptionDetailsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** List Saas Subscription Details */
export function oracleSubscriptionsListSaasSubscriptionDetails(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _oracleSubscriptionsListSaasSubscriptionDetailsDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _oracleSubscriptionsListSaasSubscriptionDetailsSend(
          context,
          subscriptionId,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _oracleSubscriptionsListActivationLinksSend(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListActivationLinksOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listActivationLinks",
      subscriptionId,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _oracleSubscriptionsListActivationLinksDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** List Activation Links */
export function oracleSubscriptionsListActivationLinks(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListActivationLinksOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _oracleSubscriptionsListActivationLinksDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _oracleSubscriptionsListActivationLinksSend(
          context,
          subscriptionId,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _oracleSubscriptionsAddAzureSubscriptionsSend(
  context: Client,
  subscriptionId: string,
  body: AzureSubscriptions,
  options: OracleSubscriptionsAddAzureSubscriptionsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/addAzureSubscriptions",
      subscriptionId,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: azureSubscriptionsSerializer(body),
    });
}

export async function _oracleSubscriptionsAddAzureSubscriptionsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Add Azure Subscriptions */
export function oracleSubscriptionsAddAzureSubscriptions(
  context: Client,
  subscriptionId: string,
  body: AzureSubscriptions,
  options: OracleSubscriptionsAddAzureSubscriptionsOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _oracleSubscriptionsAddAzureSubscriptionsDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _oracleSubscriptionsAddAzureSubscriptionsSend(
          context,
          subscriptionId,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}
