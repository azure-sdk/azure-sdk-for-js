// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Employee } from "./models.js";

export type OperationsListParameters = RequestParameters;
export type EmployeesGetParameters = RequestParameters;

export interface EmployeesCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: Employee;
}

export type EmployeesCreateOrUpdateParameters =
  EmployeesCreateOrUpdateBodyParam & RequestParameters;

export interface EmployeesUpdateBodyParam {
  /** The resource properties to be updated. */
  body: Employee;
}

export type EmployeesUpdateParameters = EmployeesUpdateBodyParam &
  RequestParameters;
export type EmployeesDeleteParameters = RequestParameters;
export type EmployeesListByResourceGroupParameters = RequestParameters;
export type EmployeesListBySubscriptionParameters = RequestParameters;
