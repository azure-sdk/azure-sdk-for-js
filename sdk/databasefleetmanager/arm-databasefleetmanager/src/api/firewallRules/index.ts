// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseFleetManagerContext as Client,
  FirewallRulesCreateOrUpdateOptionalParams,
  FirewallRulesDeleteOptionalParams,
  FirewallRulesGetOptionalParams,
  FirewallRulesListByFleetspaceOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  FirewallRule,
  firewallRuleSerializer,
  firewallRuleDeserializer,
  _FirewallRuleListResult,
  _firewallRuleListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _firewallRulesListByFleetspaceSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  options: FirewallRulesListByFleetspaceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/firewallRules",
      context.subscriptionId,
      resourceGroupName,
      fleetName,
      fleetspaceName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        "api-version": context.apiVersion,
        $skip: options?.$skip,
        $top: options?.$top,
        $skiptoken: options?.$skiptoken,
      },
    });
}

export async function _firewallRulesListByFleetspaceDeserialize(
  result: PathUncheckedResponse,
): Promise<_FirewallRuleListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _firewallRuleListResultDeserializer(result.body);
}

/** Gets all firewall rules in a fleetspace. */
export function firewallRulesListByFleetspace(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  options: FirewallRulesListByFleetspaceOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<FirewallRule> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _firewallRulesListByFleetspaceSend(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        options,
      ),
    _firewallRulesListByFleetspaceDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _firewallRulesDeleteSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  firewallRuleName: string,
  options: FirewallRulesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/firewallRules/{firewallRuleName}",
      context.subscriptionId,
      resourceGroupName,
      fleetName,
      fleetspaceName,
      firewallRuleName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _firewallRulesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes a firewall rule. */
export function firewallRulesDelete(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  firewallRuleName: string,
  options: FirewallRulesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _firewallRulesDeleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _firewallRulesDeleteSend(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        firewallRuleName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _firewallRulesCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  firewallRuleName: string,
  resource: FirewallRule,
  options: FirewallRulesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/firewallRules/{firewallRuleName}",
      context.subscriptionId,
      resourceGroupName,
      fleetName,
      fleetspaceName,
      firewallRuleName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: firewallRuleSerializer(resource),
    });
}

export async function _firewallRulesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<FirewallRule> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return firewallRuleDeserializer(result.body);
}

/** Creates or updates a firewall rule. */
export function firewallRulesCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  firewallRuleName: string,
  resource: FirewallRule,
  options: FirewallRulesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<FirewallRule>, FirewallRule> {
  return getLongRunningPoller(context, _firewallRulesCreateOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _firewallRulesCreateOrUpdateSend(
        context,
        resourceGroupName,
        fleetName,
        fleetspaceName,
        firewallRuleName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<FirewallRule>, FirewallRule>;
}

export function _firewallRulesGetSend(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  firewallRuleName: string,
  options: FirewallRulesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseFleetManager/fleets/{fleetName}/fleetspaces/{fleetspaceName}/firewallRules/{firewallRuleName}",
      context.subscriptionId,
      resourceGroupName,
      fleetName,
      fleetspaceName,
      firewallRuleName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _firewallRulesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<FirewallRule> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return firewallRuleDeserializer(result.body);
}

/** Gets a firewall rule. */
export async function firewallRulesGet(
  context: Client,
  resourceGroupName: string,
  fleetName: string,
  fleetspaceName: string,
  firewallRuleName: string,
  options: FirewallRulesGetOptionalParams = { requestOptions: {} },
): Promise<FirewallRule> {
  const result = await _firewallRulesGetSend(
    context,
    resourceGroupName,
    fleetName,
    fleetspaceName,
    firewallRuleName,
    options,
  );
  return _firewallRulesGetDeserialize(result);
}
