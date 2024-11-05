// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getSAPDiscoverySitesOperations,
  SAPDiscoverySitesOperations,
} from "./classic/sAPDiscoverySites/index.js";
import {
  getSAPInstancesOperations,
  SAPInstancesOperations,
} from "./classic/sAPInstances/index.js";
import {
  getServerInstancesOperations,
  ServerInstancesOperations,
} from "./classic/serverInstances/index.js";
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

  /** SAP Migration client provides access to various operations for SAP Migration. */
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
    this.sAPDiscoverySites = getSAPDiscoverySitesOperations(
      this._client,
      subscriptionId,
    );
    this.sAPInstances = getSAPInstancesOperations(this._client, subscriptionId);
    this.serverInstances = getServerInstancesOperations(
      this._client,
      subscriptionId,
    );
  }

  /** The operation groups for SAPDiscoverySites */
  public readonly sAPDiscoverySites: SAPDiscoverySitesOperations;
  /** The operation groups for SAPInstances */
  public readonly sAPInstances: SAPInstancesOperations;
  /** The operation groups for ServerInstances */
  public readonly serverInstances: ServerInstancesOperations;
}
