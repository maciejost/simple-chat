import { Chat } from "@data/model";

export const participantsToChatID = (
  participants: Chat["participants"],
): string => {
  return `chat-${participants[0]}-${participants[1]}`;
};
