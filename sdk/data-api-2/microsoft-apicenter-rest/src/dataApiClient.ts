// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { KeyCredential } from "@azure/core-auth";
import { DataApiClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `DataApiClient`
 * @param serviceName - Region-unique API Center service name
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  serviceName: string,
  credentials: KeyCredential,
  options: ClientOptions = {}
): DataApiClient {
  const baseUrl =
    options.baseUrl ?? `https://${serviceName}.data.azure-apicenter.net`;
  options.apiVersion = options.apiVersion ?? "2024-03-01";
  const userAgentInfo = `azsdk-js-microsoft-apicenter-rest/1.0.0-beta.1`;
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
      apiKeyHeaderName:
        options.credentials?.apiKeyHeaderName ?? "Authorization",
    },
  };

  const client = getClient(baseUrl, credentials, options) as DataApiClient;

  return client;
}
