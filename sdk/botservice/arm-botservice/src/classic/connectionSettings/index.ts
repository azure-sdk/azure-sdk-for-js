// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BotServiceContext } from "../../api/botServiceContext.js";
import { ConnectionSetting } from "../../models/models.js";
import {
  ConnectionSettingsListWithSecretsOptionalParams,
  ConnectionSettingsListByBotServiceOptionalParams,
  ConnectionSettingsDeleteOptionalParams,
  ConnectionSettingsUpdateOptionalParams,
  ConnectionSettingsCreateOptionalParams,
  ConnectionSettingsGetOptionalParams,
} from "../../api/connectionSettings/options.js";
import {
  listWithSecrets,
  listByBotService,
  $delete,
  update,
  create,
  get,
} from "../../api/connectionSettings/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ConnectionSettings operations. */
export interface ConnectionSettingsOperations {
  /** Get a Connection Setting registration for a Bot Service */
  listWithSecrets: (
    resourceGroupName: string,
    resourceName: string,
    connectionName: string,
    options?: ConnectionSettingsListWithSecretsOptionalParams,
  ) => Promise<ConnectionSetting>;
  /** Returns all the Connection Settings registered to a particular BotService resource */
  listByBotService: (
    resourceGroupName: string,
    resourceName: string,
    options?: ConnectionSettingsListByBotServiceOptionalParams,
  ) => PagedAsyncIterableIterator<ConnectionSetting>;
  /** Deletes a Connection Setting registration for a Bot Service */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    resourceName: string,
    connectionName: string,
    options?: ConnectionSettingsDeleteOptionalParams,
  ) => Promise<void>;
  /** Updates a Connection Setting registration for a Bot Service */
  update: (
    resourceGroupName: string,
    resourceName: string,
    connectionName: string,
    parameters: ConnectionSetting,
    options?: ConnectionSettingsUpdateOptionalParams,
  ) => Promise<ConnectionSetting>;
  /** Register a new Auth Connection for a Bot Service */
  create: (
    resourceGroupName: string,
    resourceName: string,
    connectionName: string,
    parameters: ConnectionSetting,
    options?: ConnectionSettingsCreateOptionalParams,
  ) => Promise<ConnectionSetting>;
  /** Get a Connection Setting registration for a Bot Service */
  get: (
    resourceGroupName: string,
    resourceName: string,
    connectionName: string,
    options?: ConnectionSettingsGetOptionalParams,
  ) => Promise<ConnectionSetting>;
}

function _getConnectionSettings(context: BotServiceContext) {
  return {
    listWithSecrets: (
      resourceGroupName: string,
      resourceName: string,
      connectionName: string,
      options?: ConnectionSettingsListWithSecretsOptionalParams,
    ) => listWithSecrets(context, resourceGroupName, resourceName, connectionName, options),
    listByBotService: (
      resourceGroupName: string,
      resourceName: string,
      options?: ConnectionSettingsListByBotServiceOptionalParams,
    ) => listByBotService(context, resourceGroupName, resourceName, options),
    delete: (
      resourceGroupName: string,
      resourceName: string,
      connectionName: string,
      options?: ConnectionSettingsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, resourceName, connectionName, options),
    update: (
      resourceGroupName: string,
      resourceName: string,
      connectionName: string,
      parameters: ConnectionSetting,
      options?: ConnectionSettingsUpdateOptionalParams,
    ) => update(context, resourceGroupName, resourceName, connectionName, parameters, options),
    create: (
      resourceGroupName: string,
      resourceName: string,
      connectionName: string,
      parameters: ConnectionSetting,
      options?: ConnectionSettingsCreateOptionalParams,
    ) => create(context, resourceGroupName, resourceName, connectionName, parameters, options),
    get: (
      resourceGroupName: string,
      resourceName: string,
      connectionName: string,
      options?: ConnectionSettingsGetOptionalParams,
    ) => get(context, resourceGroupName, resourceName, connectionName, options),
  };
}

export function _getConnectionSettingsOperations(
  context: BotServiceContext,
): ConnectionSettingsOperations {
  return {
    ..._getConnectionSettings(context),
  };
}
