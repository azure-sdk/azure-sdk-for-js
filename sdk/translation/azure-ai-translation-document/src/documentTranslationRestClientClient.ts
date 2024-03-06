// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { DocumentTranslationRestClientClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `DocumentTranslationRestClientClient`
 * @param endpoint - A sequence of textual characters.
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  credentials: TokenCredential | KeyCredential,
  options: ClientOptions = {},
): DocumentTranslationRestClientClient {
  const baseUrl = options.baseUrl ?? `${endpoint}/translator/text/batch/v1.0`;
  options.apiVersion = options.apiVersion ?? "v1.0";
  const userAgentInfo = `azsdk-js-azure-ai-translation-document-rest/1.0.0-beta.1`;
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
        "https://cognitiveservices.azure.com/.default",
      ],
      apiKeyHeaderName:
        options.credentials?.apiKeyHeaderName ?? "Ocp-Apim-Subscription-Key",
    },
  };

  const client = getClient(
    baseUrl,
    credentials,
    options,
  ) as DocumentTranslationRestClientClient;

  return client;
}
