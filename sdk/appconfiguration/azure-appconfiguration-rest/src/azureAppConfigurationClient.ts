// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger.js";
import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { AzureAppConfigurationClient } from "./clientDefinitions.js";

/**
 * Initialize a new instance of `AzureAppConfigurationClient`
 * @param endpointParam - A sequence of textual characters.
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpointParam: string,
  credentials: TokenCredential | KeyCredential,
  options: ClientOptions = {},
): AzureAppConfigurationClient {
  const endpointUrl = options.endpoint ?? options.baseUrl ?? `${endpointParam}`;
  options.apiVersion = options.apiVersion ?? "2023-11-01";
  const userAgentInfo = `azsdk-js-azure-appconfiguration-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
    loggingOptions: {
      logger: options.loggingOptions?.logger ?? logger.info,
    },
    credentials: {
      scopes: options.credentials?.scopes ?? ["https://azconfig.io/.default"],
      apiKeyHeaderName:
        options.credentials?.apiKeyHeaderName ?? "Connection String",
    },
  };

  const client = getClient(
    endpointUrl,
    credentials,
    options,
  ) as AzureAppConfigurationClient;

  return client;
}
