// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createWorkloads, WorkloadsContext, WorkloadsClientOptionalParams } from "./api/index.js";
import {
  ServerInstancesOperations,
  _getServerInstancesOperations,
} from "./classic/serverInstances/index.js";
import {
  SAPInstancesOperations,
  _getSAPInstancesOperations,
} from "./classic/sapInstances/index.js";
import {
  SAPDiscoverySitesOperations,
  _getSAPDiscoverySitesOperations,
} from "./classic/sapDiscoverySites/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

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
      : `azsdk-js-client`;
    this._client = createWorkloads(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.serverInstances = _getServerInstancesOperations(this._client);
    this.sapInstances = _getSAPInstancesOperations(this._client);
    this.sapDiscoverySites = _getSAPDiscoverySitesOperations(this._client);
  }

  /** The operation groups for serverInstances */
  public readonly serverInstances: ServerInstancesOperations;
  /** The operation groups for sapInstances */
  public readonly sapInstances: SAPInstancesOperations;
  /** The operation groups for sapDiscoverySites */
  public readonly sapDiscoverySites: SAPDiscoverySitesOperations;
}
