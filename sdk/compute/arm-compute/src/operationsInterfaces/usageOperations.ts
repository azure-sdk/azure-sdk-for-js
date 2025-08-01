/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Usage, UsageListOptionalParams } from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a UsageOperations. */
export interface UsageOperations {
  /**
   * Gets, for the specified location, the current compute resource usage information as well as the
   * limits for compute resources under the subscription.
   * @param location The name of Azure region.
   * @param options The options parameters.
   */
  list(
    location: string,
    options?: UsageListOptionalParams,
  ): PagedAsyncIterableIterator<Usage>;
}
