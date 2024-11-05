// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Certificate,
  CertificateChainResponse,
  ProofOfPossessionNonceRequest,
  ProofOfPossessionNonceResponse,
  _CertificateListResult,
} from "../../models/models.js";
import { AzureSphereContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  CertificatesGetOptionalParams,
  CertificatesListByCatalogOptionalParams,
  CertificatesRetrieveCertChainOptionalParams,
  CertificatesRetrieveProofOfPossessionNonceOptionalParams,
} from "../../models/options.js";

export function _certificatesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  serialNumber: string,
  options: CertificatesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      serialNumber,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _certificatesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Certificate> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          certificate: result.body.properties?.["certificate"],
          status: result.body.properties?.["status"],
          subject: result.body.properties?.["subject"],
          thumbprint: result.body.properties?.["thumbprint"],
          expiryUtc:
            result.body.properties?.["expiryUtc"] !== undefined
              ? new Date(result.body.properties?.["expiryUtc"])
              : undefined,
          notBeforeUtc:
            result.body.properties?.["notBeforeUtc"] !== undefined
              ? new Date(result.body.properties?.["notBeforeUtc"])
              : undefined,
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a Certificate */
export async function certificatesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  serialNumber: string,
  options: CertificatesGetOptionalParams = { requestOptions: {} },
): Promise<Certificate> {
  const result = await _certificatesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    serialNumber,
    options,
  );
  return _certificatesGetDeserialize(result);
}

export function _certificatesListByCatalogSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CertificatesListByCatalogOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        $filter: options?.filter,
        $top: options?.top,
        $skip: options?.skip,
        $maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _certificatesListByCatalogDeserialize(
  result: PathUncheckedResponse,
): Promise<_CertificateListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              certificate: p.properties?.["certificate"],
              status: p.properties?.["status"],
              subject: p.properties?.["subject"],
              thumbprint: p.properties?.["thumbprint"],
              expiryUtc:
                p.properties?.["expiryUtc"] !== undefined
                  ? new Date(p.properties?.["expiryUtc"])
                  : undefined,
              notBeforeUtc:
                p.properties?.["notBeforeUtc"] !== undefined
                  ? new Date(p.properties?.["notBeforeUtc"])
                  : undefined,
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Certificate resources by Catalog */
export function certificatesListByCatalog(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CertificatesListByCatalogOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Certificate> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _certificatesListByCatalogSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    _certificatesListByCatalogDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _certificatesRetrieveCertChainSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  serialNumber: string,
  options: CertificatesRetrieveCertChainOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}/retrieveCertChain",
      subscriptionId,
      resourceGroupName,
      catalogName,
      serialNumber,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _certificatesRetrieveCertChainDeserialize(
  result: PathUncheckedResponse,
): Promise<CertificateChainResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    certificateChain: result.body["certificateChain"],
  };
}

/** Retrieves cert chain. */
export async function certificatesRetrieveCertChain(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  serialNumber: string,
  options: CertificatesRetrieveCertChainOptionalParams = { requestOptions: {} },
): Promise<CertificateChainResponse> {
  const result = await _certificatesRetrieveCertChainSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    serialNumber,
    options,
  );
  return _certificatesRetrieveCertChainDeserialize(result);
}

export function _certificatesRetrieveProofOfPossessionNonceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  serialNumber: string,
  proofOfPossessionNonceRequest: ProofOfPossessionNonceRequest,
  options: CertificatesRetrieveProofOfPossessionNonceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}/retrieveProofOfPossessionNonce",
      subscriptionId,
      resourceGroupName,
      catalogName,
      serialNumber,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        proofOfPossessionNonce:
          proofOfPossessionNonceRequest["proofOfPossessionNonce"],
      },
    });
}

export async function _certificatesRetrieveProofOfPossessionNonceDeserialize(
  result: PathUncheckedResponse,
): Promise<ProofOfPossessionNonceResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    certificate: result.body["certificate"],
    status: result.body["status"],
    subject: result.body["subject"],
    thumbprint: result.body["thumbprint"],
    expiryUtc:
      result.body["expiryUtc"] !== undefined
        ? new Date(result.body["expiryUtc"])
        : undefined,
    notBeforeUtc:
      result.body["notBeforeUtc"] !== undefined
        ? new Date(result.body["notBeforeUtc"])
        : undefined,
    provisioningState: result.body["provisioningState"],
  };
}

/** Gets the proof of possession nonce. */
export async function certificatesRetrieveProofOfPossessionNonce(
  context: Client,
  subscriptionId: string,
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
    subscriptionId,
    resourceGroupName,
    catalogName,
    serialNumber,
    proofOfPossessionNonceRequest,
    options,
  );
  return _certificatesRetrieveProofOfPossessionNonceDeserialize(result);
}
