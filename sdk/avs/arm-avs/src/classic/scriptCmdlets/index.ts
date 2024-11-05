// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AVSContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { ScriptCmdlet } from "../../models/models.js";
import {
  scriptCmdletsList,
  scriptCmdletsGet,
} from "../../api/scriptCmdlets/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  ScriptCmdletsListOptionalParams,
  ScriptCmdletsGetOptionalParams,
} from "../../models/options.js";

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

export function getScriptCmdlets(context: AVSContext, subscriptionId: string) {
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
  context: AVSContext,
  subscriptionId: string,
): ScriptCmdletsOperations {
  return {
    ...getScriptCmdlets(context, subscriptionId),
  };
}
