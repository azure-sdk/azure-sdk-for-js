// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AutonomousDatabasesChangeDisasterRecoveryConfigurationOptionalParams,
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
  errorResponseDeserializer,
  _AutonomousDatabaseListResult,
  _autonomousDatabaseListResultDeserializer,
  AutonomousDatabase,
  autonomousDatabaseSerializer,
  autonomousDatabaseDeserializer,
  DisasterRecoveryConfigurationDetails,
  disasterRecoveryConfigurationDetailsSerializer,
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

export function _autonomousDatabasesChangeDisasterRecoveryConfigurationSend(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: DisasterRecoveryConfigurationDetails,
  options: AutonomousDatabasesChangeDisasterRecoveryConfigurationOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/changeDisasterRecoveryConfiguration",
      context.subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: disasterRecoveryConfigurationDetailsSerializer(body),
    });
}

export async function _autonomousDatabasesChangeDisasterRecoveryConfigurationDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return autonomousDatabaseDeserializer(result.body);
}

/** Perform ChangeDisasterRecoveryConfiguration action on Autonomous Database */
export function autonomousDatabasesChangeDisasterRecoveryConfiguration(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: DisasterRecoveryConfigurationDetails,
  options: AutonomousDatabasesChangeDisasterRecoveryConfigurationOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase> {
  return getLongRunningPoller(
    context,
    _autonomousDatabasesChangeDisasterRecoveryConfigurationDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _autonomousDatabasesChangeDisasterRecoveryConfigurationSend(
          context,
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
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabasesShrinkOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/shrink",
      context.subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _autonomousDatabasesShrinkDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return autonomousDatabaseDeserializer(result.body);
}

/** This operation shrinks the current allocated storage down to the current actual used data storage. */
export function autonomousDatabasesShrink(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabasesShrinkOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase> {
  return getLongRunningPoller(context, _autonomousDatabasesShrinkDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _autonomousDatabasesShrinkSend(context, resourceGroupName, autonomousdatabasename, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}

export function _autonomousDatabasesRestoreSend(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: RestoreAutonomousDatabaseDetails,
  options: AutonomousDatabasesRestoreOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/restore",
      context.subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: restoreAutonomousDatabaseDetailsSerializer(body),
    });
}

export async function _autonomousDatabasesRestoreDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return autonomousDatabaseDeserializer(result.body);
}

/** Restores an Autonomous Database based on the provided request parameters. */
export function autonomousDatabasesRestore(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: RestoreAutonomousDatabaseDetails,
  options: AutonomousDatabasesRestoreOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase> {
  return getLongRunningPoller(context, _autonomousDatabasesRestoreDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _autonomousDatabasesRestoreSend(
        context,
        resourceGroupName,
        autonomousdatabasename,
        body,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}

export function _autonomousDatabasesGenerateWalletSend(
  context: Client,
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
      context.subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: generateAutonomousDatabaseWalletDetailsSerializer(body),
    });
}

export async function _autonomousDatabasesGenerateWalletDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabaseWalletFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return autonomousDatabaseWalletFileDeserializer(result.body);
}

/** Generate wallet action on Autonomous Database */
export async function autonomousDatabasesGenerateWallet(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: GenerateAutonomousDatabaseWalletDetails,
  options: AutonomousDatabasesGenerateWalletOptionalParams = {
    requestOptions: {},
  },
): Promise<AutonomousDatabaseWalletFile> {
  const result = await _autonomousDatabasesGenerateWalletSend(
    context,
    resourceGroupName,
    autonomousdatabasename,
    body,
    options,
  );
  return _autonomousDatabasesGenerateWalletDeserialize(result);
}

export function _autonomousDatabasesFailoverSend(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: PeerDbDetails,
  options: AutonomousDatabasesFailoverOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/failover",
      context.subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: peerDbDetailsSerializer(body),
    });
}

export async function _autonomousDatabasesFailoverDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return autonomousDatabaseDeserializer(result.body);
}

