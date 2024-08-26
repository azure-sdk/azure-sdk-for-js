// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  batchRequestSerializer,
  StartTranslationDetails,
  TranslationStatus,
  DocumentStatus,
  SupportedFileFormats,
  _DocumentsStatus,
  _TranslationsStatus,
} from "../models/models.js";
import { DocumentTranslationContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  StartTranslationOptionalParams,
  GetTranslationsStatusOptionalParams,
  GetDocumentStatusOptionalParams,
  GetTranslationStatusOptionalParams,
  CancelTranslationOptionalParams,
  GetDocumentsStatusOptionalParams,
  GetSupportedFormatsOptionalParams,
} from "../models/options.js";

export function _startTranslationSend(
  context: Client,
  body: StartTranslationDetails,
  options: StartTranslationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/document/batches")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { inputs: body["inputs"].map(batchRequestSerializer) },
    });
}

export async function _startTranslationDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * Use this API to submit a bulk (batch) translation request to the Document
 * Translation service.
 * Each request can contain multiple documents and must
 * contain a source and destination container for each document.
 *
 * The
 * prefix and suffix filter (if supplied) are used to filter folders. The prefix
 * is applied to the subpath after the container name.
 *
 * Glossaries /
 * Translation memory can be included in the request and are applied by the
 * service when the document is translated.
 *
 * If the glossary is
 * invalid or unreachable during translation, an error is indicated in the
 * document status.
 * If a file with the same name already exists at the
 * destination, it will be overwritten. The targetUrl for each target language
 * must be unique.
 */
export function startTranslation(
  context: Client,
  body: StartTranslationDetails,
  options: StartTranslationOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _startTranslationDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () => _startTranslationSend(context, body, options),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _getTranslationsStatusSend(
  context: Client,
  options: GetTranslationsStatusOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/document/batches")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        top: options?.top,
        skip: options?.skip,
        maxpagesize: options?.maxpagesize,
        ids: options?.ids,
        statuses: options?.statuses,
        createdDateTimeUtcStart:
          options?.createdDateTimeUtcStart?.toISOString(),
        createdDateTimeUtcEnd: options?.createdDateTimeUtcEnd?.toISOString(),
        orderby: options?.orderby,
      },
    });
}

