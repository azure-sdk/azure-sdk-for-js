// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ErrorModel } from "@azure-rest/core-client";

/** Result of the send message operation. */
export interface SendMessageResultOutput {
  /** Receipts of the send message operation. */
  receipts: Array<MessageReceiptOutput>;
}

/** Receipt of the sending one message. */
export interface MessageReceiptOutput {
  /** The message id. */
  messageId: string;
  /** The native external platform user identifier of the recipient. */
  to: string;
}

/** Paged collection of MessageTemplateItem items */
export interface PagedMessageTemplateItemOutput {
  /** The MessageTemplateItem items on this page */
  value: Array<MessageTemplateItemOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** The message template as returned from the service. */
export interface MessageTemplateItemOutputParent {
  /** The template's name. */
  readonly name: string;
  /** The template's language, in the ISO 639 format, consist of a two-letter language code followed by an optional two-letter country code, e.g., 'en' or 'en_US'. */
  language: string;
  /**
   * The aggregated template status.
   *
   * Possible values: "approved", "rejected", "pending", "paused"
   */
  status: MessageTemplateStatusOutput;
  kind: CommunicationMessagesChannelOutput;
}

/** The WhatsApp-specific template response contract */
export interface WhatsAppMessageTemplateItemOutput extends MessageTemplateItemOutputParent {
  /** WhatsApp platform's template content. This is the payload returned from WhatsApp API. */
  content?: any;
  /** Message template response type is whatsApp. */
  kind: "whatsApp";
}

/** Advanced Messaging conversation participant. */
export interface ParticipantOutputParent {
  /** Participant Identifier. */
  readonly id: string;
  /** Participant display name. */
  displayName?: string;
  kind: ParticipantKindOutput;
}

/** Internal conversation participant. */
export interface InternalParticipantOutput extends ParticipantOutputParent {
  /** Participant type is internal. */
  kind: "internal";
  /** The internal platform identifiers for the participant. */
  contact: ContactOutput;
}

/** Details of an external platform contact. */
export interface ContactOutputParent {
  /** External platform identifier. */
  id: string;
  kind: MessagePlatformKindOutput;
}

/** Communication Contact. */
export interface CommunicationContactOutput extends ContactOutputParent {
  /** Contact type is communication. */
  kind: "communication";
}

/** Bot Contact. */
export interface BotContactOutput extends ContactOutputParent {
  /** Contact type is bot. */
  kind: "bot";
  /** Bot App Id of the Bot Contact. */
  botAppId: string;
}

/** WhatsApp Contact. */
export interface WhatsAppContactOutput extends ContactOutputParent {
  /** Contact type is whatsApp. */
  kind: "whatsApp";
}

/** External conversation participant. */
export interface ExternalParticipantOutput extends ParticipantOutputParent {
  /** Participant type is external. */
  kind: "External";
  /** List of external platform identifiers for the participant. */
  contacts: Array<ContactOutput>;
}

/** Response for the add participants operation. */
export interface AddParticipantsResultOutput {
  /** List of Ids with Errors if failed to be added */
  invalidParticipants: Array<ParticipantsResultOutput>;
}

/** Response for the remove participants operation. */
export interface ParticipantsResultOutput {
  /** Participant User Id. */
  id: string;
  /** Error of the participant operation. */
  error?: ErrorModel;
}

/** Response for the remove participants operation. */
export interface RemoveParticipantsResultOutput {
  /** List of Ids with Errors if failed to be added */
  invalidParticipants: Array<ParticipantsResultOutput>;
}

/** Paged collection of Conversation items */
export interface PagedConversationOutput {
  /** The Conversation items on this page */
  value: Array<ConversationOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** A conversation. */
export interface ConversationOutput {
  /** The conversation ID. */
  readonly conversationId: string;
  /** The conversation topic. */
  topic?: string;
  /** List of delivery channel IDs. */
  deliveryChannelIds?: string[];
  /**
   * Outbound delivery strategy for the conversation.
   *
   * Possible values: "internalOnly", "allParticipants"
   */
  outboundDeliveryStrategy?: OutboundDeliveryStrategyKindOutput;
  /** List of participants involved in the conversation. */
  participants?: Array<ParticipantOutput>;
}

/** Paged collection of ConversationMessageItem items */
export interface PagedConversationMessageItemOutput {
  /** The ConversationMessageItem items on this page */
  value: Array<ConversationMessageItemOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** The conversation message as returned from the service. */
export interface ConversationMessageItemOutput {
  /** Message sequence ID. */
  sequenceId?: number;
  /** Payload of a threaded conversation message. */
  message: MessageOutput;
  /** The display name of the message sender. */
  senderDisplayName?: string;
  /** The communication identifier of the message sender. */
  senderCommunicationIdentifier: string;
  /** Timestamp when the message is sent. */
  createdOn: string;
}

/** Details of a message. */
export interface MessageOutput {
  /** Content of the message. */
  content: string;
}

/** Result of the send conversation message operation. */
export interface SendConversationMessageResultOutput {
  /** A server-generated Advanced Messaging conversation message id. */
  messageId: string;
}

/** Result of the get conversation messages AI Analysis operation. */
export interface GetConversationMessagesAnalysisResultOutput {
  /** The AI summary of the conversation messages. */
  summary: string;
}

/** Response for the create conversation operation. */
export interface CreateConversationResultOutput {
  /** Server-generated conversation ID. */
  id: string;
}

/** The message template as returned from the service. */
export type MessageTemplateItemOutput =
  | MessageTemplateItemOutputParent
  | WhatsAppMessageTemplateItemOutput;
/** Advanced Messaging conversation participant. */
export type ParticipantOutput =
  | ParticipantOutputParent
  | InternalParticipantOutput
  | ExternalParticipantOutput;
/** Details of an external platform contact. */
export type ContactOutput =
  | ContactOutputParent
  | CommunicationContactOutput
  | BotContactOutput
  | WhatsAppContactOutput;
/** Alias for RepeatabilityResultOutput */
export type RepeatabilityResultOutput = "accepted" | "rejected";
/** Alias for MessageTemplateStatusOutput */
export type MessageTemplateStatusOutput = string;
/** Alias for CommunicationMessagesChannelOutput */
export type CommunicationMessagesChannelOutput = string;
/** Alias for ParticipantKindOutput */
export type ParticipantKindOutput = string;
/** Alias for MessagePlatformKindOutput */
export type MessagePlatformKindOutput = string;
/** Alias for OutboundDeliveryStrategyKindOutput */
export type OutboundDeliveryStrategyKindOutput = string;
