// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  certificateProfilePropertiesSerializer,
  CertificateProfile,
  RevokeCertificate,
  _CertificateProfileListResult,
} from "../../models/models.js";
import { CodeSigningContext as Client } from "../index.js";
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
  CertificateProfilesGetOptionalParams,
  CertificateProfilesCreateOptionalParams,
  CertificateProfilesDeleteOptionalParams,
  CertificateProfilesListByCodeSigningAccountOptionalParams,
  CertificateProfilesRevokeCertificateOptionalParams,
} from "../../models/options.js";

export function _certificateProfilesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  profileName: string,
  options: CertificateProfilesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}/certificateProfiles/{profileName}",
      subscriptionId,
      resourceGroupName,
      accountName,
      profileName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _certificateProfilesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<CertificateProfile> {
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
          profileType: result.body.properties?.["profileType"],
          includeStreetAddress:
            result.body.properties?.["includeStreetAddress"],
          includeCity: result.body.properties?.["includeCity"],
          includeState: result.body.properties?.["includeState"],
          includeCountry: result.body.properties?.["includeCountry"],
          includePostalCode: result.body.properties?.["includePostalCode"],
          identityValidationId:
            result.body.properties?.["identityValidationId"],
          provisioningState: result.body.properties?.["provisioningState"],
          status: result.body.properties?.["status"],
          certificates:
            result.body.properties?.["certificates"] === undefined
              ? result.body.properties?.["certificates"]
              : result.body.properties?.["certificates"].map((p: any) => {
                  return {
                    serialNumber: p["serialNumber"],
                    enhancedKeyUsage: p["enhancedKeyUsage"],
                    subjectName: p["subjectName"],
                    thumbprint: p["thumbprint"],
                    createdDate: p["createdDate"],
                    expiryDate: p["expiryDate"],
                    status: p["status"],
                    revocation: !p.revocation
                      ? undefined
                      : {
                          requestedAt:
                            p.revocation?.["requestedAt"] !== undefined
                              ? new Date(p.revocation?.["requestedAt"])
                              : undefined,
                          effectiveAt:
                            p.revocation?.["effectiveAt"] !== undefined
                              ? new Date(p.revocation?.["effectiveAt"])
                              : undefined,
                          reason: p.revocation?.["reason"],
                          remarks: p.revocation?.["remarks"],
                          status: p.revocation?.["status"],
                          failureReason: p.revocation?.["failureReason"],
                        },
                  };
                }),
        },
  };
}

/** Get details of a certificate profile. */
export async function certificateProfilesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  profileName: string,
  options: CertificateProfilesGetOptionalParams = { requestOptions: {} },
): Promise<CertificateProfile> {
  const result = await _certificateProfilesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    accountName,
    profileName,
    options,
  );
  return _certificateProfilesGetDeserialize(result);
}

export function _certificateProfilesCreateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  profileName: string,
  resource: CertificateProfile,
  options: CertificateProfilesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}/certificateProfiles/{profileName}",
      subscriptionId,
      resourceGroupName,
      accountName,
      profileName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : certificateProfilePropertiesSerializer(resource.properties),
      },
    });
}

export async function _certificateProfilesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<CertificateProfile> {
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
          profileType: result.body.properties?.["profileType"],
          includeStreetAddress:
            result.body.properties?.["includeStreetAddress"],
          includeCity: result.body.properties?.["includeCity"],
          includeState: result.body.properties?.["includeState"],
          includeCountry: result.body.properties?.["includeCountry"],
          includePostalCode: result.body.properties?.["includePostalCode"],
          identityValidationId:
            result.body.properties?.["identityValidationId"],
          provisioningState: result.body.properties?.["provisioningState"],
          status: result.body.properties?.["status"],
          certificates:
            result.body.properties?.["certificates"] === undefined
              ? result.body.properties?.["certificates"]
              : result.body.properties?.["certificates"].map((p: any) => {
                  return {
                    serialNumber: p["serialNumber"],
                    enhancedKeyUsage: p["enhancedKeyUsage"],
                    subjectName: p["subjectName"],
                    thumbprint: p["thumbprint"],
                    createdDate: p["createdDate"],
                    expiryDate: p["expiryDate"],
                    status: p["status"],
                    revocation: !p.revocation
                      ? undefined
                      : {
                          requestedAt:
                            p.revocation?.["requestedAt"] !== undefined
                              ? new Date(p.revocation?.["requestedAt"])
                              : undefined,
                          effectiveAt:
                            p.revocation?.["effectiveAt"] !== undefined
                              ? new Date(p.revocation?.["effectiveAt"])
                              : undefined,
                          reason: p.revocation?.["reason"],
                          remarks: p.revocation?.["remarks"],
                          status: p.revocation?.["status"],
                          failureReason: p.revocation?.["failureReason"],
                        },
                  };
                }),
        },
  };
}

