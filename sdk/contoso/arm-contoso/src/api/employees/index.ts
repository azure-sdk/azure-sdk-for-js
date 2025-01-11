// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ContosoContext as Client,
  EmployeesCreateOrUpdateOptionalParams,
  EmployeesDeleteOptionalParams,
  EmployeesGetOptionalParams,
  EmployeesListByResourceGroupOptionalParams,
  EmployeesListBySubscriptionOptionalParams,
  EmployeesUpdateOptionalParams,
} from "../index.js";
import {
  Employee,
  employeeSerializer,
  employeeDeserializer,
  _EmployeeListResult,
  _employeeListResultDeserializer,
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

export function _employeesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  options: EmployeesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Contoso/employees/{employeeName}",
      subscriptionId,
      resourceGroupName,
      employeeName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _employeesGetDeserialize(result: PathUncheckedResponse): Promise<Employee> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return employeeDeserializer(result.body);
}

/** Get a Employee */
export async function employeesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  options: EmployeesGetOptionalParams = { requestOptions: {} },
): Promise<Employee> {
  const result = await _employeesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    employeeName,
    options,
  );
  return _employeesGetDeserialize(result);
}

export function _employeesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  resource: Employee,
  options: EmployeesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Contoso/employees/{employeeName}",
      subscriptionId,
      resourceGroupName,
      employeeName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: employeeSerializer(resource),
    });
}

export async function _employeesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Employee> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return employeeDeserializer(result.body);
}

/** Create a Employee */
export function employeesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  resource: Employee,
  options: EmployeesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Employee>, Employee> {
  return getLongRunningPoller(context, _employeesCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _employeesCreateOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        employeeName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<Employee>, Employee>;
}

export function _employeesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  properties: Employee,
  options: EmployeesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Contoso/employees/{employeeName}",
      subscriptionId,
      resourceGroupName,
      employeeName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: employeeSerializer(properties),
    });
}

export async function _employeesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Employee> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return employeeDeserializer(result.body);
}

/** Update a Employee */
export async function employeesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  properties: Employee,
  options: EmployeesUpdateOptionalParams = { requestOptions: {} },
): Promise<Employee> {
  const result = await _employeesUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    employeeName,
    properties,
    options,
  );
  return _employeesUpdateDeserialize(result);
}

export function _employeesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  options: EmployeesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Contoso/employees/{employeeName}",
      subscriptionId,
      resourceGroupName,
      employeeName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _employeesDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Employee */
export function employeesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  employeeName: string,
  options: EmployeesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _employeesDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _employeesDeleteSend(context, subscriptionId, resourceGroupName, employeeName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _employeesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: EmployeesListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Contoso/employees",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _employeesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_EmployeeListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _employeeListResultDeserializer(result.body);
}

/** List Employee resources by resource group */
export function employeesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: EmployeesListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Employee> {
  return buildPagedAsyncIterator(
    context,
    () => _employeesListByResourceGroupSend(context, subscriptionId, resourceGroupName, options),
    _employeesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _employeesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: EmployeesListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/subscriptions/{subscriptionId}/providers/Microsoft.Contoso/employees", subscriptionId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _employeesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_EmployeeListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _employeeListResultDeserializer(result.body);
}

/** List Employee resources by subscription ID */
export function employeesListBySubscription(
  context: Client,
  subscriptionId: string,
  options: EmployeesListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Employee> {
  return buildPagedAsyncIterator(
    context,
    () => _employeesListBySubscriptionSend(context, subscriptionId, options),
    _employeesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
