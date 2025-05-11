// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BotServiceContext } from "../../api/botServiceContext.js";
import { ServiceProviderResponseList } from "../../models/models.js";
import { BotConnectionOperationGroupListServiceProvidersOptionalParams } from "../../api/botConnectionOperationGroup/options.js";
import { listServiceProviders } from "../../api/botConnectionOperationGroup/operations.js";

/** Interface representing a BotConnectionOperationGroup operations. */
export interface BotConnectionOperationGroupOperations {
  /** Lists the available Service Providers for creating Connection Settings */
  listServiceProviders: (
    options?: BotConnectionOperationGroupListServiceProvidersOptionalParams,
  ) => Promise<ServiceProviderResponseList>;
}

function _getBotConnectionOperationGroup(context: BotServiceContext) {
  return {
    listServiceProviders: (
      options?: BotConnectionOperationGroupListServiceProvidersOptionalParams,
    ) => listServiceProviders(context, options),
  };
}

export function _getBotConnectionOperationGroupOperations(
  context: BotServiceContext,
): BotConnectionOperationGroupOperations {
  return {
    ..._getBotConnectionOperationGroup(context),
  };
}
