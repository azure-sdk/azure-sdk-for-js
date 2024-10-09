// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureSphereContext } from "../../api/azureSphereContext.js";
import {
  Certificate,
  CertificateChainResponse,
  ProofOfPossessionNonceRequest,
  ProofOfPossessionNonceResponse,
} from "../../models/models.js";
import {
  certificatesGet,
  certificatesListByCatalog,
  certificatesRetrieveCertChain,
  certificatesRetrieveProofOfPossessionNonce,
} from "../../api/certificates/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  CertificatesGetOptionalParams,
  CertificatesListByCatalogOptionalParams,
  CertificatesRetrieveCertChainOptionalParams,
  CertificatesRetrieveProofOfPossessionNonceOptionalParams,
} from "../../models/options.js";

/** Interface representing a Certificates operations. */
export interface CertificatesOperations {
  /** Get a Certificate */
  get: (
    resourceGroupName: string,
    catalogName: string,
    serialNumber: string,
    options?: CertificatesGetOptionalParams,
  ) => Promise<Certificate>;
  /** List Certificate resources by Catalog */
  listByCatalog: (
    resourceGroupName: string,
    catalogName: string,
    options?: CertificatesListByCatalogOptionalParams,
  ) => PagedAsyncIterableIterator<Certificate>;
  /** Retrieves cert chain. */
  retrieveCertChain: (
    resourceGroupName: string,
    catalogName: string,
    serialNumber: string,
    options?: CertificatesRetrieveCertChainOptionalParams,
  ) => Promise<CertificateChainResponse>;
  /** Gets the proof of possession nonce. */
  retrieveProofOfPossessionNonce: (
    resourceGroupName: string,
    catalogName: string,
    serialNumber: string,
    proofOfPossessionNonceRequest: ProofOfPossessionNonceRequest,
    options?: CertificatesRetrieveProofOfPossessionNonceOptionalParams,
  ) => Promise<ProofOfPossessionNonceResponse>;
}

export function getCertificates(
  context: AzureSphereContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      catalogName: string,
      serialNumber: string,
      options?: CertificatesGetOptionalParams,
    ) =>
      certificatesGet(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        serialNumber,
        options,
      ),
    listByCatalog: (
      resourceGroupName: string,
      catalogName: string,
      options?: CertificatesListByCatalogOptionalParams,
    ) =>
      certificatesListByCatalog(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    retrieveCertChain: (
      resourceGroupName: string,
      catalogName: string,
      serialNumber: string,
      options?: CertificatesRetrieveCertChainOptionalParams,
    ) =>
      certificatesRetrieveCertChain(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        serialNumber,
        options,
      ),
    retrieveProofOfPossessionNonce: (
      resourceGroupName: string,
      catalogName: string,
      serialNumber: string,
      proofOfPossessionNonceRequest: ProofOfPossessionNonceRequest,
      options?: CertificatesRetrieveProofOfPossessionNonceOptionalParams,
    ) =>
      certificatesRetrieveProofOfPossessionNonce(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        serialNumber,
        proofOfPossessionNonceRequest,
        options,
      ),
  };
}

export function getCertificatesOperations(
  context: AzureSphereContext,
  subscriptionId: string,
): CertificatesOperations {
  return {
    ...getCertificates(context, subscriptionId),
  };
}
