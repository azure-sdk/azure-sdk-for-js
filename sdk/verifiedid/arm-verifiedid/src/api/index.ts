// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createVerifiedId,
  VerifiedIdContext,
  VerifiedIdClientOptionalParams,
} from "./verifiedIdContext.js";
export {
  authoritiesGet,
  authoritiesCreateOrUpdate,
  authoritiesUpdate,
  authoritiesDelete,
  authoritiesListByResourceGroup,
  authoritiesListBySubscription,
} from "./authorities/index.js";
export { operationsList } from "./operations/index.js";
