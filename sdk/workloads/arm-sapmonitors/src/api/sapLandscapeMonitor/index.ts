// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  sapLandscapeMonitorPropertiesSerializer,
  SapLandscapeMonitorResource,
  _SapLandscapeMonitorResourceListResult,
} from "../../models/models.js";
import { WorkloadsContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  SapLandscapeMonitorGetOptionalParams,
  SapLandscapeMonitorCreateOptionalParams,
  SapLandscapeMonitorUpdateOptionalParams,
  SapLandscapeMonitorDeleteOptionalParams,
  SapLandscapeMonitorListByMonitorOptionalParams,
} from "../../models/options.js";

export function _sapLandscapeMonitorGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default",
      subscriptionId,
      resourceGroupName,
      monitorName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _sapLandscapeMonitorGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SapLandscapeMonitorResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.["provisioningState"],
          grouping: !result.body.properties?.grouping
            ? undefined
            : {
                landscape:
                  result.body.properties?.grouping?.["landscape"] === undefined
                    ? result.body.properties?.grouping?.["landscape"]
                    : result.body.properties?.grouping?.["landscape"].map(
                        (p: any) => {
                          return { name: p["name"], topSid: p["topSid"] };
                        },
                      ),
                sapApplication:
                  result.body.properties?.grouping?.["sapApplication"] ===
                  undefined
                    ? result.body.properties?.grouping?.["sapApplication"]
                    : result.body.properties?.grouping?.["sapApplication"].map(
                        (p: any) => {
                          return { name: p["name"], topSid: p["topSid"] };
                        },
                      ),
              },
          topMetricsThresholds:
            result.body.properties?.["topMetricsThresholds"] === undefined
              ? result.body.properties?.["topMetricsThresholds"]
              : result.body.properties?.["topMetricsThresholds"].map(
                  (p: any) => {
                    return {
                      name: p["name"],
                      green: p["green"],
                      yellow: p["yellow"],
                      red: p["red"],
                    };
                  },
                ),
        },
  };
}

/** Gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name. */
export async function sapLandscapeMonitorGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorGetOptionalParams = { requestOptions: {} },
): Promise<SapLandscapeMonitorResource> {
  const result = await _sapLandscapeMonitorGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    monitorName,
    options,
  );
  return _sapLandscapeMonitorGetDeserialize(result);
}

export function _sapLandscapeMonitorCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  resource: SapLandscapeMonitorResource,
  options: SapLandscapeMonitorCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default",
      subscriptionId,
      resourceGroupName,
      monitorName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : sapLandscapeMonitorPropertiesSerializer(resource.properties),
      },
    });
}

export async function _sapLandscapeMonitorCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<SapLandscapeMonitorResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.["provisioningState"],
          grouping: !result.body.properties?.grouping
            ? undefined
            : {
                landscape:
                  result.body.properties?.grouping?.["landscape"] === undefined
                    ? result.body.properties?.grouping?.["landscape"]
                    : result.body.properties?.grouping?.["landscape"].map(
                        (p: any) => {
                          return { name: p["name"], topSid: p["topSid"] };
                        },
                      ),
                sapApplication:
                  result.body.properties?.grouping?.["sapApplication"] ===
                  undefined
                    ? result.body.properties?.grouping?.["sapApplication"]
                    : result.body.properties?.grouping?.["sapApplication"].map(
                        (p: any) => {
                          return { name: p["name"], topSid: p["topSid"] };
                        },
                      ),
              },
          topMetricsThresholds:
            result.body.properties?.["topMetricsThresholds"] === undefined
              ? result.body.properties?.["topMetricsThresholds"]
              : result.body.properties?.["topMetricsThresholds"].map(
                  (p: any) => {
                    return {
                      name: p["name"],
                      green: p["green"],
                      yellow: p["yellow"],
                      red: p["red"],
                    };
                  },
                ),
        },
  };
}

/** Creates a SAP Landscape Monitor Dashboard for the specified subscription, resource group, and resource name. */
export async function sapLandscapeMonitorCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  resource: SapLandscapeMonitorResource,
  options: SapLandscapeMonitorCreateOptionalParams = { requestOptions: {} },
): Promise<SapLandscapeMonitorResource> {
  const result = await _sapLandscapeMonitorCreateSend(
    context,
    subscriptionId,
    resourceGroupName,
    monitorName,
    resource,
    options,
  );
  return _sapLandscapeMonitorCreateDeserialize(result);
}

