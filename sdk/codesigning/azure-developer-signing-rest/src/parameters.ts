// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { SigningPayloadOptions } from "./models";

export type GetSigningStatusParameters = RequestParameters;
export type GetSignRootCertificateParameters = RequestParameters;
export type ListExtendedKeyUsagesParameters = RequestParameters;

export interface SignBodyParam {
  body?: SigningPayloadOptions;
}

export type SignParameters = SignBodyParam & RequestParameters;
