// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataManagementContext } from "../../api/dataManagementContext.js";
import { Operation } from "../../models/models.js";
import { operationsList } from "../../api/operations/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { OperationsListOptionalParams } from "../../models/options.js";

/** Interface representing a Operations operations. */
export interface OperationsOperations {
  /** List the operations for the provider */
  list: (
    options?: OperationsListOptionalParams,
  ) => PagedAsyncIterableIterator<Operation>;
}

export function getOperations(context: DataManagementContext) {
  return {
    list: (options?: OperationsListOptionalParams) =>
      operationsList(context, options),
  };
}

export function getOperationsOperations(
  context: DataManagementContext,
): OperationsOperations {
  return {
    ...getOperations(context),
  };
}
