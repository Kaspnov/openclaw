import type { WebInboundMessage } from "./types.js";

export type CanonicalWebInboundMessageFields = Pick<
  WebInboundMessage,
  | "event"
  | "payload"
  | "platform"
  | "from"
  | "conversationId"
  | "accountId"
  | "accessControlPassed"
  | "chatType"
  | "quote"
  | "group"
  | "wasMentioned"
>;

export function withDeprecatedWebInboundMessageFlatAliases<
  T extends CanonicalWebInboundMessageFields,
>(msg: T): T & WebInboundMessage {
  // Keep the shipped callback shape alive while nested contexts remain canonical.
  return Object.assign(msg, {
    id: msg.event.id,
    to: msg.platform.recipientJid,
    body: msg.payload.body,
    pushName: msg.platform.pushName,
    timestamp: msg.event.timestamp,
    chatId: msg.platform.chatJid,
    sender: msg.platform.sender,
    senderJid: msg.platform.senderJid,
    senderE164: msg.platform.senderE164,
    senderName: msg.platform.senderName,
    replyTo: msg.quote?.context,
    replyToId: msg.quote?.id,
    replyToBody: msg.quote?.body,
    replyToSender: msg.quote?.context?.sender?.label ?? msg.quote?.sender?.displayName,
    replyToSenderJid: msg.quote?.context?.sender?.jid ?? msg.quote?.sender?.jid,
    replyToSenderE164: msg.quote?.context?.sender?.e164 ?? msg.quote?.sender?.e164,
    groupSubject: msg.group?.subject,
    groupParticipants: msg.group?.participants,
    mentions: msg.group?.mentions?.jids,
    mentionedJids: msg.group?.mentions?.jids,
    self: msg.platform.self,
    selfJid: msg.platform.selfJid,
    selfLid: msg.platform.selfLid,
    selfE164: msg.platform.selfE164,
    fromMe: msg.platform.fromMe,
    location: msg.payload.location,
    sendComposing: msg.platform.sendComposing,
    reply: msg.platform.reply,
    sendMedia: msg.platform.sendMedia,
    mediaPath: msg.payload.media?.path,
    mediaType: msg.payload.media?.type,
    mediaFileName: msg.payload.media?.fileName,
    mediaUrl: msg.payload.media?.url,
    untrustedStructuredContext: msg.payload.untrustedStructuredContext,
    isBatched: msg.event.isBatched,
  });
}
