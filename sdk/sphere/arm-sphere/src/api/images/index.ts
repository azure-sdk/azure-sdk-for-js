// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  imagePropertiesSerializer,
  Image,
  _ImageListResult,
} from "../../models/models.js";
import { AzureSphereContext as Client } from "../index.js";
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
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ImagesGetOptionalParams,
  ImagesCreateOrUpdateOptionalParams,
  ImagesDeleteOptionalParams,
  ImagesListByCatalogOptionalParams,
} from "../../models/options.js";

export function _imagesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  imageName: string,
  options: ImagesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images/{imageName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      imageName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _imagesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Image> {
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
          image: result.body.properties?.["image"],
          imageId: result.body.properties?.["imageId"],
          imageName: result.body.properties?.["imageName"],
          regionalDataBoundary:
            result.body.properties?.["regionalDataBoundary"],
          uri: result.body.properties?.["uri"],
          description: result.body.properties?.["description"],
          componentId: result.body.properties?.["componentId"],
          imageType: result.body.properties?.["imageType"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a Image */
export async function imagesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  imageName: string,
  options: ImagesGetOptionalParams = { requestOptions: {} },
): Promise<Image> {
  const result = await _imagesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    imageName,
    options,
  );
  return _imagesGetDeserialize(result);
}

export function _imagesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  imageName: string,
  resource: Image,
  options: ImagesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images/{imageName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      imageName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : imagePropertiesSerializer(resource.properties),
      },
    });
}

export async function _imagesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Image> {
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
          image: result.body.properties?.["image"],
          imageId: result.body.properties?.["imageId"],
          imageName: result.body.properties?.["imageName"],
          regionalDataBoundary:
            result.body.properties?.["regionalDataBoundary"],
          uri: result.body.properties?.["uri"],
          description: result.body.properties?.["description"],
          componentId: result.body.properties?.["componentId"],
          imageType: result.body.properties?.["imageType"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a Image */
export function imagesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  imageName: string,
  resource: Image,
  options: ImagesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Image>, Image> {
  return getLongRunningPoller(
    context,
    _imagesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _imagesCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          imageName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<Image>, Image>;
}

export function _imagesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  imageName: string,
  options: ImagesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images/{imageName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      imageName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _imagesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Image */
export function imagesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  imageName: string,
  options: ImagesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _imagesDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _imagesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          imageName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _imagesListByCatalogSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: ImagesListByCatalogOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        $filter: options?.filter,
        $top: options?.top,
        $skip: options?.skip,
        $maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _imagesListByCatalogDeserialize(
  result: PathUncheckedResponse,
): Promise<_ImageListResult> {
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
              image: p.properties?.["image"],
              imageId: p.properties?.["imageId"],
              imageName: p.properties?.["imageName"],
              regionalDataBoundary: p.properties?.["regionalDataBoundary"],
              uri: p.properties?.["uri"],
              description: p.properties?.["description"],
              componentId: p.properties?.["componentId"],
              imageType: p.properties?.["imageType"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Image resources by Catalog */
export function imagesListByCatalog(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: ImagesListByCatalogOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Image> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _imagesListByCatalogSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    _imagesListByCatalogDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
