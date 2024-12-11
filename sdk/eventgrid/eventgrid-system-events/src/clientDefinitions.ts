// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Routes {}

export type SystemEventsClient = Client & {
  path: Routes;
};
