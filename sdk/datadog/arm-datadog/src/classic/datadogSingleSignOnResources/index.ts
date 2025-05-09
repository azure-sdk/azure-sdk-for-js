// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogContext } from "../../api/datadogContext.js";
import { DatadogSingleSignOnResource } from "../../models/models.js";
import {
  DatadogSingleSignOnResourcesListOptionalParams,
  DatadogSingleSignOnResourcesCreateOrUpdateOptionalParams,
  DatadogSingleSignOnResourcesGetOptionalParams,
} from "../../api/datadogSingleSignOnResources/options.js";
import { list, createOrUpdate, get } from "../../api/datadogSingleSignOnResources/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a DatadogSingleSignOnResources operations. */
export interface DatadogSingleSignOnResourcesOperations {
  /** List the single sign-on configurations for a given monitor resource. */
  list: (
    resourceGroupName: string,
    monitorName: string,
    options?: DatadogSingleSignOnResourcesListOptionalParams,
  ) => PagedAsyncIterableIterator<DatadogSingleSignOnResource>;
  /** Configures single-sign-on for this resource. */
  createOrUpdate: (
    resourceGroupName: string,
    monitorName: string,
    configurationName: string,
    body: DatadogSingleSignOnResource,
    options?: DatadogSingleSignOnResourcesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<DatadogSingleSignOnResource>, DatadogSingleSignOnResource>;
  /** Gets the datadog single sign-on resource for the given Monitor. */
  get: (
    resourceGroupName: string,
    monitorName: string,
    configurationName: string,
    options?: DatadogSingleSignOnResourcesGetOptionalParams,
  ) => Promise<DatadogSingleSignOnResource>;
}

function _getDatadogSingleSignOnResources(context: DatadogContext) {
  return {
    list: (
      resourceGroupName: string,
      monitorName: string,
      options?: DatadogSingleSignOnResourcesListOptionalParams,
    ) => list(context, resourceGroupName, monitorName, options),
    createOrUpdate: (
      resourceGroupName: string,
      monitorName: string,
      configurationName: string,
      body: DatadogSingleSignOnResource,
      options?: DatadogSingleSignOnResourcesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, monitorName, configurationName, body, options),
    get: (
      resourceGroupName: string,
      monitorName: string,
      configurationName: string,
      options?: DatadogSingleSignOnResourcesGetOptionalParams,
    ) => get(context, resourceGroupName, monitorName, configurationName, options),
  };
}

export function _getDatadogSingleSignOnResourcesOperations(
  context: DatadogContext,
): DatadogSingleSignOnResourcesOperations {
  return {
    ..._getDatadogSingleSignOnResources(context),
  };
}
