// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AvsContext as Client,
  HcxEnterpriseSitesCreateOrUpdateOptionalParams,
  HcxEnterpriseSitesDeleteOptionalParams,
  HcxEnterpriseSitesGetOptionalParams,
  HcxEnterpriseSitesListOptionalParams,
} from "../index.js";
import {
  _HcxEnterpriseSiteList,
  _hcxEnterpriseSiteListDeserializer,
  HcxEnterpriseSite,
  hcxEnterpriseSiteSerializer,
  hcxEnterpriseSiteDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

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

  return _hcxEnterpriseSiteListDeserializer(result.body);
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

  return hcxEnterpriseSiteDeserializer(result.body);
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
      body: hcxEnterpriseSiteSerializer(hcxEnterpriseSite),
    });
}

export async function _hcxEnterpriseSitesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<HcxEnterpriseSite> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return hcxEnterpriseSiteDeserializer(result.body);
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
