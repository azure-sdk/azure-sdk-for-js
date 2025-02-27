// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosManagementContext } from "../../api/chaosManagementContext.js";
import { operationStatusesGet } from "../../api/operationStatuses/index.js";
import { OperationStatusesGetOptionalParams } from "../../api/options.js";
import { OperationStatusResult } from "../../models/models.js";

/** Interface representing a OperationStatuses operations. */
export interface OperationStatusesOperations {
  /** Returns the current status of an async operation. */
  get: (
    location: string,
    operationId: string,
    options?: OperationStatusesGetOptionalParams,
  ) => Promise<OperationStatusResult>;
}

function _getOperationStatuses(context: ChaosManagementContext) {
  return {
    get: (location: string, operationId: string, options?: OperationStatusesGetOptionalParams) =>
      operationStatusesGet(context, location, operationId, options),
  };
}

export function _getOperationStatusesOperations(
  context: ChaosManagementContext,
): OperationStatusesOperations {
  return {
    ..._getOperationStatuses(context),
  };
}
