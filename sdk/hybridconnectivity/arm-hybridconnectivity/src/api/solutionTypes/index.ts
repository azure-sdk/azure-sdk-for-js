// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  SolutionTypeResource,
  _SolutionTypeResourceListResult,
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
  SolutionTypesGetOptionalParams,
  SolutionTypesListByResourceGroupOptionalParams,
  SolutionTypesListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _solutionTypesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionType: string,
  options: SolutionTypesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridConnectivity/solutionTypes/{solutionType}",
      subscriptionId,
      resourceGroupName,
      solutionType,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _solutionTypesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SolutionTypeResource> {
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
          solutionType: result.body.properties?.["solutionType"],
          description: result.body.properties?.["description"],
          supportedAzureRegions:
            result.body.properties?.["supportedAzureRegions"],
          solutionSettings:
            result.body.properties?.["solutionSettings"] === undefined
              ? result.body.properties?.["solutionSettings"]
              : result.body.properties?.["solutionSettings"].map((p: any) => {
                  return {
                    name: p["name"],
                    displayName: p["displayName"],
                    type: p["type"],
                    description: p["description"],
                    allowedValues: p["allowedValues"],
                    defaultValue: p["defaultValue"],
                  };
                }),
        },
  };
}

/** Get a SolutionTypeResource */
export async function solutionTypesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  solutionType: string,
  options: SolutionTypesGetOptionalParams = { requestOptions: {} },
): Promise<SolutionTypeResource> {
  const result = await _solutionTypesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    solutionType,
    options,
  );
  return _solutionTypesGetDeserialize(result);
}

export function _solutionTypesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SolutionTypesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridConnectivity/solutionTypes",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _solutionTypesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_SolutionTypeResourceListResult> {
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
              solutionType: p.properties?.["solutionType"],
              description: p.properties?.["description"],
              supportedAzureRegions: p.properties?.["supportedAzureRegions"],
              solutionSettings:
                p.properties?.["solutionSettings"] === undefined
                  ? p.properties?.["solutionSettings"]
                  : p.properties?.["solutionSettings"].map((p: any) => {
                      return {
                        name: p["name"],
                        displayName: p["displayName"],
                        type: p["type"],
                        description: p["description"],
                        allowedValues: p["allowedValues"],
                        defaultValue: p["defaultValue"],
                      };
                    }),
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List SolutionTypeResource resources by resource group */
export function solutionTypesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: SolutionTypesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SolutionTypeResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _solutionTypesListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _solutionTypesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _solutionTypesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: SolutionTypesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.HybridConnectivity/solutionTypes",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _solutionTypesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_SolutionTypeResourceListResult> {
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
              solutionType: p.properties?.["solutionType"],
              description: p.properties?.["description"],
              supportedAzureRegions: p.properties?.["supportedAzureRegions"],
              solutionSettings:
                p.properties?.["solutionSettings"] === undefined
                  ? p.properties?.["solutionSettings"]
                  : p.properties?.["solutionSettings"].map((p: any) => {
                      return {
                        name: p["name"],
                        displayName: p["displayName"],
                        type: p["type"],
                        description: p["description"],
                        allowedValues: p["allowedValues"],
                        defaultValue: p["defaultValue"],
                      };
                    }),
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List SolutionTypeResource resources by subscription ID */
export function solutionTypesListBySubscription(
  context: Client,
  subscriptionId: string,
  options: SolutionTypesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SolutionTypeResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _solutionTypesListBySubscriptionSend(context, subscriptionId, options),
    _solutionTypesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
