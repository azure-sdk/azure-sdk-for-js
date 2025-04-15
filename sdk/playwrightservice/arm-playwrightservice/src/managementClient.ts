// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createManagement,
  ManagementContext,
  ManagementClientOptionalParams,
} from "./api/index.js";
import {
  PlaywrightWorkspacesOperations,
  _getPlaywrightWorkspacesOperations,
} from "./classic/playwrightWorkspaces/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { ManagementClientOptionalParams } from "./api/managementContext.js";

export class ManagementClient {
  private _client: ManagementContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Playwright service provides access to Playwright workspace resource and it's operations. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: ManagementClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createManagement(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.playwrightWorkspaces = _getPlaywrightWorkspacesOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for playwrightWorkspaces */
  public readonly playwrightWorkspaces: PlaywrightWorkspacesOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
