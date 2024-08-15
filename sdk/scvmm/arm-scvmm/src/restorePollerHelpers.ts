// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PollerLike,
  OperationState,
  deserializeState,
  ResourceLocationConfig,
} from "@azure/core-lro";
import { ScVmmClient } from "./scVmmClient.js";
import { getLongRunningPoller } from "./api/pollingHelpers.js";
import {
  _vmmServersCreateOrUpdateDeserialize,
  _vmmServersUpdateDeserialize,
  _vmmServersDeleteDeserialize,
} from "./api/vmmServers/index.js";
import {
  _cloudsCreateOrUpdateDeserialize,
  _cloudsUpdateDeserialize,
  _cloudsDeleteDeserialize,
} from "./api/clouds/index.js";
import {
  _virtualNetworksCreateOrUpdateDeserialize,
  _virtualNetworksUpdateDeserialize,
  _virtualNetworksDeleteDeserialize,
} from "./api/virtualNetworks/index.js";
import {
  _virtualMachineTemplatesCreateOrUpdateDeserialize,
  _virtualMachineTemplatesUpdateDeserialize,
  _virtualMachineTemplatesDeleteDeserialize,
} from "./api/virtualMachineTemplates/index.js";
import {
  _availabilitySetsCreateOrUpdateDeserialize,
  _availabilitySetsUpdateDeserialize,
  _availabilitySetsDeleteDeserialize,
} from "./api/availabilitySets/index.js";
import {
  _virtualMachineInstancesCreateOrUpdateDeserialize,
  _virtualMachineInstancesUpdateDeserialize,
  _virtualMachineInstancesDeleteDeserialize,
  _virtualMachineInstancesStopDeserialize,
  _virtualMachineInstancesStartDeserialize,
  _virtualMachineInstancesRestartDeserialize,
  _virtualMachineInstancesCreateCheckpointDeserialize,
  _virtualMachineInstancesDeleteCheckpointDeserialize,
  _virtualMachineInstancesRestoreCheckpointDeserialize,
} from "./api/virtualMachineInstances/index.js";
import { _guestAgentsCreateDeserialize } from "./api/guestAgents/index.js";
import {
  PathUncheckedResponse,
  OperationOptions,
} from "@azure-rest/core-client";
import { AbortSignalLike } from "@azure/abort-controller";

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
  client: ScVmmClient,
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
  const deserializeHelper =
    options?.processResponseBody ??
    getDeserializationHelper(initialRequestUrl, requestMethod);
  if (!deserializeHelper) {
    throw new Error(
      `Please ensure the operation is in this client! We can't find its deserializeHelper for ${sourceOperation?.name}.`,
    );
  }
  return getLongRunningPoller(
    (client as any)["_client"] ?? client,
    deserializeHelper as (result: TResponse) => Promise<TResult>,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      resourceLocationConfig,
      restoreFrom: serializedState,
      initialRequestUrl,
    },
  );
}

const deserializeMap: Record<string, Function> = {
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}":
    _vmmServersCreateOrUpdateDeserialize,
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}":
    _vmmServersUpdateDeserialize,
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}":
    _vmmServersDeleteDeserialize,
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}":
    _cloudsCreateOrUpdateDeserialize,
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}":
    _cloudsUpdateDeserialize,
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}":
    _cloudsDeleteDeserialize,
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}":
    _virtualNetworksCreateOrUpdateDeserialize,
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}":
    _virtualNetworksUpdateDeserialize,
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}":
    _virtualNetworksDeleteDeserialize,
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}":
    _virtualMachineTemplatesCreateOrUpdateDeserialize,
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}":
    _virtualMachineTemplatesUpdateDeserialize,
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}":
    _virtualMachineTemplatesDeleteDeserialize,
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}":
    _availabilitySetsCreateOrUpdateDeserialize,
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}":
    _availabilitySetsUpdateDeserialize,
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}":
    _availabilitySetsDeleteDeserialize,
  "PUT /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default":
    _virtualMachineInstancesCreateOrUpdateDeserialize,
  "PATCH /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default":
    _virtualMachineInstancesUpdateDeserialize,
  "DELETE /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default":
    _virtualMachineInstancesDeleteDeserialize,
  "POST /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/stop":
    _virtualMachineInstancesStopDeserialize,
  "POST /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/start":
    _virtualMachineInstancesStartDeserialize,
  "POST /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restart":
    _virtualMachineInstancesRestartDeserialize,
  "POST /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/createCheckpoint":
    _virtualMachineInstancesCreateCheckpointDeserialize,
  "POST /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/deleteCheckpoint":
    _virtualMachineInstancesDeleteCheckpointDeserialize,
  "POST /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restoreCheckpoint":
    _virtualMachineInstancesRestoreCheckpointDeserialize,
  "PUT /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default":
    _guestAgentsCreateDeserialize,
};

function getDeserializationHelper(
  urlStr: string,
  method: string,
): ((result: unknown) => Promise<unknown>) | undefined {
  const path = new URL(urlStr).pathname;
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: ((result: unknown) => Promise<unknown>) | undefined;

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
      matchedValue = value as (result: unknown) => Promise<unknown>;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
