// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { KubernetesRuntimeContext } from "../../api/kubernetesRuntimeContext.js";
import {
  ServicesListOptionalParams,
  ServicesDeleteOptionalParams,
  ServicesCreateOrUpdateOptionalParams,
  ServicesGetOptionalParams,
} from "../../api/options.js";
import {
  servicesList,
  servicesDelete,
  servicesCreateOrUpdate,
  servicesGet,
} from "../../api/services/index.js";
import { ServiceResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Services operations. */
export interface ServicesOperations {
  /** List ServiceResource resources by parent */
  list: (
    resourceUri: string,
    options?: ServicesListOptionalParams,
  ) => PagedAsyncIterableIterator<ServiceResource>;
  /** Delete a ServiceResource */
  delete: (
    resourceUri: string,
    serviceName: string,
    options?: ServicesDeleteOptionalParams,
  ) => Promise<void>;
  /** Create a ServiceResource */
  createOrUpdate: (
    resourceUri: string,
    serviceName: string,
    resource: ServiceResource,
    options?: ServicesCreateOrUpdateOptionalParams,
  ) => Promise<ServiceResource>;
  /** Get a ServiceResource */
  get: (
    resourceUri: string,
    serviceName: string,
    options?: ServicesGetOptionalParams,
  ) => Promise<ServiceResource>;
}

function _getServices(context: KubernetesRuntimeContext) {
  return {
    list: (resourceUri: string, options?: ServicesListOptionalParams) =>
      servicesList(context, resourceUri, options),
    delete: (
      resourceUri: string,
      serviceName: string,
      options?: ServicesDeleteOptionalParams,
    ) => servicesDelete(context, resourceUri, serviceName, options),
    createOrUpdate: (
      resourceUri: string,
      serviceName: string,
      resource: ServiceResource,
      options?: ServicesCreateOrUpdateOptionalParams,
    ) =>
      servicesCreateOrUpdate(
        context,
        resourceUri,
        serviceName,
        resource,
        options,
      ),
    get: (
      resourceUri: string,
      serviceName: string,
      options?: ServicesGetOptionalParams,
    ) => servicesGet(context, resourceUri, serviceName, options),
  };
}

export function _getServicesOperations(
  context: KubernetesRuntimeContext,
): ServicesOperations {
  return {
    ..._getServices(context),
  };
}
