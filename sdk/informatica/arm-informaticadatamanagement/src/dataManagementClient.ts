// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getOrganizationsOperations,
  OrganizationsOperations,
} from "./classic/organizations/index.js";
import {
  getServerlessRuntimesOperations,
  ServerlessRuntimesOperations,
} from "./classic/serverlessRuntimes/index.js";
import {
  createDataManagement,
  DataManagementContext,
  DataManagementClientOptionalParams,
} from "./api/index.js";
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
    this._client = createDataManagement(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.operations = getOperationsOperations(this._client);
    this.organizations = getOrganizationsOperations(
      this._client,
      subscriptionId,
    );
    this.serverlessRuntimes = getServerlessRuntimesOperations(
      this._client,
      subscriptionId,
    );
  }

  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for Organizations */
  public readonly organizations: OrganizationsOperations;
  /** The operation groups for ServerlessRuntimes */
  public readonly serverlessRuntimes: ServerlessRuntimesOperations;
}
