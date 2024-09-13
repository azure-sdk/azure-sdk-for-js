// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger.js";
import { TokenCredential } from "@azure/core-auth";
import { SigningClient } from "./clientDefinitions.js";

/** The optional parameters for the client */
export interface SigningClientOptions extends ClientOptions {
  /** The api version option of the client */
  apiVersion?: string;
}

/**
 * Initialize a new instance of `SigningClient`
 * @param region - The Azure region wherein requests for signing will be sent.
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  region: string,
  credentials: TokenCredential,
  { apiVersion = "2023-06-15-preview", ...options }: SigningClientOptions = {},
): SigningClient {
  const endpointUrl =
    options.endpoint ??
    options.baseUrl ??
    `https://${region}.codesigning.azure.net/`;
  const userAgentInfo = `azsdk-js-developer-signing-rest/1.0.0-beta.1`;
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
        "https://codesigning.azure.net/.default",
      ],
    },
  };
  const client = getClient(endpointUrl, credentials, options) as SigningClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  client.pipeline.addPolicy({
    name: "ClientApiVersionPolicy",
    sendRequest: (req, next) => {
      // Use the apiVersion defined in request url directly
      // Append one if there is no apiVersion and we have one at client options
      const url = new URL(req.url);
      if (!url.searchParams.get("api-version") && apiVersion) {
        req.url = `${req.url}${
          Array.from(url.searchParams.keys()).length > 0 ? "&" : "?"
        }api-version=${apiVersion}`;
      }

      return next(req);
    },
  });

  return client;
}
