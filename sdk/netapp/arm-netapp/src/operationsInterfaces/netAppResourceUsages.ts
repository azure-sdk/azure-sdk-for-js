/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  UsageResult,
  NetAppResourceUsagesListOptionalParams,
  NetAppResourceUsagesGetOptionalParams,
  NetAppResourceUsagesGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a NetAppResourceUsages. */
export interface NetAppResourceUsages {
  /**
   * Get current subscription usages
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  list(
    location: string,
    options?: NetAppResourceUsagesListOptionalParams,
  ): PagedAsyncIterableIterator<UsageResult>;
  /**
   * Get current subscription usage of the specific type
   * @param location The name of the Azure region.
   * @param usageType The type of usage
   * @param options The options parameters.
   */
  get(
    location: string,
    usageType: string,
    options?: NetAppResourceUsagesGetOptionalParams,
  ): Promise<NetAppResourceUsagesGetResponse>;
}
