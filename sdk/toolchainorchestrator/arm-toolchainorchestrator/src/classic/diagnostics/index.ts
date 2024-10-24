// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ToolchainOrchestratorContext } from "../../api/toolchainOrchestratorContext.js";
import { Diagnostic, DiagnosticTagsUpdate } from "../../models/models.js";
import {
  diagnosticsGet,
  diagnosticsCreateOrUpdate,
  diagnosticsUpdate,
  diagnosticsDelete,
  diagnosticsListByResourceGroup,
  diagnosticsListBySubscription,
} from "../../api/diagnostics/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  DiagnosticsGetOptionalParams,
  DiagnosticsCreateOrUpdateOptionalParams,
  DiagnosticsUpdateOptionalParams,
  DiagnosticsDeleteOptionalParams,
  DiagnosticsListByResourceGroupOptionalParams,
  DiagnosticsListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a Diagnostics operations. */
export interface DiagnosticsOperations {
  /** Returns details of specified Diagnostic resource. */
  get: (
    resourceGroupName: string,
    diagnosticName: string,
    options?: DiagnosticsGetOptionalParams,
  ) => Promise<Diagnostic>;
  /** Creates new or updates existing Diagnostic resource. */
  createOrUpdate: (
    resourceGroupName: string,
    diagnosticName: string,
    resource: Diagnostic,
    options?: DiagnosticsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Diagnostic>, Diagnostic>;
  /** Updates existing Diagnostic resource. */
  update: (
    resourceGroupName: string,
    diagnosticName: string,
    properties: DiagnosticTagsUpdate,
    options?: DiagnosticsUpdateOptionalParams,
  ) => PollerLike<OperationState<Diagnostic>, Diagnostic>;
  /** Deletes specified Diagnostic resource. */
  delete: (
    resourceGroupName: string,
    diagnosticName: string,
    options?: DiagnosticsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Returns a collection of Diagnostic resources within the resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: DiagnosticsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Diagnostic>;
  /** Lists Diagnostics resources within an Azure subscription. */
  listBySubscription: (
    options?: DiagnosticsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Diagnostic>;
}

export function getDiagnostics(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      diagnosticName: string,
      options?: DiagnosticsGetOptionalParams,
    ) =>
      diagnosticsGet(
        context,
        subscriptionId,
        resourceGroupName,
        diagnosticName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      diagnosticName: string,
      resource: Diagnostic,
      options?: DiagnosticsCreateOrUpdateOptionalParams,
    ) =>
      diagnosticsCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        diagnosticName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      diagnosticName: string,
      properties: DiagnosticTagsUpdate,
      options?: DiagnosticsUpdateOptionalParams,
    ) =>
      diagnosticsUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        diagnosticName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      diagnosticName: string,
      options?: DiagnosticsDeleteOptionalParams,
    ) =>
      diagnosticsDelete(
        context,
        subscriptionId,
        resourceGroupName,
        diagnosticName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: DiagnosticsListByResourceGroupOptionalParams,
    ) =>
      diagnosticsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: DiagnosticsListBySubscriptionOptionalParams,
    ) => diagnosticsListBySubscription(context, subscriptionId, options),
  };
}

export function getDiagnosticsOperations(
  context: ToolchainOrchestratorContext,
  subscriptionId: string,
): DiagnosticsOperations {
  return {
    ...getDiagnostics(context, subscriptionId),
  };
}
