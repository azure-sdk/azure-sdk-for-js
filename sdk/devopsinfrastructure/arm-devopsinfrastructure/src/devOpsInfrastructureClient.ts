// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  _getImageVersionsOperations,
  ImageVersionsOperations,
} from "./classic/imageVersions/index.js";
import {
  _getSubscriptionUsagesOperations,
  SubscriptionUsagesOperations,
} from "./classic/subscriptionUsages/index.js";
import { _getSkuOperations, SkuOperations } from "./classic/sku/index.js";
import {
  _getResourceDetailsOperations,
  ResourceDetailsOperations,
} from "./classic/resourceDetails/index.js";
import { _getPoolsOperations, PoolsOperations } from "./classic/pools/index.js";
import { _getOperationsOperations, OperationsOperations } from "./classic/operations/index.js";
import {
  createDevOpsInfrastructure,
  DevOpsInfrastructureContext,
  DevOpsInfrastructureClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { DevOpsInfrastructureClientOptionalParams } from "./api/devOpsInfrastructureContext.js";

export class DevOpsInfrastructureClient {
  private _client: DevOpsInfrastructureContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: DevOpsInfrastructureClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createDevOpsInfrastructure(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.imageVersions = _getImageVersionsOperations(this._client);
    this.subscriptionUsages = _getSubscriptionUsagesOperations(this._client);
    this.sku = _getSkuOperations(this._client);
    this.resourceDetails = _getResourceDetailsOperations(this._client);
    this.pools = _getPoolsOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for imageVersions */
  public readonly imageVersions: ImageVersionsOperations;
  /** The operation groups for subscriptionUsages */
  public readonly subscriptionUsages: SubscriptionUsagesOperations;
  /** The operation groups for sku */
  public readonly sku: SkuOperations;
  /** The operation groups for resourceDetails */
  public readonly resourceDetails: ResourceDetailsOperations;
  /** The operation groups for pools */
  public readonly pools: PoolsOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
