/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  AccessPolicyCreateOrUpdateParameters,
  AccessPoliciesCreateOrUpdateOptionalParams,
  AccessPoliciesCreateOrUpdateResponse,
  AccessPoliciesGetOptionalParams,
  AccessPoliciesGetResponse,
  AccessPolicyUpdateParameters,
  AccessPoliciesUpdateOptionalParams,
  AccessPoliciesUpdateResponse,
  AccessPoliciesDeleteOptionalParams,
  AccessPoliciesListByEnvironmentOptionalParams,
  AccessPoliciesListByEnvironmentResponse
} from "../models/index.js";

/** Interface representing a AccessPolicies. */
export interface AccessPolicies {
  /**
   * Create or update an access policy in the specified environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param accessPolicyName Name of the access policy.
   * @param parameters Parameters for creating an access policy.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    environmentName: string,
    accessPolicyName: string,
    parameters: AccessPolicyCreateOrUpdateParameters,
    options?: AccessPoliciesCreateOrUpdateOptionalParams
  ): Promise<AccessPoliciesCreateOrUpdateResponse>;
  /**
   * Gets the access policy with the specified name in the specified environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param accessPolicyName The name of the Time Series Insights access policy associated with the
   *                         specified environment.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    environmentName: string,
    accessPolicyName: string,
    options?: AccessPoliciesGetOptionalParams
  ): Promise<AccessPoliciesGetResponse>;
  /**
   * Updates the access policy with the specified name in the specified subscription, resource group, and
   * environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param accessPolicyName The name of the Time Series Insights access policy associated with the
   *                         specified environment.
   * @param accessPolicyUpdateParameters Request object that contains the updated information for the
   *                                     access policy.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    environmentName: string,
    accessPolicyName: string,
    accessPolicyUpdateParameters: AccessPolicyUpdateParameters,
    options?: AccessPoliciesUpdateOptionalParams
  ): Promise<AccessPoliciesUpdateResponse>;
  /**
   * Deletes the access policy with the specified name in the specified subscription, resource group, and
   * environment
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param accessPolicyName The name of the Time Series Insights access policy associated with the
   *                         specified environment.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    environmentName: string,
    accessPolicyName: string,
    options?: AccessPoliciesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Lists all the available access policies associated with the environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param options The options parameters.
   */
  listByEnvironment(
    resourceGroupName: string,
    environmentName: string,
    options?: AccessPoliciesListByEnvironmentOptionalParams
  ): Promise<AccessPoliciesListByEnvironmentResponse>;
}
