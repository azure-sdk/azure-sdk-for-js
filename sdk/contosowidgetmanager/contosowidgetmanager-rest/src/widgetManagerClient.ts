// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { TokenCredential } from "@azure/core-auth";
import { WidgetManagerClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `WidgetManagerClient`
 * @param endpoint - The parameter endpoint
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  credentials: TokenCredential,
  options: ClientOptions = {}
): WidgetManagerClient {
  const baseUrl = options.baseUrl ?? `${endpoint}`;
  options.apiVersion = options.apiVersion ?? "2022-11-01-preview";
  options = {
    ...options,
    credentials: {
      scopes: options.credentials?.scopes ?? [
        "https://security.microsoft.com/.default",
      ],
    },
  };

  const userAgentInfo = `azsdk-js-contoso-widgetmanager-rest/1.0.0-beta.1`;
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
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as WidgetManagerClient;

  return client;
}
