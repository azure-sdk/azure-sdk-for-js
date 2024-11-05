// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AVSContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { ScriptPackage } from "../../models/models.js";
import {
  scriptPackagesList,
  scriptPackagesGet,
} from "../../api/scriptPackages/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  ScriptPackagesListOptionalParams,
  ScriptPackagesGetOptionalParams,
} from "../../models/options.js";

/** Interface representing a ScriptPackages operations. */
export interface ScriptPackagesOperations {
  /** List ScriptPackage resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: ScriptPackagesListOptionalParams,
  ) => PagedAsyncIterableIterator<ScriptPackage>;
  /** Get a ScriptPackage */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    scriptPackageName: string,
    options?: ScriptPackagesGetOptionalParams,
  ) => Promise<ScriptPackage>;
}

export function getScriptPackages(context: AVSContext, subscriptionId: string) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: ScriptPackagesListOptionalParams,
    ) =>
      scriptPackagesList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      scriptPackageName: string,
      options?: ScriptPackagesGetOptionalParams,
    ) =>
      scriptPackagesGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        scriptPackageName,
        options,
      ),
  };
}

export function getScriptPackagesOperations(
  context: AVSContext,
  subscriptionId: string,
): ScriptPackagesOperations {
  return {
    ...getScriptPackages(context, subscriptionId),
  };
}
