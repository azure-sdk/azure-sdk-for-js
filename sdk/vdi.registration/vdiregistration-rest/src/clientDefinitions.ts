// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetRegistrationParameters,
  CreateOrUpdateRegistrationParameters,
  DeleteRegistrationParameters,
  ListRegistrationParameters,
} from "./parameters.js";
import {
  GetRegistration200Response,
  GetRegistrationDefaultResponse,
  CreateOrUpdateRegistration200Response,
  CreateOrUpdateRegistration201Response,
  CreateOrUpdateRegistrationDefaultResponse,
  DeleteRegistration204Response,
  DeleteRegistrationDefaultResponse,
  ListRegistration200Response,
  ListRegistrationDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetRegistration {
  /** Fetch a registration by name. */
  get(
    options?: GetRegistrationParameters,
  ): StreamableMethod<
    GetRegistration200Response | GetRegistrationDefaultResponse
  >;
  /** Create or update registration. */
  patch(
    options: CreateOrUpdateRegistrationParameters,
  ): StreamableMethod<
    | CreateOrUpdateRegistration200Response
    | CreateOrUpdateRegistration201Response
    | CreateOrUpdateRegistrationDefaultResponse
  >;
  /** Delete a registration resource. */
  delete(
    options?: DeleteRegistrationParameters,
  ): StreamableMethod<
    DeleteRegistration204Response | DeleteRegistrationDefaultResponse
  >;
}

export interface ListRegistration {
  /** List registration resources. */
  get(
    options?: ListRegistrationParameters,
  ): StreamableMethod<
    ListRegistration200Response | ListRegistrationDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/registrations/\{registrationName\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/registrations/{registrationName}",
    registrationName: string,
  ): GetRegistration;
  /** Resource for '/registrations' has methods for the following verbs: get */
  (path: "/registrations"): ListRegistration;
}

export type VdiBatchRegistrationClient = Client & {
  path: Routes;
};
