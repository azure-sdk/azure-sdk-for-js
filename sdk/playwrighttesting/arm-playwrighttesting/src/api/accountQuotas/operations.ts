// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzurePlaywrightServiceContext as Client } from "../index.js";
import {
  AccountQuota,
  accountQuotaDeserializer,
  QuotaNames,
  errorResponseDeserializer,
  _AccountQuotaListResult,
  _accountQuotaListResultDeserializer,
} from "../../models/models.js";
import {
  AccountQuotasListByAccountOptionalParams,
  AccountQuotasGetOptionalParams,
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

export function _accountQuotasListByAccountSend(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  options: AccountQuotasListByAccountOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzurePlaywrightService/accounts/{accountName}/quotas{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      accountName: accountName,
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

export async function _accountQuotasListByAccountDeserialize(
  result: PathUncheckedResponse,
): Promise<_AccountQuotaListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _accountQuotaListResultDeserializer(result.body);
}

/** List quotas for a given account. */
export function accountQuotasListByAccount(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  options: AccountQuotasListByAccountOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<AccountQuota> {
  return buildPagedAsyncIterator(
    context,
    () => _accountQuotasListByAccountSend(context, resourceGroupName, accountName, options),
    _accountQuotasListByAccountDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _accountQuotasGetSend(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  quotaName: QuotaNames,
  options: AccountQuotasGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzurePlaywrightService/accounts/{accountName}/quotas/{quotaName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      accountName: accountName,
      quotaName: quotaName,
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

export async function _accountQuotasGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AccountQuota> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return accountQuotaDeserializer(result.body);
}

/** Get quota by name for an account. */
export async function accountQuotasGet(
  context: Client,
  resourceGroupName: string,
  accountName: string,
  quotaName: QuotaNames,
  options: AccountQuotasGetOptionalParams = { requestOptions: {} },
): Promise<AccountQuota> {
  const result = await _accountQuotasGetSend(
    context,
    resourceGroupName,
    accountName,
    quotaName,
    options,
  );
  return _accountQuotasGetDeserialize(result);
}
