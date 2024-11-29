// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DeviceRegistryContext } from "../../api/deviceRegistryContext.js";
import { operationStatusGet } from "../../api/operationStatus/index.js";
import { OperationStatusGetOptionalParams } from "../../api/options.js";
import { OperationStatusResult } from "../../models/models.js";

/** Interface representing a OperationStatus operations. */
export interface OperationStatusOperations {
  /** Returns the current status of an async operation. */
  get: (
    location: string,
    operationId: string,
    options?: OperationStatusGetOptionalParams,
  ) => Promise<OperationStatusResult>;
}

export function getOperationStatus(
  context: DeviceRegistryContext,
  subscriptionId: string,
) {
  return {
    get: (
      location: string,
      operationId: string,
      options?: OperationStatusGetOptionalParams,
    ) =>
      operationStatusGet(
        context,
        subscriptionId,
        location,
        operationId,
        options,
      ),
  };
}

export function getOperationStatusOperations(
  context: DeviceRegistryContext,
  subscriptionId: string,
): OperationStatusOperations {
  return {
    ...getOperationStatus(context, subscriptionId),
  };
}
