// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ListViewType } from "../../models/models.js";
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface IndexesCreateOrUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface IndexesDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface IndexesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface IndexesListOptionalParams extends OperationOptions {
  /** Top count of results, top count cannot be greater than the page size. If topCount > page size, results with be default page size count will be returned */
  top?: number;
  /** Continuation token for pagination. */
  skip?: string;
  /** Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2 */
  tags?: string;
  /** [ListViewType.ActiveOnly, ListViewType.ArchivedOnly, ListViewType.All] View type for including/excluding (for example) archived entities. */
  listViewType?: ListViewType;
}

/** Optional parameters. */
export interface IndexesListVersionsOptionalParams extends OperationOptions {
  /** Top count of results, top count cannot be greater than the page size. If topCount > page size, results with be default page size count will be returned */
  top?: number;
  /** Continuation token for pagination. */
  skip?: string;
  /** Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2 */
  tags?: string;
  /** [ListViewType.ActiveOnly, ListViewType.ArchivedOnly, ListViewType.All] View type for including/excluding (for example) archived entities. */
  listViewType?: ListViewType;
}