export async function _getTranslationsStatusDeserialize(
  result: PathUncheckedResponse,
): Promise<_TranslationsStatus> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        createdDateTimeUtc: new Date(p["createdDateTimeUtc"]),
        lastActionDateTimeUtc: new Date(p["lastActionDateTimeUtc"]),
        status: p["status"],
        error: !p.error
          ? undefined
          : {
              code: p.error?.["code"],
              message: p.error?.["message"],
              target: p.error?.["target"],
              innerError: !p.error?.innerError
                ? undefined
                : {
                    code: p.error?.innerError?.["code"],
                    message: p.error?.innerError?.["message"],
                    target: p.error?.innerError?.["target"],
                    innerError: !p.error?.innerError?.innerError
                      ? undefined
                      : p.error?.innerError?.innerError,
                  },
            },
        summary: {
          total: p.summary["total"],
          failed: p.summary["failed"],
          success: p.summary["success"],
          inProgress: p.summary["inProgress"],
          notYetStarted: p.summary["notYetStarted"],
          cancelled: p.summary["cancelled"],
          totalCharacterCharged: p.summary["totalCharacterCharged"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/**
 * Returns a list of batch requests submitted and the status for each
 * request.
 * This list only contains batch requests submitted by the user (based on
 * the resource).
 *
 * If the number of requests exceeds our paging limit,
 * server-side paging is used. Paginated responses indicate a partial result and
 * include a continuation token in the response.
 * The absence of a continuation
 * token means that no additional pages are available.
 *
 * top, skip
 * and maxpagesize query parameters can be used to specify a number of results to
 * return and an offset for the collection.
 *
 * top indicates the total
 * number of records the user wants to be returned across all pages.
 * skip
 * indicates the number of records to skip from the list of batches based on the
 * sorting method specified.  By default, we sort by descending start
 * time.
 * maxpagesize is the maximum items returned in a page.  If more items are
 * requested via top (or top is not specified and there are more items to be
 * returned), @nextLink will contain the link to the next page.
 *
 *
 * orderby query parameter can be used to sort the returned list (ex
 * "orderby=createdDateTimeUtc asc" or "orderby=createdDateTimeUtc
 * desc").
 * The default sorting is descending by createdDateTimeUtc.
 * Some query
 * parameters can be used to filter the returned list (ex:
 * "status=Succeeded,Cancelled") will only return succeeded and cancelled
 * operations.
 * createdDateTimeUtcStart and createdDateTimeUtcEnd can be used
 * combined or separately to specify a range of datetime to filter the returned
 * list by.
 * The supported filtering query parameters are (status, ids,
 * createdDateTimeUtcStart, createdDateTimeUtcEnd).
 *
 * The server honors
 * the values specified by the client. However, clients must be prepared to handle
 * responses that contain a different page size or contain a continuation token.
 *
 *
 * When both top and skip are included, the server should first apply
 * skip and then top on the collection.
 * Note: If the server can't honor top
 * and/or skip, the server must return an error to the client informing about it
 * instead of just ignoring the query options.
 * This reduces the risk of the client
 * making assumptions about the data returned.
 */
export function getTranslationsStatus(
  context: Client,
  options: GetTranslationsStatusOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TranslationStatus> {
  return buildPagedAsyncIterator(
    context,
    () => _getTranslationsStatusSend(context, options),
    _getTranslationsStatusDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getDocumentStatusSend(
  context: Client,
  id: string,
  documentId: string,
  options: GetDocumentStatusOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/document/batches/{id}/documents/{documentId}", id, documentId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDocumentStatusDeserialize(
  result: PathUncheckedResponse,
): Promise<DocumentStatus> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    path: result.body["path"],
    sourcePath: result.body["sourcePath"],
    createdDateTimeUtc: new Date(result.body["createdDateTimeUtc"]),
    lastActionDateTimeUtc: new Date(result.body["lastActionDateTimeUtc"]),
    status: result.body["status"],
    to: result.body["to"],
    error: !result.body.error
      ? undefined
      : {
          code: result.body.error?.["code"],
          message: result.body.error?.["message"],
          target: result.body.error?.["target"],
          innerError: !result.body.error?.innerError
            ? undefined
            : {
                code: result.body.error?.innerError?.["code"],
                message: result.body.error?.innerError?.["message"],
                target: result.body.error?.innerError?.["target"],
                innerError: !result.body.error?.innerError?.innerError
                  ? undefined
                  : result.body.error?.innerError?.innerError,
              },
        },
    progress: result.body["progress"],
    id: result.body["id"],
    characterCharged: result.body["characterCharged"],
  };
}

/**
 * Returns the translation status for a specific document based on the request Id
 * and document Id.
 */
export async function getDocumentStatus(
  context: Client,
  id: string,
  documentId: string,
  options: GetDocumentStatusOptionalParams = { requestOptions: {} },
): Promise<DocumentStatus> {
  const result = await _getDocumentStatusSend(context, id, documentId, options);
  return _getDocumentStatusDeserialize(result);
}

export function _getTranslationStatusSend(
  context: Client,
  id: string,
  options: GetTranslationStatusOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/document/batches/{id}", id)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getTranslationStatusDeserialize(
  result: PathUncheckedResponse,
): Promise<TranslationStatus> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    createdDateTimeUtc: new Date(result.body["createdDateTimeUtc"]),
    lastActionDateTimeUtc: new Date(result.body["lastActionDateTimeUtc"]),
    status: result.body["status"],
    error: !result.body.error
      ? undefined
      : {
          code: result.body.error?.["code"],
          message: result.body.error?.["message"],
          target: result.body.error?.["target"],
          innerError: !result.body.error?.innerError
            ? undefined
            : {
                code: result.body.error?.innerError?.["code"],
                message: result.body.error?.innerError?.["message"],
                target: result.body.error?.innerError?.["target"],
                innerError: !result.body.error?.innerError?.innerError
                  ? undefined
                  : result.body.error?.innerError?.innerError,
              },
        },
    summary: {
      total: result.body.summary["total"],
      failed: result.body.summary["failed"],
      success: result.body.summary["success"],
      inProgress: result.body.summary["inProgress"],
      notYetStarted: result.body.summary["notYetStarted"],
      cancelled: result.body.summary["cancelled"],
      totalCharacterCharged: result.body.summary["totalCharacterCharged"],
    },
  };
}

/**
 * Returns the status for a document translation request.
 * The status includes the
 * overall request status, as well as the status for documents that are being
 * translated as part of that request.
 */
export async function getTranslationStatus(
  context: Client,
  id: string,
  options: GetTranslationStatusOptionalParams = { requestOptions: {} },
): Promise<TranslationStatus> {
  const result = await _getTranslationStatusSend(context, id, options);
  return _getTranslationStatusDeserialize(result);
}

export function _cancelTranslationSend(
  context: Client,
  id: string,
  options: CancelTranslationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/document/batches/{id}", id)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _cancelTranslationDeserialize(
  result: PathUncheckedResponse,
): Promise<TranslationStatus> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    createdDateTimeUtc: new Date(result.body["createdDateTimeUtc"]),
    lastActionDateTimeUtc: new Date(result.body["lastActionDateTimeUtc"]),
    status: result.body["status"],
    error: !result.body.error
      ? undefined
      : {
          code: result.body.error?.["code"],
          message: result.body.error?.["message"],
          target: result.body.error?.["target"],
          innerError: !result.body.error?.innerError
            ? undefined
            : {
                code: result.body.error?.innerError?.["code"],
                message: result.body.error?.innerError?.["message"],
                target: result.body.error?.innerError?.["target"],
                innerError: !result.body.error?.innerError?.innerError
                  ? undefined
                  : result.body.error?.innerError?.innerError,
              },
        },
    summary: {
      total: result.body.summary["total"],
      failed: result.body.summary["failed"],
      success: result.body.summary["success"],
      inProgress: result.body.summary["inProgress"],
      notYetStarted: result.body.summary["notYetStarted"],
      cancelled: result.body.summary["cancelled"],
      totalCharacterCharged: result.body.summary["totalCharacterCharged"],
    },
  };
}

