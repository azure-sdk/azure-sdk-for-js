// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { create, Context, ClientOptionalParams } from "./api/index.js";
import {
  WorkloadNetworksClientOperations,
  _getWorkloadNetworksClientOperations,
} from "./classic/workloadNetworksClient/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { ClientOptionalParams } from "./api/Context.js";

export class Client {
  private _client: Context;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: ClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = create(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.workloadNetworksClient = _getWorkloadNetworksClientOperations(this._client);
  }

  /** The operation groups for workloadNetworksClient */
  public readonly workloadNetworksClient: WorkloadNetworksClientOperations;
}
