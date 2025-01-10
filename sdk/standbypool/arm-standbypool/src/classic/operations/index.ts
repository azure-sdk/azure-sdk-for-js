// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StandbyPoolManagementContext } from "../../api/standbyPoolManagementContext.js";
import { operationsList } from "../../api/operations/index.js";
import { Operation } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { OperationsListOptionalParams } from "../../api/options.js";

/** Interface representing a Operations operations. */
export interface OperationsOperations {
  /** List the operations for the provider */
  list: (options?: OperationsListOptionalParams) => PagedAsyncIterableIterator<Operation>;
}

export function getOperations(context: StandbyPoolManagementContext) {
  return {
    list: (options?: OperationsListOptionalParams) => operationsList(context, options),
  };
}

export function getOperationsOperations(
  context: StandbyPoolManagementContext,
): OperationsOperations {
  return {
    ...getOperations(context),
  };
}
