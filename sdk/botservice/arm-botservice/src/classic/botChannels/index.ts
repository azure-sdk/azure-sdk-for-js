// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BotServiceContext } from "../../api/botServiceContext.js";
import { BotChannel, ListChannelWithKeysResponse, SiteInfo } from "../../models/models.js";
import {
  BotChannelsRegenerateKeysOptionalParams,
  BotChannelsListWithKeysOptionalParams,
  BotChannelsListByResourceGroupOptionalParams,
  BotChannelsDeleteOptionalParams,
  BotChannelsUpdateOptionalParams,
  BotChannelsCreateOptionalParams,
  BotChannelsGetOptionalParams,
} from "../../api/botChannels/options.js";
import {
  regenerateKeys,
  listWithKeys,
  listByResourceGroup,
  $delete,
  update,
  create,
  get,
} from "../../api/botChannels/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a BotChannels operations. */
export interface BotChannelsOperations {
  /** Regenerates secret keys and returns them for the DirectLine Channel of a particular BotService resource */
  regenerateKeys: (
    resourceGroupName: string,
    resourceName: string,
    channelName: string,
    parameters: SiteInfo,
    options?: BotChannelsRegenerateKeysOptionalParams,
  ) => Promise<BotChannel>;
  /** Lists a Channel registration for a Bot Service including secrets */
  listWithKeys: (
    resourceGroupName: string,
    resourceName: string,
    channelName: string,
    options?: BotChannelsListWithKeysOptionalParams,
  ) => Promise<ListChannelWithKeysResponse>;
  /** Returns all the Channel registrations of a particular BotService resource */
  listByResourceGroup: (
    resourceGroupName: string,
    resourceName: string,
    options?: BotChannelsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<BotChannel>;
  /** Deletes a Channel registration from a Bot Service */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    resourceName: string,
    channelName: string,
    options?: BotChannelsDeleteOptionalParams,
  ) => Promise<void>;
  /** Updates a Channel registration for a Bot Service */
  update: (
    resourceGroupName: string,
    resourceName: string,
    channelName: string,
    parameters: BotChannel,
    options?: BotChannelsUpdateOptionalParams,
  ) => Promise<BotChannel>;
  /** Creates a Channel registration for a Bot Service */
  create: (
    resourceGroupName: string,
    resourceName: string,
    channelName: string,
    parameters: BotChannel,
    options?: BotChannelsCreateOptionalParams,
  ) => Promise<BotChannel>;
  /** Returns a BotService Channel registration specified by the parameters. */
  get: (
    resourceGroupName: string,
    resourceName: string,
    channelName: string,
    options?: BotChannelsGetOptionalParams,
  ) => Promise<BotChannel>;
}

function _getBotChannels(context: BotServiceContext) {
  return {
    regenerateKeys: (
      resourceGroupName: string,
      resourceName: string,
      channelName: string,
      parameters: SiteInfo,
      options?: BotChannelsRegenerateKeysOptionalParams,
    ) => regenerateKeys(context, resourceGroupName, resourceName, channelName, parameters, options),
    listWithKeys: (
      resourceGroupName: string,
      resourceName: string,
      channelName: string,
      options?: BotChannelsListWithKeysOptionalParams,
    ) => listWithKeys(context, resourceGroupName, resourceName, channelName, options),
    listByResourceGroup: (
      resourceGroupName: string,
      resourceName: string,
      options?: BotChannelsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, resourceName, options),
    delete: (
      resourceGroupName: string,
      resourceName: string,
      channelName: string,
      options?: BotChannelsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, resourceName, channelName, options),
    update: (
      resourceGroupName: string,
      resourceName: string,
      channelName: string,
      parameters: BotChannel,
      options?: BotChannelsUpdateOptionalParams,
    ) => update(context, resourceGroupName, resourceName, channelName, parameters, options),
    create: (
      resourceGroupName: string,
      resourceName: string,
      channelName: string,
      parameters: BotChannel,
      options?: BotChannelsCreateOptionalParams,
    ) => create(context, resourceGroupName, resourceName, channelName, parameters, options),
    get: (
      resourceGroupName: string,
      resourceName: string,
      channelName: string,
      options?: BotChannelsGetOptionalParams,
    ) => get(context, resourceGroupName, resourceName, channelName, options),
  };
}

export function _getBotChannelsOperations(context: BotServiceContext): BotChannelsOperations {
  return {
    ..._getBotChannels(context),
  };
}
