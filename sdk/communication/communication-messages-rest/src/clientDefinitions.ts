// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  StreamOperationsGetMediaParameters,
  NotificationMessagesOperationsSendParameters,
  TemplateOperationsListTemplatesParameters,
  ConversationMessagesOperationsAddParticipantsParameters,
  ConversationMessagesOperationsRemoveParticipantsParameters,
  ConversationMessagesOperationsListConversationsParameters,
  ConversationMessagesOperationsListMessagesParameters,
  ConversationMessagesOperationsSendParameters,
  ConversationMessagesOperationsAnalyzeParameters,
  ConversationManagementOperationsCreateParameters,
  ConversationManagementOperationsGetConversationParameters,
  ConversationManagementOperationsTerminateConversationParameters,
} from "./parameters.js";
import type {
  StreamOperationsGetMedia200Response,
  StreamOperationsGetMediaDefaultResponse,
  NotificationMessagesOperationsSend202Response,
  NotificationMessagesOperationsSendDefaultResponse,
  TemplateOperationsListTemplates200Response,
  TemplateOperationsListTemplatesDefaultResponse,
  ConversationMessagesOperationsAddParticipants207Response,
  ConversationMessagesOperationsAddParticipantsDefaultResponse,
  ConversationMessagesOperationsRemoveParticipants207Response,
  ConversationMessagesOperationsRemoveParticipantsDefaultResponse,
  ConversationMessagesOperationsListConversations200Response,
  ConversationMessagesOperationsListConversationsDefaultResponse,
  ConversationMessagesOperationsListMessages200Response,
  ConversationMessagesOperationsListMessagesDefaultResponse,
  ConversationMessagesOperationsSend200Response,
  ConversationMessagesOperationsSendDefaultResponse,
  ConversationMessagesOperationsAnalyze200Response,
  ConversationMessagesOperationsAnalyzeDefaultResponse,
  ConversationManagementOperationsCreate200Response,
  ConversationManagementOperationsCreate201Response,
  ConversationManagementOperationsCreateDefaultResponse,
  ConversationManagementOperationsGetConversation200Response,
  ConversationManagementOperationsGetConversationDefaultResponse,
  ConversationManagementOperationsTerminateConversation200Response,
  ConversationManagementOperationsTerminateConversationDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface StreamOperationsGetMedia {
  /** Download the Media payload from a User to Business message. */
  get(
    options?: StreamOperationsGetMediaParameters,
  ): StreamableMethod<
    StreamOperationsGetMedia200Response | StreamOperationsGetMediaDefaultResponse
  >;
}

export interface NotificationMessagesOperationsSend {
  /** Sends a notification message from Business to User. */
  post(
    options: NotificationMessagesOperationsSendParameters,
  ): StreamableMethod<
    | NotificationMessagesOperationsSend202Response
    | NotificationMessagesOperationsSendDefaultResponse
  >;
}

export interface TemplateOperationsListTemplates {
  /** List all templates for given Azure Communication Services channel */
  get(
    options?: TemplateOperationsListTemplatesParameters,
  ): StreamableMethod<
    TemplateOperationsListTemplates200Response | TemplateOperationsListTemplatesDefaultResponse
  >;
}

export interface ConversationMessagesOperationsAddParticipants {
  /** Adds participants to a specific conversation. */
  post(
    options: ConversationMessagesOperationsAddParticipantsParameters,
  ): StreamableMethod<
    | ConversationMessagesOperationsAddParticipants207Response
    | ConversationMessagesOperationsAddParticipantsDefaultResponse
  >;
}

export interface ConversationMessagesOperationsRemoveParticipants {
  /** remove a participant from a conversation */
  post(
    options: ConversationMessagesOperationsRemoveParticipantsParameters,
  ): StreamableMethod<
    | ConversationMessagesOperationsRemoveParticipants207Response
    | ConversationMessagesOperationsRemoveParticipantsDefaultResponse
  >;
}

export interface ConversationMessagesOperationsListConversations {
  /** Retrieves list of conversations. */
  get(
    options?: ConversationMessagesOperationsListConversationsParameters,
  ): StreamableMethod<
    | ConversationMessagesOperationsListConversations200Response
    | ConversationMessagesOperationsListConversationsDefaultResponse
  >;
}

export interface ConversationMessagesOperationsListMessages {
  /** Retrieves list of conversation messages. */
  get(
    options?: ConversationMessagesOperationsListMessagesParameters,
  ): StreamableMethod<
    | ConversationMessagesOperationsListMessages200Response
    | ConversationMessagesOperationsListMessagesDefaultResponse
  >;
}

export interface ConversationMessagesOperationsSend {
  /** Sends a conversation message from Business to User. */
  post(
    options: ConversationMessagesOperationsSendParameters,
  ): StreamableMethod<
    | ConversationMessagesOperationsSend200Response
    | ConversationMessagesOperationsSendDefaultResponse
  >;
}

export interface ConversationMessagesOperationsAnalyze {
  /** Get AI Analysis of a conversation. */
  post(
    options?: ConversationMessagesOperationsAnalyzeParameters,
  ): StreamableMethod<
    | ConversationMessagesOperationsAnalyze200Response
    | ConversationMessagesOperationsAnalyzeDefaultResponse
  >;
}

export interface ConversationManagementOperationsCreate {
  /** Creates a new conversation. This is only for create operation. */
  put(
    options: ConversationManagementOperationsCreateParameters,
  ): StreamableMethod<
    | ConversationManagementOperationsCreate200Response
    | ConversationManagementOperationsCreate201Response
    | ConversationManagementOperationsCreateDefaultResponse
  >;
  /** Gets the details of a specific conversation. */
  get(
    options?: ConversationManagementOperationsGetConversationParameters,
  ): StreamableMethod<
    | ConversationManagementOperationsGetConversation200Response
    | ConversationManagementOperationsGetConversationDefaultResponse
  >;
}

export interface ConversationManagementOperationsTerminateConversation {
  /** Terminates a specific conversation. */
  post(
    options?: ConversationManagementOperationsTerminateConversationParameters,
  ): StreamableMethod<
    | ConversationManagementOperationsTerminateConversation200Response
    | ConversationManagementOperationsTerminateConversationDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/messages/streams/\{id\}' has methods for the following verbs: get */
  (path: "/messages/streams/{id}", id: string): StreamOperationsGetMedia;
  /** Resource for '/messages/notifications:send' has methods for the following verbs: post */
  (path: "/messages/notifications:send"): NotificationMessagesOperationsSend;
  /** Resource for '/messages/channels/\{channelId\}/templates' has methods for the following verbs: get */
  (
    path: "/messages/channels/{channelId}/templates",
    channelId: string,
  ): TemplateOperationsListTemplates;
  /** Resource for '/messages/conversations/\{conversationId\}/participants:add' has methods for the following verbs: post */
  (
    path: "/messages/conversations/{conversationId}/participants:add",
    conversationId: string,
  ): ConversationMessagesOperationsAddParticipants;
  /** Resource for '/messages/conversations/\{conversationId\}/participants:remove' has methods for the following verbs: post */
  (
    path: "/messages/conversations/{conversationId}/participants:remove",
    conversationId: string,
  ): ConversationMessagesOperationsRemoveParticipants;
  /** Resource for '/messages/conversations' has methods for the following verbs: get */
  (path: "/messages/conversations"): ConversationMessagesOperationsListConversations;
  /** Resource for '/messages/conversations/\{conversationId\}/messages' has methods for the following verbs: get */
  (
    path: "/messages/conversations/{conversationId}/messages",
    conversationId: string,
  ): ConversationMessagesOperationsListMessages;
  /** Resource for '/messages/conversations/\{conversationId\}/messages:send' has methods for the following verbs: post */
  (
    path: "/messages/conversations/{conversationId}/messages:send",
    conversationId: string,
  ): ConversationMessagesOperationsSend;
  /** Resource for '/messages/conversations/\{conversationId\}:analyze' has methods for the following verbs: post */
  (
    path: "/messages/conversations/{conversationId}:analyze",
    conversationId: string,
  ): ConversationMessagesOperationsAnalyze;
  /** Resource for '/messages/conversations/\{conversationId\}' has methods for the following verbs: put, get */
  (
    path: "/messages/conversations/{conversationId}",
    conversationId: string,
  ): ConversationManagementOperationsCreate;
  /** Resource for '/messages/conversations/\{conversationId\}:terminate' has methods for the following verbs: post */
  (
    path: "/messages/conversations/{conversationId}:terminate",
    conversationId: string,
  ): ConversationManagementOperationsTerminateConversation;
}

export type MessagesServiceClient = Client & {
  path: Routes;
};
