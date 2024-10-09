// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
