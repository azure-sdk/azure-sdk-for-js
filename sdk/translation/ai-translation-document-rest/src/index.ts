// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export {
  DocumentTranslationClient,
  DocumentTranslationClientOptionalParams,
} from "./documentTranslation/documentTranslationClient.js";
export {
  restorePoller,
  RestorePollerOptions,
} from "./documentTranslation/restorePollerHelpers.js";
export {
  StartTranslationDetails,
  BatchRequest,
  SourceInput,
  DocumentFilter,
  KnownStorageSource,
  StorageSource,
  TargetInput,
  Glossary,
  KnownStorageInputType,
  StorageInputType,
  TranslationStatus,
  KnownStatus,
  Status,
  TranslationError,
  KnownTranslationErrorCode,
  TranslationErrorCode,
  InnerTranslationError,
  StatusSummary,
  DocumentStatus,
  KnownFileFormatType,
  FileFormatType,
  SupportedFileFormats,
  FileFormat,
  DocumentTranslateContent,
  TranslationErrorResponse,
  Versions,
  StartTranslationOptionalParams,
  GetTranslationsStatusOptionalParams,
  GetDocumentStatusOptionalParams,
  GetTranslationStatusOptionalParams,
  CancelTranslationOptionalParams,
  GetDocumentsStatusOptionalParams,
  GetSupportedFormatsOptionalParams,
} from "./documentTranslation/models/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
export {
  SingleDocumentTranslationClient,
  SingleDocumentTranslationClientOptionalParams,
} from "./singleDocumentTranslation/singleDocumentTranslationClient.js";
export {
  StartTranslationDetails as SingleDocumentTranslationClientStartTranslationDetails,
  BatchRequest as SingleDocumentTranslationClientBatchRequest,
  SourceInput as SingleDocumentTranslationClientSourceInput,
  DocumentFilter as SingleDocumentTranslationClientDocumentFilter,
  KnownStorageSource as SingleDocumentTranslationClientKnownStorageSource,
  StorageSource as SingleDocumentTranslationClientStorageSource,
  TargetInput as SingleDocumentTranslationClientTargetInput,
  Glossary as SingleDocumentTranslationClientGlossary,
  KnownStorageInputType as SingleDocumentTranslationClientKnownStorageInputType,
  StorageInputType as SingleDocumentTranslationClientStorageInputType,
  TranslationStatus as SingleDocumentTranslationClientTranslationStatus,
  KnownStatus as SingleDocumentTranslationClientKnownStatus,
  Status as SingleDocumentTranslationClientStatus,
  TranslationError as SingleDocumentTranslationClientTranslationError,
  KnownTranslationErrorCode as SingleDocumentTranslationClientKnownTranslationErrorCode,
  TranslationErrorCode as SingleDocumentTranslationClientTranslationErrorCode,
  InnerTranslationError as SingleDocumentTranslationClientInnerTranslationError,
  StatusSummary as SingleDocumentTranslationClientStatusSummary,
  DocumentStatus as SingleDocumentTranslationClientDocumentStatus,
  KnownFileFormatType as SingleDocumentTranslationClientKnownFileFormatType,
  FileFormatType as SingleDocumentTranslationClientFileFormatType,
  SupportedFileFormats as SingleDocumentTranslationClientSupportedFileFormats,
  FileFormat as SingleDocumentTranslationClientFileFormat,
  DocumentTranslateContent as SingleDocumentTranslationClientDocumentTranslateContent,
  TranslationErrorResponse as SingleDocumentTranslationClientTranslationErrorResponse,
  Versions as SingleDocumentTranslationClientVersions,
  DocumentTranslateOptionalParams,
} from "./singleDocumentTranslation/models/index.js";
