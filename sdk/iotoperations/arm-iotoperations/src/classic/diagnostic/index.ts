// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsContext } from "../../api/ioTOperationsContext.js";
import { DiagnosticResource } from "../../models/diagnostics/models.js";
import {
  DiagnosticListByResourceGroupOptionalParams,
  DiagnosticDeleteOptionalParams,
  DiagnosticCreateOrUpdateOptionalParams,
  DiagnosticGetOptionalParams,
} from "../../api/diagnostic/options.js";
import {
  listByResourceGroup,
  $delete,
  createOrUpdate,
  get,
} from "../../api/diagnostic/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Diagnostic operations. */
export interface DiagnosticOperations {
  /** List DiagnosticResource resources by InstanceResource */
  listByResourceGroup: (
    resourceGroupName: string,
    instanceName: string,
    options?: DiagnosticListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<DiagnosticResource>;
  /** Delete a DiagnosticResource */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    instanceName: string,
    diagnosticName: string,
    options?: DiagnosticDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a DiagnosticResource */
  createOrUpdate: (
    resourceGroupName: string,
    instanceName: string,
    diagnosticName: string,
    resource: DiagnosticResource,
    options?: DiagnosticCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<DiagnosticResource>, DiagnosticResource>;
  /** Get a DiagnosticResource */
  get: (
    resourceGroupName: string,
    instanceName: string,
    diagnosticName: string,
    options?: DiagnosticGetOptionalParams,
  ) => Promise<DiagnosticResource>;
}

function _getDiagnostic(context: IoTOperationsContext) {
  return {
    listByResourceGroup: (
      resourceGroupName: string,
      instanceName: string,
      options?: DiagnosticListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, instanceName, options),
    delete: (
      resourceGroupName: string,
      instanceName: string,
      diagnosticName: string,
      options?: DiagnosticDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, instanceName, diagnosticName, options),
    createOrUpdate: (
      resourceGroupName: string,
      instanceName: string,
      diagnosticName: string,
      resource: DiagnosticResource,
      options?: DiagnosticCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(context, resourceGroupName, instanceName, diagnosticName, resource, options),
    get: (
      resourceGroupName: string,
      instanceName: string,
      diagnosticName: string,
      options?: DiagnosticGetOptionalParams,
    ) => get(context, resourceGroupName, instanceName, diagnosticName, options),
  };
}

export function _getDiagnosticOperations(context: IoTOperationsContext): DiagnosticOperations {
  return {
    ..._getDiagnostic(context),
  };
}
