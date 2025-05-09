// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HealthBotContext } from "../../api/healthBotContext.js";
import {
  HealthBot,
  HealthBotUpdateParameters,
  HealthBotKeysResponse,
  HealthBotKey,
} from "../../models/models.js";
import {
  HealthBotsRegenerateApiJwtSecretOptionalParams,
  HealthBotsListSecretsOptionalParams,
  HealthBotsListOptionalParams,
  HealthBotsListByResourceGroupOptionalParams,
  HealthBotsDeleteOptionalParams,
  HealthBotsUpdateOptionalParams,
  HealthBotsCreateOptionalParams,
  HealthBotsGetOptionalParams,
} from "../../api/healthBots/options.js";
import {
  regenerateApiJwtSecret,
  listSecrets,
  list,
  listByResourceGroup,
  $delete,
  update,
  create,
  get,
} from "../../api/healthBots/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a HealthBots operations. */
export interface HealthBotsOperations {
  /** Regenerate the API JWT Secret of a HealthBot. */
  regenerateApiJwtSecret: (
    resourceGroupName: string,
    botName: string,
    options?: HealthBotsRegenerateApiJwtSecretOptionalParams,
  ) => Promise<HealthBotKey>;
  /** List all secrets of a HealthBot. */
  listSecrets: (
    resourceGroupName: string,
    botName: string,
    options?: HealthBotsListSecretsOptionalParams,
  ) => Promise<HealthBotKeysResponse>;
  /** Returns all the resources of a particular type belonging to a subscription. */
  list: (options?: HealthBotsListOptionalParams) => PagedAsyncIterableIterator<HealthBot>;
  /** Returns all the resources of a particular type belonging to a resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: HealthBotsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<HealthBot>;
  /** Delete a HealthBot. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    botName: string,
    options?: HealthBotsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Patch a HealthBot. */
  update: (
    resourceGroupName: string,
    botName: string,
    parameters: HealthBotUpdateParameters,
    options?: HealthBotsUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a new Azure Health Bot. */
  create: (
    resourceGroupName: string,
    botName: string,
    parameters: HealthBot,
    options?: HealthBotsCreateOptionalParams,
  ) => PollerLike<OperationState<HealthBot>, HealthBot>;
  /** Get a HealthBot. */
  get: (
    resourceGroupName: string,
    botName: string,
    options?: HealthBotsGetOptionalParams,
  ) => Promise<HealthBot>;
}

function _getHealthBots(context: HealthBotContext) {
  return {
    regenerateApiJwtSecret: (
      resourceGroupName: string,
      botName: string,
      options?: HealthBotsRegenerateApiJwtSecretOptionalParams,
    ) => regenerateApiJwtSecret(context, resourceGroupName, botName, options),
    listSecrets: (
      resourceGroupName: string,
      botName: string,
      options?: HealthBotsListSecretsOptionalParams,
    ) => listSecrets(context, resourceGroupName, botName, options),
    list: (options?: HealthBotsListOptionalParams) => list(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: HealthBotsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      botName: string,
      options?: HealthBotsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, botName, options),
    update: (
      resourceGroupName: string,
      botName: string,
      parameters: HealthBotUpdateParameters,
      options?: HealthBotsUpdateOptionalParams,
    ) => update(context, resourceGroupName, botName, parameters, options),
    create: (
      resourceGroupName: string,
      botName: string,
      parameters: HealthBot,
      options?: HealthBotsCreateOptionalParams,
    ) => create(context, resourceGroupName, botName, parameters, options),
    get: (resourceGroupName: string, botName: string, options?: HealthBotsGetOptionalParams) =>
      get(context, resourceGroupName, botName, options),
  };
}

export function _getHealthBotsOperations(context: HealthBotContext): HealthBotsOperations {
  return {
    ..._getHealthBots(context),
  };
}
