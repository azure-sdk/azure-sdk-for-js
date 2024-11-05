// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createAppComplianceAutomation,
  AppComplianceAutomationContext,
  AppComplianceAutomationClientOptionalParams,
} from "./appComplianceAutomationContext.js";
export {
  evidenceGet,
  evidenceCreateOrUpdate,
  evidenceDelete,
  evidenceListByReport,
  evidenceDownload,
} from "./evidence/index.js";
export { operationsList } from "./operations/index.js";
export {
  providerActionsCheckNameAvailability,
  providerActionsGetCollectionCount,
  providerActionsGetOverviewStatus,
  providerActionsOnboard,
  providerActionsTriggerEvaluation,
  providerActionsListInUseStorageAccounts,
} from "./providerActions/index.js";
export {
  reportGet,
  reportCreateOrUpdate,
  reportUpdate,
  reportDelete,
  reportList,
  reportSyncCertRecord,
  reportCheckNameAvailability,
  reportFix,
  reportGetScopingQuestions,
  reportVerify,
} from "./report/index.js";
export {
  scopingConfigurationGet,
  scopingConfigurationCreateOrUpdate,
  scopingConfigurationDelete,
  scopingConfigurationList,
} from "./scopingConfiguration/index.js";
export {
  snapshotGet,
  snapshotList,
  snapshotDownload,
} from "./snapshot/index.js";
export {
  webhookGet,
  webhookCreateOrUpdate,
  webhookUpdate,
  webhookDelete,
  webhookList,
} from "./webhook/index.js";
