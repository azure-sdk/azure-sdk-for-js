// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  IndexesGetParameters,
  IndexesCreateOrUpdateParameters,
  IndexesListParameters,
  IndexesGetLatestParameters,
  IndexesGetNextVersionParameters,
  IndexesListLatestParameters,
  PromptsGetParameters,
  PromptsCreateOrUpdateParameters,
  PromptsListParameters,
  PromptsGetLatestParameters,
  PromptsGetNextVersionParameters,
  PromptsListLatestParameters,
} from "./parameters.js";
import {
  IndexesGet200Response,
  IndexesGetDefaultResponse,
  IndexesCreateOrUpdate200Response,
  IndexesCreateOrUpdate201Response,
  IndexesCreateOrUpdateDefaultResponse,
  IndexesList200Response,
  IndexesListDefaultResponse,
  IndexesGetLatest200Response,
  IndexesGetLatestDefaultResponse,
  IndexesGetNextVersion200Response,
  IndexesGetNextVersionDefaultResponse,
  IndexesListLatest200Response,
  IndexesListLatestDefaultResponse,
  PromptsGet200Response,
  PromptsGetDefaultResponse,
  PromptsCreateOrUpdate200Response,
  PromptsCreateOrUpdate201Response,
  PromptsCreateOrUpdateDefaultResponse,
  PromptsList200Response,
  PromptsListDefaultResponse,
  PromptsGetLatest200Response,
  PromptsGetLatestDefaultResponse,
  PromptsGetNextVersion200Response,
  PromptsGetNextVersionDefaultResponse,
  PromptsListLatest200Response,
  PromptsListLatestDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface IndexesGet {
  /** Get a specific version of an Index. */
  get(
    options?: IndexesGetParameters,
  ): StreamableMethod<IndexesGet200Response | IndexesGetDefaultResponse>;
  /** Creates or updates a IndexVersion. */
  put(
    options: IndexesCreateOrUpdateParameters,
  ): StreamableMethod<
    | IndexesCreateOrUpdate200Response
    | IndexesCreateOrUpdate201Response
    | IndexesCreateOrUpdateDefaultResponse
  >;
}

export interface IndexesList {
  /** List the versions of an Index given the name. */
  get(
    options: IndexesListParameters,
  ): StreamableMethod<IndexesList200Response | IndexesListDefaultResponse>;
}

export interface IndexesGetLatest {
  /** Get latest version of the Index. Latest is defined by most recent created by date. */
  get(
    options?: IndexesGetLatestParameters,
  ): StreamableMethod<
    IndexesGetLatest200Response | IndexesGetLatestDefaultResponse
  >;
}

export interface IndexesGetNextVersion {
  /** Get next Index version as defined by the server. The server keeps track of all versions that are string-representations of integers. If one exists, the nextVersion will be a string representation of the highest integer value + 1. Otherwise, the nextVersion will default to '1'. */
  post(
    options?: IndexesGetNextVersionParameters,
  ): StreamableMethod<
    IndexesGetNextVersion200Response | IndexesGetNextVersionDefaultResponse
  >;
}

export interface IndexesListLatest {
  /** List the latest version of each index. Latest is defined by most recent created by date. */
  get(
    options?: IndexesListLatestParameters,
  ): StreamableMethod<
    IndexesListLatest200Response | IndexesListLatestDefaultResponse
  >;
}

export interface PromptsGet {
  /** Get a specific version of a Prompt. */
  get(
    options?: PromptsGetParameters,
  ): StreamableMethod<PromptsGet200Response | PromptsGetDefaultResponse>;
  /** Creates or updates a Prompt */
  put(
    options: PromptsCreateOrUpdateParameters,
  ): StreamableMethod<
    | PromptsCreateOrUpdate200Response
    | PromptsCreateOrUpdate201Response
    | PromptsCreateOrUpdateDefaultResponse
  >;
}

export interface PromptsList {
  /** List the versions of a Prompt given the name. */
  get(
    options: PromptsListParameters,
  ): StreamableMethod<PromptsList200Response | PromptsListDefaultResponse>;
}

export interface PromptsGetLatest {
  /** Get latest version of the Prompt. Latest is defined by most recent created by date. */
  get(
    options?: PromptsGetLatestParameters,
  ): StreamableMethod<
    PromptsGetLatest200Response | PromptsGetLatestDefaultResponse
  >;
}

export interface PromptsGetNextVersion {
  /** Get next Prompt version as defined by the server. The server keeps track of all versions that are string-representations of integers. If one exists, the nextVersion will be a string representation of the highest integer value + 1. Otherwise, the nextVersion will default to '1'. */
  post(
    options?: PromptsGetNextVersionParameters,
  ): StreamableMethod<
    PromptsGetNextVersion200Response | PromptsGetNextVersionDefaultResponse
  >;
}

export interface PromptsListLatest {
  /** List the latest version of each prompt. Latest is defined by most recent created by date. */
  get(
    options?: PromptsListLatestParameters,
  ): StreamableMethod<
    PromptsListLatest200Response | PromptsListLatestDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/indexes/\{name\}/versions/\{version\}' has methods for the following verbs: get, put */
  (
    path: "/indexes/{name}/versions/{version}",
    name: string,
    version: string,
  ): IndexesGet;
  /** Resource for '/indexes/\{name\}/versions' has methods for the following verbs: get */
  (path: "/indexes/{name}/versions", name: string): IndexesList;
  /** Resource for '/indexes/\{name\}' has methods for the following verbs: get */
  (path: "/indexes/{name}", name: string): IndexesGetLatest;
  /** Resource for '/indexes/\{name\}:getNextVersion' has methods for the following verbs: post */
  (path: "/indexes/{name}:getNextVersion", name: string): IndexesGetNextVersion;
  /** Resource for '/indexes' has methods for the following verbs: get */
  (path: "/indexes"): IndexesListLatest;
  /** Resource for '/prompts/\{name\}/versions/\{version\}' has methods for the following verbs: get, put */
  (
    path: "/prompts/{name}/versions/{version}",
    name: string,
    version: string,
  ): PromptsGet;
  /** Resource for '/prompts/\{name\}/versions' has methods for the following verbs: get */
  (path: "/prompts/{name}/versions", name: string): PromptsList;
  /** Resource for '/prompts/\{name\}' has methods for the following verbs: get */
  (path: "/prompts/{name}", name: string): PromptsGetLatest;
  /** Resource for '/prompts/\{name\}:getNextVersion' has methods for the following verbs: post */
  (path: "/prompts/{name}:getNextVersion", name: string): PromptsGetNextVersion;
  /** Resource for '/prompts' has methods for the following verbs: get */
  (path: "/prompts"): PromptsListLatest;
}

export type MachineLearningServicesClient = Client & {
  path: Routes;
};
