// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createMigrate, MigrateContext, MigrateClientOptionalParams } from "./api/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { MigrateClientOptionalParams } from "./api/migrateContext.js";

export class MigrateClient {
  private _client: MigrateContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure Migrate Resource Provider management API. */
  constructor(credential: TokenCredential, options: MigrateClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createMigrate(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
