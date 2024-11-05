// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  inventoryItemPropertiesUnionSerializer,
  InventoryItem,
  _InventoryItemListResult,
} from "../../models/models.js";
import { ScVmmContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  InventoryItemsGetOptionalParams,
  InventoryItemsCreateOptionalParams,
  InventoryItemsDeleteOptionalParams,
  InventoryItemsListByVmmServerOptionalParams,
} from "../../models/options.js";

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

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          inventoryType: result.body.properties?.["inventoryType"],
          managedResourceId: result.body.properties?.["managedResourceId"],
          uuid: result.body.properties?.["uuid"],
          inventoryItemName: result.body.properties?.["inventoryItemName"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    kind: result.body["kind"],
  };
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
      body: {
        properties: !resource.properties
          ? resource.properties
          : inventoryItemPropertiesUnionSerializer(resource.properties),
        kind: resource["kind"],
      },
    });
}

export async function _inventoryItemsCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<InventoryItem> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          inventoryType: result.body.properties?.["inventoryType"],
          managedResourceId: result.body.properties?.["managedResourceId"],
          uuid: result.body.properties?.["uuid"],
          inventoryItemName: result.body.properties?.["inventoryItemName"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    kind: result.body["kind"],
  };
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

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              inventoryType: p.properties?.["inventoryType"],
              managedResourceId: p.properties?.["managedResourceId"],
              uuid: p.properties?.["uuid"],
              inventoryItemName: p.properties?.["inventoryItemName"],
              provisioningState: p.properties?.["provisioningState"],
            },
        kind: p["kind"],
      };
    }),
    nextLink: result.body["nextLink"],
  };
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
