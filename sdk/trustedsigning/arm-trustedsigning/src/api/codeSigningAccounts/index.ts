// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  codeSigningAccountPropertiesSerializer,
  codeSigningAccountPatchPropertiesSerializer,
  CodeSigningAccount,
  CodeSigningAccountPatch,
  CheckNameAvailability,
  CheckNameAvailabilityResult,
  _CodeSigningAccountListResult,
} from "../../models/models.js";
import { CodeSigningContext as Client } from "../index.js";
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
  CodeSigningAccountsGetOptionalParams,
  CodeSigningAccountsCreateOptionalParams,
  CodeSigningAccountsUpdateOptionalParams,
  CodeSigningAccountsDeleteOptionalParams,
  CodeSigningAccountsListByResourceGroupOptionalParams,
  CodeSigningAccountsListBySubscriptionOptionalParams,
  CodeSigningAccountsCheckNameAvailabilityOptionalParams,
} from "../../models/options.js";

export function _codeSigningAccountsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  options: CodeSigningAccountsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}",
      subscriptionId,
      resourceGroupName,
      accountName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _codeSigningAccountsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<CodeSigningAccount> {
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
          accountUri: result.body.properties?.["accountUri"],
          sku: !result.body.properties?.sku
            ? undefined
            : { name: result.body.properties?.sku?.["name"] },
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a trusted Signing Account. */
export async function codeSigningAccountsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  options: CodeSigningAccountsGetOptionalParams = { requestOptions: {} },
): Promise<CodeSigningAccount> {
  const result = await _codeSigningAccountsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    accountName,
    options,
  );
  return _codeSigningAccountsGetDeserialize(result);
}

export function _codeSigningAccountsCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  resource: CodeSigningAccount,
  options: CodeSigningAccountsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}",
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
          : codeSigningAccountPropertiesSerializer(resource.properties),
      },
    });
}

export async function _codeSigningAccountsCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<CodeSigningAccount> {
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
          accountUri: result.body.properties?.["accountUri"],
          sku: !result.body.properties?.sku
            ? undefined
            : { name: result.body.properties?.sku?.["name"] },
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a trusted Signing Account. */
export function codeSigningAccountsCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  resource: CodeSigningAccount,
  options: CodeSigningAccountsCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CodeSigningAccount>, CodeSigningAccount> {
  return getLongRunningPoller(
    context,
    _codeSigningAccountsCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _codeSigningAccountsCreateSend(
          context,
          subscriptionId,
          resourceGroupName,
          accountName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<CodeSigningAccount>, CodeSigningAccount>;
}

export function _codeSigningAccountsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  properties: CodeSigningAccountPatch,
  options: CodeSigningAccountsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}",
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
          : codeSigningAccountPatchPropertiesSerializer(properties.properties),
      },
    });
}

export async function _codeSigningAccountsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CodeSigningAccount> {
  const expectedStatuses = ["200", "202"];
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
          accountUri: result.body.properties?.["accountUri"],
          sku: !result.body.properties?.sku
            ? undefined
            : { name: result.body.properties?.sku?.["name"] },
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Update a trusted signing account. */
export function codeSigningAccountsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  properties: CodeSigningAccountPatch,
  options: CodeSigningAccountsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CodeSigningAccount>, CodeSigningAccount> {
  return getLongRunningPoller(
    context,
    _codeSigningAccountsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _codeSigningAccountsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          accountName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<CodeSigningAccount>, CodeSigningAccount>;
}

export function _codeSigningAccountsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  options: CodeSigningAccountsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}",
      subscriptionId,
      resourceGroupName,
      accountName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _codeSigningAccountsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a trusted signing account. */
export function codeSigningAccountsDelete(
  context: Client,
  subscriptionId: string,
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
        _codeSigningAccountsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          accountName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _codeSigningAccountsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CodeSigningAccountsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _codeSigningAccountsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_CodeSigningAccountListResult> {
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
              accountUri: p.properties?.["accountUri"],
              sku: !p.properties?.sku
                ? undefined
                : { name: p.properties?.sku?.["name"] },
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Lists trusted signing accounts within a resource group. */
export function codeSigningAccountsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CodeSigningAccountsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CodeSigningAccount> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _codeSigningAccountsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _codeSigningAccountsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _codeSigningAccountsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: CodeSigningAccountsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.CodeSigning/codeSigningAccounts",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _codeSigningAccountsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_CodeSigningAccountListResult> {
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
              accountUri: p.properties?.["accountUri"],
              sku: !p.properties?.sku
                ? undefined
                : { name: p.properties?.sku?.["name"] },
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Lists trusted signing accounts within a subscription. */
export function codeSigningAccountsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: CodeSigningAccountsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CodeSigningAccount> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _codeSigningAccountsListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _codeSigningAccountsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _codeSigningAccountsCheckNameAvailabilitySend(
  context: Client,
  subscriptionId: string,
  body: CheckNameAvailability,
  options: CodeSigningAccountsCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.CodeSigning/checkNameAvailability",
      subscriptionId,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _codeSigningAccountsCheckNameAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckNameAvailabilityResult> {
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

/** Checks that the trusted signing account name is valid and is not already in use. */
export async function codeSigningAccountsCheckNameAvailability(
  context: Client,
  subscriptionId: string,
  body: CheckNameAvailability,
  options: CodeSigningAccountsCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): Promise<CheckNameAvailabilityResult> {
  const result = await _codeSigningAccountsCheckNameAvailabilitySend(
    context,
    subscriptionId,
    body,
    options,
  );
  return _codeSigningAccountsCheckNameAvailabilityDeserialize(result);
}
