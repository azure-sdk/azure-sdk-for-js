// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosManagementContext } from "../../api/chaosManagementContext.js";
import {
  TargetsGetOptionalParams,
  TargetsCreateOrUpdateOptionalParams,
  TargetsDeleteOptionalParams,
  TargetsListOptionalParams,
} from "../../api/options.js";
import {
  targetsGet,
  targetsCreateOrUpdate,
  targetsDelete,
  targetsList,
} from "../../api/targets/index.js";
import { Target } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Targets operations. */
export interface TargetsOperations {
  /** Get a Target resource that extends a tracked regional resource. */
  get: (
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    options?: TargetsGetOptionalParams,
  ) => Promise<Target>;
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
  /** Delete a Target resource that extends a tracked regional resource. */
  delete: (
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    options?: TargetsDeleteOptionalParams,
  ) => Promise<void>;
  /** Get a list of Target resources that extend a tracked regional resource. */
  list: (
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    options?: TargetsListOptionalParams,
  ) => PagedAsyncIterableIterator<Target>;
}

export function getTargets(context: ChaosManagementContext, subscriptionId: string) {
  return {
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
        subscriptionId,
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
        subscriptionId,
        resourceGroupName,
        parentProviderNamespace,
        parentResourceType,
        parentResourceName,
        targetName,
        resource,
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
        subscriptionId,
        resourceGroupName,
        parentProviderNamespace,
        parentResourceType,
        parentResourceName,
        targetName,
        options,
      ),
    list: (
      resourceGroupName: string,
      parentProviderNamespace: string,
      parentResourceType: string,
      parentResourceName: string,
      options?: TargetsListOptionalParams,
    ) =>
      targetsList(
        context,
        subscriptionId,
        resourceGroupName,
        parentProviderNamespace,
        parentResourceType,
        parentResourceName,
        options,
      ),
  };
}

export function getTargetsOperations(
  context: ChaosManagementContext,
  subscriptionId: string,
): TargetsOperations {
  return {
    ...getTargets(context, subscriptionId),
  };
}
