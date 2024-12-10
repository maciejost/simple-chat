import { useEffect, useRef } from "react";

import { useChatContext } from "src/App";
import { participantsToChatID } from "@utils/participantsToChatID";
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
      {/* This should be marked as a aria-live region, so that we can announce new messages to screen reader users.
          The messages are also rendered from oldest to newest, meaning that screen reader users will hear the oldest messages first.
        */}
      <div
        className="flex pt-24 flex-col gap-16 mb-auto px-24 overflow-auto"
        ref={chatRef}
      >
        {currentChatObject.messages.map((chatMessage) => (
          <ChatBubble
            key={`${currentChatObject.id}-${chatMessage.sentAt.toLocaleString()}-${chatMessage.sentBy}`}
            chatMessage={chatMessage}
          />
        ))}
      </div>
      <MessageInput />
    </section>
  );
};
