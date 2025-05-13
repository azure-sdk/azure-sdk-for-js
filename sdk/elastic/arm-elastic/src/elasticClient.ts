// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createElastic, ElasticContext, ElasticClientOptionalParams } from "./api/index.js";
import {
  OrganizationsOperationGroupOperations,
  _getOrganizationsOperationGroupOperations,
} from "./classic/organizationsOperationGroup/index.js";
import {
  ElasticVersionsOperationGroupOperations,
  _getElasticVersionsOperationGroupOperations,
} from "./classic/elasticVersionsOperationGroup/index.js";
import { TagRulesOperations, _getTagRulesOperations } from "./classic/tagRules/index.js";
import {
  OpenAIIntegrationRPModelsOperations,
  _getOpenAIIntegrationRPModelsOperations,
} from "./classic/openAIIntegrationRPModels/index.js";
import {
  MonitoredSubscriptionsOperations,
  _getMonitoredSubscriptionsOperations,
} from "./classic/monitoredSubscriptions/index.js";
import {
  ElasticMonitorResourcesOperations,
  _getElasticMonitorResourcesOperations,
} from "./classic/elasticMonitorResources/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { ElasticClientOptionalParams } from "./api/elasticContext.js";

export class ElasticClient {
  private _client: ElasticContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: ElasticClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createElastic(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.organizationsOperationGroup = _getOrganizationsOperationGroupOperations(this._client);
    this.elasticVersionsOperationGroup = _getElasticVersionsOperationGroupOperations(this._client);
    this.tagRules = _getTagRulesOperations(this._client);
    this.openAIIntegrationRPModels = _getOpenAIIntegrationRPModelsOperations(this._client);
    this.monitoredSubscriptions = _getMonitoredSubscriptionsOperations(this._client);
    this.elasticMonitorResources = _getElasticMonitorResourcesOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for organizationsOperationGroup */
  public readonly organizationsOperationGroup: OrganizationsOperationGroupOperations;
  /** The operation groups for elasticVersionsOperationGroup */
  public readonly elasticVersionsOperationGroup: ElasticVersionsOperationGroupOperations;
  /** The operation groups for tagRules */
  public readonly tagRules: TagRulesOperations;
  /** The operation groups for openAIIntegrationRPModels */
  public readonly openAIIntegrationRPModels: OpenAIIntegrationRPModelsOperations;
  /** The operation groups for monitoredSubscriptions */
  public readonly monitoredSubscriptions: MonitoredSubscriptionsOperations;
  /** The operation groups for elasticMonitorResources */
  public readonly elasticMonitorResources: ElasticMonitorResourcesOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
