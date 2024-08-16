// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { ContosoContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface ContosoClientOptionalParams extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { ContosoContext } from "../rest/index.js";

/** Microsoft.Contoso Resource Provider management API. */
export function createContoso(
  credential: TokenCredential,
  options: ContosoClientOptionalParams = {},
): ContosoContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient(credential, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
