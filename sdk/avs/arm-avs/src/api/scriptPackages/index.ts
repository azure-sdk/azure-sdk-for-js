// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AvsContext as Client,
  ScriptPackagesGetOptionalParams,
  ScriptPackagesListOptionalParams,
} from "../index.js";
import {
  _ScriptPackagesList,
  _scriptPackagesListDeserializer,
  ScriptPackage,
  scriptPackageDeserializer,
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

export function _scriptPackagesListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: ScriptPackagesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _scriptPackagesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ScriptPackagesList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _scriptPackagesListDeserializer(result.body);
}

/** List ScriptPackage resources by PrivateCloud */
export function scriptPackagesList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: ScriptPackagesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ScriptPackage> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _scriptPackagesListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _scriptPackagesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _scriptPackagesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptPackageName: string,
  options: ScriptPackagesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      scriptPackageName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _scriptPackagesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ScriptPackage> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return scriptPackageDeserializer(result.body);
}

/** Get a ScriptPackage */
export async function scriptPackagesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptPackageName: string,
  options: ScriptPackagesGetOptionalParams = { requestOptions: {} },
): Promise<ScriptPackage> {
  const result = await _scriptPackagesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    scriptPackageName,
    options,
  );
  return _scriptPackagesGetDeserialize(result);
}
