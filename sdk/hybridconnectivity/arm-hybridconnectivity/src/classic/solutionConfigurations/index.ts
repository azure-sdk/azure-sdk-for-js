// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridConnectivityManagementAPIContext } from "../../api/hybridConnectivityManagementAPIContext.js";
import {
  SolutionConfigurationsGetOptionalParams,
  SolutionConfigurationsCreateOrUpdateOptionalParams,
  SolutionConfigurationsUpdateOptionalParams,
  SolutionConfigurationsDeleteOptionalParams,
  SolutionConfigurationsListOptionalParams,
  SolutionConfigurationsSyncNowOptionalParams,
} from "../../api/options.js";
import {
  solutionConfigurationsGet,
  solutionConfigurationsCreateOrUpdate,
  solutionConfigurationsUpdate,
  solutionConfigurationsDelete,
  solutionConfigurationsList,
  solutionConfigurationsSyncNow,
} from "../../api/solutionConfigurations/index.js";
import { SolutionConfiguration, OperationStatusResult } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a SolutionConfigurations operations. */
export interface SolutionConfigurationsOperations {
  /** Get a SolutionConfiguration */
  get: (
    resourceUri: string,
    solutionConfiguration: string,
    options?: SolutionConfigurationsGetOptionalParams,
  ) => Promise<SolutionConfiguration>;
  /** Create a SolutionConfiguration */
  createOrUpdate: (
    resourceUri: string,
    solutionConfiguration: string,
    resource: SolutionConfiguration,
    options?: SolutionConfigurationsCreateOrUpdateOptionalParams,
  ) => Promise<SolutionConfiguration>;
  /** Update a SolutionConfiguration */
  update: (
    resourceUri: string,
    solutionConfiguration: string,
    properties: SolutionConfiguration,
    options?: SolutionConfigurationsUpdateOptionalParams,
  ) => Promise<SolutionConfiguration>;
  /** Delete a SolutionConfiguration */
  delete: (
    resourceUri: string,
    solutionConfiguration: string,
    options?: SolutionConfigurationsDeleteOptionalParams,
  ) => Promise<void>;
  /** List SolutionConfiguration resources by parent */
  list: (
    resourceUri: string,
    options?: SolutionConfigurationsListOptionalParams,
  ) => PagedAsyncIterableIterator<SolutionConfiguration>;
  /** Trigger immediate sync with source cloud */
  syncNow: (
    resourceUri: string,
    solutionConfiguration: string,
    options?: SolutionConfigurationsSyncNowOptionalParams,
  ) => PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}

export function getSolutionConfigurations(context: HybridConnectivityManagementAPIContext) {
  return {
    get: (
      resourceUri: string,
      solutionConfiguration: string,
      options?: SolutionConfigurationsGetOptionalParams,
    ) => solutionConfigurationsGet(context, resourceUri, solutionConfiguration, options),
    createOrUpdate: (
      resourceUri: string,
      solutionConfiguration: string,
      resource: SolutionConfiguration,
      options?: SolutionConfigurationsCreateOrUpdateOptionalParams,
    ) =>
      solutionConfigurationsCreateOrUpdate(
        context,
        resourceUri,
        solutionConfiguration,
        resource,
        options,
      ),
    update: (
      resourceUri: string,
      solutionConfiguration: string,
      properties: SolutionConfiguration,
      options?: SolutionConfigurationsUpdateOptionalParams,
    ) =>
      solutionConfigurationsUpdate(
        context,
        resourceUri,
        solutionConfiguration,
        properties,
        options,
      ),
    delete: (
      resourceUri: string,
      solutionConfiguration: string,
      options?: SolutionConfigurationsDeleteOptionalParams,
    ) => solutionConfigurationsDelete(context, resourceUri, solutionConfiguration, options),
    list: (resourceUri: string, options?: SolutionConfigurationsListOptionalParams) =>
      solutionConfigurationsList(context, resourceUri, options),
    syncNow: (
      resourceUri: string,
      solutionConfiguration: string,
      options?: SolutionConfigurationsSyncNowOptionalParams,
    ) => solutionConfigurationsSyncNow(context, resourceUri, solutionConfiguration, options),
  };
}

export function getSolutionConfigurationsOperations(
  context: HybridConnectivityManagementAPIContext,
): SolutionConfigurationsOperations {
  return {
    ...getSolutionConfigurations(context),
  };
}
