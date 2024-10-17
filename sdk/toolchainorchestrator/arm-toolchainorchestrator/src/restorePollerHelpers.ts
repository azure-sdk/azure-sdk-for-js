// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ToolchainOrchestratorClient } from "./toolchainOrchestratorClient.js";
import {
  _solutionsCreateOrUpdateDeserialize,
  _solutionsUpdateDeserialize,
  _solutionsDeleteDeserialize,
} from "./api/solutions/index.js";
import {
  _targetsCreateOrUpdateDeserialize,
  _targetsUpdateDeserialize,
  _targetsDeleteDeserialize,
} from "./api/targets/index.js";
import {
  _instancesCreateOrUpdateDeserialize,
  _instancesUpdateDeserialize,
  _instancesDeleteDeserialize,
} from "./api/instances/index.js";
import {
  _campaignsCreateOrUpdateDeserialize,
  _campaignsUpdateDeserialize,
  _campaignsDeleteDeserialize,
} from "./api/campaigns/index.js";
import {
  _activationsCreateOrUpdateDeserialize,
  _activationsUpdateDeserialize,
  _activationsDeleteDeserialize,
} from "./api/activations/index.js";
import {
  _catalogsCreateOrUpdateDeserialize,
  _catalogsUpdateDeserialize,
  _catalogsDeleteDeserialize,
} from "./api/catalogs/index.js";
import {
  _solutionVersionsCreateOrUpdateDeserialize,
  _solutionVersionsUpdateDeserialize,
  _solutionVersionsDeleteDeserialize,
} from "./api/solutionVersions/index.js";
import {
  _catalogVersionsCreateOrUpdateDeserialize,
  _catalogVersionsUpdateDeserialize,
  _catalogVersionsDeleteDeserialize,
  _catalogVersionsEvalExpressionDeserialize,
} from "./api/catalogVersions/index.js";
import {
  _campaignVersionsCreateOrUpdateDeserialize,
  _campaignVersionsUpdateDeserialize,
  _campaignVersionsDeleteDeserialize,
} from "./api/campaignVersions/index.js";
import {
  _diagnosticsCreateOrUpdateDeserialize,
  _diagnosticsUpdateDeserialize,
  _diagnosticsDeleteDeserialize,
} from "./api/diagnostics/index.js";
import { getLongRunningPoller } from "./static-helpers/pollingHelpers.js";
import {
  OperationOptions,
  PathUncheckedResponse,
} from "@azure-rest/core-client";
import { AbortSignalLike } from "@azure/abort-controller";
import {
  PollerLike,
  OperationState,
  deserializeState,
  ResourceLocationConfig,
} from "@azure/core-lro";

export interface RestorePollerOptions<
  TResult,
  TResponse extends PathUncheckedResponse = PathUncheckedResponse,
> extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /**
   * The signal which can be used to abort requests.
   */
  abortSignal?: AbortSignalLike;
  /** Deserialization function for raw response body */
  processResponseBody?: (result: TResponse) => Promise<TResult>;
}

/**
 * Creates a poller from the serialized state of another poller. This can be
 * useful when you want to create pollers on a different host or a poller
 * needs to be constructed after the original one is not in scope.
 */
export function restorePoller<TResponse extends PathUncheckedResponse, TResult>(
  client: ToolchainOrchestratorClient,
  serializedState: string,
  sourceOperation: (
    ...args: any[]
  ) => PollerLike<OperationState<TResult>, TResult>,
  options?: RestorePollerOptions<TResult>,
): PollerLike<OperationState<TResult>, TResult> {
  const pollerConfig = deserializeState(serializedState).config;
  const { initialRequestUrl, requestMethod, metadata } = pollerConfig;
  if (!initialRequestUrl || !requestMethod) {
    throw new Error(
      `Invalid serialized state: ${serializedState} for sourceOperation ${sourceOperation?.name}`,
    );
  }
  const resourceLocationConfig = metadata?.["resourceLocationConfig"] as
    | ResourceLocationConfig
    | undefined;
  const { deserializer, expectedStatuses = [] } =
    getDeserializationHelper(initialRequestUrl, requestMethod) ?? {};
  const deserializeHelper = options?.processResponseBody ?? deserializer;
  if (!deserializeHelper) {
    throw new Error(
      `Please ensure the operation is in this client! We can't find its deserializeHelper for ${sourceOperation?.name}.`,
    );
  }
  return getLongRunningPoller(
    (client as any)["_client"] ?? client,
    deserializeHelper as (result: TResponse) => Promise<TResult>,
    expectedStatuses,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      resourceLocationConfig,
      restoreFrom: serializedState,
      initialRequestUrl,
    },
  );
}

