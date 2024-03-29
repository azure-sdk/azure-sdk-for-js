// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetRegistrationParameters,
  CreateOrReplaceRegistrationParameters,
  DeleteRegistrationParameters,
  ListRegistrationsParameters,
} from "./parameters";
import {
  GetRegistration200Response,
  GetRegistrationDefaultResponse,
  CreateOrReplaceRegistration200Response,
  CreateOrReplaceRegistration201Response,
  CreateOrReplaceRegistrationDefaultResponse,
  DeleteRegistration204Response,
  DeleteRegistrationDefaultResponse,
  ListRegistrations200Response,
  ListRegistrationsDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetRegistration {
  /** Fetch a Registration by name. */
  get(
    options?: GetRegistrationParameters,
  ): StreamableMethod<
    GetRegistration200Response | GetRegistrationDefaultResponse
  >;
  /** Creates or replaces a Registration. */
  put(
    options: CreateOrReplaceRegistrationParameters,
  ): StreamableMethod<
    | CreateOrReplaceRegistration200Response
    | CreateOrReplaceRegistration201Response
    | CreateOrReplaceRegistrationDefaultResponse
  >;
  /** Delete a Registration. */
  delete(
    options?: DeleteRegistrationParameters,
  ): StreamableMethod<
    DeleteRegistration204Response | DeleteRegistrationDefaultResponse
  >;
}

export interface ListRegistrations {
  /** List Registration resources */
  get(
    options?: ListRegistrationsParameters,
  ): StreamableMethod<
    ListRegistrations200Response | ListRegistrationsDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/registrations/\{name\}' has methods for the following verbs: get, put, delete */
  (path: "/registrations/{name}", name: string): GetRegistration;
  /** Resource for '/registrations' has methods for the following verbs: get */
  (path: "/registrations"): ListRegistrations;
}

export type IngestionClient = Client & {
  path: Routes;
};
