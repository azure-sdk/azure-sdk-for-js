// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceFabricContext } from "../../api/serviceFabricContext.js";
import { LongRunningOperationResult } from "../../models/models.js";
import { OperationStatusGetOptionalParams } from "../../api/operationStatus/options.js";
import { operationStatusGet } from "../../api/operationStatus/operations.js";

/** Interface representing a OperationStatus operations. */
export interface OperationStatusOperations {
  /** Get long running operation status. */
  get: (
    location: string,
    operationId: string,
    options?: OperationStatusGetOptionalParams,
  ) => Promise<LongRunningOperationResult>;
}

function _getOperationStatus(context: ServiceFabricContext) {
  return {
    get: (location: string, operationId: string, options?: OperationStatusGetOptionalParams) =>
      operationStatusGet(context, location, operationId, options),
  };
}

export function _getOperationStatusOperations(
  context: ServiceFabricContext,
): OperationStatusOperations {
  return {
    ..._getOperationStatus(context),
  };
}
