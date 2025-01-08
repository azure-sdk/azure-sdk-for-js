// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosManagementContext } from "../../api/chaosManagementContext.js";
import { capabilityTypesGet, capabilityTypesList } from "../../api/capabilityTypes/index.js";
import { CapabilityType } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  CapabilityTypesGetOptionalParams,
  CapabilityTypesListOptionalParams,
} from "../../api/options.js";

/** Interface representing a CapabilityTypes operations. */
export interface CapabilityTypesOperations {
  /** Get a Capability Type resource for given Target Type and location. */
  get: (
    location: string,
    targetTypeName: string,
    capabilityTypeName: string,
    options?: CapabilityTypesGetOptionalParams,
  ) => Promise<CapabilityType>;
  /** Get a list of Capability Type resources for given Target Type and location. */
  list: (
    location: string,
    targetTypeName: string,
    options?: CapabilityTypesListOptionalParams,
  ) => PagedAsyncIterableIterator<CapabilityType>;
}

export function getCapabilityTypes(context: ChaosManagementContext, subscriptionId: string) {
  return {
    get: (
      location: string,
      targetTypeName: string,
      capabilityTypeName: string,
      options?: CapabilityTypesGetOptionalParams,
    ) =>
      capabilityTypesGet(
        context,
        subscriptionId,
        location,
        targetTypeName,
        capabilityTypeName,
        options,
      ),
    list: (location: string, targetTypeName: string, options?: CapabilityTypesListOptionalParams) =>
      capabilityTypesList(context, subscriptionId, location, targetTypeName, options),
  };
}

export function getCapabilityTypesOperations(
  context: ChaosManagementContext,
  subscriptionId: string,
): CapabilityTypesOperations {
  return {
    ...getCapabilityTypes(context, subscriptionId),
  };
}
