// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BotServiceContext } from "../../api/botServiceContext.js";
import {
  CheckNameAvailabilityRequestBody,
  CheckNameAvailabilityResponseBody,
} from "../../models/models.js";
import { BotsOperationGroupGetCheckNameAvailabilityOptionalParams } from "../../api/botsOperationGroup/options.js";
import { getCheckNameAvailability } from "../../api/botsOperationGroup/operations.js";

/** Interface representing a BotsOperationGroup operations. */
export interface BotsOperationGroupOperations {
  /** Check whether a bot name is available. */
  getCheckNameAvailability: (
    parameters: CheckNameAvailabilityRequestBody,
    options?: BotsOperationGroupGetCheckNameAvailabilityOptionalParams,
  ) => Promise<CheckNameAvailabilityResponseBody>;
}

function _getBotsOperationGroup(context: BotServiceContext) {
  return {
    getCheckNameAvailability: (
      parameters: CheckNameAvailabilityRequestBody,
      options?: BotsOperationGroupGetCheckNameAvailabilityOptionalParams,
    ) => getCheckNameAvailability(context, parameters, options),
  };
}

export function _getBotsOperationGroupOperations(
  context: BotServiceContext,
): BotsOperationGroupOperations {
  return {
    ..._getBotsOperationGroup(context),
  };
}
