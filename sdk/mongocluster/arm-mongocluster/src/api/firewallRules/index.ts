// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  MongoClusterManagementContext as Client,
  FirewallRulesCreateOrUpdateOptionalParams,
  FirewallRulesDeleteOptionalParams,
  FirewallRulesGetOptionalParams,
  FirewallRulesListByMongoClusterOptionalParams,
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
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _firewallRulesListByMongoClusterSend(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  options: FirewallRulesListByMongoClusterOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/firewallRules{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mongoClusterName: mongoClusterName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _firewallRulesListByMongoClusterDeserialize(
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

/** List all the firewall rules in a given mongo cluster. */
export function firewallRulesListByMongoCluster(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  options: FirewallRulesListByMongoClusterOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<FirewallRule> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _firewallRulesListByMongoClusterSend(context, resourceGroupName, mongoClusterName, options),
    _firewallRulesListByMongoClusterDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _firewallRulesDeleteSend(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  firewallRuleName: string,
  options: FirewallRulesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/firewallRules/{firewallRuleName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mongoClusterName: mongoClusterName,
      firewallRuleName: firewallRuleName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
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

/** Deletes a mongo cluster firewall rule. */
export function firewallRulesDelete(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
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
        mongoClusterName,
        firewallRuleName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _firewallRulesCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  firewallRuleName: string,
  resource: FirewallRule,
  options: FirewallRulesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/firewallRules/{firewallRuleName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mongoClusterName: mongoClusterName,
      firewallRuleName: firewallRuleName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: firewallRuleSerializer(resource),
  });
}

export async function _firewallRulesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<FirewallRule> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return firewallRuleDeserializer(result.body);
}

/** Creates a new firewall rule or updates an existing firewall rule on a mongo cluster. */
export function firewallRulesCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  firewallRuleName: string,
  resource: FirewallRule,
  options: FirewallRulesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<FirewallRule>, FirewallRule> {
  return getLongRunningPoller(
    context,
    _firewallRulesCreateOrUpdateDeserialize,
    ["200", "201", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _firewallRulesCreateOrUpdateSend(
          context,
          resourceGroupName,
          mongoClusterName,
          firewallRuleName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<FirewallRule>, FirewallRule>;
}

export function _firewallRulesGetSend(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  firewallRuleName: string,
  options: FirewallRulesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/firewallRules/{firewallRuleName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      mongoClusterName: mongoClusterName,
      firewallRuleName: firewallRuleName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
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

/** Gets information about a mongo cluster firewall rule. */
export async function firewallRulesGet(
  context: Client,
  resourceGroupName: string,
  mongoClusterName: string,
  firewallRuleName: string,
  options: FirewallRulesGetOptionalParams = { requestOptions: {} },
): Promise<FirewallRule> {
  const result = await _firewallRulesGetSend(
    context,
    resourceGroupName,
    mongoClusterName,
    firewallRuleName,
    options,
  );
  return _firewallRulesGetDeserialize(result);
}
