// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridConnectivityContext } from "../../api/hybridConnectivityContext.js";
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

function _getGenerateAwsTemplate(context: HybridConnectivityContext) {
  return {
    post: (
      generateAwsTemplateRequest: GenerateAwsTemplateRequest,
      options?: GenerateAwsTemplatePostOptionalParams,
    ) => generateAwsTemplatePost(context, generateAwsTemplateRequest, options),
  };
}

export function _getGenerateAwsTemplateOperations(
  context: HybridConnectivityContext,
): GenerateAwsTemplateOperations {
  return {
    ..._getGenerateAwsTemplate(context),
  };
}
