// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  productPropertiesSerializer,
  productUpdatePropertiesSerializer,
  DeviceGroup,
  CountDevicesResponse,
  Product,
  ProductUpdate,
  _DeviceGroupListResult,
  _ProductListResult,
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
  ProductsGetOptionalParams,
  ProductsCreateOrUpdateOptionalParams,
  ProductsUpdateOptionalParams,
  ProductsDeleteOptionalParams,
  ProductsListByCatalogOptionalParams,
  ProductsCountDevicesOptionalParams,
  ProductsGenerateDefaultDeviceGroupsOptionalParams,
} from "../../models/options.js";

export function _productsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _productsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Product> {
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
          description: result.body.properties?.["description"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export async function productsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsGetOptionalParams = { requestOptions: {} },
): Promise<Product> {
  const result = await _productsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    productName,
    options,
  );
  return _productsGetDeserialize(result);
}

export function _productsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  resource: Product,
  options: ProductsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : productPropertiesSerializer(resource.properties),
      },
    });
}

export async function _productsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Product> {
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
          description: result.body.properties?.["description"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export function productsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  resource: Product,
  options: ProductsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Product>, Product> {
  return getLongRunningPoller(
    context,
    _productsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _productsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          productName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<Product>, Product>;
}

export function _productsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  properties: ProductUpdate,
  options: ProductsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? properties.properties
          : productUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _productsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Product> {
  const expectedStatuses = ["200", "202"];
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
          description: result.body.properties?.["description"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Update a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export function productsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  properties: ProductUpdate,
  options: ProductsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Product>, Product> {
  return getLongRunningPoller(
    context,
    _productsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _productsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          productName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<Product>, Product>;
}

export function _productsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _productsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name' */
export function productsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _productsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _productsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          productName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _productsListByCatalogSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: ProductsListByCatalogOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _productsListByCatalogDeserialize(
  result: PathUncheckedResponse,
): Promise<_ProductListResult> {
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
              description: p.properties?.["description"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Product resources by Catalog */
export function productsListByCatalog(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: ProductsListByCatalogOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Product> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _productsListByCatalogSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    _productsListByCatalogDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _productsCountDevicesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsCountDevicesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/countDevices",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _productsCountDevicesDeserialize(
  result: PathUncheckedResponse,
): Promise<CountDevicesResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"],
  };
}

/** Counts devices in product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export async function productsCountDevices(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsCountDevicesOptionalParams = { requestOptions: {} },
): Promise<CountDevicesResponse> {
  const result = await _productsCountDevicesSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    productName,
    options,
  );
  return _productsCountDevicesDeserialize(result);
}

export function _productsGenerateDefaultDeviceGroupsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsGenerateDefaultDeviceGroupsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/generateDefaultDeviceGroups",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _productsGenerateDefaultDeviceGroupsDeserialize(
  result: PathUncheckedResponse,
): Promise<_DeviceGroupListResult> {
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
              description: p.properties?.["description"],
              osFeedType: p.properties?.["osFeedType"],
              updatePolicy: p.properties?.["updatePolicy"],
              allowCrashDumpsCollection:
                p.properties?.["allowCrashDumpsCollection"],
              regionalDataBoundary: p.properties?.["regionalDataBoundary"],
              hasDeployment: p.properties?.["hasDeployment"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Generates default device groups for the product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export function productsGenerateDefaultDeviceGroups(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsGenerateDefaultDeviceGroupsOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DeviceGroup> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _productsGenerateDefaultDeviceGroupsSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        options,
      ),
    _productsGenerateDefaultDeviceGroupsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
