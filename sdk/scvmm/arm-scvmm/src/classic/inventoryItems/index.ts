// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext } from "../../api/scVmmContext.js";
import {
  inventoryItemsGet,
  inventoryItemsCreate,
  inventoryItemsDelete,
  inventoryItemsListByVmmServer,
} from "../../api/inventoryItems/index.js";
import { InventoryItem } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  InventoryItemsGetOptionalParams,
  InventoryItemsCreateOptionalParams,
  InventoryItemsDeleteOptionalParams,
  InventoryItemsListByVmmServerOptionalParams,
} from "../../api/options.js";

/** Interface representing a InventoryItems operations. */
export interface InventoryItemsOperations {
  /** Shows an inventory item. */
  get: (
    resourceGroupName: string,
    vmmServerName: string,
    inventoryItemResourceName: string,
    options?: InventoryItemsGetOptionalParams,
  ) => Promise<InventoryItem>;
  /** Create Or Update InventoryItem. */
  create: (
    resourceGroupName: string,
    vmmServerName: string,
    inventoryItemResourceName: string,
    resource: InventoryItem,
    options?: InventoryItemsCreateOptionalParams,
  ) => Promise<InventoryItem>;
  /** Deletes an inventoryItem. */
  delete: (
    resourceGroupName: string,
    vmmServerName: string,
    inventoryItemResourceName: string,
    options?: InventoryItemsDeleteOptionalParams,
  ) => Promise<void>;
  /** Returns the list of inventoryItems in the given VmmServer. */
  listByVmmServer: (
    resourceGroupName: string,
    vmmServerName: string,
    options?: InventoryItemsListByVmmServerOptionalParams,
  ) => PagedAsyncIterableIterator<InventoryItem>;
}

export function getInventoryItems(
  context: ScVmmContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      vmmServerName: string,
      inventoryItemResourceName: string,
      options?: InventoryItemsGetOptionalParams,
    ) =>
      inventoryItemsGet(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        inventoryItemResourceName,
        options,
      ),
    create: (
      resourceGroupName: string,
      vmmServerName: string,
      inventoryItemResourceName: string,
      resource: InventoryItem,
      options?: InventoryItemsCreateOptionalParams,
    ) =>
      inventoryItemsCreate(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        inventoryItemResourceName,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      vmmServerName: string,
      inventoryItemResourceName: string,
      options?: InventoryItemsDeleteOptionalParams,
    ) =>
      inventoryItemsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        inventoryItemResourceName,
        options,
      ),
    listByVmmServer: (
      resourceGroupName: string,
      vmmServerName: string,
      options?: InventoryItemsListByVmmServerOptionalParams,
    ) =>
      inventoryItemsListByVmmServer(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        options,
      ),
  };
}

export function getInventoryItemsOperations(
  context: ScVmmContext,
  subscriptionId: string,
): InventoryItemsOperations {
  return {
    ...getInventoryItems(context, subscriptionId),
  };
}
