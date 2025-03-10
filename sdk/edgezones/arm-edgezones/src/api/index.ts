// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createEdgeZones,
  EdgeZonesContext,
  EdgeZonesClientOptionalParams,
} from "./edgeZonesContext.js";
export {
  ExtendedZonesUnregisterOptionalParams,
  ExtendedZonesRegisterOptionalParams,
  ExtendedZonesListBySubscriptionOptionalParams,
  ExtendedZonesGetOptionalParams,
  OperationsListOptionalParams,
} from "./options.js";
export {
  extendedZonesUnregister,
  extendedZonesRegister,
  extendedZonesListBySubscription,
  extendedZonesGet,
} from "./extendedZones/index.js";
export { operationsList } from "./operations/index.js";
