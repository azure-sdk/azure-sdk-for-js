// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AutonomousDatabasesCreateOrUpdateOptionalParams,
  AutonomousDatabasesDeleteOptionalParams,
  AutonomousDatabasesFailoverOptionalParams,
  AutonomousDatabasesGenerateWalletOptionalParams,
  AutonomousDatabasesGetOptionalParams,
  AutonomousDatabasesListByResourceGroupOptionalParams,
  AutonomousDatabasesListBySubscriptionOptionalParams,
  AutonomousDatabasesRestoreOptionalParams,
  AutonomousDatabasesShrinkOptionalParams,
  AutonomousDatabasesSwitchoverOptionalParams,
  AutonomousDatabasesUpdateOptionalParams,
  DatabaseContext as Client,
} from "../index.js";
import {
  _AutonomousDatabaseListResult,
  _autonomousDatabaseListResultDeserializer,
  AutonomousDatabase,
  autonomousDatabaseSerializer,
  autonomousDatabaseDeserializer,
  AutonomousDatabaseUpdate,
  autonomousDatabaseUpdateSerializer,
  PeerDbDetails,
  peerDbDetailsSerializer,
  GenerateAutonomousDatabaseWalletDetails,
  generateAutonomousDatabaseWalletDetailsSerializer,
  AutonomousDatabaseWalletFile,
  autonomousDatabaseWalletFileDeserializer,
  RestoreAutonomousDatabaseDetails,
  restoreAutonomousDatabaseDetailsSerializer,
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

export function _autonomousDatabasesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: AutonomousDatabasesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/autonomousDatabases",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabasesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_AutonomousDatabaseListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _autonomousDatabaseListResultDeserializer(result.body);
}

/** List AutonomousDatabase resources by subscription ID */
export function autonomousDatabasesListBySubscription(
  context: Client,
  subscriptionId: string,
  options: AutonomousDatabasesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AutonomousDatabase> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _autonomousDatabasesListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _autonomousDatabasesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _autonomousDatabasesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabasesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabasesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return autonomousDatabaseDeserializer(result.body);
}

/** Get a AutonomousDatabase */
export async function autonomousDatabasesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabasesGetOptionalParams = { requestOptions: {} },
): Promise<AutonomousDatabase> {
  const result = await _autonomousDatabasesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    autonomousdatabasename,
    options,
  );
  return _autonomousDatabasesGetDeserialize(result);
}

export function _autonomousDatabasesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  properties: AutonomousDatabaseUpdate,
  options: AutonomousDatabasesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: autonomousDatabaseUpdateSerializer(properties),
    });
}

export async function _autonomousDatabasesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return autonomousDatabaseDeserializer(result.body);
}

/** Update a AutonomousDatabase */
export function autonomousDatabasesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  properties: AutonomousDatabaseUpdate,
  options: AutonomousDatabasesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase> {
  return getLongRunningPoller(
    context,
    _autonomousDatabasesUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _autonomousDatabasesUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          autonomousdatabasename,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}

export function _autonomousDatabasesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabasesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabasesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a AutonomousDatabase */
export function autonomousDatabasesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabasesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _autonomousDatabasesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _autonomousDatabasesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          autonomousdatabasename,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _autonomousDatabasesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  resource: AutonomousDatabase,
  options: AutonomousDatabasesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: autonomousDatabaseSerializer(resource),
    });
}

export async function _autonomousDatabasesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return autonomousDatabaseDeserializer(result.body);
}

/** Create a AutonomousDatabase */
export function autonomousDatabasesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  resource: AutonomousDatabase,
  options: AutonomousDatabasesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase> {
  return getLongRunningPoller(
    context,
    _autonomousDatabasesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _autonomousDatabasesCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          autonomousdatabasename,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}

export function _autonomousDatabasesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AutonomousDatabasesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabasesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_AutonomousDatabaseListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _autonomousDatabaseListResultDeserializer(result.body);
}

