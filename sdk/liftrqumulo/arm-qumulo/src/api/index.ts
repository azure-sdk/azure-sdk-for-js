// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  FileSystemsListBySubscriptionOptionalParams,
  FileSystemsListByResourceGroupOptionalParams,
  FileSystemsDeleteOptionalParams,
  FileSystemsUpdateOptionalParams,
  FileSystemsCreateOrUpdateOptionalParams,
  FileSystemsGetOptionalParams,
  OperationsListOptionalParams,
} from "./options.js";
export { createStorage, StorageContext, StorageClientOptionalParams } from "./storageContext.js";
export {
  fileSystemsListBySubscription,
  fileSystemsListByResourceGroup,
  fileSystemsDelete,
  fileSystemsUpdate,
  fileSystemsCreateOrUpdate,
  fileSystemsGet,
} from "./fileSystems/index.js";
export { operationsList } from "./operations/index.js";
