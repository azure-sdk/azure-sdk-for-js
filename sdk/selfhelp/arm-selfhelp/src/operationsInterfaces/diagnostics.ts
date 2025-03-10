/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  DiagnosticsCreateOptionalParams,
  DiagnosticsCreateResponse,
  DiagnosticsGetOptionalParams,
  DiagnosticsGetResponse,
} from "../models/index.js";

/** Interface representing a Diagnostics. */
export interface Diagnostics {
  /**
   * Creates a diagnostic for the specific resource using solutionId from discovery solutions.
   * <br/>Diagnostics are powerful solutions that access product resources or other relevant data and
   * provide the root cause of the issue and the steps to address the issue.<br/><br/>
   * @param scope scope = resourceUri of affected resource.<br/> For example:
   *              /subscriptions/0d0fcd2e-c4fd-4349-8497-200edb3923c6/resourcegroups/myresourceGroup/providers/Microsoft.KeyVault/vaults/test-keyvault-non-read
   *
   * @param diagnosticsResourceName Unique resource name for insight resources
   * @param options The options parameters.
   */
  beginCreate(
    scope: string,
    diagnosticsResourceName: string,
    options?: DiagnosticsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DiagnosticsCreateResponse>,
      DiagnosticsCreateResponse
    >
  >;
  /**
   * Creates a diagnostic for the specific resource using solutionId from discovery solutions.
   * <br/>Diagnostics are powerful solutions that access product resources or other relevant data and
   * provide the root cause of the issue and the steps to address the issue.<br/><br/>
   * @param scope scope = resourceUri of affected resource.<br/> For example:
   *              /subscriptions/0d0fcd2e-c4fd-4349-8497-200edb3923c6/resourcegroups/myresourceGroup/providers/Microsoft.KeyVault/vaults/test-keyvault-non-read
   *
   * @param diagnosticsResourceName Unique resource name for insight resources
   * @param options The options parameters.
   */
  beginCreateAndWait(
    scope: string,
    diagnosticsResourceName: string,
    options?: DiagnosticsCreateOptionalParams,
  ): Promise<DiagnosticsCreateResponse>;
  /**
   * Get the diagnostics using the 'diagnosticsResourceName' you chose while creating the diagnostic.
   * @param scope scope = resourceUri of affected resource.<br/> For example:
   *              /subscriptions/0d0fcd2e-c4fd-4349-8497-200edb3923c6/resourcegroups/myresourceGroup/providers/Microsoft.KeyVault/vaults/test-keyvault-non-read
   *
   * @param diagnosticsResourceName Unique resource name for insight resources
   * @param options The options parameters.
   */
  get(
    scope: string,
    diagnosticsResourceName: string,
    options?: DiagnosticsGetOptionalParams,
  ): Promise<DiagnosticsGetResponse>;
}
