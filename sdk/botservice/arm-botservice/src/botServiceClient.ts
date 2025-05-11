// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createBotService,
  BotServiceContext,
  BotServiceClientOptionalParams,
} from "./api/index.js";
import {
  OperationResultsOperationGroupOperations,
  _getOperationResultsOperationGroupOperations,
} from "./classic/operationResultsOperationGroup/index.js";
import {
  HostSettingsOperationGroupOperations,
  _getHostSettingsOperationGroupOperations,
} from "./classic/hostSettingsOperationGroup/index.js";
import {
  QnAMakerEndpointKeysOperationGroupOperations,
  _getQnAMakerEndpointKeysOperationGroupOperations,
} from "./classic/qnAMakerEndpointKeysOperationGroup/index.js";
import {
  BotConnectionOperationGroupOperations,
  _getBotConnectionOperationGroupOperations,
} from "./classic/botConnectionOperationGroup/index.js";
import {
  BotsOperationGroupOperations,
  _getBotsOperationGroupOperations,
} from "./classic/botsOperationGroup/index.js";
import {
  NetworkSecurityPerimeterConfigurationsOperations,
  _getNetworkSecurityPerimeterConfigurationsOperations,
} from "./classic/networkSecurityPerimeterConfigurations/index.js";
import {
  PrivateEndpointConnectionsOperations,
  _getPrivateEndpointConnectionsOperations,
} from "./classic/privateEndpointConnections/index.js";
import {
  ConnectionSettingsOperations,
  _getConnectionSettingsOperations,
} from "./classic/connectionSettings/index.js";
import { BotChannelsOperations, _getBotChannelsOperations } from "./classic/botChannels/index.js";
import { BotsOperations, _getBotsOperations } from "./classic/bots/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { BotServiceClientOptionalParams } from "./api/botServiceContext.js";

export class BotServiceClient {
  private _client: BotServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure Bot Service is a platform for creating smart conversational agents. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: BotServiceClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createBotService(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.operationResultsOperationGroup = _getOperationResultsOperationGroupOperations(
      this._client,
    );
    this.hostSettingsOperationGroup = _getHostSettingsOperationGroupOperations(this._client);
    this.qnAMakerEndpointKeysOperationGroup = _getQnAMakerEndpointKeysOperationGroupOperations(
      this._client,
    );
    this.botConnectionOperationGroup = _getBotConnectionOperationGroupOperations(this._client);
    this.botsOperationGroup = _getBotsOperationGroupOperations(this._client);
    this.networkSecurityPerimeterConfigurations =
      _getNetworkSecurityPerimeterConfigurationsOperations(this._client);
    this.privateEndpointConnections = _getPrivateEndpointConnectionsOperations(this._client);
    this.connectionSettings = _getConnectionSettingsOperations(this._client);
    this.botChannels = _getBotChannelsOperations(this._client);
    this.bots = _getBotsOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for operationResultsOperationGroup */
  public readonly operationResultsOperationGroup: OperationResultsOperationGroupOperations;
  /** The operation groups for hostSettingsOperationGroup */
  public readonly hostSettingsOperationGroup: HostSettingsOperationGroupOperations;
  /** The operation groups for qnAMakerEndpointKeysOperationGroup */
  public readonly qnAMakerEndpointKeysOperationGroup: QnAMakerEndpointKeysOperationGroupOperations;
  /** The operation groups for botConnectionOperationGroup */
  public readonly botConnectionOperationGroup: BotConnectionOperationGroupOperations;
  /** The operation groups for botsOperationGroup */
  public readonly botsOperationGroup: BotsOperationGroupOperations;
  /** The operation groups for networkSecurityPerimeterConfigurations */
  public readonly networkSecurityPerimeterConfigurations: NetworkSecurityPerimeterConfigurationsOperations;
  /** The operation groups for privateEndpointConnections */
  public readonly privateEndpointConnections: PrivateEndpointConnectionsOperations;
  /** The operation groups for connectionSettings */
  public readonly connectionSettings: ConnectionSettingsOperations;
  /** The operation groups for botChannels */
  public readonly botChannels: BotChannelsOperations;
  /** The operation groups for bots */
  public readonly bots: BotsOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
