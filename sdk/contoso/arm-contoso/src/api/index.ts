// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createContoso,
  ContosoContext,
  ContosoClientOptionalParams,
} from "./contosoContext.js";
export {
  OperationsListOptionalParams,
  EmployeesGetOptionalParams,
  EmployeesCreateOrUpdateOptionalParams,
  EmployeesUpdateOptionalParams,
  EmployeesDeleteOptionalParams,
  EmployeesListByResourceGroupOptionalParams,
  EmployeesListBySubscriptionOptionalParams,
} from "./options.js";
export {
  employeesGet,
  employeesCreateOrUpdate,
  employeesUpdate,
  employeesDelete,
  employeesListByResourceGroup,
  employeesListBySubscription,
} from "./employees/index.js";
export { operationsList } from "./operations/index.js";
