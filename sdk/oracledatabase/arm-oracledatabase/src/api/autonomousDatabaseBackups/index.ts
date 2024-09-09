// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  autonomousDatabaseBackupPropertiesSerializer,
  autonomousDatabaseBackupUpdatePropertiesSerializer,
  AutonomousDatabaseBackup,
  AutonomousDatabaseBackupUpdate,
  _AutonomousDatabaseBackupListResult,
} from "../../models/models.js";
import { DatabaseContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  AutonomousDatabaseBackupsGetOptionalParams,
  AutonomousDatabaseBackupsDeleteOptionalParams,
  AutonomousDatabaseBackupsCreateOrUpdateOptionalParams,
  AutonomousDatabaseBackupsUpdateOptionalParams,
  AutonomousDatabaseBackupsListByAutonomousDatabaseOptionalParams,
} from "../../models/options.js";

export function _autonomousDatabaseBackupsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  options: AutonomousDatabaseBackupsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups/{adbbackupid}",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
      adbbackupid,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabaseBackupsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabaseBackup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
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
          autonomousDatabaseOcid:
            result.body.properties?.["autonomousDatabaseOcid"],
          databaseSizeInTbs: result.body.properties?.["databaseSizeInTbs"],
          dbVersion: result.body.properties?.["dbVersion"],
          displayName: result.body.properties?.["displayName"],
          ocid: result.body.properties?.["ocid"],
          isAutomatic: result.body.properties?.["isAutomatic"],
          isRestorable: result.body.properties?.["isRestorable"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          retentionPeriodInDays:
            result.body.properties?.["retentionPeriodInDays"],
          sizeInTbs: result.body.properties?.["sizeInTbs"],
          timeAvailableTil:
            result.body.properties?.["timeAvailableTil"] !== undefined
              ? new Date(result.body.properties?.["timeAvailableTil"])
              : undefined,
          timeStarted: result.body.properties?.["timeStarted"],
          timeEnded: result.body.properties?.["timeEnded"],
          backupType: result.body.properties?.["backupType"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a AutonomousDatabaseBackup */
export async function autonomousDatabaseBackupsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  options: AutonomousDatabaseBackupsGetOptionalParams = { requestOptions: {} },
): Promise<AutonomousDatabaseBackup> {
  const result = await _autonomousDatabaseBackupsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    autonomousdatabasename,
    adbbackupid,
    options,
  );
  return _autonomousDatabaseBackupsGetDeserialize(result);
}

export function _autonomousDatabaseBackupsDeleteSend(
  context: Client,
  subscriptionId: string,
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
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
      adbbackupid,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabaseBackupsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a AutonomousDatabaseBackup */
export function autonomousDatabaseBackupsDelete(
  context: Client,
  subscriptionId: string,
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
          subscriptionId,
          resourceGroupName,
          autonomousdatabasename,
          adbbackupid,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _autonomousDatabaseBackupsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
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
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
      adbbackupid,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : autonomousDatabaseBackupPropertiesSerializer(resource.properties),
      },
    });
}

export async function _autonomousDatabaseBackupsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabaseBackup> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
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
          autonomousDatabaseOcid:
            result.body.properties?.["autonomousDatabaseOcid"],
          databaseSizeInTbs: result.body.properties?.["databaseSizeInTbs"],
          dbVersion: result.body.properties?.["dbVersion"],
          displayName: result.body.properties?.["displayName"],
          ocid: result.body.properties?.["ocid"],
          isAutomatic: result.body.properties?.["isAutomatic"],
          isRestorable: result.body.properties?.["isRestorable"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          retentionPeriodInDays:
            result.body.properties?.["retentionPeriodInDays"],
          sizeInTbs: result.body.properties?.["sizeInTbs"],
          timeAvailableTil:
            result.body.properties?.["timeAvailableTil"] !== undefined
              ? new Date(result.body.properties?.["timeAvailableTil"])
              : undefined,
          timeStarted: result.body.properties?.["timeStarted"],
          timeEnded: result.body.properties?.["timeEnded"],
          backupType: result.body.properties?.["backupType"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a AutonomousDatabaseBackup */
export function autonomousDatabaseBackupsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  resource: AutonomousDatabaseBackup,
  options: AutonomousDatabaseBackupsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<AutonomousDatabaseBackup>,
  AutonomousDatabaseBackup
> {
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
          subscriptionId,
          resourceGroupName,
          autonomousdatabasename,
          adbbackupid,
          resource,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<AutonomousDatabaseBackup>,
    AutonomousDatabaseBackup
  >;
}

export function _autonomousDatabaseBackupsUpdateSend(
  context: Client,
  subscriptionId: string,
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
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
      adbbackupid,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? properties.properties
          : autonomousDatabaseBackupUpdatePropertiesSerializer(
              properties.properties,
            ),
      },
    });
}

export async function _autonomousDatabaseBackupsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabaseBackup> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
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
          autonomousDatabaseOcid:
            result.body.properties?.["autonomousDatabaseOcid"],
          databaseSizeInTbs: result.body.properties?.["databaseSizeInTbs"],
          dbVersion: result.body.properties?.["dbVersion"],
          displayName: result.body.properties?.["displayName"],
          ocid: result.body.properties?.["ocid"],
          isAutomatic: result.body.properties?.["isAutomatic"],
          isRestorable: result.body.properties?.["isRestorable"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          retentionPeriodInDays:
            result.body.properties?.["retentionPeriodInDays"],
          sizeInTbs: result.body.properties?.["sizeInTbs"],
          timeAvailableTil:
            result.body.properties?.["timeAvailableTil"] !== undefined
              ? new Date(result.body.properties?.["timeAvailableTil"])
              : undefined,
          timeStarted: result.body.properties?.["timeStarted"],
          timeEnded: result.body.properties?.["timeEnded"],
          backupType: result.body.properties?.["backupType"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Update a AutonomousDatabaseBackup */
export function autonomousDatabaseBackupsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  adbbackupid: string,
  properties: AutonomousDatabaseBackupUpdate,
  options: AutonomousDatabaseBackupsUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<AutonomousDatabaseBackup>,
  AutonomousDatabaseBackup
> {
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
          subscriptionId,
          resourceGroupName,
          autonomousdatabasename,
          adbbackupid,
          properties,
          options,
        ),
    },
  ) as PollerLike<
    OperationState<AutonomousDatabaseBackup>,
    AutonomousDatabaseBackup
  >;
}

export function _autonomousDatabaseBackupsListByAutonomousDatabaseSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  autonomousdatabasename: string,
  options: AutonomousDatabaseBackupsListByAutonomousDatabaseOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups",
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabaseBackupsListByAutonomousDatabaseDeserialize(
  result: PathUncheckedResponse,
): Promise<_AutonomousDatabaseBackupListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
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
              autonomousDatabaseOcid: p.properties?.["autonomousDatabaseOcid"],
              databaseSizeInTbs: p.properties?.["databaseSizeInTbs"],
              dbVersion: p.properties?.["dbVersion"],
              displayName: p.properties?.["displayName"],
              ocid: p.properties?.["ocid"],
              isAutomatic: p.properties?.["isAutomatic"],
              isRestorable: p.properties?.["isRestorable"],
              lifecycleDetails: p.properties?.["lifecycleDetails"],
              lifecycleState: p.properties?.["lifecycleState"],
              retentionPeriodInDays: p.properties?.["retentionPeriodInDays"],
              sizeInTbs: p.properties?.["sizeInTbs"],
              timeAvailableTil:
                p.properties?.["timeAvailableTil"] !== undefined
                  ? new Date(p.properties?.["timeAvailableTil"])
                  : undefined,
              timeStarted: p.properties?.["timeStarted"],
              timeEnded: p.properties?.["timeEnded"],
              backupType: p.properties?.["backupType"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List AutonomousDatabaseBackup resources by AutonomousDatabase */
export function autonomousDatabaseBackupsListByAutonomousDatabase(
  context: Client,
  subscriptionId: string,
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
        subscriptionId,
        resourceGroupName,
        autonomousdatabasename,
        options,
      ),
    _autonomousDatabaseBackupsListByAutonomousDatabaseDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
