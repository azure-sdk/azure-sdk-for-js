// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ImageVersion, _ImageVersionListResult } from "../../models/models.js";
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
import { ImageVersionsListByImageOptionalParams } from "../../models/options.js";

export function _imageVersionsListByImageSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  imageName: string,
  options: ImageVersionsListByImageOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/images/{imageName}/versions",
      subscriptionId,
      resourceGroupName,
      imageName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _imageVersionsListByImageDeserialize(
  result: PathUncheckedResponse,
): Promise<_ImageVersionListResult> {
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
          : { version: p.properties?.["version"] },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List ImageVersion resources by Image */
export function imageVersionsListByImage(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  imageName: string,
  options: ImageVersionsListByImageOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ImageVersion> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _imageVersionsListByImageSend(
        context,
        subscriptionId,
        resourceGroupName,
        imageName,
        options,
      ),
    _imageVersionsListByImageDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
