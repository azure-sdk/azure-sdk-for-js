## 1.0.0-beta.2 (2024-09-12)
    
### Features Added

  - Added Interface MessagesServiceClientOptions
  - Added Type Alias CommunicationMessageKind
  - Added Type Alias CommunicationMessagesChannelOutput
  - Added Type Alias MessageTemplateBindingsKind
  - Added Type Alias MessageTemplateStatusOutput
  - Added Type Alias MessageTemplateValueKind
  - Added Type Alias WhatsAppMessageButtonSubType

### Breaking Changes

  - Operation Send.post has a new signature
  - Interface GetMedia200Headers has a new required parameter content-type
  - Parameter body of interface SendBodyParam is now required
  - Type of parameter kind of interface MessageTemplateBindingsParent is changed from string to MessageTemplateBindingsKind
  - Type of parameter kind of interface MessageTemplateItemOutputParent is changed from string to CommunicationMessagesChannelOutput
  - Type of parameter status of interface MessageTemplateItemOutputParent is changed from string to MessageTemplateStatusOutput
  - Type of parameter kind of interface MessageTemplateValueParent is changed from string to MessageTemplateValueKind
  - Type of parameter kind of interface NotificationContentParent is changed from string to CommunicationMessageKind
  - Type of parameter subType of interface WhatsAppMessageTemplateBindingsButton is changed from string to WhatsAppMessageButtonSubType
    
