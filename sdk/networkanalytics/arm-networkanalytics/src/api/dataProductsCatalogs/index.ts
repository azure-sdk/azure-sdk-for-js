// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DataProductsCatalog,
  _DataProductsCatalogListResult,
} from "../../models/models.js";
import { NetworkAnalyticsContext as Client } from "../index.js";
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
  DataProductsCatalogsGetOptionalParams,
  DataProductsCatalogsListByResourceGroupOptionalParams,
  DataProductsCatalogsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _dataProductsCatalogsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: DataProductsCatalogsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProductsCatalogs/default",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataProductsCatalogsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DataProductsCatalog> {
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
          provisioningState: result.body.properties?.["provisioningState"],
          publishers: result.body.properties?.["publishers"].map((p: any) => {
            return {
              publisherName: p["publisherName"],
              dataProducts: p["dataProducts"].map((p: any) => {
                return {
                  dataProductName: p["dataProductName"],
                  description: p["description"],
                  dataProductVersions: p["dataProductVersions"].map(
                    (p: any) => {
                      return { version: p["version"] };
                    },
                  ),
                };
              }),
            };
          }),
        },
  };
}

/** Retrieve data type resource. */
export async function dataProductsCatalogsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: DataProductsCatalogsGetOptionalParams = { requestOptions: {} },
): Promise<DataProductsCatalog> {
  const result = await _dataProductsCatalogsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    options,
  );
  return _dataProductsCatalogsGetDeserialize(result);
}

export function _dataProductsCatalogsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: DataProductsCatalogsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProductsCatalogs",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataProductsCatalogsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_DataProductsCatalogListResult> {
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
              provisioningState: p.properties?.["provisioningState"],
              publishers: p.properties?.["publishers"].map((p: any) => {
                return {
                  publisherName: p["publisherName"],
                  dataProducts: p["dataProducts"].map((p: any) => {
                    return {
                      dataProductName: p["dataProductName"],
                      description: p["description"],
                      dataProductVersions: p["dataProductVersions"].map(
                        (p: any) => {
                          return { version: p["version"] };
                        },
                      ),
                    };
                  }),
                };
              }),
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List data catalog by resource group. */
export function dataProductsCatalogsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: DataProductsCatalogsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DataProductsCatalog> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dataProductsCatalogsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _dataProductsCatalogsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _dataProductsCatalogsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: DataProductsCatalogsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkAnalytics/dataProductsCatalogs",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dataProductsCatalogsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_DataProductsCatalogListResult> {
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
              provisioningState: p.properties?.["provisioningState"],
              publishers: p.properties?.["publishers"].map((p: any) => {
                return {
                  publisherName: p["publisherName"],
                  dataProducts: p["dataProducts"].map((p: any) => {
                    return {
                      dataProductName: p["dataProductName"],
                      description: p["description"],
                      dataProductVersions: p["dataProductVersions"].map(
                        (p: any) => {
                          return { version: p["version"] };
                        },
                      ),
                    };
                  }),
                };
              }),
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List data catalog by subscription. */
export function dataProductsCatalogsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: DataProductsCatalogsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DataProductsCatalog> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dataProductsCatalogsListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _dataProductsCatalogsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
