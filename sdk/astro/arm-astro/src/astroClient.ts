// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getOrganizationsOperations,
  OrganizationsOperations,
} from "./classic/organizations/index.js";
import {
  createAstro,
  AstroContext,
  AstroClientOptionalParams,
} from "./api/index.js";

export { AstroClientOptionalParams } from "./api/astroContext.js";

export class AstroClient {
  private _client: AstroContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: AstroClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createAstro(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.operations = getOperationsOperations(this._client);
    this.organizations = getOrganizationsOperations(
      this._client,
      subscriptionId,
    );
  }

  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for Organizations */
  public readonly organizations: OrganizationsOperations;
}
