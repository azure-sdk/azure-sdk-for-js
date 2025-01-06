// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AvsClient } from "./avsClient.js";
import {
  _privateCloudsCreateOrUpdateDeserialize,
  _privateCloudsUpdateDeserialize,
  _privateCloudsDeleteDeserialize,
  _privateCloudsRotateVcenterPasswordDeserialize,
  _privateCloudsRotateNsxtPasswordDeserialize,
} from "./api/privateClouds/index.js";
import {
  _clustersCreateOrUpdateDeserialize,
  _clustersUpdateDeserialize,
  _clustersDeleteDeserialize,
} from "./api/clusters/index.js";
import {
  _datastoresCreateOrUpdateDeserialize,
  _datastoresDeleteDeserialize,
} from "./api/datastores/index.js";
import {
  _authorizationsCreateOrUpdateDeserialize,
  _authorizationsDeleteDeserialize,
} from "./api/authorizations/index.js";
import {
  _globalReachConnectionsCreateOrUpdateDeserialize,
  _globalReachConnectionsDeleteDeserialize,
} from "./api/globalReachConnections/index.js";
import {
  _cloudLinksCreateOrUpdateDeserialize,
  _cloudLinksDeleteDeserialize,
} from "./api/cloudLinks/index.js";
import {
  _addonsCreateOrUpdateDeserialize,
  _addonsDeleteDeserialize,
} from "./api/addons/index.js";
import { _virtualMachinesRestrictMovementDeserialize } from "./api/virtualMachines/index.js";
import {
  _placementPoliciesCreateOrUpdateDeserialize,
  _placementPoliciesUpdateDeserialize,
  _placementPoliciesDeleteDeserialize,
} from "./api/placementPolicies/index.js";
import {
  _scriptExecutionsCreateOrUpdateDeserialize,
  _scriptExecutionsDeleteDeserialize,
} from "./api/scriptExecutions/index.js";
import {
  _iscsiPathsCreateOrUpdateDeserialize,
  _iscsiPathsDeleteDeserialize,
} from "./api/iscsiPaths/index.js";
import {
  _workloadNetworksCreateSegmentDeserialize,
  _workloadNetworksUpdateSegmentDeserialize,
  _workloadNetworksDeleteSegmentDeserialize,
  _workloadNetworksCreateDhcpDeserialize,
  _workloadNetworksUpdateDhcpDeserialize,
  _workloadNetworksDeleteDhcpDeserialize,
  _workloadNetworksCreatePortMirroringDeserialize,
  _workloadNetworksUpdatePortMirroringDeserialize,
  _workloadNetworksDeletePortMirroringDeserialize,
  _workloadNetworksCreateVMGroupDeserialize,
  _workloadNetworksUpdateVMGroupDeserialize,
  _workloadNetworksDeleteVMGroupDeserialize,
  _workloadNetworksCreateDnsServiceDeserialize,
  _workloadNetworksUpdateDnsServiceDeserialize,
  _workloadNetworksDeleteDnsServiceDeserialize,
  _workloadNetworksCreateDnsZoneDeserialize,
  _workloadNetworksUpdateDnsZoneDeserialize,
  _workloadNetworksDeleteDnsZoneDeserialize,
  _workloadNetworksCreatePublicIPDeserialize,
  _workloadNetworksDeletePublicIPDeserialize,
} from "./api/workloadNetworks/index.js";
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
  client: AvsClient,
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
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}":
    {
      deserializer: _privateCloudsCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}":
    {
      deserializer: _privateCloudsUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}":
    {
      deserializer: _privateCloudsDeleteDeserialize,
      expectedStatuses: ["200", "202", "204"],
    },
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateVcenterPassword":
    {
      deserializer: _privateCloudsRotateVcenterPasswordDeserialize,
      expectedStatuses: ["202", "204", "200"],
    },
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateNsxtPassword":
    {
      deserializer: _privateCloudsRotateNsxtPasswordDeserialize,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}":
    {
      deserializer: _clustersCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}":
    {
      deserializer: _clustersUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}":
    {
      deserializer: _clustersDeleteDeserialize,
      expectedStatuses: ["200", "202", "204"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}":
    {
      deserializer: _datastoresCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}":
    {
      deserializer: _datastoresDeleteDeserialize,
      expectedStatuses: ["200", "202", "204"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}":
    {
      deserializer: _authorizationsCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}":
    {
      deserializer: _authorizationsDeleteDeserialize,
      expectedStatuses: ["200", "202", "204"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}":
    {
      deserializer: _globalReachConnectionsCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}":
    {
      deserializer: _globalReachConnectionsDeleteDeserialize,
      expectedStatuses: ["200", "202", "204"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}":
    {
      deserializer: _cloudLinksCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}":
    {
      deserializer: _cloudLinksDeleteDeserialize,
      expectedStatuses: ["200", "202", "204"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}":
    {
      deserializer: _addonsCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}":
    {
      deserializer: _addonsDeleteDeserialize,
      expectedStatuses: ["200", "202", "204"],
    },
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}/restrictMovement":
    {
      deserializer: _virtualMachinesRestrictMovementDeserialize,
      expectedStatuses: ["202", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}":
    {
      deserializer: _placementPoliciesCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}":
    {
      deserializer: _placementPoliciesUpdateDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}":
    {
      deserializer: _placementPoliciesDeleteDeserialize,
      expectedStatuses: ["200", "202", "204"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}":
    {
      deserializer: _scriptExecutionsCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}":
    {
      deserializer: _scriptExecutionsDeleteDeserialize,
      expectedStatuses: ["200", "202", "204"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/{iscsiPathName}":
    {
      deserializer: _iscsiPathsCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/{iscsiPathName}":
    {
      deserializer: _iscsiPathsDeleteDeserialize,
      expectedStatuses: ["200", "202", "204"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/segments/{segmentId}":
    {
      deserializer: _workloadNetworksCreateSegmentDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/segments/{segmentId}":
    {
      deserializer: _workloadNetworksUpdateSegmentDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/segments/{segmentId}":
    {
      deserializer: _workloadNetworksDeleteSegmentDeserialize,
      expectedStatuses: ["200", "202", "204"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dhcpConfigurations/{dhcpId}":
    {
      deserializer: _workloadNetworksCreateDhcpDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dhcpConfigurations/{dhcpId}":
    {
      deserializer: _workloadNetworksUpdateDhcpDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dhcpConfigurations/{dhcpId}":
    {
      deserializer: _workloadNetworksDeleteDhcpDeserialize,
      expectedStatuses: ["200", "202", "204"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/portMirroringProfiles/{portMirroringId}":
    {
      deserializer: _workloadNetworksCreatePortMirroringDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/portMirroringProfiles/{portMirroringId}":
    {
      deserializer: _workloadNetworksUpdatePortMirroringDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}":
    {
      deserializer: _workloadNetworksDeletePortMirroringDeserialize,
      expectedStatuses: ["200", "202", "204"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/vmGroups/{vmGroupId}":
    {
      deserializer: _workloadNetworksCreateVMGroupDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/vmGroups/{vmGroupId}":
    {
      deserializer: _workloadNetworksUpdateVMGroupDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}":
    {
      deserializer: _workloadNetworksDeleteVMGroupDeserialize,
      expectedStatuses: ["200", "202", "204"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsServices/{dnsServiceId}":
    {
      deserializer: _workloadNetworksCreateDnsServiceDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsServices/{dnsServiceId}":
    {
      deserializer: _workloadNetworksUpdateDnsServiceDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}":
    {
      deserializer: _workloadNetworksDeleteDnsServiceDeserialize,
      expectedStatuses: ["200", "202", "204"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsZones/{dnsZoneId}":
    {
      deserializer: _workloadNetworksCreateDnsZoneDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/dnsZones/{dnsZoneId}":
    {
      deserializer: _workloadNetworksUpdateDnsZoneDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}":
    {
      deserializer: _workloadNetworksDeleteDnsZoneDeserialize,
      expectedStatuses: ["200", "202", "204"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/{workloadNetworkName}/publicIPs/{publicIPId}":
    {
      deserializer: _workloadNetworksCreatePublicIPDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}":
    {
      deserializer: _workloadNetworksDeletePublicIPDeserialize,
      expectedStatuses: ["200", "202", "204"],
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