export function _sapLandscapeMonitorUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  properties: SapLandscapeMonitorResource,
  options: SapLandscapeMonitorUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default",
      subscriptionId,
      resourceGroupName,
      monitorName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? properties.properties
          : sapLandscapeMonitorPropertiesSerializer(properties.properties),
      },
    });
}

export async function _sapLandscapeMonitorUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SapLandscapeMonitorResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.["provisioningState"],
          grouping: !result.body.properties?.grouping
            ? undefined
            : {
                landscape:
                  result.body.properties?.grouping?.["landscape"] === undefined
                    ? result.body.properties?.grouping?.["landscape"]
                    : result.body.properties?.grouping?.["landscape"].map(
                        (p: any) => {
                          return { name: p["name"], topSid: p["topSid"] };
                        },
                      ),
                sapApplication:
                  result.body.properties?.grouping?.["sapApplication"] ===
                  undefined
                    ? result.body.properties?.grouping?.["sapApplication"]
                    : result.body.properties?.grouping?.["sapApplication"].map(
                        (p: any) => {
                          return { name: p["name"], topSid: p["topSid"] };
                        },
                      ),
              },
          topMetricsThresholds:
            result.body.properties?.["topMetricsThresholds"] === undefined
              ? result.body.properties?.["topMetricsThresholds"]
              : result.body.properties?.["topMetricsThresholds"].map(
                  (p: any) => {
                    return {
                      name: p["name"],
                      green: p["green"],
                      yellow: p["yellow"],
                      red: p["red"],
                    };
                  },
                ),
        },
  };
}

/** Patches the SAP Landscape Monitor Dashboard for the specified subscription, resource group, and SAP monitor name. */
export async function sapLandscapeMonitorUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  properties: SapLandscapeMonitorResource,
  options: SapLandscapeMonitorUpdateOptionalParams = { requestOptions: {} },
): Promise<SapLandscapeMonitorResource> {
  const result = await _sapLandscapeMonitorUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    monitorName,
    properties,
    options,
  );
  return _sapLandscapeMonitorUpdateDeserialize(result);
}

export function _sapLandscapeMonitorDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default",
      subscriptionId,
      resourceGroupName,
      monitorName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _sapLandscapeMonitorDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes a SAP Landscape Monitor Dashboard with the specified subscription, resource group, and SAP monitor name. */
export async function sapLandscapeMonitorDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _sapLandscapeMonitorDeleteSend(
    context,
    subscriptionId,
    resourceGroupName,
    monitorName,
    options,
  );
  return _sapLandscapeMonitorDeleteDeserialize(result);
}

export function _sapLandscapeMonitorListByMonitorSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorListByMonitorOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor",
      subscriptionId,
      resourceGroupName,
      monitorName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _sapLandscapeMonitorListByMonitorDeserialize(
  result: PathUncheckedResponse,
): Promise<_SapLandscapeMonitorResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              provisioningState: p.properties?.["provisioningState"],
              grouping: !p.properties?.grouping
                ? undefined
                : {
                    landscape:
                      p.properties?.grouping?.["landscape"] === undefined
                        ? p.properties?.grouping?.["landscape"]
                        : p.properties?.grouping?.["landscape"].map(
                            (p: any) => {
                              return { name: p["name"], topSid: p["topSid"] };
                            },
                          ),
                    sapApplication:
                      p.properties?.grouping?.["sapApplication"] === undefined
                        ? p.properties?.grouping?.["sapApplication"]
                        : p.properties?.grouping?.["sapApplication"].map(
                            (p: any) => {
                              return { name: p["name"], topSid: p["topSid"] };
                            },
                          ),
                  },
              topMetricsThresholds:
                p.properties?.["topMetricsThresholds"] === undefined
                  ? p.properties?.["topMetricsThresholds"]
                  : p.properties?.["topMetricsThresholds"].map((p: any) => {
                      return {
                        name: p["name"],
                        green: p["green"],
                        yellow: p["yellow"],
                        red: p["red"],
                      };
                    }),
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name. */
export function sapLandscapeMonitorListByMonitor(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  monitorName: string,
  options: SapLandscapeMonitorListByMonitorOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SapLandscapeMonitorResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _sapLandscapeMonitorListByMonitorSend(
        context,
        subscriptionId,
        resourceGroupName,
        monitorName,
        options,
      ),
    _sapLandscapeMonitorListByMonitorDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
