// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext } from "../../api/scVmmContext.js";
import { VirtualMachineTemplate, VirtualMachineTemplateTagsUpdate } from "../../models/models.js";
import {
  VirtualMachineTemplatesListBySubscriptionOptionalParams,
  VirtualMachineTemplatesListByResourceGroupOptionalParams,
  VirtualMachineTemplatesDeleteOptionalParams,
  VirtualMachineTemplatesUpdateOptionalParams,
  VirtualMachineTemplatesCreateOrUpdateOptionalParams,
  VirtualMachineTemplatesGetOptionalParams,
} from "../../api/virtualMachineTemplates/options.js";
import {
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/virtualMachineTemplates/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a VirtualMachineTemplates operations. */
export interface VirtualMachineTemplatesOperations {
  /** List of VirtualMachineTemplates in a subscription. */
  listBySubscription: (
    options?: VirtualMachineTemplatesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualMachineTemplate>;
  /** List of VirtualMachineTemplates in a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: VirtualMachineTemplatesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualMachineTemplate>;
  /** Deregisters the ScVmm VM Template from Azure. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates the VirtualMachineTemplate resource. */
  update: (
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    properties: VirtualMachineTemplateTagsUpdate,
    options?: VirtualMachineTemplatesUpdateOptionalParams,
  ) => PollerLike<OperationState<VirtualMachineTemplate>, VirtualMachineTemplate>;
  /** Onboards the ScVmm VM Template as an Azure VM Template resource. */
  createOrUpdate: (
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    resource: VirtualMachineTemplate,
    options?: VirtualMachineTemplatesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<VirtualMachineTemplate>, VirtualMachineTemplate>;
  /** Implements VirtualMachineTemplate GET method. */
  get: (
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesGetOptionalParams,
  ) => Promise<VirtualMachineTemplate>;
}

function _getVirtualMachineTemplates(context: ScVmmContext) {
  return {
    listBySubscription: (options?: VirtualMachineTemplatesListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: VirtualMachineTemplatesListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      virtualMachineTemplateName: string,
      options?: VirtualMachineTemplatesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, virtualMachineTemplateName, options),
    update: (
      resourceGroupName: string,
      virtualMachineTemplateName: string,
      properties: VirtualMachineTemplateTagsUpdate,
      options?: VirtualMachineTemplatesUpdateOptionalParams,
    ) => update(context, resourceGroupName, virtualMachineTemplateName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      virtualMachineTemplateName: string,
      resource: VirtualMachineTemplate,
      options?: VirtualMachineTemplatesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, virtualMachineTemplateName, resource, options),
    get: (
      resourceGroupName: string,
      virtualMachineTemplateName: string,
      options?: VirtualMachineTemplatesGetOptionalParams,
    ) => get(context, resourceGroupName, virtualMachineTemplateName, options),
  };
}

export function _getVirtualMachineTemplatesOperations(
  context: ScVmmContext,
): VirtualMachineTemplatesOperations {
  return {
    ..._getVirtualMachineTemplates(context),
  };
}
