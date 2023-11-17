// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { TokenCredential } from "@azure/core-auth";
import { AccessControlRestClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `AccessControlRestClient`
 * @param endpoint - The workspace development endpoint, for example `https://myworkspace.dev.azuresynapse.net`.
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  credentials: TokenCredential,
  options: ClientOptions = {}
): AccessControlRestClient {
  const baseUrl = options.baseUrl ?? `${endpoint}`;
  options.apiVersion = options.apiVersion ?? "2020-12-01";
  const userAgentInfo = `azsdk-js-synapse-access-control-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix
    },
    loggingOptions: {
      logger: options.loggingOptions?.logger ?? logger.info
    },
    credentials: {
      scopes: options.credentials?.scopes ?? [
        "https://dev.azuresynapse.net/.default"
      ]
    }
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as AccessControlRestClient;

  return client;
}
