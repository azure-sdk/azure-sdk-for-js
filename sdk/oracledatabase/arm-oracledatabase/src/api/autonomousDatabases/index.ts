// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  autonomousDatabaseBasePropertiesUnionSerializer,
  autonomousDatabaseUpdatePropertiesSerializer,
  AutonomousDatabase,
  DisasterRecoveryConfigurationDetails,
  AutonomousDatabaseUpdate,
  PeerDbDetails,
  GenerateAutonomousDatabaseWalletDetails,
  AutonomousDatabaseWalletFile,
  RestoreAutonomousDatabaseDetails,
  _AutonomousDatabaseListResult,
} from "../../models/models.js";
import { deserializeAutonomousDatabaseBasePropertiesUnion } from "../../utils/deserializeUtil.js";
import { DatabaseContext as Client } from "../index.js";
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
  AutonomousDatabasesListBySubscriptionOptionalParams,
  AutonomousDatabasesGetOptionalParams,
  AutonomousDatabasesUpdateOptionalParams,
  AutonomousDatabasesDeleteOptionalParams,
  AutonomousDatabasesCreateOrUpdateOptionalParams,
  AutonomousDatabasesListByResourceGroupOptionalParams,
  AutonomousDatabasesSwitchoverOptionalParams,
  AutonomousDatabasesFailoverOptionalParams,
  AutonomousDatabasesGenerateWalletOptionalParams,
  AutonomousDatabasesRestoreOptionalParams,
  AutonomousDatabasesShrinkOptionalParams,
  AutonomousDatabasesChangeDisasterRecoveryConfigurationOptionalParams,
} from "../../models/options.js";

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
          ? p.properties
          : deserializeAutonomousDatabaseBasePropertiesUnion(p.properties),
      };
    }),
    nextLink: result.body["nextLink"],
  };
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
      ? result.body.properties
      : deserializeAutonomousDatabaseBasePropertiesUnion(
          result.body.properties,
        ),
  };
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
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : autonomousDatabaseUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _autonomousDatabasesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
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
      ? result.body.properties
      : deserializeAutonomousDatabaseBasePropertiesUnion(
          result.body.properties,
        ),
  };
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
      body: {
        tags: !resource.tags
          ? resource.tags
          : (serializeRecord(resource.tags as any) as any),
        location: resource["location"],
        properties: !resource.properties
          ? resource.properties
          : autonomousDatabaseBasePropertiesUnionSerializer(
              resource.properties,
            ),
      },
    });
}

export async function _autonomousDatabasesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
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
      ? result.body.properties
      : deserializeAutonomousDatabaseBasePropertiesUnion(
          result.body.properties,
        ),
  };
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
          ? p.properties
          : deserializeAutonomousDatabaseBasePropertiesUnion(p.properties),
      };
    }),
    nextLink: result.body["nextLink"],
  };
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
      body: {
        peerDbId: body["peerDbId"],
        peerDbOcid: body["peerDbOcid"],
        peerDbLocation: body["peerDbLocation"],
      },
    });
}

export async function _autonomousDatabasesSwitchoverDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
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
      ? result.body.properties
      : deserializeAutonomousDatabaseBasePropertiesUnion(
          result.body.properties,
        ),
  };
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
      body: {
        peerDbId: body["peerDbId"],
        peerDbOcid: body["peerDbOcid"],
        peerDbLocation: body["peerDbLocation"],
      },
    });
}

export async function _autonomousDatabasesFailoverDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
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
      ? result.body.properties
      : deserializeAutonomousDatabaseBasePropertiesUnion(
          result.body.properties,
        ),
  };
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
      body: {
        generateType: body["generateType"],
        isRegional: body["isRegional"],
        password: body["password"],
      },
    });
}

export async function _autonomousDatabasesGenerateWalletDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabaseWalletFile> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    walletFiles: result.body["walletFiles"],
  };
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
      body: { timestamp: body["timestamp"].toISOString() },
    });
}

export async function _autonomousDatabasesRestoreDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
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
      ? result.body.properties
      : deserializeAutonomousDatabaseBasePropertiesUnion(
          result.body.properties,
        ),
  };
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
      ? result.body.properties
      : deserializeAutonomousDatabaseBasePropertiesUnion(
          result.body.properties,
        ),
  };
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
    },
  ) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}

export function _autonomousDatabasesChangeDisasterRecoveryConfigurationSend(
  context: Client,
  subscriptionId: string,
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
      subscriptionId,
      resourceGroupName,
      autonomousdatabasename,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        disasterRecoveryType: body["disasterRecoveryType"],
        timeSnapshotStandbyEnabledTill:
          body["timeSnapshotStandbyEnabledTill"]?.toISOString(),
        isSnapshotStandby: body["isSnapshotStandby"],
        isReplicateAutomaticBackups: body["isReplicateAutomaticBackups"],
      },
    });
}

export async function _autonomousDatabasesChangeDisasterRecoveryConfigurationDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabase> {
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
      ? result.body.properties
      : deserializeAutonomousDatabaseBasePropertiesUnion(
          result.body.properties,
        ),
  };
}

/** Perform ChangeDisasterRecoveryConfiguration action on Autonomous Database */
export function autonomousDatabasesChangeDisasterRecoveryConfiguration(
  context: Client,
  subscriptionId: string,
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
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _autonomousDatabasesChangeDisasterRecoveryConfigurationSend(
          context,
          subscriptionId,
          resourceGroupName,
          autonomousdatabasename,
          body,
          options,
        ),
    },
  ) as PollerLike<OperationState<AutonomousDatabase>, AutonomousDatabase>;
}
