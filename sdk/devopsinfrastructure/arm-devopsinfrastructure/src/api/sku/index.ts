// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ResourceSku, _ResourceSkuListResult } from "../../models/models.js";
import { DevOpsInfrastructureContext as Client } from "../index.js";
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
import { SkuListByLocationOptionalParams } from "../../models/options.js";

export function _skuListByLocationSend(
  context: Client,
  subscriptionId: string,
  locationName: string,
  options: SkuListByLocationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.DevOpsInfrastructure/locations/{locationName}/skus",
      subscriptionId,
      locationName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _skuListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_ResourceSkuListResult> {
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
              resourceType: p.properties?.["resourceType"],
              tier: p.properties?.["tier"],
              size: p.properties?.["size"],
              family: p.properties?.["family"],
              locations: p.properties?.["locations"],
              locationInfo: p.properties?.["locationInfo"].map((p: any) => {
                return {
                  location: p["location"],
                  zones: p["zones"],
                  zoneDetails: p["zoneDetails"].map((p: any) => {
                    return {
                      name: p["name"],
                      capabilities: p["capabilities"].map((p: any) => {
                        return { name: p["name"], value: p["value"] };
                      }),
                    };
                  }),
                };
              }),
              capabilities: p.properties?.["capabilities"].map((p: any) => {
                return { name: p["name"], value: p["value"] };
              }),
              restrictions: p.properties?.["restrictions"].map((p: any) => {
                return {
                  type: p["type"],
                  values: p["values"],
                  restrictionInfo: {
                    locations: p.restrictionInfo["locations"],
                    zones: p.restrictionInfo["zones"],
                  },
                  reasonCode: p["reasonCode"],
                };
              }),
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List ResourceSku resources by subscription ID */
export function skuListByLocation(
  context: Client,
  subscriptionId: string,
  locationName: string,
  options: SkuListByLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ResourceSku> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _skuListByLocationSend(context, subscriptionId, locationName, options),
    _skuListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
