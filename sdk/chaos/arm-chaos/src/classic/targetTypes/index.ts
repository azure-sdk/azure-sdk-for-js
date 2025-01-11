// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosManagementContext } from "../../api/chaosManagementContext.js";
import { TargetTypesGetOptionalParams, TargetTypesListOptionalParams } from "../../api/options.js";
import { targetTypesGet, targetTypesList } from "../../api/targetTypes/index.js";
import { TargetType } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a TargetTypes operations. */
export interface TargetTypesOperations {
  /** Get a Target Type resources for given location. */
  get: (
    location: string,
    targetTypeName: string,
    options?: TargetTypesGetOptionalParams,
  ) => Promise<TargetType>;
  /** Get a list of Target Type resources for given location. */
  list: (
    location: string,
    options?: TargetTypesListOptionalParams,
  ) => PagedAsyncIterableIterator<TargetType>;
}

export function getTargetTypes(context: ChaosManagementContext, subscriptionId: string) {
  return {
    get: (location: string, targetTypeName: string, options?: TargetTypesGetOptionalParams) =>
      targetTypesGet(context, subscriptionId, location, targetTypeName, options),
    list: (location: string, options?: TargetTypesListOptionalParams) =>
      targetTypesList(context, subscriptionId, location, options),
  };
}

export function getTargetTypesOperations(
  context: ChaosManagementContext,
  subscriptionId: string,
): TargetTypesOperations {
  return {
    ...getTargetTypes(context, subscriptionId),
  };
}
