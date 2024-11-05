// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  InventoryResource,
  _InventoryResourceListResult,
} from "../../models/models.js";
import { HybridConnectivityContext as Client } from "../index.js";
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
  InventoryGetOptionalParams,
  InventoryListBySolutionConfigurationOptionalParams,
} from "../../models/options.js";

export function _inventoryGetSend(
  context: Client,
  resourceUri: string,
  solutionConfiguration: string,
  inventoryId: string,
  options: InventoryGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.HybridConnectivity/solutionConfigurations/{solutionConfiguration}/inventory/{inventoryId}",
      resourceUri,
      solutionConfiguration,
      inventoryId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _inventoryGetDeserialize(
  result: PathUncheckedResponse,
): Promise<InventoryResource> {
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
          cloudNativeType: result.body.properties?.["cloudNativeType"],
          cloudNativeResourceId:
            result.body.properties?.["cloudNativeResourceId"],
          azureResourceId: result.body.properties?.["azureResourceId"],
          status: result.body.properties?.["status"],
          statusDetails: result.body.properties?.["statusDetails"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a InventoryResource */
export async function inventoryGet(
  context: Client,
  resourceUri: string,
  solutionConfiguration: string,
  inventoryId: string,
  options: InventoryGetOptionalParams = { requestOptions: {} },
): Promise<InventoryResource> {
  const result = await _inventoryGetSend(
    context,
    resourceUri,
    solutionConfiguration,
    inventoryId,
    options,
  );
  return _inventoryGetDeserialize(result);
}

export function _inventoryListBySolutionConfigurationSend(
  context: Client,
  resourceUri: string,
  solutionConfiguration: string,
  options: InventoryListBySolutionConfigurationOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.HybridConnectivity/solutionConfigurations/{solutionConfiguration}/inventory",
      resourceUri,
      solutionConfiguration,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _inventoryListBySolutionConfigurationDeserialize(
  result: PathUncheckedResponse,
): Promise<_InventoryResourceListResult> {
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
              cloudNativeType: p.properties?.["cloudNativeType"],
              cloudNativeResourceId: p.properties?.["cloudNativeResourceId"],
              azureResourceId: p.properties?.["azureResourceId"],
              status: p.properties?.["status"],
              statusDetails: p.properties?.["statusDetails"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List InventoryResource resources by SolutionConfiguration */
export function inventoryListBySolutionConfiguration(
  context: Client,
  resourceUri: string,
  solutionConfiguration: string,
  options: InventoryListBySolutionConfigurationOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<InventoryResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _inventoryListBySolutionConfigurationSend(
        context,
        resourceUri,
        solutionConfiguration,
        options,
      ),
    _inventoryListBySolutionConfigurationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
