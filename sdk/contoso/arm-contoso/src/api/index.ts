// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  createContoso,
  ContosoContext,
  ContosoClientOptionalParams,
} from "./contosoContext.js";
export {
  employeesGet,
  employeesCreateOrUpdate,
  employeesUpdate,
  employeesDelete,
  employeesListByResourceGroup,
  employeesListBySubscription,
} from "./employees/index.js";
export { operationsList } from "./operations/index.js";
