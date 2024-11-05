// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  hcxEnterpriseSitePropertiesSerializer,
  HcxEnterpriseSite,
  _HcxEnterpriseSiteList,
} from "../../models/models.js";
import { AVSContext as Client } from "../index.js";
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
  HcxEnterpriseSitesListOptionalParams,
  HcxEnterpriseSitesGetOptionalParams,
  HcxEnterpriseSitesCreateOrUpdateOptionalParams,
  HcxEnterpriseSitesDeleteOptionalParams,
} from "../../models/options.js";

export function _hcxEnterpriseSitesListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: HcxEnterpriseSitesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _hcxEnterpriseSitesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_HcxEnterpriseSiteList> {
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
              activationKey: p.properties?.["activationKey"],
              status: p.properties?.["status"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List HcxEnterpriseSite resources by PrivateCloud */
export function hcxEnterpriseSitesList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: HcxEnterpriseSitesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<HcxEnterpriseSite> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _hcxEnterpriseSitesListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _hcxEnterpriseSitesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _hcxEnterpriseSitesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  hcxEnterpriseSiteName: string,
  options: HcxEnterpriseSitesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      hcxEnterpriseSiteName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _hcxEnterpriseSitesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<HcxEnterpriseSite> {
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
          activationKey: result.body.properties?.["activationKey"],
          status: result.body.properties?.["status"],
        },
  };
}

/** Get a HcxEnterpriseSite */
export async function hcxEnterpriseSitesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  hcxEnterpriseSiteName: string,
  options: HcxEnterpriseSitesGetOptionalParams = { requestOptions: {} },
): Promise<HcxEnterpriseSite> {
  const result = await _hcxEnterpriseSitesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    hcxEnterpriseSiteName,
    options,
  );
  return _hcxEnterpriseSitesGetDeserialize(result);
}

export function _hcxEnterpriseSitesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  hcxEnterpriseSiteName: string,
  hcxEnterpriseSite: HcxEnterpriseSite,
  options: HcxEnterpriseSitesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      hcxEnterpriseSiteName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !hcxEnterpriseSite.properties
          ? hcxEnterpriseSite.properties
          : hcxEnterpriseSitePropertiesSerializer(hcxEnterpriseSite.properties),
      },
    });
}

export async function _hcxEnterpriseSitesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<HcxEnterpriseSite> {
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
          provisioningState: result.body.properties?.["provisioningState"],
          activationKey: result.body.properties?.["activationKey"],
          status: result.body.properties?.["status"],
        },
  };
}

/** Create a HcxEnterpriseSite */
export async function hcxEnterpriseSitesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  hcxEnterpriseSiteName: string,
  hcxEnterpriseSite: HcxEnterpriseSite,
  options: HcxEnterpriseSitesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<HcxEnterpriseSite> {
  const result = await _hcxEnterpriseSitesCreateOrUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    hcxEnterpriseSiteName,
    hcxEnterpriseSite,
    options,
  );
  return _hcxEnterpriseSitesCreateOrUpdateDeserialize(result);
}

export function _hcxEnterpriseSitesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  hcxEnterpriseSiteName: string,
  options: HcxEnterpriseSitesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      hcxEnterpriseSiteName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _hcxEnterpriseSitesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a HcxEnterpriseSite */
export async function hcxEnterpriseSitesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  hcxEnterpriseSiteName: string,
  options: HcxEnterpriseSitesDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _hcxEnterpriseSitesDeleteSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    hcxEnterpriseSiteName,
    options,
  );
  return _hcxEnterpriseSitesDeleteDeserialize(result);
}
