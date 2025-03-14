// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceFabricContext } from "../../api/serviceFabricContext.js";
import {
  applicationsStartRollback,
  applicationsResumeUpgrade,
  applicationsReadUpgrade,
  applicationsList,
  applicationsDelete,
  applicationsUpdate,
  applicationsCreateOrUpdate,
  applicationsGet,
} from "../../api/applications/index.js";
import {
  ApplicationResource,
  ApplicationUpdateParameters,
  RuntimeResumeApplicationUpgradeParameters,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ApplicationsStartRollbackOptionalParams,
  ApplicationsResumeUpgradeOptionalParams,
  ApplicationsReadUpgradeOptionalParams,
  ApplicationsListOptionalParams,
  ApplicationsDeleteOptionalParams,
  ApplicationsUpdateOptionalParams,
  ApplicationsCreateOrUpdateOptionalParams,
  ApplicationsGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a Applications operations. */
export interface ApplicationsOperations {
  /** Send a request to start a rollback of the current application upgrade. This will start rolling back the application to the previous version. */
  startRollback: (
    resourceGroupName: string,
    clusterName: string,
    applicationName: string,
    options?: ApplicationsStartRollbackOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Send a request to resume the current application upgrade. This will resume the application upgrade from where it was paused. */
  resumeUpgrade: (
    resourceGroupName: string,
    clusterName: string,
    applicationName: string,
    parameters: RuntimeResumeApplicationUpgradeParameters,
    options?: ApplicationsResumeUpgradeOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Get the status of the latest application upgrade. It will query the cluster to find the status of the latest application upgrade. */
  readUpgrade: (
    resourceGroupName: string,
    clusterName: string,
    applicationName: string,
    options?: ApplicationsReadUpgradeOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Gets all managed application resources created or in the process of being created in the Service Fabric cluster resource. */
  list: (
    resourceGroupName: string,
    clusterName: string,
    options?: ApplicationsListOptionalParams,
  ) => PagedAsyncIterableIterator<ApplicationResource>;
  /** Delete a Service Fabric managed application resource with the specified name. */
  delete: (
    resourceGroupName: string,
    clusterName: string,
    applicationName: string,
    options?: ApplicationsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Updates the tags of an application resource of a given managed cluster. */
  update: (
    resourceGroupName: string,
    clusterName: string,
    applicationName: string,
    parameters: ApplicationUpdateParameters,
    options?: ApplicationsUpdateOptionalParams,
  ) => Promise<ApplicationResource>;
  /** Create or update a Service Fabric managed application resource with the specified name. */
  createOrUpdate: (
    resourceGroupName: string,
    clusterName: string,
    applicationName: string,
    parameters: ApplicationResource,
    options?: ApplicationsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ApplicationResource>, ApplicationResource>;
  /** Get a Service Fabric managed application resource created or in the process of being created in the Service Fabric cluster resource. */
  get: (
    resourceGroupName: string,
    clusterName: string,
    applicationName: string,
    options?: ApplicationsGetOptionalParams,
  ) => Promise<ApplicationResource>;
}

function _getApplications(context: ServiceFabricContext) {
  return {
    startRollback: (
      resourceGroupName: string,
      clusterName: string,
      applicationName: string,
      options?: ApplicationsStartRollbackOptionalParams,
    ) =>
      applicationsStartRollback(context, resourceGroupName, clusterName, applicationName, options),
    resumeUpgrade: (
      resourceGroupName: string,
      clusterName: string,
      applicationName: string,
      parameters: RuntimeResumeApplicationUpgradeParameters,
      options?: ApplicationsResumeUpgradeOptionalParams,
    ) =>
      applicationsResumeUpgrade(
        context,
        resourceGroupName,
        clusterName,
        applicationName,
        parameters,
        options,
      ),
    readUpgrade: (
      resourceGroupName: string,
      clusterName: string,
      applicationName: string,
      options?: ApplicationsReadUpgradeOptionalParams,
    ) => applicationsReadUpgrade(context, resourceGroupName, clusterName, applicationName, options),
    list: (
      resourceGroupName: string,
      clusterName: string,
      options?: ApplicationsListOptionalParams,
    ) => applicationsList(context, resourceGroupName, clusterName, options),
    delete: (
      resourceGroupName: string,
      clusterName: string,
      applicationName: string,
      options?: ApplicationsDeleteOptionalParams,
    ) => applicationsDelete(context, resourceGroupName, clusterName, applicationName, options),
    update: (
      resourceGroupName: string,
      clusterName: string,
      applicationName: string,
      parameters: ApplicationUpdateParameters,
      options?: ApplicationsUpdateOptionalParams,
    ) =>
      applicationsUpdate(
        context,
        resourceGroupName,
        clusterName,
        applicationName,
        parameters,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      clusterName: string,
      applicationName: string,
      parameters: ApplicationResource,
      options?: ApplicationsCreateOrUpdateOptionalParams,
    ) =>
      applicationsCreateOrUpdate(
        context,
        resourceGroupName,
        clusterName,
        applicationName,
        parameters,
        options,
      ),
    get: (
      resourceGroupName: string,
      clusterName: string,
      applicationName: string,
      options?: ApplicationsGetOptionalParams,
    ) => applicationsGet(context, resourceGroupName, clusterName, applicationName, options),
  };
}

export function _getApplicationsOperations(context: ServiceFabricContext): ApplicationsOperations {
  return {
    ..._getApplications(context),
  };
}
