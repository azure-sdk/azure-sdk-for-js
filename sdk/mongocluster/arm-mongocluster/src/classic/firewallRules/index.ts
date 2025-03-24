// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MongoClusterManagementContext } from "../../api/mongoClusterManagementContext.js";
import {
  firewallRulesListByMongoCluster,
  firewallRulesDelete,
  firewallRulesCreateOrUpdate,
  firewallRulesGet,
} from "../../api/firewallRules/index.js";
import { FirewallRule } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  FirewallRulesListByMongoClusterOptionalParams,
  FirewallRulesDeleteOptionalParams,
  FirewallRulesCreateOrUpdateOptionalParams,
  FirewallRulesGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a FirewallRules operations. */
export interface FirewallRulesOperations {
  /** List all the firewall rules in a given mongo cluster. */
  listByMongoCluster: (
    resourceGroupName: string,
    mongoClusterName: string,
    options?: FirewallRulesListByMongoClusterOptionalParams,
  ) => PagedAsyncIterableIterator<FirewallRule>;
  /** Deletes a mongo cluster firewall rule. */
  delete: (
    resourceGroupName: string,
    mongoClusterName: string,
    firewallRuleName: string,
    options?: FirewallRulesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Creates a new firewall rule or updates an existing firewall rule on a mongo cluster. */
  createOrUpdate: (
    resourceGroupName: string,
    mongoClusterName: string,
    firewallRuleName: string,
    resource: FirewallRule,
    options?: FirewallRulesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<FirewallRule>, FirewallRule>;
  /** Gets information about a mongo cluster firewall rule. */
  get: (
    resourceGroupName: string,
    mongoClusterName: string,
    firewallRuleName: string,
    options?: FirewallRulesGetOptionalParams,
  ) => Promise<FirewallRule>;
}

function _getFirewallRules(context: MongoClusterManagementContext) {
  return {
    listByMongoCluster: (
      resourceGroupName: string,
      mongoClusterName: string,
      options?: FirewallRulesListByMongoClusterOptionalParams,
    ) => firewallRulesListByMongoCluster(context, resourceGroupName, mongoClusterName, options),
    delete: (
      resourceGroupName: string,
      mongoClusterName: string,
      firewallRuleName: string,
      options?: FirewallRulesDeleteOptionalParams,
    ) =>
      firewallRulesDelete(context, resourceGroupName, mongoClusterName, firewallRuleName, options),
    createOrUpdate: (
      resourceGroupName: string,
      mongoClusterName: string,
      firewallRuleName: string,
      resource: FirewallRule,
      options?: FirewallRulesCreateOrUpdateOptionalParams,
    ) =>
      firewallRulesCreateOrUpdate(
        context,
        resourceGroupName,
        mongoClusterName,
        firewallRuleName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      mongoClusterName: string,
      firewallRuleName: string,
      options?: FirewallRulesGetOptionalParams,
    ) => firewallRulesGet(context, resourceGroupName, mongoClusterName, firewallRuleName, options),
  };
}

export function _getFirewallRulesOperations(
  context: MongoClusterManagementContext,
): FirewallRulesOperations {
  return {
    ..._getFirewallRules(context),
  };
}
