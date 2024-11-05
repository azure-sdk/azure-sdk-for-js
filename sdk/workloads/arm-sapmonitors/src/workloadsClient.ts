// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getMonitorsOperations,
  MonitorsOperations,
} from "./classic/monitors/index.js";
import {
  getProviderInstancesOperations,
  ProviderInstancesOperations,
} from "./classic/providerInstances/index.js";
import {
  getSapLandscapeMonitorOperations,
  SapLandscapeMonitorOperations,
} from "./classic/sapLandscapeMonitor/index.js";
import {
  createWorkloads,
  WorkloadsContext,
  WorkloadsClientOptionalParams,
} from "./api/index.js";

export { WorkloadsClientOptionalParams } from "./api/workloadsContext.js";

export class WorkloadsClient {
  private _client: WorkloadsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** The workload SAP monitor Client. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: WorkloadsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createWorkloads(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.monitors = getMonitorsOperations(this._client, subscriptionId);
    this.providerInstances = getProviderInstancesOperations(
      this._client,
      subscriptionId,
    );
    this.sapLandscapeMonitor = getSapLandscapeMonitorOperations(
      this._client,
      subscriptionId,
    );
  }

  /** The operation groups for Monitors */
  public readonly monitors: MonitorsOperations;
  /** The operation groups for ProviderInstances */
  public readonly providerInstances: ProviderInstancesOperations;
  /** The operation groups for SapLandscapeMonitor */
  public readonly sapLandscapeMonitor: SapLandscapeMonitorOperations;
}
