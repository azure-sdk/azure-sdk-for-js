// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceFabricContext } from "../../api/serviceFabricContext.js";
import { operationResultsGet } from "../../api/operationResults/index.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { OperationResultsGetOptionalParams } from "../../api/options.js";

/** Interface representing a OperationResults operations. */
export interface OperationResultsOperations {
  /** Get long running operation result. */
  get: (
    location: string,
    operationId: string,
    options?: OperationResultsGetOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

function _getOperationResults(context: ServiceFabricContext) {
  return {
    get: (location: string, operationId: string, options?: OperationResultsGetOptionalParams) =>
      operationResultsGet(context, location, operationId, options),
  };
}

export function _getOperationResultsOperations(
  context: ServiceFabricContext,
): OperationResultsOperations {
  return {
    ..._getOperationResults(context),
  };
}
