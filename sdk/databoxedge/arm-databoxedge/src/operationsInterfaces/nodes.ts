/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Node, NodesListByDataBoxEdgeDeviceOptionalParams } from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Nodes. */
export interface Nodes {
  /**
   * Gets all the nodes currently configured under this Data Box Edge device
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  listByDataBoxEdgeDevice(
    deviceName: string,
    resourceGroupName: string,
    options?: NodesListByDataBoxEdgeDeviceOptionalParams
  ): PagedAsyncIterableIterator<Node>;
}
