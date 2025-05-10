// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HealthBotContext } from "../../api/healthBotContext.js";
import { OperationDetail } from "../../models/models.js";
import { OperationsListOptionalParams } from "../../api/operations/options.js";
import { list } from "../../api/operations/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Operations operations. */
export interface OperationsOperations {
  /** Lists all the available Azure Health Bot operations. */
  list: (options?: OperationsListOptionalParams) => PagedAsyncIterableIterator<OperationDetail>;
}

function _getOperations(context: HealthBotContext) {
  return {
    list: (options?: OperationsListOptionalParams) => list(context, options),
  };
}

export function _getOperationsOperations(context: HealthBotContext): OperationsOperations {
  return {
    ..._getOperations(context),
  };
}
