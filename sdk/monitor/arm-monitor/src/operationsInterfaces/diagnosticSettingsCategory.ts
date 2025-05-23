/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DiagnosticSettingsCategoryResource,
  DiagnosticSettingsCategoryListOptionalParams,
  DiagnosticSettingsCategoryGetOptionalParams,
  DiagnosticSettingsCategoryGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DiagnosticSettingsCategory. */
export interface DiagnosticSettingsCategory {
  /**
   * Lists the diagnostic settings categories for the specified resource.
   * @param resourceUri The identifier of the resource.
   * @param options The options parameters.
   */
  list(
    resourceUri: string,
    options?: DiagnosticSettingsCategoryListOptionalParams,
  ): PagedAsyncIterableIterator<DiagnosticSettingsCategoryResource>;
  /**
   * Gets the diagnostic settings category for the specified resource.
   * @param resourceUri The identifier of the resource.
   * @param name The name of the diagnostic setting.
   * @param options The options parameters.
   */
  get(
    resourceUri: string,
    name: string,
    options?: DiagnosticSettingsCategoryGetOptionalParams,
  ): Promise<DiagnosticSettingsCategoryGetResponse>;
}
