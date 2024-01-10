// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetStreamParameters,
  SendMessageParameters,
  GetTemplatesParameters,
} from "./parameters";
import {
  GetStream200Response,
  GetStreamDefaultResponse,
  SendMessage202Response,
  SendMessageDefaultResponse,
  GetTemplates200Response,
  GetTemplatesDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetStream {
  /** Download the Media payload from a User to Business message. */
  get(
    options?: GetStreamParameters
  ): StreamableMethod<GetStream200Response | GetStreamDefaultResponse>;
}

export interface SendMessage {
  /** Sends a notification message from Business to User. */
  post(
    options?: SendMessageParameters
  ): StreamableMethod<SendMessage202Response | SendMessageDefaultResponse>;
}

export interface GetTemplates {
  /** List all templates for given ACS channel */
  get(
    options?: GetTemplatesParameters
  ): StreamableMethod<GetTemplates200Response | GetTemplatesDefaultResponse>;
}

export interface Routes {
  /** Resource for '/messages/streams/\{id\}' has methods for the following verbs: get */
  (path: "/messages/streams/{id}", id: string): GetStream;
  /** Resource for '/messages/notifications:sendMessage' has methods for the following verbs: post */
  (path: "/messages/notifications:sendMessage"): SendMessage;
  /** Resource for '/messages/channels/\{channelId\}/templates' has methods for the following verbs: get */
  (
    path: "/messages/channels/{channelId}/templates",
    channelId: string
  ): GetTemplates;
}

export type AzureCommunicationMessagesServiceClient = Client & {
  path: Routes;
};
