// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerContext } from "../../api/databaseFleetManagerContext.js";
import {
  firewallRulesListByFleetspace,
  firewallRulesDelete,
  firewallRulesCreateOrUpdate,
  firewallRulesGet,
} from "../../api/firewallRules/index.js";
import {
  FirewallRulesListByFleetspaceOptionalParams,
  FirewallRulesDeleteOptionalParams,
  FirewallRulesCreateOrUpdateOptionalParams,
  FirewallRulesGetOptionalParams,
} from "../../api/options.js";
import { FirewallRule } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a FirewallRules operations. */
export interface FirewallRulesOperations {
  /** Gets all firewall rules in a fleetspace. */
  listByFleetspace: (
    resourceGroupName: string,
    fleetName: string,
    fleetspaceName: string,
    options?: FirewallRulesListByFleetspaceOptionalParams,
  ) => PagedAsyncIterableIterator<FirewallRule>;
  /** Deletes a firewall rule. */
  delete: (
    resourceGroupName: string,
    fleetName: string,
    fleetspaceName: string,
    firewallRuleName: string,
    options?: FirewallRulesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Creates or updates a firewall rule. */
  createOrUpdate: (
    resourceGroupName: string,
    fleetName: string,
    fleetspaceName: string,
    firewallRuleName: string,
    resource: FirewallRule,
    options?: FirewallRulesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<FirewallRule>, FirewallRule>;
  /** Gets a firewall rule. */
  get: (
    resourceGroupName: string,
    fleetName: string,
    fleetspaceName: string,
    firewallRuleName: string,
    options?: FirewallRulesGetOptionalParams,
  ) => Promise<FirewallRule>;
}

function _getFirewallRules(context: DatabaseFleetManagerContext) {
  return {
    listByFleetspace: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      options?: FirewallRulesListByFleetspaceOptionalParams,
    ) =>
      firewallRulesListByFleetspace(context, resourceGroupName, fleetName, fleetspaceName, options),
    delete: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      firewallRuleName: string,
      options?: FirewallRulesDeleteOptionalParams,
    ) =>
      firewallRulesDelete(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        firewallRuleName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      firewallRuleName: string,
      resource: FirewallRule,
      options?: FirewallRulesCreateOrUpdateOptionalParams,
    ) =>
      firewallRulesCreateOrUpdate(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        firewallRuleName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      fleetName: string,
      fleetspaceName: string,
      firewallRuleName: string,
      options?: FirewallRulesGetOptionalParams,
    ) =>
      firewallRulesGet(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        firewallRuleName,
        options,
      ),
  };
}

export function _getFirewallRulesOperations(
  context: DatabaseFleetManagerContext,
): FirewallRulesOperations {
  return {
    ..._getFirewallRules(context),
  };
}
