// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AvsContext as Client,
  ScriptCmdletsGetOptionalParams,
  ScriptCmdletsListOptionalParams,
} from "../index.js";
import {
  _ScriptCmdletsList,
  _scriptCmdletsListDeserializer,
  ScriptCmdlet,
  scriptCmdletDeserializer,
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

export function _scriptCmdletsListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptPackageName: string,
  options: ScriptCmdletsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}/scriptCmdlets",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      scriptPackageName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _scriptCmdletsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ScriptCmdletsList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _scriptCmdletsListDeserializer(result.body);
}

/** List ScriptCmdlet resources by ScriptPackage */
export function scriptCmdletsList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptPackageName: string,
  options: ScriptCmdletsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ScriptCmdlet> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _scriptCmdletsListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        scriptPackageName,
        options,
      ),
    _scriptCmdletsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _scriptCmdletsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptPackageName: string,
  scriptCmdletName: string,
  options: ScriptCmdletsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}/scriptCmdlets/{scriptCmdletName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      scriptPackageName,
      scriptCmdletName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _scriptCmdletsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ScriptCmdlet> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return scriptCmdletDeserializer(result.body);
}

/** Get a ScriptCmdlet */
export async function scriptCmdletsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  scriptPackageName: string,
  scriptCmdletName: string,
  options: ScriptCmdletsGetOptionalParams = { requestOptions: {} },
): Promise<ScriptCmdlet> {
  const result = await _scriptCmdletsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    scriptPackageName,
    scriptCmdletName,
    options,
  );
  return _scriptCmdletsGetDeserialize(result);
}
