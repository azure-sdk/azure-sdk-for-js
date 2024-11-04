// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { getSitesOperations, SitesOperations } from "./classic/sites/index.js";
import {
  getSitesBySubscriptionOperations,
  SitesBySubscriptionOperations,
} from "./classic/sitesBySubscription/index.js";
import {
  createEdge,
  EdgeContext,
  EdgeClientOptionalParams,
} from "./api/index.js";

export { EdgeClientOptionalParams } from "./api/edgeContext.js";

export class EdgeClient {
  private _client: EdgeContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure Edge Sites Resource Provider management API. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: EdgeClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createEdge(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.sites = getSitesOperations(this._client, subscriptionId);
    this.sitesBySubscription = getSitesBySubscriptionOperations(
      this._client,
      subscriptionId,
    );
  }

  /** The operation groups for Sites */
  public readonly sites: SitesOperations;
  /** The operation groups for SitesBySubscription */
  public readonly sitesBySubscription: SitesBySubscriptionOperations;
}
