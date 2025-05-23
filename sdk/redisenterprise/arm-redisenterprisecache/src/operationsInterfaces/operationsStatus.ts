/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationsStatusGetOptionalParams,
  OperationsStatusGetResponse,
} from "../models/index.js";

/** Interface representing a OperationsStatus. */
export interface OperationsStatus {
  /**
   * Gets the status of operation.
   * @param location The name of Azure region.
   * @param operationId The ID of an ongoing async operation.
   * @param options The options parameters.
   */
  get(
    location: string,
    operationId: string,
    options?: OperationsStatusGetOptionalParams,
  ): Promise<OperationsStatusGetResponse>;
}
