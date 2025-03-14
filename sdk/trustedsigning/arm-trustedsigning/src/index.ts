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
  CertificateProfilesRevokeCertificateOptionalParams,
  CertificateProfilesListByCodeSigningAccountOptionalParams,
  CertificateProfilesDeleteOptionalParams,
  CertificateProfilesCreateOptionalParams,
  CertificateProfilesGetOptionalParams,
  CodeSigningAccountsCheckNameAvailabilityOptionalParams,
  CodeSigningAccountsListBySubscriptionOptionalParams,
  CodeSigningAccountsListByResourceGroupOptionalParams,
  CodeSigningAccountsDeleteOptionalParams,
  CodeSigningAccountsUpdateOptionalParams,
  CodeSigningAccountsCreateOptionalParams,
  CodeSigningAccountsGetOptionalParams,
  OperationsListOptionalParams,
} from "./api/index.js";
export {
  CertificateProfilesOperations,
  CodeSigningAccountsOperations,
  OperationsOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
