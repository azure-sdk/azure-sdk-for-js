// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceFabricContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  ManagedClusterCodeVersionResult,
  managedClusterCodeVersionResultDeserializer,
  ManagedClusterVersionEnvironment,
  managedClusterCodeVersionResultArrayDeserializer,
} from "../../models/models.js";
import {
  ManagedClusterVersionListByEnvironmentOptionalParams,
  ManagedClusterVersionGetByEnvironmentOptionalParams,
  ManagedClusterVersionListOptionalParams,
  ManagedClusterVersionGetOptionalParams,
} from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _managedClusterVersionListByEnvironmentSend(
  context: Client,
  location: string,
  environment: ManagedClusterVersionEnvironment,
  options: ManagedClusterVersionListByEnvironmentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/environments/{environment}/managedClusterVersions{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      environment: environment,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _managedClusterVersionListByEnvironmentDeserialize(
  result: PathUncheckedResponse,
): Promise<ManagedClusterCodeVersionResult[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return managedClusterCodeVersionResultArrayDeserializer(result.body);
}

/** Gets all available code versions for Service Fabric cluster resources by environment. */
export async function managedClusterVersionListByEnvironment(
  context: Client,
  location: string,
  environment: ManagedClusterVersionEnvironment,
  options: ManagedClusterVersionListByEnvironmentOptionalParams = {
    requestOptions: {},
  },
): Promise<ManagedClusterCodeVersionResult[]> {
  const result = await _managedClusterVersionListByEnvironmentSend(
    context,
    location,
    environment,
    options,
  );
  return _managedClusterVersionListByEnvironmentDeserialize(result);
}

export function _managedClusterVersionGetByEnvironmentSend(
  context: Client,
  location: string,
  environment: ManagedClusterVersionEnvironment,
  clusterVersion: string,
  options: ManagedClusterVersionGetByEnvironmentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/environments/{environment}/managedClusterVersions/{clusterVersion}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      environment: environment,
      clusterVersion: clusterVersion,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _managedClusterVersionGetByEnvironmentDeserialize(
  result: PathUncheckedResponse,
): Promise<ManagedClusterCodeVersionResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return managedClusterCodeVersionResultDeserializer(result.body);
}

/** Gets information about an available Service Fabric cluster code version by environment. */
export async function managedClusterVersionGetByEnvironment(
  context: Client,
  location: string,
  environment: ManagedClusterVersionEnvironment,
  clusterVersion: string,
  options: ManagedClusterVersionGetByEnvironmentOptionalParams = {
    requestOptions: {},
  },
): Promise<ManagedClusterCodeVersionResult> {
  const result = await _managedClusterVersionGetByEnvironmentSend(
    context,
    location,
    environment,
    clusterVersion,
    options,
  );
  return _managedClusterVersionGetByEnvironmentDeserialize(result);
}

export function _managedClusterVersionListSend(
  context: Client,
  location: string,
  options: ManagedClusterVersionListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/managedClusterVersions{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _managedClusterVersionListDeserialize(
  result: PathUncheckedResponse,
): Promise<ManagedClusterCodeVersionResult[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return managedClusterCodeVersionResultArrayDeserializer(result.body);
}

/** Gets all available code versions for Service Fabric cluster resources by location. */
export async function managedClusterVersionList(
  context: Client,
  location: string,
  options: ManagedClusterVersionListOptionalParams = { requestOptions: {} },
): Promise<ManagedClusterCodeVersionResult[]> {
  const result = await _managedClusterVersionListSend(context, location, options);
  return _managedClusterVersionListDeserialize(result);
}

export function _managedClusterVersionGetSend(
  context: Client,
  location: string,
  clusterVersion: string,
  options: ManagedClusterVersionGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/managedClusterVersions/{clusterVersion}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      clusterVersion: clusterVersion,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _managedClusterVersionGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ManagedClusterCodeVersionResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return managedClusterCodeVersionResultDeserializer(result.body);
}

/** Gets information about an available Service Fabric managed cluster code version. */
export async function managedClusterVersionGet(
  context: Client,
  location: string,
  clusterVersion: string,
  options: ManagedClusterVersionGetOptionalParams = { requestOptions: {} },
): Promise<ManagedClusterCodeVersionResult> {
  const result = await _managedClusterVersionGetSend(context, location, clusterVersion, options);
  return _managedClusterVersionGetDeserialize(result);
}
