// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CodeSigningContext as Client,
  CodeSigningAccountsCheckNameAvailabilityOptionalParams,
  CodeSigningAccountsCreateOptionalParams,
  CodeSigningAccountsDeleteOptionalParams,
  CodeSigningAccountsGetOptionalParams,
  CodeSigningAccountsListByResourceGroupOptionalParams,
  CodeSigningAccountsListBySubscriptionOptionalParams,
  CodeSigningAccountsUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  CodeSigningAccount,
  codeSigningAccountSerializer,
  codeSigningAccountDeserializer,
  CodeSigningAccountPatch,
  codeSigningAccountPatchSerializer,
  _CodeSigningAccountListResult,
  _codeSigningAccountListResultDeserializer,
  CheckNameAvailability,
  checkNameAvailabilitySerializer,
  CheckNameAvailabilityResult,
  checkNameAvailabilityResultDeserializer,
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

export function _codeSigningAccountsCheckNameAvailabilitySend(
  context: Client,
  body: CheckNameAvailability,
  options: CodeSigningAccountsCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.CodeSigning/checkNameAvailability",
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
      body: checkNameAvailabilitySerializer(body),
    });
}

export async function _codeSigningAccountsCheckNameAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckNameAvailabilityResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return checkNameAvailabilityResultDeserializer(result.body);
}

/** Checks that the trusted signing account name is valid and is not already in use. */
export async function codeSigningAccountsCheckNameAvailability(
  context: Client,
  body: CheckNameAvailability,
  options: CodeSigningAccountsCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): Promise<CheckNameAvailabilityResult> {
  const result = await _codeSigningAccountsCheckNameAvailabilitySend(context, body, options);
  return _codeSigningAccountsCheckNameAvailabilityDeserialize(result);
}

export function _codeSigningAccountsListBySubscriptionSend(
  context: Client,
  options: CodeSigningAccountsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.CodeSigning/codeSigningAccounts",
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

export async function _codeSigningAccountsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_CodeSigningAccountListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _codeSigningAccountListResultDeserializer(result.body);
}

/** Lists trusted signing accounts within a subscription. */
export function codeSigningAccountsListBySubscription(
  context: Client,
  options: CodeSigningAccountsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CodeSigningAccount> {
  return buildPagedAsyncIterator(
    context,
    () => _codeSigningAccountsListBySubscriptionSend(context, options),
    _codeSigningAccountsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _codeSigningAccountsListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: CodeSigningAccountsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts",
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

export async function _codeSigningAccountsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_CodeSigningAccountListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _codeSigningAccountListResultDeserializer(result.body);
}

/** Lists trusted signing accounts within a resource group. */
export function codeSigningAccountsListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: CodeSigningAccountsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CodeSigningAccount> {
  return buildPagedAsyncIterator(
    context,
    () => _codeSigningAccountsListByResourceGroupSend(context, resourceGroupName, options),
    _codeSigningAccountsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _codeSigningAccountsDeleteSend(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  options: CodeSigningAccountsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}",
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

export async function _codeSigningAccountsDeleteDeserialize(
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

/** Delete a trusted signing account. */
export function codeSigningAccountsDelete(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  options: CodeSigningAccountsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _codeSigningAccountsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _codeSigningAccountsDeleteSend(context, resourceGroupName, accountName, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _codeSigningAccountsUpdateSend(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  properties: CodeSigningAccountPatch,
  options: CodeSigningAccountsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}",
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
      body: codeSigningAccountPatchSerializer(properties),
    });
}

export async function _codeSigningAccountsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CodeSigningAccount> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return codeSigningAccountDeserializer(result.body);
}

/** Update a trusted signing account. */
export function codeSigningAccountsUpdate(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  properties: CodeSigningAccountPatch,
  options: CodeSigningAccountsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CodeSigningAccount>, CodeSigningAccount> {
  return getLongRunningPoller(context, _codeSigningAccountsUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _codeSigningAccountsUpdateSend(context, resourceGroupName, accountName, properties, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<CodeSigningAccount>, CodeSigningAccount>;
}

export function _codeSigningAccountsCreateSend(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  resource: CodeSigningAccount,
  options: CodeSigningAccountsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}",
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
      body: codeSigningAccountSerializer(resource),
    });
}

export async function _codeSigningAccountsCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<CodeSigningAccount> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return codeSigningAccountDeserializer(result.body);
}

/** Create a trusted Signing Account. */
export function codeSigningAccountsCreate(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  resource: CodeSigningAccount,
  options: CodeSigningAccountsCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CodeSigningAccount>, CodeSigningAccount> {
  return getLongRunningPoller(context, _codeSigningAccountsCreateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _codeSigningAccountsCreateSend(context, resourceGroupName, accountName, resource, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<CodeSigningAccount>, CodeSigningAccount>;
}

export function _codeSigningAccountsGetSend(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  options: CodeSigningAccountsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}",
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

export async function _codeSigningAccountsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<CodeSigningAccount> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return codeSigningAccountDeserializer(result.body);
}

/** Get a trusted Signing Account. */
export async function codeSigningAccountsGet(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  options: CodeSigningAccountsGetOptionalParams = { requestOptions: {} },
): Promise<CodeSigningAccount> {
  const result = await _codeSigningAccountsGetSend(
    context,
    resourceGroupName,
    accountName,
    options,
  );
  return _codeSigningAccountsGetDeserialize(result);
}
