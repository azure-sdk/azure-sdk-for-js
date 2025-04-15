// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createMonitor, MonitorContext, MonitorClientOptionalParams } from "./api/index.js";
import {
  PipelineGroupsOperations,
  _getPipelineGroupsOperations,
} from "./classic/pipelineGroups/index.js";
import {
  AzureMonitorWorkspacesOperations,
  _getAzureMonitorWorkspacesOperations,
} from "./classic/azureMonitorWorkspaces/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { MonitorClientOptionalParams } from "./api/monitorContext.js";

export class MonitorClient {
  private _client: MonitorContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

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
    this._client = createMonitor(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.pipelineGroups = _getPipelineGroupsOperations(this._client);
    this.azureMonitorWorkspaces = _getAzureMonitorWorkspacesOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for pipelineGroups */
  public readonly pipelineGroups: PipelineGroupsOperations;
  /** The operation groups for azureMonitorWorkspaces */
  public readonly azureMonitorWorkspaces: AzureMonitorWorkspacesOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
