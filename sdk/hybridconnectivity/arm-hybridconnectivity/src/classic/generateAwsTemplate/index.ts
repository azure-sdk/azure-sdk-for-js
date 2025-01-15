// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridConnectivityManagementAPIContext } from "../../api/hybridConnectivityManagementAPIContext.js";
import { generateAwsTemplatePost } from "../../api/generateAwsTemplate/index.js";
import { GenerateAwsTemplateRequest } from "../../models/models.js";
import { GenerateAwsTemplatePostOptionalParams } from "../../api/options.js";

/** Interface representing a GenerateAwsTemplate operations. */
export interface GenerateAwsTemplateOperations {
  /** Retrieve AWS Cloud Formation template */
  post: (
    generateAwsTemplateRequest: GenerateAwsTemplateRequest,
    options?: GenerateAwsTemplatePostOptionalParams,
  ) => Promise<Record<string, any>>;
}

export function getGenerateAwsTemplate(
  context: HybridConnectivityManagementAPIContext,
  subscriptionId: string,
) {
  return {
    post: (
      generateAwsTemplateRequest: GenerateAwsTemplateRequest,
      options?: GenerateAwsTemplatePostOptionalParams,
    ) => generateAwsTemplatePost(context, subscriptionId, generateAwsTemplateRequest, options),
  };
}

export function getGenerateAwsTemplateOperations(
  context: HybridConnectivityManagementAPIContext,
  subscriptionId: string,
): GenerateAwsTemplateOperations {
  return {
    ...getGenerateAwsTemplate(context, subscriptionId),
  };
}
