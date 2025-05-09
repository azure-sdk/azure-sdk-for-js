// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { HealthBotClient } from "./healthBotClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  OperationDetail,
  OperationDisplay,
  ErrorModel,
  ErrorDetail,
  ErrorAdditionalInfo,
  HealthBot,
  Sku,
  SkuName,
  Identity,
  ResourceIdentityType,
  UserAssignedIdentityMap,
  UserAssignedIdentity,
  HealthBotProperties,
  KeyVaultProperties,
  TrackedResource,
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  HealthBotUpdateParameters,
  HealthBotKeysResponse,
  HealthBotKey,
  KnownVersions,
} from "./models/index.js";
export { HealthBotClientOptionalParams } from "./api/index.js";
export {
  HealthBotsRegenerateApiJwtSecretOptionalParams,
  HealthBotsListSecretsOptionalParams,
  HealthBotsListOptionalParams,
  HealthBotsListByResourceGroupOptionalParams,
  HealthBotsDeleteOptionalParams,
  HealthBotsUpdateOptionalParams,
  HealthBotsCreateOptionalParams,
  HealthBotsGetOptionalParams,
} from "./api/healthBots/index.js";
export { OperationsListOptionalParams } from "./api/operations/index.js";
export { HealthBotsOperations, OperationsOperations } from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