/**
 * Cancel a currently processing or queued translation.
 * A translation will not be
 * cancelled if it is already completed or failed or cancelling. A bad request
 * will be returned.
 * All documents that have completed translation will not be
 * cancelled and will be charged.
 * All pending documents will be cancelled if
 * possible.
 */
export async function cancelTranslation(
  context: Client,
  id: string,
  options: CancelTranslationOptionalParams = { requestOptions: {} },
): Promise<TranslationStatus> {
  const result = await _cancelTranslationSend(context, id, options);
  return _cancelTranslationDeserialize(result);
}

export function _getDocumentsStatusSend(
  context: Client,
  id: string,
  options: GetDocumentsStatusOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/document/batches/{id}/documents", id)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        top: options?.top,
        skip: options?.skip,
        maxpagesize: options?.maxpagesize,
        ids: options?.ids,
        statuses: options?.statuses,
        createdDateTimeUtcStart:
          options?.createdDateTimeUtcStart?.toISOString(),
        createdDateTimeUtcEnd: options?.createdDateTimeUtcEnd?.toISOString(),
        orderby: options?.orderby,
      },
    });
}

export async function _getDocumentsStatusDeserialize(
  result: PathUncheckedResponse,
): Promise<_DocumentsStatus> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        path: p["path"],
        sourcePath: p["sourcePath"],
        createdDateTimeUtc: new Date(p["createdDateTimeUtc"]),
        lastActionDateTimeUtc: new Date(p["lastActionDateTimeUtc"]),
        status: p["status"],
        to: p["to"],
        error: !p.error
          ? undefined
          : {
              code: p.error?.["code"],
              message: p.error?.["message"],
              target: p.error?.["target"],
              innerError: !p.error?.innerError
                ? undefined
                : {
                    code: p.error?.innerError?.["code"],
                    message: p.error?.innerError?.["message"],
                    target: p.error?.innerError?.["target"],
                    innerError: !p.error?.innerError?.innerError
                      ? undefined
                      : p.error?.innerError?.innerError,
                  },
            },
        progress: p["progress"],
        id: p["id"],
        characterCharged: p["characterCharged"],
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/**
 * Returns the status for all documents in a batch document translation request.
 *
 *
 * If the number of documents in the response exceeds our paging limit,
 * server-side paging is used.
 * Paginated responses indicate a partial result and
 * include a continuation token in the response. The absence of a continuation
 * token means that no additional pages are available.
 *
 * top, skip
 * and maxpagesize query parameters can be used to specify a number of results to
 * return and an offset for the collection.
 *
 * top indicates the total
 * number of records the user wants to be returned across all pages.
 * skip
 * indicates the number of records to skip from the list of document status held
 * by the server based on the sorting method specified.  By default, we sort by
 * descending start time.
 * maxpagesize is the maximum items returned in a page.
 * If more items are requested via top (or top is not specified and there are
 * more items to be returned), @nextLink will contain the link to the next page.
 *
 *
 * orderby query parameter can be used to sort the returned list (ex
 * "orderby=createdDateTimeUtc asc" or "orderby=createdDateTimeUtc
 * desc").
 * The default sorting is descending by createdDateTimeUtc.
 * Some query
 * parameters can be used to filter the returned list (ex:
 * "status=Succeeded,Cancelled") will only return succeeded and cancelled
 * documents.
 * createdDateTimeUtcStart and createdDateTimeUtcEnd can be used
 * combined or separately to specify a range of datetime to filter the returned
 * list by.
 * The supported filtering query parameters are (status, ids,
 * createdDateTimeUtcStart, createdDateTimeUtcEnd).
 *
 * When both top
 * and skip are included, the server should first apply skip and then top on
 * the collection.
 * Note: If the server can't honor top and/or skip, the server
 * must return an error to the client informing about it instead of just ignoring
 * the query options.
 * This reduces the risk of the client making assumptions about
 * the data returned.
 */
export function getDocumentsStatus(
  context: Client,
  id: string,
  options: GetDocumentsStatusOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DocumentStatus> {
  return buildPagedAsyncIterator(
    context,
    () => _getDocumentsStatusSend(context, id, options),
    _getDocumentsStatusDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSupportedFormatsSend(
  context: Client,
  options: GetSupportedFormatsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/document/formats")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { type: options?.typeParam },
    });
}

export async function _getSupportedFormatsDeserialize(
  result: PathUncheckedResponse,
): Promise<SupportedFileFormats> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        format: p["format"],
        fileExtensions: p["fileExtensions"],
        contentTypes: p["contentTypes"],
        defaultVersion: p["defaultVersion"],
        versions: p["versions"],
        type: p["type"],
      };
    }),
  };
}

/**
 * The list of supported formats supported by the Document Translation
 * service.
 * The list includes the common file extension, as well as the
 * content-type if using the upload API.
 */
export async function getSupportedFormats(
  context: Client,
  options: GetSupportedFormatsOptionalParams = { requestOptions: {} },
): Promise<SupportedFileFormats> {
  const result = await _getSupportedFormatsSend(context, options);
  return _getSupportedFormatsDeserialize(result);
}
