// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  VirtualMachineTemplatesGetOptionalParams,
  VirtualMachineTemplatesCreateOrUpdateOptionalParams,
  VirtualMachineTemplatesUpdateOptionalParams,
  VirtualMachineTemplatesDeleteOptionalParams,
  VirtualMachineTemplatesListByResourceGroupOptionalParams,
  VirtualMachineTemplatesListBySubscriptionOptionalParams,
} from "../../api/options.js";
import { ScVmmContext } from "../../api/scVmmContext.js";
import {
  virtualMachineTemplatesGet,
  virtualMachineTemplatesCreateOrUpdate,
  virtualMachineTemplatesUpdate,
  virtualMachineTemplatesDelete,
  virtualMachineTemplatesListByResourceGroup,
  virtualMachineTemplatesListBySubscription,
} from "../../api/virtualMachineTemplates/index.js";
import {
  VirtualMachineTemplate,
  VirtualMachineTemplateTagsUpdate,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a VirtualMachineTemplates operations. */
export interface VirtualMachineTemplatesOperations {
  /** Implements VirtualMachineTemplate GET method. */
  get: (
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesGetOptionalParams,
  ) => Promise<VirtualMachineTemplate>;
  /** Onboards the ScVmm VM Template as an Azure VM Template resource. */
  createOrUpdate: (
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    resource: VirtualMachineTemplate,
    options?: VirtualMachineTemplatesCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<VirtualMachineTemplate>,
    VirtualMachineTemplate
  >;
  /** Updates the VirtualMachineTemplate resource. */
  update: (
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    properties: VirtualMachineTemplateTagsUpdate,
    options?: VirtualMachineTemplatesUpdateOptionalParams,
  ) => PollerLike<
    OperationState<VirtualMachineTemplate>,
    VirtualMachineTemplate
  >;
  /** Deregisters the ScVmm VM Template from Azure. */
  delete: (
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List of VirtualMachineTemplates in a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: VirtualMachineTemplatesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualMachineTemplate>;
  /** List of VirtualMachineTemplates in a subscription. */
  listBySubscription: (
    options?: VirtualMachineTemplatesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualMachineTemplate>;
}

export function getVirtualMachineTemplates(
  context: ScVmmContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      virtualMachineTemplateName: string,
      options?: VirtualMachineTemplatesGetOptionalParams,
    ) =>
      virtualMachineTemplatesGet(
        context,
        subscriptionId,
        resourceGroupName,
        virtualMachineTemplateName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      virtualMachineTemplateName: string,
      resource: VirtualMachineTemplate,
      options?: VirtualMachineTemplatesCreateOrUpdateOptionalParams,
    ) =>
      virtualMachineTemplatesCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        virtualMachineTemplateName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      virtualMachineTemplateName: string,
      properties: VirtualMachineTemplateTagsUpdate,
      options?: VirtualMachineTemplatesUpdateOptionalParams,
    ) =>
      virtualMachineTemplatesUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        virtualMachineTemplateName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      virtualMachineTemplateName: string,
      options?: VirtualMachineTemplatesDeleteOptionalParams,
    ) =>
      virtualMachineTemplatesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        virtualMachineTemplateName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: VirtualMachineTemplatesListByResourceGroupOptionalParams,
    ) =>
      virtualMachineTemplatesListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: VirtualMachineTemplatesListBySubscriptionOptionalParams,
    ) =>
      virtualMachineTemplatesListBySubscription(
        context,
        subscriptionId,
        options,
      ),
  };
}

export function getVirtualMachineTemplatesOperations(
  context: ScVmmContext,
  subscriptionId: string,
): VirtualMachineTemplatesOperations {
  return {
    ...getVirtualMachineTemplates(context, subscriptionId),
  };
}
