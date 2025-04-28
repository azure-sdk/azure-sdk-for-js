// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createMarketplace,
  MarketplaceContext,
  MarketplaceClientOptionalParams,
} from "./api/index.js";
import {
  RatingAndReviewsOperationsOperations,
  _getRatingAndReviewsOperationsOperations,
} from "./classic/ratingAndReviewsOperations/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { MarketplaceClientOptionalParams } from "./api/marketplaceContext.js";

export class MarketplaceClient {
  private _client: MarketplaceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Microsoft Marketplace Rating And Reviews API */
  constructor(credential: TokenCredential, options: MarketplaceClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createMarketplace(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.ratingAndReviewsOperations = _getRatingAndReviewsOperationsOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for ratingAndReviewsOperations */
  public readonly ratingAndReviewsOperations: RatingAndReviewsOperationsOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
