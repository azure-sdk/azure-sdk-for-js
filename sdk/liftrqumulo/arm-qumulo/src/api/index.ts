// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  OperationsListOptionalParams,
  FileSystemsGetOptionalParams,
  FileSystemsCreateOrUpdateOptionalParams,
  FileSystemsUpdateOptionalParams,
  FileSystemsDeleteOptionalParams,
  FileSystemsListByResourceGroupOptionalParams,
  FileSystemsListBySubscriptionOptionalParams,
} from "./options.js";
export {
  createStorage,
  StorageContext,
  StorageClientOptionalParams,
} from "./storageContext.js";
export {
  fileSystemsGet,
  fileSystemsCreateOrUpdate,
  fileSystemsUpdate,
  fileSystemsDelete,
  fileSystemsListByResourceGroup,
  fileSystemsListBySubscription,
} from "./fileSystems/index.js";
export { operationsList } from "./operations/index.js";
