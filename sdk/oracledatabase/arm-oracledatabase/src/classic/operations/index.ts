// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import { operationsList } from "../../api/operations/index.js";
import { OperationsListOptionalParams } from "../../api/options.js";
import { Operation } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Operations operations. */
export interface OperationsOperations {
  /** List the operations for the provider */
  list: (options?: OperationsListOptionalParams) => PagedAsyncIterableIterator<Operation>;
}

function _getOperations(context: DatabaseContext) {
  return {
    list: (options?: OperationsListOptionalParams) => operationsList(context, options),
  };
}

export function _getOperationsOperations(context: DatabaseContext): OperationsOperations {
  return {
    ..._getOperations(context),
  };
}
