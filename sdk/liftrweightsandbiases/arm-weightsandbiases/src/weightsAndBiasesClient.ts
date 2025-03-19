// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { _getInstancesOperations, InstancesOperations } from "./classic/instances/index.js";
import { _getOperationsOperations, OperationsOperations } from "./classic/operations/index.js";
import {
  createWeightsAndBiases,
  WeightsAndBiasesContext,
  WeightsAndBiasesClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { WeightsAndBiasesClientOptionalParams } from "./api/weightsAndBiasesContext.js";

export class WeightsAndBiasesClient {
  private _client: WeightsAndBiasesContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: WeightsAndBiasesClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createWeightsAndBiases(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.instances = _getInstancesOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for instances */
  public readonly instances: InstancesOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
