// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createAstro,
  AstroContext,
  AstroClientOptionalParams,
} from "./astroContext.js";
export {
  OperationsListOptionalParams,
  OrganizationsGetOptionalParams,
  OrganizationsCreateOrUpdateOptionalParams,
  OrganizationsUpdateOptionalParams,
  OrganizationsDeleteOptionalParams,
  OrganizationsListByResourceGroupOptionalParams,
  OrganizationsListBySubscriptionOptionalParams,
  OrganizationsGetUsersOptionalParams,
  OrganizationsGetRolesOptionalParams,
  OrganizationsGetResourcesOptionalParams,
  OrganizationsManageRolesOptionalParams,
  OrganizationsRemoveUserOptionalParams,
} from "./options.js";
export { operationsList } from "./operations/index.js";
export {
  organizationsGet,
  organizationsCreateOrUpdate,
  organizationsUpdate,
  organizationsDelete,
  organizationsListByResourceGroup,
  organizationsListBySubscription,
  organizationsGetUsers,
  organizationsGetRoles,
  organizationsGetResources,
  organizationsManageRoles,
  organizationsRemoveUser,
} from "./organizations/index.js";
