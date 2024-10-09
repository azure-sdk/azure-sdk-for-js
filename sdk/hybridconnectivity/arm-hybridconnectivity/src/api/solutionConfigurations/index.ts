// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  solutionConfigurationPropertiesSerializer,
  SolutionConfiguration,
  OperationStatusResult,
  _SolutionConfigurationListResult,
} from "../../models/models.js";
import { HybridConnectivityContext as Client } from "../index.js";
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
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  SolutionConfigurationsGetOptionalParams,
  SolutionConfigurationsCreateOrUpdateOptionalParams,
  SolutionConfigurationsUpdateOptionalParams,
  SolutionConfigurationsDeleteOptionalParams,
  SolutionConfigurationsListOptionalParams,
  SolutionConfigurationsSyncNowOptionalParams,
} from "../../models/options.js";

export function _solutionConfigurationsGetSend(
  context: Client,
  resourceUri: string,
  solutionConfiguration: string,
  options: SolutionConfigurationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.HybridConnectivity/solutionConfigurations/{solutionConfiguration}",
      resourceUri,
      solutionConfiguration,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _solutionConfigurationsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SolutionConfiguration> {
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
          solutionType: result.body.properties?.["solutionType"],
          solutionSettings: result.body.properties?.["solutionSettings"],
          status: result.body.properties?.["status"],
          statusDetails: result.body.properties?.["statusDetails"],
          lastSyncTime:
            result.body.properties?.["lastSyncTime"] !== undefined
              ? new Date(result.body.properties?.["lastSyncTime"])
              : undefined,
        },
  };
}

/** Get a SolutionConfiguration */
export async function solutionConfigurationsGet(
  context: Client,
  resourceUri: string,
  solutionConfiguration: string,
  options: SolutionConfigurationsGetOptionalParams = { requestOptions: {} },
): Promise<SolutionConfiguration> {
  const result = await _solutionConfigurationsGetSend(
    context,
    resourceUri,
    solutionConfiguration,
    options,
  );
  return _solutionConfigurationsGetDeserialize(result);
}

export function _solutionConfigurationsCreateOrUpdateSend(
  context: Client,
  resourceUri: string,
  solutionConfiguration: string,
  resource: SolutionConfiguration,
  options: SolutionConfigurationsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.HybridConnectivity/solutionConfigurations/{solutionConfiguration}",
      resourceUri,
      solutionConfiguration,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : solutionConfigurationPropertiesSerializer(resource.properties),
      },
    });
}

export async function _solutionConfigurationsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SolutionConfiguration> {
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
          solutionType: result.body.properties?.["solutionType"],
          solutionSettings: result.body.properties?.["solutionSettings"],
          status: result.body.properties?.["status"],
          statusDetails: result.body.properties?.["statusDetails"],
          lastSyncTime:
            result.body.properties?.["lastSyncTime"] !== undefined
              ? new Date(result.body.properties?.["lastSyncTime"])
              : undefined,
        },
  };
}

/** Create a SolutionConfiguration */
export async function solutionConfigurationsCreateOrUpdate(
  context: Client,
  resourceUri: string,
  solutionConfiguration: string,
  resource: SolutionConfiguration,
  options: SolutionConfigurationsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<SolutionConfiguration> {
  const result = await _solutionConfigurationsCreateOrUpdateSend(
    context,
    resourceUri,
    solutionConfiguration,
    resource,
    options,
  );
  return _solutionConfigurationsCreateOrUpdateDeserialize(result);
}

export function _solutionConfigurationsUpdateSend(
  context: Client,
  resourceUri: string,
  solutionConfiguration: string,
  properties: SolutionConfiguration,
  options: SolutionConfigurationsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.HybridConnectivity/solutionConfigurations/{solutionConfiguration}",
      resourceUri,
      solutionConfiguration,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? properties.properties
          : solutionConfigurationPropertiesSerializer(properties.properties),
      },
    });
}

export async function _solutionConfigurationsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SolutionConfiguration> {
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
          solutionType: result.body.properties?.["solutionType"],
          solutionSettings: result.body.properties?.["solutionSettings"],
          status: result.body.properties?.["status"],
          statusDetails: result.body.properties?.["statusDetails"],
          lastSyncTime:
            result.body.properties?.["lastSyncTime"] !== undefined
              ? new Date(result.body.properties?.["lastSyncTime"])
              : undefined,
        },
  };
}

/** Update a SolutionConfiguration */
export async function solutionConfigurationsUpdate(
  context: Client,
  resourceUri: string,
  solutionConfiguration: string,
  properties: SolutionConfiguration,
  options: SolutionConfigurationsUpdateOptionalParams = { requestOptions: {} },
): Promise<SolutionConfiguration> {
  const result = await _solutionConfigurationsUpdateSend(
    context,
    resourceUri,
    solutionConfiguration,
    properties,
    options,
  );
  return _solutionConfigurationsUpdateDeserialize(result);
}

