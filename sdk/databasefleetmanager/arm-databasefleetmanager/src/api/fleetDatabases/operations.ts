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

export function _revertSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  options: FleetDatabasesRevertOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/databases/{databaseName}/revert{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      databaseName: databaseName,
      "api%2Dversion": context.apiVersion,
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

export async function _revertDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Revert a database transparent data encryption (TDE). */
export function revert(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  options: FleetDatabasesRevertOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _revertDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _revertSend(context, resourceGroupName, fleetName, fleetspaceName, databaseName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _renameSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  body: DatabaseRenameProperties,
  options: FleetDatabasesRenameOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/databases/{databaseName}/rename{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      databaseName: databaseName,
      "api%2Dversion": context.apiVersion,
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

export async function _renameDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Renames a database. */
export function rename(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  body: DatabaseRenameProperties,
  options: FleetDatabasesRenameOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _renameDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _renameSend(
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

export function _changeTierSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  body: DatabaseChangeTierProperties,
  options: FleetDatabasesChangeTierOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/databases/{databaseName}/changeTier{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      databaseName: databaseName,
      "api%2Dversion": context.apiVersion,
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

export async function _changeTierDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Moves database to a different tier. */
export function changeTier(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  body: DatabaseChangeTierProperties,
  options: FleetDatabasesChangeTierOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _changeTierDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _changeTierSend(
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

export function _listByFleetspaceSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  options: FleetDatabasesListByFleetspaceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/databases{?api%2Dversion,%24skip,%24top,%24filter,%24skiptoken}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      "api%2Dversion": context.apiVersion,
      "%24skip": options?.skip,
      "%24top": options?.top,
      "%24filter": options?.filter,
      "%24skiptoken": options?.skiptoken,
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

export async function _listByFleetspaceDeserialize(
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
export function listByFleetspace(
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
    () => _listByFleetspaceSend(context, resourceGroupName, fleetName, fleetspaceName, options),
    _listByFleetspaceDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  options: FleetDatabasesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/databases/{databaseName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      databaseName: databaseName,
      "api%2Dversion": context.apiVersion,
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

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes a fleet database. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  options: FleetDatabasesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(context, resourceGroupName, fleetName, fleetspaceName, databaseName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  properties: FleetDatabase,
  options: FleetDatabasesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/databases/{databaseName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      databaseName: databaseName,
      "api%2Dversion": context.apiVersion,
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

export async function _updateDeserialize(result: PathUncheckedResponse): Promise<FleetDatabase> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fleetDatabaseDeserializer(result.body);
}

/** Updates a fleet database. */
export function update(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  properties: FleetDatabase,
  options: FleetDatabasesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<FleetDatabase>, FleetDatabase> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
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

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  resource: FleetDatabase,
  options: FleetDatabasesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/databases/{databaseName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      databaseName: databaseName,
      "api%2Dversion": context.apiVersion,
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

export async function _createOrUpdateDeserialize(
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
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  resource: FleetDatabase,
  options: FleetDatabasesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<FleetDatabase>, FleetDatabase> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
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

export function _getSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  options: FleetDatabasesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/databases/{databaseName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      fleetName: fleetName,
      fleetspaceName: fleetspaceName,
      databaseName: databaseName,
      "api%2Dversion": context.apiVersion,
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

export async function _getDeserialize(result: PathUncheckedResponse): Promise<FleetDatabase> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return fleetDatabaseDeserializer(result.body);
}

/** Gets a fleet database. */
export async function get(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  databaseName: string,
  options: FleetDatabasesGetOptionalParams = { requestOptions: {} },
): Promise<FleetDatabase> {
  const result = await _getSend(
    context,
    resourceGroupName,
    fleetName,
    fleetspaceName,
    databaseName,
    options,
  );
  return _getDeserialize(result);
}
