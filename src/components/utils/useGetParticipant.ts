import { useChatContext } from "../../App";
import { User } from "../../data/model";

export const useGetParticipant = (participants: [User["id"], User["id"]]) => {
  const { loggedInUser, users } = useChatContext();

  const sender = participants.find(
    (participant) => participant !== loggedInUser.id,
  );

  return users.find((user) => user.id === sender);
};
