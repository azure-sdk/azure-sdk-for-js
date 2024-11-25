// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosContext } from "../../api/chaosContext.js";
import {
  TargetTypesGetOptionalParams,
  TargetTypesListOptionalParams,
} from "../../api/options.js";
import {
  targetTypesGet,
  targetTypesList,
} from "../../api/targetTypes/index.js";
import { ChaosTargetMetadata } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a TargetTypes operations. */
export interface TargetTypesOperations {
  /** Get a Target Type resources for given location. */
  get: (
    location: string,
    targetTypeName: string,
    options?: TargetTypesGetOptionalParams,
  ) => Promise<ChaosTargetMetadata>;
  /** Get a list of Target Type resources for given location. */
  list: (
    location: string,
    options?: TargetTypesListOptionalParams,
  ) => PagedAsyncIterableIterator<ChaosTargetMetadata>;
}

export function getTargetTypes(context: ChaosContext, subscriptionId: string) {
  return {
    get: (
      location: string,
      targetTypeName: string,
      options?: TargetTypesGetOptionalParams,
    ) =>
      targetTypesGet(
        context,
        subscriptionId,
        location,
        targetTypeName,
        options,
      ),
    list: (location: string, options?: TargetTypesListOptionalParams) =>
      targetTypesList(context, subscriptionId, location, options),
  };
}

export function getTargetTypesOperations(
  context: ChaosContext,
  subscriptionId: string,
): TargetTypesOperations {
  return {
    ...getTargetTypes(context, subscriptionId),
  };
}
