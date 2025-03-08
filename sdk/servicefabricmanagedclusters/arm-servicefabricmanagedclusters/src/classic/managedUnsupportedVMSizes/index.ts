// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceFabricContext } from "../../api/serviceFabricContext.js";
import {
  managedUnsupportedVMSizesList,
  managedUnsupportedVMSizesGet,
} from "../../api/managedUnsupportedVMSizes/index.js";
import { ManagedVMSize } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  ManagedUnsupportedVMSizesListOptionalParams,
  ManagedUnsupportedVMSizesGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a ManagedUnsupportedVMSizes operations. */
export interface ManagedUnsupportedVMSizesOperations {
  /** Get the lists of unsupported vm sizes for Service Fabric Managed Clusters. */
  list: (
    location: string,
    options?: ManagedUnsupportedVMSizesListOptionalParams,
  ) => PagedAsyncIterableIterator<ManagedVMSize>;
  /** Get unsupported vm size for Service Fabric Managed Clusters. */
  get: (
    location: string,
    vmSize: string,
    options?: ManagedUnsupportedVMSizesGetOptionalParams,
  ) => Promise<ManagedVMSize>;
}

function _getManagedUnsupportedVMSizes(context: ServiceFabricContext) {
  return {
    list: (location: string, options?: ManagedUnsupportedVMSizesListOptionalParams) =>
      managedUnsupportedVMSizesList(context, location, options),
    get: (location: string, vmSize: string, options?: ManagedUnsupportedVMSizesGetOptionalParams) =>
      managedUnsupportedVMSizesGet(context, location, vmSize, options),
  };
}

export function _getManagedUnsupportedVMSizesOperations(
  context: ServiceFabricContext,
): ManagedUnsupportedVMSizesOperations {
  return {
    ..._getManagedUnsupportedVMSizes(context),
  };
}
