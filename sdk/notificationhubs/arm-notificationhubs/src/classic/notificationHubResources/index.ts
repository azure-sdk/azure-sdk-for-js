// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NotificationHubsContext } from "../../api/notificationHubsContext.js";
import {
  NotificationHubResource,
  NotificationHubPatchParameters,
  DebugSendResponse,
  PnsCredentialsResource,
} from "../../models/models.js";
import {
  NotificationHubResourcesGetPnsCredentialsOptionalParams,
  NotificationHubResourcesDebugSendOptionalParams,
  NotificationHubResourcesListOptionalParams,
  NotificationHubResourcesDeleteOptionalParams,
  NotificationHubResourcesUpdateOptionalParams,
  NotificationHubResourcesCreateOrUpdateOptionalParams,
  NotificationHubResourcesGetOptionalParams,
} from "../../api/notificationHubResources/options.js";
import {
  getPnsCredentials,
  debugSend,
  list,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/notificationHubResources/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a NotificationHubResources operations. */
export interface NotificationHubResourcesOperations {
  /** Lists the PNS Credentials associated with a notification hub. */
  getPnsCredentials: (
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    options?: NotificationHubResourcesGetPnsCredentialsOptionalParams,
  ) => Promise<PnsCredentialsResource>;
  /** Test send a push notification. */
  debugSend: (
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    options?: NotificationHubResourcesDebugSendOptionalParams,
  ) => Promise<DebugSendResponse>;
  /** Lists the notification hubs associated with a namespace. */
  list: (
    resourceGroupName: string,
    namespaceName: string,
    options?: NotificationHubResourcesListOptionalParams,
  ) => PagedAsyncIterableIterator<NotificationHubResource>;
  /** Deletes a notification hub associated with a namespace. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    options?: NotificationHubResourcesDeleteOptionalParams,
  ) => Promise<void>;
  /** Patch a NotificationHub in a namespace. */
  update: (
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    parameters: NotificationHubPatchParameters,
    options?: NotificationHubResourcesUpdateOptionalParams,
  ) => Promise<NotificationHubResource>;
  /** Creates/Update a NotificationHub in a namespace. */
  createOrUpdate: (
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    parameters: NotificationHubResource,
    options?: NotificationHubResourcesCreateOrUpdateOptionalParams,
  ) => Promise<NotificationHubResource>;
  /** Gets the notification hub. */
  get: (
    resourceGroupName: string,
    namespaceName: string,
    notificationHubName: string,
    options?: NotificationHubResourcesGetOptionalParams,
  ) => Promise<NotificationHubResource>;
}

function _getNotificationHubResources(context: NotificationHubsContext) {
  return {
    getPnsCredentials: (
      resourceGroupName: string,
      namespaceName: string,
      notificationHubName: string,
      options?: NotificationHubResourcesGetPnsCredentialsOptionalParams,
    ) => getPnsCredentials(context, resourceGroupName, namespaceName, notificationHubName, options),
    debugSend: (
      resourceGroupName: string,
      namespaceName: string,
      notificationHubName: string,
      options?: NotificationHubResourcesDebugSendOptionalParams,
    ) => debugSend(context, resourceGroupName, namespaceName, notificationHubName, options),
    list: (
      resourceGroupName: string,
      namespaceName: string,
      options?: NotificationHubResourcesListOptionalParams,
    ) => list(context, resourceGroupName, namespaceName, options),
    delete: (
      resourceGroupName: string,
      namespaceName: string,
      notificationHubName: string,
      options?: NotificationHubResourcesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, namespaceName, notificationHubName, options),
    update: (
      resourceGroupName: string,
      namespaceName: string,
      notificationHubName: string,
      parameters: NotificationHubPatchParameters,
      options?: NotificationHubResourcesUpdateOptionalParams,
    ) =>
      update(context, resourceGroupName, namespaceName, notificationHubName, parameters, options),
    createOrUpdate: (
      resourceGroupName: string,
      namespaceName: string,
      notificationHubName: string,
      parameters: NotificationHubResource,
      options?: NotificationHubResourcesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        namespaceName,
        notificationHubName,
        parameters,
        options,
      ),
    get: (
      resourceGroupName: string,
      namespaceName: string,
      notificationHubName: string,
      options?: NotificationHubResourcesGetOptionalParams,
    ) => get(context, resourceGroupName, namespaceName, notificationHubName, options),
  };
}

export function _getNotificationHubResourcesOperations(
  context: NotificationHubsContext,
): NotificationHubResourcesOperations {
  return {
    ..._getNotificationHubResources(context),
  };
}
