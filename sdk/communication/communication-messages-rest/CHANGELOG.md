# Release History
    
## 3.0.0-beta.1 (2025-04-16)
Compared with version 2.0.0
    
### Features Added

  - Added operation in Routes for path: "/messages/conversations/{conversationId}/participants:add"
  - Added operation in Routes for path: "/messages/conversations/{conversationId}/participants:remove"
  - Added operation in Routes for path: "/messages/conversations"
  - Added operation in Routes for path: "/messages/conversations/{conversationId}/messages"
  - Added operation in Routes for path: "/messages/conversations/{conversationId}/messages:send"
  - Added operation in Routes for path: "/messages/conversations/{conversationId}:analyze"
  - Added operation in Routes for path: "/messages/conversations/{conversationId}"
  - Added operation in Routes for path: "/messages/conversations/{conversationId}:terminate"
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Interface ListTemplatesQueryParamProperties has a new optional parameter maxPageSize
  - Added function overload "export function isUnexpected(response: AddParticipants207Response | AddParticipantsDefaultResponse): response is AddParticipantsDefaultResponse;"
  - Added function overload "export function isUnexpected(response: RemoveParticipants207Response | RemoveParticipantsDefaultResponse): response is RemoveParticipantsDefaultResponse;"
  - Added function overload "export function isUnexpected(response: ListConversations200Response | ListConversationsDefaultResponse): response is ListConversationsDefaultResponse;"
  - Added function overload "export function isUnexpected(response: CreateConversation201Response | CreateConversationDefaultResponse): response is CreateConversationDefaultResponse;"
  - Added function overload "export function isUnexpected(response: ListMessages200Response | ListMessagesDefaultResponse): response is ListMessagesDefaultResponse;"
  - Added function overload "export function isUnexpected(response: SendMessage200Response | SendMessageDefaultResponse): response is SendMessageDefaultResponse;"
  - Added function overload "export function isUnexpected(response: AnalyzeConversation200Response | AnalyzeConversationDefaultResponse): response is AnalyzeConversationDefaultResponse;"
  - Added function overload "export function isUnexpected(response: GetConversation200Response | GetConversationDefaultResponse): response is GetConversationDefaultResponse;"
  - Added function overload "export function isUnexpected(response: DeleteConversation204Response | DeleteConversationDefaultResponse): response is DeleteConversationDefaultResponse;"
  - Added function overload "export function isUnexpected(response: TerminateConversation200Response | TerminateConversationDefaultResponse): response is TerminateConversationDefaultResponse;"

### Breaking Changes

  - Interface ListTemplatesQueryParamProperties no longer has parameter maxpagesize
  - Removed function overload "function createClient(connectionString: string, options?: ClientOptions): MessagesServiceClient;"
  - Removed Type Alias PagedMessageTemplateItemOutput
    
## 2.2.0-beta.1 (2025-04-14)

### Features Added

- Add Unified Messaging.

## 2.1.0-beta.1 (2025-02-11)

### Features Added

- Added Interactive Message.
- Added Reaction Message.
- Added Sticker Message.

## 2.0.0 (2024-10-23)

### Features Added

- Added ImageNotificationContent to send image messgae.
- Added DocumentNotificationContent to send document message.
- Added VideoNotificationContent to send video message.
- Added AudioNotificationContent to  send audio message.
- Deprecated MediaNotificationContent.

### Breaking Changes

- MediaNotificationContent interface kind field is update with value "image_v0" from "image".

## 1.0.1 (2024-03-07)

Using MessagesServiceClient:

- Send WhatsApp messages.
- Get Template List.
- Download media file from WhatsApp server for incoming media message.

### Other Changes

- Fixed CI pipeline to publish MS doc.

## 1.0.0 (2024-02-29)

### Features Added

This is the initial release of the @azure-rest version of Azure Communication Messages Services.

Using MessagesServiceClient:

- Send WhatsApp messages.
- Get Template List.
- Download media file from WhatsApp server for incoming media message.
