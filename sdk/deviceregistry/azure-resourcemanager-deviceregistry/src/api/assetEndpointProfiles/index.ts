// Licensed under the MIT license.

import {
  assetEndpointProfilePropertiesSerializer,
  extendedLocationSerializer,
  assetEndpointProfileUpdatePropertiesSerializer,
  CreatedByType,
  AssetEndpointProfile,
  UserAuthenticationMode,
  AssetEndpointProfileUpdate,
  _AssetEndpointProfileListResult,
} from "../../models/models.js";
import {
  isUnexpected,
  DeviceRegistryContext as Client,
  AssetEndpointProfilesCreateOrReplace200Response,
  AssetEndpointProfilesCreateOrReplace201Response,
  AssetEndpointProfilesCreateOrReplaceDefaultResponse,
  AssetEndpointProfilesCreateOrReplaceLogicalResponse,
  AssetEndpointProfilesDelete202Response,
  AssetEndpointProfilesDelete204Response,
  AssetEndpointProfilesDeleteDefaultResponse,
  AssetEndpointProfilesDeleteLogicalResponse,
  AssetEndpointProfilesGet200Response,
  AssetEndpointProfilesGetDefaultResponse,
  AssetEndpointProfilesListByResourceGroup200Response,
  AssetEndpointProfilesListByResourceGroupDefaultResponse,
  AssetEndpointProfilesListBySubscription200Response,
  AssetEndpointProfilesListBySubscriptionDefaultResponse,
  AssetEndpointProfilesUpdate200Response,
  AssetEndpointProfilesUpdate202Response,
  AssetEndpointProfilesUpdateDefaultResponse,
  AssetEndpointProfilesUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@typespec/ts-http-runtime";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  AssetEndpointProfilesGetOptionalParams,
  AssetEndpointProfilesCreateOrReplaceOptionalParams,
  AssetEndpointProfilesUpdateOptionalParams,
  AssetEndpointProfilesDeleteOptionalParams,
  AssetEndpointProfilesListByResourceGroupOptionalParams,
  AssetEndpointProfilesListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  options: AssetEndpointProfilesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  AssetEndpointProfilesGet200Response | AssetEndpointProfilesGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles/{assetEndpointProfileName}",
      subscriptionId,
      resourceGroupName,
      assetEndpointProfileName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | AssetEndpointProfilesGet200Response
    | AssetEndpointProfilesGetDefaultResponse,
): Promise<AssetEndpointProfile> {
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
          targetAddress: result.body.properties?.["targetAddress"],
          userAuthentication: !result.body.properties?.userAuthentication
            ? undefined
            : {
                mode: result.body.properties?.userAuthentication?.[
                  "mode"
                ] as UserAuthenticationMode,
                usernamePasswordCredentials: !result.body.properties
                  ?.userAuthentication?.usernamePasswordCredentials
                  ? undefined
                  : {
                      usernameReference:
                        result.body.properties?.userAuthentication
                          ?.usernamePasswordCredentials?.["usernameReference"],
                      passwordReference:
                        result.body.properties?.userAuthentication
                          ?.usernamePasswordCredentials?.["passwordReference"],
                    },
                x509Credentials: !result.body.properties?.userAuthentication
                  ?.x509Credentials
                  ? undefined
                  : {
                      certificateReference:
                        result.body.properties?.userAuthentication
                          ?.x509Credentials?.["certificateReference"],
                    },
              },
          transportAuthentication: !result.body.properties
            ?.transportAuthentication
            ? undefined
            : {
                ownCertificates:
                  result.body.properties?.transportAuthentication?.[
                    "ownCertificates"
                  ].map((p) => ({
                    certThumbprint: p["certThumbprint"],
                    certSecretReference: p["certSecretReference"],
                    certPasswordReference: p["certPasswordReference"],
                  })),
              },
          additionalConfiguration:
            result.body.properties?.["additionalConfiguration"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Get a AssetEndpointProfile */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  options: AssetEndpointProfilesGetOptionalParams = { requestOptions: {} },
): Promise<AssetEndpointProfile> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    assetEndpointProfileName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrReplaceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  resource: AssetEndpointProfile,
  options: AssetEndpointProfilesCreateOrReplaceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AssetEndpointProfilesCreateOrReplace200Response
  | AssetEndpointProfilesCreateOrReplace201Response
  | AssetEndpointProfilesCreateOrReplaceDefaultResponse
  | AssetEndpointProfilesCreateOrReplaceLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles/{assetEndpointProfileName}",
      subscriptionId,
      resourceGroupName,
      assetEndpointProfileName,
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
          : assetEndpointProfilePropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _createOrReplaceDeserialize(
  result:
    | AssetEndpointProfilesCreateOrReplace200Response
    | AssetEndpointProfilesCreateOrReplace201Response
    | AssetEndpointProfilesCreateOrReplaceDefaultResponse
    | AssetEndpointProfilesCreateOrReplaceLogicalResponse,
): Promise<AssetEndpointProfile> {
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
          targetAddress: result.body.properties?.["targetAddress"],
          userAuthentication: !result.body.properties?.userAuthentication
            ? undefined
            : {
                mode: result.body.properties?.userAuthentication?.[
                  "mode"
                ] as UserAuthenticationMode,
                usernamePasswordCredentials: !result.body.properties
                  ?.userAuthentication?.usernamePasswordCredentials
                  ? undefined
                  : {
                      usernameReference:
                        result.body.properties?.userAuthentication
                          ?.usernamePasswordCredentials?.["usernameReference"],
                      passwordReference:
                        result.body.properties?.userAuthentication
                          ?.usernamePasswordCredentials?.["passwordReference"],
                    },
                x509Credentials: !result.body.properties?.userAuthentication
                  ?.x509Credentials
                  ? undefined
                  : {
                      certificateReference:
                        result.body.properties?.userAuthentication
                          ?.x509Credentials?.["certificateReference"],
                    },
              },
          transportAuthentication: !result.body.properties
            ?.transportAuthentication
            ? undefined
            : {
                ownCertificates:
                  result.body.properties?.transportAuthentication?.[
                    "ownCertificates"
                  ].map((p) => ({
                    certThumbprint: p["certThumbprint"],
                    certSecretReference: p["certSecretReference"],
                    certPasswordReference: p["certPasswordReference"],
                  })),
              },
          additionalConfiguration:
            result.body.properties?.["additionalConfiguration"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Create a AssetEndpointProfile */
export async function createOrReplace(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  resource: AssetEndpointProfile,
  options: AssetEndpointProfilesCreateOrReplaceOptionalParams = {
    requestOptions: {},
  },
): Promise<AssetEndpointProfile> {
  const result = await _createOrReplaceSend(
    context,
    subscriptionId,
    resourceGroupName,
    assetEndpointProfileName,
    resource,
    options,
  );
  return _createOrReplaceDeserialize(result);
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  properties: AssetEndpointProfileUpdate,
  options: AssetEndpointProfilesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AssetEndpointProfilesUpdate200Response
  | AssetEndpointProfilesUpdate202Response
  | AssetEndpointProfilesUpdateDefaultResponse
  | AssetEndpointProfilesUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles/{assetEndpointProfileName}",
      subscriptionId,
      resourceGroupName,
      assetEndpointProfileName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : assetEndpointProfileUpdatePropertiesSerializer(
              properties.properties,
            ),
      },
    });
}

