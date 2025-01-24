// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosManagementContext } from "../../api/chaosManagementContext.js";
import {
  TargetsListOptionalParams,
  TargetsDeleteOptionalParams,
  TargetsCreateOrUpdateOptionalParams,
  TargetsGetOptionalParams,
} from "../../api/options.js";
import {
  targetsList,
  targetsDelete,
  targetsCreateOrUpdate,
  targetsGet,
} from "../../api/targets/index.js";
import { Target } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Targets operations. */
export interface TargetsOperations {
  /** Get a list of Target resources that extend a tracked regional resource. */
  list: (
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    options?: TargetsListOptionalParams,
  ) => PagedAsyncIterableIterator<Target>;
  /** Delete a Target resource that extends a tracked regional resource. */
  delete: (
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    options?: TargetsDeleteOptionalParams,
  ) => Promise<void>;
  /** Create or update a Target resource that extends a tracked regional resource. */
  createOrUpdate: (
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    resource: Target,
    options?: TargetsCreateOrUpdateOptionalParams,
  ) => Promise<Target>;
  /** Get a Target resource that extends a tracked regional resource. */
  get: (
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    options?: TargetsGetOptionalParams,
  ) => Promise<Target>;
}

function _getTargets(context: ChaosManagementContext) {
  return {
    list: (
      resourceGroupName: string,
      parentProviderNamespace: string,
      parentResourceType: string,
      parentResourceName: string,
      options?: TargetsListOptionalParams,
    ) =>
      targetsList(
        context,
        resourceGroupName,
        parentProviderNamespace,
        parentResourceType,
        parentResourceName,
        options,
      ),
    delete: (
      resourceGroupName: string,
      parentProviderNamespace: string,
      parentResourceType: string,
      parentResourceName: string,
      targetName: string,
      options?: TargetsDeleteOptionalParams,
    ) =>
      targetsDelete(
        context,
        resourceGroupName,
        parentProviderNamespace,
        parentResourceType,
        parentResourceName,
        targetName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      parentProviderNamespace: string,
      parentResourceType: string,
      parentResourceName: string,
      targetName: string,
      resource: Target,
      options?: TargetsCreateOrUpdateOptionalParams,
    ) =>
      targetsCreateOrUpdate(
        context,
        resourceGroupName,
        parentProviderNamespace,
        parentResourceType,
        parentResourceName,
        targetName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      parentProviderNamespace: string,
      parentResourceType: string,
      parentResourceName: string,
      targetName: string,
      options?: TargetsGetOptionalParams,
    ) =>
      targetsGet(
        context,
        resourceGroupName,
        parentProviderNamespace,
        parentResourceType,
        parentResourceName,
        targetName,
        options,
      ),
  };
}

export function _getTargetsOperations(
  context: ChaosManagementContext,
): TargetsOperations {
  return {
    ..._getTargets(context),
  };
}
