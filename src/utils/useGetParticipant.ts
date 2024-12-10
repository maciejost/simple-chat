import { Chat } from "@data/model";
import { useChatContext } from "src/App";

export const useGetParticipant = (participants: Chat["participants"]) => {
  const { loggedInUser, users } = useChatContext();

  const sender = participants.find(
    (participant) => participant !== loggedInUser.id,
  );

  return users.find((user) => user.id === sender);
};
