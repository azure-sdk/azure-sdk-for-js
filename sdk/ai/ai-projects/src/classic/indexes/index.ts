// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AIProjectContext } from "../../api/aiProjectContext.js";
import { IndexUnion } from "../../models/models.js";
import {
  IndexesCreateOrUpdateVersionOptionalParams,
  IndexesDeleteVersionOptionalParams,
  IndexesGetVersionOptionalParams,
  IndexesListLatestOptionalParams,
  IndexesListVersionsOptionalParams,
} from "../../api/indexes/options.js";
import {
  createOrUpdateVersion,
  deleteVersion,
  getVersion,
  listLatest,
  listVersions,
} from "../../api/indexes/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Indexes operations. */
export interface IndexesOperations {
  /** Create a new or update an existing Index with the given version id */
  createOrUpdateVersion: (
    name: string,
    version: string,
    body: IndexUnion,
    options?: IndexesCreateOrUpdateVersionOptionalParams,
  ) => Promise<IndexUnion>;
  /** Delete the specific version of the Index */
  deleteVersion: (
    name: string,
    version: string,
    options?: IndexesDeleteVersionOptionalParams,
  ) => Promise<void>;
  /** Get the specific version of the Index */
  getVersion: (
    name: string,
    version: string,
    options?: IndexesGetVersionOptionalParams,
  ) => Promise<IndexUnion>;
  /** List the latest version of each Index */
  listLatest: (
    options?: IndexesListLatestOptionalParams,
  ) => PagedAsyncIterableIterator<IndexUnion>;
  /** List all versions of the given Index */
  listVersions: (
    name: string,
    options?: IndexesListVersionsOptionalParams,
  ) => PagedAsyncIterableIterator<IndexUnion>;
}

function _getIndexes(context: AIProjectContext) {
  return {
    createOrUpdateVersion: (
      name: string,
      version: string,
      body: IndexUnion,
      options?: IndexesCreateOrUpdateVersionOptionalParams,
    ) => createOrUpdateVersion(context, name, version, body, options),
    deleteVersion: (
      name: string,
      version: string,
      options?: IndexesDeleteVersionOptionalParams,
    ) => deleteVersion(context, name, version, options),
    getVersion: (
      name: string,
      version: string,
      options?: IndexesGetVersionOptionalParams,
    ) => getVersion(context, name, version, options),
    listLatest: (options?: IndexesListLatestOptionalParams) =>
      listLatest(context, options),
    listVersions: (name: string, options?: IndexesListVersionsOptionalParams) =>
      listVersions(context, name, options),
  };
}

export function _getIndexesOperations(
  context: AIProjectContext,
): IndexesOperations {
  return {
    ..._getIndexes(context),
  };
}
