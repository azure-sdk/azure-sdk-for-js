// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createWorkloads,
  WorkloadsContext,
  WorkloadsClientOptionalParams,
} from "./workloadsContext.js";
export {
  sAPDiscoverySitesGet,
  sAPDiscoverySitesCreate,
  sAPDiscoverySitesUpdate,
  sAPDiscoverySitesDelete,
  sAPDiscoverySitesListByResourceGroup,
  sAPDiscoverySitesListBySubscription,
  sAPDiscoverySitesImportEntities,
} from "./sAPDiscoverySites/index.js";
export {
  sAPInstancesGet,
  sAPInstancesCreate,
  sAPInstancesUpdate,
  sAPInstancesDelete,
  sAPInstancesListBySapDiscoverySite,
} from "./sAPInstances/index.js";
export {
  serverInstancesGet,
  serverInstancesCreate,
  serverInstancesUpdate,
  serverInstancesDelete,
  serverInstancesListBySapInstance,
} from "./serverInstances/index.js";
