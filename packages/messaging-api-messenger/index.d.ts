declare module 'messaging-api-messenger' {
  type SendMessageSucessResponse = {
    recipient_id: string;
    message_id: string;
  };

  type UserID = string;

  type RecipientWithID = {
    id: UserID;
  };

  type RecipientWithPhoneNumber = {
    phone_number: string;
    name?: Object;
  };

  type Recipient = RecipientWithID | RecipientWithPhoneNumber;

  type Message = {
    text?: string;
    attachment?: Attachment;
    quick_replies?: Array<QuickReply>;
  };

  type QuickReply = {
    content_type: 'text' | 'location';
    title?: string;
    payload?: string;
    image_url?: string;
  };

  type Attachment = {
    type: string;
    payload: AttachmentPayload;
  };

  type AttachmentPayload = {
    url?: string;
    is_reusable?: boolean;
    attachment_id?: string;
  };

  type SendOption = {
    messaging_type?: MessagingType;
    tag?: MessageTag;
    quick_replies?: Array<QuickReply>;
    access_token?: string;
  };

  type MessagingType =
    | 'RESPONSE'
    | 'UPDATE'
    | 'MESSAGE_TAG'
    | 'NON_PROMOTIONAL_SUBSCRIPTION';

  type MessageTag =
    | 'PAIRING_UPDATE'
    | 'APPLICATION_UPDATE'
    | 'ACCOUNT_UPDATE'
    | 'PAYMENT_UPDATE'
    | 'PERSONAL_FINANCE_UPDATE'
    | 'SHIPPING_UPDATE'
    | 'RESERVATION_UPDATE'
    | 'ISSUE_RESOLUTION'
    | 'APPOINTMENT_UPDATE'
    | 'GAME_EVENT'
    | 'TRANSPORTATION_UPDATE'
    | 'FEATURE_FUNCTIONALITY_UPDATE'
    | 'TICKET_UPDATE';

  type TemplateButton = {
    type: string;
    title: string;
    url?: string;
    payload?: string;
    webview_height_ratio?: 'compact' | 'tall' | 'full';
  };

  export class MessengerClient {
    sendMessage(
      idOrRecipient: UserID | Recipient,
      message: Message,
      options?: SendOption,
    ): Promise<SendMessageSucessResponse>;

    sendTemplate(
      recipient: UserID | Recipient,
      payload: AttachmentPayload,
      options?: SendOption,
    ): Promise<SendMessageSucessResponse>;

    static connect(
      accessTokenOrConfig: string,
      version?: string,
    ): MessengerClient;
  }
}
