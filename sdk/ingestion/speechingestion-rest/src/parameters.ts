// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Registration } from "./models";

export type GetRegistrationParameters = RequestParameters;

export interface CreateOrReplaceRegistrationBodyParam {
  /** The resource instance. */
  body: Registration;
}

export type CreateOrReplaceRegistrationParameters =
  CreateOrReplaceRegistrationBodyParam & RequestParameters;
export type DeleteRegistrationParameters = RequestParameters;
export type ListRegistrationsParameters = RequestParameters;
