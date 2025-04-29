// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createFileShares,
  FileSharesContext,
  FileSharesClientOptionalParams,
} from "./api/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { FileSharesOperations, _getFileSharesOperations } from "./classic/fileShares/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { FileSharesClientOptionalParams } from "./api/fileSharesContext.js";

export class FileSharesClient {
  private _client: FileSharesContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure File Shares Resource Provider API. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: FileSharesClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createFileShares(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.operations = _getOperationsOperations(this._client);
    this.fileShares = _getFileSharesOperations(this._client);
  }

  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for fileShares */
  public readonly fileShares: FileSharesOperations;
}
