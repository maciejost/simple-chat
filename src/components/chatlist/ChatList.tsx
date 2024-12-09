import { useChatContext } from "../../App";
import { FriendCard } from "./components";

export const ChatList = () => {
  const { chats } = useChatContext();

  return (
    <section className="overflow-auto">
      {chats.map((chat) => (
        <FriendCard key={chat.id} chat={chat} />
      ))}
    </section>
  );
};
