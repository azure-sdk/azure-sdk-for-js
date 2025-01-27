// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AccountsCheckNameAvailabilityOptionalParams,
  AccountsCreateOrUpdateOptionalParams,
  AccountsDeleteOptionalParams,
  AccountsGetOptionalParams,
  AccountsListByResourceGroupOptionalParams,
  AccountsListBySubscriptionOptionalParams,
  AccountsUpdateOptionalParams,
  AzurePlaywrightServiceContext as Client,
} from "../index.js";
import {
  errorResponseDeserializer,
  Account,
  accountSerializer,
  accountDeserializer,
  AccountUpdate,
  accountUpdateSerializer,
  _AccountListResult,
  _accountListResultDeserializer,
  CheckNameAvailabilityRequest,
  checkNameAvailabilityRequestSerializer,
  CheckNameAvailabilityResponse,
  checkNameAvailabilityResponseDeserializer,
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

export function _accountsCheckNameAvailabilitySend(
  context: Client,
  body: CheckNameAvailabilityRequest,
  options: AccountsCheckNameAvailabilityOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AzurePlaywrightService/checkNameAvailability",
      context.subscriptionId,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: checkNameAvailabilityRequestSerializer(body),
    });
}

export async function _accountsCheckNameAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckNameAvailabilityResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return checkNameAvailabilityResponseDeserializer(result.body);
}

/** Adds check global name availability operation, normally used if a resource name must be globally unique. */
export async function accountsCheckNameAvailability(
  context: Client,
  body: CheckNameAvailabilityRequest,
  options: AccountsCheckNameAvailabilityOptionalParams = { requestOptions: {} },
): Promise<CheckNameAvailabilityResponse> {
  const result = await _accountsCheckNameAvailabilitySend(context, body, options);
  return _accountsCheckNameAvailabilityDeserialize(result);
}

export function _accountsListBySubscriptionSend(
  context: Client,
  options: AccountsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AzurePlaywrightService/accounts",
      context.subscriptionId,
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

export async function _accountsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_AccountListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _accountListResultDeserializer(result.body);
}

/** List Account resources by subscription ID */
export function accountsListBySubscription(
  context: Client,
  options: AccountsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Account> {
  return buildPagedAsyncIterator(
    context,
    () => _accountsListBySubscriptionSend(context, options),
    _accountsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _accountsListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: AccountsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzurePlaywrightService/accounts",
      context.subscriptionId,
      resourceGroupName,
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

export async function _accountsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_AccountListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _accountListResultDeserializer(result.body);
}

/** List Account resources by resource group */
export function accountsListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: AccountsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Account> {
  return buildPagedAsyncIterator(
    context,
    () => _accountsListByResourceGroupSend(context, resourceGroupName, options),
    _accountsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _accountsDeleteSend(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  options: AccountsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzurePlaywrightService/accounts/{accountName}",
      context.subscriptionId,
      resourceGroupName,
      accountName,
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

export async function _accountsDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a Account */
export function accountsDelete(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  options: AccountsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _accountsDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _accountsDeleteSend(context, resourceGroupName, accountName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _accountsUpdateSend(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  properties: AccountUpdate,
  options: AccountsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzurePlaywrightService/accounts/{accountName}",
      context.subscriptionId,
      resourceGroupName,
      accountName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: accountUpdateSerializer(properties),
    });
}

export async function _accountsUpdateDeserialize(result: PathUncheckedResponse): Promise<Account> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return accountDeserializer(result.body);
}

/** Update a Account */
export async function accountsUpdate(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  properties: AccountUpdate,
  options: AccountsUpdateOptionalParams = { requestOptions: {} },
): Promise<Account> {
  const result = await _accountsUpdateSend(
    context,
    resourceGroupName,
    accountName,
    properties,
    options,
  );
  return _accountsUpdateDeserialize(result);
}

export function _accountsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  resource: Account,
  options: AccountsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzurePlaywrightService/accounts/{accountName}",
      context.subscriptionId,
      resourceGroupName,
      accountName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: accountSerializer(resource),
    });
}

export async function _accountsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Account> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return accountDeserializer(result.body);
}

/** Create a Account */
export function accountsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  resource: Account,
  options: AccountsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Account>, Account> {
  return getLongRunningPoller(context, _accountsCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _accountsCreateOrUpdateSend(context, resourceGroupName, accountName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<Account>, Account>;
}

export function _accountsGetSend(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  options: AccountsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzurePlaywrightService/accounts/{accountName}",
      context.subscriptionId,
      resourceGroupName,
      accountName,
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

export async function _accountsGetDeserialize(result: PathUncheckedResponse): Promise<Account> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return accountDeserializer(result.body);
}

/** Get a Account */
export async function accountsGet(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  options: AccountsGetOptionalParams = { requestOptions: {} },
): Promise<Account> {
  const result = await _accountsGetSend(context, resourceGroupName, accountName, options);
  return _accountsGetDeserialize(result);
}