/** Perform failover action on Autonomous Database */
export function autonomousDatabasesFailover(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: PeerDbDetails,
  options: AutonomousDatabasesFailoverOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase> {
  return getLongRunningPoller(context, _autonomousDatabasesFailoverDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _autonomousDatabasesFailoverSend(
        context,
        resourceGroupName,
        autonomousdatabasename,
        body,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}

export function _autonomousDatabasesSwitchoverSend(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: PeerDbDetails,
  options: AutonomousDatabasesSwitchoverOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/switchover",
      context.subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: peerDbDetailsSerializer(body),
    });
}

export async function _autonomousDatabasesSwitchoverDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return autonomousDatabaseDeserializer(result.body);
}

/** Perform switchover action on Autonomous Database */
export function autonomousDatabasesSwitchover(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  body: PeerDbDetails,
  options: AutonomousDatabasesSwitchoverOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase> {
  return getLongRunningPoller(context, _autonomousDatabasesSwitchoverDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _autonomousDatabasesSwitchoverSend(
        context,
        resourceGroupName,
        autonomousdatabasename,
        body,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}

export function _autonomousDatabasesListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: AutonomousDatabasesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases",
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

export async function _autonomousDatabasesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_AutonomousDatabaseListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _autonomousDatabaseListResultDeserializer(result.body);
}

/** List AutonomousDatabase resources by resource group */
export function autonomousDatabasesListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: AutonomousDatabasesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AutonomousDatabase> {
  return buildPagedAsyncIterator(
    context,
    () => _autonomousDatabasesListByResourceGroupSend(context, resourceGroupName, options),
    _autonomousDatabasesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _autonomousDatabasesCreateOrUpdateSend(
  context: Client,
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
      context.subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: autonomousDatabaseSerializer(resource),
    });
}

export async function _autonomousDatabasesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return autonomousDatabaseDeserializer(result.body);
}

/** Create a AutonomousDatabase */
export function autonomousDatabasesCreateOrUpdate(
  context: Client,
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
          resourceGroupName,
          autonomousdatabasename,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}

export function _autonomousDatabasesDeleteSend(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabasesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}",
      context.subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
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

export async function _autonomousDatabasesDeleteDeserialize(
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

/** Delete a AutonomousDatabase */
export function autonomousDatabasesDelete(
  context: Client,
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
        _autonomousDatabasesDeleteSend(context, resourceGroupName, autonomousdatabasename, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _autonomousDatabasesUpdateSend(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  properties: AutonomousDatabaseUpdate,
  options: AutonomousDatabasesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}",
      context.subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: autonomousDatabaseUpdateSerializer(properties),
    });
}

export async function _autonomousDatabasesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return autonomousDatabaseDeserializer(result.body);
}

/** Update a AutonomousDatabase */
export function autonomousDatabasesUpdate(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  properties: AutonomousDatabaseUpdate,
  options: AutonomousDatabasesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase> {
  return getLongRunningPoller(context, _autonomousDatabasesUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _autonomousDatabasesUpdateSend(
        context,
        resourceGroupName,
        autonomousdatabasename,
        properties,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}

export function _autonomousDatabasesGetSend(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabasesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}",
      context.subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
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

export async function _autonomousDatabasesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return autonomousDatabaseDeserializer(result.body);
}

/** Get a AutonomousDatabase */
export async function autonomousDatabasesGet(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabasesGetOptionalParams = { requestOptions: {} },
): Promise<AutonomousDatabase> {
  const result = await _autonomousDatabasesGetSend(
    context,
    resourceGroupName,
    autonomousdatabasename,
    options,
  );
  return _autonomousDatabasesGetDeserialize(result);
}

export function _autonomousDatabasesListBySubscriptionSend(
  context: Client,
  options: AutonomousDatabasesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/autonomousDatabases",
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

export async function _autonomousDatabasesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_AutonomousDatabaseListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _autonomousDatabaseListResultDeserializer(result.body);
}

/** List AutonomousDatabase resources by subscription ID */
export function autonomousDatabasesListBySubscription(
  context: Client,
  options: AutonomousDatabasesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AutonomousDatabase> {
  return buildPagedAsyncIterator(
    context,
    () => _autonomousDatabasesListBySubscriptionSend(context, options),
    _autonomousDatabasesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
