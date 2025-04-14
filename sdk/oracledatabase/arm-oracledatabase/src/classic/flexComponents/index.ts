// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import { FlexComponent } from "../../models/models.js";
import {
  FlexComponentsListByParentOptionalParams,
  FlexComponentsGetOptionalParams,
} from "../../api/flexComponents/options.js";
import { listByParent, get } from "../../api/flexComponents/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a FlexComponents operations. */
export interface FlexComponentsOperations {
  /** List FlexComponent resources by SubscriptionLocationResource */
  listByParent: (
    location: string,
    options?: FlexComponentsListByParentOptionalParams,
  ) => PagedAsyncIterableIterator<FlexComponent>;
  /** Get a FlexComponent */
  get: (
    location: string,
    flexComponentName: string,
    options?: FlexComponentsGetOptionalParams,
  ) => Promise<FlexComponent>;
}

function _getFlexComponents(context: DatabaseContext) {
  return {
    listByParent: (location: string, options?: FlexComponentsListByParentOptionalParams) =>
      listByParent(context, location, options),
    get: (location: string, flexComponentName: string, options?: FlexComponentsGetOptionalParams) =>
      get(context, location, flexComponentName, options),
  };
}

export function _getFlexComponentsOperations(context: DatabaseContext): FlexComponentsOperations {
  return {
    ..._getFlexComponents(context),
  };
}
