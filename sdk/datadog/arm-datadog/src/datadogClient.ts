// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createDatadog, DatadogContext, DatadogClientOptionalParams } from "./api/index.js";
import {
  CreationSupportedOperationGroupOperations,
  _getCreationSupportedOperationGroupOperations,
} from "./classic/creationSupportedOperationGroup/index.js";
import {
  MarketplaceAgreementsOperationGroupOperations,
  _getMarketplaceAgreementsOperationGroupOperations,
} from "./classic/marketplaceAgreementsOperationGroup/index.js";
import {
  MonitoredSubscriptionsOperations,
  _getMonitoredSubscriptionsOperations,
} from "./classic/monitoredSubscriptions/index.js";
import {
  DatadogSingleSignOnResourcesOperations,
  _getDatadogSingleSignOnResourcesOperations,
} from "./classic/datadogSingleSignOnResources/index.js";
import { TagRulesOperations, _getTagRulesOperations } from "./classic/tagRules/index.js";
import {
  DatadogMonitorResourcesOperations,
  _getDatadogMonitorResourcesOperations,
} from "./classic/datadogMonitorResources/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { DatadogClientOptionalParams } from "./api/datadogContext.js";

export class DatadogClient {
  private _client: DatadogContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: DatadogClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createDatadog(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.creationSupportedOperationGroup = _getCreationSupportedOperationGroupOperations(
      this._client,
    );
    this.marketplaceAgreementsOperationGroup = _getMarketplaceAgreementsOperationGroupOperations(
      this._client,
    );
    this.monitoredSubscriptions = _getMonitoredSubscriptionsOperations(this._client);
    this.datadogSingleSignOnResources = _getDatadogSingleSignOnResourcesOperations(this._client);
    this.tagRules = _getTagRulesOperations(this._client);
    this.datadogMonitorResources = _getDatadogMonitorResourcesOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for creationSupportedOperationGroup */
  public readonly creationSupportedOperationGroup: CreationSupportedOperationGroupOperations;
  /** The operation groups for marketplaceAgreementsOperationGroup */
  public readonly marketplaceAgreementsOperationGroup: MarketplaceAgreementsOperationGroupOperations;
  /** The operation groups for monitoredSubscriptions */
  public readonly monitoredSubscriptions: MonitoredSubscriptionsOperations;
  /** The operation groups for datadogSingleSignOnResources */
  public readonly datadogSingleSignOnResources: DatadogSingleSignOnResourcesOperations;
  /** The operation groups for tagRules */
  public readonly tagRules: TagRulesOperations;
  /** The operation groups for datadogMonitorResources */
  public readonly datadogMonitorResources: DatadogMonitorResourcesOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
