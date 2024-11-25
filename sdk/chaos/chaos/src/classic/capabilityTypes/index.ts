// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosContext } from "../../api/chaosContext.js";
import {
  capabilityTypesGet,
  capabilityTypesList,
} from "../../api/capabilityTypes/index.js";
import { ChaosCapabilityMetadata } from "../../models/models.js";
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
  ) => Promise<ChaosCapabilityMetadata>;
  /** Get a list of Capability Type resources for given Target Type and location. */
  list: (
    location: string,
    targetTypeName: string,
    options?: CapabilityTypesListOptionalParams,
  ) => PagedAsyncIterableIterator<ChaosCapabilityMetadata>;
}

export function getCapabilityTypes(
  context: ChaosContext,
  subscriptionId: string,
) {
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
    list: (
      location: string,
      targetTypeName: string,
      options?: CapabilityTypesListOptionalParams,
    ) =>
      capabilityTypesList(
        context,
        subscriptionId,
        location,
        targetTypeName,
        options,
      ),
  };
}

export function getCapabilityTypesOperations(
  context: ChaosContext,
  subscriptionId: string,
): CapabilityTypesOperations {
  return {
    ...getCapabilityTypes(context, subscriptionId),
  };
}
