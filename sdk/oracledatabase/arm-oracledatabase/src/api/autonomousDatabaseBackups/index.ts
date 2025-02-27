// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AutonomousDatabaseBackupsCreateOrUpdateOptionalParams,
  AutonomousDatabaseBackupsDeleteOptionalParams,
  AutonomousDatabaseBackupsGetOptionalParams,
  AutonomousDatabaseBackupsListByAutonomousDatabaseOptionalParams,
  AutonomousDatabaseBackupsUpdateOptionalParams,
  DatabaseContext as Client,
} from "../index.js";
import {
  errorResponseDeserializer,
  AutonomousDatabaseBackup,
  autonomousDatabaseBackupSerializer,
  autonomousDatabaseBackupDeserializer,
  AutonomousDatabaseBackupUpdate,
  autonomousDatabaseBackupUpdateSerializer,
  _AutonomousDatabaseBackupListResult,
  _autonomousDatabaseBackupListResultDeserializer,
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

export function _autonomousDatabaseBackupsListByAutonomousDatabaseSend(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabaseBackupsListByAutonomousDatabaseOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups",
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

export async function _autonomousDatabaseBackupsListByAutonomousDatabaseDeserialize(
  result: PathUncheckedResponse,
): Promise<_AutonomousDatabaseBackupListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _autonomousDatabaseBackupListResultDeserializer(result.body);
}

/** List AutonomousDatabaseBackup resources by AutonomousDatabase */
export function autonomousDatabaseBackupsListByAutonomousDatabase(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabaseBackupsListByAutonomousDatabaseOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AutonomousDatabaseBackup> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _autonomousDatabaseBackupsListByAutonomousDatabaseSend(
        context,
        resourceGroupName,
        autonomousdatabasename,
        options,
      ),
    _autonomousDatabaseBackupsListByAutonomousDatabaseDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _autonomousDatabaseBackupsUpdateSend(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  properties: AutonomousDatabaseBackupUpdate,
  options: AutonomousDatabaseBackupsUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups/{adbbackupid}",
      context.subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
      adbbackupid,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: autonomousDatabaseBackupUpdateSerializer(properties),
    });
}

export async function _autonomousDatabaseBackupsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabaseBackup> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return autonomousDatabaseBackupDeserializer(result.body);
}

/** Update a AutonomousDatabaseBackup */
export function autonomousDatabaseBackupsUpdate(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  properties: AutonomousDatabaseBackupUpdate,
  options: AutonomousDatabaseBackupsUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<AutonomousDatabaseBackup>, AutonomousDatabaseBackup> {
  return getLongRunningPoller(
    context,
    _autonomousDatabaseBackupsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _autonomousDatabaseBackupsUpdateSend(
          context,
          resourceGroupName,
          autonomousdatabasename,
          adbbackupid,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<AutonomousDatabaseBackup>, AutonomousDatabaseBackup>;
}

export function _autonomousDatabaseBackupsCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  resource: AutonomousDatabaseBackup,
  options: AutonomousDatabaseBackupsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups/{adbbackupid}",
      context.subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
      adbbackupid,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: autonomousDatabaseBackupSerializer(resource),
    });
}

export async function _autonomousDatabaseBackupsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabaseBackup> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return autonomousDatabaseBackupDeserializer(result.body);
}

/** Create a AutonomousDatabaseBackup */
export function autonomousDatabaseBackupsCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  resource: AutonomousDatabaseBackup,
  options: AutonomousDatabaseBackupsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<AutonomousDatabaseBackup>, AutonomousDatabaseBackup> {
  return getLongRunningPoller(
    context,
    _autonomousDatabaseBackupsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _autonomousDatabaseBackupsCreateOrUpdateSend(
          context,
          resourceGroupName,
          autonomousdatabasename,
          adbbackupid,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<AutonomousDatabaseBackup>, AutonomousDatabaseBackup>;
}

export function _autonomousDatabaseBackupsDeleteSend(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  options: AutonomousDatabaseBackupsDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups/{adbbackupid}",
      context.subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
      adbbackupid,
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

export async function _autonomousDatabaseBackupsDeleteDeserialize(
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

/** Delete a AutonomousDatabaseBackup */
export function autonomousDatabaseBackupsDelete(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  options: AutonomousDatabaseBackupsDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _autonomousDatabaseBackupsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _autonomousDatabaseBackupsDeleteSend(
          context,
          resourceGroupName,
          autonomousdatabasename,
          adbbackupid,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _autonomousDatabaseBackupsGetSend(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  options: AutonomousDatabaseBackupsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups/{adbbackupid}",
      context.subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
      adbbackupid,
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

export async function _autonomousDatabaseBackupsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabaseBackup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return autonomousDatabaseBackupDeserializer(result.body);
}

/** Get a AutonomousDatabaseBackup */
export async function autonomousDatabaseBackupsGet(
  context: Client,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  options: AutonomousDatabaseBackupsGetOptionalParams = { requestOptions: {} },
): Promise<AutonomousDatabaseBackup> {
  const result = await _autonomousDatabaseBackupsGetSend(
    context,
    resourceGroupName,
    autonomousdatabasename,
    adbbackupid,
    options,
  );
  return _autonomousDatabaseBackupsGetDeserialize(result);
}
