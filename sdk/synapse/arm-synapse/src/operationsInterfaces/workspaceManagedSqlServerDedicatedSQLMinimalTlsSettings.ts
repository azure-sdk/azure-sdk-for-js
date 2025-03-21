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
  DedicatedSQLminimalTlsSettings,
  WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListOptionalParams,
  DedicatedSQLMinimalTlsSettingsName,
  WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateOptionalParams,
  WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateResponse,
  WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsGetOptionalParams,
  WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsGetResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettings. */
export interface WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettings {
  /**
   * List workspace managed sql server's minimal tls settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListOptionalParams
  ): PagedAsyncIterableIterator<DedicatedSQLminimalTlsSettings>;
  /**
   * Update workspace managed sql server's minimal tls settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dedicatedSQLminimalTlsSettingsName The name of the dedicated sql minimal tls settings.
   * @param parameters minimal tls settings
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    workspaceName: string,
    dedicatedSQLminimalTlsSettingsName: DedicatedSQLMinimalTlsSettingsName,
    parameters: DedicatedSQLminimalTlsSettings,
    options?: WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateResponse
      >,
      WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateResponse
    >
  >;
  /**
   * Update workspace managed sql server's minimal tls settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dedicatedSQLminimalTlsSettingsName The name of the dedicated sql minimal tls settings.
   * @param parameters minimal tls settings
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    dedicatedSQLminimalTlsSettingsName: DedicatedSQLMinimalTlsSettingsName,
    parameters: DedicatedSQLminimalTlsSettings,
    options?: WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateOptionalParams
  ): Promise<
    WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateResponse
  >;
  /**
   * Get workspace managed sql server's minimal tls settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dedicatedSQLminimalTlsSettingsName The name of the dedicated sql minimal tls settings.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    dedicatedSQLminimalTlsSettingsName: string,
    options?: WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsGetOptionalParams
  ): Promise<
    WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsGetResponse
  >;
}
