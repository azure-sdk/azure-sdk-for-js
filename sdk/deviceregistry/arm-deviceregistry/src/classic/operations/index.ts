// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DeviceRegistryContext } from "../../api/deviceRegistryContext.js";
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

export function getOperations(context: DeviceRegistryContext) {
  return {
    list: (options?: OperationsListOptionalParams) =>
      operationsList(context, options),
  };
}

export function getOperationsOperations(
  context: DeviceRegistryContext,
): OperationsOperations {
  return {
    ...getOperations(context),
  };
}
