// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BotServiceContext } from "../../api/botServiceContext.js";
import {
  Bot,
  CreateEmailSignInUrlResponse,
  PrivateLinkResourceListResult,
} from "../../models/models.js";
import {
  BotsListByBotResourceOptionalParams,
  BotsCreateSignInUrlOptionalParams,
  BotsListOptionalParams,
  BotsListByResourceGroupOptionalParams,
  BotsDeleteOptionalParams,
  BotsUpdateOptionalParams,
  BotsCreateOptionalParams,
  BotsGetOptionalParams,
} from "../../api/bots/options.js";
import {
  listByBotResource,
  createSignInUrl,
  list,
  listByResourceGroup,
  $delete,
  update,
  create,
  get,
} from "../../api/bots/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Bots operations. */
export interface BotsOperations {
  /** Gets the private link resources that need to be created for a Bot. */
  listByBotResource: (
    resourceGroupName: string,
    resourceName: string,
    options?: BotsListByBotResourceOptionalParams,
  ) => Promise<PrivateLinkResourceListResult>;
  /** Creates an email channel sign in url for a Bot Service */
  createSignInUrl: (
    resourceGroupName: string,
    resourceName: string,
    options?: BotsCreateSignInUrlOptionalParams,
  ) => Promise<CreateEmailSignInUrlResponse>;
  /** Returns all the resources of a particular type belonging to a subscription. */
  list: (options?: BotsListOptionalParams) => PagedAsyncIterableIterator<Bot>;
  /** Returns all the resources of a particular type belonging to a resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: BotsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Bot>;
  /** Deletes a Bot Service from the resource group. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    resourceName: string,
    options?: BotsDeleteOptionalParams,
  ) => Promise<void>;
  /** Updates a Bot Service */
  update: (
    resourceGroupName: string,
    resourceName: string,
    parameters: Bot,
    options?: BotsUpdateOptionalParams,
  ) => Promise<Bot>;
  /** Creates a Bot Service. Bot Service is a resource group wide resource type. */
  create: (
    resourceGroupName: string,
    resourceName: string,
    parameters: Bot,
    options?: BotsCreateOptionalParams,
  ) => Promise<Bot>;
  /** Returns a BotService specified by the parameters. */
  get: (
    resourceGroupName: string,
    resourceName: string,
    options?: BotsGetOptionalParams,
  ) => Promise<Bot>;
}

function _getBots(context: BotServiceContext) {
  return {
    listByBotResource: (
      resourceGroupName: string,
      resourceName: string,
      options?: BotsListByBotResourceOptionalParams,
    ) => listByBotResource(context, resourceGroupName, resourceName, options),
    createSignInUrl: (
      resourceGroupName: string,
      resourceName: string,
      options?: BotsCreateSignInUrlOptionalParams,
    ) => createSignInUrl(context, resourceGroupName, resourceName, options),
    list: (options?: BotsListOptionalParams) => list(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: BotsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (resourceGroupName: string, resourceName: string, options?: BotsDeleteOptionalParams) =>
      $delete(context, resourceGroupName, resourceName, options),
    update: (
      resourceGroupName: string,
      resourceName: string,
      parameters: Bot,
      options?: BotsUpdateOptionalParams,
    ) => update(context, resourceGroupName, resourceName, parameters, options),
    create: (
      resourceGroupName: string,
      resourceName: string,
      parameters: Bot,
      options?: BotsCreateOptionalParams,
    ) => create(context, resourceGroupName, resourceName, parameters, options),
    get: (resourceGroupName: string, resourceName: string, options?: BotsGetOptionalParams) =>
      get(context, resourceGroupName, resourceName, options),
  };
}

export function _getBotsOperations(context: BotServiceContext): BotsOperations {
  return {
    ..._getBots(context),
  };
}
