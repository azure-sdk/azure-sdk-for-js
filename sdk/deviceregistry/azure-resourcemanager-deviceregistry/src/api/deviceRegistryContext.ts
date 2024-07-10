// Licensed under the MIT license.

import { TokenCredential } from "@typespec/ts-http-runtime";
import { ClientOptions } from "@typespec/ts-http-runtime";
import { DeviceRegistryContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface DeviceRegistryClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { DeviceRegistryContext } from "../rest/index.js";

/** Microsoft.DeviceRegistry Resource Provider management API. */
export function createDeviceRegistry(
  credential: TokenCredential,
  options: DeviceRegistryClientOptions = {},
): DeviceRegistryContext {
  const clientContext = getClient(credential, options);
  return clientContext;
}
