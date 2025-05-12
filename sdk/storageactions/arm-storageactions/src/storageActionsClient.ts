// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createStorageActions,
  StorageActionsContext,
  StorageActionsClientOptionalParams,
} from "./api/index.js";
import {
  StorageTasksOperationGroupOperations,
  _getStorageTasksOperationGroupOperations,
} from "./classic/storageTasksOperationGroup/index.js";
import {
  StorageTasksOperations,
  _getStorageTasksOperations,
} from "./classic/storageTasks/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { StorageActionsClientOptionalParams } from "./api/storageActionsContext.js";

export class StorageActionsClient {
  private _client: StorageActionsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** The Azure Storage Actions Management API. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: StorageActionsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createStorageActions(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.storageTasksOperationGroup = _getStorageTasksOperationGroupOperations(this._client);
    this.storageTasks = _getStorageTasksOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for storageTasksOperationGroup */
  public readonly storageTasksOperationGroup: StorageTasksOperationGroupOperations;
  /** The operation groups for storageTasks */
  public readonly storageTasks: StorageTasksOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
