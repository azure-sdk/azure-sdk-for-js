// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BotServiceContext } from "../../api/botServiceContext.js";
import {
  QnAMakerEndpointKeysRequestBody,
  QnAMakerEndpointKeysResponse,
} from "../../models/models.js";
import { QnAMakerEndpointKeysOperationGroupGetOptionalParams } from "../../api/qnAMakerEndpointKeysOperationGroup/options.js";
import { get } from "../../api/qnAMakerEndpointKeysOperationGroup/operations.js";

/** Interface representing a QnAMakerEndpointKeysOperationGroup operations. */
export interface QnAMakerEndpointKeysOperationGroupOperations {
  /** Lists the QnA Maker endpoint keys */
  get: (
    parameters: QnAMakerEndpointKeysRequestBody,
    options?: QnAMakerEndpointKeysOperationGroupGetOptionalParams,
  ) => Promise<QnAMakerEndpointKeysResponse>;
}

function _getQnAMakerEndpointKeysOperationGroup(context: BotServiceContext) {
  return {
    get: (
      parameters: QnAMakerEndpointKeysRequestBody,
      options?: QnAMakerEndpointKeysOperationGroupGetOptionalParams,
    ) => get(context, parameters, options),
  };
}

export function _getQnAMakerEndpointKeysOperationGroupOperations(
  context: BotServiceContext,
): QnAMakerEndpointKeysOperationGroupOperations {
  return {
    ..._getQnAMakerEndpointKeysOperationGroup(context),
  };
}
