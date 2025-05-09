// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NotificationHubsContext } from "../../api/notificationHubsContext.js";
import {
  PnsCredentialsResource,
  NamespaceResource,
  NamespacePatchParameters,
  CheckAvailabilityParameters,
  CheckAvailabilityResult,
} from "../../models/models.js";
import {
  NamespaceResourcesGetPnsCredentialsOptionalParams,
  NamespaceResourcesCheckNotificationHubAvailabilityOptionalParams,
  NamespaceResourcesListAllOptionalParams,
  NamespaceResourcesListOptionalParams,
  NamespaceResourcesDeleteOptionalParams,
  NamespaceResourcesUpdateOptionalParams,
  NamespaceResourcesCreateOrUpdateOptionalParams,
  NamespaceResourcesGetOptionalParams,
} from "../../api/namespaceResources/options.js";
import {
  getPnsCredentials,
  checkNotificationHubAvailability,
  listAll,
  list,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/namespaceResources/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a NamespaceResources operations. */
export interface NamespaceResourcesOperations {
  /** Lists the PNS credentials associated with a namespace. */
  getPnsCredentials: (
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespaceResourcesGetPnsCredentialsOptionalParams,
  ) => Promise<PnsCredentialsResource>;
  /** Checks the availability of the given notificationHub in a namespace. */
  checkNotificationHubAvailability: (
    resourceGroupName: string,
    namespaceName: string,
    parameters: CheckAvailabilityParameters,
    options?: NamespaceResourcesCheckNotificationHubAvailabilityOptionalParams,
  ) => Promise<CheckAvailabilityResult>;
  /** Lists all the available namespaces within the subscription. */
  listAll: (
    options?: NamespaceResourcesListAllOptionalParams,
  ) => PagedAsyncIterableIterator<NamespaceResource>;
  /** Lists the available namespaces within a resource group. */
  list: (
    resourceGroupName: string,
    options?: NamespaceResourcesListOptionalParams,
  ) => PagedAsyncIterableIterator<NamespaceResource>;
  /** Deletes an existing namespace. This operation also removes all associated notificationHubs under the namespace. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespaceResourcesDeleteOptionalParams,
  ) => Promise<void>;
  /** Patches the existing namespace. */
  update: (
    resourceGroupName: string,
    namespaceName: string,
    parameters: NamespacePatchParameters,
    options?: NamespaceResourcesUpdateOptionalParams,
  ) => Promise<NamespaceResource>;
  /** Creates / Updates a Notification Hub namespace. This operation is idempotent. */
  createOrUpdate: (
    resourceGroupName: string,
    namespaceName: string,
    parameters: NamespaceResource,
    options?: NamespaceResourcesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<NamespaceResource>, NamespaceResource>;
  /** Returns the given namespace. */
  get: (
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespaceResourcesGetOptionalParams,
  ) => Promise<NamespaceResource>;
}

function _getNamespaceResources(context: NotificationHubsContext) {
  return {
    getPnsCredentials: (
      resourceGroupName: string,
      namespaceName: string,
      options?: NamespaceResourcesGetPnsCredentialsOptionalParams,
    ) => getPnsCredentials(context, resourceGroupName, namespaceName, options),
    checkNotificationHubAvailability: (
      resourceGroupName: string,
      namespaceName: string,
      parameters: CheckAvailabilityParameters,
      options?: NamespaceResourcesCheckNotificationHubAvailabilityOptionalParams,
    ) =>
      checkNotificationHubAvailability(
        context,
        resourceGroupName,
        namespaceName,
        parameters,
        options,
      ),
    listAll: (options?: NamespaceResourcesListAllOptionalParams) => listAll(context, options),
    list: (resourceGroupName: string, options?: NamespaceResourcesListOptionalParams) =>
      list(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      namespaceName: string,
      options?: NamespaceResourcesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, namespaceName, options),
    update: (
      resourceGroupName: string,
      namespaceName: string,
      parameters: NamespacePatchParameters,
      options?: NamespaceResourcesUpdateOptionalParams,
    ) => update(context, resourceGroupName, namespaceName, parameters, options),
    createOrUpdate: (
      resourceGroupName: string,
      namespaceName: string,
      parameters: NamespaceResource,
      options?: NamespaceResourcesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, namespaceName, parameters, options),
    get: (
      resourceGroupName: string,
      namespaceName: string,
      options?: NamespaceResourcesGetOptionalParams,
    ) => get(context, resourceGroupName, namespaceName, options),
  };
}

export function _getNamespaceResourcesOperations(
  context: NotificationHubsContext,
): NamespaceResourcesOperations {
  return {
    ..._getNamespaceResources(context),
  };
}
