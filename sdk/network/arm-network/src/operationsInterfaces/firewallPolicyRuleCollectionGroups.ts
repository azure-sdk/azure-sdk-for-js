/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  FirewallPolicyRuleCollectionGroup,
  FirewallPolicyRuleCollectionGroupsListOptionalParams,
  FirewallPolicyRuleCollectionGroupsDeleteOptionalParams,
  FirewallPolicyRuleCollectionGroupsGetOptionalParams,
  FirewallPolicyRuleCollectionGroupsGetResponse,
  FirewallPolicyRuleCollectionGroupsCreateOrUpdateOptionalParams,
  FirewallPolicyRuleCollectionGroupsCreateOrUpdateResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FirewallPolicyRuleCollectionGroups. */
export interface FirewallPolicyRuleCollectionGroups {
  /**
   * Lists all FirewallPolicyRuleCollectionGroups in a FirewallPolicy resource.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    firewallPolicyName: string,
    options?: FirewallPolicyRuleCollectionGroupsListOptionalParams,
  ): PagedAsyncIterableIterator<FirewallPolicyRuleCollectionGroup>;
  /**
   * Deletes the specified FirewallPolicyRuleCollectionGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleCollectionGroupName The name of the FirewallPolicyRuleCollectionGroup.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    firewallPolicyName: string,
    ruleCollectionGroupName: string,
    options?: FirewallPolicyRuleCollectionGroupsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the specified FirewallPolicyRuleCollectionGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleCollectionGroupName The name of the FirewallPolicyRuleCollectionGroup.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    firewallPolicyName: string,
    ruleCollectionGroupName: string,
    options?: FirewallPolicyRuleCollectionGroupsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Gets the specified FirewallPolicyRuleCollectionGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleCollectionGroupName The name of the FirewallPolicyRuleCollectionGroup.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    firewallPolicyName: string,
    ruleCollectionGroupName: string,
    options?: FirewallPolicyRuleCollectionGroupsGetOptionalParams,
  ): Promise<FirewallPolicyRuleCollectionGroupsGetResponse>;
  /**
   * Creates or updates the specified FirewallPolicyRuleCollectionGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleCollectionGroupName The name of the FirewallPolicyRuleCollectionGroup.
   * @param parameters Parameters supplied to the create or update FirewallPolicyRuleCollectionGroup
   *                   operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    firewallPolicyName: string,
    ruleCollectionGroupName: string,
    parameters: FirewallPolicyRuleCollectionGroup,
    options?: FirewallPolicyRuleCollectionGroupsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<FirewallPolicyRuleCollectionGroupsCreateOrUpdateResponse>,
      FirewallPolicyRuleCollectionGroupsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates the specified FirewallPolicyRuleCollectionGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleCollectionGroupName The name of the FirewallPolicyRuleCollectionGroup.
   * @param parameters Parameters supplied to the create or update FirewallPolicyRuleCollectionGroup
   *                   operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    firewallPolicyName: string,
    ruleCollectionGroupName: string,
    parameters: FirewallPolicyRuleCollectionGroup,
    options?: FirewallPolicyRuleCollectionGroupsCreateOrUpdateOptionalParams,
  ): Promise<FirewallPolicyRuleCollectionGroupsCreateOrUpdateResponse>;
}
