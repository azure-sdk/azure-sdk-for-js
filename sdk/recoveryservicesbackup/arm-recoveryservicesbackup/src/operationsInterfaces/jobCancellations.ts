/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { JobCancellationsTriggerOptionalParams } from "../models/index.js";

/** Interface representing a JobCancellations. */
export interface JobCancellations {
  /**
   * Cancels a job. This is an asynchronous operation. To know the status of the cancellation, call
   * GetCancelOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param jobName Name of the job to cancel.
   * @param options The options parameters.
   */
  trigger(
    vaultName: string,
    resourceGroupName: string,
    jobName: string,
    options?: JobCancellationsTriggerOptionalParams,
  ): Promise<void>;
}
