// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  OperationListResultOutput,
  ErrorResponseOutput,
  EmployeeOutput,
  EmployeeListResultOutput,
} from "./outputModels.js";

/** Azure operation completed successfully. */
export interface OperationsList200Response extends HttpResponse {
  status: "200";
  body: OperationListResultOutput;
}

export interface OperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface EmployeesGet200Response extends HttpResponse {
  status: "200";
  body: EmployeeOutput;
}

export interface EmployeesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'Employee' update operation succeeded */
export interface EmployeesCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: EmployeeOutput;
}

export interface EmployeesCreateOrUpdate201Headers {
  /** A link to the status monitor */
  "azure-asyncoperation"?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'Employee' create operation succeeded */
export interface EmployeesCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: EmployeeOutput;
  headers: RawHttpHeaders & EmployeesCreateOrUpdate201Headers;
}

export interface EmployeesCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface EmployeesCreateOrUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: EmployeeOutput;
}

/** Azure operation completed successfully. */
export interface EmployeesUpdate200Response extends HttpResponse {
  status: "200";
  body: EmployeeOutput;
}

export interface EmployeesUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface EmployeesDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface EmployeesDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & EmployeesDelete202Headers;
}

/** Resource does not exist. */
export interface EmployeesDelete204Response extends HttpResponse {
  status: "204";
}

export interface EmployeesDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface EmployeesDeleteLogicalResponse extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface EmployeesListByResourceGroup200Response extends HttpResponse {
  status: "200";
  body: EmployeeListResultOutput;
}

export interface EmployeesListByResourceGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface EmployeesListBySubscription200Response extends HttpResponse {
  status: "200";
  body: EmployeeListResultOutput;
}

export interface EmployeesListBySubscriptionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
