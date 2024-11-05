// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import { ProviderInstance } from "../../models/models.js";
import {
  providerInstancesGet,
  providerInstancesCreate,
  providerInstancesDelete,
  providerInstancesListByMonitor,
} from "../../api/providerInstances/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ProviderInstancesGetOptionalParams,
  ProviderInstancesCreateOptionalParams,
  ProviderInstancesDeleteOptionalParams,
  ProviderInstancesListByMonitorOptionalParams,
} from "../../models/options.js";

/** Interface representing a ProviderInstances operations. */
export interface ProviderInstancesOperations {
  /** Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. */
  get: (
    resourceGroupName: string,
    monitorName: string,
    providerInstanceName: string,
    options?: ProviderInstancesGetOptionalParams,
  ) => Promise<ProviderInstance>;
  /** Creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. */
  create: (
    resourceGroupName: string,
    monitorName: string,
    providerInstanceName: string,
    resource: ProviderInstance,
    options?: ProviderInstancesCreateOptionalParams,
  ) => PollerLike<OperationState<ProviderInstance>, ProviderInstance>;
  /** Deletes a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. */
  delete: (
    resourceGroupName: string,
    monitorName: string,
    providerInstanceName: string,
    options?: ProviderInstancesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Gets a list of provider instances in the specified SAP monitor. The operations returns various properties of each provider instances. */
  listByMonitor: (
    resourceGroupName: string,
    monitorName: string,
    options?: ProviderInstancesListByMonitorOptionalParams,
  ) => PagedAsyncIterableIterator<ProviderInstance>;
}

export function getProviderInstances(
  context: WorkloadsContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      monitorName: string,
      providerInstanceName: string,
      options?: ProviderInstancesGetOptionalParams,
    ) =>
      providerInstancesGet(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        providerInstanceName,
        options,
      ),
    create: (
      resourceGroupName: string,
      monitorName: string,
      providerInstanceName: string,
      resource: ProviderInstance,
      options?: ProviderInstancesCreateOptionalParams,
    ) =>
      providerInstancesCreate(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        providerInstanceName,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      monitorName: string,
      providerInstanceName: string,
      options?: ProviderInstancesDeleteOptionalParams,
    ) =>
      providerInstancesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        providerInstanceName,
        options,
      ),
    listByMonitor: (
      resourceGroupName: string,
      monitorName: string,
      options?: ProviderInstancesListByMonitorOptionalParams,
    ) =>
      providerInstancesListByMonitor(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        options,
      ),
  };
}

export function getProviderInstancesOperations(
  context: WorkloadsContext,
  subscriptionId: string,
): ProviderInstancesOperations {
  return {
    ...getProviderInstances(context, subscriptionId),
  };
}
