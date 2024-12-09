import { User } from "../../data/model";

export const participantsToChatID = (
  participants: [User["id"], User["id"]],
): string => {
  return `chat-${participants[1]}-${participants[0]}`;
};
