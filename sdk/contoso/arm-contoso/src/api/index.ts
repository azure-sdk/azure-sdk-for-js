// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  createContoso,
  ContosoClientOptionalParams,
  ContosoContext,
} from "./contosoContext.js";
export {
  get,
  createOrUpdate,
  update,
  $delete,
  listByResourceGroup,
  listBySubscription,
} from "./employees/index.js";
export { list } from "./operations/index.js";
