// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CertificateProfilesCreateOptionalParams,
  CertificateProfilesDeleteOptionalParams,
  CertificateProfilesGetOptionalParams,
  CertificateProfilesListByCodeSigningAccountOptionalParams,
  CertificateProfilesRevokeCertificateOptionalParams,
  CodeSigningContext as Client,
} from "../index.js";
import {
  CertificateProfile,
  certificateProfileSerializer,
  certificateProfileDeserializer,
  _CertificateProfileListResult,
  _certificateProfileListResultDeserializer,
  RevokeCertificate,
  revokeCertificateSerializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

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

  return certificateProfileDeserializer(result.body);
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
      body: certificateProfileSerializer(resource),
    });
}

export async function _certificateProfilesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<CertificateProfile> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return certificateProfileDeserializer(result.body);
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
      resourceLocationConfig: "azure-async-operation",
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
      resourceLocationConfig: "location",
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

  return _certificateProfileListResultDeserializer(result.body);
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
      body: revokeCertificateSerializer(body),
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
