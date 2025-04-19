// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createWorkloads, WorkloadsContext, WorkloadsClientOptionalParams } from "./api/index.js";
import {
  AlertTemplatesOperations,
  _getAlertTemplatesOperations,
} from "./classic/alertTemplates/index.js";
import { AlertsOperations, _getAlertsOperations } from "./classic/alerts/index.js";
import {
  SapLandscapeMonitorOperations,
  _getSapLandscapeMonitorOperations,
} from "./classic/sapLandscapeMonitor/index.js";
import {
  ProviderInstancesOperations,
  _getProviderInstancesOperations,
} from "./classic/providerInstances/index.js";
import { MonitorsOperations, _getMonitorsOperations } from "./classic/monitors/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

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
      : `azsdk-js-client`;
    this._client = createWorkloads(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.alertTemplates = _getAlertTemplatesOperations(this._client);
    this.alerts = _getAlertsOperations(this._client);
    this.sapLandscapeMonitor = _getSapLandscapeMonitorOperations(this._client);
    this.providerInstances = _getProviderInstancesOperations(this._client);
    this.monitors = _getMonitorsOperations(this._client);
  }

  /** The operation groups for alertTemplates */
  public readonly alertTemplates: AlertTemplatesOperations;
  /** The operation groups for alerts */
  public readonly alerts: AlertsOperations;
  /** The operation groups for sapLandscapeMonitor */
  public readonly sapLandscapeMonitor: SapLandscapeMonitorOperations;
  /** The operation groups for providerInstances */
  public readonly providerInstances: ProviderInstancesOperations;
  /** The operation groups for monitors */
  public readonly monitors: MonitorsOperations;
}
