/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Secret,
  SecretsListOptionalParams,
  SecretsGetOptionalParams,
  SecretsGetResponse,
  SecretsCreateOrUpdateOptionalParams,
  SecretsCreateOrUpdateResponse,
  SecretsDeleteOptionalParams,
  SecretFragment,
  SecretsUpdateOptionalParams,
  SecretsUpdateResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Secrets. */
export interface Secrets {
  /**
   * List secrets in a given user profile.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    labName: string,
    userName: string,
    options?: SecretsListOptionalParams
  ): PagedAsyncIterableIterator<Secret>;
  /**
   * Get secret.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the secret.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    options?: SecretsGetOptionalParams
  ): Promise<SecretsGetResponse>;
  /**
   * Create or replace an existing secret. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the secret.
   * @param secret A secret.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    secret: Secret,
    options?: SecretsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SecretsCreateOrUpdateResponse>,
      SecretsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or replace an existing secret. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the secret.
   * @param secret A secret.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    secret: Secret,
    options?: SecretsCreateOrUpdateOptionalParams
  ): Promise<SecretsCreateOrUpdateResponse>;
  /**
   * Delete secret.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the secret.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    options?: SecretsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Allows modifying tags of secrets. All other properties will be ignored.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the secret.
   * @param secret A secret.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    secret: SecretFragment,
    options?: SecretsUpdateOptionalParams
  ): Promise<SecretsUpdateResponse>;
}
