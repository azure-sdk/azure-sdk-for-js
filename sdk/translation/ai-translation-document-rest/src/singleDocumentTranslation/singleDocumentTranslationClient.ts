// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { DocumentTranslateContent } from "./models/models.js";
import { DocumentTranslateOptionalParams } from "./models/options.js";
import {
  documentTranslate,
  createSingleDocumentTranslation,
  DocumentTranslationContext,
  SingleDocumentTranslationClientOptionalParams,
} from "./api/index.js";

export { SingleDocumentTranslationClientOptionalParams } from "./api/singleDocumentTranslationContext.js";

export class SingleDocumentTranslationClient {
  private _client: DocumentTranslationContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: SingleDocumentTranslationClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createSingleDocumentTranslation(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Use this API to submit a single translation request to the Document Translation Service. */
  documentTranslate(
    targetLanguage: string,
    body: DocumentTranslateContent,
    options: DocumentTranslateOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return documentTranslate(this._client, targetLanguage, body, options);
  }
}
