// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  _getDiscoverySourcesOperations,
  DiscoverySourcesOperations,
} from "./classic/discoverySources/index.js";
import { _getMapsOperations, MapsOperations } from "./classic/maps/index.js";
import { _getOperationsOperations, OperationsOperations } from "./classic/operations/index.js";
import {
  createDependencyMap,
  DependencyMapContext,
  DependencyMapClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { DependencyMapClientOptionalParams } from "./api/dependencyMapContext.js";

export class DependencyMapClient {
  private _client: DependencyMapContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Microsoft.DependencyMap management service */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: DependencyMapClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createDependencyMap(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.discoverySources = _getDiscoverySourcesOperations(this._client);
    this.maps = _getMapsOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for discoverySources */
  public readonly discoverySources: DiscoverySourcesOperations;
  /** The operation groups for maps */
  public readonly maps: MapsOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
