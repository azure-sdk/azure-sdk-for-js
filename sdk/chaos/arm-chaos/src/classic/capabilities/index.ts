// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosManagementContext } from "../../api/chaosManagementContext.js";
import {
  capabilitiesGet,
  capabilitiesCreateOrUpdate,
  capabilitiesDelete,
  capabilitiesList,
} from "../../api/capabilities/index.js";
import { Capability } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  CapabilitiesGetOptionalParams,
  CapabilitiesCreateOrUpdateOptionalParams,
  CapabilitiesDeleteOptionalParams,
  CapabilitiesListOptionalParams,
} from "../../api/options.js";

/** Interface representing a Capabilities operations. */
export interface CapabilitiesOperations {
  /** Get a Capability resource that extends a Target resource. */
  get: (
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    capabilityName: string,
    options?: CapabilitiesGetOptionalParams,
  ) => Promise<Capability>;
  /** Create or update a Capability resource that extends a Target resource. */
  createOrUpdate: (
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    capabilityName: string,
    resource: Capability,
    options?: CapabilitiesCreateOrUpdateOptionalParams,
  ) => Promise<Capability>;
  /** Delete a Capability that extends a Target resource. */
  delete: (
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    capabilityName: string,
    options?: CapabilitiesDeleteOptionalParams,
  ) => Promise<void>;
  /** Get a list of Capability resources that extend a Target resource. */
  list: (
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    options?: CapabilitiesListOptionalParams,
  ) => PagedAsyncIterableIterator<Capability>;
}

export function getCapabilities(context: ChaosManagementContext, subscriptionId: string) {
  return {
    get: (
      resourceGroupName: string,
      parentProviderNamespace: string,
      parentResourceType: string,
      parentResourceName: string,
      targetName: string,
      capabilityName: string,
      options?: CapabilitiesGetOptionalParams,
    ) =>
      capabilitiesGet(
        context,
        subscriptionId,
        resourceGroupName,
        parentProviderNamespace,
        parentResourceType,
        parentResourceName,
        targetName,
        capabilityName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      parentProviderNamespace: string,
      parentResourceType: string,
      parentResourceName: string,
      targetName: string,
      capabilityName: string,
      resource: Capability,
      options?: CapabilitiesCreateOrUpdateOptionalParams,
    ) =>
      capabilitiesCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        parentProviderNamespace,
        parentResourceType,
        parentResourceName,
        targetName,
        capabilityName,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      parentProviderNamespace: string,
      parentResourceType: string,
      parentResourceName: string,
      targetName: string,
      capabilityName: string,
      options?: CapabilitiesDeleteOptionalParams,
    ) =>
      capabilitiesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        parentProviderNamespace,
        parentResourceType,
        parentResourceName,
        targetName,
        capabilityName,
        options,
      ),
    list: (
      resourceGroupName: string,
      parentProviderNamespace: string,
      parentResourceType: string,
      parentResourceName: string,
      targetName: string,
      options?: CapabilitiesListOptionalParams,
    ) =>
      capabilitiesList(
        context,
        subscriptionId,
        resourceGroupName,
        parentProviderNamespace,
        parentResourceType,
        parentResourceName,
        targetName,
        options,
      ),
  };
}

export function getCapabilitiesOperations(
  context: ChaosManagementContext,
  subscriptionId: string,
): CapabilitiesOperations {
  return {
    ...getCapabilities(context, subscriptionId),
  };
}
