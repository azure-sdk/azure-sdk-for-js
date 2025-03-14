/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationResultsGetOptionalParams,
  OperationResultsGetResponse
} from "../models/index.js";

/** Interface representing a OperationResults. */
export interface OperationResults {
  /**
   * Returns an azure operation result.
   * @param operationResultId The operation result ID / name.
   * @param options The options parameters.
   */
  get(
    operationResultId: string,
    options?: OperationResultsGetOptionalParams
  ): Promise<OperationResultsGetResponse>;
}
