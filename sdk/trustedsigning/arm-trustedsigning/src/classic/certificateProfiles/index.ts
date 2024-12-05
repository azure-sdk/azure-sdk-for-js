// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CodeSigningContext } from "../../api/codeSigningContext.js";
import {
  certificateProfilesGet,
  certificateProfilesCreate,
  certificateProfilesDelete,
  certificateProfilesListByCodeSigningAccount,
  certificateProfilesRevokeCertificate,
} from "../../api/certificateProfiles/index.js";
import { CertificateProfile, RevokeCertificate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CertificateProfilesGetOptionalParams,
  CertificateProfilesCreateOptionalParams,
  CertificateProfilesDeleteOptionalParams,
  CertificateProfilesListByCodeSigningAccountOptionalParams,
  CertificateProfilesRevokeCertificateOptionalParams,
} from "../../api/options.js";

/** Interface representing a CertificateProfiles operations. */
export interface CertificateProfilesOperations {
  /** Get details of a certificate profile. */
  get: (
    resourceGroupName: string,
    accountName: string,
    profileName: string,
    options?: CertificateProfilesGetOptionalParams,
  ) => Promise<CertificateProfile>;
  /** Create a certificate profile. */
  create: (
    resourceGroupName: string,
    accountName: string,
    profileName: string,
    resource: CertificateProfile,
    options?: CertificateProfilesCreateOptionalParams,
  ) => PollerLike<OperationState<CertificateProfile>, CertificateProfile>;
  /** Delete a certificate profile. */
  delete: (
    resourceGroupName: string,
    accountName: string,
    profileName: string,
    options?: CertificateProfilesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List certificate profiles under a trusted signing account. */
  listByCodeSigningAccount: (
    resourceGroupName: string,
    accountName: string,
    options?: CertificateProfilesListByCodeSigningAccountOptionalParams,
  ) => PagedAsyncIterableIterator<CertificateProfile>;
  /** Revoke a certificate under a certificate profile. */
  revokeCertificate: (
    resourceGroupName: string,
    accountName: string,
    profileName: string,
    body: RevokeCertificate,
    options?: CertificateProfilesRevokeCertificateOptionalParams,
  ) => Promise<void>;
}

export function getCertificateProfiles(
  context: CodeSigningContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      accountName: string,
      profileName: string,
      options?: CertificateProfilesGetOptionalParams,
    ) =>
      certificateProfilesGet(
        context,
        subscriptionId,
        resourceGroupName,
        accountName,
        profileName,
        options,
      ),
    create: (
      resourceGroupName: string,
      accountName: string,
      profileName: string,
      resource: CertificateProfile,
      options?: CertificateProfilesCreateOptionalParams,
    ) =>
      certificateProfilesCreate(
        context,
        subscriptionId,
        resourceGroupName,
        accountName,
        profileName,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      accountName: string,
      profileName: string,
      options?: CertificateProfilesDeleteOptionalParams,
    ) =>
      certificateProfilesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        accountName,
        profileName,
        options,
      ),
    listByCodeSigningAccount: (
      resourceGroupName: string,
      accountName: string,
      options?: CertificateProfilesListByCodeSigningAccountOptionalParams,
    ) =>
      certificateProfilesListByCodeSigningAccount(
        context,
        subscriptionId,
        resourceGroupName,
        accountName,
        options,
      ),
    revokeCertificate: (
      resourceGroupName: string,
      accountName: string,
      profileName: string,
      body: RevokeCertificate,
      options?: CertificateProfilesRevokeCertificateOptionalParams,
    ) =>
      certificateProfilesRevokeCertificate(
        context,
        subscriptionId,
        resourceGroupName,
        accountName,
        profileName,
        body,
        options,
      ),
  };
}

export function getCertificateProfilesOperations(
  context: CodeSigningContext,
  subscriptionId: string,
): CertificateProfilesOperations {
  return {
    ...getCertificateProfiles(context, subscriptionId),
  };
}
