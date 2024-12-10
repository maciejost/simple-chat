import { useState } from "react";

import { participantsToChatID } from "@utils/participantsToChatID";
import { useChatContext } from "src/App";

export const MessageInput = () => {
  const [message, setMessage] = useState("");

  const { currentChat, setChats, loggedInUser } = useChatContext();
  const currentChatId = participantsToChatID(currentChat);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.length) return;

    setChats((prevChats) => {
      const chatIndex = prevChats.findIndex(
        (chat) => chat.id === currentChatId,
      );

      if (chatIndex === -1) return prevChats;

      // The logic here is messy, should ideally be a way cleaner POST/emitting a socket event to the server.
      const prevChat = prevChats[chatIndex];
      prevChat.messages.push({
        message,
        sentBy: loggedInUser.id,
        sentAt: new Date(),
      });

      return [
        ...prevChats.slice(0, chatIndex),
        prevChat,
        ...prevChats.slice(chatIndex + 1),
      ];
    });

    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex items-center justify-end gap-24 text-lg p-24"
    >
      <input
        className="w-full px-16 transition-all py-8 rounded-sm focus:border-2  border-[1px]  border-gray-600 hover:border-2 focus:border-black "
        name="message"
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder="Aa"
      />

      {!!message.length && (
        <button
          className="rounded-4xl bg-gray-800 px-20 py-10 text-white cursor-pointer hover:scale-107 transition-all"
          type="submit"
        >
          Send
        </button>
      )}
    </form>
  );
};
