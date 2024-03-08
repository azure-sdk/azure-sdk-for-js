// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { DocumentTranslateContent } from "./models";

export interface DocumentTranslateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DocumentTranslateBodyParam {
  body?: DocumentTranslateContent;
}

export interface DocumentTranslateQueryParamProperties {
  /**
   * Specifies source language of the input document.
   * If this parameter isn't specified, automatic language detection is applied to determine the source language.
   * For example if the source document is written in English, then use sourceLanguage=en
   */
  sourceLanguage?: string;
  /**
   * Specifies the language of the output document.
   * The target language must be one of the supported languages included in the translation scope.
   * For example if you want to translate the document in German language, then use targetLanguage=de
   */
  targetLanguage: string;
  /**
   * A string specifying the category (domain) of the translation. This parameter is used to get translations
   *     from a customized system built with Custom Translator. Add the Category ID from your Custom Translator
   *     project details to this parameter to use your deployed customized system. Default value is: general.
   */
  category?: string;
  /**
   * Specifies that the service is allowed to fall back to a general system when a custom system doesn't exist.
   *     Possible values are: true (default) or false.
   */
  allowFallback?: boolean;
}

export interface DocumentTranslateQueryParam {
  queryParameters: DocumentTranslateQueryParamProperties;
}

export interface DocumentTranslateHeaderParam {
  headers?: RawHttpHeadersInput & DocumentTranslateHeaders;
}

export interface DocumentTranslateMediaTypesParam {
  /** Content Type as multipart/form-data */
  contentType: "multipart/form-data";
}

export type DocumentTranslateParameters = DocumentTranslateQueryParam &
  DocumentTranslateHeaderParam &
  DocumentTranslateMediaTypesParam &
  DocumentTranslateBodyParam &
  RequestParameters;
