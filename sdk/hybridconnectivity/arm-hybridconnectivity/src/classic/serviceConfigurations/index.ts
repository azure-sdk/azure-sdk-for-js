// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridConnectivityManagementAPIContext } from "../../api/hybridConnectivityManagementAPIContext.js";
import {
  ServiceConfigurationsGetOptionalParams,
  ServiceConfigurationsCreateOrupdateOptionalParams,
  ServiceConfigurationsUpdateOptionalParams,
  ServiceConfigurationsDeleteOptionalParams,
  ServiceConfigurationsListByEndpointResourceOptionalParams,
} from "../../api/options.js";
import {
  serviceConfigurationsGet,
  serviceConfigurationsCreateOrupdate,
  serviceConfigurationsUpdate,
  serviceConfigurationsDelete,
  serviceConfigurationsListByEndpointResource,
} from "../../api/serviceConfigurations/index.js";
import {
  ServiceConfigurationResource,
  ServiceConfigurationResourcePatch,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ServiceConfigurations operations. */
export interface ServiceConfigurationsOperations {
  /** Gets the details about the service to the resource. */
  get: (
    resourceUri: string,
    endpointName: string,
    serviceConfigurationName: string,
    options?: ServiceConfigurationsGetOptionalParams,
  ) => Promise<ServiceConfigurationResource>;
  /** Create or update a service in serviceConfiguration for the endpoint resource. */
  createOrupdate: (
    resourceUri: string,
    endpointName: string,
    serviceConfigurationName: string,
    serviceConfigurationResource: ServiceConfigurationResource,
    options?: ServiceConfigurationsCreateOrupdateOptionalParams,
  ) => Promise<ServiceConfigurationResource>;
  /** Update the service details in the service configurations of the target resource. */
  update: (
    resourceUri: string,
    endpointName: string,
    serviceConfigurationName: string,
    serviceConfigurationResource: ServiceConfigurationResourcePatch,
    options?: ServiceConfigurationsUpdateOptionalParams,
  ) => Promise<ServiceConfigurationResource>;
  /** Deletes the service details to the target resource. */
  delete: (
    resourceUri: string,
    endpointName: string,
    serviceConfigurationName: string,
    options?: ServiceConfigurationsDeleteOptionalParams,
  ) => Promise<void>;
  /** API to enumerate registered services in service configurations under a Endpoint Resource */
  listByEndpointResource: (
    resourceUri: string,
    endpointName: string,
    options?: ServiceConfigurationsListByEndpointResourceOptionalParams,
  ) => PagedAsyncIterableIterator<ServiceConfigurationResource>;
}

export function getServiceConfigurations(context: HybridConnectivityManagementAPIContext) {
  return {
    get: (
      resourceUri: string,
      endpointName: string,
      serviceConfigurationName: string,
      options?: ServiceConfigurationsGetOptionalParams,
    ) =>
      serviceConfigurationsGet(
        context,
        resourceUri,
        endpointName,
        serviceConfigurationName,
        options,
      ),
    createOrupdate: (
      resourceUri: string,
      endpointName: string,
      serviceConfigurationName: string,
      serviceConfigurationResource: ServiceConfigurationResource,
      options?: ServiceConfigurationsCreateOrupdateOptionalParams,
    ) =>
      serviceConfigurationsCreateOrupdate(
        context,
        resourceUri,
        endpointName,
        serviceConfigurationName,
        serviceConfigurationResource,
        options,
      ),
    update: (
      resourceUri: string,
      endpointName: string,
      serviceConfigurationName: string,
      serviceConfigurationResource: ServiceConfigurationResourcePatch,
      options?: ServiceConfigurationsUpdateOptionalParams,
    ) =>
      serviceConfigurationsUpdate(
        context,
        resourceUri,
        endpointName,
        serviceConfigurationName,
        serviceConfigurationResource,
        options,
      ),
    delete: (
      resourceUri: string,
      endpointName: string,
      serviceConfigurationName: string,
      options?: ServiceConfigurationsDeleteOptionalParams,
    ) =>
      serviceConfigurationsDelete(
        context,
        resourceUri,
        endpointName,
        serviceConfigurationName,
        options,
      ),
    listByEndpointResource: (
      resourceUri: string,
      endpointName: string,
      options?: ServiceConfigurationsListByEndpointResourceOptionalParams,
    ) => serviceConfigurationsListByEndpointResource(context, resourceUri, endpointName, options),
  };
}

export function getServiceConfigurationsOperations(
  context: HybridConnectivityManagementAPIContext,
): ServiceConfigurationsOperations {
  return {
    ...getServiceConfigurations(context),
  };
}
