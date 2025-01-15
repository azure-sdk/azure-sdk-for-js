// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  HybridConnectivityManagementAPIContext as Client,
  GenerateAwsTemplatePostOptionalParams,
} from "../index.js";
import {
  GenerateAwsTemplateRequest,
  generateAwsTemplateRequestSerializer,
  _postResponseDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

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
      body: generateAwsTemplateRequestSerializer(generateAwsTemplateRequest),
    });
}

export async function _generateAwsTemplatePostDeserialize(
  result: PathUncheckedResponse,
): Promise<Record<string, any>> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _postResponseDeserializer(result.body);
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
