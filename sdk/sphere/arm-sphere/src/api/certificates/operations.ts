// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureSphereContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  Certificate,
  certificateDeserializer,
  _CertificateListResult,
  _certificateListResultDeserializer,
  CertificateChainResponse,
  certificateChainResponseDeserializer,
  ProofOfPossessionNonceRequest,
  proofOfPossessionNonceRequestSerializer,
  ProofOfPossessionNonceResponse,
  proofOfPossessionNonceResponseDeserializer,
} from "../../models/models.js";
import {
  CertificatesRetrieveProofOfPossessionNonceOptionalParams,
  CertificatesRetrieveCertChainOptionalParams,
  CertificatesListByCatalogOptionalParams,
  CertificatesGetOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _certificatesRetrieveProofOfPossessionNonceSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  serialNumber: string,
  proofOfPossessionNonceRequest: ProofOfPossessionNonceRequest,
  options: CertificatesRetrieveProofOfPossessionNonceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}/retrieveProofOfPossessionNonce{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      serialNumber: serialNumber,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: proofOfPossessionNonceRequestSerializer(proofOfPossessionNonceRequest),
  });
}

export async function _certificatesRetrieveProofOfPossessionNonceDeserialize(
  result: PathUncheckedResponse,
): Promise<ProofOfPossessionNonceResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return proofOfPossessionNonceResponseDeserializer(result.body);
}

/** Gets the proof of possession nonce. */
export async function certificatesRetrieveProofOfPossessionNonce(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  serialNumber: string,
  proofOfPossessionNonceRequest: ProofOfPossessionNonceRequest,
  options: CertificatesRetrieveProofOfPossessionNonceOptionalParams = {
    requestOptions: {},
  },
): Promise<ProofOfPossessionNonceResponse> {
  const result = await _certificatesRetrieveProofOfPossessionNonceSend(
    context,
    resourceGroupName,
    catalogName,
    serialNumber,
    proofOfPossessionNonceRequest,
    options,
  );
  return _certificatesRetrieveProofOfPossessionNonceDeserialize(result);
}

export function _certificatesRetrieveCertChainSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  serialNumber: string,
  options: CertificatesRetrieveCertChainOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}/retrieveCertChain{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      serialNumber: serialNumber,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _certificatesRetrieveCertChainDeserialize(
  result: PathUncheckedResponse,
): Promise<CertificateChainResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return certificateChainResponseDeserializer(result.body);
}

/** Retrieves cert chain. */
export async function certificatesRetrieveCertChain(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  serialNumber: string,
  options: CertificatesRetrieveCertChainOptionalParams = { requestOptions: {} },
): Promise<CertificateChainResponse> {
  const result = await _certificatesRetrieveCertChainSend(
    context,
    resourceGroupName,
    catalogName,
    serialNumber,
    options,
  );
  return _certificatesRetrieveCertChainDeserialize(result);
}

export function _certificatesListByCatalogSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  options: CertificatesListByCatalogOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates{?api-version,$filter,$top,$skip,$maxpagesize}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      "api-version": context.apiVersion,
      $filter: options?.filter,
      $top: options?.top,
      $skip: options?.skip,
      $maxpagesize: options?.maxpagesize,
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

export async function _certificatesListByCatalogDeserialize(
  result: PathUncheckedResponse,
): Promise<_CertificateListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _certificateListResultDeserializer(result.body);
}

/** List Certificate resources by Catalog */
export function certificatesListByCatalog(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  options: CertificatesListByCatalogOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Certificate> {
  return buildPagedAsyncIterator(
    context,
    () => _certificatesListByCatalogSend(context, resourceGroupName, catalogName, options),
    _certificatesListByCatalogDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _certificatesGetSend(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  serialNumber: string,
  options: CertificatesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      catalogName: catalogName,
      serialNumber: serialNumber,
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

export async function _certificatesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Certificate> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return certificateDeserializer(result.body);
}

/** Get a Certificate */
export async function certificatesGet(
  context: Client,
  resourceGroupName: string,
  catalogName: string,
  serialNumber: string,
  options: CertificatesGetOptionalParams = { requestOptions: {} },
): Promise<Certificate> {
  const result = await _certificatesGetSend(
    context,
    resourceGroupName,
    catalogName,
    serialNumber,
    options,
  );
  return _certificatesGetDeserialize(result);
}
