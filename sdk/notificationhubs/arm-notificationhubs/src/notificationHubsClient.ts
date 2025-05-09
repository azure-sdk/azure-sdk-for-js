// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createNotificationHubs,
  NotificationHubsContext,
  NotificationHubsClientOptionalParams,
} from "./api/index.js";
import {
  NamespacesOperationGroupOperations,
  _getNamespacesOperationGroupOperations,
} from "./classic/namespacesOperationGroup/index.js";
import {
  PrivateLinkResourcesOperations,
  _getPrivateLinkResourcesOperations,
} from "./classic/privateLinkResources/index.js";
import {
  PrivateEndpointConnectionResourcesOperations,
  _getPrivateEndpointConnectionResourcesOperations,
} from "./classic/privateEndpointConnectionResources/index.js";
import { NamespacesOperations, _getNamespacesOperations } from "./classic/namespaces/index.js";
import {
  SharedAccessAuthorizationRuleResourcesOperations,
  _getSharedAccessAuthorizationRuleResourcesOperations,
} from "./classic/sharedAccessAuthorizationRuleResources/index.js";
import {
  NamespaceResourcesOperations,
  _getNamespaceResourcesOperations,
} from "./classic/namespaceResources/index.js";
import {
  NotificationHubResourcesOperations,
  _getNotificationHubResourcesOperations,
} from "./classic/notificationHubResources/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { NotificationHubsClientOptionalParams } from "./api/notificationHubsContext.js";

export class NotificationHubsClient {
  private _client: NotificationHubsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Microsoft Notification Hubs Resource Provider REST API. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: NotificationHubsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createNotificationHubs(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.namespacesOperationGroup = _getNamespacesOperationGroupOperations(this._client);
    this.privateLinkResources = _getPrivateLinkResourcesOperations(this._client);
    this.privateEndpointConnectionResources = _getPrivateEndpointConnectionResourcesOperations(
      this._client,
    );
    this.namespaces = _getNamespacesOperations(this._client);
    this.sharedAccessAuthorizationRuleResources =
      _getSharedAccessAuthorizationRuleResourcesOperations(this._client);
    this.namespaceResources = _getNamespaceResourcesOperations(this._client);
    this.notificationHubResources = _getNotificationHubResourcesOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for namespacesOperationGroup */
  public readonly namespacesOperationGroup: NamespacesOperationGroupOperations;
  /** The operation groups for privateLinkResources */
  public readonly privateLinkResources: PrivateLinkResourcesOperations;
  /** The operation groups for privateEndpointConnectionResources */
  public readonly privateEndpointConnectionResources: PrivateEndpointConnectionResourcesOperations;
  /** The operation groups for namespaces */
  public readonly namespaces: NamespacesOperations;
  /** The operation groups for sharedAccessAuthorizationRuleResources */
  public readonly sharedAccessAuthorizationRuleResources: SharedAccessAuthorizationRuleResourcesOperations;
  /** The operation groups for namespaceResources */
  public readonly namespaceResources: NamespaceResourcesOperations;
  /** The operation groups for notificationHubResources */
  public readonly notificationHubResources: NotificationHubResourcesOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
