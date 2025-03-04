/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ClusterQuotaConfigurationProperties,
  ConfigurationPatchOptionalParams,
  ConfigurationPatchResponse,
  ConfigurationGetOptionalParams,
  ConfigurationGetResponse,
} from "../models/index.js";

/** Interface representing a Configuration. */
export interface Configuration {
  /**
   * Replace all specified Event Hubs Cluster settings with those contained in the request body. Leaves
   * the settings not specified in the request body unmodified.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param clusterName The name of the Event Hubs Cluster.
   * @param parameters Parameters for creating an Event Hubs Cluster resource.
   * @param options The options parameters.
   */
  patch(
    resourceGroupName: string,
    clusterName: string,
    parameters: ClusterQuotaConfigurationProperties,
    options?: ConfigurationPatchOptionalParams,
  ): Promise<ConfigurationPatchResponse>;
  /**
   * Get all Event Hubs Cluster settings - a collection of key/value pairs which represent the quotas and
   * settings imposed on the cluster.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param clusterName The name of the Event Hubs Cluster.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    options?: ConfigurationGetOptionalParams,
  ): Promise<ConfigurationGetResponse>;
}
