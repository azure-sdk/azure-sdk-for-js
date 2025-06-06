/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { PagedAsyncIterableIterator } from "@azure/core-paging";
import type {
  TuningOptionsResource,
  TuningOptionsListByServerOptionalParams,
  TuningOptionEnum,
  TuningOptionsGetOptionalParams,
  TuningOptionsGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a TuningOptions. */
export interface TuningOptions {
  /**
   * Retrieve the list of available tuning options.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: TuningOptionsListByServerOptionalParams,
  ): PagedAsyncIterableIterator<TuningOptionsResource>;
  /**
   * Retrieve the tuning option on a server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param tuningOption The name of the tuning option.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    tuningOption: TuningOptionEnum,
    options?: TuningOptionsGetOptionalParams,
  ): Promise<TuningOptionsGetResponse>;
}
