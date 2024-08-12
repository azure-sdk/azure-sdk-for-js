// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationsListParameters,
  EmployeesGetParameters,
  EmployeesCreateOrUpdateParameters,
  EmployeesUpdateParameters,
  EmployeesDeleteParameters,
  EmployeesListByResourceGroupParameters,
  EmployeesListBySubscriptionParameters,
} from "./parameters.js";
import {
  OperationsList200Response,
  OperationsListDefaultResponse,
  EmployeesGet200Response,
  EmployeesGetDefaultResponse,
  EmployeesCreateOrUpdate200Response,
  EmployeesCreateOrUpdate201Response,
  EmployeesCreateOrUpdateDefaultResponse,
  EmployeesUpdate200Response,
  EmployeesUpdateDefaultResponse,
  EmployeesDelete202Response,
  EmployeesDelete204Response,
  EmployeesDeleteDefaultResponse,
  EmployeesListByResourceGroup200Response,
  EmployeesListByResourceGroupDefaultResponse,
  EmployeesListBySubscription200Response,
  EmployeesListBySubscriptionDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface OperationsList {
  /** List the operations for the provider */
  get(
    options?: OperationsListParameters,
  ): StreamableMethod<
    OperationsList200Response | OperationsListDefaultResponse
  >;
}

export interface EmployeesGet {
  /** Get a Employee */
  get(
    options?: EmployeesGetParameters,
  ): StreamableMethod<EmployeesGet200Response | EmployeesGetDefaultResponse>;
  /** Create a Employee */
  put(
    options: EmployeesCreateOrUpdateParameters,
  ): StreamableMethod<
    | EmployeesCreateOrUpdate200Response
    | EmployeesCreateOrUpdate201Response
    | EmployeesCreateOrUpdateDefaultResponse
  >;
  /** Update a Employee */
  patch(
    options: EmployeesUpdateParameters,
  ): StreamableMethod<
    EmployeesUpdate200Response | EmployeesUpdateDefaultResponse
  >;
  /** Delete a Employee */
  delete(
    options?: EmployeesDeleteParameters,
  ): StreamableMethod<
    | EmployeesDelete202Response
    | EmployeesDelete204Response
    | EmployeesDeleteDefaultResponse
  >;
}

export interface EmployeesListByResourceGroup {
  /** List Employee resources by resource group */
  get(
    options?: EmployeesListByResourceGroupParameters,
  ): StreamableMethod<
    | EmployeesListByResourceGroup200Response
    | EmployeesListByResourceGroupDefaultResponse
  >;
}

export interface EmployeesListBySubscription {
  /** List Employee resources by subscription ID */
  get(
    options?: EmployeesListBySubscriptionParameters,
  ): StreamableMethod<
    | EmployeesListBySubscription200Response
    | EmployeesListBySubscriptionDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/providers/Microsoft.Contoso/operations' has methods for the following verbs: get */
  (path: "/providers/Microsoft.Contoso/operations"): OperationsList;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Contoso/employees/\{employeeName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Contoso/employees/{employeeName}",
    subscriptionId: string,
    resourceGroupName: string,
    employeeName: string,
  ): EmployeesGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.Contoso/employees' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Contoso/employees",
    subscriptionId: string,
    resourceGroupName: string,
  ): EmployeesListByResourceGroup;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.Contoso/employees' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Contoso/employees",
    subscriptionId: string,
  ): EmployeesListBySubscription;
}

export type ContosoContext = Client & {
  path: Routes;
};
