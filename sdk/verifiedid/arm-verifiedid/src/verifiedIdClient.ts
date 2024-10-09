// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getAuthoritiesOperations,
  AuthoritiesOperations,
} from "./classic/authorities/index.js";
import {
  createVerifiedId,
  VerifiedIdContext,
  VerifiedIdClientOptionalParams,
} from "./api/index.js";

export { VerifiedIdClientOptionalParams } from "./api/verifiedIdContext.js";

export class VerifiedIdClient {
  private _client: VerifiedIdContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** VerifiedId Resource Provider management API. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: VerifiedIdClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createVerifiedId(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.operations = getOperationsOperations(this._client);
    this.authorities = getAuthoritiesOperations(this._client, subscriptionId);
  }

  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for Authorities */
  public readonly authorities: AuthoritiesOperations;
}
