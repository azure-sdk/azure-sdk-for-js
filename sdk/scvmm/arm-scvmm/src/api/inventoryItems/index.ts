// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ScVmmContext as Client,
  InventoryItemsCreateOptionalParams,
  InventoryItemsDeleteOptionalParams,
  InventoryItemsGetOptionalParams,
  InventoryItemsListByVmmServerOptionalParams,
} from "../index.js";
import {
  InventoryItem,
  inventoryItemSerializer,
  inventoryItemDeserializer,
  _InventoryItemListResult,
  _inventoryItemListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _inventoryItemsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  inventoryItemResourceName: string,
  options: InventoryItemsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems/{inventoryItemResourceName}",
      subscriptionId,
      resourceGroupName,
      vmmServerName,
      inventoryItemResourceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _inventoryItemsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<InventoryItem> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return inventoryItemDeserializer(result.body);
}

/** Shows an inventory item. */
export async function inventoryItemsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  inventoryItemResourceName: string,
  options: InventoryItemsGetOptionalParams = { requestOptions: {} },
): Promise<InventoryItem> {
  const result = await _inventoryItemsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    vmmServerName,
    inventoryItemResourceName,
    options,
  );
  return _inventoryItemsGetDeserialize(result);
}

export function _inventoryItemsCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  inventoryItemResourceName: string,
  resource: InventoryItem,
  options: InventoryItemsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems/{inventoryItemResourceName}",
      subscriptionId,
      resourceGroupName,
      vmmServerName,
      inventoryItemResourceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: inventoryItemSerializer(resource),
    });
}

export async function _inventoryItemsCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<InventoryItem> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return inventoryItemDeserializer(result.body);
}

/** Create Or Update InventoryItem. */
export async function inventoryItemsCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  inventoryItemResourceName: string,
  resource: InventoryItem,
  options: InventoryItemsCreateOptionalParams = { requestOptions: {} },
): Promise<InventoryItem> {
  const result = await _inventoryItemsCreateSend(
    context,
    subscriptionId,
    resourceGroupName,
    vmmServerName,
    inventoryItemResourceName,
    resource,
    options,
  );
  return _inventoryItemsCreateDeserialize(result);
}

export function _inventoryItemsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  inventoryItemResourceName: string,
  options: InventoryItemsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems/{inventoryItemResourceName}",
      subscriptionId,
      resourceGroupName,
      vmmServerName,
      inventoryItemResourceName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _inventoryItemsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes an inventoryItem. */
export async function inventoryItemsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  inventoryItemResourceName: string,
  options: InventoryItemsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _inventoryItemsDeleteSend(
    context,
    subscriptionId,
    resourceGroupName,
    vmmServerName,
    inventoryItemResourceName,
    options,
  );
  return _inventoryItemsDeleteDeserialize(result);
}

export function _inventoryItemsListByVmmServerSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  options: InventoryItemsListByVmmServerOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems",
      subscriptionId,
      resourceGroupName,
      vmmServerName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _inventoryItemsListByVmmServerDeserialize(
  result: PathUncheckedResponse,
): Promise<_InventoryItemListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _inventoryItemListResultDeserializer(result.body);
}

/** Returns the list of inventoryItems in the given VmmServer. */
export function inventoryItemsListByVmmServer(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  vmmServerName: string,
  options: InventoryItemsListByVmmServerOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<InventoryItem> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _inventoryItemsListByVmmServerSend(
        context,
        subscriptionId,
        resourceGroupName,
        vmmServerName,
        options,
      ),
    _inventoryItemsListByVmmServerDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