export async function _updateDeserialize(
  result:
    | AssetEndpointProfilesUpdate200Response
    | AssetEndpointProfilesUpdate202Response
    | AssetEndpointProfilesUpdateDefaultResponse
    | AssetEndpointProfilesUpdateLogicalResponse,
): Promise<AssetEndpointProfile> {
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
          targetAddress: result.body.properties?.["targetAddress"],
          userAuthentication: !result.body.properties?.userAuthentication
            ? undefined
            : {
                mode: result.body.properties?.userAuthentication?.[
                  "mode"
                ] as UserAuthenticationMode,
                usernamePasswordCredentials: !result.body.properties
                  ?.userAuthentication?.usernamePasswordCredentials
                  ? undefined
                  : {
                      usernameReference:
                        result.body.properties?.userAuthentication
                          ?.usernamePasswordCredentials?.["usernameReference"],
                      passwordReference:
                        result.body.properties?.userAuthentication
                          ?.usernamePasswordCredentials?.["passwordReference"],
                    },
                x509Credentials: !result.body.properties?.userAuthentication
                  ?.x509Credentials
                  ? undefined
                  : {
                      certificateReference:
                        result.body.properties?.userAuthentication
                          ?.x509Credentials?.["certificateReference"],
                    },
              },
          transportAuthentication: !result.body.properties
            ?.transportAuthentication
            ? undefined
            : {
                ownCertificates:
                  result.body.properties?.transportAuthentication?.[
                    "ownCertificates"
                  ].map((p) => ({
                    certThumbprint: p["certThumbprint"],
                    certSecretReference: p["certSecretReference"],
                    certPasswordReference: p["certPasswordReference"],
                  })),
              },
          additionalConfiguration:
            result.body.properties?.["additionalConfiguration"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Update a AssetEndpointProfile */
export async function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  properties: AssetEndpointProfileUpdate,
  options: AssetEndpointProfilesUpdateOptionalParams = { requestOptions: {} },
): Promise<AssetEndpointProfile> {
  const result = await _updateSend(
    context,
    subscriptionId,
    resourceGroupName,
    assetEndpointProfileName,
    properties,
    options,
  );
  return _updateDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  options: AssetEndpointProfilesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AssetEndpointProfilesDelete202Response
  | AssetEndpointProfilesDelete204Response
  | AssetEndpointProfilesDeleteDefaultResponse
  | AssetEndpointProfilesDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles/{assetEndpointProfileName}",
      subscriptionId,
      resourceGroupName,
      assetEndpointProfileName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | AssetEndpointProfilesDelete202Response
    | AssetEndpointProfilesDelete204Response
    | AssetEndpointProfilesDeleteDefaultResponse
    | AssetEndpointProfilesDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a AssetEndpointProfile */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetEndpointProfileName: string,
  options: AssetEndpointProfilesDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(
    context,
    subscriptionId,
    resourceGroupName,
    assetEndpointProfileName,
    options,
  );
  return _$deleteDeserialize(result);
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AssetEndpointProfilesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AssetEndpointProfilesListByResourceGroup200Response
  | AssetEndpointProfilesListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result:
    | AssetEndpointProfilesListByResourceGroup200Response
    | AssetEndpointProfilesListByResourceGroupDefaultResponse,
): Promise<_AssetEndpointProfileListResult> {
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
            targetAddress: p.properties?.["targetAddress"],
            userAuthentication: !p.properties?.userAuthentication
              ? undefined
              : {
                  mode: p.properties?.userAuthentication?.[
                    "mode"
                  ] as UserAuthenticationMode,
                  usernamePasswordCredentials: !p.properties?.userAuthentication
                    ?.usernamePasswordCredentials
                    ? undefined
                    : {
                        usernameReference:
                          p.properties?.userAuthentication
                            ?.usernamePasswordCredentials?.[
                            "usernameReference"
                          ],
                        passwordReference:
                          p.properties?.userAuthentication
                            ?.usernamePasswordCredentials?.[
                            "passwordReference"
                          ],
                      },
                  x509Credentials: !p.properties?.userAuthentication
                    ?.x509Credentials
                    ? undefined
                    : {
                        certificateReference:
                          p.properties?.userAuthentication?.x509Credentials?.[
                            "certificateReference"
                          ],
                      },
                },
            transportAuthentication: !p.properties?.transportAuthentication
              ? undefined
              : {
                  ownCertificates: p.properties?.transportAuthentication?.[
                    "ownCertificates"
                  ].map((p) => ({
                    certThumbprint: p["certThumbprint"],
                    certSecretReference: p["certSecretReference"],
                    certPasswordReference: p["certPasswordReference"],
                  })),
                },
            additionalConfiguration: p.properties?.["additionalConfiguration"],
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

/** List AssetEndpointProfile resources by resource group */
export async function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AssetEndpointProfilesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): Promise<_AssetEndpointProfileListResult> {
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
  options: AssetEndpointProfilesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | AssetEndpointProfilesListBySubscription200Response
  | AssetEndpointProfilesListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result:
    | AssetEndpointProfilesListBySubscription200Response
    | AssetEndpointProfilesListBySubscriptionDefaultResponse,
): Promise<_AssetEndpointProfileListResult> {
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
            targetAddress: p.properties?.["targetAddress"],
            userAuthentication: !p.properties?.userAuthentication
              ? undefined
              : {
                  mode: p.properties?.userAuthentication?.[
                    "mode"
                  ] as UserAuthenticationMode,
                  usernamePasswordCredentials: !p.properties?.userAuthentication
                    ?.usernamePasswordCredentials
                    ? undefined
                    : {
                        usernameReference:
                          p.properties?.userAuthentication
                            ?.usernamePasswordCredentials?.[
                            "usernameReference"
                          ],
                        passwordReference:
                          p.properties?.userAuthentication
                            ?.usernamePasswordCredentials?.[
                            "passwordReference"
                          ],
                      },
                  x509Credentials: !p.properties?.userAuthentication
                    ?.x509Credentials
                    ? undefined
                    : {
                        certificateReference:
                          p.properties?.userAuthentication?.x509Credentials?.[
                            "certificateReference"
                          ],
                      },
                },
            transportAuthentication: !p.properties?.transportAuthentication
              ? undefined
              : {
                  ownCertificates: p.properties?.transportAuthentication?.[
                    "ownCertificates"
                  ].map((p) => ({
                    certThumbprint: p["certThumbprint"],
                    certSecretReference: p["certSecretReference"],
                    certPasswordReference: p["certPasswordReference"],
                  })),
                },
            additionalConfiguration: p.properties?.["additionalConfiguration"],
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

/** List AssetEndpointProfile resources by subscription ID */
export async function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: AssetEndpointProfilesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): Promise<_AssetEndpointProfileListResult> {
  const result = await _listBySubscriptionSend(
    context,
    subscriptionId,
    options,
  );
  return _listBySubscriptionDeserialize(result);
}
