// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridConnectivityContext } from "../../api/hybridConnectivityContext.js";
import { GenerateAwsTemplateRequest } from "../../models/models.js";
import { generateAwsTemplatePost } from "../../api/generateAwsTemplate/index.js";
import { GenerateAwsTemplatePostOptionalParams } from "../../models/options.js";

/** Interface representing a GenerateAwsTemplate operations. */
export interface GenerateAwsTemplateOperations {
  /** Retrieve AWS Cloud Formation template */
  post: (
    generateAwsTemplateRequest: GenerateAwsTemplateRequest,
    options?: GenerateAwsTemplatePostOptionalParams,
  ) => Promise<Record<string, any>>;
}

export function getGenerateAwsTemplate(
  context: HybridConnectivityContext,
  subscriptionId: string,
) {
  return {
    post: (
      generateAwsTemplateRequest: GenerateAwsTemplateRequest,
      options?: GenerateAwsTemplatePostOptionalParams,
    ) =>
      generateAwsTemplatePost(
        context,
        subscriptionId,
        generateAwsTemplateRequest,
        options,
      ),
  };
}

export function getGenerateAwsTemplateOperations(
  context: HybridConnectivityContext,
  subscriptionId: string,
): GenerateAwsTemplateOperations {
  return {
    ...getGenerateAwsTemplate(context, subscriptionId),
  };
}
