// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BotServiceContext } from "../../api/botServiceContext.js";
import { OperationResultsDescription } from "../../models/models.js";
import { OperationResultsOperationGroupGetOptionalParams } from "../../api/operationResultsOperationGroup/options.js";
import { get } from "../../api/operationResultsOperationGroup/operations.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a OperationResultsOperationGroup operations. */
export interface OperationResultsOperationGroupOperations {
  /** Get the operation result for a long running operation. */
  get: (
    operationResultId: string,
    options?: OperationResultsOperationGroupGetOptionalParams,
  ) => PollerLike<OperationState<OperationResultsDescription>, OperationResultsDescription>;
}

function _getOperationResultsOperationGroup(context: BotServiceContext) {
  return {
    get: (operationResultId: string, options?: OperationResultsOperationGroupGetOptionalParams) =>
      get(context, operationResultId, options),
  };
}

export function _getOperationResultsOperationGroupOperations(
  context: BotServiceContext,
): OperationResultsOperationGroupOperations {
  return {
    ..._getOperationResultsOperationGroup(context),
  };
}
