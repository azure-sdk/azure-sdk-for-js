// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createVerifiedId,
  VerifiedIdContext,
  VerifiedIdClientOptionalParams,
} from "./api/index.js";
import { AuthoritiesOperations, _getAuthoritiesOperations } from "./classic/authorities/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

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
      : `azsdk-js-client`;
    this._client = createVerifiedId(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.authorities = _getAuthoritiesOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for authorities */
  public readonly authorities: AuthoritiesOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