/** List AutonomousDatabase resources by resource group */
export function autonomousDatabasesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AutonomousDatabasesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AutonomousDatabase> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _autonomousDatabasesListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _autonomousDatabasesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _autonomousDatabasesSwitchoverSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: PeerDbDetails,
  options: AutonomousDatabasesSwitchoverOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/switchover",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: peerDbDetailsSerializer(body),
    });
}

export async function _autonomousDatabasesSwitchoverDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return autonomousDatabaseDeserializer(result.body);
}

/** Perform switchover action on Autonomous Database */
export function autonomousDatabasesSwitchover(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: PeerDbDetails,
  options: AutonomousDatabasesSwitchoverOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase> {
  return getLongRunningPoller(
    context,
    _autonomousDatabasesSwitchoverDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _autonomousDatabasesSwitchoverSend(
          context,
          subscriptionId,
          resourceGroupName,
          autonomousdatabasename,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}

export function _autonomousDatabasesFailoverSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: PeerDbDetails,
  options: AutonomousDatabasesFailoverOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/failover",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: peerDbDetailsSerializer(body),
    });
}

export async function _autonomousDatabasesFailoverDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return autonomousDatabaseDeserializer(result.body);
}

/** Perform failover action on Autonomous Database */
export function autonomousDatabasesFailover(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: PeerDbDetails,
  options: AutonomousDatabasesFailoverOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase> {
  return getLongRunningPoller(
    context,
    _autonomousDatabasesFailoverDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _autonomousDatabasesFailoverSend(
          context,
          subscriptionId,
          resourceGroupName,
          autonomousdatabasename,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}

export function _autonomousDatabasesGenerateWalletSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: GenerateAutonomousDatabaseWalletDetails,
  options: AutonomousDatabasesGenerateWalletOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/generateWallet",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: generateAutonomousDatabaseWalletDetailsSerializer(body),
    });
}

export async function _autonomousDatabasesGenerateWalletDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabaseWalletFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return autonomousDatabaseWalletFileDeserializer(result.body);
}

/** Generate wallet action on Autonomous Database */
export async function autonomousDatabasesGenerateWallet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: GenerateAutonomousDatabaseWalletDetails,
  options: AutonomousDatabasesGenerateWalletOptionalParams = {
    requestOptions: {},
  },
): Promise<AutonomousDatabaseWalletFile> {
  const result = await _autonomousDatabasesGenerateWalletSend(
    context,
    subscriptionId,
    resourceGroupName,
    autonomousdatabasename,
    body,
    options,
  );
  return _autonomousDatabasesGenerateWalletDeserialize(result);
}

export function _autonomousDatabasesRestoreSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: RestoreAutonomousDatabaseDetails,
  options: AutonomousDatabasesRestoreOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/restore",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: restoreAutonomousDatabaseDetailsSerializer(body),
    });
}

export async function _autonomousDatabasesRestoreDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return autonomousDatabaseDeserializer(result.body);
}

/** Restores an Autonomous Database based on the provided request parameters. */
export function autonomousDatabasesRestore(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: RestoreAutonomousDatabaseDetails,
  options: AutonomousDatabasesRestoreOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase> {
  return getLongRunningPoller(
    context,
    _autonomousDatabasesRestoreDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _autonomousDatabasesRestoreSend(
          context,
          subscriptionId,
          resourceGroupName,
          autonomousdatabasename,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}

export function _autonomousDatabasesShrinkSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabasesShrinkOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/shrink",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabasesShrinkDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return autonomousDatabaseDeserializer(result.body);
}

/** This operation shrinks the current allocated storage down to the current actual used data storage. */
export function autonomousDatabasesShrink(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabasesShrinkOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase> {
  return getLongRunningPoller(
    context,
    _autonomousDatabasesShrinkDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _autonomousDatabasesShrinkSend(
          context,
          subscriptionId,
          resourceGroupName,
          autonomousdatabasename,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}
