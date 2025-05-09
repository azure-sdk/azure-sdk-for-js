// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  GetSupportedLanguagesParameters,
  Translate2Parameters,
  TransliterateParameters,
} from "./parameters.js";
import type {
  GetSupportedLanguages200Response,
  GetSupportedLanguagesDefaultResponse,
  Translate2200Response,
  Translate2DefaultResponse,
  Transliterate200Response,
  TransliterateDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetSupportedLanguages {
  /** Gets the set of languages currently supported by other operations of the Translator. */
  get(
    options?: GetSupportedLanguagesParameters,
  ): StreamableMethod<
    GetSupportedLanguages200Response | GetSupportedLanguagesDefaultResponse
  >;
}

export interface Translate2 {
  /** Translate Text */
  post(
    options: Translate2Parameters,
  ): StreamableMethod<Translate2200Response | Translate2DefaultResponse>;
}

export interface Transliterate {
  /** Transliterate Text */
  post(
    options: TransliterateParameters,
  ): StreamableMethod<Transliterate200Response | TransliterateDefaultResponse>;
}

export interface Routes {
  /** Resource for '/languages' has methods for the following verbs: get */
  (path: "/languages"): GetSupportedLanguages;
  /** Resource for '/translate2' has methods for the following verbs: post */
  (path: "/translate2"): Translate2;
  /** Resource for '/transliterate' has methods for the following verbs: post */
  (path: "/transliterate"): Transliterate;
}

export type TextTranslationClient = Client & {
  path: Routes;
};
