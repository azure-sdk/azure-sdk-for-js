// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext } from "../../api/workloadsContext.js";
import {
  providerInstancesListByMonitor,
  providerInstancesDelete,
  providerInstancesCreate,
  providerInstancesGet,
} from "../../api/providerInstances/index.js";
import { ProviderInstance } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ProviderInstancesListByMonitorOptionalParams,
  ProviderInstancesDeleteOptionalParams,
  ProviderInstancesCreateOptionalParams,
  ProviderInstancesGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a ProviderInstances operations. */
export interface ProviderInstancesOperations {
  /** Gets a list of provider instances in the specified SAP monitor. The operations returns various properties of each provider instances. */
  listByMonitor: (
    resourceGroupName: string,
    monitorName: string,
    options?: ProviderInstancesListByMonitorOptionalParams,
  ) => PagedAsyncIterableIterator<ProviderInstance>;
  /** Deletes a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. */
  delete: (
    resourceGroupName: string,
    monitorName: string,
    providerInstanceName: string,
    options?: ProviderInstancesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. */
  create: (
    resourceGroupName: string,
    monitorName: string,
    providerInstanceName: string,
    resource: ProviderInstance,
    options?: ProviderInstancesCreateOptionalParams,
  ) => PollerLike<OperationState<ProviderInstance>, ProviderInstance>;
  /** Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name. */
  get: (
    resourceGroupName: string,
    monitorName: string,
    providerInstanceName: string,
    options?: ProviderInstancesGetOptionalParams,
  ) => Promise<ProviderInstance>;
}

function _getProviderInstances(context: WorkloadsContext) {
  return {
    listByMonitor: (
      resourceGroupName: string,
      monitorName: string,
      options?: ProviderInstancesListByMonitorOptionalParams,
    ) => providerInstancesListByMonitor(context, resourceGroupName, monitorName, options),
    delete: (
      resourceGroupName: string,
      monitorName: string,
      providerInstanceName: string,
      options?: ProviderInstancesDeleteOptionalParams,
    ) =>
      providerInstancesDelete(
        context,
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
        resourceGroupName,
        monitorName,
        providerInstanceName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      monitorName: string,
      providerInstanceName: string,
      options?: ProviderInstancesGetOptionalParams,
    ) =>
      providerInstancesGet(context, resourceGroupName, monitorName, providerInstanceName, options),
  };
}

export function _getProviderInstancesOperations(
  context: WorkloadsContext,
): ProviderInstancesOperations {
  return {
    ..._getProviderInstances(context),
  };
}
