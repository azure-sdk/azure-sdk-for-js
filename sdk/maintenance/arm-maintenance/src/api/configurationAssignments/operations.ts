// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceContext as Client } from "../index.js";
import {
  maintenanceErrorDeserializer,
  ConfigurationAssignment,
  configurationAssignmentSerializer,
  configurationAssignmentDeserializer,
  _ListConfigurationAssignmentsResult,
  _listConfigurationAssignmentsResultDeserializer,
} from "../../models/models.js";
import {
  ConfigurationAssignmentsListParentOptionalParams,
  ConfigurationAssignmentsDeleteParentOptionalParams,
  ConfigurationAssignmentsCreateOrUpdateParentOptionalParams,
  ConfigurationAssignmentsGetParentOptionalParams,
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

export function _listParentSend(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceParentType: string,
  resourceParentName: string,
  resourceType: string,
  resourceName: string,
  options: ConfigurationAssignmentsListParentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      providerName: providerName,
      resourceParentType: resourceParentType,
      resourceParentName: resourceParentName,
      resourceType: resourceType,
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

export async function _listParentDeserialize(
  result: PathUncheckedResponse,
): Promise<_ListConfigurationAssignmentsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = maintenanceErrorDeserializer(result.body);
    throw error;
  }

  return _listConfigurationAssignmentsResultDeserializer(result.body);
}

/** List configurationAssignments for resource. */
export function listParent(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceParentType: string,
  resourceParentName: string,
  resourceType: string,
  resourceName: string,
  options: ConfigurationAssignmentsListParentOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ConfigurationAssignment> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listParentSend(
        context,
        resourceGroupName,
        providerName,
        resourceParentType,
        resourceParentName,
        resourceType,
        resourceName,
        options,
      ),
    _listParentDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _deleteParentSend(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceParentType: string,
  resourceParentName: string,
  resourceType: string,
  resourceName: string,
  configurationAssignmentName: string,
  options: ConfigurationAssignmentsDeleteParentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      providerName: providerName,
      resourceParentType: resourceParentType,
      resourceParentName: resourceParentName,
      resourceType: resourceType,
      resourceName: resourceName,
      configurationAssignmentName: configurationAssignmentName,
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

export async function _deleteParentDeserialize(
  result: PathUncheckedResponse,
): Promise<ConfigurationAssignment> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = maintenanceErrorDeserializer(result.body);
    throw error;
  }

  return configurationAssignmentDeserializer(result.body);
}

/** Unregister configuration for resource. */
export async function deleteParent(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceParentType: string,
  resourceParentName: string,
  resourceType: string,
  resourceName: string,
  configurationAssignmentName: string,
  options: ConfigurationAssignmentsDeleteParentOptionalParams = {
    requestOptions: {},
  },
): Promise<ConfigurationAssignment | null> {
  const result = await _deleteParentSend(
    context,
    resourceGroupName,
    providerName,
    resourceParentType,
    resourceParentName,
    resourceType,
    resourceName,
    configurationAssignmentName,
    options,
  );
  return _deleteParentDeserialize(result);
}

export function _createOrUpdateParentSend(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceParentType: string,
  resourceParentName: string,
  resourceType: string,
  resourceName: string,
  configurationAssignmentName: string,
  configurationAssignment: ConfigurationAssignment,
  options: ConfigurationAssignmentsCreateOrUpdateParentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      providerName: providerName,
      resourceParentType: resourceParentType,
      resourceParentName: resourceParentName,
      resourceType: resourceType,
      resourceName: resourceName,
      configurationAssignmentName: configurationAssignmentName,
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
    body: configurationAssignmentSerializer(configurationAssignment),
  });
}

export async function _createOrUpdateParentDeserialize(
  result: PathUncheckedResponse,
): Promise<ConfigurationAssignment> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = maintenanceErrorDeserializer(result.body);
    throw error;
  }

  return configurationAssignmentDeserializer(result.body);
}

/** Register configuration for resource. */
export async function createOrUpdateParent(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceParentType: string,
  resourceParentName: string,
  resourceType: string,
  resourceName: string,
  configurationAssignmentName: string,
  configurationAssignment: ConfigurationAssignment,
  options: ConfigurationAssignmentsCreateOrUpdateParentOptionalParams = {
    requestOptions: {},
  },
): Promise<ConfigurationAssignment> {
  const result = await _createOrUpdateParentSend(
    context,
    resourceGroupName,
    providerName,
    resourceParentType,
    resourceParentName,
    resourceType,
    resourceName,
    configurationAssignmentName,
    configurationAssignment,
    options,
  );
  return _createOrUpdateParentDeserialize(result);
}

export function _getParentSend(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceParentType: string,
  resourceParentName: string,
  resourceType: string,
  resourceName: string,
  configurationAssignmentName: string,
  options: ConfigurationAssignmentsGetParentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      providerName: providerName,
      resourceParentType: resourceParentType,
      resourceParentName: resourceParentName,
      resourceType: resourceType,
      resourceName: resourceName,
      configurationAssignmentName: configurationAssignmentName,
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

export async function _getParentDeserialize(
  result: PathUncheckedResponse,
): Promise<ConfigurationAssignment> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = maintenanceErrorDeserializer(result.body);
    throw error;
  }

  return configurationAssignmentDeserializer(result.body);
}

/** Get configuration assignment for resource.. */
export async function getParent(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceParentType: string,
  resourceParentName: string,
  resourceType: string,
  resourceName: string,
  configurationAssignmentName: string,
  options: ConfigurationAssignmentsGetParentOptionalParams = {
    requestOptions: {},
  },
): Promise<ConfigurationAssignment> {
  const result = await _getParentSend(
    context,
    resourceGroupName,
    providerName,
    resourceParentType,
    resourceParentName,
    resourceType,
    resourceName,
    configurationAssignmentName,
    options,
  );
  return _getParentDeserialize(result);
}
