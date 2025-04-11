# Release History
    
## 3.0.0-beta.1 (2025-04-11)
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
    
