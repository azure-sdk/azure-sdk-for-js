// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridConnectivityManagementAPIContext } from "../../api/hybridConnectivityManagementAPIContext.js";
import {
  endpointsGet,
  endpointsCreateOrUpdate,
  endpointsUpdate,
  endpointsDelete,
  endpointsList,
  endpointsListCredentials,
  endpointsListIngressGatewayCredentials,
  endpointsListManagedProxyDetails,
} from "../../api/endpoints/index.js";
import {
  EndpointResource,
  EndpointAccessResource,
  IngressGatewayResource,
  ManagedProxyRequest,
  ManagedProxyResource,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  EndpointsGetOptionalParams,
  EndpointsCreateOrUpdateOptionalParams,
  EndpointsUpdateOptionalParams,
  EndpointsDeleteOptionalParams,
  EndpointsListOptionalParams,
  EndpointsListCredentialsOptionalParams,
  EndpointsListIngressGatewayCredentialsOptionalParams,
  EndpointsListManagedProxyDetailsOptionalParams,
} from "../../api/options.js";

/** Interface representing a Endpoints operations. */
export interface EndpointsOperations {
  /** Gets the endpoint to the resource. */
  get: (
    resourceUri: string,
    endpointName: string,
    options?: EndpointsGetOptionalParams,
  ) => Promise<EndpointResource>;
  /** Create or update the endpoint to the target resource. */
  createOrUpdate: (
    resourceUri: string,
    endpointName: string,
    endpointResource: EndpointResource,
    options?: EndpointsCreateOrUpdateOptionalParams,
  ) => Promise<EndpointResource>;
  /** Update the endpoint to the target resource. */
  update: (
    resourceUri: string,
    endpointName: string,
    endpointResource: EndpointResource,
    options?: EndpointsUpdateOptionalParams,
  ) => Promise<EndpointResource>;
  /** Deletes the endpoint access to the target resource. */
  delete: (
    resourceUri: string,
    endpointName: string,
    options?: EndpointsDeleteOptionalParams,
  ) => Promise<void>;
  /** List of endpoints to the target resource. */
  list: (
    resourceUri: string,
    options?: EndpointsListOptionalParams,
  ) => PagedAsyncIterableIterator<EndpointResource>;
  /** Gets the endpoint access credentials to the resource. */
  listCredentials: (
    resourceUri: string,
    endpointName: string,
    options?: EndpointsListCredentialsOptionalParams,
  ) => Promise<EndpointAccessResource>;
  /** Gets the ingress gateway endpoint credentials */
  listIngressGatewayCredentials: (
    resourceUri: string,
    endpointName: string,
    options?: EndpointsListIngressGatewayCredentialsOptionalParams,
  ) => Promise<IngressGatewayResource>;
  /** Fetches the managed proxy details */
  listManagedProxyDetails: (
    resourceUri: string,
    endpointName: string,
    managedProxyRequest: ManagedProxyRequest,
    options?: EndpointsListManagedProxyDetailsOptionalParams,
  ) => Promise<ManagedProxyResource>;
}

export function getEndpoints(context: HybridConnectivityManagementAPIContext) {
  return {
    get: (resourceUri: string, endpointName: string, options?: EndpointsGetOptionalParams) =>
      endpointsGet(context, resourceUri, endpointName, options),
    createOrUpdate: (
      resourceUri: string,
      endpointName: string,
      endpointResource: EndpointResource,
      options?: EndpointsCreateOrUpdateOptionalParams,
    ) => endpointsCreateOrUpdate(context, resourceUri, endpointName, endpointResource, options),
    update: (
      resourceUri: string,
      endpointName: string,
      endpointResource: EndpointResource,
      options?: EndpointsUpdateOptionalParams,
    ) => endpointsUpdate(context, resourceUri, endpointName, endpointResource, options),
    delete: (resourceUri: string, endpointName: string, options?: EndpointsDeleteOptionalParams) =>
      endpointsDelete(context, resourceUri, endpointName, options),
    list: (resourceUri: string, options?: EndpointsListOptionalParams) =>
      endpointsList(context, resourceUri, options),
    listCredentials: (
      resourceUri: string,
      endpointName: string,
      options?: EndpointsListCredentialsOptionalParams,
    ) => endpointsListCredentials(context, resourceUri, endpointName, options),
    listIngressGatewayCredentials: (
      resourceUri: string,
      endpointName: string,
      options?: EndpointsListIngressGatewayCredentialsOptionalParams,
    ) => endpointsListIngressGatewayCredentials(context, resourceUri, endpointName, options),
    listManagedProxyDetails: (
      resourceUri: string,
      endpointName: string,
      managedProxyRequest: ManagedProxyRequest,
      options?: EndpointsListManagedProxyDetailsOptionalParams,
    ) =>
      endpointsListManagedProxyDetails(
        context,
        resourceUri,
        endpointName,
        managedProxyRequest,
        options,
      ),
  };
}

export function getEndpointsOperations(
  context: HybridConnectivityManagementAPIContext,
): EndpointsOperations {
  return {
    ...getEndpoints(context),
  };
}
