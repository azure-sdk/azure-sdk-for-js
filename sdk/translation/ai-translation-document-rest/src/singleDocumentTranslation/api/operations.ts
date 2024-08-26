// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DocumentTranslateContent } from "../models/models.js";
import { DocumentTranslationContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
import { DocumentTranslateOptionalParams } from "../models/options.js";

export function _documentTranslateSend(
  context: Client,
  targetLanguage: string,
  body: DocumentTranslateContent,
  options: DocumentTranslateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/document:translate")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
      },
      queryParameters: {
        sourceLanguage: options?.sourceLanguage,
        targetLanguage: targetLanguage,
        category: options?.category,
        allowFallback: options?.allowFallback,
      },
      body: {
        document: uint8ArrayToString(body["document"], "base64"),
        glossary:
          body["glossary"] === undefined
            ? body["glossary"]
            : body["glossary"].map((p) => uint8ArrayToString(p, "base64")),
      },
    });
}

export async function _documentTranslateDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
}

/** Use this API to submit a single translation request to the Document Translation Service. */
export async function documentTranslate(
  context: Client,
  targetLanguage: string,
  body: DocumentTranslateContent,
  options: DocumentTranslateOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _documentTranslateSend(
    context,
    targetLanguage,
    body,
    options,
  );
  return _documentTranslateDeserialize(result);
}
