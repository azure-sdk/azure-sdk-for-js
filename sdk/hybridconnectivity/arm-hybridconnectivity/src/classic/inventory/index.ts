// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridConnectivityContext } from "../../api/hybridConnectivityContext.js";
import {
  inventoryGet,
  inventoryListBySolutionConfiguration,
} from "../../api/inventory/index.js";
import {
  InventoryGetOptionalParams,
  InventoryListBySolutionConfigurationOptionalParams,
} from "../../api/options.js";
import { InventoryResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Inventory operations. */
export interface InventoryOperations {
  /** Get a InventoryResource */
  get: (
    resourceUri: string,
    solutionConfiguration: string,
    inventoryId: string,
    options?: InventoryGetOptionalParams,
  ) => Promise<InventoryResource>;
  /** List InventoryResource resources by SolutionConfiguration */
  listBySolutionConfiguration: (
    resourceUri: string,
    solutionConfiguration: string,
    options?: InventoryListBySolutionConfigurationOptionalParams,
  ) => PagedAsyncIterableIterator<InventoryResource>;
}

export function getInventory(context: HybridConnectivityContext) {
  return {
    get: (
      resourceUri: string,
      solutionConfiguration: string,
      inventoryId: string,
      options?: InventoryGetOptionalParams,
    ) =>
      inventoryGet(
        context,
        resourceUri,
        solutionConfiguration,
        inventoryId,
        options,
      ),
    listBySolutionConfiguration: (
      resourceUri: string,
      solutionConfiguration: string,
      options?: InventoryListBySolutionConfigurationOptionalParams,
    ) =>
      inventoryListBySolutionConfiguration(
        context,
        resourceUri,
        solutionConfiguration,
        options,
      ),
  };
}

export function getInventoryOperations(
  context: HybridConnectivityContext,
): InventoryOperations {
  return {
    ...getInventory(context),
  };
}
