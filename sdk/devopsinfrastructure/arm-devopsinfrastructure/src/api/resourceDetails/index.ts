// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ResourceDetailsObject,
  _ResourceDetailsObjectListResult,
} from "../../models/models.js";
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
import { ResourceDetailsListByPoolOptionalParams } from "../../models/options.js";

export function _resourceDetailsListByPoolSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  poolName: string,
  options: ResourceDetailsListByPoolOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools/{poolName}/resources",
      subscriptionId,
      resourceGroupName,
      poolName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _resourceDetailsListByPoolDeserialize(
  result: PathUncheckedResponse,
): Promise<_ResourceDetailsObjectListResult> {
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
              status: p.properties?.["status"],
              image: p.properties?.["image"],
              imageVersion: p.properties?.["imageVersion"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List ResourceDetailsObject resources by Pool */
export function resourceDetailsListByPool(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  poolName: string,
  options: ResourceDetailsListByPoolOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ResourceDetailsObject> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _resourceDetailsListByPoolSend(
        context,
        subscriptionId,
        resourceGroupName,
        poolName,
        options,
      ),
    _resourceDetailsListByPoolDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
