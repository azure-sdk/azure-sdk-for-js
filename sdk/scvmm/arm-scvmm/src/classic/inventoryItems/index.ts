// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext } from "../../api/scVmmContext.js";
import { InventoryItem } from "../../models/models.js";
import {
  InventoryItemsListByVmmServerOptionalParams,
  InventoryItemsDeleteOptionalParams,
  InventoryItemsCreateOptionalParams,
  InventoryItemsGetOptionalParams,
} from "../../api/inventoryItems/options.js";
import { listByVmmServer, $delete, create, get } from "../../api/inventoryItems/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a InventoryItems operations. */
export interface InventoryItemsOperations {
  /** Returns the list of inventoryItems in the given VmmServer. */
  listByVmmServer: (
    resourceGroupName: string,
    vmmServerName: string,
    options?: InventoryItemsListByVmmServerOptionalParams,
  ) => PagedAsyncIterableIterator<InventoryItem>;
  /** Deletes an inventoryItem. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    vmmServerName: string,
    inventoryItemResourceName: string,
    options?: InventoryItemsDeleteOptionalParams,
  ) => Promise<void>;
  /** Create Or Update InventoryItem. */
  create: (
    resourceGroupName: string,
    vmmServerName: string,
    inventoryItemResourceName: string,
    resource: InventoryItem,
    options?: InventoryItemsCreateOptionalParams,
  ) => Promise<InventoryItem>;
  /** Shows an inventory item. */
  get: (
    resourceGroupName: string,
    vmmServerName: string,
    inventoryItemResourceName: string,
    options?: InventoryItemsGetOptionalParams,
  ) => Promise<InventoryItem>;
}

function _getInventoryItems(context: ScVmmContext) {
  return {
    listByVmmServer: (
      resourceGroupName: string,
      vmmServerName: string,
      options?: InventoryItemsListByVmmServerOptionalParams,
    ) => listByVmmServer(context, resourceGroupName, vmmServerName, options),
    delete: (
      resourceGroupName: string,
      vmmServerName: string,
      inventoryItemResourceName: string,
      options?: InventoryItemsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, vmmServerName, inventoryItemResourceName, options),
    create: (
      resourceGroupName: string,
      vmmServerName: string,
      inventoryItemResourceName: string,
      resource: InventoryItem,
      options?: InventoryItemsCreateOptionalParams,
    ) =>
      create(
        context,
        resourceGroupName,
        vmmServerName,
        inventoryItemResourceName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      vmmServerName: string,
      inventoryItemResourceName: string,
      options?: InventoryItemsGetOptionalParams,
    ) => get(context, resourceGroupName, vmmServerName, inventoryItemResourceName, options),
  };
}

export function _getInventoryItemsOperations(context: ScVmmContext): InventoryItemsOperations {
  return {
    ..._getInventoryItems(context),
  };
}
