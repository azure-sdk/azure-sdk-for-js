// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ContosoContext } from "../../api/contosoContext.js";
import {
  employeesGet,
  employeesCreateOrUpdate,
  employeesUpdate,
  employeesDelete,
  employeesListByResourceGroup,
  employeesListBySubscription,
} from "../../api/employees/index.js";
import {
  EmployeesGetOptionalParams,
  EmployeesCreateOrUpdateOptionalParams,
  EmployeesUpdateOptionalParams,
  EmployeesDeleteOptionalParams,
  EmployeesListByResourceGroupOptionalParams,
  EmployeesListBySubscriptionOptionalParams,
} from "../../api/options.js";
import { Employee } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Employees operations. */
export interface EmployeesOperations {
  /** Get a Employee */
  get: (
    resourceGroupName: string,
    employeeName: string,
    options?: EmployeesGetOptionalParams,
  ) => Promise<Employee>;
  /** Create a Employee */
  createOrUpdate: (
    resourceGroupName: string,
    employeeName: string,
    resource: Employee,
    options?: EmployeesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Employee>, Employee>;
  /** Update a Employee */
  update: (
    resourceGroupName: string,
    employeeName: string,
    properties: Employee,
    options?: EmployeesUpdateOptionalParams,
  ) => Promise<Employee>;
  /** Delete a Employee */
  delete: (
    resourceGroupName: string,
    employeeName: string,
    options?: EmployeesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List Employee resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: EmployeesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Employee>;
  /** List Employee resources by subscription ID */
  listBySubscription: (
    options?: EmployeesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Employee>;
}

export function getEmployees(context: ContosoContext, subscriptionId: string) {
  return {
    get: (resourceGroupName: string, employeeName: string, options?: EmployeesGetOptionalParams) =>
      employeesGet(context, subscriptionId, resourceGroupName, employeeName, options),
    createOrUpdate: (
      resourceGroupName: string,
      employeeName: string,
      resource: Employee,
      options?: EmployeesCreateOrUpdateOptionalParams,
    ) =>
      employeesCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        employeeName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      employeeName: string,
      properties: Employee,
      options?: EmployeesUpdateOptionalParams,
    ) =>
      employeesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        employeeName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      employeeName: string,
      options?: EmployeesDeleteOptionalParams,
    ) => employeesDelete(context, subscriptionId, resourceGroupName, employeeName, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: EmployeesListByResourceGroupOptionalParams,
    ) => employeesListByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (options?: EmployeesListBySubscriptionOptionalParams) =>
      employeesListBySubscription(context, subscriptionId, options),
  };
}

export function getEmployeesOperations(
  context: ContosoContext,
  subscriptionId: string,
): EmployeesOperations {
  return {
    ...getEmployees(context, subscriptionId),
  };
}
