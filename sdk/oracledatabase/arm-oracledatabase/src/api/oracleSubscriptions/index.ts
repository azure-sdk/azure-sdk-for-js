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
  errorResponseDeserializer,
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
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _oracleSubscriptionsAddAzureSubscriptionsSend(
  context: Client,
  body: AzureSubscriptions,
  options: OracleSubscriptionsAddAzureSubscriptionsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/addAzureSubscriptions{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: azureSubscriptionsSerializer(body),
  });
}

export async function _oracleSubscriptionsAddAzureSubscriptionsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Add Azure Subscriptions */
export function oracleSubscriptionsAddAzureSubscriptions(
  context: Client,
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
        _oracleSubscriptionsAddAzureSubscriptionsSend(context, body, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _oracleSubscriptionsListActivationLinksSend(
  context: Client,
  options: OracleSubscriptionsListActivationLinksOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listActivationLinks{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _oracleSubscriptionsListActivationLinksDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** List Activation Links */
export function oracleSubscriptionsListActivationLinks(
  context: Client,
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
      getInitialResponse: () => _oracleSubscriptionsListActivationLinksSend(context, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _oracleSubscriptionsListSaasSubscriptionDetailsSend(
  context: Client,
  options: OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listSaasSubscriptionDetails{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _oracleSubscriptionsListSaasSubscriptionDetailsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** List Saas Subscription Details */
export function oracleSubscriptionsListSaasSubscriptionDetails(
  context: Client,
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
        _oracleSubscriptionsListSaasSubscriptionDetailsSend(context, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _oracleSubscriptionsListCloudAccountDetailsSend(
  context: Client,
  options: OracleSubscriptionsListCloudAccountDetailsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listCloudAccountDetails{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _oracleSubscriptionsListCloudAccountDetailsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** List Cloud Account Details */
export function oracleSubscriptionsListCloudAccountDetails(
  context: Client,
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
      getInitialResponse: () => _oracleSubscriptionsListCloudAccountDetailsSend(context, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _oracleSubscriptionsCreateOrUpdateSend(
  context: Client,
  resource: OracleSubscription,
  options: OracleSubscriptionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default{?api-version}",
    {
      subscriptionId: context.subscriptionId,
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
    body: oracleSubscriptionSerializer(resource),
  });
}

export async function _oracleSubscriptionsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<OracleSubscription> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return oracleSubscriptionDeserializer(result.body);
}

/** Create a OracleSubscription */
export function oracleSubscriptionsCreateOrUpdate(
  context: Client,
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
      getInitialResponse: () => _oracleSubscriptionsCreateOrUpdateSend(context, resource, options),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<OracleSubscription>, OracleSubscription>;
}

export function _oracleSubscriptionsDeleteSend(
  context: Client,
  options: OracleSubscriptionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default{?api-version}",
    {
      subscriptionId: context.subscriptionId,
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

export async function _oracleSubscriptionsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a OracleSubscription */
export function oracleSubscriptionsDelete(
  context: Client,
  options: OracleSubscriptionsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _oracleSubscriptionsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () => _oracleSubscriptionsDeleteSend(context, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _oracleSubscriptionsUpdateSend(
  context: Client,
  properties: OracleSubscriptionUpdate,
  options: OracleSubscriptionsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default{?api-version}",
    {
      subscriptionId: context.subscriptionId,
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
    body: oracleSubscriptionUpdateSerializer(properties),
  });
}

export async function _oracleSubscriptionsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<OracleSubscription> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return oracleSubscriptionDeserializer(result.body);
}

/** Update a OracleSubscription */
export function oracleSubscriptionsUpdate(
  context: Client,
  properties: OracleSubscriptionUpdate,
  options: OracleSubscriptionsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OracleSubscription>, OracleSubscription> {
  return getLongRunningPoller(context, _oracleSubscriptionsUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _oracleSubscriptionsUpdateSend(context, properties, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<OracleSubscription>, OracleSubscription>;
}

export function _oracleSubscriptionsGetSend(
  context: Client,
  options: OracleSubscriptionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default{?api-version}",
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

export async function _oracleSubscriptionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<OracleSubscription> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return oracleSubscriptionDeserializer(result.body);
}

/** Get a OracleSubscription */
export async function oracleSubscriptionsGet(
  context: Client,
  options: OracleSubscriptionsGetOptionalParams = { requestOptions: {} },
): Promise<OracleSubscription> {
  const result = await _oracleSubscriptionsGetSend(context, options);
  return _oracleSubscriptionsGetDeserialize(result);
}

export function _oracleSubscriptionsListBySubscriptionSend(
  context: Client,
  options: OracleSubscriptionsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions{?api-version}",
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

export async function _oracleSubscriptionsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_OracleSubscriptionListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _oracleSubscriptionListResultDeserializer(result.body);
}

/** List OracleSubscription resources by subscription ID */
export function oracleSubscriptionsListBySubscription(
  context: Client,
  options: OracleSubscriptionsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<OracleSubscription> {
  return buildPagedAsyncIterator(
    context,
    () => _oracleSubscriptionsListBySubscriptionSend(context, options),
    _oracleSubscriptionsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
