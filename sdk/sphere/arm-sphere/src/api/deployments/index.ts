// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  deploymentPropertiesSerializer,
  Deployment,
  _DeploymentListResult,
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
  DeploymentsGetOptionalParams,
  DeploymentsCreateOrUpdateOptionalParams,
  DeploymentsDeleteOptionalParams,
  DeploymentsListByDeviceGroupOptionalParams,
} from "../../models/options.js";

export function _deploymentsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deploymentName: string,
  options: DeploymentsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments/{deploymentName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
      deploymentName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _deploymentsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Deployment> {
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
          deploymentId: result.body.properties?.["deploymentId"],
          deployedImages:
            result.body.properties?.["deployedImages"] === undefined
              ? result.body.properties?.["deployedImages"]
              : result.body.properties?.["deployedImages"].map((p: any) => {
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
                          lastModifiedByType:
                            p.systemData?.["lastModifiedByType"],
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
                          regionalDataBoundary:
                            p.properties?.["regionalDataBoundary"],
                          uri: p.properties?.["uri"],
                          description: p.properties?.["description"],
                          componentId: p.properties?.["componentId"],
                          imageType: p.properties?.["imageType"],
                          provisioningState:
                            p.properties?.["provisioningState"],
                        },
                  };
                }),
          deploymentDateUtc:
            result.body.properties?.["deploymentDateUtc"] !== undefined
              ? new Date(result.body.properties?.["deploymentDateUtc"])
              : undefined,
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export async function deploymentsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deploymentName: string,
  options: DeploymentsGetOptionalParams = { requestOptions: {} },
): Promise<Deployment> {
  const result = await _deploymentsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    productName,
    deviceGroupName,
    deploymentName,
    options,
  );
  return _deploymentsGetDeserialize(result);
}

export function _deploymentsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deploymentName: string,
  resource: Deployment,
  options: DeploymentsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments/{deploymentName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
      deploymentName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : deploymentPropertiesSerializer(resource.properties),
      },
    });
}

export async function _deploymentsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Deployment> {
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
          deploymentId: result.body.properties?.["deploymentId"],
          deployedImages:
            result.body.properties?.["deployedImages"] === undefined
              ? result.body.properties?.["deployedImages"]
              : result.body.properties?.["deployedImages"].map((p: any) => {
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
                          lastModifiedByType:
                            p.systemData?.["lastModifiedByType"],
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
                          regionalDataBoundary:
                            p.properties?.["regionalDataBoundary"],
                          uri: p.properties?.["uri"],
                          description: p.properties?.["description"],
                          componentId: p.properties?.["componentId"],
                          imageType: p.properties?.["imageType"],
                          provisioningState:
                            p.properties?.["provisioningState"],
                        },
                  };
                }),
          deploymentDateUtc:
            result.body.properties?.["deploymentDateUtc"] !== undefined
              ? new Date(result.body.properties?.["deploymentDateUtc"])
              : undefined,
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function deploymentsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deploymentName: string,
  resource: Deployment,
  options: DeploymentsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Deployment>, Deployment> {
  return getLongRunningPoller(
    context,
    _deploymentsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _deploymentsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          productName,
          deviceGroupName,
          deploymentName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<Deployment>, Deployment>;
}

export function _deploymentsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deploymentName: string,
  options: DeploymentsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments/{deploymentName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
      deploymentName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deploymentsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function deploymentsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deploymentName: string,
  options: DeploymentsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _deploymentsDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _deploymentsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          catalogName,
          productName,
          deviceGroupName,
          deploymentName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _deploymentsListByDeviceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeploymentsListByDeviceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
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

export async function _deploymentsListByDeviceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_DeploymentListResult> {
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
              deploymentId: p.properties?.["deploymentId"],
              deployedImages:
                p.properties?.["deployedImages"] === undefined
                  ? p.properties?.["deployedImages"]
                  : p.properties?.["deployedImages"].map((p: any) => {
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
                              lastModifiedByType:
                                p.systemData?.["lastModifiedByType"],
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
                              regionalDataBoundary:
                                p.properties?.["regionalDataBoundary"],
                              uri: p.properties?.["uri"],
                              description: p.properties?.["description"],
                              componentId: p.properties?.["componentId"],
                              imageType: p.properties?.["imageType"],
                              provisioningState:
                                p.properties?.["provisioningState"],
                            },
                      };
                    }),
              deploymentDateUtc:
                p.properties?.["deploymentDateUtc"] !== undefined
                  ? new Date(p.properties?.["deploymentDateUtc"])
                  : undefined,
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Deployment resources by DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function deploymentsListByDeviceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeploymentsListByDeviceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Deployment> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _deploymentsListByDeviceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        options,
      ),
    _deploymentsListByDeviceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
