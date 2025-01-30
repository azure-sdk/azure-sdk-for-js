// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type {
  NotificationContent,
  AddParticipantsRequest,
  RemoveParticipantsRequest,
  SendConversationMessageRequest,
  CreateConversationRequest,
} from "./models.js";

export interface StreamOperationsGetMediaHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface StreamOperationsGetMediaHeaderParam {
  headers?: RawHttpHeadersInput & StreamOperationsGetMediaHeaders;
}

export type StreamOperationsGetMediaParameters = StreamOperationsGetMediaHeaderParam &
  RequestParameters;

export interface NotificationMessagesOperationsSendHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface NotificationMessagesOperationsSendBodyParam {
  /** Details of the message to send. */
  body: NotificationContent;
}

export interface NotificationMessagesOperationsSendHeaderParam {
  headers?: RawHttpHeadersInput & NotificationMessagesOperationsSendHeaders;
}

export type NotificationMessagesOperationsSendParameters =
  NotificationMessagesOperationsSendHeaderParam &
    NotificationMessagesOperationsSendBodyParam &
    RequestParameters;

export interface TemplateOperationsListTemplatesHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface TemplateOperationsListTemplatesQueryParamProperties {
  /** Number of objects to return per page. */
  maxpagesize?: number;
}

export interface TemplateOperationsListTemplatesQueryParam {
  queryParameters?: TemplateOperationsListTemplatesQueryParamProperties;
}

export interface TemplateOperationsListTemplatesHeaderParam {
  headers?: RawHttpHeadersInput & TemplateOperationsListTemplatesHeaders;
}

export type TemplateOperationsListTemplatesParameters = TemplateOperationsListTemplatesQueryParam &
  TemplateOperationsListTemplatesHeaderParam &
  RequestParameters;

export interface ConversationMessagesOperationsAddParticipantHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConversationMessagesOperationsAddParticipantBodyParam {
  /** Details of the payload for adding participants to a conversation. */
  body: AddParticipantsRequest;
}

export interface ConversationMessagesOperationsAddParticipantHeaderParam {
  headers?: RawHttpHeadersInput & ConversationMessagesOperationsAddParticipantHeaders;
}

export type ConversationMessagesOperationsAddParticipantParameters =
  ConversationMessagesOperationsAddParticipantHeaderParam &
    ConversationMessagesOperationsAddParticipantBodyParam &
    RequestParameters;

export interface ConversationMessagesOperationsRemoveParticipantHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConversationMessagesOperationsRemoveParticipantBodyParam {
  /** Details of the request body for removing participants from a conversation. */
  body: RemoveParticipantsRequest;
}

export interface ConversationMessagesOperationsRemoveParticipantHeaderParam {
  headers?: RawHttpHeadersInput & ConversationMessagesOperationsRemoveParticipantHeaders;
}

export type ConversationMessagesOperationsRemoveParticipantParameters =
  ConversationMessagesOperationsRemoveParticipantHeaderParam &
    ConversationMessagesOperationsRemoveParticipantBodyParam &
    RequestParameters;

export interface ConversationMessagesOperationsListConversationsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConversationMessagesOperationsListConversationsQueryParamProperties {
  /** Number of objects to return per page. */
  maxpagesize?: number;
  /** The Initiator user ID */
  initiator?: string;
  /** The id of channel */
  channelId?: string;
}

export interface ConversationMessagesOperationsListConversationsQueryParam {
  queryParameters?: ConversationMessagesOperationsListConversationsQueryParamProperties;
}

export interface ConversationMessagesOperationsListConversationsHeaderParam {
  headers?: RawHttpHeadersInput & ConversationMessagesOperationsListConversationsHeaders;
}

export type ConversationMessagesOperationsListConversationsParameters =
  ConversationMessagesOperationsListConversationsQueryParam &
    ConversationMessagesOperationsListConversationsHeaderParam &
    RequestParameters;

export interface ConversationMessagesOperationsListMessagesHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConversationMessagesOperationsListMessagesQueryParamProperties {
  /** Number of objects to return per page. */
  maxpagesize?: number;
  /** The Initiator user ID */
  initiator?: string;
}

export interface ConversationMessagesOperationsListMessagesQueryParam {
  queryParameters?: ConversationMessagesOperationsListMessagesQueryParamProperties;
}

export interface ConversationMessagesOperationsListMessagesHeaderParam {
  headers?: RawHttpHeadersInput & ConversationMessagesOperationsListMessagesHeaders;
}

export type ConversationMessagesOperationsListMessagesParameters =
  ConversationMessagesOperationsListMessagesQueryParam &
    ConversationMessagesOperationsListMessagesHeaderParam &
    RequestParameters;

export interface ConversationMessagesOperationsSendHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConversationMessagesOperationsSendBodyParam {
  /** Details of the conversation message to send. */
  body: SendConversationMessageRequest;
}

export interface ConversationMessagesOperationsSendHeaderParam {
  headers?: RawHttpHeadersInput & ConversationMessagesOperationsSendHeaders;
}

export type ConversationMessagesOperationsSendParameters =
  ConversationMessagesOperationsSendHeaderParam &
    ConversationMessagesOperationsSendBodyParam &
    RequestParameters;

export interface ConversationMessagesOperationsAnalyzeHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConversationMessagesOperationsAnalyzeHeaderParam {
  headers?: RawHttpHeadersInput & ConversationMessagesOperationsAnalyzeHeaders;
}

export type ConversationMessagesOperationsAnalyzeParameters =
  ConversationMessagesOperationsAnalyzeHeaderParam & RequestParameters;

export interface ConversationManagementOperationsCreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConversationManagementOperationsCreateBodyParam {
  /** Details of the payload for creating a conversation. */
  body: CreateConversationRequest;
}

export interface ConversationManagementOperationsCreateHeaderParam {
  headers?: RawHttpHeadersInput & ConversationManagementOperationsCreateHeaders;
}

export type ConversationManagementOperationsCreateParameters =
  ConversationManagementOperationsCreateHeaderParam &
    ConversationManagementOperationsCreateBodyParam &
    RequestParameters;

export interface ConversationManagementOperationsGetConversationHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConversationManagementOperationsGetConversationHeaderParam {
  headers?: RawHttpHeadersInput & ConversationManagementOperationsGetConversationHeaders;
}

export type ConversationManagementOperationsGetConversationParameters =
  ConversationManagementOperationsGetConversationHeaderParam & RequestParameters;

export interface ConversationManagementOperationsDeleteConversationHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ConversationManagementOperationsDeleteConversationHeaderParam {
  headers?: RawHttpHeadersInput & ConversationManagementOperationsDeleteConversationHeaders;
}

export type ConversationManagementOperationsDeleteConversationParameters =
  ConversationManagementOperationsDeleteConversationHeaderParam & RequestParameters;
