// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosManagementContext } from "../../api/chaosManagementContext.js";
import {
  capabilitiesList,
  capabilitiesDelete,
  capabilitiesCreateOrUpdate,
  capabilitiesGet,
} from "../../api/capabilities/index.js";
import { Capability } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  CapabilitiesListOptionalParams,
  CapabilitiesDeleteOptionalParams,
  CapabilitiesCreateOrUpdateOptionalParams,
  CapabilitiesGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a Capabilities operations. */
export interface CapabilitiesOperations {
  /** Get a list of Capability resources that extend a Target resource. */
  list: (
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    options?: CapabilitiesListOptionalParams,
  ) => PagedAsyncIterableIterator<Capability>;
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
}

function _getCapabilities(context: ChaosManagementContext) {
  return {
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
        resourceGroupName,
        parentProviderNamespace,
        parentResourceType,
        parentResourceName,
        targetName,
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
        resourceGroupName,
        parentProviderNamespace,
        parentResourceType,
        parentResourceName,
        targetName,
        capabilityName,
        resource,
        options,
      ),
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
        resourceGroupName,
        parentProviderNamespace,
        parentResourceType,
        parentResourceName,
        targetName,
        capabilityName,
        options,
      ),
  };
}

export function _getCapabilitiesOperations(
  context: ChaosManagementContext,
): CapabilitiesOperations {
  return {
    ..._getCapabilities(context),
  };
}
