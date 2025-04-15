// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createFabric, FabricContext, FabricClientOptionalParams } from "./api/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import {
  FabricCapacitiesOperations,
  _getFabricCapacitiesOperations,
} from "./classic/fabricCapacities/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { FabricClientOptionalParams } from "./api/fabricContext.js";

export class FabricClient {
  private _client: FabricContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: FabricClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createFabric(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.operations = _getOperationsOperations(this._client);
    this.fabricCapacities = _getFabricCapacitiesOperations(this._client);
  }

  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for fabricCapacities */
  public readonly fabricCapacities: FabricCapacitiesOperations;
}
