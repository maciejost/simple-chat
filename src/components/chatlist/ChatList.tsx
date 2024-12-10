import { useChatContext } from "src/App";
import { FriendCard } from "./components";

export const ChatList = () => {
  const { chats } = useChatContext();

  // The chats should ideally be sorted by last message, with the most recent at the top.
  // Right now the order is set on the first render, and doesn't change after we send a new message.
  return (
    <section className="overflow-auto">
      {chats.map((chat) => (
        <FriendCard key={chat.id} chat={chat} />
      ))}
    </section>
  );
};
