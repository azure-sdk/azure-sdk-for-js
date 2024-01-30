// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { TokenCredential } from "@azure/core-auth";
import { DeidentificationClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `DeidentificationClient`
 * @param deidServiceUri - Uri of your Deid Service.
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  deidServiceUri: string,
  credentials: TokenCredential,
  options: ClientOptions = {},
): DeidentificationClient {
  const baseUrl = options.baseUrl ?? `https://${deidServiceUri}`;
  options.apiVersion = options.apiVersion ?? "2024-01-31-preview";
  const userAgentInfo = `azsdk-js-azure-healthdataaiservices-deid-rest/1.0.0-beta.1`;
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
      scopes: options.credentials?.scopes ?? [
        "https://deid.azure.com/.default",
      ],
    },
  };

  const client = getClient(
    baseUrl,
    credentials,
    options,
  ) as DeidentificationClient;

  return client;
}
