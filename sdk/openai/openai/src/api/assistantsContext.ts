// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { AssistantsContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface AssistantsClientOptionalParams extends ClientOptions {}

export { AssistantsContext } from "../rest/index.js";

/** Azure OpenAI APIs for Assistants. */
export function createAssistants(
  endpointParam: string,
  credential: KeyCredential | TokenCredential,
  options: AssistantsClientOptionalParams = {},
): AssistantsContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient(endpointParam, credential, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
