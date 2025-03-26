// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  FleetDatabase,
  fleetDatabaseSerializer,
  fleetDatabaseDeserializer,
  _FleetDatabaseListResult,
  _fleetDatabaseListResultDeserializer,
  DatabaseChangeTierProperties,
  databaseChangeTierPropertiesSerializer,
  DatabaseRenameProperties,
  databaseRenamePropertiesSerializer,
} from "../../models/models.js";
import {
  FleetDatabasesRevertOptionalParams,
  FleetDatabasesRenameOptionalParams,
  FleetDatabasesChangeTierOptionalParams,
  FleetDatabasesListByFleetspaceOptionalParams,
  FleetDatabasesDeleteOptionalParams,
  FleetDatabasesUpdateOptionalParams,
  FleetDatabasesCreateOrUpdateOptionalParams,
  FleetDatabasesGetOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _fleetDatabasesRevertSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  options: FleetDatabasesRevertOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/databases/{databaseName}/revert{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      databaseName: databaseName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _fleetDatabasesRevertDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Revert a database transparent data encryption (TDE). */
export function fleetDatabasesRevert(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  options: FleetDatabasesRevertOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _fleetDatabasesRevertDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fleetDatabasesRevertSend(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        databaseName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _fleetDatabasesRenameSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  body: DatabaseRenameProperties,
  options: FleetDatabasesRenameOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/databases/{databaseName}/rename{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      databaseName: databaseName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: databaseRenamePropertiesSerializer(body),
  });
}

export async function _fleetDatabasesRenameDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Renames a database. */
export function fleetDatabasesRename(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  body: DatabaseRenameProperties,
  options: FleetDatabasesRenameOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _fleetDatabasesRenameDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fleetDatabasesRenameSend(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        databaseName,
        body,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _fleetDatabasesChangeTierSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  body: DatabaseChangeTierProperties,
  options: FleetDatabasesChangeTierOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/databases/{databaseName}/changeTier{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      databaseName: databaseName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: databaseChangeTierPropertiesSerializer(body),
  });
}

export async function _fleetDatabasesChangeTierDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Moves database to a different tier. */
export function fleetDatabasesChangeTier(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  body: DatabaseChangeTierProperties,
  options: FleetDatabasesChangeTierOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _fleetDatabasesChangeTierDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fleetDatabasesChangeTierSend(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        databaseName,
        body,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _fleetDatabasesListByFleetspaceSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  options: FleetDatabasesListByFleetspaceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/databases{?api-version,$skip,$top,$filter,$skiptoken}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      "api-version": context.apiVersion,
      $skip: options?.skip,
      $top: options?.top,
      $filter: options?.filter,
      $skiptoken: options?.skiptoken,
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

export async function _fleetDatabasesListByFleetspaceDeserialize(
  result: PathUncheckedResponse,
): Promise<_FleetDatabaseListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _fleetDatabaseListResultDeserializer(result.body);
}

/** Gets all fleet databases in a fleetspace. */
export function fleetDatabasesListByFleetspace(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  options: FleetDatabasesListByFleetspaceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<FleetDatabase> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _fleetDatabasesListByFleetspaceSend(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        options,
      ),
    _fleetDatabasesListByFleetspaceDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _fleetDatabasesDeleteSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  options: FleetDatabasesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/databases/{databaseName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      databaseName: databaseName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _fleetDatabasesDeleteDeserialize(
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

/** Deletes a fleet database. */
export function fleetDatabasesDelete(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  options: FleetDatabasesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _fleetDatabasesDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fleetDatabasesDeleteSend(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        databaseName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _fleetDatabasesUpdateSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  properties: FleetDatabase,
  options: FleetDatabasesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/databases/{databaseName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      databaseName: databaseName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: fleetDatabaseSerializer(properties),
  });
}

export async function _fleetDatabasesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<FleetDatabase> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fleetDatabaseDeserializer(result.body);
}

/** Updates a fleet database. */
export function fleetDatabasesUpdate(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  properties: FleetDatabase,
  options: FleetDatabasesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<FleetDatabase>, FleetDatabase> {
  return getLongRunningPoller(context, _fleetDatabasesUpdateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fleetDatabasesUpdateSend(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        databaseName,
        properties,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<FleetDatabase>, FleetDatabase>;
}

export function _fleetDatabasesCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  resource: FleetDatabase,
  options: FleetDatabasesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/databases/{databaseName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      databaseName: databaseName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: fleetDatabaseSerializer(resource),
  });
}

export async function _fleetDatabasesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<FleetDatabase> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fleetDatabaseDeserializer(result.body);
}

/** Creates or updates a fleet database. */
export function fleetDatabasesCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  resource: FleetDatabase,
  options: FleetDatabasesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<FleetDatabase>, FleetDatabase> {
  return getLongRunningPoller(context, _fleetDatabasesCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _fleetDatabasesCreateOrUpdateSend(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        databaseName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<FleetDatabase>, FleetDatabase>;
}

export function _fleetDatabasesGetSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  options: FleetDatabasesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/databases/{databaseName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      databaseName: databaseName,
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

export async function _fleetDatabasesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<FleetDatabase> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fleetDatabaseDeserializer(result.body);
}

/** Gets a fleet database. */
export async function fleetDatabasesGet(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  options: FleetDatabasesGetOptionalParams = { requestOptions: {} },
): Promise<FleetDatabase> {
  const result = await _fleetDatabasesGetSend(
    context,
    resourceGroupName,
    fleetName,
    fleetspaceName,
    databaseName,
    options,
  );
  return _fleetDatabasesGetDeserialize(result);
}
