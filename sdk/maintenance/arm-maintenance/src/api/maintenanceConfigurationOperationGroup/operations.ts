// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceContext as Client } from "../index.js";
import {
  maintenanceErrorDeserializer,
  MaintenanceConfiguration,
  maintenanceConfigurationSerializer,
  maintenanceConfigurationDeserializer,
  _ListMaintenanceConfigurationsResult,
  _listMaintenanceConfigurationsResultDeserializer,
} from "../../models/models.js";
import {
  MaintenanceConfigurationOperationGroupMaintenanceConfigurationsListOptionalParams,
  MaintenanceConfigurationOperationGroupListOptionalParams,
  MaintenanceConfigurationOperationGroupDeleteOptionalParams,
  MaintenanceConfigurationOperationGroupUpdateOptionalParams,
  MaintenanceConfigurationOperationGroupCreateOrUpdateOptionalParams,
  MaintenanceConfigurationOperationGroupGetOptionalParams,
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

export function _maintenanceConfigurationsListSend(
  context: Client,
  options: MaintenanceConfigurationOperationGroupMaintenanceConfigurationsListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Maintenance/maintenanceConfigurations{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
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

export async function _maintenanceConfigurationsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ListMaintenanceConfigurationsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = maintenanceErrorDeserializer(result.body);
    throw error;
  }

  return _listMaintenanceConfigurationsResultDeserializer(result.body);
}

/** Get Configuration records within a subscription */
export function maintenanceConfigurationsList(
  context: Client,
  options: MaintenanceConfigurationOperationGroupMaintenanceConfigurationsListOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<MaintenanceConfiguration> {
  return buildPagedAsyncIterator(
    context,
    () => _maintenanceConfigurationsListSend(context, options),
    _maintenanceConfigurationsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listSend(
  context: Client,
  resourceGroupName: string,
  options: MaintenanceConfigurationOperationGroupListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maintenance/maintenanceConfigurations{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
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

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_ListMaintenanceConfigurationsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = maintenanceErrorDeserializer(result.body);
    throw error;
  }

  return _listMaintenanceConfigurationsResultDeserializer(result.body);
}

/** Get Configuration records within a subscription and resource group */
export function list(
  context: Client,
  resourceGroupName: string,
  options: MaintenanceConfigurationOperationGroupListOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<MaintenanceConfiguration> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, resourceGroupName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  options: MaintenanceConfigurationOperationGroupDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maintenance/maintenanceConfigurations/{resourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
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

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<MaintenanceConfiguration> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = maintenanceErrorDeserializer(result.body);
    throw error;
  }

  return maintenanceConfigurationDeserializer(result.body);
}

/** Delete Configuration record */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  options: MaintenanceConfigurationOperationGroupDeleteOptionalParams = {
    requestOptions: {},
  },
): Promise<MaintenanceConfiguration | null> {
  const result = await _$deleteSend(context, resourceGroupName, resourceName, options);
  return _$deleteDeserialize(result);
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  configuration: MaintenanceConfiguration,
  options: MaintenanceConfigurationOperationGroupUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maintenance/maintenanceConfigurations/{resourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
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
    body: maintenanceConfigurationSerializer(configuration),
  });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<MaintenanceConfiguration> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = maintenanceErrorDeserializer(result.body);
    throw error;
  }

  return maintenanceConfigurationDeserializer(result.body);
}

/** Patch configuration record */
export async function update(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  configuration: MaintenanceConfiguration,
  options: MaintenanceConfigurationOperationGroupUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<MaintenanceConfiguration> {
  const result = await _updateSend(
    context,
    resourceGroupName,
    resourceName,
    configuration,
    options,
  );
  return _updateDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  configuration: MaintenanceConfiguration,
  options: MaintenanceConfigurationOperationGroupCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maintenance/maintenanceConfigurations/{resourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
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
    body: maintenanceConfigurationSerializer(configuration),
  });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<MaintenanceConfiguration> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = maintenanceErrorDeserializer(result.body);
    throw error;
  }

  return maintenanceConfigurationDeserializer(result.body);
}

/** Create or Update configuration record */
export async function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  configuration: MaintenanceConfiguration,
  options: MaintenanceConfigurationOperationGroupCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<MaintenanceConfiguration> {
  const result = await _createOrUpdateSend(
    context,
    resourceGroupName,
    resourceName,
    configuration,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  options: MaintenanceConfigurationOperationGroupGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maintenance/maintenanceConfigurations/{resourceName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      resourceName: resourceName,
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

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<MaintenanceConfiguration> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = maintenanceErrorDeserializer(result.body);
    throw error;
  }

  return maintenanceConfigurationDeserializer(result.body);
}

/** Get Configuration record */
export async function get(
  context: Client,
  resourceGroupName: string,
  resourceName: string,
  options: MaintenanceConfigurationOperationGroupGetOptionalParams = {
    requestOptions: {},
  },
): Promise<MaintenanceConfiguration> {
  const result = await _getSend(context, resourceGroupName, resourceName, options);
  return _getDeserialize(result);
}
