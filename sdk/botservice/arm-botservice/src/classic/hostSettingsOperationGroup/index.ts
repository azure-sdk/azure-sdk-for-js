// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BotServiceContext } from "../../api/botServiceContext.js";
import { HostSettingsResponse } from "../../models/models.js";
import { HostSettingsOperationGroupGetOptionalParams } from "../../api/hostSettingsOperationGroup/options.js";
import { get } from "../../api/hostSettingsOperationGroup/operations.js";

/** Interface representing a HostSettingsOperationGroup operations. */
export interface HostSettingsOperationGroupOperations {
  /** Get per subscription settings needed to host bot in compute resource such as Azure App Service */
  get: (options?: HostSettingsOperationGroupGetOptionalParams) => Promise<HostSettingsResponse>;
}

function _getHostSettingsOperationGroup(context: BotServiceContext) {
  return {
    get: (options?: HostSettingsOperationGroupGetOptionalParams) => get(context, options),
  };
}

export function _getHostSettingsOperationGroupOperations(
  context: BotServiceContext,
): HostSettingsOperationGroupOperations {
  return {
    ..._getHostSettingsOperationGroup(context),
  };
}
