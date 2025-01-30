// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type {
  RepeatabilityResultOutput,
  SendMessageResultOutput,
  PagedMessageTemplateItemOutput,
  AddParticipantsResultOutput,
  RemoveParticipantsResultOutput,
  PagedConversationOutput,
  PagedConversationMessageItemOutput,
  SendConversationMessageResultOutput,
  GetConversationMessagesAnalysisResultOutput,
  CreateConversationResultOutput,
  ConversationOutput,
} from "./outputModels.js";

export interface StreamOperationsGetMedia200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
  /** The stream content type. */
  "content-type": "application/octet-stream";
}

/** The request has succeeded. */
export interface StreamOperationsGetMedia200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & StreamOperationsGetMedia200Headers;
}

export interface StreamOperationsGetMediaDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface StreamOperationsGetMediaDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & StreamOperationsGetMediaDefaultHeaders;
}

export interface NotificationMessagesOperationsSend202Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface NotificationMessagesOperationsSend202Response extends HttpResponse {
  status: "202";
  body: SendMessageResultOutput;
  headers: RawHttpHeaders & NotificationMessagesOperationsSend202Headers;
}

export interface NotificationMessagesOperationsSendDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface NotificationMessagesOperationsSendDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & NotificationMessagesOperationsSendDefaultHeaders;
}

export interface TemplateOperationsListTemplates200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface TemplateOperationsListTemplates200Response extends HttpResponse {
  status: "200";
  body: PagedMessageTemplateItemOutput;
  headers: RawHttpHeaders & TemplateOperationsListTemplates200Headers;
}

export interface TemplateOperationsListTemplatesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TemplateOperationsListTemplatesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TemplateOperationsListTemplatesDefaultHeaders;
}

export interface ConversationMessagesOperationsAddParticipant207Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** Successful */
export interface ConversationMessagesOperationsAddParticipant207Response extends HttpResponse {
  status: "207";
  body: AddParticipantsResultOutput;
  headers: RawHttpHeaders & ConversationMessagesOperationsAddParticipant207Headers;
}

export interface ConversationMessagesOperationsAddParticipantDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConversationMessagesOperationsAddParticipantDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConversationMessagesOperationsAddParticipantDefaultHeaders;
}

export interface ConversationMessagesOperationsRemoveParticipant207Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** Successful */
export interface ConversationMessagesOperationsRemoveParticipant207Response extends HttpResponse {
  status: "207";
  body: RemoveParticipantsResultOutput;
  headers: RawHttpHeaders & ConversationMessagesOperationsRemoveParticipant207Headers;
}

export interface ConversationMessagesOperationsRemoveParticipantDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConversationMessagesOperationsRemoveParticipantDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConversationMessagesOperationsRemoveParticipantDefaultHeaders;
}

export interface ConversationMessagesOperationsListConversations200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ConversationMessagesOperationsListConversations200Response extends HttpResponse {
  status: "200";
  body: PagedConversationOutput;
  headers: RawHttpHeaders & ConversationMessagesOperationsListConversations200Headers;
}

export interface ConversationMessagesOperationsListConversationsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConversationMessagesOperationsListConversationsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConversationMessagesOperationsListConversationsDefaultHeaders;
}

export interface ConversationMessagesOperationsListMessages200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ConversationMessagesOperationsListMessages200Response extends HttpResponse {
  status: "200";
  body: PagedConversationMessageItemOutput;
  headers: RawHttpHeaders & ConversationMessagesOperationsListMessages200Headers;
}

export interface ConversationMessagesOperationsListMessagesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConversationMessagesOperationsListMessagesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConversationMessagesOperationsListMessagesDefaultHeaders;
}

export interface ConversationMessagesOperationsSend200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ConversationMessagesOperationsSend200Response extends HttpResponse {
  status: "200";
  body: SendConversationMessageResultOutput;
  headers: RawHttpHeaders & ConversationMessagesOperationsSend200Headers;
}

export interface ConversationMessagesOperationsSendDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConversationMessagesOperationsSendDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConversationMessagesOperationsSendDefaultHeaders;
}

export interface ConversationMessagesOperationsAnalyze200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ConversationMessagesOperationsAnalyze200Response extends HttpResponse {
  status: "200";
  body: GetConversationMessagesAnalysisResultOutput;
  headers: RawHttpHeaders & ConversationMessagesOperationsAnalyze200Headers;
}

export interface ConversationMessagesOperationsAnalyzeDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConversationMessagesOperationsAnalyzeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConversationMessagesOperationsAnalyzeDefaultHeaders;
}

export interface ConversationManagementOperationsCreate201Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ConversationManagementOperationsCreate201Response extends HttpResponse {
  status: "201";
  body: CreateConversationResultOutput;
  headers: RawHttpHeaders & ConversationManagementOperationsCreate201Headers;
}

export interface ConversationManagementOperationsCreateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConversationManagementOperationsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConversationManagementOperationsCreateDefaultHeaders;
}

export interface ConversationManagementOperationsGetConversation200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ConversationManagementOperationsGetConversation200Response extends HttpResponse {
  status: "200";
  body: ConversationOutput;
  headers: RawHttpHeaders & ConversationManagementOperationsGetConversation200Headers;
}

export interface ConversationManagementOperationsGetConversationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConversationManagementOperationsGetConversationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConversationManagementOperationsGetConversationDefaultHeaders;
}

export interface ConversationManagementOperationsDeleteConversation204Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ConversationManagementOperationsDeleteConversation204Response
  extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & ConversationManagementOperationsDeleteConversation204Headers;
}

export interface ConversationManagementOperationsDeleteConversationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ConversationManagementOperationsDeleteConversationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ConversationManagementOperationsDeleteConversationDefaultHeaders;
}
