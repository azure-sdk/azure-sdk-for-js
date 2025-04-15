// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext } from "../../api/scVmmContext.js";
import {
  VirtualMachineInstance,
  VirtualMachineInstanceUpdate,
  StopVirtualMachineOptions,
  VirtualMachineCreateCheckpoint,
  VirtualMachineDeleteCheckpoint,
  VirtualMachineRestoreCheckpoint,
} from "../../models/models.js";
import {
  VirtualMachineInstancesRestoreCheckpointOptionalParams,
  VirtualMachineInstancesDeleteCheckpointOptionalParams,
  VirtualMachineInstancesCreateCheckpointOptionalParams,
  VirtualMachineInstancesRestartOptionalParams,
  VirtualMachineInstancesStartOptionalParams,
  VirtualMachineInstancesStopOptionalParams,
  VirtualMachineInstancesListOptionalParams,
  VirtualMachineInstancesDeleteOptionalParams,
  VirtualMachineInstancesUpdateOptionalParams,
  VirtualMachineInstancesCreateOrUpdateOptionalParams,
  VirtualMachineInstancesGetOptionalParams,
} from "../../api/virtualMachineInstances/options.js";
import {
  restoreCheckpoint,
  deleteCheckpoint,
  createCheckpoint,
  restart,
  start,
  stop,
  list,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/virtualMachineInstances/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a VirtualMachineInstances operations. */
export interface VirtualMachineInstancesOperations {
  /** Restores to a checkpoint in virtual machine instance. */
  restoreCheckpoint: (
    resourceUri: string,
    body: VirtualMachineRestoreCheckpoint,
    options?: VirtualMachineInstancesRestoreCheckpointOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Deletes a checkpoint in virtual machine instance. */
  deleteCheckpoint: (
    resourceUri: string,
    body: VirtualMachineDeleteCheckpoint,
    options?: VirtualMachineInstancesDeleteCheckpointOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Creates a checkpoint in virtual machine instance. */
  createCheckpoint: (
    resourceUri: string,
    body: VirtualMachineCreateCheckpoint,
    options?: VirtualMachineInstancesCreateCheckpointOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** The operation to restart a virtual machine instance. */
  restart: (
    resourceUri: string,
    options?: VirtualMachineInstancesRestartOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** The operation to start a virtual machine instance. */
  start: (
    resourceUri: string,
    options?: VirtualMachineInstancesStartOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** The operation to power off (stop) a virtual machine instance. */
  stop: (
    resourceUri: string,
    body: {
      body?: StopVirtualMachineOptions;
    },
    options?: VirtualMachineInstancesStopOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Lists all of the virtual machine instances within the specified parent resource. */
  list: (
    resourceUri: string,
    options?: VirtualMachineInstancesListOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualMachineInstance>;
  /** The operation to delete a virtual machine instance. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceUri: string,
    options?: VirtualMachineInstancesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** The operation to update a virtual machine instance. */
  update: (
    resourceUri: string,
    properties: VirtualMachineInstanceUpdate,
    options?: VirtualMachineInstancesUpdateOptionalParams,
  ) => PollerLike<OperationState<VirtualMachineInstance>, VirtualMachineInstance>;
  /** The operation to create or update a virtual machine instance. Please note some properties can be set only during virtual machine instance creation. */
  createOrUpdate: (
    resourceUri: string,
    resource: VirtualMachineInstance,
    options?: VirtualMachineInstancesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<VirtualMachineInstance>, VirtualMachineInstance>;
  /** Retrieves information about a virtual machine instance. */
  get: (
    resourceUri: string,
    options?: VirtualMachineInstancesGetOptionalParams,
  ) => Promise<VirtualMachineInstance>;
}

function _getVirtualMachineInstances(context: ScVmmContext) {
  return {
    restoreCheckpoint: (
      resourceUri: string,
      body: VirtualMachineRestoreCheckpoint,
      options?: VirtualMachineInstancesRestoreCheckpointOptionalParams,
    ) => restoreCheckpoint(context, resourceUri, body, options),
    deleteCheckpoint: (
      resourceUri: string,
      body: VirtualMachineDeleteCheckpoint,
      options?: VirtualMachineInstancesDeleteCheckpointOptionalParams,
    ) => deleteCheckpoint(context, resourceUri, body, options),
    createCheckpoint: (
      resourceUri: string,
      body: VirtualMachineCreateCheckpoint,
      options?: VirtualMachineInstancesCreateCheckpointOptionalParams,
    ) => createCheckpoint(context, resourceUri, body, options),
    restart: (resourceUri: string, options?: VirtualMachineInstancesRestartOptionalParams) =>
      restart(context, resourceUri, options),
    start: (resourceUri: string, options?: VirtualMachineInstancesStartOptionalParams) =>
      start(context, resourceUri, options),
    stop: (
      resourceUri: string,
      body: {
        body?: StopVirtualMachineOptions;
      },
      options?: VirtualMachineInstancesStopOptionalParams,
    ) => stop(context, resourceUri, body, options),
    list: (resourceUri: string, options?: VirtualMachineInstancesListOptionalParams) =>
      list(context, resourceUri, options),
    delete: (resourceUri: string, options?: VirtualMachineInstancesDeleteOptionalParams) =>
      $delete(context, resourceUri, options),
    update: (
      resourceUri: string,
      properties: VirtualMachineInstanceUpdate,
      options?: VirtualMachineInstancesUpdateOptionalParams,
    ) => update(context, resourceUri, properties, options),
    createOrUpdate: (
      resourceUri: string,
      resource: VirtualMachineInstance,
      options?: VirtualMachineInstancesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceUri, resource, options),
    get: (resourceUri: string, options?: VirtualMachineInstancesGetOptionalParams) =>
      get(context, resourceUri, options),
  };
}

export function _getVirtualMachineInstancesOperations(
  context: ScVmmContext,
): VirtualMachineInstancesOperations {
  return {
    ..._getVirtualMachineInstances(context),
  };
}
