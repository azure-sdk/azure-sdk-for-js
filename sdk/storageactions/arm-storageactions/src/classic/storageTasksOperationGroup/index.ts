// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StorageActionsContext } from "../../api/storageActionsContext.js";
import { StorageTaskPreviewAction } from "../../models/models.js";
import { StorageTasksOperationGroupPreviewActionsOptionalParams } from "../../api/storageTasksOperationGroup/options.js";
import { previewActions } from "../../api/storageTasksOperationGroup/operations.js";

/** Interface representing a StorageTasksOperationGroup operations. */
export interface StorageTasksOperationGroupOperations {
  /** Runs the input conditions against input object metadata properties and designates matched objects in response. */
  previewActions: (
    location: string,
    parameters: StorageTaskPreviewAction,
    options?: StorageTasksOperationGroupPreviewActionsOptionalParams,
  ) => Promise<StorageTaskPreviewAction>;
}

function _getStorageTasksOperationGroup(context: StorageActionsContext) {
  return {
    previewActions: (
      location: string,
      parameters: StorageTaskPreviewAction,
      options?: StorageTasksOperationGroupPreviewActionsOptionalParams,
    ) => previewActions(context, location, parameters, options),
  };
}

export function _getStorageTasksOperationGroupOperations(
  context: StorageActionsContext,
): StorageTasksOperationGroupOperations {
  return {
    ..._getStorageTasksOperationGroup(context),
  };
}