export function _solutionConfigurationsDeleteSend(
  context: Client,
  resourceUri: string,
  solutionConfiguration: string,
  options: SolutionConfigurationsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.HybridConnectivity/solutionConfigurations/{solutionConfiguration}",
      resourceUri,
      solutionConfiguration,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _solutionConfigurationsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a SolutionConfiguration */
export async function solutionConfigurationsDelete(
  context: Client,
  resourceUri: string,
  solutionConfiguration: string,
  options: SolutionConfigurationsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _solutionConfigurationsDeleteSend(
    context,
    resourceUri,
    solutionConfiguration,
    options,
  );
  return _solutionConfigurationsDeleteDeserialize(result);
}

export function _solutionConfigurationsListSend(
  context: Client,
  resourceUri: string,
  options: SolutionConfigurationsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.HybridConnectivity/solutionConfigurations",
      resourceUri,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _solutionConfigurationsListDeserialize(
  result: PathUncheckedResponse,
): Promise<_SolutionConfigurationListResult> {
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
              solutionType: p.properties?.["solutionType"],
              solutionSettings: p.properties?.["solutionSettings"],
              status: p.properties?.["status"],
              statusDetails: p.properties?.["statusDetails"],
              lastSyncTime:
                p.properties?.["lastSyncTime"] !== undefined
                  ? new Date(p.properties?.["lastSyncTime"])
                  : undefined,
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List SolutionConfiguration resources by parent */
export function solutionConfigurationsList(
  context: Client,
  resourceUri: string,
  options: SolutionConfigurationsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<SolutionConfiguration> {
  return buildPagedAsyncIterator(
    context,
    () => _solutionConfigurationsListSend(context, resourceUri, options),
    _solutionConfigurationsListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _solutionConfigurationsSyncNowSend(
  context: Client,
  resourceUri: string,
  solutionConfiguration: string,
  options: SolutionConfigurationsSyncNowOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.HybridConnectivity/solutionConfigurations/{solutionConfiguration}/syncNow",
      resourceUri,
      solutionConfiguration,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _solutionConfigurationsSyncNowDeserialize(
  result: PathUncheckedResponse,
): Promise<OperationStatusResult> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    status: result.body["status"],
    percentComplete: result.body["percentComplete"],
    startTime:
      result.body["startTime"] !== undefined
        ? new Date(result.body["startTime"])
        : undefined,
    endTime:
      result.body["endTime"] !== undefined
        ? new Date(result.body["endTime"])
        : undefined,
    operations:
      result.body["operations"] === undefined
        ? result.body["operations"]
        : result.body["operations"].map((p: any) => {
            return {
              id: p["id"],
              name: p["name"],
              status: p["status"],
              percentComplete: p["percentComplete"],
              startTime:
                p["startTime"] !== undefined
                  ? new Date(p["startTime"])
                  : undefined,
              endTime:
                p["endTime"] !== undefined ? new Date(p["endTime"]) : undefined,
              operations: !p.operations ? undefined : (p.operations as any),
              error: !p.error
                ? undefined
                : {
                    code: p.error?.["code"],
                    message: p.error?.["message"],
                    target: p.error?.["target"],
                    details:
                      p.error?.["details"] === undefined
                        ? p.error?.["details"]
                        : p.error?.["details"].map((p: any) => {
                            return {
                              code: p["code"],
                              message: p["message"],
                              target: p["target"],
                              details: !p.details ? undefined : p.details,
                              additionalInfo:
                                p["additionalInfo"] === undefined
                                  ? p["additionalInfo"]
                                  : p["additionalInfo"].map((p: any) => {
                                      return {
                                        type: p["type"],
                                        info: p["info"],
                                      };
                                    }),
                            };
                          }),
                    additionalInfo:
                      p.error?.["additionalInfo"] === undefined
                        ? p.error?.["additionalInfo"]
                        : p.error?.["additionalInfo"].map((p: any) => {
                            return { type: p["type"], info: p["info"] };
                          }),
                  },
            };
          }),
    error: !result.body.error
      ? undefined
      : {
          code: result.body.error?.["code"],
          message: result.body.error?.["message"],
          target: result.body.error?.["target"],
          details:
            result.body.error?.["details"] === undefined
              ? result.body.error?.["details"]
              : result.body.error?.["details"].map((p: any) => {
                  return {
                    code: p["code"],
                    message: p["message"],
                    target: p["target"],
                    details: !p.details ? undefined : p.details,
                    additionalInfo:
                      p["additionalInfo"] === undefined
                        ? p["additionalInfo"]
                        : p["additionalInfo"].map((p: any) => {
                            return { type: p["type"], info: p["info"] };
                          }),
                  };
                }),
          additionalInfo:
            result.body.error?.["additionalInfo"] === undefined
              ? result.body.error?.["additionalInfo"]
              : result.body.error?.["additionalInfo"].map((p: any) => {
                  return { type: p["type"], info: p["info"] };
                }),
        },
  };
}

/** Trigger immediate sync with source cloud */
export function solutionConfigurationsSyncNow(
  context: Client,
  resourceUri: string,
  solutionConfiguration: string,
  options: SolutionConfigurationsSyncNowOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OperationStatusResult>, OperationStatusResult> {
  return getLongRunningPoller(
    context,
    _solutionConfigurationsSyncNowDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _solutionConfigurationsSyncNowSend(
          context,
          resourceUri,
          solutionConfiguration,
          options,
        ),
    },
  ) as PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}
