// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosManagementContext } from "../../api/chaosManagementContext.js";
import { capabilityTypesList, capabilityTypesGet } from "../../api/capabilityTypes/index.js";
import { CapabilityType } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  CapabilityTypesListOptionalParams,
  CapabilityTypesGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a CapabilityTypes operations. */
export interface CapabilityTypesOperations {
  /** Get a list of Capability Type resources for given Target Type and location. */
  list: (
    location: string,
    targetTypeName: string,
    options?: CapabilityTypesListOptionalParams,
  ) => PagedAsyncIterableIterator<CapabilityType>;
  /** Get a Capability Type resource for given Target Type and location. */
  get: (
    location: string,
    targetTypeName: string,
    capabilityTypeName: string,
    options?: CapabilityTypesGetOptionalParams,
  ) => Promise<CapabilityType>;
}

function _getCapabilityTypes(context: ChaosManagementContext) {
  return {
    list: (location: string, targetTypeName: string, options?: CapabilityTypesListOptionalParams) =>
      capabilityTypesList(context, location, targetTypeName, options),
    get: (
      location: string,
      targetTypeName: string,
      capabilityTypeName: string,
      options?: CapabilityTypesGetOptionalParams,
    ) => capabilityTypesGet(context, location, targetTypeName, capabilityTypeName, options),
  };
}

export function _getCapabilityTypesOperations(
  context: ChaosManagementContext,
): CapabilityTypesOperations {
  return {
    ..._getCapabilityTypes(context),
  };
}
