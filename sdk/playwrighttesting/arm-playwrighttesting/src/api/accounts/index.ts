// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  accountPropertiesSerializer,
  accountUpdatePropertiesSerializer,
  Account,
  AccountUpdate,
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityResponse,
  _AccountListResult,
} from "../../models/models.js";
import { AzurePlaywrightServiceContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AccountsGetOptionalParams,
  AccountsCreateOrUpdateOptionalParams,
  AccountsUpdateOptionalParams,
  AccountsDeleteOptionalParams,
  AccountsListByResourceGroupOptionalParams,
  AccountsListBySubscriptionOptionalParams,
  AccountsCheckNameAvailabilityOptionalParams,
} from "../../models/options.js";

export function _accountsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  options: AccountsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzurePlaywrightService/accounts/{accountName}",
      subscriptionId,
      resourceGroupName,
      accountName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _accountsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Account> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
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
          dashboardUri: result.body.properties?.["dashboardUri"],
          regionalAffinity: result.body.properties?.["regionalAffinity"],
          scalableExecution: result.body.properties?.["scalableExecution"],
          reporting: result.body.properties?.["reporting"],
          localAuth: result.body.properties?.["localAuth"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a Account */
export async function accountsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  options: AccountsGetOptionalParams = { requestOptions: {} },
): Promise<Account> {
  const result = await _accountsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    accountName,
    options,
  );
  return _accountsGetDeserialize(result);
}

export function _accountsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  resource: Account,
  options: AccountsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzurePlaywrightService/accounts/{accountName}",
      subscriptionId,
      resourceGroupName,
      accountName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !resource.tags
          ? resource.tags
          : (serializeRecord(resource.tags as any) as any),
        location: resource["location"],
        properties: !resource.properties
          ? resource.properties
          : accountPropertiesSerializer(resource.properties),
      },
    });
}

export async function _accountsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Account> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
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
          dashboardUri: result.body.properties?.["dashboardUri"],
          regionalAffinity: result.body.properties?.["regionalAffinity"],
          scalableExecution: result.body.properties?.["scalableExecution"],
          reporting: result.body.properties?.["reporting"],
          localAuth: result.body.properties?.["localAuth"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a Account */
export function accountsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  resource: Account,
  options: AccountsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Account>, Account> {
  return getLongRunningPoller(
    context,
    _accountsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _accountsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          accountName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<Account>, Account>;
}

export function _accountsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  properties: AccountUpdate,
  options: AccountsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzurePlaywrightService/accounts/{accountName}",
      subscriptionId,
      resourceGroupName,
      accountName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : accountUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _accountsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Account> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
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
          dashboardUri: result.body.properties?.["dashboardUri"],
          regionalAffinity: result.body.properties?.["regionalAffinity"],
          scalableExecution: result.body.properties?.["scalableExecution"],
          reporting: result.body.properties?.["reporting"],
          localAuth: result.body.properties?.["localAuth"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Update a Account */
export async function accountsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  properties: AccountUpdate,
  options: AccountsUpdateOptionalParams = { requestOptions: {} },
): Promise<Account> {
  const result = await _accountsUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    accountName,
    properties,
    options,
  );
  return _accountsUpdateDeserialize(result);
}

export function _accountsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  options: AccountsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzurePlaywrightService/accounts/{accountName}",
      subscriptionId,
      resourceGroupName,
      accountName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _accountsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Account */
export function accountsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  options: AccountsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _accountsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _accountsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          accountName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _accountsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AccountsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzurePlaywrightService/accounts",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _accountsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_AccountListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        tags: p["tags"],
        location: p["location"],
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
              dashboardUri: p.properties?.["dashboardUri"],
              regionalAffinity: p.properties?.["regionalAffinity"],
              scalableExecution: p.properties?.["scalableExecution"],
              reporting: p.properties?.["reporting"],
              localAuth: p.properties?.["localAuth"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Account resources by resource group */
export function accountsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AccountsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Account> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _accountsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _accountsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _accountsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: AccountsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AzurePlaywrightService/accounts",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _accountsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_AccountListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        tags: p["tags"],
        location: p["location"],
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
              dashboardUri: p.properties?.["dashboardUri"],
              regionalAffinity: p.properties?.["regionalAffinity"],
              scalableExecution: p.properties?.["scalableExecution"],
              reporting: p.properties?.["reporting"],
              localAuth: p.properties?.["localAuth"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Account resources by subscription ID */
export function accountsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: AccountsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Account> {
  return buildPagedAsyncIterator(
    context,
    () => _accountsListBySubscriptionSend(context, subscriptionId, options),
    _accountsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _accountsCheckNameAvailabilitySend(
  context: Client,
  subscriptionId: string,
  body: CheckNameAvailabilityRequest,
  options: AccountsCheckNameAvailabilityOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AzurePlaywrightService/checkNameAvailability",
      subscriptionId,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"], type: body["type"] },
    });
}

export async function _accountsCheckNameAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckNameAvailabilityResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    nameAvailable: result.body["nameAvailable"],
    reason: result.body["reason"],
    message: result.body["message"],
  };
}

/** Adds check global name availability operation, normally used if a resource name must be globally unique. */
export async function accountsCheckNameAvailability(
  context: Client,
  subscriptionId: string,
  body: CheckNameAvailabilityRequest,
  options: AccountsCheckNameAvailabilityOptionalParams = { requestOptions: {} },
): Promise<CheckNameAvailabilityResponse> {
  const result = await _accountsCheckNameAvailabilitySend(
    context,
    subscriptionId,
    body,
    options,
  );
  return _accountsCheckNameAvailabilityDeserialize(result);
}
