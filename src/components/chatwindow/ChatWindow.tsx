import { useEffect, useReducer, useRef } from "react";
import { useChatContext } from "../../App";
import { participantsToChatID } from "../utils/participantsToChatID";
import { ChatBubble, Header, MessageInput } from "./components";

export const ChatWindow = () => {
  const { currentChat, chats } = useChatContext();
  const currentChatObject = chats.find(
    (chat) => chat.id === participantsToChatID(currentChat),
  );

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [currentChatObject?.messages.length]);

  if (!currentChatObject) return null;

  return (
    <section className=" justify-between flex flex-col h-screen border-l-1 border-gray-300 overflow-hidden">
      <Header />
      <div
        className="flex pt-24 flex-col gap-16 mb-auto px-24 overflow-auto"
        ref={chatRef}
      >
        {currentChatObject.messages.map((chatMessage) => (
          <ChatBubble
            key={chatMessage.sentAt.toString()}
            chatMessage={chatMessage}
          />
        ))}
      </div>
      <MessageInput />
    </section>
  );
};
