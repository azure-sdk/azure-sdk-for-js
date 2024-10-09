// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getNetworkFunctionsOperations,
  NetworkFunctionsOperations,
} from "./classic/networkFunctions/index.js";
import {
  createMobilePacketCore,
  MobilePacketCoreContext,
  MobilePacketCoreClientOptionalParams,
} from "./api/index.js";

export { MobilePacketCoreClientOptionalParams } from "./api/mobilePacketCoreContext.js";

export class MobilePacketCoreClient {
  private _client: MobilePacketCoreContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Mobile Packet Core Network Function Management API */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: MobilePacketCoreClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createMobilePacketCore(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.operations = getOperationsOperations(this._client);
    this.networkFunctions = getNetworkFunctionsOperations(
      this._client,
      subscriptionId,
    );
  }

  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for NetworkFunctions */
  public readonly networkFunctions: NetworkFunctionsOperations;
}
