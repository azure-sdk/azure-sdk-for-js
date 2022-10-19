// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { LoadTestingClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class LoadTestingClient class.
 * @param Endpoint type: string URL to perform data plane API operations on the resource.
 * @param credentials type: TokenCredential
 */
export default function createClient(
  Endpoint: string,
  credentials: TokenCredential,
  options: ClientOptions = {}
): LoadTestingClient {
  const baseUrl = options.baseUrl ?? `https://${Endpoint}`;
  options.apiVersion = options.apiVersion ?? "2022-11-01";
  options = {
    ...options,
    credentials: {
      scopes: ["https://loadtest.azure-dev.com/.default"]
    }
  };

  const userAgentInfo = `azsdk-js-loadtestservice-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix
    }
  };

  const client = getClient(baseUrl, credentials, options) as LoadTestingClient;

  return client;
}
