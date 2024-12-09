import { User } from "../../data/model";

export const participantsToChatID = (
  participants: [User["id"], User["id"]],
): string => {
  return `chat-${participants[0]}-${participants[1]}`;
};