/** Create a certificate profile. */
export function certificateProfilesCreate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  profileName: string,
  resource: CertificateProfile,
  options: CertificateProfilesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CertificateProfile>, CertificateProfile> {
  return getLongRunningPoller(
    context,
    _certificateProfilesCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _certificateProfilesCreateSend(
          context,
          subscriptionId,
          resourceGroupName,
          accountName,
          profileName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<CertificateProfile>, CertificateProfile>;
}

export function _certificateProfilesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  profileName: string,
  options: CertificateProfilesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}/certificateProfiles/{profileName}",
      subscriptionId,
      resourceGroupName,
      accountName,
      profileName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _certificateProfilesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a certificate profile. */
export function certificateProfilesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  profileName: string,
  options: CertificateProfilesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _certificateProfilesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _certificateProfilesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          accountName,
          profileName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _certificateProfilesListByCodeSigningAccountSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  options: CertificateProfilesListByCodeSigningAccountOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}/certificateProfiles",
      subscriptionId,
      resourceGroupName,
      accountName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _certificateProfilesListByCodeSigningAccountDeserialize(
  result: PathUncheckedResponse,
): Promise<_CertificateProfileListResult> {
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
              profileType: p.properties?.["profileType"],
              includeStreetAddress: p.properties?.["includeStreetAddress"],
              includeCity: p.properties?.["includeCity"],
              includeState: p.properties?.["includeState"],
              includeCountry: p.properties?.["includeCountry"],
              includePostalCode: p.properties?.["includePostalCode"],
              identityValidationId: p.properties?.["identityValidationId"],
              provisioningState: p.properties?.["provisioningState"],
              status: p.properties?.["status"],
              certificates:
                p.properties?.["certificates"] === undefined
                  ? p.properties?.["certificates"]
                  : p.properties?.["certificates"].map((p: any) => {
                      return {
                        serialNumber: p["serialNumber"],
                        enhancedKeyUsage: p["enhancedKeyUsage"],
                        subjectName: p["subjectName"],
                        thumbprint: p["thumbprint"],
                        createdDate: p["createdDate"],
                        expiryDate: p["expiryDate"],
                        status: p["status"],
                        revocation: !p.revocation
                          ? undefined
                          : {
                              requestedAt:
                                p.revocation?.["requestedAt"] !== undefined
                                  ? new Date(p.revocation?.["requestedAt"])
                                  : undefined,
                              effectiveAt:
                                p.revocation?.["effectiveAt"] !== undefined
                                  ? new Date(p.revocation?.["effectiveAt"])
                                  : undefined,
                              reason: p.revocation?.["reason"],
                              remarks: p.revocation?.["remarks"],
                              status: p.revocation?.["status"],
                              failureReason: p.revocation?.["failureReason"],
                            },
                      };
                    }),
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List certificate profiles under a trusted signing account. */
export function certificateProfilesListByCodeSigningAccount(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  options: CertificateProfilesListByCodeSigningAccountOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CertificateProfile> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _certificateProfilesListByCodeSigningAccountSend(
        context,
        subscriptionId,
        resourceGroupName,
        accountName,
        options,
      ),
    _certificateProfilesListByCodeSigningAccountDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _certificateProfilesRevokeCertificateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  profileName: string,
  body: RevokeCertificate,
  options: CertificateProfilesRevokeCertificateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}/certificateProfiles/{profileName}/revokeCertificate",
      subscriptionId,
      resourceGroupName,
      accountName,
      profileName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        serialNumber: body["serialNumber"],
        thumbprint: body["thumbprint"],
        effectiveAt: body["effectiveAt"].toISOString(),
        reason: body["reason"],
        remarks: body["remarks"],
      },
    });
}

export async function _certificateProfilesRevokeCertificateDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Revoke a certificate under a certificate profile. */
export async function certificateProfilesRevokeCertificate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  profileName: string,
  body: RevokeCertificate,
  options: CertificateProfilesRevokeCertificateOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _certificateProfilesRevokeCertificateSend(
    context,
    subscriptionId,
    resourceGroupName,
    accountName,
    profileName,
    body,
    options,
  );
  return _certificateProfilesRevokeCertificateDeserialize(result);
}
