// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getAzureMonitorWorkspacesOperations,
  AzureMonitorWorkspacesOperations,
} from "./classic/azureMonitorWorkspaces/index.js";
import {
  getPipelineGroupsOperations,
  PipelineGroupsOperations,
} from "./classic/pipelineGroups/index.js";
import {
  createMonitor,
  MonitorContext,
  MonitorClientOptionalParams,
} from "./api/index.js";
import { Pipeline as Pipeline_1 } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { MonitorClientOptionalParams } from "./api/monitorContext.js";

export class MonitorClient {
  private _client: MonitorContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline_1;

  /** Provides operations for working with Azure Monitor */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: MonitorClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createMonitor(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.operations = getOperationsOperations(this._client);
    this.azureMonitorWorkspaces = getAzureMonitorWorkspacesOperations(
      this._client,
      subscriptionId,
    );
    this.pipelineGroups = getPipelineGroupsOperations(
      this._client,
      subscriptionId,
    );
  }

  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for AzureMonitorWorkspaces */
  public readonly azureMonitorWorkspaces: AzureMonitorWorkspacesOperations;
  /** The operation groups for PipelineGroups */
  public readonly pipelineGroups: PipelineGroupsOperations;
}
