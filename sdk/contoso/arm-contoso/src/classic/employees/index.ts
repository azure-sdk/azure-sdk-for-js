// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ContosoContext } from "../../api/contosoContext.js";
import { Employee, EmployeeUpdate } from "../../models/models.js";
import {
  get,
  createOrUpdate,
  update,
  $delete,
  listByResourceGroup,
  listBySubscription,
} from "../../api/employees/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  EmployeesGetOptionalParams,
  EmployeesCreateOrUpdateOptionalParams,
  EmployeesUpdateOptionalParams,
  EmployeesDeleteOptionalParams,
  EmployeesListByResourceGroupOptionalParams,
  EmployeesListBySubscriptionOptionalParams,
} from "../../models/options.js";

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
    properties: EmployeeUpdate,
    options?: EmployeesUpdateOptionalParams,
  ) => Promise<Employee>;
  /** Delete a Employee */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
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
    get: (
      resourceGroupName: string,
      employeeName: string,
      options?: EmployeesGetOptionalParams,
    ) => get(context, subscriptionId, resourceGroupName, employeeName, options),
    createOrUpdate: (
      resourceGroupName: string,
      employeeName: string,
      resource: Employee,
      options?: EmployeesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
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
      properties: EmployeeUpdate,
      options?: EmployeesUpdateOptionalParams,
    ) =>
      update(
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
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        employeeName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: EmployeesListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (options?: EmployeesListBySubscriptionOptionalParams) =>
      listBySubscription(context, subscriptionId, options),
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
