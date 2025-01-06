// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AvsContext } from "../../api/avsContext.js";
import {
  ScriptCmdletsListOptionalParams,
  ScriptCmdletsGetOptionalParams,
} from "../../api/options.js";
import {
  scriptCmdletsList,
  scriptCmdletsGet,
} from "../../api/scriptCmdlets/index.js";
import { ScriptCmdlet } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ScriptCmdlets operations. */
export interface ScriptCmdletsOperations {
  /** List ScriptCmdlet resources by ScriptPackage */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    scriptPackageName: string,
    options?: ScriptCmdletsListOptionalParams,
  ) => PagedAsyncIterableIterator<ScriptCmdlet>;
  /** Get a ScriptCmdlet */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    scriptPackageName: string,
    scriptCmdletName: string,
    options?: ScriptCmdletsGetOptionalParams,
  ) => Promise<ScriptCmdlet>;
}

export function getScriptCmdlets(context: AvsContext, subscriptionId: string) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      scriptPackageName: string,
      options?: ScriptCmdletsListOptionalParams,
    ) =>
      scriptCmdletsList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        scriptPackageName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      scriptPackageName: string,
      scriptCmdletName: string,
      options?: ScriptCmdletsGetOptionalParams,
    ) =>
      scriptCmdletsGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        scriptPackageName,
        scriptCmdletName,
        options,
      ),
  };
}

export function getScriptCmdletsOperations(
  context: AvsContext,
  subscriptionId: string,
): ScriptCmdletsOperations {
  return {
    ...getScriptCmdlets(context, subscriptionId),
  };
}