interface DeserializationHelper {
  deserializer: Function;
  expectedStatuses: string[];
}

const deserializeMap: Record<string, DeserializationHelper> = {
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/solutions/{solutionName}":
    {
      deserializer: _solutionsCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/solutions/{solutionName}":
    {
      deserializer: _solutionsUpdateDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/solutions/{solutionName}":
    {
      deserializer: _solutionsDeleteDeserialize,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/targets/{targetName}":
    {
      deserializer: _targetsCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/targets/{targetName}":
    {
      deserializer: _targetsUpdateDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/targets/{targetName}":
    {
      deserializer: _targetsDeleteDeserialize,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/instances/{instanceName}":
    {
      deserializer: _instancesCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/instances/{instanceName}":
    {
      deserializer: _instancesUpdateDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/instances/{instanceName}":
    {
      deserializer: _instancesDeleteDeserialize,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/campaigns/{campaignName}":
    {
      deserializer: _campaignsCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/campaigns/{campaignName}":
    {
      deserializer: _campaignsUpdateDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/campaigns/{campaignName}":
    {
      deserializer: _campaignsDeleteDeserialize,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/activations/{activationName}":
    {
      deserializer: _activationsCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/activations/{activationName}":
    {
      deserializer: _activationsUpdateDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/activations/{activationName}":
    {
      deserializer: _activationsDeleteDeserialize,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/catalogs/{catalogName}":
    {
      deserializer: _catalogsCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/catalogs/{catalogName}":
    {
      deserializer: _catalogsUpdateDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/catalogs/{catalogName}":
    {
      deserializer: _catalogsDeleteDeserialize,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/solutions/{solutionName}/versions/{versionName}":
    {
      deserializer: _solutionVersionsCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/solutions/{solutionName}/versions/{versionName}":
    {
      deserializer: _solutionVersionsUpdateDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/solutions/{solutionName}/versions/{versionName}":
    {
      deserializer: _solutionVersionsDeleteDeserialize,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/catalogs/{catalogName}/versions/{versionName}":
    {
      deserializer: _catalogVersionsCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/catalogs/{catalogName}/versions/{versionName}":
    {
      deserializer: _catalogVersionsUpdateDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/catalogs/{catalogName}/versions/{versionName}":
    {
      deserializer: _catalogVersionsDeleteDeserialize,
      expectedStatuses: ["202", "204", "200"],
    },
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/catalogs/{catalogName}/versions/{versionName}/evalExpression":
    {
      deserializer: _catalogVersionsEvalExpressionDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/campaigns/{campaignName}/versions/{versionName}":
    {
      deserializer: _campaignVersionsCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/campaigns/{campaignName}/versions/{versionName}":
    {
      deserializer: _campaignVersionsUpdateDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/campaigns/{campaignName}/versions/{versionName}":
    {
      deserializer: _campaignVersionsDeleteDeserialize,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/diagnostics/{diagnosticName}":
    {
      deserializer: _diagnosticsCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/diagnostics/{diagnosticName}":
    {
      deserializer: _diagnosticsUpdateDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/diagnostics/{diagnosticName}":
    {
      deserializer: _diagnosticsDeleteDeserialize,
      expectedStatuses: ["202", "204", "200"],
    },
};

function getDeserializationHelper(
  urlStr: string,
  method: string,
): DeserializationHelper | undefined {
  const path = new URL(urlStr).pathname;
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: DeserializationHelper | undefined;

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(deserializeMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
