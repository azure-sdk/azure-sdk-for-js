/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  VMwareCollector,
  VMwareCollectorsListByProjectOptionalParams,
  VMwareCollectorsGetOptionalParams,
  VMwareCollectorsGetResponse,
  VMwareCollectorsCreateOptionalParams,
  VMwareCollectorsCreateResponse,
  VMwareCollectorsDeleteOptionalParams,
  VMwareCollectorsDeleteResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VMwareCollectors. */
export interface VMwareCollectors {
  /**
   * Get a list of VMware collector.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The options parameters.
   */
  listByProject(
    resourceGroupName: string,
    projectName: string,
    options?: VMwareCollectorsListByProjectOptionalParams
  ): PagedAsyncIterableIterator<VMwareCollector>;
  /**
   * Get a VMware collector.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param vmWareCollectorName Unique name of a VMware collector within a project.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    vmWareCollectorName: string,
    options?: VMwareCollectorsGetOptionalParams
  ): Promise<VMwareCollectorsGetResponse>;
  /**
   * Create or Update VMware collector
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param vmWareCollectorName Unique name of a VMware collector within a project.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    projectName: string,
    vmWareCollectorName: string,
    options?: VMwareCollectorsCreateOptionalParams
  ): Promise<VMwareCollectorsCreateResponse>;
  /**
   * Delete a VMware collector from the project.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param vmWareCollectorName Unique name of a VMware collector within a project.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    projectName: string,
    vmWareCollectorName: string,
    options?: VMwareCollectorsDeleteOptionalParams
  ): Promise<VMwareCollectorsDeleteResponse>;
}
