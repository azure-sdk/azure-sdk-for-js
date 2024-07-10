// Licensed under the MIT license.

import {
  extendedLocationSerializer,
  assetPropertiesSerializer,
  assetUpdatePropertiesSerializer,
  CreatedByType,
  Asset,
  DataPointsObservabilityMode,
  EventsObservabilityMode,
  AssetUpdate,
  _AssetListResult,
} from "../../models/models.js";
import {
  isUnexpected,
  DeviceRegistryContext as Client,
  AssetsCreateOrReplace200Response,
  AssetsCreateOrReplace201Response,
  AssetsCreateOrReplaceDefaultResponse,
  AssetsCreateOrReplaceLogicalResponse,
  AssetsDelete202Response,
  AssetsDelete204Response,
  AssetsDeleteDefaultResponse,
  AssetsDeleteLogicalResponse,
  AssetsGet200Response,
  AssetsGetDefaultResponse,
  AssetsListByResourceGroup200Response,
  AssetsListByResourceGroupDefaultResponse,
  AssetsListBySubscription200Response,
  AssetsListBySubscriptionDefaultResponse,
  AssetsUpdate200Response,
  AssetsUpdate202Response,
  AssetsUpdateDefaultResponse,
  AssetsUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@typespec/ts-http-runtime";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  AssetsGetOptionalParams,
  AssetsCreateOrReplaceOptionalParams,
  AssetsUpdateOptionalParams,
  AssetsDeleteOptionalParams,
  AssetsListByResourceGroupOptionalParams,
  AssetsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  options: AssetsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<AssetsGet200Response | AssetsGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
      subscriptionId,
      resourceGroupName,
      assetName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: AssetsGet200Response | AssetsGetDefaultResponse,
): Promise<Asset> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.[
            "createdByType"
          ] as CreatedByType,
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.[
            "lastModifiedByType"
          ] as CreatedByType,
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          uuid: result.body.properties?.["uuid"],
          assetType: result.body.properties?.["assetType"],
          enabled: result.body.properties?.["enabled"],
          externalAssetId: result.body.properties?.["externalAssetId"],
          displayName: result.body.properties?.["displayName"],
          description: result.body.properties?.["description"],
          assetEndpointProfileUri:
            result.body.properties?.["assetEndpointProfileUri"],
          version: result.body.properties?.["version"],
          manufacturer: result.body.properties?.["manufacturer"],
          manufacturerUri: result.body.properties?.["manufacturerUri"],
          model: result.body.properties?.["model"],
          productCode: result.body.properties?.["productCode"],
          hardwareRevision: result.body.properties?.["hardwareRevision"],
          softwareRevision: result.body.properties?.["softwareRevision"],
          documentationUri: result.body.properties?.["documentationUri"],
          serialNumber: result.body.properties?.["serialNumber"],
          attributes: result.body.properties?.["attributes"],
          defaultDataPointsConfiguration:
            result.body.properties?.["defaultDataPointsConfiguration"],
          defaultEventsConfiguration:
            result.body.properties?.["defaultEventsConfiguration"],
          dataPoints:
            result.body.properties?.["dataPoints"] === undefined
              ? result.body.properties?.["dataPoints"]
              : result.body.properties?.["dataPoints"].map((p) => ({
                  name: p["name"],
                  dataSource: p["dataSource"],
                  capabilityId: p["capabilityId"],
                  observabilityMode: p[
                    "observabilityMode"
                  ] as DataPointsObservabilityMode,
                  dataPointConfiguration: p["dataPointConfiguration"],
                })),
          events:
            result.body.properties?.["events"] === undefined
              ? result.body.properties?.["events"]
              : result.body.properties?.["events"].map((p) => ({
                  name: p["name"],
                  eventNotifier: p["eventNotifier"],
                  capabilityId: p["capabilityId"],
                  observabilityMode: p[
                    "observabilityMode"
                  ] as EventsObservabilityMode,
                  eventConfiguration: p["eventConfiguration"],
                })),
          status: !result.body.properties?.status
            ? undefined
            : {
                errors:
                  result.body.properties?.status?.["errors"] === undefined
                    ? result.body.properties?.status?.["errors"]
                    : result.body.properties?.status?.["errors"].map((p) => ({
                        code: p["code"],
                        message: p["message"],
                      })),
                version: result.body.properties?.status?.["version"],
              },
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Get a Asset */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  options: AssetsGetOptionalParams = { requestOptions: {} },
): Promise<Asset> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    assetName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrReplaceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  resource: Asset,
  options: AssetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AssetsCreateOrReplace200Response
  | AssetsCreateOrReplace201Response
  | AssetsCreateOrReplaceDefaultResponse
  | AssetsCreateOrReplaceLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
      subscriptionId,
      resourceGroupName,
      assetName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !resource.tags
          ? resource.tags
          : (serializeRecord(resource.tags as any) as any),
        location: resource["location"],
        properties: !resource.properties
          ? resource.properties
          : assetPropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _createOrReplaceDeserialize(
  result:
    | AssetsCreateOrReplace200Response
    | AssetsCreateOrReplace201Response
    | AssetsCreateOrReplaceDefaultResponse
    | AssetsCreateOrReplaceLogicalResponse,
): Promise<Asset> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.[
            "createdByType"
          ] as CreatedByType,
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.[
            "lastModifiedByType"
          ] as CreatedByType,
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          uuid: result.body.properties?.["uuid"],
          assetType: result.body.properties?.["assetType"],
          enabled: result.body.properties?.["enabled"],
          externalAssetId: result.body.properties?.["externalAssetId"],
          displayName: result.body.properties?.["displayName"],
          description: result.body.properties?.["description"],
          assetEndpointProfileUri:
            result.body.properties?.["assetEndpointProfileUri"],
          version: result.body.properties?.["version"],
          manufacturer: result.body.properties?.["manufacturer"],
          manufacturerUri: result.body.properties?.["manufacturerUri"],
          model: result.body.properties?.["model"],
          productCode: result.body.properties?.["productCode"],
          hardwareRevision: result.body.properties?.["hardwareRevision"],
          softwareRevision: result.body.properties?.["softwareRevision"],
          documentationUri: result.body.properties?.["documentationUri"],
          serialNumber: result.body.properties?.["serialNumber"],
          attributes: result.body.properties?.["attributes"],
          defaultDataPointsConfiguration:
            result.body.properties?.["defaultDataPointsConfiguration"],
          defaultEventsConfiguration:
            result.body.properties?.["defaultEventsConfiguration"],
          dataPoints:
            result.body.properties?.["dataPoints"] === undefined
              ? result.body.properties?.["dataPoints"]
              : result.body.properties?.["dataPoints"].map((p) => ({
                  name: p["name"],
                  dataSource: p["dataSource"],
                  capabilityId: p["capabilityId"],
                  observabilityMode: p[
                    "observabilityMode"
                  ] as DataPointsObservabilityMode,
                  dataPointConfiguration: p["dataPointConfiguration"],
                })),
          events:
            result.body.properties?.["events"] === undefined
              ? result.body.properties?.["events"]
              : result.body.properties?.["events"].map((p) => ({
                  name: p["name"],
                  eventNotifier: p["eventNotifier"],
                  capabilityId: p["capabilityId"],
                  observabilityMode: p[
                    "observabilityMode"
                  ] as EventsObservabilityMode,
                  eventConfiguration: p["eventConfiguration"],
                })),
          status: !result.body.properties?.status
            ? undefined
            : {
                errors:
                  result.body.properties?.status?.["errors"] === undefined
                    ? result.body.properties?.status?.["errors"]
                    : result.body.properties?.status?.["errors"].map((p) => ({
                        code: p["code"],
                        message: p["message"],
                      })),
                version: result.body.properties?.status?.["version"],
              },
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Create a Asset */
export async function createOrReplace(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  resource: Asset,
  options: AssetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): Promise<Asset> {
  const result = await _createOrReplaceSend(
    context,
    subscriptionId,
    resourceGroupName,
    assetName,
    resource,
    options,
  );
  return _createOrReplaceDeserialize(result);
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  properties: AssetUpdate,
  options: AssetsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AssetsUpdate200Response
  | AssetsUpdate202Response
  | AssetsUpdateDefaultResponse
  | AssetsUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
      subscriptionId,
      resourceGroupName,
      assetName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : assetUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _updateDeserialize(
  result:
    | AssetsUpdate200Response
    | AssetsUpdate202Response
    | AssetsUpdateDefaultResponse
    | AssetsUpdateLogicalResponse,
): Promise<Asset> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.[
            "createdByType"
          ] as CreatedByType,
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.[
            "lastModifiedByType"
          ] as CreatedByType,
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          uuid: result.body.properties?.["uuid"],
          assetType: result.body.properties?.["assetType"],
          enabled: result.body.properties?.["enabled"],
          externalAssetId: result.body.properties?.["externalAssetId"],
          displayName: result.body.properties?.["displayName"],
          description: result.body.properties?.["description"],
          assetEndpointProfileUri:
            result.body.properties?.["assetEndpointProfileUri"],
          version: result.body.properties?.["version"],
          manufacturer: result.body.properties?.["manufacturer"],
          manufacturerUri: result.body.properties?.["manufacturerUri"],
          model: result.body.properties?.["model"],
          productCode: result.body.properties?.["productCode"],
          hardwareRevision: result.body.properties?.["hardwareRevision"],
          softwareRevision: result.body.properties?.["softwareRevision"],
          documentationUri: result.body.properties?.["documentationUri"],
          serialNumber: result.body.properties?.["serialNumber"],
          attributes: result.body.properties?.["attributes"],
          defaultDataPointsConfiguration:
            result.body.properties?.["defaultDataPointsConfiguration"],
          defaultEventsConfiguration:
            result.body.properties?.["defaultEventsConfiguration"],
          dataPoints:
            result.body.properties?.["dataPoints"] === undefined
              ? result.body.properties?.["dataPoints"]
              : result.body.properties?.["dataPoints"].map((p) => ({
                  name: p["name"],
                  dataSource: p["dataSource"],
                  capabilityId: p["capabilityId"],
                  observabilityMode: p[
                    "observabilityMode"
                  ] as DataPointsObservabilityMode,
                  dataPointConfiguration: p["dataPointConfiguration"],
                })),
          events:
            result.body.properties?.["events"] === undefined
              ? result.body.properties?.["events"]
              : result.body.properties?.["events"].map((p) => ({
                  name: p["name"],
                  eventNotifier: p["eventNotifier"],
                  capabilityId: p["capabilityId"],
                  observabilityMode: p[
                    "observabilityMode"
                  ] as EventsObservabilityMode,
                  eventConfiguration: p["eventConfiguration"],
                })),
          status: !result.body.properties?.status
            ? undefined
            : {
                errors:
                  result.body.properties?.status?.["errors"] === undefined
                    ? result.body.properties?.status?.["errors"]
                    : result.body.properties?.status?.["errors"].map((p) => ({
                        code: p["code"],
                        message: p["message"],
                      })),
                version: result.body.properties?.status?.["version"],
              },
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Update a Asset */
export async function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  properties: AssetUpdate,
  options: AssetsUpdateOptionalParams = { requestOptions: {} },
): Promise<Asset> {
  const result = await _updateSend(
    context,
    subscriptionId,
    resourceGroupName,
    assetName,
    properties,
    options,
  );
  return _updateDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  options: AssetsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AssetsDelete202Response
  | AssetsDelete204Response
  | AssetsDeleteDefaultResponse
  | AssetsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
      subscriptionId,
      resourceGroupName,
      assetName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | AssetsDelete202Response
    | AssetsDelete204Response
    | AssetsDeleteDefaultResponse
    | AssetsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Asset */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  options: AssetsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(
    context,
    subscriptionId,
    resourceGroupName,
    assetName,
    options,
  );
  return _$deleteDeserialize(result);
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AssetsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AssetsListByResourceGroup200Response
  | AssetsListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result:
    | AssetsListByResourceGroup200Response
    | AssetsListByResourceGroupDefaultResponse,
): Promise<_AssetListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      tags: p["tags"],
      location: p["location"],
      id: p["id"],
      name: p["name"],
      type: p["type"],
      systemData: !p.systemData
        ? undefined
        : {
            createdBy: p.systemData?.["createdBy"],
            createdByType: p.systemData?.["createdByType"] as CreatedByType,
            createdAt:
              p.systemData?.["createdAt"] !== undefined
                ? new Date(p.systemData?.["createdAt"])
                : undefined,
            lastModifiedBy: p.systemData?.["lastModifiedBy"],
            lastModifiedByType: p.systemData?.[
              "lastModifiedByType"
            ] as CreatedByType,
            lastModifiedAt:
              p.systemData?.["lastModifiedAt"] !== undefined
                ? new Date(p.systemData?.["lastModifiedAt"])
                : undefined,
          },
      properties: !p.properties
        ? undefined
        : {
            uuid: p.properties?.["uuid"],
            assetType: p.properties?.["assetType"],
            enabled: p.properties?.["enabled"],
            externalAssetId: p.properties?.["externalAssetId"],
            displayName: p.properties?.["displayName"],
            description: p.properties?.["description"],
            assetEndpointProfileUri: p.properties?.["assetEndpointProfileUri"],
            version: p.properties?.["version"],
            manufacturer: p.properties?.["manufacturer"],
            manufacturerUri: p.properties?.["manufacturerUri"],
            model: p.properties?.["model"],
            productCode: p.properties?.["productCode"],
            hardwareRevision: p.properties?.["hardwareRevision"],
            softwareRevision: p.properties?.["softwareRevision"],
            documentationUri: p.properties?.["documentationUri"],
            serialNumber: p.properties?.["serialNumber"],
            attributes: p.properties?.["attributes"],
            defaultDataPointsConfiguration:
              p.properties?.["defaultDataPointsConfiguration"],
            defaultEventsConfiguration:
              p.properties?.["defaultEventsConfiguration"],
            dataPoints:
              p.properties?.["dataPoints"] === undefined
                ? p.properties?.["dataPoints"]
                : p.properties?.["dataPoints"].map((p) => ({
                    name: p["name"],
                    dataSource: p["dataSource"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p[
                      "observabilityMode"
                    ] as DataPointsObservabilityMode,
                    dataPointConfiguration: p["dataPointConfiguration"],
                  })),
            events:
              p.properties?.["events"] === undefined
                ? p.properties?.["events"]
                : p.properties?.["events"].map((p) => ({
                    name: p["name"],
                    eventNotifier: p["eventNotifier"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p[
                      "observabilityMode"
                    ] as EventsObservabilityMode,
                    eventConfiguration: p["eventConfiguration"],
                  })),
            status: !p.properties?.status
              ? undefined
              : {
                  errors:
                    p.properties?.status?.["errors"] === undefined
                      ? p.properties?.status?.["errors"]
                      : p.properties?.status?.["errors"].map((p) => ({
                          code: p["code"],
                          message: p["message"],
                        })),
                  version: p.properties?.status?.["version"],
                },
            provisioningState: p.properties?.["provisioningState"],
          },
      extendedLocation: {
        type: p.extendedLocation["type"],
        name: p.extendedLocation["name"],
      },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List Asset resources by resource group */
export async function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AssetsListByResourceGroupOptionalParams = { requestOptions: {} },
): Promise<_AssetListResult> {
  const result = await _listByResourceGroupSend(
    context,
    subscriptionId,
    resourceGroupName,
    options,
  );
  return _listByResourceGroupDeserialize(result);
}

export function _listBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: AssetsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  AssetsListBySubscription200Response | AssetsListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/assets",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result:
    | AssetsListBySubscription200Response
    | AssetsListBySubscriptionDefaultResponse,
): Promise<_AssetListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      tags: p["tags"],
      location: p["location"],
      id: p["id"],
      name: p["name"],
      type: p["type"],
      systemData: !p.systemData
        ? undefined
        : {
            createdBy: p.systemData?.["createdBy"],
            createdByType: p.systemData?.["createdByType"] as CreatedByType,
            createdAt:
              p.systemData?.["createdAt"] !== undefined
                ? new Date(p.systemData?.["createdAt"])
                : undefined,
            lastModifiedBy: p.systemData?.["lastModifiedBy"],
            lastModifiedByType: p.systemData?.[
              "lastModifiedByType"
            ] as CreatedByType,
            lastModifiedAt:
              p.systemData?.["lastModifiedAt"] !== undefined
                ? new Date(p.systemData?.["lastModifiedAt"])
                : undefined,
          },
      properties: !p.properties
        ? undefined
        : {
            uuid: p.properties?.["uuid"],
            assetType: p.properties?.["assetType"],
            enabled: p.properties?.["enabled"],
            externalAssetId: p.properties?.["externalAssetId"],
            displayName: p.properties?.["displayName"],
            description: p.properties?.["description"],
            assetEndpointProfileUri: p.properties?.["assetEndpointProfileUri"],
            version: p.properties?.["version"],
            manufacturer: p.properties?.["manufacturer"],
            manufacturerUri: p.properties?.["manufacturerUri"],
            model: p.properties?.["model"],
            productCode: p.properties?.["productCode"],
            hardwareRevision: p.properties?.["hardwareRevision"],
            softwareRevision: p.properties?.["softwareRevision"],
            documentationUri: p.properties?.["documentationUri"],
            serialNumber: p.properties?.["serialNumber"],
            attributes: p.properties?.["attributes"],
            defaultDataPointsConfiguration:
              p.properties?.["defaultDataPointsConfiguration"],
            defaultEventsConfiguration:
              p.properties?.["defaultEventsConfiguration"],
            dataPoints:
              p.properties?.["dataPoints"] === undefined
                ? p.properties?.["dataPoints"]
                : p.properties?.["dataPoints"].map((p) => ({
                    name: p["name"],
                    dataSource: p["dataSource"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p[
                      "observabilityMode"
                    ] as DataPointsObservabilityMode,
                    dataPointConfiguration: p["dataPointConfiguration"],
                  })),
            events:
              p.properties?.["events"] === undefined
                ? p.properties?.["events"]
                : p.properties?.["events"].map((p) => ({
                    name: p["name"],
                    eventNotifier: p["eventNotifier"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p[
                      "observabilityMode"
                    ] as EventsObservabilityMode,
                    eventConfiguration: p["eventConfiguration"],
                  })),
            status: !p.properties?.status
              ? undefined
              : {
                  errors:
                    p.properties?.status?.["errors"] === undefined
                      ? p.properties?.status?.["errors"]
                      : p.properties?.status?.["errors"].map((p) => ({
                          code: p["code"],
                          message: p["message"],
                        })),
                  version: p.properties?.status?.["version"],
                },
            provisioningState: p.properties?.["provisioningState"],
          },
      extendedLocation: {
        type: p.extendedLocation["type"],
        name: p.extendedLocation["name"],
      },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List Asset resources by subscription ID */
export async function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: AssetsListBySubscriptionOptionalParams = { requestOptions: {} },
): Promise<_AssetListResult> {
  const result = await _listBySubscriptionSend(
    context,
    subscriptionId,
    options,
  );
  return _listBySubscriptionDeserialize(result);
}
