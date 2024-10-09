// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  solutionTypeSettingsSerializer,
  GenerateAwsTemplateRequest,
} from "../../models/models.js";
import { HybridConnectivityContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { GenerateAwsTemplatePostOptionalParams } from "../../models/options.js";

export function _generateAwsTemplatePostSend(
  context: Client,
  subscriptionId: string,
  generateAwsTemplateRequest: GenerateAwsTemplateRequest,
  options: GenerateAwsTemplatePostOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.HybridConnectivity/generateAwsTemplate",
      subscriptionId,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        connectorId: generateAwsTemplateRequest["connectorId"],
        solutionTypes:
          generateAwsTemplateRequest["solutionTypes"] === undefined
            ? generateAwsTemplateRequest["solutionTypes"]
            : generateAwsTemplateRequest["solutionTypes"].map(
                solutionTypeSettingsSerializer,
              ),
      },
    });
}

export async function _generateAwsTemplatePostDeserialize(
  result: PathUncheckedResponse,
): Promise<Record<string, any>> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
}

/** Retrieve AWS Cloud Formation template */
export async function generateAwsTemplatePost(
  context: Client,
  subscriptionId: string,
  generateAwsTemplateRequest: GenerateAwsTemplateRequest,
  options: GenerateAwsTemplatePostOptionalParams = { requestOptions: {} },
): Promise<Record<string, any>> {
  const result = await _generateAwsTemplatePostSend(
    context,
    subscriptionId,
    generateAwsTemplateRequest,
    options,
  );
  return _generateAwsTemplatePostDeserialize(result);
}
