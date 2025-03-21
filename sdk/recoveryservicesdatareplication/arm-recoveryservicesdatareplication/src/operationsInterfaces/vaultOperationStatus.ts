/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  VaultOperationStatusGetOptionalParams,
  VaultOperationStatusGetResponse
} from "../models/index.js";

/** Interface representing a VaultOperationStatus. */
export interface VaultOperationStatus {
  /**
   * Tracks the results of an asynchronous operation on the vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param operationId The ID of an ongoing async operation.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    operationId: string,
    options?: VaultOperationStatusGetOptionalParams
  ): Promise<VaultOperationStatusGetResponse>;
}
