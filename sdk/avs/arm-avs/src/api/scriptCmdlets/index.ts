// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScriptCmdlet, _ScriptCmdletsList } from "../../models/models.js";
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
  ScriptCmdletsListOptionalParams,
  ScriptCmdletsGetOptionalParams,
} from "../../models/options.js";

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
              description: p.properties?.["description"],
              timeout: p.properties?.["timeout"],
              audience: p.properties?.["audience"],
              parameters:
                p.properties?.["parameters"] === undefined
                  ? p.properties?.["parameters"]
                  : p.properties?.["parameters"].map((p: any) => {
                      return {
                        type: p["type"],
                        name: p["name"],
                        description: p["description"],
                        visibility: p["visibility"],
                        optional: p["optional"],
                      };
                    }),
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
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
          description: result.body.properties?.["description"],
          timeout: result.body.properties?.["timeout"],
          audience: result.body.properties?.["audience"],
          parameters:
            result.body.properties?.["parameters"] === undefined
              ? result.body.properties?.["parameters"]
              : result.body.properties?.["parameters"].map((p: any) => {
                  return {
                    type: p["type"],
                    name: p["name"],
                    description: p["description"],
                    visibility: p["visibility"],
                    optional: p["optional"],
                  };
                }),
        },
  };
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
