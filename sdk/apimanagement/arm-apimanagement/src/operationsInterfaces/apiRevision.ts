/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ApiRevisionContract,
  ApiRevisionListByServiceOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApiRevision. */
export interface ApiRevision {
  /**
   * Lists all revisions of an API.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  listByService(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiRevisionListByServiceOptionalParams,
  ): PagedAsyncIterableIterator<ApiRevisionContract>;
}
