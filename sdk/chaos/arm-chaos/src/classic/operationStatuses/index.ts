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

export function getOperationStatuses(context: ChaosManagementContext, subscriptionId: string) {
  return {
    get: (location: string, operationId: string, options?: OperationStatusesGetOptionalParams) =>
      operationStatusesGet(context, subscriptionId, location, operationId, options),
  };
}

export function getOperationStatusesOperations(
  context: ChaosManagementContext,
  subscriptionId: string,
): OperationStatusesOperations {
  return {
    ...getOperationStatuses(context, subscriptionId),
  };
}
