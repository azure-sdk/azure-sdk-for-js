// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ClientOptions } from "@azure-rest/core-client";
import { getClient } from "@azure-rest/core-client";
import { logger } from "./logger.js";
import type { TokenCredential, KeyCredential } from "@azure/core-auth";
import type { BlobClient } from "./clientDefinitions.js";

/** The optional parameters for the client */
export interface BlobClientOptions extends ClientOptions {}

/**
 * Initialize a new instance of `BlobClient`
 * @param url - The host name of the blob storage account, e.g. accountName.blob.core.windows.net
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  url: string,
  credentials: TokenCredential | KeyCredential,
  options: BlobClientOptions = {},
): BlobClient {
  const endpointUrl = options.endpoint ?? options.baseUrl ?? `${url}`;
  const userAgentInfo = `azsdk-js-azure-storage-blob-rest/1.0.0-beta.1`;
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
      scopes: options.credentials?.scopes ?? ["https://storage.azure.com/.default"],
      apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "api-key",
    },
  };
  const client = getClient(endpointUrl, credentials, options) as BlobClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }

  return client;
}
