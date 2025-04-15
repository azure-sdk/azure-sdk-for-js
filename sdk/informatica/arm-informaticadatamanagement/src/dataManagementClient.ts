// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createDataManagement,
  DataManagementContext,
  DataManagementClientOptionalParams,
} from "./api/index.js";
import {
  ServerlessRuntimesOperations,
  _getServerlessRuntimesOperations,
} from "./classic/serverlessRuntimes/index.js";
import {
  OrganizationsOperations,
  _getOrganizationsOperations,
} from "./classic/organizations/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { DataManagementClientOptionalParams } from "./api/dataManagementContext.js";

export class DataManagementClient {
  private _client: DataManagementContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: DataManagementClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createDataManagement(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.serverlessRuntimes = _getServerlessRuntimesOperations(this._client);
    this.organizations = _getOrganizationsOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for serverlessRuntimes */
  public readonly serverlessRuntimes: ServerlessRuntimesOperations;
  /** The operation groups for organizations */
  public readonly organizations: OrganizationsOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
