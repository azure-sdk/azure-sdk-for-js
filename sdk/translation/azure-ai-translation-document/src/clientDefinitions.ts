// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DocumentTranslateParameters } from "./parameters";
import {
  DocumentTranslate200Response,
  DocumentTranslateDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface DocumentTranslate {
  /** API to translate a document. */
  post(
    options: DocumentTranslateParameters
  ): StreamableMethod<
    DocumentTranslate200Response | DocumentTranslateDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/document:translate' has methods for the following verbs: post */
  (path: "/document:translate"): DocumentTranslate;
}

export type DocumentTranslationClient = Client & {
  path: Routes;
};
