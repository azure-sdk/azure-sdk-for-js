// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { CodeSigningClient } from "./codeSigningClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  CertificateProfile,
  CertificateProfileProperties,
  KnownProfileType,
  ProfileType,
  KnownProvisioningState,
  ProvisioningState,
  KnownCertificateProfileStatus,
  CertificateProfileStatus,
  Certificate,
  KnownCertificateStatus,
  CertificateStatus,
  Revocation,
  KnownRevocationStatus,
  RevocationStatus,
  ProxyResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  RevokeCertificate,
  CodeSigningAccount,
  CodeSigningAccountProperties,
  AccountSku,
  KnownSkuName,
  SkuName,
  TrackedResource,
  CodeSigningAccountPatch,
  CodeSigningAccountPatchProperties,
  AccountSkuPatch,
  CheckNameAvailability,
  CheckNameAvailabilityResult,
  KnownNameUnavailabilityReason,
  NameUnavailabilityReason,
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  KnownVersions,
} from "./models/index.js";
export {
  CodeSigningClientOptionalParams,
  OperationsListOptionalParams,
  CodeSigningAccountsGetOptionalParams,
  CodeSigningAccountsCreateOptionalParams,
  CodeSigningAccountsUpdateOptionalParams,
  CodeSigningAccountsDeleteOptionalParams,
  CodeSigningAccountsListByResourceGroupOptionalParams,
  CodeSigningAccountsListBySubscriptionOptionalParams,
  CodeSigningAccountsCheckNameAvailabilityOptionalParams,
  CertificateProfilesGetOptionalParams,
  CertificateProfilesCreateOptionalParams,
  CertificateProfilesDeleteOptionalParams,
  CertificateProfilesListByCodeSigningAccountOptionalParams,
  CertificateProfilesRevokeCertificateOptionalParams,
} from "./api/index.js";
export {
  CertificateProfilesOperations,
  CodeSigningAccountsOperations,
  OperationsOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
