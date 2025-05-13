// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsClient } from "./ioTOperationsClient.js";
import {
  _$deleteDeserialize,
  _createOrUpdateDeserialize,
} from "./api/akriDiscoveryHandler/operations.js";
import {
  _$deleteDeserialize as _$deleteDeserializeAkriConnector,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeAkriConnector,
} from "./api/akriConnector/operations.js";
import {
  _$deleteDeserialize as _$deleteDeserializeAkriConnectorTemplate,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeAkriConnectorTemplate,
} from "./api/akriConnectorTemplate/operations.js";
import {
  _$deleteDeserialize as _$deleteDeserializeRegistryEndpoint,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeRegistryEndpoint,
} from "./api/registryEndpoint/operations.js";
import {
  _$deleteDeserialize as _$deleteDeserializeDataflowGraph,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeDataflowGraph,
} from "./api/dataflowGraph/operations.js";
import {
  _$deleteDeserialize as _$deleteDeserializeDataflowEndpoint,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeDataflowEndpoint,
} from "./api/dataflowEndpoint/operations.js";
import {
  _$deleteDeserialize as _$deleteDeserializeDataflow,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeDataflow,
} from "./api/dataflow/operations.js";
import {
  _$deleteDeserialize as _$deleteDeserializeDataflowProfile,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeDataflowProfile,
} from "./api/dataflowProfile/operations.js";
import {
  _$deleteDeserialize as _$deleteDeserializeBrokerAuthorization,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeBrokerAuthorization,
} from "./api/brokerAuthorization/operations.js";
import {
  _$deleteDeserialize as _$deleteDeserializeBrokerAuthentication,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeBrokerAuthentication,
} from "./api/brokerAuthentication/operations.js";
import {
  _$deleteDeserialize as _$deleteDeserializeBrokerListener,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeBrokerListener,
} from "./api/brokerListener/operations.js";
import {
  _$deleteDeserialize as _$deleteDeserializeBroker,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeBroker,
} from "./api/broker/operations.js";
import {
  _$deleteDeserialize as _$deleteDeserializeInstance,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeInstance,
} from "./api/instance/operations.js";
import { getLongRunningPoller } from "./static-helpers/pollingHelpers.js";
import { OperationOptions, PathUncheckedResponse } from "@azure-rest/core-client";
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
  client: IoTOperationsClient,
  serializedState: string,
  sourceOperation: (...args: any[]) => PollerLike<OperationState<TResult>, TResult>,
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
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriDiscoveryHandlers/{akriDiscoveryHandlerName}":
    {
      deserializer: _$deleteDeserialize,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriDiscoveryHandlers/{akriDiscoveryHandlerName}":
    {
      deserializer: _createOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}/akriConnectors/{akriConnectorName}":
    {
      deserializer: _$deleteDeserializeAkriConnector,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}/akriConnectors/{akriConnectorName}":
    {
      deserializer: _createOrUpdateDeserializeAkriConnector,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}":
    {
      deserializer: _$deleteDeserializeAkriConnectorTemplate,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}":
    {
      deserializer: _createOrUpdateDeserializeAkriConnectorTemplate,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/registryEndpoints/{registryEndpointName}":
    {
      deserializer: _$deleteDeserializeRegistryEndpoint,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/registryEndpoints/{registryEndpointName}":
    {
      deserializer: _createOrUpdateDeserializeRegistryEndpoint,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflowGraphs/{dataflowGraphName}":
    {
      deserializer: _$deleteDeserializeDataflowGraph,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflowGraphs/{dataflowGraphName}":
    {
      deserializer: _createOrUpdateDeserializeDataflowGraph,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowEndpoints/{dataflowEndpointName}":
    {
      deserializer: _$deleteDeserializeDataflowEndpoint,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowEndpoints/{dataflowEndpointName}":
    {
      deserializer: _createOrUpdateDeserializeDataflowEndpoint,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflows/{dataflowName}":
    {
      deserializer: _$deleteDeserializeDataflow,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflows/{dataflowName}":
    {
      deserializer: _createOrUpdateDeserializeDataflow,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}":
    {
      deserializer: _$deleteDeserializeDataflowProfile,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}":
    {
      deserializer: _createOrUpdateDeserializeDataflowProfile,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations/{authorizationName}":
    {
      deserializer: _$deleteDeserializeBrokerAuthorization,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations/{authorizationName}":
    {
      deserializer: _createOrUpdateDeserializeBrokerAuthorization,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authentications/{authenticationName}":
    {
      deserializer: _$deleteDeserializeBrokerAuthentication,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authentications/{authenticationName}":
    {
      deserializer: _createOrUpdateDeserializeBrokerAuthentication,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners/{listenerName}":
    {
      deserializer: _$deleteDeserializeBrokerListener,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners/{listenerName}":
    {
      deserializer: _createOrUpdateDeserializeBrokerListener,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}":
    {
      deserializer: _$deleteDeserializeBroker,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}":
    {
      deserializer: _createOrUpdateDeserializeBroker,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}":
    {
      deserializer: _$deleteDeserializeInstance,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}":
    {
      deserializer: _createOrUpdateDeserializeInstance,
      expectedStatuses: ["200", "201"],
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
    for (let i = candidateParts.length - 1, j = pathParts.length - 1; i >= 1 && j >= 1; i--, j--) {
      if (candidateParts[i]?.startsWith("{") && candidateParts[i]?.indexOf("}") !== -1) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(`${candidateParts[i]?.slice(start, end)}`).test(
          pathParts[j] || "",
        );

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
