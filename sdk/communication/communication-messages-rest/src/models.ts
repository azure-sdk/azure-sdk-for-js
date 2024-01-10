// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Details of the message to send. */
export interface NotificationContentParent {
  /** The Channel Registration ID for the Business Identifier. */
  channelRegistrationId: string;
  /** The native external platform user identifiers of the recipient. */
  to: string[];
  kind: string;
}

/** Details of the message to send. */
export type NotificationContent =
  | TextNotificationContent
  | MediaNotificationContent
  | TemplateNotificationContent;
